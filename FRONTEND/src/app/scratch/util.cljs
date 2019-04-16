(ns app.scratch.util
  (:require [clojure.string :as str]))

(def code-result-style
  {:font-family "monospace"
   :color "white"
   :font-size "120%" :font-weight "bold"
   :cursor "pointer"})

(defn code-result [get-val set-val result-edn]
  (if (vector? result-edn)
    (concat
     [[:span {:style code-result-style} "["]]
     (->> result-edn
          (map (partial code-result get-val set-val))
          (interpose " "))
     [[:span {:style code-result-style} "]"]])
    [:span
     {:style {:font-family "monospace"
              :color (if (= (get-val :selected-result) result-edn)
                       "yellow"
                       "white")
              :border (when (= (get-val :selected-result) result-edn)
                        "1px solid yellow")
              :font-size "120%" :font-weight "bold"
              :cursor "pointer"}
      :on-click (fn [_] (set-val :selected-result result-edn))}

     (str result-edn)]))



(defmulti visualization (fn [ctx type & args] type))

(defmethod visualization :svg
  [{:keys [set-val print-f]}
   _
   {:keys [width height
             internal-coords
           y-flip?]}
   ids-and-values-and-fns-and-selected
   & body]
  (let [props0 {:xmlns "http://www.w3.org/2000/svg"
                :width width
                :height height
                :view-box (str/join " " internal-coords)}
        props (if y-flip?
                (assoc props0 :transform "scale(1,-1)")
                props0)
        body' (concat body
                      (for [[_ value f selected?] ids-and-values-and-fns-and-selected]
                        (f value selected?)))
        legend [:div
                {:style (assoc
                         code-result-style
                         :background-color "black")}

                (->> ids-and-values-and-fns-and-selected
                     (map (fn [[id _ _ selected?]]
                            [:span {:style {:font-size "90%"
                                            :color (if selected? "yellow" "white")
                                            :border (when selected? "1px solid yellow")}
                                    :on-click (fn [_] (set-val :selected-result id))
                                    }
                             (print-f id)]))
                     (interpose [:br]))]]
    [:table [:tbody [:tr
                     [:td (apply vector :svg props body')]
                     [:td legend]
                     ]]]))

(defmethod visualization :value
  [{:keys [print-f]} _ id value]
  [:div {:style {:background-color "black" :overflow "auto"}}
   [:span
    {:style {:font-family "monospace"
             :color "yellow"
             :border "1px solid yellow"
             :font-size "120%" :font-weight "bold"
             :cursor "pointer"}}
    (print-f id)]
   [:br]
   [:div {:style {:color "#bf28c1" :font-size "120%"
                   :white-space "pre"
                  }}
    (print-f value)
    ;;(with-out-str (cljs.pprint/pprint value))
    ]

   ]
  )
