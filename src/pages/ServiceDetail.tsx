import { useParams, Link, Navigate } from 'react-router-dom';
import { services } from '../data/services';
import { ArrowLeft, ChevronRight, HelpCircle, MessageCircle, Mail } from 'lucide-react';
import { motion } from 'motion/react';
import Contact from '../components/Contact';
import { useEffect } from 'react';
import { useSEO } from '../hooks/useSEO';
import { CONTACT } from '../config/contact';

// ─────────────────────────────────────────────
//  Markdown renderer – gestisce:
//  ### Titoli, --- dividers, **bold**,
//  - liste puntate, paragrafi normali
// ─────────────────────────────────────────────
function parseBold(str: string): React.ReactNode {
  const parts = str.split(/(\*\*[^*]+\*\*)/);
  return (
    <>
      {parts.map((p, i) =>
        p.startsWith('**') && p.endsWith('**') ? (
          <strong key={i} className="text-natural-text font-semibold">
            {p.slice(2, -2)}
          </strong>
        ) : (
          p
        )
      )}
    </>
  );
}

function renderMarkdown(text: string): React.ReactNode[] {
  const lines = text.split('\n');
  const result: React.ReactNode[] = [];
  let listBuffer: string[] = [];
  let key = 0;
  const k = () => `md-${key++}`;

  const flushList = () => {
    if (listBuffer.length === 0) return;
    result.push(
      <ul key={k()} className="space-y-2 my-3 ml-1">
        {listBuffer.map((item, i) => (
          <li key={i} className="flex items-start gap-3 text-lg text-natural-text/80 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-natural-accent mt-2.5 shrink-0" />
            <span>{parseBold(item)}</span>
          </li>
        ))}
      </ul>
    );
    listBuffer = [];
  };

  for (const line of lines) {
    if (line.startsWith('### ')) {
      flushList();
      result.push(
        <h3 key={k()} className="text-2xl font-serif text-natural-text mt-10 mb-2">
          {line.slice(4)}
        </h3>
      );
    } else if (line.trim() === '---') {
      flushList();
      result.push(<hr key={k()} className="border-natural-border my-8" />);
    } else if (/^[-*] /.test(line)) {
      listBuffer.push(line.slice(2));
    } else if (line.trim() === '') {
      flushList();
    } else {
      flushList();
      result.push(
        <p key={k()} className="text-lg text-natural-text/80 leading-relaxed">
          {parseBold(line)}
        </p>
      );
    }
  }
  flushList();

  return result;
}

export default function ServiceDetail() {
  const { id } = useParams();
  const service = services.find(s => s.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useSEO({
    title: service?.title ?? 'Servizio',
    description: service?.description,
  });

  if (!service) return <Navigate to="/" replace />;

  const Icon = service.icon;

  return (
    <main className="bg-natural-bg">
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <Link
          to="/#servizi"
          className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-natural-muted hover:text-natural-accent transition-colors mb-8"
        >
          <ArrowLeft size={16} className="mr-2" />
          Torna ai servizi
        </Link>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left column – content */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 ${service.color}`}>
              <Icon size={32} />
            </div>
            <h1 className="text-4xl lg:text-5xl font-serif text-natural-text mb-6">{service.title}</h1>

            <div className="mb-8 space-y-3">
              {renderMarkdown(service.longDescription || service.description)}
            </div>

            {/* Service details chips */}
            <div className="bg-white p-8 rounded-[32px] border border-natural-card-border shadow-sm mb-12">
              <h3 className="text-sm font-bold uppercase tracking-widest text-natural-muted mb-4">
                Dettagli del Servizio
              </h3>
              <ul className="space-y-4">
                {service.details.map(detail => (
                  <li key={detail} className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-natural-accent" />
                    <span className="text-natural-text font-medium">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right column – FAQ + CTA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:mt-32"
          >
            {service.faq && service.faq.length > 0 && (
              <div className="mb-12">
                <h2 className="text-2xl font-serif text-natural-text mb-6 flex items-center gap-2">
                  <HelpCircle className="text-natural-accent" size={24} />
                  Domande Frequenti
                </h2>
                <div className="space-y-4">
                  {service.faq.map((faq, index) => (
                    <div key={index} className="bg-white p-6 rounded-2xl border border-natural-border">
                      <h4 className="font-bold text-natural-text mb-2 text-sm">{faq.question}</h4>
                      <p className="text-sm text-natural-muted leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* CTA card */}
            <div className="bg-natural-accent p-8 rounded-[32px] text-white">
              <h3 className="text-2xl font-serif mb-4">Prenota questo servizio</h3>
              <p className="text-white/80 text-sm mb-8 leading-relaxed">
                Il nostro staff è a tua disposizione per fornirti maggiori informazioni e fissare un appuntamento.
              </p>
              <div className="flex flex-col gap-3">
                <a
                  href={CONTACT.whatsappMessage(service.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full bg-white text-natural-accent px-6 py-4 rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-natural-bg transition-colors shadow-lg gap-2"
                >
                  <MessageCircle size={18} />
                  Scrivici su WhatsApp
                </a>
                <a
                  href={CONTACT.emailUrl}
                  className="inline-flex items-center justify-center w-full bg-white/10 text-white border border-white/20 px-6 py-4 rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-white/20 transition-colors gap-2"
                >
                  <Mail size={18} />
                  Invia una Email
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <Contact />
    </main>
  );
}
