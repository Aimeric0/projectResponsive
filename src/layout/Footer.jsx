import { NavLink } from "react-router-dom";

function FooterLink({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        [
          "text-sm text-slate-700",
          "hover:text-teal-700 hover:underline underline-offset-4",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50",
          isActive ? "text-teal-700 font-medium" : "",
        ].join(" ")
      }
    >
      {children}
    </NavLink>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <FooterLink to="/conditions">conditions d’utilisation</FooterLink>
        <FooterLink to="/contact">contact</FooterLink>
      </div>
    </footer>
  );
}