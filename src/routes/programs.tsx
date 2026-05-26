import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowRight, Trophy, Sparkles, Code2, GraduationCap } from "lucide-react";
import imgSoccer from "@/assets/program-soccer.jpg";
import imgGym from "@/assets/program-gymnastics.jpg";
import imgDigital from "@/assets/program-digital.jpg";
import imgHome from "@/assets/program-homeschool.jpg";
import { SectionHeading } from "@/components/site/SectionHeading";

const programs = [
  {
    to: "/programs/soccer" as const, title: "Soccer Academy", icon: Trophy,
    image: imgSoccer, accent: "emerald",
    desc: "Professional training, match play and tactical IQ for grassroots to elite competitive levels.",
  },
  {
    to: "/programs/gymnastics" as const, title: "Gymnastics", icon: Sparkles,
    image: imgGym, accent: "violet",
    desc: "Strength, flexibility, and grace in a safe, state-of-the-art studio for ages 5 and up.",
  },
  {
    to: "/programs/digital" as const, title: "Digital Skills", icon: Code2,
    image: imgDigital, accent: "blue",
    desc: "Coding, robotics, AI, game design and creative tech — for the next generation of builders.",
  },
  {
    to: "/programs/homeschool" as const, title: "Home Schooling", icon: GraduationCap,
    image: imgHome, accent: "blue",
    desc: "Accredited K–12 curriculum, certified tutors and live online classes — full school, taught from home.",
  },
];

function ProgramsPage() {
  return (
    <>
      <Helmet>
        <title>{"Programs — Ascend Academy"}</title>
        <meta name="description" content={"Explore our core programs: Soccer Academy, Gymnastics, Digital Skills and Home Schooling for kids ages 5–17."} />
        <meta property="og:title" content={"Our Programs"} />
        <meta property="og:description" content={"Soccer, Gymnastics, Digital Skills and Home Schooling programs."} />
        <meta property="og:url" content={"/programs"} />
        <link rel="canonical" href={"/programs"} />
      </Helmet>
      <section className="hero-gradient py-20 md:py-28 px-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-blue mb-3">Curriculum</p>
        <h1 className="font-display text-5xl md:text-6xl font-extrabold mb-6 text-balance max-w-3xl mx-auto">
          Four pathways. <span className="text-gradient">One academy.</span>
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Pick a path, mix several, or build a full home-school plan around them. Every program is built on discipline, expert mentors, and measurable progress.
        </p>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((p) => {
            const Icon = p.icon;
            return (
              <Link key={p.title} to={p.to} className="group card-hover rounded-[2rem] bg-card border border-border overflow-hidden flex flex-col">
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={p.image} alt={p.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <div className="size-12 rounded-xl bg-brand-blue/10 text-brand-blue grid place-items-center mb-4">
                    <Icon className="size-5" />
                  </div>
                  <h2 className="font-display text-2xl font-bold mb-3">{p.title}</h2>
                  <p className="text-muted-foreground mb-6 flex-1">{p.desc}</p>
                  <span className="text-brand-blue font-bold inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                    Explore <ArrowRight className="size-4" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="py-20 px-6 bg-card border-y border-border text-center">
        <SectionHeading eyebrow="Schools & Partners" title="We partner with schools for extracurricular excellence." center />
        <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-brand-navy text-white rounded-2xl font-bold hover:bg-brand-blue transition-colors">
          Start a Partnership <ArrowRight className="size-4" />
        </Link>
      </section>
    </>
  );
}

export default ProgramsPage;
