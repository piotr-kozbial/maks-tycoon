(ns app.utils.events
  (:require [clojure.pprint :refer [pprint]]
            [gamebase-ecs.core :as ecs]))


(defn str-target-id [target-id]
  (let [kind (::ecs/kind target-id)]
    (case kind
      :to-entity (str "entity " (::ecs/entity-id target-id))
      (pr-str target-id))))

(defn print-event-short [e]
  (println (str "(event) " (::ecs/msg e)))
  (println (str "(from)  " "?"))
  (println (str "(to)    " (str-target-id (::ecs/target-id e))))

  )

(defn print-sub-event-long [e]
  (print-event-short e)
  (println (dissoc e
                   :sq
                   ::ecs/msg
                   ::ecs/target-id
                   :caused-by
                   :sender-comment))
  (when-let [sender-comment (:sender-comment e)]
    (println (str "(sender comment) " sender-comment)))
  (when-let [caused-by (:caused-by e)]
    (println "---caused by------------------------------------")
    (print-sub-event-long caused-by)))

(defn print-event-long [e]
  (println "===EVENT========================================")
  (print-sub-event-long e)
  (println "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"))
