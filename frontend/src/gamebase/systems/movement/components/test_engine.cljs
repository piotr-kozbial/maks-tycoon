(ns gamebase.systems.movement.components.test-engine
  (:require
   [gamebase-ecs.core :as ecs]
   [gamebase.event-queue :as eq]
   [app.ecs.common-events :as ci]
   [gamebase.geometry :as g]
   [gamebase.systems.movement.components.engine :as eng]))

(derive ::test-engine ::eng/engine)

(defn mk-test-engine [engine-next-path-f
                      engine-previous-path-f
                      & args]
  (assoc
   (apply eng/mk-engine args)
   ::ecs/type ::test-engine
   ::engine-next-path-f engine-next-path-f
   ::engine-previous-path-f engine-previous-path-f))

(defmethod eng/engine-next-path ::test-engine
  [world this path]
  ((::engine-next-path-f this) world this path))

(defmethod eng/engine-previous-path ::test-engine
  [world this path]
  ((::engine-previous-path-f this) world this path))
