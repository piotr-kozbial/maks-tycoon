(ns gamebase.projection)

;;
;;
;;                 y
;;                   ^            wc
;;                   |         |------|
;;                   |
;;                   |       y"
;;                   |         ^
;;                 y'|   _     |....... V_
;;                   ^   |     |      :
;;                   | hc|     |      :
;;                   |   -  ---+-------->
;;                   |         |V0       x"
;;                   |         |
;;                   |
;;  -----------------+------------>----------->
;;                   |W0           x'          x
;;                   |
;;                   |
;;                   |
;;                   |
;;                   |
;;                   |
;;                   |
;;                   |
;;                   |
;;                   |
;;
nil

;; Helpers
(defn absolute [a]
  (if (>= a 0)
    a
    (- a)))

;; Projection config
(defn projection-config [k tx ty wc hc]
  {:k k   ;; scaling factor
   :tx tx ;; translation in X
   :ty ty ;; translation in Y
   :wc wc ;; canvas (viewport) width *in canvas coordinates*
   :hc hc ;; canvas (viewport) height *in canvas coordinates*
   })

;; Coordinate systems
(declare world-point scaled-point view-point)

(defn world-point
  ([[x y]] (assert (number? x)) (assert (number? y))
   [:world x y])
  ([{:keys [k tx ty] :as conf} [coord-sys x y :as p]]
   (case coord-sys
     :world p
     :scaled [:world (/ x k) (/ y k)]
     :view (world-point conf (scaled-point conf p)))))

(defn scaled-point
  ([[x y]] (assert (number? x)) (assert (number? y))
   [:scaled x y])
  ([{:keys [k tx ty]} [coord-sys x y :as p]]
   (case coord-sys
     :world [:scaled (* k x) (* k y)]
     :scaled p
     :view [:scaled (- x tx) (- y ty)])))

(defn view-point
  ([[x y]] (assert (number? x)) (assert (number? y))
   [:view x y])
  ([{:keys [k tx ty] :as conf} [coord-sys x y :as p]]
   (case coord-sys
     :world (view-point conf (scaled-point conf p))
     :scaled [:view (+ x tx) (+ y ty)]
     :view p)))

;; Lengths
(declare world-length scaled-length view-length)

(defn world-length
  ([l] (assert (number? l)) [:world l])
  ([{:keys [k] :as conf} [coord-sys l' :as l]]
   (case coord-sys
     :world l
     :scaled [:world (/ l' k)]
     :view (world-length conf (scaled-length conf l)))))

(defn scaled-length
  ([l] (assert (number? l)) [:scaled l])
  ([{:keys [k]} [coord-sys l' :as l]]
   (case coord-sys
     :world [:scaled (* k l')]
     :scaled l
     :view [:scaled l']
     )))

(defn view-length
  ([l] (assert (number? l)) [:view l])
  ([{:keys [k] :as conf} [coord-sys l' :as l]]
   (case coord-sys
     :world (view-length conf (scaled-length conf l))
     :scaled [:view l']
     :view l)))

;; Spans (distances between points in horizontal or vertical)

(defn world-span-x [p1 p2]
  (let [[_ x1 _] (world-point p1)
        [_ x2 _] (world-point p2)]
    (world-length (absolute (- x2 x1)))))

(defn world-span-y [p1 p2]
  (let [[_ _ y1] (world-point p1)
        [_ _ y2] (world-point p2)]
    (world-length (absolute (- y2 y1)))))

(defn scaled-span-x [p1 p2]
  (let [[_ x1 _] (scaled-point p1)
        [_ x2 _] (scaled-point p2)]
    (scaled-length (absolute (- x2 x1)))))

(defn scaled-span-y [p1 p2]
  (let [[_ _ y1] (scaled-point p1)
        [_ _ y2] (scaled-point p2)]
    (scaled-length (absolute (- y2 y1)))))

(defn view-span-x [p1 p2]
  (let [[_ x1 _] (view-point p1)
        [_ x2 _] (view-point p2)]
    (view-length (absolute (- x2 x1)))))

(defn view-span-y [p1 p2]
  (let [[_ _ y1] (view-point p1)
        [_ _ y2] (view-point p2)]
    (view-length (absolute (- y2 y1)))))

;; Specific points

(def W0 (world-point [0 0]))

(def V0 (view-point [0 0]))

(defn V_ [{:keys [wc hc]}] (view-point [wc hc]))


(comment ;; testing

 (def conf (projection-config 2 10 5 14 8))

 ;; TODO

 )
