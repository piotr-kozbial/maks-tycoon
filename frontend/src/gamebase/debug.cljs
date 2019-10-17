(ns gamebase.debug)

;;; This namespace holds debugging settings,
;;; which can be switched at runtime.


(defonce settings
  (atom
   {
    :enhanced-canvas {:coordinate-system-marker true}

    }))

(comment

  ;; switch coord system on
  (swap! gamebase.debug/settings assoc-in [:enhanced-canvas :coordinate-system-marker] true)

  ;; switch coord system off
  (swap! gamebase.debug/settings assoc-in [:enhanced-canvas :coordinate-system-marker] false)



  )
