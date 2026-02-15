import { useEffect, useMemo, useState } from "react";
import Button from "../components/Button";
import OfferCard from "../components/OfferCard";
import { OFFERS } from "../features/offers/mock";

const STORAGE_KEY = "applications"; // tableau d'ids d'offres

function loadApplications() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveApplications(ids) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
}

export default function ProfilePage() {
  const [applications, setApplications] = useState(() => loadApplications());

  useEffect(() => {
    saveApplications(applications);
  }, [applications]);

  const appliedOffers = useMemo(() => {
    const set = new Set(applications);
    return OFFERS.filter((o) => set.has(o.id));
  }, [applications]);

  function removeApplication(id) {
    setApplications((prev) => prev.filter((x) => x !== id));
  }

  function clearAll() {
    setApplications([]);
  }

  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-6" aria-labelledby="profile-title">
      <h1 id="profile-title" className="text-lg font-semibold" style={{ color: "var(--text)" }}>
        Profil utilisateur
      </h1>

      {/* Haut de page: photo + infos */}
      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
        <div
          className="flex min-h-48 items-center justify-center rounded-xl border p-4"
          style={{ background: "var(--surface-2)", borderColor: "var(--border)" }}
          aria-label="Photo de profil"
        >
          <span className="text-sm" style={{ color: "var(--text-muted)" }}>
            Photo de profile
          </span>
        </div>

        <div
          className="rounded-xl border p-4 md:col-span-2"
          style={{ background: "var(--surface)", borderColor: "var(--border)" }}
        >
          <h2 className="text-base font-semibold" style={{ color: "var(--text)" }}>
            Informations
          </h2>

          <dl className="mt-3 space-y-2 text-sm">
            <Row label="Nom" value="Nom" />
            <Row label="Prénom" value="Prénom" />
            <Row label="Mail" value="mail@example.com" />
            <Row label="Coordonnées" value="06 00 00 00 00" />
            <Row label="Liens CV" value="—" />
            <Row label="Liens portfolio" value="—" />
          </dl>
        </div>
      </div>

      {/* Offres postulées */}
      <div
        className="mt-6 rounded-xl border p-4"
        style={{ background: "var(--surface)", borderColor: "var(--border)" }}
        aria-labelledby="applications-title"
      >
        <div className="flex items-center justify-between gap-3">
          <h2 id="applications-title" className="text-base font-semibold" style={{ color: "var(--text)" }}>
            Les offres auxquelles vous avez postulé
          </h2>

          <Button type="button" variant="outline" onClick={clearAll}>
            Tout supprimer
          </Button>
        </div>

        {appliedOffers.length === 0 ? (
          <p className="mt-3 text-sm" style={{ color: "var(--text-muted)" }}>
            Vous n’avez pas encore postulé.
          </p>
        ) : (
          <ul aria-label="Offres postulées" className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
            {appliedOffers.map((offer) => (
              <li key={offer.id} className="space-y-2">
                <OfferCard offer={offer} />
                <Button type="button" variant="ghost" onClick={() => removeApplication(offer.id)}>
                  Retirer cette candidature
                </Button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

function Row({ label, value }) {
  return (
    <div className="flex items-baseline justify-between gap-3">
      <dt className="font-medium" style={{ color: "var(--text-muted)" }}>
        {label}
      </dt>
      <dd style={{ color: "var(--text)" }}>{value}</dd>
    </div>
  );
}