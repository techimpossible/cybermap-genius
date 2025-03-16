
import React, { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/dashboard/HeroSection";
import RoadmapSection from "@/components/dashboard/RoadmapSection";
import ResourcesSection from "@/components/dashboard/ResourcesSection";
import ProgressSection from "@/components/dashboard/ProgressSection";
import CallToAction from "@/components/dashboard/CallToAction";
import PageTransition from "@/components/common/PageTransition";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Set page title to reflect the combined frameworks
    document.title = "SecureSphere | CIS v8 & NIST 800-53 Security Framework";
  }, []);

  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <HeroSection />
          <RoadmapSection />
          <ResourcesSection />
          <ProgressSection />
          <CallToAction />
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Index;
