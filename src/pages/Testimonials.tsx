import Layout from "@/components/site/Layout";
import PageHero from "@/components/site/PageHero";
import CtaBanner from "@/components/site/CtaBanner";
import Seo from "@/components/site/Seo";
import {
  ArrowRight,
  CheckCircle2,
  FileText,
  Globe2,
  GraduationCap,
  Landmark,
  Wallet,
} from "lucide-react";
import { Link } from "react-router-dom";

const benefits = [
  "Save time by avoiding repeated courses",
  "Reduce overall tuition expenses",
  "Continue studies without interruption",
  "Transfer to better-ranked institutions",
  "Access new career and immigration opportunities",
];

const qualificationPoints = [
  "Studied at a recognized college or university",
  "Completed relevant coursework",
  "Meet the academic requirements of the new institution",
  "Can provide official transcripts and course outlines",
];

const serviceSteps = [
  {
    title: "University Selection",
    description:
      "We identify institutions that accept transfer credits and align with your academic goals.",
  },
  {
    title: "Credit Evaluation Support",
    description:
      "Our consultants help prepare transcripts, course outlines, and supporting documents for assessment.",
  },
  {
    title: "Application Assistance",
    description:
      "We help complete and submit transfer applications accurately and on time.",
  },
  {
    title: "Visa & Admission Guidance",
    description:
      "For international transfers, we support both admission and student visa procedures.",
  },
];

const documents = [
  "Academic transcripts",
  "Course syllabus or outlines",
  "Passport or ID copy",
  "Previous institution details",
  "English proficiency test results (if required)",
];

const countries = [
  "Canada",
  "Australia",
  "United Kingdom",
  "United States",
  "Europe",
  "Malaysia",
  "UAE",
];

const process = [
  "Free consultation",
  "Academic profile review",
  "University shortlisting",
  "Credit assessment submission",
  "Offer letter and admission processing",
  "Visa guidance and enrollment",
];

const faqs = [
  {
    question: "Will all my credits transfer?",
    answer:
      "Not always. Universities decide how many credits are accepted based on course equivalency, academic grades, and internal policy.",
  },
  {
    question: "How long does the process take?",
    answer:
      "Credit assessments typically take 2 to 8 weeks depending on the institution and how quickly documents are reviewed.",
  },
  {
    question: "Can international students apply?",
    answer:
      "Yes. Many universities accept international transfer students when their academic background meets the entry criteria.",
  },
  {
    question: "Is there a fee for credit evaluation?",
    answer:
      "Some universities charge an assessment fee, while others include the review as part of the admission process.",
  },
];

const Testimonials = () => {
  return (
    <Layout>
      <Seo
        title="Credit Transfer"
        description="Continue your education without starting over. Explore credit transfer support for undergraduate, diploma, postgraduate, and international transfer pathways."
        path="/credit-transfer"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Credit transfer support",
          provider: {
            "@type": "Organization",
            name: "Ashby Education Consultancy",
          },
          areaServed: [
            "Canada",
            "Australia",
            "United Kingdom",
            "United States",
            "Europe",
            "Malaysia",
            "UAE",
          ],
        }}
      />

      <PageHero
        eyebrow="Credit Transfer"
        title="Continue your education without starting over"
        subtitle="If you have already completed courses, diplomas, or part of a degree, we help you transfer eligible credits to recognized universities and colleges."
      >
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center rounded bg-white px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-secondary"
          >
            Book Free Consultation
          </Link>
          <Link
            to="/destinations"
            className="inline-flex items-center gap-2 rounded border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-[hsl(var(--teal))] hover:text-[hsl(var(--teal))]"
          >
            Explore Destinations <ArrowRight size={16} />
          </Link>
        </div>
      </PageHero>

      <section className="section">
        <div className="container-page grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <div className="eyebrow-teal mb-4">What Is Credit Transfer?</div>
            <h2 className="font-display text-3xl md:text-4xl text-primary leading-tight">
              Move forward with the study you have already completed
            </h2>
            <p className="mt-5 text-foreground/80 leading-relaxed">
              Credit transfer allows students to move previously completed
              academic credits from one institution to another. Depending on
              university policy and course compatibility, accepted credits can
              count toward your new program.
            </p>
            <p className="mt-4 text-foreground/80 leading-relaxed">
              We assist students with undergraduate programs, diplomas,
              associate degrees, postgraduate studies, international university
              transfers, and college-to-university pathways.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                icon: GraduationCap,
                title: "Academic Continuity",
                text: "Stay on track instead of restarting from the beginning.",
              },
              {
                icon: Wallet,
                title: "Lower Cost",
                text: "Reduce tuition by avoiding repeated coursework.",
              },
              {
                icon: Globe2,
                title: "Global Options",
                text: "Transfer toward stronger international institutions.",
              },
              {
                icon: Landmark,
                title: "Career Pathway",
                text: "Use transfer routes to unlock new study and migration goals.",
              },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-[1.5rem] border border-border bg-secondary/70 p-6">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-white">
                  <Icon size={20} className="text-[hsl(var(--teal))]" />
                </div>
                <h3 className="mt-4 font-display text-xl text-primary">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/70">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-secondary">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          <div className="rounded-[1.75rem] border border-border bg-white p-8">
            <div className="eyebrow-teal mb-4">Benefits</div>
            <h2 className="font-display text-3xl text-primary">Why students choose credit transfer</h2>
            <ul className="mt-6 space-y-4">
              {benefits.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-foreground/80">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-[hsl(var(--teal))]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[1.75rem] border border-border bg-white p-8">
            <div className="eyebrow-teal mb-4">Who Can Apply?</div>
            <h2 className="font-display text-3xl text-primary">You may qualify if you have already studied</h2>
            <ul className="mt-6 space-y-4">
              {qualificationPoints.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-foreground/80">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-[hsl(var(--teal))]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="eyebrow-teal mb-4">Our Services</div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-primary">
              End-to-end support for transfer students
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {serviceSteps.map((item, index) => (
              <article key={item.title} className="rounded-[1.5rem] border border-border bg-white p-8 shadow-[0_20px_60px_-40px_rgba(11,42,85,0.25)]">
                <div className="text-xs font-semibold uppercase tracking-[0.24em] text-[hsl(var(--teal))]">
                  Step {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-4 font-display text-2xl text-primary">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/75">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-secondary">
        <div className="container-page grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[1.75rem] border border-border bg-white p-8">
            <div className="eyebrow-teal mb-4">Required Documents</div>
            <h2 className="font-display text-3xl text-primary">What students usually need</h2>
            <ul className="mt-6 space-y-4">
              {documents.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-foreground/80">
                  <FileText size={17} className="mt-1 shrink-0 text-[hsl(var(--teal))]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm leading-relaxed text-foreground/60">
              Requirements may vary depending on the university and country.
            </p>
          </div>

          <div className="rounded-[1.75rem] border border-border bg-white p-8">
            <div className="eyebrow-teal mb-4">Countries & Universities</div>
            <h2 className="font-display text-3xl text-primary">Where we support transfer opportunities</h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {countries.map((country) => (
                <span
                  key={country}
                  className="rounded-full border border-border bg-secondary px-4 py-2 text-sm font-medium text-primary"
                >
                  {country}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="eyebrow-teal mb-4">How It Works</div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-primary">
              A clear process from review to enrollment
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {process.map((item, index) => (
              <div key={item} className="rounded-[1.5rem] border border-border bg-white p-6">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white">
                  {index + 1}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-foreground/80">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-secondary">
        <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[1.75rem] border border-border bg-white p-8">
            <div className="eyebrow-teal mb-4">Why Choose Us?</div>
            <h2 className="font-display text-3xl text-primary">Guidance built around clarity and results</h2>
            <ul className="mt-6 space-y-4">
              {[
                "Experienced education consultants",
                "Personalized student support",
                "High success rate in admissions",
                "Partnerships with international institutions",
                "Transparent guidance throughout the process",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-foreground/80">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-[hsl(var(--teal))]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[1.75rem] border border-border bg-white p-8">
            <div className="eyebrow-teal mb-4">Frequently Asked Questions</div>
            <h2 className="font-display text-3xl text-primary">Common questions about transferring credits</h2>
            <div className="mt-6 space-y-5">
              {faqs.map((item) => (
                <div key={item.question} className="rounded-2xl border border-border bg-secondary/70 p-5">
                  <h3 className="font-display text-xl text-primary">{item.question}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/75">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <div className="rounded-[2rem] bg-primary px-8 py-12 text-center text-white md:px-12">
            <div className="eyebrow mb-4 text-white/60">Ready To Transfer Your Credits?</div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-white">
              Speak with our education advisors today
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/75 md:text-base">
              Explore the best transfer opportunities for your academic future
              and continue your education without losing momentum.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center rounded bg-[hsl(var(--teal))] px-8 py-4 text-sm font-semibold text-primary transition-colors hover:bg-white"
            >
              Book Your Free Consultation
            </Link>
          </div>
        </div>
      </section>

      <CtaBanner />
    </Layout>
  );
};

export default Testimonials;
