
import React from "react";
import { Button } from "@/components/ui/button";
import { Shield, ArrowRight } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-20 px-6 md:px-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-cyber-navy opacity-95 z-0"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyber-blue via-cyber-teal to-cyber-accent"></div>
      <div className="absolute -top-32 -left-32 w-64 h-64 bg-cyber-blue opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-cyber-accent opacity-10 rounded-full blur-3xl"></div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-white/10 backdrop-blur-sm">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Start Your Cybersecurity Journey Today
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            Create your personalized learning path, track your progress, and connect with resources that will help you grow your cybersecurity career.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-white text-cyber-navy hover:bg-gray-100 group"
            >
              Create Your Roadmap
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-white border-white hover:bg-white/10"
            >
              Explore Resources
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
