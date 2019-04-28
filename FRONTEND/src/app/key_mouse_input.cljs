(ns app.key-mouse-input
  (:require
   [app.ecs.entities.locomotive :as locomotive]
   [app.ecs.entities.carriage :as carriage]
   [gamebase.ecs :as ecs]
   [gamebase.events :as events]
   [gamebase.event-queue :as eq]
   [gamebase.canvas-control :as canvas-control]
   [app.state :refer [app-state ui-refresh-tick
                      get-fresh-entity-id update-tile-extra]]
   [app.world-interop :as wo]
   [app.tiles.turnouts :as turnouts]

   [app.ui.ui-state :as uis]

   [app.scratch.scratch :as scratch]))

(defn takeover-mouse-click [owner-id handler]
  (swap! uis/ui-state assoc-in [:key-mouse :click-owner] owner-id)
  (swap! uis/ui-state assoc-in [:key-mouse :click-handler] handler))

(defn mouse-click-owner []
  (get-in @uis/ui-state [:key-mouse :click-owner]))

(defn giveup-mouse-click [owner-id]
  (when (= owner-id (mouse-click-owner))
    (swap! uis/ui-state assoc-in [:key-mouse :click-owner] nil)
    (swap! uis/ui-state assoc-in [:key-mouse :click-handler] nil)))



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
                     loc (locomotive/mk-entity id 0 1)]
                 (wo/inject-entity loc)
                 (wo/send-to-entity loc ::ecs/init))

           "q" (let [id (keyword (str "car-" (get-fresh-entity-id)))
                     car (carriage/mk-entity id tile-x tile-y)]
                 (wo/inject-entity car)
                 (wo/send-to-entity car ::ecs/init))

           "w" (let [tile-x 4
                     tile-y 1
                     loc-id (keyword (str "loc-" (get-fresh-entity-id)))
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
                 (wo/send-to-entity loc  ::locomotive/couple-rear :the-other-id car-id)
                 (wo/send-to-entity car  ::carriage/couple-rear   :the-other-id car2-id)
                 (wo/send-to-entity car2 ::carriage/couple-rear   :the-other-id car3-id))

           " " (when (turnouts/is-turnout? tile-x tile-y)

                 (.log js/console (str "SWICH TURNOUT!!! " tile-x ", " tile-y))
                 (turnouts/cycle-turnout-state tile-x tile-y)

                 )

           "=" (do
                 (events/suspend-event-handling)
                 (scratch/toggle))

           ))))))

(defn setup-mouse-handler []
  (events/add-handler
   :canvas-mouse-clicked
   (fn [{:keys [button x y]}]
     (if-let [handler (get-in @uis/ui-state [:key-mouse :click-handler])]
       (handler button x y)
       (.log js/console "Mouse clicked - no owner.")))))
