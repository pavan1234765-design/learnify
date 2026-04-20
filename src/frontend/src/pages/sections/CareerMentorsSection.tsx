import {
  Award,
  BookOpen,
  Globe,
  GraduationCap,
  Lightbulb,
  Microscope,
  School,
} from "lucide-react";

interface Mentor {
  name: string;
  title: string;
  institution: string;
  location: string;
  bio: string;
  experience: string;
  specializations: string[];
  initials: string;
  icon: React.ReactNode;
  isLead?: boolean;
}

const MENTORS: Mentor[] = [
  {
    name: "Dr. S. Mithun",
    title: "Career Mentor & Higher Education Specialist",
    institution: "SSN Initiative, Bangalore",
    location: "Bangalore, Karnataka",
    bio: "Founder of Learnify and the SSN Initiative, Dr. Mithun has guided thousands of students and academic professionals across India toward their higher education and career goals. With deep expertise in UGC-recognized institutions and global university partnerships, he brings a personalized, outcome-driven approach to every consultation.",
    experience: "10+ Years",
    specializations: ["PhD Admissions", "UGC Universities", "Career Strategy"],
    initials: "SM",
    icon: <GraduationCap className="w-5 h-5 text-white" />,
    isLead: true,
  },
  {
    name: "Dr. Ananya Krishnamurthy",
    title: "Research Publications Advisor",
    institution: "Former Faculty, Jadavpur University",
    location: "Kolkata, West Bengal",
    bio: "Dr. Krishnamurthy specializes in guiding researchers through the publication process in prestigious Scopus, SCI, and IEEE indexed journals. Having published over 40 research papers herself during her tenure at Jadavpur University, she brings firsthand expertise to every manuscript she reviews and mentors.",
    experience: "12+ Years",
    specializations: [
      "Scopus Q1 Journals",
      "Research Writing",
      "IEEE Publications",
    ],
    initials: "AK",
    icon: <BookOpen className="w-5 h-5 text-white" />,
  },
  {
    name: "Prof. Suresh Babu Reddy",
    title: "Study Abroad & International Education Specialist",
    institution: "Osmania University, Hyderabad",
    location: "Hyderabad, Telangana",
    bio: "Prof. Reddy has over 15 years of experience helping Indian students navigate the complexities of international university admissions — from UK and Australia to the USA and Germany. He is fluent in multiple application systems and has an exceptional track record of scholarship placements for meritorious students.",
    experience: "15+ Years",
    specializations: ["Study Abroad", "Scholarship Guidance", "Visa Support"],
    initials: "SR",
    icon: <Globe className="w-5 h-5 text-white" />,
  },
  {
    name: "Dr. Priyanka Agarwal",
    title: "PhD Admissions & Doctoral Research Guide",
    institution: "University of Delhi Alumna",
    location: "New Delhi",
    bio: "Dr. Agarwal is a Delhi University alumna with extensive experience in doctoral admissions consulting for India's top central and state universities. She provides end-to-end support — from research topic selection and supervisor identification to entrance exam preparation and thesis writing guidance.",
    experience: "8+ Years",
    specializations: [
      "PhD Admissions",
      "Thesis Writing",
      "Central Universities",
    ],
    initials: "PA",
    icon: <Microscope className="w-5 h-5 text-white" />,
  },
  {
    name: "Prof. Ramesh Chandra Mishra",
    title: "Academic Profile & PR Specialist",
    institution: "Lucknow University",
    location: "Lucknow, Uttar Pradesh",
    bio: "Prof. Mishra brings a wealth of experience in building academic brands and professional profiles for college teachers, deans, and institutional leaders. With a career spanning 14 years at Lucknow University, he understands the nuances of NAAC, NIRF, and NBA accreditation requirements and how to align academic profiles accordingly.",
    experience: "14+ Years",
    specializations: ["Profile Building", "NAAC/NIRF", "Academic Branding"],
    initials: "RM",
    icon: <Award className="w-5 h-5 text-white" />,
  },
  {
    name: "Dr. Lakshmi Venkataraman",
    title: "IPR & Patent Filing Expert",
    institution: "IIT Madras Alumna",
    location: "Chennai, Tamil Nadu",
    bio: "An IIT Madras alumna with a specialization in Intellectual Property Rights, Dr. Venkataraman has successfully assisted over 200 academic professionals and innovators in filing Indian and international patents. She covers the full lifecycle from ideation and drafting to filing, publication, and grant support.",
    experience: "10+ Years",
    specializations: ["Patent Filing", "IP Strategy", "Technology Transfer"],
    initials: "LV",
    icon: <Lightbulb className="w-5 h-5 text-white" />,
  },
  {
    name: "Dr. Neeraj Tiwari",
    title: "Distance & Online Education Specialist",
    institution: "IGNOU Alumnus, AISECT University",
    location: "Bhopal, Madhya Pradesh",
    bio: "Dr. Tiwari is an IGNOU alumnus who has helped working professionals and career-changers across India find the right distance and online programs that fit their lifestyle and goals. He specializes in IGNOU, NIOS, and approved distance education programs recognized by UGC and the Ministry of Education.",
    experience: "9+ Years",
    specializations: [
      "Distance Education",
      "IGNOU Programs",
      "Online Learning",
    ],
    initials: "NT",
    icon: <School className="w-5 h-5 text-white" />,
  },
];

export function CareerMentorsSection() {
  return (
    <section
      id="mentors"
      className="py-20 lg:py-28 bg-muted"
      data-ocid="mentors.section"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary border border-primary/20 rounded-full px-4 py-1.5 text-xs font-body font-semibold uppercase tracking-wider mb-4">
            Our Expert Team
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-4">
            Meet Our Career Mentors &{" "}
            <span className="text-gradient-primary">
              Higher Education Specialists
            </span>
          </h2>
          <p className="text-lg text-muted-foreground font-body leading-relaxed">
            Our team of seasoned educators and academic professionals is
            dedicated to guiding you toward the right higher education path —
            with deep expertise rooted in India's academic landscape.
          </p>
        </div>

        {/* Mentor Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MENTORS.map((mentor, index) => (
            <div
              key={mentor.name}
              className={`bg-card border rounded-xl p-6 shadow-subtle hover:shadow-elevated transition-smooth flex flex-col gap-4 ${
                mentor.isLead
                  ? "border-primary/30 ring-1 ring-primary/20"
                  : "border-border"
              }`}
              data-ocid={`mentors.item.${index + 1}`}
            >
              {/* Header */}
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-full gradient-accent flex items-center justify-center shrink-0 shadow-subtle">
                  <span className="text-white font-display font-bold text-sm">
                    {mentor.initials}
                  </span>
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                      <h3 className="font-display font-bold text-foreground text-base leading-snug">
                        {mentor.name}
                      </h3>
                      {mentor.isLead && (
                        <span className="inline-block bg-accent/10 text-accent border border-accent/20 rounded-full px-2 py-0.5 text-[10px] font-body font-semibold uppercase tracking-wide mt-1">
                          Lead Mentor
                        </span>
                      )}
                    </div>
                    <span className="shrink-0 inline-block bg-primary/10 text-primary rounded-full px-2.5 py-1 text-[11px] font-body font-semibold whitespace-nowrap">
                      {mentor.experience}
                    </span>
                  </div>
                  <p className="text-xs font-body text-muted-foreground mt-1 leading-snug">
                    {mentor.title}
                  </p>
                </div>
              </div>

              {/* Institution & Location */}
              <div className="text-xs font-body text-muted-foreground border-t border-border pt-3">
                <span className="font-medium text-foreground">
                  {mentor.institution}
                </span>
                <span className="mx-1.5 text-border">·</span>
                {mentor.location}
              </div>

              {/* Bio */}
              <p className="text-sm font-body text-muted-foreground leading-relaxed flex-1">
                {mentor.bio}
              </p>

              {/* Specialization Tags */}
              <div className="flex flex-wrap gap-2 pt-2 border-t border-border">
                {mentor.specializations.map((tag) => (
                  <span
                    key={tag}
                    className="bg-secondary text-secondary-foreground border border-border rounded-full px-3 py-1 text-[11px] font-body font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
