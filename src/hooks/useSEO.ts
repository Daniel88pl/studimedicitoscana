import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description?: string;
  /** URL canonica assoluta. Se omessa, viene derivata da window.location.pathname. */
  canonical?: string;
  /** Immagine OG/Twitter assoluta (1200x630 consigliata). Default: cover generica del sito. */
  ogImage?: string;
  /** Impedisce l'indicizzazione (es. pagina 404). */
  noindex?: boolean;
  /** Uno o più oggetti schema.org da iniettare come <script type="application/ld+json">. */
  jsonLd?: object | object[];
}

const BRAND = 'Studi Medici Toscana';
export const SITE_URL = 'https://www.studimedicitoscana.it';
const DEFAULT_DESC =
  'Struttura sanitaria privata con sedi a Pisa e Grosseto. Visite specialistiche, medicina del lavoro, medicina legale e rinnovo patente.';
// TODO: sostituire con un'immagine reale 1200x630 caricata in /public (al momento il sito
// usa un'anteprima temporanea generata da Lovable per og:image/twitter:image in index.html).
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-cover.jpg`;

export function useSEO({ title, description, canonical, ogImage, noindex, jsonLd }: SEOProps) {
  const fullTitle = title.includes(BRAND) ? title : `${title} | ${BRAND}`;
  const desc = description || DEFAULT_DESC;
  const url =
    canonical || (typeof window !== 'undefined' ? `${SITE_URL}${window.location.pathname}` : SITE_URL);
  const image = ogImage || DEFAULT_OG_IMAGE;
  const jsonLdString = jsonLd ? JSON.stringify(jsonLd) : undefined;

  useEffect(() => {
    document.title = fullTitle;
    setMeta('name', 'description', desc);

    setMeta('property', 'og:title', fullTitle);
    setMeta('property', 'og:description', desc);
    setMeta('property', 'og:type', 'website');
    setMeta('property', 'og:site_name', BRAND);
    setMeta('property', 'og:url', url);
    setMeta('property', 'og:image', image);

    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', fullTitle);
    setMeta('name', 'twitter:description', desc);
    setMeta('name', 'twitter:image', image);

    setMeta('name', 'robots', noindex ? 'noindex, nofollow' : 'index, follow');

    let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.href = url;

    const SCRIPT_ID = 'page-jsonld';
    const existing = document.getElementById(SCRIPT_ID);
    if (existing) existing.remove();
    if (jsonLdString) {
      const script = document.createElement('script');
      script.id = SCRIPT_ID;
      script.type = 'application/ld+json';
      script.textContent = jsonLdString;
      document.head.appendChild(script);
    }
  }, [fullTitle, desc, url, image, noindex, jsonLdString]);
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
