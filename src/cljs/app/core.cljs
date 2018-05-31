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

;; app state
(defonce app-state
  (atom
   {}))

;; event queue and event loop
;;
;; HOW DO WE HANDLE IT?
;;
;; we need to:
;;   1. (re)start
;;   2. stop
;;   3. clear
;;
;; scenarios:
;;
;; In general, when we want to start new game:
;;     1. pause timer
;;     2. clear queue
;;     3. reset timer
;;     4. create/load game state
;;     5. resume timer


PLAN:
- najpierw uruchomic jakiegos sprite'a, tak jak jest, na wiecznie chodzacej kolejce
   - system "movement"
   - w nim komponent test-mover, jezdzacy jakos gdzies w kolko
   - rozkminic zagadnienie "update", w odroznieniu od eventow (?)
       (a moze to byc tez event, ale obslugiwany poza kolejka,
          calkowicie priorytetowo)
       TAK, chyba mozemy taki event wysylac recznie, tam w (draw),
       gdzie pobieramy eventy z kolejki
   - rozkminic rysowanie, tzn. dla entity jaki obrazek ma byc - czy to tez system?
- potem na tej podstawie zorganizowac new game, load game (ale tylko w kodzie, z value)
- potem dorzucic w UI new game


(do ;; STANDALONE EVENT LOOP - DISABLED

  (declare start-event-loop)

  (def event-queue {:root-atom app-state :ks [:event-queue]
                    :on-adding-to-empty
                    (fn [] (start-event-loop))})
  ;; (defonce _eq_init (do
  ;;                     (eq/initialize event-queue)
  ;;                     nil))

  (def virtual-timer {:root-atom app-state :ks [:virtual-timer]})
  ;; (defonce _vt_init (do
  ;;                     (vt/initialize virtual-timer)
  ;;                     nil))

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
    (while (maybe-handle-one-event))
    ;; set timeout for the soonest event in the future
    (if-let [soonest-time (eq/soonest-time event-queue)]
      (let [delay (- soonest-time (vt/get-time virtual-timer))
            delay-fixed
            (cond
              (<= delay 0) 1
              (> delay 300) 300
              :else delay)]
        (vt/set-timeout-after
         virtual-timer
         delay-fixed
         start-event-loop))
      (do
        ;;(print "NO MORE EVENTS")
        )))


  ;; (defonce _event_loop_start
  ;;   (start-event-loop))

  )

(do ;; DRAW-LOCKED EVENT LOOP

  ;; Events are to be handled inside `draw`,
  ;; which *doesn not* mean that they rely
  ;; on a specific frame rate.

  (declare start-event-loop)

  (def event-queue {:root-atom app-state :ks [:event-queue]
                    :on-adding-to-empty (fn [])})
  (defonce _eq_init (do
                      (eq/initialize event-queue)
                      nil))

  (def virtual-timer {:root-atom app-state :ks [:virtual-timer]})
  (defonce _vt_init (do
                      (vt/initialize virtual-timer)
                      nil))

  ;; return true if executed an event
  ;; return nil if alert set
  (defn maybe-handle-one-event []
    (when-let [world (:world @app-state)]
      (when-let [event (eq/pop-soonest-event-until
                        event-queue
                        (vt/get-time virtual-timer))]

        (ecs/do-handle-event world event)
        true)))



  ;; TODO - nie tak !!!!!!!!!!!!!!!!!
  ;; Eventy trzeba obslugiwac w (draw)
  ;; A moze nie?
  ;; Ale do tej pory tak robilem.
  ;; W (draw) pobieramy wszystkie zalegle eventy (do chwili obecnej),
  ;; obslugujemy je,
  ;; A potem nalezaloby zsyntetyzowac i obsluzyc event "update".
  ;; A na koncu rysowanie.

  ;; Bo moze tak na timerach byloby wydajniej, zwlaszcza gdybysmy chcieli
  ;; ograniczyc ilosc klatek/sek (p5 chyba to ma).
  ;; To pomiedzy klatkami moglyby sie liczyc biezace eventy.

  ;; Ale dobra, to kiedy indziej.

  ;; Teraz wepchnijmy do (draw).

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
        ;; (vt/set-timeout-after
        ;;  virtual-timer
        ;;  300
        ;;  start-event-loop)
        ;;(print (:virtual-timer @app-state))

        ;;(print "NO MORE EVENTS")
        )))
  (defonce _event_loop_start
    (start-event-loop)))

;; draw
(defn draw []

  (doseq [x (range 13)]
    (doseq [y (range 6)]
      (do
        (js/fill (js/color (* 20 x) (* 40 y) 0))
        ;;(js/rect (* 100  x) (* 100 y) 100 100)
        (js/rect 0 0  10 10)

        ))

    )

  )

;; main
(do

  (rum/defc main-component < rum/reactive []
    (our-layout/mk-html))

  (defn render []
    (rum/mount (main-component)
               (. js/document (getElementById "app"))))

  (defn main [& _]

    (.log js/console "-----> main")

    (our-layout/initialize
     app-state [:layout]
     {:bottom-bar-height 150
      :after-canvas-resize
      #(;;.log js/console "ACR callback"
        )})

    (canvas-control/initialize
     {:state-atom app-state
      :state-kvs [:canvas-control]
      :draw #'draw
      :get-canvas-size our-layout/get-canvas-size ;; TODO
      :get-world-size #(vector 2000 1000) ;; TODO
      })

    (vt/resume virtual-timer)))

;; test
(comment

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
