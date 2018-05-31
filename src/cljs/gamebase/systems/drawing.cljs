(ns gamebase.systems.drawing
  (:require
   [gamebase.ecs :as ecs]))

(defn mk-system []
  (ecs/mk-system ::drawing))

(def to-system
  (ecs/to-system ::drawing))

(defmethod ecs/handle-event [:to-system ::drawing :update]
  [world event system]
  ;;(.log js/console "sys update")
  (ecs/pass-event-through-all world event
                              (ecs/all-components-of-system
                               world system)))

(defmethod ecs/handle-event [:to-system ::drawing ::draw]
  [world event system]
  ;;(.log js/console "sys draw")
  (ecs/pass-event-through-all world event
                              (ecs/all-components-of-system
                               world system)))

;;;;;----------------------------------------------
;;;;; Component: static image

(defn mk-static-image-component
  [entity-or-id key {:keys [point-kvs offset]}]
  (assoc
   (ecs/mk-component ::drawing entity-or-id key ::static-image)
   :point-kvs point-kvs
   :offset offset))

(defmethod ecs/handle-event [:to-component ::static-image :update]
  [world event component]
  ;;(.log js/console "drawing/static-image: update")
  component)

(defmethod ecs/handle-event [:to-component ::static-image ::draw]
  [world event {:keys [point-kvs offset] :as component}]
  (let [entity (ecs/get-entity world component)
        [point-x point-y] (get-in entity point-kvs)
        [ofs-x ofs-y] offset]
    (doseq [x (range 13)]
      (doseq [y (range 6)]
        (do
          (js/fill (js/color (* 20 x) (* 40 y) 0))
          (js/rect (+ point-x ofs-x) (+ point-y ofs-y)  20 20)

          ))

      ))

  component)

;; TODO - TERAZ CHCE GDZIES W core.cljs DODAC TAKI SYSTEM
;; DO WORLD

;; TODO - potem przekazywac do komponentow
;; i zaimplementowac dla ::static-image

;; ... a resources?
;; MUSI BYC klucz do resources, bo przeciez nie jakas funkcja
;; w stanie swiata
