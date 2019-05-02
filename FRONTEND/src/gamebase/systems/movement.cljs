(ns gamebase.systems.movement
  (:require
   [gamebase.ecs :as ecs]
   [gamebase.event-queue :as eq]
   [gamebase.geometry :as g]
   [app.ecs.common-events :as ci]

   [sablono.core :as sab]
   [devcards.core]

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

;;;;; Component: test-diagonal
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

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
           :position [d d])))


;;;;; Component: path-follower2

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

(defmethod ecs/handle-event [:to-component ::path-follower2 ::ci/delta-t]
  [world {:as event :keys [delta-t]} {:as this :keys [path-chain extra-points length-on-path speed
                                                      past-end-notified? driving? extra-points]}]
  (if driving?
    (let [new-length-on-path (+ length-on-path (* delta-t speed))
          new-angle (g/angle-at-length path-chain new-length-on-path)
          new-position (g/path-point-at-length path-chain new-length-on-path)
          new-path (g/path-at-length path-chain new-length-on-path)
          new-extra-xy (->> extra-points
                            (mapcat (fn [[key dist]] [key (g/path-point-at-length
                                                          path-chain
                                                          (+ new-length-on-path dist))]))
                            (apply hash-map))
          new-extra-paths (->> extra-points
                               (mapcat (fn [[key dist]] [key (g/path-at-length
                                                             path-chain
                                                             (+ new-length-on-path dist))]))
                            (apply hash-map))
          furthest-point-distance (apply max (conj (vals (or extra-points {})) 0))
          path-length (g/path-length path-chain)
          past-end? (> (+ new-length-on-path furthest-point-distance) path-length)]
      [(assoc this
              :past-end? past-end?
              :past-end-notified? past-end? ;; no mistake
              :length-on-path new-length-on-path
              :position new-position
              :angle new-angle
              :path new-path
              :extra-xy new-extra-xy
              :extra-paths new-extra-paths)
       (when (and past-end? (not past-end-notified?))
         (ecs/mk-event (ecs/to-entity (::ecs/entity-id this)) ::at-path-end (::eq/time event)))])
    this))

(defmethod ecs/handle-event [:to-component ::path-follower2 ::add-path]
  [world {:keys [path] :as event} {:keys [path-chain] :as this}]
  (let [this' (assoc this
                     :path-chain (geom/path-chain-add path-chain path)
                     :past-end? false
                     :past-end-notified? false)
        this'' (path-follower2-cleanup-path-chain this')]
    (assoc this''
           :path (g/path-at-length (:path-chain this'') (:length-on-path this'')))))

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
      (assoc this :driving? true))))

;;;;; Component: path-trailer
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn mk-path-trailer
  [entity-or-id key {:keys [path length-on-path]}]
  (let [v (assoc
           (ecs/mk-component ::movement entity-or-id key ::path-trailer)
           :path path
           :length-on-path length-on-path
           :leader-entity-key nil
           :leader-path-kvs nil
           :leader-length-on-path-kvs nil)]
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
      (let [leader (ecs/get-entity-by-key world leader-entity-key)
            leader-path (get-in leader leader-path-kvs)
            leader-length-on-path (get-in leader leader-length-on-path-kvs)
            new-length-on-path (+ leader-length-on-path distance)]
        (if (>= new-length-on-path 0)
          (let [new-position (g/path-point-at-length leader-path new-length-on-path)]
            (assoc this
                   :position new-position
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
                newer-position (g/path-point-at-length path newer-length-on-path)]
            (assoc this
                   :length-on-path newer-length-on-path
                   :position newer-position))))
      ;; we are not connected, staying in place
      (assoc this :position (g/path-point-at-length path length-on-path)))))


(defmethod ecs/handle-event [:to-component ::path-trailer ::ecs/init]
  [world event this]
  (path-trailer-update world this))

(defmethod ecs/handle-event [:to-component ::path-trailer ::ci/delta-t]
  [world event this]
  (path-trailer-update world this))

(defmethod ecs/handle-event [:to-component ::path-trailer ::connect]
  [world {:as event :keys [leader-entity-key leader-path-kvs leader-length-on-path-kvs
                           distance]} this]
  (path-trailer-update
   world
   (assoc this
          :leader-entity-key leader-entity-key
          :leader-path-kvs leader-path-kvs
          :leader-length-on-path-kvs leader-length-on-path-kvs
          :distance distance)))

