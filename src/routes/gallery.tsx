import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-3.jpg";
import g3 from "@/assets/sp1.jpg";
import g4 from "@/assets/sp.jpg";
import g5 from "@/assets/sp2.jpg";
import g6 from "@/assets/gallery-6.jpg";
import imgSoccer from "@/assets/program-soccer.jpg";
import imgGym from "@/assets/program-gymnastics.jpg";
import imgDigital from "@/assets/program-digital.jpg";
import imgLab from "@/assets/innovation-lab.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Arizen Academy" },
      { name: "description", content: "Photos from training sessions, competitions, coding labs, and academy events." },
      { property: "og:title", content: "Academy Gallery" },
      { property: "og:description", content: "Inside life at Arizen Academy." },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

const items = [
  { src: g1, span: "row-span-2", alt: "Soccer training at dawn" },
  { src: g2, span: "", alt: "Coding workshop" },
  { src: g3, span: "", alt: "Gymnastics balance" },
  { src: imgLab, span: "row-span-2", alt: "Innovation lab" },
  { src: g4, span: "", alt: "Ball Control" },
  { src: g5, span: "", alt: "Soccer drill" },
  { src: imgSoccer, span: "", alt: "Boot and ball" },
  { src: g6, span: "row-span-2", alt: "Robotics presentation" },
  { src: imgGym, span: "", alt: "Gymnastics studio" },
  { src: imgDigital, span: "", alt: "Robotics build" },
];

function GalleryPage() {
  return (
    <>
      <section className="hero-gradient py-20 md:py-28 px-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-blue mb-3">Inside the Academy</p>
        <h1 className="font-display text-5xl md:text-6xl font-extrabold mb-6 text-balance">
          A look at <span className="text-gradient">life at Arizen.</span>
        </h1>
      </section>

      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-4">
          {items.map((it, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: (i % 6) * 0.05 }}
              className={`relative overflow-hidden rounded-2xl border border-border group ${it.span}`}
            >
              <img src={it.src} alt={it.alt} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 via-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <p className="text-white text-sm font-semibold">{it.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
