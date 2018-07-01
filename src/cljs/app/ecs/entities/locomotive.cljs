(ns app.ecs.entities.locomotive
  (:require
   [gamebase.ecs :as ecs]
   [gamebase.systems.drawing :as sys-drawing]
   [gamebase.systems.movement :as sys-move]
   [gamebase.event-queue :as eq]))

(defn mk-entity [id]
  (let [e (ecs/mk-entity id ::locomotive)]
    (assoc
     e
     :origin [0 0]
     ::ecs/components
     {;;:move (sys-move/mk-test-diagonal-component e :move nil)
      :move (sys-move/mk-path-follower e :move nil)
      :img (sys-drawing/mk-static-image-component
            e :img
            {:point-kvs (ecs/ck-kvs :move :position)
             :offset [-10 -10]
             :resource-name "loco1.png"
             })})))

(defmethod ecs/handle-event [:to-entity ::locomotive ::ecs/init]
  [world event this]
  ;;(println (str "LOCOMOTIVE INIT with move: " (pr-str (ecs/to-component (-> entity ::ecs/components :move)))))
  (println (str "LOCOMOTIVE INIT with move: " (pr-str (-> this ::ecs/components :move))))
  (ecs/mk-event (-> this ::ecs/components :move) ::ecs/init (::eq/time event)))
