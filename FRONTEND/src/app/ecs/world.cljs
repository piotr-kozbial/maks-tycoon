(ns app.ecs.world
  (:require
   [gamebase.ecs :as ecs]))

(defmethod ecs/handle-event [:to-world :update]
  [world event _]
  (-> world
      (#(reduce
         (fn [wrl sys] (ecs/do-handle-event wrl (ecs/retarget event sys)))
         %
         (ecs/all-systems %)))
      (#(reduce
         (fn [wrl e] (ecs/do-handle-event wrl (ecs/retarget event e)))
         %
         (ecs/all-entities %)))))
