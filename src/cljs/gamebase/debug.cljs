(ns gamebase.debug)

;;; This namespace holds debugging settings,
;;; which can be switched at runtime.


(defonce settings
  (atom
   {
    :canvas-control {:coordinate-system-marker true}


    }))
