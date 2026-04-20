import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle2, ChevronDown, ChevronUp } from "lucide-react";
import { type ReactNode, useState } from "react";

interface HeroProps {
  badge: string;
  title: string;
  tagline: string;
  ctaLabel?: string;
}

interface WhatIsItProps {
  content: string;
}

interface WhoIsItForProps {
  audiences: string[];
}

interface BenefitsProps {
  benefits: { icon?: ReactNode; title: string; description: string }[];
}

interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

interface FAQ {
  question: string;
  answer: string;
}

export interface ServicePageData {
  hero: HeroProps;
  whatIsIt: WhatIsItProps;
  whoIsItFor: WhoIsItForProps;
  benefits: BenefitsProps;
  process: ProcessStep[];
  faqs: FAQ[];
}

function FAQItem({ faq, id }: { faq: FAQ; id: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="border border-border rounded-xl overflow-hidden"
      data-ocid={`faq.item.${id}`}
    >
      <button
        type="button"
        className="w-full flex items-center justify-between px-6 py-4 text-left bg-card hover:bg-muted/40 transition-smooth"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="font-display font-semibold text-foreground text-sm sm:text-base">
          {faq.question}
        </span>
        {open ? (
          <ChevronUp className="w-4 h-4 text-accent shrink-0 ml-3" />
        ) : (
          <ChevronDown className="w-4 h-4 text-muted-foreground shrink-0 ml-3" />
        )}
      </button>
      {open && (
        <div className="px-6 py-4 bg-muted/20 border-t border-border">
          <p className="text-sm text-muted-foreground font-body leading-relaxed">
            {faq.answer}
          </p>
        </div>
      )}
    </div>
  );
}

export function ServicePageLayout({ data }: { data: ServicePageData }) {
  function scrollToContact() {
    window.location.hash = "";
    setTimeout(() => {
      const el = document.querySelector("#contact");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }

  function goHome() {
    window.location.hash = "";
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 pt-16 lg:pt-20">
        {/* Hero Banner */}
        <section
          className="relative bg-primary overflow-hidden"
          data-ocid="service.hero"
        >
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "radial-gradient(circle at 70% 50%, oklch(0.67 0.19 75), transparent 60%)",
            }}
          />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
            <button
              type="button"
              onClick={goHome}
              className="inline-flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-primary-foreground mb-8 transition-colors duration-200"
              data-ocid="service.back_link"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </button>
            <Badge className="mb-4 bg-accent/20 text-accent border-accent/30 font-body text-xs uppercase tracking-wider px-3 py-1">
              {data.hero.badge}
            </Badge>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight mb-4 max-w-3xl">
              {data.hero.title}
            </h1>
            <p className="text-primary-foreground/80 font-body text-lg sm:text-xl max-w-2xl leading-relaxed mb-8">
              {data.hero.tagline}
            </p>
            <Button
              onClick={scrollToContact}
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-body font-semibold shadow-elevated transition-smooth px-8 py-3 h-auto text-base"
              data-ocid="service.hero_cta"
            >
              {data.hero.ctaLabel ?? "Book Your Free Career Discussion"}
            </Button>
          </div>
        </section>

        {/* What Is It */}
        <section
          className="bg-background py-16 sm:py-20"
          data-ocid="service.what_is_it"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-5">
              What Is This Program?
            </h2>
            <p className="text-muted-foreground font-body text-base sm:text-lg leading-relaxed">
              {data.whatIsIt.content}
            </p>
          </div>
        </section>

        {/* Who Is This For */}
        <section
          className="bg-muted/30 py-16 sm:py-20"
          data-ocid="service.who_is_it_for"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground text-center mb-10">
              Who Is This For?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {data.whoIsItFor.audiences.map((audience) => (
                <div
                  key={audience}
                  className="flex items-start gap-3 bg-card rounded-xl px-5 py-4 border border-border shadow-subtle"
                >
                  <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                  <span className="text-sm font-body text-foreground">
                    {audience}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section
          className="bg-background py-16 sm:py-20"
          data-ocid="service.benefits"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground text-center mb-10">
              Key Benefits
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {data.benefits.benefits.map((b) => (
                <div
                  key={b.title}
                  className="bg-card border border-border rounded-2xl p-6 shadow-subtle hover:shadow-elevated transition-smooth group"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-accent/15 transition-smooth">
                    {b.icon ?? (
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                    )}
                  </div>
                  <h3 className="font-display font-semibold text-foreground text-base mb-2">
                    {b.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-body leading-relaxed">
                    {b.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section
          className="bg-muted/30 py-16 sm:py-20"
          data-ocid="service.process"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground text-center mb-10">
              Step-by-Step Process
            </h2>
            <div className="max-w-3xl mx-auto space-y-4">
              {data.process.map((step) => (
                <div
                  key={step.step}
                  className="flex items-start gap-5 bg-card border border-border rounded-2xl px-6 py-5 shadow-subtle"
                  data-ocid={`service.process.item.${step.step}`}
                >
                  <div className="w-10 h-10 rounded-full gradient-accent flex items-center justify-center shrink-0 text-white font-display font-bold text-sm">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground text-base mb-1">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground font-body leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section
          className="bg-background py-16 sm:py-20"
          data-ocid="service.faqs"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground text-center mb-10">
              Frequently Asked Questions
            </h2>
            <div className="space-y-3">
              {data.faqs.map((faq, i) => (
                <FAQItem key={faq.question} faq={faq} id={String(i + 1)} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section
          className="bg-primary py-16 sm:py-20"
          data-ocid="service.cta_section"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-primary-foreground mb-4">
              Ready to Take the Next Step?
            </h2>
            <p className="text-primary-foreground/80 font-body text-base sm:text-lg mb-8 max-w-xl mx-auto">
              Connect with our expert advisors for a personalized career
              discussion — no obligation, just clarity.
            </p>
            <Button
              onClick={scrollToContact}
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-body font-semibold shadow-elevated transition-smooth px-10 py-3 h-auto text-base"
              data-ocid="service.bottom_cta"
            >
              Book Your Free Career Discussion
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
