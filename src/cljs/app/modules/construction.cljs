(ns app.modules.construction
  (:require
   [app.state :as st]
   [app.modules.api :as api]
   [rum.core :as rum]
   [app.world-interop :as wo]
   [app.ui.ui-state :as uis]
   [app.tiles.general :as tg]
   ))


(defn build [_ x y]
  (when-let [[tile-x tile-y] (wo/get-tile-xy x y)]
    (let [{:keys [selected-tile-id]} (get-in @uis/ui-state [:modules :construction])
          tile (tg/tiles-by-id selected-tile-id)]
      (wo/set-tile tile-x tile-y
                   (when (not= selected-tile-id :destroy)
                     [:kafelki
                      (:number tile)]))
      (st/init-tile-extra tile-x tile-y))))

(rum/defc component < rum/reactive []
  (let [{:keys [selected-tile-id]} (get-in (rum/react app.ui.ui-state/ui-state)
                                           [:modules :construction])
        el
        (fn [id]
          [:td
           {:on-click
            (fn [_]
              (swap! uis/ui-state assoc-in [:modules :construction :selected-tile-id] id)
              (api/takeover-mouse-click
               ::construction
               (fn [& args]
                 (apply build args))))}
           [:img
            {:style (when (= id selected-tile-id) {:border "1px solid"})
             :src (str "public/track-palette/" (name id) ".png")}]])]
    [:div
     [:table
      [:tr (el :destroy)]
      [:tr (el :track-se) (el :track-st) (el :track-sw) (el :track-we) (el :track-ns)]
      [:tr (el :track-et) (el :track-cross) (el :track-wt) ;; (elem 62) (elem 82)
       ]
      [:tr (el :track-ne) (el :track-nt) (el :track-nw) ;; (elem 63) (elem 64)
       ]

      ;; [:tr (elem 6) (elem 7) (elem 8) (elem 45) (elem 44)]
      ;; [:tr (elem 26) (elem 27) (elem 28)]
      ;; [:tr (elem 46) (elem 47) (elem 48)]

      ]]))

(defn initialize []
  (api/register-sidebar-tab
   {:key ::construction
    :title "Construction"
    :component #'component}))
