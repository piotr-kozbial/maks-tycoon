(ns app.core
  (:require [rum.core :as rum]


            [ecs.systems.my-test-entities :as te]

            [gamebase.events :as events]
            [gamebase.event-queue :as eq]
            [gamebase.ecs :as ecs]
            [gamebase.virtual-timer :as vt]
            [gamebase.canvas-control :as canvas-control]
            [gamebase.layouts.sidebar-and-bottombar :as our-layout]
            ))


;;(enable-console-print!)

(defonce app-state
  (atom
   {:text "Hello Chestnut!"
    :canvas-control {:scale 0.2}

    }))

(def event-queue {:root-atom app-state :ks [:event-queue]})
(defonce _eq_init (eq/initialize event-queue))

(def virtual-timer {:root-atom app-state :ks [:virtual-timer]})
(defonce _vt_init (vt/initialize virtual-timer))

;; return true if executed an event
;; return nil if alert set
(defn maybe-handle-one-event []
  (when-let [world (:world @app-state)]
    (when-let [event (eq/pop-soonest-event-until
                      event-queue
                      (vt/get-time virtual-timer))]

      (ecs/do-handle-event world event)
      true)))

(defn start-event-loop []
  ;;(print "start-event-loop\n")
  ;; handle pending events
  (while (maybe-handle-one-event)
    ;;(print "event executed\n")
    )
  ;; set timeout for the soonest event in the future
  (if-let [soonest-time (eq/soonest-time event-queue)]
    (let [delay (- soonest-time (vt/get-time virtual-timer))
          delay-fixed
          (cond
            (<= delay 0) 1
            (> delay 300) 300
            :else delay)]
      ;;(print (str "setting timeout za " delay-fixed "ms"))
      ;;(print (:virtual-timer @app-state))
      (vt/set-timeout-after
       virtual-timer
       delay-fixed
       start-event-loop))
    (do
      ;;(print (str "setting timeout (x) za 300 ms"))
      (vt/set-timeout-after
       virtual-timer
       300
       start-event-loop)
      ;;(print (:virtual-timer @app-state))

      )))

(defonce _event_loop_start
  (start-event-loop))



(rum/defc main-component < rum/reactive []
  (our-layout/mk-html))


(defn render []
  (rum/mount (main-component)
             (. js/document (getElementById "app"))))


(defn draw []

  (doseq [x (range 13)]
    (doseq [y (range 6)]
      (do
        (js/fill (js/color (* 20 x) (* 40 y) 0))
        (js/rect (* 100  x) (* 100 y) 100 100)))

    )

)


(defn main [& _]


  (.log js/console "-----> main")

  (let [l-config
        {:draw #'draw
         :state-atom app-state
         :state-kvs [:canvas-control]
         :get-world-width (fn [] 3000)
         :get-world-height (fn [] 2000)
         :get-scale (fn [] (-> @app-state :canvas-control :scale))
         :get-canvas-width (fn [] 1300)
         :get-canvas-height (fn [] 600)}]

    (our-layout/mk-layout
     app-state [:layout]
     {:bottom-bar-height 150
      :after-canvas-resize
      (canvas-control/mk-canvas-resize-handler l-config)})

    (canvas-control/setup l-config))

  (our-layout/initialize)


  )


(comment ;; test

  (do
    (def w (ecs/mk-world))
    (def s (te/mk-system))
    (def e1 (ecs/mk-entity :my-entity :my-type))
    (def e2 (ecs/mk-entity :my-entity-2 :my-type))
    (def c1 (te/mk-component e1 "pierwszy"))
    (def c2 (te/mk-component e1 "drugi"))
    (def c3 (te/mk-component e2 "trzeci"))
    (def w' (-> w
                (ecs/insert-object s)
                (ecs/insert-object e1)
                (ecs/insert-object e2)
                (ecs/insert-object c1)
                (ecs/insert-object c2)
                (ecs/insert-object c3))))


  (swap! app-state
         assoc :world w')


  (def event1 (ecs/mk-event s ::ecs/time))

  (eq/put-event!
   event-queue
   (assoc event1
          ::eq/time
          20
          ))

  (eq/put-event!
   event-queue
   (assoc event1
          ::eq/time
          (+ 5000 (vt/get-time virtual-timer))
          ))


  (eq/initialize event-queue)


  )

