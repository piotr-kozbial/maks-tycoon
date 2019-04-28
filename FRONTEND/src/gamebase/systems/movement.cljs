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

;;;;; Component: path-follower
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn calculate-path-end-time
  [{:keys [path-chain path-start-length path-start-time speed extra-points]
    :as component}]
  (let [furthest-extra-point-distance
        ,   (apply max (conj (vals (or extra-points {})) 0))
        length-to-go
        ,   (- (g/path-length path-chain)
               path-start-length
               furthest-extra-point-distance)]
    (when (> speed 0)
      (int (+ path-start-time (/ length-to-go speed))))))

(comment defn truncate-path
  [{:keys [path paths-ahead extra-points length-on-path] :as this} time]
  (if (and path (> (count paths-ahead) 0))
    (let [path-length (g/path-length path)
          last-point-distance (apply min (into [0] (map second  extra-points)))
          last-point-length-on-path (+ length-on-path last-point-distance)]
      (if (>= last-point-length-on-path path-length)
        (assoc this
               :path (first paths-ahead)
               :paths-ahead (into [] (rest paths-ahead))
               :path-start-time time
               :path-start-length (- length-on-path path-length))
        this))
    this))

(defn do-update [<this> <time> <world>]
  (let [{:keys [path
                paths-ahead
                path-start-time
                path-start-length
                path-end-time
                speed
                driving?
                extra-points]} <this>]
    (when (and path driving?)
      (let [time-of-travel (- <time> path-start-time)
            length-on-path (+ path-start-length (* time-of-travel speed))
            total-path-length (g/path-length path)
            at-end? (= <time> path-end-time)
            at-or-after-end? (>= <time> path-end-time)

            path-this-and-ahead (g/path-chain
                                 (concat [path] (or paths-ahead [])))
            extra-xy (->> extra-points
                          (mapcat (fn [[k dist]]
                                    (let [length-on-path (+ length-on-path dist)
                                          position (g/path-point-at-length
                                                    path-this-and-ahead
                                                    length-on-path)]

                                      [k position])))
                          (apply hash-map))]

        [(when at-end?
           (ecs/mk-event
            (ecs/to-entity (::ecs/entity-id <this>))

            ::at-path-end <time>))
         (assoc <this>

                :length-on-path length-on-path
                :at-end? at-end?
                :at-or-after-end? at-or-after-end?

                :position
                (g/path-point-at-length
                 path-this-and-ahead
                 length-on-path)

                :angle
                (g/angle-at-length
                 path-this-and-ahead
                 length-on-path)

                :extra-xy extra-xy)
]))))


(defn update-path-end-time
  [{:keys [path-chain path-start-length path-start-time
           speed extra-points driving?] :as this}]
  (assoc this
         :path-end-time
         (when driving?
           (let [furthest-point-distance
                 ,   (apply max (conj (vals (or extra-points {})) 0))
                 length-to-go
                 ,   (- (g/path-length path-chain)
                        path-start-length
                        furthest-point-distance)]
             (int (+ path-start-time (/ length-to-go speed)))))))

(defn update-path-free-time
  [{:keys [extra-points path-chain driving? speed
           path-start-time path-start-length] :as this}]
  (assoc this
         :path-free-time
         (when driving?
           (let [path (first (:paths path-chain))
                 furthest-back-point-distance
                 ,   (apply min (conj (vals (or extra-points {})) 0))
                 length-to-go
                 ,   (- (g/path-length path)
                        path-start-length
                        furthest-back-point-distance)]
             (int (+ path-start-time (/ length-to-go speed)))))))

(defn mk-topology-event
  [this key]
  (let [times (map this [:path-end-time
                         :path-free-time])]
    (when-not (empty? times)
      (ecs/mk-event this ::topology-event
                    (apply min times)))))

(defn update-positions
  [{:keys [driving? path-chain path-start-time path-start-length
           extra-points speed] :as this}
   time]
  (if (and driving? (not (empty? (:paths path-chain))))
    (let [time-of-travel (- time path-start-time)
          length-on-path (+ path-start-length (* time-of-travel speed))
          total-path-length (g/path-length path-chain)
       ]
      (assoc
       this
       :position (g/path-point-at-length path-chain length-on-path)
       :angle (g/angle-at-length path-chain length-on-path)
       :extra-xy (->> extra-points
                      (mapcat (fn [[k dist]]
                                (let [len (+ length-on-path dist)
                                      position (g/path-point-at-length
                                                path-chain
                                                len)]
                                  [k position])))
                      (apply hash-map))))
    this))

(defn update-topology
  [{:keys [path-end-time] :as this}
   time]
  (assoc
   this
   :at-end? (= time path-end-time)
   :at-or-after-end? (>= time path-end-time)))

(defn truncate-path
  [{:as this :keys [path-free-time path-chain extra-points]}
   time]
  (if (= path-free-time time)
    (let [furthest-back-point-distance
          ,   (apply min (conj (vals (or extra-points {})) 0))]
      (assoc this
             :path-chain (geom/path-chain-remove-first path-chain)
             :path-start-time time
             :path-start-length (- furthest-back-point-distance)))
    this))


(defn mk-path-follower [entity-or-id key {:keys [path-or-paths
                                                 path-start-length
                                                 extra-points
                                                 speed
                                                 driving?]}]
  (assert path-or-paths)
  (let [v (assoc
           (ecs/mk-component ::movement entity-or-id key ::path-follower)
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
           :path-start-length (or path-start-length 0))]
    (if :gamebase.ecs/*with-xprint*
      (vary-meta v
                 update-in [:app.xprint.core/key-order]
                 concat [[:app.xprint.core/comment
                          "configuration"]
                         :extra-points
                         [:app.xprint.core/comment "raw state"]
                         :path-chain :path-start-length
                         :driving? :speed
                         :path-start-time
                         [:app.xprint.core/comment
                          "derived state - events"]
                         :path-end-time :path-free-time
                         [:app.xprint.core/comment
                          "derived state - positions"]
                         :length-on-path :position :angle
                         :extra-xy
                         [:app.xprint.core/comment
                          "derived state - topology"]
                         :at-end? :at-or-after-end?])
      v)))

(defmethod ecs/handle-event [:to-component ::path-follower ::ecs/init]
  [_ event this]
  (let [this' (-> this
                  (assoc :path-start-time (::eq/time event))
                  (update-path-end-time)
                  (update-path-free-time)
                  (update-positions (::eq/time event))
                  (update-topology (::eq/time event)))]
    [this' (mk-topology-event this' :path-end-time)]))

(defmethod ecs/handle-event [:to-component ::path-follower :update]
  [world event this]
  (-> this
      (update-positions (::eq/time event))))

(defmethod ecs/handle-event [:to-component ::path-follower ::topology-event]
  [world event this]
  (let [this'(-> this
                 (update-path-free-time)
                 (update-positions (::eq/time event))
                 (update-topology (::eq/time event))
                 (truncate-path (::eq/time event)))]
    [(when (:at-end? this')
       (ecs/mk-event (ecs/to-entity (::ecs/entity-id this'))
                     ::at-path-end
                     (::eq/time event)))
     this']))

(defmethod ecs/handle-event [:to-component ::path-follower ::add-path]
  [world {:keys [path] :as event} {:keys [path-chain] :as this}]
  (let [this' (-> this
                  (assoc :path-chain (geom/path-chain-add path-chain path))
                  (update-path-end-time)
                  (update-path-free-time)
                  (update-positions (::eq/time event))
                  (update-topology (::eq/time event))
                  )]
    [(mk-topology-event this' :path-end-time)
     this'])


)








(defmethod ecs/handle-event [:to-component ::path-follower ::ci/stop]
  [world event this]
  (when (:driving? this)
    (when-let [[maybe-event this'] (do-update this (::eq/time event) world)]
      [maybe-event (assoc this' :driving? false)])))

(defmethod ecs/handle-event [:to-component ::path-follower ::ci/drive]
  [world event {:keys [path length-on-path] :as this}]
  (when-not (:driving? this)
    (let [this' (assoc this
                       :driving? true
                       :path-start-length length-on-path
                       :path-start-time (::eq/time event))
          path-end-time (calculate-path-end-time this')]
      [(assoc this' :path-end-time path-end-time)
       ;; ensure we'll get an :update event exactly at the end of the path
       (ecs/mk-event this :update path-end-time)])))



(defmethod ecs/handle-event [:to-component ::path-follower ::set-path]
  [world event this]
  (let [{:keys [path path-start-length]} event
        time (::eq/time event)]
    (let [this' (assoc this
                       :path path
                       :path-start-length (or path-start-length 0)
                       :path-start-time time)
          path-end-time (calculate-path-end-time this')]
      [(assoc this' :path-end-time path-end-time)
       ;; ensure we'll get an :update event exactly at the end of the path
       (ecs/mk-event this :update path-end-time)])))



;;;;; Component: path-trailer
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn mk-path-trailer
   [entity-or-id key {:keys []}]
   (assoc
    (ecs/mk-component ::movement entity-or-id key ::path-trailer)
    ;; TODO - podpiecie do czegos, do innego komponentu, ktory potrafilby powiedziec
    ;; "prosze tu jest dlugi path history,
    ;; a moj tylny koniec jest na takiej a takiej dlugosci do tylu od czola path history"
    ;; Wtedy jeszcze path-trailer dolicza swoj offset od frontu do swojej pozycji
    ;; i gotowe.
    ;; A gdy sam path-trailer zostanie zapytany, to poda path history, ktore bierze
    ;; od swojego poprzednika, oraz doliczy swoja dlugosc itd.
    ;;
    ;; Kwestia zarzadzenia usuwaniem starych wpisow z historii - potem.
    ;; Prawdopodobnie gosc, ktory jest na czele (path-follower w lokomotywie)
    ;; dodajac cos do historii bedzie jeszcze pytal swojego trailera, czy moze cos usunac,
    ;; a ten bedzie pytal swojego i tak do konca. Koncowy (jak zobaczy, ze sam juz
    ;; nie ma followera) powie, ze mozna usunac (powie ile segmentow, albo raczej powie
    ;; od jakiej dlugosci.
    ;;
    ;; Tak! Niech pytanie od lokomotywy bedzie "na jaka odleglosc ktos uzywa sciezki?"
    ;; I wtedy trailer za trailerem beda sie odpytywac, a ostatni po prostu powie,
    ;; na jakiej dlugosci jest. Wtedy lokomotywa bedzie wiedziala, co usunac.
    :a :b
    ))

