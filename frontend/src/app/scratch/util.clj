(ns app.scratch.util)

;; NOTE !!!
;;
;; Strasznie mylace to jest.
;; Tutaj mamy (visualization), oraz w cljs mamy (visualization).
;; Te tutaj sa wrapperami na tamte.
;; Tutaj jest tez nietrywialny :default, wiec nie ma osobnych wrapperow na wszystkie z cljs.

(defmulti visualization (fn [ctx type & args] type))

(defmethod visualization :default
  [ctx type & args]
  [(apply list 'app.scratch.util/visualization ctx type args)
   nil])

(defmethod visualization :svg
  [{:keys [context-symbol get-val] :as ctx} _ props ids-and-fns & background]
  [(let [ids-and-values
          (->> ids-and-fns
               (map (fn [[id f]] [(list 'quote id) id f
                                 (list '=
                                       (list 'quote id)
                                       (list get-val :selected-result))]))
               (apply vector))]
      (apply list 'app.scratch.util/visualization ctx :svg props
        ids-and-values
        background))
   nil])

(defmethod visualization :value
  [{:keys [context-symbol] :as ctx} _ id]
  [(list 'app.scratch.util/visualization ctx :value id (list context-symbol id))
   nil])

(defmethod visualization :world
  [{:keys [context-symbol] :as ctx} _ id]
  [(list 'app.scratch.util/visualization ctx :world id (list context-symbol id))
   (list 'fn []
      '(.log js/console "W-R")
      (list 'app.scratch.util/visualization-world-repaint ctx id (list context-symbol id)))])


(defmacro card [get-val set-val print-f visuals segments]
  (let [context-symbol (gensym "context")
        ex (gensym "ex")
        bindings-map-symbol (gensym "bindings-map")
        bindings
        (concat
         (->> segments
              (filter #(= (first %) 'VCV))
              (mapcat
               (fn [[_ id expr]]
                 [id (list 'try expr (list 'catch :default ex [::error ex]))])))
         [context-symbol
          (->> segments
               (filter #(= (first %) 'VCV))
               (mapcat
                (fn [[_ id expr]]
                  (if (vector? id)
                    (->> id
                         (mapcat #(vector(list 'quote %) %)))
                    [(list 'quote id) id])))
               (apply hash-map))])
        bindings-map (apply hash-map bindings)

        repaint-fns
        (->> visuals
             (map #(apply visualization {:context-symbol context-symbol
                                         :get-val get-val
                                         :set-val set-val
                                         :print-f print-f} %))
             (map second)
             (remove nil?)
             (apply list))

        repaint-fn (list 'fn [] (apply list 'do (map #(list %) repaint-fns)))

        body
        (->> segments
             (map
              (fn [segment]
                (if (= (first segment) 'VCV)
                  (let [[_ id expr] segment]
                    [:p {:style {:font-family "monospace"
                                 :background-color "black" :color "#62e23f"}}
                     (list 'app.scratch.util/code-result get-val set-val repaint-fn (list 'quote id)
                           (list bindings-map-symbol id))
                     [:span {:style {:white-space "pre"}} "   "]
                     [:span {:style {:font-family "monospace"
                                     :font-size "120%"}}
                      (list print-f (list 'quote expr))]])
                  segment)))
             (into [:div {:style {:height "100%"
                                  :width "100%"
                                 :background-color "#BBB"
                                 :overflow "auto"}}] ))
        vbody
        (into [:div
               {:style {:height "100%"
                        :width "100%"
                        :background-color "#BBB"
                        :overflow "auto"}} ]
              (->> visuals
                   (map #(vector
                          (first
                           (apply visualization {:context-symbol context-symbol
                                                 :get-val get-val
                                                 :set-val set-val
                                                 :print-f print-f} %))
                          [:hr]))))]

    (list 'let (into [] bindings)
          (list 'let [bindings-map-symbol bindings-map]
                [:table {:style {:height "100%" :width "100%"
                                 :table-layout "fixed"}}
                 [:tbody
                  [:tr
                   [:td body]
                   [:td vbody]]]]))))

;; (defmacro VIS [id visual-fn]
;;   `(~visual-fn ~id


;;         true))
