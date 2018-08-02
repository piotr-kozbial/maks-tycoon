(ns app.ui.ui-state)

(defonce ui-state
  (atom

   {:sidebar
    {:loc-selector {:open? true}}
    :bottombar
    {}}))

    ;;;;; TODO - ten stan UI niech juz bedzie taki jeden chamski, bez zadnego bawienia sie
    ;;;;; w komponenty, bo to ciezka sprawa, a nasz UI jednak bedzie dosc prosty
    ;;;;; TODO - tylko do osobnego pliku! i tam tez operacje na tym stanie!
    ;;;;;      - i przy operacji chyba podbicie ui-refresh-tick, zeby to sie dzialo szybko
    ;;;;; TODO - ALBO... nic nie stoi na przeszkodzie, zeby byl osobny atom na ui-state
    ;;;;;        bo w koncu w rum mozna zrobic (rum/react ...) na 2 roznych atomach
    ;;;;;        Zreszta moglibysmy wtedy przeniesc ten ui-refresh-tick do naszego ui-state,
    ;;;;;        i wtedy znow rum/react tylko na ui-state, choc zagladamy tez
    ;;;;;        do app-state, ale przez zwykle @


(defn loc-selector-open []
  (swap! ui-state assoc-in [:sidebar :loc-selector :open?] true))

(defn loc-selector-close []
  (swap! ui-state assoc-in [:sidebar :loc-selector :open?] false))

