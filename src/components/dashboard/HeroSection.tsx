
import React, { useEffect, useRef } from "react";
import { ArrowRight, ShieldCheck, Server, Database, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const rect = heroRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      
      const xPercent = x / rect.width;
      const yPercent = y / rect.height;
      
      const moveX = (xPercent - 0.5) * 20;
      const moveY = (yPercent - 0.5) * 20;
      
      const layers = heroRef.current.querySelectorAll('.parallax-layer');
      
      layers.forEach((layer, index) => {
        const depth = (index + 1) * 0.5;
        const translateX = moveX * depth;
        const translateY = moveY * depth;
        
        (layer as HTMLElement).style.transform = `translate(${translateX}px, ${translateY}px)`;
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div ref={heroRef} className="relative min-h-screen flex items-center justify-center px-6 md:px-12 overflow-hidden bg-[#f8fafc]">
      {/* Floating background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="parallax-layer absolute top-[10%] left-[15%] w-32 h-32 bg-cyber-blue/5 rounded-full blur-3xl"></div>
        <div className="parallax-layer absolute top-[20%] right-[15%] w-64 h-64 bg-cyber-accent/5 rounded-full blur-3xl"></div>
        <div className="parallax-layer absolute bottom-[15%] left-[25%] w-48 h-48 bg-cyber-teal/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full z-10 pt-20 md:pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 animate-fade-in-up">
            <div className="inline-block mb-2 px-3 py-1 rounded-full bg-cyber-accent/10 text-cyber-accent text-sm font-medium">
              Integrated Security Frameworks
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-cyber-navy leading-tight">
              Mature Your Organization's Security Posture
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl">
              Implement a unified approach combining CIS Controls v8 and NIST SP 800-53 to establish, measure, and enhance your organization's cybersecurity maturity across all domains.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="group bg-cyber-navy text-white hover:bg-cyber-navy/90">
                Explore Framework
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="border-cyber-navy text-cyber-navy hover:bg-cyber-navy/5">
                Request Assessment
              </Button>
            </div>
            
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-8">
              {[
                { icon: ShieldCheck, label: "CIS Implementation Groups", value: "3 Groups" },
                { icon: Server, label: "NIST Controls", value: "1,189 Controls" },
                { icon: Database, label: "Framework Categories", value: "20 Families" },
                { icon: Lock, label: "Security Functions", value: "5 Functions" },
              ].map((item, index) => (
                <div 
                  key={index} 
                  className={cn(
                    "flex flex-col items-center sm:items-start animate-fade-in",
                    { "animation-delay-200": index === 1 },
                    { "animation-delay-400": index === 2 },
                    { "animation-delay-600": index === 3 }
                  )}
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-cyber-teal/10 mb-3">
                    <item.icon className="w-5 h-5 text-cyber-teal" />
                  </div>
                  <div className="font-semibold text-xl">{item.value}</div>
                  <div className="text-gray-500 text-sm">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="relative z-10 bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100 animate-scale-in">
              <div className="bg-cyber-teal h-2"></div>
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-4">Security Framework Coverage</h2>
                <div className="space-y-4">
                  {[
                    { name: "Identify", progress: 75 },
                    { name: "Protect", progress: 65 },
                    { name: "Detect", progress: 60 },
                    { name: "Respond", progress: 45 },
                    { name: "Recover", progress: 30 },
                  ].map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-gray-500">{skill.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-100 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-cyber-teal to-cyber-blue h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-cyber-accent/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-cyber-blue/10 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
