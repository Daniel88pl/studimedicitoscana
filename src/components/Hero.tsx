import { motion } from 'motion/react';
import { ShieldCheck, Clock, Award, MessageCircle, Mail } from 'lucide-react';
import { CONTACT } from '../config/contact';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-natural-bg">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-natural-accent/5 -z-10 rounded-l-[100px] hidden lg:block" />
      <div className="absolute top-1/4 -right-20 w-64 h-64 bg-natural-accent/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs uppercase tracking-[0.2em] text-natural-muted font-bold mb-4 block">
              Eccellenza Medica in Toscana
            </span>
            <h1 className="text-5xl lg:text-7xl font-serif text-natural-text leading-tight mb-6">
              La tua salute, <br />
              <span className="italic text-natural-accent">in un unico luogo</span>
            </h1>
            <p className="text-lg text-natural-muted leading-relaxed mb-6 max-w-xl">
              <strong className="text-natural-accent font-medium">
                Visite specialistiche, medicina del lavoro, medicina legale e rinnovo patente nelle
                nostre sedi in Toscana.
              </strong>
              <br />
              <br />
              Studi Medici Toscana è una struttura sanitaria privata con sedi a Pisa e Grosseto che
              mette a disposizione un'équipe multidisciplinare di medici specialisti, psicologi,
              nutrizionisti e professionisti della riabilitazione.
            </p>
            <p className="text-md text-natural-text/80 mb-8 max-w-xl">
              In un solo centro puoi effettuare visite, esami e tutte le principali pratiche
              medico‑amministrative, dal rinnovo della patente alla sorveglianza sanitaria aziendale.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <motion.a
                href={CONTACT.whatsappMessage()}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-natural-accent text-white px-8 py-4 rounded-full font-semibold shadow-xl shadow-natural-accent/10 flex items-center justify-center gap-2 text-lg hover:bg-[#4a4a35] transition-colors"
              >
                <MessageCircle size={20} />
                Prenota su WhatsApp
              </motion.a>
              <a
                href={CONTACT.emailUrl}
                className="px-8 py-4 rounded-full font-semibold text-natural-accent border border-natural-border hover:bg-natural-accent hover:text-white transition-all text-lg flex items-center justify-center gap-2"
              >
                <Mail size={20} />
                Richiedi informazioni
              </a>
            </div>

            <div className="grid grid-cols-3 gap-8 border-t border-natural-border pt-10">
              <div>
                <div className="flex items-center gap-2 text-natural-accent mb-1">
                  <Award size={20} />
                  <span className="font-serif font-bold text-xl">25+</span>
                </div>
                <p className="text-xs uppercase tracking-wider text-natural-muted font-bold">Specialisti</p>
              </div>
              <div>
                <div className="flex items-center gap-2 text-natural-accent mb-1">
                  <Clock size={20} />
                  <span className="font-serif font-bold text-xl">2</span>
                </div>
                <p className="text-xs uppercase tracking-wider text-natural-muted font-bold">Sedi in Toscana</p>
              </div>
              <div>
                <div className="flex items-center gap-2 text-natural-accent mb-1">
                  <ShieldCheck size={20} />
                  <span className="font-serif font-bold text-xl">D.Lgs</span>
                </div>
                <p className="text-xs uppercase tracking-wider text-natural-muted font-bold">81/2008 Compliant</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-[40px] overflow-hidden shadow-2xl border border-natural-border">
              <img
                src="https://images.unsplash.com/photo-1629909613654-2871b886797f?auto=format&fit=crop&q=80&w=1200&h=1400"
                alt="Studi Medici Toscana"
                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Floating Card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl shadow-black/5 border border-natural-card-border w-64 hidden sm:block"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-natural-accent/10 rounded-full flex items-center justify-center text-natural-accent">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-natural-muted mb-1">Prenota in un click</p>
                  <h4 className="font-serif text-lg italic text-natural-accent leading-tight">
                    Risposta Rapida
                  </h4>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
