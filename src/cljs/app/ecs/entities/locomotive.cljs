(ns app.ecs.entities.locomotive
  (:require
   [gamebase.ecs :as ecs]
   [gamebase.ecsu :as ecsu]
   [gamebase.systems.drawing :as sys-drawing]
   [gamebase.systems.movement :as sys-move]
   [gamebase.event-queue :as eq]
   [gamebase.geometry :as g]))

(defn mk-entity [id tile-x tile-y]
  (ecsu/mk-entity

   id

   ::locomotive

   {:move (ecsu/mk-component sys-move/mk-path-follower nil)
    :img (ecsu/mk-component sys-drawing/mk-static-image-component
                            {:point-kvs (ecs/ck-kvs :move :position)
                             :angle-kvs (ecs/ck-kvs :move :angle)
                             :center [16 8]
                             :resource-name "loco1.png"})
    :debug-path (ecsu/mk-component sys-drawing/mk-path-component
                                   {:path-kvs (ecs/ck-kvs :move :path)})}

   :path1  (g/line-segment [0 16] [200 16])
   :path2 (g/precomputed (g/circle-arc [100 16] 100 (g/degrees 0) (g/degrees 180) :positive))
   :tile-x tile-x
   :tile-y tile-y
   ;;:origin [0 0]
   ))


(defmethod ecs/handle-event [:to-entity ::locomotive ::ecs/init]
  [world event this]
  (println "LOCOMOTIVE INIT")
  (assoc
   (ecs/mk-event (-> this ::ecs/components :move)
                 ::sys-move/set-path
                 (::eq/time event))
   :path (:path1 this)))

(defmethod ecs/handle-event [:to-entity ::locomotive ::sys-move/at-path-end]
  [world event this]
  (let [path (-> this ::ecs/components :move :path)
        {:keys [path1 path2]} this]
    [(assoc
      (ecs/mk-event (-> this ::ecs/components :move)
                    ::sys-move/set-path
                    (::eq/time event))
      :path (cond
              (= path path1) path2
              (= path path2) path1))]))

