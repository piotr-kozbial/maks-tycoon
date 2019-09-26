(ns app.ecs.systems.railway
  (:require 
   [gamebase-ecs.core :as ecs]
   [app.ecs.common-events :as ci]
   [app.tiles.turnouts :as turnouts]))

(defn mk-system []
  (ecs/mk-system ::railway))

(def to-system
  (ecs/to-system ::railway))

(defmethod ecs/handle-event [:to-system ::railway ::ci/delta-t]
  [world event system]
  nil)

(defmethod ecs/handle-event [:to-system ::railway ::switch-turnout]
  [world {:keys [tile-x tile-y]} system]
  (when (turnouts/is-turnout? tile-x tile-y)
    (turnouts/cycle-turnout-state2 world tile-x tile-y)))
