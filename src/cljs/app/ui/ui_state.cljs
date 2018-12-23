(ns app.ui.ui-state)

(defonce ui-state
  (atom



   {
    :game-id nil
    :game-name nil

    :sidebar
    {:loc-selector {:open? true
                    :selected-id nil}

     :save-load-game {:state :base ;; :base | :save-as | :load
                      :mouse-over-game-id 1
                      :game-list []}
     }
    :bottombar
    {}}))



(defn loc-selector-open []
  (swap! ui-state assoc-in [:sidebar :loc-selector :open?] true))

(defn loc-selector-close []
  (swap! ui-state assoc-in [:sidebar :loc-selector :open?] false))

(defn loc-selector-select [loc-id]
  (swap! ui-state assoc-in [:sidebar :loc-selector :selected-id] loc-id))
