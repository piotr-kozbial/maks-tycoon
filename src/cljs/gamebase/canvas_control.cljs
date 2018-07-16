(ns gamebase.canvas-control
  (:require
   [gamebase.events :as events]
   [gamebase.ecs :as ecs]
   [gamebase.projection :as proj]
   [gamebase.debug :as debug]))

(defonce conf (atom nil))


(defn debug-draw-coord-system []

  ;; x axis
  (js/stroke 255 0 0)
  (js/strokeWeight 4)
  (js/line -32 0  32 0)
  (js/line 32 0 28 5)
  (js/line 32 0 28 -5)

  ;; y axis
  (js/stroke 0 0 255)
  (js/strokeWeight 4)
  (js/line 0 -32 0 32)
  (js/line 0 32 -5 28)
  (js/line 0 32 5 28)

  (js/stroke 255 255 255)
  (js/line 0 0 0 0))


(defn- draw []
  ;; canvas clear and setup
  (js/clear)
  (js/noSmooth)
  ;; outermost scaling and translation
  (when-let [{:keys [state-atom state-kvs get-canvas-size]} @conf]
    (let [{:keys [scale-factor translation-x translation-y]}
          ,    (get-in @state-atom state-kvs)
          ;; IMPORTANT!!! We must make translations integers, otherwise
          ;; there will be unwanted artifacts (lines between tiles).
          t-x (int translation-x)
          t-y (int translation-y)]
      (js/translate t-x t-y)
      (js/scale scale-factor)
      ;; flip vertical - this allowws the client draw function
      ;; to use the standard coordinate system (y points upwards)
      (js/scale 1 -1)

      ;; We keep use the integer translations here as well
      (let [rev-x #(/ (- % t-x) scale-factor)
            rev-y #(/ (- % t-y) (- scale-factor))
            [wc hc] (get-canvas-size)]
        ;; client draw
        ((:draw @conf)
         {:min-x (rev-x 0)
          :max-x (rev-x wc)
          :min-y (rev-y hc) ;; because of negative y scale, hc is min and 0 is max
          :max-y (rev-y 0)})))

    ;; draw coordinate system marker
    (when (-> @debug/settings
              :canvas-control
              :coordinate-system-marker)
      (debug-draw-coord-system))))

(declare setup-drag-event)

;; public API
(defn initialize [{:keys [state-atom state-kvs] :as config}]
  (reset! conf config)
  (swap! state-atom assoc-in state-kvs
         {:scale-factor 2
          :translation-x 100.0
          :translation-y 300.0})
  (setup-drag-event)
  (events/add-handler :draw #'draw))

(defn- make-proj-conf []
  (let [{:keys [state-atom state-kvs get-canvas-size]} @conf
        {:keys [scale-factor
                translation-x
                translation-y]} (get-in @state-atom state-kvs)
        [wc hc] (get-canvas-size)]
    (proj/projection-config
     scale-factor
     translation-x
     translation-y
     wc
     hc)))


(defn -get-state []
  (when-let [{:keys [state-atom state-kvs]} @conf]
    (get-in @state-atom state-kvs)))

(defn get-scale []
  (when-let [{:keys [scale-factor]} (-get-state)]
    scale-factor))

;; public API
(defn set-scale
  "set scale in such a way that the center point of the viewport
  keeps the same world point"

  [scale-factor]

  (let [{:keys [state-atom state-kvs]} @conf
        proj-conf (make-proj-conf)
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
  nil)

(defn center-on
  "set translation in such a way that the center point
   of the viewport matches given world point"

  [world-p]

  (let [{:keys [state-atom state-kvs]} @conf
        proj-conf (make-proj-conf)
        proj-conf0 (assoc proj-conf
                          :tx 0
                          :ty 0)
        ;; view coords of the given world point
        [xw yw] (proj/view-coords proj-conf0 world-p)
        _ (println [xw yw])
        _ (println proj-conf)
        ;; view coords of view center
        [xc yc] (proj/view-coords proj-conf0 (proj/Vc proj-conf0))
        _ (println [xc yc])
        ;; translation we have to do to match the above
        tr-x (- xc xw)
        tr-y (- yc yw)]
    (swap! state-atom update-in state-kvs
           (fn [s] (assoc s
                         :translation-x tr-x
                         :translation-y tr-y))))
  nil)

;; TODO
;; this will need to use :get-world-size from conf
;; this will be called in setup-drag-event, set-scale etc.
(defn readjust
  "fix translation after external change
  (such as canvas resize by layout or game state reloaded)
  so that some of the world is visible at least"
  []

  )

(defn- setup-drag-event []
  (events/add-handler
   :canvas-mouse-dragged
   (fn [{:keys [button x y prev-x prev-y]}]
     (when (= button js/RIGHT)
       (let [{:keys [state-atom state-kvs]} @conf
             dx (- x prev-x)
             dy (- y prev-y)]
         (swap! state-atom update-in state-kvs
                (fn [{:keys [translation-x translation-y] :as s}]
                  (assoc s
                         :translation-x (+ translation-x dx)
                         :translation-y (+ translation-y dy)))))))))

