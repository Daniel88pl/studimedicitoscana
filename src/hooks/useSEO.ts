import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description?: string;
  canonical?: string;
}

const BRAND = 'Studi Medici Toscana';
const DEFAULT_DESC =
  'Struttura sanitaria privata con sedi a Pisa e Grosseto. Visite specialistiche, medicina del lavoro, medicina legale e rinnovo patente.';

export function useSEO({ title, description, canonical }: SEOProps) {
  const fullTitle = title.includes(BRAND) ? title : `${title} | ${BRAND}`;
  const desc = description || DEFAULT_DESC;

  useEffect(() => {
    document.title = fullTitle;
    setMeta('name', 'description', desc);
    setMeta('property', 'og:title', fullTitle);
    setMeta('property', 'og:description', desc);
    setMeta('property', 'og:type', 'website');
    setMeta('property', 'og:site_name', BRAND);

    if (canonical) {
      let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
      }
      link.href = canonical;
    }
  }, [fullTitle, desc, canonical]);
}

function setMeta(attr: string, attrValue: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${attrValue}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, attrValue);
    document.head.appendChild(el);
  }
  el.content = content;
}
