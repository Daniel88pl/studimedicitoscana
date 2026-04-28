# Riprendiamo "Studi Medici Toscana"

Ho analizzato lo ZIP che hai caricato: il progetto è già ben avviato (sito vetrina per uno studio medico in Toscana, con sede a Grosseto, sezione Medicina del Lavoro per aziende, staff di specialisti, servizi, contatti). Lo riporto integralmente nel tuo progetto Lovable adattandolo allo stack supportato, senza perdere nulla del lavoro già fatto.

## Cosa porto dentro così com'è

**Pagine**
- Home (Hero + Servizi + Chi siamo + Staff + Medicina del lavoro + Rinnovo patenti + Contatti)
- Dettaglio Servizio (`/servizi/:id`) con FAQ
- Dettaglio Specialista (`/staff/:id`) con biografia estesa
- Pagina dedicata Grosseto (`/grosseto`)
- Pagina dedicata Medicina del Lavoro (`/servizi/medicina-del-lavoro`)

**Componenti**
- Navbar (con menu mobile), Footer
- Hero, About, Services, Staff (con filtri per categoria), Contact
- LicenseRenewal (rinnovo patenti)
- OccupationalMedicine (medicina del lavoro)

**Dati & contenuti**
- 6 schede medico complete (Paolacci, Pennesi, Lodde, Gamelli, Solari, Vaselli) con bio, formazione, trattamenti, sede, contatti
- 6 servizi (Visite specialistiche, Equipe pediatrica, Medicina del lavoro, Medicina legale, Patente e porto d'armi, Visite domiciliari) con descrizioni lunghe e FAQ
- Configurazione contatti centralizzata: telefono `371 372 5768`, email `studimedicitoscana.grosseto.19@gmail.com`, link WhatsApp pre-compilato
- Hook `useSEO` per title/meta dinamici per pagina

**Design system**
- Palette "naturale" calda (sfondo `#fdfdfb`, testo `#3d3d33`, accent verde-oliva `#5a5a40`, muted `#8d8d70`)
- Font: **Cormorant Garamond** (titoli serif corsivi) + **Inter** (testo)
- Card arrotondate (rounded-[32px]/[40px]), ombre soft, animazioni con framer-motion

## Adattamenti tecnici necessari (per girare su Lovable)

Lo stack del tuo ZIP usa React 19 + Tailwind v4 + react-router v7 + dipendenze pensate per AI Studio (`@google/genai`, `express`). Lovable usa React 18 + Tailwind v3 + react-router v6. Adatto così, **senza modifiche visibili al sito**:

- Riscrivo i token colore (`--color-natural-*`) come variabili HSL in `src/index.css` ed estendo `tailwind.config.ts` per esporre le classi `bg-natural-bg`, `text-natural-accent`, `border-natural-border`, ecc. (identiche a quelle che usi nei componenti)
- Aggiungo i font Google (Cormorant Garamond + Inter) in `index.html` e li mappo in `font-serif` / `font-sans`
- Sostituisco `motion/react` con `framer-motion` (API identica)
- Adatto `react-router-dom` v7 → v6 (le tue rotte funzionano già con la sintassi attuale, integro tutto in `App.tsx` mantenendo le rotte 404)
- Aggiungo route catch-all verso la `NotFound` esistente (al posto del fallback verso Home)
- Rimuovo dipendenze non necessarie (`@google/genai`, `express`, `dotenv`, `tsx`)

## Struttura file finale

```text
src/
├── App.tsx                       (rotte: /, /servizi/:id, /staff/:id, /grosseto, /servizi/medicina-del-lavoro)
├── index.css                     (token HSL + import font)
├── config/contact.ts
├── data/
│   ├── doctors.ts
│   └── services.ts
├── hooks/useSEO.ts
├── components/
│   ├── Navbar.tsx, Footer.tsx
│   ├── Hero.tsx, About.tsx, Services.tsx, Staff.tsx, Contact.tsx
│   ├── LicenseRenewal.tsx
│   └── OccupationalMedicine.tsx
└── pages/
    ├── HomePage.tsx
    ├── ServiceDetail.tsx
    ├── DoctorDetail.tsx
    ├── GrossetoPage.tsx
    └── MedicinaDelLavoroPage.tsx
```

## Cosa NON faccio in questo step

- Niente backend / Lovable Cloud (il sito è puramente vetrina, non ci sono form da salvare in DB nel codice attuale — i CTA di contatto puntano a WhatsApp / telefono / email)
- Niente modifica ai testi o alle foto (uso esattamente i contenuti del tuo ZIP, comprese le immagini Unsplash placeholder per i medici)
- Niente nuove sezioni: ripartiamo esattamente da dove sei rimasto

## Prossimi passi suggeriti (dopo questo import)

Quando il sito sarà di nuovo in piedi, potremo decidere insieme se:
1. Sostituire le foto Unsplash dei medici con foto reali
2. Aggiungere un form di contatto con invio email (richiede Lovable Cloud)
3. Aggiungere un sistema di prenotazione online
4. SEO avanzato (sitemap, schema.org MedicalBusiness, Open Graph immagini)
5. Pagine sede aggiuntive oltre Grosseto

Approva il piano e procedo con l'import.
