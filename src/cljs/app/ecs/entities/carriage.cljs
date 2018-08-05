(ns app.ecs.entities.carriage
  (:require
   [gamebase.ecs :as ecs]
   [gamebase.ecsu :as ecsu]
   [gamebase.systems.drawing :as sys-drawing]
   [gamebase.systems.movement :as sys-move]
   [gamebase.event-queue :as eq]
   [gamebase.geometry :as g]
   [app.tiles.general :as tiles]
   [gamebase.layers :as layers]
   [app.world-interop :as wo]
   [app.state :as st]))

(defn mk-entity [id tile-x tile-y]
  (ecsu/mk-entity

   id

   ::carriage

   {:img (ecsu/mk-component sys-drawing/mk-static-image-component
                            {:point-kvs (ecs/ck-kvs :move :position)
                             :angle-kvs (ecs/ck-kvs :move :angle)
                             :center [16 8]
                             :resource-name "carriage1.png"})

    :move (ecsu/mk-component sys-move/mk-path-follower {:path-history-size 0})

    }

   :tile-x tile-x
   :tile-y tile-y
   :track [:w :e]))

(defmethod ecs/handle-event [:to-entity ::carriage ::ecs/init]
  [world event this]
  (println "CARRIAGE INIT")

  [(assoc
    (ecs/mk-event (-> this ::ecs/components :move)
                  ::sys-move/set-path
                  (::eq/time event))
    :path (tiles/track-path (:track this) (:tile-x this) (:tile-y this)))

   (ecs/mk-event (-> this ::ecs/components :move)
                 ::sys-move/stop
                 (::eq/time event))])

