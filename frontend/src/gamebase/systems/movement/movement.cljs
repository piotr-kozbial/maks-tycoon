(ns gamebase.systems.movement.movement
  (:require
   [gamebase-ecs.core :as ecs]
   [gamebase.event-queue :as eq]
   [gamebase.geometry :as g]
   [app.ecs.common-events :as ci]
   [app.tiles.general :as tiles]
   [sablono.core :as sab]
   [app.state :as st]
   [gamebase.layers :as layers]
   [gamebase.geometry :as g])
  (:require-macros
   [devcards.core :refer [defcard]])

  )

(defn mk-system []
  (ecs/mk-system ::movement))

(def to-system
  (ecs/to-system ::movement))

(defmethod ecs/handle-event [:to-system ::movement ::ci/delta-t]
  [world event system]
  ;; (ecs/pass-event-through-all world event
  ;;                             (ecs/all-components-of-system
  ;;                              world system))
  nil
  )


(defn- -get-layer [world layer-key]
  (->> (:layers world)
       (filter #(= (first %) layer-key))
       (first)
       (second)))

(defn- -railway-next-path [world path]
  (let [[tile-x tile-y] (::tile-xy path)
        track (::track path)
        [new-tile-x new-tile-y] (tiles/track-destination-tile track tile-x tile-y)
        layer (-get-layer world :foreground)
        tile-context (:tile-context world)
        new-tile (layers/get-tile-from-layer layer new-tile-x new-tile-y)
        info (layers/get-tile-info-from-layer tile-context layer new-tile-x new-tile-y)
        extra (st/get-tile-extra new-tile-x new-tile-y)

        [_ tile-end] track

        new-tile-start ({:w :e
                         :e :w
                         :n :s
                         :s :n} tile-end)

        possible-new-tracks (tiles/active-tracks-from
                             new-tile-start
                             new-tile-x new-tile-y
                             info
                             extra)

        ;; choose the first possible tracks
        new-track (first possible-new-tracks)]

    (when new-track
      (assoc (tiles/track-path new-track new-tile-x new-tile-y)
             ::tile-xy [new-tile-x new-tile-y]
             ::track new-track))))

(defn- -railway-previous-path [world path & [{:keys [hint-tile-x
                                                     hint-tile-y
                                                     hint-track]}]]
  (let [[tile-x tile-y] (::tile-xy path)
        track (::track path)
        [new-tile-x new-tile-y] (tiles/track-source-tile track tile-x tile-y)
        layer (-get-layer world :foreground)
        tile-context (:tile-context world)
        new-tile (layers/get-tile-from-layer layer new-tile-x new-tile-y)
        info (layers/get-tile-info-from-layer tile-context layer new-tile-x new-tile-y)
        extra (st/get-tile-extra new-tile-x new-tile-y)

        [tile-start _] track

        new-tile-end ({:w :e
                       :e :w
                       :n :s
                       :s :n} tile-start)

        possible-new-tracks (tiles/active-tracks-to
                             new-tile-end
                             new-tile-x new-tile-y
                             info
                             extra)

        new-track
        (if (do ; at the hint tile
              (and (= new-tile-x hint-tile-x) (= new-tile-y hint-tile-y)))
          (if (some #(= % hint-track) possible-new-tracks)
            hint-track
            (first possible-new-tracks))
                                        ; else (not at the hint tile)
          (if-let [; look for a track that starts at the edge of the hint one
                   t (->> possible-new-tracks
                          (map #(vector % (tiles/track-source-tile
                                           % new-tile-x new-tile-y)))
                          (filter #(= (second %) [hint-tile-x hint-tile-y]))
                          (first) ; in fact, there should be at most one
                          (first) ; take out the track (works on nil too)
                          )]
            ;; found - return it
            t
            ;; not fount - return whatever
            (first possible-new-tracks)))]

    (when new-track
      (assoc (tiles/track-path new-track new-tile-x new-tile-y)
             ::tile-xy [new-tile-x new-tile-y]
             ::track new-track))))





