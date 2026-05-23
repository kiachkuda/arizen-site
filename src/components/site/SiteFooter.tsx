import { Link } from "@tanstack/react-router";
import { Instagram, Twitter, Linkedin, Facebook } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-card pt-20 pb-12 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="size-8 bg-brand-blue rounded-lg flex items-center justify-center text-white font-bold text-lg font-display">A</div>
              <span className="font-display text-lg font-bold tracking-tight uppercase">Arizen Academy</span>
            </div>
            <p className="text-muted-foreground max-w-sm mb-6">
              Championing the next generation through a unique fusion of athletic mastery and digital fluency.
            </p>
            <form className="flex max-w-sm gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email"
                aria-label="Email"
                className="flex-1 px-4 py-3 rounded-full bg-background border border-border text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue"
              />
              <button className="bg-brand-navy text-white px-5 py-3 rounded-full text-sm font-semibold hover:bg-brand-blue transition-colors">
                Join
              </button>
            </form>
            <div className="flex gap-3 mt-6">
              {[Instagram, Twitter, Facebook, Linkedin].map((Icon, i) => (
                <a key={i} href="#" aria-label="social" className="size-10 rounded-full bg-secondary grid place-items-center text-muted-foreground hover:bg-brand-blue hover:text-white transition-colors">
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-6">Programs</h4>
            <ul className="space-y-3 text-muted-foreground text-sm">
              <li><Link to="/programs/soccer" className="hover:text-brand-blue transition-colors">Soccer Academy</Link></li>
              <li><Link to="/programs/gymnastics" className="hover:text-brand-blue transition-colors">Gymnastics</Link></li>
              <li><Link to="/programs/digital" className="hover:text-brand-blue transition-colors">Digital Skills</Link></li>
              <li><Link to="/programs" className="hover:text-brand-blue transition-colors">All Programs</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6">Academy</h4>
            <ul className="space-y-3 text-muted-foreground text-sm">
              <li><Link to="/about" className="hover:text-brand-blue transition-colors">About Us</Link></li>
              <li><Link to="/admissions" className="hover:text-brand-blue transition-colors">Admissions</Link></li>
              <li><Link to="/testimonials" className="hover:text-brand-blue transition-colors">Testimonials</Link></li>
              <li><Link to="/contact" className="hover:text-brand-blue transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Arizen Private Academy. All excellence reserved.</p>
          <div className="flex gap-6">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
