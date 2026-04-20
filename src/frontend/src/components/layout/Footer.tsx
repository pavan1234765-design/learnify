import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Facebook,
  GraduationCap,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Youtube,
} from "lucide-react";
import { useState } from "react";

const QUICK_LINKS = [
  { label: "Programs", href: "#courses", isHash: true },
  { label: "How It Works", href: "#how-it-works", isHash: true },
  { label: "Career Mentors", href: "#mentors", isHash: true },
  { label: "Interactive Tools", href: "#/tools", isHash: false },
  { label: "Blog & Insights", href: "#/blog", isHash: false },
  { label: "Get In Touch", href: "#contact", isHash: true },
];

const SERVICE_LINKS = [
  { label: "Online UG Programs", href: "#/services/online-ug" },
  { label: "Online PG Programs", href: "#/services/online-pg" },
  { label: "Online MBA", href: "#/services/online-mba" },
  { label: "Online BBA", href: "#/services/online-bba" },
  { label: "PhD Admissions", href: "#/services/phd-admissions" },
  { label: "Post-Doctorate", href: "#/services/post-doctorate" },
  { label: "Study Abroad", href: "#/services/study-abroad" },
  { label: "Patents & IP", href: "#/services/patents" },
  { label: "Research Publications", href: "#/services/research-publications" },
];

const SOCIAL_LINKS = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

const TRUST_BADGES = [
  "UGC Recognized Universities",
  "Global Academic Network",
  "Verified Programs Only",
];

export function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;
  const [subscribeEmail, setSubscribeEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  function handleClick(href: string, isHash: boolean) {
    if (!isHash) {
      window.location.hash = href.slice(1);
      return;
    }
    if (window.location.hash.startsWith("#/")) {
      window.location.hash = "";
      setTimeout(() => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
      return;
    }
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }

  function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
    if (subscribeEmail.trim()) {
      setSubscribed(true);
    }
  }

  return (
    <footer className="bg-primary text-primary-foreground" data-ocid="footer">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <button
              type="button"
              className="flex items-center gap-2.5 mb-4"
              onClick={() => {
                window.location.hash = "";
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <div className="w-9 h-9 rounded-lg bg-accent flex items-center justify-center shadow-subtle">
                <GraduationCap className="w-5 h-5 text-accent-foreground" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display text-xl font-bold text-white tracking-tight">
                  Learnify
                </span>
                <span className="text-[9px] font-body text-white/60 tracking-widest uppercase">
                  SSN Initiative
                </span>
              </div>
            </button>

            <p className="text-sm text-white/70 font-body leading-relaxed mb-5">
              Learnify helps students and professionals choose the right degree
              and university through expert, personalized guidance.
            </p>

            {/* Trust badges */}
            <div className="flex flex-col gap-2 mb-5">
              {TRUST_BADGES.map((badge) => (
                <div
                  key={badge}
                  className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-lg px-3 py-1.5"
                >
                  <span className="text-accent text-xs">✦</span>
                  <span className="text-xs text-white/80 font-body font-medium">
                    {badge}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-accent hover:text-accent-foreground transition-smooth"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {QUICK_LINKS.map(({ label, href, isHash }) => (
                <li key={label}>
                  <button
                    type="button"
                    onClick={() => handleClick(href, isHash)}
                    className="text-sm text-white/70 hover:text-accent transition-colors duration-200 font-body text-left"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Our Programs
            </h3>
            <ul className="space-y-2.5">
              {SERVICE_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <button
                    type="button"
                    onClick={() => {
                      window.location.hash = href.slice(1);
                    }}
                    className="text-sm text-white/70 hover:text-accent transition-colors duration-200 font-body text-left"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Subscribe */}
          <div>
            <h3 className="font-display font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Contact Us
            </h3>
            <ul className="space-y-3.5 mb-6">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                <a
                  href="mailto:ssnbsolutions20@gmail.com"
                  className="text-sm text-white/70 hover:text-white transition-colors font-body break-all"
                >
                  ssnbsolutions20@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                <div>
                  <a
                    href="tel:+917022018220"
                    className="text-sm text-white/70 hover:text-white transition-colors font-body"
                  >
                    +91 70220 18220
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MessageCircle className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs text-white/50 font-body">
                    Available on WhatsApp
                  </p>
                  <p className="text-xs text-white/50 font-body">
                    Response within 24 hours
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                <div className="flex flex-col gap-0.5">
                  <span className="text-sm text-white/70 font-body">
                    Bangalore, Karnataka
                  </span>
                  <span className="text-sm text-white/70 font-body">
                    Kolkata, West Bengal
                  </span>
                </div>
              </li>
            </ul>

            {/* Email Subscribe */}
            <div>
              <p className="text-xs text-white/60 font-body mb-2 font-medium">
                Get updates on programs
              </p>
              {subscribed ? (
                <p
                  className="text-xs text-accent font-body font-medium"
                  data-ocid="footer.subscribe-success"
                >
                  ✓ You're subscribed!
                </p>
              ) : (
                <form
                  onSubmit={handleSubscribe}
                  className="flex gap-2"
                  data-ocid="footer.subscribe-form"
                >
                  <Input
                    type="email"
                    placeholder="Your email"
                    value={subscribeEmail}
                    onChange={(e) => setSubscribeEmail(e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/40 text-xs h-9 font-body"
                    required
                    data-ocid="footer.subscribe-input"
                  />
                  <Button
                    type="submit"
                    size="sm"
                    className="bg-accent text-accent-foreground hover:bg-accent/90 font-body font-semibold text-xs h-9 px-3 shrink-0"
                    data-ocid="footer.subscribe-button"
                  >
                    Subscribe
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Footer CTA Row */}
        <div className="border-t border-white/15 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <Button
              type="button"
              onClick={() => handleClick("#contact", true)}
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-body font-semibold text-sm px-5 h-9"
              data-ocid="footer.book-consultation"
            >
              Book Free Consultation
            </Button>
            <button
              type="button"
              onClick={() => handleClick("#contact", true)}
              className="text-sm text-white/70 hover:text-accent font-body transition-colors duration-200"
              data-ocid="footer.talk-to-expert"
            >
              Talk to Expert Now →
            </button>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 text-xs text-white/60 font-body">
            <span>© {year} Learnify. All rights reserved. SSN Initiative.</span>
            <span>
              Built with love using{" "}
              <a
                href={caffeineUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                caffeine.ai
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
