import Layout from "@/components/site/Layout";
import PageHero from "@/components/site/PageHero";
import CtaBanner from "@/components/site/CtaBanner";
import Seo from "@/components/site/Seo";
import uk from "@/assets/uk.jpeg";
import usa from "@/assets/usa.jpg";
import australia from "@/assets/aus.jpg";
import malaysia from "@/assets/malaysia.jpg";
import turkey from "@/assets/turkey.jpg";
import hungary from "@/assets/hungary.jpg";
import germany from "@/assets/germany.jpg";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  GraduationCap,
  ListChecks,
  Wallet,
} from "lucide-react";

const destinations = [
  {
    name: "United Kingdom",
    img: uk,
    intro:
      "The UK remains one of the most popular destinations for international students, known for globally respected universities, focused degree structures, and strong academic support.",
    requirements: [
      "IELTS or equivalent English test",
      "Recognized academic transcripts",
      "Statement of purpose or personal statement",
      "References and valid passport",
    ],
    universities: [
      "University of Oxford",
      "Imperial College London",
      "University of Edinburgh",
      "King's College London",
      "University of Manchester",
    ],
    benefits: [
      "Shorter degree durations",
      "Strong global university reputation",
      "Wide subject variety",
      "Multicultural student life",
    ],
    process: [
      "Profile assessment and shortlisting",
      "University application submission",
      "Offer acceptance and tuition deposit",
      "CAS issuance and visa application",
    ],
  },
  {
    name: "United States",
    img: usa,
    intro:
      "The USA offers unmatched variety in universities, majors, research opportunities, and campus experiences, making it a leading choice for ambitious students worldwide.",
    requirements: [
      "English proficiency test such as IELTS or TOEFL",
      "Academic transcripts and certificates",
      "Statement of purpose and recommendation letters",
      "Proof of financial support",
    ],
    universities: [
      "Harvard University",
      "Massachusetts Institute of Technology",
      "Stanford University",
      "University of California, Berkeley",
      "New York University",
    ],
    benefits: [
      "Extensive university options",
      "Strong research ecosystem",
      "Flexible course structures",
      "Large international student communities",
    ],
    process: [
      "Build course and university shortlist",
      "Prepare applications and supporting documents",
      "Receive admission decision and I-20",
      "Pay SEVIS fee and apply for student visa",
    ],
  },
  {
    name: "Australia",
    img: australia,
    intro:
      "Australia combines respected universities, strong student support, and a practical learning environment with excellent lifestyle advantages for international students.",
    requirements: [
      "IELTS or equivalent English test",
      "Academic transcripts and certificates",
      "Genuine student documentation",
      "Health cover and financial evidence",
    ],
    universities: [
      "University of Melbourne",
      "University of Sydney",
      "ANU",
      "UNSW",
      "Monash University",
    ],
    benefits: [
      "High quality of life",
      "Career-oriented programs",
      "Well-supported international student systems",
      "Popular scholarship options",
    ],
    process: [
      "Shortlist courses and institutions",
      "Submit application and receive offer",
      "Accept offer and obtain CoE",
      "Arrange health cover and student visa application",
    ],
  },
  {
    name: "Malaysia",
    img: malaysia,
    intro:
      "Malaysia offers affordable tuition, English-medium programs, and an accessible pathway into internationally recognized degrees in a student-friendly environment.",
    requirements: [
      "Academic transcripts",
      "English proficiency where required",
      "Valid passport and photographs",
      "Financial support documents",
    ],
    universities: [
      "University of Malaya",
      "Taylor's University",
      "Universiti Kebangsaan Malaysia",
      "UCSI University",
      "Sunway University",
    ],
    benefits: [
      "Lower living costs",
      "English-taught programs",
      "Modern campuses",
      "Regional career exposure",
    ],
    process: [
      "Select course and institution",
      "Submit academic documents",
      "Receive admission letter",
      "Apply for student pass and travel clearance",
    ],
  },
  {
    name: "Turkey",
    img: turkey,
    intro:
      "Turkey is increasingly popular for international education thanks to affordable tuition, growing English-taught programs, and a rich cultural setting.",
    requirements: [
      "Academic transcripts and certificates",
      "English or program-specific language proof",
      "Passport and photographs",
      "Statement of purpose where required",
    ],
    universities: [
      "Middle East Technical University",
      "Istanbul University",
      "Koç University",
      "Bilkent University",
      "Boğaziçi University",
    ],
    benefits: [
      "Affordable tuition",
      "Culturally vibrant student life",
      "Strong engineering and medical programs",
      "Scholarship opportunities",
    ],
    process: [
      "Choose suitable university and program",
      "Submit application with required documents",
      "Receive admission offer",
      "Complete visa and residence permit steps",
    ],
  },
  {
    name: "Germany",
    img: germany,
    intro:
      "Germany attracts students with strong public universities, research-focused education, and a wide range of high-value programs in engineering, business, and science.",
    requirements: [
      "Recognized academic qualifications",
      "Language proof in English or German",
      "Statement of purpose and CV",
      "Financial evidence and passport documents",
    ],
    universities: [
      "Technical University of Munich",
      "LMU Munich",
      "Heidelberg University",
      "RWTH Aachen University",
      "University of Freiburg",
    ],
    benefits: [
      "Strong public university system",
      "Excellent engineering reputation",
      "Research-driven academic culture",
      "Good value for long-term study plans",
    ],
    process: [
      "Identify eligible courses and entry criteria",
      "Prepare academic and language documents",
      "Apply to universities or Uni-Assist",
      "Complete financial proof and visa formalities",
    ],
  },
  {
    name: "Hungary",
    img: hungary,
    intro:
      "Hungary offers cost-effective European education, especially in medicine, business, and engineering, with many programs available in English.",
    requirements: [
      "Academic transcripts and certificates",
      "English proficiency test where needed",
      "Passport and application forms",
      "Motivation letter or interview if required",
    ],
    universities: [
      "University of Debrecen",
      "Eotvos Lorand University",
      "University of Szeged",
      "Budapest University of Technology and Economics",
      "Semmelweis University",
    ],
    benefits: [
      "Affordable tuition and living costs",
      "English-taught degree options",
      "Strong medical education",
      "Central European location",
    ],
    process: [
      "Choose university and intake",
      "Submit application and supporting documents",
      "Attend interview or entrance test if needed",
      "Receive admission and complete visa application",
    ],
  },
  {
    name: "New Zealand",
    img: australia,
    intro:
      "New Zealand is known for quality education, a safe learning environment, and a balanced student lifestyle supported by modern campuses and practical teaching.",
    requirements: [
      "IELTS or equivalent English proof",
      "Academic transcripts and certificates",
      "Statement of purpose where required",
      "Passport and financial documents",
    ],
    universities: [
      "University of Auckland",
      "University of Otago",
      "Victoria University of Wellington",
      "University of Canterbury",
      "Massey University",
    ],
    benefits: [
      "Welcoming learning environment",
      "Research and practical learning balance",
      "Strong student support",
      "Beautiful and safe living environment",
    ],
    process: [
      "Shortlist courses and institutions",
      "Apply with academic and language documents",
      "Receive offer and arrange tuition payment",
      "Submit student visa application",
    ],
  },
];

const slugify = (value: string) => value.toLowerCase().replace(/\s+/g, "-");

const sectionCards = [
  {
    title: "Admission Requirements",
    icon: GraduationCap,
    key: "requirements",
  },
  {
    title: "Top Universities",
    icon: CheckCircle2,
    key: "universities",
  },
  {
    title: "Key Benefits",
    icon: Wallet,
    key: "benefits",
  },
  {
    title: "Application Process",
    icon: ListChecks,
    key: "process",
  },
] as const;

const Destinations = () => {
  return (
    <Layout>
      <Seo
        title="Study Destinations"
        description="Compare study options in the UK, USA, Australia, Malaysia, Turkey, Germany, Hungary, and New Zealand, including top universities, admission requirements, and student benefits."
        path="/destinations"
        image={uk}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Study Destinations",
          description:
            "Destination guide for students applying to universities in the UK, USA, Australia, Malaysia, Turkey, Germany, Hungary, and New Zealand.",
        }}
      />

      <PageHero
        eyebrow="Study Destinations"
        title="Choose where your story begins"
        subtitle="Explore the differences between each destination and find the best fit for your goals, budget, and future plans."
      />

      <section className="border-b border-border bg-secondary/60">
        <div className="container-page py-8 lg:py-10">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="eyebrow-teal mb-3">Quick Navigation</div>
              <h2 className="font-display text-2xl md:text-3xl text-primary">
                Jump to a destination
              </h2>
            </div>
            <p className="max-w-2xl text-sm leading-relaxed text-foreground/70">
              Each section below includes key requirements, top universities,
              student benefits, and the typical application flow.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {destinations.map((destination) => (
              <a
                key={destination.name}
                href={`#${slugify(destination.name)}`}
                className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-white px-4 py-2 text-sm font-medium text-primary transition-colors hover:border-[hsl(var(--teal))] hover:text-[hsl(var(--teal))]"
              >
                {destination.name}
                <ArrowRight size={14} />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page space-y-10 lg:space-y-12">
          {destinations.map((destination, index) => (
            <article
              key={destination.name}
              id={slugify(destination.name)}
              className="scroll-mt-28 rounded-[2rem] border border-border bg-white p-5 shadow-[0_24px_80px_-50px_rgba(11,42,85,0.25)] md:p-8 lg:p-10"
            >
              <div className="grid gap-8 lg:grid-cols-[minmax(280px,0.88fr)_minmax(0,1.12fr)] lg:gap-10">
                <div className="space-y-5">
                  <div className="relative overflow-hidden rounded-[1.5rem]">
                    <img
                      src={destination.img}
                      alt={destination.name}
                      loading="lazy"
                      width={1024}
                      height={768}
                      className="h-[280px] w-full object-cover md:h-[360px]"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,42,85,0.08)_0%,rgba(11,42,85,0.72)_100%)]" />
                    <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                      <div className="text-xs font-semibold uppercase tracking-[0.24em] text-white/70">
                        Destination {String(index + 1).padStart(2, "0")}
                      </div>
                      <h3 className="mt-2 font-display text-2xl md:text-3xl text-white">
                        {destination.name}
                      </h3>
                    </div>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl bg-secondary p-4">
                      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary/70">
                        <Clock3 size={14} className="text-[hsl(var(--teal))]" />
                        Timeline
                      </div>
                      <p className="mt-2 text-sm text-foreground/75">
                        Best to start planning 6 to 12 months before your
                        intended intake.
                      </p>
                    </div>
                    <div className="rounded-2xl bg-secondary p-4">
                      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary/70">
                        <Wallet size={14} className="text-[hsl(var(--teal))]" />
                        Fit
                      </div>
                      <p className="mt-2 text-sm text-foreground/75">
                        Suitable for students comparing academic quality,
                        affordability, and long-term opportunities.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="eyebrow-teal mb-3">Destination Overview</div>
                  <h2 className="font-display text-3xl md:text-4xl text-primary leading-tight">
                    Study in {destination.name}
                  </h2>
                  <p className="mt-4 max-w-3xl text-base leading-relaxed text-foreground/80">
                    {destination.intro}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    {destination.benefits.slice(0, 3).map((benefit) => (
                      <span
                        key={benefit}
                        className="rounded-full bg-primary/5 px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-primary"
                      >
                        {benefit}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 grid gap-5 md:grid-cols-2">
                    {sectionCards.map(({ title, icon: Icon, key }) => (
                      <div
                        key={`${destination.name}-${title}`}
                        className="rounded-[1.25rem] border border-border bg-secondary/70 p-5"
                      >
                        <div className="mb-4 flex items-center gap-3">
                          <div className="grid h-10 w-10 place-items-center rounded-full bg-white">
                            <Icon size={18} className="text-[hsl(var(--teal))]" />
                          </div>
                          <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                            {title}
                          </h4>
                        </div>

                        {key === "process" ? (
                          <ol className="space-y-3">
                            {destination[key].map((item, itemIndex) => (
                              <li
                                key={item}
                                className="flex gap-3 text-sm leading-relaxed text-foreground/80"
                              >
                                <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-white">
                                  {itemIndex + 1}
                                </span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ol>
                        ) : (
                          <ul className="space-y-3">
                            {destination[key].map((item) => (
                              <li
                                key={item}
                                className="flex gap-3 text-sm leading-relaxed text-foreground/80"
                              >
                                <CheckCircle2
                                  size={16}
                                  className="mt-1 shrink-0 text-[hsl(var(--teal))]"
                                />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CtaBanner />
    </Layout>
  );
};

export default Destinations;
