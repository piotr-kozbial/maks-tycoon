(defproject app "0.1.0-SNAPSHOT"

  :min-lein-version "2.7.1"

  :dependencies [[org.clojure/clojure "1.9.0"]
                 [org.clojure/clojurescript "1.10.339"]
                 [com.rpl/specter "1.1.2"]

                 [devcards "0.2.6"]

                 [cider/piggieback "0.3.9"]
                 [rum "0.11.2"]
                 ;;[org.clojure/data.xml "0.2.0-alpha5"]
                 [org.clojure/data.xml "0-UE-DEVELOPMENT"]

                 [prismatic/schema "1.1.9"]
                 [instar "1.0.10" :exclusions [org.clojure/clojure]]

                 [cljs-ajax "0.7.4"]
                 [gamebase "0.1.1-SNAPSHOT"]

                 ]

  :plugins [[lein-figwheel "0.5.9"]
            [lein-cljsbuild "1.1.5" :exclusions [org.clojure/clojure]]]

  :repl-options {:nrepl-middleware [cider.piggieback/wrap-cljs-repl]}

  :source-paths ["src"]

  :aliases {"fig"       ["trampoline" "run" "-m" "figwheel.main"]
            "fig:build" ["trampoline" "run" "-m" "figwheel.main" "-b" "dev" "-r"]
            "fig:min"   ["run" "-m" "figwheel.main" "-O" "advanced" "-bo" "dev"]
            "fig:myprod"   ["run" "-m" "figwheel.main" "-bo" "prod"]
            "fig:test"  ["run" "-m" "figwheel.main" "-co" "test.cljs.edn" "-m" app.test-runner]}

  :cljsbuild {
              :builds [

                       {:id "dev"
                        :source-paths ["src"]
                        :figwheel true
                        :compiler {:main       "app.core"
                                   :asset-path "js/compiled/out"
                                   :output-to  "resources/public/js/compiled/app.js"
                                   :output-dir "resources/public/js/compiled/out"
                                   :source-map-timestamp true }}



                       ]
              }



  :profiles {:dev {:dependencies [[com.bhauman/figwheel-main "0.1.9"]
                                  [com.bhauman/rebel-readline-cljs "0.1.4"]]
                   :resource-paths ["target"]
                   ;; need to add the compliled assets to the :clean-targets
                   :cleadevcardsn-targets ^{:protect false} ["target"]}})

