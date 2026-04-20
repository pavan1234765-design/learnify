import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Award,
  BookOpen,
  Globe,
  GraduationCap,
  Lightbulb,
} from "lucide-react";
import { useState } from "react";

interface BucketItem {
  name: string;
  detail?: string;
}

interface ServiceBucket {
  id: string;
  icon: React.ElementType;
  title: string;
  color: "primary" | "accent" | "secondary";
  items: BucketItem[];
}

const BUCKETS: ServiceBucket[] = [
  {
    id: "academic",
    icon: GraduationCap,
    title: "Academic Programs",
    color: "primary",
    items: [
      { name: "Online UG Programs", detail: "BBA, BCA, BA, BCom, etc." },
      { name: "Online PG Programs", detail: "MBA, MCA, MSc, MA, MCom, etc." },
      { name: "PhD Admissions", detail: "Doctoral research support" },
      { name: "Post Doctorate", detail: "DLitt, DSc, PDF" },
    ],
  },
  {
    id: "research",
    icon: BookOpen,
    title: "Research & Career Services",
    color: "accent",
    items: [
      {
        name: "Research Publications",
        detail: "Scopus, SCI, IEEE, Springer, MDPI, etc.",
      },
      { name: "Patents & IP", detail: "India, UK, Germany" },
      {
        name: "Research Projects & Funding",
        detail: "DPIIT, NIRF, NAAC aligned",
      },
      {
        name: "Career Credentials & Academic Support",
        detail: "Thesis, certificates, portfolio",
      },
    ],
  },
  {
    id: "global",
    icon: Globe,
    title: "Global & Brand Services",
    color: "secondary",
    items: [
      { name: "Study Abroad Programs", detail: "UK, US, Europe, Australia" },
      { name: "PR & Branding", detail: "Media, conferences, awards" },
      {
        name: "Global Profile Building",
        detail: "US Visa, citations, Google Scholar",
      },
      {
        name: "Strategic Collaborations & MOU",
        detail: "Universities, startups, industry",
      },
    ],
  },
];

const GOAL_BUTTONS = [
  { label: "I want to pursue UG/PG", target: "academic" },
  { label: "I want to do PhD/Post Doc", target: "academic" },
  { label: "I need Research Support", target: "research" },
  { label: "I want Global Opportunities", target: "global" },
];

const JOURNEY_STEPS = [
  { step: 1, icon: GraduationCap, label: "Choose Program" },
  { step: 2, icon: Lightbulb, label: "Build Profile" },
  { step: 3, icon: Award, label: "Gain Global Recognition" },
];

export function EcosystemSection() {
  const [activeBucket, setActiveBucket] = useState<string | null>(null);

  function handleGoalClick(target: string) {
    setActiveBucket(target);
    setTimeout(() => {
      const el = document.getElementById(`bucket-${target}`);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 50);
  }

  function handleContactClick() {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }

  const colorMap = {
    primary: {
      icon: "bg-primary/10 text-primary",
      border: "border-primary/30",
      ring: "ring-primary/20",
      dot: "bg-primary",
      badge: "bg-primary/8 text-primary border-primary/20",
      highlight: "bg-primary/5 border-primary shadow-elevated",
    },
    accent: {
      icon: "bg-accent/10 text-accent",
      border: "border-accent/30",
      ring: "ring-accent/20",
      dot: "bg-accent",
      badge: "bg-accent/8 text-accent border-accent/20",
      highlight: "bg-accent/5 border-accent shadow-elevated",
    },
    secondary: {
      icon: "bg-secondary/10 text-secondary-foreground",
      border: "border-secondary/40",
      ring: "ring-secondary/20",
      dot: "bg-secondary-foreground",
      badge: "bg-secondary/30 text-secondary-foreground border-secondary/40",
      highlight: "bg-secondary/20 border-secondary shadow-elevated",
    },
  };

  return (
    <section
      id="ecosystem"
      className="py-20 lg:py-28 bg-muted/30"
      data-ocid="ecosystem-section"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary border border-primary/20 rounded-full px-4 py-1.5 text-xs font-body font-semibold uppercase tracking-wider mb-5">
            Complete Academic Ecosystem
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Explore Your Complete{" "}
            <span className="text-gradient-primary">Academic Journey</span>
            <br />
            (UG to Post Doctorate)
          </h2>
          <p className="text-lg text-muted-foreground font-body leading-relaxed">
            We support your journey from degree selection to global academic
            recognition.
          </p>
        </div>

        {/* Start Here Guidance */}
        <div
          className="mb-10 bg-card border border-border rounded-2xl p-6 shadow-subtle"
          data-ocid="ecosystem.goal-selector"
        >
          <p className="text-center text-sm font-body font-semibold text-muted-foreground uppercase tracking-wider mb-4">
            Start Here Based on Your Goal
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {GOAL_BUTTONS.map(({ label, target }) => (
              <button
                key={label}
                type="button"
                onClick={() => handleGoalClick(target)}
                className={`px-5 py-2.5 rounded-full text-sm font-body font-semibold border transition-smooth ${
                  activeBucket === target
                    ? "bg-primary text-primary-foreground border-primary shadow-subtle"
                    : "bg-background text-foreground border-border hover:border-primary/50 hover:text-primary"
                }`}
                data-ocid={`ecosystem.goal-button.${target}`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* 3 Buckets */}
        <div
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12"
          data-ocid="ecosystem.buckets-list"
        >
          {BUCKETS.map((bucket) => {
            const Icon = bucket.icon;
            const colors = colorMap[bucket.color];
            const isActive = activeBucket === bucket.id;

            return (
              <div
                key={bucket.id}
                id={`bucket-${bucket.id}`}
                className={`bg-card border rounded-2xl p-6 shadow-subtle transition-smooth ${
                  isActive
                    ? `${colors.highlight} ring-2 ${colors.ring}`
                    : "border-border hover:shadow-elevated"
                }`}
                data-ocid={`ecosystem.bucket.${bucket.id}`}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center ${colors.icon}`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display font-bold text-foreground text-lg leading-snug">
                    {bucket.title}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {bucket.items.map((item) => (
                    <li key={item.name} className="flex items-start gap-3">
                      <span
                        className={`mt-2 w-1.5 h-1.5 rounded-full shrink-0 ${colors.dot}`}
                      />
                      <div>
                        <div className="text-sm font-body font-semibold text-foreground leading-snug">
                          {item.name}
                        </div>
                        {item.detail && (
                          <div className="text-xs font-body text-muted-foreground mt-0.5">
                            {item.detail}
                          </div>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Visual Journey Flow */}
        <div
          className="bg-card border border-border rounded-2xl p-6 mb-10"
          data-ocid="ecosystem.journey-flow"
        >
          <p className="text-center text-xs font-body font-bold text-muted-foreground uppercase tracking-widest mb-6">
            Your Academic Journey with Learnify
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-0">
            {JOURNEY_STEPS.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={step.step} className="flex items-center gap-4">
                  <div className="flex flex-col items-center gap-2">
                    <div
                      className={`w-14 h-14 rounded-xl flex items-center justify-center ${
                        i === 0
                          ? "bg-primary text-white"
                          : i === 1
                            ? "bg-accent text-accent-foreground"
                            : "gradient-accent text-white"
                      } shadow-subtle`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="text-center">
                      <div className="text-[10px] font-body font-semibold text-muted-foreground uppercase tracking-wider">
                        Step {step.step}
                      </div>
                      <div className="text-sm font-body font-bold text-foreground">
                        {step.label}
                      </div>
                    </div>
                  </div>
                  {i < JOURNEY_STEPS.length - 1 && (
                    <ArrowRight className="w-5 h-5 text-muted-foreground/40 shrink-0 mx-2 hidden sm:block" />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center" data-ocid="ecosystem-cta-section">
          <Button
            onClick={handleContactClick}
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 font-body font-semibold text-base px-10 shadow-elevated hover:shadow-elevated transition-smooth"
            data-ocid="ecosystem-cta-button"
          >
            Explore Programs &amp; Get Guidance Today
          </Button>
        </div>
      </div>
    </section>
  );
}
