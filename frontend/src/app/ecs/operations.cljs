(ns app.ecs.operations
  (:require [gamebase-ecs.core :as ecs]))


;; For entities.
;; If defined, must return the central point defined as:
;; [path-kvs, length-on-path-kvs]
(defmulti get-central-point-kvs ::ecs/type)
