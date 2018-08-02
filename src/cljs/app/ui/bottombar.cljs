(ns app.ui.bottombar
  (:require
   [rum.core :as rum]
   [app.state :refer [app-state ui-refresh-tick]]
   [gamebase.ecs :as ecs]
   [app.ecs.entities.locomotive :as locomotive]
   [gamebase.canvas-control :as canvas-control]
   [gamebase.virtual-timer :as vt]
   [app.world-interop :as wo]


   ))

(rum/defc bottombar-component < rum/reactive []
  [:div
   [:pre
    ;;(with-out-str (pprint (get-in  (rum/react app-state) [:world :gamebase.ecs/entities])))
    ]])

