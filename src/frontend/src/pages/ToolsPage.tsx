import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ArrowRight,
  Award,
  BarChart3,
  BookOpen,
  BrainCircuit,
  Calendar,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  GitCompare,
  IndianRupee,
  MapPin,
  TrendingUp,
  Wifi,
} from "lucide-react";
import { useMemo, useState } from "react";

// ─── Data ────────────────────────────────────────────────────────────────────

const UNIVERSITIES = [
  {
    id: "ignou",
    name: "IGNOU",
    location: "New Delhi",
    ranking: "NIRF #10 (Open Universities)",
    feesRange: "₹15,000 – ₹60,000",
    programs: "1000+",
    naac: "A",
    recognition: "UGC",
    mode: "Distance / Online",
    placement: "Limited (Job Fair)",
  },
  {
    id: "amity",
    name: "Amity University",
    location: "Noida, UP",
    ranking: "NIRF #63",
    feesRange: "₹80,000 – ₹3,00,000",
    programs: "400+",
    naac: "A+",
    recognition: "UGC / AICTE",
    mode: "Online / Regular",
    placement: "Dedicated Cell",
  },
  {
    id: "nmims",
    name: "NMIMS",
    location: "Mumbai, Maharashtra",
    ranking: "NIRF #56",
    feesRange: "₹1,20,000 – ₹6,00,000",
    programs: "150+",
    naac: "A++",
    recognition: "UGC / AICTE",
    mode: "Online / Regular",
    placement: "Strong (85%+)",
  },
  {
    id: "lpu",
    name: "Lovely Professional University",
    location: "Phagwara, Punjab",
    ranking: "NIRF #38",
    feesRange: "₹50,000 – ₹2,50,000",
    programs: "500+",
    naac: "A+",
    recognition: "UGC / AICTE",
    mode: "Online / Regular",
    placement: "Dedicated Cell",
  },
  {
    id: "manipal",
    name: "Manipal University",
    location: "Manipal, Karnataka",
    ranking: "NIRF #50",
    feesRange: "₹80,000 – ₹4,00,000",
    programs: "200+",
    naac: "A+",
    recognition: "UGC / AICTE",
    mode: "Online / Regular",
    placement: "Strong (80%+)",
  },
  {
    id: "symbiosis",
    name: "Symbiosis International",
    location: "Pune, Maharashtra",
    ranking: "NIRF #45",
    feesRange: "₹1,00,000 – ₹5,00,000",
    programs: "100+",
    naac: "A+",
    recognition: "UGC / AICTE",
    mode: "Online / Regular",
    placement: "Dedicated Cell",
  },
  {
    id: "jain",
    name: "JAIN University",
    location: "Bengaluru, Karnataka",
    ranking: "NIRF #72",
    feesRange: "₹60,000 – ₹2,80,000",
    programs: "180+",
    naac: "A+",
    recognition: "UGC / AICTE",
    mode: "Online / Regular",
    placement: "Active Cell",
  },
  {
    id: "du",
    name: "Delhi University (SOL)",
    location: "New Delhi",
    ranking: "NIRF #11",
    feesRange: "₹10,000 – ₹40,000",
    programs: "50+",
    naac: "A++",
    recognition: "UGC",
    mode: "Distance",
    placement: "Limited",
  },
  {
    id: "bits",
    name: "BITS Pilani (WILP)",
    location: "Pilani, Rajasthan",
    ranking: "NIRF #26",
    feesRange: "₹1,50,000 – ₹4,50,000",
    programs: "30+",
    naac: "A",
    recognition: "UGC / AICTE",
    mode: "Part-Time / Online",
    placement: "Industry-Integrated",
  },
  {
    id: "vgu",
    name: "Vivekananda Global University",
    location: "Jaipur, Rajasthan",
    ranking: "NIRF Ranked",
    feesRange: "₹40,000 – ₹1,80,000",
    programs: "120+",
    naac: "A",
    recognition: "UGC / AICTE",
    mode: "Online / Regular",
    placement: "Placement Cell",
  },
  {
    id: "cu",
    name: "Chandigarh University",
    location: "Mohali, Punjab",
    ranking: "NIRF #27",
    feesRange: "₹70,000 – ₹3,00,000",
    programs: "300+",
    naac: "A+",
    recognition: "UGC / AICTE",
    mode: "Online / Regular",
    placement: "Strong (90%+)",
  },
  {
    id: "su",
    name: "Savitribai Phule Pune University",
    location: "Pune, Maharashtra",
    ranking: "NIRF #18",
    feesRange: "₹20,000 – ₹80,000",
    programs: "250+",
    naac: "A++",
    recognition: "UGC",
    mode: "Regular / Distance",
    placement: "Active",
  },
];

const COMPARE_FIELDS: { key: keyof (typeof UNIVERSITIES)[0]; label: string }[] =
  [
    { key: "location", label: "Location" },
    { key: "ranking", label: "NIRF Ranking" },
    { key: "feesRange", label: "Fees Range" },
    { key: "programs", label: "Programs Offered" },
    { key: "naac", label: "NAAC Grade" },
    { key: "recognition", label: "Recognition" },
    { key: "mode", label: "Study Mode" },
    { key: "placement", label: "Placement Support" },
  ];

// ─── Quiz ─────────────────────────────────────────────────────────────────────

const QUIZ_QUESTIONS = [
  {
    id: "education",
    question: "What is your current education level?",
    options: [
      "10th",
      "12th",
      "Graduate",
      "Postgraduate",
      "Working Professional",
    ],
  },
  {
    id: "mode",
    question: "What is your preferred study mode?",
    options: ["Online", "Regular", "Distance", "Part-Time"],
  },
  {
    id: "goal",
    question: "What is your primary career goal?",
    options: [
      "Management",
      "Research",
      "Technology",
      "Business",
      "Academia",
      "Global Career",
    ],
  },
  {
    id: "budget",
    question: "What is your budget range for the program?",
    options: ["Under ₹1L", "₹1–3L", "₹3–5L", "Above ₹5L"],
  },
  {
    id: "timeline",
    question: "What is your preferred start timeline?",
    options: ["Immediate", "6 months", "1 year", "Flexible"],
  },
];

interface QuizAnswers {
  education?: string;
  mode?: string;
  goal?: string;
  budget?: string;
  timeline?: string;
}

interface RecommendedProgram {
  title: string;
  description: string;
  duration: string;
  tag: string;
}

function getRecommendations(answers: QuizAnswers): RecommendedProgram[] {
  const { education, goal, budget, mode } = answers;
  const recs: RecommendedProgram[] = [];

  if (goal === "Management" || goal === "Business") {
    recs.push({
      title: "Online MBA (Master of Business Administration)",
      description:
        "A career-accelerating degree for managers and business leaders. Available from top UGC-recognized universities with flexible online delivery.",
      duration: "1–2 Years",
      tag: "High ROI",
    });
  }
  if (goal === "Research" || goal === "Academia") {
    recs.push({
      title: "Ph.D. Admission & Research Support",
      description:
        "Expert-guided PhD registration at accredited Indian and international universities aligned to your research area.",
      duration: "3–5 Years",
      tag: "Academic Track",
    });
    recs.push({
      title: "Post-Doctoral Program (D.Litt. / D.Sc.)",
      description:
        "Advance your academic standing with post-doctoral credentials recognised globally. Ideal for professors and senior researchers.",
      duration: "1–2 Years",
      tag: "Senior Academic",
    });
  }
  if (goal === "Technology") {
    recs.push({
      title: "Online MCA / M.Tech (Computer Science & IT)",
      description:
        "Build technical depth in AI, Data Science, or Software Engineering from AICTE-approved institutions via online mode.",
      duration: "2 Years",
      tag: "Tech Career",
    });
  }
  if (goal === "Global Career") {
    recs.push({
      title: "Global Profile Building & US Visa Profile (EB-1 / O-1)",
      description:
        "Structured profile enhancement designed to qualify you for international academic and professional opportunities globally.",
      duration: "6–18 Months",
      tag: "International",
    });
  }
  if ((education === "10th" || education === "12th") && goal !== "Research") {
    recs.push({
      title: "Diploma / Certificate Programs",
      description:
        "Fast-track skill development programs across engineering, management, and digital domains — ideal for early-career acceleration.",
      duration: "6–12 Months",
      tag: "Entry Level",
    });
  }
  if (budget === "Under ₹1L" || budget === "₹1–3L") {
    recs.push({
      title: "Online UG / PG via IGNOU or SOL Delhi",
      description:
        "Cost-effective, UGC-recognized degrees through India's premier open universities, ideal for budget-conscious learners.",
      duration: "3 Years (UG) / 2 Years (PG)",
      tag: "Value Pick",
    });
  }
  if (mode === "Part-Time" && education === "Working Professional") {
    recs.push({
      title: "BITS Pilani WILP (Work Integrated Learning)",
      description:
        "Industry-integrated engineering and management programs designed specifically for working professionals without career breaks.",
      duration: "2 Years",
      tag: "Working Pro",
    });
  }

  // Default fallback
  if (recs.length === 0) {
    recs.push({
      title: "Online MBA (Master of Business Administration)",
      description:
        "A versatile, high-ROI degree suitable for most career trajectories, available from multiple UGC-recognized universities.",
      duration: "1–2 Years",
      tag: "Most Popular",
    });
    recs.push({
      title: "Professional Certificate Programs",
      description:
        "Short-duration, high-impact credentials in leadership, analytics, and digital skills to boost your current career.",
      duration: "3–6 Months",
      tag: "Career Boost",
    });
  }

  return recs.slice(0, 3);
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function SectionHeader({
  icon,
  number,
  title,
  subtitle,
}: {
  icon: React.ReactNode;
  number: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="flex flex-col items-start gap-3 mb-8">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl gradient-accent flex items-center justify-center text-white shadow-subtle">
          {icon}
        </div>
        <span className="text-xs font-body font-semibold uppercase tracking-widest text-muted-foreground">
          Tool {number}
        </span>
      </div>
      <h2 className="font-display text-2xl lg:text-3xl font-bold text-foreground">
        {title}
      </h2>
      <p className="text-muted-foreground font-body max-w-xl">{subtitle}</p>
    </div>
  );
}

// ─── University Comparison Tool ───────────────────────────────────────────────

function UniversityComparisonTool() {
  const [sel1, setSel1] = useState<string>("");
  const [sel2, setSel2] = useState<string>("");
  const [sel3, setSel3] = useState<string>("");

  const selected = useMemo(
    () =>
      [sel1, sel2, sel3]
        .filter(Boolean)
        .map((id) => UNIVERSITIES.find((u) => u.id === id))
        .filter(Boolean) as (typeof UNIVERSITIES)[0][],
    [sel1, sel2, sel3],
  );

  const available = (exclude: string[]) =>
    UNIVERSITIES.filter((u) => !exclude.includes(u.id));

  return (
    <div>
      {/* University selectors */}
      <div className="grid sm:grid-cols-3 gap-4 mb-8">
        {[
          {
            value: sel1,
            onChange: setSel1,
            label: "University 1",
            exclude: [sel2, sel3],
            ocid: "compare.uni1.select",
          },
          {
            value: sel2,
            onChange: setSel2,
            label: "University 2",
            exclude: [sel1, sel3],
            ocid: "compare.uni2.select",
          },
          {
            value: sel3,
            onChange: setSel3,
            label: "University 3 (optional)",
            exclude: [sel1, sel2],
            ocid: "compare.uni3.select",
          },
        ].map(({ value, onChange, label, exclude, ocid }) => (
          <div key={label} className="space-y-1.5">
            <Label className="text-xs font-body font-semibold text-muted-foreground uppercase tracking-wider">
              {label}
            </Label>
            <Select value={value} onValueChange={onChange}>
              <SelectTrigger
                className="bg-background border-border font-body"
                data-ocid={ocid}
              >
                <SelectValue placeholder="Select university…" />
              </SelectTrigger>
              <SelectContent>
                {available(exclude).map((u) => (
                  <SelectItem key={u.id} value={u.id} className="font-body">
                    {u.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        ))}
      </div>

      {/* Comparison table */}
      {selected.length >= 2 ? (
        <div className="overflow-x-auto rounded-xl border border-border shadow-subtle">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-primary text-primary-foreground">
                <th className="text-left px-5 py-3 font-display font-semibold min-w-[160px]">
                  Criteria
                </th>
                {selected.map((u) => (
                  <th
                    key={u.id}
                    className="text-left px-5 py-3 font-display font-semibold"
                  >
                    {u.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {COMPARE_FIELDS.map(({ key, label }, idx) => (
                <tr
                  key={key}
                  className={idx % 2 === 0 ? "bg-background" : "bg-muted/40"}
                >
                  <td className="px-5 py-3.5 font-body font-semibold text-foreground/70">
                    {label}
                  </td>
                  {selected.map((u) => (
                    <td
                      key={u.id}
                      className="px-5 py-3.5 font-body text-foreground"
                    >
                      {key === "naac" ? (
                        <Badge
                          variant="secondary"
                          className="bg-accent/10 text-accent-foreground border-accent/20 font-semibold"
                        >
                          NAAC {u[key]}
                        </Badge>
                      ) : (
                        u[key]
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div
          className="flex flex-col items-center justify-center py-16 rounded-xl border-2 border-dashed border-border text-center"
          data-ocid="compare.empty_state"
        >
          <GitCompare className="w-12 h-12 text-muted-foreground/40 mb-3" />
          <p className="font-body text-muted-foreground">
            Select at least 2 universities above to see a side-by-side
            comparison
          </p>
        </div>
      )}
    </div>
  );
}

// ─── ROI Calculator ───────────────────────────────────────────────────────────

interface ROIResult {
  totalInvestment: number;
  projectedSalary: number;
  roi5Year: number;
  breakEvenYear: number;
}

function ROICalculator() {
  const [salary, setSalary] = useState("");
  const [fee, setFee] = useState("");
  const [years, setYears] = useState("");
  const [increase, setIncrease] = useState("");
  const [result, setResult] = useState<ROIResult | null>(null);

  function calculate() {
    const s = Number.parseFloat(salary.replace(/,/g, ""));
    const f = Number.parseFloat(fee.replace(/,/g, ""));
    const y = Number.parseFloat(years);
    const pct = Number.parseFloat(increase) / 100;
    if (!s || !f || !y || !pct) return;

    const projectedSalary = s * (1 + pct);
    const annualGain = projectedSalary - s;
    const breakEvenYear = Math.ceil(f / annualGain);
    const gain5Year = annualGain * 5 - f;
    const roi5Year = Math.round((gain5Year / f) * 100);

    setResult({ totalInvestment: f, projectedSalary, roi5Year, breakEvenYear });
  }

  function reset() {
    setSalary("");
    setFee("");
    setYears("");
    setIncrease("");
    setResult(null);
  }

  const roiPercent = result ? Math.min(Math.max(result.roi5Year, 0), 300) : 0;
  const barWidth = `${Math.min((roiPercent / 300) * 100, 100)}%`;

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      {/* Inputs */}
      <div className="space-y-5">
        <div className="space-y-1.5">
          <Label className="font-body font-semibold text-foreground/80 flex items-center gap-2">
            <IndianRupee className="w-4 h-4 text-accent" />
            Current Annual Salary (₹)
          </Label>
          <Input
            type="text"
            placeholder="e.g. 5,00,000"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            className="font-body bg-background border-border"
            data-ocid="roi.salary.input"
          />
        </div>
        <div className="space-y-1.5">
          <Label className="font-body font-semibold text-foreground/80 flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-accent" />
            Total Course Fee (₹)
          </Label>
          <Input
            type="text"
            placeholder="e.g. 1,20,000"
            value={fee}
            onChange={(e) => setFee(e.target.value)}
            className="font-body bg-background border-border"
            data-ocid="roi.fee.input"
          />
        </div>
        <div className="space-y-1.5">
          <Label className="font-body font-semibold text-foreground/80 flex items-center gap-2">
            <Calendar className="w-4 h-4 text-accent" />
            Years to Complete
          </Label>
          <Input
            type="number"
            placeholder="e.g. 2"
            value={years}
            onChange={(e) => setYears(e.target.value)}
            className="font-body bg-background border-border"
            data-ocid="roi.years.input"
          />
        </div>
        <div className="space-y-1.5">
          <Label className="font-body font-semibold text-foreground/80 flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-accent" />
            Expected Salary Increase (%)
          </Label>
          <Input
            type="number"
            placeholder="e.g. 30"
            value={increase}
            onChange={(e) => setIncrease(e.target.value)}
            className="font-body bg-background border-border"
            data-ocid="roi.increase.input"
          />
        </div>
        <div className="flex gap-3 pt-2">
          <Button
            onClick={calculate}
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-body font-semibold transition-smooth flex-1"
            data-ocid="roi.calculate.button"
          >
            Calculate ROI
          </Button>
          {result && (
            <Button
              onClick={reset}
              variant="outline"
              className="font-body transition-smooth"
              data-ocid="roi.reset.button"
            >
              Reset
            </Button>
          )}
        </div>
      </div>

      {/* Results */}
      <div
        className={`rounded-xl border transition-smooth ${
          result
            ? "border-border bg-card shadow-elevated"
            : "border-dashed border-border bg-muted/30"
        } p-6 flex flex-col justify-center`}
        data-ocid="roi.results.panel"
      >
        {result ? (
          <div className="space-y-5">
            <h3 className="font-display text-lg font-bold text-foreground">
              Your ROI Summary
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  label: "Total Investment",
                  value: `₹${result.totalInvestment.toLocaleString("en-IN")}`,
                  highlight: false,
                },
                {
                  label: "Projected Salary",
                  value: `₹${Math.round(result.projectedSalary).toLocaleString("en-IN")} /yr`,
                  highlight: false,
                },
                {
                  label: "5-Year ROI",
                  value: `${result.roi5Year}%`,
                  highlight: true,
                },
                {
                  label: "Break-even Year",
                  value: `Year ${result.breakEvenYear}`,
                  highlight: false,
                },
              ].map(({ label, value, highlight }) => (
                <div
                  key={label}
                  className={`rounded-lg p-4 ${
                    highlight
                      ? "bg-accent/10 border border-accent/20"
                      : "bg-muted/50 border border-border"
                  }`}
                >
                  <div className="text-xs font-body text-muted-foreground mb-1">
                    {label}
                  </div>
                  <div
                    className={`font-display text-xl font-bold ${
                      highlight ? "text-gold" : "text-foreground"
                    }`}
                  >
                    {value}
                  </div>
                </div>
              ))}
            </div>
            {/* ROI bar */}
            <div>
              <div className="flex justify-between text-xs font-body text-muted-foreground mb-1.5">
                <span>5-Year ROI Progress</span>
                <span className="font-semibold text-accent">
                  {result.roi5Year}%
                </span>
              </div>
              <div className="h-3 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full gradient-accent rounded-full transition-all duration-700"
                  style={{ width: barWidth }}
                />
              </div>
              <div className="flex justify-between text-xs font-body text-muted-foreground mt-1">
                <span>0%</span>
                <span>300%+</span>
              </div>
            </div>
            {result.roi5Year > 0 && (
              <p className="text-xs font-body text-muted-foreground bg-muted/30 rounded-lg p-3 italic">
                * Based on salary increase post-degree over 5 years minus course
                fees. Actual returns vary by university, domain, and career
                trajectory.
              </p>
            )}
          </div>
        ) : (
          <div className="text-center py-8" data-ocid="roi.empty_state">
            <BarChart3 className="w-12 h-12 text-muted-foreground/30 mx-auto mb-3" />
            <p className="font-body text-muted-foreground text-sm">
              Fill in your details and click <strong>Calculate ROI</strong> to
              see your personalised projection
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Career Quiz ──────────────────────────────────────────────────────────────

function CareerQuiz() {
  const [answers, setAnswers] = useState<QuizAnswers>({});
  const [submitted, setSubmitted] = useState(false);
  const [expandedIdx, setExpandedIdx] = useState<number | null>(0);

  const keys = ["education", "mode", "goal", "budget", "timeline"] as const;
  const allAnswered = keys.every((k) => answers[k]);
  const recs = submitted ? getRecommendations(answers) : [];

  function handleSelect(questionId: string, option: string) {
    setAnswers((prev) => ({ ...prev, [questionId]: option }));
    const nextIdx = QUIZ_QUESTIONS.findIndex((q) => q.id === questionId) + 1;
    if (nextIdx < QUIZ_QUESTIONS.length) setExpandedIdx(nextIdx);
    else setExpandedIdx(null);
  }

  function handleSubmit() {
    if (!allAnswered) return;
    setSubmitted(true);
  }

  function handleReset() {
    setAnswers({});
    setSubmitted(false);
    setExpandedIdx(0);
  }

  function scrollToContact() {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
    else window.location.href = "/#contact";
  }

  if (submitted) {
    return (
      <div data-ocid="quiz.results.panel">
        <div className="flex items-center gap-3 mb-6">
          <CheckCircle2 className="w-6 h-6 text-accent" />
          <h3 className="font-display text-xl font-bold text-foreground">
            Recommended Programs for You
          </h3>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
          {recs.map((rec, i) => (
            <div
              key={rec.title}
              className="bg-card border border-border rounded-xl p-5 shadow-subtle hover:shadow-elevated transition-smooth"
              data-ocid={`quiz.recommendation.item.${i + 1}`}
            >
              <Badge
                variant="secondary"
                className="mb-3 bg-accent/10 text-accent-foreground border-accent/20 text-xs font-semibold"
              >
                {rec.tag}
              </Badge>
              <h4 className="font-display text-base font-bold text-foreground mb-2">
                {rec.title}
              </h4>
              <p className="font-body text-sm text-muted-foreground mb-3 leading-relaxed">
                {rec.description}
              </p>
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-body">
                <Calendar className="w-3.5 h-3.5" />
                {rec.duration}
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <Button
            onClick={scrollToContact}
            className="bg-accent text-accent-foreground hover:bg-accent/90 font-body font-semibold transition-smooth"
            data-ocid="quiz.expert_guidance.button"
          >
            Get Expert Guidance
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            onClick={handleReset}
            className="font-body transition-smooth"
            data-ocid="quiz.retake.button"
          >
            Retake Quiz
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div data-ocid="quiz.panel">
      <div className="space-y-3 mb-6">
        {QUIZ_QUESTIONS.map((q, idx) => {
          const answered = answers[q.id as keyof QuizAnswers];
          const isOpen = expandedIdx === idx;
          return (
            <div
              key={q.id}
              className={`rounded-xl border transition-smooth overflow-hidden ${
                answered
                  ? "border-primary/30 bg-primary/5"
                  : "border-border bg-card"
              }`}
              data-ocid={`quiz.question.item.${idx + 1}`}
            >
              <button
                type="button"
                className="w-full flex items-center justify-between px-5 py-4 text-left"
                onClick={() => setExpandedIdx(isOpen ? null : idx)}
                aria-expanded={isOpen}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-display font-bold transition-smooth ${
                      answered
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {answered ? <CheckCircle2 className="w-4 h-4" /> : idx + 1}
                  </span>
                  <span className="font-body font-semibold text-foreground text-sm sm:text-base">
                    {q.question}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  {answered && (
                    <Badge
                      variant="secondary"
                      className="bg-primary/10 text-primary border-primary/20 text-xs hidden sm:flex"
                    >
                      {answered}
                    </Badge>
                  )}
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                  )}
                </div>
              </button>
              {isOpen && (
                <div className="px-5 pb-5 grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {q.options.map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => handleSelect(q.id, opt)}
                      className={`px-3 py-2.5 rounded-lg border text-sm font-body font-medium text-left transition-smooth ${
                        answers[q.id as keyof QuizAnswers] === opt
                          ? "bg-primary text-primary-foreground border-primary"
                          : "bg-background border-border text-foreground hover:border-primary/50 hover:bg-primary/5"
                      }`}
                      data-ocid={`quiz.q${idx + 1}.option`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="flex items-center gap-4">
        <Button
          onClick={handleSubmit}
          disabled={!allAnswered}
          className="bg-primary text-primary-foreground hover:bg-primary/90 font-body font-semibold disabled:opacity-40 transition-smooth"
          data-ocid="quiz.submit.button"
        >
          Show My Recommendations
          <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
        {!allAnswered && (
          <p className="text-xs font-body text-muted-foreground">
            Answer all 5 questions to continue
          </p>
        )}
      </div>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export function ToolsPage() {
  function scrollToContact() {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
    else window.location.href = "/#contact";
  }

  return (
    <div
      className="min-h-screen flex flex-col bg-background"
      data-ocid="tools.page"
    >
      <Navbar />
      <main className="flex-1 pt-16 lg:pt-20">
        {/* Page Header */}
        <section className="bg-card border-b border-border py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-accent/10 text-accent border border-accent/20 rounded-full px-4 py-1.5 text-xs font-body font-semibold uppercase tracking-wider mb-5">
                Expert Tools
              </div>
              <h1 className="font-display text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-4">
                Academic Tools &{" "}
                <span className="text-gradient-primary">
                  Career Calculators
                </span>
              </h1>
              <p className="text-lg text-muted-foreground font-body leading-relaxed max-w-2xl">
                Make informed academic decisions with data. Compare
                universities, calculate your degree ROI, and discover the right
                career path — all in one place.
              </p>
            </div>
          </div>
        </section>

        {/* Tool 1 — University Comparison */}
        <section
          id="university-comparison"
          className="py-16 bg-background"
          data-ocid="tools.comparison.section"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              icon={<GitCompare className="w-5 h-5" />}
              number="01"
              title="University Comparison Tool"
              subtitle="Select up to 3 UGC-recognised Indian universities and view a structured, side-by-side comparison across 8 key parameters."
            />
            <UniversityComparisonTool />
          </div>
        </section>

        {/* Divider */}
        <div className="bg-muted/40 h-px w-full" />

        {/* Tool 2 — ROI Calculator */}
        <section
          id="roi-calculator"
          className="py-16 bg-muted/20"
          data-ocid="tools.roi.section"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              icon={<BarChart3 className="w-5 h-5" />}
              number="02"
              title="Degree ROI Calculator"
              subtitle="Understand the financial return of your education investment. Enter your current salary, course fee, and expected salary growth to see your personalised ROI projection."
            />
            <ROICalculator />
          </div>
        </section>

        {/* Divider */}
        <div className="bg-muted/40 h-px w-full" />

        {/* Tool 3 — Career Quiz */}
        <section
          id="career-quiz"
          className="py-16 bg-background"
          data-ocid="tools.quiz.section"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              icon={<BrainCircuit className="w-5 h-5" />}
              number="03"
              title="Career Quiz & Eligibility Checker"
              subtitle="Answer 5 quick questions about your background, goals, and preferences. We'll recommend the most relevant programs and academic paths for you."
            />
            <div className="max-w-3xl">
              <CareerQuiz />
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section
          className="py-20 bg-primary relative overflow-hidden"
          data-ocid="tools.final_cta.section"
        >
          {/* Decorative orbs */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-accent/10 -translate-y-1/3 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-60 h-60 rounded-full bg-white/5 translate-y-1/3 -translate-x-1/3" />
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
            <div className="inline-flex items-center gap-2 bg-accent/20 text-primary-foreground border border-accent/30 rounded-full px-4 py-1.5 text-xs font-body font-semibold uppercase tracking-wider mb-6">
              <Award className="w-3.5 h-3.5 text-accent" />
              Expert Advisory
            </div>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-primary-foreground mb-4 leading-tight">
              Not sure what's right for you?
            </h2>
            <p className="text-lg text-primary-foreground/80 font-body mb-8 max-w-xl mx-auto">
              Book a complimentary career advisory session and speak directly
              with a Learnify specialist who understands your goals.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 font-body font-semibold text-base px-8 shadow-elevated transition-smooth"
                data-ocid="tools.book_session.button"
              >
                Book Your Free Career Discussion
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <div className="flex items-center gap-2 text-primary-foreground/70 font-body text-sm">
                <Wifi className="w-4 h-4 text-accent/80" />
                Available Online · Across India
                <MapPin className="w-4 h-4 text-accent/80 ml-1" />
                Bengaluru & Kolkata
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
