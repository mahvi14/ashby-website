import Layout from "@/components/site/Layout";
import PageHero from "@/components/site/PageHero";
import ContactForm from "@/components/site/ContactForm";
import Seo from "@/components/site/Seo";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const officeMapQuery = encodeURIComponent(
    "Office 206,Commericial Building 45-C,Lane 10,Bukhari Commercial Phase 6,DHA,karachi",
  );

  return (
    <Layout>
      <Seo
        title="Contact Our Study Abroad Consultants"
        description="Book a free consultation with Ashby Education Consultancy for admissions guidance, visa support, scholarships, and destination planning."
        path="/contact"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact Ashby Education Consultancy",
          description:
            "Contact page for students looking to book a study abroad consultation.",
        }}
      />
      <PageHero eyebrow="Get in Touch" title="Let's plan your study abroad journey" subtitle="Book a free consultation with our expert counselors. We respond to every inquiry within 24 hours." />

      <section className="section">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.5fr]">
          <aside className="space-y-6">
            <div>
              <div className="eyebrow-teal mb-3">Contact Details</div>
              <h2 className="font-display text-2xl md:text-3xl text-primary">Reach out directly</h2>
              <p className="text-foreground/70 mt-3 text-sm leading-relaxed">Prefer to talk? Our counselors are available Monday through Saturday.</p>
            </div>
            {[
              { i: Phone, t: "Phone", d: "+93131256007 / +923719227429" },
              { i: Mail, t: "Email", d: "ashbyeducationservices@gmail.com" },
              { i: MapPin, t: "Office", d: "Office 206,Commericial Building 45-C,Lane 10,Bukhari Commercial Phase 6,DHA,karachi" },
              { i: Clock, t: "Hours", d: "Mon – Sat · 10:00 AM – 6:30 PM" },
            ].map(({ i: Icon, t, d }) => (
              <div key={t} className="flex gap-4 p-5 bg-secondary border border-border rounded">
                <div className="w-10 h-10 grid place-items-center rounded bg-white border border-border flex-shrink-0">
                  <Icon size={18} className="text-[hsl(var(--teal))]" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">{t}</div>
                  <div className="text-sm text-foreground/80 mt-1">{d}</div>
                </div>
              </div>
            ))}
          </aside>

          <div className="bg-white border border-border rounded p-8 lg:p-10">
            <h3 className="font-display text-2xl text-primary">Book your free consultation</h3>
            <p className="text-sm text-foreground/70 mt-2 mb-8">Tell us about your goals — we'll get back within 24 hours.</p>
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="bg-secondary">
        <div className="container-page py-2">
          <iframe
            title="Ashby office location"
            src={`https://www.google.com/maps?q=${officeMapQuery}&output=embed`}
            className="w-full h-80 rounded border border-border my-12"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
