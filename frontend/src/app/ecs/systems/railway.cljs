(ns app.ecs.systems.railway
  (:require 
   [gamebase-ecs.core :as ecs]
   [app.ecs.common-events :as ci]
   [app.tiles.turnouts :as turnouts]))

(defn mk-system []
  (ecs/mk-system ::railway))

(def to-system
  (ecs/to-system ::railway))

(defmethod ecs/handle-event [:to-system ::railway ::ci/delta-t]
  [world event system]
  nil)

(defmethod ecs/handle-event [:to-system ::railway ::switch-turnout]
  [world {:keys [tile-x tile-y]} system]
  (when (turnouts/is-turnout? tile-x tile-y)
    (turnouts/cycle-turnout-state2 world tile-x tile-y)))

(defmethod ecs/handle-event [:to-system ::railway ::connect]
  [world {:keys [puller-id pulled-id]} system]
  [(assoc (ecs/mk-event (ecs/to-entity pulled-id) ::ci/connect-to (::ecs/time world))
          :reference-entity-or-id puller-id
          :reference-path-kvs [::ecs/components :rear :path]
          :reference-length-on-path-kvs [::ecs/components :rear :length-on-path])
   (assoc (ecs/mk-event (ecs/to-entity puller-id) ::ci/connect-pulled (::ecs/time world))
          :pulled-entity-or-id pulled-id)])



;; NOTE
;;
;; (defmethod ecs/query [:entity _ :railway/front]
;;   [this _])
;;
;; Ta metoda, dla wszystkich kolejowych entities, powinna zwracac:
;;
;; {:tile-xy [tile-x tile-y]
;;  :track # e.g. [:w :e]
;;  :track-length
;;  :length-on-track
;;  :position [x y]
;;  :connector? (bool)
;;}

;; NOTE
;;
;; Tak samo, tylny:
;;
;; (defmethod ecs/query [:entity _ :railway/rear]
;;   [this _])
