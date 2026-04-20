import type { ServiceItem } from "@/types";
import {
  Award,
  BookMarked,
  BookOpen,
  Briefcase,
  Building,
  FileText,
  Globe,
  GraduationCap,
  Medal,
  Monitor,
  Star,
  Trophy,
  Users,
} from "lucide-react";

const SERVICES: ServiceItem[] = [
  {
    icon: "book-open",
    title: "Admissions Guidance",
    description:
      "Expert support for university applications at UGC-recognized and international institutions.",
  },
  {
    icon: "briefcase",
    title: "Career Counselling",
    description:
      "Personalized sessions to align your academic choices with long-term career objectives.",
  },
  {
    icon: "monitor",
    title: "Online & Distance Education",
    description:
      "Guidance for flexible learning programs that fit your lifestyle and career needs.",
  },
  {
    icon: "globe",
    title: "Study Abroad Guidance",
    description:
      "End-to-end support for international admissions, visas, and program selection.",
  },
  {
    icon: "graduation-cap",
    title: "Doctorate & Executive Programs",
    description:
      "Specialized support for PhD and executive-level academic pursuit and research.",
  },
  {
    icon: "building",
    title: "University Selection",
    description:
      "Data-driven matching to find the institution that best fits your profile and aspirations.",
  },
  {
    icon: "file-text",
    title: "Thesis Writing Support",
    description:
      "Expert guidance throughout thesis writing, structuring, and review process.",
  },
  {
    icon: "book-marked",
    title: "Journal Publications",
    description:
      "Support for publishing in Scopus, ABDC, and SCIE-indexed research journals.",
  },
  {
    icon: "award",
    title: "Design & Utility Patents",
    description:
      "Comprehensive patent filing and IP protection services for researchers and innovators.",
  },
  {
    icon: "book-open-2",
    title: "Book Publications",
    description:
      "Assistance with academic book writing, editing, and publishing with reputed publishers.",
  },
  {
    icon: "book-chapter",
    title: "Book Chapter Publications",
    description:
      "Support for contributing scholarly chapters to edited volumes and academic compilations.",
  },
  {
    icon: "medal",
    title: "Awards",
    description:
      "Nominations and support for national and international academic recognition awards.",
  },
  {
    icon: "users",
    title: "PR & Brand Reputation",
    description:
      "Brand reputation building, media visibility, and PR strategy for academics and institutions.",
  },
  {
    icon: "trophy",
    title: "Fellowships",
    description:
      "Fellowship identification and application support for researchers, scholars, and educators.",
  },
];

const ICON_MAP: Record<string, React.ElementType> = {
  "book-open": BookOpen,
  briefcase: Briefcase,
  monitor: Monitor,
  globe: Globe,
  "graduation-cap": GraduationCap,
  building: Building,
  "file-text": FileText,
  "book-marked": BookMarked,
  award: Award,
  "book-open-2": Star,
  "book-chapter": BookMarked,
  medal: Medal,
  users: Users,
  trophy: Trophy,
};

export function ServicesSection() {
  return (
    <section
      id="services"
      className="py-20 lg:py-28 bg-muted/30"
      data-ocid="services-section"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent border border-accent/20 rounded-full px-4 py-1.5 text-xs font-body font-semibold uppercase tracking-wider mb-4">
            Our Services
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-4">
            {SERVICES.length} Services to Fuel Your{" "}
            <span className="text-gradient-primary">Academic Journey</span>
          </h2>
          <p className="text-lg text-muted-foreground font-body leading-relaxed">
            Professional education consultancy covering every stage — from
            admissions to publications and beyond.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {SERVICES.map((service, index) => {
            const Icon = ICON_MAP[service.icon] ?? BookOpen;
            return (
              <div
                key={service.title}
                className="bg-card border border-border rounded-xl p-5 shadow-subtle hover:shadow-elevated hover:-translate-y-0.5 transition-smooth group"
                data-ocid={`service-card-${index}`}
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-accent/10 transition-smooth">
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
      </div>
    </section>
  );
}
