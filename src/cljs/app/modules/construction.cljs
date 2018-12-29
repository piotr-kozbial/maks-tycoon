(ns app.modules.construction
  (:require
   [app.modules.api :as api]
   [rum.core :as rum]

   [app.ui.ui-state]
   ))

(rum/defc component < rum/reactive []
  (rum/react app.ui.ui-state/ui-state)
  [:div "TEST COMPONENT"]
)

(defn initialize []
  (api/register-sidebar-tab
   {:key ::test
    :title "TEST"
    :component #'component}))
