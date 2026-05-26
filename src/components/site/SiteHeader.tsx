import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const nav = [
  { to: "/programs", label: "Programs" },
  { to: "/pricing", label: "Pricing" },
  { to: "/about", label: "About" },
  { to: "/gallery", label: "Gallery" },
  { to: "/testimonials", label: "Stories" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { theme, toggle } = useTheme();

  return (
    <nav className="glass-nav sticky top-0 z-50 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <div className="size-10 bg-brand-blue rounded-xl flex items-center justify-center text-white font-bold text-xl font-display">A</div>
          <span className="font-display text-xl font-bold tracking-tight uppercase">Ascend Academy</span>
        </Link>

        <div className="hidden md:flex items-center gap-8 font-medium text-sm uppercase tracking-wider">
          {nav.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              className={({ isActive }) =>
                `hover:text-brand-blue transition-colors ${isActive ? "text-brand-blue" : ""}`
              }
            >
              {n.label}
            </NavLink>
          ))}
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="size-9 rounded-full grid place-items-center border border-border hover:bg-secondary transition-colors"
          >
            {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </button>
          <Link
            to="/admissions"
            className="bg-brand-navy text-white px-6 py-2.5 rounded-full hover:bg-brand-blue transition-all"
          >
            Enroll Now
          </Link>
        </div>

        <button
          className="md:hidden size-10 grid place-items-center rounded-full border border-border"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md">
          <div className="px-6 py-4 flex flex-col gap-4">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="text-sm uppercase tracking-wider font-medium"
              >
                {n.label}
              </Link>
            ))}
            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={toggle}
                aria-label="Toggle theme"
                className="size-10 rounded-full grid place-items-center border border-border"
              >
                {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
              </button>
              <Link
                to="/admissions"
                onClick={() => setOpen(false)}
                className="flex-1 text-center bg-brand-navy text-white px-6 py-3 rounded-full text-sm font-semibold"
              >
                Enroll Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
