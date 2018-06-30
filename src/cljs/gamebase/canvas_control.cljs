(ns gamebase.canvas-control
  (:require
   [gamebase.events :as events]
   [gamebase.ecs :as ecs]
   [gamebase.projection :as proj]))

(defonce conf (atom nil))

(defn- draw []
  ;; canvas clear and setup
  (js/clear)
  (js/noSmooth)
  ;; outermost scaling and translation
  (when-let [{:keys [state-atom state-kvs]} @conf]
    (let [{:keys [scale-factor translation-x translation-y]}
          ,    (get-in @state-atom state-kvs)]
      (js/translate translation-x translation-y)
      (js/scale scale-factor))
    ;; client draw
    ((:draw @conf))))

;; TODO SUMARY
;; 1. params to draw function
;; 2. dragging (panning)
;; 3. readjust

nil
;; TODO DETAILS
;; Ad 1.
;; client draw function should get some params,
;; first of all - the rectangle that is visible in viewport
;; (in world coordinates of course - the client draw function
;; doesn't know any other coord system)
;;
;; Ad 2.
;; implement setup-drag-event WITH LIMITING TO WORLD
;; possibly implement and use `readjust`
;;
;; Ad 3.
;; think if there is a scenario when we need readjust anyway

(declare setup-drag-event)

;; public API
(defn initialize [{:keys [state-atom state-kvs] :as config}]
  (reset! conf config)
  (swap! state-atom assoc-in state-kvs
         {:scale-factor 2.0
          :translation-x 0.0
          :translation-y 0.0})
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
                         :translation-y tr-y)))))

;; TODO 2, 3
;; this will need to use :get-world-size from conf
(defn readjust
  "fix scale and/or translation after external change
  (such as canvas resize by layout or game state reloaded)"
  []


  )

;; TODO 2
(defn- setup-drag-event []
  ;; (events/add-handler :canvas-mouse-dragged
  ;;                     (fn [{:keys [button x y prev-x prev-y]}]
  ;;                       (when (= button js/RIGHT)
  ;;                         (let [canvas-width ((:get-canvas-width @conf))
  ;;                               canvas-height ((:get-canvas-height @conf))
  ;;                               dx (- x prev-x)
  ;;                               dy (- y prev-y)
  ;;                               scale ((:get-scale @conf))
  ;;                               {:keys [state-atom state-kvs]} @conf]
  ;;                           (swap! state-atom
  ;;                                  update-in state-kvs
  ;;                                  (fn [{:keys [top-left-x top-left-y] :as st}]
  ;;                                    (let [[new-top-left-x new-top-left-y]
  ;;                                          ,   (correct-top-left (- top-left-x (/ dx scale))
  ;;                                                                (- top-left-y (/ dy scale)))]
  ;;                                      (assoc st :top-left-x new-top-left-x
  ;;                                             :top-left-y new-top-left-y))))))))

  )

