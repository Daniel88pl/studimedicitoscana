import { 
  Stethoscope, 
  Home, 
  Gavel, 
  Briefcase, 
  IdCard,
  Baby,
  LucideIcon
} from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  icon: LucideIcon;
  color: string;
  details: string[];
  faq?: { question: string; answer: string }[];
}

export const services: Service[] = [
  {
    id: 'visite-specialistiche',
    title: 'Visite specialistiche',
    description: 'Ortopedia, endocrinologia, neurologia, dermatologia, urologia, rreumatologia, cardiologia, chirurgia, e molto altro.',
    longDescription: 'Il nostro centro offre un\'ampia gamma di visite specialistiche per rispondere a tutte le esigenze di cura e prevenzione. Dalla dermatologia alla cardiologia, il nostro staff medico altamente qualificato utilizza le migliori tecnologie per fornire diagnosi accurate e terapie mirate. Le visite specialistiche sono rivolte sia agli adulti che ai bambini, con un approccio personalizzato e attento al benessere complessivo del paziente.',
    icon: Stethoscope,
    color: 'bg-natural-accent/10 text-natural-accent',
    details: ['Adulti e Bambini', 'Oltre 15 specialità', 'Nutrizione e Psicologia'],
    faq: [
      { question: 'Quanto dura in media una visita specialistica?', answer: 'La durata varia in base alla specialità, ma in genere si attesta tra i 30 e i 45 minuti per consentire un inquadramento clinico completo.' },
      { question: 'È necessario presentare un\'impegnativa medica?', answer: 'Non è strettamente necessaria l\'impegnativa, trattandosi di una struttura privata, ma è sempre consigliato portare con sé tutta la documentazione medica precedente.' }
    ]
  },
  {
    id: 'equipe-pediatrica',
    title: 'Equipe pediatrica',
    description: 'Endocrinologia pediatrica, logopedia, neuropsicomotricità e servizi dedicati all’età evolutiva.',
    longDescription: 'L\'équipe pediatrica di Studi Medici Toscana è specializzata nell\'assistenza ai bambini e agli adolescenti. Offriamo un ambiente accogliente e servizi dedicati all\'età evolutiva, tra cui endocrinologia pediatrica, logopedia, neuropsicomotricità, e musicoterapia. Il nostro obiettivo è affiancare le famiglie nel percorso di crescita dei più piccoli con competenza e sensibilità.',
    icon: Baby,
    color: 'bg-natural-accent/10 text-natural-accent',
    details: ['Psicologia infantile', 'Logopedia', 'Musicoterapia'],
    faq: [
      { question: 'A che età è consigliata la prima visita?', answer: 'Dipende dallo specialista. Per problemi specifici legati allo sviluppo o al linguaggio, si consiglia una valutazione ai primi segnali di difficoltà, spesso intorno a 2-3 anni.' },
      { question: 'I genitori possono assistere alla visita?', answer: 'Certamente, la presenza di almeno un genitore è fondamentale sia dal punto di vista clinico che per rassicurare il bambino.' }
    ]
  },
  {
    id: 'medicina-del-lavoro',
    title: 'Medicina del lavoro e sorveglianza sanitaria per la tua azienda',
    description: 'Gestiamo noi ogni aspetto della sorveglianza sanitaria: dalla nomina del Medico Competente alle visite, fino alla documentazione. Tu pensi al lavoro.',
    longDescription: `### Cos'è la Medicina del Lavoro?

La Medicina del Lavoro si occupa di prevenire, diagnosticare e gestire le patologie legate all'attività lavorativa. Per le aziende, significa una cosa concreta: garantire che ogni lavoratore sia idoneo alla propria mansione, nel rispetto del D.Lgs. 81/2008.

Non è solo un adempimento normativo. Una sorveglianza sanitaria ben gestita riduce infortuni, assenteismo e il rischio di contestazioni legali — con un impatto diretto su produttività e costi.

---

### Perché affidarsi a Studi Medici Toscana?

Gestire la Medicina del Lavoro internamente richiede tempo, competenze specifiche e un aggiornamento continuo su norme e protocolli. Noi ci occupiamo di tutto, dall'inizio alla fine.

**Un unico referente.** Niente frammentazione tra più fornitori: una sola realtà gestisce medici, visite, esami, scadenze e documentazione.

**Conformità garantita.** Piena aderenza al D.Lgs. 81/2008 e alle linee guida regionali aggiornate.

**Flessibilità operativa.** Visite in azienda o in ambulatorio, con soluzioni pensate per non interrompere le tue attività.

---

### Cosa facciamo concretamente

**Medico Competente**
Mettiamo a disposizione un Medico Competente iscritto nelle liste ministeriali. Definiamo e aggiorniamo il protocollo sanitario aziendale sulla base della valutazione dei rischi reali della tua attività.

**Visite mediche e accertamenti**
Eseguiamo visite preventive e periodiche per attestare l'idoneità alla mansione. Gli accertamenti includono: esami del sangue, audiometria, spirometria, valutazione della vista, drug test e tutti gli altri esami previsti dal protocollo.

**Modalità di erogazione**
- **In azienda:** Il team si sposta presso la tua sede. Tempi di assenza minimi, zero spostamenti per i dipendenti.
- **In ambulatorio:** I lavoratori vengono accolti nelle nostre strutture. Ideale per piccole realtà o accertamenti singoli.
- **Copertura nazionale:** Gestiamo aziende con sedi in tutta Italia come unico partner, garantendo uniformità di servizio su ogni sede.`,
    icon: Briefcase,
    color: 'bg-natural-accent/10 text-natural-accent',
    details: ['Sorveglianza D.Lgs. 81/2008', 'Visite in Azienda', 'Copertura Nazionale'],
    faq: [
      {
        question: 'La mia azienda è obbligata a nominare un Medico Competente?',
        answer: 'Sì, se i tuoi lavoratori sono esposti a rischi per la salute — rumore, agenti chimici, videoterminali, movimentazione carichi e molti altri — la nomina è obbligatoria per legge (D.Lgs. 81/2008). In caso di dubbio, possiamo analizzare insieme le mansioni presenti nella tua azienda e valutare gli obblighi applicabili.'
      },
      {
        question: 'Potete venire direttamente in azienda per le visite?',
        answer: 'Sì. Organizziamo sessioni di visite in-house, portando il medico e le attrezzature necessarie direttamente presso la tua sede. I dipendenti non si spostano, le assenze si riducono al minimo e le operazioni non vengono interrotte.'
      },
      {
        question: 'Gestite aziende con più sedi in regioni diverse?',
        answer: 'Sì, offriamo copertura nazionale. Operiamo come unico partner di riferimento per tutte le sedi italiane della tua azienda, garantendo un protocollo sanitario uniforme, documentazione centralizzata e un interlocutore solo per ogni esigenza.'
      },
      {
        question: 'Quali esami diagnostici sono inclusi nel servizio?',
        answer: 'Gli accertamenti variano in base al protocollo sanitario definito per la tua azienda. Svolgiamo esami del sangue, spirometrie, audiometrie, valutazioni visive e drug test. Il medico competente stabilisce quali esami sono necessari in base ai rischi specifici delle mansioni.'
      },
      {
        question: 'Con quale frequenza vanno effettuate le visite periodiche?',
        answer: 'La periodicità dipende dal livello di rischio della mansione e viene stabilita dal Medico Competente nel protocollo sanitario. In genere si va da una visita annuale per i rischi più elevati fino a ogni due o quattro anni per i rischi più contenuti. Ci occupiamo noi di pianificare le scadenze e avvisarti per tempo.'
      },
      {
        question: 'Cosa succede se un lavoratore risulta non idoneo?',
        answer: 'Il Medico Competente emette un giudizio di idoneità con eventuali limitazioni o prescrizioni, oppure di non idoneità temporanea o permanente. Ti supportiamo nella gestione del provvedimento e, se necessario, nell\'adattamento della mansione, nel rispetto delle tutele previste dalla legge.'
      }
    ]
  },
  {
    id: 'medicina-legale',
    title: 'Medicina legale',
    description: 'Consulenze medico‑legali, certificazioni e perizie collegate a incidenti o malasanità.',
    longDescription: 'Attraverso i nostri consulenti esperti, offriamo servizi di medicina legale per infortunistica stradale (RCA), casi di malasanità, responsabilità professionale e pratiche assicurative. L\'assistenza comprende la valutazione medico-legale del danno biologico, sia in ambito stragiudiziale che per consulenze tecniche d\'ufficio (CTU).',
    icon: Gavel,
    color: 'bg-natural-accent/10 text-natural-accent',
    details: ['Pratiche Assicurative', 'Infortuni RCA', 'Contenziosi'],
    faq: [
      { question: 'Cosa devo portare per una prima valutazione?', answer: 'È essenziale portare tutta la documentazione medica relativa all\'evento traumatico (pronto soccorso, referti, esami strumentali) e l\'eventuale documentazione assicurativa.' },
      { question: 'Effettuate valutazioni per danno da malasanità?', answer: 'Sì, i nostri specialisti offrono consulenze per responsabilità professionale e casi di presunta malasanità.' }
    ]
  },
  {
    id: 'patente-porto-armi',
    title: 'Patente e porto d\'armi',
    description: 'Rinnovo e rilascio di patenti auto, nautiche e certificazioni per porto d\'armi in sede.',
    longDescription: 'Servizio rapido e organizzato per il rinnovo delle patenti di guida (A, B, C, D, E), patenti nautiche e certificazioni per il porto d\'armi. Durante un unico appuntamento è possibile effettuare la visita medica in sede, accertamenti necessari e completare la pratica burocratica per il rilascio o il rinnovo.',
    icon: IdCard,
    color: 'bg-natural-accent/10 text-natural-accent',
    details: ['Patenti Auto', 'Patenti Nautiche', 'Porto d\'Armi'],
    faq: [
      { question: 'Cosa occorre portare per il rinnovo della patente?', answer: 'Serve la patente in scadenza, un documento di identità valido, il codice fiscale e una fototessera recente (spesso si fa in sede digitale).' },
      { question: 'I tempi per l\'arrivo della nuova patente?', answer: 'Una volta superata la visita, ti rilasciamo un certificato sostitutivo valido per la guida, e la nuova patente arriva a casa tramite posta assicurata generalmente in pochi giorni.' }
    ]
  },
  {
    id: 'servizio-domicilio',
    title: 'Servizio a domicilio',
    description: 'Prestazioni medico‑sanitarie e certificazioni a domicilio per pazienti con difficoltà di spostamento.',
    longDescription: 'Studi Medici Toscana estende le sue cure direttamente a casa dei pazienti. Il servizio a domicilio include visite specialistiche, prelievi ematici ed esami strumentali (come ECG o ecografie portatili) per tutti i pazienti che, per problemi di salute o disabilità, hanno difficoltà a raggiungere i nostri centri.',
    icon: Home,
    color: 'bg-natural-accent/10 text-natural-accent',
    details: ['Visite Domiciliari', 'Prelievi Ematici', 'Terapie e Infermieristica'],
    faq: [
      { question: 'In quali zone è attivo il servizio a domicilio?', answer: 'Il servizio copre varie province toscane limitrofe alle nostre sedi di Pisa e Grosseto. Contattaci per verificare la disponibilità nella tua zona.' },
      { question: 'Quali prestazioni possono essere erogate a domicilio?', answer: 'Eseguiamo prelievi di sangue, medicazioni, elettrocardiogrammi con dispositivi portatili e visite di medicina generale o geriatria.' }
    ]
  }
];
