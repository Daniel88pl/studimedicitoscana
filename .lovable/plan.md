## Obiettivo

Arricchire il profilo della Dott.ssa Lucia Paolacci unendo le informazioni esistenti, il nuovo testo fornito e i contenuti rilevanti della scheda PDF.

## Modifiche a `src/data/doctors.ts` (entry `lucia-paolacci`)

**`role`**: `"Medico Chirurgo – Specialista in Geriatria"`

**`formation`** (sintesi card):
> Specialista in Geriatria (Università di Perugia). Esperienza in demenze (Alzheimer, Parkinson, declino cognitivo) e gestione delle patologie croniche dell'anziano.

**`treatments`** (aree, mostrate in card e dettaglio):
- Visita geriatrica per disturbi della memoria
- Disturbi del tono dell'umore e del comportamento
- Disturbi dell'andatura, cadute e fratture
- Check-up geriatrico per invecchiamento attivo
- Valutazione autosufficienza e disabilità
- Visite domiciliari per pazienti fragili

**`location`**: `"Sede Grosseto – Via Adriatica 7"`

**`contact`**: `"339 309 8337"` (numero diretto fornito nel PDF)

**`longBio`** (testo esteso, integra messaggio utente + contesto PDF + esperienza accademica già presente):
> Medico Chirurgo specialista in Geriatria, formata presso l'Università degli Studi di Perugia, la Dott.ssa Lucia Paolacci si occupa da anni della diagnosi e cura delle patologie dell'età avanzata, con particolare esperienza nelle demenze (Alzheimer, Parkinson e altre forme di declino cognitivo) e nella gestione delle malattie croniche tipiche dell'anziano.
>
> Svolge attività clinica a Grosseto presso Studi Medici Toscana (Via Adriatica 7), offrendo visite ambulatoriali, valutazioni multidimensionali geriatriche, test neuropsicologici e visite a domicilio per pazienti con ridotta autonomia.
>
> La sua pratica clinica è arricchita da una solida vocazione accademica: tra il 2014 e il 2020 ha svolto attività di ricerca presso il Dipartimento di Medicina dell'Università di Perugia, con studi sui biomarcatori per la diagnosi precoce dell'Alzheimer, sul declino cognitivo legato all'età, sulla depressione geriatrica (scala GDS-15), sul burden anticolinergico e sulla relazione tra parametri ematici e patologie vascolari.
>
> Partecipa attivamente a progetti di ricerca sull'invecchiamento cerebrale e lo stress ossidativo nella malattia di Alzheimer, ed è coinvolta in incontri divulgativi e giornate di sensibilizzazione dedicate alla memoria e alle demenze, in collaborazione con strutture residenziali e reti dedicate ai pazienti fragili.

## Modifica a `src/pages/DoctorDetail.tsx`

Aggiungere una sezione opzionale "FAQ / Approccio" che si renderizza solo se il dottore ha un campo `faq` definito. Per la Dott.ssa Paolacci popolare quattro voci dal PDF:

- **Chi è il Geriatra?** — Medico specializzato nella cura del soggetto anziano.
- **Cosa fa?** — Valutazione a 360° dell'anziano: individua le problematiche e le corregge per garantire la migliore autonomia e qualità di vita per il paziente e i familiari.
- **Quando rivolgersi?** — Problemi di memoria, depressione del tono dell'umore, disturbi del sonno, problemi di deambulazione, cadute, valutazione autonomia, check-up per invecchiamento attivo.
- **Come si svolge la visita?** — Valutazione del paziente (anche con familiari), revisione documentazione e terapia, test diagnostici, coordinamento con il Medico di Medicina Generale in un percorso condiviso.

Implementazione: aggiungere campo opzionale `faq?: { q: string; a: string }[]` all'interfaccia `Doctor`, popolarlo per Paolacci, e in `DoctorDetail.tsx` renderizzare un blocco con titolo "Domande Frequenti" e una lista di `<details>` o card sotto la sezione "Aree di Intervento", con lo stile esistente (border `natural-border`, sfondo bianco, rounded-2xl).

## Note

- L'email `paolaccilucia@gmail.com` viene omessa per coerenza con gli altri profili che usano numero o l'email centrale.
- Il numero di telefono diretto sostituisce l'email generica, perché il PDF lo indica come canale ufficiale per appuntamenti.
- Il ritratto del PDF non viene importato: l'immagine attuale (Unsplash) viene mantenuta salvo richiesta diversa.
