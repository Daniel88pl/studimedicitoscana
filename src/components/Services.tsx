import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { services } from '../data/services';

export default function Services() {
  return (
    <section id="servizi" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl lg:text-5xl font-serif text-natural-text mb-4">I nostri servizi</h2>
            <p className="text-lg text-natural-muted">
              Nelle nostre sedi offriamo servizi ambulatoriali, prestazioni a domicilio, attività di medicina del lavoro, medicina legale, rinnovo patente e porto d’armi, oltre a numerose visite specialistiche per adulti e bambini.
            </p>
          </div>
          <a href="#contatti" className="text-sm shrink-0 font-medium underline underline-offset-4 text-natural-accent hover:opacity-80 transition-opacity">
            Contattaci per informazioni
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-[32px] border border-natural-card-border hover:shadow-lg transition-all group h-full flex flex-col"
            >
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-colors group-hover:bg-natural-accent group-hover:text-white ${service.color}`}>
                <service.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-natural-text mb-3">{service.title}</h3>
              <p className="text-xs text-natural-muted leading-relaxed mb-6">
                {service.description}
              </p>
              <ul className="space-y-2 mb-8 mt-auto">
                {service.details.map((detail) => (
                  <li key={detail} className="flex items-center gap-2 text-xs font-semibold tracking-wide text-natural-muted">
                    <span className="w-1 h-1 rounded-full bg-natural-accent" />
                    {detail}
                  </li>
                ))}
              </ul>
              <Link to={`/servizi/${service.id}`} className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-natural-accent hover:opacity-70 transition-all">
                Scopri di più
                <ChevronRight size={14} className="ml-2" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
