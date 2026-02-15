export default function Row({ label, value }) {
  return (
    <div className="flex items-baseline justify-between gap-3">
      <dt className="font-medium" style={{ color: "var(--text-muted)" }}>
        {label}
      </dt>
      <dd style={{ color: "var(--text)" }}>{value}</dd>
    </div>
  );
}
