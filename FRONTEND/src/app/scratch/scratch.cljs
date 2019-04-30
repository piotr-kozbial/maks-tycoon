(ns app.scratch.scratch
  (:require [rum.core :as rum]
            [gamebase.systems.movement :as sys-movement]
            [gamebase.ecs :as ecs]
            [gamebase.geometry :as geom]
            [cljs.pprint :refer [pprint]]
            [gamebase.event-queue :as eq]
            [app.ecs.common-events :as ci]
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

(defn svg-trailer
  [{:as component :keys [position]}
   & [highlight?]]
  (when-let [[x y] position]
    [[:circle {:cx x :cy y :r 3 :stroke "cyan" :fill "cyan"}]
     (when highlight?
       [:circle {:cx x :cy y :r 6 :stroke "cyan" :fill "none"}])

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

;; (defn card--movement--path-follower--basic [get-val set-val]
;;   (binding [gamebase.geometry/*with-xprint* true
;;             gamebase.ecs/*with-xprint* true]
;;     (su/card
;;      get-val
;;      set-val
;;      my-print-f
;;      ;; visualizations
;;      [[:svg
;;        ;; props
;;        {:width 600, :height 200
;;         :internal-coords [-10 -10 320 120]
;;         :y-flip? true}
;;        ;; legend
;;        [
;;         [component0 svg-follower]
;;         [component0' svg-follower]
;;         [component1 svg-follower]
;;         [component2 svg-follower]
;;         [component2' svg-follower]
;;         [component3 svg-follower]
;;         [component4 svg-follower]
;;         [component4' svg-follower]
;;         [component5 svg-follower]
;;         [component6 svg-follower]
;;         [component7 svg-follower]
;;         [component8 svg-follower]
;;         [component9 svg-follower]
;;         [component10 svg-follower]
;;         ]
;;        (svg-coord-system 300 100)]
;;       [:value (get-val :selected-result)]]

;;      ;; segments
;;      [[:h3 "Movement system: Path follower component, basic usage"]

;;       [:p "Here we will manually operate a component, without a world or entity, "
;;        "and also without an event queue (we will manually pass events if necessary)."]
;;       "Create:"
;;       [VCV path (geom/line-segment [0 0] [100 100])]
;;       [VCV component (sys-movement/mk-path-follower "entity-id" "comp-key"
;;                                                     {:path-or-paths path
;;                                                      :driving? true})]
;;       ;;(svg-follower component)
;;       "Initialize:"
;;       [VCV [component0 event-topo-0] (ecs/handle-event :<dummy-world>
;;                                                   (ecs/mk-event component
;;                                                                 ::ecs/init
;;                                                                 10000)
;;                                                   component)]

;;       [VCV component0' (ecs/handle-event :<dummy-world>
;;                                         (ecs/mk-event component0
;;                                                       :update
;;                                                       10000)
;;                                         component0)]
;;       "After some time"
;;       [VCV component1 (ecs/handle-event :<dummy-world>
;;                                                  (ecs/mk-event component0'
;;                                                                :update
;;                                                                12000)
;;                                                  component0')]
;;       "At path end"
;;       [VCV [event-path-end-2 aaa component2] (ecs/handle-event
;;                                 :<dummy-world> event-topo-0 component1)]
;;       [VCV [event-topo-2' component2'] (ecs/handle-event
;;                                   :<dummy-world>
;;                                   (assoc
;;                                    (ecs/mk-event component2
;;                                                  ::sys-movement/add-path
;;                                                  (::eq/time event-path-end-2))
;;                                    :path (geom/line-segment [100 100] [200 0]))
;;                                   component2)]

;;       [VCV component3 (ecs/handle-event :<dummy-world>
;;                                         (ecs/mk-event component2'
;;                                                       :update
;;                                                       19000)
;;                                         component2')]

;;       [VCV [event-path-end-4 eee component4] (ecs/handle-event :<dummy-world> event-topo-2' component3)]

;;       "Now we have empty path chain. Let's try to update - it should be safe and change nothing:"
;;       [VCV component4' (ecs/handle-event :<dummy-world>
;;                                          (ecs/mk-event component4
;;                                                        :update
;;                                                        (::eq/time event-topo-2'))
;;                                          component4)]

;;       "At path end"
;;       [VCV [event-topo-5 component5] (ecs/handle-event
;;                                         :<dummy-world>
;;                                         (assoc
;;                                          (ecs/mk-event component4
;;                                                        ::sys-movement/add-path
;;                                                        (::eq/time event-path-end-4))
;;                                          :path (geom/line-segment [200 0] [300 100]))
;;                                         component4)]

;;       [VCV component6 (ecs/handle-event :<dummy-world>
;;                                         (ecs/mk-event component5
;;                                                       :update
;;                                                       28000)
;;                                         component5)]

;;       "Now let's try to stop:"
;;       [VCV component7 (ecs/handle-event :<dummy-world>
;;                                         (ecs/mk-event component6
;;                                                       ::ci/stop
;;                                                       29000)
;;                                         component6)]
;;       "and after some time (should be in the same spot):"
;;       [VCV component8 (ecs/handle-event :<dummy-world>
;;                                         (ecs/mk-event component7
;;                                                       :update
;;                                                       30000)
;;                                         component7)]

;;       "Start again:"
;;       [VCV [event9 component9] (ecs/handle-event :<dummy-world>
;;                                            (ecs/mk-event component8
;;                                                          ::ci/drive
;;                                                          31000)
;;                                            component8)]

;;       "and after some time (should move):"
;;       [VCV component10 (ecs/handle-event :<dummy-world>
;;                                         (ecs/mk-event component9
;;                                                       :update
;;                                                       32000)
;;                                         component9)]

;;       ])))

;; (defn card--movement--path-follower--extra-points [get-val set-val]
;;   (binding [gamebase.geometry/*with-xprint* true
;;             gamebase.ecs/*with-xprint* true]
;;     (su/card
;;      get-val
;;      set-val
;;      my-print-f
;;      ;; visualizations
;;      [[:svg
;;        ;; props
;;        {:width 600, :height 200
;;         :internal-coords [-10 -10 320 120]
;;         :y-flip? true}
;;        ;; legend
;;        [
;;         [component0 svg-follower]
;;         [component0' svg-follower]
;;         [component1 svg-follower]
;;         [component2 svg-follower]
;;         [component2' svg-follower]
;;         [component2a svg-follower]
;;         [component3 svg-follower]
;;         [component4 svg-follower]

;;         ]
;;        (svg-coord-system 300 100)]
;;       [:value (get-val :selected-result)]]

;;      ;; segments
;;      [[:h3 "Movement system: Path follower component, extra points"]

;;       "Create:"
;;       [VCV path (geom/line-segment [0 0] [100 100])]
;;       [VCV component (sys-movement/mk-path-follower "entity-id" "comp-key"
;;                                                     {:path-or-paths path
;;                                                      :driving? true
;;                                                      :extra-points {:ahead-one 20
;;                                                                     :ahead-two 30
;;                                                                     :behind -10}})]
;;       "Initialize:"
;;       [VCV [component0 event-topo-0] (ecs/handle-event :<dummy-world>
;;                                (ecs/mk-event component
;;                                              ::ecs/init
;;                                              10000)
;;                                component)]
;;       [VCV component0' (ecs/handle-event :<dummy-world>
;;                                          (ecs/mk-event component0
;;                                                        :update
;;                                                        10000)
;;                                          component0)]

;;       "After some time"
;;       [VCV component1 (ecs/handle-event :<dummy-world>
;;                                         (ecs/mk-event component0'
;;                                                       :update
;;                                                       12000)
;;                                         component0')]

;;       "At path end"
;;       [VCV [event-path-end-2 event-topo-2 component2] (ecs/handle-event
;;                                           :<dummy-world> event-topo-0 component1)]
;;       [VCV [event-topo-2' component2'] (ecs/handle-event
;;                                         :<dummy-world>
;;                                         (assoc
;;                                          (ecs/mk-event component2
;;                                                        ::sys-movement/add-path
;;                                                        (::eq/time event-path-end-2))
;;                                          :path (geom/line-segment [100 100] [200 0]))
;;                                         component2)]
;;       [VCV [_ component2a] (ecs/handle-event :<dummy-world> event-topo-2' component2')]

;;       [VCV component3 (ecs/handle-event :<dummy-world>
;;                                         (ecs/mk-event component2'
;;                                                       :update
;;                                                       19000)
;;                                         component2')]

;;       [VCV [event-path-end-4 component4] (ecs/handle-event :<dummy-world> event-topo-2' component3)]


;;       ])))

;; (defn card--movement--path-trailer [get-val set-val]
;;   (binding [gamebase.geometry/*with-xprint* true
;;             gamebase.ecs/*with-xprint* true]
;;     (su/card
;;      get-val
;;      set-val
;;      my-print-f
;;      ;; visualizations
;;      [[:svg
;;        ;; props
;;        {:width 600, :height 200
;;         :internal-coords [-10 -10 320 120]
;;         :y-flip? true}
;;        ;; legend
;;        [
;;         [follower0 svg-follower]
;;         [follower10 svg-follower]
;;         [follower11 svg-follower]
;;         [trailer11 svg-trailer]
;;         [follower12 svg-follower]
;;         [trailer12 svg-trailer]
;;         ]
;;        (svg-coord-system 300 100)]
;;       [:value (get-val :selected-result)]]

;;      ;; segments
;;      [[:h3 "Movement system: Path trailer component"]
;;       "Plan"
;;       [:ul
;;        [:li "Podpinamy sie do czegos (path-followera?), co potrafi powiedziec, gdzie jest, "
;;         "i na jakiej sciezce, w tym tile-x, tile-y chyba"]
;;        [:li "Moze nie bedziemy uzywac extra-points, tylko glownego punktu lokomotywy?"]
;;        [:li "No i zakladamy, ze ten punkt jest na tym samym kafelku co my, albo na sasiednim, "
;;         "dalszych odleglosci nie supportujemy."]
;;        [:li "Wtedy zawsze mozemy sobie zlozyc sciezke (1-2 kafelki), na ktorej jest punkt, "
;;         "ktory sledzimy, no i my, wg. odleglosci"]
;;        [:li "Tylko jeszcze schemat kontroli, aktualizacji, topology events, czy tylko update?"]]

;;       "Create and initialize world:"
;;       [VCV world (ecs/mk-world)]

;;       "Create and insert entity:"
;;       [VCV entity (ecs/mk-entity "entity-id" :dummy-type)]
;;       [VCV world1 (ecs/insert-object world entity)]

;;       "Create, initialize and insert follower:"
;;       [VCV path (geom/line-segment [0 0] [100 100])]
;;       [VCV follower (sys-movement/mk-path-follower "entity-id" "follower-key"
;;                                                    {:path-or-paths path
;;                                                     :path-start-length 50
;;                                                     :driving? true})]
;;       [VCV [follower0 event-topo-0] (ecs/handle-event world1
;;                                                        (ecs/mk-event follower
;;                                                                      ::ecs/init
;;                                                                      10000)
;;                                                        follower)]
;;       [VCV world2 (ecs/insert-object world1 follower0)]

;;       "Create and initialize trailer:"
;;       [VCV trailer (sys-movement/mk-path-trailer "entity-id" "trailer-key"
;;                                                  {:leader-entity-key "entity-id"
;;                                                   :leader-position-kvs (ecs/ck-kvs "follower-key" :position)
;;                                                   :leader-path-kvs (ecs/ck-kvs "follower-key" :path)})]
;;       [VCV trailer0 (ecs/handle-event world2
;;                                         (ecs/mk-event trailer
;;                                                       ::ecs/init
;;                                                       10000)
;;                                                       trailer)]

;;       [VCV world3 (ecs/insert-object world2 trailer0)]

;;       "Ok, everything initialized. Let's see..."
;;       [VCV world10 world3]
;;       [VCV entity10 (ecs/get-entity-by-key world10 "entity-id")]
;;       [VCV follower10 ((::ecs/components entity10) "follower-key")]
;;       [VCV trailer10 ((::ecs/components entity10) "trailer-key")]

;;       "Now for updates..."
;;       [VCV world11 (ecs/do-handle-event world10 (ecs/mk-event follower10 :update 10000))]
;;       [VCV entity11 (ecs/get-entity-by-key world11 "entity-id")]
;;       [VCV follower11 ((::ecs/components entity11) "follower-key")]
;;       [VCV trailer11 ((::ecs/components entity11) "trailer-key")]

;;       "And after some time..."
;;       [VCV world12 (ecs/do-handle-event world11 (ecs/mk-event follower11 :update 12000))]
;;       [VCV entity12 (ecs/get-entity-by-key world12 "entity-id")]
;;       [VCV follower12 ((::ecs/components entity12) "follower-key")]
;;       [VCV trailer12 ((::ecs/components entity12) "trailer-key")]


;;       ])))

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

(defn card--movement--path-follower2--basic [get-val set-val]
  (binding [gamebase.geometry/*with-xprint* true
            gamebase.ecs/*with-xprint* true]
    (su/card
     get-val
     set-val
     my-print-f
     ;; visualizations
     [[:svg
       ;; props
       {:width 600, :height 200
        :internal-coords [-10 -10 320 120]
        :y-flip? true}
       ;; legend
       [
        [component0 svg-follower]
        [component1 svg-follower]
        [component2 svg-follower]
        [component3 svg-follower]
        [component4 svg-follower]
        [component5 svg-follower]
        [component6 svg-follower]
        [component7 svg-follower]
        ;; [component8 svg-follower]
        ;; [component9 svg-follower]
        ;; [component10 svg-follower]
        ]
       (svg-coord-system 300 100)]
      [:value (get-val :selected-result)]]

     ;; segments
     [[:h3 "Movement system: Path follower 2 component, basic usage"]

      [:p "Here we will manually operate a component, without a world or entity, "
       "and also without an event queue (we will manually pass events if necessary)."]
      "Create:"
      [VCV path (geom/line-segment [0 0] [100 100])]
      [VCV component (sys-movement/mk-path-follower2 "entity-id" "comp-key"
                                                    {:path-or-paths path
                                                     :driving? true})]

      "Initialize:"
      [VCV component0 (ecs/handle-event :<dummy-world>
                                                  (ecs/mk-event component
                                                                ::ecs/init
                                                                :<dummy-time>)
                                                  component)]

      "After some time:"
      [VCV [component1] (advance-frames component0 50)]
      [VCV [component2] (advance-frames component1 50)]
      [VCV [component3] (advance-frames component2 100)]
      [VCV [component4] (advance-frames component3 100)]
      "Now we go past our path:"
      [VCV [component5 event5 event5'] (advance-frames component4 80)]
      "So we have an event to the owner, and in return they send as a new path:"
      [VCV [component6] (ecs/handle-event
                         :<dummy-world>
                         (assoc (ecs/mk-event component5 ::sys-movement/add-path (::eq/time event5))
                                :path (geom/line-segment [100 100] [200 0]))
                         component5)]
      "And let time pass:"
      [VCV [component7] (advance-frames component6 1)]

      ])))


(def cards
  [["Start card" #'start-card]
   ["Geometry: paths" #'card--geometry--paths]
   ;; ["Movement system: Path follower component, basic usage" #'card--movement--path-follower--basic]
   ;; ["Movement system: Path follower component, extra points" #'card--movement--path-follower--extra-points]
   ;; ["Movement system: Path trailer component" #'card--movement--path-trailer]
   ["Movement system: Path follower component 2, basic usage" #'card--movement--path-follower2--basic]
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

