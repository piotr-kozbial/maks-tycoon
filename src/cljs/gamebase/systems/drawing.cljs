(ns gamebase.systems.drawing
  (:require
   [gamebase.ecs :as ecs]
   [gamebase.resources :as resources]
   [gamebase.geometry :as g]
   [gamebase.layers :as layers]))

(declare maybe-draw-layers)

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

  (defn- -draw-layer [system layer]
    (js/push)
    (js/scale 1 -1)
    (let [{:keys [tile-width tile-height
                  world-width-in-tiles
                  world-height-in-tiles] :as ctx} (:tile-context system)]
      (doall
       (for [tx (range world-width-in-tiles) ty (range world-height-in-tiles)]
         (let [tl (layers/get-tile-from-layer layer tx ty)
               {:keys [img x y w h] :as inf}
               ,  (layers/get-rendering-information-for-tile ctx tl)]
           (when tl
             (js/image (resources/get-resource img)
                       ;; destination
                       (* tile-width tx) (- (* -32 ty) tile-height) w h
                       ;; source
                       x y w h))))))
    (js/pop))

  (defmethod ecs/handle-event [:to-system ::drawing ::draw]
    [world event system]

    ;; TODO!
    ;; To przez chwile moze byc tak (tylko zadbac, zeby tlo bylo *pod* fg).
    ;; Ale w przyszlosci ma byc tak, ze komponenty (razem z ich entities)
    ;; beda na roznych layerach i trzeba bedzie przeplatac rysowanie
    ;; layerow z rysowaniem komponentow nad tymi layerami.

    ;; draw layers
    (-draw-layer system (-get-layer system :background))
    (-draw-layer system (-get-layer system :foreground))

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

  ;; TODO: DO WYWALENIA
  (defmethod ecs/handle-event [:to-system ::drawing ::clear-layers]
    [world event system]
    (assoc system :layers []))

  )

(defmethod ecs/handle-event [:to-system ::drawing ::set-all-tmx]
  [world {:keys [tmx-fname]} system]
  (.log js/console (str "LOADING ALL TMX " tmx-fname))
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
           :tile-context ctx)))


;; ;;;; TODO
;; To jakos inaczej zrobic. Moze z boku zapodawac caly stack layerow i ten context co tam.
;; Albo tylko zostawic tutaj narysowanie pojedynczego layera, a reszte zrobic w glownym
;; (draw) w aplikacji.



(do ;; Tiled layer drawing

  ;; TODO: DO WYWALENIA
  (defn- maybe-load-layer [{:keys [layer-data] :as layer}]
    (let [{:keys [resource-name layer-key data img]} layer-data]
      (if data
        layer
        (if-let [resource (resources/get-resource resource-name)]
          (assoc layer
                 :layer-data (assoc layer-data
                                    :data (resource layer-key)))
          layer))))

  ;; TODO: DO WYWALENIA
  (defn- maybe-load-layers [world {:keys [layers] :as system}]
    (let [system'(assoc system
                        :layers
                        (->> layers
                             (map maybe-load-layer)
                             (apply vector)))]
      (ecs/insert-object world system')))

  (defn- draw-tiled-layer [{:keys [data img-resource-name tile-offset]}]
    (js/push)
    ;; we could invert each tile separately, but inverting
    ;; the whole thing is easier
    (js/scale 1 -1)
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
        (:content data))))
    (js/pop))

  (defn- maybe-draw-layers [world {:keys [layers] :as system}]
    ;;(.log js/console (pr-str layers))
    (doseq [{:keys [layer-data]} layers]
      (when-let [data (:data layer-data)]

        (draw-tiled-layer layer-data)))
    world))

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
