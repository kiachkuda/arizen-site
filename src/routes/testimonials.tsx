import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Star, Quote } from "lucide-react";
import { SectionHeading } from "@/components/site/SectionHeading";

const testimonials = [
  { name: "Eleanor Sinclair", role: "Parent · Tech Lead", quote: "My daughter learned to tackle complex problems on the pitch and in the coding lab with the same discipline. Genuinely future-ready.", rating: 5, gradient: "from-brand-blue to-brand-violet" },
  { name: "Marcus Tan", role: "Parent of 3", quote: "Three kids, three programs, one academy. The communication and care have been outstanding from day one.", rating: 5, gradient: "from-brand-emerald to-brand-blue" },
  { name: "Aaliyah Khan", role: "Age 14 · Soccer & AI", quote: "I never thought I'd love coding as much as football. Now I'm building a stat-tracker app for my own team.", rating: 5, gradient: "from-brand-violet to-brand-emerald" },
  { name: "Sofia Reyes", role: "Parent · Designer", quote: "The gymnastics coaches changed my shy 7-year-old. She walks into class smiling now — and walks out beaming.", rating: 5, gradient: "from-brand-blue to-brand-emerald" },
  { name: "Oliver Bennett", role: "Age 16 · Digital Lab", quote: "I shipped my first real game last term. The mentors don't just teach — they help you finish.", rating: 5, gradient: "from-brand-emerald to-brand-violet" },
  { name: "Priya Nair", role: "School Partner", quote: "Their after-school program lifted the energy of our whole student body. Best extracurricular decision we've made.", rating: 5, gradient: "from-brand-violet to-brand-blue" },
];

function TestimonialsPage() {
  return (
    <>
      <Helmet>
        <title>{"Testimonials — Ascend Academy"}</title>
        <meta name="description" content={"What parents and students say about the Ascend Academy experience."} />
        <meta property="og:title" content={"Parent & Student Stories"} />
        <meta property="og:description" content={"Real testimonials from the Ascend community."} />
        <meta property="og:url" content={"/testimonials"} />
        <link rel="canonical" href={"/testimonials"} />
      </Helmet>
      <section className="hero-gradient py-20 md:py-28 px-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-blue mb-3">In their words</p>
        <h1 className="font-display text-5xl md:text-6xl font-extrabold mb-6 text-balance max-w-3xl mx-auto">
          A community of <span className="text-gradient">families and champions.</span>
        </h1>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div key={t.name}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: (i % 3) * 0.1, duration: 0.5 }}
              className="p-8 rounded-3xl bg-card border border-border card-hover relative">
              <Quote className="absolute top-6 right-6 size-8 text-brand-blue/15" />
              <div className="flex gap-1 mb-5">
                {[...Array(t.rating)].map((_, i) => <Star key={i} className="size-4 fill-brand-blue text-brand-blue" />)}
              </div>
              <p className="text-foreground leading-relaxed mb-8">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <div className={`size-12 rounded-full bg-gradient-to-br ${t.gradient}`} />
                <div>
                  <p className="font-bold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-20 px-6 bg-card border-y border-border">
        <SectionHeading eyebrow="Coaches & Instructors" title="Meet a few of our 20+ certified mentors." center />
        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { name: "Coach Daniel R.", role: "Head of Soccer", grad: "from-brand-emerald to-brand-blue" },
            { name: "Coach Marina L.", role: "Head of Gymnastics", grad: "from-brand-violet to-brand-blue" },
            { name: "Mr. Felix K.", role: "Lead Robotics Engineer", grad: "from-brand-blue to-brand-violet" },
            { name: "Ms. Anya P.", role: "AI & Code Mentor", grad: "from-brand-blue to-brand-emerald" },
          ].map((c) => (
            <div key={c.name} className="text-center">
              <div className={`size-28 mx-auto rounded-3xl bg-gradient-to-br ${c.grad} mb-4`} />
              <h3 className="font-display font-bold">{c.name}</h3>
              <p className="text-sm text-muted-foreground">{c.role}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default TestimonialsPage;
