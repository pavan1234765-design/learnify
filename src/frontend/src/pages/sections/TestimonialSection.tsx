import { Quote, Star } from "lucide-react";
import { useState } from "react";

interface StudentTestimonial {
  type: "student";
  name: string;
  location: string;
  program: string;
  result: string;
  quote: string;
  initials: string;
}

interface ExpertTestimonial {
  type: "expert";
  name: string;
  role: string;
  location: string;
  quote: string;
  initials: string;
}

const STUDENT_TESTIMONIALS: StudentTestimonial[] = [
  {
    type: "student",
    name: "Priya Ramachandran",
    location: "Chennai, Tamil Nadu",
    program: "PhD – Anna University",
    result: "Secured admission with scholarship in 2023",
    quote:
      "Learnify helped me discover the right doctoral program aligned with my research interests. Dr. Mithun's guidance was invaluable — structured, clear, and completely personalized.",
    initials: "PR",
  },
  {
    type: "student",
    name: "Arjun Sharma",
    location: "New Delhi",
    program: "MBA – University of Melbourne",
    result: "Promoted to Senior Manager within 18 months of graduation",
    quote:
      "From shortlisting universities to final enrolment, Learnify was with me at every step. Their study abroad guidance is exceptional — truly personalized for each student.",
    initials: "AS",
  },
  {
    type: "student",
    name: "Deepa Krishnan",
    location: "Thiruvananthapuram, Kerala",
    program: "Postgraduate – IGNOU",
    result: "Clarity on career path and secured desired admission",
    quote:
      "I was confused between multiple career paths. The counselling sessions at Learnify gave me clarity and confidence. I'm now pursuing exactly what I love.",
    initials: "DK",
  },
  {
    type: "student",
    name: "Rajesh Kumar Verma",
    location: "Lucknow, Uttar Pradesh",
    program: "PhD – IIT Kanpur",
    result: "Research proposal approved and supervisor finalised",
    quote:
      "The team at Learnify guided me through every step of my PhD registration at IIT Kanpur — from research proposal writing to finalising my supervisor. Their support was world-class.",
    initials: "RV",
  },
  {
    type: "student",
    name: "Sneha Patil",
    location: "Pune, Maharashtra",
    program: "MSc Data Science – Savitribai Phule Pune University",
    result: "Now working as Data Analyst at a leading MNC",
    quote:
      "I had no idea how to apply for an MSc Data Science program. Learnify's counsellors mapped out the entire journey for me. I'm now enrolled and loving every moment.",
    initials: "SP",
  },
  {
    type: "student",
    name: "Amit Srivastava",
    location: "Varanasi, Uttar Pradesh",
    program: "Research – Scopus Q1 Publication",
    result: "Paper accepted and indexed in Scopus Q1 journal",
    quote:
      "As an Associate Professor, getting my research published in a Scopus Q1 journal seemed daunting. Learnify's research support team made it achievable and stress-free.",
    initials: "ASr",
  },
  {
    type: "student",
    name: "Kavitha Subramaniam",
    location: "Coimbatore, Tamil Nadu",
    program: "MSc Engineering – University of Manchester",
    result: "Secured full admission within 3 months of engagement",
    quote:
      "Learnify's study abroad guidance helped me secure admission to a prestigious UK Masters program. Their knowledge of international universities and visa processes is outstanding.",
    initials: "KS",
  },
  {
    type: "student",
    name: "Dr. Pooja Mehta",
    location: "Ahmedabad, Gujarat",
    program: "Patent Filing – Utility Patent",
    result: "Patent published and technology transfer letter obtained",
    quote:
      "With Learnify's expert guidance, I successfully filed a utility patent for my classroom innovation project. Dr. Mithun's team handled everything from drafting to publication seamlessly.",
    initials: "PM",
  },
  {
    type: "student",
    name: "Rahul Nair",
    location: "Thiruvananthapuram, Kerala",
    program: "MBA Distance – IGNOU",
    result: "Completed degree while continuing full-time employment",
    quote:
      "Balancing work and studies felt impossible, but Learnify connected me with the perfect distance MBA program. The counselling was practical, quick, and stress-free.",
    initials: "RN",
  },
  {
    type: "student",
    name: "Sunita Yadav",
    location: "Varanasi, Uttar Pradesh",
    program: "PhD – Banaras Hindu University",
    result: "Topic selection and research alignment completed in record time",
    quote:
      "The Learnify team gave me rock-solid support throughout my PhD registration at BHU. Their guidance on topic selection and research alignment saved me months of effort.",
    initials: "SY",
  },
  {
    type: "student",
    name: "Aakash Joshi",
    location: "Jaipur, Rajasthan",
    program: "Post-Doctoral Fellowship – University of Rajasthan",
    result: "Fellowship secured matching exact research background",
    quote:
      "Learnify helped me identify and apply for a Post-Doctoral fellowship that perfectly suited my research background. Their attention to detail and dedication was remarkable.",
    initials: "AJ",
  },
  {
    type: "student",
    name: "Meenakshi Iyer",
    location: "Chennai, Tamil Nadu",
    program: "International Conference – Singapore",
    result: "Keynote speaker role secured at international conference",
    quote:
      "Getting an international conference speaking opportunity felt out of reach until I connected with Learnify. They built my academic profile and secured a keynote role for me.",
    initials: "MI",
  },
];

const EXPERT_TESTIMONIALS: ExpertTestimonial[] = [
  {
    type: "expert",
    name: "Dr. Raghavendra Pratap Mehta",
    role: "Career Mentor · Higher Education Specialist",
    location: "New Delhi",
    quote:
      "Learnify is not just guiding students — they are building structured academic journeys. Their clarity on university selection, career alignment, and execution is exactly what today's learners need.",
    initials: "RM",
  },
  {
    type: "expert",
    name: "Ankita Sharma Khanna",
    role: "Senior Career Strategist · Global Education Advisor",
    location: "Gurgaon, Haryana",
    quote:
      "In a crowded consultancy market, Learnify stands out with its strategic and transparent approach. They focus on long-term outcomes, not short-term enrollments.",
    initials: "AK",
  },
  {
    type: "expert",
    name: "Dr. Vivek Narayan Iyer",
    role: "Academic Consultant · International Admissions Specialist",
    location: "Chennai, Tamil Nadu",
    quote:
      "Learnify's ability to align academic choices with global career pathways is impressive. Their advisory model is structured, informed, and highly relevant.",
    initials: "VI",
  },
  {
    type: "expert",
    name: "Shalini Deshpande Kulkarni",
    role: "Education Policy Analyst · Higher Studies Advisor",
    location: "Pune, Maharashtra",
    quote:
      "Learnify bridges the gap between aspiration and execution. Their deep understanding of both Indian and international education ecosystems adds real value.",
    initials: "SK",
  },
  {
    type: "expert",
    name: "Arjun Dev Malhotra",
    role: "Career Coach · University Admissions Expert",
    location: "Chandigarh",
    quote:
      "What differentiates Learnify is their personalized approach. They treat every student as a unique case, not a number. That is rare and commendable.",
    initials: "AM",
  },
  {
    type: "expert",
    name: "Neha Kapoor Bansal",
    role: "Higher Education Consultant · Study Abroad Specialist",
    location: "Noida, Uttar Pradesh",
    quote:
      "Learnify simplifies complex academic decisions with clarity and precision. Their process-driven approach ensures students make informed choices every time.",
    initials: "NB",
  },
  {
    type: "expert",
    name: "Dr. Sandeep Kumar Verma",
    role: "Academic Advisor · Skill & Career Development Mentor",
    location: "Patna, Bihar",
    quote:
      "The team at Learnify understands evolving industry demands and aligns education accordingly. This makes their guidance future-ready and impactful for today's learners.",
    initials: "SV",
  },
  {
    type: "expert",
    name: "Ritika Sen Gupta",
    role: "University Partnerships Consultant · Education Strategist",
    location: "Kolkata, West Bengal",
    quote:
      "Learnify brings a premium, structured approach to education consulting. Their focus on credibility and execution sets them apart from typical consultancies.",
    initials: "RG",
  },
  {
    type: "expert",
    name: "Mohammed Faheem Siddiqui",
    role: "Career Mentor · Professional Development Coach",
    location: "Hyderabad, Telangana",
    quote:
      "Students today need direction more than options — and Learnify delivers exactly that. Their mentorship-driven model is highly effective and genuinely impactful.",
    initials: "FS",
  },
  {
    type: "expert",
    name: "Dr. Karthikeya Subramanian Nair",
    role: "Global Education Advisor · Academic Planning Specialist",
    location: "Bengaluru, Karnataka",
    quote:
      "Learnify combines insight, strategy, and execution seamlessly. They are not just consultants — they are long-term academic partners who invest in your success.",
    initials: "KN",
  },
];

export function TestimonialSection() {
  const [activeTab, setActiveTab] = useState<"students" | "experts">(
    "students",
  );

  const displayList =
    activeTab === "students" ? STUDENT_TESTIMONIALS : EXPERT_TESTIMONIALS;

  return (
    <section
      id="testimonials"
      className="py-20 lg:py-28 bg-muted/30"
      data-ocid="testimonial.section"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent border border-accent/20 rounded-full px-4 py-1.5 text-xs font-body font-semibold uppercase tracking-wider mb-4">
            Verified Voices
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-4">
            Real Stories,{" "}
            <span className="text-gradient-primary">Proven Impact</span>
          </h2>
          <p className="text-lg text-muted-foreground font-body leading-relaxed">
            Over a thousand learners and educators across India have advanced
            their academic and professional careers through Learnify's
            structured guidance.
          </p>
        </div>

        {/* Tab Switcher */}
        <div
          className="flex items-center justify-center mb-12"
          data-ocid="testimonial.tab-switcher"
        >
          <div className="bg-card border border-border rounded-xl p-1.5 flex gap-1 shadow-subtle">
            <button
              type="button"
              onClick={() => setActiveTab("students")}
              className={`px-5 py-2.5 rounded-lg text-sm font-body font-semibold transition-smooth ${
                activeTab === "students"
                  ? "bg-primary text-white shadow-subtle"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              }`}
              data-ocid="testimonial.tab.students"
            >
              Student Testimonials ({STUDENT_TESTIMONIALS.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("experts")}
              className={`px-5 py-2.5 rounded-lg text-sm font-body font-semibold transition-smooth ${
                activeTab === "experts"
                  ? "bg-primary text-white shadow-subtle"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              }`}
              data-ocid="testimonial.tab.experts"
            >
              Expert Voices ({EXPERT_TESTIMONIALS.length})
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayList.map((t, index) => (
            <div
              key={t.name}
              className="bg-card border border-border rounded-xl p-6 shadow-subtle hover:shadow-elevated transition-smooth flex flex-col"
              data-ocid={`testimonial.item.${index + 1}`}
            >
              {/* Stars */}
              <div className="flex items-center gap-0.5 mb-4">
                {["s1", "s2", "s3", "s4", "s5"].map((k) => (
                  <Star
                    key={k}
                    className="w-3.5 h-3.5 fill-accent text-accent"
                  />
                ))}
              </div>

              <Quote className="w-7 h-7 text-accent/30 mb-3 shrink-0" />
              <p className="font-body text-muted-foreground text-sm leading-relaxed flex-1 mb-5 italic">
                "{t.quote}"
              </p>

              {/* Student-specific result */}
              {t.type === "student" && (
                <div className="bg-primary/6 border border-primary/15 rounded-lg px-3 py-2 mb-4">
                  <div className="text-xs font-body font-semibold text-primary uppercase tracking-wide mb-0.5">
                    Career Result
                  </div>
                  <div className="text-xs text-foreground font-body">
                    {t.result}
                  </div>
                </div>
              )}

              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-10 h-10 rounded-full gradient-accent flex items-center justify-center shrink-0">
                  <span className="text-white font-display font-bold text-xs">
                    {t.initials}
                  </span>
                </div>
                <div className="min-w-0">
                  <div className="text-sm font-body font-semibold text-foreground truncate">
                    {t.name}
                  </div>
                  {t.type === "expert" ? (
                    <div className="text-xs text-muted-foreground font-body truncate">
                      {t.role}
                    </div>
                  ) : (
                    <div className="text-xs text-muted-foreground font-body truncate">
                      {t.program}
                    </div>
                  )}
                  <div className="text-xs text-accent font-body font-medium truncate">
                    {t.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
