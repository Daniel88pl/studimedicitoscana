import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import OccupationalMedicine from '../components/OccupationalMedicine';
import LicenseRenewal from '../components/LicenseRenewal';
import Staff from '../components/Staff';
import Contact from '../components/Contact';
import { useSEO } from '../hooks/useSEO';
import {
  ORGANIZATION_JSONLD,
  WEBSITE_JSONLD,
  LOCAL_BUSINESS_PISA_JSONLD,
  LOCAL_BUSINESS_GROSSETO_JSONLD,
} from '../lib/structuredData';

export default function HomePage() {
  useSEO({
    title: 'Studi Medici Toscana – Visite Specialistiche, Medicina del Lavoro e Medicina Legale',
    description:
      "Struttura sanitaria privata con sedi a Pisa e Grosseto. I nostri servizi principali: visite specialistiche, medicina del lavoro, medicina legale, rinnovo patente, rinnovo patente nautica e rinnovo porto d'armi.",
    canonical: 'https://www.studimedicitoscana.it/',
    jsonLd: [ORGANIZATION_JSONLD, WEBSITE_JSONLD, LOCAL_BUSINESS_PISA_JSONLD, LOCAL_BUSINESS_GROSSETO_JSONLD],
  });

  return (
    <main>
      <Hero />
      <About />
      <Services />
      <OccupationalMedicine />
      <LicenseRenewal />
      <Staff />
      <Contact />
    </main>
  );
}
