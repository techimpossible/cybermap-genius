
import React, { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Shield, FileText, ArrowUpRight, BookOpen, CheckCircle2 } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import PageTransition from "@/components/common/PageTransition";

const Frameworks = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Security Frameworks | CIS v8 & NIST 800-53";
  }, []);

  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-16 pb-20">
          <div className="container mx-auto px-4 sm:px-6 py-8">
            <div className="max-w-5xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold mb-6 text-cyber-navy">Security Frameworks</h1>
              <p className="text-lg text-gray-600 mb-8">
                A comprehensive approach to security requires alignment with established security frameworks. We've integrated CIS Controls v8 with NIST SP 800-53 to provide a robust security posture.
              </p>

              <Tabs defaultValue="overview" className="mb-12">
                <TabsList className="mb-8">
                  <TabsTrigger value="overview">Framework Overview</TabsTrigger>
                  <TabsTrigger value="cis">CIS Controls v8</TabsTrigger>
                  <TabsTrigger value="nist">NIST SP 800-53</TabsTrigger>
                  <TabsTrigger value="mapping">Framework Mapping</TabsTrigger>
                </TabsList>

                <TabsContent value="overview">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                    <Card className="bg-gradient-to-br from-cyber-navy/5 to-white border">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-cyber-navy">
                          <Shield className="h-5 w-5" />
                          CIS Controls v8
                        </CardTitle>
                        <CardDescription>
                          Prioritized set of actions to protect your organization and data from known cyber attack vectors
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-3">
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>18 Control Categories organized by Implementation Groups</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>153 Safeguards across all controls</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>Focus on Implementation Groups (IG1, IG2, IG3) for organizations of different maturity levels</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-br from-cyber-teal/5 to-white border">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-cyber-teal">
                          <FileText className="h-5 w-5" />
                          NIST SP 800-53
                        </CardTitle>
                        <CardDescription>
                          Security and privacy controls for information systems and organizations
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-3">
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>20 Control Families covering diverse security aspects</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>Over 1,000 security controls and control enhancements</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>Baseline security controls organized by impact levels (Low, Moderate, High)</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>

                  <Card className="border mb-8">
                    <CardHeader>
                      <CardTitle>Integrated Framework Approach</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4">
                        Our approach combines the strengths of both frameworks to provide a comprehensive security program:
                      </p>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span><strong>Prioritized Implementation:</strong> Using CIS Controls Implementation Groups to prioritize security measures based on risk and resources</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span><strong>Detailed Requirements:</strong> Leveraging NIST SP 800-53's detailed control specifications for implementation guidance</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span><strong>Compliance Alignment:</strong> Mapping controls to multiple regulatory frameworks through NIST SP 800-53 crosswalks</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span><strong>Scalable Maturity:</strong> Supporting growth from basic cyber hygiene (IG1) to advanced security capabilities (IG3/High Impact)</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card className="border">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg">Implementation Groups</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-600 mb-4">
                          CIS Controls are organized into Implementation Groups to help organizations prioritize controls based on their resources and risk profile.
                        </p>
                        <a 
                          href="https://www.cisecurity.org/controls/implementation-groups" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-cyber-teal hover:text-cyber-blue flex items-center gap-1 text-sm font-medium"
                        >
                          Learn more <ArrowUpRight className="h-3 w-3" />
                        </a>
                      </CardContent>
                    </Card>

                    <Card className="border">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg">Control Baselines</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-600 mb-4">
                          NIST SP 800-53 provides security control baselines (Low, Moderate, High) based on the potential impact of security incidents.
                        </p>
                        <a 
                          href="https://csrc.nist.gov/projects/risk-management/sp800-53-controls/release-search" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-cyber-teal hover:text-cyber-blue flex items-center gap-1 text-sm font-medium"
                        >
                          Browse controls <ArrowUpRight className="h-3 w-3" />
                        </a>
                      </CardContent>
                    </Card>

                    <Card className="border">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg">Framework Documentation</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-600 mb-4">
                          Access official documentation for CIS Controls v8 and NIST SP 800-53 Rev. 5 for detailed implementation guidance.
                        </p>
                        <a 
                          href="https://www.cisecurity.org/controls" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-cyber-teal hover:text-cyber-blue flex items-center gap-1 text-sm font-medium mb-2"
                        >
                          CIS Controls v8 <ArrowUpRight className="h-3 w-3" />
                        </a>
                        <a 
                          href="https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-cyber-teal hover:text-cyber-blue flex items-center gap-1 text-sm font-medium"
                        >
                          NIST SP 800-53 <ArrowUpRight className="h-3 w-3" />
                        </a>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="cis">
                  <Card className="mb-8 border-cyber-navy/20">
                    <CardHeader className="bg-cyber-navy/5">
                      <div className="flex items-center gap-3">
                        <Shield className="h-6 w-6 text-cyber-navy" />
                        <div>
                          <CardTitle>CIS Controls v8</CardTitle>
                          <CardDescription>Prescriptive, prioritized set of cybersecurity best practices</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <div className="prose max-w-none">
                        <p>
                          The CIS Controls are a prioritized set of actions that collectively form a defense-in-depth approach to cybersecurity. They are organized into 18 control categories with 153 safeguards across three Implementation Groups.
                        </p>
                        
                        <h3 className="text-lg font-medium mt-6 mb-3">Implementation Groups</h3>
                        <ul className="space-y-4 mb-6">
                          <li className="bg-green-50 p-4 rounded-lg">
                            <h4 className="font-medium text-green-800">Implementation Group 1 (IG1)</h4>
                            <p className="text-green-700 text-sm mt-1">
                              Basic cyber hygiene - essential starting point for all organizations. Covers approximately 56 safeguards.
                            </p>
                          </li>
                          <li className="bg-blue-50 p-4 rounded-lg">
                            <h4 className="font-medium text-blue-800">Implementation Group 2 (IG2)</h4>
                            <p className="text-blue-700 text-sm mt-1">
                              Designed for organizations with more specialized IT staff and moderate resources. Includes IG1 controls plus additional safeguards.
                            </p>
                          </li>
                          <li className="bg-purple-50 p-4 rounded-lg">
                            <h4 className="font-medium text-purple-800">Implementation Group 3 (IG3)</h4>
                            <p className="text-purple-700 text-sm mt-1">
                              For organizations with significant security resources and expertise. Includes all safeguards from IG1, IG2, plus additional advanced controls.
                            </p>
                          </li>
                        </ul>
                      </div>
                      
                      <h3 className="text-lg font-medium mt-6 mb-4">CIS Controls Categories</h3>
                      <div className="space-y-2">
                        {[
                          { id: "CIS 1", name: "Inventory and Control of Enterprise Assets" },
                          { id: "CIS 2", name: "Inventory and Control of Software Assets" },
                          { id: "CIS 3", name: "Data Protection" },
                          { id: "CIS 4", name: "Secure Configuration of Enterprise Assets and Software" },
                          { id: "CIS 5", name: "Account Management" },
                          { id: "CIS 6", name: "Access Control Management" },
                          { id: "CIS 7", name: "Continuous Vulnerability Management" },
                          { id: "CIS 8", name: "Audit Log Management" },
                          { id: "CIS 9", name: "Email and Web Browser Protections" },
                          { id: "CIS 10", name: "Malware Defenses" },
                          { id: "CIS 11", name: "Data Recovery" },
                          { id: "CIS 12", name: "Network Infrastructure Management" },
                          { id: "CIS 13", name: "Network Monitoring and Defense" },
                          { id: "CIS 14", name: "Security Awareness and Skills Training" },
                          { id: "CIS 15", name: "Service Provider Management" },
                          { id: "CIS 16", name: "Application Software Security" },
                          { id: "CIS 17", name: "Incident Response Management" },
                          { id: "CIS 18", name: "Penetration Testing" },
                        ].map((control) => (
                          <Collapsible key={control.id} className="border rounded-md overflow-hidden">
                            <CollapsibleTrigger className="flex items-center justify-between w-full px-4 py-3 bg-gray-50 hover:bg-gray-100 text-left">
                              <div className="flex items-center gap-2">
                                <span className="text-sm font-mono text-cyber-navy">{control.id}</span>
                                <span className="font-medium">{control.name}</span>
                              </div>
                            </CollapsibleTrigger>
                            <CollapsibleContent className="p-4 bg-white">
                              <p className="text-sm text-gray-600 mb-3">
                                This control contains multiple safeguards across different implementation groups. 
                                Visit the <a href="/controls" className="text-cyber-teal hover:text-cyber-blue">Controls page</a> to 
                                see detailed implementation status.
                              </p>
                            </CollapsibleContent>
                          </Collapsible>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="nist">
                  <Card className="mb-8 border-cyber-teal/20">
                    <CardHeader className="bg-cyber-teal/5">
                      <div className="flex items-center gap-3">
                        <FileText className="h-6 w-6 text-cyber-teal" />
                        <div>
                          <CardTitle>NIST SP 800-53 Rev. 5</CardTitle>
                          <CardDescription>Security and Privacy Controls for Information Systems and Organizations</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <div className="prose max-w-none">
                        <p>
                          NIST Special Publication 800-53 provides a comprehensive catalog of security and privacy controls for federal information systems and organizations. 
                          It establishes security requirements for information systems based on the potential impact (Low, Moderate, High) to organizations should a security breach occur.
                        </p>
                        
                        <h3 className="text-lg font-medium mt-6 mb-3">Control Baselines</h3>
                        <ul className="space-y-4 mb-6">
                          <li className="bg-green-50 p-4 rounded-lg">
                            <h4 className="font-medium text-green-800">Low Impact Baseline</h4>
                            <p className="text-green-700 text-sm mt-1">
                              For systems where the loss of confidentiality, integrity, or availability would have a limited adverse effect on organization operations, assets, or individuals.
                            </p>
                          </li>
                          <li className="bg-amber-50 p-4 rounded-lg">
                            <h4 className="font-medium text-amber-800">Moderate Impact Baseline</h4>
                            <p className="text-amber-700 text-sm mt-1">
                              For systems where the loss would have a serious adverse effect on organization operations, assets, or individuals.
                            </p>
                          </li>
                          <li className="bg-red-50 p-4 rounded-lg">
                            <h4 className="font-medium text-red-800">High Impact Baseline</h4>
                            <p className="text-red-700 text-sm mt-1">
                              For systems where the loss would have a severe or catastrophic adverse effect on organization operations, assets, or individuals.
                            </p>
                          </li>
                        </ul>
                      </div>
                      
                      <h3 className="text-lg font-medium mt-6 mb-4">NIST SP 800-53 Control Families</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {[
                          { id: "AC", name: "Access Control" },
                          { id: "AT", name: "Awareness and Training" },
                          { id: "AU", name: "Audit and Accountability" },
                          { id: "CA", name: "Assessment, Authorization, and Monitoring" },
                          { id: "CM", name: "Configuration Management" },
                          { id: "CP", name: "Contingency Planning" },
                          { id: "IA", name: "Identification and Authentication" },
                          { id: "IR", name: "Incident Response" },
                          { id: "MA", name: "Maintenance" },
                          { id: "MP", name: "Media Protection" },
                          { id: "PE", name: "Physical and Environmental Protection" },
                          { id: "PL", name: "Planning" },
                          { id: "PM", name: "Program Management" },
                          { id: "PS", name: "Personnel Security" },
                          { id: "RA", name: "Risk Assessment" },
                          { id: "SA", name: "System and Services Acquisition" },
                          { id: "SC", name: "System and Communications Protection" },
                          { id: "SI", name: "System and Information Integrity" },
                          { id: "SR", name: "Supply Chain Risk Management" },
                          { id: "PT", name: "PII Processing and Transparency" },
                        ].map((family) => (
                          <div key={family.id} className="border rounded-md p-3 bg-white">
                            <div className="flex items-center gap-2">
                              <span className="text-sm font-mono bg-gray-100 px-2 py-0.5 rounded text-cyber-teal">{family.id}</span>
                              <span className="font-medium">{family.name}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="mapping">
                  <Card className="mb-8">
                    <CardHeader>
                      <CardTitle>CIS Controls to NIST SP 800-53 Mapping</CardTitle>
                      <CardDescription>
                        View how CIS Controls v8 map to NIST SP 800-53 security controls
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="prose max-w-none mb-6">
                        <p>
                          The integration of CIS Controls with NIST SP 800-53 provides organizations with a comprehensive approach to cybersecurity. 
                          The CIS Controls offer a prioritized, actionable path to improve security posture, while NIST SP 800-53 offers detailed 
                          specifications for implementation and compliance with various regulations.
                        </p>
                      </div>

                      <h3 className="text-lg font-medium mb-4">Mapping Examples</h3>
                      <div className="space-y-4">
                        <Card className="border-gray-200">
                          <CardHeader className="pb-2">
                            <div className="flex justify-between">
                              <CardTitle className="text-base">CIS Control 1: Inventory and Control of Enterprise Assets</CardTitle>
                              <span className="text-sm font-mono bg-gray-100 px-2 py-0.5 rounded">CIS 1</span>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-gray-600 mb-3">Maps to NIST SP 800-53 controls:</p>
                            <div className="flex flex-wrap gap-2">
                              <span className="inline-flex items-center px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-800 rounded">CM-8</span>
                              <span className="inline-flex items-center px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-800 rounded">PM-5</span>
                              <span className="inline-flex items-center px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-800 rounded">CA-9</span>
                            </div>
                          </CardContent>
                        </Card>

                        <Card className="border-gray-200">
                          <CardHeader className="pb-2">
                            <div className="flex justify-between">
                              <CardTitle className="text-base">CIS Control 3: Data Protection</CardTitle>
                              <span className="text-sm font-mono bg-gray-100 px-2 py-0.5 rounded">CIS 3</span>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-gray-600 mb-3">Maps to NIST SP 800-53 controls:</p>
                            <div className="flex flex-wrap gap-2">
                              <span className="inline-flex items-center px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-800 rounded">MP-2</span>
                              <span className="inline-flex items-center px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-800 rounded">MP-3</span>
                              <span className="inline-flex items-center px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-800 rounded">MP-4</span>
                              <span className="inline-flex items-center px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-800 rounded">MP-7</span>
                              <span className="inline-flex items-center px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-800 rounded">SC-8</span>
                              <span className="inline-flex items-center px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-800 rounded">SC-28</span>
                              <span className="inline-flex items-center px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-800 rounded">SI-12</span>
                            </div>
                          </CardContent>
                        </Card>

                        <Card className="border-gray-200">
                          <CardHeader className="pb-2">
                            <div className="flex justify-between">
                              <CardTitle className="text-base">CIS Control 5: Account Management</CardTitle>
                              <span className="text-sm font-mono bg-gray-100 px-2 py-0.5 rounded">CIS 5</span>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-gray-600 mb-3">Maps to NIST SP 800-53 controls:</p>
                            <div className="flex flex-wrap gap-2">
                              <span className="inline-flex items-center px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-800 rounded">AC-2</span>
                              <span className="inline-flex items-center px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-800 rounded">AC-3</span>
                              <span className="inline-flex items-center px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-800 rounded">AC-6</span>
                              <span className="inline-flex items-center px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-800 rounded">IA-2</span>
                              <span className="inline-flex items-center px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-800 rounded">IA-4</span>
                              <span className="inline-flex items-center px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-800 rounded">IA-5</span>
                              <span className="inline-flex items-center px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-800 rounded">IA-8</span>
                            </div>
                          </CardContent>
                        </Card>

                        <Card className="border-gray-200">
                          <CardHeader className="pb-2">
                            <div className="flex justify-between">
                              <CardTitle className="text-base">CIS Control 17: Incident Response Management</CardTitle>
                              <span className="text-sm font-mono bg-gray-100 px-2 py-0.5 rounded">CIS 17</span>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-gray-600 mb-3">Maps to NIST SP 800-53 controls:</p>
                            <div className="flex flex-wrap gap-2">
                              <span className="inline-flex items-center px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-800 rounded">IR-1</span>
                              <span className="inline-flex items-center px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-800 rounded">IR-2</span>
                              <span className="inline-flex items-center px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-800 rounded">IR-3</span>
                              <span className="inline-flex items-center px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-800 rounded">IR-4</span>
                              <span className="inline-flex items-center px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-800 rounded">IR-5</span>
                              <span className="inline-flex items-center px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-800 rounded">IR-6</span>
                              <span className="inline-flex items-center px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-800 rounded">IR-7</span>
                              <span className="inline-flex items-center px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-800 rounded">IR-8</span>
                            </div>
                          </CardContent>
                        </Card>
                      </div>

                      <div className="mt-8 flex justify-center">
                        <a 
                          href="/controls" 
                          className="inline-flex items-center px-4 py-2 bg-cyber-navy text-white rounded-md hover:bg-cyber-navy/90 transition-colors"
                        >
                          <BookOpen className="mr-2 h-4 w-4" />
                          View Detailed Controls
                        </a>
                      </div>
                    </CardContent>
                  </Card>
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

export default Frameworks;
