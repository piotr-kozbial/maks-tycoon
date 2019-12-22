(ns app.ecs.entities.carriage
  (:require
   [gamebase-ecs.core :as ecs]
   [gamebase.systems.drawing :as sys-drawing]
   [app.ecs.systems.movement.movement :as sys-move]
   [app.ecs.systems.movement.components.railway-roller :refer [mk-railway-roller]]
   [app.ecs.systems.collisions :refer [mk-collider]]
   [gamebase-ecs.event-queue :as eq]
   [gamebase.geometry :as g]
   [app.ecs.operations :as ops]
   [app.tiles.general :as tiles]
   [gamebase.layers :as layers]
   [app.state :as st]
   [app.ecs.common-events :as ci])
  (:require-macros
   [gamebase.helpers :refer [event-handlers]])
  )

;; DON'T USE THIS CONSTRUCTOR!! IT IS OBSOLITE AND INCOMPATIBLE WITH NEW CODE
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

(defn mk-entity-alone [id tile-x tile-y]
  (let [entity (ecs/mk-entity id ::carriage)]
    (assoc
     entity
     :gamebase-ecs.core/components
     {:front (mk-railway-roller
              entity
              :front
              {:distance 0 ;; -32
               :tile-x (inc tile-x)
               :tile-y tile-y
               :track [:w :e]
               :length-on-track 14})

      :center (mk-railway-roller
                entity
                :center
                {:distance -16
                 :tile-x tile-x
                 :tile-y tile-y
                 :track [:w :e]
                 :length-on-track 30})

      :back (mk-railway-roller
              entity
              :back
              {:distance -16
               :tile-x tile-x
               :tile-y tile-y
               :track [:w :e]
               :length-on-track 14})

      :collider (mk-collider entity
                             :collider
                             {:tile-xy-kvss [(ecs/ck-kvs :front :path ::sys-move/tile-xy)
                                             (ecs/ck-kvs :center :path ::sys-move/tile-xy)
                                             (ecs/ck-kvs :back :path ::sys-move/tile-xy)
                                             ]})


      :img (sys-drawing/mk-static-image2-component
            entity
            :img
            {:point-query :get-center
             :angle-query :get-angle
             :center [16 8]
             :resource-name-query :get-image})

      :dot-front (sys-drawing/mk-dot-component
                  entity
                  :dot-front
                  {:point-kvs (ecs/ck-kvs :front :position)
                   :color "#5ae5ed"})

      :dot-back (sys-drawing/mk-dot-component
                  entity
                  :dot-back
                  {:point-kvs (ecs/ck-kvs :back :position)
                   :color "#c85aed"})


      })))

(defmethod ecs/query [:entity ::carriage :get-center]
  [this _]
  (:position (-> this ::ecs/components :center)))

(defmethod ecs/query [:entity ::carriage :get-angle]
  [this _]
  (:angle (-> this ::ecs/components :center)))

(defmethod ecs/query [:entity ::carriage :get-image]
  [this _]
  "carriage1.png")


(defmethod ecs/query [:entity ::carriage :railway/front]
  [this _]
  (let [roller (-> this ::ecs/components :front)]
    {:tile-xy (get-in roller [:path :app.ecs.systems.movement.movement/tile-xy])
     :track (get-in roller [:path :app.ecs.systems.movement.movement/track])
     :track-length (g/path-length (:path roller))
     :length-on-track (get-in roller [:length-on-path])
     :position (get-in roller [:position])
     :connector? true}))

(defmethod ecs/query [:entity ::carriage :railway/rear]
  [this _]
  (let [roller (-> this ::ecs/components :back)]
    {:tile-xy (get-in roller [:path :app.ecs.systems.movement.movement/tile-xy])
     :track (get-in roller [:path :app.ecs.systems.movement.movement/track])
     :track-length (g/path-length (:path roller))
     :length-on-track (get-in roller [:length-on-path])
     :position (get-in roller [:position])
     :connector? true}))



(defmethod ops/get-central-point-kvs ::carriage
  [_]
  [(ecs/ck-kvs :point :path)
   (ecs/ck-kvs :point :length-on-path)])

(event-handlers
 [:to-entity ::carriage]

 (::ecs/init
  [world event this]
  [(ecs/retarget event (-> this ::ecs/components :front))
   (ecs/retarget event (-> this ::ecs/components :center))
   (ecs/retarget event (-> this ::ecs/components :back))])

 (::ci/delta-t
  [world event this]
  ;; (.log js/console "CARRIAGE - delta-t")
  [(ecs/retarget (assoc event :priority -1) (-> this ::ecs/components :front))
   (ecs/retarget (assoc event :priority -1) (-> this ::ecs/components :center))
   (ecs/retarget (assoc event :priority -1) (-> this ::ecs/components :back))
   (assoc (ecs/mk-event this ::post-delta-t (::ecs/time event)) :priority -1)])

 (::post-delta-t
  [world event this]
 (let [my-id (ecs/id this)
        center (-> this :gamebase-ecs.core/components :center)
        front  (-> this :gamebase-ecs.core/components :front)
        back (-> this :gamebase-ecs.core/components :back)
        tile-xys (apply hash-set (for [component [center front back]]
                                   (get-in component [:path ::sys-move/tile-xy])))
        tile-entities-map (:tile-entities-map
                           (get-in world [::ecs/systems
                                          :app.ecs.systems.collisions/collisions]))]
    (if true; (every? (fn [tile-xy] (empty? (disj (or (tile-entities-map tile-xy) #{}) my-id))) tile-xys)
      [(dissoc center :backup)
       (dissoc front :backup)
       (dissoc back :backup)
       (assoc (ecs/mk-event (-> this ::ecs/components :collider)
                            :app.ecs.systems.collisions/update
                            (::ecs/time event))
              :priority -1)]
      (do
        [(:backup center )
         (:backup front)
         (:backup back)
         (assoc (ecs/mk-event this ::ci/stop (::ecs/time event))
                :priority -1)])))

  )

 (::ci/connect-to
  [world event this]
  [(ecs/retarget event (-> this ::ecs/components :front))
   (assoc (ecs/mk-event (-> this ::ecs/components :center)
                        ::ci/connect-to
                        (::ecs/time world))
          :reference-entity-or-id (ecs/id this)
          :reference-path-kvs [::ecs/components :front :path]
          :reference-length-on-path-kvs [::ecs/components :front :length-on-path])
   (assoc (ecs/mk-event (-> this ::ecs/components :back)
                        ::ci/connect-to
                        (::ecs/time world))
          :reference-entity-or-id (ecs/id this)
          :reference-path-kvs [::ecs/components :center :path]
          :reference-length-on-path-kvs [::ecs/components :center :length-on-path])])

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
