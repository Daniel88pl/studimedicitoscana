import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';
import { CONTACT } from '../config/contact';
import { LOCAL_BUSINESS_GROSSETO_JSONLD, SITE_URL } from '../lib/structuredData';
import { services } from '../data/services';
import { doctors } from '../data/doctors';

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
      {/* Intro */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl"
        >
          <h1 className="text-4xl lg:text-6xl font-serif text-natural-text mb-6">
            La Sede di <span className="italic text-natural-accent">Grosseto</span>
          </h1>
          <p className="text-xl text-natural-text/80 leading-relaxed mb-6">
            In Via Adriatico 7 riuniamo in un unico studio visite specialistiche, medicina del lavoro,
            medicina legale e rinnovo patente, con un'équipe di {doctors.length} professionisti che
            seguono stabilmente i pazienti della zona.
          </p>
          <p className="text-md text-natural-muted leading-relaxed mb-12 max-w-3xl">
            La struttura nasce per dare a Grosseto lo stesso livello di organizzazione e continuità
            di cura della sede principale: stessa rete di specialisti, stessi standard clinici, percorsi
            personalizzati costruiti insieme al paziente o all'azienda che si rivolge a noi.
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
                      <a href="tel:05641898037" className="text-natural-text/80 hover:text-natural-accent transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-natural-accent rounded">
                        0564 189 8037
                      </a>
                      <a href="tel:3713725768" className="text-natural-text/80 hover:text-natural-accent transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-natural-accent rounded">
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
                    <a href={CONTACT.emailUrl} className="text-natural-text/80 hover:text-natural-accent transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-natural-accent rounded">
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

      {/* Servizi offerti a Grosseto */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-natural-border">
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl lg:text-4xl font-serif text-natural-text mb-4">
            Servizi offerti a <span className="italic text-natural-accent">Grosseto</span>
          </h2>
          <p className="text-lg text-natural-muted leading-relaxed">
            Nello studio di Via Adriatico 7 sono disponibili tutti i servizi di Studi Medici Toscana:
            dalle visite specialistiche alla medicina del lavoro, dalla medicina legale al rinnovo
            patente, fino alle prestazioni a domicilio per chi non può spostarsi.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="bg-white p-7 rounded-[28px] border border-natural-card-border hover:shadow-lg transition-shadow h-full flex flex-col"
            >
              <div className={`w-11 h-11 rounded-2xl flex items-center justify-center mb-5 ${service.color}`}>
                <service.icon size={22} />
              </div>
              <h3 className="text-lg font-bold text-natural-text mb-2">{service.title}</h3>
              <p className="text-sm text-natural-muted leading-relaxed mb-6">{service.description}</p>
              <Link
                to={`/servizi/${service.id}`}
                className="mt-auto inline-flex items-center text-xs font-bold uppercase tracking-widest text-natural-accent hover:opacity-70 transition-opacity focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-natural-accent rounded min-h-[44px]"
              >
                Scopri di più
                <ChevronRight size={14} className="ml-2" />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Équipe medica a Grosseto */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-natural-border">
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl lg:text-4xl font-serif text-natural-text mb-4">
            L'équipe medica a <span className="italic text-natural-accent">Grosseto</span>
          </h2>
          <p className="text-lg text-natural-muted leading-relaxed">
            I professionisti che collaborano con noi sono presenti e operativi nella sede di Grosseto,
            con percorsi dedicati a visite specialistiche, valutazioni psicologiche, nutrizione clinica,
            osteopatia e podologia.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {doctors.map((doctor, index) => (
            <motion.div
              key={doctor.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="bg-white rounded-[28px] border border-natural-card-border overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-full object-cover grayscale-[10%]"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <span className="text-xs font-bold uppercase tracking-widest text-natural-accent mb-2">
                  {doctor.category}
                </span>
                <h3 className="text-lg font-serif text-natural-text mb-1">{doctor.name}</h3>
                <p className="text-sm text-natural-muted leading-relaxed mb-5">{doctor.role}</p>
                <Link
                  to={`/staff/${doctor.id}`}
                  className="mt-auto inline-flex items-center text-xs font-bold uppercase tracking-widest text-natural-accent hover:opacity-70 transition-opacity focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-natural-accent rounded min-h-[44px]"
                >
                  Scopri il profilo
                  <ChevronRight size={14} className="ml-2" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
