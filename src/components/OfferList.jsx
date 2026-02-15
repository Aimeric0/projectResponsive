import OfferCard from "./OfferCard";

export default function OfferList({ offers }) {
  if (!offers || offers.length === 0) {
    return (
      <p className="mt-3 text-sm" style={{ color: "var(--text-muted)" }}>
        Aucune offre ne correspond à votre recherche.
      </p>
    );
  }

  return (
    <ul aria-label="Liste des offres" className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
      {offers.map((offer) => (
        <li key={offer.id}>
          <OfferCard offer={offer} />
        </li>
      ))}
    </ul>
  );
}