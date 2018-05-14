(ns app.core
  (:require [rum.core :as rum]

            [gamebase.events :as events]
            [gamebase.canvas-control :as canvas-control]
            [gamebase.layouts.sidebar-and-bottombar :as our-layout]
            ))

(enable-console-print!)

(defonce app-state (atom {:text "Hello Chestnut!"}))

(rum/defc main-component < rum/reactive []
  (our-layout/mk-html))

(defn render []
  (rum/mount (main-component)
             (. js/document (getElementById "app"))))


(defn draw []
  (js/clear)
  (js/noSmooth)
)


(defn main [& _]

  (let [l-config
        {:state-atom app-state
         :state-kvs [:canvas-control]
         :get-world-width (fn [] 3000)
         :get-world-height (fn [] 2000)
         :get-scale (fn [] 1.0)
         :get-canvas-width (fn [] 1300)
         :get-canvas-height (fn [] 600)}]

    (our-layout/mk-layout
     app-state [:layout]
     {:bottom-bar-height 150
      :after-canvas-resize
      (canvas-control/mk-canvas-resize-handler l-config)})

    (canvas-control/setup l-config))

  (our-layout/initialize)

  (events/add-handler :draw draw)

  )
