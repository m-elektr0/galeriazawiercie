import { Link } from "@tanstack/react-router";
import { useState } from "react";
import logo from "@/assets/logo.png";

const links = [
  { to: "/", label: "Start" },
  { to: "/sklepy", label: "Sklepy" },
  { to: "/plan", label: "Plan" },
  { to: "/pawilony", label: "Pawilony" },
  { to: "/kontakt", label: "Kontakt" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 bg-paper/90 backdrop-blur-md border-b border-ink/20">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 flex items-center justify-between py-5">
        <Link to="/" aria-label="Zawiercie City Center — strona główna" className="hover:opacity-70 transition-opacity">
          <img src={logo} alt="Zawiercie City Center" className="h-10 md:h-12 w-auto" />
        </Link>
        <div className="hidden md:flex gap-10 text-xs font-medium uppercase tracking-[0.15em] text-ink/70">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="hover:text-ink transition-colors"
              activeProps={{ className: "text-ink border-b border-ink pb-1" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </div>
        <div className="hidden md:flex text-xs font-bold uppercase tracking-[0.2em] gap-4">
          <span className="border-b border-ink">PL</span>
          <span className="text-ink/40">EN</span>
        </div>
        <button
          aria-label="Menu"
          className="md:hidden text-xs font-bold uppercase tracking-[0.2em]"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Zamknij" : "Menu"}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-ink/20 px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="text-sm font-medium uppercase tracking-widest"
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
