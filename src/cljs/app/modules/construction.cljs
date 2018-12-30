(ns app.modules.construction
  (:require
   [app.modules.api :as api]
   [rum.core :as rum]

   [app.ui.ui-state]
   ))


(defn build []
  (.log js/console "Build!"))


(rum/defc component < rum/reactive []
  (rum/react app.ui.ui-state/ui-state)
  (let [elem (fn [n]
               [:td {:on-click
                     (fn [_]
                       (.log js/console "Taking over.")
                       (api/takeover-mouse-click ::construction
                                                 (fn [& _] (.log js/console "Construction - click")))
                       )}
                [:img {:src (str "public/track-palette/" n ".png")}]])]
    [:div
     [:table
      [:tr (elem 0)]
      [:tr (elem 1) (elem 2) (elem 3) (elem 4) (elem 24)]
      [:tr (elem 21) (elem 22) (elem 23) (elem 62) (elem 82)]
      [:tr (elem 41) (elem 42) (elem 43) (elem 63) (elem 64)]

      
      [:tr (elem 6) (elem 7) (elem 8) (elem 44) (elem 45)]
      [:tr (elem 26) (elem 27) (elem 28)]
      [:tr (elem 46) (elem 47) (elem 48)]

      ]

     ])
)

(defn initialize []
  (api/register-sidebar-tab
   {:key ::construction
    :title "Construction"
    :component #'component}))
