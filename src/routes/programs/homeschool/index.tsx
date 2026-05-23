import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { BookOpen, Video, UserCheck, Calendar, GraduationCap, HeartHandshake } from "lucide-react";
import imgHome from "@/assets/homeschool.png";
import { SectionHeading } from "@/components/site/SectionHeading";
import { TrialModal } from "@/components/site/TrialModal";
import { HomeschoolRegistrationForm } from "@/components/site/HomeschoolRegistrationForm";

export const Route = createFileRoute("/programs/homeschool/")({
  head: () => ({
    meta: [
      { title: "Home Schooling — Ascend Academy" },
      { name: "description", content: "Accredited home schooling solutions for kids ages 5–17. Personalised curriculum, certified tutors, live online classes and flexible pacing." },
      { property: "og:title", content: "Home Schooling Program" },
      { property: "og:description", content: "Accredited, personalised home schooling for ages 5–17." },
      { property: "og:image", content: imgHome },
      { property: "og:url", content: "/programs/homeschool" },
    ],
    links: [{ rel: "canonical", href: "/programs/homeschool" }],
  }),
  component: HomeschoolPage,
});

const pillars = [
  { icon: BookOpen, title: "Accredited curriculum", desc: "Internationally recognised K–12 syllabus aligned with global standards." },
  { icon: UserCheck, title: "1:1 certified tutors", desc: "Personal mentors who track progress and adapt lessons weekly." },
  { icon: Video, title: "Live online classes", desc: "Small group sessions plus on-demand recordings for full flexibility." },
  { icon: Calendar, title: "Your schedule", desc: "Learn mornings, afternoons or weekends — fit study around family life." },
  { icon: GraduationCap, title: "Exams & transcripts", desc: "Official progress reports, transcripts and exam preparation included." },
  { icon: HeartHandshake, title: "Parent support", desc: "Weekly check-ins, dashboards and a dedicated family success coach." },
];

const tracks = [
  { age: "5–7", name: "Early Years", focus: "Literacy, numeracy, curiosity, play-based learning." },
  { age: "8–11", name: "Primary", focus: "Core subjects, project work, digital fluency." },
  { age: "12–14", name: "Middle School", focus: "STEM depth, languages, critical thinking." },
  { age: "15–17", name: "High School", focus: "Exam prep, electives, college pathway." },
];

const week = [
  { day: "Mon", time: "Core academics · Live class 9–12" },
  { day: "Tue", time: "Project lab · Tutor 1:1 session" },
  { day: "Wed", time: "Languages & humanities · Live 10–12" },
  { day: "Thu", time: "STEM deep-dive · Mentor review" },
  { day: "Fri", time: "Creative arts · Weekly portfolio submit" },
];

function HomeschoolPage() {
  return (
    <>
      <section className="relative py-20 md:py-28 px-6 overflow-hidden hero-gradient">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-blue mb-3">Home Schooling</p>
            <h1 className="font-display text-5xl md:text-6xl font-extrabold mb-6 text-balance">
              School, <span className="text-gradient">at home.</span> Done properly.
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Accredited K–12 curriculum, certified tutors, and a personal pace — delivered through live online classes and a dedicated learning dashboard for every family.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#register" className="px-7 py-3.5 bg-brand-navy text-white rounded-2xl font-bold hover:bg-brand-blue transition-colors">Register Now</a>
              <TrialModal />
            </div>
          </div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}
            className="aspect-square rounded-[2.5rem] overflow-hidden border border-border shadow-xl">
            <img src={imgHome} alt="Child learning from home" className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading eyebrow="What's included" title="Everything a great school provides — at home." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div key={p.title}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                  className="p-8 rounded-3xl bg-card border border-border card-hover">
                  <div className="size-12 rounded-xl bg-brand-blue/10 text-brand-blue grid place-items-center mb-5">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="font-display text-xl font-bold mb-2">{p.title}</h3>
                  <p className="text-sm text-muted-foreground">{p.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
          <div>
            <SectionHeading eyebrow="Age tracks" title="A curriculum for every stage." />
            <div className="grid sm:grid-cols-2 gap-4">
              {tracks.map((t) => (
                <div key={t.name} className="p-6 rounded-2xl bg-background border border-border">
                  <p className="text-xs uppercase tracking-widest text-brand-blue font-semibold mb-1">Ages {t.age}</p>
                  <h3 className="font-display text-xl font-bold mb-2">{t.name}</h3>
                  <p className="text-sm text-muted-foreground">{t.focus}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <SectionHeading eyebrow="A week in the life" title="Structured, flexible, calm." />
            <div className="rounded-3xl border border-border bg-background divide-y divide-border overflow-hidden">
              {week.map((w) => (
                <div key={w.day} className="flex items-center justify-between p-5">
                  <span className="font-bold w-16">{w.day}</span>
                  <span className="text-muted-foreground text-sm text-right">{w.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="register" className="py-24 px-6 scroll-mt-24">
        <div className="max-w-3xl mx-auto">
          <SectionHeading
            eyebrow="Register"
            title="Home Schooling registration."
            subtitle="Tell us your child's age track, the subjects they're excited about, and when they'd like to learn. We'll design a plan and reach out within one business day."
            center
          />
          <HomeschoolRegistrationForm />
        </div>
      </section>

      <section className="py-20 px-6 bg-brand-navy text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-4xl font-bold mb-6">Prefer a free trial week first?</h2>
          <p className="text-white/70 mb-8">Sit in on live classes, meet a tutor, and explore the dashboard — no commitment.</p>
          <TrialModal trigger={<button className="px-8 py-4 bg-brand-blue text-white rounded-2xl font-bold hover:brightness-110 transition">Book Free Trial Week</button>} />
        </div>
      </section>
    </>
  );
}
