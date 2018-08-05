(ns gamebase.systems.movement
  (:require
   [gamebase.ecs :as ecs]
   [gamebase.ecsu :as ecsu]
   [gamebase.event-queue :as eq]
   [gamebase.geometry :as g]
   [app.ecs.common-events :as ci])

  (:require-macros [gamebase.ecsu :as ecsu]))

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
   [entity-or-id key {:keys [path-history-size]}]
   (assoc
    (ecs/mk-component ::movement entity-or-id key ::path-follower)
    :driving? true
    :speed 0.02
    :path-history-size path-history-size
    :path-history []))

 (ecsu/handle-event ::ecs/init [])

 (ecsu/handle-event :update (do-update <this> <time> <world>))

 (ecsu/handle-event ::ci/stop
                    (when (:driving? <this>)
                      (when-let [[maybe-event this'] (do-update <this> <time> <world>)]
                        [maybe-event (assoc this' :driving? false)])))

 (ecsu/handle-event ::ci/drive
                    (when-not (:driving? <this>)
                      (set-path
                       (assoc <this> :driving? true)
                       <time>
                       (:path <this>)
                       (:length-on-path <this>))))

 (ecsu/handle-event ::set-path
                    (let [{:keys [path]} <event>]
                      (set-path <this> <time> path 0)))

 (local

  calculate-path-end-time
  , (fn [{:keys [path path-start-length path-start-time speed] :as component} time]
      (when (> speed 0)
        (int (+ time (/ (- (g/path-length path) path-start-length) speed)))))

  set-path
  , (fn [this time path path-start-length]
      (let [history (:path-history this)
            history' (into history [(:path this)])
            history'' (if (<= (count history') (:path-history-size this))
                        history'
                        (apply vector (rest history')))
            this' (assoc this
                         :path-history history''
                         :path path
                         :path-start-length path-start-length
                         :path-start-time time)
            path-end-time (calculate-path-end-time this' time)]
        [(assoc this' :path-end-time path-end-time)
         ;; ensure we'll get an :update event exactly at the end of the path
         (ecs/mk-event this :update path-end-time)]))

  do-update
  , (fn [<this> <time> <world>]
      (let [{:keys [path
                    path-start-time
                    path-start-length
                    path-end-time
                    speed
                    driving?]} <this>]
        (when (and path driving?)
          (let [time-of-travel (- <time> path-start-time)
                length-on-path (+ path-start-length (* time-of-travel speed))
                total-path-length (g/path-length path)
                at-end? (= <time> path-end-time)
                after-end? (>= <time> path-end-time)]

            [(when at-end?
               (ecs/mk-event (ecsu/my-entity) ::at-path-end <time>))
             (assoc <this>

                    :length-on-path length-on-path
                    :at-end? at-end?
                    :after-end? after-end?

                    :position
                    (g/path-point-at-length
                     path
                     (if after-end? total-path-length length-on-path))

                    :angle
                    (g/angle-at-length
                     path
                     (if after-end? total-path-length length-on-path)))]))))))

