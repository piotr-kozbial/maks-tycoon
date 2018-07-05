(ns gamebase.systems.drawing
  (:require
   [gamebase.ecs :as ecs]
   [gamebase.resources :as resources]
   [gamebase.geometry :as g]))

(do ;; SYSTEM
  
  (defn mk-system []
    (ecs/mk-system ::drawing))

  (def to-system
    (ecs/to-system ::drawing))

  (defn- maybe-load-layer [{:keys [layer-data] :as layer}]
    (let [{:keys [resource-name layer-key data img]} layer-data]
      (if data
        layer
        (if-let [resource (resources/get-resource resource-name)]
          (assoc layer
                 :layer-data (assoc layer-data
                                    :data (resource layer-key)))
          layer))))

  (defn- maybe-load-layers [world {:keys [layers] :as system}]
    (let [system'(assoc system
                        :layers
                        (->> layers
                             (map maybe-load-layer)
                             (apply vector)))]
      (ecs/insert-object world system')))

  (defmethod ecs/handle-event [:to-system ::drawing :update]
    [world event system]
    (let [world' (maybe-load-layers world system)
          world''

          (ecs/pass-event-through-all
           world'
           event
           (ecs/all-components-of-system world' system))
          ]



      world''
      ))

  (defn- draw-tiled-layer [{:keys [data img-resource-name tile-offset]}]
    (when-let [img (resources/get-resource img-resource-name)]
      (doall
       (map-indexed
        (fn [y row]
          (when true ;(and (<= v-tile-start y) (< y v-tile-end))
            (doall
             (map-indexed
              (fn [x tile-number]
                (when (> tile-number 0)
                  (let [tile-x
                        (mod (- tile-number tile-offset) 20)
                        tile-y
                        (quot (- tile-number tile-offset) 20)
                        ]
                    (js/image img,
                              (- (* x 32) 0) (- (* y 32) 0) 32 32,
                              (* tile-x 32) (* tile-y 32) 32 32))))
              row))))
        (:content data)))))


  (defn- maybe-draw-layers [world {:keys [layers] :as system}]
    ;;(.log js/console (pr-str layers))
    (doseq [{:keys [layer-data]} layers]
      (when-let [data (:data layer-data)]

        (draw-tiled-layer layer-data)))
    world)

  (defmethod ecs/handle-event [:to-system ::drawing ::draw]
    [world event system]
    ;;(.log js/console "sys draw")
    (-> world
        (maybe-draw-layers system)
        (#(ecs/pass-event-through-all
           % event (ecs/all-components-of-system % system)))))

  (defmethod ecs/handle-event [:to-system ::drawing ::clear-layers]
    [world event system]
    (assoc system :layers []))

  (defmethod ecs/handle-event [:to-system ::drawing ::add-layer]
    [world {:keys [layer-key layer-type layer-data]} system]
    (update-in system [:layers]
               conj {:layer-key layer-key
                     :layer-type layer-type
                     :layer-data layer-data})))


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
        (js/translate point-x point-y)
        (js/rotate angle)
        (js/image img (- center-x) (- center-y))
        (js/resetMatrix)))
    component))

