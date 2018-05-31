(ns gamebase.systems.drawing
  (:require
   [gamebase.ecs :as ecs]))

(defn mk-system []
  (ecs/mk-system ::drawing))

(defn mk-static-image [entity-or-id key]
  (ecs/mk-component ::drawing entity-or-id key ::static-image))


(defmethod ecs/handle-event [:to-system ::drawing :update]
  [world event system]
  ;; TODO - przeliczyc, jesli trzeba, np. przy animacji
  ;; zmienic ramke

  )

(defmethod ecs/handle-event [:to-system ::drawing ::draw]
  [world event system]

  ;; TODO - rysowac w p5 po prostu, ale juz nie przeliczac nic

  )



;; TODO - TERAZ CHCE GDZIES W core.cljs DODAC TAKI SYSTEM
;; DO WORLD
