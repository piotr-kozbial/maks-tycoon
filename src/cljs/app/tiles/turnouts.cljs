(ns app.tiles.turnouts
  (:require [app.tiles.general :refer [initialize-tile-extra]]
            [gamebase.systems.drawing :refer [draw-tile-extra]]))


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;;;; WT turnout

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
