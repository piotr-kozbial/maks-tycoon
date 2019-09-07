(ns app.ecs.systems.collisions
  (:require
   [gamebase.ecs :as ecs]
   [app.ecs.common-events :as ci]
   [clojure.set :as set]
   [gamebase.event-queue :as eq]))

;; TODO

;; Tu bedzie wykrywanie kolizji.
;; Zakladam, ze po kazdym ::ci/delta-t (moze my tu jako system dostaniemy takie ::ci/delta-t,
;; mozemy sie umowic, ze bedziemy ostatnim na liscie systemow.
;; No i tu kazde entity, ktore ma ochote wykrywac kolizje bedzie badane, pewnie wg. kafelkow, ktore pokrywa,
;; bo najprosciej.
;; Chyba entity bedzie zglaszac chec kolidowania przez wlaczenie naszego komponentu (ktoremu z kolei
;; w parametrach poda sie jakies informacje, jak sie dowiedziec o nasze kafelki pokrywane,
;; a potem o dokladna metode wykrywania.
;; Nie bedziemy przeciez badac prostokatow dokladnie geometrycznie - dla pojazdow kolejowych bedziemy
;; raczej badac po dlugosci sciezki!


(defn mk-system []
  (.log js/console "Collisions - system created.")
  (assoc
   (ecs/mk-system ::collisions)
   ;; :tile-components-map {}
   :tile-entities-map {}
   ;; :component-components-map {}
   ))




(defmethod ecs/handle-event [:to-system ::collisions ::ci/delta-t]
  [world event system]

  ;; (let [tile-components-map
        (->> (ecs/all-components-of-system world ::collisions)
             (map (fn [{:keys [tile-xy-kvss] :as component}]
                    (when-let [entity (ecs/get-entity-by-key world (::ecs/entity-id component))]
                      (->> (for [kvs tile-xy-kvss] (get-in entity kvs))
                           (mapcat #(vector % #{[(::ecs/entity-id component)
                                                  (::ecs/component-key component)]}))
                           (apply hash-map)))))
             (apply merge-with set/union))

  ;;       tile-entities-map
  ;;       (->> tile-components-map
  ;;            (mapcat (fn [[tile-xy components]]
  ;;                      [tile-xy (->> components
  ;;                                    (map (fn [[entity-id _]] entity-id))
  ;;                                    (apply hash-set))]))
  ;;            (apply hash-map))

  ;;       component-components-map ;; collisions
  ;;       (->> tile-components-map
  ;;            (filter (fn [[tile-xy component-ids]] (>  (count component-ids) 1)))
  ;;            (map (fn [[tile-xy component-ids]]
  ;;                   (->> component-ids
  ;;                        (map #(hash-map % (set/difference component-ids #{%})))
  ;;                        (apply merge-with set/union))))
  ;;            (apply merge-with set/union))]

  ;;   (assoc system
  ;;          :tile-components-map tile-components-map
  ;;          :tile-entities-map tile-entities-map
  ;;          :component-components-map component-components-map))

  nil

  ;; (ecs/pass-event-through-all world event
  ;;                             (ecs/all-components-of-system
  ;;                              world system))
  )

(defn mk-collider [entity-or-id key
                   {:keys [tile-xy-kvss]}]
  (assoc
   (ecs/mk-component ::collisions entity-or-id key ::collider)
   :tile-xy-kvss tile-xy-kvss
   ))

(defmethod ecs/handle-event [:to-component ::collider ::ci/delta-t]
  [world event this]
  (let [system (get-in world [::ecs/systems (::ecs/system-id this)])
        entity-id (::ecs/entity-id this)
        entity (ecs/get-entity-by-key world entity-id)
        tile-xys (apply hash-set (map #(get-in entity %) (:tile-xy-kvss this)))]
    (let [tile-entities-map (:tile-entities-map system)
          tile-entities-map-cleaned
          (->> tile-entities-map
               (mapcat (fn [[tile-xy entities]]
                         (let [entities' (disj entities entity-id)]
                           (when (not (empty? entities'))
                             [tile-xy entities']))))
               (apply hash-map))
          tile-entities-map-updated
          (reduce
           (fn [acc tile-xy] (assoc acc tile-xy (conj (or (acc tile-xy) #{}) entity-id)))
           tile-entities-map-cleaned
           tile-xys)
          ]
      (assoc system :tile-entities-map tile-entities-map-updated))))


