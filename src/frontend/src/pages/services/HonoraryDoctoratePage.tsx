import {
  Award,
  Globe,
  GraduationCap,
  Star,
  TrendingUp,
  Users,
} from "lucide-react";
import { type ServicePageData, ServicePageLayout } from "./ServicePageLayout";

const data: ServicePageData = {
  hero: {
    badge: "Academic Honors",
    title: "Honorary Doctorate Facilitation & Recognition Support",
    tagline:
      "Recognition support for accomplished professionals and academics seeking prestigious honorary doctoral honors from recognized global institutions.",
    ctaLabel: "Book Your Free Career Discussion",
  },
  whatIsIt: {
    content:
      "An Honorary Doctorate (Honoris Causa) is a prestigious academic honor conferred by universities upon individuals who have made extraordinary contributions to society, industry, arts, education, or public service — without requiring formal academic coursework. Learnify provides end-to-end Honorary Doctorate facilitation, connecting distinguished professionals and leaders with appropriate awarding institutions and managing the recognition process with full transparency and credibility.",
  },
  whoIsItFor: {
    audiences: [
      "Senior industry leaders with 15+ years of distinguished service",
      "Academics and educators with significant institutional impact",
      "Social entrepreneurs and NGO founders with proven societal contributions",
      "Artists, authors, and cultural leaders",
      "Business founders with notable industry transformation records",
      "Public servants and policy makers with verifiable achievements",
    ],
  },
  benefits: {
    benefits: [
      {
        icon: <Award className="w-5 h-5 text-primary" />,
        title: "Prestigious Academic Honor",
        description:
          "An Honorary Doctorate is one of the most coveted recognitions — symbolizing a lifetime of impactful contribution and distinguished achievement.",
      },
      {
        icon: <Globe className="w-5 h-5 text-primary" />,
        title: "Global Recognition",
        description:
          "Honorary degrees from internationally recognized universities strengthen your global academic and professional credibility.",
      },
      {
        icon: <Star className="w-5 h-5 text-primary" />,
        title: "Institutional Credibility",
        description:
          "Enhance your professional authority and institutional standing, unlocking access to advisory boards, editorial roles, and academic partnerships.",
      },
      {
        icon: <Users className="w-5 h-5 text-primary" />,
        title: "Profile Elevation",
        description:
          "An honorary doctorate significantly amplifies your public profile, positioning you as an authority figure in your domain.",
      },
      {
        icon: <TrendingUp className="w-5 h-5 text-primary" />,
        title: "Career & Legacy Building",
        description:
          "Supports career advancement into advisory, governance, and leadership roles across academic and corporate sectors.",
      },
      {
        icon: <GraduationCap className="w-5 h-5 text-primary" />,
        title: "Full Facilitation Support",
        description:
          "Learnify manages the complete process — eligibility assessment, institutional matching, nomination, documentation, and ceremonial coordination.",
      },
    ],
  },
  process: [
    {
      step: 1,
      title: "Achievement Profile Assessment",
      description:
        "We conduct a comprehensive review of your professional achievements, publications, awards, and societal contributions to assess eligibility.",
    },
    {
      step: 2,
      title: "Institution Matching",
      description:
        "Based on your domain and contribution profile, we identify appropriate recognized institutions capable of conferring honorary recognition.",
    },
    {
      step: 3,
      title: "Nomination Documentation",
      description:
        "We prepare a compelling nomination dossier, including your achievement profile, citations, testimonials, and supporting evidence.",
    },
    {
      step: 4,
      title: "Institutional Correspondence",
      description:
        "We manage formal correspondence with the awarding institution, facilitating the nomination review and approval process.",
    },
    {
      step: 5,
      title: "Ceremonial Coordination & Delivery",
      description:
        "We coordinate conferment logistics — including the degree ceremony or digital conferment — and ensure proper documentation and credential delivery.",
    },
  ],
  faqs: [
    {
      question: "Who qualifies for an Honorary Doctorate?",
      answer:
        "Individuals who have made distinguished, verifiable contributions to their field — industry, academia, arts, public service, or social impact — typically qualify. There is no age or academic prerequisite. Contributions are evaluated on their merit and impact.",
    },
    {
      question: "Is an Honorary Doctorate the same as an earned PhD?",
      answer:
        "No — an Honorary Doctorate is an honorific recognition, not an academic research degree. It cannot be used to apply for academic positions requiring an earned PhD. However, it carries significant personal prestige and credibility.",
    },
    {
      question:
        "Are Honorary Doctorates from Learnify-facilitated institutions legitimate?",
      answer:
        "Yes — Learnify works exclusively with recognized, legitimate institutions. We do not facilitate degrees from diploma mills or unaccredited organizations. All conferring institutions are vetted for credibility.",
    },
    {
      question: "How long does the process take?",
      answer:
        "The typical timeline from assessment to conferment is 4–12 weeks, depending on the institution's review cycle and documentation completeness.",
    },
    {
      question:
        "Can a business professional or entrepreneur receive an Honorary Doctorate?",
      answer:
        "Absolutely. Honorary Doctorates are frequently conferred upon entrepreneurs, CEOs, social leaders, and innovators who have demonstrated transformative impact in their domain.",
    },
  ],
};

export function HonoraryDoctoratePage() {
  return <ServicePageLayout data={data} />;
}
