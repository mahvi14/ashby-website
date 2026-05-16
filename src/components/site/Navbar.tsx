import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.jpg";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/destinations", label: "Destinations" },
  { to: "/credit-transfer", label: "Credit Transfer" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 bg-white transition-shadow ${
        scrolled ? "shadow-[0_2px_18px_rgba(11,42,85,0.08)]" : "shadow-none border-b border-border"
      }`}
    >
      <div className="container-page flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Ashby Education Consultancy logo" className="h-11 w-11 rounded object-cover" />
          <div className="leading-tight">
            <div className="font-display text-primary text-lg font-semibold">Ashby</div>
            <div className="eyebrow-teal text-[10px]">Education Services</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive ? "text-primary" : "text-foreground/80 hover:text-[hsl(var(--teal))]"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            to="/contact"
            className="inline-flex items-center bg-primary text-primary-foreground px-5 py-2.5 text-sm font-semibold rounded hover:bg-primary-deep transition-colors"
          >
            Get Consultation
          </Link>
        </div>

        <button
          className="lg:hidden text-primary"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-white">
          <div className="container-page py-4 flex flex-col gap-3">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) =>
                  `text-sm py-2 ${isActive ? "text-primary font-semibold" : "text-foreground/80"}`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="mt-2 inline-flex justify-center bg-primary text-primary-foreground px-5 py-3 text-sm font-semibold rounded"
            >
              Get Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
