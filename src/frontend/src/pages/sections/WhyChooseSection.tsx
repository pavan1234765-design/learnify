import {
  ArrowRight,
  Globe,
  Handshake,
  Shield,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";

interface WhyChooseItem {
  icon: React.ElementType;
  title: string;
  description: string;
  badge: string;
  featured?: boolean;
}

const WHY_CHOOSE_ITEMS: WhyChooseItem[] = [
  {
    icon: Users,
    title: "1:1 Academic Advisory Based on Your Career Goals",
    description:
      "Personalized guidance tailored to your background, budget, and career ambitions.",
    badge: "Expert-Led",
    featured: true,
  },
  {
    icon: Shield,
    title: "Only UGC-Approved and Verified Universities",
    description:
      "Every university we recommend is verified, ranked, and career-outcome validated.",
    badge: "Verified",
    featured: true,
  },
  {
    icon: TrendingUp,
    title: "Programs Selected Based on Career Growth and ROI",
    description:
      "We match programs to your goals — not just enrollment numbers.",
    badge: "ROI-Driven",
    featured: true,
  },
  {
    icon: Target,
    title: "Focus on Career Outcomes, Not Just Admissions",
    description:
      "Our success is measured by your career growth, not just seat filling.",
    badge: "Results-First",
  },
  {
    icon: Globe,
    title: "Access Universities Across India, UK, and Europe",
    description:
      "Wide network of Indian and international universities for every budget.",
    badge: "Global Scope",
  },
  {
    icon: Handshake,
    title: "Complete Support from Shortlisting to Admission",
    description:
      "End-to-end guidance — from comparing options to securing your admission letter.",
    badge: "Dedicated Support",
  },
];

export function WhyChooseSection() {
  return (
    <section
      id="why-choose-us"
      className="py-20 lg:py-28 bg-muted/30"
      data-ocid="why-choose.section"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary border border-primary/20 rounded-full px-4 py-1.5 text-xs font-body font-semibold uppercase tracking-wider mb-4">
            Why Choose Learnify
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-4">
            Expert Guidance That Helps You Choose the{" "}
            <span className="text-gradient-primary">
              Right Degree and University
            </span>
          </h2>
          <p className="text-lg text-muted-foreground font-body leading-relaxed">
            We help you shortlist the right universities, compare programs, and
            secure admission based on your career goals.
          </p>
        </div>

        {/* Differentiation callout */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="flex items-start gap-3 bg-accent/10 border border-accent/25 rounded-xl px-5 py-4">
            <span className="text-accent text-lg mt-0.5 shrink-0">✦</span>
            <p className="text-sm font-body font-semibold text-foreground leading-relaxed">
              Unlike generic consultancies, Learnify provides{" "}
              <span className="text-accent">
                structured, ROI-focused academic guidance
              </span>{" "}
              — tailored to your career goals, not enrollment targets.
            </p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_ITEMS.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`bg-card border rounded-xl p-6 shadow-subtle hover:shadow-elevated transition-smooth group hover:-translate-y-0.5 ${
                  item.featured
                    ? "border-accent/30 ring-1 ring-accent/10"
                    : "border-border"
                }`}
                data-ocid={`why-choose.card.${index + 1}`}
              >
                <div className="flex items-start justify-between mb-5">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center group-hover:bg-primary/15 transition-smooth ${
                      item.featured ? "bg-accent/10" : "bg-primary/10"
                    }`}
                  >
                    <Icon
                      className={`w-6 h-6 ${item.featured ? "text-accent" : "text-primary"}`}
                    />
                  </div>
                  {item.badge && (
                    <span
                      className={`text-[10px] font-body font-semibold border rounded-full px-2.5 py-0.5 uppercase tracking-wider ${
                        item.featured
                          ? "text-accent border-accent/30 bg-accent/8"
                          : "text-primary border-primary/25 bg-primary/6"
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                </div>
                <h3 className="font-display font-semibold text-foreground text-base mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Trust numbers strip */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 py-5 border-t border-b border-border">
          {[
            { value: "1000+", label: "Students Guided" },
            { value: "70+", label: "Verified Universities" },
            { value: "95%", label: "Admission Success Rate" },
          ].map(({ value, label }, i) => (
            <div key={label} className="flex items-center gap-3">
              <div className="text-center">
                <div className="font-display text-2xl font-bold text-primary leading-tight">
                  {value}
                </div>
                <div className="text-xs text-muted-foreground font-body">
                  {label}
                </div>
              </div>
              {i < 2 && <span className="text-border hidden sm:block">|</span>}
            </div>
          ))}
        </div>

        {/* Mentor/Founder Callout */}
        <div className="mt-12 bg-primary border border-primary/80 rounded-2xl p-8 lg:p-12 flex flex-col lg:flex-row items-center gap-8">
          <div className="shrink-0">
            <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-accent/40 shadow-elevated">
              <img
                src="/assets/generated/mentor-portrait.dim_200x200.jpg"
                alt="Dr. S. Mithun"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="flex-1 text-center lg:text-left">
            <blockquote className="font-display text-xl lg:text-2xl text-white font-medium italic leading-relaxed mb-4">
              "We aim to inspire our learners to dream bigger, learn
              continuously, and achieve beyond boundaries."
            </blockquote>
            <div>
              <div className="font-body font-bold text-white text-base">
                Dr. S. Mithun
              </div>
              <div className="text-sm text-white/80 font-body font-semibold">
                Founder | Career Mentor
              </div>
              <div className="flex items-center gap-3 mt-1 justify-center lg:justify-start">
                <span className="text-xs text-accent font-body font-semibold bg-accent/20 rounded-full px-2.5 py-0.5">
                  10+ Years Experience
                </span>
                <span className="text-xs text-white/50">·</span>
                <span className="text-xs text-accent font-body font-semibold bg-accent/20 rounded-full px-2.5 py-0.5">
                  1000+ Students Guided
                </span>
              </div>
            </div>
          </div>
          <div className="shrink-0">
            <button
              type="button"
              onClick={() => {
                const el = document.querySelector("#contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground hover:bg-accent/90 font-body font-semibold px-6 py-3 rounded-lg shadow-elevated transition-smooth text-sm group"
              data-ocid="why-choose.mentor-cta"
            >
              Book Your Free Career Discussion (Limited Slots Today)
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
