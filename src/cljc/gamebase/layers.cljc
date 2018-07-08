;;;;; STATUS: TODO ;;;;;

(ns gamebase.layers)

;; Jeszcze kwestia efektow:
;; - wybuchy, dymki itp. to by mogly byc specjalne sprite'y
;; - a np. cos takiego, ze deszcz pada, albo chmurki plywaja na samym wierzchu - nic z nimi
;; sie nie robi, tylko utrudniaja gre; zabawne? moze. W takim razie co dla nich zrobic?
;; Jesli plywaja chmurki, to zwykle sprite'y, tylko musi byc dla nich jeszcze jeden layer.

;; Natomiast sprite'y gdzie? Czy na wlasnych layerach, czy po prostu na tych powyzej, z zalozeniem,
;; ze sprite jest zawsze na wierchu danego layera? Chyba to ostatni prostsze.
nil

;;; TODO

(defn get-all-image-file-names [tmx-struct]
  (->> tmx-struct
       (:tilesets)
       (vals)
       (map :image-file-name)))

(examples
 (get-all-image-file-names (parse-tmx example-doc)) => '("background.png" "tiles.png"))

;; - jakos wyliczenie z numerka typu 401, pary typu ["tiles.png" x (kolumna) y (wiers)]
;; - ale to chyba trzeba najpierw jakos przetworzyc?
;; - a jak przetworzyc, zeby bylo wygodnie malowac?
;; - a jak przetworzyc, zeby w grze budowac?
;; - a jak zapisywac do redisa?
nil

;; ;;; simplify tilesets:
;; "background" {:name "background"
;;               :id-offset 401
;;               :tile-width 32
;;               :tile-height 32
;;               :tile-count 40
;;               :tile-columns 10
;;               :image-file-name "background.png"
;;               :image-file-width 320
;;               :image-file-height 128}

;; -->

;; {:id-offset 401
;;  :tile-count 40
;;  :image-file-name "background.png"
;;  :tile-columns 10}

;;; NOTE 1. tile-width i tile-height maja byc identyczne dla wszystkich layerow, dlatego tu nie musi
;;; NOTE 2. nie potrzebujemy w ogole nazwy tileseta, wiec zamiast mapy tilesetow bedzie
;;;         lista tilesetow, posortowana po id-offset

;;; simplify layers:
;;
;; "background" {:name "background"
;;               :width 5
;;               :height 3
;;               :id-list
;;               (401 401 401 401 401 401 401 401 401 401 401 401 401 401 401)}
;;
;;; -->
;;
;; "background" [[401 401 401 401 401]
;;               [401 401 401 401 401]
;;               [401 401 401 401 401]]

;;; NOTE 3. Layery tez mozemy dac na liscie chyba, zeby bylo wiadomo, w jakiej kolejnosci
;;;         renderowac
;;; NOTE 4. Trzeba na zapas pomyslec o wiaduktach i tunelach.
;;;         - generalnie sama lokomotywa bedzie musiala przeskakiwac z layera na layer, np.:
;;;
;;;                    (1)        (2)
;;;  ----------------------------------------
;;;  above                        loc
;;;  ----------------------------------------
;;;  ground            loc
;;;  ----------------------------------------
;;;
;;; Ad 1. to znaczy, ze renderujemy loc zaraz po ground, ale przed above
;;; Ad 2. to znaczy, ze renderujemy loc zaraz po above
;;;
;;; Jak to w samych torach zapisac?
;;;
;;; Moze tak, ze tory beda mogly byc na obu layerach (ground i above),
;;; opis trackow tak jak bylo zawsze. Ale teraz jak pociag dojezdza do krawedzi tile'a,
;;; to moze zobaczyc, ze na layerze ground nie ma dalej torow. Wowczas zaglada na layer above,
;;; i jesli tam sa, to na nie wjezdza. Co to znaczy wjezdza? No po prostu zapisuje sobie,
;;; ze teraz jest na poziomie above, i z tego poziomu pobiera path dla odpopwiedniego toru,
;;; natomiast funkcja (draw) jak zobaczy, ze jest na poziomie above, to go wyrenderuje pozniej
;;; (po above).
;;; Czyli procedura (draw) bedzie miala taki klopot, ze 3 razy bedzie przelatywac liste entities?
;;; A moze raz i tymczasowo zapisze sobie 3 listy obiektow? Tak czy owak, troche obciazenie,
;;; ale trudno.
;;;
;;; Moze dodac jeszcze trzeci poziom "below"? Bo inaczej jak wygodni zrobic tunel?
;;;
;;; I oczywiscie jak ktos da tor np. poziomy na obu poziomach - ground i above, to bedzie
;;; bez sensu, ale to juz sam musi wiedziec.
;;;
;;; A w UI? Wiadukt z torem to osobny kafelek, mozna budowac jedno na drugim, ale jak sie
;;; chce usunac, to tylko demolish caly kafelek.

nil

;;; Tiled layers

Tiled layery zawsze w jednej wspolnej siatce.

tworzyc layery z danych sparsowanych przez tmx.

;;; Background layers

layery tla jako pojedynczej bitmapy, byc moze przesuwanej
z inna predkoscia (pseudo-3d).

;;; Custom layers

;;; To ostatnie by sluzylo np. do malowania deszczu. Bo to by bylo jakos
;;; proceduralnie, czyli taki layer to bylaby po prostu jakas funkcja draw jego
;;; wlasna, a ogolny mechanizm dbalby tylko o to, zeby wywolac ja w odpowiednim
;;; momencie. Na takim layerze moglyby tez znajdowac sie np. jakies elementy UI,
;;; czy oznaczenia, podpisy itp.
