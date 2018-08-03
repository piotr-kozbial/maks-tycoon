(ns app.ui.sidebar
  (:require
   [rum.core :as rum]
   [app.state :refer [app-state ui-refresh-tick]]
   [gamebase.ecs :as ecs]
   [app.ecs.entities.locomotive :as locomotive]
   [gamebase.canvas-control :as canvas-control]
   [gamebase.projection :as proj]
   [gamebase.virtual-timer :as vt]
   [app.world-interop :as wo]

   [gamebase.ui.dropdown :refer [mk-dropdown]]

   [app.ui.ui-state :refer [ui-state] :as uis]))

(rum/defc sidebar-component < rum/reactive []
  (rum/react ui-refresh-tick)

  (let [{:keys [open? selected-id]} (-> (rum/react ui-state) :sidebar :loc-selector)
        {:keys [frame-rate world]} @app-state
        loc (ecs/get-entity-by-key world selected-id)
        driving? (:driving? (:move (::ecs/components loc)))]

    [:div
     [:div (str "FRAME RATE: " frame-rate)]
     [:div
      "scale: " (canvas-control/get-scale) " "
      [:a {:href "#" :on-click (fn [_] (canvas-control/set-scale 0.5))} "50%"] " "
      [:a {:href "#" :on-click (fn [_] (canvas-control/set-scale 1.0))} "100%"] " "
      [:a {:href "#" :on-click (fn [_] (canvas-control/set-scale 2.0))} "200%"]]
     [:br] [:br] [:br]

     (let [locs (wo/get-all-locomotives world)]
       [:div

        [:div "Locomotives: " (str (count locs))]

        (mk-dropdown {:open? open?
                      :items (->> locs
                                  (map #(::ecs/entity-id %))
                                  (sort)
                                  (map #(vector % (str "halo" (name %)))))
                      :selected-id selected-id
                      :callbacks {:open #'uis/loc-selector-open
                                  :close #'uis/loc-selector-close
                                  :on-select #'uis/loc-selector-select
                                  }})
        (let [selected-loc (first (filter #(= (::ecs/entity-id %) selected-id) locs))
              tile-x (:tile-x selected-loc)
              tile-y (:tile-y selected-loc)]
          [:div
           "tile: [" tile-x ", " tile-y "]" [:br]
           "heading: " [:br]
           [:a {:href "#"
                :on-click (fn [_] (canvas-control/center-on
                                  (proj/world-point [(* 32 tile-x) (* 32 tile-y)])))
                } "goto"] [:br]

           [:div
            [:a {:href "#" :on-click (fn [_] (wo/send-to-entity selected-id ::locomotive/drive))
                 :style (if driving?
                          {:color "white"
                           :background-color "green"
                           :border "solid 1px green"}
                          {:color "black"
                           :border "solid 1px black"})}
             "DRIVE"
             ;(if driving? "[DRIVE]" "DRIVE")
             ]
            [:span " "]
            [:a {:href "#" :on-click (fn [_] (wo/send-to-entity selected-id ::locomotive/stop))
                 :style (if driving?
                          {:color "black"
                           :border "solid 1px black"}
                          {:color "white"
                           :background-color "red"
                           :border "solid 1px red"
                           })}
             "STOP"
             ;(if driving? "STOP" "[STOP]")
             ]] [:br]


           ])])]))

