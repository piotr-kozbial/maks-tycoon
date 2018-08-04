(ns app.tile-extra)

(defmulti initialize-tile-extra (fn [tile-id tile-x tile-y tile-info] tile-id) :default nil)

(defmethod initialize-tile-extra nil
  [tile-id tile-x tile-y tile-info]
  nil)


(defmethod initialize-tile-extra :track-wt [tile-id tile-x tile-y tile-info]
  {:state :straight-left})

