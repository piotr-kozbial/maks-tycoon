(ns app.tiles.tracks
  (:require [app.tiles.general :refer [-active-tracks-from]]))

(defmethod -active-tracks-from :track-we
  [_ start-direction _ _ _ _]
  (case start-direction
    :w [[:w :e]]
    :e [[:e :w]]
    []))

(defmethod -active-tracks-from :track-ns
  [_ start-direction _ _ _ _]
  (case start-direction
    :n [[:n :s]]
    :s [[:s :n]]
    []))


(defmethod -active-tracks-from :track-se
  [_ start-direction _ _ _ _]
  (case start-direction
    :s [[:s :e]]
    :e [[:e :s]]
    []))

(defmethod -active-tracks-from :track-sw
  [_ start-direction _ _ _ _]
  (case start-direction
    :s [[:s :w]]
    :w [[:w :s]]
    []))

(defmethod -active-tracks-from :track-ne
  [_ start-direction _ _ _ _]
  (case start-direction
    :n [[:n :e]]
    :e [[:e :n]]
    []))

(defmethod -active-tracks-from :track-nw
  [_ start-direction _ _ _ _]
  (case start-direction
    :n [[:n :w]]
    :w [[:w :n]]
    []))

(defmethod -active-tracks-from :track-cross
  [_ start-direction _ _ _ _]
  (case start-direction
    :n [[:n :s]]
    :s [[:s :n]]
    :w [[:w :e]]
    :e [[:e :w]]
    []))

