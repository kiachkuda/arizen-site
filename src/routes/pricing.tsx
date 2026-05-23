import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Check, Trophy, Sparkles, Code2, Dumbbell, School, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/site/SectionHeading";
import { TrialModal } from "@/components/site/TrialModal";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Packages & Pricing — Ascend Academy" },
      { name: "description", content: "Transparent per-session pricing for ICT, Football, Gymnastics, Personal Training and School Setup packages at Ascend Academy." },
      { property: "og:title", content: "Packages & Pricing" },
      { property: "og:description", content: "Per-session rates for every Ascend Academy program." },
      { property: "og:url", content: "/pricing" },
    ],
    links: [{ rel: "canonical", href: "/pricing" }],
  }),
  component: PricingPage,
});

type Pkg = {
  name: string;
  icon: typeof Trophy;
  price: number;
  unit: string;
  description: string;
  includes: string[];
  accent: "blue" | "emerald" | "violet" | "navy";
  featured?: boolean;
};

const packages: Pkg[] = [
  {
    name: "ICT & Digital Skills",
    icon: Code2,
    price: 3500,
    unit: "per session",
    description: "Coding, robotics, AI fundamentals and creative tech.",
    includes: ["1.5-hour studio session", "Lab equipment provided", "Project portfolio", "Termly showcase"],
    accent: "blue",
  },
  {
    name: "Football Academy",
    icon: Trophy,
    price: 4000,
    unit: "per session",
    description: "Elite training with UEFA-licensed coaches.",
    includes: ["90-minute training", "Match-day inclusion", "Performance reports", "Kit included"],
    accent: "emerald",
    featured: true,
  },
  {
    name: "Gymnastics",
    icon: Sparkles,
    price: 3000,
    unit: "per session",
    description: "Strength, flexibility and grace in a safe studio.",
    includes: ["60-minute class", "Certified coaches", "Termly recital", "Progress tracking"],
    accent: "violet",
  },
  {
    name: "Personal Trainer",
    icon: Dumbbell,
    price: 3000,
    unit: "per session",
    description: "Private 1:1 coaching tailored to your child's goals.",
    includes: ["60-minute private session", "Personalised plan", "Nutrition guidance", "Flexible scheduling"],
    accent: "blue",
  },
  {
    name: "School Setup",
    icon: School,
    price: 2000,
    unit: "per session · per student",
    description: "Our coaches and curriculum delivered on your campus.",
    includes: ["On-site delivery", "Multi-program option", "Volume rates available", "Insurance covered"],
    accent: "navy",
  },
];

const accentMap = {
  blue: { bg: "bg-brand-blue/10", text: "text-brand-blue" },
  emerald: { bg: "bg-brand-emerald/10", text: "text-brand-emerald" },
  violet: { bg: "bg-brand-violet/10", text: "text-brand-violet" },
  navy: { bg: "bg-brand-navy/10", text: "text-brand-navy dark:text-brand-blue" },
};

const fmt = new Intl.NumberFormat("en-KE");

function PricingPage() {
  return (
    <>
      <section className="hero-gradient py-20 md:py-28 px-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-blue mb-3">Packages & Pricing</p>
        <h1 className="font-display text-5xl md:text-6xl font-extrabold mb-6 text-balance max-w-3xl mx-auto">
          Simple, <span className="text-gradient">per-session</span> pricing.
        </h1>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">
          Pay only for the sessions you attend. Mix programs, switch tracks, and unlock bundle discounts when you commit by term.
        </p>
      </section>

      <section className="py-20 md:py-24 px-6">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((p, i) => {
            const Icon = p.icon;
            const a = accentMap[p.accent];
            return (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.06, duration: 0.5 }}
                className={`relative p-8 rounded-3xl border card-hover flex flex-col ${
                  p.featured
                    ? "bg-brand-navy text-white border-transparent shadow-2xl shadow-brand-navy/20"
                    : "bg-card border-border"
                }`}
              >
                {p.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-emerald text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                )}
                <div className={`size-12 rounded-xl ${p.featured ? "bg-white/10 text-white" : `${a.bg} ${a.text}`} grid place-items-center mb-5`}>
                  <Icon className="size-5" />
                </div>
                <h2 className="font-display text-xl font-bold mb-2">{p.name}</h2>
                <p className={`text-sm mb-6 ${p.featured ? "text-white/70" : "text-muted-foreground"}`}>{p.description}</p>

                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className={`text-xs font-semibold ${p.featured ? "text-white/60" : "text-muted-foreground"}`}>KSh</span>
                    <span className="font-display text-4xl font-extrabold">{fmt.format(p.price)}</span>
                  </div>
                  <p className={`text-xs uppercase tracking-widest mt-1 ${p.featured ? "text-white/60" : "text-muted-foreground"}`}>
                    {p.unit}
                  </p>
                </div>

                <ul className="space-y-2 mb-8 flex-1">
                  {p.includes.map((inc) => (
                    <li key={inc} className="flex gap-2 items-start text-sm">
                      <Check className={`size-4 mt-0.5 shrink-0 ${p.featured ? "text-brand-emerald" : "text-brand-blue"}`} />
                      <span className={p.featured ? "text-white/85" : ""}>{inc}</span>
                    </li>
                  ))}
                </ul>

                <TrialModal
                  trigger={
                    <button
                      className={`w-full py-3 rounded-xl font-bold text-sm transition-colors ${
                        p.featured
                          ? "bg-brand-emerald text-white hover:brightness-110"
                          : "bg-brand-navy text-white hover:bg-brand-blue"
                      }`}
                    >
                      Book a Trial
                    </button>
                  }
                />
              </motion.div>
            );
          })}
        </div>

        <p className="text-center text-xs text-muted-foreground mt-8">
          Prices in Kenyan Shillings (KSh). Bundle and termly-commitment discounts available on request.
        </p>
      </section>

      <section className="py-20 px-6 bg-card border-y border-border">
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            eyebrow="Bundles & schools"
            title="Save more when you train more."
            subtitle="Combine programs across one or more children, or partner with us as a school for tailored on-site rates."
            center
          />
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "2-Program Bundle", desc: "Mix any two programs and save 10% on every session." },
              { title: "Termly Commitment", desc: "Prepay a full term and lock in a 15% discount." },
              { title: "School Partnership", desc: "Volume rates from KSh 2,000 / session per student." },
            ].map((b) => (
              <div key={b.title} className="p-8 rounded-3xl bg-background border border-border card-hover">
                <h3 className="font-display text-xl font-bold mb-2">{b.title}</h3>
                <p className="text-sm text-muted-foreground">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto bg-gradient-to-br from-brand-navy to-brand-blue rounded-[3rem] p-12 md:p-16 text-white">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Not sure which package fits?</h2>
          <p className="text-white/70 mb-8">Book a free demonstration — we'll recommend the right program and pricing for your child or school.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <TrialModal
              trigger={
                <button className="px-8 py-4 bg-white text-brand-navy rounded-2xl font-bold hover:bg-brand-slate transition">
                  Book Free Trial
                </button>
              }
            />
            <Link
              to="/contact"
              className="px-8 py-4 bg-white/10 border border-white/20 backdrop-blur text-white rounded-2xl font-bold hover:bg-white/20 transition inline-flex items-center gap-2"
            >
              Talk to us <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
