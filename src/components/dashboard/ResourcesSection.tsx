
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Video, Code, FileText, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface Resource {
  title: string;
  description: string;
  link: string;
  type: "guide" | "tool" | "framework" | "assessment";
  domain: "governance" | "technical" | "operations" | "compliance";
}

const ResourcesSection = () => {
  const [activeTab, setActiveTab] = useState("all");
  
  const resources: Resource[] = [
    {
      title: "ISO 27001 Implementation",
      description: "Guide to establishing information security management systems",
      link: "#",
      type: "guide",
      domain: "governance"
    },
    {
      title: "Cloud Security Architecture",
      description: "Enterprise patterns for secure cloud infrastructure design",
      link: "#",
      type: "framework",
      domain: "technical"
    },
    {
      title: "Zero Trust Architecture Guide",
      description: "Framework for implementing Zero Trust across your organization",
      link: "#",
      type: "guide",
      domain: "technical"
    },
    {
      title: "NIST Cybersecurity Framework",
      description: "Implement the NIST CSF for comprehensive security posture",
      link: "#",
      type: "framework",
      domain: "governance"
    },
    {
      title: "Security Operations Playbook",
      description: "Streamline incident detection and response procedures",
      link: "#",
      type: "guide",
      domain: "operations"
    },
    {
      title: "Vulnerability Management Platform",
      description: "Enterprise-grade vulnerability scanning and remediation",
      link: "#",
      type: "tool",
      domain: "operations"
    },
    {
      title: "Compliance Readiness Assessment",
      description: "Evaluate your organization's regulatory compliance posture",
      link: "#",
      type: "assessment",
      domain: "compliance"
    },
    {
      title: "Cloud Security Posture Management",
      description: "Tools to maintain secure configuration of cloud resources",
      link: "#",
      type: "tool",
      domain: "technical"
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "guide":
        return <BookOpen className="h-4 w-4" />;
      case "tool":
        return <Code className="h-4 w-4" />;
      case "framework":
        return <FileText className="h-4 w-4" />;
      case "assessment":
        return <Video className="h-4 w-4" />;
      default:
        return null;
    }
  };

  const getDomainColor = (domain: string) => {
    switch (domain) {
      case "governance":
        return "bg-blue-100 text-blue-800";
      case "technical":
        return "bg-green-100 text-green-800";
      case "operations":
        return "bg-amber-100 text-amber-800";
      case "compliance":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const filteredResources = activeTab === "all" 
    ? resources 
    : resources.filter(resource => resource.type === activeTab);

  return (
    <section className="py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-cyber-navy">Security Implementation Resources</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Curated collection of enterprise security frameworks, tools, and methodologies to strengthen your organization's security posture
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
          <div className="flex justify-center mb-8">
            <TabsList className="bg-gray-100/80">
              <TabsTrigger value="all" className="data-[state=active]:bg-white">All</TabsTrigger>
              <TabsTrigger value="guide" className="data-[state=active]:bg-white">Guides</TabsTrigger>
              <TabsTrigger value="tool" className="data-[state=active]:bg-white">Tools</TabsTrigger>
              <TabsTrigger value="framework" className="data-[state=active]:bg-white">Frameworks</TabsTrigger>
              <TabsTrigger value="assessment" className="data-[state=active]:bg-white">Assessments</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredResources.map((resource, index) => (
                <ResourceCard key={index} resource={resource} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="guide" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredResources.map((resource, index) => (
                <ResourceCard key={index} resource={resource} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="tool" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredResources.map((resource, index) => (
                <ResourceCard key={index} resource={resource} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="framework" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredResources.map((resource, index) => (
                <ResourceCard key={index} resource={resource} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="assessment" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredResources.map((resource, index) => (
                <ResourceCard key={index} resource={resource} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

const ResourceCard = ({ resource }: { resource: Resource }) => {
  const getTypeIcon = (type: string) => {
    switch (type) {
      case "guide":
        return <BookOpen className="h-4 w-4" />;
      case "tool":
        return <Code className="h-4 w-4" />;
      case "framework":
        return <FileText className="h-4 w-4" />;
      case "assessment":
        return <Video className="h-4 w-4" />;
      default:
        return null;
    }
  };

  const getDomainColor = (domain: string) => {
    switch (domain) {
      case "governance":
        return "bg-blue-100 text-blue-800";
      case "technical":
        return "bg-green-100 text-green-800";
      case "operations":
        return "bg-amber-100 text-amber-800";
      case "compliance":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-md group backdrop-blur-sm bg-white/90 border border-gray-100">
      <CardContent className="p-0">
        <div className="border-b p-4">
          <div className="flex justify-between items-start mb-2">
            <div className="flex items-center space-x-2">
              <span className={cn(
                "inline-flex items-center px-2 py-1 rounded-full text-xs font-medium",
                getDomainColor(resource.domain)
              )}>
                {resource.domain}
              </span>
            </div>
            <div className={cn(
              "flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-gray-600",
              resource.type === "guide" && "bg-blue-100 text-blue-600",
              resource.type === "tool" && "bg-green-100 text-green-600",
              resource.type === "framework" && "bg-purple-100 text-purple-600",
              resource.type === "assessment" && "bg-red-100 text-red-600",
            )}>
              {getTypeIcon(resource.type)}
            </div>
          </div>
          <h3 className="font-medium text-lg mb-2">{resource.title}</h3>
          <p className="text-gray-500 text-sm">{resource.description}</p>
        </div>
        <a 
          href={resource.link} 
          className="block p-3 text-center text-sm font-medium text-cyber-teal hover:text-cyber-blue transition-colors"
        >
          <div className="flex items-center justify-center space-x-1">
            <span>Access Resource</span>
            <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </a>
      </CardContent>
    </Card>
  );
};

export default ResourcesSection;
