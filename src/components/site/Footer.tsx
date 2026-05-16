import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Instagram, Linkedin } from "lucide-react";
import logo from "@/assets/logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-page py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt="Ashby Education Consultancy" className="h-12 w-12 rounded object-cover" />
            <div>
              <div className="font-display text-xl text-white">Ashby</div>
              <div className="uppercase tracking-[0.2em] text-[10px] text-[hsl(var(--teal))]">Education Services</div>
            </div>
          </div>
          <p className="text-sm text-white/70 leading-relaxed">
            Trusted study abroad consultancy guiding students toward leading universities in the UK, Canada, Australia and Europe.
          </p>
        </div>

        <div>
          <h4 className="text-white text-sm uppercase tracking-[0.2em] mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-white/70">
            {[
              ["Home", "/"],
              ["About", "/about"],
              ["Services", "/services"],
              ["Destinations", "/destinations"],
              ["Credit Transfer", "/credit-transfer"],
              ["Contact", "/contact"],
            ].map(([l, h]) => (
              <li key={h}>
                <Link to={h} className="hover:text-[hsl(var(--teal))] transition-colors">{l}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white text-sm uppercase tracking-[0.2em] mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex items-start gap-3"><Phone size={16} className="text-[hsl(var(--teal))] mt-0.5" /> +93131256007 / +92719227429</li>
            <li className="flex items-start gap-3"><Mail size={16} className="text-[hsl(var(--teal))] mt-0.5" /> Ashbyeducationservices@gmail.com</li>
            <li className="flex items-start gap-3"><MapPin size={16} className="text-[hsl(var(--teal))] mt-0.5" /> Office 206,Commericial Building 45-C,Lane 10,Bukhari Commercial Phase 6,DHA</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white text-sm uppercase tracking-[0.2em] mb-4">Follow</h4>
          <div className="flex gap-3">
            {[
              {
                href: "https://www.instagram.com/ashbyeducationservices?igsh=OHh2cHdpcmNiNnpq",
                label: "Instagram",
                Icon: Instagram,
              },
              {
                href: "https://www.linkedin.com/company/ashby-educationservices/",
                label: "LinkedIn",
                Icon: Linkedin,
              },
            ].map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 grid place-items-center rounded border border-white/20 hover:border-[hsl(var(--teal))] hover:text-[hsl(var(--teal))] transition-colors"
                aria-label={label}
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page py-6 text-center text-xs text-white/60">
          © {new Date().getFullYear()} Ashby Education Consultancy. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
