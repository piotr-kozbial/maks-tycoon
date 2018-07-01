(ns gamebase.systems.movement
  (:require
   [gamebase.ecs :as ecs]
   [gamebase.event-queue :as eq]
   [gamebase.geometry :as g]))

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
  (assoc
   (ecs/mk-component ::movement entity-or-id key ::path-follower)
   :speed 0.003))

(defmethod ecs/handle-event [:to-component ::path-follower :update]
  [world event {:keys [path path-start-time path-start-length speed] :as component}]
  (when path
    (let [time-of-travel (- (::eq/time event) path-start-time)
          length-traveled (* time-of-travel speed)
          [x y] (g/path-point-at-length path length-traveled)]
      ;;(println (str "FOLLOWER UPDATE: (" length-traveled ") " x " " y))
      (assoc component :position [x y])
      ))
  ;;(println (pr-str event))
)

(defmethod ecs/handle-event [:to-component ::path-follower ::set-path]
  [world {:keys [path] :as event} component]
  (println (str "SET PATH! " (pr-str path)))
  (assoc component
         :path path
         :path-start-length 0
         :path-start-time (:gamebase.event-queue/time event)))

(defmethod ecs/handle-event [:to-component ::path-follower ::ecs/init]
  [world event component]
  (println "PATH-FOLLOWER INIT")
  [])
