import {
  Award,
  FileText,
  Globe,
  Shield,
  TrendingUp,
  Users,
} from "lucide-react";
import { type ServicePageData, ServicePageLayout } from "./ServicePageLayout";

const data: ServicePageData = {
  hero: {
    badge: "Academic Credentials",
    title: "Recommendation Letters from Universities & Industry",
    tagline:
      "Professionally structured recommendation letters from universities, startups, and industry partners — designed to strengthen your academic, career, and visa applications.",
    ctaLabel: "Book Your Free Career Discussion",
  },
  whatIsIt: {
    content:
      "A recommendation letter is a formal endorsement from a credible academic institution, industry organization, or established startup, attesting to your competencies, contributions, and professional standing. Learnify facilitates recommendation letters from recognized universities, reputable industry partners, and startups — structured to meet the specific requirements of PhD applications, academic promotions, job applications, visa petitions, and immigration processes.",
  },
  whoIsItFor: {
    audiences: [
      "PhD applicants requiring faculty or institutional recommendations",
      "Professionals applying for academic positions or promotions",
      "Researchers building profiles for study abroad applications",
      "Individuals pursuing US immigration (EB-1, EB-2, O-1 visa)",
      "Academics seeking editorial or reviewer role endorsements",
      "Professionals strengthening their global career portfolios",
    ],
  },
  benefits: {
    benefits: [
      {
        icon: <Award className="w-5 h-5 text-primary" />,
        title: "Boosts Academic Profile",
        description:
          "Well-structured recommendation letters from recognized institutions significantly enhance your academic applications and credibility.",
      },
      {
        icon: <Globe className="w-5 h-5 text-primary" />,
        title: "Global Application Support",
        description:
          "Designed for international university applications, immigration petitions, and global academic programs.",
      },
      {
        icon: <FileText className="w-5 h-5 text-primary" />,
        title: "Multiple Source Options",
        description:
          "Letters available from universities, industry organizations, and startups — providing diverse endorsement sources for different application types.",
      },
      {
        icon: <TrendingUp className="w-5 h-5 text-primary" />,
        title: "Career Advancement Support",
        description:
          "Strong recommendations from credible sources meaningfully differentiate your profile in competitive job markets and academic selections.",
      },
      {
        icon: <Shield className="w-5 h-5 text-primary" />,
        title: "Visa & Immigration Strength",
        description:
          "Critical for US EB-1, EB-2 NIW, and O-1 visa applications where peer and expert endorsements form a core component of the petition.",
      },
      {
        icon: <Users className="w-5 h-5 text-primary" />,
        title: "Professionally Drafted",
        description:
          "Letters are drafted by our academic writing specialists to meet the exacting standards required by universities, visa offices, and employers.",
      },
    ],
  },
  process: [
    {
      step: 1,
      title: "Purpose & Profile Assessment",
      description:
        "We understand the specific purpose of your recommendation letter — PhD application, job application, visa petition, or academic role — and review your background.",
    },
    {
      step: 2,
      title: "Source Selection",
      description:
        "Based on your application requirements, we identify and coordinate with the most appropriate issuing source — university faculty, industry partner, or startup.",
    },
    {
      step: 3,
      title: "Content Development",
      description:
        "Our team drafts a professionally structured recommendation letter aligned with the application requirements, your achievements, and the endorser's position.",
    },
    {
      step: 4,
      title: "Review & Finalization",
      description:
        "We share the draft with you for review, incorporate your feedback, and finalize the letter in the appropriate format and on official letterhead.",
    },
    {
      step: 5,
      title: "Delivery & Authentication",
      description:
        "The completed, signed recommendation letter is delivered in physical and/or digital format as required by your application.",
    },
  ],
  faqs: [
    {
      question:
        "Can a recommendation letter be obtained from a university if I'm not enrolled there?",
      answer:
        "Yes — universities can provide letters based on academic collaborations, research associations, or professional engagements. Learnify facilitates these arrangements with recognized institutions.",
    },
    {
      question:
        "How many recommendation letters do I typically need for a PhD application?",
      answer:
        "Most PhD programs require 2–3 recommendation letters from academic referees. Some international programs may require more. We help you plan and obtain the required number of letters.",
    },
    {
      question:
        "Are these letters accepted for US visa applications (EB-1, EB-2, O-1)?",
      answer:
        "Yes — letters from recognized universities, research institutions, and established organizations carry weight in US immigration petitions. We draft them to meet USCIS evidentiary standards.",
    },
    {
      question: "How long does it take to get a recommendation letter?",
      answer:
        "Typically 5–10 business days from the assessment and content development process. Urgent requests can often be accommodated — discuss your timeline during consultation.",
    },
    {
      question:
        "Can I get a recommendation letter for industry job applications?",
      answer:
        "Absolutely — industry and startup-sourced recommendation letters are particularly effective for technology, management, and research sector job applications.",
    },
  ],
};

export function RecommendationLettersPage() {
  return <ServicePageLayout data={data} />;
}
