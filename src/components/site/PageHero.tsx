import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface Props {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
}

const PageHero = ({ eyebrow, title, subtitle, children }: Props) => {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="container-page py-20 lg:py-28">
        <nav className="text-xs text-white/60 mb-6">
          <Link to="/" className="hover:text-[hsl(var(--teal))]">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-white/90">{title}</span>
        </nav>
        {eyebrow && <div className="uppercase tracking-[0.2em] text-xs text-[hsl(var(--teal))] font-semibold mb-4">{eyebrow}</div>}
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white leading-tight max-w-3xl">{title}</h1>
        {subtitle && <p className="mt-5 text-white/75 max-w-2xl text-lg">{subtitle}</p>}
        {children}
      </div>
    </section>
  );
};

export default PageHero;
