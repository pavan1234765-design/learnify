import { useState } from "react";

interface University {
  name: string;
  shortName: string;
  initials: string;
  location: string;
  logoUrl: string;
}

const universities: University[] = [
  {
    name: "Saveetha Amaravati University",
    shortName: "Saveetha Amaravati",
    initials: "SA",
    location: "Vijayawada, Andhra Pradesh",
    logoUrl:
      "https://saveethaamaravatiuniversity.org/wp-content/uploads/logo.png",
  },
  {
    name: "Matrix Skill Tech University",
    shortName: "Matrix Skill Tech",
    initials: "MS",
    location: "Sikkim",
    logoUrl: "https://www.msu.ac.in/images/logo.png",
  },
  {
    name: "Nirwan University",
    shortName: "Nirwan University",
    initials: "NU",
    location: "Jaipur, Rajasthan",
    logoUrl: "https://www.nirwanuniversity.ac.in/images/logo.png",
  },
  {
    name: "Asian International University",
    shortName: "Asian International",
    initials: "AI",
    location: "Manipur",
    logoUrl: "https://aiu.edu.in/images/logo.png",
  },
  {
    name: "Shri Rukmani Dwarkadhish University of Science & Technology",
    shortName: "SRDU Science & Tech",
    initials: "SR",
    location: "Sikkim",
    logoUrl: "https://srdu.edu.in/images/logo.png",
  },
  {
    name: "Sikkim Sardar Patel University",
    shortName: "Sikkim Sardar Patel",
    initials: "SP",
    location: "Namchi, Sikkim",
    logoUrl: "https://www.spusikkim.edu.in/images/logo.png",
  },
  {
    name: "MK University (Madurai Kamaraj)",
    shortName: "MK University",
    initials: "MK",
    location: "Tamil Nadu",
    logoUrl: "https://mkuniversity.ac.in/new/images/mkulogo.png",
  },
  {
    name: "Duke International University",
    shortName: "Duke International",
    initials: "DI",
    location: "South Sikkim",
    logoUrl: "https://www.dukeinternationaluniversity.ac.in/images/logo.png",
  },
  {
    name: "Maharaja Agrasen Himalayan Garhwal University",
    shortName: "MAHGU",
    initials: "MH",
    location: "Uttarakhand",
    logoUrl: "https://hgu.ac.in/images/logo.png",
  },
  {
    name: "Maya Devi University",
    shortName: "Maya Devi University",
    initials: "MD",
    location: "Dehradun, Uttarakhand",
    logoUrl: "https://maya.edu.in/images/logo.png",
  },
  {
    name: "AISECT Teacher Training Centre",
    shortName: "AISECT",
    initials: "AT",
    location: "Pan India",
    logoUrl:
      "https://aisect.org/wp-content/uploads/2020/06/AISECT-Logo-white.png",
  },
  {
    name: "Sikkim Skills University",
    shortName: "Sikkim Skills",
    initials: "SS",
    location: "Sikkim",
    logoUrl: "https://www.sikkimskilluniversity.ac.in/images/logo.png",
  },
  {
    name: "Sikkim Professional University",
    shortName: "Sikkim Professional",
    initials: "SP",
    location: "Gangtok, Sikkim",
    logoUrl: "https://www.spu.ac/images/logo.png",
  },
  {
    name: "North East Christian University",
    shortName: "NE Christian Univ.",
    initials: "NC",
    location: "Dimapur, Nagaland",
    logoUrl: "https://necu.ac.in/images/logo.png",
  },
];

function InitialsBadge({
  initials,
  size = 64,
}: { initials: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient
          id={`grad-${initials}`}
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="oklch(0.35 0.06 250)" />
          <stop offset="100%" stopColor="oklch(0.28 0.08 250)" />
        </linearGradient>
      </defs>
      <circle cx="32" cy="32" r="30" fill={`url(#grad-${initials})`} />
      <circle
        cx="32"
        cy="32"
        r="30"
        fill="none"
        stroke="oklch(0.67 0.19 75)"
        strokeWidth="1.5"
      />
      <text
        x="32"
        y="37"
        textAnchor="middle"
        fontFamily="Plus Jakarta Sans, sans-serif"
        fontWeight="700"
        fontSize="20"
        fill="white"
        letterSpacing="1"
      >
        {initials}
      </text>
    </svg>
  );
}

function UniversityCard({
  university,
  index,
}: { university: University; index: number }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div
      data-ocid={`university.item.${index + 1}`}
      className="group flex flex-col items-center gap-3 p-5 bg-card border border-border rounded-xl
        hover:border-primary/40 hover:shadow-elevated transition-smooth cursor-default"
    >
      <div className="w-16 h-16 flex items-center justify-center rounded-full overflow-hidden bg-secondary shrink-0">
        {!imgError ? (
          <img
            src={university.logoUrl}
            alt={`${university.name} logo`}
            className="w-full h-full object-contain"
            onError={() => setImgError(true)}
          />
        ) : (
          <InitialsBadge initials={university.initials} size={64} />
        )}
      </div>
      <div className="text-center min-w-0">
        <p className="text-sm font-semibold text-foreground leading-snug line-clamp-2 group-hover:text-navy transition-colors duration-200">
          {university.shortName}
        </p>
        <p className="text-xs text-gold mt-1 truncate">{university.location}</p>
      </div>
    </div>
  );
}

export function UniversityLogosSection() {
  return (
    <section
      id="partner-universities"
      data-ocid="universities.section"
      className="py-16 lg:py-20 bg-muted/40"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-xs font-semibold text-navy tracking-wide uppercase">
              Verified University Network
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-3">
            Our Partner Universities
          </h2>
          <p className="text-muted-foreground text-base max-w-xl mx-auto">
            70+ Verified Universities &nbsp;·&nbsp; UGC-Recognized Partners
            &nbsp;·&nbsp; Trusted Across India
          </p>
        </div>

        {/* Grid */}
        <div
          data-ocid="universities.list"
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4"
        >
          {universities.map((university, index) => (
            <UniversityCard
              key={university.name}
              university={university}
              index={index}
            />
          ))}
        </div>

        {/* Footer note */}
        <p className="text-center text-xs text-muted-foreground mt-8">
          And 56+ more universities across India and globally
        </p>
      </div>
    </section>
  );
}
