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

   [app.ui.ui-state :as uis]))


;;;;; State ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;


(defn tab-open? [ui-state tab-key]
  (get-in ui-state [:sidebar :tabs tab-key :open?]))

(defn open-tab [tab-key]
  (swap! uis/ui-state
         assoc-in
         [:sidebar :tabs tab-key :open?]
         true))
(defn close-tab [tab-key]
  (swap! uis/ui-state
         assoc-in
         [:sidebar :tabs tab-key :open?]
         false))

(defn register-tab [tab-struct]
  (swap! uis/ui-state
         assoc-in
         [:sidebar :tabs (:key tab-struct)]
         tab-struct))


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
nil
;; These tabs are predefined here.
;; But others may be installed dynamically in the UI state.
(def tabs
  {:games {:key :games
           :title "Games"
           :component #'save-load-game-component}})

;; ordering of tabs
;; if however this does not contain all keys from `tabs`,
;; those missing will be rendered anyway, at the end
;; in an undeterined order
(def tab-order
  [:app.modules.construction/construction
   :games])

(defn effective-tabs [ui-state]
  (merge-with
   merge
   tabs
   (get-in ui-state [:sidebar :tabs])))

(defn effective-tab-order [ui-state]
  (let [numbered-tab-order
        (map vector (reverse tab-order) (iterate dec 0))
        tab-number-map (apply hash-map
                         (apply concat numbered-tab-order))
        tab-number-fn (fn [tab-key]
                        (get tab-number-map tab-key 1))]
    (sort-by tab-number-fn (keys (effective-tabs ui-state)))))

(defn get-tab [ui-state tab-key]
  ((effective-tabs ui-state) tab-key))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(rum/defc sidebar-component < rum/reactive []
  (rum/react ui-refresh-tick)

  (let [ui-state (rum/react uis/ui-state)
        game-id (uis/get-game-id ui-state)
        game-name (uis/get-game-name ui-state)
        {:keys [open? selected-id]} (-> (rum/react uis/ui-state) :sidebar :loc-selector)
        {:keys [frame-rate world]} @app-state
        loc (ecs/get-entity-by-key world selected-id)
        driving? (:driving? (:move (::ecs/components loc)))]

    [:div
     [:div {:style {:font-size "larger" :font-weight "bold"}}
      (if game-id (or game-name "") [:i "(unsaved game)" game-id game-name])
      ]
     [:br]

     [:div (str "FRAME RATE: " frame-rate)]
     [:div
      "scale: " (canvas-control/get-scale) " "
      [:a {:href "#" :on-click (fn [_] (canvas-control/set-scale 0.5))} "50%"] " "
      [:a {:href "#" :on-click (fn [_] (canvas-control/set-scale 1.0))} "100%"] " "
      [:a {:href "#" :on-click (fn [_] (canvas-control/set-scale 2.0))} "200%"]]

     [:br] [:br] [:br]

     [:br] [:br] [:br]

     (for [tab-key (effective-tab-order ui-state)]
       (let [{:keys [component title]} (get-tab ui-state tab-key)]
         [:div
          [:hr {:style {:border "1px solid #BB4400"}}]
          (if (tab-open? ui-state tab-key)
            [:div
             [:div {:style {:margin-bottom "10px"}}
              [:span {:style {:color "#993300"
                              :cursor "pointer"}
                      :on-click (fn [_] (close-tab tab-key))}
               (str "[-] " title)]]
             (when component (component))]
            [:div {:style {:margin-bottom "10px"}}
             [:span {:style {:color "#993300"
                             :cursor "pointer"}
                     :on-click (fn [_] (open-tab tab-key))}
              (str "[+] " title)]])]))

     [:hr {:style {:border "1px solid #BB4400"}}]
 ]))

