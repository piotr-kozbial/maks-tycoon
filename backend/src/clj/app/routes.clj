(ns app.routes
  (:require [clojure.java.io :as io]
            [compojure.core :refer [ANY GET PUT POST
                                    DELETE routes]]
            [compojure.route :refer [resources]]
            [ring.util.response :refer [response]]

            [gamebase.local-redis-saveload-server]
            [gamebase.root-page]
            [gamebase-layouts.sidebar-and-bottombar
             :as our-layout]))

;; (defn home-routes [endpoint]
;;   (routes
;;    (GET "/" _
;;      (-> "public/index.html"
;;          io/resource
;;          io/input-stream
;;          response
;;          (assoc :headers {"Content-Type" "text/html; charset=utf-8"})))
;;    (resources "/")))

;; (def my-html
;;   (our-layout/mk-html))

(def config
  {:host "127.0.0.1"
   :http-port 10555
   :root-page #(slurp "public/index.html")
   ;; TODO - jak to ustawic?
   :dev? true
   :files-root "public"
   })

(defn home-routes [_]
  (gamebase.local-redis-saveload-server/build-handler config "maks-tycoon"))



