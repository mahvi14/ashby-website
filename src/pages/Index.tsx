import { Link } from "react-router-dom";
import {
  GraduationCap, FileCheck, Plane, Award, Users, Compass,
  ShieldCheck, Globe2, BookOpen, ArrowRight, CheckCircle2, Wallet, Landmark,
} from "lucide-react";
import Layout from "@/components/site/Layout";
import CtaBanner from "@/components/site/CtaBanner";
import Seo from "@/components/site/Seo";
import hero from "@/assets/hero-students.jpg";
import uk from "@/assets/uk.jpeg";
import usa from "@/assets/usa.jpg";
import australia from "@/assets/aus.jpg";
import germany from "@/assets/germany.jpg";
import { getAbsoluteUrl } from "@/lib/seo";

const stats = [
  { value: "400+", label: "Partners" },
  { value: "4+", label: "Experience" },
  { value: "Global", label: "Admissions" },
  { value: "24/7", label: "Support" },
];

const services = [
  { icon: Compass, title: "Study Abroad Guidance", desc: "Personalized roadmaps tailored to your academic goals and ambitions." },
  { icon: GraduationCap, title: "University Admissions", desc: "End-to-end application support to top global universities." },
  { icon: FileCheck, title: "Visa Assistance", desc: "Documentation, interview prep, and a 98% visa approval rate." },
  { icon: BookOpen, title: "Career Counseling", desc: "Choose the right course aligned to your long-term career path." },
  { icon: Award, title: "Scholarship Guidance", desc: "Identify and secure scholarships, grants and financial aid." },
  { icon: Plane, title: "Pre-Departure Support", desc: "Travel, accommodation and orientation — handled with care." },
];

const destinations = [
  { name: "United Kingdom", img: uk, desc: "World-class universities, rich heritage, and 2-year post-study work visa." },
  { name: "United States", img: usa, desc: "Top-ranked universities, flexible programs, and unmatched research opportunities." },
  { name: "Australia", img: australia, desc: "Globally ranked institutions, vibrant lifestyle, and strong job market." },
  { name: "Germany", img: germany, desc: "Highly respected public universities, strong engineering pathways, and excellent academic value." },
];

const reasons = [
  { icon: Users, t: "Expert Consultants", d: "4+ years of experience advising international students." },
  { icon: ShieldCheck, t: "98% Visa Success", d: "Industry-leading approval rate backed by meticulous prep." },
  { icon: Compass, t: "Personalized Counseling", d: "1-on-1 guidance tailored to your profile and goals." },
  { icon: Globe2, t: "End-to-End Support", d: "From shortlisting to landing — we walk every step with you." },
  { icon: CheckCircle2, t: "Transparent Process", d: "Clear timelines, honest advice, and no hidden fees." },
  { icon: Award, t: "Scholarship Expertise", d: "Maximize funding through grants and merit scholarships." },
];

const creditTransferCards = [
  {
    icon: GraduationCap,
    title: "Keep Your Academic Progress",
    text: "Transfer eligible coursework instead of starting over from the first semester.",
  },
  {
    icon: Wallet,
    title: "Reduce Time and Tuition",
    text: "Accepted credits can lower both the length and cost of your next program.",
  },
  {
    icon: Landmark,
    title: "Move to Better Institutions",
    text: "Explore stronger universities, broader pathways, and more competitive outcomes.",
  },
];

const heroHighlights = [
  "Admissions strategy tailored to your profile",
  "Visa documentation reviewed with precision",
  "Scholarship and destination planning that fits your budget",
];

const Index = () => {
  const siteUrl = getAbsoluteUrl("/");
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Ashby Education Consultancy",
      ...(siteUrl ? { url: siteUrl } : {}),
      description:
        "Study abroad consultancy providing admissions, visa, scholarship, and pre-departure support for students targeting the UK, USA, Australia, and Germany.",
      email: "ashbyeducationservices@gmail.com",
      telephone: "+93131256007, +923719227429",
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "Office 206,Commericial Building 45-C,Lane 10,Bukhari Commercial Phase 6,DHA,karachi",
      },
      areaServed: ["United Kingdom", "United States", "Australia", "Germany"],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Ashby Education Consultancy",
      ...(siteUrl ? { url: siteUrl } : {}),
    },
  ];

  return (
    <Layout>
      <Seo
        title="Study Abroad in UK, Canada, Australia & Europe"
        description="Ashby Education Consultancy helps students secure admissions, visas, scholarships, and pre-departure support for top universities in the UK, USA, Australia, and Germany."
        path="/"
        image={hero}
        structuredData={structuredData}
      />

      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <img
          src={hero}
          alt="International students on a university campus"
          className="absolute inset-0 h-full w-full object-cover"
          width={1600}
          height={1200}
        />
        <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(7,24,49,0.92)_0%,rgba(7,24,49,0.8)_40%,rgba(7,24,49,0.38)_68%,rgba(7,24,49,0.18)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(62,198,198,0.25),transparent_34%)]" />

        <div className="container-page relative py-20 md:py-24 lg:py-32">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)] lg:items-center">
            <div className="animate-fade-up max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white/85 backdrop-blur-sm">
                <span className="h-2 w-2 rounded-full bg-[hsl(var(--teal))]" />
                Study Abroad Consultancy
              </div>
              <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.02] text-white md:text-6xl lg:text-7xl">
                Your Trusted
                <span className="block text-[hsl(var(--teal))]">Study Abroad Consultancy</span>
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/95 md:text-lg lg:text-xl">
                Expert guidance for admissions to leading universities in the United Kingdom, United States, Australia and Germany, backed by a 98% visa success record.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="rounded bg-[hsl(var(--teal))] px-7 py-3.5 text-sm font-semibold text-primary transition-all hover:bg-white hover:text-primary"
                >
                  Get Free Consultation
                </Link>
                <Link
                  to="/services"
                  className="rounded border border-white/35 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white hover:text-primary"
                >
                  Explore Services
                </Link>
              </div>
              <ul className="mt-8 grid gap-3 text-sm text-white/95 md:grid-cols-2">
                {heroHighlights.map((item) => (
                  <li key={item} className="flex items-start gap-3 rounded border border-white/12 bg-white/8 px-4 py-3 backdrop-blur-sm">
                    <CheckCircle2 className="mt-0.5 shrink-0 text-[hsl(var(--teal))]" size={18} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="animate-fade-up lg:justify-self-end">
              <div className="rounded-[1.5rem] border border-white/15 bg-white/10 p-6 text-white shadow-[0_24px_80px_-24px_rgba(0,0,0,0.55)] backdrop-blur-md md:p-8">
                <div className="text-xs font-semibold uppercase tracking-[0.24em] text-[hsl(var(--teal))]">
                  Why Families Choose Ashby
                </div>
                <h2 className="mt-4 font-display text-2xl leading-tight text-white md:text-3xl">
                  Clarity, care, and a process that feels manageable from day one.
                </h2>
                <div className="mt-6 space-y-4">
                  {[
                    { title: "Transparent counseling", description: "Clear advice, realistic options, and no hidden steps." },
                    { title: "Global destination expertise", description: "Smart planning for the UK, USA, Australia, and Germany." },
                    { title: "Support beyond admission", description: "From visa prep to pre-departure, we stay with you." },
                  ].map((item) => (
                    <div key={item.title} className="rounded-2xl border border-white/10 bg-black/10 p-4">
                      <div className="text-sm font-semibold text-white">{item.title}</div>
                      <p className="mt-1 text-sm leading-relaxed text-white/70">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:mt-14 lg:grid-cols-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-white/12 bg-white/10 px-5 py-5 text-white shadow-[0_18px_50px_-30px_rgba(0,0,0,0.65)] backdrop-blur-sm"
              >
                <div className="font-display text-3xl font-semibold md:text-4xl">{s.value}</div>
                <div className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/68">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="section">
        <div className="container-page grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <div className="eyebrow-teal mb-4">About Ashby</div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-primary leading-tight">
              Personalized guidance.<br />Trusted outcomes.
            </h2>
            <div className="h-divider my-6" />
            <p className="text-foreground/80 leading-relaxed">
              For over a decade, Ashby Education Consultancy has helped thousands of students transform their academic ambitions into globally recognized degrees. We believe every student deserves clear, honest advice — not pressure, not paperwork.
            </p>
            <p className="text-foreground/80 leading-relaxed mt-4">
              Our process is built on transparency, expertise, and a genuine commitment to your long-term success.
            </p>
            <Link to="/about" className="inline-flex items-center gap-2 mt-8 text-primary font-semibold text-sm hover:text-[hsl(var(--teal))] transition-colors">
              Learn More About Us <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-5">
            {[
              { n: "01", t: "Honest Counseling", d: "We recommend what's right for you — never what's easy." },
              { n: "02", t: "Proven Process", d: "A structured framework refined over 12+ years." },
              { n: "03", t: "Expert Network", d: "Direct relationships with 250+ universities globally." },
              { n: "04", t: "End-to-End Care", d: "Support from inquiry to your first day on campus." },
            ].map((c) => (
              <div key={c.n} className="bg-secondary p-6 rounded border border-border">
                <div className="font-display text-[hsl(var(--teal))] text-sm font-bold tracking-wider">{c.n}</div>
                <h4 className="font-display text-lg text-primary mt-2">{c.t}</h4>
                <p className="text-sm text-foreground/70 mt-2 leading-relaxed">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section bg-secondary">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="eyebrow-teal mb-4">Our Services</div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-primary">Everything you need, in one place</h2>
            <p className="text-foreground/70 mt-4">Comprehensive consultancy services covering every stage of your study abroad journey.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="group bg-white p-8 rounded border border-border hover:border-[hsl(var(--teal))] transition-colors">
                <div className="w-12 h-12 grid place-items-center rounded bg-primary/5 group-hover:bg-[hsl(var(--teal))]/10 transition-colors">
                  <Icon className="text-primary group-hover:text-[hsl(var(--teal))] transition-colors" size={22} />
                </div>
                <h3 className="font-display text-xl text-primary mt-5">{title}</h3>
                <p className="text-sm text-foreground/70 mt-3 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DESTINATIONS */}
      <section className="section">
        <div className="container-page">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="eyebrow-teal mb-4">Study Destinations</div>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-primary">Where will your journey take you?</h2>
            </div>
            <Link to="/destinations" className="text-primary font-semibold text-sm inline-flex items-center gap-2 hover:text-[hsl(var(--teal))]">
              Explore all destinations <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {destinations.map((d) => (
              <article key={d.name} className="group rounded overflow-hidden border border-border bg-white hover:shadow-[0_15px_40px_-15px_rgba(11,42,85,0.25)] transition-all">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={d.img} alt={d.name} loading="lazy" width={1024} height={768} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl text-primary">{d.name}</h3>
                  <p className="text-sm text-foreground/70 mt-2 leading-relaxed">{d.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section bg-secondary">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="eyebrow-teal mb-4">Why Choose Us</div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-primary">A consultancy built on trust</h2>
          </div>
          <div className="grid gap-x-10 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
            {reasons.map(({ icon: Icon, t, d }) => (
              <div key={t} className="flex gap-5">
                <div className="flex-shrink-0 w-12 h-12 grid place-items-center rounded bg-white border border-border">
                  <Icon className="text-[hsl(var(--teal))]" size={22} />
                </div>
                <div>
                  <h4 className="font-display text-lg text-primary">{t}</h4>
                  <p className="text-sm text-foreground/70 mt-2 leading-relaxed">{d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CREDIT TRANSFER */}
      <section className="section">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="eyebrow-teal mb-4">Credit Transfer</div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-primary">Continue your education without starting over</h2>
            <p className="text-foreground/70 mt-4">
              We help students transfer eligible academic credits to recognized universities and colleges while saving time and tuition.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {creditTransferCards.map(({ icon: Icon, title, text }) => (
              <article key={title} className="bg-white border border-border p-8 rounded">
                <div className="w-12 h-12 grid place-items-center rounded-full bg-primary/5">
                  <Icon size={22} className="text-[hsl(var(--teal))]" />
                </div>
                <h3 className="font-display text-xl text-primary mt-5">{title}</h3>
                <p className="text-sm text-foreground/75 leading-relaxed mt-3">{text}</p>
                <div className="mt-6 pt-6 border-t border-border text-xs uppercase tracking-[0.2em] text-primary/60 font-semibold">
                  Transfer-ready guidance
                </div>
              </article>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/credit-transfer" className="text-primary font-semibold text-sm inline-flex items-center gap-2 hover:text-[hsl(var(--teal))]">
              Explore credit transfer support <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <CtaBanner />

      {/* CONTACT TEASER */}
      <section className="section">
        <div className="container-page max-w-3xl text-center">
          <div className="eyebrow-teal mb-4">Get in Touch</div>
          <h2 className="font-display text-3xl md:text-4xl text-primary">We'd love to hear from you</h2>
          <p className="text-foreground/70 mt-4">Have a question? Reach out and our counselors will respond within 24 hours.</p>
          <Link to="/contact" className="inline-flex mt-8 bg-primary text-primary-foreground px-8 py-4 text-sm font-semibold rounded hover:bg-primary-deep transition-colors">
            Contact Us
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
