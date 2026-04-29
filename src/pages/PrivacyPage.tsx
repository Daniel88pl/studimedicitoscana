import LegalPage from './LegalPage';

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updatedAt="Aprile 2026"
      metaDescription="Informativa sul trattamento dei dati personali e dati sanitari di Studi Medici Toscana, ai sensi del Regolamento UE 2016/679 (GDPR)."
      intro="La presente informativa descrive come Studi Medici Toscana tratta i dati personali e i dati relativi alla salute degli utenti che usufruiscono dei nostri servizi sanitari, navigano sul sito o ci contattano. Il trattamento avviene nel rispetto del Regolamento UE 2016/679 (GDPR) e del D.Lgs. 196/2003 e successive modifiche."
      sections={[
        {
          title: 'Titolare del trattamento',
          body: (
            <>
              <p>
                Il Titolare del trattamento è <strong>Studi Medici Toscana</strong>, con sede legale
                in Viale Antonio Gramsci 3, 56125 Pisa (PI), P.IVA 01400870471.
              </p>
              <p>
                Per qualsiasi richiesta inerente il trattamento dei tuoi dati puoi scrivere a{' '}
                <a href="mailto:studimedicitoscana.grosseto.19@gmail.com" className="text-natural-accent underline">
                  studimedicitoscana.grosseto.19@gmail.com
                </a>.
              </p>
            </>
          ),
        },
        {
          title: 'Categorie di dati trattati',
          body: (
            <>
              <p>Trattiamo le seguenti categorie di dati:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Dati anagrafici e di contatto</strong>: nome, cognome, codice fiscale, indirizzo, telefono, email.</li>
                <li><strong>Dati relativi alla salute</strong> (categoria particolare ex art. 9 GDPR): anamnesi, referti, diagnosi, prescrizioni, esami diagnostici, certificazioni medico-legali e di idoneità.</li>
                <li><strong>Dati amministrativi e fiscali</strong>: dati di fatturazione necessari all'erogazione delle prestazioni private.</li>
                <li><strong>Dati di navigazione</strong>: log tecnici e cookie, secondo quanto descritto nella Cookie Policy.</li>
              </ul>
            </>
          ),
        },
        {
          title: 'Finalità e basi giuridiche',
          body: (
            <>
              <p>I dati sono trattati per le seguenti finalità:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Erogazione di prestazioni sanitarie, medico-legali e di medicina del lavoro (base giuridica: art. 9 par. 2 lett. h GDPR — finalità di medicina preventiva, diagnosi, assistenza sanitaria).</li>
                <li>Adempimenti amministrativi, contabili e fiscali (obbligo di legge).</li>
                <li>Riscontro a richieste di informazioni o prenotazioni (esecuzione di misure precontrattuali).</li>
                <li>Adempimenti relativi a certificazioni di idoneità, patenti, porto d'armi (obbligo di legge).</li>
              </ul>
            </>
          ),
        },
        {
          title: 'Modalità di trattamento e conservazione',
          body: (
            <>
              <p>
                I dati sono trattati con strumenti cartacei ed elettronici, con misure tecniche e
                organizzative idonee a garantire sicurezza e riservatezza, in particolare per i dati
                sanitari. L'accesso è limitato al personale sanitario, amministrativo e ai
                responsabili autorizzati.
              </p>
              <p>
                I dati sanitari sono conservati per il tempo previsto dalla normativa sanitaria
                (almeno 10 anni per la cartella clinica). I dati amministrativi sono conservati per
                10 anni come previsto dalla normativa fiscale.
              </p>
            </>
          ),
        },
        {
          title: 'Comunicazione e destinatari',
          body: (
            <p>
              I dati possono essere comunicati a: medici specialisti collaboratori, laboratori di
              analisi convenzionati, strutture diagnostiche partner, consulente del lavoro,
              commercialista, autorità sanitarie e amministrative competenti (es. Motorizzazione,
              Prefettura, INAIL, ASL) nei casi previsti dalla legge. I dati non sono diffusi né
              trasferiti al di fuori dell'Unione Europea.
            </p>
          ),
        },
        {
          title: 'Diritti dell\'interessato',
          body: (
            <>
              <p>In qualunque momento puoi esercitare i diritti previsti dagli artt. 15-22 GDPR:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>accesso ai dati e ottenimento di copia;</li>
                <li>rettifica dei dati inesatti;</li>
                <li>cancellazione (nei limiti consentiti dalla normativa sanitaria);</li>
                <li>limitazione e opposizione al trattamento;</li>
                <li>portabilità dei dati;</li>
                <li>reclamo al Garante per la protezione dei dati personali (www.garanteprivacy.it).</li>
              </ul>
            </>
          ),
        },
      ]}
    />
  );
}
