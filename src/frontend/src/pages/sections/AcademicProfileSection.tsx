import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Award,
  BookCopy,
  BookMarked,
  Briefcase,
  ClipboardList,
  FileCheck,
  FileSearch,
  Globe,
  GraduationCap,
  Handshake,
  Microscope,
  Trophy,
} from "lucide-react";
import { useState } from "react";

type ServiceCategory = "core" | "advanced" | "global";

interface AcademicService {
  icon: React.ElementType;
  title: string;
  description: string;
  category: ServiceCategory;
  popular?: boolean;
}

const ACADEMIC_SERVICES: AcademicService[] = [
  // CORE
  {
    icon: Microscope,
    title: "Research Paper Publishing",
    description:
      "Scopus, SCI, IEEE, Springer, MDPI, Taylor & Francis indexed journal support.",
    category: "core",
    popular: true,
  },
  {
    icon: BookCopy,
    title: "Book & ISBN Publishing",
    description:
      "International book writing and publishing with Indian ISBN & US ISBN allotment.",
    category: "core",
    popular: true,
  },
  {
    icon: GraduationCap,
    title: "PhD & Post-Doc Admission Support",
    description:
      "Comprehensive admission support for Ph.D. and Post-Doctoral programs.",
    category: "core",
    popular: true,
  },
  {
    icon: FileCheck,
    title: "Experience Certificates",
    description:
      "Verified experience certificates from universities, startups, and industry.",
    category: "core",
  },
  // ADVANCED
  {
    icon: FileSearch,
    title: "Patent & IPR Support",
    description:
      "Indian Utility & Design patents, International filing in UK & Germany.",
    category: "advanced",
  },
  {
    icon: ClipboardList,
    title: "Consultancy & Funded Research Projects",
    description:
      "End-to-end documentation and execution for funded academic projects.",
    category: "advanced",
  },
  {
    icon: BookMarked,
    title: "Guidance for Editorial Board Opportunities",
    description:
      "Support for Scopus journal editorial board and reviewer membership positions.",
    category: "advanced",
  },
  {
    icon: Trophy,
    title: "Support for Academic Award Nominations",
    description:
      "Structured guidance for international academic award nominations and recognition.",
    category: "advanced",
  },
  {
    icon: Briefcase,
    title: "Career Credentials & Portfolio Building",
    description:
      "Academic CV, professional positioning, and co-guide allotment support.",
    category: "advanced",
  },
  // GLOBAL
  {
    icon: Globe,
    title: "US EB-1 / EB-2 (NIW) / O-1 Visa Profile Building",
    description:
      "End-to-end academic profile enhancement for US immigration pathways.",
    category: "global",
  },
  {
    icon: Award,
    title: "International Conference Roles",
    description:
      "Support for Speaker, Reviewer, Editor, and Jury roles at global conferences.",
    category: "global",
  },
  {
    icon: Handshake,
    title: "Strategic MOU & Global Collaborations",
    description:
      "MOU facilitation with national/international universities, startups, and industry.",
    category: "global",
  },
];

const CATEGORY_LABELS: Record<ServiceCategory, string> = {
  core: "Core Services",
  advanced: "Advanced Services",
  global: "Global Services",
};

const PROCESS_STEPS = [
  { step: 1, label: "Profile Assessment", color: "bg-primary text-white" },
  {
    step: 2,
    label: "Strategy Plan",
    color: "bg-accent text-accent-foreground",
  },
  { step: 3, label: "Execution Support", color: "gradient-accent text-white" },
];

export function AcademicProfileSection() {
  const [activeTab, setActiveTab] = useState<ServiceCategory>("core");

  function handleEnquireClick() {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }

  const visibleServices = ACADEMIC_SERVICES.filter(
    (s) => s.category === activeTab,
  );

  return (
    <section
      id="for-academics"
      className="py-20 lg:py-28 bg-background"
      data-ocid="academic-profile.section"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary border border-primary/20 rounded-full px-4 py-1.5 text-xs font-body font-semibold uppercase tracking-wider mb-4">
            For Academic Professionals
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-4">
            Build a{" "}
            <span className="text-gradient-primary">Globally Recognized</span>{" "}
            Academic Profile
          </h2>
          <p className="text-lg text-muted-foreground font-body leading-relaxed">
            For faculty, researchers, and academic professionals looking to grow
            globally.
          </p>
        </div>

        {/* Differentiation callout */}
        <div className="max-w-2xl mx-auto mb-10">
          <div className="flex items-start gap-3 bg-accent/8 border border-accent/25 rounded-xl px-5 py-4">
            <span className="text-accent text-lg mt-0.5 shrink-0">✦</span>
            <p className="text-sm font-body font-semibold text-foreground leading-relaxed">
              Unlike generic agencies, Learnify provides{" "}
              <span className="text-accent">
                structured academic and research-driven profile building
              </span>{" "}
              — aligned with institutional guidelines.
            </p>
          </div>
        </div>

        {/* Trust Metrics strip */}
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 py-5 mb-10 border-t border-b border-border">
          {[
            { value: "1000+", label: "Academic Profiles Built" },
            { value: "500+", label: "Research Papers Supported" },
            { value: "100+", label: "Patents Filed" },
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

        {/* 3-step process flow */}
        <div className="mb-10 bg-card border border-border rounded-2xl px-6 py-5 shadow-subtle">
          <p className="text-center text-xs font-body font-bold text-muted-foreground uppercase tracking-widest mb-4">
            How It Works
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-0">
            {PROCESS_STEPS.map((step, i) => (
              <div key={step.step} className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-display font-bold ${step.color}`}
                  >
                    {step.step}
                  </div>
                  <span className="text-sm font-body font-semibold text-foreground">
                    {step.label}
                  </span>
                </div>
                {i < PROCESS_STEPS.length - 1 && (
                  <ArrowRight className="w-4 h-4 text-muted-foreground/40 shrink-0 mx-2 hidden sm:block" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Category Tabs */}
        <div
          className="flex flex-wrap justify-center gap-2 mb-8"
          data-ocid="academic-profile.category-tabs"
        >
          {(Object.keys(CATEGORY_LABELS) as ServiceCategory[]).map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveTab(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-body font-semibold border transition-smooth ${
                activeTab === cat
                  ? "bg-primary text-primary-foreground border-primary shadow-subtle"
                  : "bg-card text-muted-foreground border-border hover:border-primary/50 hover:text-foreground"
              }`}
              data-ocid={`academic-profile.tab.${cat}`}
            >
              {CATEGORY_LABELS[cat]}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-12">
          {visibleServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="relative bg-card border border-border rounded-xl p-5 shadow-subtle hover:shadow-elevated hover:-translate-y-0.5 transition-smooth group"
                data-ocid={`academic-profile.service-card.${index + 1}`}
              >
                {service.popular && (
                  <span className="absolute top-3 right-3 text-[9px] font-body font-bold text-accent border border-accent/30 bg-accent/8 rounded-full px-2 py-0.5 uppercase tracking-wider">
                    Popular
                  </span>
                )}
                <div className="w-10 h-10 rounded-lg bg-primary/8 flex items-center justify-center mb-4 group-hover:bg-accent/10 transition-smooth">
                  <Icon className="w-5 h-5 text-primary group-hover:text-accent transition-colors duration-200" />
                </div>
                <h3 className="font-display font-semibold text-foreground text-base mb-1.5 leading-snug">
                  {service.title}
                </h3>
                <p className="text-xs text-muted-foreground font-body leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-card border border-border rounded-2xl px-8 py-6 shadow-elevated">
            <div className="text-left">
              <p className="font-display font-semibold text-foreground text-base">
                Ready to elevate your academic profile?
              </p>
              <p className="text-sm text-muted-foreground font-body">
                Book a personalized consultation with our academic advisors.
              </p>
            </div>
            <Button
              type="button"
              onClick={handleEnquireClick}
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-body font-semibold shadow-subtle hover:shadow-elevated transition-smooth whitespace-nowrap"
              data-ocid="academic-profile.enquire-cta"
            >
              Book Your Academic Growth Consultation
            </Button>
          </div>
          <p className="text-xs text-muted-foreground font-body mt-4 italic">
            Services are advisory and support-based, aligned with institutional
            guidelines.
          </p>
        </div>
      </div>
    </section>
  );
}
