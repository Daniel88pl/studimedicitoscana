import { motion } from 'framer-motion';
import { FileBadge, ArrowRight, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function LicenseRenewal() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1 relative"
          >
            <div className="grid grid-cols-2 gap-6 p-2">
               <div className="bg-white p-6 rounded-3xl border border-natural-card-border shadow-sm">
                 <FileBadge className="text-natural-accent mb-4" size={28} />
                 <h4 className="font-bold text-natural-text mb-2 text-sm uppercase tracking-wider">Patenti Auto</h4>
                 <p className="text-xs text-natural-muted leading-relaxed">Rinnovo rapido per licenze A, B, C, D, E con medico in sede.</p>
               </div>
               <div className="bg-white p-6 rounded-3xl border border-natural-card-border shadow-sm">
                 <ShieldCheck className="text-natural-accent mb-4" size={28} />
                 <h4 className="font-bold text-natural-text mb-2 text-sm uppercase tracking-wider">Porto d'Armi</h4>
                 <p className="text-xs text-natural-muted leading-relaxed">Rilascio e rinnovo certificato idoneità per porto d'armi.</p>
               </div>
               <div className="bg-white p-6 rounded-3xl border border-natural-card-border shadow-sm">
                 <ShieldCheck className="text-natural-accent mb-4" size={28} />
                 <h4 className="font-bold text-natural-text mb-2 text-sm uppercase tracking-wider">Patente Nautica</h4>
                 <p className="text-xs text-natural-muted leading-relaxed">Certificazione medica per condurre natanti e imbarcazioni.</p>
               </div>
               <div className="bg-natural-accent p-6 rounded-3xl text-white flex flex-col justify-center gap-4">
                  <h4 className="font-serif italic lg:text-xl">Tempi rapidi e zero code.</h4>
                  <Link to="/servizi/patente-porto-armi" className="text-xs font-bold uppercase tracking-widest text-white/80 inline-flex items-center hover:text-white transition-colors w-max">
                    Scopri di più <ArrowRight size={14} className="ml-1" />
                  </Link>
               </div>
            </div>
            {/* Design Element */}
            <div className="absolute top-1/2 -left-12 -translate-y-1/2 w-24 h-24 bg-natural-accent border-[8px] border-white rounded-full -z-10 opacity-20"></div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-4xl lg:text-5xl font-serif text-natural-text mb-4 leading-tight">
              Rinnovo patente, nautica <br /> e porto d’armi
            </h2>
            <p className="text-xl font-medium text-natural-text/80 mb-6 font-serif italic">
              Tutte le pratiche medico‑sanitarie in un unico appuntamento.
            </p>
            <p className="text-md text-natural-muted mb-8 leading-relaxed">
              Nelle nostre sedi puoi effettuare il rinnovo delle patenti auto e nautiche e ottenere le certificazioni necessarie per il porto d’armi, con medico in sede e gestione completa delle pratiche. Offriamo un servizio rapido e organizzato: in un solo centro effettui la visita medica, gli eventuali accertamenti e l’invio della documentazione agli enti competenti, con orari flessibili e tempi di attesa ridotti.
            </p>

            <div className="bg-natural-bg p-6 rounded-[24px] border border-natural-card-border">
               <ul className="space-y-3">
                 <li className="flex gap-2 text-sm text-natural-text"><span className="text-natural-accent font-bold">•</span> Rinnovo patenti A, B, C, D, E e nautiche.</li>
                 <li className="flex gap-2 text-sm text-natural-text"><span className="text-natural-accent font-bold">•</span> Certificazioni per porto d’armi con medico in sede.</li>
                 <li className="flex gap-2 text-sm text-natural-text"><span className="text-natural-accent font-bold">•</span> Possibilità di abbinare visite di medicina del lavoro o consulenze medico-legali.</li>
                 <li className="flex gap-2 text-sm text-natural-text"><span className="text-natural-accent font-bold">•</span> Supporto nella documentazione e accertamenti.</li>
               </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
