(defproject app "0.1.0-SNAPSHOT"

  :min-lein-version "2.7.1"

  :dependencies [[org.clojure/clojure "1.9.0"]
                 [org.clojure/clojurescript "1.10.339"]
                 [com.rpl/specter "1.1.2"]

                 [devcards "0.2.6"]

                 [cider/piggieback "0.3.9"]
                 [rum "0.11.2"]
                 [org.clojure/data.xml "0.2.0-alpha6"]
                 ;; [org.clojure/data.xml "0-UE-DEVELOPMENT"]

                 [prismatic/schema "1.1.9"]
                 [instar "1.0.10" :exclusions [org.clojure/clojure]]

                 [cljs-ajax "0.7.4"]

                 [gamebase "0.1.1-SNAPSHOT"]
                 [gamebase-ecs "0.1.0-SNAPSHOT"]
                 [gamebase-enhanced-canvas "0.1.0-SNAPSHOT"]
                 [gamebase-layouts "0.1.0-SNAPSHOT"]
                 [gamebase-resources "0.1.0-SNAPSHOT"]
                 [pkozbial.xprint "0.1.0-SNAPSHOT"]

                 ]

  :repl-options {:nrepl-middleware [cider.piggieback/wrap-cljs-repl]}

  :source-paths ["src"]

  :aliases {"fig"       ["trampoline" "run" "-m" "figwheel.main"]
            "fig:build" ["trampoline" "run" "-m" "figwheel.main" "-b" "dev" "-r"]
            "fig:min"   ["run" "-m" "figwheel.main" "-O" "advanced" "-bo" "dev"]
            "fig:myprod"   ["run" "-m" "figwheel.main" "-bo" "prod"]}

  :profiles {:dev {:dependencies [[com.bhauman/figwheel-main "0.1.9"]
                                  [com.bhauman/rebel-readline-cljs "0.1.4"]]
                   :main app.core
                   :resource-paths ["target"]
                   ;; need to add the compliled assets to the :clean-targets
                   :clean-targets ^{:protect false} ["target"]}})

