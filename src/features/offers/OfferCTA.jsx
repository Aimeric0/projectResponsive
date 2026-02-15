import Button from "../../components/Button";

export default function OfferCTA({ company, onApply }) {
  return (
    <div
      className="rounded-xl border p-4"
      style={{ background: "var(--surface)", borderColor: "var(--border)" }}
    >
      <h2 className="text-base font-semibold" style={{ color: "var(--text)" }}>
        Candidature
      </h2>

      <p className="mt-2 text-sm" style={{ color: "var(--text-muted)" }}>
      </p>

      <div className="mt-4">
        <Button type="button" variant="solid" onClick={onApply} className="w-full">
          Postuler
        </Button>
      </div>

      <p className="mt-2 text-xs" style={{ color: "var(--text-muted)" }}>
        Entreprise : {company}
      </p>
    </div>
  );
}
