(ns gamebase.canvas-control
  (:require [gamebase.events :as events]
            [gamebase-ecs.core :as ecs]
            [gamebase.projection :as proj]))

(declare make-proj-conf -get-state setup-drag-event readjust)

;; TODO. Moze prosciej koncepcyjnie byloby, gdyby canvas-control
;; sam *tworzyl* swoj canvas.
;; Wtedy nazwalibysmy to nie canvas-control, a cos w rodzaju enhanced-canvas.
;; Tylko trudniejszy bylby kontakt z layoutem, ale wlasciwie i tak layouty
;; trzeba troche przemyslec na nowo (z tym ich dziwacznym mk-html i w ogole).
;; NOTE. Chyba nie tak trudno zrobic to elegancko - mozna utworzyc canvas
;; "w powietrzu" (createElement), tylko nie wiem, czy wtedy getElementById go znajdzie,
;; zanim bedzie wpiety do DOM.  Ale to tez mozna przeimplementowac nasze (get-canvas),
;; zreszta bardzo sensownie. Trzymajmy sobie po prostu ten canvas w naszym atomie.
;; TODO. zmienic nazwy :world-width, :world-height na :content-width, :content-height,
;; i tak samo jeszcze get-canvas-to-world-converters odpowiednio.
;; A WLASCIWIE to co do get-canvas-to-world-converters to raczej trzeba zobaczyc,
;; do czego to jest uzywane i moze pomyslec to lepiej. A przynajmniej zrobic
;; po prostu funkcje (canvas-to-content), ktora po prostu przelicza,
;; a nie zwracac konwertery. Chyba ze wydajnosciowo to slabe by bylo.

nil
;;;;
;;
;; When created, using (create), like this:
;;
;;   (canvas-control/create
;;    {:world-width ...,
;;     :world-height ...,
;;     :canvas ...})
;;
;; it returns an object that you will have to pass in subsequent calls.
;; NOTE. That object will contain an atom, so it will not be "serializable".
;;
;; The module will also:
;;   - update the atom (obviously),
;;   - operate on the 2d context of the given canvas,
;;   - handle pointer events on the canvas (to implement panning by dragging).
;;
;;;;

nil
;; Public API ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn create [config]
  ;; (reset! conf config)
  (let [state-atom (atom {})
        state-kvs [:state]
        config' (assoc config
                       :state-atom state-atom
                       :state-kvs state-kvs)]
    (swap! state-atom assoc-in state-kvs
           {:scale-factor 2
            :translation-x 100.0
            :translation-y 300.0})
    (setup-drag-event config')
    ;; we return the augmented config as the canvas-control object
    config'))

;; (defn get-canvas-to-world-converters [canvas-control-object]
;;   (when-let [{:keys [state-atom state-kvs]} canvas-control-object]
;;     (let [{:keys [scale-factor translation-x translation-y]}
;;           ,    (get-in @state-atom state-kvs)
;;           ;; IMPORTANT!!! We must make translations integers, otherwise
;;           ;; there will be unwanted artifacts (lines between tiles).
;;           t-x (int translation-x)
;;           t-y (int translation-y)]
;;       [#(int (/ (- % t-x) scale-factor))
;;        #(int (/ (- % t-y) (- scale-factor)))])))


(defn canvas-to-content [canvas-control-object canvas-x canvas-y]
  (when-let [{:keys [state-atom state-kvs]} canvas-control-object]
    (let [{:keys [scale-factor translation-x translation-y]}
          ,    (get-in @state-atom state-kvs)
          ;; IMPORTANT!!! We must make translations integers, otherwise
          ;; there will be unwanted artifacts (lines between tiles).
          t-x (int translation-x)
          t-y (int translation-y)]
      [(int (/ (- canvas-x t-x) scale-factor))
       (int (/ (- canvas-y t-y) (- scale-factor)))])))

(defn drawing-prolog [canvas-control-object]
   (let [{:keys [state-atom state-kvs canvas ;;canvas-context
                 ]} canvas-control-object

         canvas-context (.getContext canvas "2d")
         ]
      (let [{:keys [scale-factor translation-x translation-y]}
            ,    (get-in @state-atom state-kvs)
            ;; IMPORTANT!!! We must make translations integers, otherwise
            ;; there will be unwanted artifacts (lines between tiles).
            t-x (int translation-x)
            t-y (int translation-y)
            wc (.-width canvas)
            hc (.-height canvas)]
        (set! (.-imageSmoothingEnabled canvas-context) false)

        (do ;; clear background
          (set! (.-fillStyle canvas-context) "grey")
          (.fillRect canvas-context 0 0 wc hc))

        (.save canvas-context)

        (.translate canvas-context t-x t-y)
        (.scale canvas-context scale-factor scale-factor)
        ;; flip vertical - this allowws the client draw function
        ;; to use the standard coordinate system (y points upwards)
        (.scale canvas-context 1 -1)

        ;; We keep use the integer translations here as well
        (let [rev-x #(/ (- % t-x) scale-factor)
              rev-y #(/ (- % t-y) (- scale-factor))]

          {:min-x (int (rev-x 0))
           :max-x (int (rev-x wc))
           :min-y (int (rev-y hc)) ;; because of negative y scale, hc is min and 0 is max
           :max-y (int (rev-y 0))
           :mouse-x 0 ;; (int (rev-x js/mouseX)) TODO
           :mouse-y 0 ;; (int (rev-y js/mouseY)) TODO
           :canvas-context canvas-context}))))

(defn drawing-epilog [{:keys [canvas]}]
  (.restore (.getContext canvas "2d")))

(defn get-scale [canvas-control-object]
  (when-let [{:keys [scale-factor]} (-get-state canvas-control-object)]
    scale-factor))

(defn get-canvas-size [canvas-control-object]
  (when-let [{:keys [canvas-width canvas-height]} (-get-state canvas-control-object)]
    [canvas-width canvas-height]))

(defn set-scale
  "set scale in such a way that the center point of the viewport
  keeps the same world point"

  [canvas-control-object scale-factor]

  (let [{:keys [state-atom state-kvs]} canvas-control-object
        proj-conf (make-proj-conf canvas-control-object)
        proj-conf' (assoc proj-conf
                          :k scale-factor
                          :tx 0
                          :ty 0)
        ;; world point we want to keep at view center
        Wc (proj/world-point proj-conf (proj/Vc proj-conf))
        ;; view coords of the point after just scaling
        [x y] (proj/view-coords proj-conf' Wc)
        ;; view coords of view center (after scaling)
        [x' y'] (proj/view-coords proj-conf' (proj/Vc proj-conf'))
        ;; translation we have to do to match the above
        tr-x (- x' x)
        tr-y (- y' y)]
    (swap! state-atom update-in state-kvs
           (fn [s] (assoc s
                         :scale-factor scale-factor
                         :translation-x tr-x
                         :translation-y tr-y))))
  (readjust)
  nil)

(defn center-on
  "set translation in such a way that the center point
   of the viewport matches given world point"

  [canvas-control-object [_ world-x world-y :as world-p]]

  (let [world-p' (proj/world-point [world-x (- world-y)])
        {:keys [state-atom state-kvs]} canvas-control-object
        proj-conf (make-proj-conf canvas-control-object)
        proj-conf0 (assoc proj-conf
                          :tx 0
                          :ty 0)
        ;; view coords of the given world point
        [xw yw] (proj/view-coords proj-conf0 world-p')
        ;; view coords of view center
        [xc yc] (proj/view-coords proj-conf0 (proj/Vc proj-conf0))
        ;; translation we have to do to match the above
        tr-x (- xc xw)
        tr-y (- yc yw)]
    (swap! state-atom update-in state-kvs
           (fn [s] (assoc s
                         :translation-x tr-x
                         :translation-y tr-y))))
  nil)

;; private ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(def MARGIN 100)

(defn- make-proj-conf [canvas-control-object]
  (let [{:keys [state-atom state-kvs canvas]} canvas-control-object
        {:keys [scale-factor
                translation-x
                translation-y]} (get-in @state-atom state-kvs)
        wc (.-width canvas)
        hc (.-height canvas)]

    (swap! state-atom update-in state-kvs
           (fn [state]
             (assoc state
                    :canvas-width wc
                    :canvas-height hc)))

    (proj/projection-config
     scale-factor
     translation-x
     translation-y
     wc
     hc)))

(defn- -get-state [canvas-control-object]
  (when-let [{:keys [state-atom state-kvs]} canvas-control-object]
    (get-in @state-atom state-kvs)))

(defn- readjust
  "fix translation after external change
  (such as canvas resize by layout or game state reloaded)
  so that some of the world is visible at least"
  [canvas-control-object]

  (let [{:keys [state-atom state-kvs content-width content-height]} canvas-control-object
        {:keys [translation-x translation-y] :as state} (get-in @state-atom state-kvs)
        {:keys [wc hc] :as proj-conf} (make-proj-conf canvas-control-object)

        wZ (proj/world-point [0 0])
        ww content-width
        wh content-height
        wM (proj/world-point [ww (- wh)])

        [xZ yZ] (proj/view-coords proj-conf wZ)
        [xM yM] (proj/view-coords proj-conf wM)]

    (when (> xZ (- wc MARGIN))
      (swap! state-atom update-in state-kvs
             (fn [state]
               (assoc state :translation-x (- (:translation-x state) (- xZ wc) MARGIN)))))

    (when (< xM MARGIN)
      (swap! state-atom update-in state-kvs
             (fn [state]
               (assoc state :translation-x (+ (:translation-x state) (- MARGIN xM))))))

    (when (> yM (- hc MARGIN))
      (swap! state-atom update-in state-kvs
             (fn [state]
               (assoc state :translation-y (- (:translation-y state) (+ yM MARGIN (- hc))))))

      )

    (when (< yZ MARGIN)
      (swap! state-atom update-in state-kvs
             (fn [state]
               (assoc state :translation-y (+ (:translation-y state) (- MARGIN yZ))))))))

(defn- setup-drag-event [canvas-control-object]
  (let [{:keys [canvas state-atom state-kvs]} canvas-control-object

        drag-state (atom nil)

        handle-mouse-down
        (fn [e]
          (when-not @drag-state
            (reset! drag-state [(.-clientX e) (.-clientY e)])
            (.setPointerCapture canvas (.-pointerId e))))

        handle-mouse-move
        (fn [e]
          (when-let [[prev-x prev-y] @drag-state]
            (let [x (.-clientX e)
                  y (.-clientY e)
                  dx (- x prev-x)
                  dy (- y prev-y)]
              (reset! drag-state [x y])
              (swap! state-atom update-in state-kvs
                     (fn [{:keys [translation-x translation-y] :as s}]
                       (assoc s
                              :translation-x (+ translation-x dx)
                              :translation-y (+ translation-y dy))))
              (readjust canvas-control-object))))

        handle-mouse-up
        (fn [e]
          (when @drag-state
            (reset! drag-state nil)))]

    (.addEventListener canvas "pointerdown" handle-mouse-down)
    (.addEventListener canvas "pointermove" handle-mouse-move)
    (doseq [event ["pointerup" "pointerout" "pointerleave"]]
      (.addEventListener canvas event handle-mouse-up))))
