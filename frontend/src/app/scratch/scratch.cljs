(ns app.scratch.scratch
  (:require [rum.core :as rum]
            [app.ecs.systems.movement.movement :as sys-movement]
            [app.ecs.systems.movement.components.test-engine :refer [mk-test-engine]]
            [app.ecs.systems.movement.components.test-roller :refer [mk-test-roller]]
            [gamebase-ecs.core :as ecs]
            [gamebase.geometry :as geom]
            [cljs.pprint :refer [pprint]]
            [gamebase-ecs.event-queue :as eq]
            [app.ecs.common-events :as ci]
            [app.scratch.util :as su]
            [xprint.core :refer [xprint]]
            [clojure.string :as str]
            [gamebase.geometry :as g]
            [app.tiles.general :as tiles]
            [app.ecs.entities.locomotive :as locomotive]
            [app.ecs.entities.carriage :as carriage]
            [app.ecs.common-events :as ci]
            [app.world-interop :as wo])
  (:require-macros [app.scratch.util :refer [card; VIS
                                             ]]))

;;;;;;;;; HELPERS :;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn svg-coord-system [plusX plusY]
  [;; background
   [:rect {:x -10 :y -10 :width (+ plusX 20) :height (+ plusY 20) :fill "#d5f2e8"}]
   ;; X axis
   [:line {:x1 -10 :y1 0 :x2 (+ plusX 10) :y2 0 :stroke "black" :stroke-width 1}]
   ;; Y axis
   [:line {:x1 0 :y1 -10 :x2 0 :y2 (+ plusY 10) :stroke "black" :stroke-width 1}]
   ;; Y=100
   [:line {:x1 -10 :y1 100 :x2 110 :y2 100 :stroke "black" :stroke-width 1 :stroke-dasharray "5,5"}]
   ;; X=100
   [:line {:x1 100 :y1 -10 :x2 100 :y2 110 :stroke "black" :stroke-width 1 :stroke-dasharray "5,5"}]])




(defn svg-path [path & [highlight?]]
                                                         

                                                  (case (:path-type path)
    :line-segment (let [{:keys [p1 p2]} path
                        [x1 y1] p1
                        [x2 y2] p2]
                    [[:line {:x1 x1 :y1 y1 :x2 x2 :y2 y2 :stroke "black" :stroke-width 1}]
                     (when highlight?
                       [:line {:x1 x1 :y1 y1 :x2 x2 :y2 y2 :stroke "#bf28c1" :stroke-width 3
                               :stroke-dasharray "4,6"}])])
    :path-chain (for [p (:paths path)] (svg-path p highlight?))
    []))

(defn svg-point [[x y :as point] & [highlight?]]
  [[:circle {:cx x :cy y :r 3 :stroke "blue" :fill "blue"}]
   (when highlight?
     [:circle {:cx x :cy y :r 6 :stroke "#bf28c1" :fill "none"}])])


(defn svg-follower
  [{:as component :keys [position angle extra-xy path-chain]}
   & [highlight?]]
  (when-let [[x y] position]
    [(svg-path path-chain highlight?)
     [:circle {:cx x :cy y :r 3 :stroke "blue" :fill "blue"}]
     (when highlight?
       [:circle {:cx x :cy y :r 6 :stroke "#bf28c1" :fill "none"}])
     (when extra-xy
       (for [[x y] (vals extra-xy)]
         [[:circle {:cx x :cy y :r 1.5 :stroke "blue" :fill "blue"}]
          (when highlight?
            [:circle {:cx x :cy y :r 4 :stroke "#bf28c1" :fill "none"}])]))
     (let [angle-in-degrees (geom/get-degrees (geom/in-radians angle))]
       [:g
        {:transform (str/join "\n" [(str "translate(" x " " y ")")
                                    (str "rotate(" angle-in-degrees " 0 0)")])}
        [:line {:x1 0 :y1 0 :x2 10 :y2 0  :stroke "blue"}]
        [:line {:x1 10 :y1 0 :x2 7 :y2 2  :stroke "blue"}]
        [:line {:x1 10 :y1 0 :x2 7 :y2 -2  :stroke "blue"}]])
     ]))

(defn svg-trailer
  [{:as component :keys [position path]}
   & [highlight?]]
  (when-let [[x y] position]
    [(svg-path path highlight?)
     [:circle {:cx x :cy y :r 3 :stroke "cyan" :fill "cyan"}]
     (when highlight?
       [:circle {:cx x :cy y :r 6 :stroke "cyan" :fill "none"}])

     ]))

(defn svg-engine
  [{:as component :keys [position angle path]}
   & [highlight?]]
  (when-let [[x y] position]
    [(svg-path path highlight?)
     [:circle {:cx x :cy y :r 3 :stroke "blue" :fill "blue"}]
     (when highlight?
       [:circle {:cx x :cy y :r 6 :stroke "#bf28c1" :fill "none"}])
     (let [angle-in-degrees (geom/get-degrees (geom/in-radians angle))]
       [:g
        {:transform (str/join "\n" [(str "translate(" x " " y ")")
                                    (str "rotate(" angle-in-degrees " 0 0)")])}
        [:line {:x1 0 :y1 0 :x2 10 :y2 0  :stroke "blue"}]
        [:line {:x1 10 :y1 0 :x2 7 :y2 2  :stroke "blue"}]
        [:line {:x1 10 :y1 0 :x2 7 :y2 -2  :stroke "blue"}]])]))

(defn svg-roller
  [{:as component :keys [position path]}
   & [highlight?]]
  (when-let [[x y] position]
    [(svg-path path highlight?)
     [:circle {:cx x :cy y :r 3 :stroke "blue" :fill "blue"}]
     (when highlight?
       [:circle {:cx x :cy y :r 6 :stroke "#bf28c1" :fill "none"}])]))

(defn svg-path-length
  [[path length] & [highlight?]]
  (let [[x y] (g/path-point-at-length path length)]
    [(svg-path path highlight?)
     [:circle {:cx x :cy y :r 3 :stroke "blue" :fill "blue"}]
     (when highlight?
       [:circle {:cx x :cy y :r 6 :stroke "#bf28c1" :fill "none"}])]))


;;;;;;;;;;;; UTIL ;;;;;;;;;;;;;;;;;

(defn advance-one-frame [[component & events]]
  (let [[component' & events'] (ecs/handle-event
                                :<dummy-world>
                                (assoc (ecs/mk-event component ::ci/delta-t :<dummy-time>) :delta-t 20)
                                component)]
    (into [component'] (concat events (remove nil? events')))))

(defn advance-frames [component frame-count]
  (->> (iterate advance-one-frame [component])
       (drop frame-count)
       (first)))

(defn advance-one-frame' [component]
  (ecs/handle-event
   :<dummy-world>
   (assoc (ecs/mk-event component ::ci/delta-t :<dummy-time>) :delta-t 20)
   component))

(defn advance-frames' [component frame-count]
  (->> (iterate advance-one-frame' component)
       (drop frame-count)
       (first)))

(def my-print-f
  (fn [value] (xprint value :format :default, :render :html)))

;;;;;;;;; CARDS ;;:;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn start-card [_ _]
  (su/card
   nil
   nil
   nil
   []
   ["Select card from the drop-down list above ^"]))

(defn card--geometry--paths [get-val set-val]
  (binding [gamebase.geometry/*with-xprint* true]
    (su/card
     get-val
     set-val
     my-print-f
     [[:svg
       {:width 400, :height 200
        :internal-coords [-10 -10 240 120]
        :y-flip? true}
       [[path1 svg-path]
        [point0 svg-point]
        [point1 svg-point]
        [point2 svg-point]
        ]
       (svg-coord-system 200 100)]
      [:value (get-val :selected-result)]
      [:svg
       {:width 400, :height 200
        :internal-coords [-10 -10 240 120]
        :y-flip? true}
       [[path2 svg-path]
        [point10 svg-point]
        [point11 svg-point]
        [point12 svg-point]
        [point13 svg-point]
        [point14 svg-point]
        [point15 svg-point]
        [point16 svg-point]
        ]
       (svg-coord-system 200 100)]]
     [
      [:h3 "Geometry: paths"]

      [:h4 "Line segments"]
      [VCV path1 (geom/line-segment [0 0] [100 100])]
      [VCV point0 (geom/path-point-at-length path1 0)]
      [VCV point1 (geom/path-point-at-length path1 50)]
      [VCV point2 (geom/path-point-at-length path1 (geom/path-length path1))]

      [:h4 "Path chains"]
      [VCV path2 (geom/path-chain
                  [(geom/line-segment [0 0] [100 100])
                   (geom/line-segment [100 100] [200 0])])]
      [VCV point10 (geom/path-point-at-length path2 0)]
      [VCV point11 (geom/path-point-at-length path2 50)]
      [VCV point12 (geom/path-point-at-length path2 100)]
      [VCV point13 (geom/path-point-at-length path2 150)]
      [VCV point14 (geom/path-point-at-length path2 200)]
      [VCV point15 (geom/path-point-at-length path2 250)]
      [VCV point16 (geom/path-point-at-length path2 290)]
      "(The last one is extrapolated behind the last path.)"])))

(do ;; card--movement--engine--basic
  (defn my-engine-next-path [world this path]
    (when (= path (geom/line-segment [0 0] [100 100]))
      (geom/line-segment [100 100] [200 50])))
  (defn my-engine-prev-path [world this path]
    (assert false "NOT IMPLEMENTED"))

  (defn card--movement--engine--basic [get-val set-val]
    (binding [gamebase.geometry/*with-xprint* true
              gamebase-ecs.core/*with-xprint* true]
      (su/card
       get-val
       set-val
       my-print-f

       ;; visualizations
       [[:svg
         {:width 600, :height 200
          :internal-coords [-10 -10 320 120]
          :y-flip? true}
         [
          [component0 svg-engine]
          [component1 svg-engine]
          [component2 svg-engine]
          [component3 svg-engine]
          [component4 svg-engine]
          [component5 svg-engine]
          [component6 svg-engine]
          [component7 svg-engine]
          ]
         (svg-coord-system 300 100)]
        [:value (get-val :selected-result)]]



       ;; segments
       [[:h3 "Movement system: Engine component, basic usage"]

        ;; [:h3 {:style {:color "magenta"}} "(same for roller, but those still work, maybe they won't after a clean build)."]


        [:p "Here we will manually operate a component, without a world or entity, "
         "and also without an event queue (we will manually pass events if necessary)."]
        "Create:"
        [VCV path (geom/line-segment [0 0] [100 100])]
        [VCV component (mk-test-engine
                        #'my-engine-next-path
                        #'my-engine-prev-path
                        "entity-id" "comp-key"
                        {:path path :driving? true})]
        "Initialize:"
        [VCV component0 (ecs/handle-event :<dummy-world>
                                          (ecs/mk-event component ::ecs/init :<dummy-time>)
                                          component)]

        "After some time:"
        [VCV component1 (advance-frames' component0 50)]
        [VCV component2 (advance-frames' component1 50)]
        [VCV component3 (advance-frames' component2 100)]

        [:h3 {:style {:color "red"}} "SOMETHING STARTS TO GO WRONG - these are slower and slower "
         "WHEN YOU CLICK ON THEM, and the last ones cause a stack overflow... Is advance-frames recursive??"]

        [VCV component4 (advance-frames' component3 100)]
        "Now we go past our path:"
        [VCV component5 (advance-frames' component4 80)]
        "After some time:"
        [VCV component6 (advance-frames' component5 200)]
        "And past next path:"
        [VCV component7 (advance-frames' component6 70)]

        ]))))

(def path1 (geom/line-segment [0 0] [100 100]))
(def path2 (geom/line-segment [100 100] [200 50]))
(defn my-roller-previous-path [world this path]
  (when (= path path2) path1))
(defn my-roller-next-path [world this path]
  (when (= path path1) path2))
(def my-roller-ref (atom nil))
(defn my-roller-get-reference [world this]
  @my-roller-ref)

(defn card--movement--roller--basic-behind [get-val set-val]
  (binding [gamebase.geometry/*with-xprint* true
            gamebase-ecs.core/*with-xprint* true]
    (su/card
     get-val
     set-val
     my-print-f

     ;; visualizations
     [[:svg
       {:width 450, :height 200
        :internal-coords [-10 -10 240 120]
        :y-flip? true}
       [
        [p0 svg-path-length]
        [component0 svg-roller]
        [p1 svg-path-length]
        [component1 svg-roller]
        [p2 svg-path-length]
        [component2 svg-roller]
        [p3 svg-path-length]
        [component3 svg-roller]
        ]
       (svg-coord-system 300 100)]
      [:value (get-val :selected-result)]]

     ;; segments
     [[:h3 "Movement system: Roller component, basic usage behind"]

      "Roller behind reference (negative :distance):"
      [VCV component (mk-test-roller
                      #'my-roller-previous-path
                      #'my-roller-next-path
                      #'my-roller-get-reference
                      "entity-id" "roller-key"
                      {:distance -20})]

      [VCV p0 (reset! my-roller-ref [path1 50])]
      [VCV [component0 e0] (ecs/handle-event :<dummy-world>
                                           (ecs/mk-event component
                                                         ::ecs/init :<dummy-time>)
                                           component)]

      [VCV p1 (reset! my-roller-ref [path1 110])]
      [VCV [component1 e1] (ecs/handle-event :<dummy-world>
                                           (ecs/mk-event component0
                                                         ::ecs/init :<dummy-time>)
                                           component0)]

      [VCV p2 (reset! my-roller-ref [path2 10])]
      [VCV [component2 e2] (ecs/handle-event :<dummy-world>
                                           (ecs/mk-event component1
                                                         ::ecs/init :<dummy-time>)
                                           component1)]

      [VCV p3 (reset! my-roller-ref [path2 100])]
      [VCV [component3 e3] (ecs/handle-event :<dummy-world>
                                           (ecs/mk-event component2
                                                         ::ecs/init :<dummy-time>)
                                           component2)]])))

(defn card--movement--roller--basic-ahead [get-val set-val]
  (binding [gamebase.geometry/*with-xprint* true
            gamebase-ecs.core/*with-xprint* true]
    (su/card
     get-val
     set-val
     my-print-f

     ;; visualizations
     [[:svg
       {:width 450, :height 200
        :internal-coords [-10 -10 240 120]
        :y-flip? true}
       [
        [p0 svg-path-length]
        [component0 svg-roller]
        [p1 svg-path-length]
        [component1 svg-roller]
        [p2 svg-path-length]
        [component2 svg-roller]
        [p3 svg-path-length]
        [component3 svg-roller]
        ]
       (svg-coord-system 300 100)]
      [:value (get-val :selected-result)]]

     ;; segments
     [[:h3 "Movement system: Roller component, basic usage ahead"]

      "Roller ahead reference (positive :distance):"
      [VCV component (mk-test-roller
                      #'my-roller-previous-path
                      #'my-roller-next-path
                      #'my-roller-get-reference
                      "entity-id" "roller-key"
                      {:distance 20})]

      [VCV p0 (reset! my-roller-ref [path1 20])]
      [VCV [component0 e0] (ecs/handle-event :<dummy-world>
                                           (ecs/mk-event component
                                                         ::ecs/init :<dummy-time>)
                                           component)]

      [VCV p1 (reset! my-roller-ref [path1 70])]
      [VCV [component1 e1] (ecs/handle-event :<dummy-world>
                                           (ecs/mk-event component0
                                                         ::ecs/init :<dummy-time>)
                                           component0)]

      [VCV p2 (reset! my-roller-ref [path1 130])]
      [VCV [component2 e2] (ecs/handle-event :<dummy-world>
                                           (ecs/mk-event component1
                                                         ::ecs/init :<dummy-time>)
                                           component1)]

      [VCV p3 (reset! my-roller-ref [path2 80])]
      [VCV [component3 e3] (ecs/handle-event :<dummy-world>
                                           (ecs/mk-event component2
                                                         ::ecs/init :<dummy-time>)
                                           component2)]



      ])))

(defn card--movement--roller--path-end-behind [get-val set-val]
  (binding [gamebase.geometry/*with-xprint* true
            gamebase-ecs.core/*with-xprint* true]
    (su/card
     get-val
     set-val
     my-print-f

     ;; visualizations
     [[:svg
       {:width 450, :height 200
        :internal-coords [-10 -10 240 120]
        :y-flip? true}
       [
        [p0 svg-path-length]
        [component0 svg-roller]
        ]
       (svg-coord-system 300 100)]
      [:value (get-val :selected-result)]]

     ;; segments
     [[:h3 "Movement system: Roller component, path end behind"]

      "Roller behind reference (negative :distance):"
      [VCV component (mk-test-roller
                      #'my-roller-previous-path
                      #'my-roller-next-path
                      #'my-roller-get-reference
                      "entity-id" "roller-key"
                      {:distance -40})]

      [VCV p0 (reset! my-roller-ref [path1 20])]
      [VCV [component0 event0]
       (ecs/handle-event :<dummy-world>
                         (ecs/mk-event component
                                       ::ecs/init :<dummy-time>)
                         component)]])))

(defn card--movement--roller--path-end-ahead [get-val set-val]
  (binding [gamebase.geometry/*with-xprint* true
            gamebase-ecs.core/*with-xprint* true]
    (su/card
     get-val
     set-val
     my-print-f

     ;; visualizations
     [[:svg
       {:width 450, :height 200
        :internal-coords [-10 -10 240 120]
        :y-flip? true}
       [
        [p0 svg-path-length]
        [component0 svg-roller]
        ]
       (svg-coord-system 300 100)]
      [:value (get-val :selected-result)]]

     ;; segments
     [[:h3 "Movement system: Roller component, path end ahead"]

      "Roller behind reference (:positive distance):"
      [VCV component (mk-test-roller
                      #'my-roller-previous-path
                      #'my-roller-next-path
                      #'my-roller-get-reference
                      "entity-id" "roller-key"
                      {:distance 40})]

      [VCV p0 (reset! my-roller-ref [path2 100])]
      [VCV [component0 event0]
       (ecs/handle-event :<dummy-world>
                         (ecs/mk-event component
                                       ::ecs/init :<dummy-time>)
                         component)]])))

(defn card--loco-test [get-val set-val]
  (su/card
   get-val
   set-val
   my-print-f
   ;; visualization
   [
    [:canvas]
    [:value (get-val :selected-result)]
    ]
   ;; segments
   [[:h3 "TODO"]
    [VCV x 10] 
    ]
   )

  )


(defn advance-world [world0 steps & [stop-condition]]
  (let [start-time (:gamebase-ecs.core/time world0)
        end-time (+ start-time (* steps 10))]
    (loop [time (+ start-time 10), world world0]
      (let [world'
            (-> world
                (ecs/put-all-events
                 [(assoc (ecs/mk-event (ecs/to-world) ::ci/delta-t time) :delta-t 10)])
                (ecs/advance-until-time time))]
        (cond
          (and stop-condition (stop-condition world')) world
          (= time end-time) world'
          :else (recur (+ time 10) world'))))))


(defn advance-one-event [world]
  (ecs/advance-one-event world)
  ;; (let [s-t (eq/soonest-event-time (:gamebase-ecs.core/event-queue world))]
  ;;   (assert s-t)
  ;;   (let [[event event-queue'] (eq/take-event (:gamebase-ecs.core/event-queue world))]
  ;;     (ecs/do-handle-event
  ;;      (assoc world :gamebase-ecs.core/event-queue event-queue'
  ;;             :gamebase-ecs.core/time s-t)
  ;;      event)))

  )


(defn card--world-test [get-val set-val]
  (su/card
   get-val
   set-val
   my-print-f
   ;; visualization
   [[:world (get-val :selected-result)]
    [:value (get-val :selected-result)]
    ]
   ;; segments
   [[:h3 "TODO"]
    "Create world:"
    [VCV world0 (wo/mk-world2 5 3)]
    "Build some tracks:"
    [VCV world1 (-> world0
                    (wo/set-tile-in 1 1 [:kafelki (:number (tiles/tiles-by-id :track-we))])
                    (wo/set-tile-in 2 1 [:kafelki (:number (tiles/tiles-by-id :track-we))])
                    (wo/set-tile-in 3 1 [:kafelki (:number (tiles/tiles-by-id :track-we))])
                    (wo/set-tile-in 4 1 [:kafelki (:number (tiles/tiles-by-id :track-ws))])
                    (wo/set-tile-in 4 0 [:kafelki (:number (tiles/tiles-by-id :track-wn))])
                    (wo/set-tile-in 3 0 [:kafelki (:number (tiles/tiles-by-id :track-we))])

                    )]
    "Add a locomotive:"
    [VCV loc1 (locomotive/mk-entity "loc1" 3 1)]
    [VCV world2 (ecs/insert-object world1 loc1)]

    "Initialize the locomotive:"
    [VCV world3  (ecs/put-all-events world2 [(ecs/mk-event (ecs/to loc1) ::ecs/init 0)])]
    [VCV world4 (ecs/advance-until-time world3 0)]

    "Add and initialize a car:"
    [VCV car1 (carriage/mk-entity-alone "car1" 1 1)]
    [VCV world5 (ecs/insert-object world4 car1)]
    [VCV world6  (ecs/put-all-events world5 [(ecs/mk-event (ecs/to car1) ::ecs/init 0)])]
    [VCV world7 (ecs/advance-until-time world6 0)]

    "Run the locomotive (in reverse, towards the car)"
    [VCV world8 (-> world7
                    (ecs/put-all-events
                     [(ecs/mk-event (ecs/to loc1) ::ci/reverse-drive 0)])
                    (ecs/advance-until-time 0))]
    [VCV car-front-at8 (get-in (ecs/get-entity-by-key world8 "car1")
                               [:gamebase-ecs.core/components :front])]
    [VCV world9 (advance-world world8 500
                                    (fn [w]
                                      (let [colls (get-in w
                                                    [:gamebase-ecs.core/systems
                                                     :app.ecs.systems.collisions/collisions
                                                     :tile-entities-map])]
                                        (some
                                         (fn [vs] (> (count vs) 1))
                                         (vals colls)))))]
    [VCV collisions9 (get-in world9
                             [:gamebase-ecs.core/systems :app.ecs.systems.collisions/collisions])]

    [VCV world10 (advance-world world9 1)]
    [VCV collisions10 (get-in world10
                             [:gamebase-ecs.core/systems :app.ecs.systems.collisions/collisions])]
    [VCV loc10 (ecs/get-entity-by-key world10 "loc1")]

    [VCV world11 (advance-world world10 500
                                (fn [w]
                                  (let [loc (ecs/get-entity-by-key w "loc1")
                                        eng (-> loc ::ecs/components :engine)]
                                    (not (:driving? eng)))))]
    [VCV loc11 (ecs/get-entity-by-key world11 "loc1")]

    [VCV world12 (advance-world world11 1)]
    [VCV loc12 (ecs/get-entity-by-key world12 "loc1")]
    [VCV car12 (ecs/get-entity-by-key world12 "car1")]
    [VCV car12-front (-> (ecs/get-entity-by-key world12 "car1") ::ecs/components :front)]

    "Should be connected. Now drive!"
    [VCV world13 (-> world12
                    (ecs/put-all-events
                     [(ecs/mk-event (ecs/to loc1) ::ci/drive (:gamebase-ecs.core/time world12))])
                    (ecs/advance-until-time (:gamebase-ecs.core/time world12)))]
    [VCV world14 (advance-world world13 200)]
    [VCV loc14 (ecs/get-entity-by-key world14 "loc1")]
    [VCV car14 (ecs/get-entity-by-key world14 "car1")]
    [VCV car14-front (-> (ecs/get-entity-by-key world14 "car1") ::ecs/components :front)]




    ]))


(def cards
  [["Start card" #'start-card]
   ["Geometry: paths" #'card--geometry--paths]
   ["Movement system: Engine component, basic usage"
    #'card--movement--engine--basic]
   ["Movement system: Roller component, basic usage behind"
    #'card--movement--roller--basic-behind]
   ["Movement system: Roller component, basic usage ahead"
    #'card--movement--roller--basic-ahead]
   ["Movement system: Roller component, path end behind"
    #'card--movement--roller--path-end-behind]
   ["Movement system: Roller component, path end ahead"
    #'card--movement--roller--path-end-ahead]
   ["Locomotive testing"
    #'card--loco-test]
   [" World test"
    #'card--world-test]
   ])

(def card-map
  (->> cards
       (apply concat)
       (apply hash-map)))

;;;;;;;;; MAIN COMPONENT ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defonce state (atom {:on false
                      :tick 0
                      :current-card "Start card"
                      :card-states {}}))

(defn toggle []
  (swap! state update-in [:on] not))

(defn tick []
  (swap! state update-in [:tick] inc)
  (.log js/console "tick"))

(def normal-style
  {:position "absolute"
   :width "100%"
   :height "100%"
   :padding 0
   :margin 0
   :top 0
   :left 0
   :background-color "#0d9ba5"})

(def error-style
  {:position "absolute"
   :width "100%"
   :height "100%"
   :padding 0
   :margin 0
   :top 0
   :left 0
   :background-color "#962762"})

(defn html-protect [body]
  (try
    body
    (catch js/Error e
      [:div
       {:style error-style}
       [:p {:style {:color "white"}} "*ERROR*"]
       [:pre (str (.-stack e))]])))

(rum/defc scratch-component < rum/reactive []
  (let [{:keys [on current-card] :as st} (rum/react state)]
    (html-protect
     (when (and on current-card)
       [:div {:style normal-style}
        [:form {:action "/hej"}
         [:span {:style {:color "white" :white-space "pre"}} "*SCRATCH*   "]
         [:select {:name "card"
                   :on-change (fn [e] (swap! state assoc :current-card (.-value (.-target e))))}
          (for [[name _] cards]
            [:option {:value name} name])]]
        ((card-map current-card)
         (fn [k] (get-in @state [:card-states current-card k]))
         (fn [k v]
           (swap! state assoc-in [:card-states current-card k] v)
           ;; (when (= k :selected-result)
           ;;   (.log js/console "SHOULD REPAINT some visuals "))
           ))]))))

