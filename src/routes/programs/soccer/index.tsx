import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Check, Calendar, Target, Users, Trophy } from "lucide-react";
import imgSoccer from "@/assets/sp2.jpg";
import g1 from "@/assets/DSC_3884.jpg";
import g7 from "@/assets/gallery-1.jpg";
import g6 from "@/assets/DSC_3906.jpg";
import g4 from "@/assets/sp.jpg";
import g5 from "@/assets/sp1.jpg";

import { SectionHeading } from "@/components/site/SectionHeading";
import { TrialModal } from "@/components/site/TrialModal";

export const Route = createFileRoute("/programs/soccer/")({
  head: () => ({
    meta: [
      { title: "Soccer Academy — Arizen" },
      { name: "description", content: "Youth soccer training from grassroots to elite competitive levels. Age groups, schedules, and coaching methodology." },
      { property: "og:title", content: "Soccer Academy" },
      { property: "og:description", content: "Elite soccer training for kids 5–17." },
      { property: "og:image", content: imgSoccer },
      { property: "og:url", content: "/programs/soccer" },
    ],
    links: [{ rel: "canonical", href: "/programs/soccer" }],
  }),
  component: SoccerPage,
});

const groups = [
  { name: "Sprouts", age: "Ages 5–7", focus: "Coordination, fun, first touch" },
  { name: "Juniors", age: "Ages 8–10", focus: "Technique, passing, small-sided games" },
  { name: "Cadets", age: "Ages 11–13", focus: "Tactics, positions, match play" },
  { name: "Elite", age: "Ages 14–17", focus: "Performance, analysis, competition" },
];

const schedule = [
  { day: "Mon · Wed", time: "4:00 – 5:30 PM", group: "Sprouts & Juniors" },
  { day: "Tue · Thu", time: "5:00 – 7:00 PM", group: "Cadets" },
  { day: "Mon · Wed · Fri", time: "5:30 – 7:30 PM", group: "Elite Squad" },
  { day: "Saturday", time: "9:00 AM – 1:00 PM", group: "All groups · matchday" },
];

function SoccerPage() {
  return (
    <>
      <section className="relative py-20 md:py-28 px-6 overflow-hidden hero-gradient">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-emerald mb-3">Soccer Academy</p>
            <h1 className="font-display text-5xl md:text-6xl font-extrabold mb-6 text-balance">
              From first touch to <span className="text-gradient">first XI.</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              UEFA-licensed coaches, professional methodology, and a player pathway designed to build technical brilliance and tactical IQ at every age.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/admissions" className="px-7 py-3.5 bg-brand-navy text-white rounded-2xl font-bold hover:bg-brand-blue transition-colors">
                Register Now
              </Link>
              <TrialModal />
            </div>
          </div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}
            className="aspect-square rounded-[2.5rem] overflow-hidden border border-border shadow-xl">
            <img src={imgSoccer} alt="Soccer training" className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading eyebrow="Age groups" title="A pathway built for every stage." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {groups.map((g, i) => (
              <motion.div key={g.name}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="p-8 rounded-3xl bg-card border border-border card-hover">
                <p className="text-xs uppercase tracking-widest text-brand-emerald font-semibold mb-2">{g.age}</p>
                <h3 className="font-display text-2xl font-bold mb-3">{g.name}</h3>
                <p className="text-sm text-muted-foreground">{g.focus}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
          <div>
            <SectionHeading eyebrow="Weekly schedule" title="Training every weekday plus matchday Saturdays." />
            <div className="space-y-3">
              {schedule.map((s) => (
                <div key={s.day + s.group} className="flex items-center justify-between p-5 rounded-2xl bg-background border border-border">
                  <div>
                    <p className="font-bold">{s.day}</p>
                    <p className="text-sm text-muted-foreground">{s.group}</p>
                  </div>
                  <p className="font-display font-bold text-brand-blue">{s.time}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <SectionHeading eyebrow="Methodology" title="A clear philosophy, taught daily." />
            <div className="space-y-4">
              {[
                { icon: Target, title: "Possession-based football", desc: "Build from the back, dominate the middle, attack with intent." },
                { icon: Users, title: "Small-sided games", desc: "More touches, faster decisions, sharper players." },
                { icon: Trophy, title: "Competition pathway", desc: "League play, tournaments and showcase events year-round." },
                { icon: Calendar, title: "Individual reviews", desc: "Termly performance reports and 1:1 player meetings." },
              ].map((m) => {
                const Icon = m.icon;
                return (
                  <div key={m.title} className="flex gap-4 p-5 rounded-2xl border border-border bg-background">
                    <div className="size-11 rounded-xl bg-brand-emerald/10 text-brand-emerald grid place-items-center shrink-0">
                      <Icon className="size-5" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">{m.title}</h4>
                      <p className="text-sm text-muted-foreground">{m.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <SectionHeading eyebrow="On the pitch" title="Match & training gallery" />
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4">
          {[g1, g4, imgSoccer, g7, g5, g6].map((src, i) => (
            <div key={i} className="aspect-square overflow-hidden rounded-2xl border border-border">
              <img src={src} alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-6 bg-brand-navy text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-4xl font-bold mb-6">Step on the pitch.</h2>
          <p className="text-white/70 mb-8">Book a free trial session — meet our coaches, see the methodology in action.</p>
          <TrialModal trigger={
            <button className="px-8 py-4 bg-brand-emerald text-white rounded-2xl font-bold hover:brightness-110 transition">Book Trial Session</button>
          } />
        </div>
      </section>
    </>
  );
}
