;;;;; STATUS: ON HOLD ;;;;;

(ns gamebase.ecsu
  (:require
   [gamebase.ecs :as ecs]
   [gamebase.event-queue :as eq]))


;; private - bare identifiers to be used in macros
(def -id-event-target-prefix '<-event-target-prefix>)
(def -id-world '<world>)
(def -id-event '<event>)
(def -id-this '<this>) (declare <this>)
(def -id-time '<time>)
(def -id-entity '<entity>)
(def -id-component-key '<component-key>)

(defmacro component [id & body]
  (let [body' (remove #(and (seq? %) (= 'local (first %))) body)
        locals (->> body
                    (filter #(and (seq? %) (= 'local (first %))))
                    (mapcat rest))]
    `(let [~-id-event-target-prefix [:to-component ~id]
           ~@locals]
       ~@body')))

(defmacro handle-event [msg & body]
  `(let [event-target# (into ~-id-event-target-prefix [~msg])]
     (defmethod ecs/handle-event event-target#
       [~-id-world ~-id-event ~-id-this]
       (let [~-id-time (::eq/time ~-id-event)]
         ~@body))))

(defmacro my-entity []
  (let [id-world '<world>
        id-this '<this>]
    `(ecs/get-entity ~id-world ~id-this)))

(defmacro mk-component [constructor options]
  `(~constructor ~-id-entity ~-id-component-key ~options))

(defmacro mk-entity [id kind components & other-data-kvs]
  (let [components'
        (->> components
             (mapcat (fn [[k v]] [k `(let [~-id-component-key ~k] ~v)]))
             (apply hash-map))]
    `(let [~-id-entity (ecs/mk-entity ~id ~kind)]
       (assoc
         ~-id-entity
         ::ecs/components ~components'
         ~@other-data-kvs
         ))))

;; (ecsu/mk-entity
;;  ;; id
;;  :my-test-entity
;;  ;; components
;;  {:move (ecsu/mk-component sys-move/mk-path-follower nil)
;;   :img (ecsu/mk-component sys-drawing/mk-static-image-component
;;                           {:point-kvs (ecs/ck-kvs :move :position)
;;                            :angle-kvs (ecs/ck-kvs :move :angle)
;;                            :center [16 8]
;;                            :resource-name "loco1.png"})
;;   :debug-path (ecsu/mk-component sys-drawing/mk-path-component
;;                                  {:path-kvs (ecs/ck-kvs :move :path)})}
;;  ;; other data
;;  :origin [0 0])

