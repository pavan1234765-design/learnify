import {
  Award,
  BookOpen,
  Clock,
  Lightbulb,
  TrendingUp,
  Users,
} from "lucide-react";
import { type ServicePageData, ServicePageLayout } from "./ServicePageLayout";

const data: ServicePageData = {
  hero: {
    badge: "Undergraduate Business",
    title: "Online BBA — Build Your Business Foundation",
    tagline:
      "A UGC-recognized undergraduate management degree designed for fresh graduates and 12th pass students ready to launch their careers in business and management.",
    ctaLabel: "Get Your Personalized Degree Plan",
  },
  whatIsIt: {
    content:
      "An Online BBA (Bachelor of Business Administration) is a 3-year undergraduate degree program that provides a comprehensive foundation in business management, entrepreneurship, and organizational leadership. Offered by UGC-recognized universities in a fully digital format, the BBA equips students with management fundamentals, business communication, and strategic thinking skills — preparing them for careers in industry or further postgraduate study.",
  },
  whoIsItFor: {
    audiences: [
      "12th pass students aspiring to management careers",
      "Fresh graduates seeking a recognized business qualification",
      "Young professionals wanting to formalize their business skills",
      "Aspiring entrepreneurs building foundational knowledge",
      "Students who cannot relocate or attend campus daily",
      "Those planning to pursue an MBA after their undergraduate degree",
    ],
  },
  benefits: {
    benefits: [
      {
        icon: <Award className="w-5 h-5 text-primary" />,
        title: "UGC-Recognized Degree",
        description:
          "Graduate with a fully recognized undergraduate degree, valid for government employment, MBA admissions, and global applications.",
      },
      {
        icon: <BookOpen className="w-5 h-5 text-primary" />,
        title: "Management Fundamentals",
        description:
          "Build strong foundations in finance, marketing, HRM, operations, and business law — covering all pillars of modern management.",
      },
      {
        icon: <TrendingUp className="w-5 h-5 text-primary" />,
        title: "Affordable Career Pathway",
        description:
          "An accessible route to management education with competitive fee structures compared to residential campus programs.",
      },
      {
        icon: <Lightbulb className="w-5 h-5 text-primary" />,
        title: "Entrepreneurship Focus",
        description:
          "Several programs include dedicated tracks on startup management, business planning, and innovation.",
      },
      {
        icon: <Clock className="w-5 h-5 text-primary" />,
        title: "Flexible Learning",
        description:
          "Study from anywhere, at any time — ideal for students juggling personal commitments or part-time work.",
      },
      {
        icon: <Users className="w-5 h-5 text-primary" />,
        title: "MBA Pathway Preparation",
        description:
          "A structured foundation that maximizes your eligibility and readiness for top MBA programs upon graduation.",
      },
    ],
  },
  process: [
    {
      step: 1,
      title: "Eligibility Verification",
      description:
        "Confirm your 12th or equivalent qualification. Our advisors assess your academic background and guide you on the right university and specialization.",
    },
    {
      step: 2,
      title: "University Shortlisting",
      description:
        "We identify NAAC-graded universities offering Online BBA programs aligned with your chosen specialization and career goals.",
    },
    {
      step: 3,
      title: "Application Support",
      description:
        "Full assistance with document preparation, online application forms, and submission before intake deadlines.",
    },
    {
      step: 4,
      title: "Admission & Enrollment",
      description:
        "Guidance on fee payment, enrollment confirmation, and university portal setup.",
    },
    {
      step: 5,
      title: "Academic Onboarding",
      description:
        "We help you understand your study schedule, assessment structure, and available academic resources to start confidently.",
    },
  ],
  faqs: [
    {
      question: "Who is eligible for an Online BBA?",
      answer:
        "Students who have completed 10+2 (or equivalent) from a recognized board are eligible. Some universities may require a minimum percentage — typically 45–50%. Our advisors confirm your specific eligibility.",
    },
    {
      question: "Is an Online BBA equivalent to a regular BBA?",
      answer:
        "Yes — degrees awarded by UGC-recognized universities hold the same value regardless of the mode of study. Your degree certificate will not differentiate between online and campus study.",
    },
    {
      question: "What are the specialization options available?",
      answer:
        "Popular specializations include Marketing, Finance, Human Resource Management, International Business, Entrepreneurship, and Banking & Insurance. Availability varies by university.",
    },
    {
      question: "How much does an Online BBA cost?",
      answer:
        "Program fees generally range from ₹40,000 to ₹1,50,000 for the full 3-year duration, making it a highly accessible option compared to private campus programs.",
    },
    {
      question: "Can I pursue an MBA after completing an Online BBA?",
      answer:
        "Absolutely. An Online BBA from a UGC-recognized university qualifies you for MBA admissions at most Indian universities, making it a strong first step toward postgraduate management education.",
    },
  ],
};

export function OnlineBBAPage() {
  return <ServicePageLayout data={data} />;
}
