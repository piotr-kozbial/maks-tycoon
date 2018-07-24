(ns gamebase.tiles
  (:require [gamebase.geometry :as g]))

;; We'll define tiles with double identification: a keyword and the number of tile in tiles.png.
;; So first we define them in a list and then we'll convert them into two maps.
;; We'll also add synonyms, so one tile will be identified by multiple keywords.
;;
;; :number - tile graphics number as in the tiles.png, starting from zero,
;;           left-to-right (20 tiles in a row), then top-to-bottom,
;; :ids - identifiers to be used in a code (all equivalent),
;; :tracks - railway tracks [from to], but ordering is irrelevant.


;; TODO - move the whole thing under app. instead of gamebase.

(def tiles
  [;; straight tracks
   {:number 3, :ids [:track-we :track-ew]
    :tracks [[:w :e]]}
   {:number 23, :ids [:track-ns :track-sn]
    :tracks [[:n :s]]}

   ;; single curves
   {:number 0, :ids [:track-se :track-es]
    :tracks [[:s :e]]}
   {:number 2, :ids [:track-sw :track-ws]
    :tracks [[:s :w]]}
   {:number 40, :ids [:track-ne :track-en]
    :tracks [[:n :e]]}
   {:number 42, :ids [:track-sw :track-ws]
    :tracks [[:s :w]]}

   ;; crossing
   {:number 21, :ids [:track-cross]
    :tracks [[:n :s] [:w :e]]}

   ;; T-crossings
   {:number 1, :ids [:track-st :track-ts]
    :tracks [[:s :w] [:s :e] [:w :e]]}
   {:number 20, :ids [:track-et :track-te]
    :tracks [[:e :n] [:e :s] [:n :s]]}
   {:number 22, :ids [:track-wt :track-tw]
    :tracks [[:w :n] [:w :s] [:n :s]]}
   {:number 41, :ids [:track-nt :track-tn]
    :tracks [[:n :w] [:n :e] [:w :e]]}])

(def tiles-by-number
  (->> tiles
       (mapcat #(vector (:number %) %))
       (apply hash-map)))

(def tiles-by-id
  (->> tiles
       (mapcat #(interleave (:ids %) (take (count (:ids %)) (repeat %))))
       (apply hash-map)))

;; Now for the geometry of those tiles.

(defn zero-based-path [track]
  (case track
    [:n :s] (g/precompute (g/line-segment [16 32] [16 0]))
    [:s :n] (g/precompute (g/line-segment [16 0] [16 32]))

    [:w :e] (g/precompute (g/line-segment [0 16] [32 16]))
    [:e :w] (g/precompute (g/line-segment [32 16] [0 16]))

    [:n :w] (g/precompute (g/circle-arc [0 32] 16 (g/degrees 0) (g/degrees 270) :negative))
    [:w :n] (g/precompute (g/circle-arc [0 32] 16 (g/degrees 270) (g/degrees 0) :positive))

    [:n :e] (g/precompute (g/circle-arc [32 32] 16 (g/degrees 180) (g/degrees 270) :positive))
    [:e :n] (g/precompute (g/circle-arc [32 32] 16 (g/degrees 270) (g/degrees 180) :negative))

    [:s :w] (g/precompute (g/circle-arc [0 0] 16 (g/degrees 0) (g/degrees 90) :positive))
    [:w :s] (g/precompute (g/circle-arc [0 0] 16 (g/degrees 90) (g/degrees 0) :negative))

    [:s :e] (g/precompute (g/circle-arc [32 0] 16 (g/degrees 180) (g/degrees 90) :negative))
    [:e :s] (g/precompute (g/circle-arc [32 0] 16 (g/degrees 90) (g/degrees 180) :positive)))


  )



;; TODO:

;; [ ] przetestowac to rysunkowo
;;     A co w tym celu trzeba zrobic?
;;     [x] specjalny testowy entity, ze specjalnym testowym komponentem (juz mam - ten fioletowy)
;;     [x] zrobic latwa metode wrzucania nowych entity do worlda - to i tak bedzie potrzebne,
;;        a jak zrobie to moge sobie z repla testowac
;;     [ ] przetestowac to co tu mamy
;;
;; [ ] zrobic przesuniecie
;;     [ ] w geometry zrobic taki "general operation" jak "translate" i zaimplementowac
;;         dla line-segment i circle-arc
;;     [ ] uzyc tego tutaj, zaimplementowac (track-path track tile-x tile-y)
;;
