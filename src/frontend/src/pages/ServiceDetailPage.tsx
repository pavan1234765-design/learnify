import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import {
  Award,
  BookOpen,
  CheckCircle2,
  Clock,
  Globe,
  GraduationCap,
  TrendingUp,
} from "lucide-react";
import { ArrowLeft } from "lucide-react";
import { BookChaptersPage } from "./services/BookChaptersPage";
import { ExperienceCertificatesPage } from "./services/ExperienceCertificatesPage";
import { HonoraryDoctoratePage } from "./services/HonoraryDoctoratePage";
import { OnlineBBAPage } from "./services/OnlineBBAPage";
import { OnlineMBAPage } from "./services/OnlineMBAPage";
import { OnlineMCAPage } from "./services/OnlineMCAPage";
import { OnlineMScPage } from "./services/OnlineMScPage";
import { PatentsPage } from "./services/PatentsPage";
import { PhDAdmissionsPage } from "./services/PhDAdmissionsPage";
import { PostDoctoratePage } from "./services/PostDoctoratePage";
import { RecommendationLettersPage } from "./services/RecommendationLettersPage";
import { ResearchPublicationsPage } from "./services/ResearchPublicationsPage";
import {
  type ServicePageData,
  ServicePageLayout,
} from "./services/ServicePageLayout";
import { StudyAbroadPage } from "./services/StudyAbroadPage";

// Placeholder pages for online-ug and online-pg
const onlineUgData: ServicePageData = {
  hero: {
    badge: "Undergraduate Programs",
    title: "Online UG Programs from UGC-Recognized Universities",
    tagline:
      "Start your academic journey with a UGC-recognized Bachelor's degree delivered online — BBA, BCA, BA, BCom, and 50+ more programs for school leavers and working professionals.",
    ctaLabel: "Explore UG Programs",
  },
  whatIsIt: {
    content:
      "Online UG (Undergraduate) programs are fully accredited Bachelor's degrees from UGC-recognized Indian universities, offered in a flexible digital format. Programs span Commerce & Management (BBA, BCom), Technology (BCA), Arts & Humanities (BA), Science (BSc), and many more disciplines — designed for freshers and working professionals seeking a recognized degree.",
  },
  whoIsItFor: {
    audiences: [
      "12th pass students seeking flexible university education",
      "Working professionals who couldn't complete their degree",
      "Students preferring online study alongside part-time work",
      "Those seeking recognized degrees without campus relocation",
      "Career changers looking for a formal UG qualification",
      "Students from any stream — Commerce, Science, Arts",
    ],
  },
  benefits: {
    benefits: [
      {
        icon: <Award className="w-5 h-5 text-primary" />,
        title: "UGC Recognized Degrees",
        description:
          "All programs from UGC-recognized and NAAC-graded universities — valid for government jobs and higher studies.",
      },
      {
        icon: <Clock className="w-5 h-5 text-primary" />,
        title: "Flexible Online Learning",
        description:
          "Study at your own pace — live classes, recorded sessions, and digital assessments.",
      },
      {
        icon: <TrendingUp className="w-5 h-5 text-primary" />,
        title: "50+ Programs Available",
        description:
          "BBA, BCA, BA, BCom, BSc, BSW, Journalism, and more — across 15 disciplines.",
      },
      {
        icon: <Globe className="w-5 h-5 text-primary" />,
        title: "ROI-Focused Selection",
        description:
          "We match you to programs based on your career goals and budget — not enrollment targets.",
      },
      {
        icon: <BookOpen className="w-5 h-5 text-primary" />,
        title: "Industry-Aligned Curriculum",
        description:
          "Programs updated with current market demands to ensure career-ready graduates.",
      },
      {
        icon: <GraduationCap className="w-5 h-5 text-primary" />,
        title: "Valid for Further Studies",
        description:
          "UG degree holders can pursue PG (MBA, MCA, MA) or even PhD programs.",
      },
    ],
  },
  process: [
    {
      step: 1,
      title: "Eligibility Check",
      description:
        "Share your 12th marks, stream, and career goals. We confirm eligibility and identify best-fit programs.",
    },
    {
      step: 2,
      title: "Program Shortlisting",
      description:
        "We present a curated list of UGC-recognized universities based on your preference, fee range, and career goals.",
    },
    {
      step: 3,
      title: "Application Support",
      description:
        "Step-by-step assistance with document preparation, form submission, and deadline management.",
    },
    {
      step: 4,
      title: "Admission Confirmation",
      description:
        "We follow up with the university and confirm your enrollment with fee payment guidance.",
    },
    {
      step: 5,
      title: "Orientation",
      description:
        "We help you navigate the learning platform and set up for a successful academic start.",
    },
  ],
  faqs: [
    {
      question: "Are online UG degrees valid?",
      answer:
        "Yes — all programs we recommend are from UGC-recognized universities. The degree is fully valid for government jobs, further studies, and private employment.",
    },
    {
      question: "What is the typical duration?",
      answer:
        "Most UG programs are 3 years (6 semesters). Honours/Research programs are 4 years.",
    },
    {
      question: "What is the fee range?",
      answer:
        "Online UG programs typically range from ₹30,000 to ₹1,50,000 for the full program depending on the university and discipline.",
    },
    {
      question: "Can I study while working?",
      answer:
        "Absolutely — online UG programs are designed for flexible study without disrupting work or other commitments.",
    },
    {
      question: "Which programs are most popular?",
      answer:
        "BBA, BCA, and BCom are among the most popular due to their strong career outcomes and versatile applications.",
    },
  ],
};

const onlinePgData: ServicePageData = {
  hero: {
    badge: "Postgraduate Programs",
    title: "Online PG Programs from UGC-Recognized Universities",
    tagline:
      "Advance your career with a UGC-recognized Master's degree delivered online — MBA, MCA, MSc, MA, MCom, and 40+ more programs designed for working professionals and graduates.",
    ctaLabel: "Explore PG Programs",
  },
  whatIsIt: {
    content:
      "Online PG (Postgraduate) programs are fully accredited Master's degrees from UGC-recognized Indian universities, delivered flexibly online. Programs include MBA, MCA, MSc, MA, MCom, MSW, and many more — designed for graduates looking to advance their careers, switch domains, or develop specialized expertise without taking a career break.",
  },
  whoIsItFor: {
    audiences: [
      "Graduates looking to advance their careers",
      "Working professionals seeking higher qualifications",
      "Professionals transitioning to new domains",
      "Mid-career professionals targeting senior roles",
      "Entrepreneurs building strategic skills",
      "Graduates seeking specialized expertise",
    ],
  },
  benefits: {
    benefits: [
      {
        icon: <Award className="w-5 h-5 text-primary" />,
        title: "NAAC-Graded Universities",
        description:
          "Programs exclusively from NAAC A and A+ graded universities with strong academic standing.",
      },
      {
        icon: <Clock className="w-5 h-5 text-primary" />,
        title: "Flexible Schedules",
        description:
          "Study without disrupting your career — weekend batches, live and recorded sessions.",
      },
      {
        icon: <TrendingUp className="w-5 h-5 text-primary" />,
        title: "40+ PG Programs",
        description:
          "MBA, MCA, MSc, MA, MCom, MSW, LL.M., and more across all disciplines.",
      },
      {
        icon: <Globe className="w-5 h-5 text-primary" />,
        title: "Career Advancement",
        description:
          "Open pathways to senior management, CXO roles, and specialized academic careers.",
      },
      {
        icon: <BookOpen className="w-5 h-5 text-primary" />,
        title: "Multiple Specializations",
        description:
          "MBA alone offers 30+ specializations — from Finance and Marketing to Healthcare and Aviation.",
      },
      {
        icon: <CheckCircle2 className="w-5 h-5 text-primary" />,
        title: "UGC Recognition",
        description:
          "Degrees valid for government jobs, PhD eligibility, and global applications.",
      },
    ],
  },
  process: [
    {
      step: 1,
      title: "Profile Assessment",
      description:
        "Share your UG qualification, work experience, and career goals. We identify the right PG programs.",
    },
    {
      step: 2,
      title: "University Shortlisting",
      description:
        "We curate NAAC-graded universities based on your specialization, fee preference, and outcome expectations.",
    },
    {
      step: 3,
      title: "Application Guidance",
      description:
        "Step-by-step assistance with application forms, documents, and deadline management.",
    },
    {
      step: 4,
      title: "Admission Confirmation",
      description:
        "We follow up with the university and confirm your enrollment including fee payment support.",
    },
    {
      step: 5,
      title: "Onboarding Support",
      description:
        "We help you navigate the learning platform and kickstart your PG journey smoothly.",
    },
  ],
  faqs: [
    {
      question: "Are online PG degrees valid?",
      answer:
        "Yes — programs from UGC-recognized universities carry full validity for government jobs, PhD eligibility, and private employment.",
    },
    {
      question: "What is the typical duration?",
      answer:
        "Most PG programs are 2 years (4 semesters). Some offer lateral entry in 1 year for eligible candidates.",
    },
    {
      question: "What is the fee range?",
      answer:
        "Online PG programs typically range from ₹50,000 to ₹3,00,000 for the full program depending on university and specialization.",
    },
    {
      question: "Can I pursue PG while working?",
      answer:
        "Yes — online PG programs are specifically designed for working professionals with flexible schedules.",
    },
    {
      question: "Which PG programs are most popular?",
      answer:
        "MBA (all specializations), MCA, MSc, and MA are among the most sought-after for career growth and salary advancement.",
    },
  ],
};

const SERVICE_MAP: Record<string, React.ComponentType> = {
  "online-mba": OnlineMBAPage,
  "online-bba": OnlineBBAPage,
  "online-mca": OnlineMCAPage,
  "online-msc": OnlineMScPage,
  "phd-admissions": PhDAdmissionsPage,
  "post-doctorate": PostDoctoratePage,
  patents: PatentsPage,
  "honorary-doctorate": HonoraryDoctoratePage,
  "book-chapters": BookChaptersPage,
  "recommendation-letters": RecommendationLettersPage,
  "experience-certificates": ExperienceCertificatesPage,
  "study-abroad": StudyAbroadPage,
  "research-publications": ResearchPublicationsPage,
};

function OnlineUGPage() {
  return <ServicePageLayout data={onlineUgData} />;
}

function OnlinePGPage() {
  return <ServicePageLayout data={onlinePgData} />;
}

function ServiceNotFound({ slug }: { slug: string }) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 pt-16 lg:pt-20 flex items-center justify-center">
        <div className="text-center px-4 py-24">
          <h1 className="font-display text-2xl font-bold text-foreground mb-3">
            Service Not Found
          </h1>
          <p className="text-muted-foreground font-body mb-8">
            The service{" "}
            <span className="font-medium text-foreground">"{slug}"</span> could
            not be found.
          </p>
          <Button
            onClick={() => {
              window.location.hash = "";
              setTimeout(
                () => window.scrollTo({ top: 0, behavior: "smooth" }),
                50,
              );
            }}
            variant="outline"
            className="font-body font-semibold"
            data-ocid="service-detail.back_button"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export function ServiceDetailPage({ slug }: { slug: string }) {
  if (slug === "online-ug") return <OnlineUGPage />;
  if (slug === "online-pg") return <OnlinePGPage />;
  const Page = SERVICE_MAP[slug];
  if (!Page) return <ServiceNotFound slug={slug} />;
  return <Page />;
}
