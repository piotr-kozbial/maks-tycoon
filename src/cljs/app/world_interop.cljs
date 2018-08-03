(ns app.world-interop
  (:require
   [gamebase.ecs :as ecs]
   [gamebase.virtual-timer :as vt]
   [gamebase.event-queue :as eq]
   [app.state :refer [app-state ui-refresh-tick virtual-timer event-queue]]
   [app.ecs.entities.locomotive :as locomotive]))


(defn get-all-locomotives [world]

  (filter
   #(= (::ecs/type %) ::locomotive/locomotive)
   (vals (::ecs/entities world)))
  ;; (::ecs/entities world)

  )



(comment



  (count (get-all-locomotives (:world @app.state/app-state)))





 )

(defn send-to-entity [entity-key msg & kvs]
  (let [{:keys [world]} @app-state
        entity (ecs/get-entity-by-key world entity-key)
        time (vt/get-time virtual-timer
                          )
        event (apply assoc (ecs/mk-event (ecs/to entity) msg time) kvs)]
    (apply eq/put-event! event-queue event kvs)))


(defn inject-entity [e]
  (swap! app-state
         (fn [{:keys [world] :as state}]
           (assoc
            state
            :world
            (ecs/insert-object world e))))
  nil)

(defn kill-entity [entity-key]
  (swap! app-state
         (fn [{:keys [world] :as state}]
           (assoc
            state
            :world
            (ecs/remove-entity-by-key world entity-key))))
  nil)