(ns app.workspace
  (:require [gamebase.resources :as resources]
            [gamebase.systems.drawing :as sys-drawing]
            [app.ecs.systems.movement.movement :as sys-move]
            [app.ecs.entities.locomotive :as locomotive]
            [gamebase.events :as events]
            [gamebase-ecs.event-queue :as eq]
            [gamebase-ecs.core :as ecs]
            [gamebase-ecs.virtual-timer :as vt]
            [gamebase-enhanced-canvas.core :as enhanced-canvas]
            [gamebase.layouts.sidebar-and-bottombar :as our-layout]
            [gamebase.geometry :as g]
            [app.tiles.general :as tiles]
            [app.core :as core]
            [app.state :refer [app-state]]))


(defn inject-entity [e]
  (swap! app-state
         (fn [{:keys [world] :as state}]
           (assoc
            state
            :world
            (ecs/insert-object world e))))
  nil)

(defn kill-entity [entity-key]
  (swap! app-state
         (fn [{:keys [world] :as state}]
           (assoc
            state
            :world
            (ecs/remove-entity-by-key world entity-key))))
  nil)

;; (defn send-to-entity [entity-key msg & kvs]
;;   (let [{:keys [world]} @app-state
;;         entity (ecs/get-entity-by-key world entity-key)
;;         time (vt/get-time virtual-timer
;;               )
;;         event (apply assoc (ecs/mk-event (ecs/to entity) msg time) kvs)]
;;     (apply eq/put-event! event-queue event kvs)))


(comment

  ;; (def test-entity
  ;;   (ecs---u/mk-entity :test ::test
  ;;                   {:path (ecs---u/mk-component sys-drawing/mk-path-component
  ;;                                             {:path-kvs [:path]})}
  ;;                   :path (g/precomputed (tiles/track-path [:e :n] 2 1))))

  (inject-entity test-entity)

  (kill-entity :test)

  (send-to-entity :loc ::locomotive/stop)

  (send-to-entity :loc ::locomotive/drive)

  )

