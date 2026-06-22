// Helper per generare dati strutturati schema.org coerenti su tutto il sito.
// Tutti i valori NAP (nome/indirizzo/telefono) sono presi da src/components/Footer.tsx
// e devono restare identici ovunque compaiano (sito + Google Business Profile).
export { SITE_URL } from '../hooks/useSEO';
import { SITE_URL } from '../hooks/useSEO';

const BRAND = 'Studi Medici Toscana';
// TODO: verificare/aggiornare il path del logo (immagine quadrata, idealmente >= 192x192px).
const LOGO = `${SITE_URL}/favicon.png`;

export const ORGANIZATION_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'MedicalOrganization',
  name: BRAND,
  url: SITE_URL,
  logo: LOGO,
  sameAs: ['https://www.facebook.com/studimedicitoscanapisa'],
};

export const WEBSITE_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: BRAND,
  url: SITE_URL,
};

export const LOCAL_BUSINESS_PISA_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'MedicalClinic',
  name: `${BRAND} – Pisa`,
  image: LOGO,
  url: `${SITE_URL}/`,
  telephone: '+39 050 520 1928',
  email: 'studimedici.giovanna.pisa@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Viale Antonio Gramsci 3',
    addressLocality: 'Pisa',
    addressRegion: 'PI',
    postalCode: '56125',
    addressCountry: 'IT',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '19:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday'],
      opens: '09:00',
      closes: '13:00',
    },
  ],
  parentOrganization: { '@type': 'Organization', name: BRAND },
};

export const LOCAL_BUSINESS_GROSSETO_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'MedicalClinic',
  name: `${BRAND} – Grosseto`,
  image: LOGO,
  url: `${SITE_URL}/grosseto`,
  telephone: '+39 0564 189 8037',
  email: 'studimedicitoscana.grosseto.19@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Via Adriatico 7',
    addressLocality: 'Grosseto',
    addressRegion: 'GR',
    postalCode: '58100',
    addressCountry: 'IT',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
  ],
  parentOrganization: { '@type': 'Organization', name: BRAND },
};

interface ServiceLike {
  title: string;
  description: string;
}

/** Schema.org Service per le pagine /servizi/:id e /servizi/medicina-del-lavoro */
export function buildServiceJsonLd(service: ServiceLike, slug: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.description,
    url: `${SITE_URL}/servizi/${slug}`,
    areaServed: ['Pisa', 'Grosseto'],
    provider: { '@type': 'MedicalOrganization', name: BRAND, url: SITE_URL },
  };
}

interface FaqLike {
  question?: string;
  answer?: string;
  q?: string;
  a?: string;
}

/** Schema.org FAQPage da un array di FAQ in formato {question,answer} oppure {q,a}. */
export function buildFaqJsonLd(faq: FaqLike[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({
      '@type': 'Question',
      name: item.question ?? item.q ?? '',
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer ?? item.a ?? '',
      },
    })),
  };
}

interface DoctorLike {
  name: string;
  role: string;
}

/** Schema.org Physician per le pagine /staff/:id */
export function buildPersonJsonLd(doctor: DoctorLike, slug: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Physician',
    name: doctor.name,
    jobTitle: doctor.role,
    url: `${SITE_URL}/staff/${slug}`,
    worksFor: { '@type': 'MedicalOrganization', name: BRAND, url: SITE_URL },
  };
}

/** Schema.org BreadcrumbList generico. */
export function buildBreadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
