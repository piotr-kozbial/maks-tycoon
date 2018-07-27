(ns app.core
  (:require [rum.core :as rum]

            [gamebase.resources :as resources]

            [gamebase.systems.drawing :as sys-drawing]
            [gamebase.systems.movement :as sys-move]

            [app.ecs.entities.locomotive :as locomotive]

            [gamebase.events :as events]
            [gamebase.event-queue :as eq]
            [gamebase.ecs :as ecs]
            [gamebase.virtual-timer :as vt]
            [gamebase.canvas-control :as canvas-control]
            [gamebase.layouts.sidebar-and-bottombar
             :as our-layout]

            [cljs.pprint :refer [pprint]]

            [gamebase.ecsu :as ecsu] ;; without this it doesn't get compiled and loaded for cljs either
            ))

;; App state

(defonce app-state
  (atom
   {:frame-rate "???"}))

;; Events are to be handled inside `draw`,
;; which *does not* mean that they rely
;; on a specific frame rate.

;; Event queue

(def event-queue {:root-atom app-state :ks [:event-queue]
                  :on-adding-to-empty (fn [])})
(defonce _eq_init (do (eq/initialize event-queue) nil))

;; Virtual timer

(def virtual-timer {:root-atom app-state :ks [:virtual-timer]})
(defonce _vt_init (do (vt/initialize virtual-timer) nil))

;; Event handling

(defn handle-all-pending-events [world]
  (let [t (vt/get-time virtual-timer)]
    (->> (repeatedly #(eq/pop-soonest-event-until event-queue t))
         (take-while identity) ;; not nil
         (reduce
          (fn [wrl e] (ecs/do-handle-event wrl e #(eq/put-event! event-queue %)))
          world))))

(defn handle-update [world]
  (ecs/do-handle-event
   world
   (ecs/mk-event (ecs/to-world) :update (vt/get-time virtual-timer))
   #(eq/put-event! event-queue %)))

(defn handle-events [world]
  (-> world
      (handle-all-pending-events)
      (handle-update)))

;; :update EVENT HANDLER ON WORLD LEVEL
;; This will pass the :update event through all systems.

(defmethod ecs/handle-event [:to-world :update]
  [world event _]
  (reduce
   (fn [wrl sys]
     (let [event' (ecs/retarget event sys)]
       (ecs/do-handle-event
        wrl
        event'
        #(eq/put-event! event-queue %))))
   world
   (ecs/all-systems world)))

;; Drawing

(defn draw [{:keys [min-x max-x min-y max-y] :as context}]
  (when-let [world (:world @app-state)]
    (let [world' (handle-events world)
          world'' (ecs/do-handle-event
                   world'
                   (assoc
                    (ecs/mk-event sys-drawing/to-system
                                  ::sys-drawing/draw (vt/get-time virtual-timer))
                    :context context)
                   #(eq/put-event! event-queue %))]
      (swap! app-state assoc :world world''))))

;; Initial world

(defn init-world []

  (swap! app-state assoc :world
         (-> (ecs/mk-world)
             (ecs/insert-object (sys-drawing/mk-system))
             (ecs/insert-object (sys-move/mk-system))
             (ecs/insert-object (locomotive/mk-entity :loc 1 0))))

  (eq/put-event!
   event-queue
   (ecs/mk-event sys-drawing/to-system
                 ::sys-drawing/clear-layers 0))

  (eq/put-event!
   event-queue
   (assoc
    (ecs/mk-event sys-drawing/to-system
                  ::sys-drawing/set-all-tmx 0)
    :tmx-fname "level1.tmx"))

  ;; Send ::ecs/init to all entities

  (doseq [c (ecs/all-components (:world @app-state))]
    (eq/put-event!
     event-queue
     (ecs/mk-event c ::ecs/init 0)))

  (doseq [e (ecs/all-entities (:world @app-state))]
    (eq/put-event!
     event-queue
     (ecs/mk-event e ::ecs/init 0))))

;; UI



(defn send-to-entity [entity-key msg & kvs]
  (let [{:keys [world]} @app-state
        entity (ecs/get-entity-by-key world entity-key)
        time (vt/get-time virtual-timer)
        event (apply assoc (ecs/mk-event (ecs/to entity) msg time) kvs)]
    (apply eq/put-event! event-queue event kvs)))

(rum/defc sidebar-component < rum/reactive []

  (let [{:keys [frame-rate world]} (rum/react app-state)
        loc (ecs/get-entity-by-key world :loc)
        driving? (:driving? (:move (::ecs/components loc)))]
    [:div
     [:div (str "FRAME RATE: " frame-rate)]
     [:div
      "scale: " (canvas-control/get-scale) " "
      [:a {:href "#" :on-click (fn [_] (canvas-control/set-scale 0.5))} "50%"] " "
      [:a {:href "#" :on-click (fn [_] (canvas-control/set-scale 1.0))} "100%"] " "
      [:a {:href "#" :on-click (fn [_] (canvas-control/set-scale 2.0))} "200%"]]
     [:br] [:br] [:br] [:br] [:br]
     [:div
      [:a {:href "#" :on-click (fn [_] (send-to-entity :loc ::locomotive/drive))}
       (if driving? "[DRIVE]" "DRIVE")]
      [:span " - "]
      [:a {:href "#" :on-click (fn [_] (send-to-entity :loc ::locomotive/stop))}
       (if driving? "STOP" "[STOP]")]]


     ]))

(rum/defc bottombar-component < rum/reactive []
  [:div
   [:pre
    (with-out-str (pprint (get-in  (rum/react app-state) [:world :gamebase.ecs/entities])))] 
])

(rum/defc main-component < rum/reactive []
  (rum/react app-state)
  (our-layout/mk-html
   ;; sidebar
   (sidebar-component)
   ;; bottom bar
   (bottombar-component)))

(defn render []
  (rum/mount (main-component)
             (. js/document (getElementById "app"))))

;; Resources to be loaded

(def resource-fnames
  ["background.png"
   "tiles.png"
   "loco1.png"
   "loco1-debug.png"
   "carriage1.png"
   "level1.tmx"])

;; Main function

(defn main [& _]

  (.log js/console "-----> main")

  (js/setInterval (fn []
                    (let [rate (js/frameRate)
                          rate-s (/ (int (* rate 10)) 10)]
                      (swap! app-state assoc :frame-rate rate-s)))
                  1000)

  (doseq [fname resource-fnames]
    (resources/add-resource fname))

  (resources/set-on-all-loaded
   #(do
      (.log js/console "on all loaded")
      (when (every? resources/get-resource resource-fnames)
        (.log js/console "mozna odpalac")
        (init-world))))

  (our-layout/initialize
   app-state [:layout]
   {:bottom-bar-height 150
    :side-bar-width 200
    :after-canvas-resize
    #(;;.log js/console "ACR callback"
      )})

  ;; TODO

  ;; to zle
  ;; bo nasze draw teraz zawiera obsluge kolejki zdarzen,
  ;; wiec wyjdzie, ze jest
  ;; 1. canvas/clear itd.
  ;; 2. oblsuga kolejki
  ;; 3. canvas/dalsze rysowanie

  ;; I w ogole jakos to glupio.
  ;; Moze zrobic globalna podpinke do draw,
  ;; jakos tak aspektowo czy cos?

  ;; Ale moze teraz na poczatek zostawic, zeby pojsc naprzod?
  ;; TAK

  (canvas-control/initialize
   {:state-atom app-state
    :state-kvs [:canvas-control]
    :draw #'draw
    :get-canvas-size our-layout/get-canvas-size ;; TODO
    ;; :get-world-size #(vector 2000 1000) ;; TODO
    })

  (vt/resume virtual-timer))

