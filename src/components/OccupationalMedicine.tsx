import { motion } from 'framer-motion';
import { Briefcase, CheckCircle2, ChevronRight, Users } from 'lucide-react';
import medicinaLavoroImg from '@/assets/medicina-del-lavoro.png';
import { Link } from 'react-router-dom';

export default function OccupationalMedicine() {
  return (
    <section className="py-24 bg-natural-bg border-y border-natural-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-12 h-12 bg-natural-accent/10 rounded-2xl flex items-center justify-center text-natural-accent mb-6">
              <Briefcase size={24} />
            </div>
            <h2 className="text-4xl lg:text-5xl font-serif text-natural-text mb-4 leading-tight">
              Medicina del lavoro e <br />
              <span className="italic text-natural-accent">sorveglianza sanitaria</span> per la tua azienda
            </h2>
            <p className="text-xl font-medium text-natural-text/80 mb-6 font-serif">
              Tutela dei lavoratori, rispetto delle norme, meno pensieri per l’impresa.
            </p>
            <p className="text-md text-natural-muted mb-8 leading-relaxed">
              Gestire internamente medicina del lavoro e sicurezza significa occuparsi di norme in continua evoluzione, protocolli sanitari, scadenze e documentazione: un impegno sempre più gravoso per le aziende. Studi Medici Toscana si propone come partner unico, assumendosi l’onere di organizzare e seguire l’intero percorso.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                'Nomina e supporto del Medico Competente iscritti nel ministero.',
                'Definizione e aggiornamento del protocollo sanitario aziendale.',
                'Visite mediche preventive e periodiche per l’idoneità al lavoro.',
                'Esami del sangue e accertamenti strumentali previsti dal protocollo.',
                'Visite e accertamenti nei nostri ambulatori o in azienda.',
                'Piena conformità al D.Lgs. 81/2008 e alle linee guida regionali.'
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="text-natural-accent shrink-0 mt-0.5" size={20} />
                  <span className="text-sm font-medium text-natural-text">{item}</span>
                </li>
              ))}
            </ul>

            <Link to="/servizi/medicina-del-lavoro" className="inline-flex items-center justify-center bg-natural-accent text-white px-8 py-3 rounded-full text-sm font-semibold hover:bg-natural-accent/90 transition-colors gap-2 shadow-lg shadow-natural-accent/10">
              Richiedi informazioni
              <ChevronRight size={16} />
            </Link>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-[40px] overflow-hidden border border-natural-border shadow-2xl relative z-10">
              <img 
                src={medicinaLavoroImg} 
                alt="Medicina del Lavoro - Studi Medici Toscana" 
                className="w-full h-full object-contain bg-white"
                loading="lazy"
              />
            </div>
            
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-natural-accent/5 rounded-full -z-0"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
