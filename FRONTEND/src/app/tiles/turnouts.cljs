(ns app.tiles.turnouts
  (:require [app.tiles.general :refer [initialize-tile-extra -active-tracks-from -active-tracks-to]]
            [app.state :as st]
            [gamebase.layers :as layers]
            [gamebase.resources :as resources]
            [gamebase.systems.drawing :refer [draw-tile-extra -put-image]]
            [clojure.set :as set]))


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defmethod initialize-tile-extra :track-wt [tile-id tile-x tile-y tile-info]
  {:state :straight-left})
(defmethod initialize-tile-extra :track-et [tile-id tile-x tile-y tile-info]
  {:state :straight-left})
(defmethod initialize-tile-extra :track-nt [tile-id tile-x tile-y tile-info]
  {:state :straight-left})
(defmethod initialize-tile-extra :track-st [tile-id tile-x tile-y tile-info]
  {:state :straight-left})

(defmethod draw-tile-extra :track-wt [tile-id tx ty tile-info]
  (let [{:keys [state]} (st/get-tile-extra tx ty)
        x (* 32 tx)
        y (* 32 ty)
        [src-x src-y] (case state
                        :right [384 0]
                        :straight-right [393 0]
                        :left [384 9]
                        :straight-left [393 9]
                        [402 0])]
    (-put-image (resources/get-resource "tiles.png")
                src-x src-y 8 8
                (+ x 23) (+ y 12)))
  true)
(defmethod draw-tile-extra :track-et [tile-id tx ty tile-info]
  (let [{:keys [state]} (st/get-tile-extra tx ty)
        x (* 32 tx)
        y (* 32 ty)
        [src-x src-y] (case state
                        :right [404 0]
                        :straight-right [413 0]
                        :left [404 9]
                        :straight-left [413 9]
                        [402 0])]
    (-put-image (resources/get-resource "tiles.png")
                src-x src-y 8 8
                (+ x 1) (+ y 12)))
  true)
(defmethod draw-tile-extra :track-nt [tile-id tx ty tile-info]
  (let [{:keys [state]} (st/get-tile-extra tx ty)
        x (* 32 tx)
        y (* 32 ty)
        [src-x src-y] (case state
                        :right [404 20]
                        :straight-right [413 20]
                        :left [404 29]
                        :straight-left [413 29]
                        [402 20])]
    (-put-image (resources/get-resource "tiles.png")
                src-x src-y 8 8
                (+ x 12) (+ y 1)))
  true)
(defmethod draw-tile-extra :track-st [tile-id tx ty tile-info]
  (let [{:keys [state]} (st/get-tile-extra tx ty)
        x (* 32 tx)
        y (* 32 ty)
        [src-x src-y] (case state
                        :right [384 20]
                        :straight-right [393 20]
                        :left [384 29]
                        :straight-left [393 29]
                        [402 20])]
    (-put-image (resources/get-resource "tiles.png")
                src-x src-y 8 8
                (+ x 12) (+ y 23)))
  true)

(defmethod -active-tracks-from :track-wt
  [_ start-direction _ _ _ {:keys [state] :as tile-extra}]
  (case start-direction
    :w (case state
         :right [[:w :s]]
         :straight-right [[:w :s]]
         :left [[:w :n]]
         :straight-left [[:w :n]])
    :s (case state
         :straight-right [[:s :n]]
         :straight-left [[:s :n]]
         :left [[:s :n]]
         :right [[:s :w]])
    :n (case state
         :straight-right [[:n :s]]
         :straight-left [[:n :s]]
         :left [[:n :w]]
         :right [[:n :s]])
    []))
(defmethod -active-tracks-from :track-et
  [_ start-direction _ _ _ {:keys [state] :as tile-extra}]
  (case start-direction
    :e (case state
         :right [[:e :n]]
         :straight-right [[:e :n]]
         :left [[:e :s]]
         :straight-left [[:e :s]])
    :s (case state
         :straight-right [[:s :n]]
         :straight-left [[:s :n]]
         :left [[:s :e]]
         :right [[:s :n]])
    :n (case state
         :straight-right [[:n :s]]
         :straight-left [[:n :s]]
         :left [[:n :s]]
         :right [[:n :e]])
    []))
(defmethod -active-tracks-from :track-nt
  [_ start-direction _ _ _ {:keys [state] :as tile-extra}]
  (case start-direction
    :e (case state
         :right [[:e :w]]
         :straight-right [[:e :w]]
         :left [[:e :n]]
         :straight-left [[:e :w]])
    :n (case state
         :straight-right [[:n :w]]
         :straight-left [[:n :e]]
         :left [[:n :e]]
         :right [[:n :w]])
    :w (case state
         :straight-right [[:w :e]]
         :straight-left [[:w :e]]
         :left [[:w :e]]
         :right [[:w :n]])
    []))
(defmethod -active-tracks-from :track-st
  [_ start-direction _ _ _ {:keys [state] :as tile-extra}]
  (case start-direction
    :e (case state
         :right [[:e :s]]
         :straight-right [[:e :w]]
         :left [[:e :w]]
         :straight-left [[:e :w]])
    :s (case state
         :straight-right [[:s :e]]
         :straight-left [[:s :w]]
         :left [[:s :w]]
         :right [[:s :e]])
    :w (case state
         :straight-right [[:w :e]]
         :straight-left [[:w :e]]
         :left [[:w :s]]
         :right [[:w :e]])
    []))


(defmethod -active-tracks-to :track-wt
  [_ end-direction _ _ _ {:keys [state] :as tile-extra}]
  (case end-direction
    :w (case state
         :right [[:s :w]]
         :straight-right [[:s :w]]
         :left [[:n :w]]
         :straight-left [[:n :w]])
    :s (case state
         :straight-right [[:n :s] [:w :s]]
         :straight-left [[:n :s]]
         :left [[:n :s]]
         :right [[:w :s] [:n :s]])
    :n (case state
         :straight-right [[:s :n]]
         :straight-left [[:s :n] [:w :n]]
         :left [[:w :n] [:s :n]]
         :right [[:s :n]])
    []))
(defmethod -active-tracks-to :track-et
  [_ end-direction _ _ _ {:keys [state] :as tile-extra}]
  (case end-direction
    :e (case state
         :right [[:n :e]]
         :straight-right [[:n :e]]
         :left [[:s :e]]
         :straight-left [[:s :e]])
    :s (case state
         :straight-right [[:n :s]]
         :straight-left [[:n :s] [:e :s]]
         :left [[:e :s] [:n :s]]
         :right [[:n :s]])
    :n (case state
         :straight-right [[:s :n]]
         :straight-left [[:s :n]]
         :left [[:s :n]]
         :right [[:e :n]])
    []))
(defmethod -active-tracks-to :track-nt
  [_ end-direction _ _ _ {:keys [state] :as tile-extra}]
  (case end-direction
    :e (case state
         :right [[:w :e]]
         :straight-right [[:w :e]]
         :left [[:n :e] [:w :e]]
         :straight-left [[:w :e] [:n :e]])
    :n (case state
         :straight-right [[:w :n]]
         :straight-left [[:e :n]]
         :left [[:e :n]]
         :right [[:w :n]])
    :w (case state
         :straight-right [[:e :w] [:n :w]]
         :straight-left [[:e :w]]
         :left [[:e :w]]
         :right [[:n :w] [:e :w]])
    []))
(defmethod -active-tracks-to :track-st
  [_ end-direction _ _ _ {:keys [state] :as tile-extra}]
  (case end-direction
    :e (case state
         :right [[:s :e] [:w :e]]
         :straight-right [[:w :e] [:s :e]]
         :left [[:w :e]]
         :straight-left [[:w :e]])
    :s (case state
         :straight-right [[:e :s]]
         :straight-left [[:w :s]]
         :left [[:w :s]]
         :right [[:e :s]])
    :w (case state
         :straight-right [[:e :w]]
         :straight-left [[:e :w] [:s :w]]
         :left [[:s :w] [:e :w]]
         :right [[:e :w]])
    []))

(defn- -get-layer [world layer-key]
  (->> (:layers world)
       (filter #(= (first %) layer-key))
       (first)
       (second)))

(defn is-turnout? [tile-x tile-y]
  (let [{:keys [world]} @st/app-state
        layer (-get-layer world :foreground)
        info (layers/get-tile-info-from-layer (:tile-context world) layer tile-x tile-y)]

    (not-empty (set/intersection #{:track-wt :track-et :track-st :track-nt}
                                 (apply hash-set (or (:ids info) []))))))

(defn cycle-turnout-state [tile-x tile-y]
  (st/update-tile-extra
   tile-x tile-y

   (fn [{:keys [state] :as extra}]
     (let [new-state (case state
                      :straight-right :straight-left
                      :straight-left :right
                      :right :left
                      :left :straight-right)]
       (assoc extra :state new-state)))))

(defn cycle-turnout-state2 [world tile-x tile-y]
  (st/update-tile-extra2
   world
   tile-x tile-y
   (fn [{:keys [state] :as extra}]
     (let [new-state (case state
                       :straight-right :straight-left
                       :straight-left :right
                       :right :left
                       :left :straight-right)]
       (assoc extra :state new-state)))))


