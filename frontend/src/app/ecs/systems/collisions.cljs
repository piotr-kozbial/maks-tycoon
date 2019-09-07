(ns app.ecs.systems.collisions
  (:require
   [gamebase.ecs :as ecs]
   [app.ecs.common-events :as ci]))

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
  (let [components (ecs/all-components-of-system world ::collisions)]
    (print (str (count components) " colliders found"))
    )
  nil)

(defn mk-collider [entity-or-id key]
  (assoc
   (ecs/mk-component ::collisions entity-or-id key ::collider)
   :a :b
   ))
