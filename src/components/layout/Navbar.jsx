import { useState } from "react";
import { Globe, Menu, X } from "lucide-react";
import useScrolled from "../../hooks/useScrolled";
import useActiveSection from "../../hooks/useActiveSection";

const links = [
  { id: "home", label: "Home", href: "#home" },
  { id: "destinations", label: "Destinations", href: "#destinations" },
  { id: "packages", label: "Packages", href: "#packages" },
  { id: "contact", label: "Contact", href: "#contact" },
];

// Defined outside the component so the array stays the same between renders
const sectionIds = links.map((l) => l.id);

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled(40);
  const active = useActiveSection(sectionIds);

  // Navbar turns white after scrolling, or while the mobile menu is open
  const solid = scrolled || open;

  const desktopLink = (isActive) =>
    `border-b-2 pb-1 text-sm font-semibold transition ${
      solid
        ? isActive
          ? "border-brand text-brand"
          : "border-transparent text-slate-800 hover:text-brand"
        : isActive
        ? "border-white text-white"
        : "border-transparent text-white hover:border-white/60"
    }`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid ? "bg-white/90 shadow-sm backdrop-blur-lg" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#home" className="flex items-center gap-3">
          <Globe
            className={`h-9 w-9 transition ${solid ? "text-brand" : "text-white"}`}
            strokeWidth={1.5}
          />
          <div className="leading-tight">
            <p
              className={`text-xl font-bold transition ${
                solid ? "text-blue-950" : "text-white"
              }`}
            >
              GlobalVista
            </p>
            <p
              className={`text-[10px] transition ${
                solid ? "text-slate-500" : "text-white/80"
              }`}
            >
              Your Journey, Our Expertise
            </p>
          </div>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-10 md:flex">
          {links.map((link) => (
            <li key={link.id}>
              <a href={link.href} className={desktopLink(active === link.id)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className={`md:hidden ${solid ? "text-blue-950" : "text-white"}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <ul className="flex flex-col gap-1 border-t border-slate-100 px-6 pb-4 md:hidden">
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className={`block py-3 text-sm font-semibold ${
                  active === link.id ? "text-brand" : "text-slate-800"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}