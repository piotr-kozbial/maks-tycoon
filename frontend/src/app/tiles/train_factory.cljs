(ns app.tiles.train-factory
  (:require [app.tiles.general :refer [-active-tracks-from]]))

;; TODO - move to module!

(defmethod -active-tracks-from :train-factory-left
  [_ start-direction _ _ _ _]
  (case start-direction
    :w [[:w :e]]
    :e [[:e :w]]
    []))

(defmethod -active-tracks-from :train-factory-right
  [_ start-direction _ _ _ _]
  (case start-direction
    :w [[:w :e]]
    :e [[:e :w]]
    []))
