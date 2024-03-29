(ns gamebase.systems.drawing
  (:require
   [gamebase-ecs.core :as ecs]
   [gamebase-resources.core :as resources]
   [gamebase.geometry :as g]
   [gamebase.layers :as layers]
   [app.tiles.general :as tiles]
   [app.state :as st]
   ;; [schema.core :as s :include-macros true]

   [app.ecs.common-events :as ci]))








;; utils

(defn -put-image [canvas-context img x y w h dst-x dst-y]

  (.save canvas-context)
  (.scale canvas-context 1 -1)
  (.drawImage canvas-context img ;;(.-canvas img)
              ;; source
              x y w h
              ;; destination
              dst-x (- (* -1 dst-y) h) w h)
  (.restore canvas-context))

;; TILE EXTRA

(defmulti draw-tile-extra (fn [tile-id tx ty tile-info] tile-id) :default nil)

(defmethod draw-tile-extra nil
  [tile-id tile-info tx ty]
  false)

(do ;; SYSTEM

  (defn mk-system []
    (ecs/mk-system ::drawing))

  (def to-system
    (ecs/to-system ::drawing))

  (defn- -get-layer [world layer-key]
    (->> (:layers world)
         (filter #(= (first %) layer-key))
         (first)
         (second)))

  (def s-draw-context
    ;; {:min-x s/Int
    ;;  :max-x s/Int
    ;;  :min-y s/Int
    ;;  :max-y s/Int
    ;;  :mouse-x s/Int
    ;;  :mouse-y s/Int}
    )

  (def s-tile-context
    ;; {:tile-width s/Any
    ;;  :tile-height s/Any
    ;;  :world-width-in-tiles s/Any
    ;;  :world-height-in-tiles s/Any
    ;;  :tileset-rendering-map s/Any
    ;;  :tileset-map {:kafelki s/Any}}
    )

  (defn- -draw-layer [world
                      layer
                      {:keys [min-x max-x min-y max-y canvas-context] :as context}
                      draw-extra?]

    ;; (s/validate s-draw-context context)
    ;; (s/validate s-tile-context (:tile-context world))


    (let [{:keys [tile-width tile-height
                  world-width-in-tiles
                  world-height-in-tiles] :as ctx} (:tile-context world)
          tx-min (max 0 (- (int (/ min-x tile-width)) 1))
          tx-max (min (+ (int (/ max-x tile-width)) 2) (dec world-width-in-tiles))
          ty-min (max 0 (- (int (/ min-y tile-width)) 1))
          ty-max (min (+ (int (/ max-y tile-height)) 2) (dec world-height-in-tiles))
          tx-range (range tx-min (inc tx-max))
          ty-range (range ty-min (inc ty-max))]
      (doall
       (for [tx tx-range, ty ty-range]
         (let [[_ tile-number :as tl] (layers/get-tile-from-layer layer tx ty)
               {:keys [img x y w h] :as inf}
               ,  (layers/get-rendering-information-for-tile ctx tl)]
           (when tl

             (-put-image canvas-context
                         (resources/get-resource img)
                         x y w h (* tile-width tx) (* tile-height ty))

             (when draw-extra?
               (let [tile-data (tiles/tiles-by-number tile-number)]
                 (some #(draw-tile-extra % tx ty tile-data) (:ids tile-data))))))))))

  ;; (defmethod ecs/handle-event [:to-system ::drawing ::draw]
  ;;   [world {:keys [context] :as event} system]

  ;;   ;; TODO!
  ;;   ;; To przez chwile moze byc tak (tylko zadbac, zeby tlo bylo *pod* fg).
  ;;   ;; Ale w przyszlosci ma byc tak, ze komponenty (razem z ich entities)
  ;;   ;; beda na roznych layerach i trzeba bedzie przeplatac rysowanie
  ;;   ;; layerow z rysowaniem komponentow nad tymi layerami.

  ;;   ;; draw layers
  ;;   ;;(-draw-layer world (-get-layer world :background) context false)
  ;;   (-draw-layer world (-get-layer world :foreground) context true)

  ;;   ;; draw components
  ;;   (-> world
  ;;       (#(ecs/pass-event-through-all
  ;;          % event (ecs/all-components-of-system % system))))

  ;;   )

  (defn draw-all [world context]
    ;; TODO!
    ;; To przez chwile moze byc tak (tylko zadbac, zeby tlo bylo *pod* fg).
    ;; Ale w przyszlosci ma byc tak, ze komponenty (razem z ich entities)
    ;; beda na roznych layerach i trzeba bedzie przeplatac rysowanie
    ;; layerow z rysowaniem komponentow nad tymi layerami.

    ;; draw layers
    (-draw-layer world (-get-layer world :background) context false)
    (-draw-layer world (-get-layer world :foreground) context true)

    (dorun
     (ecs/pass-event-through-all
      world (assoc (ecs/mk-event to-system ::draw 0)
                   :canvas-context (:canvas-context context))
      (ecs/all-components-of-system world
                                    (::drawing (::ecs/systems world)))))

    ;; (let [{:keys [canvas-context]} context]
    ;;   (set! (.-fillStyle canvas-context) "magenta")
    ;;   (.fillRect canvas-context 10 10 150 100))


    )


  (defmethod ecs/handle-event [:to-system ::drawing :update] [world event system]
    (let [world'(ecs/pass-event-through-all world event (ecs/all-components-of-system world system))]
      world'))

  (defmethod ecs/handle-event [:to-system ::drawing ::ci/delta-t] [world event system]
    world))

(do ;; COMPONENT: static image

  (defn mk-static-image-component
    [entity-or-id key {:keys [point-kvs angle-kvs center resource-name-kvs]}]
    (assoc
     (ecs/mk-component ::drawing entity-or-id key ::static-image)
     :point-kvs point-kvs
     :angle-kvs angle-kvs
     :center center
     :resource-name-kvs resource-name-kvs))

  (defmethod ecs/handle-event [:to-component ::static-image :update]
    [world event component]
    component)

  (defmethod ecs/handle-event [:to-component ::static-image ::draw]
    [world
     {:keys [canvas-context]}
     {:keys [point-kvs angle-kvs center resource-name-kvs] :as component}]

    (let [entity (ecs/get-entity world component)
          [point-x point-y] (get-in entity point-kvs)
          [center-x center-y] center
          angle (get-in entity angle-kvs)
          resource-name (get-in entity resource-name-kvs)]
      (when-let [img (resources/get-resource resource-name)]
        (.save canvas-context) ;; (js/push)


        (.translate canvas-context point-x point-y) ;; (js/translate point-x point-y)
        (.rotate canvas-context angle) ;; (js/rotate angle)

        ;; flip vertical, since images are placed by js/images
        ;; in screen orientation (y increasing downwards),
        ;; while we are using standard coordinate system
        (.scale canvas-context 1 -1) ;; (js/scale 1 -1)


        (.drawImage canvas-context img (- center-x) (- center-y)) ;;; (js/image
                                                                             ;;;  img (- center-x)
                                                                             ;;;  (- center-y))

        (.restore canvas-context) ;; (js/pop)
        )



      )

    component))

(do ;; COMPONENT: static image 2

  (defn mk-static-image2-component
    [entity-or-id key {:keys [point-query angle-query center resource-name-query]}]
    (assoc
     (ecs/mk-component ::drawing entity-or-id key ::static-image2)
     :point-query point-query
     :angle-query angle-query
     :center center
     :resource-name-query resource-name-query))

  (defmethod ecs/handle-event [:to-component ::static-image2 :update]
    [world event component]
    component)

  (defmethod ecs/handle-event [:to-component ::static-image2 ::draw]
    [world
     {:keys [canvas-context]}
     {:keys [point-query angle-query center resource-name-query] :as component}]

    (let [entity (ecs/get-entity world component)
          [point-x point-y] (ecs/query world entity point-query)
          [center-x center-y] center
          angle (ecs/query world entity angle-query)
          resource-name (ecs/query world entity resource-name-query)]
      (when-let [img (resources/get-resource resource-name)]
        (.save canvas-context) ;; (js/push)


        (.translate canvas-context point-x point-y) ;; (js/translate point-x point-y)
        (.rotate canvas-context angle) ;; (js/rotate angle)

        ;; flip vertical, since images are placed by js/images
        ;; in screen orientation (y increasing downwards),
        ;; while we are using standard coordinate system
        (.scale canvas-context 1 -1) ;; (js/scale 1 -1)


        (.drawImage canvas-context img (- center-x) (- center-y)) ;;; (js/image
                                                                             ;;;  img (- center-x)
                                                                             ;;;  (- center-y))

        (.restore canvas-context) ;; (js/pop)
        )



      )

    component))

(do ;; COMPONENT: dot

  (defn mk-dot-component
    [entity-or-id key {:keys [point-kvs color]}]
    (assoc
     (ecs/mk-component ::drawing entity-or-id key ::dot)
     :point-kvs point-kvs
     :color color))

  (defmethod ecs/handle-event [:to-component ::dot :update]
    [world event component]
    component)

  (defmethod ecs/handle-event [:to-component ::dot ::draw]
    [world {:keys [canvas-context]} {:keys [point-kvs] :as component}]
    (let [entity (ecs/get-entity world component)
          [point-x point-y] (get-in entity point-kvs)
          color (:color component)]



      ;; (js/fill (js/color r g b))
      ;; (js/stroke r g b)
      ;; (js/point point-x point-y)
      (.save canvas-context)
      (set! (.-fillStyle canvas-context) color)
      (.beginPath canvas-context)
      (.arc canvas-context point-x point-y 3 0 6.3)
      (.fill canvas-context)
      (.restore canvas-context)

      )
    component))

(do ;; COMPONENT: tile

  (defn mk-tile-component
    [entity-or-id key {:keys [xy-kvs color]}]
    (assoc
     (ecs/mk-component ::drawing entity-or-id key ::tile)
     :xy-kvs xy-kvs
     :color color))

  (defmethod ecs/handle-event [:to-component ::tile :update]
    [world event component]
    component)

  (defmethod ecs/handle-event [:to-component ::tile ::draw]
    [world
     {:keys [canvas-context]}
     {:keys [xy-kvs] :as component}]
    ;; (let [entity (ecs/get-entity world component)
    ;;       [x y] (get-in entity xy-kvs)
    ;;       [r g b] (:color component)]
    ;;   (when x
    ;;     (js/push)
    ;;     (js/noFill)
    ;;     (js/stroke r g b)
    ;;     (js/strokeWeight 2)
    ;;     (js/rect (* 32 x) (* 32 y) 32 32)
    ;;     (js/pop)))

    component))

(do ;; COMPONENT: path

  ;; draws a path as defined in gamebase.geometry

  (defn mk-path-component
    [entity-or-id key {:keys [path-kvs color]}]
    (assoc
     (ecs/mk-component ::drawing entity-or-id key ::path)
     :path-kvs path-kvs
     :color color))

  (defmethod ecs/handle-event [:to-component ::path :update]
    [world event component]
    nil)

  (defmethod ecs/handle-event [:to-component ::path ::draw]
    [world event {:keys [path-kvs] :as component}]
    ;; (let [entity (ecs/get-entity world component)]
    ;;   (when-let [path (get-in entity path-kvs)]
    ;;     (let [len (g/path-length path)
    ;;           n (int (/ len 5))
    ;;           d (/ len n)]
    ;;       (js/push)
    ;;       (js/stroke (js/color (:color component)))
    ;;       (doseq [i (range (inc n))]
    ;;         (apply js/point (g/path-point-at-length path (* i d))))
    ;;       (js/pop))))
    nil))

(do ;; COMPONENT: path-history

  ;; draws a path as defined in gamebase.geometry

  (defn mk-path-history-component
    [entity-or-id key {:keys [path-history-kvs color]}]
    (assoc
     (ecs/mk-component ::drawing entity-or-id key ::path-history)
     :path-history-kvs path-history-kvs
     :color color))

  (defmethod ecs/handle-event [:to-component ::path-history :update]
    [world event component]
    nil)

  (defmethod ecs/handle-event [:to-component ::path-history ::draw]
    [world event {:keys [path-history-kvs] :as component}]
    ;; (let [entity (ecs/get-entity world component)]
    ;;   (when-let [path-history (get-in entity path-history-kvs)]
    ;;     (doseq [path path-history]
    ;;       (let [len (g/path-length path)
    ;;             n (int (/ len 5))
    ;;             d (/ len n)]
    ;;         (js/push)
    ;;         (js/stroke (js/color (:color component)))
    ;;         (doseq [i (range (inc n))]
    ;;           (apply js/point (g/path-point-at-length path (* i d))))
    ;;         (js/pop)))

    ;;     ))
    nil))
