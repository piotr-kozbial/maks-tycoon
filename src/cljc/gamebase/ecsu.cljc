(ns gamebase.ecsu
  (:require
   [gamebase.ecs :as ecs]
   [gamebase.event-queue :as eq]))

(def ^:dynamic *-event-target-prefix* nil)

(defmacro component [id & body]
  `(binding [*-event-target-prefix* [:to-component ~id]]
     ~@body))

(defmacro handle-event [msg & body]
  (let [id-world '<world>
        id-event '<event>
        id-this '<this>
        id-time '<time>]
    `(let [event-target# (into *-event-target-prefix* [~msg])]
       (defmethod ecs/handle-event event-target#
         [~id-world ~id-event ~id-this]
         (let [~id-time (::eq/time ~id-event)]
           ~@body)))))

(defmacro my-entity []
  (let [id-world '<world>
        id-this '<this>]
    `(ecs/get-entity ~id-world ~id-this)))
