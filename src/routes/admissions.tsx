import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Check, ChevronDown } from "lucide-react";
import { SectionHeading } from "@/components/site/SectionHeading";

export const Route = createFileRoute("/admissions")({
  head: () => ({
    meta: [
      { title: "Admissions — Arizen Academy" },
      { name: "description", content: "Apply now. Simple, 3-step admissions for Soccer, Gymnastics and Digital Skills programs." },
      { property: "og:title", content: "Admissions" },
      { property: "og:description", content: "Apply to Arizen Academy in three simple steps." },
      { property: "og:url", content: "/admissions" },
    ],
    links: [{ rel: "canonical", href: "/admissions" }],
  }),
  component: AdmissionsPage,
});

const steps = [
  { n: "01", title: "Submit interest", desc: "Tell us a bit about your child and pick a program." },
  { n: "02", title: "Book a trial", desc: "Free 60-minute trial session with our coaches." },
  { n: "03", title: "Enroll", desc: "Choose a plan and start a journey of excellence." },
];

const faqs = [
  { q: "What ages do you accept?", a: "We accept students from ages 5 to 17 across all programs." },
  { q: "Are trials really free?", a: "Yes — every new family is invited to a complimentary 60-minute trial session." },
  { q: "Can my child join more than one program?", a: "Absolutely. We offer multi-program bundles with discounted rates." },
  { q: "Do you offer scholarships?", a: "We have a limited number of merit and need-based scholarships each year." },
  { q: "What if my child has no experience?", a: "Most of our students start as complete beginners. Our pathway is built for that." },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between py-5 text-left">
        <span className="font-display font-bold text-lg">{q}</span>
        <ChevronDown className={`size-5 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <p className="pb-5 text-muted-foreground">{a}</p>}
    </div>
  );
}

function AdmissionsPage() {
  return (
    <>
      <section className="hero-gradient py-20 md:py-28 px-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-blue mb-3">Admissions 2026</p>
        <h1 className="font-display text-5xl md:text-6xl font-extrabold mb-6 text-balance max-w-3xl mx-auto">
          Three steps to <span className="text-gradient">join Arizen.</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto">
          Simple, transparent, and stress-free. We're here to guide you through every step.
        </p>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          {steps.map((s) => (
            <div key={s.n} className="p-8 rounded-3xl bg-card border border-border card-hover">
              <p className="font-display text-5xl font-extrabold text-gradient mb-4">{s.n}</p>
              <h3 className="font-display text-xl font-bold mb-2">{s.title}</h3>
              <p className="text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 px-6 bg-card border-y border-border">
        <div className="max-w-3xl mx-auto">
          <SectionHeading eyebrow="Register" title="Start your application." center />
          <form className="space-y-5 p-8 md:p-10 bg-background rounded-3xl border border-border" onSubmit={(e) => e.preventDefault()}>
            <div className="grid sm:grid-cols-2 gap-5">
              <input required placeholder="Parent name" className="px-4 py-3 rounded-xl bg-card border border-border focus:outline-none focus:ring-2 focus:ring-brand-blue" />
              <input required type="email" placeholder="Email" className="px-4 py-3 rounded-xl bg-card border border-border focus:outline-none focus:ring-2 focus:ring-brand-blue" />
              <input required placeholder="Phone" className="px-4 py-3 rounded-xl bg-card border border-border focus:outline-none focus:ring-2 focus:ring-brand-blue" />
              <input required placeholder="Child's name" className="px-4 py-3 rounded-xl bg-card border border-border focus:outline-none focus:ring-2 focus:ring-brand-blue" />
              <input required placeholder="Child's age" className="px-4 py-3 rounded-xl bg-card border border-border focus:outline-none focus:ring-2 focus:ring-brand-blue" />
              <select className="px-4 py-3 rounded-xl bg-card border border-border focus:outline-none focus:ring-2 focus:ring-brand-blue">
                <option>Soccer Academy</option>
                <option>Gymnastics</option>
                <option>Digital Skills</option>
                <option>Multi-program bundle</option>
              </select>
            </div>
            <textarea placeholder="Tell us about your child's experience and goals" rows={4} className="w-full px-4 py-3 rounded-xl bg-card border border-border focus:outline-none focus:ring-2 focus:ring-brand-blue" />
            <button className="w-full py-4 bg-brand-navy text-white rounded-xl font-bold hover:bg-brand-blue transition-colors inline-flex items-center justify-center gap-2">
              <Check className="size-4" /> Submit Application
            </button>
          </form>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <SectionHeading eyebrow="FAQ" title="Questions, answered." center />
          <div>{faqs.map((f) => <FaqItem key={f.q} {...f} />)}</div>
        </div>
      </section>
    </>
  );
}
