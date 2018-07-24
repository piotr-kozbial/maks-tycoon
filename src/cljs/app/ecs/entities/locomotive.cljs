(ns app.ecs.entities.locomotive
  (:require
   [gamebase.ecs :as ecs]
   [gamebase.ecsu :as ecsu]
   [gamebase.systems.drawing :as sys-drawing]
   [gamebase.systems.movement :as sys-move]
   [gamebase.event-queue :as eq]
   [gamebase.geometry :as g]))

;; (defn mk-entity [id]
;;   (let [e (ecs/mk-entity id ::locomotive)]
;;     (assoc
;;      e
;;      :origin [0 0]
;;      ::ecs/components
;;      {:move (sys-move/mk-path-follower e :move nil)
;;       :img (sys-drawing/mk-static-image-component
;;             e :img
;;             {:point-kvs (ecs/ck-kvs :move :position)
;;              :angle-kvs (ecs/ck-kvs :move :angle)
;;              :center [16 8]
;;              :resource-name "loco1.png"})
;;       :debug-path (sys-drawing/mk-path-component
;;                    e :debug-path
;;                    {:path-kvs (ecs/ck-kvs :move :path)})})))

(defn mk-entity [id]
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
   :origin [0 0]))

;; (def path1 ;;(g/precomputed (g/circle-arc [100 100] 100 (g/degrees 0) (g/degrees 180) :positive))
;;   (g/line-segment [0 16] [200 16]))
;; (def path2 ;(g/line-segment [200 120] [300 70])
;;   (g/precomputed (g/line-segment [0 100] [100 100])))
;; (def path3 ;(g/line-segment [300 70] [100 100])
;;   (g/precomputed (g/line-segment [100 100] [200 100])))


(def path1  (g/line-segment [0 16] [200 16]))
(def path2
  (g/precomputed (g/circle-arc [100 16] 100 (g/degrees 0) (g/degrees 180) :positive)))

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
      :path
      (cond
              (= path path1) path2
              (= path path2) path1
              ;;(= path path3) path1
              )

      )]))

