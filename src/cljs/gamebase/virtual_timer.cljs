(ns gamebase.virtual-timer)

(declare my-swap! my-deref)

;; Usage:
;;   (initialize {:root-atom root-atom, :ks ks})
;; Starts paused!
(defn initialize [timer]
  ;;(print "swap in initialize\n")
  (my-swap! timer (fn [_] {:running? false
                          :offset 0
                          :frozen-time 0
                          :requested-timeouts [] ;; of [vtime callback]
                          })))

;; THIS MAKES TIME ALWAYS BE A WHOLE NUMBER OF MILLISECONDS
(defn millis []
  (int (js/millis)))

(defn- get-time-impl [state]
  (let [{:keys [running? offset frozen-time]} state]
    (if running?
      (+ (millis) offset)
      frozen-time))
  )

(defn get-time [timer]
  (get-time-impl (my-deref timer)))

(defn pause [timer]
  ;; (print "swap in pause\n")
  (my-swap!
   timer
   (fn [{:keys [running? offset] :as state}]
     (if running?
       (assoc state
              :running? false
              :offset nil
              :frozen-time (+ (millis) offset))
       state))))

(declare fire-pending-timeouts schedule-soonest-timeout)

(defn resume [timer]
  (let [{:keys [running? frozen-time] :as state} (my-deref timer)]
    (if running?
      state
      (do
        ;; (print "swap in resume\n")
       (my-swap! timer
                 (fn [_] (assoc state
                               :running? true
                               :offset (- frozen-time (millis))
                               :frozen-time nil)))
       (fire-pending-timeouts timer)
       (schedule-soonest-timeout timer)))))

(declare handle-hw-timeout)

(defn- fire-one-pending-timeout [timer]
  (let [{:keys [requested-timeouts] :as state} (my-deref timer)
        current-vtime (get-time-impl state)
        r-t (sort-by first requested-timeouts)
        first-timeout (first r-t)
        rest-of-timeouts (rest r-t)]
    (when (and first-timeout
               (<= (first first-timeout) current-vtime))
      (my-swap!
       timer
       (fn [_]
         (assoc state :requested-timeouts (into [] rest-of-timeouts))))
      ((second first-timeout)))))

(defn fire-pending-timeouts [timer]
  (while (fire-one-pending-timeout timer)))

(defn schedule-soonest-timeout [timer]
  (let [{:keys [requested-timeouts] :as state} (my-deref timer)
        current-vtime (get-time-impl state)]
    ;; (print "sort-by B\n")
    (when-let [soonest-requested-timeout (->> requested-timeouts
                                              (sort-by first)
                                              (first))]
      (let [[vtime _] soonest-requested-timeout
            delay (- vtime current-vtime)
            delay-fixed (cond
                          (<= delay 0) 1
                          (> delay 1000) 1000
                          :else delay)]
        ;; (print "setting hw timeout (delay" delay-fixed ")\n")
        (.setTimeout js/window (fn [_] (handle-hw-timeout timer)) delay-fixed)))))

(defn handle-hw-timeout [timer]
  ;; (print "handling hw timeout\n")
  (when (:running? (my-deref timer))
    ;; (print "handling hw timeout: running\n")
    (fire-pending-timeouts timer)
    (schedule-soonest-timeout timer)))

(defn set-timeout-to [timer target-vtime timeout-callback]
  ;; (print "(" (get-time timer) ")setting timeout to" target-vtime " \n")
  ;;(fire-pending-timeouts timer)

  ;; (print "swap in set-timeout-to\n")
  (my-swap! timer
            (fn [{:keys [requested-timeouts] :as state}]
              (assoc state
                     :requested-timeouts
                     (conj requested-timeouts [target-vtime timeout-callback]))))
  (schedule-soonest-timeout timer))

(defn set-timeout-after [timer delay-vtime timeout-callback]
  (let [current-vtime (get-time-impl (my-deref timer))]
    (set-timeout-to timer (+ current-vtime delay-vtime) timeout-callback)))

(defn clear-for-storage [timer]
  ;; (print "swap in clear-for-storage\n")
  (my-swap!
   timer
   (assoc
    (fn [{:keys [running? offset] :as state}]
      (if running?
        (assoc state
               :running? false
               :offset nil
               :frozen-time (+ (millis) offset))
        state))
    :requested-timeout-vtime nil
    :hw-timeout-set-time nil)))

;; private

(defn my-swap! [{:keys [root-atom ks] :as timer} f]
  (swap! root-atom
         update-in ks f)
  ;; (print "VALUE AFTER SWAP: " (my-deref timer))
  )

(defn my-deref [{:keys [root-atom ks]}]
  (get-in @root-atom ks))




(comment ;; test
  (in-ns 'gamebase.virtual-timer)

  (def a (atom {}))
  (def timer {:root-atom a, :ks [:timer]})
  (initialize timer)
  (resume timer)
  (set-timeout-after timer 5000 #(print "jasio\n"))
  (pause timer)




  )
