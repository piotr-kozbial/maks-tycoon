(ns gamebase.systems.movement.components.railway-engine
  (:require
   [gamebase-ecs.core :as ecs]
   [gamebase-ecs.event-queue :as eq]
   [app.ecs.common-events :as ci]
   [gamebase.geometry :as g]
   [app.tiles.general :as tiles]
   [gamebase.systems.movement.movement :as sys]
   [gamebase.systems.movement.components.engine :as eng]))



(derive ::railway-engine ::eng/engine)

(defn mk-railway-engine [entity-or-id key {:keys [tile-x tile-y track length-on-track
                                                  driving? speed]}]
  (let [path (assoc (tiles/track-path track tile-x tile-y)
                    ::sys/tile-xy [tile-x tile-y]
                    ::sys/track track)]
    (assoc
     (eng/mk-engine entity-or-id key {:path path
                                  :length-on-path length-on-track
                                  :driving? driving?
                                  :speed speed})
     ::ecs/type ::railway-engine)))

(defmethod eng/engine-next-path ::railway-engine
  [world _ path]
  (sys/-railway-next-path world path))

(defmethod eng/engine-previous-path ::railway-engine
  [world _ path]
  (sys/-railway-previous-path world path))

