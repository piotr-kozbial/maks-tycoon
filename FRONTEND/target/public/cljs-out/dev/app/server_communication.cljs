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



(defn save-game [id name handler & [error-handler]]
  (post "/"
        {:request :save-game
         :id id
         :name name
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

(defn list-games [handler & [error-handler]]
  (post "/"
        {:request :list-games}
        (fn [ret] (handler (read-string ret)))
        error-handler))

(defn load-game [id handler & [error-handler]]

  (post "/"
        {:request :load-game
         :id id}
        (fn [ret] (handler (read-string ret)        ; (read-string ret)
                          ))
        error-handler)

  )


