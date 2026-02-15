import { useMemo, useState } from "react";
import { NavLink } from "react-router-dom";

const OFFERS = [
  { id: "1", company: "Apple", domain: "Informatique", location: "Paris", duration: "Durée" },
  { id: "2", company: "Ynov", domain: "Développement", location: "Rennes", duration: "2 mois" },
  { id: "3", company: "Orange cyberdefense", domain: "Cybersécurité", location: "Rennes", duration: "1 Mois" },
  { id: "4", company: "Bidulle", domain: "Chouette", location: "Oui", duration: "Une demie heure avec Guilian" },
];

function OfferCard({ offer }) {
  return (
    <article
      aria-labelledby={`offer-title-${offer.id}`}
      className="rounded-xl border p-4"
      style={{ background: "var(--surface-2)", borderColor: "var(--border)" }}
    >
      <h3
        id={`offer-title-${offer.id}`}
        className="text-base font-semibold"
        style={{ color: "var(--text)" }}
      >
        {offer.company}
      </h3>

      <dl className="mt-3 space-y-2 text-sm">
        <div className="flex items-baseline justify-between gap-3">
          <dt className="font-medium" style={{ color: "var(--text-muted)" }}>Domaine</dt>
          <dd style={{ color: "var(--text)" }}>{offer.domain}</dd>
        </div>
        <div className="flex items-baseline justify-between gap-3">
          <dt className="font-medium" style={{ color: "var(--text-muted)" }}>Localisation</dt>
          <dd style={{ color: "var(--text)" }}>{offer.location}</dd>
        </div>
        <div className="flex items-baseline justify-between gap-3">
          <dt className="font-medium" style={{ color: "var(--text-muted)" }}>Durée</dt>
          <dd style={{ color: "var(--text)" }}>{offer.duration}</dd>
        </div>
      </dl>

      <div className="mt-4 flex items-center justify-between gap-3">
        <button
          type="button"
          className="rounded-md px-3 py-2 text-sm font-medium text-white"
          style={{ background: "var(--solid)" }}
          onMouseOver={(e) => (e.currentTarget.style.background = "var(--solid-hover)")}
          onMouseOut={(e) => (e.currentTarget.style.background = "var(--solid)")}
        >
          Postuler
        </button>

        <NavLink
          to={`/offers/${offer.id}`}
          className="text-sm font-medium underline-offset-4 hover:underline"
          style={{ color: "var(--solid)" }}
        >
          Information supplémentaire
        </NavLink>
      </div>
    </article>
  );
}

export default function Home() {
  const [query, setQuery] = useState("");

  const filteredOffers = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return OFFERS;
    return OFFERS.filter((o) =>
      o.company.toLowerCase().includes(q) ||
      o.domain.toLowerCase().includes(q) ||
      o.location.toLowerCase().includes(q) ||
      o.duration.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <section aria-labelledby="home-title" className="mx-auto w-full max-w-6xl px-4 py-6">
      <h1 id="home-title" className="text-lg font-semibold" style={{ color: "var(--text)" }}>
        Accueil
      </h1>

      <form role="search" aria-label="Recherche de stage" className="mt-4">
        <label htmlFor="search" className="sr-only">Rechercher votre stage</label>
        <input
          id="search"
          name="search"
          type="search"
          placeholder="Rechercher votre stage…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full max-w-xl rounded-full border bg-white px-5 py-3 text-sm"
          style={{
            borderColor: "var(--border)",
            background: "var(--surface)",
            color: "var(--text)",
          }}
        />
        <p className="mt-2 text-xs" style={{ color: "var(--text-muted)" }}>
          Astuce : cherche par entreprise, domaine, localisation ou durée.
        </p>
      </form>

      <h2 className="mt-6 text-base font-semibold" style={{ color: "var(--text)" }}>
        Offres
      </h2>

      {filteredOffers.length === 0 ? (
        <p className="mt-3 text-sm" style={{ color: "var(--text-muted)" }}>
          Aucune offre ne correspond à votre recherche.
        </p>
      ) : (
        <ul aria-label="Liste des offres" className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
          {filteredOffers.map((offer) => (
            <li key={offer.id}>
              <OfferCard offer={offer} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}