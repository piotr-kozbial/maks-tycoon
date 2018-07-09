(ns app.core
  (:require [rum.core :as rum]

            [gamebase.resources :as resources]

            ;;[ecs.systems.my-test-entities :as te]

            [gamebase.systems.drawing :as sys-drawing]
            [gamebase.systems.movement :as sys-move]

            [app.ecs.entities.locomotive :as locomotive]

            [gamebase.events :as events]
            [gamebase.event-queue :as eq]
            [gamebase.ecs :as ecs]
            [gamebase.virtual-timer :as vt]
            [gamebase.canvas-control :as canvas-control]
            [gamebase.layouts.sidebar-and-bottombar :as our-layout]

            [gamebase.ecsu] ;; without this it doesn't get compiled and loaded for cljs either
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
;; 
;; 
;; PLAN:
;; - najpierw uruchomic jakiegos sprite'a, tak jak jest, na wiecznie chodzacej kolejce
;;    - system "movement"
;;    - w nim komponent test-mover, jezdzacy jakos gdzies w kolko
;;    - rozkminic rysowanie, tzn. dla entity jaki obrazek ma byc - czy to tez system?
;; - potem na tej podstawie zorganizowac new game, load game (ale tylko w kodzie, z value)
;; - potem dorzucic w UI new game


;; (do ;; STANDALONE EVENT LOOP - DISABLED

;;   (declare start-event-loop)

;;   (def event-queue {:root-atom app-state :ks [:event-queue]
;;                     :on-adding-to-empty
;;                     (fn [] (start-event-loop))})
;;   ;; (defonce _eq_init (do
;;   ;;                     (eq/initialize event-queue)
;;   ;;                     nil))

;;   (def virtual-timer {:root-atom app-state :ks [:virtual-timer]})
;;   ;; (defonce _vt_i nit (do
;;   ;;                     (vt/initialize virtual-timer)
;;   ;;                     nil))

;;   ;; return true if executed an event
;;   ;; return nil if alert set
;;   (defn maybe-handle-one-event []
;;     (when-let [world (:world @app-state)]
;;       (when-let [event (eq/pop-soonest-event-until
;;                         event-queue
;;                         (vt/get-time virtual-timer))]

;;         (ecs/do-handle-event world event)
;;         true)))

;;   (defn start-event-loop []
;;     ;;(print "start-event-loop\n")
;;     ;; handle pending events
;;     (while (maybe-handle-one-event))
;;     ;; set timeout for the soonest event in the future
;;     (if-let [soonest-time (eq/soonest-time event-queue)]
;;       (let [delay (- soonest-time (vt/get-time virtual-timer))
;;             delay-fixed
;;             (cond
;;               (<= delay 0) 1
;;               (> delay 300) 300
;;               :else delay)]
;;         (vt/set-timeout-after
;;          virtual-timer
;;          delay-fixed
;;          start-event-loop))
;;       (do
;;         ;;(print "NO MORE EVENTS")
;;         )))


;;   ;; (defonce _event_loop_start
;;   ;;   (start-event-loop))

;;   )

(def virtual-timer {:root-atom app-state :ks [:virtual-timer]})

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

 

  (defonce _vt_init (do
                      (vt/initialize virtual-timer)
                      nil))

  ;; return true if executed an event
  ;; return nil if alert set

  ;; ;; return new world or nil if no events
  ;; (defn maybe-handle-one-event [world]
  ;;   (when-let [event (eq/pop-soonest-event-until
  ;;                     event-queue
  ;;                     (vt/get-time virtual-timer))]
  ;;     (ecs/do-handle-event world event)))

  (defn handle-all-pending-events [world]
    (let [t (vt/get-time virtual-timer)]
      (->> (repeatedly #(eq/pop-soonest-event-until event-queue t))
           (take-while identity) ;; not nil
           (reduce
            (fn [wrl e] (ecs/do-handle-event wrl e #(eq/put-event! event-queue %)))
            world))))

  (defn handle-update [world]
    (ecs/do-handle-event
     world
     (ecs/mk-event (ecs/to-world) :update (vt/get-time virtual-timer))
     #(eq/put-event! event-queue %)))

  (defn handle-events [world]
    (-> world
        (handle-all-pending-events)
        (handle-update))))

(do ;; HANDLE :update EVENT ON WORLD LEVEL

  (defmethod ecs/handle-event [:to-world :update]
    [world event _]
    ;;(.log js/console "world update")
    (reduce
     (fn [wrl sys]
       (let [event' (ecs/retarget event sys)]
         ;;(.log js/consol
         (ecs/do-handle-event
          wrl
          event'
          #(eq/put-event! event-queue %))))
     world
     (ecs/all-systems world))))

(defn create-world []
  (let [x 0
        ;; e (assoc (ecs/mk-entity :test-entity :test-type)
        ;;          :origin [0 0])
        ;; e-image (sys-drawing/mk-static-image-component
        ;;          e :img
        ;;          {:point-kvs (ecs/ck-kvs :move :position)
        ;;           :offset [-10 -10]})
        ;;e-move (sys-move/mk-test-diagonal-component e :move nil)
        ]
    (-> (ecs/mk-world)
        (ecs/insert-object (sys-drawing/mk-system))
        (ecs/insert-object (sys-move/mk-system))
        ;;(ecs/insert-object e)
        (ecs/insert-object (locomotive/mk-entity :loc))
        ;;(ecs/insert-object e-image)
        ;;(ecs/insert-object e-move)
        )))

(defonce _init-world
  (do
    (swap! app-state assoc :world (create-world))

    (eq/put-event!
     event-queue
     (ecs/mk-event sys-drawing/to-system ::sys-drawing/clear-layers 0))

    (eq/put-event!
     event-queue
     (assoc
      (ecs/mk-event sys-drawing/to-system
                    ::sys-drawing/add-layer 0)
      :layer-key :background
      :layer-type :tmx
      :layer-data {:resource-name "level1.tmx"
                   :layer-key :background
                   :img-resource-name "background.png"
                   :tile-offset 401}))

    ;; (eq/put-event!
    ;;  event-queue
    ;;  (assoc
    ;;   (ecs/mk-event sys-drawing/to-system
    ;;                 ::sys-drawing/add-layer 0)
    ;;   :layer-key :terrain
    ;;   :layer-type :tmx
    ;;   :layer-data {:resource-name "level1.tmx"
    ;;                :layer-key :foreground
    ;;                :img-resource-name "tiles.png"
    ;;                :tile-offset 1}))


    ;; Send ::ecs/init to all entities

    (doseq [c (ecs/all-components (:world @app-state))]
      (eq/put-event!
       event-queue
       (ecs/mk-event c ::ecs/init 0)))

    (doseq [e (ecs/all-entities (:world @app-state))]
      (eq/put-event!
       event-queue
       (ecs/mk-event e ::ecs/init 0)))


    nil))

(defn draw []
  (let [world (:world @app-state)
        world' (handle-events world)
        world'' (ecs/do-handle-event
                 world'
                 (ecs/mk-event sys-drawing/to-system
                               ::sys-drawing/draw (vt/get-time virtual-timer))
                 #(eq/put-event! event-queue %))]
    (swap! app-state assoc :world world'')))

;; main
(do



  (rum/defc main-component < rum/reactive []
    (our-layout/mk-html))

  (defn render []
    (rum/mount (main-component)
               (. js/document (getElementById "app"))))

  (defn main [& _]

    ;; (.log js/console "-----> main")

    (doseq [fname ["background.png"
                   "tiles.png"
                   "loco1.png"
                   "loco1-debug.png"
                   "carriage1.png"
                   "level1.tmx"]]
      (resources/add-resource fname))

    ;; (resources/set-on-all-loaded
    ;;  #(do
    ;;     (.log js/console "on all loaded")))

    (our-layout/initialize
     app-state [:layout]
     {:bottom-bar-height 150
      :after-canvas-resize
      #(;;.log js/console "ACR callback"
        )})


    ;; TODO

    ;; to zle
    ;; bo nasze draw teraz zawiera obsluge kolejki zdarzen,
    ;; wiec wyjdzie, ze jest
    ;; 1. canvas/clear itd.
    ;; 2. oblsuga kolejki
    ;; 3. canvas/dalsze rysowanie

    ;; I w ogole jakos to glupio.
    ;; Moze zrobic globalna podpinke do draw,
    ;; jakos tak aspektowo czy cos?

    ;; Ale moze teraz na poczatek zostawic, zeby pojsc naprzod?
    ;; TAK

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
