import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { WhatsAppWidget } from "@/components/ui/WhatsAppWidget";
import { BlogArticlePage } from "@/pages/BlogArticlePage";
import { BlogPage } from "@/pages/BlogPage";
import { ServiceDetailPage } from "@/pages/ServiceDetailPage";
import { ToolsPage } from "@/pages/ToolsPage";
import { AcademicProfileSection } from "@/pages/sections/AcademicProfileSection";
import { CareerMentorsSection } from "@/pages/sections/CareerMentorsSection";
import { ContactSection } from "@/pages/sections/ContactSection";
import { CoursesSection } from "@/pages/sections/CoursesSection";
import { EcosystemSection } from "@/pages/sections/EcosystemSection";
import { HeroSection } from "@/pages/sections/HeroSection";
import { JourneySection } from "@/pages/sections/JourneySection";
import { TestimonialSection } from "@/pages/sections/TestimonialSection";
import { UniversityLogosSection } from "@/pages/sections/UniversityLogosSection";
import { WhyChooseSection } from "@/pages/sections/WhyChooseSection";
import { useEffect, useState } from "react";

function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 pt-16 lg:pt-20">
        <HeroSection />
        <WhyChooseSection />
        <UniversityLogosSection />
        <EcosystemSection />
        <CoursesSection />
        <JourneySection />
        <AcademicProfileSection />
        <TestimonialSection />
        <CareerMentorsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

function getRoute(): { page: string; slug?: string } {
  const hash = window.location.hash;
  if (hash.startsWith("#/tools")) return { page: "tools" };
  if (hash.startsWith("#/blog/"))
    return { page: "blog-article", slug: hash.replace("#/blog/", "") };
  if (hash.startsWith("#/blog")) return { page: "blog" };
  if (hash.startsWith("#/services/"))
    return { page: "service", slug: hash.replace("#/services/", "") };
  return { page: "home" };
}

export default function App() {
  const [route, setRoute] = useState(getRoute);

  useEffect(() => {
    const onHashChange = () => setRoute(getRoute());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return (
    <>
      {route.page === "tools" && <ToolsPage />}
      {route.page === "blog-article" && (
        <BlogArticlePage slug={route.slug ?? ""} />
      )}
      {route.page === "blog" && <BlogPage />}
      {route.page === "service" && (
        <ServiceDetailPage slug={route.slug ?? ""} />
      )}
      {route.page === "home" && <HomePage />}
      <WhatsAppWidget />
    </>
  );
}
