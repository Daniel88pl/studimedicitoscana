## Obiettivo

Rinfrescare la palette del sito per renderla più coerente con il nuovo logo (blu navy + accento rosso) mantenendo un'atmosfera **sanitaria premium**: pulita, luminosa, professionale — non scura, non clinica fredda. Font invariati (Cormorant Garamond + Inter).

## Direzione cromatica proposta

Tre opzioni, in ordine di preferenza:

### Opzione A — "Premium Clinical" (consigliata)
Palette ispirata alle cliniche premium europee: bianco caldo come base, blu navy del logo come accento principale, rosso del logo come accento secondario (solo CTA critiche / dettagli), grigio-azzurro per i toni intermedi.

| Ruolo | Colore | HSL | Note |
|---|---|---|---|
| Background | Bianco avorio | `210 30% 99%` | Quasi bianco, leggero hint freddo |
| Surface / Card | Bianco puro | `0 0% 100%` | Card e sezioni alternate |
| Soft surface | Azzurro nebbia | `210 40% 97%` | Sezioni "About", banner |
| Text primary | Navy profondo | `215 35% 18%` | Titoli, testo (non nero) |
| Text muted | Grigio-blu | `215 15% 45%` | Descrizioni |
| Accent primary | Navy logo | `215 65% 32%` | CTA, link, h1 italic |
| Accent hover | Navy chiaro | `215 60% 42%` | Hover stati |
| Accent secondary | Rosso logo | `355 70% 48%` | Solo elementi salienti (badge "urgente", icone alert, micro-dettagli) |
| Border soft | Grigio-blu chiaro | `215 20% 90%` | Bordi card |
| Border subtle | Quasi-bianco | `210 25% 94%` | Divisori |

**Sensazione**: ariosa, professionale, blu come "fiducia medica", rosso usato con parsimonia per non ricordare un'emergenza.

### Opzione B — "Warm Medical"
Mantiene la base calda attuale (avorio/sabbia) ma sostituisce il verde-oliva con il navy del logo come accento. Risultato: più caldo dell'opzione A, ponte tra il tema attuale e il nuovo logo.
- Background: `45 30% 98%` (avorio attuale)
- Accent: navy `215 60% 35%`
- Secondary accent: terracotta tenue `15 45% 55%` (al posto del rosso pieno, per legare al caldo)

### Opzione C — "Soft Blue Editorial"
Più chiara e "spa-like": bianco freddo, accento blu polvere desaturato, rosso del logo solo nel logo stesso e qualche dettaglio.
- Accent principale: blu polvere `210 40% 50%` (meno saturo del logo)
- Tono generale: minimale, simile a cliniche scandinave

## Uso del rosso (importante)

Il rosso del logo è forte. Per evitare l'effetto "allarme" si usa solo in:
- Logo (intatto)
- Bordo sottile su card "in evidenza" (es. servizio principale)
- Icona puntino sezione "Sedi" (geo-pin)
- Hover su voce di menu attiva (sottolineatura 2px)

**Mai** su pulsanti CTA primari o grandi superfici.

## File da modificare

Tutta la palette è centralizzata in due file:

1. **`src/index.css`** — variabili HSL (`--natural-bg`, `--natural-text`, `--natural-accent`, `--natural-muted`, `--natural-border`, `--natural-card-border`, e i token shadcn `--background`, `--foreground`, `--primary`, `--ring`, `--border`, ecc.). Aggiunta opzionale di `--natural-accent-secondary` per il rosso.
2. **`tailwind.config.ts`** — già mappa i token `natural.*`. Aggiungere solo `accent-secondary` se introduciamo il rosso come token.

Nessun componente va toccato: tutti usano già le classi `bg-natural-bg`, `text-natural-accent`, `border-natural-border`, ecc. → il refresh è **globale e immediato** cambiando solo le variabili.

Eccezione: il pulsante CTA in `Hero.tsx` ha un hover hardcoded `hover:bg-[#4a4a35]` (vecchio verde-oliva). Va sostituito con `hover:bg-natural-accent/90` o un token dedicato così segue la nuova palette.

Da verificare con `rg` su tutto il `src/`: eventuali altri colori hardcoded (`#xxxxxx` o `bg-[...]`) vanno allineati allo stesso modo.

## Cosa rimane invariato

- Font Cormorant Garamond (serif) + Inter (sans)
- Layout, spaziature, animazioni framer-motion
- Struttura delle sezioni
- Hero image e foto staff (i toni navy/blu si sposano bene con i ritratti già editoriali)

## Domande per te

1. **Quale opzione preferisci?** A (premium clinical, bianco freddo + navy), B (warm medical, ponte caldo), o C (soft blue editorial, spa-like)?
2. **Il rosso del logo** lo vuoi anche nel sito (badge/dettagli) o solo dentro al logo, lasciando il sito blu/neutro?
3. Vuoi vedere prima un'**anteprima** (modifico solo `index.css` su una opzione e tu valuti) o procedo con la scelta finale e la applico ovunque incluso il refactor del CTA hero?
