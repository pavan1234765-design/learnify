import {
  Award,
  Briefcase,
  Code2,
  Globe,
  Shield,
  TrendingUp,
} from "lucide-react";
import { type ServicePageData, ServicePageLayout } from "./ServicePageLayout";

const data: ServicePageData = {
  hero: {
    badge: "Postgraduate Technology",
    title: "Online MCA — Master's in Computer Applications",
    tagline:
      "An industry-relevant MCA program from UGC/AICTE-approved universities, designed for tech professionals and graduates seeking advanced computing expertise.",
    ctaLabel: "Get Your Personalized Degree Plan",
  },
  whatIsIt: {
    content:
      "An Online MCA (Master of Computer Applications) is a 2–3 year postgraduate program covering advanced topics in software engineering, data structures, algorithms, cloud computing, cybersecurity, and artificial intelligence. Offered by UGC and AICTE-approved institutions, an Online MCA equips you with both theoretical depth and practical expertise to advance in the fast-evolving technology sector.",
  },
  whoIsItFor: {
    audiences: [
      "BCA, BSc Computer Science, and BIT graduates",
      "Working IT professionals seeking postgraduate credentials",
      "Software developers looking to advance to senior technical roles",
      "Engineers transitioning into technology from allied fields",
      "Tech professionals targeting product management or architecture roles",
      "Graduates aspiring to careers in data science, AI, or cybersecurity",
    ],
  },
  benefits: {
    benefits: [
      {
        icon: <Award className="w-5 h-5 text-primary" />,
        title: "UGC/AICTE Approved",
        description:
          "Programs from institutions approved by both UGC and AICTE — ensuring nationally and internationally recognized credentials.",
      },
      {
        icon: <Code2 className="w-5 h-5 text-primary" />,
        title: "Industry-Relevant Curriculum",
        description:
          "Updated coursework covering cloud computing, machine learning, cybersecurity, and modern software development methodologies.",
      },
      {
        icon: <Briefcase className="w-5 h-5 text-primary" />,
        title: "Career Placement Support",
        description:
          "Access to placement preparation, industry mentorship, and alumni networks that strengthen your employment outcomes.",
      },
      {
        icon: <TrendingUp className="w-5 h-5 text-primary" />,
        title: "Advanced Role Pathways",
        description:
          "Prepares you for senior developer, software architect, product manager, and research & development positions.",
      },
      {
        icon: <Globe className="w-5 h-5 text-primary" />,
        title: "Global Applicability",
        description:
          "MCA qualifications are recognized globally, supporting international job applications and further research opportunities.",
      },
      {
        icon: <Shield className="w-5 h-5 text-primary" />,
        title: "Specialization Tracks",
        description:
          "Choose specializations in Data Science, Cybersecurity, Cloud Computing, or Full-Stack Development based on your career goals.",
      },
    ],
  },
  process: [
    {
      step: 1,
      title: "Eligibility Assessment",
      description:
        "Verify your BCA, BSc, or BIT undergraduate qualification. We confirm your eligibility and recommend the right specialization track.",
    },
    {
      step: 2,
      title: "University Shortlisting",
      description:
        "We curate a list of UGC/AICTE-approved universities offering Online MCA programs matching your domain preference and career objectives.",
    },
    {
      step: 3,
      title: "Application Preparation",
      description:
        "Complete assistance with document gathering, statement of purpose guidance, online application forms, and submission.",
    },
    {
      step: 4,
      title: "Admission Confirmation",
      description:
        "We coordinate with the university to confirm your admission and guide you through fee payment and enrollment documentation.",
    },
    {
      step: 5,
      title: "Academic Orientation",
      description:
        "Navigate the university's digital learning platform, understand your study schedule, and prepare for your first semester confidently.",
    },
  ],
  faqs: [
    {
      question: "What qualifications are needed for an Online MCA?",
      answer:
        "Most universities require a BCA, BSc (Computer Science/IT/Mathematics), or BIT degree. Some may require Mathematics at 10+2 level. Our advisors confirm specific eligibility for each university.",
    },
    {
      question:
        "Is Online MCA from UGC-approved universities valid for government jobs?",
      answer:
        "Yes — an MCA from a UGC-recognized university is valid for government job applications requiring postgraduate qualifications in computer science or IT.",
    },
    {
      question: "What is the duration of an Online MCA?",
      answer:
        "Most Online MCA programs are 2 years in duration. Some universities may offer a 3-year program. Lateral entry options for BCA graduates may be available.",
    },
    {
      question: "Can I specialize in Data Science or AI through an Online MCA?",
      answer:
        "Yes — many universities offer specialization tracks in Data Science, Artificial Intelligence, Machine Learning, Cybersecurity, and Cloud Computing as part of the MCA program.",
    },
    {
      question: "How does an Online MCA help my career progression?",
      answer:
        "An MCA credential from an accredited university qualifies you for senior developer, software architect, product manager, and research roles — significantly strengthening your profile for advancement.",
    },
  ],
};

export function OnlineMCAPage() {
  return <ServicePageLayout data={data} />;
}
