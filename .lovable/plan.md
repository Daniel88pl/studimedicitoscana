
## Modifiche alle card specialisti

### 1. Footer card semplificato
Rimuovere la riga "location · email" dalla parte bassa di ogni card. Lasciare solo il pulsante **PROFILO COMPLETO** (testo esteso, non più "Profilo"), centrato e largo full-width nella card. Le info di contatto restano comunque visibili nella pagina di dettaglio dello specialista.

### 2. Card leggermente più grandi
Aumentare:
- padding interno (da `px-6 py-5` a `px-7 py-6`)
- avatar da 40px a 48px
- nome da `text-base` a `text-[17px]`
- testo profilo e aree intervento leggermente più arieggiati (gap interno +2px)

L'obiettivo è una card che respiri di più ma resti compatta — niente ritorno alle dimensioni originali.

### 3. Carosello auto-scroll, max 3 per riga

Sostituire la griglia attuale (`grid md:grid-cols-2 xl:grid-cols-3`) con un carosello orizzontale che mostra **3 card visibili contemporaneamente** su desktop (2 su tablet, 1 su mobile) e scorre automaticamente in continuo verso sinistra.

**Comportamento:**
- Scroll automatico fluido e lento (~25-30 secondi per ciclo completo)
- Loop infinito senza salti visibili (duplicazione della lista in coda)
- Pausa al passaggio del mouse (hover) per permettere lettura
- Frecce manuali ‹ › ai lati per navigazione opzionale
- Quando un filtro categoria è attivo e ci sono ≤3 specialisti, il carosello si disattiva e mostra una griglia statica (così non scorre se non serve)

**Tecnica:** uso di `embla-carousel-react` con il plugin `embla-carousel-autoplay`, già compatibile con shadcn/ui (la libreria è il motore dietro al componente `Carousel` di shadcn). Configurazione:
- `loop: true`
- `align: "start"`
- Plugin Autoplay con `delay: 0, stopOnInteraction: false, stopOnMouseEnter: true` per scroll continuo tipo "marquee"

In alternativa, se preferisci un effetto marquee CSS puro (più leggero, senza dipendenze), si può fare con un wrapper flex animato via `@keyframes` in Tailwind. Vantaggio: zero JS, fluidità perfetta. Svantaggio: niente frecce manuali, niente snap su singola card.

### Raccomandazione
Andrei con **embla + autoplay** perché:
- è già installato/installabile come parte di shadcn
- consente sia lo scroll automatico continuo sia frecce manuali
- gestisce nativamente responsive e pausa su hover
- meglio per accessibilità (touch/swipe su mobile)

### File da modificare
- `src/components/Staff.tsx` — sostituzione griglia con Carousel, semplificazione footer card, ritocco dimensioni

### Dipendenze
- `embla-carousel-autoplay` (da aggiungere se non presente; `embla-carousel-react` è già usato da shadcn)

Confermi questa direzione? Se preferisci la versione marquee CSS pura (più semplice, senza controlli manuali) dimmelo e modifico il piano.
