(ns app.server-communication
  (:refer-clojure :exclude [get])
  (:require [cljs.reader :refer [read-string]]
            [ajax.core :as ajax]
            [app.state :as st]
            [app.utils.jscript :refer [pr-json]]
            [app.utils.jscript :as j]
            [cljs.pprint :refer [pprint]])


  )

(defn generic-error-handler [x]
  (.log js/console (str "ERROR in ajax to server: " x)))

(defn post [path body handler & [error-handler]]

  (ajax/POST
   path
   {:body (pr-str body) ;;(j/pr-json body)
    ;; (ajax/text-request-format)
    ;;:response-format :json
    :headers {"Content-Type" "text/plain; charset=UTF-8"}
    :keywords? true
    ;; :headers {"Access-Control-Allow-Origin" "*"}
    :handler (fn [ret]
               (handler ret))
    :error-handler (or error-handler generic-error-handler)}))



(defn save-game [handler & [error-handler]]
  (post "/"
        {:request :save-game
         :id 1
         :name "???"
         :state @st/app-state}
        handler
        error-handler))

(defn save-game-as [name handler & [error-handler]]
  (post "/"
        {:request :save-game
         :name name
         :state @st/app-state}
        handler
        error-handler))

