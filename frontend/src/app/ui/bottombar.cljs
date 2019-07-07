(ns app.ui.bottombar
  (:require
   [rum.core :as rum]
   [app.state :refer [app-state ui-refresh-tick]]
   [gamebase.ecs :as ecs]
   [app.ecs.entities.locomotive :as locomotive]
   [gamebase.projection :as proj]
   [app.ecs.common-events :as ci]
   [gamebase.ui.dropdown :refer [mk-dropdown mk-space]]
   [gamebase.canvas-control :as canvas-control]
   [gamebase.virtual-timer :as vt]
   [app.world-interop :as wo]
   [app.ui.ui-state :refer [ui-state] :as uis]
   [cljs.pprint :refer [pprint]]

   [gamebase.geometry :as geom]))


(defn entity-picture [entity]
  [:svg {:width 64 :height 32 :view-box "0 0 32 16"}
   [:image {:href (:image entity)
            :transform "rotate(-180,16,8)"}]])

(defn connect [puller pulled]
  (.log js/console
        (str "CONNECT "
             (ecs/id puller)
             (ecs/id pulled)))
  (wo/send-to-entity puller ::ci/connect-pulled :pulled-entity-or-id pulled)
  (wo/send-to-entity pulled ::ci/connect-to
                     :reference-entity-or-id puller
                     ;; TODO tu nizej dla wagonu :point, nie :engine
                     :reference-path-kvs (ecs/ck-kvs :engine :path)
                     :reference-length-on-path-kvs (ecs/ck-kvs :engine :length-on-path))
  )

(defn disconnect [puller pulled]
  (.log js/console
        (str "DISCONNECT "
             (ecs/id puller)
             (ecs/id pulled)))

  (wo/send-to-entity puller ::ci/disconnect-pulled)
  (wo/send-to-entity pulled ::ci/disconnect-front)
  )


(defn type-selector [my-state]
  (let [{:keys [open? selected-type]} my-state]
    (mk-dropdown {:label ""
                  :open? open?
                  :items [[:train "Train/Loc"]
                          [:car "Car"]]
                  :selected-id selected-type
                  :callbacks {:open #'uis/type-selector-open
                              :close #'uis/type-selector-close
                              :on-select #'uis/type-selector-select}

                  })))

(defn loc-selector [world my-state]
  (let [locs (wo/get-all-locomotives world)
        {:keys [open? selected-id]} my-state]
    (mk-dropdown {:label "" ;"Train:"
                  :open? open?
                  :items (->> locs
                              (map #(::ecs/entity-id %))
                              (sort)
                              (map #(vector % (name %))))
                  :selected-id selected-id
                  :callbacks {:open #'uis/loc-selector-open
                              :close #'uis/loc-selector-close
                              :on-select #'uis/loc-selector-select}})

    )

  )

(defn car-selector [world my-state]
  (let [cars (wo/get-all-cars world)
        {:keys [open? selected-id]} my-state]
    (mk-dropdown {:label "" ;"Train:"
                  :open? open?
                  :items (->> cars
                              (map #(::ecs/entity-id %))
                              (sort)
                              (map #(vector % (name %))))
                  :selected-id selected-id
                  :callbacks {:open #'uis/car-selector-open
                              :close #'uis/car-selector-close
                              :on-select #'uis/car-selector-select}})

    )
)


(defn loc-control [world my-state]
  (let [locs (wo/get-all-locomotives world)
        selected-loc-id (:selected-id my-state)]
    (when-let [selected-loc (first
                             (filter #(= (::ecs/entity-id %) selected-loc-id)
                                     locs))]
      (let [tile-x (:tile-x selected-loc)
            tile-y (:tile-y selected-loc)
            {:keys [driving? speed]} (:engine (::ecs/components selected-loc))]
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

           [:a {:href "#" :on-click (fn [_] (wo/send-to-entity selected-loc-id ::ci/reverse-drive))
                :style (if (and driving? (< speed 0))
                         {:color "white"
                          :background-color "red"
                          :border "solid 1px red"}
                         {:color "black"
                          :border "solid 1px black"})}
            "REVERSE"]

           [:span " "]

           [:a {:href "#" :on-click (fn [_] (wo/send-to-entity selected-loc-id ::ci/stop))
                :style (if driving?
                         {:color "black"
                          :border "solid 1px black"}
                         {:color "white"
                          :background-color "black"
                          :border "solid 1px black"})}
            "STOP"]

           [:span " "]

           [:a {:href "#" :on-click (fn [_] (wo/send-to-entity selected-loc-id ::ci/drive))
                :style (if (and driving? (> speed 0))
                         {:color "white"
                          :background-color "green"
                          :border "solid 1px green"}
                         {:color "black"
                          :border "solid 1px black"})}
            "DRIVE"]
           ]]

         [;; operations
          :div {:style {:margin-bottom "5px"}}
          [:span "Operations: "]

          [:a {:href "#" :on-click (fn [_]


                                     (wo/kill-train world (::ecs/entity-id selected-loc))
                                     )
               :style
               {:color "#e8cba2" :background-color "#fc1616"}}
           "DESTROY"]]

         ])))
  )

(defn car-control [world my-state]
  "car-control mockup")

(defn loc-view [world my-state]
  (let [selected-loc-id (:selected-id my-state)
        loc (ecs/get-entity-by-key world selected-loc-id)]
    [:div
     [:span
      (entity-picture loc)
      (->>
       (iterate
        (fn [[entity _]]
          (let [pulled-id (:pulled entity)
                touching-behind-id (:touching-behind entity)]
            (cond
              pulled-id
              ,   (let [pulled (ecs/get-entity-by-key world pulled-id)]
                    [pulled
                     [:span
                      [:button {:style {:height 32}
                                :on-click (fn [_] (disconnect entity pulled))}
                       "="]
                      (entity-picture pulled)]])
              touching-behind-id
              ,   (let [touching-behind
                        (ecs/get-entity-by-key world touching-behind-id)]
                    [touching-behind
                     [:span
                      [:button {:style {:height 32}
                                :on-click (fn [_] (connect entity touching-behind))}
                       "x"]
                      (entity-picture touching-behind)]])
              :else
              ,   nil)))
        [loc nil])
       (take-while identity) ;; stop when entity == nil
       (map second))]

     [:br]
     [:pre
      (with-out-str (pprint loc))]
     ])

  )

(defn car-view [world my-state]
  (let [cars (wo/get-all-cars world)
        selected-car-id (:selected-id my-state)]
    [:div
     "car-view mockup"

     (when-let [selected-car (first
                              (filter #(= (::ecs/entity-id %) selected-car-id)
                                      cars))]
       (let [tile-x (:tile-x selected-car)
             tile-y (:tile-y selected-car)]
         [:div
          [:pre
           (with-out-str (pprint selected-car))]
          ]))
     
]))

(rum/defc bottombar-component < rum/reactive []
  (let [ui-st
        ,   (rum/react ui-state)
        {:as state :keys [frame-rate world]}
        ,   @app-state
        [selector-state selector control view]
        ,   (case (:selected-type (-> ui-st :sidebar :type-selector))
              :train [(-> ui-st :sidebar :loc-selector) loc-selector loc-control loc-view]
              :car [(-> ui-st :sidebar :car-selector) car-selector car-control car-view]
              [nil (fn [& _]) (fn [& _]) (fn [& _])])]
    [:e
     [:tbody
      [:tr
       [:td
        (type-selector (-> ui-st :sidebar :type-selector))
        (mk-space)
        (selector world selector-state)]]
      [:tr
       [:td {:style {:white-space "nowrap" :vertical-align :text-top}}
        (control world selector-state)]
       [:td [:span {:style {:white-space "pre"}} "   "]]
       [:td {:style {:overflow "auto" :vertical-align "middle"}}
        (view world selector-state)]]]]))
