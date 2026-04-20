import {
  Award,
  FileText,
  Globe,
  Lightbulb,
  Shield,
  TrendingUp,
} from "lucide-react";
import { type ServicePageData, ServicePageLayout } from "./ServicePageLayout";

const data: ServicePageData = {
  hero: {
    badge: "Intellectual Property",
    title: "Patents & IP — Protect and Monetize Your Innovation",
    tagline:
      "Expert-led Indian and international patent filing, IP strategy, and technology transfer services for researchers, innovators, and academic professionals.",
    ctaLabel: "Book Your Free Career Discussion",
  },
  whatIsIt: {
    content:
      "Patent filing and intellectual property (IP) management services help researchers, academicians, and innovators protect their discoveries and inventions. Learnify provides end-to-end patent services — from concept evaluation and drafting to Indian Utility and Design Patent registration, international patent filings (UK, Germany), patent publication, and technology commercialization support. We ensure your intellectual work is protected, published, and positioned for maximum impact.",
  },
  whoIsItFor: {
    audiences: [
      "Researchers and PhD scholars with novel innovations",
      "Academicians and faculty with inventions or discoveries",
      "Startup founders protecting proprietary technology",
      "Engineers and technologists with patentable ideas",
      "Academic institutions seeking IP portfolio development",
      "Professionals building credentials for global immigration profiles",
    ],
  },
  benefits: {
    benefits: [
      {
        icon: <Shield className="w-5 h-5 text-primary" />,
        title: "Comprehensive IP Protection",
        description:
          "File Indian Utility and Design Patents, as well as international patents in the UK and Germany, through expert guidance and professional drafting.",
      },
      {
        icon: <FileText className="w-5 h-5 text-primary" />,
        title: "Professional Patent Drafting",
        description:
          "Technical patent drafting by experts ensuring your claims are precise, comprehensive, and legally defensible.",
      },
      {
        icon: <Award className="w-5 h-5 text-primary" />,
        title: "Patent Publication Support",
        description:
          "Assistance with patent publication, issue of patent utilization letters, and validation letters from industry or startups.",
      },
      {
        icon: <Lightbulb className="w-5 h-5 text-primary" />,
        title: "Innovation Funding Assistance",
        description:
          "Support in connecting innovations with funding opportunities, including DPIIT recognition, startup grants, and technology development programs.",
      },
      {
        icon: <TrendingUp className="w-5 h-5 text-primary" />,
        title: "Technology Transfer Support",
        description:
          "Guidance on licensing your patent to industry partners, startups, or institutions — enabling commercialization and royalty income.",
      },
      {
        icon: <Globe className="w-5 h-5 text-primary" />,
        title: "International Patent Pathways",
        description:
          "International patent filing in UK and Germany, strengthening your global IP portfolio and international academic credibility.",
      },
    ],
  },
  process: [
    {
      step: 1,
      title: "Innovation Assessment",
      description:
        "We evaluate your invention or discovery for patentability — assessing novelty, non-obviousness, and industrial applicability before proceeding.",
    },
    {
      step: 2,
      title: "Patent Type & Jurisdiction Selection",
      description:
        "Based on your goals and invention type, we recommend the appropriate patent category (Utility/Design) and jurisdiction (India/International).",
    },
    {
      step: 3,
      title: "Patent Drafting & Claims Development",
      description:
        "Our technical experts draft the full patent specification, including claims, abstract, drawings, and description to professional standards.",
    },
    {
      step: 4,
      title: "Filing & Prosecution",
      description:
        "We file the patent application with the relevant patent office and manage correspondence, office actions, and prosecution until grant.",
    },
    {
      step: 5,
      title: "Publication & Commercialization",
      description:
        "Post-filing, we assist with patent publication, utilization letters, and connecting you with technology transfer or licensing opportunities.",
    },
  ],
  faqs: [
    {
      question: "What can be patented?",
      answer:
        "Inventions that are novel (new), non-obvious (inventive step), and industrially applicable can be patented. This includes technical innovations, engineering solutions, manufacturing processes, and scientific applications.",
    },
    {
      question:
        "What is the difference between a Utility Patent and a Design Patent?",
      answer:
        "A Utility Patent protects the functional aspects of an invention — how it works. A Design Patent protects the unique visual or ornamental appearance of an object. Both offer distinct legal protections.",
    },
    {
      question: "How long does it take to file an Indian patent?",
      answer:
        "The patent application can be filed within 2–4 weeks of finalizing the draft. Grant timelines vary — typically 2–5 years depending on examination workload and any office actions.",
    },
    {
      question: "Can a PhD student or researcher file a patent?",
      answer:
        "Absolutely. Researchers, students, academicians, and independent inventors can file patents. Patents are a strong addition to academic profiles, supporting PhD submissions, promotion applications, and immigration profiles.",
    },
    {
      question: "Does Learnify provide international patent filing support?",
      answer:
        "Yes — we provide filing support for international patents in the UK and Germany, and can guide you through PCT (Patent Cooperation Treaty) applications for broader international coverage.",
    },
  ],
};

export function PatentsPage() {
  return <ServicePageLayout data={data} />;
}
