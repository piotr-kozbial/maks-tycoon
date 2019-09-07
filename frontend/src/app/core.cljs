(ns ^:figwheel-no-load app.core
  (:require [rum.core :as rum]
            ;; [schema.core :as s :include-macros true]

            [app.my-figwheel-hooks]


            [app.scratch.scratch :as scratch]

            [app.state :refer [app-state ui-refresh-tick
                               get-fresh-entity-id update-tile-extra]]
            [app.ui.ui-state :refer [ui-state]]
            [gamebase.resources :as resources]

            [gamebase.systems.drawing :as sys-drawing]

            [app.ecs.entities.locomotive :as locomotive]
            [app.ecs.entities.carriage :as carriage]

            [gamebase.ecs :as ecs]
            [gamebase.canvas-control :as canvas-control]
            [gamebase.layouts.sidebar-and-bottombar
             :as our-layout]

            [cljs.pprint :refer [pprint]]

            [gamebase.layers :as layers]
            [gamebase.debug :as debug]

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

            [app.key-mouse-input :as km]

            [app.modules.construction]


            [sablono.core :as sab]


            [app.ecs.common-events :as ci])
  ;; (:require-macros
  ;;  [devcards.core :refer [defcard]])

  )

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
      (let [world' (try (if (wo/running?)
                          (let [time (wo/get-time)]
                            (-> world
                                (ecs/advance-until-time time)
                                ;; (ecs/do-handle-event (ecs/mk-event (ecs/to-world) :update time))
                                (ecs/do-handle-event (assoc (ecs/mk-event (ecs/to-world) ::ci/delta-t time)
                                                            :delta-t 20))

                                ))
                          world)
                        (catch :default e
                          (println  (str "E Error in advance-simulation-and-draw (during advance)" "\n"
                                         e))

                          world))]
  ;;; validate...
        ;;(s/validate st/s-world world')
  ;;; and put new world in state.
        (swap! app-state assoc :world world')
  ;;; Draw the world.
        (sys-drawing/draw-all world' context)
  ;;; Draw other things.
        (-draw-tile-box-under-mouse context)
  ;;; Draw debug stuff.
        (when (-> @debug/settings
                  :canvas-control
                  :coordinate-system-marker)
          (debug-draw-coord-system))))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; UI root
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(declare initialize-layout)

(defonce already-loaded? (atom false))

(def my-mixin
  { :did-mount (fn [state]
                 (when-not @already-loaded?
                   (initialize-layout)

                   (canvas-control/initialize
                    {:state-atom app-state
                     :state-kvs [:canvas-control]
                     :draw #'advance-simulation-and-draw
                     :overlay-draw nil
                     :get-canvas-size our-layout/get-canvas-size
                     :get-world-size #'wo/get-world-size
                     }))
                 state)})

(rum/defc game-component < rum/reactive []
  (rum/react ui-refresh-tick)
  (our-layout/mk-html
   ;; sidebar
   (sidebar-component)
   ;; bottom bar
   (bottombar-component)))

(rum/defc main-component < my-mixin rum/reactive []
  (rum/react scratch/state)
  [:div
   (game-component)
   (scratch/scratch-component)])

(defn render []
  (rum/mount (main-component)
             (. js/document (getElementById "app"))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Resources to be loaded
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(def resource-fnames
  (concat
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
    "level1.tmx"]
   ;; (for [n (range 9)] (str "track-palette/" n ".png"))
   ;; (for [n (range 8)] (str "track-palette/2" (inc n) ".png"))
   ;; (for [n (range 8)] (str "track-palette/4" (inc n) ".png"))
   ;; (for [n [62 63 64]] (str "track-palette/" n ".png"))
   ;; (for [n [82 83 84]] (str "track-palette/" n ".png"))

   ))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Main function
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;


(defn main [& _]
  ;; (js/frameRate 1)
  (js/setInterval (fn [] ;; set up periodic frame rate measurement update
                    (let [rate (js/frameRate)
                          rate-s (/ (int (* rate 10)) 10)]
                      (swap! app-state assoc :frame-rate rate-s)))
                  1000)

  (doseq [fname resource-fnames]
    (resources/add-resource fname))

  (resources/set-on-all-loaded
   #(do
      (when (every? resources/get-resource resource-fnames)
        (wo/set-world (wo/mk-world))
        (wo/init-tile-extra)
        (wo/run))))



  (km/setup-key-handler)
  (km/setup-mouse-handler)

  (app.modules.construction/initialize)

  (render)
  )

(defn initialize-layout []
  (our-layout/initialize
   app-state [:layout]
   {:bottom-bar-height 150
    :side-bar-width 200
    :after-canvas-resize
    #(;;.log js/console "ACR callback"
      )}))



