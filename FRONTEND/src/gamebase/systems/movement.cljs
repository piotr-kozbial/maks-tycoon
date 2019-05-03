(ns gamebase.systems.movement
  (:require
   [gamebase.ecs :as ecs]
   [gamebase.event-queue :as eq]
   [gamebase.geometry :as g]
   [app.ecs.common-events :as ci]
   [app.tiles.general :as tiles]
   [sablono.core :as sab]
   [app.state :as st]
   [gamebase.layers :as layers]
   [gamebase.geometry :as geom])
  (:require-macros
   [devcards.core :refer [defcard]])

  )

(defn mk-system []
  (ecs/mk-system ::movement))

(def to-system
  (ecs/to-system ::movement))

(defmethod ecs/handle-event [:to-system ::movement :update]
  [world event system]
  (ecs/pass-event-through-all world event
                              (ecs/all-components-of-system
                               world system)))

(defmethod ecs/handle-event [:to-system ::movement ::ci/delta-t]
  [world event system]
  (ecs/pass-event-through-all world event
                              (ecs/all-components-of-system
                               world system)))

(do ;; Component: test-diagonal

  (defn mk-test-diagonal-component
    [entity-or-id key _]
    ;; (assoc
    ;;  (ecs/mk-component ::movement entity-or-id key ::test-diagonal)
    ;;  :position [30 30])
    (ecs/mk-component ::movement entity-or-id key ::test-diagonal))

  (defmethod ecs/handle-event [:to-component ::test-diagonal :update]
    [world event component]

    (let [t (::eq/time event)
          d (rem (int (* 0.05 t)) 200)]
      (assoc component
             :position [d d]))))

(do ;; Component: path-follower2

  (defn mk-path-follower2 [entity-or-id key {:keys [path-or-paths
                                                    length-on-path
                                                    extra-points
                                                    speed
                                                    driving?]}]
    (assert path-or-paths)
    (let [v (assoc
             (ecs/mk-component ::movement entity-or-id key ::path-follower2)
             :driving? driving?
             :speed (or speed 0.02)
             :extra-points extra-points
             :path-chain (geom/precompute
                          (geom/path-chain
                           (if (or (list? path-or-paths)
                                   (vector? path-or-paths))
                             (into [] path-or-paths)
                             [path-or-paths])))
             ;; TODO - chcemy wlasciwie, zeby klient podal numer path z tych co podal
             ;; i length wzgledem tego path, a my sobie przeliczymy
             :length-on-path (or length-on-path 0))]
      (if :gamebase.ecs/*with-xprint*
        (vary-meta v
                   update-in [:app.xprint.core/key-order]
                   concat [[:app.xprint.core/comment
                            "configuration"]
                           :extra-points
                           [:app.xprint.core/comment "raw state"]
                           :path-chain
                           :driving? :speed
                           :length-on-path
                           [:app.xprint.core/comment
                            "derived state - events"]
                           :path-end-time :path-free-time
                           [:app.xprint.core/comment
                            "derived state - positions"]
                           :position :angle
                           :extra-xy
                           [:app.xprint.core/comment
                            "derived state - topology"]
                           :at-end? :at-or-after-end?])
        v)))

  (defn path-follower2-cleanup-one-path
    [{:as this :keys [path-chain extra-points length-on-path]}]
    (when (> (count (:paths path-chain)) 1)
      (let [first-path (first (:paths path-chain))
            first-length (g/path-length first-path)
            furthest-back-point-distance (apply min (conj (vals (or extra-points {})) 0))
            furthest-back-point-length-on-path (+ length-on-path furthest-back-point-distance)]
        (when (> furthest-back-point-length-on-path first-length)
          (assoc this
                 :path-chain (geom/path-chain-remove-first path-chain)
                 :length-on-path (- length-on-path first-length))))))

  (defn path-follower2-cleanup-path-chain [component]
    (loop [c component]
      (if-let [c' (path-follower2-cleanup-one-path c)]
        (recur c')
        c)))

  (defmethod ecs/handle-event [:to-component ::path-follower2 ::ecs/init]
    [_ event {:as this :keys [path-chain length-on-path]}]
    (assoc this
           :position (g/path-point-at-length path-chain length-on-path)
           :path (g/path-at-length path-chain length-on-path)))

  (defn follower2-full-update [{:as this :keys [path-chain extra-points length-on-path speed
                                                past-end-notified? driving? extra-points]}
                               time]
    (if driving?
      (let [new-angle (g/angle-at-length path-chain length-on-path)
            new-position (g/path-point-at-length path-chain length-on-path)
            new-path (g/path-at-length path-chain length-on-path)
            new-extra-xy (->> extra-points
                              (mapcat (fn [[key dist]] [key (g/path-point-at-length
                                                            path-chain
                                                            (+ length-on-path dist))]))
                              (apply hash-map))
            new-extra-paths (->> extra-points
                                 (mapcat (fn [[key dist]] [key (g/path-at-length
                                                               path-chain
                                                               (+ length-on-path dist))]))
                                 (apply hash-map))
            new-extra-lengths-on-paths (->> extra-points
                                            (mapcat (fn [[key dist]] [key (g/length-at-length
                                                                          path-chain
                                                                          (+ length-on-path dist))]))
                                            (apply hash-map))
            furthest-point-distance (apply max (conj (vals (or extra-points {})) 0))
            path-length (g/path-length path-chain)
            past-end? (> (+ length-on-path furthest-point-distance) path-length)]
        [(assoc this
                :past-end? past-end?
                :past-end-notified? past-end? ;; no mistake
                :position new-position
                :angle new-angle
                :path new-path
                :extra-xy new-extra-xy
                :extra-paths new-extra-paths
                :extra-lengths-on-paths new-extra-lengths-on-paths)
         (when (and past-end? (not past-end-notified?))
           (ecs/mk-event (ecs/to-entity (::ecs/entity-id this)) ::at-path-end time))])
      this)


    )

  (defmethod ecs/handle-event [:to-component ::path-follower2 ::ci/delta-t]
    [world {:as event :keys [delta-t]} {:as this :keys [length-on-path driving? speed]}]
    (follower2-full-update
     (if driving?
       (let [new-length-on-path (+ length-on-path (* delta-t speed))]
         (assoc this :length-on-path new-length-on-path))
       this)
     (::eq/time event)))

  (defmethod ecs/handle-event [:to-component ::path-follower2 ::add-path]
    [world {:keys [path] :as event} {:keys [path-chain] :as this}]
    (let [this' (assoc this
                       :path-chain (geom/path-chain-add path-chain path)
                       :past-end? false
                       :past-end-notified? false)
          this'' (path-follower2-cleanup-path-chain this')]
      (follower2-full-update this'' (::eq/time event))))

  (defmethod ecs/handle-event [:to-component ::path-follower2 ::ci/stop]
    [world event this]
    (assoc this :driving? false))

  (defmethod ecs/handle-event [:to-component ::path-follower2 ::ci/drive]
    [world event {:as this :keys [driving? past-end?]}]
    (if driving?
      this
      (if past-end?
        [(assoc this :past-end-notified? true)
         (ecs/mk-event (ecs/to-entity (::ecs/entity-id this)) ::at-path-end (::eq/time event))]
        (assoc this :driving? true)))))

(do ;; Component: path-trailer

  (defn mk-path-trailer
    [entity-or-id key {:keys [;; either these:
                              path length-on-path
                              ;; or these:
                              leader-entity-key
                              leader-path-kvs
                              leader-length-on-path-kvs
                              distance]}]
    (let [v (assoc
             (ecs/mk-component ::movement entity-or-id key ::path-trailer)
             :path path
             :length-on-path length-on-path
             :leader-entity-key leader-entity-key
             :leader-path-kvs leader-path-kvs
             :leader-length-on-path-kvs leader-length-on-path-kvs
             :distance distance)]
      (if :gamebase.ecs/*with-xprint*
        (vary-meta v
                   update-in [:app.xprint.core/key-order]
                   concat [[:app.xprint.core/comment
                            "root state when connected, nils when not connected"]
                           :leader-entity-key :leader-path-kvs :leader-length-on-path-kvs
                           :distance
                           [:app.xprint.core/comment
                            "derived when connected, root state when not connected"]
                           :path :length-on-path
                           [:app.xprint.core/comment
                            "derived state"]
                           :position
                           ])
        v)))

  (defn path-trailer-update [world this]
    (let [{:keys [path length-on-path
                  leader-entity-key leader-path-kvs leader-length-on-path-kvs
                  distance]} this]
      (if leader-entity-key
        ;; we are connected to a leader
        (let [leader                (ecs/get-entity-by-key world leader-entity-key)
              leader-path           (get-in leader leader-path-kvs)
              leader-length-on-path (get-in leader leader-length-on-path-kvs)
              new-length-on-path    (+ leader-length-on-path distance)]
          (if (>= new-length-on-path 0)
            (let [new-position (g/path-point-at-length leader-path new-length-on-path)
                  new-angle    (g/angle-at-length leader-path new-length-on-path)]
              (assoc this
                     :position new-position
                     :angle new-angle
                     :path leader-path
                     :length-on-path new-length-on-path))
            ;; Negative length on path may happen when the leader goes to a new path.
            ;; We assume that is the case.
            ;; So we can retain our path that we've had so far,
            ;; and we assume that this is the path that the leader was just a moment ago,
            ;; no other path in the middle.
            ;; So we can assume that we should count this negative length from the
            ;; end of the track that we're on.
            (let [newer-length-on-path (+ (g/path-length path) new-length-on-path)
                  newer-position       (g/path-point-at-length path newer-length-on-path)
                  newer-angle          (g/angle-at-length path newer-length-on-path)]
              (assoc this
                     :length-on-path newer-length-on-path
                     :position newer-position
                     :angle newer-angle))))
        ;; we are not connected, staying in place
        (assoc this
               :position (g/path-point-at-length path length-on-path)
               :angle (g/angle-at-length path length-on-path)))))


  (defmethod ecs/handle-event [:to-component ::path-trailer ::ecs/init]
    [world event this]
    (path-trailer-update world this))

  (defmethod ecs/handle-event [:to-component ::path-trailer ::ci/delta-t]
    [world event this]
    (path-trailer-update world this))

  (defmethod ecs/handle-event [:to-component ::path-trailer ::ci/connect]
    [world {:as event :keys [leader-entity-key leader-path-kvs leader-length-on-path-kvs
                             distance]} this]
    (println "TRAILER CONNECT!")
    (path-trailer-update
     world
     (assoc this
            :leader-entity-key leader-entity-key
            :leader-path-kvs leader-path-kvs
            :leader-length-on-path-kvs leader-length-on-path-kvs
            :distance distance))))

(do ;; Abstract component: engine

  (defmulti engine-next-path (fn [world this path] (::ecs/type this)))

  (defn mk-engine [entity-or-id key {:keys [path length-on-path driving? speed]}]
    (assert path)
    (let [v (assoc
             (ecs/mk-component ::movement entity-or-id key ::engine)
             :path path
             :length-on-path (or length-on-path 0)
             :driving? driving?
             :speed (or speed 0.02))]
      (if :gamebase.ecs/*with-xprint*
        (vary-meta v
                   update-in [:app.xprint.core/key-order]
                   concat [[:app.xprint.core/comment "raw state"]
                           :path :length-on-path
                           :driving? :speed
                           [:app.xprint.core/comment
                            "derived state"]
                           :position :angle
                           [:app.xprint.core/comment
                            "derived state - topology"]
                           :at-end? :at-or-after-end?])
        v)))

  (defn engine-full-update [{:as this :keys [path length-on-path speed driving?]}
                            time
                            world]
    (loop [path path, length-on-path length-on-path]
      (if (<= length-on-path (g/path-length path))
        (assoc this
               :path path
               :length-on-path length-on-path
               :position (g/path-point-at-length path length-on-path)
               :angle (g/angle-at-length path length-on-path))
        (if-let [next-path (engine-next-path world this path)]
          (recur next-path (- length-on-path (g/path-length path)))
          (assoc this
                 :driving? false
                 :path path
                 :length-on-path (g/path-length path)
                 :position (g/path-point-at-length path (g/path-length path))
                 :angle (g/angle-at-length path (g/path-length path)))))))

  (defmethod ecs/handle-event [:to-component ::engine ::ecs/init]
    [world event this]
    (engine-full-update this (::eq/time event) world))

  (defmethod ecs/handle-event [:to-component ::engine ::ci/delta-t]
    [world {:as event :keys [delta-t]} {:as this :keys [length-on-path driving? speed]}]
    (-> (if driving?
          (assoc this :length-on-path (+ length-on-path (* delta-t speed)))
          this)
        (engine-full-update (::eq/time event) world)))

  (defmethod ecs/handle-event [:to-component ::engine ::ci/stop]
    [world event this]
    (assoc this :driving? false))

  (defmethod ecs/handle-event [:to-component ::engine ::ci/drive]
    [world event {:as this :keys [driving?]}]
    (if driving?
      this
      (assoc this :driving? true))))

(do ;; Component: test engine

  ;; This can be used for testing.
  ;; The engine-next-path function is passed as an argument to mk-test-engine.
  ;; This is not for regular use, since components should be pure data.

  (derive ::test-engine ::engine)

  (defn mk-test-engine [engine-next-path-f & args]
    (assoc
     (apply mk-engine args)
     ::ecs/type ::test-engine
     ::engine-next-path-f engine-next-path-f))

  (defmethod engine-next-path ::test-engine
    [world this path]
    ((::engine-next-path-f this) world this path)))

(do ;; Component: railway engine

  (derive ::railway-engine ::engine)

  (defn mk-railway-engine [entity-or-id key {:keys [tile-x tile-y track length-on-track
                                                    driving? speed]}]
    (let [path (assoc (tiles/track-path track tile-x tile-y)
                      ::tile-xy [tile-x tile-y]
                      ::track track)]
      (assoc
       (mk-engine entity-or-id key {:path path
                                    :length-on-path length-on-track
                                    :driving? driving?
                                    :speed speed})
       ::ecs/type ::railway-engine)))

  (defn- -get-layer [world layer-key]
    (->> (:layers world)
         (filter #(= (first %) layer-key))
         (first)
         (second)))

  (defmethod engine-next-path ::railway-engine
    [world this path]
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
               ::track new-track)))))
