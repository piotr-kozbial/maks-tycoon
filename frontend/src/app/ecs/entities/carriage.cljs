(ns app.ecs.entities.carriage
  (:require
   [gamebase-ecs.core :as ecs]
   [gamebase.systems.drawing :as sys-drawing]
   [app.ecs.systems.movement.movement :as sys-move]
   [app.ecs.systems.movement.components.railway-roller :refer [mk-railway-roller]]
   [app.ecs.systems.collisions :refer [mk-collider]]
   [app.ecs.systems.railway :as sys-railway]
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
               ;; :reference-path-kvs (ecs/ck-kvs :center :path)
               ;; :reference-length-on-path-kvs (ecs/ck-kvs :center :length-on-path)

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

      :rear (mk-railway-roller
              entity
              :rear
              {:distance -16
               :tile-x tile-x
               :tile-y tile-y
               :track [:w :e]
               :length-on-track 14})

      :collider (mk-collider entity
                             :collider
                             {:tile-xy-kvss [(ecs/ck-kvs :front :path ::sys-move/tile-xy)
                                             (ecs/ck-kvs :center :path ::sys-move/tile-xy)
                                             (ecs/ck-kvs :rear :path ::sys-move/tile-xy)
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

      :dot-rear (sys-drawing/mk-dot-component
                  entity
                  :dot-rear
                  {:point-kvs (ecs/ck-kvs :rear :position)
                   :color "#c85aed"})


      }
     :image "carriage1.png"
     )))

(defmethod ecs/query [:entity ::carriage :get-center]
  [_ this _]
  (:position (-> this ::ecs/components :center)))

(defmethod ecs/query [:entity ::carriage :get-angle]
  [_ this _]
  (:angle (-> this ::ecs/components :center)))

(defmethod ecs/query [:entity ::carriage :get-image]
  [_ this _]
  "carriage1.png")


(defmethod ecs/query [:entity ::carriage :railway/front]
  [_ this _]
  (let [roller (-> this ::ecs/components :front)]
    {:tile-xy (get-in roller [:path :app.ecs.systems.movement.movement/tile-xy])
     :track (get-in roller [:path :app.ecs.systems.movement.movement/track])
     :track-length (g/path-length (:path roller))
     :length-on-track (get-in roller [:length-on-path])
     :position (get-in roller [:position])
     :connector? true}))

(defmethod ecs/query [:entity ::carriage :railway/rear]
  [_ this _]
  (let [roller (-> this ::ecs/components :rear)]
    {:tile-xy (get-in roller [:path :app.ecs.systems.movement.movement/tile-xy])
     :track (get-in roller [:path :app.ecs.systems.movement.movement/track])
     :track-length (g/path-length (:path roller))
     :length-on-track (get-in roller [:length-on-path])
     :position (get-in roller [:position])
     :connector? true}))

(defmethod ecs/query [:entity ::carriage :railway/driving?]
  [world {:keys [puller-entity-id]} _]
  ;; JESZCZE NIE ZROBIONE!!!
  ;; BO DO TEGO TRZEBA BY WZIAC (ecs/get-entity-by-key world puller-entity-id),
  ;; a nie mamy world!
  (assert false)
)

(defmethod ecs/query [:entity ::carriage :railway/speed]
  [world {:keys [puller-entity-id]} _]
  ;; JESZCZE NIE ZROBIONE!!!
  ;; BO DO TEGO TRZEBA BY WZIAC (ecs/get-entity-by-key world puller-entity-id),
  ;; a nie mamy world!
  (assert false))

(defmethod ops/get-central-point-kvs ::carriage
  [_]
  [(ecs/ck-kvs :point :path)
   (ecs/ck-kvs :point :length-on-path)])



(defn distance-squared [[x y] [x' y']]
  (+
   (* (- x x') (- x x'))
   (* (- y y') (- y y'))))

(defn should-connect? [my-closest its-closest]
  (let [my-track (:track my-closest)
        my-length (:length-on-track my-closest)
        its-track (:track its-closest)
        its-length (:length-on-track its-closest)
        track-length (:track-length my-closest)
        its-length-converted ;; to the direction of my track
        ,  (if (= my-track its-track)
             its-length
             (- track-length its-length))]
    (if (= (:side my-closest) :front)
      (>= my-length its-length)
      (<= my-length its-length))))

(defn consider-colliding-entity [world {:keys [puller-entity-id] :as this} entity-key]
  (let [entity (ecs/get-entity-by-key world entity-key)
        driving? (when puller-entity-id
                   (ecs/query
                    world
                    (ecs/get-entity-by-key world puller-entity-id)
                    :railway/driving?))
        speed  (when puller-entity-id
                 (ecs/query
                  world
                    (ecs/get-entity-by-key world puller-entity-id)
                    :railway/speed))
        my-front (assoc (ecs/query world this :railway/front) :side :front)
        my-rear (assoc (ecs/query world this :railway/rear) :side :rear)
        its-front (assoc (ecs/query world entity :railway/front) :side :front)
        its-rear (assoc (ecs/query world entity :railway/rear) :side :rear)
        [my-closest its-closest closest-distance-sq]
        ,   (->>
             (for [[my its] [[my-front its-front]
                             [my-front its-rear]
                             [my-rear its-front]
                             [my-rear its-rear]]]
               [my its (distance-squared (:position my) (:position its))])
             (sort-by #(nth % 2))
             (first))]
    (cond
      (not (:connector? its-closest)) nil ;; can't connect, stop!
      (= (:side my-closest) :front) nil ;; can't connect to our front, stop!

      ;; TODO - teraz sprawdzic, czy oba konektory sa na tym samym kafelku (chyba musza?)
      ;; i na tym samym tracku (lub odwrotnym)
      (and (= (:tile-xy my-closest) (:tile-xy its-closest))
           (= (sort (:track my-closest)) (sort (:track its-closest))))
      ,   (if (and
                 driving?
                 (< speed 0)
                 (should-connect? my-closest its-closest))

              (ecs/put-all-events
               world
               [(ecs/mk-event this ::ci/stop (::ecs/time world))
                (assoc (ecs/mk-event sys-railway/to-system ::sys-railway/connect (::ecs/time world))
                       :puller-id (ecs/id this)
                       :pulled-id (ecs/id entity))])

              (ecs/insert-object world this))

      :else nil)))


(event-handlers
 [:to-entity ::carriage]

 (::ecs/init
  [world event this]
  [(ecs/retarget event (-> this ::ecs/components :front))
   (ecs/retarget event (-> this ::ecs/components :center))
   (ecs/retarget event (-> this ::ecs/components :rear))])

 (::ci/delta-t
  [_ event {:as this :keys [pulled touching-behind connected-at-rear]}]
  (let [;;{:keys [driving? speed]} (-> this ::ecs/components :center)
        driving? false
        speed 0
        ]
    [(when (and driving? (> speed 0) touching-behind (not connected-at-rear))
       (assoc this :touching-behind nil))
     (ecs/retarget (assoc event :priority -1) (-> this ::ecs/components :center))
     (ecs/retarget (assoc event :priority -1) (-> this ::ecs/components :front))
     (ecs/retarget (assoc event :priority -1) (-> this ::ecs/components :rear))
     ;; invoke the rest of the handler code, which will check for collisions
     (assoc (ecs/mk-event this ::post-delta-t (::ecs/time event)) :priority -1)])

  )

 (::post-delta-t
  [world event {:as this :keys [pulled touching-behind puller-entity-id]}]
    (let [my-id (ecs/id this)
        center (-> this :gamebase-ecs.core/components :center)
        front  (-> this :gamebase-ecs.core/components :front)
        rear (-> this :gamebase-ecs.core/components :rear)
        connected-at-rear (:connected-at-rear this)
        tile-xys (apply hash-set (for [component [center front rear]]
                                   (get-in component [:path ::sys-move/tile-xy])))
        tile-entities-map (:tile-entities-map
                           (get-in world [::ecs/systems
                                          :app.ecs.systems.collisions/collisions]))


        colliding-entity-ids (->> tile-xys
                                  (map #(vector % (tile-entities-map %)))
                                  (map (fn [[tile-xy entities]] [tile-xy (disj entities my-id)]))
                                  (remove (comp empty? second))
                                  (mapcat second)
                                  (remove #(= % connected-at-rear))
                                  (remove #(= % puller-entity-id)))

        world'(loop [wrl world
                     entity-ids colliding-entity-ids]
                (if (empty? entity-ids)
                  wrl
                  (if-let [wrl' (consider-colliding-entity wrl this (first entity-ids))]
                    (recur wrl' (rest entity-ids))
                    nil)))]


    (if world'
      ;; good, we can accept this progress and update our collider
      [world'
       (dissoc center :backup)
       (dissoc front :backup)
       (dissoc rear :backup)
       (assoc (ecs/mk-event (-> this ::ecs/components :collider)
                            :app.ecs.systems.collisions/update
                            (::ecs/time event))
              :priority -1)]
      ;; bad - there was a bad collision, we have to revert changes and stop
      [(:backup center)
       (:backup front)
       (:backup rear)
       (assoc (ecs/mk-event this ::ci/stop (::ecs/time event))
              :priority -1)])))

 ;; to sie moze powinno nazywac connect-front
 (::ci/connect-to
  [world {:keys [reference-entity-or-id] :as event} this]
  [(assoc this :puller-entity-id (ecs/id reference-entity-or-id))
   (ecs/retarget event (-> this ::ecs/components :front))
   (assoc (ecs/mk-event (-> this ::ecs/components :center)
                        ::ci/connect-to
                        (::ecs/time world))
          :reference-entity-or-id (ecs/id this)
          :reference-path-kvs [::ecs/components :front :path]
          :reference-length-on-path-kvs [::ecs/components :front :length-on-path])
   (assoc (ecs/mk-event (-> this ::ecs/components :rear)
                        ::ci/connect-to
                        (::ecs/time world))
          :reference-entity-or-id (ecs/id this)
          :reference-path-kvs [::ecs/components :center :path]
          :reference-length-on-path-kvs [::ecs/components :center :length-on-path])])

 (::ci/disconnect-front
  [world event this]
  (ecs/retarget event (get-in this (ecs/ck-kvs :front))))

 (::ci/connect-pulled
  [world {:keys [pulled-entity-or-id]} this]

  (assoc this
         :connected-at-rear (ecs/id pulled-entity-or-id)
         :touching-behind (ecs/id pulled-entity-or-id)))

 (::ci/disconnect-pulled
  [world {:keys [pulled-entity-or-id]} this]
  (assoc this :connected-at-rear nil))

 (::ci/stop
  [_ event {:keys [puller-entity-id] :as this}]


  [(when puller-entity-id
     (ecs/retarget event (ecs/to-entity puller-entity-id)))])

 (::sys-move/path-end
  [world event this]
  (println "CAR: someone says path end")
  ;;(ecs/mk-event this ::ci/stop (::ecs/time event))
  ))
