(ns app.ecs.entities.carriage
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

(defn mk-entity [id tile-x tile-y puller]
  (let [entity (ecs/mk-entity id ::carriage)]
    (assoc
     entity

     :gamebase.ecs/components
     {:point (sys-move/mk-railway-roller
              entity
              :point
              {:distance -32
               ;; track
               :tile-x tile-x
               :tile-y tile-y
               :track [:w :e]
               ;; reference
               ;; :reference-entity-or-id (ecs/id puller)
               ;; :reference-path-kvs (ecs/ck-kvs :engine :path)
               ;; :reference-length-on-path-kvs (ecs/ck-kvs :engine :length-on-path)

})



      :img (sys-drawing/mk-static-image-component
            entity :img
            {:point-kvs (ecs/ck-kvs :point :position)
             :angle-kvs (ecs/ck-kvs :point :angle)
             :center [16 8]
             :resource-name-kvs [:image]})

      }

     :image "carriage1.png")))


(defmethod ecs/handle-event [:to-entity ::carriage ::ecs/init]
  [world event this]
  nil)

(defmethod ecs/handle-event [:to-entity ::carriage ::ci/delta-t]
  [world event this]
  nil)

;; (defmethod ecs/handle-event [:to-entity ::carriage ::ci/connect]
;;   [world event this]
;;   (ecs/retarget event (-> this ::ecs/components :move)))

;; (defn- -get-layer [world layer-key]
;;   (->> (:layers world)
;;        (filter #(= (first %) layer-key))
;;        (first)
;;        (second)))

;; (defn -put-to-history [history tile-x tile-y track]
;;   (let [history' (if (>= (count history) 2)
;;                    (apply vector (rest history))
;;                    history)]
;;     (into history' [[tile-x tile-y track]])))

;; (defn -history-to-map [history]
;;   (->> history
;;        (mapcat (fn [[tx ty track]] [[tx ty] track]))
;;        (apply hash-map)))

;; (defmethod ecs/handle-event [:to-entity ::carriage ::sys-move/at-path-end]
;;   [world event this]
;;   (let [path (-> this ::ecs/components :move :path)
;;         {:keys [track tile-x tile-y]} this
;;         [new-tile-x new-tile-y] (tiles/track-destination-tile track tile-x tile-y)

;;         layer (-get-layer world :foreground)
;;         tile-context (:tile-context world)
;;         new-tile (layers/get-tile-from-layer layer new-tile-x new-tile-y)
;;         info (layers/get-tile-info-from-layer tile-context layer new-tile-x new-tile-y)
;;         extra (st/get-tile-extra new-tile-x new-tile-y)

;;         [_ tile-end] (:track this)


;;         new-tile-start ({:w :e
;;                          :e :w
;;                          :n :s
;;                          :s :n} tile-end)


;;         possible-new-tracks (tiles/active-tracks-from
;;                              new-tile-start
;;                              new-tile-x new-tile-y
;;                              info
;;                              extra)


;;         track-chosen-by-front
;;         (when-let [front-id (:front-coupling this)]
;;           (let [front (ecs/get-entity-by-key world front-id)
;;                 front-history (-history-to-map (:tile-track-history front))]
;;             (front-history [new-tile-x new-tile-y])))]

;;     (if track-chosen-by-front

;;       (let [new-path (tiles/track-path track-chosen-by-front new-tile-x new-tile-y)]
;;         [(assoc this
;;                 :tile-x new-tile-x
;;                 :tile-y new-tile-y
;;                 :track track-chosen-by-front
;;                 :tile-track-history (-put-to-history (:tile-track-history this)
;;                                                      new-tile-x new-tile-y track-chosen-by-front))
;;          (assoc
;;           (ecs/mk-event (-> this ::ecs/components :move)
;;                         ::sys-move/set-path
;;                         (::eq/time event))
;;           :path new-path)])

;;       (do
;;         (.log js/console "NO NEW TRACK!!!")
;;         [
;;          ;; (ecs/mk-event (-> this ::ecs/components :move)
;;          ;;               ::ci/stop
;;          ;;               (::eq/time event))
;;          (ecs/mk-event this
;;                        ::ci/stop
;;                        (::eq/time event))

;;          ]))))

;; (defmethod ecs/handle-event [:to-entity ::carriage ::ci/stop]
;;   [world event {:keys [rear-coupling] :as this}]
;;   (.log js/console "CAR GOT STOP, sending to " rear-coupling)
;;   [(ecs/mk-event (-> this ::ecs/components :move)
;;                  ::ci/stop
;;                  (::eq/time event))
;;    (when rear-coupling
;;      (ecs/mk-event (ecs/to-entity rear-coupling)
;;                    ::ci/stop
;;                    (::eq/time event)))])

;; (defmethod ecs/handle-event [:to-entity ::carriage ::ci/drive]
;;   [world event {:keys [rear-coupling] :as this}]
;;   [(ecs/mk-event (-> this ::ecs/components :move)
;;                  ::ci/drive
;;                  (::eq/time event))
;;    (when rear-coupling
;;      (ecs/mk-event (ecs/to-entity rear-coupling)
;;                    ::ci/drive
;;                    (::eq/time event)))])

;; (defmethod ecs/handle-event [:to-entity ::carriage ::couple-rear]
;;   [world {:keys [the-other-id] :as event} this]
;;   (let [the-other (ecs/get-entity-by-key world the-other-id)]
;;     [(assoc this :rear-coupling the-other-id)
;;      (assoc the-other :front-coupling (::ecs/entity-id this))]))

;; (defmethod ecs/handle-event [:to-entity ::carriage :update]
;;   [world event this]

;;   [(assoc this
;;           :image
;;           ;; "carriage1-crashed.png"
;;           (case [(boolean (:front-coupling this)) (boolean (:rear-coupling this))]
;;                    [false false] "carriage1.png"
;;                    [true false] "carriage1-front-coupled.png"
;;                    [false true] "carriage1-rear-coupled.png"
;;                    [true true] "carriage1-both-coupled.png")

;;           )])

(defmethod ecs/handle-event [:to-entity ::carriage ::ci/connect-to]
  [world
   event
   this]
  (println "CARRIAGE connect-to")
  (ecs/retarget event (get-in this (ecs/ck-kvs :point))))