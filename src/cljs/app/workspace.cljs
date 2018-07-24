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

(comment

  (def test-entity
    (ecsu/mk-entity :test ::test
                    {:path (ecsu/mk-component sys-drawing/mk-path-component
                                              {:path-kvs [:path]})}
                    :path #_(g/precomputed
                           (g/circle-arc
                            [100 16] 150 (g/degrees 0) (g/degrees 180) :positive))
                    (tiles/zero-based-path [:e :n])
                    ))

  (inject-entity test-entity)

  (kill-entity :test)

  )

