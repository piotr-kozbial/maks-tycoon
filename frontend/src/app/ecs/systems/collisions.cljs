(ns app.ecs.systems.collisions
  (:require
   [gamebase.ecs :as ecs]
   [app.ecs.common-events :as ci]
   [clojure.set :as set]))

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
  (ecs/mk-system ::collisions))

(defmethod ecs/handle-event [:to-system ::collisions ::ci/delta-t]
  [world event system]
  (let [tile-components-map
        (->> (ecs/all-components-of-system world ::collisions)
             (map (fn [{:keys [tile-xy-kvss] :as component}]
                    (when-let [entity (ecs/get-entity-by-key world (::ecs/entity-id component))]
                      (->> (for [kvs tile-xy-kvss] (get-in entity kvs))
                           (mapcat #(vector % #{[(::ecs/entity-id component)
                                                  (::ecs/component-key component)]}))
                           (apply hash-map)))))
             (apply merge-with set/union))]
    (doseq [[tile-xy component-ids] tile-components-map]
      (when (> (count component-ids) 1)
        (print "COLLISION on " (pr-str tile-xy) ": " (pr-str component-ids))

        )

      )
)

  nil)

(defn mk-collider [entity-or-id key
                   {:keys [tile-xy-kvss]}]
  (assoc
   (ecs/mk-component ::collisions entity-or-id key ::collider)
   :tile-xy-kvss tile-xy-kvss
   ))
