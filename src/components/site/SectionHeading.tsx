import { motion } from "framer-motion";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
      className={`mb-12 ${center ? "text-center mx-auto max-w-2xl" : "max-w-2xl"}`}
    >
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-blue mb-3">{eyebrow}</p>
      )}
      <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight mb-4 text-balance">{title}</h2>
      {subtitle && <p className="text-muted-foreground text-lg leading-relaxed">{subtitle}</p>}
    </motion.div>
  );
}
