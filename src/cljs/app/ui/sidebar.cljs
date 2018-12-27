(ns app.ui.sidebar
  (:require
   [rum.core :as rum]
   [app.state :refer [app-state ui-refresh-tick]]
   [gamebase.ecs :as ecs]
   [app.ecs.entities.locomotive :as locomotive]
   [app.ecs.common-events :as ci]
   [gamebase.canvas-control :as canvas-control]
   [gamebase.projection :as proj]
   [gamebase.virtual-timer :as vt]
   [app.world-interop :as wo]

   [gamebase.ui.dropdown :refer [mk-dropdown]]

   [app.ui.save-load-game :refer [save-load-game-component]]

   [app.ui.ui-state :refer [ui-state] :as uis]))

(rum/defc sidebar-component < rum/reactive []
  (rum/react ui-refresh-tick)

  (let [{:keys [open? selected-id]} (-> (rum/react ui-state) :sidebar :loc-selector)
        {:keys [game-id game-name]} (-> (rum/react ui-state))
        {:keys [frame-rate world]} @app-state
        loc (ecs/get-entity-by-key world selected-id)
        driving? (:driving? (:move (::ecs/components loc)))]

    [:div
     [:div {:style {:font-size "larger" :font-weight "bold"}} (if game-id (or game-name "") [:i "(unsaved game)"])]
     [:br]

     [:div (str "FRAME RATE: " frame-rate)]
     [:div
      "scale: " (canvas-control/get-scale) " "
      [:a {:href "#" :on-click (fn [_] (canvas-control/set-scale 0.5))} "50%"] " "
      [:a {:href "#" :on-click (fn [_] (canvas-control/set-scale 1.0))} "100%"] " "
      [:a {:href "#" :on-click (fn [_] (canvas-control/set-scale 2.0))} "200%"]]
     [:br] [:br] [:br]

     [:br] [:br] [:br]

     (save-load-game-component)
 ]))

