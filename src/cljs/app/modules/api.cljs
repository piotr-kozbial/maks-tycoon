(ns app.modules.api
  (:require
   [app.ui.sidebar :as sidebar]))







(defn register-sidebar-tab [tab-struct]
  (sidebar/register-tab tab-struct))

