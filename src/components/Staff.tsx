import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, useMemo } from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { doctors, type Doctor } from '../data/doctors';

const categories = ['Tutti', 'Geriatria', 'Nutrizione', 'Osteopatia & Podologia', 'Psicologia', 'Reumatologia'];

function DoctorCard({ doctor }: { doctor: Doctor }) {
  const trimmedFormation = doctor.formation
    .split('. ')
    .slice(0, 2)
    .join('. ')
    .replace(/\.?$/, '.');

  return (
    <div className="h-full bg-white border border-natural-card-border px-9 py-8 rounded-[32px] hover:shadow-xl transition-all shadow-sm flex flex-col group">
      <div className="flex items-center gap-4 mb-4 pb-4 border-b border-natural-border">
        <img
          src={doctor.image}
          alt={doctor.name}
          className="w-16 h-16 rounded-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500 shrink-0"
          referrerPolicy="no-referrer"
        />
        <div className="min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="text-[19px] font-bold text-natural-text leading-tight">{doctor.name}</h3>
            <span className="inline-block text-[10px] uppercase tracking-widest font-bold text-natural-accent bg-natural-accent/10 px-2 py-0.5 rounded-full whitespace-nowrap">
              {doctor.category}
            </span>
          </div>
          <p className="font-serif italic text-natural-accent text-sm mt-1">{doctor.role}</p>
        </div>
      </div>

      <div className="flex-1 flex flex-col gap-4">
        <p className="text-base text-natural-text/80 leading-relaxed border-l-2 border-natural-border pl-3">
          {trimmedFormation}
        </p>
        <div>
          <h4 className="text-[11px] uppercase tracking-widest font-bold text-natural-muted mb-2">Aree di Intervento</h4>
          <ul className="space-y-1.5">
            {doctor.treatments.slice(0, 3).map((treatment, i) => (
              <li key={i} className="flex items-start gap-2 text-base text-natural-text/80">
                <span className="w-1.5 h-1.5 rounded-full bg-natural-accent mt-2 shrink-0 opacity-70" />
                <span className="leading-snug">{treatment}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-5 pt-5 border-t border-natural-border mt-auto">
        <Link
          to={`/staff/${doctor.id}`}
          className="w-full inline-flex items-center justify-center gap-2 bg-natural-bg px-4 py-3.5 rounded-xl text-[13px] font-bold uppercase tracking-widest text-natural-text hover:bg-natural-accent hover:text-white transition-all"
        >
          Profilo Completo
          <ChevronRight size={16} />
        </Link>
      </div>
    </div>
  );
}

export default function Staff() {
  const [filter, setFilter] = useState('Tutti');

  const filteredDoctors = useMemo(
    () => doctors.filter((doc) => filter === 'Tutti' || doc.category === filter),
    [filter]
  );

  // Carosello attivo solo se ci sono più di 3 specialisti
  const useCarousel = filteredDoctors.length > 3;

  const autoplay = useRef(
    Autoplay({
      delay: 2800,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  );

  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: 'start', slidesToScroll: 1 },
    [autoplay.current]
  );

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
          {categories.map((cat) => (
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

        {useCarousel ? (
          <div className="overflow-hidden -mx-3" ref={emblaRef}>
            <div className="flex">
              {filteredDoctors.map((doctor) => (
                <div
                  key={doctor.id}
                  className="flex-[0_0_100%] md:flex-[0_0_50%] xl:flex-[0_0_33.3333%] min-w-0 px-3"
                >
                  <DoctorCard doctor={doctor} />
                </div>
              ))}
            </div>
          </div>
        ) : (
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
                >
                  <DoctorCard doctor={doctor} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>
    </section>
  );
}
