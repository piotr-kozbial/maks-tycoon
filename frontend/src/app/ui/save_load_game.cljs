(ns app.ui.save-load-game
  (:require
   [rum.core :as rum]
   [app.state :refer [app-state ui-refresh-tick]]
   [gamebase.ecs :as ecs]
   [app.ecs.common-events :as ci]
   [app.world-interop :as wo]
   [app.server-communication :as sc]
   [app.ui.ui-state :as uis]
   [app.key-mouse-input :as kmi]
   [goog.string :as gstring]
   [goog.string.format]))

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
          #(swap! uis/ui-state assoc-in [:sidebar :save-load-game :state] :base)))
(defn box [& content]
  (apply vector
    :div
    {:style {:margin "3px" :padding "5px"}}
    content))
(defn spacer []
  [:span {:style {:white-space "pre"}} "   "])

(defn save-game-as-open []
  (swap! uis/ui-state assoc-in [:sidebar :save-load-game :state] :save-as))
(defn save-game-as [name]
  (sc/save-game-as name
                   #(do (swap! uis/ui-state assoc-in [:sidebar :save-load-game :state] :base)
                        (swap! uis/ui-state assoc-in [:game-saved-time] (js/millis)))
                   #(do (swap! uis/ui-state assoc-in [:sidebar :save-load-game :state] :base)
                        (js/alert "ERROR: game not saved!"))))
(defn save-game []
  (let [ui-state @uis/ui-state
        id (uis/get-game-id ui-state)
        name (uis/get-game-name ui-state)]
    (sc/save-game id name
                  #(do (swap! uis/ui-state assoc-in [:sidebar :save-load-game :state] :base)
                       (swap! uis/ui-state assoc-in [:game-saved-time] (js/millis)))
                  #(do (swap! uis/ui-state assoc-in [:sidebar :save-load-game :state] :base)
                       (js/alert "ERROR: game not saved!")))))
(defn load-game-open []
  (.log js/console "load game...")
  (sc/list-games
   (fn [game-list]
     (.log js/console (str "LIST GAMES RET: " game-list))
     (swap! uis/ui-state assoc-in [:sidebar :save-load-game :state] :load)
     (swap! uis/ui-state assoc-in [:sidebar :save-load-game :game-list] game-list))))
(defn load-game [id name]
  (sc/load-game
   id
   (fn [ret] (do
              (swap! uis/ui-state assoc-in [:sidebar :save-load-game :state] :base)
              (swap! uis/ui-state assoc-in [:game-saved-time] (js/millis))
              (let [world (:world (:state ret))]
                (wo/set-world world)
                (wo/run)
                (uis/set-game-id id)
                (uis/set-game-name name)
                (.log js/console (str "GAME LOADED. " id " " name " - " (uis/get-game-id @uis/ui-state) " " (uis/get-game-name @uis/ui-state))))))
   #((swap! uis/ui-state assoc-in [:sidebar :save-load-game :state] :base)
     (js/alert "ERROR: game not loaded!"))))
(defn new-game []
  (wo/set-world (wo/mk-world))
  (wo/run)
  (uis/set-game-id nil)
  (uis/set-game-name nil)
  (uis/set-game-saved-time nil))

(rum/defcs save-load-game-component < rum/reactive [component-state]
  (rum/react ui-refresh-tick)

  (let [{:keys [state game-list mouse-over-game-id]} (-> (rum/react uis/ui-state) :sidebar :save-load-game)]

    [:div
     ;; SAVE
     (box (button "save-icon.png"
                  (if (and (uis/get-game-id @uis/ui-state) (= state :base)) button-style disabled-button-style)
                  " SAVE GAME"
                  #(when (and (uis/get-game-id @uis/ui-state) (= state :base)) (save-game)))
          [:br]
          [:i
           (if-let [saved-time (:game-saved-time @uis/ui-state)]
             (let [total-seconds (int (/ (- (js/millis) saved-time) 1000))
                   seconds (mod total-seconds 60)
                   minutes (mod (int (/ total-seconds 60)) 60)
                   hours (int (/ total-seconds 3600))]
               (str "saved "
                    (when (> hours 0)
                      (hours "h "))
                    (when (> minutes 0)
                      (gstring/format "%02dm" minutes))
                    (gstring/format "%02ds" seconds)
                    " ago"))
             "never saved"
             )]

          )

     ;; SAVE AS
     (box (button "save-as-icon.png"
                  (if (#{:base :save-as} state) button-style disabled-button-style)
                  " SAVE GAME AS..."
                  #(when (= state :base) (save-game-as-open)))
          (when (= state :save-as)
            [:div
             [:form [:input {:type "text" :name "save-game-as-name" :ref "save-game-as-name"
                             :on-focus (fn [_] (.log js/console "FOCUS")
                                         (kmi/disable))
                             :on-blur (fn [_] (.log js/console "FOCUS LOST")
                                        (kmi/enable))
                             :on-change (fn [_] (.log js/console "CH"))}]]
             (box
              (spacer)
              (button nil button-style "Save"
                      #(let [name (.-value (rum/ref-node component-state "save-game-as-name"))]
                         (save-game-as name)))
              (spacer)
              (cancel-button))]))

     ;; LOAD
     (box (button "load-icon.png"
                  (if (#{:base :load} state) button-style disabled-button-style)
                  " LOAD GAME..."
                  #(when (= state :base) (load-game-open)))
          (when (= state :load)
            [:div
             (for [[id name] (sort-by second game-list)]
               [:div {:style {:cursor "pointer"
                              :background-color (when (= id mouse-over-game-id) "#a58d2e")}
                      :on-mouse-over (fn [e]
                                       (swap! uis/ui-state assoc-in [:sidebar :save-load-game :mouse-over-game-id] id))
                      :on-mouse-out (fn [_]
                                      (swap! uis/ui-state assoc-in [:sidebar :save-load-game :mouse-over-game-id] nil))
                      :on-click (fn [_]
                                  (load-game id name))

                      } name ;; (str id " -> " name)
                ])

             (box (cancel-button))]))
     ;; NEW
     (box (button "asterisk.png" button-style " NEW GAME"
                  #(new-game)))

     ]))
