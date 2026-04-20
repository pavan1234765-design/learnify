import {
  Award,
  Briefcase,
  FileText,
  Globe,
  Shield,
  TrendingUp,
} from "lucide-react";
import { type ServicePageData, ServicePageLayout } from "./ServicePageLayout";

const data: ServicePageData = {
  hero: {
    badge: "Professional Credentials",
    title: "Experience Certificates from Universities & Industry",
    tagline:
      "Verified academic and professional experience certificates from recognized universities, startups, and industry partners — strengthening your career and immigration applications.",
    ctaLabel: "Book Your Free Career Discussion",
  },
  whatIsIt: {
    content:
      "An experience certificate is a formal document issued by a recognized organization — university, startup, or industry partner — that validates your professional or academic experience in a specific role, domain, or collaboration. Learnify facilitates experience certificates from credible institutions to support your academic portfolio, visa applications, immigration petitions, and career advancement. These certificates are structured to meet the documentation standards required by universities, employers, and immigration authorities.",
  },
  whoIsItFor: {
    audiences: [
      "Professionals building academic portfolios for higher studies",
      "Individuals pursuing US immigration (EB-1, EB-2, O-1 visa)",
      "Researchers documenting academic and research collaborations",
      "Freelancers and consultants seeking credential documentation",
      "Academics formalizing teaching, research, or advisory roles",
      "Startup founders and professionals seeking institutional validation",
    ],
  },
  benefits: {
    benefits: [
      {
        icon: <Award className="w-5 h-5 text-primary" />,
        title: "Strengthens Academic Portfolio",
        description:
          "Verified experience certificates from recognized institutions significantly enhance your academic CV and research profile.",
      },
      {
        icon: <Globe className="w-5 h-5 text-primary" />,
        title: "Visa & Immigration Support",
        description:
          "Structured to support US EB-1, EB-2, and O-1 visa applications where documented experience forms a core element of the petition.",
      },
      {
        icon: <Briefcase className="w-5 h-5 text-primary" />,
        title: "Multiple Source Options",
        description:
          "Certificates available from universities, startups, and industry organizations — providing diverse institutional backing.",
      },
      {
        icon: <FileText className="w-5 h-5 text-primary" />,
        title: "Professionally Formatted",
        description:
          "All certificates are formatted to official standards, with appropriate designations, duration, and scope of work clearly documented.",
      },
      {
        icon: <Shield className="w-5 h-5 text-primary" />,
        title: "Credibility Assurance",
        description:
          "We work only with credible, legitimate institutions — ensuring your certificates withstand scrutiny from universities, employers, and immigration authorities.",
      },
      {
        icon: <TrendingUp className="w-5 h-5 text-primary" />,
        title: "Career Differentiation",
        description:
          "Experience backed by institutional certificates gives your profile a verifiable edge in competitive academic and professional selections.",
      },
    ],
  },
  process: [
    {
      step: 1,
      title: "Profile & Purpose Assessment",
      description:
        "We understand your professional background, the type of experience to be documented, and the specific purpose — job application, visa, academic profile, or higher studies.",
    },
    {
      step: 2,
      title: "Issuing Source Identification",
      description:
        "Based on your domain and requirements, we identify the most appropriate institution — university, startup, or industry partner — to issue the certificate.",
    },
    {
      step: 3,
      title: "Documentation Preparation",
      description:
        "We prepare supporting documentation detailing your role, contributions, and collaboration scope to substantiate the experience certificate.",
    },
    {
      step: 4,
      title: "Certificate Drafting & Formatting",
      description:
        "The certificate is drafted to professional and institutional standards, including designation, duration, and description of experience.",
    },
    {
      step: 5,
      title: "Issuance & Delivery",
      description:
        "The signed, official experience certificate is issued on institutional letterhead and delivered in both physical and digital formats.",
    },
  ],
  faqs: [
    {
      question:
        "What kinds of experience certificates can Learnify facilitate?",
      answer:
        "We facilitate academic experience certificates (teaching, research, advisory roles), industry experience certificates (consultancy, projects), and startup experience certificates (advisory, product development, operations).",
    },
    {
      question:
        "Are these certificates accepted by universities and visa authorities?",
      answer:
        "Yes — certificates issued by recognized universities, legitimate startups, and credible industry organizations are accepted by most universities and visa/immigration authorities.",
    },
    {
      question: "How long does it take to obtain an experience certificate?",
      answer:
        "The typical processing time is 7–14 business days from the documentation preparation stage, depending on the issuing institution's process.",
    },
    {
      question: "Can a freelancer or consultant get an experience certificate?",
      answer:
        "Yes — independent consultants and freelancers who have undertaken projects for organizations or academia can obtain experience certificates documenting their specific engagements.",
    },
    {
      question: "Are experience certificates useful for US visa applications?",
      answer:
        "Absolutely. Experience certificates from recognized institutions form a critical component of EB-1, EB-2 NIW, and O-1 visa petitions, providing documented evidence of expertise and contribution.",
    },
  ],
};

export function ExperienceCertificatesPage() {
  return <ServicePageLayout data={data} />;
}
