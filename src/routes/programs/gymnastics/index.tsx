import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ShieldCheck, Flame, Wind, Award } from "lucide-react";
import imgGym from "@/assets/program-gymnastics.jpg";
import g2 from "@/assets/gallery-2.jpg";
import { SectionHeading } from "@/components/site/SectionHeading";
import { TrialModal } from "@/components/site/TrialModal";

export const Route = createFileRoute("/programs/gymnastics/")({
  head: () => ({
    meta: [
      { title: "Gymnastics — Arizen Academy" },
      { name: "description", content: "Beginner to advanced gymnastics classes for ages 5–17. Safety-first coaching, flexibility, strength and performance." },
      { property: "og:title", content: "Gymnastics Program" },
      { property: "og:description", content: "Beginner to advanced gymnastics for kids." },
      { property: "og:image", content: imgGym },
      { property: "og:url", content: "/programs/gymnastics" },
    ],
    links: [{ rel: "canonical", href: "/programs/gymnastics" }],
  }),
  component: GymPage,
});

const classes = [
  { lvl: "Tots", age: "5–7", focus: "Confidence, balance, first rolls" },
  { lvl: "Foundation", age: "8–10", focus: "Floor work, beam, vault basics" },
  { lvl: "Intermediate", age: "11–13", focus: "Routines, strength, flexibility" },
  { lvl: "Competitive", age: "14–17", focus: "Performance, competition prep" },
];

const timetable = [
  { day: "Monday", time: "4:00 – 5:00 PM · Tots" },
  { day: "Tuesday", time: "5:00 – 6:30 PM · Foundation" },
  { day: "Wednesday", time: "5:30 – 7:00 PM · Intermediate" },
  { day: "Thursday", time: "6:00 – 8:00 PM · Competitive" },
  { day: "Saturday", time: "9:00 AM – 12:00 PM · Open practice" },
];

function GymPage() {
  return (
    <>
      <section className="relative py-20 md:py-28 px-6 overflow-hidden hero-gradient">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-violet mb-3">Gymnastics</p>
            <h1 className="font-display text-5xl md:text-6xl font-extrabold mb-6 text-balance">
              Strength, grace, <span className="text-gradient">and flight.</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              From first cartwheel to competitive routines, our certified coaches build technique safely — in an Olympic-spec studio designed for kids.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/admissions" className="px-7 py-3.5 bg-brand-navy text-white rounded-2xl font-bold hover:bg-brand-blue transition-colors">Register Now</Link>
              <TrialModal />
            </div>
          </div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}
            className="aspect-square rounded-[2.5rem] overflow-hidden border border-border shadow-xl">
            <img src={imgGym} alt="Gymnastics studio" className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-border">
            <img src={g2} alt="Young gymnast" className="w-full h-full object-cover" />
          </div>
          <div className="space-y-8">
            {[
              { icon: ShieldCheck, title: "Safety-first coaching", desc: "Spotter-led progressions, certified equipment, low coach-to-athlete ratios." },
              { icon: Flame, title: "Strength conditioning", desc: "Age-appropriate strength building that prevents injury and powers performance." },
              { icon: Wind, title: "Flexibility training", desc: "Daily mobility work that builds elegance, range and longevity." },
              { icon: Award, title: "Performance showcase", desc: "Termly recitals and competitive routines in front of family." },
            ].map((b) => {
              const Icon = b.icon;
              return (
                <motion.div key={b.title} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                  className="flex gap-4">
                  <div className="size-12 rounded-2xl bg-brand-violet/10 text-brand-violet grid place-items-center shrink-0">
                    <Icon className="size-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold mb-1">{b.title}</h3>
                    <p className="text-muted-foreground">{b.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <SectionHeading eyebrow="Classes" title="Beginner to competitive." />
            <div className="grid sm:grid-cols-2 gap-4">
              {classes.map((c) => (
                <div key={c.lvl} className="p-6 rounded-2xl bg-background border border-border">
                  <p className="text-xs uppercase tracking-widest text-brand-violet font-semibold mb-1">Ages {c.age}</p>
                  <h3 className="font-display text-xl font-bold mb-2">{c.lvl}</h3>
                  <p className="text-sm text-muted-foreground">{c.focus}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <SectionHeading eyebrow="Timetable" title="Find your perfect slot." />
            <div className="rounded-3xl border border-border bg-background divide-y divide-border overflow-hidden">
              {timetable.map((t) => (
                <div key={t.day} className="flex items-center justify-between p-5">
                  <span className="font-bold">{t.day}</span>
                  <span className="text-muted-foreground text-sm">{t.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-brand-navy text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-4xl font-bold mb-6">Find your balance.</h2>
          <TrialModal trigger={<button className="px-8 py-4 bg-brand-violet text-white rounded-2xl font-bold hover:brightness-110 transition">Book Trial Session</button>} />
        </div>
      </section>
    </>
  );
}
