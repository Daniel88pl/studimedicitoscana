import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contatti" className="py-24 bg-natural-bg text-natural-text overflow-hidden relative border-t border-natural-border">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-natural-accent/5 -z-0 skew-x-12 translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs uppercase tracking-[0.2em] text-natural-muted font-bold mb-4 block">Contatti e Sedi</span>
            <h2 className="text-4xl lg:text-5xl font-serif mb-8 leading-tight">Siamo qui <span className="italic text-natural-accent">per te.</span></h2>
            <p className="text-lg text-natural-muted mb-12 leading-relaxed">
              Scegli la sede più comoda e contattaci per informazioni, prenotazioni visite o richieste aziendali. Il nostro staff ti guiderà nella scelta del percorso più adatto.
            </p>

            <div className="space-y-8">
              {/* Sede Pisa */}
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-natural-accent/5 rounded-2xl flex items-center justify-center text-natural-accent shrink-0 transition-colors group-hover:bg-natural-accent group-hover:text-white">
                  <MapPin size={28} />
                </div>
                <div>
                  <h4 className="text-sm uppercase tracking-widest font-bold text-natural-muted mb-1">Studi Medici Toscana - Pisa</h4>
                  <p className="text-xl font-medium text-natural-text mb-1">Via Roma, 45 (Indirizzo indicativo)</p>
                  <p className="text-sm text-natural-text">+39 050 123 4567</p>
                </div>
              </div>

              {/* Sede Grosseto Principale */}
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-natural-accent/5 rounded-2xl flex items-center justify-center text-natural-accent shrink-0 transition-colors group-hover:bg-natural-accent group-hover:text-white">
                  <MapPin size={28} />
                </div>
                <div>
                  <h4 className="text-sm uppercase tracking-widest font-bold text-natural-muted mb-1">Studi Medici Toscana - Grosseto</h4>
                  <p className="text-xl font-medium text-natural-text mb-1">Via Adriatico 7</p>
                  <p className="text-sm text-natural-muted">Centro visite specialistiche, patenti, medicina legale.</p>
                </div>
              </div>

              {/* Sede Grosseto Succursale */}
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-natural-accent/5 rounded-2xl flex items-center justify-center text-natural-accent shrink-0 transition-colors group-hover:bg-natural-accent group-hover:text-white">
                  <MapPin size={28} />
                </div>
                <div>
                  <h4 className="text-sm uppercase tracking-widest font-bold text-natural-muted mb-1">Succursale di Grosseto</h4>
                  <p className="text-xl font-medium text-natural-text">Via Senegal 33, 58100 Grosseto</p>
                  <p className="text-sm text-natural-text font-medium mt-1">Tel. <a href="tel:3713725768">371 372 5768</a></p>
                  <p className="text-sm text-natural-muted break-all">studimedicitoscana.grosseto.19@gmail.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[40px] p-10 text-natural-text shadow-2xl border border-natural-card-border"
          >
            <h3 className="text-2xl font-serif mb-4">Inviaci un Messaggio</h3>
            <p className="text-sm text-natural-muted mb-8 leading-relaxed">
              Compila il form online, il nostro staff ti guiderà nella scelta del percorso più adatto.
            </p>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] uppercase tracking-widest font-bold text-natural-muted mb-2">Nome</label>
                  <input 
                    type="text" 
                    placeholder="Mario"
                    className="w-full px-6 py-4 rounded-2xl bg-natural-bg border border-natural-border focus:border-natural-accent outline-none transition-all font-medium text-sm"
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest font-bold text-natural-muted mb-2">Cognome</label>
                  <input 
                    type="text" 
                    placeholder="Rossi"
                    className="w-full px-6 py-4 rounded-2xl bg-natural-bg border border-natural-border focus:border-natural-accent outline-none transition-all font-medium text-sm"
                  />
                </div>
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-widest font-bold text-natural-muted mb-2">Email</label>
                <input 
                  type="email" 
                  placeholder="mario.rossi@email.com"
                  className="w-full px-6 py-4 rounded-2xl bg-natural-bg border border-natural-border focus:border-natural-accent outline-none transition-all font-medium text-sm"
                />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-widest font-bold text-natural-muted mb-2">Messaggio</label>
                <textarea 
                  rows={4}
                  placeholder="Come possiamo aiutarti?"
                  className="w-full px-6 py-4 rounded-2xl bg-natural-bg border border-natural-border focus:border-natural-accent outline-none transition-all font-medium text-sm"
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-natural-accent text-white py-5 rounded-2xl font-bold text-sm uppercase tracking-widest shadow-xl shadow-natural-accent/10 hover:bg-[#4a4a35] transition-colors"
              >
                Invia Messaggio
                <Send size={18} className="ml-2" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
