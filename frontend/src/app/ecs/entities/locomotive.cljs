(ns app.ecs.entities.locomotive
  (:require
   [gamebase-ecs.core :as ecs]
   [gamebase.systems.drawing :as sys-drawing]
   [app.ecs.systems.movement.movement :as sys-move]
   [app.ecs.systems.collisions :refer [mk-collider]]
   [app.ecs.systems.movement.components.railway-roller :refer [mk-railway-roller]]
   [app.ecs.systems.movement.components.railway-engine :refer [mk-railway-engine]]
   [gamebase-ecs.event-queue :as eq]
   [gamebase.geometry :as g]
   [app.tiles.general :as tiles]
   [gamebase.layers :as layers]
   [app.state :as st]
   [app.ecs.common-events :as ci]
   [app.ecs.operations :as ops])
  (:require-macros
   [gamebase.helpers :refer [event-handlers]]))

(defn mk-entity [id tile-x tile-y]
  (let [entity (ecs/mk-entity id ::locomotive)]
    (assoc
     entity

     :gamebase-ecs.core/components
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

(defmethod ecs/query [:entity ::locomotive :railway/front]
  [this _]
  (let [roller (-> this ::ecs/components :front)]
    {:tile-xy (get-in roller [:path :app.ecs.systems.movement.movement/tile-xy])
     :track (get-in roller [:path :app.ecs.systems.movement.movement/track])
     :track-length (g/path-length (:path roller))
     :length-on-track (get-in roller [:length-on-path])
     :position (get-in roller [:position])
     :connector? false}))

(defmethod ecs/query [:entity ::locomotive :railway/rear]
  [this _]
  (let [roller (-> this ::ecs/components :rear)]
    {:tile-xy (get-in roller [:path :app.ecs.systems.movement.movement/tile-xy])
     :track (get-in roller [:path :app.ecs.systems.movement.movement/track])
     :track-length (g/path-length (:path roller))
     :length-on-track (get-in roller [:length-on-path])
     :position (get-in roller [:position])
     :connector? true}))

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

(defn consider-colliding-entity [world this entity-id]
  (let [entity (ecs/get-entity-by-key world entity-id)
        my-front (assoc (ecs/query this :railway/front) :side :front)
        my-rear (assoc (ecs/query this :railway/rear) :side :rear)
        its-front (assoc (ecs/query entity :railway/front) :side :front)
        its-rear (assoc (ecs/query entity :railway/rear) :side :rear)
        [my-closest its-closest closest-distance-sq]
        ,   (->>
             (for [[my its] [[my-front its-front]
                             [my-front its-rear]
                             [my-rear its-front]
                             [my-rear its-rear]]]
               [my its (distance-squared (:position my) (:position its))])
             (sort-by #(nth % 2))
             (first))
        this' (assoc
               this
               "my front" my-front
               "my rear" my-rear
               (str entity-id " front") its-front
               (str entity-id " rear") its-rear
               "MY CLOSEST" my-closest
               "ITS CLOSEST" its-closest
               "CLOSEST DIST. ^2" closest-distance-sq
               )]

    (cond
      (not (:connector? its-closest)) nil ;; can't connect, stop!
      (= (:side my-closest) :front) nil ;; can't connect to our front, stop!

      ;; TODO - teraz sprawdzic, czy oba konektory sa na tym samym kafelku (chyba musza?)
      ;; i na tym samym tracku (lub odwrotnym)
      (and (= (:tile-xy my-closest) (:tile-xy its-closest))
           (= (sort (:track my-closest)) (sort (:track its-closest))))
      ,   (if (should-connect? my-closest its-closest)
            ;;nil ;; TODO - tak naprawde connect
            ;; TODO - i w dodatku musimy sie ustawic na rowniutko, tzn. nasze length-on-path
            ;; zeby bylo rowne jego length-on-path (lub odwrotnie, jesli on stoi odwrotnie)
            (let [world'
                  (ecs/put-all-events
                   world
                   [(ecs/mk-event this ::ci/stop (::ecs/time world))
                    (assoc (ecs/mk-event entity ::ci/connect-to (::ecs/time world))
                           :reference-entity-or-id (ecs/id this)
                           :reference-path-kvs [::ecs/components :engine :path]
                           :reference-length-on-path-kvs [::ecs/components :engine :length-on-path])])
                  world''
                  (ecs/insert-object
                   world'
                   (assoc this
                          :connected-at-rear entity-id))]
              world'')
            (ecs/insert-object world this'))

      :else nil
      )


    ))

(event-handlers
 [:to-entity ::locomotive]

 (::ecs/init
  [world event this]
  (ecs/retarget event (-> this ::ecs/components :engine)))

 (::ci/delta-t
  [_ event {:as this :keys [pulled touching-behind]}]
  [;; update collider
   ;; (assoc (ecs/mk-event (-> this ::ecs/components :collider)
   ;;                      :app.ecs.systems.collisions/update
   ;;                      (::ecs/time event))
   ;;        :priority -1)

   ;; pass delta-t to other components - let them propose a move
   (ecs/retarget (assoc event :priority -1) (-> this ::ecs/components :engine))
   (ecs/retarget (assoc event :priority -1) (-> this ::ecs/components :front))
   (ecs/retarget (assoc event :priority -1) (-> this ::ecs/components :rear))
   ;; invoke the rest of the handler code, which will check for collisions
   (assoc (ecs/mk-event this ::post-delta-t (::ecs/time event)) :priority -1)])



 (::post-delta-t
  [world event {:as this :keys [pulled touching-behind]}]
  (let [my-id (ecs/id this)
        engine (-> this :gamebase-ecs.core/components :engine)
        front  (-> this :gamebase-ecs.core/components :front)
        rear (-> this :gamebase-ecs.core/components :rear)
        connected-at-rear (:connected-at-rear this)
        tile-xys (apply hash-set (for [component [engine front rear]]
                                   (get-in component [:path ::sys-move/tile-xy])))
        tile-entities-map (:tile-entities-map
                           (get-in world [::ecs/systems
                                          :app.ecs.systems.collisions/collisions]))


        colliding-entity-ids (->> tile-xys
                                  (map #(vector % (tile-entities-map %)))
                                  (map (fn [[tile-xy entities]] [tile-xy (disj entities my-id)]))
                                  (remove (comp empty? second))
                                  (mapcat second)
                                  (remove #(= % connected-at-rear)))

        world'(loop [wrl world
                     entity-ids colliding-entity-ids]
                (if (empty? entity-ids)
                  wrl
                  (if-let [wrl' (consider-colliding-entity wrl this (first entity-ids))]
                    (recur wrl' (rest entity-ids))
                    nil)))]
    ;; (when (and (not pulled) touching-behind)
    ;;   (assoc this :touching-behind nil))
    ;; (print (pr-str tile-xys))

    (if world'
      ;; good, we can accept this progress and update our collider
      [world'
       (dissoc engine :backup)
       (dissoc front :backup)
       (dissoc rear :backup)
       (assoc (ecs/mk-event (-> this ::ecs/components :collider)
                            :app.ecs.systems.collisions/update
                            (::ecs/time event))
              :priority -1)]
      ;; bad - there was a bad collision, we have to revert changes and stop
      [(:backup engine)
       (:backup front)
       (:backup rear)
       (assoc (ecs/mk-event this ::ci/stop (::ecs/time event))
              :priority -1)])))

 (::ci/stop
  [_ event this]
  (ecs/retarget (assoc event :priority -1) (-> this ::ecs/components :engine)))

 (::ci/drive
  [_ event {:keys [rear-coupling] :as this}]
  (ecs/retarget event (-> this ::ecs/components :engine)))

 (::ci/reverse-drive
  [_ event {:keys [rear-coupling] :as this}]
  (ecs/retarget event (-> this ::ecs/components :engine)))



 (::sys-move/path-end
  [world event this]
  (println "LOC: someone says path end")
  (ecs/mk-event this ::ci/stop (::ecs/time event)))

 (::ci/connect-pulled
  [world {:keys [pulled-entity-or-id]} this]
  (assoc this
         :pulled (ecs/id pulled-entity-or-id)
         :touching-behind (ecs/id pulled-entity-or-id)))

 (::ci/disconnect-pulled
  [world {:keys [pulled-entity-or-id]} this]
  (assoc this :pulled nil)))
