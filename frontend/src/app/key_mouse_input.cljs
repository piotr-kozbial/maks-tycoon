(ns app.key-mouse-input
  (:require
   [app.ecs.entities.locomotive :as locomotive]
   [app.ecs.entities.carriage :as carriage]
   [gamebase-ecs.core :as ecs]
   [gamebase.events :as events]
   [gamebase.event-queue :as eq]
   [gamebase.canvas-control :as canvas-control]
   [app.state :refer [app-state ui-refresh-tick
                      get-fresh-entity-id update-tile-extra]]
   [app.world-interop :as wo]
   [app.tiles.turnouts :as turnouts]

   [app.ui.ui-state :as uis]

   [app.scratch.scratch :as scratch]
   [app.ecs.common-events :as ci]
   [gamebase.systems.movement.movement :as sys-movement]
   [app.ecs.systems.railway :as sys-railway]
   ))

(defn takeover-mouse-click [owner-id handler]
  (swap! uis/ui-state assoc-in [:key-mouse :click-owner] owner-id)
  (swap! uis/ui-state assoc-in [:key-mouse :click-handler] handler))

(defn mouse-click-owner []
  (get-in @uis/ui-state [:key-mouse :click-owner]))

(defn giveup-mouse-click [owner-id]
  (when (= owner-id (mouse-click-owner))
    (swap! uis/ui-state assoc-in [:key-mouse :click-owner] nil)
    (swap! uis/ui-state assoc-in [:key-mouse :click-handler] nil)))

(defn run-train []
  (let [loc-id (keyword (str "loc-" (get-fresh-entity-id)))
        loc (locomotive/mk-entity loc-id 2 1)
        car-id (keyword (str "car-" (get-fresh-entity-id)))
        car (carriage/mk-entity car-id 1 1 0)
        car2-id (keyword (str "car-" (get-fresh-entity-id)))
        car2 (carriage/mk-entity car2-id 0 1 0)]
    (wo/inject-entity loc)
    (wo/send-to-entity loc ::ecs/init)

    (wo/inject-entity car)
    (wo/send-to-entity car ::ecs/init)

    (wo/inject-entity car2)
    (wo/send-to-entity car2 ::ecs/init)

    (wo/send-to-entity car ::ci/connect
                       :leader-entity-key loc-id
                       ;; :leader-path-kvs (ecs/ck-kvs :move :path)
                       :leader-path-kvs (ecs/ck-kvs :move :extra-paths :rear)
                       ;; :leader-length-on-path-kvs (ecs/ck-kvs :move :length-on-path)
                       :leader-length-on-path-kvs (ecs/ck-kvs :move :extra-lengths-on-paths :rear)
                       :distance -15)

    (wo/send-to-entity car2 ::ci/connect
                       :leader-entity-key car-id
                       :leader-path-kvs (ecs/ck-kvs :rear :path)
                       :leader-length-on-path-kvs (ecs/ck-kvs :rear :length-on-path)
                       :distance -15)

    ))


(def enabled (atom true))

(defn disable [] (reset! enabled false))
(defn enable [] (reset! enabled true))

(defn setup-key-handler []


  (events/add-handler
   :canvas-key-typed
   (fn [{:keys [key x y]}]
     (when @enabled
         (when-let [[conv-x conv-y] (canvas-control/get-canvas-to-world-converters)]
           (let [world-x (conv-x x)
                 world-y (conv-y y)
                 tile-x (quot world-x 32)
                 tile-y (quot world-y 32)]
             (case key
               "a" (let [id (keyword (str "loc-" (get-fresh-entity-id)))
                         loc (locomotive/mk-entity id 2 1)
                         car-id (keyword (str "car-" (get-fresh-entity-id)))
                         car (carriage/mk-entity car-id 1 1 loc)
                         car2-id (keyword (str "car2-" (get-fresh-entity-id)))
                         car2 (carriage/mk-entity car2-id 0 1 car)
                         ]

                     (wo/inject-entity loc)
                     (wo/send-to-entity loc ::ecs/init)

                     ;; (wo/inject-entity car)
                     ;; (wo/send-to-entity car ::ecs/init)
                     ;; (wo/send-to-entity car
                     ;;                    ::ci/connect-to
                     ;;                    :reference-entity-or-id loc
                     ;;                    :reference-path-kvs (ecs/ck-kvs :engine :path)
                     ;;                    :reference-length-on-path-kvs (ecs/ck-kvs :engine :length-on-path))
                     ;; (wo/send-to-entity loc
                     ;;                    ::ci/connect-pulled
                     ;;                    :pulled-entity-or-id car)


                     ;; (wo/inject-entity car2)
                     ;; (wo/send-to-entity car2 ::ecs/init)
                     ;; (wo/send-to-entity car2
                     ;;                    ::ci/connect-to
                     ;;                    :reference-entity-or-id car
                     ;;                    :reference-path-kvs (ecs/ck-kvs :point :path)
                     ;;                    :reference-length-on-path-kvs (ecs/ck-kvs :point :length-on-path)
                     ;;                    )
                     ;; (wo/send-to-entity car
                     ;;                    ::ci/connect-pulled
                     ;;                    :pulled-entity-or-id car2)
                     )

               "w" (run-train)

               " " (when (turnouts/is-turnout? tile-x tile-y)

                     (.log js/console (str "SWICH TURNOUT!!! " tile-x ", " tile-y))
                     ;; (turnouts/cycle-turnout-state tile-x tile-y)
                     (println "systems? " (pr-str (into [] (keys (::ecs/systems (wo/get-world))))))
                     (wo/send-to-system ::sys-railway/railway
                                        ::sys-railway/switch-turnout
                                        :tile-x tile-x
                                        :tile-y tile-y
                                        )
                     )

               "=" (do
                     (events/suspend-event-handling)
                     (scratch/toggle))

               )))))))

(defn setup-mouse-handler []
  (events/add-handler
   :canvas-mouse-clicked
   (fn [{:keys [button x y]}]
     (if-let [handler (get-in @uis/ui-state [:key-mouse :click-handler])]
       (handler button x y)
       (.log js/console "Mouse clicked - no owner.")))))
