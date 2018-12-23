(ns app.core
  (:require [rum.core :as rum]

            [app.state :refer [app-state ui-refresh-tick virtual-timer
                               get-fresh-entity-id event-queue update-tile-extra]]
            [app.ui.ui-state :refer [ui-state]]
            [gamebase.resources :as resources]

            [gamebase.systems.drawing :as sys-drawing]
            [gamebase.systems.movement :as sys-move]

            [app.ecs.entities.locomotive :as locomotive]
            [app.ecs.entities.carriage :as carriage]

            [gamebase.events :as events]
            [gamebase.event-queue :as eq]
            [gamebase.ecs :as ecs]
            [gamebase.virtual-timer :as vt]
            [gamebase.canvas-control :as canvas-control]
            [gamebase.layouts.sidebar-and-bottombar
             :as our-layout]

            [cljs.pprint :refer [pprint]]

            [gamebase.layers :as layers]
            [gamebase.debug :as debug]

            [gamebase.ecsu :as ecsu] ;; without this it doesn't get compiled and loaded for cljs either

            [app.tiles.general :as tiles]
            [app.tiles.turnouts :as turnouts]
            [app.world-interop :as wo]

            [app.ui.sidebar :refer [sidebar-component]]
            [app.ui.bottombar :refer [bottombar-component]]

            [app.tiles.general :refer [initialize-tile-extra]]
            [app.tiles.activate]

            [app.state :as st]))

;; Simulation animation and drawing

(defn -draw-tile-box-under-mouse [{:keys [mouse-x mouse-y]}]
  (js/noFill)
  (js/strokeWeight 1)
  (js/stroke 20 20 20)
  (js/rect (* 32 (quot mouse-x 32)) (* 32 (quot mouse-y 32)) 31 31)
  (js/stroke 210 210 210)
  (js/rect (inc (* 32 (quot mouse-x 32))) (dec (* 32 (quot mouse-y 32))) 31 31))

(defn debug-draw-coord-system []

  ;; x axis
  (js/stroke 255 0 0)
  (js/strokeWeight 4)
  (js/line -32 0  32 0)
  (js/line 32 0 28 5)
  (js/line 32 0 28 -5)

  ;; y axis
  (js/stroke 0 0 255)
  (js/strokeWeight 4)
  (js/line 0 -32 0 32)
  (js/line 0 32 -5 28)
  (js/line 0 32 5 28)

  (js/stroke 255 255 255)
  (js/line 0 0 0 0))

(defn advance-simulation-and-draw [{:keys [min-x max-x min-y max-y] :as context}]
  (let [{:keys [world timer]} @app-state]
    (when world
  ;;; Handle pending events...
      (let [world' (if (wo/running?)
                     (let [time (wo/get-time)]
                       (-> world
                           (ecs/advance-until-time time)
                           (ecs/do-handle-event (ecs/mk-event (ecs/to-world) :update time))))
                     world)]
  ;;; validate...
        (s/validate st/s-world world')
  ;;; and put new world in state.
        (swap! app-state assoc :world world')
  ;;; Draw the world.
        (sys-drawing/draw-all world' context)
  ;;; Draw other things.
        (if (-mouse-in-active-area? context world')
          (-draw-tile-box-under-mouse context))
  ;;; Draw debug stuff.
        (when (-> @debug/settings
                  :canvas-control
                  :coordinate-system-marker)
          (debug-draw-coord-system))))))

;; Initial world

(defn- -get-layer [world layer-key]
  (->> (:layers world)
       (filter #(= (first %) layer-key))
       (first)
       (second)))


(defn init-world []

  (let [tmx-fname "level1.tmx"
        ls (layers/get-all-layers-from-tmx
            (resources/get-resource tmx-fname))
        tileset-rendering-map (layers/get-tileset-rendering-map-from-tmx
                               (resources/get-resource tmx-fname))
        world-width-in-tiles 100
        world-height-in-tiles 100
        ctx {:tile-width 32
             :tile-height 32
             :world-width-in-tiles world-width-in-tiles
             :world-height-in-tiles world-height-in-tiles
             :tileset-rendering-map tileset-rendering-map
             :tileset-map {:kafelki tiles/tiles-by-number}}]

    (swap! app-state assoc :world
           (assoc
            (-> (ecs/mk-world)
                (ecs/insert-object (sys-drawing/mk-system))
                (ecs/insert-object (sys-move/mk-system)))
            :layers ls
            :tile-context ctx
            :tile-extra {}))

    ;; initialize tiles extra in layer :foreground
    (let [layer (-get-layer (:world @app-state) :foreground)]
      (doseq [tile-x (range world-width-in-tiles)
              tile-y (range world-height-in-tiles)]
        (let [[_ tile-number] (layers/get-tile-from-layer layer tile-x tile-y)
              tile-data (tiles/tiles-by-number tile-number)]
          (doseq [tile-id (:ids tile-data)]
            (update-tile-extra
             tile-x tile-y
             (constantly
              (some #(initialize-tile-extra % tile-x tile-y tile-data) (:ids tile-data)))))))))

  (eq/put-event!
   event-queue
   (assoc
    (ecs/mk-event sys-drawing/to-system
                  ::sys-drawing/set-all-tmx 0)
    :tmx-fname "level1.tmx"))

  ;; Send ::ecs/init to all entities

  (doseq [c (ecs/all-components (:world @app-state))]
    (eq/put-event!
     event-queue
     (ecs/mk-event c ::ecs/init 0)))

  (doseq [e (ecs/all-entities (:world @app-state))]
    (eq/put-event!
     event-queue
     (ecs/mk-event e ::ecs/init 0))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; UI root
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(rum/defc main-component < rum/reactive []
  (rum/react ui-refresh-tick)
  (our-layout/mk-html
   ;; sidebar
   (sidebar-component)
   ;; bottom bar
   (bottombar-component)))

(defn render []
  (rum/mount (main-component)
             (. js/document (getElementById "app"))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Resources to be loaded
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(def resource-fnames
  ["background.png"
   "tiles.png"
   "loco1.png"
   "loco1-coupled.png"
   "loco1-crashed.png"
   "loco1-debug.png"
   "carriage1.png"
   "carriage1-front-coupled.png"
   "carriage1-rear-coupled.png"
   "carriage1-both-coupled.png"
   "carriage1-crashed.png"
   "carriage2.png"
   "level1.tmx"])

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Main function
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn setup-key-handler []


  (events/add-handler
   :canvas-key-typed
   (fn [{:keys [key x y]}]
     (when-let [[conv-x conv-y] (canvas-control/get-canvas-to-world-converters)]
       (let [world-x (conv-x x)
             world-y (conv-y y)
             tile-x (quot world-x 32)
             tile-y (quot world-y 32)]
         (case key
           "a" (let [id (keyword (str "loc-" (get-fresh-entity-id)))
                     loc (locomotive/mk-entity id tile-x tile-y)]

                 (wo/inject-entity loc)

                 (eq/put-event! event-queue (ecs/mk-event loc ::ecs/init (vt/get-time virtual-timer))))

           "q" (let [id (keyword (str "car-" (get-fresh-entity-id)))
                     car (carriage/mk-entity id tile-x tile-y)]

                 (wo/inject-entity car)

                 (eq/put-event! event-queue (ecs/mk-event car ::ecs/init (vt/get-time virtual-timer))))

           "w" (let [loc-id (keyword (str "loc-" (get-fresh-entity-id)))
                     loc (locomotive/mk-entity loc-id tile-x tile-y)
                     car-id (keyword (str "car-" (get-fresh-entity-id)))
                     car (carriage/mk-entity car-id (dec tile-x) tile-y)
                     car2-id (keyword (str "car-" (get-fresh-entity-id)))
                     car2 (carriage/mk-entity car2-id (- tile-x 2) tile-y)
                     car3-id (keyword (str "car-" (get-fresh-entity-id)))
                     car3 (carriage/mk-entity car3-id (- tile-x 3) tile-y)

                     ]
                 (doseq [e [loc car car2 car3]]
                   (wo/inject-entity e)
                   (eq/put-event! event-queue
                                  (ecs/mk-event e ::ecs/init (vt/get-time virtual-timer))))

                 (eq/put-event! event-queue
                                (assoc (ecs/mk-event loc ::locomotive/couple-rear
                                                     (vt/get-time virtual-timer))
                                       :the-other-id car-id))
                 (eq/put-event! event-queue
                                (assoc (ecs/mk-event car ::carriage/couple-rear
                                                     (vt/get-time virtual-timer))
                                       :the-other-id car2-id))
                 (eq/put-event! event-queue
                                (assoc (ecs/mk-event car2 ::carriage/couple-rear
                                                     (vt/get-time virtual-timer))
                                       :the-other-id car3-id))


                 )

           " " (when (turnouts/is-turnout? tile-x tile-y)

                 (.log js/console (str "SWITCH TURNOUT!!! " tile-x ", " tile-y))
                 (turnouts/cycle-turnout-state tile-x tile-y)

                 )
           )


         ))

       

))
  )

(defn main [& _]

  (js/setInterval (fn [] ;; set up periodic frame rate measurement update
                    (let [rate (js/frameRate)
                          rate-s (/ (int (* rate 10)) 10)]
                      (swap! app-state assoc :frame-rate rate-s)))
                  1000)

  (doseq [fname resource-fnames]
    (resources/add-resource fname))

  (resources/set-on-all-loaded
   #(do
      (.log js/console "on all loaded")
      (when (every? resources/get-resource resource-fnames)
        (.log js/console "mozna odpalac")
        (init-world))))

  (initialize-layout)


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
    :draw #'advance-simulation-and-draw
    :overlay-draw nil
    :get-canvas-size our-layout/get-canvas-size
    :get-world-size #(vector 2000 1000) ;; TODO
    })

  (setup-key-handler)

  (vt/resume virtual-timer))

(defn initialize-layout []
  (our-layout/initialize
   app-state [:layout]
   {:bottom-bar-height 150
    :side-bar-width 200
    :after-canvas-resize
    #(;;.log js/console "ACR callback"
      )}))
