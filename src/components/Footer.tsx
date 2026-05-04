import { Link } from 'react-router-dom';
import logo from '@/assets/logo.png';

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
  { label: 'Succursale Grosseto', href: '/grosseto', isRoute: true },
  { label: 'Contatti', href: '/#contatti' },
  { label: 'Prenota una visita', href: '/#contatti' },
];

const LEGAL = [
  { label: 'Privacy', href: '/privacy' },
  { label: 'Cookie', href: '/cookie' },
  { label: 'Termini', href: '/termini' },
  { label: 'Note legali', href: '/note-legali' },
];

// Color tokens — pull from design system (Premium Clinical palette)
const SAGE = 'hsl(var(--natural-accent))';
const SAGE_DARK = 'hsl(var(--natural-accent))';
const INK = 'hsl(var(--natural-text))';

const ArrowIcon = ({ stroke = SAGE_DARK }: { stroke?: string }) => (
  <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke={stroke}
    strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 8h10M9 4l4 4-4 4" />
  </svg>
);

const PinIcon = () => (
  <svg viewBox="0 0 16 16" width="13" height="13" fill="none" stroke={SAGE} strokeWidth="1.4">
    <path d="M8 14.5c3-3.5 4.5-6 4.5-8a4.5 4.5 0 1 0-9 0c0 2 1.5 4.5 4.5 8z" />
    <circle cx="8" cy="6.5" r="1.6" />
  </svg>
);

const PhoneIcon = ({ stroke = SAGE }: { stroke?: string }) => (
  <svg viewBox="0 0 16 16" width="13" height="13" fill="none" stroke={stroke}
    strokeWidth="1.4" strokeLinejoin="round" strokeLinecap="round">
    <path d="M3 3.5c0 5 4.5 9.5 9.5 9.5l1-2.5-3-1-1 1.2C7.8 9.7 6.3 8.2 5.3 6.5l1.2-1-1-3z" />
  </svg>
);

const MailIcon = () => (
  <svg viewBox="0 0 16 16" width="13" height="13" fill="none" stroke={SAGE} strokeWidth="1.4" strokeLinejoin="round">
    <rect x="2" y="3.5" width="12" height="9" rx="1.5" />
    <path d="M2.5 4.5l5.5 4 5.5-4" />
  </svg>
);

const ClockIcon = () => (
  <svg viewBox="0 0 16 16" width="13" height="13" fill="none" stroke={SAGE} strokeWidth="1.4" strokeLinecap="round">
    <circle cx="8" cy="8" r="5.5" />
    <path d="M8 5v3.2l2 1.3" />
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 16 16" width="13" height="13" fill="none" stroke={SAGE} strokeWidth="1.3">
    <circle cx="8" cy="8" r="6.5" />
    <path d="M9.5 5.5h-1c-.6 0-1 .4-1 1V8m-1 0h3M8 8v4.5" strokeLinecap="round" />
  </svg>
);


// Reusable section heading: "— LABEL"
const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <p className="flex items-center gap-2 mb-[18px] text-[10px] font-semibold uppercase"
    style={{ letterSpacing: '0.18em', color: SAGE }}>
    <span className="inline-block w-[18px] h-px" style={{ background: SAGE }} />
    {children}
  </p>
);

// Animated link with sliding underline
const NavItem = ({ href, label, isRoute }: { href: string; label: string; isRoute?: boolean }) => {
  const className =
    "group flex items-center gap-2 py-[5px] text-[13.5px] no-underline transition-all duration-150 hover:gap-3";
  const style = { color: 'rgba(31,36,32,0.62)', letterSpacing: '-0.005em' };
  const inner = (
    <>
      <span
        className="inline-block h-px w-0 transition-all duration-200 group-hover:w-3"
        style={{ background: SAGE }}
      />
      <span className="transition-transform duration-150 group-hover:translate-x-0.5"
        style={{ color: 'inherit' }}>
        {label}
      </span>
    </>
  );
  return isRoute ? (
    <Link to={href} className={className} style={style}
      onMouseEnter={(e) => (e.currentTarget.style.color = INK)}
      onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(31,36,32,0.62)')}>
      {inner}
    </Link>
  ) : (
    <a href={href} className={className} style={style}
      onMouseEnter={(e) => (e.currentTarget.style.color = INK)}
      onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(31,36,32,0.62)')}>
      {inner}
    </a>
  );
};

type Phone = { label: string; href: string };

const SedeCard = ({
  badge, city, mapsUrl, address, phones, email, hours,
}: {
  badge: string;
  city: string;
  mapsUrl: string;
  address: React.ReactNode;
  phones: Phone[];
  email?: string;
  hours: string;
}) => (
  <div className="flex flex-col gap-[14px] rounded-[14px] bg-white px-6 py-[22px]"
    style={{ border: '0.5px solid rgba(31,36,32,0.1)' }}>
    <div className="flex items-center justify-between gap-3">
      <div>
        <div className="mb-1.5 text-[10px] font-semibold uppercase"
          style={{ letterSpacing: '0.18em', color: SAGE }}>
          {badge}
        </div>
        <h4 className="text-base font-semibold" style={{ color: INK, letterSpacing: '-0.01em' }}>
          {city}
        </h4>
      </div>
      <a href={mapsUrl} target="_blank" rel="noopener"
        className="flex items-center gap-1 whitespace-nowrap rounded-full px-[9px] py-[5px] text-[11px] font-medium no-underline"
        style={{
          color: 'rgba(31,36,32,0.62)',
          border: '0.5px solid rgba(31,36,32,0.1)',
        }}>
        Mappa <ArrowIcon stroke="rgba(31,36,32,0.62)" />
      </a>
    </div>
    <div className="flex flex-col gap-2 text-[13px] leading-[1.5]">
      <div className="flex items-start gap-[9px]" style={{ color: 'rgba(31,36,32,0.62)' }}>
        <span className="mt-0.5 shrink-0"><PinIcon /></span>
        <span>{address}</span>
      </div>
      <div className="flex flex-col gap-1">
        {phones.map((p) => (
          <a key={p.href} href={p.href}
            className="flex items-center gap-[9px] font-medium no-underline tabular-nums"
            style={{ color: SAGE_DARK }}>
            <span className="shrink-0"><PhoneIcon /></span>{p.label}
          </a>
        ))}
      </div>
      {email && (
        <a href={`mailto:${email}`}
          className="flex items-center gap-[9px] no-underline break-all"
          style={{ color: 'rgba(31,36,32,0.62)' }}>
          <span className="mt-0.5 shrink-0"><MailIcon /></span>{email}
        </a>
      )}
      <div className="flex items-start gap-[9px] text-[12.5px]"
        style={{ color: 'rgba(31,36,32,0.42)' }}>
        <span className="mt-0.5 shrink-0"><ClockIcon /></span>
        <span>{hours}</span>
      </div>
    </div>
  </div>
);

export default function Footer() {
  return (
    <footer
      className="w-full text-[14px]"
      style={{
        background: 'hsl(var(--secondary))',
        color: INK,
        borderTop: '0.5px solid rgba(31,36,32,0.1)',
        fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif',
      }}
    >
      <div className="mx-auto max-w-[1280px]">
        {/* ── Top grid ── */}
        <div className="grid grid-cols-1 gap-12 px-6 pt-14 pb-11 md:grid-cols-2 md:px-12 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr]">
          {/* Brand */}
          <div>
            <div className="mb-[18px] flex items-center gap-[14px]">
              <img src={logo} alt="Studi Medici Toscana" className="h-20 w-20 shrink-0 object-contain" />
              <div>
                <div className="text-[15px] font-semibold leading-[1.2]"
                  style={{ color: INK, letterSpacing: '-0.01em' }}>
                  Studi Medici Toscana
                </div>
                <div className="mt-[3px] text-[11px] uppercase"
                  style={{ color: 'hsl(var(--natural-muted))', letterSpacing: '0.08em' }}>
                  Struttura sanitaria privata
                </div>
              </div>
            </div>
            <p className="max-w-[320px] text-[13.5px] leading-[1.65]"
              style={{ color: 'rgba(31,36,32,0.62)', letterSpacing: '-0.005em' }}>
              Sedi a Pisa e Grosseto. Visite specialistiche, medicina del lavoro,
              medicina legale e rinnovo patente — un'équipe multidisciplinare al
              tuo servizio.
            </p>
            <div className="mt-5 flex gap-2">
              <a
                href="https://www.facebook.com/studimedicitoscanapisa"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white transition-transform hover:scale-110"
                style={{ border: '0.5px solid rgba(31,36,32,0.1)' }}>
                <FacebookIcon />
              </a>
            </div>
          </div>

          {/* Servizi */}
          <div>
            <SectionLabel>I nostri servizi</SectionLabel>
            <nav className="flex flex-col">
              {SERVICES.map((s) => (
                <NavItem key={s.href} href={s.href} label={s.label} isRoute />
              ))}
            </nav>
          </div>

          {/* Link utili */}
          <div>
            <SectionLabel>Link utili</SectionLabel>
            <nav className="flex flex-col">
              {LINKS.map((l) => (
                <NavItem key={l.label} href={l.href} label={l.label} isRoute={l.isRoute} />
              ))}
            </nav>
          </div>

          {/* CTA card */}
          <div className="relative flex flex-col gap-4 overflow-hidden rounded-[14px] px-[26px] py-7 text-white"
            style={{ background: SAGE }}>
            <div className="absolute rounded-full"
              style={{
                right: '-30px', top: '-30px', width: 140, height: 140,
                border: '1px dashed rgba(255,255,255,0.22)',
              }} />
            <div className="absolute rounded-full"
              style={{
                right: '-10px', top: '-10px', width: 100, height: 100,
                border: '1px dashed rgba(255,255,255,0.18)',
              }} />
            <div className="text-[10px] font-semibold uppercase"
              style={{ letterSpacing: '0.2em', color: 'rgba(255,255,255,0.7)' }}>
              Prenota una visita
            </div>
            <p className="relative max-w-[240px] text-[18px] font-medium leading-[1.35] text-white"
              style={{ letterSpacing: '-0.015em' }}>
              Fissa il tuo appuntamento con i nostri specialisti.
            </p>
            <div className="relative flex flex-col gap-2">
              <a href="/#contatti"
                className="inline-flex items-center justify-between rounded-full bg-white px-4 py-3 text-[13.5px] font-semibold no-underline"
                style={{ color: SAGE_DARK, letterSpacing: '-0.005em' }}>
                Prenota online <ArrowIcon stroke={SAGE_DARK} />
              </a>
              <a href="tel:3497256208"
                className="inline-flex items-center gap-[9px] px-1 py-2.5 text-[13px] font-medium text-white no-underline">
                <PhoneIcon stroke="#fff" /> 349 725 6208
              </a>
            </div>
          </div>
        </div>

        {/* ── Sedi ── */}
        <div className="px-6 py-9 md:px-12"
          style={{ borderTop: '0.5px solid rgba(31,36,32,0.1)' }}>
          <div className="mb-[22px] flex flex-wrap items-baseline justify-between gap-4">
            <p className="flex items-center gap-2.5 text-[10px] font-semibold uppercase"
              style={{ letterSpacing: '0.2em', color: SAGE }}>
              <span className="inline-block h-px w-[18px]" style={{ background: SAGE }} />
              Le nostre sedi
            </p>
            <span className="text-[12px]" style={{ color: 'rgba(31,36,32,0.42)' }}>
              Aperto oggi · 9:00–19:00
            </span>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <SedeCard
              badge="Sede principale"
              city="Pisa"
              mapsUrl="https://maps.google.com/?q=Viale+Antonio+Gramsci+3+Pisa"
              address={<>Viale Antonio Gramsci 3<br />56125 Pisa (PI)</>}
              phones={[
                { label: '050 520 1928', href: 'tel:0505201928' },
                { label: '349 725 6208', href: 'tel:3497256208' },
              ]}
              email="studimedici.giovanna.pisa@gmail.com"
              hours="Lun–Ven 9:00–19:00 · Sab 9:00–13:00"
            />
            <SedeCard
              badge="Succursale"
              city="Grosseto"
              mapsUrl="https://maps.google.com/?q=Via+Adriatico+7+58100+Grosseto"
              address={<>Via Adriatico 7<br />58100 Grosseto (GR)</>}
              phones={[
                { label: '0564 189 8037', href: 'tel:05641898037' },
                { label: '371 372 5768', href: 'tel:3713725768' },
              ]}
              email="studimedicitoscana.grosseto.19@gmail.com"
              hours="Lun–Ven 9:00–18:00"
            />
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="flex flex-wrap items-center justify-between gap-4 px-6 py-[18px] text-[11.5px] md:px-12"
          style={{
            borderTop: '0.5px solid rgba(31,36,32,0.1)',
            color: 'rgba(31,36,32,0.42)',
            letterSpacing: '0.02em',
          }}>
          <div className="flex flex-wrap items-center gap-[18px]">
            <span>© {new Date().getFullYear()} Studi Medici Toscana</span>
            <span style={{ color: 'rgba(31,36,32,0.22)' }}>·</span>
            <span>P.IVA 01400870471</span>
          </div>
          <div className="flex flex-wrap gap-4">
            {LEGAL.map((l) => (
              <Link
                key={l.label}
                to={l.href}
                className="no-underline transition-colors hover:text-natural-text"
                style={{ color: 'rgba(31,36,32,0.42)' }}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
