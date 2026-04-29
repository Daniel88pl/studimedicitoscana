import LegalPage from './LegalPage';

export default function TerminiPage() {
  return (
    <LegalPage
      title="Termini e Condizioni"
      updatedAt="Aprile 2026"
      metaDescription="Termini e condizioni di utilizzo dei servizi sanitari privati erogati da Studi Medici Toscana presso le sedi di Pisa e Grosseto."
      intro="I presenti Termini e Condizioni regolano l'erogazione dei servizi sanitari privati di Studi Medici Toscana presso le sedi di Pisa e Grosseto, nonché l'uso del sito web e dei canali di prenotazione (telefono, WhatsApp, email)."
      sections={[
        {
          title: 'Servizi offerti',
          body: (
            <p>
              Studi Medici Toscana eroga prestazioni sanitarie private in regime ambulatoriale e
              domiciliare, tra cui: visite specialistiche per adulti e pediatriche, prelievi
              ematici, diagnostica per immagini, medicina del lavoro, medicina legale, rinnovo
              patenti e porto d'armi. Le prestazioni sono effettuate da medici specialisti
              regolarmente iscritti all'Ordine dei Medici.
            </p>
          ),
        },
        {
          title: 'Prenotazioni e disdette',
          body: (
            <>
              <p>
                Le prenotazioni possono essere effettuate telefonicamente, via WhatsApp o email.
                La conferma dell'appuntamento è subordinata alla disponibilità dello specialista
                richiesto.
              </p>
              <p>
                In caso di impossibilità a presentarsi, l'utente è pregato di disdire
                l'appuntamento con almeno <strong>24 ore di anticipo</strong>. Le mancate disdette
                ripetute possono comportare la richiesta di acconto per future prenotazioni.
              </p>
            </>
          ),
        },
        {
          title: 'Tariffe e pagamenti',
          body: (
            <p>
              Le tariffe delle prestazioni vengono comunicate al momento della prenotazione. Il
              pagamento avviene al termine della visita, in contanti, bancomat o carta di credito.
              Per ogni prestazione viene rilasciata regolare fattura sanitaria, valida ai fini
              della detrazione fiscale.
            </p>
          ),
        },
        {
          title: 'Servizio a domicilio',
          body: (
            <p>
              Il servizio a domicilio è disponibile entro 24/48 ore dalla richiesta, senza costi
              aggiuntivi rispetto alla visita in sede salvo casi particolari concordati al momento
              della prenotazione. La copertura geografica include le province di Pisa, Grosseto e
              comuni limitrofi.
            </p>
          ),
        },
        {
          title: 'Certificazioni medico-legali',
          body: (
            <p>
              Le certificazioni di idoneità (patenti, porto d'armi, sportiva, lavorativa) vengono
              rilasciate al termine della visita previo accertamento dei requisiti psicofisici
              previsti dalla normativa vigente. L'esito della visita è insindacabile e
              responsabilità esclusiva del medico certificatore.
            </p>
          ),
        },
        {
          title: 'Limitazioni di responsabilità',
          body: (
            <p>
              Le informazioni pubblicate sul sito hanno carattere generale e non sostituiscono in
              alcun modo la visita medica. Studi Medici Toscana non risponde di eventuali danni
              derivanti dall'uso improprio delle informazioni del sito o dal mancato rispetto delle
              indicazioni fornite dai propri sanitari.
            </p>
          ),
        },
        {
          title: 'Foro competente',
          body: (
            <p>
              Per qualsiasi controversia relativa all'interpretazione o all'esecuzione dei
              presenti Termini è competente in via esclusiva il Foro di Pisa, salvo le competenze
              inderogabili del consumatore previste dalla legge.
            </p>
          ),
        },
      ]}
    />
  );
}
