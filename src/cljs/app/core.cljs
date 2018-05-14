(ns app.core
  (:require [rum.core :as rum]

            ;;[gamebase.events]
            ))

(enable-console-print!)

(defonce app-state (atom {:text "Hello Chestnut!"}))

(rum/defc greeting < rum/reactive []
   [:h1 (:text (rum/react app-state))])

(defn render []
  (rum/mount (greeting) (. js/document (getElementById "app"))))


(defn main [& _]

  (.log js/console "To jest main.")
  )
