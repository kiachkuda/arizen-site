import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ArrowRight, Trophy, Code2, Sparkles, Check, Star } from "lucide-react";
import hero from "@/assets/hero-montage.jpg";
import imgSoccer from "@/assets/program-soccer.jpg";
import imgGym from "@/assets/program-gymnastics.jpg";
import imgDigital from "@/assets/program-digital.jpg";
import imgLab from "@/assets/innovation-lab.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g3 from "@/assets/gallery-3.jpg";
import { StatCounter } from "@/components/site/StatCounter";
import { SectionHeading } from "@/components/site/SectionHeading";
import { TrialModal } from "@/components/site/TrialModal";

const programs = [
  {
    title: "Soccer Academy",
    tag: "Performance Sports",
    icon: Trophy,
    accent: "emerald" as const,
    desc: "Professional training regimes from grassroots to elite competitive levels. Tactical intelligence and individual flair.",
    image: imgSoccer,
    to: "/programs/soccer" as const,
    cta: "Learn Tactics",
  },
  {
    title: "Gymnastics",
    tag: "Dynamic Movement",
    icon: Sparkles,
    accent: "violet" as const,
    desc: "Strength, flexibility and grace in a safe, state-of-the-art facility for artistic and rhythmic disciplines.",
    image: imgGym,
    to: "/programs/gymnastics" as const,
    cta: "View Schedule",
  },
  {
    title: "Digital Skills",
    tag: "Applied Intelligence",
    icon: Code2,
    accent: "blue" as const,
    desc: "Coding, robotics, AI fundamentals and creative software. Developing creators, not consumers of technology.",
    image: imgDigital,
    to: "/programs/digital" as const,
    cta: "Explore Tech",
    dark: true,
  },
];

function HomePage() {
  return (
    <>
      <Helmet>
        <title>{"Ascend Academy — Building Future Champions"}</title>
        <meta name="description" content={"Elite Soccer, Gymnastics & Digital Skills programs for children ages 5–17. Premium private academy combining sports excellence with future-ready tech education."} />
        <meta property="og:title" content={"Ascend Academy"} />
        <meta property="og:description" content={"Building future champions on and off the field."} />
        <meta property="og:image" content={hero} />
        <meta property="og:url" content={"/"} />
        <link rel="canonical" href={"/"} />
      </Helmet>
      {/* Hero */}
      <section className="hero-gradient relative pt-12 md:pt-20 pb-24 md:pb-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
            className="relative z-10"
          >
            <div className="inline-flex items-center gap-2 bg-brand-blue/10 text-brand-blue px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue"></span>
              </span>
              Admissions Open for 2026
            </div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] mb-8 text-balance">
              Building Future <span className="text-gradient">Champions</span> On & Off the Field.
            </h1>
            <p className="text-lg text-muted-foreground mb-10 max-w-lg leading-relaxed">
              Elite sports training combined with cutting-edge digital innovation. We cultivate the discipline of an athlete and the mind of a creator.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/programs"
                className="px-8 py-4 bg-brand-navy text-white rounded-2xl font-bold hover:shadow-xl hover:shadow-brand-navy/20 transition-all inline-flex items-center gap-2"
              >
                Explore Programs <ArrowRight className="size-4" />
              </Link>
              <TrialModal />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.2, 0.8, 0.2, 1] }}
            className="relative"
          >
            <div className="w-full aspect-square bg-card rounded-[3rem] shadow-2xl shadow-brand-navy/10 border border-border overflow-hidden">
              <img src={hero} alt="Students training across sports and tech" width={1200} height={1200} className="w-full h-full object-cover" />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute -bottom-8 -left-4 md:-left-8 bg-card p-6 md:p-8 rounded-3xl shadow-xl border border-border hidden sm:block"
            >
              <div className="grid grid-cols-2 gap-6 md:gap-8">
                <div>
                  <p className="text-3xl font-display font-bold text-brand-blue">500+</p>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">Students</p>
                </div>
                <div>
                  <p className="text-3xl font-display font-bold text-brand-emerald">20+</p>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">Coaches</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 border-y border-border bg-card">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">
          <StatCounter value={500} suffix="+" label="Students" />
          <StatCounter value={20} suffix="+" label="Certified Coaches" />
          <StatCounter value={10} suffix="+" label="Digital Courses" />
          <StatCounter value={15} suffix="+" label="Championship Wins" />
        </div>
      </section>

      {/* Programs */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-blue mb-3">Pillars of Excellence</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">World-Class Programs</h2>
              <p className="text-muted-foreground italic">Designed to nurture physical excellence and digital fluency in equal measure.</p>
            </div>
            <Link to="/programs" className="text-brand-blue font-bold inline-flex items-center gap-2 hover:gap-3 transition-all underline underline-offset-8">
              View all curriculum <ArrowRight className="size-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((p, i) => {
              const Icon = p.icon;
              const accentBg = {
                emerald: "bg-brand-emerald/10 text-brand-emerald",
                violet: "bg-brand-violet/10 text-brand-violet",
                blue: "bg-brand-blue/20 text-brand-blue",
              }[p.accent];
              const hoverBtn = {
                emerald: "group-hover:bg-brand-emerald group-hover:text-white group-hover:border-brand-emerald",
                violet: "group-hover:bg-brand-violet group-hover:text-white group-hover:border-brand-violet",
                blue: "group-hover:bg-brand-blue group-hover:text-white group-hover:border-brand-blue",
              }[p.accent];
              return (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: [0.2, 0.8, 0.2, 1] }}
                  className={`card-hover group p-8 rounded-[2rem] border ${p.dark ? "bg-brand-navy text-white border-transparent" : "bg-card border-border"}`}
                >
                  <div className={`size-14 ${accentBg} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                    <Icon className="size-6" />
                  </div>
                  <h3 className="font-display text-2xl font-bold mb-4">{p.title}</h3>
                  <p className={`mb-8 leading-relaxed ${p.dark ? "text-white/70" : "text-muted-foreground"}`}>{p.desc}</p>
                  <div className="aspect-[16/10] rounded-2xl mb-8 overflow-hidden border border-border">
                    <img src={p.image} alt={p.title} loading="lazy" width={800} height={500} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <Link
                    to={p.to}
                    className={`block w-full text-center py-4 rounded-xl font-bold border transition-all ${
                      p.dark
                        ? "bg-brand-blue text-white border-brand-blue hover:bg-white hover:text-brand-navy"
                        : `bg-background text-brand-navy border-border ${hoverBtn}`
                    }`}
                  >
                    {p.cta}
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Innovation Lab */}
      <section className="py-20 bg-card px-6 border-y border-border">
        <div className="max-w-7xl mx-auto bg-brand-navy rounded-[3rem] overflow-hidden flex flex-col lg:flex-row">
          <div className="lg:w-1/2 p-10 lg:p-16 xl:p-20 flex flex-col justify-center">
            <h3 className="text-brand-blue font-bold tracking-widest uppercase text-sm mb-6">The Future Lab</h3>
            <h2 className="text-white font-display text-4xl lg:text-5xl font-bold mb-8 leading-tight">
              Where physical limits meet <span className="text-brand-blue">infinite code.</span>
            </h2>
            <div className="space-y-5">
              {[
                "Project-based learning focused on real-world AI applications.",
                "Athletic tracking using biometric data analysis.",
                "Integrated curriculum that rewards teamwork and logic.",
              ].map((t) => (
                <div key={t} className="flex gap-4 items-start">
                  <div className="size-6 rounded-full bg-brand-blue/20 flex items-center justify-center text-brand-blue mt-0.5 shrink-0">
                    <Check className="size-3.5" />
                  </div>
                  <p className="text-white/70">{t}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 relative min-h-[300px]">
            <img src={imgLab} alt="Innovation lab" loading="lazy" width={1024} height={1024} className="absolute inset-0 w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Testimonial preview */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeading eyebrow="Trusted by Families" title="A school where parents see the difference, weekly." />
            <p className="text-muted-foreground mb-8">
              Hear from the families who chose Ascend to invest in their children's future — on the field, in the gym, and in the lab.
            </p>
            <Link to="/testimonials" className="text-brand-blue font-bold inline-flex items-center gap-2 hover:gap-3 transition-all underline underline-offset-8">
              Read all stories <ArrowRight className="size-4" />
            </Link>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="bg-card p-8 md:p-10 rounded-3xl border border-border shadow-xl shadow-brand-navy/5"
          >
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => <Star key={i} className="size-5 fill-brand-blue text-brand-blue" />)}
            </div>
            <p className="text-xl md:text-2xl font-display leading-relaxed mb-8 text-balance">
              "My daughter learned to tackle complex problems on the pitch and in the coding lab with the same discipline. Ascend is genuinely future-ready."
            </p>
            <div className="flex items-center gap-4">
              <div className="size-12 rounded-full bg-gradient-to-br from-brand-blue to-brand-violet" />
              <div>
                <p className="font-bold">Eleanor Sinclair</p>
                <p className="text-sm text-muted-foreground">Academy Parent • Tech Lead</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* News / Blog preview */}
      <section className="py-24 px-6 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto">
          <SectionHeading eyebrow="From the Academy" title="Latest News & Stories" />
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { img: g1, tag: "Soccer", title: "U-12 Squad Wins Regional Cup", date: "May 12, 2026" },
              { img: g3, tag: "Digital", title: "Students Launch First AI Project", date: "May 04, 2026" },
              { img: imgGym, tag: "Gymnastics", title: "New Olympic-Spec Studio Opens", date: "Apr 28, 2026" },
            ].map((post) => (
              <article key={post.title} className="group cursor-pointer">
                <div className="aspect-[4/3] overflow-hidden rounded-3xl border border-border mb-5">
                  <img src={post.img} alt={post.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <p className="text-xs uppercase tracking-widest font-semibold text-brand-blue mb-2">{post.tag} • {post.date}</p>
                <h3 className="font-display text-xl font-bold group-hover:text-brand-blue transition-colors">{post.title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto text-center bg-gradient-to-br from-brand-navy to-brand-blue rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden">
          <div className="absolute -top-20 -right-20 size-60 bg-brand-violet/30 rounded-full blur-3xl" />
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 relative">Ready to begin the journey?</h2>
          <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto relative">
            Book a free trial session or schedule a tour of our campus. Your child's future starts here.
          </p>
          <div className="flex flex-wrap gap-4 justify-center relative">
            <Link to="/admissions" className="px-8 py-4 bg-white text-brand-navy rounded-2xl font-bold hover:bg-brand-slate transition-colors">
              Apply Now
            </Link>
            <TrialModal trigger={
              <button className="px-8 py-4 bg-white/10 border border-white/20 backdrop-blur text-white rounded-2xl font-bold hover:bg-white/20 transition-colors">
                Book Free Trial
              </button>
            } />
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
