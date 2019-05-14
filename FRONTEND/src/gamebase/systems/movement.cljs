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
  (ecs/pass-event-through-all world event
                              (ecs/all-components-of-system
                               world system)))

(do ;; Common


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
               ::track new-track)))))

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

(do ;; Engines

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

    (defmethod engine-next-path ::railway-engine
      [world _ path]
      (-railway-next-path world path))))

(do ;; Rollers

  (do ;; Abstract component: roller

    (defmulti roller-next-path (fn [world this path] (::ecs/type this))
      ;; returns a path
      )

    (defmulti roller-previous-path (fn [world this path] (::ecs/type this))
      ;; returns a path
      )

    (defmulti roller-get-reference (fn [world this] (::ecs/type this))
      ;; returns [path length-on-path]
      )

    (defn mk-roller [entity-or-id key {:keys [distance]}]

      (let [v (assoc
               (ecs/mk-component ::movement entity-or-id key ::roller)
               :distance (or distance 0))]
        (if :gamebase.ecs/*with-xprint*
          (vary-meta v
                     update-in [:app.xprint.core/key-order]
                     concat [[:app.xprint.core/comment
                              "raw state"]
                             :distance
                             [:app.xprint.core/comment
                              "derived state"]
                             :position
                             ])
          v)))

    (defn roller-full-update [world this time]
      (when-let [[ref-path ref-length] (roller-get-reference world this)]
        (let [{:keys [at-path-end]} this
              [path length error]
              (loop [path ref-path
                     length (+ (:distance this) ref-length)]
                (cond
                  (< length 0)
                  ,   (if-let [prev-path (roller-previous-path world this path)]
                        (recur prev-path (+ length (g/path-length prev-path)))
                        [path 0 ::path-end])
                  (> length (g/path-length path))
                  ,   (if-let [next-path (roller-next-path world this path)]
                        (recur next-path (- length (g/path-length path)))
                        [path (g/path-length path) ::path-end])
                  :else [path length]))]
          [(assoc this
                  :position (g/path-point-at-length path length)
                  :angle (g/angle-at-length path length)
                  :path path
                  :length-on-path length
                  :at-path-end (= error ::path-end))
           (when (and (= error ::path-end) (not at-path-end))
             (ecs/mk-event (ecs/to-entity (::ecs/entity-id this)) error time))])))

    (defmethod ecs/handle-event [:to-component ::roller ::ecs/init]
      [world event this]
      (roller-full-update world this (::eq/time event)))

    (defmethod ecs/handle-event [:to-component ::roller ::ci/delta-t]
      [world event this]
      (roller-full-update world this (::eq/time event)))

    ;; TODO: to bedzie wlasnie taki, co wie, ze ma toczyc sie po torach,
    ;; ale jak jest sam, to stoi, a mozna go podpiac do innego,
    ;; z dodatnim lub ujemnym distance,
    ;; wtedy bedzie jak obmyslalem.

    ;; A to nie tylko wagon, ale tez np. lokomotywa bedzie miala taki z przodu i z tylu dla siebie,
    ;; zeby wiedziec, kiedy tor sie konczy i sie zatrzymac.

    ;; To znaczy, ze taki roller powinien moc zglosic, ze trafil na koniec torow.
    ;; Wtedy lokomotywa zatrzyma engine.

    ;; A takze potem przy cofaniu, albo przy pchaniu wagonow, wagon trafi na koniec torow
    ;; i powinien moc poinformowac lokomotywe, a nie przechodzic przez caly ciag wagonow
    ;; (lokomotywa zapisze sie na jakas subskrypcje?)
    ;; Moglby bardziej realistycznie informowac tego, z kim jest polaczony, a tamten nastepnego itd.
    ;; Moze i tak zrobimy, przejdzie przez caly lancuch wagonow, ale co tam.
    )

  (do ;; Component: test roller

    (derive ::test-roller ::roller)

    (defn mk-test-roller [previous-path-f next-path-f get-reference-f & args]
      (let [v (assoc
               (apply mk-roller args)
               ::ecs/type ::test-roller
               ::previous-path-f previous-path-f
               ::next-path-f next-path-f
               ::get-reference-f get-reference-f)]
        (if :gamebase.ecs/*with-xprint*
          (vary-meta v
                     update-in [:app.xprint.core/key-order]
                     concat [[:app.xprint.core/comment
                              "configuration"]
                             ::previous-path-f
                             ::next-path-f
                             ::get-reference-f])
          v)))

    (defmethod roller-next-path ::test-roller
      [world this path]
      ((::next-path-f this) world this path))

    (defmethod roller-previous-path ::test-roller
      [world this path]
      ((::previous-path-f this) world this path))

    (defmethod roller-get-reference ::test-roller
      [world this]
      ((::get-reference-f this) world this)))

  (do ;; Component: railway roller

    (derive ::railway-roller ::roller)

    (defn mk-railway-roller [entity-or-id key
                             & [{:as args
                                  :keys
                                  [tile-x tile-y track
                                   reference-entity-or-id
                                   reference-path-kvs
                                   reference-length-on-path-kvs
                                   ]}]]
      (let [v (assoc
               (mk-roller entity-or-id key args)
               ::ecs/type ::railway-roller
               :reference-entity-id (ecs/id reference-entity-or-id)
               :reference-path-kvs reference-path-kvs
               :reference-length-on-path-kvs reference-length-on-path-kvs)]
        (if :gamebase.ecs/*with-xprint*
          (vary-meta v
                     update-in [:app.xprint.core/key-order]
                     concat [[:app.xprint.core/comment
                              "configuration"]])
          v)))

    (defmethod roller-next-path ::railway-roller
      [world _ path]
      (-railway-next-path world path))

    (defmethod roller-previous-path ::railway-roller
      [world this path]
      (let [[tile-x tile-y] (::tile-xy (:path this))
            track (::track (:path this))]
        (-railway-previous-path world path
                                {:hint-tile-x tile-x
                                 :hint-tile-y tile-y
                                 :hint-track track})))

    (defmethod roller-get-reference ::railway-roller
      [world {:as this :keys [reference-entity-id
                              reference-path-kvs
                              reference-length-on-path-kvs]}]
      (when reference-entity-id
        (let [entity (ecs/get-entity-by-key world reference-entity-id)]
          [(get-in entity reference-path-kvs)
           (get-in entity reference-length-on-path-kvs)])))

    (defmethod ecs/handle-event [:to-component ::railway-roller ::ci/connect-to]
      [world
       {:keys [reference-entity-or-id
               reference-path-kvs
               reference-length-on-path-kvs]}
       this]
      (println "ROLLER connect-to")
      (assoc this
             :reference-entity-id (ecs/id reference-entity-or-id)
             :reference-path-kvs reference-path-kvs
             :reference-length-on-path-kvs reference-length-on-path-kvs))))

(do ;; Railway vehicle connections



  )
