import {
  Award,
  BookOpen,
  FlaskConical,
  Globe,
  Microscope,
  TrendingUp,
} from "lucide-react";
import { type ServicePageData, ServicePageLayout } from "./ServicePageLayout";

const data: ServicePageData = {
  hero: {
    badge: "Postgraduate Sciences",
    title: "Online MSc — Postgraduate Science Programs",
    tagline:
      "Research-oriented and globally recognized MSc programs for STEM graduates and aspiring researchers, delivered online from accredited Indian universities.",
    ctaLabel: "Get Your Personalized Degree Plan",
  },
  whatIsIt: {
    content:
      "An Online MSc (Master of Science) is a rigorous 2-year postgraduate program that deepens your expertise in a chosen scientific discipline — ranging from Mathematics and Physics to Chemistry, Biotechnology, Data Science, and Environmental Science. Offered by NAAC-graded universities, an Online MSc bridges academic theory with applied research, creating pathways to PhD programs, industry R&D roles, and academic careers.",
  },
  whoIsItFor: {
    audiences: [
      "BSc graduates seeking postgraduate specialization",
      "STEM professionals pursuing higher academic credentials",
      "Aspiring researchers planning to pursue a PhD",
      "Teachers and academicians strengthening their qualifications",
      "Professionals transitioning into STEM-adjacent research roles",
      "Students interested in data science, biotech, or environmental science",
    ],
  },
  benefits: {
    benefits: [
      {
        icon: <Award className="w-5 h-5 text-primary" />,
        title: "Globally Recognized",
        description:
          "MSc degrees from NAAC-graded Indian universities are recognized internationally for research, employment, and further academic study.",
      },
      {
        icon: <Microscope className="w-5 h-5 text-primary" />,
        title: "Research Opportunities",
        description:
          "Programs include dissertation and research project components that build your research portfolio for PhD and academic applications.",
      },
      {
        icon: <BookOpen className="w-5 h-5 text-primary" />,
        title: "Multiple Specializations",
        description:
          "Choose from Mathematics, Physics, Chemistry, Biotechnology, Data Science, Environmental Science, Nursing, and more.",
      },
      {
        icon: <FlaskConical className="w-5 h-5 text-primary" />,
        title: "Academic Career Pathway",
        description:
          "A structured route toward PhD admissions, academic appointments, and research fellowship programs.",
      },
      {
        icon: <Globe className="w-5 h-5 text-primary" />,
        title: "Flexible Online Delivery",
        description:
          "Study without relocating — courses are delivered online with flexible timelines suited to working professionals and researchers.",
      },
      {
        icon: <TrendingUp className="w-5 h-5 text-primary" />,
        title: "Industry R&D Alignment",
        description:
          "Curriculum aligned with industry R&D needs in pharmaceuticals, technology, environment, and STEM sectors.",
      },
    ],
  },
  process: [
    {
      step: 1,
      title: "Eligibility Verification",
      description:
        "Confirm your BSc or equivalent undergraduate qualification in the relevant discipline. We assess your background and recommend specializations aligned with your goals.",
    },
    {
      step: 2,
      title: "University Shortlisting",
      description:
        "We identify accredited universities offering the MSc specialization that best fits your academic profile and career trajectory.",
    },
    {
      step: 3,
      title: "Application Assistance",
      description:
        "End-to-end support with documentation, application forms, and submission to meet university intake deadlines.",
    },
    {
      step: 4,
      title: "Admission Confirmation",
      description:
        "We manage follow-up with the university and confirm your enrollment, including fee guidance and documentation.",
    },
    {
      step: 5,
      title: "Research Track Planning",
      description:
        "We help you plan your dissertation topic and research direction early — maximizing your academic output during the program.",
    },
  ],
  faqs: [
    {
      question: "What subjects are available for an Online MSc?",
      answer:
        "Common specializations include Mathematics, Physics, Chemistry, Biotechnology, Data Science, Environmental Science, Computer Science, Nursing, and Psychology. Availability varies by university.",
    },
    {
      question: "Is an Online MSc valid for PhD applications?",
      answer:
        "Yes — an MSc from a UGC-recognized university qualifies you for PhD admissions at most Indian and many international universities.",
    },
    {
      question: "Do Online MSc programs include practical or lab work?",
      answer:
        "Some programs may require brief on-campus practical sessions for lab-based subjects. Purely theoretical MSc programs (Mathematics, Data Science, etc.) are fully online. We clarify this during university selection.",
    },
    {
      question: "What is the fee range for an Online MSc?",
      answer:
        "Fees typically range from ₹50,000 to ₹1,80,000 for the full 2-year program, depending on the university and specialization.",
    },
    {
      question: "Can teachers and college faculty benefit from an Online MSc?",
      answer:
        "Absolutely — an MSc strengthens academic credentials, improves eligibility for NET/SET and assistant professorship applications, and supports career advancement in academia.",
    },
  ],
};

export function OnlineMScPage() {
  return <ServicePageLayout data={data} />;
}
