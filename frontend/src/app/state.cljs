(ns app.state
  (:require
   [gamebase.layers :as layers]
   [app.tiles.general :as tiles]
   [gamebase-ecs.virtual-timer :as vt]
   [gamebase-ecs.event-queue :as eq]

   [devcards.core]
   [sablono.core :as sab])
  (:require-macros
   [devcards.core :refer [defcard]])

  )

;; App state

(defonce app-state
  (atom
   {:frame-rate "???"

    :timer (vt/mk-timer)
    }))

(defonce ui-refresh-tick (atom 0))

(defonce _ui-refresh
  (do
    (js/setInterval (fn [] (swap! ui-refresh-tick inc)) 500)
    nil))

(defonce -entity-id-counter (atom 0))

(defn get-fresh-entity-id []
  (swap! -entity-id-counter inc))

;; 

(def enhanced-canvas-object (atom nil))


;; Tile extra

(defn get-tile-extra [tx ty]
  ((:tile-extra (:world @app-state)) [tx ty]))

(defn update-tile-extra [tx ty f]
  (swap! app-state update-in [:world :tile-extra]
         (fn [m]
           (assoc
            m
            [tx ty]
            (f (m [tx ty])))))
  nil)

(defn update-tile-extra2 [world tx ty f]
  (update-in world [:tile-extra]
         (fn [m]
           (assoc
            m
            [tx ty]
            (f (m [tx ty]))))))


(defn- -get-layer [world layer-key]
  (->> (:layers world)
       (filter #(= (first %) layer-key))
       (first)
       (second)))

(defn init-tile-extra [tile-x tile-y]
  (let [layer (-get-layer (:world @app-state) :foreground)
        [_ tile-number] (layers/get-tile-from-layer layer tile-x tile-y)
        tile (tiles/tiles-by-number tile-number)]
    (swap! app-state update-in [:world :tile-extra]
           (fn [m]
             (assoc
              m
              [tile-x tile-y]
              (some #(tiles/initialize-tile-extra % tile-x tile-y tile) (:ids tile)))))))


(defcard my-first-card
  (sab/html [:h1 "Devcards is awesome!"]))


