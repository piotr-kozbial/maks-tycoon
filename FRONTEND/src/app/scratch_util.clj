(ns app.scratch-util)

;; (defmacro )


(defmacro val-code [expr]
  `[~expr (quote ~expr)])


(defmacro val-code-view [id expr]
  `[~expr
    (quote ~expr)

    [:table {:style {:padding 0}}
     [:tr
      [:td {:style {:border "solid 1px"
                    :padding "5px"}} (str (quote ~id))]
      [:td
       {:style {:border "solid 1px" :padding "5px"}}
       [:pre
        (app.scratch/print-code (quote ~expr))]

       ]
      [:td
       {:style {:border "solid 1px" :padding "5px"}}
       [:pre
        (app.scratch/print-code ~expr)]]]]])


(defmacro thread-all [& segments]
  (let [bindings
        (->> segments
             (filter #(= (first %) 'VCV))
             (mapcat
              (fn [[_ id expr]]
                [id expr])))
        body
        (->> segments
             (map
              (fn [segment]
                (if (= (first segment) 'VCV)
                  (let [[_ id expr] segment]
                    [:table {:style {:padding 0}}
                     [:tr
                      [:td {:style {:border "solid 1px"
                                    :padding "5px"}} (str id)]
                      [:td
                       {:style {:border "solid 1px" :padding "5px"}}
                       [:pre
                        (list 'app.scratch/print-code (list 'quote expr))]

                       ]
                      [:td
                       {:style {:border "solid 1px" :padding "5px"}}
                       [:pre
                        (list 'app.scratch/print-code expr)]]]])
                  segment)))
             (into [:div]))]

    (list
     'let
     (into [] bindings)

     

     body)

    ))
