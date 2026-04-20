import {
  Award,
  BookOpen,
  FileText,
  Globe,
  TrendingUp,
  Users,
} from "lucide-react";
import { type ServicePageData, ServicePageLayout } from "./ServicePageLayout";

const data: ServicePageData = {
  hero: {
    badge: "Academic Publishing",
    title: "Book Chapters & International Publishing",
    tagline:
      "Publish your research as book chapters in internationally recognized edited volumes — with Indian and US ISBN — through Springer, Elsevier, Taylor & Francis, and more.",
    ctaLabel: "Book Your Free Career Discussion",
  },
  whatIsIt: {
    content:
      "Book chapter publishing allows researchers and academics to contribute original, peer-reviewed content to internationally recognized edited volumes with assigned ISBN numbers. Learnify connects academics and professionals with publishers including Springer, Elsevier, Taylor & Francis, MDPI, and other reputable academic houses — facilitating contributions to both Indian and internationally ISBN-registered volumes. Published book chapters strengthen your academic profile for PhD applications, promotion reviews, academic visa applications, and immigration profiling.",
  },
  whoIsItFor: {
    audiences: [
      "PhD scholars requiring publications for thesis submission",
      "Academicians targeting promotion and appraisal milestones",
      "Researchers building Scopus-indexed publication records",
      "Professionals seeking publications for visa or immigration profiles",
      "Faculty members seeking editorial and authorship recognition",
      "Students building academic credentials ahead of higher study",
    ],
  },
  benefits: {
    benefits: [
      {
        icon: <BookOpen className="w-5 h-5 text-primary" />,
        title: "Scopus-Indexed Publishers",
        description:
          "Access to publication opportunities with Scopus-indexed publishers including Springer, Elsevier, Taylor & Francis, and MDPI for maximum academic visibility.",
      },
      {
        icon: <Globe className="w-5 h-5 text-primary" />,
        title: "Indian & US ISBN",
        description:
          "Chapters published in volumes registered with both Indian ISBN and US ISBN authorities, ensuring global recognition and traceability.",
      },
      {
        icon: <Award className="w-5 h-5 text-primary" />,
        title: "Edited Volume Contributions",
        description:
          "Contribute to curated edited volumes on emerging and established academic themes — with editorial board oversight ensuring quality and credibility.",
      },
      {
        icon: <FileText className="w-5 h-5 text-primary" />,
        title: "Manuscript Development Support",
        description:
          "Expert assistance with chapter writing, structuring, formatting, and language editing to meet publisher standards.",
      },
      {
        icon: <TrendingUp className="w-5 h-5 text-primary" />,
        title: "Career Profile Strengthening",
        description:
          "Published book chapters significantly improve your academic CV, patent application profiles, and immigration petitions.",
      },
      {
        icon: <Users className="w-5 h-5 text-primary" />,
        title: "Multiple Authorship Options",
        description:
          "Opportunities for single, dual, and multi-authored contributions — with flexibility to align with your research collaborations.",
      },
    ],
  },
  process: [
    {
      step: 1,
      title: "Research Area Assessment",
      description:
        "We discuss your research domain, expertise, and publication goals to identify the most relevant book volumes and publishers.",
    },
    {
      step: 2,
      title: "Chapter Topic Selection",
      description:
        "Based on current editorial themes and your subject area, we shortlist suitable chapter topics and match you with the right edited volume.",
    },
    {
      step: 3,
      title: "Manuscript Development",
      description:
        "Our editorial team provides structured support for chapter writing — from outline development to final draft with proper citation and formatting.",
    },
    {
      step: 4,
      title: "Peer Review & Acceptance",
      description:
        "We manage submission to the publisher and support you through the peer review and revision process until acceptance.",
    },
    {
      step: 5,
      title: "Publication & ISBN Assignment",
      description:
        "Upon acceptance, the chapter is published in the edited volume with assigned ISBN, and you receive your authorship certificate and published copy.",
    },
  ],
  faqs: [
    {
      question:
        "Are book chapter publications counted in academic evaluations?",
      answer:
        "Yes — book chapters in ISBN-registered volumes published by recognized academic publishers are accepted in many university promotion and appraisal criteria, visa applications, and research profiles.",
    },
    {
      question: "Which publishers do you work with?",
      answer:
        "We work with internationally recognized publishers including Springer, Elsevier, Taylor & Francis, Wiley, MDPI, IGI Global, and others — providing diverse options based on your domain and requirements.",
    },
    {
      question: "How long does it take to publish a book chapter?",
      answer:
        "Timelines vary by publisher and volume, but typically range from 4 to 12 weeks from manuscript submission to final publication. We provide realistic timelines during consultation.",
    },
    {
      question: "Do I need to be a PhD holder to contribute a book chapter?",
      answer:
        "No — book chapters are open to Masters graduates, PhD scholars, faculty, and professionals with expertise in the relevant subject area. Qualification requirements are set by the editorial board.",
    },
    {
      question: "Will my chapter be peer-reviewed?",
      answer:
        "Yes — chapters submitted to reputable edited volumes undergo peer review by subject experts before acceptance and publication, ensuring academic credibility.",
    },
  ],
};

export function BookChaptersPage() {
  return <ServicePageLayout data={data} />;
}
