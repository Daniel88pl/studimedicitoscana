import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <section id="chi-siamo" className="py-24 bg-natural-bg overflow-hidden border-y border-natural-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative"
          >
            <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl border border-natural-border aspect-[5/4]">
              <img 
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1000&h=800" 
                alt="Our Facility" 
                className="w-full h-full object-cover grayscale-[10%]"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-natural-accent/10 rounded-[40px] -z-0 hidden md:block" />
            <div className="absolute -top-6 -left-6 w-32 h-32 border border-natural-accent/20 rounded-[40px] -z-0 hidden md:block" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <span className="text-xs uppercase tracking-[0.2em] text-natural-muted font-bold mb-4 block">Chi Siamo</span>
            <h2 className="text-4xl lg:text-5xl font-serif text-natural-text mb-6 leading-tight">
              Un servizio sanitario <br />
              <span className="italic text-natural-accent">completo e organizzato</span>
            </h2>
            <p className="text-lg text-natural-muted mb-6 leading-relaxed">
              Studi Medici Toscana nasce per offrire un servizio sanitario capace di seguire la persona e le aziende in tutte le principali necessità mediche, preventive e certificative.
            </p>
            <p className="text-md text-natural-text/80 mb-8 leading-relaxed">
              Il nostro modello di lavoro è multidisciplinare: per ogni paziente o azienda viene costruito un percorso personalizzato che integra visite, esami, sorveglianza sanitaria e consulenze medico‑legali, nel rispetto delle normative vigenti e con particolare attenzione ai tempi e alla praticità del servizio.
            </p>
            
            <div className="space-y-4 mb-10">
              <div className="flex gap-4">
                <div className="w-5 h-5 bg-natural-accent/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  <span className="w-2 h-2 bg-natural-accent rounded-full" />
                </div>
                <span className="text-natural-text font-medium text-sm leading-relaxed">
                  L’équipe è composta da specialisti in ortopedia, endocrinologia, neurologia, dermatologia, urologia, reumatologia, chirurgia generale, otorinolaringoiatria, cardiologia, chirurgia maxillo‑facciale, psicologia, nutrizione clinica, logopedia, podologia, fisioterapia, osteopatia e medicina legale.
                </span>
              </div>
            </div>

            <button className="bg-natural-accent text-white px-8 py-3 rounded-full font-semibold hover:bg-[#4a4a35] transition-colors shadow-lg shadow-natural-accent/10">
              Leggi la Nostra Storia
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
