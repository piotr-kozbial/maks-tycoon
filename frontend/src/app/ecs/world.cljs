(ns app.ecs.world
  (:require
   [gamebase-ecs.core :as ecs]
   [app.ecs.common-events :as ci]))

(defmethod ecs/handle-event [:to-world ::ci/delta-t]
  [world event _]
  (concat
   (for [sys (ecs/all-systems world)] (ecs/retarget event sys))
   (for [e (ecs/all-entities world)] (ecs/retarget event e))))
