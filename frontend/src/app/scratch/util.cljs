(ns app.scratch.util
  (:require [clojure.string :as str]
            [gamebase.systems.drawing :as sys-drawing]))

(def code-result-style
  {:font-family "monospace"
   :color "white"
   :font-size "120%" :font-weight "bold"
   :cursor "pointer"})

(defn code-result [get-val set-val repaint-fn result-edn result-val & [error?]]
  (if (vector? result-edn)
    (concat
     [[:span {:style code-result-style} "["]]
     (->> result-edn
          (map (partial code-result get-val set-val repaint-fn))
          (interpose " "))
     [[:span {:style code-result-style} "]"]])
    (if (and (vector? result-val) (= (first result-val) :app.scratch.util/error))
      (code-result get-val set-val repaint-fn result-edn (second result-val) true)
      [:span
       {:style {:font-family "monospace"
                :color (if error?
                         "red"
                         (if (= (get-val :selected-result) result-edn)
                           "yellow"
                           "white"))
                :border (when (= (get-val :selected-result) result-edn)
                          "1px solid yellow")
                :font-size "120%" :font-weight "bold"
                :cursor "pointer"}
        :on-click (fn [_] (set-val :selected-result result-edn)
                    (when repaint-fn (repaint-fn))
                    )}

       (str result-edn)])))



(defmulti visualization (fn [ctx type & args] type))

(defmethod visualization :svg
  [{:keys [set-val print-f]}
   _
   {:keys [width height
             internal-coords
           y-flip?]}
   ids-and-values-and-fns-and-selected
   & body]
  [(let [props0 {:xmlns "http://www.w3.org/2000/svg"
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
                       ]]])
   #()])

(defmethod visualization :value
  [{:keys [print-f]} _ id value]
  [[:div {:style {:background-color "black" :overflow "auto"}}
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
   #()
   ]
  )

(defmethod visualization :canvas
  [ctx _]
  [[:div
    [:h3 "CANVAS VISUALIZATION"]
    [:canvas {:height 100 :width 200}]]
   #(.log js/console "repaint called on :canvas visual")])


(defn visualization-world-repaint [ctx id value]
  (let [canvas (.getElementById js/document "visualization-canvas")
        canvas-context (.getContext canvas "2d")
        context {:min-x 0
                 :max-x 200
                 :min-y 0
                 :max-y 100
                 :canvas-context canvas-context}

        ]
    (.log js/console (str "world repaint " (pr-str id)))
    (.log js/console canvas)
    (set! (.-imageSmoothingEnabled canvas-context) false)
    (.save canvas-context)
    (.scale canvas-context 2.0 2.0)
    (sys-drawing/draw-all value context)
    (.restore canvas-context)

    ))

(defmethod visualization :world
  [ctx _ id value]
  [[:div
    [:h3 "WORLD VISUALIZATION " (pr-str id)]
    [:canvas {:id "visualization-canvas" :height 400 :width 400}]]
   #(.log js/console "repaint called on :world visual")]
  )

(defn repaint-fn [visuals]

  (.log js/console "nowe repaint-fn")

  ;; (doseq [f (->> visuals
  ;;                (map #(apply visualization arg %))
  ;;                (map second))]
  ;;   (when f (f)))

  )


