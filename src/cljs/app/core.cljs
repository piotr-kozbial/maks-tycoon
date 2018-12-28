(ns app.core
  (:require [rum.core :as rum]
            ;; [schema.core :as s :include-macros true]

            [app.state :refer [app-state ui-refresh-tick
                               get-fresh-entity-id update-tile-extra]]
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

            [app.state :as st]

            ;; must simply be required to define the :update handler for world
            [app.ecs.world]
            ))

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
        ;;(s/validate st/s-world world')
  ;;; and put new world in state.
        (swap! app-state assoc :world world')
  ;;; Draw the world.
        (sys-drawing/draw-all world' context)
  ;;; Draw other things.
  ;;; Draw debug stuff.
        (when (-> @debug/settings
                  :canvas-control
                  :coordinate-system-marker)
          (debug-draw-coord-system)))))

  )


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
  (.log js/console "RENDER")
  (rum/mount (main-component)
             (. js/document (getElementById "app")))


  )

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
                 (wo/send-to-entity loc ::ecs/init))

           "q" (let [id (keyword (str "car-" (get-fresh-entity-id)))
                     car (carriage/mk-entity id tile-x tile-y)]
                 (wo/inject-entity car)
                 (wo/send-to-entity car ::ecs/init))

           "w" (let [loc-id (keyword (str "loc-" (get-fresh-entity-id)))
                     loc (locomotive/mk-entity loc-id tile-x tile-y)
                     car-id (keyword (str "car-" (get-fresh-entity-id)))
                     car (carriage/mk-entity car-id (dec tile-x) tile-y)
                     car2-id (keyword (str "car-" (get-fresh-entity-id)))
                     car2 (carriage/mk-entity car2-id (- tile-x 2) tile-y)
                     car3-id (keyword (str "car-" (get-fresh-entity-id)))
                     car3 (carriage/mk-entity car3-id (- tile-x 3) tile-y)]
                 (doseq [e [loc car car2 car3]]
                   (wo/inject-entity e)
                   (wo/send-to-entity e ::ecs/init))
                 (wo/send-to-entity loc ::locomotive/couple-rear
                                    :the-other-id car-id)
                 (wo/send-to-entity car ::carriage/couple-rear
                                    :the-other-id car2-id)
                 (wo/send-to-entity car2 ::carriage/couple-rear
                                    :the-other-id car3-id)

                 )

           " " (when (turnouts/is-turnout? tile-x tile-y)

                 (.log js/console (str "SWICH TURNOUT!!! " tile-x ", " tile-y))
                 (turnouts/cycle-turnout-state tile-x tile-y)

                 )))))))


(declare initialize-layout)

(defn main [& _]
  (.log js/console "MAIN")

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
        (wo/set-world (wo/mk-world))
        (wo/run))))

  (initialize-layout)

  (canvas-control/initialize
   {:state-atom app-state
    :state-kvs [:canvas-control]
    :draw #'advance-simulation-and-draw
    :overlay-draw nil
    :get-canvas-size our-layout/get-canvas-size
    :get-world-size #(vector 2000 1000) ;; TODO
    })

  (setup-key-handler)

  ;; (vt/resume virtual-timer)


  )

(defn initialize-layout []
  (our-layout/initialize
   app-state [:layout]
   {:bottom-bar-height 150
    :side-bar-width 200
    :after-canvas-resize
    #(;;.log js/console "ACR callback"
      )}))
