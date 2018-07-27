(ns app.workspace
  (:require [gamebase.resources :as resources]
            [gamebase.systems.drawing :as sys-drawing]
            [gamebase.systems.movement :as sys-move]
            [app.ecs.entities.locomotive :as locomotive]
            [gamebase.events :as events]
            [gamebase.event-queue :as eq]
            [gamebase.ecs :as ecs]
            [gamebase.virtual-timer :as vt]
            [gamebase.canvas-control :as canvas-control]
            [gamebase.layouts.sidebar-and-bottombar :as our-layout]
            [gamebase.ecsu :as ecsu]
            [gamebase.geometry :as g]
            [gamebase.tiles :as tiles]
            [gamebase.event-queue :as eq]
            [app.core :as core]
            ))


(defn inject-entity [e]
  (swap! core/app-state
         (fn [{:keys [world] :as state}]
           (assoc
            state
            :world
            (ecs/insert-object world e))))
  nil)

(defn kill-entity [entity-key]
  (swap! core/app-state
         (fn [{:keys [world] :as state}]
           (assoc
            state
            :world
            (ecs/remove-entity-by-key world entity-key))))
  nil)

(defn send-to-entity [entity-key msg & kvs]
  (let [{:keys [world]} @core/app-state
        entity (ecs/get-entity-by-key world entity-key)
        time (vt/get-time core/virtual-timer
              )
        event (apply assoc (ecs/mk-event (ecs/to entity) msg time) kvs)]
    (apply eq/put-event! core/event-queue event kvs)))


(comment

  (def test-entity
    (ecsu/mk-entity :test ::test
                    {:path (ecsu/mk-component sys-drawing/mk-path-component
                                              {:path-kvs [:path]})}
                    :path (g/precomputed (tiles/track-path [:e :n] 2 1))))

  (inject-entity test-entity)

  (kill-entity :test)

  (send-to-entity :loc ::locomotive/stop)

  (send-to-entity :loc ::locomotive/drive)

  )

