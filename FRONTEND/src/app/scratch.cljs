(ns app.scratch
  (:require [rum.core :as rum]
            [gamebase.systems.movement :as sys-movement]
            [cljs.pprint :refer [pprint]])
  (:require-macros [app.scratch-util :refer [val-code-view thread-all]]))

(defonce state (atom {:on false}))

(defn toggle []
  (swap! state update-in [:on] not))

(defn print-code [code]
  (with-out-str
    (pprint code)))


(rum/defc component < rum/reactive []
  (let [{:keys [on]} (rum/react state)]
    (when on
      [:dev {:style {:position "absolute"
                     :width "100%"
                     :height "100%"
                     :padding 0
                     :margin 0
                     :top 0
                     :left 0
                     :background-color "#0d9ba5"}}
       [:p {:style {:color "white"}} "*SCRATCH*"]

       ;; example segment




       (thread-all
        [:h3 "Movement system: Path follower component"]
        [:p "seems to work for regular segments"]
        [VCV component (sys-movement/mk-path-follower "entity-id?" :comp-key {})]
        [:p "and for VCV's above"]
        [VCV component' component]
        )














])))
