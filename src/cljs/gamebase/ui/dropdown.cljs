(ns gamebase.ui.dropdown)



;; (defn mk-dropdown [{:keys [open?
;;                            items
;;                            selected-id] :as data}]
;;   [:div {:class "gamebase_dropdown"}
;;    [:a {:href "#" :class "gamebase_dropdown_placeholder"} "(select)"]
;;    [:a {:href "#" :class "gamebase_dropdown_arrow"} "⯆"]
;;    [:br]
;;    (mapcat
;;     (fn [[id text]]
;;       [[:a {:href "#" :class "gamebase_dropdown_item"} text]
;;        [:br]])
;;     items)
;;    ])

(defn mk-dropdown [{:keys [open?
                           items
                           selected-id
                           on-click-open
                           on-click-close] :as data}]
  (let [selected-name (->> items
                           (filter #(= (first %) selected-id))
                           (first)
                           (second))]
    [:div {:style {:height "1.5em"}}
     [:table {:class "gamebase_dropdown"}
      [:tr
       (if selected-name
         [:td {:class "gamebase_dropdown_selected"} selected-name]
         [:td {:class "gamebase_dropdown_placeholder"} "(select)"])
       [:td {:class "gamebase_dropdown_arrow"
             :on-click (fn [_] (if open?
                                (when on-click-close (on-click-close))
                                (when on-click-open (on-click-open))))
             } "⯆"]]
      (when open?
        (map
         (fn [[id text]]
           [:tr [:td {:class "gamebase_dropdown_item"} text]])
         items))

      ]]))
