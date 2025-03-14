
import React from "react";
import { ArrowRight, Check, Lock, Unlock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface SkillNode {
  id: string;
  title: string;
  description: string;
  status: "completed" | "in-progress" | "locked";
  icon: React.ReactNode;
}

const RoadmapSection = () => {
  const skillPaths = [
    {
      title: "Foundation",
      nodes: [
        {
          id: "networking",
          title: "Networking Fundamentals",
          description: "Learn IP addressing, subnets, routing, and key protocols",
          status: "completed",
          icon: <Check className="h-5 w-5" />
        },
        {
          id: "os-security",
          title: "Operating System Security",
          description: "Secure configurations for Windows, Linux, and macOS",
          status: "completed",
          icon: <Check className="h-5 w-5" />
        },
        {
          id: "cryptography",
          title: "Cryptography Basics",
          description: "Understand encryption, hashing, and key management",
          status: "in-progress",
          icon: <div className="h-2 w-2 bg-cyber-teal rounded-full animate-pulse" />
        },
      ]
    },
    {
      title: "Defense",
      nodes: [
        {
          id: "firewall",
          title: "Firewalls & IDS/IPS",
          description: "Configure and manage network security controls",
          status: "in-progress",
          icon: <div className="h-2 w-2 bg-cyber-teal rounded-full animate-pulse" />
        },
        {
          id: "malware",
          title: "Malware Analysis",
          description: "Techniques for analyzing malicious software",
          status: "locked",
          icon: <Lock className="h-4 w-4" />
        },
        {
          id: "vuln-management",
          title: "Vulnerability Management",
          description: "Identify, classify, and remediate security vulnerabilities",
          status: "locked",
          icon: <Lock className="h-4 w-4" />
        },
      ]
    },
    {
      title: "Offense",
      nodes: [
        {
          id: "pentesting",
          title: "Penetration Testing",
          description: "Authorized testing to identify security weaknesses",
          status: "locked",
          icon: <Lock className="h-4 w-4" />
        },
        {
          id: "web-security",
          title: "Web Application Security",
          description: "Securing web apps against OWASP vulnerabilities",
          status: "locked",
          icon: <Lock className="h-4 w-4" />
        },
        {
          id: "red-team",
          title: "Red Team Operations",
          description: "Advanced adversary simulation techniques",
          status: "locked",
          icon: <Lock className="h-4 w-4" />
        },
      ]
    }
  ];

  return (
    <section className="py-20 px-6 md:px-12 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-cyber-navy">Interactive Skill Roadmap</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Follow our structured learning path to master cybersecurity skills from basics to advanced techniques
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {skillPaths.map((path, pathIndex) => (
            <div key={pathIndex} className="flex flex-col">
              <div 
                className={cn(
                  "glass-card rounded-xl p-6 flex-1",
                  "transform transition-all duration-500 hover:-translate-y-1"
                )}
              >
                <h3 className="text-xl font-semibold mb-6 text-cyber-navy border-b border-gray-100 pb-3">
                  {path.title} Path
                </h3>
                
                <div className="space-y-4">
                  {path.nodes.map((node, nodeIndex) => (
                    <Card 
                      key={nodeIndex}
                      className={cn(
                        "border transition-all duration-300",
                        node.status === "completed" ? "border-cyber-success/30 bg-cyber-success/5" : 
                        node.status === "in-progress" ? "border-cyber-teal/30 bg-cyber-teal/5" : 
                        "border-gray-200 bg-white/80"
                      )}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-start gap-3">
                          <div className={cn(
                            "mt-1 flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center",
                            node.status === "completed" ? "bg-cyber-success text-white" : 
                            node.status === "in-progress" ? "bg-white border border-cyber-teal" : 
                            "bg-gray-100 text-gray-400"
                          )}>
                            {node.icon}
                          </div>
                          <div>
                            <h4 className="font-medium mb-1">{node.title}</h4>
                            <p className="text-sm text-gray-500">{node.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Button 
            size="lg" 
            className="group"
          >
            View Complete Roadmap
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
