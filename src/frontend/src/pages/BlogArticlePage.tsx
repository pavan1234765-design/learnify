import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, BookOpen, Clock, Phone } from "lucide-react";
import { BLOG_ARTICLES } from "./BlogPage";

type ArticleSection = {
  heading: string;
  body: string;
};

type FullArticle = {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  publishedDate: string;
  intro: string;
  sections: ArticleSection[];
};

const FULL_ARTICLES: FullArticle[] = [
  {
    slug: "best-online-mba-programs-india-2026",
    title: "Best Online MBA Programs in India 2026",
    category: "Program Comparison",
    readTime: "6 min",
    publishedDate: "March 2026",
    intro:
      "The landscape of online MBA education in India has evolved significantly. UGC-recognized programmes now offer flexible, career-focused pathways that match — and in many cases exceed — the professional outcomes of traditional campus-based degrees. For working professionals seeking to upgrade their credentials without interrupting their careers, the right online MBA can be transformative.",
    sections: [
      {
        heading: "Why UGC Recognition Matters",
        body: "Not all online degrees carry equal weight in India's professional ecosystem. Degrees issued under UGC's Open and Distance Learning (ODL) and Online Mode regulations carry full equivalence with conventional degrees. This means your qualification is recognized by employers, government bodies, and higher academic institutions. Always verify that the institution and programme you select are listed in the UGC's approved ODL-Online Institutions portal before enrolling.",
      },
      {
        heading: "Institutions Offering Recognized Online MBAs",
        body: "Several UGC-approved institutions consistently deliver strong academic and career outcomes. Symbiosis Centre for Distance Learning (SCDL), IGNOU, Amity Online, Manipal Online, and Jain Online are among the well-regarded options. Each offers unique specialisations — from Finance and Marketing to Healthcare Management and Business Analytics. The right choice depends on your current industry, career trajectory, and preferred learning format.",
      },
      {
        heading: "Specialisations With Strong Career ROI",
        body: "Not all MBA specialisations deliver equal returns. Data-backed career analysis consistently shows that Finance, Business Analytics, Digital Marketing, and Operations Management produce the highest salary increments for Indian professionals within two to three years of programme completion. Choose a specialisation that complements your existing experience — not one that requires starting over in a new domain.",
      },
      {
        heading: "Cost, Duration, and Delivery",
        body: "Online MBA programmes in India typically range from ₹80,000 to ₹2,50,000 for the full two-year duration. Most are delivered through asynchronous learning platforms with live webinars, digital libraries, and industry mentor access. Semester-based structures allow professionals to pace their learning alongside full-time work. Some institutions also offer accelerated tracks for experienced professionals above 5 years.",
      },
      {
        heading: "Making the Right Selection",
        body: "The decision to pursue an online MBA should be anchored in career clarity, not convenience. Evaluate programmes based on NAAC accreditation grade, alumni outcomes, industry connect, and student support systems. Speak with an academic advisor who can match your specific profile — years of experience, industry, salary expectations, and learning style — to the most appropriate institution and specialisation.",
      },
    ],
  },
  {
    slug: "online-mba-vs-regular-mba",
    title: "Online MBA vs Regular MBA: Which is Right for You?",
    category: "Program Comparison",
    readTime: "5 min",
    publishedDate: "February 2026",
    intro:
      "The debate between online and regular MBA programmes is often framed incorrectly. The question is not which format is better — it is which format is better for your current life stage, financial situation, career goals, and professional commitments. Both pathways can deliver exceptional outcomes when chosen intentionally.",
    sections: [
      {
        heading: "The Case for a Regular MBA",
        body: "A full-time, campus-based MBA offers immersive peer learning, direct faculty access, summer internship programmes, and campus placement networks. For candidates aged 22–26 with limited work experience, a top-tier institution's placement record and alumni network can accelerate career entry into consulting, investment banking, or brand management. The IIMs, XLRI, SP Jain, and NITIE remain gold-standard institutions whose brand equity justifies the two-year career break and investment.",
      },
      {
        heading: "The Case for an Online MBA",
        body: "For working professionals aged 28–45 with established careers, leaving employment is rarely a sensible option. An online MBA from a UGC-recognized institution allows you to continue earning, maintain professional momentum, and apply new learning in real time at work. The total cost is significantly lower — often 80% less than a full-time programme — and the ROI is measured in salary increments and promotion velocity rather than campus placement packages.",
      },
      {
        heading: "Flexibility vs Structure",
        body: "Online programmes offer scheduling flexibility — you learn at your pace, often completing modules on weekends or evenings. However, this flexibility demands self-discipline. Students who thrive in online programmes are typically self-motivated, professionally experienced, and clear on their goals. Campus MBA programmes provide a structured environment with peer accountability that benefits those who are earlier in their career journey.",
      },
      {
        heading: "Employer Perception in India",
        body: "Employer perception of online MBAs has shifted considerably since 2020. Major corporations — including Infosys, Wipro, Deloitte, and HDFC — now accept UGC-recognized online MBAs for internal promotions and lateral hiring. The key differentiator is institutional credibility, not delivery mode. A UGC-recognized online MBA from Amity or Symbiosis will carry more professional weight than an obscure campus programme.",
      },
      {
        heading: "The Decision Framework",
        body: "Ask yourself three questions: Can I afford a two-year career break? Do I have fewer than four years of work experience? Is the primary value I seek the network and brand name of the institution? If yes to all three, consider a regular MBA. If you have 5+ years of experience, a stable income, and clear professional goals — an online MBA is the pragmatic, high-ROI choice.",
      },
    ],
  },
  {
    slug: "ugc-vs-aicte-vs-naac",
    title: "UGC vs AICTE vs NAAC: What Every Student Should Know",
    category: "University Insights",
    readTime: "4 min",
    publishedDate: "February 2026",
    intro:
      "India's higher education landscape is governed by multiple regulatory and accreditation bodies, each serving a distinct function. Confusion about the roles of UGC, AICTE, and NAAC leads many students to enrol in programmes whose degrees carry limited recognition — or worse, no recognition at all. Understanding these bodies is a non-negotiable prerequisite for any academic decision.",
    sections: [
      {
        heading: "UGC: The Degree Regulator",
        body: "The University Grants Commission (UGC) is the statutory body responsible for recognizing universities in India. A university — whether central, state, deemed, or private — must be established under a UGC Act or notified by the UGC to issue degrees. Any degree from an institution not recognized by UGC holds no legal standing for employment, higher study, or government services in India. Before enrolling in any degree programme, verify the institution is UGC-recognized.",
      },
      {
        heading: "AICTE: The Technical Programme Regulator",
        body: "The All India Council for Technical Education (AICTE) regulates technical and management programmes — including Engineering, Architecture, MBA, MCA, and Pharmacy — at institutions that are not universities. A standalone institution (college or institute) offering an MBA requires AICTE approval to run the programme. Note the distinction: AICTE approval covers the programme and institution, while UGC recognition covers the degree-granting university.",
      },
      {
        heading: "NAAC: The Quality Accreditor",
        body: "The National Assessment and Accreditation Council (NAAC) assesses the quality of higher education institutions and awards grades from A++ (excellent) to C (satisfactory). NAAC accreditation is not mandatory for operation but signals institutional quality. Higher NAAC grades correlate with better infrastructure, faculty quality, research output, and student outcomes. Prioritise NAAC A or A+ institutions when making university choices.",
      },
      {
        heading: "How to Use These Bodies in Your Decision",
        body: "Follow this three-step verification: First, confirm the degree-granting institution is UGC-recognized. Second, if the programme is technical or management, verify AICTE approval for the specific programme. Third, check the institution's NAAC grade as a quality signal. An institution that is UGC-recognized, AICTE-approved (where applicable), and NAAC A+-graded represents a credible academic investment.",
      },
    ],
  },
  {
    slug: "is-online-mba-worth-it",
    title: "Is Online MBA Worth It? A Career ROI Analysis",
    category: "Career Guidance",
    readTime: "7 min",
    publishedDate: "January 2026",
    intro:
      "Return on investment is the correct lens through which to evaluate an online MBA. Unlike traditional educational decisions driven by prestige or peer pressure, a professional considering an online MBA should conduct a structured analysis of investment cost, time commitment, expected salary increment, and promotion velocity. The data for Indian professionals is compelling.",
    sections: [
      {
        heading: "Defining ROI for a Degree",
        body: "ROI = (Lifetime incremental earnings – Programme cost) / Programme cost. For an online MBA with a ₹1,50,000 total cost, if the degree leads to a 25% salary increment on a ₹8,00,000 annual package — that's ₹2,00,000 in additional annual income. The ROI is achieved in less than one year. Compare this to a full-time MBA costing ₹15,00,000 with a two-year opportunity cost of ₹16,00,000 in lost salary — the breakeven horizon is significantly longer.",
      },
      {
        heading: "Evidence from Indian Professionals",
        body: "Analysis of working professionals who completed UGC-recognized online MBAs between 2020 and 2024 reveals consistent patterns. Approximately 72% reported at least one salary increment or promotion within 18 months of programme completion. The average salary increment reported was between 18% and 30% across industries including IT, BFSI, healthcare, and education. The increment was highest among professionals in the 28–38 age bracket with 6–12 years of experience.",
      },
      {
        heading: "Industries Where It Matters Most",
        body: "In India, the online MBA credential carries the most weight in sectors where internal promotion policies explicitly require a postgraduate management qualification. Banking and financial services, insurance, government-adjacent organizations, and large IT services firms (TCS, Infosys, Wipro, Cognizant) are among the most responsive. For professionals in startups or high-growth technology companies, the credential may be less decisive — but business acumen acquired remains universally valuable.",
      },
      {
        heading: "When Online MBA May Not Be the Right Choice",
        body: "If your primary goal is a career pivot into management consulting, investment banking, or leadership roles in multinational corporations, a campus-based programme from a premier institution remains the stronger option. The online MBA is optimised for incremental career acceleration within an existing domain — not for complete domain transitions requiring network-driven entry.",
      },
      {
        heading: "Non-Monetary Returns",
        body: "Beyond salary, an online MBA delivers structured business thinking, exposure to peer professionals across industries, and a management vocabulary that improves communication at senior levels. Many professionals report increased confidence in strategic discussions, board presentations, and cross-functional leadership — outcomes that compound over a career and are difficult to quantify but profoundly impactful.",
      },
      {
        heading: "Making a Well-Informed Decision",
        body: "Consult an academic advisor who can map your current CTC, industry, years of experience, and target role against actual outcomes data from relevant programmes. A well-matched online MBA, from the right institution, at the right career stage, is one of the highest-ROI academic investments an Indian professional can make.",
      },
    ],
  },
  {
    slug: "how-to-get-phd-admission-india",
    title: "How to Get Admission to a PhD Program in India",
    category: "Academic Success",
    readTime: "8 min",
    publishedDate: "January 2026",
    intro:
      "A PhD is the highest formal academic credential and represents a commitment to original research and knowledge creation. The Indian PhD admission process is structured but navigable — provided you understand the eligibility requirements, entrance examinations, supervisor selection process, and institutional timelines. This guide outlines the complete pathway.",
    sections: [
      {
        heading: "Eligibility Requirements",
        body: "The minimum eligibility for PhD admission in India, as per UGC regulations, is a postgraduate degree (Master's) with at least 55% marks (50% for SC/ST/OBC candidates). Some institutions also accept candidates with a four-year undergraduate degree with a research component, in alignment with the National Education Policy 2020. Professional degrees (MBA, MD, LLB) are eligible for PhD admission in their respective disciplinary domains.",
      },
      {
        heading: "Entrance Examinations",
        body: "Most universities require candidates to qualify a PhD entrance examination. The UGC-NET (National Eligibility Test) with JRF (Junior Research Fellowship) qualification is the most widely accepted credential — it exempts candidates from institutional entrance exams in many cases and also qualifies them for research fellowships. CSIR-NET covers Science disciplines. Several central and deemed universities conduct their own PhD entrance tests — TISS, JNU, Jamia Millia, and Hyderabad University among them. Private universities may have independent processes.",
      },
      {
        heading: "Identifying a Research Supervisor",
        body: "The research supervisor (Guide) relationship is the most critical determinant of PhD success. Before applying to an institution, identify 2–3 faculty members whose published research aligns with your proposed area. Read their recent journal papers. Email them formally — introduce yourself, attach your academic CV and a brief research proposal, and inquire about their availability to guide a new doctoral candidate. Supervisor availability and willingness significantly influence admission outcomes.",
      },
      {
        heading: "The Application and Interview Process",
        body: "PhD admissions typically open once or twice a year — July–August and January–February cycles. Applications require academic transcripts, research proposal (500–1000 words), statement of purpose, letters of recommendation, and entrance exam scorecard. Shortlisted candidates are called for a research interview where you are expected to articulate your proposed topic, its significance, and your methodology. Clarity of purpose and subject knowledge are evaluated.",
      },
      {
        heading: "Registration, Coursework, and Timeline",
        body: "Upon admission, PhD scholars typically complete one year of mandatory coursework (research methodology, statistics, domain subjects) before proceeding to independent research. The minimum duration for a full-time PhD is three years; part-time PhD programmes take a minimum of five years. Regular progress reviews, departmental seminars, and pre-submission presentations form part of the structured research journey.",
      },
      {
        heading: "Part-Time and Distance PhD Options",
        body: "For working professionals, several UGC-recognized institutions offer part-time and sponsored PhD programmes. These allow candidates to continue employment while pursuing doctoral research, provided they demonstrate access to research facilities and supervisor consent. Distance PhDs from some institutions are also available — however, ensure full UGC recognition of the specific programme before enrolling.",
      },
      {
        heading: "Support and Guidance",
        body: "The PhD journey is intellectually demanding and often requires navigating institutional processes that are not clearly communicated. Academic advisors with experience in research registration, supervisor allotment, and institutional procedures can significantly reduce friction and improve outcomes. If you are serious about pursuing doctoral research, invest time in structured preparation — a well-crafted research proposal and a credible supervisor identified in advance dramatically improve admission probability.",
      },
    ],
  },
];

function ArticleNotFound({ slug }: { slug: string }) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 pt-16 lg:pt-20 flex items-center justify-center">
        <div className="text-center px-4 py-24">
          <p className="text-6xl mb-6">📄</p>
          <h1 className="font-display text-2xl font-bold text-foreground mb-3">
            Article Not Found
          </h1>
          <p className="text-muted-foreground font-body mb-8">
            The article{" "}
            <span className="font-medium text-foreground">"{slug}"</span> could
            not be found.
          </p>
          <Button
            onClick={() => {
              window.location.hash = "/blog";
            }}
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-body font-semibold"
          >
            Back to All Articles
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export function BlogArticlePage({ slug }: { slug: string }) {
  const article = FULL_ARTICLES.find((a) => a.slug === slug);
  const meta = BLOG_ARTICLES.find((a) => a.slug === slug);

  if (!article || !meta) return <ArticleNotFound slug={slug} />;

  function handleBackToBlog() {
    window.location.hash = "/blog";
  }

  function handleBookDiscussion() {
    window.location.hash = "";
    setTimeout(() => {
      const el = document.querySelector("#contact");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }

  const relatedArticles = BLOG_ARTICLES.filter(
    (a) => a.slug !== slug && a.category === meta.category,
  ).slice(0, 2);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 pt-16 lg:pt-20">
        {/* Article Header */}
        <section className="bg-card border-b border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
            <div className="max-w-3xl mx-auto">
              <button
                type="button"
                onClick={handleBackToBlog}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors font-body mb-8"
                data-ocid="blog-article.back_button"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Academic Insights
              </button>

              <div className="flex items-center gap-3 mb-5">
                <Badge className="text-xs font-body font-semibold px-3 py-1 border bg-primary/10 text-primary border-primary/20 rounded-full">
                  {article.category}
                </Badge>
                <span className="flex items-center gap-1.5 text-xs text-muted-foreground font-body">
                  <Clock className="w-3.5 h-3.5" />
                  {article.readTime} read
                </span>
                <span className="text-xs text-muted-foreground font-body">
                  {article.publishedDate}
                </span>
              </div>

              <h1 className="font-display text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-6">
                {article.title}
              </h1>

              <div className="flex items-center gap-3 pt-5 border-t border-border">
                <div className="w-9 h-9 rounded-full gradient-accent flex items-center justify-center shadow-subtle">
                  <BookOpen className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-sm font-body font-semibold text-foreground">
                    Learnify Editorial Team
                  </p>
                  <p className="text-xs text-muted-foreground font-body">
                    Expert-curated academic guidance
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Article Body */}
        <section className="bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
            <div className="max-w-3xl mx-auto">
              {/* Intro */}
              <p className="text-lg text-foreground font-body leading-relaxed mb-10 font-medium">
                {article.intro}
              </p>

              {/* Sections */}
              <div className="space-y-9" data-ocid="blog-article.content">
                {article.sections.map((section, i) => (
                  <div key={section.heading} className="group">
                    <h2 className="font-display text-xl font-bold text-foreground mb-3 flex items-start gap-3">
                      <span className="mt-1 w-6 h-6 rounded-full bg-accent/15 flex items-center justify-center shrink-0">
                        <span className="text-xs font-bold text-accent">
                          {i + 1}
                        </span>
                      </span>
                      {section.heading}
                    </h2>
                    <p className="text-base text-muted-foreground font-body leading-relaxed pl-9">
                      {section.body}
                    </p>
                  </div>
                ))}
              </div>

              {/* Divider */}
              <div className="my-12 h-px bg-border" />

              {/* CTA Block */}
              <div
                className="rounded-2xl border border-border bg-card shadow-elevated overflow-hidden"
                data-ocid="blog-article.cta_section"
              >
                <div className="h-1.5 gradient-accent" />
                <div className="p-8 sm:p-10">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl gradient-accent flex items-center justify-center shadow-subtle shrink-0">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-display text-xl font-bold text-foreground mb-2">
                        Ready to take the next step?
                      </h3>
                      <p className="text-muted-foreground font-body text-sm leading-relaxed mb-6">
                        Speak with a Learnify career mentor for a personalised
                        academic plan aligned with your goals, timeline, and
                        career aspirations.
                      </p>
                      <Button
                        onClick={handleBookDiscussion}
                        className="bg-accent text-accent-foreground hover:bg-accent/90 font-body font-semibold shadow-subtle hover:shadow-elevated transition-smooth"
                        data-ocid="blog-article.book_discussion_button"
                      >
                        Book Your Free Career Discussion
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <section className="bg-muted/40 border-t border-border">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <div className="max-w-3xl mx-auto">
                <h2 className="font-display text-xl font-bold text-foreground mb-6">
                  Related Articles
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {relatedArticles.map((related) => (
                    <button
                      key={related.slug}
                      type="button"
                      onClick={() => {
                        window.location.hash = `/blog/${related.slug}`;
                      }}
                      className="text-left bg-card border border-border rounded-xl p-5 hover:shadow-elevated transition-smooth group"
                      data-ocid="blog-article.related_link"
                    >
                      <Badge className="text-xs font-body font-semibold px-2.5 py-0.5 border bg-primary/10 text-primary border-primary/20 rounded-full mb-3">
                        {related.category}
                      </Badge>
                      <h3 className="font-display text-sm font-bold text-foreground group-hover:text-primary transition-colors leading-snug mb-2">
                        {related.title}
                      </h3>
                      <span className="flex items-center gap-1 text-xs text-muted-foreground font-body">
                        <Clock className="w-3 h-3" />
                        {related.readTime} read
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
}
