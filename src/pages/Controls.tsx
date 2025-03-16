
import React, { useEffect, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import PageTransition from "@/components/common/PageTransition";
import { useAssessment } from "@/contexts/AssessmentContext";
import ControlScoreCard from "@/components/assessment/ControlScoreCard";
import AssessmentActions from "@/components/assessment/AssessmentActions";
import { Badge } from "@/components/ui/badge";

const Controls = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Security Controls | CIS v8 & NIST 800-53";
  }, []);

  const { controls } = useAssessment();
  const [framework, setFramework] = useState<"CIS" | "NIST">("CIS");
  
  // Filter controls by framework
  const frameworkControls = controls.filter(control => control.framework === framework);

  // Group controls by category
  const controlsByGroup = frameworkControls.reduce<Record<string, typeof controls>>((acc, control) => {
    const category = control.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(control);
    return acc;
  }, {});

  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-16 pb-20">
          <div className="container mx-auto px-4 sm:px-6 py-8">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold mb-6 text-cyber-navy">Security Controls Assessment</h1>
              <p className="text-lg text-gray-600 mb-6">
                Score and assess your implementation of security controls. 
                Track your progress and identify areas for improvement.
              </p>

              <div className="mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex gap-2">
                  <Badge variant="outline" className="text-md py-2 px-4 border-2 border-blue-700 bg-blue-50">
                    Framework: {framework}
                  </Badge>
                  <Badge variant="outline" className="text-md py-2 px-4">
                    Controls: {frameworkControls.length}
                  </Badge>
                </div>
                
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-500">Select Framework:</span>
                  <div className="flex rounded-md overflow-hidden border">
                    <button 
                      className={`px-3 py-1 text-sm font-medium ${framework === "CIS" ? "bg-blue-600 text-white" : "bg-gray-100"}`}
                      onClick={() => setFramework("CIS")}
                    >
                      CIS v8
                    </button>
                    <button 
                      className={`px-3 py-1 text-sm font-medium ${framework === "NIST" ? "bg-blue-600 text-white" : "bg-gray-100"}`}
                      onClick={() => setFramework("NIST")}
                    >
                      NIST 800-53
                    </button>
                  </div>
                </div>
              </div>

              <Alert className="mb-8 bg-blue-50 border-blue-200">
                <AlertCircle className="h-5 w-5 text-blue-600" />
                <AlertTitle className="text-blue-800">Scoring Guide</AlertTitle>
                <AlertDescription className="text-blue-700">
                  Score each control from 0 (not implemented) to 5 (fully implemented with documentation and testing). 
                  Your scores will automatically update the maturity dashboards.
                </AlertDescription>
              </Alert>

              <AssessmentActions />

              <Tabs defaultValue="all">
                <TabsList className="mb-6">
                  <TabsTrigger value="all">All Controls</TabsTrigger>
                  <TabsTrigger value="implemented">Implemented</TabsTrigger>
                  <TabsTrigger value="in-progress">In Progress</TabsTrigger>
                  <TabsTrigger value="planned">Planned</TabsTrigger>
                  <TabsTrigger value="not-implemented">Not Implemented</TabsTrigger>
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
                            <span className="font-medium text-lg">{category}</span>
                            <Badge>{controls.length}</Badge>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-6 py-3">
                          <div className="space-y-4">
                            {controls.map(control => (
                              <ControlScoreCard key={control.id} control={control} />
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </TabsContent>

                <TabsContent value="implemented" className="space-y-6">
                  <div className="space-y-4">
                    {frameworkControls
                      .filter(control => control.status === "implemented")
                      .map(control => (
                        <ControlScoreCard key={control.id} control={control} />
                      ))}
                  </div>
                </TabsContent>

                <TabsContent value="in-progress" className="space-y-6">
                  <div className="space-y-4">
                    {frameworkControls
                      .filter(control => control.status === "in-progress")
                      .map(control => (
                        <ControlScoreCard key={control.id} control={control} />
                      ))}
                  </div>
                </TabsContent>

                <TabsContent value="planned" className="space-y-6">
                  <div className="space-y-4">
                    {frameworkControls
                      .filter(control => control.status === "planned")
                      .map(control => (
                        <ControlScoreCard key={control.id} control={control} />
                      ))}
                  </div>
                </TabsContent>

                <TabsContent value="not-implemented" className="space-y-6">
                  <div className="space-y-4">
                    {frameworkControls
                      .filter(control => control.status === "not-implemented")
                      .map(control => (
                        <ControlScoreCard key={control.id} control={control} />
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
