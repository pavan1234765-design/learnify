import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Clock } from "lucide-react";

export type BlogArticle = {
  slug: string;
  title: string;
  summary: string;
  category: string;
  readTime: string;
  publishedDate: string;
};

const CATEGORY_COLORS: Record<string, string> = {
  "Program Comparison": "bg-primary/10 text-primary border-primary/20",
  "University Insights": "bg-accent/15 text-accent-foreground border-accent/30",
  "Career Guidance": "bg-secondary text-secondary-foreground border-border",
  "Academic Success": "bg-muted text-muted-foreground border-border",
};

export const BLOG_ARTICLES: BlogArticle[] = [
  {
    slug: "best-online-mba-programs-india-2026",
    title: "Best Online MBA Programs in India 2026",
    summary:
      "A curated overview of UGC-recognized online MBA programs with strong career outcomes for working professionals seeking academic and career advancement.",
    category: "Program Comparison",
    readTime: "6 min",
    publishedDate: "March 2026",
  },
  {
    slug: "online-mba-vs-regular-mba",
    title: "Online MBA vs Regular MBA: Which is Right for You?",
    summary:
      "Compare flexibility, ROI, and career outcomes between online and campus-based MBA programs to make an informed decision aligned with your goals.",
    category: "Program Comparison",
    readTime: "5 min",
    publishedDate: "February 2026",
  },
  {
    slug: "ugc-vs-aicte-vs-naac",
    title: "UGC vs AICTE vs NAAC: What Every Student Should Know",
    summary:
      "Understand the difference between India's key academic accreditation bodies and why they matter for the value and recognition of your degree.",
    category: "University Insights",
    readTime: "4 min",
    publishedDate: "February 2026",
  },
  {
    slug: "is-online-mba-worth-it",
    title: "Is Online MBA Worth It? A Career ROI Analysis",
    summary:
      "Data-backed analysis of online MBA career outcomes, salary growth, and return on investment for Indian professionals navigating academic upgrades.",
    category: "Career Guidance",
    readTime: "7 min",
    publishedDate: "January 2026",
  },
  {
    slug: "how-to-get-phd-admission-india",
    title: "How to Get Admission to a PhD Program in India",
    summary:
      "A step-by-step guide to PhD admission process, eligibility criteria, supervisor selection, and research registration across Indian universities.",
    category: "Academic Success",
    readTime: "8 min",
    publishedDate: "January 2026",
  },
];

function ArticleCard({
  article,
  index,
}: { article: BlogArticle; index: number }) {
  function handleRead() {
    window.location.hash = `/blog/${article.slug}`;
  }

  const badgeClass =
    CATEGORY_COLORS[article.category] ??
    "bg-muted text-muted-foreground border-border";

  return (
    <article
      className="bg-card border border-border rounded-2xl overflow-hidden shadow-subtle hover:shadow-elevated transition-smooth flex flex-col group"
      data-ocid={`blog.item.${index + 1}`}
    >
      {/* Category accent bar */}
      <div className="h-1.5 gradient-accent" />

      <div className="flex flex-col flex-1 p-7">
        {/* Category + Read Time */}
        <div className="flex items-center justify-between gap-3 mb-4">
          <Badge
            className={`text-xs font-body font-semibold px-3 py-1 border ${badgeClass} rounded-full`}
          >
            {article.category}
          </Badge>
          <span className="flex items-center gap-1.5 text-xs text-muted-foreground font-body whitespace-nowrap">
            <Clock className="w-3.5 h-3.5" />
            {article.readTime} read
          </span>
        </div>

        {/* Title */}
        <h2 className="font-display text-lg font-bold text-foreground leading-snug mb-3 group-hover:text-primary transition-colors duration-200 line-clamp-2">
          {article.title}
        </h2>

        {/* Summary */}
        <p className="text-sm text-muted-foreground font-body leading-relaxed line-clamp-3 flex-1 mb-6">
          {article.summary}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <span className="text-xs text-muted-foreground font-body">
            {article.publishedDate}
          </span>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleRead}
            className="text-primary hover:text-primary hover:bg-primary/5 font-body font-semibold text-sm gap-1.5 px-3 -mr-2"
            data-ocid={`blog.read_button.${index + 1}`}
          >
            Read Article
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Button>
        </div>
      </div>
    </article>
  );
}

export function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 pt-16 lg:pt-20">
        {/* Header Section */}
        <section className="bg-card border-b border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 text-center">
            <div className="flex items-center justify-center gap-2 mb-5">
              <BookOpen className="w-5 h-5 text-accent" />
              <span className="text-sm font-body font-semibold text-accent uppercase tracking-wider">
                Learnify Insights
              </span>
            </div>
            <h1 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-5 leading-tight">
              Academic Insights &{" "}
              <span className="text-gradient-primary">Career Intelligence</span>
            </h1>
            <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto leading-relaxed">
              Expert-curated guidance to help you make informed academic and
              career decisions.
            </p>
          </div>
        </section>

        {/* Category Filter Bar */}
        <section
          className="bg-muted/30 border-b border-border"
          data-ocid="blog.section"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs text-muted-foreground font-body font-semibold uppercase tracking-wider mr-1">
                Categories:
              </span>
              {[
                "All Articles",
                "Program Comparison",
                "University Insights",
                "Career Guidance",
                "Academic Success",
              ].map((cat) => (
                <span
                  key={cat}
                  className={`px-3 py-1 rounded-full text-xs font-body font-medium border transition-colors ${
                    cat === "All Articles"
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-background text-muted-foreground border-border hover:border-primary/40 hover:text-foreground"
                  }`}
                  data-ocid="blog.filter.tab"
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-18">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
              {BLOG_ARTICLES.map((article, i) => (
                <ArticleCard key={article.slug} article={article} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="bg-muted/40 border-t border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-14 text-center">
            <h2 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-3">
              Ready to make your next academic move?
            </h2>
            <p className="text-muted-foreground font-body mb-7 max-w-xl mx-auto">
              Speak with a Learnify career mentor and get a personalised degree
              and university plan tailored to your goals.
            </p>
            <Button
              onClick={() => {
                window.location.hash = "";
                setTimeout(() => {
                  const el = document.querySelector("#contact");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }, 100);
              }}
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-body font-semibold shadow-subtle hover:shadow-elevated transition-smooth px-7 py-3 h-auto"
              data-ocid="blog.cta_button"
            >
              Book Your Free Career Discussion
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
