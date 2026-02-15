export default function OfferDescription({ description, companyAbout }) {
  return (
    <div
      className="rounded-xl border p-4 md:col-span-2"
      style={{ background: "var(--surface-2)", borderColor: "var(--border)" }}
    >
      <h2 className="text-base font-semibold" style={{ color: "var(--text)" }}>
        Description du poste / tâche
      </h2>

      <p className="mt-3 text-sm leading-relaxed" style={{ color: "var(--text)" }}>
        {description}
      </p>

      {companyAbout ? (
        <>
          <h3 className="mt-5 text-sm font-semibold" style={{ color: "var(--text)" }}>
            À propos
          </h3>
          <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--text)" }}>
            {companyAbout}
          </p>
        </>
      ) : null}
    </div>
  );
}
