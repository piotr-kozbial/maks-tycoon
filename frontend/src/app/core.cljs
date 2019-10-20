(ns ^:figwheel-no-load app.core
  (:require [rum.core :as rum]
            ;; [schema.core :as s :include-macros true]

            [app.my-figwheel-hooks]


            [app.scratch.scratch :as scratch]

            [app.state :as st :refer [app-state ui-refresh-tick
                               get-fresh-entity-id update-tile-extra]]
            [app.ui.ui-state :refer [ui-state]]
            [gamebase-resources.core :as resources]

            [gamebase.systems.drawing :as sys-drawing]

            [app.ecs.entities.locomotive :as locomotive]
            [app.ecs.entities.carriage :as carriage]

            [gamebase-ecs.core :as ecs]
            [gamebase-enhanced-canvas.core :as enhanced-canvas]
            [gamebase-layouts.sidebar-and-bottombar :as our-layout]

            [cljs.pprint :refer [pprint]]

            [gamebase.layers :as layers]

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

;; Drawing extras ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn -draw-tile-box-under-mouse [{:keys [mouse-x mouse-y]}]
  ;; (js/noFill)
  ;; (js/strokeWeight 1)
  ;; (js/stroke 20 20 20)
  ;; (js/rect (* 32 (quot mouse-x 32)) (* 32 (quot mouse-y 32)) 31 31)
  ;; (js/stroke 210 210 210)
  ;; (js/rect (inc (* 32 (quot mouse-x 32))) (dec (* 32 (quot mouse-y 32))) 31 31)
  )

(defn debug-draw-coord-system []

  ;; ;; x axis
  ;; (js/stroke 255 0 0)
  ;; (js/strokeWeight 4)
  ;; (js/line -32 0  32 0)
  ;; (js/line 32 0 28 5)
  ;; (js/line 32 0 28 -5)

  ;; ;; y axis
  ;; (js/stroke 0 0 255)
  ;; (js/strokeWeight 4)
  ;; (js/line 0 -32 0 32)
  ;; (js/line 0 32 -5 28)
  ;; (js/line 0 32 5 28)

  ;; (js/stroke 255 255 255)
  ;; (js/line 0 0 0 0)
  )


;; Game loop functions;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn advance-simulation []

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
        (swap! app-state assoc :world world')))))

(defn draw-game [{:keys [min-x max-x min-y max-y canvas-context] :as context}]
  (let [world' (:world @app-state)]
    ;;; Draw the world.
    (sys-drawing/draw-all world' context)
    ;;; Draw other things.
    (-draw-tile-box-under-mouse context)
    ;;; Draw debug stuff.
    ;; (when (-> @debug/settings
    ;;           :enhanced-canvas
    ;;           :coordinate-system-marker)
    ;;   (debug-draw-coord-system))

    ))

(defn game-step []
  (advance-simulation)
  (draw-game (enhanced-canvas/drawing-prolog @st/enhanced-canvas-object))
  (enhanced-canvas/drawing-epilog @st/enhanced-canvas-object))


;; Initializers ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn setup-km-handlers [& [end-callback]]
  (km/setup-key-handler)
  (km/setup-mouse-handler)
  (when end-callback (end-callback)))

(defn initialize-modules [& [end-callback]]
  (app.modules.construction/initialize)
  (when end-callback (end-callback)))

(do ;; load-resources

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

  (defn load-resources [end-callback]
    (doseq [fname resource-fnames]
      (resources/add-resource fname))

    (resources/set-on-all-loaded
     #(do
        (when (every? resources/get-resource resource-fnames)
          (end-callback))))))

(defn start-game [& [end-callback]]
  (wo/set-world (wo/mk-world))
  (wo/init-tile-extra)
  (wo/run)
  (when end-callback (end-callback)))

(do ;; mount-ui

  (def ui-callback-when-mounted (atom nil))

  (def my-mixin
    {:did-mount (fn [_] (@ ui-callback-when-mounted))})

  (rum/defc game-component < rum/reactive []
    (rum/react ui-refresh-tick)
    (our-layout/mk-html
     (sidebar-component)
     (bottombar-component)))

  (rum/defc main-component < my-mixin rum/reactive []
    (rum/react scratch/state)
    [:div
     (game-component)
     (scratch/scratch-component)])

  (defn mount-ui [end-callback]
    (reset! ui-callback-when-mounted end-callback)
    (rum/mount (main-component) (. js/document (getElementById "app")))))

(defn initialize-layout [& [end-callback]]
  (our-layout/initialize
   app-state [:layout]
   {:bottom-bar-height 150
    :side-bar-width 200})
  (when end-callback (end-callback)))

(defn initialize-enhanced-canvas [& [end-callback]]
  (let [[world-width world-height] (wo/get-world-size)
        cco (enhanced-canvas/create
             {:content-width world-width
              :content-height world-height
              :margin 100})]
    (reset! st/enhanced-canvas-object cco)
    (our-layout/insert-canvas cco))
  (when end-callback (end-callback)))

(defn start-game-loop [& [end-callback]]
  (.setInterval js/window (fn [] (game-step)) 25)
  (when end-callback (end-callback)))


;; Main ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn run-sequential [& fns]
  (case (count fns)
    0 (do)
    1 ((first fns))
    ((first fns) #(apply run-sequential (rest fns)))))

(run-sequential
 setup-km-handlers
 initialize-modules
 load-resources
 start-game
 mount-ui
 initialize-layout
 initialize-enhanced-canvas
 start-game-loop)

