(ns app.world-interop
  (:require
   [gamebase.canvas-control :as canvas-control]
   [gamebase.resources :as resources]
   [gamebase.systems.drawing :as sys-drawing]
   [app.ecs.systems.collisions :as sys-collisions]
   [app.ecs.common-events :as ci]
   [app.ecs.operations :as ops]
   [gamebase.systems.movement.movement :as sys-move]
   [app.ecs.systems.railway :as sys-railway]
   [app.tiles.general :as tiles]
   [app.tiles.turnouts :as turnouts]
   [gamebase-ecs.core :as ecs]
   [gamebase-ecs.virtual-timer :as vt]
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
                    (ecs/insert-object (sys-move/mk-system))
                    (ecs/insert-object (sys-railway/mk-system))
                    (ecs/insert-object (sys-collisions/mk-system)))
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
  (stop))

(defn destroy-world []
  (swap! app-state assoc :world nil))

(defn get-world []
  (:world @app-state))

(defn get-system [system-key]
  (get-in @app-state [:world ::ecs/systems system-key])
  )

;; other

(defn get-all-locomotives [world]
  (filter
   #(= (::ecs/type %) :app.ecs.entities.locomotive/locomotive)
   (vals (::ecs/entities world))))

(defn get-all-cars [world]
  (filter
   #(= (::ecs/type %) :app.ecs.entities.carriage/carriage)
   (vals (::ecs/entities world))))

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

(defn send-to-system [system-key msg & kvs]
  (swap! app-state update-in [:world]
         (fn [world]
           (let [system (-> world ::ecs/systems system-key)
                 _ (println "SYSTEM " (pr-str system) " <system")
                 time (get-time)
                 event (apply assoc (ecs/mk-event (ecs/to system) msg time) kvs)]
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


(defn get-world-size [] ;; TODO
  [2000 1000])

(defn get-tile-xy [canvas-x canvas-y]
  (let [[conv-x conv-y] (canvas-control/get-canvas-to-world-converters)
        tile-x (quot (conv-x canvas-x) 32)
        tile-y (quot (conv-y canvas-y) 32)
        [world-width world-height] (get-world-size)]
    (when (and (>= tile-x 0) (< tile-x world-width)
               (>= tile-y 0) (< tile-y world-height))
      [tile-x tile-y])))

(defn get-tile [tile-x tile-y]
  (let [world (:world @app-state)
        layer (-get-layer world :foreground)]
    (layers/get-tile-from-layer layer tile-x tile-y)))

(defn set-tile [tile-x tile-y tile]
  (swap!
   app-state
   update-in
   [:world :layers]
   (fn [layers]
     (map
      (fn [[key l]]
        [key
         (if (= key :foreground)
           (layers/set-tile-in-layer l tile-x tile-y tile)
           l)])
      layers))))



;; railway operations

(defn connect [world puller pulled]
  (let [[path-kvs length-on-path-kvs]
        (ops/get-central-point-kvs (ecs/get-entity-by world puller))]
    (send-to-entity puller ::ci/connect-pulled :pulled-entity-or-id pulled)
    (send-to-entity pulled ::ci/connect-to
                       :reference-entity-or-id puller
                       :reference-path-kvs path-kvs
                       :reference-length-on-path-kvs length-on-path-kvs)))

(defn disconnect [puller pulled]
  (send-to-entity puller ::ci/disconnect-pulled)
  (send-to-entity pulled ::ci/disconnect-front))
