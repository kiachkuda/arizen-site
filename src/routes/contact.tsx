import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin, MessageCircle, Instagram, Twitter, Facebook, Linkedin } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Arizen Academy" },
      { name: "description", content: "Get in touch with Arizen Academy. Phone, email, WhatsApp and campus location." },
      { property: "og:title", content: "Contact Arizen Academy" },
      { property: "og:description", content: "We're here to help. Reach out any time." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <section className="hero-gradient py-20 md:py-28 px-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-blue mb-3">Get in touch</p>
        <h1 className="font-display text-5xl md:text-6xl font-extrabold mb-6 text-balance">
          Let's <span className="text-gradient">talk.</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto">
          We respond within one business day. For urgent enquiries, message us on WhatsApp.
        </p>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
          <form className="space-y-5 p-8 md:p-10 bg-card rounded-3xl border border-border" onSubmit={(e) => e.preventDefault()}>
            <h2 className="font-display text-2xl font-bold mb-2">Send a message</h2>
            <div className="grid sm:grid-cols-2 gap-5">
              <input required placeholder="Your name" className="px-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-brand-blue" />
              <input required type="email" placeholder="Email" className="px-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-brand-blue" />
            </div>
            <input placeholder="Subject" className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-brand-blue" />
            <textarea required rows={5} placeholder="How can we help?" className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-brand-blue" />
            <button className="w-full py-4 bg-brand-navy text-white rounded-xl font-bold hover:bg-brand-blue transition-colors">Send Message</button>
          </form>

          <div className="space-y-6">
            <div className="p-8 rounded-3xl bg-card border border-border space-y-5">
              <h2 className="font-display text-2xl font-bold mb-2">Contact details</h2>
              {[
                { icon: Mail, label: "Email", value: "hello@Arizenacademy.com" },
                { icon: Phone, label: "Phone", value: "+1 (555) 010-0123" },
                { icon: MapPin, label: "Campus", value: "120 Sterling Ave, Northpoint District" },
              ].map((c) => {
                const Icon = c.icon;
                return (
                  <div key={c.label} className="flex gap-4 items-start">
                    <div className="size-11 rounded-xl bg-brand-blue/10 text-brand-blue grid place-items-center shrink-0">
                      <Icon className="size-5" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">{c.label}</p>
                      <p className="font-bold">{c.value}</p>
                    </div>
                  </div>
                );
              })}
              <a href="https://wa.me/15555555555" className="w-full py-3 bg-brand-emerald text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:brightness-110 transition">
                <MessageCircle className="size-4" /> Chat on WhatsApp
              </a>
              <div className="flex gap-3 pt-2">
                {[Instagram, Twitter, Facebook, Linkedin].map((I, i) => (
                  <a key={i} href="#" className="size-10 rounded-full bg-background border border-border grid place-items-center text-muted-foreground hover:bg-brand-blue hover:text-white transition-colors">
                    <I className="size-4" />
                  </a>
                ))}
              </div>
            </div>

            <div className="aspect-[16/10] rounded-3xl overflow-hidden border border-border bg-card grid place-items-center text-muted-foreground">
              <iframe
                title="Campus location"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-0.1377%2C51.5070%2C-0.1257%2C51.5114&layer=mapnik"
                className="w-full h-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
