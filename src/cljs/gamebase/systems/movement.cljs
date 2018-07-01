(ns gamebase.systems.movement
  (:require
   [gamebase.ecs :as ecs]
   [gamebase.event-queue :as eq]))

(defn mk-system []
  (ecs/mk-system ::movement))

(def to-system
  (ecs/to-system ::movement))


(defmethod ecs/handle-event [:to-system ::movement :update]
  [world event system]
  (ecs/pass-event-through-all world event
                              (ecs/all-components-of-system
                               world system)))


;;;;;----------------------------------------------
;;;;; Component: test-diagonal

(defn mk-test-diagonal-component
  [entity-or-id key _]
  ;; (assoc
  ;;  (ecs/mk-component ::movement entity-or-id key ::test-diagonal)
  ;;  :position [30 30])
  (ecs/mk-component ::movement entity-or-id key ::test-diagonal))

(defmethod ecs/handle-event [:to-component ::test-diagonal :update]
  [world event component]

  (let [t (::eq/time event)
        d (rem (int (* 0.05 t)) 200)]
    (assoc component
           :position [d d])))


;;;;;----------------------------------------------
;;;;; Component: path-follower

;; Will send the following events to its owning entity:
;; ::out-of-path {:follower <my key>}

(defn mk-path-follower
  [entity-or-id key _]
  (ecs/mk-component ::movement entity-or-id key ::path-follower))

(defmethod ecs/handle-event [:to-component ::path-follower :update]
  [world event component]
  ;;(println (pr-str event))
  (assoc component
         :position [200 100]))

(defmethod ecs/handle-event [:to-component ::path-follower ::set-path]
  [world {:keys [path] :as event} component]
  (println "SET PATH!")
  (assoc component
         :path path
         :path-start-length 0
         :path-start-time (:gamebase.event-queue/time event)))

(defmethod ecs/handle-event [:to-component ::path-follower ::ecs/init]
  [world event component]
  (println "PATH-FOLLOWER INIT")
  [])
