(ns app.ecs.systems.movement.components.roller
  (:require
   [gamebase-ecs.core :as ecs]
   [gamebase-ecs.event-queue :as eq]
   [app.ecs.common-events :as ci]
   [gamebase.geometry :as g]
   [app.ecs.systems.movement.movement :as sys]))



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
           (ecs/mk-component ::sys/movement entity-or-id key ::roller)
           :distance (or distance 0))]
    (if :gamebase-ecs.core/*with-xprint*
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
  ;; (when (= (::ecs/entity-id this) "car1")
  ;;   (.log js/console (str "FULL UPDATE! " (pr-str (::ecs/entity-id this)) "!")))
  (if-let [r (roller-get-reference world this)]
    (let [[ref-path ref-length] r]
      ;; (when (= (::ecs/entity-id this) "car1")
      ;;   (.log js/console (str "GOT REFERENCE! " (pr-str (::ecs/entity-id this)) "!")))
      (when (and ref-path ref-length)
        (let [{:keys [at-path-end]} this
              [path length error]
              (loop [path ref-path
                     length (+ (:distance this) ref-length)]
                (cond
                  (< length 0)
                  ,   (if-let [prev-path (roller-previous-path world this path)]
                        (recur prev-path (+ length (g/path-length prev-path)))
                        [path 0 ::sys/path-end])
                  (> length (g/path-length path))
                  ,   (if-let [next-path (roller-next-path world this path)]
                        (recur next-path (- length (g/path-length path)))
                        [path (g/path-length path) ::sys/path-end])
                  :else [path length]))]
          [(assoc this
                  :position (g/path-point-at-length path length)
                  :angle (g/angle-at-length path length)
                  :path path
                  :length-on-path length
                  :at-path-end (= error ::sys/path-end))
           (when (and (= error ::sys/path-end) (not at-path-end))
             (ecs/mk-event (ecs/to-entity (::ecs/entity-id this)) error time))])))
    (assoc this
           :position (g/path-point-at-length (:path this) (:length-on-path this))
           :angle (g/angle-at-length  (:path this) (:length-on-path this))
           )
))

(defmethod ecs/handle-event [:to-component ::roller ::ecs/init]
  [world event this]
  (roller-full-update world this (::ecs/time event)))

(defmethod ecs/handle-event [:to-component ::roller ::ci/delta-t]
  [world event this]
  ;; (when (= (::ecs/entity-id this) "car1")
  ;;   (.log js/console (str "DELTA-T! " (pr-str (::ecs/entity-id this)) "!")))

  (roller-full-update world this (::ecs/time event)))

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
    
