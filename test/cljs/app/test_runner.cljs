(ns app.test-runner
  (:require
   [doo.runner :refer-macros [doo-tests]]
   [app.core-test]
   [app.common-test]))

(enable-console-print!)

(doo-tests 'app.core-test
           'app.common-test)
