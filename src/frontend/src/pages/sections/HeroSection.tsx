import { Button } from "@/components/ui/button";
import { AlertCircle, ArrowRight, CheckCircle, Star } from "lucide-react";

const TRUST_STATS = [
  { value: "1000+", label: "Students Guided" },
  { value: "70+", label: "Verified Universities" },
  { value: "95%", label: "Admission Success Rate" },
  { value: "Trusted", label: "Across India" },
];

export function HeroSection() {
  function handleEnquire() {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }

  function handleExplorePrograms() {
    const el = document.querySelector("#courses");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-background"
      data-ocid="hero.section"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-primary/4 -translate-y-1/3 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-accent/4 translate-y-1/3 -translate-x-1/3" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[1px] bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[88vh] py-16 lg:py-20">
          {/* Left Content */}
          <div className="animate-slide-up">
            {/* Urgency chip */}
            <div
              className="inline-flex items-center gap-2 bg-destructive/10 text-destructive border border-destructive/25 rounded-full px-4 py-1.5 text-xs font-body font-semibold tracking-wide mb-5"
              data-ocid="hero.urgency-badge"
            >
              <AlertCircle className="w-3.5 h-3.5" />
              Only 12 Counselling Slots Left Today
            </div>

            {/* SSN badge */}
            <div className="inline-flex items-center gap-2 bg-primary/8 text-primary border border-primary/15 rounded-full px-4 py-1.5 text-xs font-body font-semibold uppercase tracking-wider mb-6 ml-2">
              SSN Initiative · Expert Education Advisory
            </div>

            <h1 className="font-display text-5xl lg:text-6xl xl:text-[4.25rem] font-bold text-primary leading-[1.1] mb-4 tracking-tight">
              Choose the Right Degree.{" "}
              <span className="block text-gradient-primary">
                Not Just Any Degree.
              </span>
            </h1>

            {/* Clarity tagline */}
            <div className="flex flex-wrap items-center gap-2 mb-5">
              <span className="text-sm font-body font-semibold text-muted-foreground">
                For Students &amp; Working Professionals
              </span>
              <span className="text-muted-foreground/40">·</span>
              <div className="flex items-center gap-1.5 flex-wrap">
                {["Online UG", "Online PG", "PhD", "Post Doc"].map((tag, i) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1 text-xs font-body font-semibold text-accent bg-accent/10 border border-accent/25 rounded-full px-2.5 py-0.5"
                  >
                    {i > 0 && <span className="text-accent/40 mr-0.5">|</span>}
                    {tag}
                  </span>
                ))}
              </div>
              <span className="text-muted-foreground/40">·</span>
              <span className="text-sm font-body font-semibold text-primary/80">
                70+ Verified Universities
              </span>
            </div>

            <p className="text-lg text-muted-foreground font-body leading-relaxed mb-8 max-w-xl">
              Explore Online UG, PG, PhD and Post Doctorate programs. Compare
              universities, evaluate ROI, and secure admission with{" "}
              <span className="font-semibold text-foreground">
                expert guidance
              </span>
              .
            </p>

            {/* Trust proof points */}
            <div className="flex flex-col gap-2 mb-8">
              {[
                "UGC-recognized universities across India and abroad",
                "Personalized, career-focused academic roadmap",
                "Dedicated mentor from enquiry to enrolment",
              ].map((point) => (
                <div key={point} className="flex items-start gap-2.5">
                  <CheckCircle className="w-[18px] h-[18px] text-accent mt-0.5 shrink-0" />
                  <span className="text-sm font-body text-muted-foreground">
                    {point}
                  </span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={handleEnquire}
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 font-body font-semibold text-base px-7 shadow-elevated hover:shadow-elevated transition-smooth group"
                data-ocid="hero.cta-primary"
              >
                Get Your Personalized Degree Plan (Free Today)
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform duration-200" />
              </Button>
              <Button
                onClick={handleExplorePrograms}
                size="lg"
                variant="outline"
                className="font-body font-semibold text-base px-7 border-primary/30 text-primary hover:bg-primary/5 transition-smooth"
                data-ocid="hero.cta-secondary"
              >
                Explore Online UG &amp; PG Programs
              </Button>
            </div>

            {/* Social Proof Strip */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mt-10 pt-8 border-t border-border">
              {TRUST_STATS.map(({ value, label }) => (
                <div key={label} className="flex flex-col">
                  <div className="font-display text-2xl font-bold text-primary leading-tight">
                    {value}
                  </div>
                  <div className="text-xs text-muted-foreground font-body">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative flex justify-center lg:justify-end animate-fade-in">
            <div className="relative w-full max-w-lg">
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-2xl border border-primary/10 scale-105 z-0" />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/8 to-accent/8 rounded-2xl z-0" />
              <img
                src="/assets/generated/hero-students.dim_900x600.jpg"
                alt="Students achieving academic success with Learnify guidance"
                className="w-full h-[480px] object-cover rounded-2xl shadow-elevated relative z-10"
              />

              {/* Floating mentor card */}
              <div className="absolute -bottom-6 -left-6 z-20 bg-card border border-border rounded-xl p-4 shadow-elevated animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full gradient-accent flex items-center justify-center shrink-0">
                    <span className="text-white font-display font-bold text-sm">
                      Dr
                    </span>
                  </div>
                  <div>
                    <div className="text-xs font-body font-semibold text-foreground">
                      Dr. S. Mithun
                    </div>
                    <div className="text-xs text-muted-foreground font-body">
                      Career Mentor &amp; HE Specialist
                    </div>
                    <div className="flex items-center gap-0.5 mt-0.5">
                      {["s1", "s2", "s3", "s4", "s5"].map((k) => (
                        <Star
                          key={k}
                          className="w-2.5 h-2.5 fill-accent text-accent"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating stat card */}
              <div className="absolute -top-4 -right-4 z-20 bg-primary text-white rounded-xl p-3.5 shadow-elevated">
                <div className="text-2xl font-display font-bold text-accent leading-none">
                  500+
                </div>
                <div className="text-xs font-body text-white/80 mt-0.5">
                  Admissions Completed
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social proof counter bar */}
      <div
        className="bg-primary border-t border-primary/80"
        data-ocid="hero.social-proof-bar"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
            {[
              { value: "1000+", label: "Students Guided" },
              { value: "500+", label: "Admissions Completed" },
              { value: "27", label: "Students Applied Today" },
              { value: "⭐ Online MBA", label: "Most Popular Program" },
            ].map(({ value, label }) => (
              <div key={label} className="flex items-center gap-2">
                <span className="font-display font-bold text-accent text-lg">
                  {value}
                </span>
                <span className="text-xs text-white/75 font-body">{label}</span>
                <span className="text-white/30 hidden sm:inline">·</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
