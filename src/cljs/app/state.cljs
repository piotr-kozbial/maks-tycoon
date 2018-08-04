(ns app.state
  (:require
   [gamebase.virtual-timer :as vt]
   [gamebase.event-queue :as eq]))

;; App state

(defonce app-state
  (atom
   {:frame-rate "???"


    }))

(defonce ui-refresh-tick (atom 0))

(defonce _ui-refresh
  (do
    (js/setInterval (fn [] (swap! ui-refresh-tick inc)) 500)
    nil))

(def virtual-timer {:root-atom app-state :ks [:virtual-timer]})
(defonce _vt_init (do (vt/initialize virtual-timer) nil))


(defonce -entity-id-counter (atom 0))

(defn get-fresh-entity-id []
  (swap! -entity-id-counter inc))


;; Event queue

(def event-queue {:root-atom app-state :ks [:event-queue]
                  :on-adding-to-empty (fn [])})
(defonce _eq_init (do (eq/initialize event-queue) nil))

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
