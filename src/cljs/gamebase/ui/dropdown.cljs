(ns gamebase.ui.dropdown)

(defn mk-dropdown [{:keys [open?
                           items
                           selected-id
                           callbacks] :as data}]
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
       [:td
        {:class "gamebase_dropdown_arrow"
         :on-click (fn [_] (if open?
                            ((or (:close callbacks) #()))
                            ((or (:open callbacks) #()))))}
        "⯆"]]
      (when open?
        (map
         (fn [[id text]]
           [:tr [:td
                 {:class "gamebase_dropdown_item"
                  :on-click (fn [_] (do
                                     ((or (:on-select callbacks) (fn [_])) id)
                                     ((or (:close callbacks) #()))))}
                 text]])
         items))]]))
