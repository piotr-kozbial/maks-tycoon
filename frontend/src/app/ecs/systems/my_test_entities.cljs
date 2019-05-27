(ns ecs.systems.my-test-entities
  (:require
   [gamebase.ecs :as ecs]))

(defn mk-system []
  (ecs/mk-system ::test))

(defn mk-component [entity-or-id key]
  (ecs/mk-component ::test entity-or-id key ::test-component-1))

(defmethod ecs/handle-event [:to-system ::test ::ecs/time]
  [world event system]
  (.log js/console "Jestem testowym systemem, dostalem ::ecs/time")
  (ecs/pass-event-through-all
   world event (ecs/all-components-of-system world system)))

(defmethod ecs/handle-event [:to-component ::test-component-1 ::ecs/time]
  [world event component]
  (.log js/console (str "Jestem komponentem " (::ecs/component-key component) ", dostalem ::ecs/time"))
  world)


;; test
(comment
  (do
    (def w (ecs/mk-world))
    (def s (mk-system))
    (def e1 (ecs/mk-entity :my-entity :my-type))
    (def e2 (ecs/mk-entity :my-entity-2 :my-type))
    (def c1 (mk-component e1 "pierwszy"))
    (def c2 (mk-component e1 "drugi"))
    (def c3 (mk-component e2 "trzeci"))
    (def w' (-> w
                (ecs/insert-object s)
                (ecs/insert-object e1)
                (ecs/insert-object e2)
                (ecs/insert-object c1)
                (ecs/insert-object c2)
                (ecs/insert-object c3))))

  (def event1 (ecs/mk-event s ::ecs/time))

  (def w'' (ecs/do-handle-event w' event1))

  (ecs/resolve-target-id w' (::ecs/target-id event1))

  (def w'' (ecs/handle-event w' event1 s))

  )