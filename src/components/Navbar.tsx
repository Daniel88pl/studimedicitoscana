import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, MessageCircle, ChevronDown } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { CONTACT } from '../config/contact';
import { services } from '../data/services';
import logo from '@/assets/logo.png';

const NAV_LINKS = [
  { href: '/#specialisti', label: 'Specialisti' },
  { href: '/#chi-siamo', label: 'Chi Siamo' },
  { href: '/grosseto', label: 'Grosseto', isRoute: true },
  { href: '/#contatti', label: 'Contatti' },
];

// Etichette brevi per il menu (alcuni titoli dei servizi sono lunghi/descrittivi
// e non si adattano bene a una voce di menu a tendina).
const SERVICE_NAV_LABELS: Record<string, string> = {
  'servizi-ambulatorio': 'Servizi ambulatoriali',
  'equipe-pediatrica': 'Equipe pediatrica',
  'medicina-del-lavoro': 'Medicina del lavoro',
  'medicina-legale': 'Medicina legale',
  'patente-porto-armi': "Rinnovo patente e porto d'armi",
  'servizio-domicilio': 'Servizio a domicilio',
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Chiude i menu apri quando si cambia pagina
  useEffect(() => {
    setServicesOpen(false);
    setIsOpen(false);
    setMobileServicesOpen(false);
  }, [location.pathname]);

  // Chiude il dropdown desktop al click fuori
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="fixed w-full z-50 bg-natural-bg/80 backdrop-blur-md border-b border-natural-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-28 items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Studi Medici Toscana" className="h-20 w-20 md:h-24 md:w-24 object-contain" />
            <span className="text-xl font-medium tracking-tight font-serif italic text-natural-accent hidden sm:inline">
              Studi Medici Toscana
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Servizi: dropdown con tutti i servizi, ognuno verso la propria pagina */}
            <div className="relative" ref={servicesRef}>
              <button
                type="button"
                onClick={() => setServicesOpen((open) => !open)}
                aria-expanded={servicesOpen}
                aria-haspopup="true"
                className={`flex items-center gap-1 text-xs uppercase tracking-widest font-semibold transition-colors ${
                  servicesOpen ? 'text-natural-accent' : 'text-natural-muted hover:text-natural-accent'
                }`}
              >
                Servizi
                <ChevronDown size={14} className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-72 bg-white rounded-2xl border border-natural-border shadow-xl p-2"
                  >
                    {services.map((service) => (
                      <Link
                        key={service.id}
                        to={`/servizi/${service.id}`}
                        onClick={() => setServicesOpen(false)}
                        className="block px-4 py-3 rounded-xl text-sm font-medium text-natural-text/80 hover:bg-natural-bg hover:text-natural-accent transition-colors"
                      >
                        {SERVICE_NAV_LABELS[service.id] ?? service.title}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {NAV_LINKS.map(link =>
              link.isRoute ? (
                <NavLink
                  key={link.href}
                  to={link.href}
                  className={({ isActive }) =>
                    `text-xs uppercase tracking-widest font-semibold transition-colors ${
                      isActive ? 'text-natural-accent' : 'text-natural-muted hover:text-natural-accent'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-xs uppercase tracking-widest font-semibold text-natural-muted hover:text-natural-accent transition-colors"
                >
                  {link.label}
                </a>
              )
            )}

            <a
              href={CONTACT.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-natural-accent text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-natural-accent/90 transition-colors flex items-center gap-2"
              >
                <MessageCircle size={16} />
                Prenota Visita
              </motion.button>
            </a>
          </div>

          {/* Mobile toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-natural-text p-2">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-natural-border px-4 py-6 space-y-4 shadow-xl"
        >
          {/* Servizi: accordion con tutti i servizi */}
          <div>
            <button
              type="button"
              onClick={() => setMobileServicesOpen((open) => !open)}
              aria-expanded={mobileServicesOpen}
              className="flex items-center justify-between w-full text-lg font-medium text-natural-text/70 py-2"
            >
              Servizi
              <ChevronDown size={18} className={`transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
            </button>
            {mobileServicesOpen && (
              <div className="pl-4 pb-2 space-y-3">
                {services.map((service) => (
                  <Link
                    key={service.id}
                    to={`/servizi/${service.id}`}
                    onClick={() => setIsOpen(false)}
                    className="block text-base text-natural-text/60 hover:text-natural-accent transition-colors"
                  >
                    {SERVICE_NAV_LABELS[service.id] ?? service.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {NAV_LINKS.map(link =>
            link.isRoute ? (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-lg font-medium text-natural-text/70 py-2 hover:text-natural-accent transition-colors"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-lg font-medium text-natural-text/70 py-2 hover:text-natural-accent transition-colors"
              >
                {link.label}
              </a>
            )
          )}
          <a
            href={CONTACT.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="w-full bg-natural-accent text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 mt-4"
          >
            <MessageCircle size={20} />
            Prenota su WhatsApp
          </a>
        </motion.div>
      )}
    </nav>
  );
}
