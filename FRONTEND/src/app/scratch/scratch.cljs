(ns app.scratch.scratch
  (:require [rum.core :as rum]
            [gamebase.systems.movement :as sys-movement]
            [gamebase.ecs :as ecs]
            [gamebase.geometry :as geom]
            [cljs.pprint :refer [pprint]]
            [gamebase.event-queue :as eq]
            [app.scratch.util :as su]
            [app.xprint.core :refer [xprint]


             ])
  (:require-macros [app.scratch.util :refer [card VIS]]))

;;;;;;;;; HELPERS :;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn svg-coord-system []
  [;; background
   [:rect {:x -10 :y -10 :width 120 :height 120 :fill "#d5f2e8"}]
   ;; X axis
   [:line {:x1 -10 :y1 0 :x2 110 :y2 0 :stroke "black" :stroke-width 1}]
   ;; Y axis
   [:line {:x1 0 :y1 -10 :x2 0 :y2 110 :stroke "black" :stroke-width 1}]
   ;; Y=100
   [:line {:x1 -10 :y1 100 :x2 110 :y2 100 :stroke "black" :stroke-width 1 :stroke-dasharray "5,5"}]
   ;; X=100
   [:line {:x1 100 :y1 -10 :x2 100 :y2 110 :stroke "black" :stroke-width 1 :stroke-dasharray "5,5"}]])


(defn svg-follower [{:as component :keys [position]} & [highlight?]]
  (when position
    (let [[x y] position]
      [[:circle {:cx x :cy y :r 3 :stroke "blue" :fill "blue"}]
       (when highlight?
         [:circle {:cx x :cy y :r 6 :stroke "#bf28c1" :fill "none"}])])))

(defn svg-path [path & [highlight?]]
  (case (:path-type path)
    :line-segment (let [{:keys [p1 p2]} path
                        [x1 y1] p1
                        [x2 y2] p2]
                    [:line {:x1 x1 :y1 y1 :x2 x2 :y2 y2 :stroke "black" :stroke-width 1}])
    []))

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

(defn card--movement--path-follower [get-val set-val]
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
       [[path svg-path]
        [component2 svg-follower]
        [component3 svg-follower]
        [component4 svg-follower]]
       ;; [[:br]
       ;;  "component2" [:br]
       ;;  "z" [:br]
       ;;  "component3" [:br]]
       ;; fixed (background) drawing
       (svg-coord-system)]
      [:value (get-val :selected-result)]

      ]

     ;; segments
     [[:h3 "Movement system: Path follower component"]
      [:p "Here we will manually operate a component, without a world or entity, "
       "and also without an event queue (we will manually pass events if necessary)."]
      "Create:"
      [VCV component (sys-movement/mk-path-follower "entity-id" "comp-key" {})]
      ;;(svg-follower component)
      "Initialize:"
      [VCV _ (ecs/handle-event :<dummy-world>
                               (ecs/mk-event component
                                             ::ecs/init
                                             10000)
                               component)]

      "The above returns [], i.e. no object changes and no events. "
      "This is because the path follower does nothing until it gets a path; "
      "doesn't even need to know the time of creation."
      [:br] [:br]
      "Setting path:"
      [VCV path (geom/line-segment [0 0] [100 100])]
      [VCV [component2 event1]
       (ecs/handle-event :<dummy-world>
                         (assoc
                          (ecs/mk-event component
                                        ::sys-movement/set-path
                                        10005)
                          :path path)
                         component)]
      "The above modifies the component and also wants to schedule an :update event "
      "at the time it should reach the end of the path. This time is calculated now "
      "and saved also in the component. "
      "On the other hand, there is no position calculated yet, although it could be; "
      "but it is postponed until an :update event happens."
      [:br] [:br]

      "Update event after some time:"
      [VCV [_ component3] (ecs/handle-event :<dummy-world>
                                            (ecs/mk-event component2
                                                          :update
                                                          11000)
                                            component2)]
      "Update at path end. "
      "This event would normally be yielded from the event queue "
      "at the appropriate time (corresponding to the game time specified in the event). "
      "Here we pass it manually:"
      [VCV [event-to-entity component4] (ecs/handle-event :<dummy-world> event1 component3)]])))

(def cards
  [["Start card" #'start-card]
   ["Movement system: Path follower component" #'card--movement--path-follower]])

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

