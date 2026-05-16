import Layout from "@/components/site/Layout";
import PageHero from "@/components/site/PageHero";
import CtaBanner from "@/components/site/CtaBanner";
import Seo from "@/components/site/Seo";
import { Compass, GraduationCap, FileCheck, BookOpen, Award, Plane, CheckCircle2 } from "lucide-react";

const services = [
  { icon: Compass, title: "Study Abroad Guidance", desc: "We start with you — your interests, ambitions and constraints — to design a study abroad plan that's right for your future.", steps: ["Profile evaluation", "Country & course matching", "Timeline planning", "Budget & ROI analysis"] },
  { icon: GraduationCap, title: "University Admissions", desc: "End-to-end application support to top global universities, from shortlisting to acceptance.", steps: ["University shortlisting", "SOP & essay drafting", "Recommendation guidance", "Application submission"] },
  { icon: FileCheck, title: "Visa Assistance", desc: "Meticulous documentation and interview preparation backed by a 98% approval rate.", steps: ["Document checklist", "Financial proofs", "Mock visa interviews", "Application tracking"] },
  { icon: BookOpen, title: "Career Counseling", desc: "Choose courses and specializations aligned to your long-term career trajectory.", steps: ["Aptitude assessment", "Industry insights", "Course alignment", "Career mapping"] },
  { icon: Award, title: "Scholarship Guidance", desc: "Identify and secure scholarships, grants and financial aid you qualify for.", steps: ["Scholarship discovery", "Eligibility review", "Application support", "Essay refinement"] },
  { icon: Plane, title: "Pre-Departure Support", desc: "Travel, accommodation, banking, SIM cards and orientation — handled with care.", steps: ["Travel planning", "Accommodation booking", "Forex & banking", "On-arrival orientation"] },
];

const Services = () => {
  return (
    <Layout>
      <Seo
        title="Study Abroad Services"
        description="Explore Ashby’s study abroad services including counseling, university admissions, visa assistance, scholarship guidance, career planning, and pre-departure support."
        path="/services"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Study abroad consultancy",
          provider: {
            "@type": "Organization",
            name: "Ashby Education Consultancy",
          },
          areaServed: ["United Kingdom", "Canada", "Australia", "Europe"],
        }}
      />
      <PageHero eyebrow="Our Services" title="Comprehensive support, every step of the way" subtitle="From the first consultation to your first day on campus — Ashby is with you throughout the journey." />

      <section className="section">
        <div className="container-page space-y-16">
          {services.map(({ icon: Icon, title, desc, steps }, i) => (
            <article key={title} className={`grid gap-10 lg:grid-cols-[auto_1fr_1fr] items-start ${i > 0 ? "pt-16 border-t border-border" : ""}`}>
              <div className="w-16 h-16 grid place-items-center rounded bg-primary/5">
                <Icon className="text-primary" size={28} />
              </div>
              <div>
                <div className="eyebrow-teal mb-3">Service {String(i + 1).padStart(2, "0")}</div>
                <h2 className="font-display text-2xl md:text-3xl text-primary leading-tight">{title}</h2>
                <p className="text-foreground/80 mt-4 leading-relaxed">{desc}</p>
              </div>
              <div className="bg-secondary p-6 rounded border border-border">
                <div className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-4">What's Included</div>
                <ul className="space-y-3">
                  {steps.map((s) => (
                    <li key={s} className="flex items-start gap-3 text-sm text-foreground/80">
                      <CheckCircle2 size={16} className="text-[hsl(var(--teal))] flex-shrink-0 mt-0.5" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CtaBanner />
    </Layout>
  );
};

export default Services;
