
import React, { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Database, Server, Lock, CheckCircle2, AlertCircle, ExternalLink } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import PageTransition from "@/components/common/PageTransition";

interface SecurityControl {
  id: string;
  name: string;
  description: string;
  nistMapping: string[];
  implementationLevel: "IG1" | "IG2" | "IG3";
  status?: "implemented" | "in-progress" | "planned";
}

const Controls = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Security Controls | CIS v8 & NIST 800-53";
  }, []);

  const controlsByGroup: Record<string, SecurityControl[]> = {
    "Access Control": [
      {
        id: "CIS-5.1",
        name: "Establish and Maintain an Inventory of Accounts",
        description: "Establish and maintain an inventory of all accounts managed in the enterprise.",
        nistMapping: ["AC-2", "IA-8"],
        implementationLevel: "IG1",
        status: "implemented"
      },
      {
        id: "CIS-5.2",
        name: "Use Unique Passwords",
        description: "Use unique passwords for all enterprise assets.",
        nistMapping: ["IA-5"],
        implementationLevel: "IG1",
        status: "implemented"
      },
      {
        id: "CIS-5.3",
        name: "Disable Dormant Accounts",
        description: "Delete or disable any dormant accounts after a period of inactivity.",
        nistMapping: ["AC-2(3)"],
        implementationLevel: "IG1",
        status: "in-progress"
      },
      {
        id: "CIS-5.4",
        name: "Restrict Administrator Privileges",
        description: "Restrict administrator privileges to dedicated administrator accounts on enterprise assets.",
        nistMapping: ["AC-6(5)", "AC-6(7)"],
        implementationLevel: "IG1",
        status: "in-progress"
      }
    ],
    "Data Protection": [
      {
        id: "CIS-3.1",
        name: "Establish and Maintain a Data Management Process",
        description: "Establish and maintain a data management process across the enterprise.",
        nistMapping: ["PM-5", "MP-1"],
        implementationLevel: "IG1",
        status: "implemented"
      },
      {
        id: "CIS-3.2",
        name: "Establish and Maintain a Data Inventory",
        description: "Establish and maintain a data inventory that identifies sensitive data.",
        nistMapping: ["CM-8", "PM-5"],
        implementationLevel: "IG1",
        status: "in-progress"
      },
      {
        id: "CIS-3.3",
        name: "Configure Data Access Control Lists",
        description: "Configure data access control lists based on a user's need to know.",
        nistMapping: ["AC-3", "AC-24"],
        implementationLevel: "IG1",
        status: "planned"
      },
      {
        id: "CIS-3.4",
        name: "Encrypt Sensitive Data at Rest",
        description: "Encrypt sensitive data at rest on servers, applications, and databases.",
        nistMapping: ["SC-28", "SC-28(1)"],
        implementationLevel: "IG2",
        status: "planned"
      }
    ],
    "Incident Response": [
      {
        id: "CIS-17.1",
        name: "Designate Personnel for Incident Handling",
        description: "Designate personnel to manage incident handling.",
        nistMapping: ["IR-2", "IR-4", "IR-7"],
        implementationLevel: "IG1",
        status: "implemented"
      },
      {
        id: "CIS-17.2",
        name: "Establish and Maintain Contact Information",
        description: "Establish and maintain contact information for reporting security incidents.",
        nistMapping: ["IR-6", "IR-4", "IR-7"],
        implementationLevel: "IG1",
        status: "implemented"
      },
      {
        id: "CIS-17.3",
        name: "Establish and Maintain an Incident Response Process",
        description: "Establish and maintain an incident response process.",
        nistMapping: ["IR-8", "IR-4", "IR-5"],
        implementationLevel: "IG1",
        status: "in-progress"
      }
    ],
    "Network Infrastructure": [
      {
        id: "CIS-12.1",
        name: "Ensure Network Infrastructure is Up-to-Date",
        description: "Ensure network infrastructure is up-to-date.",
        nistMapping: ["CM-7", "CM-2", "CM-8"],
        implementationLevel: "IG1",
        status: "in-progress"
      },
      {
        id: "CIS-12.2",
        name: "Establish and Maintain a Secure Network Architecture",
        description: "Establish and maintain a secure network architecture.",
        nistMapping: ["SC-7", "SC-5", "AC-4"],
        implementationLevel: "IG2",
        status: "planned"
      },
      {
        id: "CIS-12.3",
        name: "Segment Networks Based on Sensitivity",
        description: "Securely segment internal networks based on sensitivity.",
        nistMapping: ["SC-7", "AC-4", "SC-3"],
        implementationLevel: "IG2",
        status: "planned"
      }
    ]
  };

  const getStatusColor = (status?: string) => {
    switch (status) {
      case "implemented":
        return "text-green-500";
      case "in-progress":
        return "text-amber-500";
      case "planned":
        return "text-blue-500";
      default:
        return "text-gray-500";
    }
  };

  const getImplementationLevelBadge = (level: string) => {
    switch (level) {
      case "IG1":
        return "bg-green-100 text-green-800";
      case "IG2":
        return "bg-blue-100 text-blue-800";
      case "IG3":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-16 pb-20">
          <div className="container mx-auto px-4 sm:px-6 py-8">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold mb-6 text-cyber-navy">Security Controls</h1>
              <p className="text-lg text-gray-600 mb-8">
                Comprehensive implementation of CIS Controls v8 mapped to NIST SP 800-53 security controls. These security safeguards establish the foundation for a robust security program.
              </p>

              <Alert className="mb-8 bg-blue-50 border-blue-200">
                <AlertCircle className="h-5 w-5 text-blue-600" />
                <AlertTitle className="text-blue-800">Implementation Guidance</AlertTitle>
                <AlertDescription className="text-blue-700">
                  Controls are organized by Implementation Group (IG). Start with IG1 controls as they represent the essential cyber hygiene practices that should be implemented in every organization.
                </AlertDescription>
              </Alert>

              <Tabs defaultValue="all">
                <TabsList className="mb-6">
                  <TabsTrigger value="all">All Controls</TabsTrigger>
                  <TabsTrigger value="implemented">Implemented</TabsTrigger>
                  <TabsTrigger value="in-progress">In Progress</TabsTrigger>
                  <TabsTrigger value="planned">Planned</TabsTrigger>
                </TabsList>

                <TabsContent value="all" className="space-y-6">
                  <Accordion type="multiple" className="space-y-4">
                    {Object.entries(controlsByGroup).map(([category, controls]) => (
                      <AccordionItem 
                        key={category} 
                        value={category}
                        className="border rounded-lg overflow-hidden shadow-sm"
                      >
                        <AccordionTrigger className="px-6 py-4 bg-gray-50 hover:bg-gray-100">
                          <div className="flex items-center gap-3">
                            {category === "Access Control" && <Lock className="h-5 w-5 text-cyber-teal" />}
                            {category === "Data Protection" && <Database className="h-5 w-5 text-cyber-teal" />}
                            {category === "Incident Response" && <Shield className="h-5 w-5 text-cyber-teal" />}
                            {category === "Network Infrastructure" && <Server className="h-5 w-5 text-cyber-teal" />}
                            <span className="font-medium text-lg">{category}</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-6 py-3">
                          <div className="space-y-4">
                            {controls.map(control => (
                              <Card key={control.id} className="border-gray-200">
                                <CardHeader className="pb-2">
                                  <div className="flex justify-between items-start">
                                    <div className="flex items-center gap-2">
                                      <span 
                                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getImplementationLevelBadge(control.implementationLevel)}`}
                                      >
                                        {control.implementationLevel}
                                      </span>
                                      <span className={`text-sm font-medium ${getStatusColor(control.status)}`}>
                                        {control.status === "implemented" && "Implemented"}
                                        {control.status === "in-progress" && "In Progress"}
                                        {control.status === "planned" && "Planned"}
                                      </span>
                                    </div>
                                    <span className="text-sm font-mono bg-gray-100 px-2 py-0.5 rounded">
                                      {control.id}
                                    </span>
                                  </div>
                                  <CardTitle className="text-lg mt-2">{control.name}</CardTitle>
                                </CardHeader>
                                <CardContent className="pt-0">
                                  <p className="text-gray-600 mb-3">{control.description}</p>
                                  <div className="flex flex-wrap gap-2 mt-3">
                                    <span className="text-sm font-medium text-gray-500">NIST SP 800-53:</span>
                                    {control.nistMapping.map(mapping => (
                                      <span 
                                        key={mapping} 
                                        className="inline-flex items-center px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-800 rounded"
                                      >
                                        {mapping}
                                      </span>
                                    ))}
                                  </div>
                                </CardContent>
                              </Card>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </TabsContent>

                <TabsContent value="implemented" className="space-y-6">
                  <div className="space-y-4">
                    {Object.values(controlsByGroup).flat().filter(control => control.status === "implemented").map(control => (
                      <Card key={control.id} className="border-green-100">
                        <CardHeader className="pb-2">
                          <div className="flex justify-between items-start">
                            <div className="flex items-center gap-2">
                              <span 
                                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getImplementationLevelBadge(control.implementationLevel)}`}
                              >
                                {control.implementationLevel}
                              </span>
                              <span className="text-sm font-medium text-green-500 flex items-center">
                                <CheckCircle2 className="h-4 w-4 mr-1" />
                                Implemented
                              </span>
                            </div>
                            <span className="text-sm font-mono bg-gray-100 px-2 py-0.5 rounded">
                              {control.id}
                            </span>
                          </div>
                          <CardTitle className="text-lg mt-2">{control.name}</CardTitle>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <p className="text-gray-600 mb-3">{control.description}</p>
                          <div className="flex flex-wrap gap-2 mt-3">
                            <span className="text-sm font-medium text-gray-500">NIST SP 800-53:</span>
                            {control.nistMapping.map(mapping => (
                              <span 
                                key={mapping} 
                                className="inline-flex items-center px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-800 rounded"
                              >
                                {mapping}
                              </span>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="in-progress" className="space-y-6">
                  <div className="space-y-4">
                    {Object.values(controlsByGroup).flat().filter(control => control.status === "in-progress").map(control => (
                      <Card key={control.id} className="border-amber-100">
                        <CardHeader className="pb-2">
                          <div className="flex justify-between items-start">
                            <div className="flex items-center gap-2">
                              <span 
                                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getImplementationLevelBadge(control.implementationLevel)}`}
                              >
                                {control.implementationLevel}
                              </span>
                              <span className="text-sm font-medium text-amber-500">
                                In Progress
                              </span>
                            </div>
                            <span className="text-sm font-mono bg-gray-100 px-2 py-0.5 rounded">
                              {control.id}
                            </span>
                          </div>
                          <CardTitle className="text-lg mt-2">{control.name}</CardTitle>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <p className="text-gray-600 mb-3">{control.description}</p>
                          <div className="flex flex-wrap gap-2 mt-3">
                            <span className="text-sm font-medium text-gray-500">NIST SP 800-53:</span>
                            {control.nistMapping.map(mapping => (
                              <span 
                                key={mapping} 
                                className="inline-flex items-center px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-800 rounded"
                              >
                                {mapping}
                              </span>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="planned" className="space-y-6">
                  <div className="space-y-4">
                    {Object.values(controlsByGroup).flat().filter(control => control.status === "planned").map(control => (
                      <Card key={control.id} className="border-blue-100">
                        <CardHeader className="pb-2">
                          <div className="flex justify-between items-start">
                            <div className="flex items-center gap-2">
                              <span 
                                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getImplementationLevelBadge(control.implementationLevel)}`}
                              >
                                {control.implementationLevel}
                              </span>
                              <span className="text-sm font-medium text-blue-500">
                                Planned
                              </span>
                            </div>
                            <span className="text-sm font-mono bg-gray-100 px-2 py-0.5 rounded">
                              {control.id}
                            </span>
                          </div>
                          <CardTitle className="text-lg mt-2">{control.name}</CardTitle>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <p className="text-gray-600 mb-3">{control.description}</p>
                          <div className="flex flex-wrap gap-2 mt-3">
                            <span className="text-sm font-medium text-gray-500">NIST SP 800-53:</span>
                            {control.nistMapping.map(mapping => (
                              <span 
                                key={mapping} 
                                className="inline-flex items-center px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-800 rounded"
                              >
                                {mapping}
                              </span>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Controls;
