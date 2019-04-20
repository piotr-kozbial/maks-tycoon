(ns app.scratch.scratch
  (:require [rum.core :as rum]
            [gamebase.systems.movement :as sys-movement]
            [gamebase.ecs :as ecs]
            [gamebase.geometry :as geom]
            [cljs.pprint :refer [pprint]]
            [gamebase.event-queue :as eq]
            [app.scratch.util :as su]
            [app.xprint.core :refer [xprint]


             ]
            [clojure.string :as str])
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

;;;;;;;;; CARDS ;;:;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(def my-print-f
  (partial xprint nil nil))

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

(defn card--movement--path-follower--basic [get-val set-val]
  (binding [gamebase.geometry/*with-xprint* true
            gamebase.ecs/*with-xprint* true]
    (su/card
     get-val
     set-val
     my-print-f
     ;; visualizations
     [[:svg
       ;; props
       {:width 200, :height 200
        :internal-coords [-10 -10 120 120]
        :y-flip? true}
       ;; legend
       [
        [component0 svg-follower]
        ;; [component3 svg-follower]
        ;; [component4 svg-follower]
        ]
       (svg-coord-system 100 100)]
      [:value (get-val :selected-result)]

      ]

     ;; segments
     [[:h3 "Movement system: Path follower component, basic usage"]
      [:p "Here we will manually operate a component, without a world or entity, "
       "and also without an event queue (we will manually pass events if necessary)."]
      "Create:"
      [VCV path (geom/line-segment [0 0] [100 100])]
      [VCV component (sys-movement/mk-path-follower "entity-id" "comp-key"
                                                    {:path-or-paths path
                                                     :driving? true})]
      ;;(svg-follower component)
      "Initialize:"
      [VCV [component0 event0] (ecs/handle-event :<dummy-world>
                                                  (ecs/mk-event component
                                                                ::ecs/init
                                                                10000)
                                                  component)]

      "The above returns [], i.e. no object changes and no events. "
      "This is because the path follower does nothing until it gets a path; "
      "doesn't even need to know the time of creation."
      [:br] [:br]

      ;; "Setting path:"
      ;; [VCV [component2 event1]
      ;;  (ecs/handle-event :<dummy-world>
      ;;                    (assoc
      ;;                     (ecs/mk-event component
      ;;                                   ::sys-movement/set-path
      ;;                                   10005)
      ;;                     :path path)
      ;;                    component)]
      ;; "The above modifies the component and also wants to schedule an :update event "
      ;; "at the time it should reach the end of the path. This time is calculated now "
      ;; "and saved also in the component. "
      ;; "On the other hand, there is no position calculated yet, although it could be; "
      ;; "but it is postponed until an :update event happens."
      ;; [:br] [:br]

      ;; "Update event after some time:"
      ;; [VCV [_ component3] (ecs/handle-event :<dummy-world>
      ;;                                       (ecs/mk-event component2
      ;;                                                     :update
      ;;                                                     11000)
      ;;                                       component2)]
      ;; "Update at path end. "
      ;; "This event would normally be yielded from the event queue "
      ;; "at the appropriate time (corresponding to the game time specified in the event). "
      ;; "Here we pass it manually:"
      ;; [VCV [event-to-entity component4] (ecs/handle-event :<dummy-world> event1 component3)]

      ])))

(defn card--movement--path-follower--extra-points [get-val set-val]
  (binding [gamebase.geometry/*with-xprint* true
            gamebase.ecs/*with-xprint* true]
    (su/card
     get-val
     set-val
     my-print-f
     ;; visualizations
     [[:svg
       ;; props
       {:width 400, :height 300
        :internal-coords [-10 -10 240 180]
        :y-flip? true}
       ;; legend
       [[path1 svg-path]
        [path2 svg-path]
        [component2 svg-follower]
        [component3 svg-follower]
        [component4 svg-follower]
        [component5 svg-follower]
        [component6 svg-follower]
        [component7 svg-follower]
        [component8 svg-follower]



        ]
       (svg-coord-system 200 150)]
      [:value (get-val :selected-result)]]

     ;; segments
     [[:h3 "Movement system: Path follower component, extra points"]

      [VCV path1 (geom/line-segment [0 0] [100 100])]
      [VCV path2 (geom/line-segment [100 100] [200 0])]

      "Create, initialize, set path:"
      [VCV component (sys-movement/mk-path-follower "entity-id" "comp-key"
                                                    {:extra-points {:ahead-one 20
                                                                    :ahead-two 30
                                                                    :behind -10}})]
      [VCV _ (ecs/handle-event :<dummy-world>
                               (ecs/mk-event component
                                             ::ecs/init
                                             10000)
                               component)]
      [VCV path (geom/line-segment [0 0] [100 100])]
      [VCV [component2 event1]
       (ecs/handle-event :<dummy-world>
                         (assoc
                          (ecs/mk-event component
                                        ::sys-movement/set-path
                                        10005)
                          :path path1)
                         component)]
      [VCV [_ component3] (ecs/handle-event :<dummy-world>
                                            (ecs/mk-event component2
                                                          :update
                                                          10000)
                                            component2)]
      "After some time:"
      [VCV [_ component4] (ecs/handle-event :<dummy-world>
                                            (ecs/mk-event component3
                                                          :update
                                                          13000)
                                            component3)]
      "And at 'path end', that should be for the further extra point:"
      [VCV [endEvent component5] (ecs/handle-event :<dummy-world>
                                            event1
                                            component4)]
      "and we can see that the :at-path-end event has been emitted with the same timestamp. "
      "At this point whoever owns the component (typically an entity) should give it another path:"
      [VCV [component5' event2]
       (ecs/handle-event :<dummy-world>
                         (assoc
                          (ecs/mk-event component
                                        ::sys-movement/add-path
                                        (:gamebase.event-queue/time endEvent))
                          :path path2)
                         component5)]


      [:p "Now let's go a bit further, "
       "so that points ahead move to the next path, "
       "but not the main point:"]
      [VCV [_ component6] (ecs/handle-event :<dummy-world>
                                            (ecs/mk-event component5'
                                                          :update
                                                          16000)
                                            component5')]
      "And further still, to push the main point to the next path:"
      [VCV [_ component7] (ecs/handle-event :<dummy-world>
                                            (ecs/mk-event component6
                                                          :update
                                                          20000)
                                            component6)]
      "And at the new 'path end'..."
      [VCV [_ component8] (ecs/handle-event :<dummy-world>
                                                   event2
                                                   component7)]



      ])))

(def cards
  [["Start card" #'start-card]
   ["Geometry: paths" #'card--geometry--paths]
   ["Movement system: Path follower component, basic usage" #'card--movement--path-follower--basic]
   ["Movement system: Path follower component, extra points" #'card--movement--path-follower--extra-points]])

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
      [:dev
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

