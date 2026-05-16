import { Link } from "react-router-dom";

const CtaBanner = () => {
  return (
    <section className="bg-primary">
      <div className="container-page py-16 lg:py-20 grid gap-8 lg:grid-cols-[1fr_auto] items-center">
        <div>
          <div className="uppercase tracking-[0.2em] text-xs text-[hsl(var(--teal))] font-semibold mb-3">
            Take the first step
          </div>
          <h2 className="font-display text-white text-3xl md:text-4xl lg:text-5xl leading-tight">
            Start Your Study Abroad Journey Today
          </h2>
          <p className="text-white/70 mt-4 max-w-xl">
            Speak with our expert counselors and get a personalized roadmap to your dream university — completely free.
          </p>
        </div>
        <Link
          to="/contact"
          className="inline-flex items-center justify-center bg-white text-primary px-8 py-4 text-sm font-semibold rounded hover:bg-[hsl(var(--teal))] hover:text-white transition-colors whitespace-nowrap"
        >
          Book Free Consultation
        </Link>
      </div>
    </section>
  );
};

export default CtaBanner;
