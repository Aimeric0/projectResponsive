import { NavLink } from "react-router-dom";

export default function OfferHeader({ company }) {
  return (
    <div className="flex items-center justify-between gap-3">
      <h1 className="text-lg font-semibold" style={{ color: "var(--text)" }}>
        {company}
      </h1>

      <NavLink
        to="/"
        className="text-sm font-medium underline-offset-4 hover:underline"
        style={{ color: "var(--solid)" }}
      >
        Retour
      </NavLink>
    </div>
  );
}
