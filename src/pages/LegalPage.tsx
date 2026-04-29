import { useEffect } from 'react';
import { Link } from 'react-router-dom';

interface Section {
  title: string;
  body: React.ReactNode;
}

interface LegalPageProps {
  title: string;
  updatedAt: string;
  intro: string;
  sections: Section[];
  metaDescription: string;
}

export default function LegalPage({ title, updatedAt, intro, sections, metaDescription }: LegalPageProps) {
  useEffect(() => {
    document.title = `${title} — Studi Medici Toscana`;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', metaDescription);
    window.scrollTo(0, 0);
  }, [title, metaDescription]);

  return (
    <main className="min-h-screen pt-32 pb-20" style={{ background: '#f7f6f1' }}>
      <article className="mx-auto max-w-3xl px-6 lg:px-8">
        <Link
          to="/"
          className="text-xs uppercase tracking-widest text-natural-muted hover:text-natural-accent transition-colors"
        >
          ← Torna alla home
        </Link>

        <header className="mt-6 mb-10 pb-8 border-b border-natural-border">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-natural-accent mb-3">
            Informativa
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-natural-text leading-tight mb-4">
            {title}
          </h1>
          <p className="text-sm text-natural-muted">Ultimo aggiornamento: {updatedAt}</p>
        </header>

        <p className="text-base leading-relaxed text-natural-text/80 mb-10">{intro}</p>

        <div className="space-y-10">
          {sections.map((s, i) => (
            <section key={i}>
              <h2 className="font-serif text-2xl text-natural-text mb-3">
                {i + 1}. {s.title}
              </h2>
              <div className="text-[15px] leading-relaxed text-natural-text/75 space-y-3">
                {s.body}
              </div>
            </section>
          ))}
        </div>

        <footer className="mt-14 pt-8 border-t border-natural-border text-sm text-natural-muted">
          <p>
            Per qualsiasi domanda relativa a questa informativa puoi contattarci a{' '}
            <a
              href="mailto:studimedicitoscana.grosseto.19@gmail.com"
              className="text-natural-accent underline"
            >
              studimedicitoscana.grosseto.19@gmail.com
            </a>{' '}
            o telefonicamente al <a href="tel:3497256208" className="text-natural-accent underline">349 725 6208</a>.
          </p>
          <p className="mt-3">
            <strong>Studi Medici Toscana</strong> — P.IVA 01400870471<br />
            Sede legale: Viale Antonio Gramsci 3, 56125 Pisa (PI)
          </p>
        </footer>
      </article>
    </main>
  );
}
