import { motion } from 'framer-motion';
import { Menu, X, MessageCircle } from 'lucide-react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { CONTACT } from '../config/contact';

const NAV_LINKS = [
  { href: '/#servizi', label: 'Servizi' },
  { href: '/#specialisti', label: 'Specialisti' },
  { href: '/#chi-siamo', label: 'Chi Siamo' },
  { href: '/grosseto', label: 'Grosseto', isRoute: true },
  { href: '/#contatti', label: 'Contatti' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-natural-bg/80 backdrop-blur-md border-b border-natural-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-natural-accent rounded-full flex items-center justify-center">
              <span className="text-white font-serif text-xl italic">M</span>
            </div>
            <span className="text-xl font-medium tracking-tight font-serif italic text-natural-accent">
              Studi Medici Toscana
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
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
