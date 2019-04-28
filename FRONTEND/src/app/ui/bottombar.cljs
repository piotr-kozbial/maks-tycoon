(ns app.ui.bottombar
  (:require
   [rum.core :as rum]
   [app.state :refer [app-state ui-refresh-tick]]
   [gamebase.ecs :as ecs]
   [app.ecs.entities.locomotive :as locomotive]
   [gamebase.projection :as proj]
   [app.ecs.common-events :as ci]
   [gamebase.ui.dropdown :refer [mk-dropdown]]
   [gamebase.canvas-control :as canvas-control]
   [gamebase.virtual-timer :as vt]
   [app.world-interop :as wo]
   [app.ui.ui-state :refer [ui-state] :as uis]
   [cljs.pprint :refer [pprint]]
   ))

(rum/defc bottombar-component < rum/reactive []
  (rum/react ui-state)
  (let [{:keys [frame-rate world]} @app-state
        {:keys [open? selected-id]} (-> (rum/react ui-state)
                                        :sidebar :loc-selector)
        loc (ecs/get-entity-by-key world selected-id)
        driving? (:driving? (:move (::ecs/components loc)))
        locs (wo/get-all-locomotives world)]

    [:table
     [:tr
      [:td

        (mk-dropdown {:label "Train:"
                      :open? open?
                      :items (->> locs
                                  (map #(::ecs/entity-id %))
                                  (sort)
                                  (map #(vector % (str "halo" (name %)))))
                      :selected-id selected-id
                      :callbacks {:open #'uis/loc-selector-open
                                  :close #'uis/loc-selector-close
                                  :on-select #'uis/loc-selector-select}})

        (when-let [selected-loc (first
                                 (filter #(= (::ecs/entity-id %) selected-id)
                                         locs))]
          (let [tile-x (:tile-x selected-loc)
                tile-y (:tile-y selected-loc)]
            [:div
             [;; location
              :div {:style {:margin-bottom "5px"}}
              "Location (loc): [" tile-x ", " tile-y "] "
              [:a {:href "#"
                   :style {:color "#e8cba2" :background-color "#47681b"}
                   :on-click (fn [_] (canvas-control/center-on
                                     (proj/world-point
                                      [(* 32 tile-x) (* 32 tile-y)])))}
               "→ SHOW"]]

             [;; drive/stop
              :div {:style {:margin-bottom "5px"}}
              [:span "State: "]
              [:div
               {:style {:display "inline-block"}}
               [:a {:href "#" :on-click (fn [_] (wo/send-to-entity selected-id ::ci/drive))
                    :style (if driving?
                             {:color "white"
                              :background-color "green"
                              :border "solid 1px green"}
                             {:color "black"
                              :border "solid 1px black"})}
                "DRIVE"]
               [:span " "]
               [:a {:href "#" :on-click (fn [_] (wo/send-to-entity selected-id ::ci/stop))
                    :style (if driving?
                             {:color "black"
                              :border "solid 1px black"}
                             {:color "white"
                              :background-color "red"
                              :border "solid 1px red"})}
                "STOP"]]]

             [;; operations
              :div {:style {:margin-bottom "5px"}}
              [:span "Operations: "]

              [:a {:href "#" :on-click (fn [_]


                                         (wo/kill-train world (::ecs/entity-id selected-loc))
                                         )
                   :style
                   {:color "#e8cba2" :background-color "#fc1616"}}
               "DESTROY"]]

             ]))
       ]
      [:td [:span {:style {:white-space "pre"}} "   "]]
      [:td (pr-str loc)]]]))
