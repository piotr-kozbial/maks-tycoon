(ns app.ecs.entities.carriage
  (:require
   [gamebase-ecs.core :as ecs]
   [gamebase.systems.drawing :as sys-drawing]
   [app.ecs.systems.movement.movement :as sys-move]
   [app.ecs.systems.movement.components.railway-roller :refer [mk-railway-roller]]
   [gamebase-ecs.event-queue :as eq]
   [gamebase.geometry :as g]
   [app.ecs.operations :as ops]
   [app.tiles.general :as tiles]
   [gamebase.layers :as layers]
   [app.world-interop :as wo]
   [app.state :as st]
   [app.ecs.common-events :as ci])
  (:require-macros
   [gamebase.helpers :refer [event-handlers]])
  )

(defn mk-entity [id tile-x tile-y puller]
  (let [entity (ecs/mk-entity id ::carriage)]
    (assoc
     entity

     :gamebase-ecs.core/components
     {:point (mk-railway-roller
              entity
              :point
              {:distance -32
               ;; track
               :tile-x tile-x
               :tile-y tile-y
               :track [:w :e]
               ;; reference
               ;; :reference-entity-or-id (ecs/id puller)
               ;; :reference-path-kvs (ecs/ck-kvs :engine :path)
               ;; :reference-length-on-path-kvs (ecs/ck-kvs :engine :length-on-path)

               })



      :img (sys-drawing/mk-static-image-component
            entity :img
            {:point-kvs (ecs/ck-kvs :point :position)
             :angle-kvs (ecs/ck-kvs :point :angle)
             :center [16 8]
             :resource-name-kvs [:image]})

      }

     :image "carriage1.png")))

(defmethod ops/get-central-point-kvs ::carriage
  [_]
  [(ecs/ck-kvs :point :path)
   (ecs/ck-kvs :point :length-on-path)])

(event-handlers
 [:to-entity ::carriage]

 (::ecs/init
  [world event this]
  nil)

 (::ci/delta-t
  [world event this]
  nil)

 (::ci/connect-to
  [world event this]
  (ecs/retarget event (get-in this (ecs/ck-kvs :point))))

 (::ci/disconnect-front
  [world event this]
  (ecs/retarget event (get-in this (ecs/ck-kvs :point))))

 (::ci/connect-pulled
  [world {:keys [pulled-entity-or-id]} this]
  (assoc this
         :pulled (ecs/id pulled-entity-or-id)
         :touching-behind (ecs/id pulled-entity-or-id)))

 (::ci/disconnect-pulled
  [world {:keys [pulled-entity-or-id]} this]
  (assoc this :pulled nil))


 (::sys-move/path-end
  [world event this]
  (println "CAR: someone says path end")
  ;;(ecs/mk-event this ::ci/stop (::ecs/time event))
  ))
