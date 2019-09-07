(ns app.ecs.entities.locomotive
  (:require
   [gamebase.ecs :as ecs]
   [gamebase.systems.drawing :as sys-drawing]
   [gamebase.systems.movement.movement :as sys-move]
   [app.ecs.systems.collisions :refer [mk-collider]]
   [gamebase.systems.movement.components.railway-roller :refer [mk-railway-roller]]
   [gamebase.systems.movement.components.railway-engine :refer [mk-railway-engine]]
   [gamebase.event-queue :as eq]
   [gamebase.geometry :as g]
   [app.tiles.general :as tiles]
   [gamebase.layers :as layers]
   [app.world-interop :as wo]
   [app.state :as st]
   [app.ecs.common-events :as ci]
   [app.ecs.operations :as ops])
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

      :collider (mk-collider entity
                             :collider
                             {:tile-xy-kvss [(ecs/ck-kvs :engine :path ::sys-move/tile-xy)
                                             (ecs/ck-kvs :front :path ::sys-move/tile-xy)
                                             (ecs/ck-kvs :rear :path ::sys-move/tile-xy)
                                             ]})}

     :image "loco1.png")))


(defmethod ops/get-central-point-kvs ::locomotive
  [_]
  [(ecs/ck-kvs :engine :path)
   (ecs/ck-kvs :engine :length-on-path)])


(event-handlers
 [:to-entity ::locomotive]

 (::ecs/init
  [world event this]
  (ecs/retarget event (-> this ::ecs/components :engine)))

 (::ci/delta-t
  [world event {:as this :keys [pulled touching-behind]}]
  [(ecs/retarget event (-> this ::ecs/components :collider))
   (ecs/retarget event (-> this ::ecs/components :engine))
   (ecs/retarget event (-> this ::ecs/components :front))
   (ecs/retarget event (-> this ::ecs/components :rear))
   (ecs/mk-event this ::post-delta-t (::eq/time event))])

 (::post-delta-t
  [world event {:as this :keys [pulled touching-behind]}]
  (let [my-id (::ecs/entity-id this)
        engine (-> this :gamebase.ecs/components :engine)
        front  (-> this :gamebase.ecs/components :front)
        rear (-> this :gamebase.ecs/components :rear)
        tile-xys (apply hash-set (for [component [engine front rear]]
                                   (get-in component [:path ::sys-move/tile-xy])))
        tile-entities-map (:tile-entities-map (wo/get-system :app.ecs.systems.collisions/collisions))]
    ;; (when (and (not pulled) touching-behind)
    ;;   (assoc this :touching-behind nil))
    ;; (print (pr-str tile-xys))
    (if (every? (fn [tile-xy] (empty? (disj (or (tile-entities-map tile-xy) #{}) my-id))) tile-xys)
      [(dissoc engine :backup)
       (dissoc front :backup)
       (dissoc rear :backup)]
      (do
        [(:backup engine)
         (:backup front)
         (:backup rear)
         (ecs/mk-event this ::ci/stop (::eq/time event))]))))

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
