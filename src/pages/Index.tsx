
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
