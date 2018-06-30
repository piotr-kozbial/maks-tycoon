(ns makstycoon.tiles
  (:require [gamebase.geometry :as geom]))


;; TODO - To wszystko trzeba jakos ulepszyc i zgeneralizowac.


(def tiles

  {

   ,1 {:id :track-se,  :tracks [[:s :e]]}
   ,2 {:id :track-wse, :tracks [[:w :e] [:w :s] [:s :e]]}
   ,3 {:id :track-ws,  :tracks [[:s :w]]}
   ,4 {:id :track-we,  :tracks [[:w :e]]}
   ,5 {:id 5}
   ,6 {:id 6}
   ,7 {:id 7}
   ,8 {:id 8}
   ,9 {:id 9}
   10 {:id 10}

   21 {:id :track-nse  , :tracks [[:n :s] [:n :e] [:s :e]]}
   22 {:id :track-ns-we, :tracks [[:n :s] [:w :e]]}
   23 {:id :track-nws,   :tracks [[:n :s] [:w :n] [:w :s]]}
   24 {:id :track-ns,    :tracks [[:n :s]]}
   25 {:id 25}
   26 {:id 26}
   27 {:id 27}
   28 {:id 28}
   29 {:id 29}
   30 {:id 30}

   41 {:id :track-ne, :tracks [[:n :e]]}
   42 {:id :track-nwe, :tracks [[:w :e] [:n :w] [:n :e]]}
   43 {:id :track-nw, :tracks [[:w :n]]}
   44 {:id :track-ns-road-we, :tracks [[:n :s]]}
   45 {:id :track-we-road-ns, :tracks [[:w :e]]}
   46 {:id 46}
   47 {:id 47}
   48 {:id 48}
   49 {:id 49}
   50 {:id 50}

   61 {:id 61}
   62 {:id :station-we,   :tracks [[:w :e]] :station? true}
   63 {:id :station-we-1, :tracks [[:w :e]] :station? true}
   64 {:id :station-ns-2, :tracks [[:n :s]] :station? true}
   65 {:id 65}
   66 {:id 66}
   67 {:id 67}
   68 {:id 68}
   69 {:id 69}
   70 {:id 70}

   81 {:id 81}
   82 {:id :station-ns,   :tracks [[:n :s]] :station? true}
   83 {:id :station-we-2, :tracks [[:w :e]] :station? true}
   84 {:id :station-ns-1, :tracks [[:n :s]] :station? true}
   85 {:id 85}
   86 {:id 86}
   87 {:id 87}
   88 {:id 88}
   89 {:id 89}
   90 {:id 90}



   ;; ;; stations

   ;; 84 {:tracks [[:n :s]]
   ;;     :train-station? true}
   ;; 85 {:tracks [[:w :e]]
   ;;     :train-station? true}

   ;; ;; tracks + roads

   ;; 81 {:tracks [[:n :s]]
   ;;     :roads [[:w :e]]}
   ;; 82 {:tracks [[:w :e]]
   ;;     :roads [[:n :s]]}

   })

(def tiles-by-id
  (->> tiles
       (mapcat (fn [[k v]]
                 [(:id v) (assoc v :n k)]))
       (apply hash-map)))


(defn get-tile [id]
  (tiles id)

  ;; (loop [tile-or-id id]
  ;;   (if (map? tile-or-id)
  ;;     tile-or-id
  ;;     (recur (tiles tile-or-id))))

  )

(defn other-end [[p1 p2] end1]
  (if (= end1 p1)
    p2
    p1))

(defn tracks-from [tile from]
  (->> (:tracks tile)
       (filter (fn [[a b]] (or (= a from) (= b from))))
       (map (fn [path]
              [from (other-end path from)]))))

(defn exit-point-coords [point]
  (case point
    :n [0 1 :s]
    :s [0 -1 :n]
    :w [-1 0 :e]
    :e [1 0 :w]))

(defn point-xy [point]
  (let [half (/ geom/tile-side-length 2)
        full geom/tile-side-length]
    (case point
      :n [half full]
      :s [half 0]
      :w [0 half]
      :e [full half])))
