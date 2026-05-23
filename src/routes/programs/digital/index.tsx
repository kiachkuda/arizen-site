import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Code2, Bot, Brain, Palette, Gamepad2, Globe } from "lucide-react";
import imgDigital from "@/assets/program-digital.jpg";
import imgLab from "@/assets/innovation-lab.png";
import g6 from "@/assets/gallery-6.jpg";
import { SectionHeading } from "@/components/site/SectionHeading";
import { TrialModal } from "@/components/site/TrialModal";

export const Route = createFileRoute("/programs/digital/")({
  head: () => ({
    meta: [
      { title: "Digital Skills — Arizen Academy" },
      { name: "description", content: "Coding, robotics, AI, game design and creative tech for children. Project-based learning that builds tomorrow's creators." },
      { property: "og:title", content: "Digital Skills Program" },
      { property: "og:description", content: "Coding, robotics, AI and creative tech for kids." },
      { property: "og:image", content: imgDigital },
      { property: "og:url", content: "/programs/digital" },
    ],
    links: [{ rel: "canonical", href: "/programs/digital" }],
  }),
  component: DigitalPage,
});

const tracks = [
  { icon: Code2, name: "Coding for Kids", desc: "Scratch, Python, web — from blocks to real code." },
  { icon: Bot, name: "Robotics", desc: "Build, program and battle real robots in our lab." },
  { icon: Brain, name: "AI & Future Tech", desc: "Hands-on with machine learning, prompts and ethics." },
  { icon: Globe, name: "Web Development", desc: "Build live websites and apps with HTML, CSS and JS." },
  { icon: Palette, name: "Graphic Design", desc: "Branding, type and digital illustration fundamentals." },
  { icon: Gamepad2, name: "Game Development", desc: "Design and ship your own 2D games using Unity." },
];

const roadmap = [
  { level: "Explorer", age: "Ages 7–9", courses: "Scratch • Logic puzzles • Robotics 101" },
  { level: "Builder", age: "Ages 10–12", courses: "Python • Web 1 • Game design" },
  { level: "Creator", age: "Ages 13–15", courses: "AI basics • Full-stack • 3D modelling" },
  { level: "Innovator", age: "Ages 16–17", courses: "Machine learning • Startup lab • Publishing apps" },
];

function DigitalPage() {
  return (
    <>
      <section className="relative py-20 md:py-28 px-6 overflow-hidden bg-brand-navy text-white">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-10 size-72 bg-brand-blue/40 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 size-96 bg-brand-violet/30 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-blue mb-3">Digital Skills</p>
            <h1 className="font-display text-5xl md:text-6xl font-extrabold mb-6 text-balance">
              Raise <span className="text-gradient">creators</span>, not consumers.
            </h1>
            <p className="text-lg text-white/70 mb-8">
              A future-ready curriculum in coding, robotics, AI and design. Every term ends with a real project your child built — and is proud of.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/admissions" className="px-7 py-3.5 bg-brand-blue text-white rounded-2xl font-bold hover:brightness-110 transition">Enroll Now</Link>
              <TrialModal trigger={
                <button className="px-7 py-3.5 bg-white/10 backdrop-blur border border-white/20 rounded-2xl font-bold hover:bg-white/20 transition">Book Free Trial</button>
              } />
            </div>
            {/* floating code snippets */}
            <div className="mt-10 flex gap-3 text-xs font-mono">
              {["const future = build();", "ai.train(child);", "robot.move(forward);"].map((s, i) => (
                <motion.span key={s}
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.15 }}
                  className="px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-brand-blue">
                  {s}
                </motion.span>
              ))}
            </div>
          </div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}
            className="aspect-square rounded-[2.5rem] overflow-hidden border border-white/10 shadow-xl">
            <img src={imgLab} alt="Innovation lab" className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading eyebrow="Tracks" title="Six tracks. Endless combinations." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tracks.map((t, i) => {
              const Icon = t.icon;
              return (
                <motion.div key={t.name}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                  className="p-8 rounded-3xl bg-card border border-border card-hover">
                  <div className="size-12 rounded-xl bg-brand-blue/10 text-brand-blue grid place-items-center mb-5">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="font-display text-xl font-bold mb-2">{t.name}</h3>
                  <p className="text-sm text-muted-foreground">{t.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto">
          <SectionHeading eyebrow="Roadmap" title="A 10-year journey from Explorer to Innovator." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {roadmap.map((r, i) => (
              <motion.div key={r.level}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="p-8 rounded-3xl bg-background border border-border relative">
                <div className="absolute top-6 right-6 size-8 rounded-full bg-brand-blue/10 text-brand-blue grid place-items-center font-display font-bold">{i + 1}</div>
                <p className="text-xs uppercase tracking-widest text-brand-blue font-semibold mb-1">{r.age}</p>
                <h3 className="font-display text-2xl font-bold mb-3">{r.level}</h3>
                <p className="text-sm text-muted-foreground">{r.courses}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-border">
            <img src={g6} alt="Student innovation showcase" className="w-full h-full object-cover" />
          </div>
          <div>
            <SectionHeading eyebrow="Innovation Lab" title="Where students ship real projects." />
            <p className="text-muted-foreground mb-8">
              Our Innovation Lab is where the magic compiles. Every term, students design, build, and present a real-world project — from AI assistants to autonomous robots.
            </p>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="p-5 rounded-2xl bg-card border border-border">
                <p className="font-display text-3xl font-bold text-gradient">120+</p>
                <p className="text-xs text-muted-foreground mt-1 uppercase tracking-widest">Projects shipped</p>
              </div>
              <div className="p-5 rounded-2xl bg-card border border-border">
                <p className="font-display text-3xl font-bold text-gradient">35</p>
                <p className="text-xs text-muted-foreground mt-1 uppercase tracking-widest">Hackathons won</p>
              </div>
              <div className="p-5 rounded-2xl bg-card border border-border">
                <p className="font-display text-3xl font-bold text-gradient">10+</p>
                <p className="text-xs text-muted-foreground mt-1 uppercase tracking-widest">Courses live</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-brand-navy text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-4xl font-bold mb-6">Ready to build something real?</h2>
          <TrialModal trigger={<button className="px-8 py-4 bg-brand-blue text-white rounded-2xl font-bold hover:brightness-110 transition">Book Free Trial</button>} />
        </div>
      </section>
    </>
  );
}
