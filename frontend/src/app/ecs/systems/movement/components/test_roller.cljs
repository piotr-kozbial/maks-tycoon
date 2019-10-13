(ns app.ecs.systems.movement.components.test-roller
  (:require
   [gamebase-ecs.core :as ecs]
   [gamebase-ecs.event-queue :as eq]
   [app.ecs.common-events :as ci]
   [gamebase.geometry :as g]
   [app.ecs.systems.movement.components.roller :as rol]

   )

)



(derive ::test-roller ::rol/roller)

(defn mk-test-roller [previous-path-f next-path-f get-reference-f & args]
  (let [v (assoc
           (apply rol/mk-roller args)
           ::ecs/type ::test-roller
           ::previous-path-f previous-path-f
           ::next-path-f next-path-f
           ::get-reference-f get-reference-f)]
    (if :gamebase-ecs.core/*with-xprint*
      (vary-meta v
                 update-in [:app.xprint.core/key-order]
                 concat [[:app.xprint.core/comment
                          "configuration"]
                         ::previous-path-f
                         ::next-path-f
                         ::get-reference-f])
      v)))

(defmethod rol/roller-next-path ::test-roller
  [world this path]
  ((::next-path-f this) world this path))

(defmethod rol/roller-previous-path ::test-roller
  [world this path]
  ((::previous-path-f this) world this path))

(defmethod rol/roller-get-reference ::test-roller
  [world this]
  ((::get-reference-f this) world this))
