export default function OfferDetails({ domain, location, duration, contact }) {
  return (
    <div
      className="rounded-xl border p-4 md:col-span-2"
      style={{ background: "var(--surface)", borderColor: "var(--border)" }}
    >
      <h2 className="text-base font-semibold" style={{ color: "var(--text)" }}>
        Détails
      </h2>

      <dl className="mt-3 space-y-2 text-sm">
        <Row label="Domaine" value={domain} />
        <Row label="Localisation" value={location} />
        <Row label="Durée" value={duration} />
        {contact ? <Row label="Contact" value={contact} /> : null}
      </dl>
    </div>
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
