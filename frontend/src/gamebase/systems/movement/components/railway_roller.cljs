(ns gamebase.systems.movement.components.railway-roller
  (:require
   [gamebase-ecs.core :as ecs]
   [gamebase-ecs.event-queue :as eq]
   [app.ecs.common-events :as ci]
   [gamebase.geometry :as g]
   [gamebase.systems.movement.components.roller :as rol]


   [gamebase.systems.movement.movement :as sys]) 
  )


(derive ::railway-roller ::rol/roller)

(defn mk-railway-roller [entity-or-id key
                         & [{:as args
                             :keys
                             [tile-x tile-y track
                              reference-entity-or-id
                              reference-path-kvs
                              reference-length-on-path-kvs
                              ]}]]
  (let [v (assoc
           (rol/mk-roller entity-or-id key args)
           ::ecs/type ::railway-roller
           :reference-entity-id (ecs/id reference-entity-or-id)
           :reference-path-kvs reference-path-kvs
           :reference-length-on-path-kvs reference-length-on-path-kvs)]
    (if :gamebase-ecs.core/*with-xprint*
      (vary-meta v
                 update-in [:app.xprint.core/key-order]
                 concat [[:app.xprint.core/comment
                          "configuration"]])
      v)))

(defmethod rol/roller-next-path ::railway-roller
  [world _ path]
  (sys/-railway-next-path world path))

(defmethod rol/roller-previous-path ::railway-roller
  [world this path]
  (let [[tile-x tile-y] (:gamebase.systems.movement.movement/tile-xy (:path this))
        track (:gamebase.systems.movement.movement/track (:path this))]
    (sys/-railway-previous-path world path
                            {:hint-tile-x tile-x
                             :hint-tile-y tile-y
                             :hint-track track})))

(defmethod rol/roller-get-reference ::railway-roller
  [world {:as this :keys [reference-entity-id
                          reference-path-kvs
                          reference-length-on-path-kvs]}]
  (when reference-entity-id
    (let [entity (ecs/get-entity-by-key world reference-entity-id)]
      [(get-in entity reference-path-kvs)
       (get-in entity reference-length-on-path-kvs)])))

(defmethod ecs/handle-event [:to-component ::railway-roller ::ci/connect-to]
  [world
   {:keys [reference-entity-or-id
           reference-path-kvs
           reference-length-on-path-kvs]}
   this]
  (assoc this
         :reference-entity-id (ecs/id reference-entity-or-id)
         :reference-path-kvs reference-path-kvs
         :reference-length-on-path-kvs reference-length-on-path-kvs))

(defmethod ecs/handle-event [:to-component ::railway-roller ::ci/disconnect-front]
  [world event this]
  (assoc this
         :reference-entity-id nil
         :reference-path-kvs nil
         :reference-length-on-path-kvs nil))


