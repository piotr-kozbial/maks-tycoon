(ns gamebase.systems.drawing
  (:require
   [gamebase.ecs :as ecs]
   [gamebase.resources :as resources]
   [gamebase.geometry :as g]
   [gamebase.layers :as layers]))

(do ;; SYSTEM

  (defn mk-system []
    (ecs/mk-system ::drawing))

  (def to-system
    (ecs/to-system ::drawing))

  (defn- -get-layer [system layer-key]
    (->> (:layers system)
         (filter #(= (first %) layer-key))
         (first)
         (second)))

  (defn- -draw-layer [system layer {:keys [min-x max-x min-y max-y] :as context}]
    (js/push)
    (js/scale 1 -1)
    (let [{:keys [tile-width tile-height
                  world-width-in-tiles
                  world-height-in-tiles] :as ctx} (:tile-context system)
          tx-min (max 0 (- (int (/ min-x tile-width)) 1))
          tx-max (min (+ (int (/ max-x tile-width)) 2) (dec world-width-in-tiles))
          ty-min (max 0 (- (int (/ min-y tile-width)) 1))
          ty-max (min (+ (int (/ max-y tile-height)) 2) (dec world-height-in-tiles))
          tx-range (range tx-min (inc tx-max))
          ty-range (range ty-min (inc ty-max))]
      (doall
       (for [tx tx-range, ty ty-range]
         (let [tl (layers/get-tile-from-layer layer tx ty)
               {:keys [img x y w h] :as inf}
               ,  (layers/get-rendering-information-for-tile ctx tl)]
           (when tl
             (js/image (resources/get-resource img)
                       ;; destination

                       ;; TODO !!! - skad jest to -32 ponizej?

                       (* tile-width tx) (- (* -32 ty) tile-height) w h
                       ;; source
                       x y w h))))))
    (js/pop))

  (defmethod ecs/handle-event [:to-system ::drawing ::draw]
    [world {:keys [context] :as event} system]

    ;; TODO!
    ;; To przez chwile moze byc tak (tylko zadbac, zeby tlo bylo *pod* fg).
    ;; Ale w przyszlosci ma byc tak, ze komponenty (razem z ich entities)
    ;; beda na roznych layerach i trzeba bedzie przeplatac rysowanie
    ;; layerow z rysowaniem komponentow nad tymi layerami.

    ;; draw layers
    (-draw-layer system (-get-layer system :background) context)
    (-draw-layer system (-get-layer system :foreground) context)

    ;; draw components
    (-> world
        (#(ecs/pass-event-through-all
           % event (ecs/all-components-of-system % system)))))

  (defmethod ecs/handle-event [:to-system ::drawing :update]
    [world event system]
    (let [world'
          (ecs/pass-event-through-all
           world
           event
           (ecs/all-components-of-system world system))]
      world'))

  (defmethod ecs/handle-event [:to-system ::drawing ::set-all-tmx]
    [world {:keys [tmx-fname]} system]
    (let [ls (layers/get-all-layers-from-tmx
              (resources/get-resource tmx-fname))
          tileset-map (layers/get-tileset-rendering-map-from-tmx
                       (resources/get-resource tmx-fname))
          ctx {:tile-width 32
               :tile-height 32
               :world-width-in-tiles 100
               :world-height-in-tiles 100
               :tileset-rendering-map tileset-map}]
      (assoc system
             :layers ls
             :tile-context ctx))))

(do ;; COMPONENT: static image

  (defn mk-static-image-component
    [entity-or-id key {:keys [point-kvs angle-kvs center resource-name]}]
    (assoc
     (ecs/mk-component ::drawing entity-or-id key ::static-image)
     :point-kvs point-kvs
     :angle-kvs angle-kvs
     :center center
     :resource-name resource-name))

  (defmethod ecs/handle-event [:to-component ::static-image :update]
    [world event component]
    ;;(.log js/console "drawing/static-image: update")
    component)

  (defmethod ecs/handle-event [:to-component ::static-image ::draw]
    [world event {:keys [point-kvs angle-kvs center resource-name] :as component}]
    (let [entity (ecs/get-entity world component)
          [point-x point-y] (get-in entity point-kvs)
          [center-x center-y] center
          angle (get-in entity angle-kvs)]
      (when-let [img (resources/get-resource resource-name)]
        (js/push)
        (js/translate point-x point-y)
        (js/rotate angle)
        ;; flip vertical, since images are placed by js/images
        ;; in screen orientation (y increasing downwards),
        ;; while we are using standard coordinate system
        (js/scale 1 -1)
        (js/image img (- center-x) (- center-y))
        (js/pop)))
    component))
