(ns app.ecs.entities.locomotive
  (:require
   [gamebase.ecs :as ecs]
   [gamebase.systems.drawing :as sys-drawing]
   [gamebase.systems.movement.movement :as sys-move]
   [gamebase.systems.movement.components.railway-roller :refer [mk-railway-roller]]
   [gamebase.systems.movement.components.railway-engine :refer [mk-railway-engine]]
   [gamebase.event-queue :as eq]
   [gamebase.geometry :as g]
   [app.tiles.general :as tiles]
   [gamebase.layers :as layers]
   [app.world-interop :as wo]
   [app.state :as st]
   [app.ecs.common-events :as ci])
  (:require-macros
   [gamebase.helpers :refer [event-handlers]]))

(defn mk-entity [id tile-x tile-y]
  (let [entity (ecs/mk-entity id ::locomotive)]
    (assoc
     entity

     :gamebase.ecs/components
     {:engine (mk-railway-engine
               entity
               :engine
               {:tile-x tile-x
                :tile-y tile-y
                :track [:w :e]
                :length-on-track 16
                :driving? true
                :speed -0.01})

      :front (mk-railway-roller
              entity
              :front
              {:distance 15
               ;; track
               :tile-x tile-x
               :tile-y tile-y
               :track [:w :e]
               ;; reference
               :reference-entity-or-id id
               :reference-path-kvs (ecs/ck-kvs :engine :path)
               :reference-length-on-path-kvs (ecs/ck-kvs :engine :length-on-path)})

      :rear (mk-railway-roller
             entity
             :rear
             {:distance -15
              ;; track
              :tile-x tile-x
              :tile-y tile-y
              :track [:w :e]
              ;; reference
              :reference-entity-or-id id
              :reference-path-kvs (ecs/ck-kvs :engine :path)
              :reference-length-on-path-kvs (ecs/ck-kvs :engine :length-on-path)})

      :img (sys-drawing/mk-static-image-component
            entity :img
            {:point-kvs (ecs/ck-kvs :engine :position)
             :angle-kvs (ecs/ck-kvs :engine :angle)
             :center [16 8]
             :resource-name-kvs [:image]})

      ;; :debug-engine (sys-drawing/mk-dot-component
      ;;                entity :debug-engine
      ;;                {:point-kvs (ecs/ck-kvs :engine :position)
      ;;                 :color [255 255 255]})

      ;; :debug-rear (sys-drawing/mk-dot-component
      ;;                entity :debug-rear
      ;;                {:point-kvs (ecs/ck-kvs :rear :position)
      ;;                 :color [255 0 0]})

      ;; :debug-front (sys-drawing/mk-dot-component
      ;;              entity :debug-front
      ;;              {:point-kvs (ecs/ck-kvs :front :position)
      ;;               :color [83 238 252]})

      }

     :image "loco1.png")))

(event-handlers
 [:to-entity ::locomotive]

 (::ecs/init
  [world event this]
  (ecs/retarget event (-> this ::ecs/components :engine)))

 (::ci/delta-t
  [world event this]
  nil)


 (::ci/stop
  [world event this]
  (ecs/retarget event (-> this ::ecs/components :engine)))

 (::ci/drive
  [world event {:keys [rear-coupling] :as this}]
  (ecs/retarget event (-> this ::ecs/components :engine)))

 (::ci/reverse-drive
  [world event {:keys [rear-coupling] :as this}]
  (ecs/retarget event (-> this ::ecs/components :engine)))



 (::sys-move/path-end
  [world event this]
  (println "LOC: someone says path end")
  (ecs/mk-event this ::ci/stop (::eq/time event)))

 (::ci/connect-pulled
  [world {:keys [pulled-entity-or-id]} this]
  (assoc this
         :pulled (ecs/id pulled-entity-or-id)
         :touching-behind (ecs/id pulled-entity-or-id)))

 (::ci/disconnect-pulled
  [world {:keys [pulled-entity-or-id]} this]
  (assoc this :pulled nil)))
