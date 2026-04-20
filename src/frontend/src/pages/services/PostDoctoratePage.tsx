import {
  Award,
  BookOpen,
  Globe,
  GraduationCap,
  Star,
  Users,
} from "lucide-react";
import { type ServicePageData, ServicePageLayout } from "./ServicePageLayout";

const data: ServicePageData = {
  hero: {
    badge: "Advanced Research Credentials",
    title: "Post-Doctorate Programs — D.Litt., D.Sc., and PDF",
    tagline:
      "For senior researchers and academics seeking the pinnacle of academic recognition through D.Litt., D.Sc., and Post-Doctoral Fellowship programs.",
    ctaLabel: "Book Your Free Career Discussion",
  },
  whatIsIt: {
    content:
      "Post-Doctoral programs represent the highest tier of academic achievement beyond a PhD. Learnify facilitates access to D.Litt. (Doctor of Letters), D.Sc. (Doctor of Science), and Post-Doctoral Fellowship (PDF) programs at recognized universities. These credentials establish global academic authority, unlock senior research and faculty positions, and contribute to original knowledge at the highest scholarly level.",
  },
  whoIsItFor: {
    audiences: [
      "PhD holders seeking advanced academic credentials",
      "Senior researchers and faculty members",
      "Academicians targeting professor or dean-level appointments",
      "Professionals building international academic profiles",
      "Scientists and researchers with substantial publication records",
      "Academics pursuing global recognition and career elevation",
    ],
  },
  benefits: {
    benefits: [
      {
        icon: <Award className="w-5 h-5 text-primary" />,
        title: "Peak Academic Recognition",
        description:
          "D.Litt. and D.Sc. represent the highest academic honors — recognized globally as symbols of exceptional scholarly contribution.",
      },
      {
        icon: <Globe className="w-5 h-5 text-primary" />,
        title: "Global Credibility",
        description:
          "Post-doctoral credentials strengthen your international academic profile, opening doors to global research collaborations and faculty appointments.",
      },
      {
        icon: <BookOpen className="w-5 h-5 text-primary" />,
        title: "Research Publication Support",
        description:
          "Comprehensive assistance with journal article preparation, Scopus-indexed submissions, and book authorship to meet program requirements.",
      },
      {
        icon: <Star className="w-5 h-5 text-primary" />,
        title: "Senior Faculty Eligibility",
        description:
          "Advance your eligibility for Professor, Associate Professor, Dean, Director, and Research Fellow appointments at premier institutions.",
      },
      {
        icon: <Users className="w-5 h-5 text-primary" />,
        title: "Research Network Access",
        description:
          "Connect with leading academic networks, international editorial boards, and conference roles that elevate your scholarly standing.",
      },
      {
        icon: <GraduationCap className="w-5 h-5 text-primary" />,
        title: "Structured Fellowship Guidance",
        description:
          "Expert guidance through the Post-Doctoral Fellowship application process — including research proposal development and supervisor coordination.",
      },
    ],
  },
  process: [
    {
      step: 1,
      title: "Academic Profile Review",
      description:
        "We evaluate your PhD, publications, teaching/research experience, and career goals to identify the most appropriate post-doctoral pathway.",
    },
    {
      step: 2,
      title: "Program Selection",
      description:
        "Based on your profile and objectives, we recommend D.Litt., D.Sc., or PDF programs at suitable recognized institutions.",
    },
    {
      step: 3,
      title: "Research Portfolio Development",
      description:
        "We assist in strengthening your research portfolio — publications, citations, and h-index — to meet program entry requirements.",
    },
    {
      step: 4,
      title: "Application & Supervisor Coordination",
      description:
        "Full support with the application process, research proposal, and facilitating introductions to research supervisors or fellowship committees.",
    },
    {
      step: 5,
      title: "Admission Confirmation & Ongoing Support",
      description:
        "We confirm your enrollment and provide continued support through publication requirements, milestones, and submission guidance.",
    },
  ],
  faqs: [
    {
      question: "What is the difference between D.Litt. and D.Sc.?",
      answer:
        "D.Litt. (Doctor of Letters) is typically awarded for scholarly contributions in humanities, social sciences, and management. D.Sc. (Doctor of Science) is awarded for significant contributions in natural sciences, engineering, and technology. Both are higher than a PhD.",
    },
    {
      question: "Who is eligible for a Post-Doctoral Fellowship (PDF)?",
      answer:
        "PhD holders within a few years of completing their doctorate are typically eligible for PDF programs. Eligibility depends on research output, publications, and the specific university's requirements. Our advisors assess your profile.",
    },
    {
      question: "Are D.Litt. and D.Sc. degrees globally recognized?",
      answer:
        "Yes — D.Litt. and D.Sc. are internationally recognized post-doctoral credentials that carry significant weight in academic and research communities globally.",
    },
    {
      question: "How many publications are needed for a D.Litt. or D.Sc.?",
      answer:
        "Requirements vary by institution. Typically, candidates need a substantial body of peer-reviewed publications, often including Scopus-indexed or international journal articles. We help you build and meet these requirements.",
    },
    {
      question: "Can these qualifications help me become a Professor?",
      answer:
        "Absolutely. D.Litt. and D.Sc. credentials significantly enhance eligibility for Professor and senior faculty appointments at Indian and international universities, often exceeding standard NET/PhD requirements.",
    },
  ],
};

export function PostDoctoratePage() {
  return <ServicePageLayout data={data} />;
}
