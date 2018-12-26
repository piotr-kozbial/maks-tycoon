(ns app.world-interop
  (:require
   [gamebase.ecs :as ecs]
   [gamebase.virtual-timer :as vt]
   [gamebase.event-queue :as eq]
   [gamebase.layers :as layers]
   [app.server-communication :as sc]
   [app.state :refer [app-state ui-refresh-tick]]))

;; time-related operations

(defn run []
  (let [{:keys [world timer]} @app-state]
    (assert world)
    (swap! app-state update-in [:timer] #(vt/run % (::ecs/time world)))))

(defn stop []
  (let [{:keys [world timer]} @app-state]
    (assert world)
    (swap! app-state update-in [:timer] vt/stop)))

(defn running? []
  (let [{:keys [world timer]} @app-state]
    (assert world)
    (vt/running? timer)))

(defn get-time []
  "Returns virtual time if the world is running, world time otherwise."
  (let [{:keys [world timer]} @app-state]
    (assert world)
    (if (vt/running? timer)
      (vt/get-time timer)
      (::ecs/time world))))

;; whole world related operation

(defn set-world [world]
  (swap! app-state assoc :world world)
  (stop))

(defn destroy-world []
  (swap! app-state assoc :world nil))

;; other





(defn get-all-locomotives [world]

  (filter
   #(= (::ecs/type %) :app.ecs.entities.locomotive/locomotive)
   (vals (::ecs/entities world)))
  ;; (::ecs/entities world)

  )



(comment



  (count (get-all-locomotives (:world @app.state/app-state)))





 )

(defn send-to-entity [entity-key msg & kvs]
  (let [{:keys [world]} @app-state
        entity (ecs/get-entity-by-key world entity-key)
        time (get-time)
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

(defn kill-train [world loc-key]
  (loop [key loc-key]
    (when key
      (let [entity (ecs/get-entity-by-key world key)]
        (kill-entity key)
        (recur (:rear-coupling entity))))

    ))

