(ns gamebase.systems.movement.components.engine
  (:require
   [gamebase-ecs.core :as ecs]
   [gamebase-ecs.event-queue :as eq]
   [app.ecs.common-events :as ci]
   [gamebase.geometry :as g]
   [gamebase.systems.movement.movement :as sys]))


(defmulti engine-next-path (fn [world this path] (::ecs/type this)))
(defmulti engine-previous-path (fn [world this path] (::ecs/type this)))

(defn mk-engine [entity-or-id key
                 {:keys [path length-on-path driving? speed]}]
  (assert path)
  (let [v (assoc
           (ecs/mk-component ::sys/movement entity-or-id key ::engine)
           :path path
           :length-on-path (or length-on-path 0)
           :driving? driving?
           :speed (or speed 0.02))]
    (if :gamebase-ecs.core/*with-xprint*
      (vary-meta v
                 update-in [:app.xprint.core/key-order]
                 concat [[:app.xprint.core/comment "raw state"]
                         :path :length-on-path
                         :driving? :speed
                         [:app.xprint.core/comment
                          "derived state"]
                         :position :angle
                         [:app.xprint.core/comment
                          "derived state - topology"]
                         :at-end? :at-or-after-end?])
      v)))

(defn engine-full-update [{:as this :keys [path length-on-path speed driving?]}
                          time
                          world]
  (loop [path path, length-on-path length-on-path]
    (cond
      (< length-on-path 0)
      , (if-let [previous-path (engine-previous-path world this path)]
          (recur previous-path (+ length-on-path (g/path-length previous-path)))
          (assoc this
                 :driving? false
                 :path path
                 :length-on-path 0
                 :position (g/path-point-at-length path 0)
                 :angle (g/angle-at-length path 0)))
      (> length-on-path (g/path-length path))
      , (if-let [next-path (engine-next-path world this path)]
          (recur next-path (- length-on-path (g/path-length path)))
          (assoc this
                 :driving? false
                 :path path
                 :length-on-path (g/path-length path)
                 :position (g/path-point-at-length path (g/path-length path))
                 :angle (g/angle-at-length path (g/path-length path))))
      :else
      , (assoc this
               :path path
               :length-on-path length-on-path
               :position (g/path-point-at-length path length-on-path)
               :angle (g/angle-at-length path length-on-path)))))

(defmethod ecs/handle-event [:to-component ::engine ::ecs/init]
  [world event this]
  (engine-full-update this (::eq/time event) world))

(defmethod ecs/handle-event [:to-component ::engine ::ci/delta-t]
  [world {:as event :keys [delta-t]} {:as this :keys [length-on-path driving? speed]}]
  (let [engine'(-> (if driving?
                     (assoc this :length-on-path (+ length-on-path (* delta-t speed)))
                     this)
                   (engine-full-update (::eq/time event) world))]
    (assoc engine' :backup this)))

(defmethod ecs/handle-event [:to-component ::engine ::ci/stop]
  [world event this]
  (assoc this :driving? false))

(defmethod ecs/handle-event [:to-component ::engine ::ci/drive]
  [world event {:as this :keys [driving?]}]
  (assoc this
         :driving? true
         :speed 0.02))

(defmethod ecs/handle-event [:to-component ::engine ::ci/reverse-drive]
  [world event {:as this :keys [driving?]}]
  (assoc this
         :driving? true
         :speed -0.01))
