import { Award, FileText, Globe, Shield, Star, TrendingUp } from "lucide-react";
import { type ServicePageData, ServicePageLayout } from "./ServicePageLayout";

const data: ServicePageData = {
  hero: {
    badge: "Global Education Pathways",
    title: "Study Abroad & Global Profile Development",
    tagline:
      "International education pathways, global university admissions support, and US immigration profile development — including EB-1, EB-2 NIW, and O-1 visa strategy.",
    ctaLabel: "Book Your Free Career Discussion",
  },
  whatIsIt: {
    content:
      "Study Abroad and Global Profile Development services help students, researchers, and working professionals build credible international academic and immigration profiles. Learnify provides comprehensive support for international university admissions, US immigration petitions (EB-1, EB-2 NIW, O-1 visa), citation strategy development, global academic positioning, and end-to-end immigration profile enhancement. We combine academic advisory with strategic profile building to maximize your global opportunities.",
  },
  whoIsItFor: {
    audiences: [
      "Students targeting international university admissions",
      "Professionals planning US immigration (EB-1/EB-2/O-1)",
      "Researchers building global academic visibility",
      "PhD scholars seeking international research fellowships",
      "Academicians pursuing faculty roles at global universities",
      "Professionals wanting to elevate their citation and h-index",
    ],
  },
  benefits: {
    benefits: [
      {
        icon: <Globe className="w-5 h-5 text-primary" />,
        title: "International University Admissions",
        description:
          "Guidance for admissions to universities in the US, UK, Canada, Europe, and Australia — from program selection to application submission.",
      },
      {
        icon: <Shield className="w-5 h-5 text-primary" />,
        title: "US EB-1, EB-2 NIW & O-1 Visa",
        description:
          "End-to-end profile development for US employment-based immigration categories, including evidence curation and petition strategy.",
      },
      {
        icon: <TrendingUp className="w-5 h-5 text-primary" />,
        title: "Citation Strategy & H-Index Growth",
        description:
          "Structured strategies to increase your academic citation count and h-index — critical for extraordinary ability immigration petitions.",
      },
      {
        icon: <Star className="w-5 h-5 text-primary" />,
        title: "Global Academic Positioning",
        description:
          "Profile enhancement across Google Scholar, ResearchGate, ORCID, Scopus, and academia.edu for maximum international visibility.",
      },
      {
        icon: <FileText className="w-5 h-5 text-primary" />,
        title: "Immigration Profile Documentation",
        description:
          "Expert-assisted compilation of awards, publications, recommendation letters, media coverage, and contributions for immigration evidence packages.",
      },
      {
        icon: <Award className="w-5 h-5 text-primary" />,
        title: "Research Visibility Enhancement",
        description:
          "Strategic publication planning, conference presentation opportunities, and editorial role facilitation to build internationally recognized expertise.",
      },
    ],
  },
  process: [
    {
      step: 1,
      title: "Global Profile Assessment",
      description:
        "We conduct a detailed review of your academic background, research output, awards, publications, and career goals to define the right global pathway.",
    },
    {
      step: 2,
      title: "Program or Visa Category Selection",
      description:
        "Based on your profile, we recommend target universities, programs, or the most appropriate US visa category (EB-1A, EB-2 NIW, O-1A/B).",
    },
    {
      step: 3,
      title: "Profile Strengthening Plan",
      description:
        "We develop a customized action plan — publications, citations, awards, recommendations — to build the strongest possible application or petition.",
    },
    {
      step: 4,
      title: "Application or Petition Development",
      description:
        "End-to-end assistance with university applications or immigration petition documents — personal statements, research proposals, evidence packages, and cover letters.",
    },
    {
      step: 5,
      title: "Submission, Follow-Up & Ongoing Support",
      description:
        "We manage submission deadlines, correspond with universities or immigration advisors, and provide ongoing profile management for long-term success.",
    },
  ],
  faqs: [
    {
      question: "What is the EB-1 visa and who qualifies?",
      answer:
        "The EB-1A visa (Employment Based First Preference) is for individuals with extraordinary ability in sciences, arts, education, business, or athletics. It requires extensive evidence of sustained national or international acclaim — including awards, publications, citations, media coverage, and peer review contributions.",
    },
    {
      question: "What is EB-2 NIW and how does it differ from EB-1?",
      answer:
        "The EB-2 NIW (National Interest Waiver) is for professionals with advanced degrees whose work benefits the US national interest. It has a slightly lower threshold than EB-1A and does not require employer sponsorship — making it accessible to more academics and researchers.",
    },
    {
      question: "How does citation strategy help my immigration application?",
      answer:
        "A high citation count and h-index demonstrate the impact of your research — a key evidence criterion for EB-1, EB-2 NIW, and O-1 petitions. We provide systematic strategies to increase your citation metrics through publications, collaborations, and academic positioning.",
    },
    {
      question: "Does Learnify assist with the immigration petition itself?",
      answer:
        "Learnify provides academic profile development and evidence curation services. For the formal legal petition, we work alongside qualified immigration attorneys. We focus on building the strongest possible academic and professional evidence package.",
    },
    {
      question:
        "Can I pursue international study alongside my current job in India?",
      answer:
        "Many international universities offer online, hybrid, or part-time programs that allow you to study without leaving India. We identify programs that fit your schedule and career context.",
    },
  ],
};

export function StudyAbroadPage() {
  return <ServicePageLayout data={data} />;
}
