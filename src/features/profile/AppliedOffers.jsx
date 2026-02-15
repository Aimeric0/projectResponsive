import OfferList from "../../components/OfferList";

export default function AppliedOffersSection({ offers }) {
  return (
    <div
      className="mt-4 rounded-xl border p-4"
      style={{ background: "var(--surface-2)", borderColor: "var(--border)" }}
    >
      <h2 className="text-base font-semibold" style={{ color: "var(--text)" }}>
        Les offres auxquelles vous avez postulé
      </h2>
      <OfferList offers={offers} />
    </div>
  );
}
