import { NavLink } from "react-router-dom";
import Button from "./Button";

export default function OfferCard({ offer }) {
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
          <dt className="font-medium" style={{ color: "var(--text-muted)" }}>
            Domaine
          </dt>
          <dd style={{ color: "var(--text)" }}>{offer.domain}</dd>
        </div>

        <div className="flex items-baseline justify-between gap-3">
          <dt className="font-medium" style={{ color: "var(--text-muted)" }}>
            Localisation
          </dt>
          <dd style={{ color: "var(--text)" }}>{offer.location}</dd>
        </div>

        <div className="flex items-baseline justify-between gap-3">
          <dt className="font-medium" style={{ color: "var(--text-muted)" }}>
            Durée
          </dt>
          <dd style={{ color: "var(--text)" }}>{offer.duration}</dd>
        </div>
      </dl>

      <div className="mt-4 flex items-center justify-between gap-3">
        <Button type="button" variant="solid">
          Postuler
        </Button>

      <NavLink
        to={`/offers/${offer.id}`}
        className="inline-flex items-center justify-center rounded-md border px-3 py-2 text-sm font-semibold
             hover:bg-teal-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2"
        style={{ borderColor: "var(--border-strong)", color: "var(--solid)" }}
        >
        Information supplémentaire
        </NavLink>
      </div>
    </article>
  );
}
