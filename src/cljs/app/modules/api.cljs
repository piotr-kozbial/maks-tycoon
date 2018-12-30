(ns app.modules.api
  (:require
   [app.ui.sidebar :as sidebar]
   [app.key-mouse-input :as km]))

(defn register-sidebar-tab [tab-struct]
  (sidebar/register-tab tab-struct))

(defn takeover-mouse-click [owner-id handler]
  (km/takeover-mouse-click owner-id handler))

(defn giveup-mouse-click [owner-id]
  (km/giveup-mouse-click owner-id))

(defn mouse-click-owner []
  (km/mouse-click-owner))

