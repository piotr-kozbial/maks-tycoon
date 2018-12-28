(ns app.world-interop
  (:require

   [gamebase.resources :as resources]
   [gamebase.systems.drawing :as sys-drawing]
   [gamebase.systems.movement :as sys-move]
   [app.tiles.general :as tiles]
   [app.tiles.turnouts :as turnouts]
   [gamebase.ecs :as ecs]
   [gamebase.virtual-timer :as vt]
   [gamebase.event-queue :as eq]
   [gamebase.layers :as layers]
   [app.server-communication :as sc]
   [app.tiles.general :refer [initialize-tile-extra]]
   [app.state :refer [app-state ui-refresh-tick get-fresh-entity-id update-tile-extra]]))


;; time-related operations

(defn run []
  (let [{:keys [world timer]} @app-state]
    (assert world)
    (swap! app-state update-in [:timer] #(vt/run % (::ecs/time world)))))

(defn stop []
  (let [{:keys [world timer]} @app-state]
    (assert world)
    (swap! app-state update-in [:timer] vt/stop)))

(defn running? []
  (let [{:keys [world timer]} @app-state]
    (assert world)
    (vt/running? timer)))

(defn get-time []
  "Returns virtual time if the world is running, world time otherwise."
  (let [{:keys [world timer]} @app-state]
    (assert world)
    (if (vt/running? timer)
      (vt/get-time timer)
      (::ecs/time world))))

;; world creation
(defn mk-world []
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
             :tileset-map {:kafelki tiles/tiles-by-number}}

        world0 (assoc
                (-> (ecs/mk-world)
                    (ecs/insert-object (sys-drawing/mk-system))
                    (ecs/insert-object (sys-move/mk-system)))
                :layers ls
                :tile-context ctx
                :tile-extra {})
        world1
        (ecs/put-all-events world0 [(assoc
                                     (ecs/mk-event sys-drawing/to-system
                                                   ::sys-drawing/set-all-tmx 0)
                                     :tmx-fname "level1.tmx")])]
   world1))

(defn- -get-layer [world layer-key]
  (->> (:layers world)
       (filter #(= (first %) layer-key))
       (first)
       (second)))
(defn init-tile-extra []
  ;; initialize tiles extra in layer :foreground
  (let [layer (-get-layer (:world @app-state) :foreground)
        world-width-in-tiles 100
        world-height-in-tiles 100]
    (doseq [tile-x (range world-width-in-tiles)
            tile-y (range world-height-in-tiles)]
      (let [[_ tile-number] (layers/get-tile-from-layer layer tile-x tile-y)
            tile-data (tiles/tiles-by-number tile-number)]
        (doseq [tile-id (:ids tile-data)]
          (update-tile-extra
           tile-x tile-y
           (constantly
            (some #(initialize-tile-extra % tile-x tile-y tile-data) (:ids tile-data)))))))))

;; whole world related operation

(defn set-world [world]
  (swap! app-state assoc :world world)
  (init-tile-extra)
  (stop))

(defn destroy-world []
  (swap! app-state assoc :world nil))

;; other

(defn get-all-locomotives [world]

  (filter
   #(= (::ecs/type %) :app.ecs.entities.locomotive/locomotive)
   (vals (::ecs/entities world)))
  ;; (::ecs/entities world)

  )

(comment



  (count (get-all-locomotives (:world @app.state/app-state)))





 )

(defn send-to-entity [entity-or-key msg & kvs]
  (swap! app-state update-in [:world]
         (fn [world]
           (let [entity
                 (if (map? entity-or-key)
                   entity-or-key
                   (ecs/get-entity-by-key world entity-or-key))
                 time (get-time)
                 event (apply assoc (ecs/mk-event (ecs/to entity) msg time) kvs)]
             (ecs/put-all-events world [event])))))

(defn inject-entity [e]
  (swap! app-state
         (fn [{:keys [world] :as state}]
           (assoc
            state
            :world
            (ecs/insert-object world e))))
  nil)

(defn kill-entity [entity-key]
  (swap! app-state
         (fn [{:keys [world] :as state}]
           (assoc
            state
            :world
            (ecs/remove-entity-by-key world entity-key))))
  nil)

(defn kill-train [world loc-key]
  (loop [key loc-key]
    (when key
      (let [entity (ecs/get-entity-by-key world key)]
        (kill-entity key)
        (recur (:rear-coupling entity))))

    ))

