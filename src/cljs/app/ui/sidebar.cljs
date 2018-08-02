(ns app.ui.sidebar
  (:require
   [rum.core :as rum]
   [app.state :refer [app-state ui-refresh-tick]]
   [gamebase.ecs :as ecs]
   [app.ecs.entities.locomotive :as locomotive]
   [gamebase.canvas-control :as canvas-control]
   [gamebase.virtual-timer :as vt]
   [app.world-interop :as wo]

   [gamebase.ui.dropdown :refer [mk-dropdown]]

   [app.ui.ui-state :refer [ui-state] :as uis]))

(rum/defc sidebar-component < rum/reactive []
  (rum/react ui-refresh-tick)
  
  (let [open? (-> (rum/react ui-state) :sidebar :loc-selector :open?)
        {:keys [frame-rate world]} @app-state
        loc (ecs/get-entity-by-key world :loc)
        driving? (:driving? (:move (::ecs/components loc)))]

    [:div
     [:div (str "FRAME RATE: " frame-rate)]
     [:div
      "scale: " (canvas-control/get-scale) " "
      [:a {:href "#" :on-click (fn [_] (canvas-control/set-scale 0.5))} "50%"] " "
      [:a {:href "#" :on-click (fn [_] (canvas-control/set-scale 1.0))} "100%"] " "
      [:a {:href "#" :on-click (fn [_] (canvas-control/set-scale 2.0))} "200%"]]
     [:br] [:br] [:br] [:br] [:br]



     [:div
      [:a {:href "#" :on-click (fn [_] (wo/send-to-entity :loc ::locomotive/drive))}
       (if driving? "[DRIVE]" "DRIVE")]
      [:span " - "]
      [:a {:href "#" :on-click (fn [_] (wo/send-to-entity :loc ::locomotive/stop))}
       (if driving? "STOP" "[STOP]")]]

     [:br] [:br] [:br] [:br] [:br]



     (let [locs (wo/get-all-locomotives world)]
       [:div

        [:div "Locomotives: " (str (count locs))]

        (mk-dropdown {:open? open?
                      :items (->> locs
                                  (map #(::ecs/entity-id %))
                                  (sort)
                                  (map #(vector % (str "halo" (name %)))))
                      :selected-id :loc-2
                      :on-click-open #'uis/loc-selector-open
                      :on-click-close #'uis/loc-selector-close})

        "A tutaj ......................."
        ])]))

