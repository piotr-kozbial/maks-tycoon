(ns gamebase.systems.movement
  (:require
   [gamebase.ecs :as ecs]
   [gamebase.event-queue :as eq]
   [gamebase.geometry :as g]
   [app.ecs.common-events :as ci]

   [sablono.core :as sab]
   [devcards.core]
   )
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

;;;;;----------------------------------------------
;;;;; Component: test-diagonal

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

;;;;;----------------------------------------------
;;;;; Component: path-follower

;; Will send the following events to its owning entity:
;; ::out-of-path {:follower <my key>}

(defn calculate-path-end-time
  [{:keys [path path-start-length path-start-time speed] :as component} time]
  (when (> speed 0)
    (int (+ time (/ (- (g/path-length path) path-start-length) speed)))))

(defn set-path [this time path path-start-length]
  (let [history (:path-history this)
        history' (if (:path this)
                   (into history [(:path this)])
                   history)
        history'' (if (<= (count history') (:path-history-size this))
                    history'
                    (apply vector (rest history')))
        this' (assoc this
                     :path-history history''
                     :path path
                     :path-start-length path-start-length
                     :path-start-time time)
        path-end-time (calculate-path-end-time this' time)]
    [(assoc this' :path-end-time path-end-time)
     ;; ensure we'll get an :update event exactly at the end of the path
     (ecs/mk-event this :update path-end-time)]))

(defn  do-update [<this> <time> <world>]
  (let [{:keys [path
                path-start-time
                path-start-length
                path-end-time
                speed
                driving?
                ]} <this>]
    (when (and path driving?)
      (let [time-of-travel (- <time> path-start-time)
            length-on-path (+ path-start-length (* time-of-travel speed))
            total-path-length (g/path-length path)
            at-end? (= <time> path-end-time)
            after-end? (>= <time> path-end-time)]

        [(when at-end?
           (ecs/mk-event ;;(ecs/get-entity <world> <this>)
            (ecs/to-entity (::ecs/entity-id <this>))

                         ::at-path-end <time>))
         (assoc <this>

                :length-on-path length-on-path
                :at-end? at-end?
                :after-end? after-end?

                :position
                (g/path-point-at-length
                 path
                 (if after-end? total-path-length length-on-path))

                :angle
                (g/angle-at-length
                 path
                 (if after-end? total-path-length length-on-path)))]))))

(defn mk-path-follower [entity-or-id key {:keys [path-history-size]}]
  (let [v (assoc
           (ecs/mk-component ::movement entity-or-id key ::path-follower)
           :driving? true
           :speed 0.02
           :path-history-size path-history-size
           :path-history [])]
    (if :gamebase.ecs/*with-xprint*
      (vary-meta v
                 update-in [:app.xprint.core/key-order]
                 concat [:path-history-size
                         :driving? :speed
                         :path
                         :path-start-length :path-start-time :path-end-time
                         :path-history
                         :length-on-path :position :angle
                         :at-end? :after-end?]) 
      v)))

(defmethod ecs/handle-event [:to-component ::path-follower ::ecs/init] [_ _ this] [])

(defmethod ecs/handle-event [:to-component ::path-follower ::ci/stop]
  [world event this]
  (when (:driving? this)
    (when-let [[maybe-event this'] (do-update this (::eq/time event) world)]
      [maybe-event (assoc this' :driving? false)])))

(defmethod ecs/handle-event [:to-component ::path-follower ::ci/drive]
  [world event this]
  (when-not (:driving? this)
    (set-path
     (assoc this :driving? true)
     (::eq/time event)
     (:path this)
     (:length-on-path this))))

(defmethod ecs/handle-event [:to-component ::path-follower :update] [world event this]
  (do-update this (::eq/time event) world))

(defmethod ecs/handle-event [:to-component ::path-follower ::set-path]
  [world event this]
  (let [{:keys [path]} event]
    (set-path this (::eq/time event) path 0)))

 (defn mk-path-trailer
   [entity-or-id key {:keys [path-history-size]}]
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


(defcard my-first-card
  (sab/html [:h1 "Devcards is awesome!"]))
