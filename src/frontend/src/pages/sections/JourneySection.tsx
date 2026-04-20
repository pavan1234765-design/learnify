import { ArrowRight, BookOpen, GraduationCap, Target } from "lucide-react";

const JOURNEY_STEPS = [
  {
    step: 1,
    icon: Target,
    title: "Share Your Career Goal",
    description:
      "Tell us your background and career goals to get a personalized academic plan.",
    accentColor: "primary",
  },
  {
    step: 2,
    icon: BookOpen,
    title: "Get Verified University Options",
    description:
      "We shortlist top UGC-approved universities based on your budget, specialization, and career goals.",
    accentColor: "accent",
  },
  {
    step: 3,
    icon: GraduationCap,
    title: "Secure Your Admission with Expert Support",
    description:
      "We guide you through applications, documentation, and final admission — end to end.",
    accentColor: "primary",
  },
];

export function JourneySection() {
  return (
    <section
      id="how-it-works"
      className="py-20 lg:py-28 bg-background"
      data-ocid="journey.section"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary border border-primary/20 rounded-full px-4 py-1.5 text-xs font-body font-semibold uppercase tracking-wider mb-4">
            How Learnify Works
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-4">
            A Proven Path to the Right Degree,{" "}
            <span className="text-gradient-primary">
              University, and Career Growth
            </span>
          </h2>
          <p className="text-lg text-muted-foreground font-body leading-relaxed">
            A simple 3-step process to help you choose the right university and
            secure admission with expert guidance.
          </p>
        </div>

        {/* Differentiation callout */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="flex items-start gap-3 bg-primary/5 border border-primary/20 rounded-xl px-5 py-4">
            <span className="text-primary text-lg mt-0.5 shrink-0">✦</span>
            <p className="text-sm font-body font-semibold text-foreground leading-relaxed">
              Unlike generic consultancies, we use a{" "}
              <span className="text-primary">
                structured, outcome-focused advisory model
              </span>{" "}
              — proven across 1000+ successful admissions.
            </p>
          </div>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Desktop connector */}
          <div className="hidden lg:block absolute top-14 left-[calc(16.67%+2rem)] right-[calc(16.67%+2rem)] h-0.5 bg-gradient-to-r from-primary/30 via-accent/40 to-primary/30 z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 relative z-10">
            {JOURNEY_STEPS.map((step, index) => {
              const Icon = step.icon;
              const isPrimary = step.accentColor === "primary";
              return (
                <div
                  key={step.step}
                  className="group"
                  data-ocid={`journey.step.${step.step}`}
                >
                  <div className="bg-card border border-border rounded-2xl p-7 shadow-subtle hover:shadow-elevated transition-smooth hover:-translate-y-1 h-full flex flex-col">
                    {/* Step number + icon */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="relative shrink-0">
                        <div
                          className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-subtle ${
                            isPrimary
                              ? "bg-primary text-white"
                              : "bg-accent text-accent-foreground"
                          }`}
                        >
                          <Icon className="w-7 h-7" />
                        </div>
                        <div
                          className={`absolute -top-2 -right-2 w-7 h-7 rounded-full text-xs font-display font-bold flex items-center justify-center border-2 border-card ${
                            isPrimary
                              ? "bg-primary text-white"
                              : "bg-accent text-accent-foreground"
                          }`}
                        >
                          {step.step}
                        </div>
                      </div>
                      {index < JOURNEY_STEPS.length - 1 && (
                        <ArrowRight
                          className="w-5 h-5 text-muted-foreground/30 hidden lg:block absolute"
                          style={{
                            left: "calc(100% + 1.75rem)",
                            top: "1.75rem",
                          }}
                        />
                      )}
                    </div>

                    <h3 className="font-display font-bold text-foreground text-xl mb-3 leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground font-body leading-relaxed flex-1">
                      {step.description}
                    </p>

                    {/* Step indicator pill */}
                    <div className="mt-5 pt-4 border-t border-border">
                      <span
                        className={`text-xs font-body font-semibold uppercase tracking-wider ${
                          isPrimary ? "text-primary" : "text-accent"
                        }`}
                      >
                        Step {step.step} of 3
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Trust line */}
        <div className="mt-10 text-center">
          <p className="text-sm font-body font-semibold text-muted-foreground">
            We've helped{" "}
            <span className="text-primary font-bold">1000+ learners</span>{" "}
            secure admissions successfully.{" "}
            <span className="text-accent font-bold">95% success rate.</span>
          </p>
        </div>

        {/* Urgency + CTA */}
        <div className="text-center mt-8">
          <div className="inline-flex items-center gap-2 bg-destructive/8 text-destructive border border-destructive/20 rounded-full px-4 py-1.5 text-xs font-body font-semibold mb-5">
            ⚡ Limited Counselling Slots Available Today
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => {
                const el = document.querySelector("#contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground hover:bg-accent/90 font-body font-semibold px-8 py-3.5 rounded-lg shadow-elevated hover:shadow-elevated transition-smooth text-base group"
              data-ocid="journey.cta-primary"
            >
              Get Your Personalized Degree Plan Now
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
            </button>
            <button
              type="button"
              onClick={() => {
                window.location.hash = "/tools";
              }}
              className="text-sm font-body font-semibold text-primary hover:text-accent transition-colors duration-200 underline underline-offset-4"
              data-ocid="journey.cta-quiz"
            >
              Or take our 60-second career quiz →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
