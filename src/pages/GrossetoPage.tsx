import { motion } from 'framer-motion';
import { useSEO } from '../hooks/useSEO';
import { CONTACT } from '../config/contact';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { LOCAL_BUSINESS_GROSSETO_JSONLD, SITE_URL } from '../lib/structuredData';

export default function GrossetoPage() {
  useSEO({
    title: 'Sede di Grosseto',
    description:
      "Studi Medici Toscana a Grosseto: visite specialistiche, medicina del lavoro, medicina legale e rinnovo patente in Via Adriatico 7.",
    canonical: `${SITE_URL}/grosseto`,
    jsonLd: LOCAL_BUSINESS_GROSSETO_JSONLD,
  });

  return (
    <main className="bg-natural-bg">
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl"
        >
          <span className="text-sm font-bold uppercase tracking-widest text-natural-muted mb-2 block">
            Studi Medici Toscana
          </span>
          <h1 className="text-4xl lg:text-6xl font-serif text-natural-text mb-6">
            La Sede di <span className="italic text-natural-accent">Grosseto</span>
          </h1>
          <p className="text-xl text-natural-text/80 leading-relaxed mb-12">
            La nostra struttura all'avanguardia a Grosseto offre servizi medici specialistici, medicina del lavoro, rinnovi patente e molto altro.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-[32px] border border-natural-border shadow-sm">
              <h3 className="text-2xl font-serif text-natural-text mb-6">Contatti</h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-natural-accent/10 rounded-full flex items-center justify-center text-natural-accent shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <strong className="block text-natural-text font-medium mb-1">Indirizzo</strong>
                    <span className="text-natural-text/80">Via Adriatico 7, 58100 Grosseto (GR)</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-natural-accent/10 rounded-full flex items-center justify-center text-natural-accent shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <strong className="block text-natural-text font-medium mb-1">Telefono</strong>
                    <div className="flex flex-col gap-1">
                      <a href="tel:05641898037" className="text-natural-text/80 hover:text-natural-accent transition-colors">
                        0564 189 8037
                      </a>
                      <a href="tel:3713725768" className="text-natural-text/80 hover:text-natural-accent transition-colors">
                        371 372 5768
                      </a>
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-natural-accent/10 rounded-full flex items-center justify-center text-natural-accent shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <strong className="block text-natural-text font-medium mb-1">Email</strong>
                    <a href={CONTACT.emailUrl} className="text-natural-text/80 hover:text-natural-accent transition-colors">
                      {CONTACT.email}
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-[32px] border border-natural-border shadow-sm flex flex-col justify-center items-center text-center">
              <div className="w-16 h-16 bg-natural-accent rounded-full flex items-center justify-center text-white mb-6">
                <Clock size={32} />
              </div>
              <h3 className="text-2xl font-serif text-natural-text mb-4">Orari di Apertura</h3>
              <p className="text-natural-text/80 mb-2">Lunedì - Venerdì: 09:00 - 13:00 / 15:00 - 19:00</p>
              <p className="text-natural-text/80">Sabato e Domenica: Chiuso</p>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
