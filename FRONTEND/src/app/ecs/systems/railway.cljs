(ns app.ecs.systems.railway
  (:require 
   [gamebase.ecs :as ecs]
   [app.ecs.common-events :as ci]
   [app.tiles.turnouts :as turnouts]))

(defn mk-system []
  (ecs/mk-system ::railway))

(def to-system
  (ecs/to-system ::railway))

(defmethod ecs/handle-event [:to-system ::railway ::ci/delta-t]
  [world event system]
  ;; (ecs/pass-event-through-all world event
  ;;                             (ecs/all-components-of-system
  ;;                              world system))
  nil)

(defmethod ecs/handle-event [:to-system ::railway ::switch-turnout]
  [world {:keys [tile-x tile-y]} system]

  (when (turnouts/is-turnout? tile-x tile-y)

    (.log js/console (str "SWICH TURNOUT BY SYSTEM!!! " tile-x ", " tile-y))
    (turnouts/cycle-turnout-state2 world tile-x tile-y)))
