(ns ^:figwheel-hooks app.my-figwheel-hooks
  (:require [app.scratch.scratch :as scratch]))

(defn ^:before-load my-before-reload-callback []
  (.log js/console "BEFORE reload!!!"))

(defn ^:after-load my-after-reload-callback []
  (.log js/console "AFTER reload!!")
  (scratch/tick))

