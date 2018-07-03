(ns gamebase.systems.movement
  (:require
   [gamebase.ecs :as ecs]
   [gamebase.ecsu :as ecsu]
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

(ecsu/component ::path-follower

 (defn mk-path-follower
   [entity-or-id key _]
   (assoc
    (ecs/mk-component ::movement entity-or-id key ::path-follower)
    :speed 0.06))

 (ecsu/handle-event ::ecs/init
  (println "PATH-FOLLOWER INIT")
  [])

 (ecsu/handle-event :update

  (let [{:keys [path
                path-start-time
                path-start-length
                path-end-time
                speed]} <this>]
    (when path
      (let [time-of-travel (- <time> path-start-time)
            length-on-path (+ path-start-length (* time-of-travel speed))
            total-path-length (g/path-length path)
            at-end? (= <time> path-end-time)
            after-end? (>= <time> path-end-time)]

        [(when at-end?
           (ecs/mk-event (ecsu/my-entity) ::at-path-end <time>))
         (assoc <this>

                :position
                (g/path-point-at-length
                 path
                 (if after-end? total-path-length length-on-path))

                :angle
                (g/angle-at-length
                 path
                 (if after-end? total-path-length length-on-path)))]))))

 (ecsu/handle-event ::set-path
                    (let [{:keys [path]} <event>]
                      (let [this' (assoc <this>
                                         :path path
                                         :path-start-length 0
                                         :path-start-time <time>)
                            path-end-time (calculate-path-end-time this' <time>)]
                        [(assoc this' :path-end-time path-end-time)
                         ;; ensure we'll get an :update event exactly at the end of the path
                         (ecs/mk-event <this> :update path-end-time)])))

 (local

  calculate-path-end-time
  , (fn [{:keys [path path-start-length path-start-time speed] :as component} time]
      (when (> speed 0)
        (int (+ time (/ (- (g/path-length path) path-start-length) speed)))))))

