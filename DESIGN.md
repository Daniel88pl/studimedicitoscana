---
name: Studi Medici Toscana
description: Sito vetrina di una struttura sanitaria privata (Pisa, Grosseto) — navy istituzionale su ivory, autorevole e rassicurante.
colors:
  primary: "#1d4987"
  primary-soft: "#1d4987"
  neutral-bg: "#fcfcfd"
  neutral-surface: "#ffffff"
  neutral-ink: "#1e2b3e"
  neutral-muted: "#627084"
  neutral-border: "#e0e5eb"
  neutral-card-border: "#ecf0f4"
typography:
  display:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "clamp(2.25rem, 5vw, 4.5rem)"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "normal"
  headline:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "clamp(1.75rem, 3vw, 3rem)"
    fontWeight: 600
    lineHeight: 1.15
  body:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 700
    letterSpacing: "0.18em"
rounded:
  sm: "8px"
  md: "16px"
  lg: "32px"
  xl: "40px"
  full: "9999px"
spacing:
  sm: "8px"
  md: "16px"
  lg: "32px"
  xl: "64px"
  section: "96px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "#ffffff"
    rounded: "{rounded.full}"
    padding: "16px 32px"
  button-primary-hover:
    backgroundColor: "{colors.primary}"
  button-secondary:
    backgroundColor: "{colors.neutral-bg}"
    textColor: "{colors.primary}"
    rounded: "{rounded.full}"
    padding: "16px 32px"
  button-secondary-hover:
    backgroundColor: "{colors.primary}"
    textColor: "#ffffff"
  card-service:
    backgroundColor: "{colors.neutral-surface}"
    textColor: "{colors.neutral-ink}"
    rounded: "{rounded.lg}"
    padding: "32px"
---

# Design System: Studi Medici Toscana

## 1. Overview

**Creative North Star: "Studi Medici Toscana — Il Primario di Fiducia"**

Il sistema visivo riproduce la sensazione di entrare nello studio privato di un primario di lunga esperienza: navy istituzionale (#1d4987) su un fondo quasi bianco e leggermente caldo (#fcfcfd), una serif (Cormorant Garamond) per i titoli che dà autorità senza diventare decorativa, e un'impostazione Inter pulita per tutto il resto. Nulla deve sembrare urlato: niente sconti, niente badge, niente urgenza artificiale. La fiducia si comunica con precisione (spaziatura regolare, bordi sottili, gerarchia chiara), non con effetti.

Il sistema rifiuta esplicitamente due derive opposte: quella della "clinica low-cost" (colori sgargianti, promozioni, estetica da centro economico) e quella del "sito-template generico da agenzia" (card identiche ovunque, eyebrow uppercase ripetuto su ogni sezione, badge arrotondati, gradient testuali). Entrambe minano la percezione di affidabilità clinica che è l'unico vero obiettivo del design qui.

**Key Characteristics:**
- Navy istituzionale (#1d4987) come unico accento cromatico, usato con parsimonia
- Serif (Cormorant Garamond) riservata a titoli/numeri-statistica, mai al corpo del testo
- Superfici piatte a riposo; l'ombra appare solo come feedback di interazione
- Bottoni a pillola (rounded-full) per ogni CTA, card con raggio generoso (32px)
- Doppio binario "privati / aziende" tenuto distinto ma con lo stesso linguaggio visivo

## 2. Colors

Palette a due toni: navy istituzionale come unico accento, ivory/bianco come base, senza secondario né terziario — il progetto ha un solo accento e lo usa con disciplina.

### Primary
- **Navy Clinico** (`#1d4987`): l'unico colore "vivo" del sistema. CTA primaria (WhatsApp), icone attive, link, testo enfatizzato, bordo hover. Usato anche in tinta trasparente (`/5`, `/10`) per decorazioni di sfondo morbide (cerchi sfocati, pannelli diagonali nella Hero).

### Neutral
- **Ivory Carta** (`#fcfcfd`): sfondo di base delle sezioni "respiro" (Hero, alternanza con il bianco puro).
- **Bianco Clinico** (`#ffffff`): sfondo delle card e delle sezioni a contenuto denso (Servizi, form).
- **Inchiostro Navy** (`#1e2b3e`): testo principale — non nero puro, leggermente blu per restare coerente con l'accento.
- **Grigio Composto** (`#627084`): testo secondario/muted, didascalie, dettagli sotto i titoli.
- **Bordo Sottile** (`#e0e5eb`): separatori, bottone secondario outline.
- **Bordo Card** (`#ecf0f4`): bordo quasi invisibile sulle card di servizio, leggermente più chiaro del bordo sottile.

### Named Rules
**La Regola dell'Accento Unico.** Esiste un solo colore vivo (`#1d4987`). Non introdurre un secondo accento per "varietà": la disciplina cromatica è ciò che distingue questo sistema da un template generico.

## 3. Typography

**Display Font:** Cormorant Garamond (con fallback Georgia, serif)
**Body Font:** Inter (con fallback system-ui, sans-serif)

**Character:** L'accoppiata serif/sans su assi di contrasto reali — una serif con grazie morbide e contrasto di tratto per i titoli (autorità, calligrafia clinica) contro un'umanista geometrica e neutra per il corpo (leggibilità, modernità). Mai la stessa famiglia per entrambi i ruoli.

### Hierarchy
- **Display** (600, clamp(2.25rem, 5vw, 4.5rem), line-height 1.1): titoli di sezione principali (H1 Hero, "I nostri servizi"). Sempre `text-wrap: balance`.
- **Headline** (600, clamp(1.75rem, 3vw, 3rem), line-height 1.15): titoli di sottosezione e pagine servizio/staff.
- **Title** (700, 1.25rem, line-height 1.3): titoli di card (nome servizio, nome specialista).
- **Body** (400, 1.0625rem, line-height 1.65): testo descrittivo. Limite 65–75ch per riga, già rispettato dai `max-w-xl`/`max-w-2xl` in uso.
- **Label** (700, 0.75rem, letter-spacing 0.18em, uppercase): eyebrow/statistiche/dettagli card.

### Named Rules
**La Regola del Contrasto di Coppia.** Serif solo per titoli e numeri-statistica, mai per paragrafi o etichette. Inter copre tutto il resto. Non introdurre una terza famiglia.

## 4. Elevation

Sistema piatto per default: le superfici (card, bottoni) non hanno ombra a riposo. L'ombra esiste solo come segnale di interazione — hover su una card, hover/tap su un bottone — mai come decorazione permanente. Questo rinforza la "Quiete Clinica": niente galleggia, niente sembra fluttuante o decorativo.

### Shadow Vocabulary
- **hover-lift** (`box-shadow: 0 10px 25px -3px rgb(0 0 0 / 0.1)`): card di servizio/staff al passaggio del mouse.
- **cta-ambient** (`box-shadow: 0 20px 25px -5px rgb(29 73 135 / 0.1)`): CTA primaria (WhatsApp), ombra colorata (tinta navy, non nera) sempre presente a bassa intensità per dare peso al pulsante più importante della pagina — unica eccezione consapevole alla regola "piatto a riposo".

### Named Rules
**La Regola del Riposo Piatto.** Tutto è piatto finché non interagisci. L'unica eccezione è la CTA primaria, che porta un'ombra ambient permanente proprio perché deve restare l'elemento con più peso visivo della pagina.

## 5. Components

### Buttons
- **Shape:** pillola (`rounded-full`, 9999px) — mai `rounded-md` per le CTA reali della pagina (il bottone shadcn generico `rounded-md` esiste nella libreria UI ma non va usato sulle pagine marketing).
- **Primary:** sfondo Navy Clinico, testo bianco, padding 16px/32px, peso 600. Hover: stesso navy (no darken aggressivo), leggero scale-up al tap via motion.
- **Secondary/Outline:** sfondo trasparente, testo Navy Clinico, bordo Bordo Sottile. Hover: si inverte (sfondo navy, testo bianco) — mai un semplice schiarimento del bordo.

### Cards / Containers
- **Corner Style:** 32px (`rounded-[32px]`) per le card di servizio — generoso, non lo standard 8-12px da template.
- **Background:** bianco puro, anche su sfondo sezione ivory, per dare leggero distacco tattile.
- **Shadow Strategy:** nessuna a riposo; `hover-lift` al passaggio (vedi Elevation).
- **Border:** 1px Bordo Card (`#ecf0f4`), quasi invisibile — la separazione la dà il colore di sfondo, non il bordo.
- **Internal Padding:** 32px su tutti i lati.

### Navigation
- Sfondo translucido con blur (`backdrop-blur-md`) e bordo inferiore sottile, fissa in alto. Voci di menu in label uppercase tracciate. Voce "Servizi" come dropdown (vedi Navbar.tsx): popover con bordo, raggio 16px, nessuna ombra dura, animazione fade+slide breve (150ms).

### Hero Image Frame (componente distintivo)
- Cornice fotografica con raggio 40px (`rounded-[40px]`), bordo sottile, leggero `grayscale` a riposo che si dissolve in hover — un dettaglio "clinico" (foto quasi in bianco e nero, mai patinata/lifestyle) che rientra a colori solo quando l'utente interagisce.

## 6. Do's and Don'ts

### Do:
- **Do** usare il navy (`#1d4987`) come unico accento e tenerlo sotto al 10% della superficie di ogni sezione — la sua rarità è il punto.
- **Do** mantenere bottoni CTA a pillola (`rounded-full`) e card a raggio generoso (32px) — è la firma visiva del sistema.
- **Do** rispettare la regola del riposo piatto: ombre solo su hover/focus, eccetto la CTA primaria.
- **Do** trattare privati e aziende come due percorsi visivamente equivalenti (stesso linguaggio, stesso peso), mai uno "principale" e uno "secondario".

### Don't:
- **Don't** introdurre colori vivaci, badge "offerta" o sconti — è esattamente l'estetica da "clinica low-cost" che PRODUCT.md esclude.
- **Don't** aggiungere un secondo accento colorato "per varietà" — la disciplina di un solo colore vivo è la regola, non un'omissione.
- **Don't** usare gradient su testo, glow decorativi, glassmorphism come default, o il template "hero-metric" da SaaS — sono tell dell'estetica generica da agenzia/AI che il brief esclude esplicitamente.
- **Don't** moltiplicare l'eyebrow uppercase tracciato su ogni singola sezione (oggi presente in Hero, Footer, card) — usato ovunque diventa rumore da template; va riservato a 1-2 punti realmente significativi (audit/critique futuri devono affrontare questo).
- **Don't** usare `border-left`/`border-right` colorato come accento decorativo su card o liste.
