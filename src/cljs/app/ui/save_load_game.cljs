(ns app.ui.save-load-game
  (:require
   [rum.core :as rum]
   [app.state :refer [app-state ui-refresh-tick]]
   [gamebase.ecs :as ecs]
   [app.ecs.common-events :as ci]
   [app.world-interop :as wo]
   [app.server-communication :as sc]
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

(defn box [& content]
  (apply vector
    :div
    {:style {:margin "3px" :padding "5px"}}
    content))

(defn save-game []) ; TODO
(defn load-game []) ; TODO

(defn save-game-as [name]
  (sc/save-game-as name #(do
                           (.log js/console "save success")
                           (swap! ui-state assoc-in [:sidebar :save-load-game :state] nil))
                   #(do (.log js/console "save failed")
                        (swap! ui-state assoc-in [:sidebar :save-load-game :state] nil)
                        (js/alert "ERROR: game not saved!"))))

(rum/defcs save-load-game-component < rum/reactive [component-state]
  (rum/react ui-refresh-tick)

  (let [{:keys [state]} (-> (rum/react ui-state) :sidebar :save-load-game)]

    [:div
     ;; SAVE
     (box (button "public/save-icon.png"
                  (if (= state nil) button-style disabled-button-style)
                  " SAVE GAME"
                  #(when (= state nil) (save-game))))
     ;; SAVE AS
     (box (button "public/save-as-icon.png" button-style " SAVE GAME AS..."
                  #(do
                     (swap! ui-state assoc-in [:sidebar :save-load-game :state] :save-as)))
          (when (= state :save-as)
            [:div
             [:div

              [:form [:input {:type "text" :name "jasio"
                              :ref "save-game-as-name"}]]]
             [:div {:style {:margin "3px" :padding "5px"}}
              [:span {:style {:white-space "pre"}} "   "]
              (button nil button-style "Save"
                      #(let [name (.-value (rum/ref-node component-state "save-game-as-name"))]
                         (save-game-as name)))

              [:span {:style {:white-space "pre"}} "   "]
              (button nil red-button-style "Cancel"
                      #(do
                         (.log js/console "cancel")
                         (swap! ui-state assoc-in [:sidebar :save-load-game :state] nil)))]]))
     ;; LOAD
     (box (button "public/load-icon.png"
                  (if (= state nil) button-style disabled-button-style)
                  " LOAD GAME..."
                  #(load-game)))]))
