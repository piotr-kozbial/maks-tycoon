(ns app.ui.ui-state)

(defonce ui-state
  (atom



   {

    :sidebar
    {:loc-selector {:open? true
                    :selected-id nil}

     :save-load-game {:state :save-as} ;; nil | :save-as | :load
     }
    :bottombar
    {}}))



(defn loc-selector-open []
  (swap! ui-state assoc-in [:sidebar :loc-selector :open?] true))

(defn loc-selector-close []
  (swap! ui-state assoc-in [:sidebar :loc-selector :open?] false))

(defn loc-selector-select [loc-id]
  (swap! ui-state assoc-in [:sidebar :loc-selector :selected-id] loc-id))
