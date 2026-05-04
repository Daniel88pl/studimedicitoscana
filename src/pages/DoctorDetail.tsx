import { useParams, Link, Navigate } from 'react-router-dom';
import { doctors } from '../data/doctors';
import { ArrowLeft, MapPin, Phone, Mail, ChevronRight, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import Contact from '../components/Contact';
import { useEffect } from 'react';
import { useSEO } from '../hooks/useSEO';
import { CONTACT } from '../config/contact';

export default function DoctorDetail() {
  const { id } = useParams();
  const doctor = doctors.find(d => d.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useSEO({
    title: doctor ? `${doctor.name} – ${doctor.role}` : 'Specialista',
    description: doctor
      ? `${doctor.name}, ${doctor.role}. ${doctor.formation}`
      : undefined,
  });

  if (!doctor) return <Navigate to="/" replace />;

  return (
    <main className="bg-natural-bg">
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <Link
          to="/#specialisti"
          className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-natural-muted hover:text-natural-accent transition-colors mb-8"
        >
          <ArrowLeft size={16} className="mr-2" />
          Torna allo staff
        </Link>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-4"
          >
            <div className="rounded-[40px] overflow-hidden border border-natural-border shadow-soft aspect-[4/5] mb-8">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-full h-full object-cover grayscale-[20%]"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="bg-white p-8 rounded-[32px] border border-natural-card-border shadow-sm space-y-4 mb-6">
              <div className="flex items-center gap-3 text-sm font-medium text-natural-text">
                <div className="w-10 h-10 bg-natural-accent/10 rounded-full flex items-center justify-center text-natural-accent shrink-0">
                  <MapPin size={18} />
                </div>
                {doctor.location}
              </div>
              <div className="flex items-center gap-3 text-sm font-medium text-natural-text">
                <div className="w-10 h-10 bg-natural-accent/10 rounded-full flex items-center justify-center text-natural-accent shrink-0">
                  {doctor.contact.includes('@') ? <Mail size={18} /> : <Phone size={18} />}
                </div>
                {doctor.contact}
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col gap-3">
              <a
                href={CONTACT.whatsappMessage(`visita con ${doctor.name}`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full bg-natural-accent text-white px-6 py-4 rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-natural-accent/90 transition-colors gap-2 shadow-lg"
              >
                <MessageCircle size={18} />
                Prenota su WhatsApp
              </a>
              <a
                href={CONTACT.emailUrl}
                className="inline-flex items-center justify-center w-full border border-natural-border text-natural-accent px-6 py-4 rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-natural-accent hover:text-white transition-colors gap-2"
              >
                <Mail size={18} />
                Invia una Email
              </a>
            </div>
          </motion.div>

          {/* Main content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-8 lg:pt-12"
          >
            <span className="text-xs uppercase tracking-widest font-bold text-natural-muted mb-2 block">
              {doctor.category}
            </span>
            <h1 className="text-4xl lg:text-5xl font-serif text-natural-text mb-4">{doctor.name}</h1>
            <p className="text-xl font-serif italic text-natural-accent mb-8">{doctor.role}</p>

            <div className="space-y-12">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-natural-muted mb-4">
                  Profilo e Formazione
                </h3>
                <p className="text-natural-text/80 leading-relaxed">
                  {doctor.longBio || doctor.formation}
                </p>
              </div>

              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-natural-muted mb-4">
                  Aree di Intervento e Trattamenti
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {doctor.treatments.map((treatment, i) => (
                    <div
                      key={i}
                      className="bg-white p-4 rounded-2xl border border-natural-border flex items-start gap-3"
                    >
                      <span className="w-2 h-2 rounded-full bg-natural-accent mt-1.5 shrink-0" />
                      <span className="text-sm text-natural-text font-medium">{treatment}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <Contact />
    </main>
  );
}
