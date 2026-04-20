export type EducationLevel =
  | { Undergraduate: null }
  | { Postgraduate: null }
  | { Doctorate: null }
  | { Executive: null }
  | { Other: null };

export type ProgramType =
  | { Regular: null }
  | { Online: null }
  | { Distance: null }
  | { PartTime: null };

export type InquiryType =
  | { AdmissionsGuidance: null }
  | { CareerCounselling: null }
  | { StudyAbroad: null }
  | { ResearchSupport: null }
  | { Other: null };

export interface EnquiryInput {
  name: string;
  email: string;
  phone: string;
  educationLevel: EducationLevel;
  programType: ProgramType;
  countryPreference: string;
  inquiryType: InquiryType;
  message: string;
}

export interface Enquiry extends EnquiryInput {
  id: bigint;
  submittedAt: bigint;
}

export type SubmitResult = { ok: bigint } | { err: string };

export interface NavLink {
  label: string;
  href: string;
}

export interface ServiceItem {
  icon: string;
  title: string;
  description: string;
}

export interface WhyChooseItem {
  icon: string;
  title: string;
  description: string;
  badge?: string;
}

export interface JourneyStep {
  step: number;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  location: string;
  program?: string;
  result?: string;
  initials: string;
  type: "student" | "expert";
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  content: string;
}

export interface ServiceDetail {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  forWhom: string;
  benefits: string[];
  process: { step: number; title: string; description: string }[];
  faqs: { question: string; answer: string }[];
}
