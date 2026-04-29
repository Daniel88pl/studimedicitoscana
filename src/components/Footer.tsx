import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';

const SERVICES = [
  { label: 'Servizi ambulatoriali', href: '/servizi/servizi-ambulatorio' },
  { label: 'Servizio a domicilio', href: '/servizi/servizio-domicilio' },
  { label: "Rinnovo patente e porto d'armi", href: '/servizi/patente-porto-armi' },
  { label: 'Medicina legale', href: '/servizi/medicina-legale' },
  { label: 'Medicina del lavoro', href: '/servizi/medicina-del-lavoro' },
];

const LINKS = [
  { label: 'Chi siamo', href: '/#chi-siamo' },
  { label: 'I nostri specialisti', href: '/#specialisti' },
  { label: 'Succursale Grosseto', href: '/grosseto' },
  { label: 'Contatti', href: '/#contatti' },
  { label: 'Prenota una visita', href: '/#contatti' },
];

const SEDI = [
  {
    name: 'Studi Medici Toscana – Pisa',
    address: 'Viale Antonio Gramsci 3, 56125 Pisa',
    phone: '349 725 6208',
    phoneHref: 'tel:3497256208',
  },
  {
    name: 'Studi Medici Toscana – Grosseto',
    address: 'Via Senegal 33, 58100 Grosseto',
    phone: '371 372 5768',
    phoneHref: 'tel:3713725768',
    email: 'studimedicitoscana.grosseto.19@gmail.com',
  },
];

export default function Footer() {
  return (
    <footer className="bg-natural-accent text-natural-bg">

      {/* ── Top section: logo + servizi + link utili ── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-14 pb-10 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Logo + descrizione */}
        <div>
          <Link to="/" className="flex items-center gap-3 mb-5">
            <div className="w-9 h-9 rounded-full bg-natural-bg/15 flex items-center justify-center shrink-0">
              <span className="font-serif italic text-natural-bg text-lg">M</span>
            </div>
            <span className="font-serif italic text-natural-bg text-lg leading-tight">
              Studi Medici Toscana
            </span>
          </Link>
          <p className="text-sm text-natural-bg/60 leading-relaxed max-w-xs">
            Struttura sanitaria privata con sedi a Pisa e Grosseto. Visite specialistiche,
            medicina del lavoro, medicina legale e rinnovo patente — un'équipe multidisciplinare
            al tuo servizio.
          </p>
        </div>

        {/* Servizi */}
        <div>
          <p className="text-[10px] uppercase tracking-[0.18em] font-bold text-natural-bg/40 mb-4">
            I nostri servizi
          </p>
          <ul className="space-y-2">
            {SERVICES.map((s) => (
              <li key={s.href}>
                <Link
                  to={s.href}
                  className="text-sm text-natural-bg/70 hover:text-natural-bg transition-colors"
                >
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Link utili */}
        <div>
          <p className="text-[10px] uppercase tracking-[0.18em] font-bold text-natural-bg/40 mb-4">
            Link utili
          </p>
          <ul className="space-y-2">
            {LINKS.map((l) => (
              <li key={l.label}>
                {l.href.startsWith('/') && !l.href.includes('#') ? (
                  <Link
                    to={l.href}
                    className="text-sm text-natural-bg/70 hover:text-natural-bg transition-colors"
                  >
                    {l.label}
                  </Link>
                ) : (
                  <a
                    href={l.href}
                    className="text-sm text-natural-bg/70 hover:text-natural-bg transition-colors"
                  >
                    {l.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ── Divisore ── */}
      <div className="border-t border-natural-bg/10 mx-6 lg:mx-8" />

      {/* ── Sedi ── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10">
        <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-natural-bg/40 text-center mb-7">
          Le nostre sedi
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {SEDI.map((sede) => (
            <div
              key={sede.name}
              className="border border-natural-bg/15 rounded-2xl px-7 py-6 space-y-3"
            >
              <p className="text-sm font-bold text-natural-bg tracking-wide">
                {sede.name}
              </p>
              <div className="space-y-2">
                <div className="flex items-start gap-2 text-natural-bg/60">
                  <MapPin size={14} className="shrink-0 mt-0.5" />
                  <span className="text-xs leading-relaxed">{sede.address}</span>
                </div>
                <div className="flex items-center gap-2 text-natural-bg/60">
                  <Phone size={14} className="shrink-0" />
                  <a
                    href={sede.phoneHref}
                    className="text-xs hover:text-natural-bg transition-colors"
                  >
                    {sede.phone}
                  </a>
                </div>
                {sede.email && (
                  <div className="flex items-center gap-2 text-natural-bg/60">
                    <Mail size={14} className="shrink-0" />
                    <a
                      href={`mailto:${sede.email}`}
                      className="text-xs hover:text-natural-bg transition-colors break-all"
                    >
                      {sede.email}
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-natural-bg/10 mx-6 lg:mx-8" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
        <p className="text-[10px] uppercase tracking-widest text-natural-bg/35">
          © {new Date().getFullYear()} Studi Medici Toscana – Tutti i diritti riservati
        </p>
        <p className="text-[10px] uppercase tracking-widest text-natural-bg/35">
          Made with care for healthcare
        </p>
      </div>

    </footer>
  );
}
