(ns app.state
  (:require
   [gamebase.virtual-timer :as vt]
   [gamebase.event-queue :as eq]))

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
