import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { MapPin, Phone, Mail, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { doctors } from '../data/doctors';

const categories = ['Tutti', 'Geriatria', 'Nutrizione', 'Osteopatia & Podologia', 'Psicologia', 'Reumatologia'];

export default function Staff() {
  const [filter, setFilter] = useState('Tutti');

  const filteredDoctors = doctors.filter(doc => filter === 'Tutti' || doc.category === filter);

  return (
    <section id="specialisti" className="py-24 bg-natural-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.2em] text-natural-muted font-bold mb-4 block">Il Nostro Staff</span>
            <h2 className="text-4xl lg:text-5xl font-serif text-natural-text mb-4 tracking-tight">
              I Nostri <span className="italic text-natural-accent">Specialisti</span>
            </h2>
            <p className="text-lg text-natural-muted">
              Un team d'eccellenza dedicato a fornire competenze mediche specifiche attraverso un approccio profondamente umano.
            </p>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                filter === cat
                  ? 'bg-natural-accent text-white shadow-lg shadow-natural-accent/20 border-natural-accent'
                  : 'bg-white border border-natural-border text-natural-muted hover:border-natural-accent hover:text-natural-accent'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredDoctors.map((doctor) => (
              <motion.div
                key={doctor.id}
                layout
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                transition={{ duration: 0.4 }}
                className="h-full bg-white border border-natural-card-border px-6 py-5 rounded-[32px] hover:shadow-xl transition-all shadow-sm flex flex-col group"
              >
                <div className="flex items-center gap-3 mb-2.5 pb-2.5 border-b border-natural-border">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-10 h-10 rounded-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500 shrink-0"
                    referrerPolicy="no-referrer"
                  />
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-base font-bold text-natural-text leading-tight">{doctor.name}</h3>
                      <span className="inline-block text-[9px] uppercase tracking-widest font-bold text-natural-accent bg-natural-accent/10 px-2 py-0.5 rounded-full whitespace-nowrap">
                        {doctor.category}
                      </span>
                    </div>
                    <p className="font-serif italic text-natural-accent text-xs mt-0.5">{doctor.role}</p>
                  </div>
                </div>

                <div className="flex-1 flex flex-col gap-2.5">
                  <p className="text-sm text-natural-text/80 leading-snug border-l-2 border-natural-border pl-3">
                    {doctor.formation.split('. ').slice(0, 2).join('. ').replace(/\.?$/, '.')}
                  </p>
                  <div>
                    <h4 className="text-[10px] uppercase tracking-widest font-bold text-natural-muted mb-1.5">Aree di Intervento</h4>
                    <ul className="space-y-1">
                      {doctor.treatments.slice(0, 3).map((treatment, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-natural-text/80">
                          <span className="w-1.5 h-1.5 rounded-full bg-natural-accent mt-1.5 shrink-0 opacity-70" />
                          <span className="leading-tight">{treatment}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-3 pt-3 border-t border-natural-border mt-auto flex items-center justify-between gap-3">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-natural-muted min-w-0 flex-1">
                    <MapPin size={12} className="text-natural-accent shrink-0" />
                    <span className="truncate">{doctor.location}</span>
                    <span className="text-natural-accent">·</span>
                    {doctor.contact.includes('@') ? (
                      <Mail size={12} className="text-natural-accent shrink-0" />
                    ) : (
                      <Phone size={12} className="text-natural-accent shrink-0" />
                    )}
                    <span className="truncate">{doctor.contact}</span>
                  </div>
                  <Link to={`/staff/${doctor.id}`} className="inline-flex items-center gap-1 bg-natural-bg px-3 py-2 rounded-xl text-[11px] font-bold uppercase tracking-widest text-natural-text hover:bg-natural-accent hover:text-white transition-all shrink-0">
                    Profilo
                    <ChevronRight size={12} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
