
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
  const cisControls = [
    {
      title: "Basic CIS Controls",
      implementationGroup: "IG1",
      description: "Essential cyber hygiene - the foundation for any cybersecurity maturity program",
      nodes: [
        {
          id: "inventory-control",
          title: "Inventory and Control of Enterprise Assets",
          description: "Actively manage all enterprise assets within your infrastructure",
          status: "completed",
          icon: <Check className="h-5 w-5" />
        },
        {
          id: "software-inventory",
          title: "Inventory and Control of Software Assets",
          description: "Actively manage all software on devices connected to infrastructure",
          status: "completed",
          icon: <Check className="h-5 w-5" />
        },
        {
          id: "data-protection",
          title: "Data Protection",
          description: "Develop processes to identify, classify, secure, and delete sensitive data",
          status: "in-progress",
          icon: <div className="h-2 w-2 bg-cyber-teal rounded-full animate-pulse" />
        },
      ]
    },
    {
      title: "Foundational CIS Controls",
      implementationGroup: "IG2",
      description: "Helps organizations establish stronger operational maturity and address more sophisticated threats",
      nodes: [
        {
          id: "access-control",
          title: "Access Control Management",
          description: "Create processes to secure identity management and access control",
          status: "in-progress",
          icon: <div className="h-2 w-2 bg-cyber-teal rounded-full animate-pulse" />
        },
        {
          id: "security-config",
          title: "Security Configuration Management",
          description: "Establish and maintain the secure configuration of enterprise assets",
          status: "locked",
          icon: <Lock className="h-4 w-4" />
        },
        {
          id: "vulnerability-management",
          title: "Vulnerability Management",
          description: "Identify, evaluate, and remediate security vulnerabilities",
          status: "locked",
          icon: <Lock className="h-4 w-4" />
        },
      ]
    },
    {
      title: "Organizational CIS Controls",
      implementationGroup: "IG3",
      description: "Designed for organizations with mature cybersecurity practices and significant resources",
      nodes: [
        {
          id: "penetration-test",
          title: "Penetration Testing",
          description: "Test your defenses by simulating attacks from malicious actors",
          status: "locked",
          icon: <Lock className="h-4 w-4" />
        },
        {
          id: "incident-response",
          title: "Incident Response Management",
          description: "Establish processes to respond to and mitigate cybersecurity incidents",
          status: "locked",
          icon: <Lock className="h-4 w-4" />
        },
        {
          id: "network-monitoring",
          title: "Network Monitoring and Defense",
          description: "Operate processes to detect, alert, and respond to network-based threats",
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-cyber-navy">CIS Controls Implementation Roadmap</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Follow a structured path to implement the CIS Critical Security Controls v8 based on your organization's implementation group
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {cisControls.map((group, pathIndex) => (
            <div key={pathIndex} className="flex flex-col">
              <div 
                className={cn(
                  "glass-card rounded-xl p-6 flex-1",
                  "transform transition-all duration-500 hover:-translate-y-1"
                )}
              >
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-semibold text-cyber-navy">
                    {group.title}
                  </h3>
                  <span className="px-3 py-1 bg-cyber-teal/10 text-cyber-teal text-sm font-medium rounded-full">
                    {group.implementationGroup}
                  </span>
                </div>
                
                <p className="text-sm text-gray-500 mb-6">{group.description}</p>
                
                <div className="space-y-4">
                  {group.nodes.map((node, nodeIndex) => (
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
            View Complete CIS Controls
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
