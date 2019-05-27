(ns app.tiles.tracks
  (:require [app.tiles.general :refer [-active-tracks-from
                                       -active-tracks-to]]))

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



(defmethod -active-tracks-to :track-we
  [_ end-direction _ _ _ _]
  (case end-direction
    :w [[:e :w]]
    :e [[:w :e]]
    []))

(defmethod -active-tracks-to :track-ns
  [_ end-direction _ _ _ _]
  (case end-direction
    :n [[:s :n]]
    :s [[:n :s]]
    []))


(defmethod -active-tracks-to :track-se
  [_ end-direction _ _ _ _]
  (case end-direction
    :s [[:e :s]]
    :e [[:s :e]]
    []))

(defmethod -active-tracks-to :track-sw
  [_ end-direction _ _ _ _]
  (case end-direction
    :s [[:w :s]]
    :w [[:s :w]]
    []))

(defmethod -active-tracks-to :track-ne
  [_ end-direction _ _ _ _]
  (case end-direction
    :n [[:e :n]]
    :e [[:n :e]]
    []))

(defmethod -active-tracks-to :track-nw
  [_ end-direction _ _ _ _]
  (case end-direction
    :n [[:w :n]]
    :w [[:n :w]]
    []))

(defmethod -active-tracks-to :track-cross
  [_ end-direction _ _ _ _]
  (case end-direction
    :n [[:s :n]]
    :s [[:n :s]]
    :w [[:e :w]]
    :e [[:w :e]]
    []))
