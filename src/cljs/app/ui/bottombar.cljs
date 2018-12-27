(ns app.ui.bottombar
  (:require
   [rum.core :as rum]
   [app.state :refer [app-state ui-refresh-tick]]
   [gamebase.ecs :as ecs]
   [app.ecs.entities.locomotive :as locomotive]
   [gamebase.canvas-control :as canvas-control]
   [gamebase.virtual-timer :as vt]
   [app.world-interop :as wo]
   [app.ui.ui-state :refer [ui-state] :as uis]
   [cljs.pprint :refer [pprint]]
   ))

(rum/defc bottombar-component < rum/reactive []
  (rum/react ui-state)
  (let [
        {:keys [frame-rate world]} @app-state
        ]

    
    [:div
     ;; [:table
     ;;  [:tr
     ;;   [:td
     ;;    [:pre
     ;;     (with-out-str
     ;;       (pprint (:loc-1 (:gamebase.ecs/entities (:world @app-state)))))]]
     ;;   [:td
     ;;    [:pre
     ;;     (with-out-str
     ;;       (pprint (:loc-2 (:gamebase.ecs/entities (:world @app-state)))))]]]]
     [:pre
      (with-out-str
        (pprint (:gamebase.ecs/event-queue world)))]
]))

