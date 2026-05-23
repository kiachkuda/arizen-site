import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Shield, Lightbulb, Users, Award, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/site/SectionHeading";
import g1 from "@/assets/gallery-1.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Ascend Academy" },
      { name: "description", content: "Our mission, vision and the values that drive Ascend Academy's unique fusion of athletic and digital education." },
      { property: "og:title", content: "About Ascend Academy" },
      { property: "og:description", content: "Mission, vision and values of the academy." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const values = [
  { icon: Shield, title: "Discipline", desc: "Every champion is built on consistent practice and integrity." },
  { icon: Lightbulb, title: "Innovation", desc: "We meet tomorrow's challenges with creative, tech-forward thinking." },
  { icon: Users, title: "Teamwork", desc: "Lifelong collaboration skills, learned through sport and code." },
  { icon: Award, title: "Excellence", desc: "Premium coaching standards across every program." },
];

const timeline = [
  { year: "2012", title: "Founded", desc: "Opened our first soccer academy with 40 students." },
  { year: "2016", title: "Gymnastics Wing", desc: "Launched our Olympic-spec gymnastics studio." },
  { year: "2020", title: "Digital Lab", desc: "Pioneered the integrated coding & robotics curriculum." },
  { year: "2024", title: "Global Reach", desc: "850+ alumni, 15+ championship titles, 3 campuses." },
];

function AboutPage() {
  return (
    <>
      <section className="hero-gradient py-20 md:py-28 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-blue mb-3">Our Story</p>
          <h1 className="font-display text-5xl md:text-7xl font-extrabold mb-6 text-balance">
            A new standard for <span className="text-gradient">private education.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            We exist to raise a generation as confident on the field as they are in front of a screen — and as kind in the team huddle as they are clever in the lab.
          </p>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-border">
            <img src={g1} alt="Academy training" className="w-full h-full object-cover" />
          </div>
          <div className="space-y-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-blue mb-3">Mission</p>
              <h2 className="font-display text-3xl font-bold mb-4">Develop multidimensional champions.</h2>
              <p className="text-muted-foreground">
                We combine elite physical training with future-ready digital literacy so every student leaves with the body of an athlete and the mind of a creator.
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-blue mb-3">Vision</p>
              <h2 className="font-display text-3xl font-bold mb-4">A worldwide academy children love.</h2>
              <p className="text-muted-foreground">
                To become the reference private academy where parents, schools and partners trust their children's complete development — from age 5 to 17.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto">
          <SectionHeading eyebrow="What we stand for" title="Four values, every single day." center />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="p-8 rounded-3xl bg-background border border-border card-hover"
                >
                  <div className="size-12 rounded-2xl bg-brand-blue/10 text-brand-blue grid place-items-center mb-6">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="font-display text-xl font-bold mb-2">{v.title}</h3>
                  <p className="text-sm text-muted-foreground">{v.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <SectionHeading eyebrow="Our journey" title="A timeline of championship moments." center />
          <div className="relative pl-8 border-l-2 border-border space-y-10">
            {timeline.map((t, i) => (
              <motion.div
                key={t.year}
                initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }}
                className="relative"
              >
                <div className="absolute -left-[2.6rem] top-1.5 size-5 rounded-full bg-brand-blue ring-4 ring-background" />
                <p className="font-display text-brand-blue font-bold text-sm tracking-widest mb-1">{t.year}</p>
                <h3 className="font-display text-2xl font-bold mb-2">{t.title}</h3>
                <p className="text-muted-foreground">{t.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-card border-t border-border text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-4xl font-bold mb-6">Meet your child's next mentor.</h2>
          <Link to="/admissions" className="inline-flex items-center gap-2 px-8 py-4 bg-brand-navy text-white rounded-2xl font-bold hover:bg-brand-blue transition-colors">
            Book a Campus Visit <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
