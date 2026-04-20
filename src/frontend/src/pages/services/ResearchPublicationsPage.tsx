import {
  Award,
  BookOpen,
  FileText,
  Globe,
  Microscope,
  TrendingUp,
} from "lucide-react";
import { type ServicePageData, ServicePageLayout } from "./ServicePageLayout";

const data: ServicePageData = {
  hero: {
    badge: "Research & Publications",
    title: "Research Publications — Get Published in Top-Ranked Journals",
    tagline:
      "Expert-led research paper writing, manuscript development, and publication support in Scopus, SCI, IEEE, Elsevier, Springer, MDPI, and Taylor & Francis indexed journals.",
    ctaLabel: "Book Your Free Career Discussion",
  },
  whatIsIt: {
    content:
      "Learnify's Research Publications service provides end-to-end support for researchers, academicians, and PhD scholars seeking to publish their work in prestigious international journals. From identifying the right journal and writing the manuscript to editing, formatting, and managing the submission and review process — our experts guide you every step of the way. We also support international book publishing (Indian and US ISBN) and book chapters in edited volumes.",
  },
  whoIsItFor: {
    audiences: [
      "PhD scholars and doctoral researchers seeking indexed journal publications",
      "College teachers and professors building research portfolios for promotions",
      "Academicians requiring Scopus or SCI publications for career advancement",
      "Professionals pursuing Post-Doctoral programs or D.Sc./D.Litt. degrees",
      "Faculty seeking editorial board or reviewer roles in Scopus journals",
      "Researchers building profiles for US EB-1, EB-2 NIW, or O-1 visa applications",
    ],
  },
  benefits: {
    benefits: [
      {
        icon: <BookOpen className="w-5 h-5 text-primary" />,
        title: "Top-Ranked Journal Publications",
        description:
          "Get published in Scopus Q1/Q2, SCI, IEEE, Elsevier, Springer, MDPI, and Taylor & Francis indexed journals, strengthening your academic credibility significantly.",
      },
      {
        icon: <FileText className="w-5 h-5 text-primary" />,
        title: "Professional Manuscript Development",
        description:
          "Expert research writers and editors craft your manuscript to journal-specific standards — ensuring clarity, academic rigour, and a high acceptance rate.",
      },
      {
        icon: <Microscope className="w-5 h-5 text-primary" />,
        title: "Journal Selection & Fit Analysis",
        description:
          "We identify the most suitable journals for your research domain, ensuring alignment with scope, indexing level, and impact factor requirements.",
      },
      {
        icon: <Award className="w-5 h-5 text-primary" />,
        title: "Book Publishing with ISBN",
        description:
          "Publish your research as a book with Indian or US ISBN registration through reputed academic publishers, enhancing your academic portfolio.",
      },
      {
        icon: <Globe className="w-5 h-5 text-primary" />,
        title: "International Book Chapter Contributions",
        description:
          "Contribute chapters to internationally edited volumes — an increasingly valued publication output for promotions, accreditation, and immigration profiles.",
      },
      {
        icon: <TrendingUp className="w-5 h-5 text-primary" />,
        title: "H-Index & Citation Enhancement",
        description:
          "Strategic publication planning to improve your Google Scholar citations and H-Index — vital for global academic recognition and visa applications.",
      },
    ],
  },
  process: [
    {
      step: 1,
      title: "Research Topic & Journal Consultation",
      description:
        "We discuss your research area, existing work, and career goals to recommend the best publication strategy and target journals.",
    },
    {
      step: 2,
      title: "Manuscript Writing & Structuring",
      description:
        "Our subject-matter experts draft or refine your manuscript — covering abstract, introduction, methodology, results, discussion, and references.",
    },
    {
      step: 3,
      title: "Editing, Formatting & Plagiarism Check",
      description:
        "The manuscript is edited for language quality, formatted per journal guidelines, and verified for originality using professional plagiarism tools.",
    },
    {
      step: 4,
      title: "Submission & Review Management",
      description:
        "We submit your paper to the target journal, track the review process, and assist with reviewer responses and revisions.",
    },
    {
      step: 5,
      title: "Acceptance & Publication",
      description:
        "Upon acceptance, we guide you through final proofing, copyright, and open-access options to ensure successful publication.",
    },
  ],
  faqs: [
    {
      question: "Which journals does Learnify support for publication?",
      answer:
        "We support publication in Scopus (Q1, Q2, Q3), SCI, IEEE, Elsevier, Springer, MDPI, Taylor & Francis, and other peer-reviewed indexed journals. We recommend the most suitable journals based on your research domain and career goals.",
    },
    {
      question: "What if I only have a raw idea and no written paper?",
      answer:
        "That's perfectly fine. Our team can help develop your idea into a full research paper — from structuring the concept to writing the complete manuscript, ready for submission.",
    },
    {
      question: "How long does it take to get published?",
      answer:
        "Timelines vary by journal and review process — typically 4 to 16 weeks from submission to acceptance. We track the process and keep you informed at every stage.",
    },
    {
      question:
        "Are these publications recognized for PhD or promotion purposes?",
      answer:
        "Yes. Publications in Scopus, SCI, or IEEE-indexed journals are widely recognized by Indian universities, NAAC/NIRF accreditation bodies, and promotion committees as valid academic output.",
    },
    {
      question: "Does Learnify help with book publishing and book chapters?",
      answer:
        "Yes. We assist with full book publishing (Indian and US ISBN) and contributions to edited international volumes. These are valuable outputs for both academic advancement and global profile building.",
    },
  ],
};

export function ResearchPublicationsPage() {
  return <ServicePageLayout data={data} />;
}
