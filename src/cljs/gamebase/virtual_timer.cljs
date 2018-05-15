(ns gamebase.virtual-timer)
;;;;; REQUIRES
;;;;; p5.js loaded for js/millis
;;;;;
;;;;; MISSING FEATURES
;;;;; - more than one requested timeout
;;;;;

(declare my-swap!)

;; (initialize {:root-atom root-atom, :ks ks})
(defn initialize [timer]
  (my-swap! timer (fn [_] {:running? false
                          :offset 0
                          :frozen-time 0
                          :requested-timeout-vtime nil
                          :hw-timeout-set-time nil})))

(defn my-swap! [{:keys [root-atom ks]} f]
  (swap! root-atom
         update-in ks f))

(defn my-deref [{:keys [root-atom ks]}]
  (get-in @root-atom ks))



(defn get-time [timer]
  (let [{:keys [running? offset frozen-time]} (my-deref timer)]
    (if running?
      (+ (js/millis) offset)
      frozen-time)))

(defn run [timer]
  (my-swap!
   timer
   (fn [{:keys [running? frozen-time] :as state}]
     (if running?
       state
       (do
         (assoc state
                :running? true
                :offset (- frozen-time (js/millis))
                :frozen-time nil))))))

(defn pause [timer]
  (my-swap!
   timer
   (fn [{:keys [running? offset] :as state}]
     (if running?
       (do
         (assoc state
                :running? false
                :offset nil
                :frozen-time (+ (js/millis) offset)))
       state))))

(comment ;; test

  (def a (atom {}))
  (def timer {:root-atom a, :ks [:timer]})
  (initialize timer)
  )
