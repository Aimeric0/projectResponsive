export default function CompanyPhotoPlaceholder() {
  return (
    <div
      className="flex min-h-40 items-center justify-center rounded-xl border p-4"
      style={{ background: "var(--surface-2)", borderColor: "var(--border)" }}
      aria-label="Photo de l’entreprise"
    >
      <span className="text-sm" style={{ color: "var(--text-muted)" }}>
        Photo de l’entreprise
      </span>
    </div>
  );
}
