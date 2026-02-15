import { NavLink } from "react-router-dom";

function NavPill({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        [
          "rounded-full px-5 py-2 text-sm font-medium",
          "bg-slate-200 text-slate-900",
          "hover:bg-slate-100",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-700",
          isActive ? "ring-2 ring-slate-400" : "",
        ].join(" ")
      }
    >
      {children}
    </NavLink>
  );
}

export default function Header() {
  return (
    <header className="bg-slate-700 text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-4">
        <NavLink
          to="/"
          aria-label="Aller à l’accueil"
          className="inline-flex items-center rounded-md px-2 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-700"
        >
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-200 text-xs font-semibold text-slate-900">
            Logo
          </span>
        </NavLink>

        <nav aria-label="Navigation principale" className="flex items-center gap-3">
          <NavPill to="/">Accueil</NavPill>
          <NavPill to="/recherche">Recherche</NavPill>
        </nav>

        <NavLink
          to="/profile"
          className="rounded-full bg-slate-200 px-4 py-2 text-sm font-medium text-slate-900 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-700"
        >
          users
        </NavLink>
      </div>
    </header>
  );
}
