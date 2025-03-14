
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Video, Code, FileText, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface Resource {
  title: string;
  description: string;
  link: string;
  type: "book" | "video" | "tool" | "article";
  difficulty: "beginner" | "intermediate" | "advanced";
}

const ResourcesSection = () => {
  const [activeTab, setActiveTab] = useState("all");
  
  const resources: Resource[] = [
    {
      title: "Cybersecurity Essentials",
      description: "Comprehensive introduction to key concepts and terminology",
      link: "#",
      type: "book",
      difficulty: "beginner"
    },
    {
      title: "Practical Malware Analysis",
      description: "Hands-on techniques for analyzing malicious software",
      link: "#",
      type: "book",
      difficulty: "intermediate"
    },
    {
      title: "OWASP Top 10 Explained",
      description: "Detailed walkthrough of web application vulnerabilities",
      link: "#",
      type: "video",
      difficulty: "beginner"
    },
    {
      title: "Advanced Threat Hunting",
      description: "Techniques for proactively finding threats in your environment",
      link: "#",
      type: "video",
      difficulty: "advanced"
    },
    {
      title: "Wireshark for Network Analysis",
      description: "Using Wireshark to capture and analyze network traffic",
      link: "#",
      type: "tool",
      difficulty: "intermediate"
    },
    {
      title: "Kali Linux Penetration Testing",
      description: "Leveraging Kali Linux tools for security assessments",
      link: "#",
      type: "tool",
      difficulty: "intermediate"
    },
    {
      title: "Zero Trust Architecture",
      description: "Implementation guide for modern security architectures",
      link: "#",
      type: "article",
      difficulty: "advanced"
    },
    {
      title: "Security Incident Response",
      description: "Building an effective incident response program",
      link: "#",
      type: "article",
      difficulty: "intermediate"
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "book":
        return <BookOpen className="h-4 w-4" />;
      case "video":
        return <Video className="h-4 w-4" />;
      case "tool":
        return <Code className="h-4 w-4" />;
      case "article":
        return <FileText className="h-4 w-4" />;
      default:
        return null;
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "beginner":
        return "bg-green-100 text-green-800";
      case "intermediate":
        return "bg-blue-100 text-blue-800";
      case "advanced":
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-cyber-navy">Learning Resources</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Curated collection of the best cybersecurity learning materials to accelerate your skill development
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
          <div className="flex justify-center mb-8">
            <TabsList className="bg-gray-100/80">
              <TabsTrigger value="all" className="data-[state=active]:bg-white">All</TabsTrigger>
              <TabsTrigger value="book" className="data-[state=active]:bg-white">Books</TabsTrigger>
              <TabsTrigger value="video" className="data-[state=active]:bg-white">Videos</TabsTrigger>
              <TabsTrigger value="tool" className="data-[state=active]:bg-white">Tools</TabsTrigger>
              <TabsTrigger value="article" className="data-[state=active]:bg-white">Articles</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredResources.map((resource, index) => (
                <ResourceCard key={index} resource={resource} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="book" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredResources.map((resource, index) => (
                <ResourceCard key={index} resource={resource} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="video" className="mt-0">
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
          
          <TabsContent value="article" className="mt-0">
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
      case "book":
        return <BookOpen className="h-4 w-4" />;
      case "video":
        return <Video className="h-4 w-4" />;
      case "tool":
        return <Code className="h-4 w-4" />;
      case "article":
        return <FileText className="h-4 w-4" />;
      default:
        return null;
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "beginner":
        return "bg-green-100 text-green-800";
      case "intermediate":
        return "bg-blue-100 text-blue-800";
      case "advanced":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-md group">
      <CardContent className="p-0">
        <div className="border-b p-4">
          <div className="flex justify-between items-start mb-2">
            <div className="flex items-center space-x-2">
              <span className={cn(
                "inline-flex items-center px-2 py-1 rounded-full text-xs font-medium",
                getDifficultyColor(resource.difficulty)
              )}>
                {resource.difficulty}
              </span>
            </div>
            <div className={cn(
              "flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-gray-600",
              resource.type === "book" && "bg-blue-100 text-blue-600",
              resource.type === "video" && "bg-red-100 text-red-600",
              resource.type === "tool" && "bg-green-100 text-green-600",
              resource.type === "article" && "bg-purple-100 text-purple-600",
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
            <span>View Resource</span>
            <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </a>
      </CardContent>
    </Card>
  );
};

export default ResourcesSection;
