import { useMemo, useState } from "react";
import SearchBar from "../components/SearchBar";
import OfferList from "../components/OfferList";
import OFFERS from "../features/offers/mock"

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

      <SearchBar value={query} onChange={setQuery} />

      <h2 className="mt-6 text-base font-semibold" style={{ color: "var(--text)" }}>
        Offres
      </h2>

      <OfferList offers={filteredOffers} />
    </section>
  );
}