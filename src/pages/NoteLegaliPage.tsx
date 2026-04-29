import LegalPage from './LegalPage';

export default function NoteLegaliPage() {
  return (
    <LegalPage
      title="Note Legali"
      updatedAt="Aprile 2026"
      metaDescription="Note legali, dati identificativi della struttura sanitaria privata Studi Medici Toscana e informazioni sull'autorizzazione all'esercizio."
      intro="Questa pagina riporta i dati identificativi di Studi Medici Toscana, le informazioni relative all'autorizzazione all'esercizio dell'attività sanitaria e le condizioni d'uso del sito web."
      sections={[
        {
          title: 'Dati identificativi della struttura',
          body: (
            <>
              <p><strong>Denominazione:</strong> Studi Medici Toscana</p>
              <p><strong>Partita IVA:</strong> 01400870471</p>
              <p><strong>Sede principale:</strong> Viale Antonio Gramsci 3, 56125 Pisa (PI)</p>
              <p><strong>Succursale:</strong> Via Adriatico 7, 58100 Grosseto (GR)</p>
              <p><strong>Telefono Pisa:</strong> 050 520 1928 · 349 725 6208</p>
              <p><strong>Telefono Grosseto:</strong> 0564 189 8037 · 371 372 5768</p>
              <p>
                <strong>Email:</strong>{' '}
                <a href="mailto:studimedicitoscana.grosseto.19@gmail.com" className="text-natural-accent underline">
                  studimedicitoscana.grosseto.19@gmail.com
                </a>
              </p>
            </>
          ),
        },
        {
          title: 'Autorizzazione sanitaria',
          body: (
            <p>
              Studi Medici Toscana opera in qualità di struttura sanitaria privata regolarmente
              autorizzata all'esercizio dell'attività ai sensi della normativa regionale
              toscana. Tutti i medici operanti sono iscritti agli Ordini Provinciali dei Medici
              Chirurghi e Odontoiatri di competenza e in regola con gli obblighi formativi ECM.
            </p>
          ),
        },
        {
          title: 'Proprietà intellettuale',
          body: (
            <p>
              Tutti i contenuti pubblicati su questo sito (testi, immagini, loghi, grafica,
              elementi audiovisivi) sono di proprietà di Studi Medici Toscana o dei rispettivi
              titolari e sono protetti dalle normative vigenti in materia di diritto d'autore. È
              vietata la riproduzione, anche parziale, senza esplicita autorizzazione scritta.
            </p>
          ),
        },
        {
          title: 'Pubblicità sanitaria',
          body: (
            <p>
              Le informazioni pubblicate sul sito rispettano le disposizioni della Legge
              175/1992 e della Legge 145/2018 in materia di pubblicità sanitaria, hanno
              esclusiva finalità informativa e non promozionale, nel rispetto dei principi di
              trasparenza, veridicità e correttezza.
            </p>
          ),
        },
        {
          title: 'Limitazioni di responsabilità',
          body: (
            <p>
              I contenuti del sito sono forniti a scopo informativo. Studi Medici Toscana si
              impegna ad aggiornare le informazioni con regolarità, ma non garantisce l'assenza
              di errori o omissioni. Le informazioni cliniche pubblicate non sostituiscono il
              consulto con un medico qualificato.
            </p>
          ),
        },
        {
          title: 'Link esterni',
          body: (
            <p>
              Il sito può contenere collegamenti a siti di terze parti. Studi Medici Toscana non
              esercita alcun controllo sui contenuti di tali siti e declina ogni responsabilità
              per le informazioni in essi pubblicate.
            </p>
          ),
        },
        {
          title: 'Legge applicabile',
          body: (
            <p>
              Le presenti note legali sono regolate dalla legge italiana. Per ogni controversia
              è competente in via esclusiva il Foro di Pisa.
            </p>
          ),
        },
      ]}
    />
  );
}
