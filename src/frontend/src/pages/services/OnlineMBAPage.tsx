import {
  Award,
  BookOpen,
  Clock,
  Globe,
  GraduationCap,
  TrendingUp,
} from "lucide-react";
import { type ServicePageData, ServicePageLayout } from "./ServicePageLayout";

const data: ServicePageData = {
  hero: {
    badge: "Postgraduate Management",
    title: "Online MBA from UGC-Recognized Universities",
    tagline:
      "Advance your career with an industry-relevant MBA delivered online — designed for working professionals and ambitious graduates seeking leadership roles.",
    ctaLabel: "Get Your Personalized Degree Plan",
  },
  whatIsIt: {
    content:
      "An Online MBA (Master of Business Administration) is a fully accredited postgraduate management degree from UGC-recognized universities, delivered in a flexible digital format. The program covers core management disciplines — finance, marketing, strategy, operations, and leadership — and is structured to fit the schedules of working professionals without requiring you to take a career break.",
  },
  whoIsItFor: {
    audiences: [
      "Working professionals seeking career advancement",
      "Graduates looking to transition into management roles",
      "Entrepreneurs and business owners building strategic skills",
      "Mid-career professionals targeting senior leadership",
      "Graduates seeking an ROI-driven postgraduate qualification",
      "Professionals in any sector looking for flexible study",
    ],
  },
  benefits: {
    benefits: [
      {
        icon: <Award className="w-5 h-5 text-primary" />,
        title: "NAAC-Graded Institutions",
        description:
          "Programs sourced exclusively from NAAC A and A+ graded universities with verified academic standing.",
      },
      {
        icon: <Clock className="w-5 h-5 text-primary" />,
        title: "Flexible Online Mode",
        description:
          "Study at your own pace without disrupting your career — live sessions, recorded lectures, and weekend batches available.",
      },
      {
        icon: <TrendingUp className="w-5 h-5 text-primary" />,
        title: "Career Advancement",
        description:
          "Structured to open pathways to senior management, CXO roles, and entrepreneurial ventures.",
      },
      {
        icon: <Globe className="w-5 h-5 text-primary" />,
        title: "ROI-Driven Selection",
        description:
          "We match you to programs based on your career goals, not enrollment targets — maximizing return on your education investment.",
      },
      {
        icon: <BookOpen className="w-5 h-5 text-primary" />,
        title: "Industry-Aligned Curriculum",
        description:
          "Programs updated with current market demands, covering emerging domains like business analytics, digital marketing, and global strategy.",
      },
      {
        icon: <GraduationCap className="w-5 h-5 text-primary" />,
        title: "UGC Recognition",
        description:
          "Degrees carry full UGC recognition, making them valid for government jobs, further studies, and global applications.",
      },
    ],
  },
  process: [
    {
      step: 1,
      title: "Eligibility Assessment",
      description:
        "Share your academic background, work experience, and career goals. Our advisors confirm your eligibility and identify the best-fit programs.",
    },
    {
      step: 2,
      title: "University Shortlisting",
      description:
        "We present a curated list of NAAC-graded universities based on your specialization preference, fee range, and career outcome expectations.",
    },
    {
      step: 3,
      title: "Application Guidance",
      description:
        "Receive step-by-step assistance with the application — document preparation, form submission, and deadline management.",
    },
    {
      step: 4,
      title: "Admission Confirmation",
      description:
        "We follow up with the university on your behalf and confirm your admission, including fee payment guidance and enrollment documentation.",
    },
    {
      step: 5,
      title: "Orientation & Onboarding",
      description:
        "We help you navigate the university's learning platform, understand your course schedule, and set up for a successful start.",
    },
  ],
  faqs: [
    {
      question: "Is an online MBA from a UGC-recognized university valid?",
      answer:
        "Yes — degrees from UGC-recognized universities are fully valid for government jobs, higher studies (PhD), and international applications. The mode of delivery (online) does not affect the degree's validity.",
    },
    {
      question: "What is the typical duration of an Online MBA?",
      answer:
        "Most Online MBA programs are 2 years in duration (4 semesters). Some universities offer accelerated formats for experienced professionals.",
    },
    {
      question: "Do I need to attend campus for exams or classes?",
      answer:
        "Many universities offer fully online programs — including online exams and digital assessments. Some may require brief campus visits for exams or induction programs. We clarify this during the university selection process.",
    },
    {
      question: "What is the average fee range for an Online MBA?",
      answer:
        "Online MBA fees from UGC-recognized universities typically range from ₹60,000 to ₹2,50,000 for the full program. We help you identify programs that deliver the best value for your investment.",
    },
    {
      question: "Can I pursue an MBA while working full-time?",
      answer:
        "Absolutely — Online MBA programs are designed specifically for working professionals. Classes and assessments are structured around flexible schedules, making it practical to study alongside a full-time career.",
    },
  ],
};

export function OnlineMBAPage() {
  return <ServicePageLayout data={data} />;
}
