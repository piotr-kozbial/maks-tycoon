(ns app.ecs.entities.locomotive
  (:require
   [gamebase.ecs :as ecs]
   [gamebase.ecsu :as ecsu]
   [gamebase.systems.drawing :as sys-drawing]
   [gamebase.systems.movement :as sys-move]
   [gamebase.event-queue :as eq]
   [gamebase.geometry :as g]
   [gamebase.tiles :as tiles]))

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

   :tile-x tile-x
   :tile-y tile-y
   :track [:w :e]))


(defmethod ecs/handle-event [:to-entity ::locomotive ::ecs/init]
  [world event this]
  (println "LOCOMOTIVE INIT")
  (assoc
   (ecs/mk-event (-> this ::ecs/components :move)
                 ::sys-move/set-path
                 (::eq/time event))
   :path (tiles/track-path (:track this) (:tile-x this) (:tile-y this))))

(defmethod ecs/handle-event [:to-entity ::locomotive ::sys-move/at-path-end]
  [world event this]
  (let [path (-> this ::ecs/components :move :path)
        {:keys [track tile-x tile-y]} this
        [new-tile-x new-tile-y] (tiles/track-destination-tile track tile-x tile-y)
        new-track [:w :e]
        new-path (tiles/track-path new-track new-tile-x new-tile-y)]
    [(assoc this
            :tile-x new-tile-x
            :tile-y new-tile-y
            :track new-track)
     (assoc
      (ecs/mk-event (-> this ::ecs/components :move)
                    ::sys-move/set-path
                    (::eq/time event))
      :path new-path)]))

(defmethod ecs/handle-event [:to-entity ::locomotive ::stop]
  [world event this]
  [(ecs/mk-event (-> this ::ecs/components :move)
                  ::sys-move/stop
                  (::eq/time event))])

(defmethod ecs/handle-event [:to-entity ::locomotive ::drive]
  [world event this]
  [(ecs/mk-event (-> this ::ecs/components :move)
                 ::sys-move/drive
                 (::eq/time event))])


;; TODO:
;;
;; [x] implement "stop" (not speed:=0! special flag!)
;; [x] test it by manually sending an event (maybe special helpers needed)
;; [x] implement "drive"
;;
;; [x] btw. connect start/stop to UI
;;
;; [x] use it to gently translate to track-based driving:
;;     [x] first, stop after the first path is reached and just change tile-x, tile-y
;;     [x] then, assume the starting path (at ::ecs/init) is [:w :e] on the starting tile
;;
;; [ ] then, implement ::sys-move/at-path-end to pick up one of tracks on the next tile
;;     [ ] refactor locomotive; re-think simultaneous changes to entity/components
;;         and derived stuff (such as path from track etc.)
;;     [ ] think how real world (tracks) will be connected to locomotive/engine
;;     [ ] implement

