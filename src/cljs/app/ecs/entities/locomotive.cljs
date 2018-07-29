(ns app.ecs.entities.locomotive
  (:require
   [gamebase.ecs :as ecs]
   [gamebase.ecsu :as ecsu]
   [gamebase.systems.drawing :as sys-drawing]
   [gamebase.systems.movement :as sys-move]
   [gamebase.event-queue :as eq]
   [gamebase.geometry :as g]
   [gamebase.tiles :as tiles]
   [gamebase.layers :as layers]))

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

(defn- -get-layer [world layer-key]
  (->> (:layers world)
       (filter #(= (first %) layer-key))
       (first)
       (second)))

(defmethod ecs/handle-event [:to-entity ::locomotive ::sys-move/at-path-end]
  [world event this]
  (let [path (-> this ::ecs/components :move :path)
        {:keys [track tile-x tile-y]} this
        [new-tile-x new-tile-y] (tiles/track-destination-tile track tile-x tile-y)

        layer (-get-layer world :foreground)
        tile-context (:tile-context world)
        new-tile (layers/get-tile-from-layer layer new-tile-x new-tile-y)
        info (layers/get-tile-info-from-layer tile-context layer new-tile-x new-tile-y)
        new-tile-tracks (concat (:tracks info) (map reverse (:tracks info)))

        [_ tile-end] (:track this)
        new-tile-start ({:w :e
                         :e :w
                         :n :s
                         :s :n} tile-end)
        possible-new-tracks (filter #(= (first %) new-tile-start) new-tile-tracks)

        ;; choose the first possible tracks
        new-track (first possible-new-tracks)

        new-path (tiles/track-path new-track new-tile-x new-tile-y)

        ]
    
    (.log js/console

          (str "NEW TILE (" new-tile-x "," new-tile-y, "): "
               (pr-str info)
               " tile end: " (pr-str tile-end)
               " new tracks: " (pr-str new-tile-tracks)

               " poss. new. tracks: "
               (pr-str possible-new-tracks))

          )

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
;;     [x] dokonczyc i wygladzic wpiecie layerow w world
;;     [ ] implement
;;     [ ] brac w miejscu "TODO" powyzej wziecie nowego tracka z kafelka z layera

;; TO MOZE KIEDYS:
;;     - refactor locomotive; re-think simultaneous changes to entity/components
;;       and derived stuff (such as path from track etc.)
