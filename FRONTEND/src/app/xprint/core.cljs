(ns app.xprint.core
  (:require [clojure.string :as str]
            [clojure.set :as set]))

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
  (concat
   (->> (for [k key-order]
          (cond
            (and (vector? k) (= (first k) ::comment))
            k
            :else
            (when (contains? m k)
              [k (m k)])))
        (remove nil?))
   (map
    #(vector % (m %))
    (set/difference (apply hash-set (keys m))
                    (apply hash-set key-order)))))

(comment
  (def key-order [:a :b :c])
  (def key-fn (apply hash-map (mapcat vectotur key-order (iterate inc 0))))
  (def m [[:b 3] [:c 4] [:a 2]])
  (sort-by (comp key-fn first) m)
  )


(defn span [style & body]
  (apply vector :span
    {:style (assoc style :font-family "monospace")}
    body))


(defn xprint-map [value xprint' {:keys [level]}]
  (let [key-order (when-let [m (meta value)] (::key-order m))
        value' (map-to-ordered-kv-pairs value key-order)
        print-kv
        (fn [[k v]]
          (if (= k ::comment)
            (span {:color "#777"} (str ";; " v))

            
            [(xprint' k) " " (xprint' v)]))]
    (span
     {}
     (concat
      [(span {:color "white"} "{")]
      (when-not (empty? value')
        (concat
         (print-kv  (first value'))
         (mapcat #(vector (if (= 0 level) "\n " " ")
                          (print-kv %))
                 (rest value'))))
      [(span {:color "white"} "}")]))))


(defn do-xprint
  [{:as context :keys [level]} value]

  (let [xprint' (partial do-xprint (assoc context :level (inc level)))]

    (cond

      (keyword? value) (span {:color "#e67fff"
                              } (pr-str value))

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



      (map? value) (xprint-map value xprint' context)
 

      :else (pr-str value)))

  )

