import LegalPage from './LegalPage';

export default function CookiePage() {
  return (
    <LegalPage
      title="Cookie Policy"
      updatedAt="Aprile 2026"
      metaDescription="Informativa sull'uso dei cookie del sito di Studi Medici Toscana, ai sensi del provvedimento del Garante Privacy del 10 giugno 2021."
      intro="Questa Cookie Policy descrive le tipologie di cookie utilizzati sul sito di Studi Medici Toscana, le finalità per cui vengono impiegati e le modalità con cui l'utente può gestirne le preferenze, in conformità al provvedimento del Garante per la protezione dei dati personali del 10 giugno 2021."
      sections={[
        {
          title: 'Cosa sono i cookie',
          body: (
            <p>
              I cookie sono piccoli file di testo che i siti web salvano sul dispositivo
              dell'utente durante la navigazione. Permettono al sito di funzionare correttamente,
              ricordare le preferenze e raccogliere informazioni anonime sull'uso del sito.
            </p>
          ),
        },
        {
          title: 'Cookie tecnici (sempre attivi)',
          body: (
            <p>
              Il nostro sito utilizza esclusivamente <strong>cookie tecnici di sessione</strong>{' '}
              necessari al corretto funzionamento delle pagine, alla navigazione tra le sezioni e
              alla gestione delle prenotazioni tramite WhatsApp. Per questi cookie non è richiesto
              il consenso dell'utente, in conformità all'art. 122 del Codice Privacy.
            </p>
          ),
        },
        {
          title: 'Cookie di terze parti',
          body: (
            <>
              <p>Il sito può integrare contenuti o servizi di terze parti che possono installare cookie autonomamente:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Google Fonts</strong> — caricamento dei font tipografici (cookie tecnici).</li>
                <li><strong>WhatsApp</strong> — pulsante di prenotazione che reindirizza alla piattaforma esterna.</li>
                <li><strong>Google Maps</strong> — eventuale visualizzazione delle sedi tramite mappe.</li>
              </ul>
              <p>
                Le rispettive informative privacy sono disponibili sui siti dei fornitori. Studi
                Medici Toscana non ha controllo diretto sul trattamento effettuato da questi
                soggetti terzi.
              </p>
            </>
          ),
        },
        {
          title: 'Gestione delle preferenze',
          body: (
            <p>
              L'utente può in qualsiasi momento bloccare o eliminare i cookie attraverso le
              impostazioni del proprio browser (Chrome, Firefox, Safari, Edge). La disattivazione
              dei cookie tecnici può tuttavia compromettere alcune funzionalità del sito.
            </p>
          ),
        },
        {
          title: 'Cookie di profilazione e marketing',
          body: (
            <p>
              Il sito di Studi Medici Toscana <strong>non utilizza cookie di profilazione</strong>{' '}
              né strumenti di marketing automatizzato che richiedano il consenso esplicito
              dell'utente.
            </p>
          ),
        },
      ]}
    />
  );
}
