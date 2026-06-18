import { Link } from 'react-router-dom';
import { services } from '../data/services';

interface RelatedServicesProps {
  /** id del servizio corrente, da escludere dall'elenco */
  excludeId?: string;
  limit?: number;
}

// Componente di link interni contestuali: aumenta il "link juice" interno
// e aiuta i crawler a scoprire tutte le pagine /servizi/:id partendo da una qualsiasi di esse.
export default function RelatedServices({ excludeId, limit = 3 }: RelatedServicesProps) {
  const items = services.filter((s) => s.id !== excludeId).slice(0, limit);
  if (items.length === 0) return null;

  return (
    <section className="mt-16 pt-12 border-t border-natural-border">
      <h2 className="text-2xl font-serif text-natural-text mb-6">
        Altri servizi che potrebbero interessarti
      </h2>
      <div className="grid sm:grid-cols-3 gap-4">
        {items.map((s) => (
          <Link
            key={s.id}
            to={`/servizi/${s.id}`}
            className="block bg-white p-5 rounded-2xl border border-natural-border hover:border-natural-accent transition-colors"
          >
            <strong className="block text-natural-text font-semibold mb-1">{s.title}</strong>
            <span className="text-sm text-natural-muted line-clamp-2">{s.description}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
