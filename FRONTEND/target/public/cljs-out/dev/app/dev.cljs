(ns app.dev
  (:require [app.system]))

(defn on-jsload []
  ;;(app.system/reset)
  (.log js/console "!!!!! JS RELOAD !!!!!"))

