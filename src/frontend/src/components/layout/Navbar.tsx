import { Button } from "@/components/ui/button";
import { ChevronDown, GraduationCap, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const PROGRAMS_GROUP = [
  { label: "Online UG Programs", href: "#/services/online-ug" },
  { label: "Online PG Programs", href: "#/services/online-pg" },
  { label: "PhD Admissions", href: "#/services/phd-admissions" },
  { label: "Post Doctorate Programs", href: "#/services/post-doctorate" },
  { label: "Study Abroad", href: "#/services/study-abroad" },
];

const ADVANCED_SERVICES_GROUP = [
  { label: "Patents & IP", href: "#/services/patents" },
  { label: "Research Publications", href: "#/services/research-publications" },
  { label: "Book Chapters", href: "#/services/book-chapters" },
  {
    label: "Recommendation Letters",
    href: "#/services/recommendation-letters",
  },
];

const TOP_NAV = [
  { label: "Tools", href: "#/tools", isRoute: true },
  { label: "Blog", href: "#/blog", isRoute: true },
  { label: "Mentors", href: "#mentors", isRoute: false },
  { label: "Contact", href: "#contact", isRoute: false },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);
  const [mobileProgramsOpen, setMobileProgramsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setProgramsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function handleNavClick(href: string, isRoute: boolean) {
    setIsOpen(false);
    setProgramsOpen(false);
    if (isRoute || href.startsWith("#/")) {
      window.location.hash = href.slice(1);
      return;
    }
    if (window.location.hash.startsWith("#/")) {
      window.location.hash = "";
      setTimeout(() => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
      return;
    }
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        isScrolled
          ? "bg-card/97 backdrop-blur-md border-b border-border shadow-elevated"
          : "bg-card border-b border-border/60"
      }`}
      data-ocid="navbar"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <button
            type="button"
            className="flex items-center gap-2.5 group"
            onClick={() => {
              window.location.hash = "";
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            data-ocid="navbar.logo"
          >
            <div className="w-9 h-9 rounded-lg gradient-accent flex items-center justify-center shadow-subtle group-hover:shadow-elevated transition-smooth">
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-display text-xl font-bold text-primary tracking-tight">
                Learnify
              </span>
              <span className="text-[9px] font-body text-muted-foreground tracking-widest uppercase hidden sm:block">
                SSN Initiative
              </span>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav
            className="hidden lg:flex items-center gap-0.5"
            aria-label="Main navigation"
          >
            {/* Programs Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setProgramsOpen(!programsOpen)}
                className="flex items-center gap-1 px-3.5 py-2 text-sm font-body font-medium text-muted-foreground hover:text-primary transition-colors duration-200 rounded-md hover:bg-primary/5"
                aria-expanded={programsOpen}
                data-ocid="navbar.programs-dropdown"
              >
                Programs
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${programsOpen ? "rotate-180" : ""}`}
                />
              </button>
              {programsOpen && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-card border border-border rounded-xl shadow-elevated py-2 z-50 animate-fade-in">
                  {/* PROGRAMS group */}
                  <div className="px-3 pb-1">
                    <span className="text-[10px] font-body font-bold text-accent uppercase tracking-widest px-2">
                      Programs
                    </span>
                  </div>
                  {PROGRAMS_GROUP.map((item) => (
                    <button
                      key={item.href}
                      type="button"
                      onClick={() => handleNavClick(item.href, true)}
                      className="w-full text-left px-4 py-2.5 text-sm font-body text-muted-foreground hover:text-primary hover:bg-primary/5 transition-colors duration-150"
                      data-ocid={`navbar.programs.${item.label.toLowerCase().replace(/[\s&/]/g, "-")}`}
                    >
                      {item.label}
                    </button>
                  ))}
                  <div className="my-1.5 border-t border-border/60 mx-3" />
                  {/* ADVANCED SERVICES group */}
                  <div className="px-3 pb-1">
                    <span className="text-[10px] font-body font-bold text-accent uppercase tracking-widest px-2">
                      Advanced Services
                    </span>
                  </div>
                  {ADVANCED_SERVICES_GROUP.map((item) => (
                    <button
                      key={item.href}
                      type="button"
                      onClick={() => handleNavClick(item.href, true)}
                      className="w-full text-left px-4 py-2.5 text-sm font-body text-muted-foreground hover:text-primary hover:bg-primary/5 transition-colors duration-150"
                      data-ocid={`navbar.services.${item.label.toLowerCase().replace(/[\s&/]/g, "-")}`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {TOP_NAV.map((link) => (
              <button
                key={link.href}
                type="button"
                onClick={() => handleNavClick(link.href, link.isRoute)}
                className="px-3.5 py-2 text-sm font-body font-medium text-muted-foreground hover:text-primary transition-colors duration-200 rounded-md hover:bg-primary/5"
                data-ocid={`navbar.link.${link.label.toLowerCase()}`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              type="button"
              onClick={() => handleNavClick("#contact", false)}
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-body font-semibold shadow-subtle hover:shadow-elevated transition-smooth text-sm px-5"
              data-ocid="navbar.cta"
            >
              Enquire Now
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-md text-muted-foreground hover:text-primary hover:bg-primary/5 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            data-ocid="navbar.mobile-toggle"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div
            className="lg:hidden border-t border-border py-4 animate-fade-in max-h-[80vh] overflow-y-auto"
            data-ocid="navbar.mobile-menu"
          >
            <nav
              className="flex flex-col gap-0.5"
              aria-label="Mobile navigation"
            >
              {/* Programs accordion */}
              <button
                type="button"
                onClick={() => setMobileProgramsOpen(!mobileProgramsOpen)}
                className="flex items-center justify-between text-left px-4 py-3 text-sm font-body font-medium text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-md transition-colors"
                data-ocid="navbar.mobile-programs-toggle"
              >
                <span>Programs</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${mobileProgramsOpen ? "rotate-180" : ""}`}
                />
              </button>
              {mobileProgramsOpen && (
                <div className="ml-4 pl-3 border-l border-border/60 animate-fade-in">
                  <p className="text-[10px] font-body font-bold text-accent uppercase tracking-widest px-2 py-1">
                    Programs
                  </p>
                  {PROGRAMS_GROUP.map((item) => (
                    <button
                      key={item.href}
                      type="button"
                      onClick={() => handleNavClick(item.href, true)}
                      className="block w-full text-left px-2 py-2 text-sm font-body text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-md transition-colors"
                    >
                      {item.label}
                    </button>
                  ))}
                  <p className="text-[10px] font-body font-bold text-accent uppercase tracking-widest px-2 py-1 mt-2">
                    Advanced Services
                  </p>
                  {ADVANCED_SERVICES_GROUP.map((item) => (
                    <button
                      key={item.href}
                      type="button"
                      onClick={() => handleNavClick(item.href, true)}
                      className="block w-full text-left px-2 py-2 text-sm font-body text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-md transition-colors"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              )}

              {TOP_NAV.map((link) => (
                <button
                  key={link.href}
                  type="button"
                  onClick={() => handleNavClick(link.href, link.isRoute)}
                  className="text-left px-4 py-3 text-sm font-body font-medium text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-md transition-colors"
                  data-ocid={`navbar.mobile-link.${link.label.toLowerCase()}`}
                >
                  {link.label}
                </button>
              ))}

              <div className="pt-3 mt-2 border-t border-border">
                <Button
                  type="button"
                  onClick={() => handleNavClick("#contact", false)}
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-body font-semibold"
                  data-ocid="navbar.mobile-cta"
                >
                  Enquire Now
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
