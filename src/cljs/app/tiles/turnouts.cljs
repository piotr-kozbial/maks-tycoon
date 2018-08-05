(ns app.tiles.turnouts
  (:require [app.tiles.general :refer [initialize-tile-extra -active-tracks-from]]
            [app.state :as st]
            [gamebase.layers :as layers]
            [gamebase.resources :as resources]
            [gamebase.systems.drawing :refer [draw-tile-extra -put-image]]
            [clojure.set :as set]))


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;;;; W turnout

(defmethod initialize-tile-extra :track-wt [tile-id tile-x tile-y tile-info]
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


