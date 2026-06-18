import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useSEO } from "../hooks/useSEO";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  // PRIMA: nessuna chiamata a useSEO -> il prerender catturava il <title>/meta della pagina
  // precedente o quelli di default per QUALSIASI url inesistente. ORA la pagina ha un titolo
  // proprio e viene marcata noindex, così non finisce indicizzata da Google.
  useSEO({
    title: 'Pagina non trovata',
    description: 'La pagina richiesta non esiste o è stata spostata.',
    noindex: true,
  });

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">Oops! Page not found</p>
        <a href="/" className="text-primary underline hover:text-primary/90">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
