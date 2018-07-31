(ns app.world-interop
  (:require
   [gamebase.ecs :as ecs]
   [app.ecs.entities.locomotive :as locomotive]))


(defn get-all-locomotives [world]

  (filter
   #(= (::ecs/type %) ::locomotive/locomotive)
   (vals (::ecs/entities world)))
  ;; (::ecs/entities world)

  )



(comment



 (get-all-locomotives (:world @app.state/app-state))





 )
