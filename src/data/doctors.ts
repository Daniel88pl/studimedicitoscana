export interface Doctor {
  id: string;
  name: string;
  category: string;
  role: string;
  image: string;
  formation: string;
  treatments: string[];
  location: string;
  contact: string;
  longBio?: string;
  faq?: { q: string; a: string }[];
}

export const doctors: Doctor[] = [
  {
    id: "lucia-paolacci",
    name: "Dott.ssa Lucia Paolacci",
    category: "Geriatria",
    role: "Medico Chirurgo – Specialista in Geriatria",
    image: "https://images.unsplash.com/photo-1559839734-2b71f1e59816?auto=format&fit=crop&q=80&w=400&h=400",
    formation:
      "Specialista in Geriatria (Università di Perugia). Esperienza in demenze (Alzheimer, Parkinson, declino cognitivo) e gestione delle patologie croniche dell'anziano.",
    treatments: [
      "Visita geriatrica per disturbi della memoria",
      "Disturbi del tono dell'umore e del comportamento",
      "Disturbi dell'andatura, cadute e fratture",
      "Check-up geriatrico per invecchiamento attivo",
      "Valutazione autosufficienza e disabilità",
      "Visite domiciliari per pazienti fragili",
    ],
    longBio:
      "Medico Chirurgo specialista in Geriatria, formata presso l'Università degli Studi di Perugia, la Dott.ssa Lucia Paolacci si occupa da anni della diagnosi e cura delle patologie dell'età avanzata, con particolare esperienza nelle demenze (Alzheimer, Parkinson e altre forme di declino cognitivo) e nella gestione delle malattie croniche tipiche dell'anziano.\n\nSvolge attività clinica a Grosseto presso Studi Medici Toscana, offrendo visite ambulatoriali, valutazioni multidimensionali geriatriche, test neuropsicologici e visite a domicilio per pazienti con ridotta autonomia.\n\nLa sua pratica clinica è arricchita da una solida vocazione accademica: tra il 2014 e il 2020 ha svolto attività di ricerca presso il Dipartimento di Medicina dell'Università di Perugia, con studi sui biomarcatori per la diagnosi precoce dell'Alzheimer, sul declino cognitivo legato all'età, sulla depressione geriatrica (scala GDS-15), sul burden anticolinergico e sulla relazione tra parametri ematici e patologie vascolari.\n\nPartecipa attivamente a progetti di ricerca sull'invecchiamento cerebrale e lo stress ossidativo nella malattia di Alzheimer, ed è coinvolta in incontri divulgativi e giornate di sensibilizzazione dedicate alla memoria e alle demenze, in collaborazione con strutture residenziali e reti dedicate ai pazienti fragili.",
    faq: [
      { q: "Chi è il Geriatra?", a: "Il Geriatra è un medico specializzato nella cura del soggetto anziano." },
      {
        q: "Cosa fa il Geriatra?",
        a: "Si occupa della valutazione a 360° della persona anziana: individua le problematiche e le corregge, ove possibile, per garantire la migliore autonomia nelle attività della vita quotidiana e la migliore qualità di vita per il paziente e per i suoi familiari o assistenti.",
      },
      {
        q: "Quando è necessario rivolgersi al Geriatra?",
        a: "In caso di problemi di memoria, depressione del tono dell'umore, disturbi del sonno, problemi di deambulazione, cadute e fratture, oppure per definire il grado di autonomia (anche al fine di richiedere sussidi) o per un check-up volto a mantenere un invecchiamento attivo.",
      },
      {
        q: "Come si svolge la visita?",
        a: "Il Geriatra valuta il paziente — eventualmente accompagnato dai familiari — esamina la documentazione clinica e la terapia in atto, si avvale di test specifici per riconoscere e quantificare eventuali deficit, e si coordina con il Medico di Medicina Generale nell'approfondimento diagnostico e nell'impostazione di una terapia adeguata. La visita è l'inizio di un percorso condiviso con confronto continuo per valutare l'efficacia della terapia ed eventuali modifiche.",
      },
    ],
    location: "Sede Grosseto – Via Adriatica 7",
    contact: "339 309 8337",
  },
  {
    id: "margherita-pennesi",
    name: "Dott.ssa Margherita Pennesi",
    category: "Nutrizione",
    role: "Biologa Nutrizionista e Igienista Dentale",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=400&h=400",
    formation:
      "Biologa nutrizionista e igienista dentale (doppia specializzazione). Approccio olistico focalizzato su prevenzione.",
    treatments: [
      "Gestione clinica intolleranze e infiammazioni",
      "Nutrizione in gravidanza e menopausa",
      "Educazione alimentare infantile e DCA",
      "Prevenzione della salute orale",
    ],
    longBio:
      "Professionista con una peculiare e innovativa doppia specializzazione come Biologa Nutrizionista e Igienista Dentale. L'approccio della Dott.ssa Pennesi è profondamente olistico: unisce prevenzione, educazione sanitaria e metodo scientifico per garantire il benessere a 360 gradi. Elabora piani alimentari personalizzati, prestando molta attenzione alle intolleranze e alla gestione degli stati infiammatori. Offre consulenze dedicate a periodi fisici delicati come gravidanza, allattamento e menopausa e affianca bambini, giovani e adulti con disturbi alimentari nella rieducazione della propria salute, curando la nutrizione insieme al mantenimento del cavo orale.",
    location: "Sede Principale",
    contact: "info@studimedicitoscana.it",
  },
  {
    id: "antonella-lodde",
    name: "Dott.ssa Antonella Lodde",
    category: "Nutrizione",
    role: "Biologa Nutrizionista",
    image: "https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?auto=format&fit=crop&q=80&w=400&h=400",
    formation:
      "Laurea Magistrale con lode in Scienze dell’alimentazione. Master in Nutraceutica e Psicologia alimentare.",
    treatments: [
      "Piani personalizzati e monitoraggio",
      "Approccio integrato per PCOS e obesità",
      "Consulenze per ristorazione collettiva",
      "Prevenzione tramite modulazione microbiota",
    ],
    longBio:
      "Attiva dal 2012 e punto di riferimento presso AZ Medical Center di Grosseto, si è laureata con Lode in Scienze dell'Alimentazione e non ha mai smesso di aggiornarsi, conseguendo Master in Dietologia, Nutraceutica, Nutrigenomica e in Psicologia del Comportamento Alimentare. Si occupa della redazione di piani nutrizionali volti al dimagrimento, ma anche come supporto alla terapia per obesità e patologie metaboliche, operando spesso in équipe multidisciplinare (ad es. per la sindrome dell'ovaio policistico). Svolge attività di ricerca e formazione sulla modulazione del microbiota intestinale ed è consulente per l'elaborazione di menù sicuri nella ristorazione di collettività, in collaborazione con enti e associazioni territoriali.",
    location: "Sede Grosseto",
    contact: "info@studimedicitoscana.it",
  },
  {
    id: "davide-gamelli",
    name: "Davide Gamelli",
    category: "Osteopatia & Podologia",
    role: "Osteopata",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400&h=400",
    formation: "Professionista specializzato nel benessere osteopatico mirato al ripristino dell'equilibrio corporeo.",
    treatments: ["Trattamenti osteopatici", "Recupero funzionale e articolare", "Benessere posturale preventivo"],
    longBio:
      "Lavora nell'ambito del recupero muscolo-scheletrico. L’osteopatia interviene sul paziente promuovendo le capacità di adattamento e di autoregolazione attraverso una serie di tecniche manipolative.",
    location: "Milano / Sedi Toscane",
    contact: "328 0635039",
  },
  {
    id: "gabriele-solari",
    name: "Dott. Gabriele Solari",
    category: "Osteopatia & Podologia",
    role: "Fisioterapista, Osteopata, Podologo",
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=400&h=400",
    formation:
      "Laurea in Podologia (110 Lode), Osteopata (C.I.O. Bologna) e Fisioterapista. Master Posturologia Clinica.",
    treatments: [
      "Trattamento algie vertebrali e traumi",
      "Micosi, verruche plantari, onicocriptosi",
      "Screening e gestione piede diabetico",
      "Prescrizione plantari (sportivi e biomeccanici)",
    ],
    longBio:
      "Struttura la propria pratica clinica su tre solide colonne: la fisioterapia (conseguita nel 1999), l'osteopatia e la podologia clinica, materie nelle quali si è laureato e perfezionato con master a Pisa e Bologna. L'integrazione tra posturologia, podologia biomeccanica e fisioterapia gli permette di offrire inquadramenti profondi e olistici del movimento umano e dei supporti. Si occupa della riabilitazione ortopedico-traumatologica e di tutti i disturbi correlati all'appoggio plantare, dallo screening sul piede diabetico alla prescrizione e cura di problematiche specifiche unguinali.",
    location: "Sede Principale",
    contact: "info@studimedicitoscana.it",
  },
  {
    id: "lucia-vaselli",
    name: "Dott.ssa Lucia Vaselli",
    category: "Psicologia",
    role: "Psicologa e Psicoterapeuta",
    image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&q=80&w=400&h=400",
    formation: "Tirocinio S.I.S.P.Se. in sessuologia clinica. Terapista accreditata nella Rete Aimuse.",
    treatments: [
      "Approccio integrale corpo-mente",
      "Sostegno psicoterapico mirato",
      "Dialogo e ascolto del sintomo corporeo",
    ],
    longBio:
      'Psicologa Clinica e Psicoterapeuta che opera presso la sede di Grosseto. Crede in un approccio sistemico e integrale all\'essere umano che esplora il fitto legame interdipendente tra corpo e mente. Secondo il suo approccio "Dal curare al prendersi cura. Il corpo ci parla attraverso i sintomi", favorisce una presa di consapevolezza profonda nei suoi rami specialistici. E’ inoltre Psicoterapeuta accreditata per la Rete Aimuse (mutismo selettivo e disturbi connessi).',
    location: "Sede Grosseto",
    contact: "info@studimedicitoscana.it",
  },
  {
    id: "giada-cencini",
    name: "Dott.ssa Giada Cencini",
    category: "Psicologia",
    role: "Psicologa",
    image: "https://images.unsplash.com/photo-1601288496920-b6154fe3626a?auto=format&fit=crop&q=80&w=400&h=400",
    formation:
      "Master Universitari su DCA, Sessuologia, Psicologia dello Sport, Identità Sessuali. Iscr. Ordine 10412.",
    treatments: [
      "DCA (bambini, adolescenti, adulti, coppie)",
      "Sessuologia generale e popolazioni specifiche",
      "Psicologia di genere e relazionale",
      "Lavoro in rete integrato",
    ],
    longBio:
      "Laureata all'Università di Firenze in Psicologia del Ciclo di Vita e dei Contesti (Iscrizione Ordine Toscana n. 10412). Ha proseguito gli studi arricchendo massicciamente le sue specializzazioni cliniche ottenendo plurimi master inerenti: la Sessuologia e l'Identità di Genere, i Disturbi del Comportamento Alimentare e la Psicologia di Comunità. Il suo approccio prevede la costruzione di un lavoro collaborativo tra pazienti in varie fasce d'età (singoli, famiglie, coppie) e altre figure professionali della sanità integrata.",
    location: "Sede Grosseto",
    contact: "info@studimedicitoscana.it",
  },
  {
    id: "samuele-benanchi",
    name: "Dott. Samuele Benanchi",
    category: "Psicologia",
    role: "Psicologo Giuridico e Forense",
    image: "https://images.unsplash.com/photo-1622902046580-2b47f47f5471?auto=format&fit=crop&q=80&w=400&h=400",
    formation:
      "CTU presso Tribunale di Grosseto. Volontariato in prevenzione e benessere. Specialista in Cineforum terapeutico.",
    treatments: [
      "Psicologia giuridica e forense (CTU)",
      'DCA al centro "Il Mandorlo" (Cineforum)',
      'Salute come "abitare il benessere" femminile',
    ],
    longBio:
      'Psicologo con una solida connotazione Giuridico/Forense a Grosseto, e iscritto come CTU presso il Tribunale. Ha al contempo attitudini cliniche e civiche maturate attraverso il centro "Il Mandorlo" a tutela di persone con gravi dinamiche alimentari dove applica strumenti d\'avanguardia basati sul "cineforum" a raggio terapeutico. Attivista sulle iniziative del benessere femminile, declina la sua visione e la filosofia d\'aiuto sulla prospettiva di "Abitare" la salute e lo stare bene della persona, promuovendo il soggetto verso il proprio equilibrio complessivo.',
    location: "Sede Grosseto",
    contact: "info@studimedicitoscana.it",
  },
  {
    id: "jurgen-sota",
    name: "Dott. Jurgen Sota",
    category: "Reumatologia",
    role: "Dottore di Ricerca in Reumatologia",
    image: "https://images.unsplash.com/photo-1550831107-1553da8c8464?auto=format&fit=crop&q=80&w=400&h=400",
    formation: "Dottorato Genetica e Medicina Clinica (Siena). H-index 19. Autore di 100+ articoli scientifici.",
    treatments: [
      "Artrite Psoriasica e Spondiloartrite",
      "Lupus Eritematoso Sistemico",
      "Malattia di Behçet, Uveite",
      "Vasculiti e patologie autoimmuni",
    ],
    longBio:
      "Un professionista d'eccellenza affiliato all'Università degli Studi di Siena, dove ha conseguito il Dottorato di Ricerca in \"Genetica, Oncologia e Medicina Clinica\". Si dedica all'approfondimento e alle valutazioni cliniche su tutte le rare patologie sistemico-infiammatorie e immuno-mediate: dalla spondiloartrite all'artrite psoriasica alle vasculiti, passando tra Uveite e la complessa Malattia di Behçet, di cui è grande cultore ed esperto in materia europea. A confermarne il grande peso intellettuale ci sono un elevato impatto di pubblicazione in riviste internazionali ed il coinvolgimento tra i massimi network europei sulla salute delle ossa e delle articolazioni.",
    location: "Sede Principale",
    contact: "info@studimedicitoscana.it",
  },
];
