import { NavLink, useParams } from "react-router-dom";
import Button from "../components/Button";
import { OFFERS } from "../features/offers/mock";

export default function Offer() {
  const { id } = useParams();
  const offer = OFFERS.find((o) => o.id === id);

  if (!offer) {
    return (
      <section className="mx-auto w-full max-w-6xl px-4 py-6">
        <h1 className="text-lg font-semibold" style={{ color: "var(--text)" }}>
          Offre introuvable
        </h1>
        <p className="mt-3 text-sm" style={{ color: "var(--text-muted)" }}>
          L’offre demandée n’existe pas (ou a été supprimée).
        </p>
        <div className="mt-4">
          <NavLink
            to="/"
            className="text-sm font-medium underline-offset-4 hover:underline"
            style={{ color: "var(--solid)" }}
          >
            Retour à l’accueil
          </NavLink>
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-6">
      <div className="flex items-center justify-between gap-3">
        <h1 className="text-lg font-semibold" style={{ color: "var(--text)" }}>
          {offer.company}
        </h1>

        <NavLink
          to="/"
          className="text-sm font-medium underline-offset-4 hover:underline"
          style={{ color: "var(--solid)" }}
        >
          Retour
        </NavLink>
      </div>

      {/* Bloc haut: infos + photo */}
      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
        <div
          className="rounded-xl border p-4 md:col-span-2"
          style={{ background: "var(--surface)", borderColor: "var(--border)" }}
        >
          <h2 className="text-base font-semibold" style={{ color: "var(--text)" }}>
            Détails
          </h2>

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

            {offer.contact ? (
              <div className="flex items-baseline justify-between gap-3">
                <dt className="font-medium" style={{ color: "var(--text-muted)" }}>Contact</dt>
                <dd style={{ color: "var(--text)" }}>{offer.contact}</dd>
              </div>
            ) : null}
          </dl>
        </div>

        <div
          className="flex min-h-40 items-center justify-center rounded-xl border p-4"
          style={{ background: "var(--surface-2)", borderColor: "var(--border)" }}
          aria-label="Photo de l’entreprise"
        >
          <span className="text-sm" style={{ color: "var(--text-muted)" }}>
            Photo de l’entreprise
          </span>
        </div>
      </div>

      {/* Description */}
      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
        <div
          className="rounded-xl border p-4 md:col-span-2"
          style={{ background: "var(--surface-2)", borderColor: "var(--border)" }}
        >
          <h2 className="text-base font-semibold" style={{ color: "var(--text)" }}>
            Description du poste / tâche
          </h2>
          <p className="mt-3 text-sm leading-relaxed" style={{ color: "var(--text)" }}>
            {offer.description}
          </p>

          {offer.companyAbout ? (
            <>
              <h3 className="mt-5 text-sm font-semibold" style={{ color: "var(--text)" }}>
                À propos
              </h3>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--text)" }}>
                {offer.companyAbout}
              </p>
            </>
          ) : null}
        </div>

        {/* CTA */}
        <div
          className="rounded-xl border p-4"
          style={{ background: "var(--surface)", borderColor: "var(--border)" }}
        >
          <h2 className="text-base font-semibold" style={{ color: "var(--text)" }}>
            Candidature
          </h2>
          <p className="mt-2 text-sm" style={{ color: "var(--text-muted)" }}>
            En front-end only, le bouton peut juste simuler une candidature.
          </p>

          <div className="mt-4">
            <Button
              type="button"
              variant="solid"
              onClick={() => alert(`Candidature envoyée à ${offer.company} (simulation)`)}
              className="w-full"
            >
              Postuler
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}