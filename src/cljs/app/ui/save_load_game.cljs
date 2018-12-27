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
(defn cancel-button []
  (button nil red-button-style "Cancel"
          #(swap! ui-state assoc-in [:sidebar :save-load-game :state] :base)))
(defn box [& content]
  (apply vector
    :div
    {:style {:margin "3px" :padding "5px"}}
    content))
(defn spacer []
  [:span {:style {:white-space "pre"}} "   "])

(defn save-game []) ; TODO
(defn save-game-as-open []
  (swap! ui-state assoc-in [:sidebar :save-load-game :state] :save-as))
(defn save-game-as [name]
  (sc/save-game-as name #(swap! ui-state assoc-in [:sidebar :save-load-game :state] :base)
                   #(do (swap! ui-state assoc-in [:sidebar :save-load-game :state] :base)
                        (js/alert "ERROR: game not saved!"))))
(defn load-game-open []
  (.log js/console "load game...")
  (sc/list-games
   (fn [game-list]
     (.log js/console (str "LIST GAMES RET: " game-list))
     (swap! ui-state assoc-in [:sidebar :save-load-game :state] :load)
     (swap! ui-state assoc-in [:sidebar :save-load-game :game-list] game-list))))
(defn load-game [id name]
  (sc/load-game
   id
   (fn [ret] (do
              (swap! ui-state assoc-in [:sidebar :save-load-game :state] :base)

              (let [world (:world (:state ret))]
                (wo/set-world world)
                (wo/run)
                (.log js/console "GAME LOADED."))))
   #((swap! ui-state assoc-in [:sidebar :save-load-game :state] :base)
     (js/alert "ERROR: game not loaded!"))))

(rum/defcs save-load-game-component < rum/reactive [component-state]
  (rum/react ui-refresh-tick)

  (let [{:keys [state game-list mouse-over-game-id]} (-> (rum/react ui-state) :sidebar :save-load-game)]

    [:div
     ;; SAVE
     (box (button "public/save-icon.png"
                  (if (= state :base) button-style disabled-button-style)
                  " SAVE GAME"
                  #(when (= state :base) (save-game))))

     ;; SAVE AS
     (box (button "public/save-as-icon.png"
                  (if (#{:base :save-as} state) button-style disabled-button-style)
                  " SAVE GAME AS..."
                  #(when (= state :base) (save-game-as-open)))
          (when (= state :save-as)
            [:div
             [:form [:input {:type "text" :name "save-game-as-name" :ref "save-game-as-name"}]]
             (box
              (spacer)
              (button nil button-style "Save"
                      #(let [name (.-value (rum/ref-node component-state "save-game-as-name"))]
                         (save-game-as name)))
              (spacer)
              (cancel-button))]))

     ;; LOAD
     (box (button "public/load-icon.png"
                  (if (#{:base :load} state) button-style disabled-button-style)
                  " LOAD GAME..."
                  #(when (= state :base) (load-game-open)))
          (when (= state :load)
            [:div
             (for [[id name] (sort-by second game-list)]
               [:div {:style {:cursor "pointer"
                              :background-color (when (= id mouse-over-game-id) "#a58d2e")}
                      :on-mouse-over (fn [e]
                                       (swap! ui-state assoc-in [:sidebar :save-load-game :mouse-over-game-id] id))
                      :on-mouse-out (fn [_]
                                      (swap! ui-state assoc-in [:sidebar :save-load-game :mouse-over-game-id] nil))
                      :on-click (fn [_]
                                  (load-game id name))

                      } name ;; (str id " -> " name)
                ])

             (box (cancel-button))]))
     ;; NEW
     (box (button "public/asterisk.png" button-style " NEW GAME" #()))

     ]))
