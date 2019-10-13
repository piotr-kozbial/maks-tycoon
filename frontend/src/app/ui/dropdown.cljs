(ns app.ui.dropdown)

(defn mk-dropdown [{:keys [label
                           open?
                           items
                           selected-id
                           callbacks] :as data}]
  (let [selected-name (->> items
                           (filter #(= (first %) selected-id))
                           (first)
                           (second))]
    [:div {:style {:height "1.7em"
                   :vertical-align "top"
                   :display "inline-block"}}
     [:span {:style {:vertical-align "top"}} label " "]
     [:table {:class "gamebase_dropdown"
              :style {:display "inline-block"}}
      [:tbody
       [:tr
        {
         :on-click (fn [_] (if open?
                            ((or (:close callbacks) #()))
                            ((or (:open callbacks) #()))))
         }
        (if selected-name
          [:td {:class "gamebase_dropdown_selected"} selected-name]
          [:td {:class "gamebase_dropdown_placeholder"} "(select)"])]

       (when open?
         (map
          (fn [[id text]]
            [:tr [:td
                  {:class "gamebase_dropdown_item"
                   :on-click (fn [_] (do
                                      ((or (:on-select callbacks) (fn [_])) id)
                                      ((or (:close callbacks) #()))))}
                  text]])
          items))]]

     [:span {:style {:vertical-align "top"}} " ↓ "]
     ]))

(defn mk-space []
  [:span {:style {:white-space "pre"}} " "])
