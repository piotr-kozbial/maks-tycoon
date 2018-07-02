(ns app.ecs.entities.locomotive
  (:require
   [gamebase.ecs :as ecs]
   [gamebase.systems.drawing :as sys-drawing]
   [gamebase.systems.movement :as sys-move]
   [gamebase.event-queue :as eq]
   [gamebase.geometry :as g]))

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

(def path1 (g/line-segment [100 100] [200 120]))
(def path2 (g/line-segment [200 120] [300 70]))
(def path3 (g/line-segment [300 70] [100 100]))

(defmethod ecs/handle-event [:to-entity ::locomotive ::ecs/init]
  [world event this]
  (println "LOCOMOTIVE INIT")
  (assoc
   (ecs/mk-event (-> this ::ecs/components :move)
                 ::sys-move/set-path
                 (::eq/time event))
   :path path1))

(defmethod ecs/handle-event [:to-entity ::locomotive ::sys-move/at-path-end]
  [world event this]
  ;; (println "LOCOMOTIVE AT PATH END!")
  (let [path (-> this ::ecs/components :move :path)]
    [(assoc
      (ecs/mk-event (-> this ::ecs/components :move)
                    ::sys-move/set-path
                    (::eq/time event))
      :path (cond
              (= path path1) path2
              (= path path2) path3
              (= path path3) path1))]))