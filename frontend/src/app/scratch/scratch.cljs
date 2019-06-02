(ns app.scratch.scratch
  (:require [rum.core :as rum]
            [gamebase.systems.movement.movement :as sys-movement]
            [gamebase.systems.movement.components.test-engine :refer [mk-test-engine]]
            [gamebase.systems.movement.components.test-roller :refer [mk-test-roller]]
            [gamebase.ecs :as ecs]
            [gamebase.geometry :as geom]
            [cljs.pprint :refer [pprint]]
            [gamebase.event-queue :as eq]
            [app.ecs.common-events :as ci]
            [app.scratch.util :as su]
            [app.xprint.core :refer [xprint]


             ]
            [clojure.string :as str]
            [gamebase.geometry :as g])
  (:require-macros [app.scratch.util :refer [card VIS]]))

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
  (partial xprint nil nil))

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

  (defn card--movement--engine--basic [get-val set-val]
    (binding [gamebase.geometry/*with-xprint* true
              gamebase.ecs/*with-xprint* true]
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

        [:p "Here we will manually operate a component, without a world or entity, "
         "and also without an event queue (we will manually pass events if necessary)."]
        "Create:"
        [VCV path (geom/line-segment [0 0] [100 100])]
        [VCV component (mk-test-engine
                        #'my-engine-next-path
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
            gamebase.ecs/*with-xprint* true]
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
            gamebase.ecs/*with-xprint* true]
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
            gamebase.ecs/*with-xprint* true]
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
            gamebase.ecs/*with-xprint* true]
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
  (swap! state update-in [:tick] inc))

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
         (fn [k v] (swap! state assoc-in [:card-states current-card k] v)))]))))

