(ns app.xprint.core
  (:require [clojure.string :as str]))

(declare do-xprint)

(defn xprint
  "Returns a sequence of lines, represented according to printer.
  The processing of the input value depends on parser.
  Options should be a map of configuration parameters understood
  by parser and/or printer. Unknown keys must be ignored, namespaced
  keywords should be used to avoid name clashes."
  [parser printer value & [options]]
  [
   ;;(pr-str (meta value)) [:br]
   (do-xprint
    {:parser parser
     :printer printer
     :options options
     :level 0
     :indent ""}
    value)])

;; (defn do-xprint
;;   [{:as context :keys [level]} value]

;;   (let [xprint' (partial do-xprint (assoc context :level (inc level)))]

;;     (cond

;;       (symbol? value) (str value)

;;       (keyword?)

;;       (list? value) (apply str
;;                       (concat
;;                        ["("]
;;                        (str/join " " (map xprint' value))
;;                        [")"]))

;;       (vector? value) (apply str
;;                         (concat
;;                          ["["]
;;                          (str/join " " (map xprint' value))
;;                          ["]"]))

;;       (map? value)
;;       (apply str
;;         (concat
;;          ["{"]
;;          (str/join
;;           (if (= 0 level) "\n" " ")
;;           (concat
;;            (when-let [[k v] (first value)]
;;              [(str (xprint' k) " " (xprint' v))])
;;            (map #(str (when (= 0 level) " ") (xprint' (first %)) " " (xprint' (second %))) (rest value))))
;;          ["}"]))

;;       :else (pr-str value)))

;;   )

(defn map-to-ordered-kv-pairs [m key-order]
  (let [key-order-map (apply hash-map (mapcat vector (reverse key-order) (iterate dec -1)))
        key-fn (fn [k] (or (key-order-map k) 0))]
    (sort-by (comp key-fn first) m)))

(comment
  (def key-order [:a :b :c])
  (def key-fn (apply hash-map (mapcat vectotur key-order (iterate inc 0))))
  (def m [[:b 3] [:c 4] [:a 2]])
  (sort-by (comp key-fn first) m)
  )

(defn do-xprint
  [{:as context :keys [level]} value]

  (let [xprint' (partial do-xprint (assoc context :level (inc level)))
        span (fn [style & body] (apply vector :span
                                 {:style (assoc style :font-family "monospace")}
                                 body))]

    (cond

      ;; (symbol? value) (str value)

      (keyword? value) (span {:color "#e67fff"
                              } (pr-str value))

      ;; (list? value) (apply str
      ;;                 (concat
      ;;                  ["("]
      ;;                  (str/join " " (map xprint' value))
      ;;                  [")"]))

      (vector? value)
      (span
       {}
       (concat
        [(span {:color "white"} "[")]
        (when-let [v (first value)]
          [(xprint' v)])
        (map #(vector (if (= 0 level) "\n " " ")
                      (xprint' %))
             (rest value))
        [(span {:color "white"} "]")]))



      (map? value)
      (let [key-order (when-let [m (meta value)] (::key-order m))
            value' (map-to-ordered-kv-pairs value key-order)]
        (span
         {}
         (concat
          [(span {:color "white"} "{")]
          (when-let [[k v] (first value')]
            [(xprint' k) " " (xprint' v)])
          ;; (when (= 0 level) [[:br]])
          (mapcat #(vector (if (= 0 level) "\n " " ")
                           (xprint' (first %))
                           " "
                           (xprint' (second %)))
                  (rest value'))
          [(span {:color "white"} "}")])))

      :else (pr-str value)))

  )

