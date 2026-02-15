import Row from "./Row";

export default function ProfileCard({ user }) {
  return (
    <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
      <div
        className="flex min-h-40 items-center justify-center rounded-xl border p-4"
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
          <Row label="Nom" value={user.lastName} />
          <Row label="Prénom" value={user.firstName} />
          <Row label="Mail" value={user.email} />
          <Row label="Coordonnées" value={`${user.phone} • ${user.city}`} />
          <Row
            label="Liens CV"
            value={
              <a
                href={user.cvUrl}
                className="font-medium underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2"
                style={{ color: "var(--solid)" }}
              >
                Voir le CV
              </a>
            }
          />
          <Row
            label="Liens portfolio"
            value={
              <a
                href={user.portfolioUrl}
                className="font-medium underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2"
                style={{ color: "var(--solid)" }}
              >
                Voir le portfolio
              </a>
            }
          />
        </dl>
      </div>
    </div>
  );
}
