import {
  Award,
  BookOpen,
  FileText,
  GraduationCap,
  Lightbulb,
  Users,
} from "lucide-react";
import { type ServicePageData, ServicePageLayout } from "./ServicePageLayout";

const data: ServicePageData = {
  hero: {
    badge: "Doctoral Research",
    title: "PhD Admissions — Research Registration & Guidance",
    tagline:
      "Expert-led guidance for doctoral aspirants seeking PhD registration, research supervisor allotment, and publication support at recognized universities.",
    ctaLabel: "Book Your Free Career Discussion",
  },
  whatIsIt: {
    content:
      "A PhD (Doctor of Philosophy) is the highest academic qualification awarded for original research contributions in a chosen discipline. Learnify provides end-to-end PhD admission guidance — from identifying the right university and research supervisor to completing registration, developing your research proposal, and supporting you through publication requirements. We connect you with recognized institutions offering full-time, part-time, and industry-integrated PhD programs.",
  },
  whoIsItFor: {
    audiences: [
      "Postgraduates aspiring to pursue doctoral research",
      "Working professionals seeking a part-time PhD",
      "Academicians and college faculty targeting PhD qualifications",
      "Researchers looking for a recognized supervisor allotment",
      "Professionals wanting to strengthen research credentials",
      "Those seeking guidance on PhD entrance exams (NET/JRF/UGC)",
    ],
  },
  benefits: {
    benefits: [
      {
        icon: <Users className="w-5 h-5 text-primary" />,
        title: "Research Supervisor Allotment",
        description:
          "Expert matching with qualified research supervisors aligned with your subject area and research focus.",
      },
      {
        icon: <BookOpen className="w-5 h-5 text-primary" />,
        title: "Publication Support",
        description:
          "Guidance on Scopus-indexed and peer-reviewed journal publications — a key requirement for PhD submission at most universities.",
      },
      {
        icon: <Award className="w-5 h-5 text-primary" />,
        title: "Prestigious Recognition",
        description:
          "A PhD delivers the highest level of academic and professional recognition, opening pathways to professorships, research fellowships, and industry leadership.",
      },
      {
        icon: <FileText className="w-5 h-5 text-primary" />,
        title: "Research Proposal Development",
        description:
          "Structured guidance on developing a compelling research proposal — increasing your acceptance rate at top universities.",
      },
      {
        icon: <Lightbulb className="w-5 h-5 text-primary" />,
        title: "Part-Time & Industry PhD",
        description:
          "Access to universities offering part-time and industry-integrated PhD programs — allowing you to research alongside your career.",
      },
      {
        icon: <GraduationCap className="w-5 h-5 text-primary" />,
        title: "End-to-End Guidance",
        description:
          "From topic selection and registration to thesis writing support and viva preparation — we are with you at every step.",
      },
    ],
  },
  process: [
    {
      step: 1,
      title: "Research Interest Assessment",
      description:
        "Share your postgraduate background, research interests, and career goals. We identify the most suitable disciplines, universities, and supervisor profiles for you.",
    },
    {
      step: 2,
      title: "University Shortlisting & Supervisor Matching",
      description:
        "We shortlist recognized universities with strong research programs in your domain and facilitate supervisor introductions.",
    },
    {
      step: 3,
      title: "Research Proposal & Application Support",
      description:
        "Expert guidance on writing a strong research proposal, completing the application, and submitting required documentation.",
    },
    {
      step: 4,
      title: "Registration & Enrollment",
      description:
        "We manage correspondence with the university, confirm your PhD registration, and guide you through the formalities of enrollment.",
    },
    {
      step: 5,
      title: "Ongoing Research Support",
      description:
        "Continued advisory support on publications, thesis structuring, and milestone requirements throughout your doctoral journey.",
    },
  ],
  faqs: [
    {
      question: "What qualifications do I need to apply for a PhD?",
      answer:
        "Generally, a postgraduate degree (Master's) with at least 55% marks in the relevant subject is required. Some universities accept candidates who have cleared UGC-NET/JRF. Our advisors confirm eligibility for each institution.",
    },
    {
      question: "Can I pursue a PhD while working full-time?",
      answer:
        "Yes — many universities offer part-time and industry-integrated PhD programs. These are structured to allow working professionals to conduct research alongside their careers.",
    },
    {
      question: "Do I need to clear an entrance exam for PhD admission?",
      answer:
        "Requirements vary by university. Some universities conduct their own entrance tests, while others accept UGC-NET/JRF scores. We guide you on the best pathway based on your profile.",
    },
    {
      question: "How many publications are required for a PhD?",
      answer:
        "Requirements differ by university. Most ask for at least one Scopus-indexed or peer-reviewed publication before thesis submission. We provide research paper writing and publication support as part of our service.",
    },
    {
      question: "What is the typical duration of a PhD program?",
      answer:
        "Full-time PhD programs usually take 3–5 years. Part-time programs may extend to 5–7 years. Duration depends on the field, research scope, and university regulations.",
    },
  ],
};

export function PhDAdmissionsPage() {
  return <ServicePageLayout data={data} />;
}
