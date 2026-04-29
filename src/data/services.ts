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
    id: 'servizi-ambulatorio',
    title: 'Servizi ambulatoriali',
    description: 'Visite specialistiche per adulti e bambini, prelievi ematici, equipe pediatrica e diagnostica per immagini in un unico centro.',
    longDescription: `### Cosa offriamo

Il nostro ambulatorio mette a disposizione un'équipe multidisciplinare di medici specialisti per adulti e bambini, con un servizio infermieristico interno dedicato alle prestazioni quotidiane più frequenti.

Un punto di riferimento completo: dalla visita specialistica agli esami del sangue, fino alla diagnostica per immagini — tutto gestito in una sola struttura.

---

### Servizio infermieristico e prelievi

Il nostro infermiere interno esegue prestazioni infermieristiche e prelievi ematici per pazienti privati, con referti elaborati dai laboratori d'analisi convenzionati e consegnati direttamente al paziente.

I prelievi sono disponibili anche nell'ambito della **medicina del lavoro**, integrandosi con i protocolli sanitari aziendali.

---

### Équipe pediatrica specialistica

Offriamo un percorso dedicato all'età evolutiva con professionisti specializzati:

- **Logopedista** – valutazione e trattamento dei disturbi del linguaggio e della comunicazione
- **Neuropsichiatra infantile** – diagnosi e supporto per disturbi neurologici e psichiatrici in età pediatrica
- **Psicologo infantile** – sostegno psicologico per bambini e famiglie
- **Nutrizionista pediatrica** – piani alimentari personalizzati per la crescita
- **Ortopedico pediatrico** – valutazione posturale e trattamento patologie muscolo-scheletriche

---

### Diagnostica per immagini – RX digitale

In collaborazione con un istituto esterno accreditato, offriamo esami radiografici con tecnologia digitale e **refertazione immediata**, consegnata direttamente a casa del paziente o presso i nostri studi.

Con questa apparecchiatura è possibile eseguire tutti i principali esami RX senza mezzo di contrasto, per ogni tipo di paziente.

**Il servizio è disponibile anche a domicilio**, per chi non può spostarsi o preferisce la comodità della propria abitazione.`,
    icon: Stethoscope,
    color: 'bg-natural-accent/10 text-natural-accent',
    details: ['Specialisti Adulti e Bambini', 'Prelievi Ematici', 'RX Digitale con Referto Immediato'],
    faq: [
      {
        question: 'Devo prenotare in anticipo per il prelievo del sangue?',
        answer: 'Sì, consigliamo sempre di prenotare per garantirti un orario preciso e ridurre i tempi di attesa. Puoi farlo tramite WhatsApp o email.'
      },
      {
        question: 'I referti degli esami del sangue dove li ricevo?',
        answer: 'I referti vengono elaborati dai laboratori d\'analisi convenzionati e ti vengono consegnati direttamente, nella modalità che preferisci: cartaceo in sede o digitale via email.'
      },
      {
        question: 'Quali esami RX si possono fare?',
        answer: 'Si possono eseguire tutti i principali esami radiografici senza mezzo di contrasto. Sono esclusi OPT (ortopantomografia), mammografia e gigantografia, che richiedono apparecchiature dedicate.'
      },
      {
        question: 'Il servizio RX è disponibile anche a domicilio?',
        answer: 'Sì. L\'apparecchiatura digitale è trasportabile, quindi possiamo effettuare l\'esame direttamente a casa del paziente. Il referto viene consegnato in forma digitale o cartacea.'
      },
      {
        question: 'A che età si rivolgono i vostri specialisti pediatrici?',
        answer: 'L\'équipe pediatrica segue bambini dalla prima infanzia fino all\'adolescenza. Per ogni specialità, il professionista valuterà il percorso più adatto in base all\'età e alle esigenze del piccolo paziente.'
      }
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
    description: 'Perizie di parte, consulenze assicurative e valutazione del danno biologico per RCA, malasanità e infortuni privati. Prima valutazione gratuita.',
    longDescription: `### Cosa facciamo

Studi Medici Toscana collabora con specialisti in Medicina Legale per la redazione di **perizie di parte** e consulenze tecniche in ambito di responsabilità civile, infortunistica privata e responsabilità professionale medica.

Il nostro approccio è multidisciplinare: medici legali esperti in materia assicurativa lavorano in stretta collaborazione con gli specialisti delle altre branche cliniche e chirurgiche, garantendo un'analisi completa anche nei casi più complessi.

---

### Per quali situazioni possiamo aiutarti

**Responsabilità Civile Auto (RCA)**

Valutazione medico-legale del danno biologico conseguente a incidenti stradali, con perizia di parte a supporto della richiesta risarcitoria.

**Responsabilità professionale medica (malasanità)**

Analisi della documentazione clinica, valutazione delle eventuali omissioni o errori diagnostici e terapeutici, redazione della perizia tecnica di parte.

**Polizza privata infortuni**

Consulenza specialistica per la quantificazione del danno e supporto nelle trattative con le compagnie assicurative.

---

### Presa in carico completa

I nostri specialisti possono seguire il paziente danneggiato **in tutta la fase post-traumatica**: dalla prima valutazione clinica alle visite di controllo, fino alla chiusura della pratica.

Nelle nostre strutture operano medici delle principali specialità cliniche e chirurgiche, pronti a supportare il medico legale con referti e valutazioni specifiche per ogni caso.

---

### Come iniziare

Porta la tua pratica presso i nostri studi: effettuiamo una **prima valutazione gratuita** per analizzare il caso e fornirti un preventivo chiaro e dettagliato, senza impegno.`,
    icon: Gavel,
    color: 'bg-natural-accent/10 text-natural-accent',
    details: ['Prima Valutazione Gratuita', 'Perizie RCA e Malasanità', 'Supporto Post-Traumatico'],
    faq: [
      { question: 'La prima valutazione è davvero gratuita?', answer: 'Sì. Puoi portare la tua pratica presso i nostri studi senza alcun impegno: analizziamo il caso e ti forniamo un preventivo chiaro prima di procedere.' },
      { question: 'Cosa devo portare per la prima valutazione?', answer: 'È utile portare tutta la documentazione medica relativa all\'evento (referti del pronto soccorso, esami strumentali, cartelle cliniche) e, se disponibile, la documentazione assicurativa o legale già in tuo possesso.' },
      { question: 'Cosa si intende per perizia di parte?', answer: 'È una valutazione tecnica redatta da un medico legale che tutela gli interessi del danneggiato — non della compagnia assicurativa o della controparte. Serve a quantificare correttamente il danno biologico e supportare la richiesta di risarcimento.' },
      { question: 'Gestite anche casi di presunta malasanità?', answer: 'Sì. I nostri medici legali analizzano la documentazione clinica per valutare eventuali omissioni, errori diagnostici o terapeutici e redigono la perizia tecnica di parte necessaria per avviare la procedura stragiudiziale o giudiziale.' },
      { question: 'Potete seguirmi anche dopo l\'infortunio, non solo per la perizia?', answer: 'Sì. Gli specialisti presenti nelle nostre strutture possono seguire il paziente in tutta la fase post-traumatica, dalle visite di controllo agli accertamenti strumentali, collaborando con il medico legale per una valutazione integrata del caso.' }
    ]
  },
  {
    id: 'patente-porto-armi',
    title: 'Rinnovo Patente e porto d\'armi',
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
    description: 'Visite specialistiche, infermieristica e diagnostica direttamente a casa tua — entro 24/48 ore, senza costi aggiuntivi rispetto alla visita in sede.',
    longDescription: `### Un medico a casa tua, quando ne hai bisogno

Il nostro centro eroga visite specialistiche private a domicilio entro **24/48 ore** dalla richiesta, in base all'urgenza. Lo stesso servizio è disponibile anche presso la nostra sede di Viale Antonio Gramsci 3, Pisa.

Nessun costo aggiuntivo: la prestazione domiciliare ha lo stesso prezzo della visita in struttura.

---

### A chi si rivolge

Il servizio è pensato per chi ha difficoltà a spostarsi o preferisce la comodità della propria abitazione:

- Pazienti con difficoltà motorie o impossibilitati a deambulare
- Anziani e pazienti fragili
- Studenti e lavoratori fuori sede
- Ospiti di alberghi o strutture ricettive
- Stranieri temporaneamente presenti sul territorio
- Chiunque abbia la necessità di una visita senza spostarsi

---

### Cosa portiamo a domicilio

Ogni specialista si presenta con la propria strumentazione portatile, per eseguire tutti gli accertamenti necessari direttamente sul posto:

- **Ecografo** – ecografie addominali, muscolari, tiroidee e altro
- **Elettrocardiografo** – ECG a riposo con referto immediato
- **Eco-color Doppler** – valutazione vascolare e cardiologica
- **Strumentazione odontoiatrica** – il servizio include anche la specialistica dentistica a domicilio

---

### Team infermieristico

Il nostro personale infermieristico è regolarmente iscritto all'albo professionale e coperto da polizza assicurativa. Esegue a domicilio o in sede:

- Medicazioni e terapie iniettive
- Prelievi ematici
- Assistenza e monitoraggio clinico

---

### Diagnostica RX a domicilio

In collaborazione con un istituto esterno accreditato, è possibile eseguire esami radiografici digitali direttamente a casa del paziente, con **refertazione immediata** consegnata in formato digitale o cartaceo.

Si possono effettuare tutti i principali esami RX senza mezzo di contrasto (esclusi OPT, mammografia e gigantografia).

---

### Disponibilità

Il servizio è attivo **365 giorni l'anno, 7 giorni su 7**, con priorità in base all'urgenza clinica.`,
    icon: Home,
    color: 'bg-natural-accent/10 text-natural-accent',
    details: ['Entro 24/48 ore', 'Nessun costo aggiuntivo', '365 giorni l\'anno'],
    faq: [
      {
        question: 'La visita a domicilio costa di più rispetto a quella in sede?',
        answer: 'No. Il nostro personale medico e paramedico non applica alcun sovrapprezzo per le prestazioni domiciliari. Il costo è identico a quello della visita in struttura.'
      },
      {
        question: 'In quanto tempo arriva il medico?',
        answer: 'Le visite vengono effettuate entro 24/48 ore dalla richiesta. In caso di urgenza, il tempo di intervento viene ridotto al minimo possibile. Contattaci per valutare insieme la situazione.'
      },
      {
        question: 'Quali specialisti sono disponibili a domicilio?',
        answer: 'Sono disponibili le principali specialità mediche, oltre a terapisti, osteopati e infermieri. Ogni professionista si presenta con la propria strumentazione portatile (ecografo, ECG, eco-color Doppler, ecc.). Il servizio include anche la specialistica odontoiatrica.'
      },
      {
        question: 'Come si prenota il servizio?',
        answer: 'Puoi prenotare telefonicamente, via WhatsApp o via email. Il servizio viene attivato nel più breve tempo possibile dalla richiesta.'
      },
      {
        question: 'Il servizio è disponibile anche nei weekend e nei festivi?',
        answer: 'Sì. Il nostro team è operativo 365 giorni l\'anno, 7 giorni su 7, con priorità gestita in base all\'urgenza clinica del paziente.'
      },
      {
        question: 'È possibile fare esami del sangue e radiografie a domicilio?',
        answer: 'Sì a entrambi. Il personale infermieristico esegue prelievi ematici con referti tramite laboratori convenzionati. Per la diagnostica RX, disponiamo di apparecchiatura digitale portatile per tutti i principali esami senza mezzo di contrasto, con referto immediato.'
      }
    ]
  }
];
