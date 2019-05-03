(ns app.ecs.entities.locomotive
  (:require
   [gamebase.ecs :as ecs]
   [gamebase.systems.drawing :as sys-drawing]
   [gamebase.systems.movement :as sys-move]
   [gamebase.event-queue :as eq]
   [gamebase.geometry :as g]
   [app.tiles.general :as tiles]
   [gamebase.layers :as layers]
   [app.world-interop :as wo]
   [app.state :as st]
   [app.ecs.common-events :as ci]))

(defn mk-entity [id tile-x tile-y]
  (let [entity (ecs/mk-entity id ::locomotive)]
    (assoc
     entity

     :gamebase.ecs/components
     {
      ;; :move (sys-move/mk-path-follower2
      ;;        entity
      ;;        :move
      ;;        {:path-or-paths (assoc (tiles/track-path [:w :e] tile-x tile-y)
      ;;                               ::tile-xy [tile-x tile-y]
      ;;                               ::track [:w :e])
      ;;         :path-start-length 16
      ;;         :extra-points {:rear -15, :front 15}
      ;;         :driving? false})

      :move (sys-move/mk-railway-engine
             entity
             :move
             {:tile-x tile-x
              :tile-y tile-y
              :track [:w :e]
              :driving? true})
      :img (sys-drawing/mk-static-image-component
            entity :img
            {:point-kvs (ecs/ck-kvs :move :position)
             :angle-kvs (ecs/ck-kvs :move :angle)
             :center [16 8]
             :resource-name-kvs [:image]})

      ;; :debug-rear (sys-drawing/mk-dot-component
      ;;              entity :debug-rear
      ;;              {:point-kvs (ecs/ck-kvs :move :extra-xy :rear)
      ;;               :color [200 0 0]})

      ;; :debug-front (sys-drawing/mk-dot-component
      ;;               entity :debug-front
      ;;               {:point-kvs (ecs/ck-kvs :move :extra-xy :front)
      ;;                :color [255 255 255]})

      ;; :debug-tile (sys-drawing/mk-tile-component
      ;;              entity :debug-tile
      ;;              {:xy-kvs (ecs/ck-kvs :move :path ::tile-xy)
      ;;               :color [56 204 226]})

      ;; :debug-tile-front (sys-drawing/mk-tile-component
      ;;              entity :debug-tile-front
      ;;              {:xy-kvs (ecs/ck-kvs :move :extra-paths :front ::tile-xy)
      ;;               :color [56 204 226]})

      ;; :debug-tile-rear (sys-drawing/mk-tile-component
      ;;               entity :debug-tile-rear
      ;;               {:xy-kvs (ecs/ck-kvs :move :extra-paths :rear ::tile-xy)
      ;;                :color [56 204 226]})
      }

     :tile-x tile-x
     :tile-y tile-y
     :track [:w :e]

     :tile-track-history [[tile-x tile-y [:w :e]]]

     :front-coupling nil
     :rear-coupling nil

     :image "loco1.png")))

(defmethod ecs/handle-event [:to-entity ::locomotive ::ecs/init]
  [world event this]
  (ecs/retarget event (-> this ::ecs/components :move)))

(defmethod ecs/handle-event [:to-entity ::locomotive ::ci/stop]
  [world event this]
  (ecs/retarget event (-> this ::ecs/components :move)))

(defmethod ecs/handle-event [:to-entity ::locomotive ::ci/drive]
  [world event {:keys [rear-coupling] :as this}]
  (ecs/retarget event (-> this ::ecs/components :move)))

(defmethod ecs/handle-event [:to-entity ::locomotive ::ci/delta-t]
  [world event this]
  this
  ;; [(assoc this
  ;;         :image
  ;;         (if (:rear-coupling this)
  ;;           "loco1-coupled.png"
  ;;           "loco1.png")

  ;;         )]
  )
