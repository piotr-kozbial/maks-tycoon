(ns ecs.systems.my-test-entities
  (:require
   [gamebase.ecs :as ecs]))

(defn mk-system []
  {:ecs/kind :system
   :ecs/system-id ::test})

(defn insert-test-component [entity component-key]
  {:ecs/kind :component
   :ecs/system-id ::test
   :ecs/entity-id (:ecs/entity-id entity)
   :ecs/component-key component-key
   ;; our state
   :x 0.0
   })

;;(defn pass-to-all-)

(defmethod handle-event [:to-system ::test :ecs/time]
  [_ _ total-time _ object]
  

  )
