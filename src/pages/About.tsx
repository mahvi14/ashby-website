import Layout from "@/components/site/Layout";
import PageHero from "@/components/site/PageHero";
import CtaBanner from "@/components/site/CtaBanner";
import Seo from "@/components/site/Seo";
import { Target, Eye, Heart, Award } from "lucide-react";

const About = () => {
  return (
    <Layout>
      <Seo
        title="About Our Study Abroad Consultants"
        description="Learn how Ashby Education Consultancy has guided students since 2026 with transparent counseling, university admissions support, and visa expertise."
        path="/about"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: "About Ashby Education Consultancy",
          description:
            "Background, mission, values, and impact of Ashby Education Consultancy.",
        }}
      />
      <PageHero eyebrow="About Us" title="A decade of guiding students to global success" subtitle="Ashby Education Consultancy was founded to make world-class education accessible, transparent and achievable for every ambitious student." />

      <section className="section">
        <div className="container-page grid gap-12 lg:grid-cols-2 items-start">
          <div>
            <div className="eyebrow-teal mb-4">Our Story</div>
            <h2 className="font-display text-3xl md:text-4xl text-primary leading-tight">Built by educators, trusted by students</h2>
            <div className="h-divider my-6" />
            <div className="space-y-4 text-foreground/80 leading-relaxed">
              <p>Ashby was founded in 2026 by a group of educators and former international students who wanted to fix what was broken about study abroad consulting — pressure, opacity and one-size-fits-all advice.</p>
              <p>Today, we're a team of certified counselors, visa specialists and university partners helping over 5,000 students study at leading institutions across the United Kingdom, Canada, Australia and Europe.</p>
              <p>We measure success not by applications submitted, but by students thriving on campuses around the world.</p>
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {[
              { i: Target, t: "Our Mission", d: "Empower students with honest, expert guidance to access the world's best universities." },
              { i: Eye, t: "Our Vision", d: "Be the most trusted study abroad consultancy globally, known for outcomes and integrity." },
              { i: Heart, t: "Our Values", d: "Transparency, empathy, expertise and unwavering commitment to student success." },
              { i: Award, t: "Our Promise", d: "Personalized counseling, no hidden fees, and support every step of the way." },
            ].map(({ i: Icon, t, d }) => (
              <div key={t} className="bg-secondary p-6 rounded border border-border">
                <Icon className="text-[hsl(var(--teal))]" size={24} />
                <h4 className="font-display text-lg text-primary mt-4">{t}</h4>
                <p className="text-sm text-foreground/70 mt-2 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-secondary">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="eyebrow-teal mb-4">By the Numbers</div>
            <h2 className="font-display text-3xl md:text-4xl text-primary">Our impact, in figures</h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              
                ["4+", "Years"],
                ["400+", "Universities"],
                ["Global", "Destinations"],
                ["1:1", "Support"],
            ].map(([v, l]) => (
              <div key={l} className="text-center bg-white p-8 rounded border border-border">
                <div className="font-display text-4xl text-primary font-semibold">{v}</div>
                <div className="mt-2 text-xs uppercase tracking-[0.2em] text-foreground/60 font-semibold">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </Layout>
  );
};

export default About;
