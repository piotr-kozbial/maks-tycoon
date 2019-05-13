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

      :engine (sys-move/mk-railway-engine
             entity
             :engine
             {:tile-x tile-x
              :tile-y tile-y
              :track [:w :e]
              :length-on-track 16
              :driving? true})

      :front (sys-move/mk-railway-roller
              entity
              :front
              {:distance 15
               ;; track
               :tile-x tile-x
               :tile-y tile-y
               :track [:w :e]
               ;; reference
               :reference-entity-or-id id
               :reference-path-kvs (ecs/ck-kvs :engine :path)
               :reference-length-on-path-kvs (ecs/ck-kvs :engine :length-on-path)})

      :rear (sys-move/mk-railway-roller
             entity
             :rear
             {:distance -15
              ;; track
              :tile-x tile-x
              :tile-y tile-y
              :track [:w :e]
              ;; reference
              :reference-entity-or-id id
              :reference-path-kvs (ecs/ck-kvs :engine :path)
              :reference-length-on-path-kvs (ecs/ck-kvs :engine :length-on-path)})

      :img (sys-drawing/mk-static-image-component
            entity :img
            {:point-kvs (ecs/ck-kvs :engine :position)
             :angle-kvs (ecs/ck-kvs :engine :angle)
             :center [16 8]
             :resource-name-kvs [:image]})

      :debug-engine (sys-drawing/mk-dot-component
                     entity :debug-engine
                     {:point-kvs (ecs/ck-kvs :engine :position)
                      :color [255 255 255]})

      :debug-rear (sys-drawing/mk-dot-component
                     entity :debug-rear
                     {:point-kvs (ecs/ck-kvs :rear :position)
                      :color [255 0 0]})

      :debug-front (sys-drawing/mk-dot-component
                   entity :debug-front
                   {:point-kvs (ecs/ck-kvs :front :position)
                    :color [83 238 252]})

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
  (ecs/retarget event (-> this ::ecs/components :engine)))

(defmethod ecs/handle-event [:to-entity ::locomotive ::ci/stop]
  [world event this]
  (ecs/retarget event (-> this ::ecs/components :engine)))

(defmethod ecs/handle-event [:to-entity ::locomotive ::ci/drive]
  [world event {:keys [rear-coupling] :as this}]
  (ecs/retarget event (-> this ::ecs/components :engine)))

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
