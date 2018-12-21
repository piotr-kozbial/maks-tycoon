(ns app.ui.save-load-game
  (:require
   [rum.core :as rum]
   [app.state :refer [app-state ui-refresh-tick]]
   [gamebase.ecs :as ecs]
   [app.ecs.common-events :as ci]
   [app.world-interop :as wo]
   [app.ui.ui-state :refer [ui-state] :as uis]))

(def button-style {:color "#e8cba2"
                   :background-color "#47681b" ;; "#34517f"
                   :padding "5px"
                   :cursor "pointer"})
(def disabled-button-style {:color "#e8cba2"
                            :background-color "#686868"
                           :padding "5px"
                           :cursor "pointer"})
(def red-button-style {:color "#e8cba2"
                       :background-color "#9b4915"
                   :padding "5px"
                   :cursor "pointer"})

(defn button [icon style text f]
  [:span  {:on-click (fn [_] (f)) :style style}
   (when icon [:img {:src icon :width 24 :height 24 :style {:vertical-align "middle"}}])
   text])

(rum/defc save-load-game-component < rum/reactive []
  (rum/react ui-refresh-tick)

  (let [{:keys [state]} (-> (rum/react ui-state) :sidebar :save-load-game)]

    [:div

     ;; SAVE
     [:div {:style {:margin "3px" :padding "5px"}}
      (button "public/save-icon.png"
              (if (= state nil) button-style disabled-button-style)
              " SAVE GAME"
              (fn []
                (when (= state nil)
                  (wo/save-game))))]

     ;; SAVE AS
     [:div {:style {:margin "3px" :padding "5px"}}
      (button "public/save-as-icon.png" button-style " SAVE GAME AS..."
              #(do
                 (swap! ui-state assoc-in [:sidebar :save-load-game :state] :save-as)))
      (when (= state :save-as)
        [:div
         [:div

          [:form [:input {:type "text" :name "jasio"}]]
          ]
         [:div {:style {:margin "3px" :padding "5px"}}
          [:span {:style {:white-space "pre"}} "   "]
          (button nil button-style "Save"
                  #(wo/save-game-as "??"))
          [:span {:style {:white-space "pre"}} "   "]
          (button nil red-button-style "Cancel"
                  #(do
                     (.log js/console "cancel")
                     (swap! ui-state assoc-in [:sidebar :save-load-game :state] nil)))

          ]]
        )]

     ;; LOAD
     [:div {:style {:margin "3px" :padding "5px"}}
      (button "public/load-icon.png"
              (if (= state nil) button-style disabled-button-style)
              " LOAD GAME..."
              #(wo/load-game))]]

    ))

