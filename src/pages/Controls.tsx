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
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious 
} from "@/components/ui/pagination";

const Controls = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Security Controls | CIS v8 & NIST 800-53";
  }, []);

  const { controls } = useAssessment();
  const [framework, setFramework] = useState<"CIS" | "NIST">("CIS");
  const [currentPage, setCurrentPage] = useState(1);
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);
  const controlsPerPage = 10;
  
  // Filter controls by framework
  const frameworkControls = controls.filter(control => control.framework === framework);

  // Group controls by category and sort categories alphabetically
  const controlsByGroup = frameworkControls.reduce<Record<string, typeof controls>>((acc, control) => {
    const category = control.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(control);
    return acc;
  }, {});

  // For pagination on filtered tabs
  const [filteredControls, setFilteredControls] = useState(frameworkControls);
  const [totalPages, setTotalPages] = useState(Math.ceil(filteredControls.length / controlsPerPage));
  const [activeTab, setActiveTab] = useState("all");

  // Ensure all accordion items are expanded initially for All Controls tab
  useEffect(() => {
    // Get all category names
    const allCategories = Object.keys(controlsByGroup);
    setExpandedCategories(allCategories);
  }, [framework]);  // Only trigger when framework changes

  // Update filtered controls when tab changes
  const handleTabChange = (value: string) => {
    setActiveTab(value);
    setCurrentPage(1);
    
    let filtered;
    if (value === "all") {
      filtered = frameworkControls;
    } else {
      filtered = frameworkControls.filter(control => control.status === value);
    }
    
    setFilteredControls(filtered);
    setTotalPages(Math.ceil(filtered.length / controlsPerPage));
  };

  // Update when framework changes
  useEffect(() => {
    if (activeTab === "all") {
      setFilteredControls(frameworkControls);
    } else {
      const filtered = frameworkControls.filter(control => control.status === activeTab);
      setFilteredControls(filtered);
    }
    setTotalPages(Math.ceil(
      (activeTab === "all" ? frameworkControls : frameworkControls.filter(control => control.status === activeTab)).length / controlsPerPage
    ));
    setCurrentPage(1);
  }, [framework, controls, activeTab]);

  // Get current controls for pagination
  const indexOfLastControl = currentPage * controlsPerPage;
  const indexOfFirstControl = indexOfLastControl - controlsPerPage;
  const currentControls = filteredControls.slice(indexOfFirstControl, indexOfLastControl);

  // Toggle category expansion
  const toggleCategory = (category: string) => {
    setExpandedCategories(prev => 
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  // Log for debugging
  console.log("Domains count:", Object.keys(controlsByGroup).length);
  console.log("Expanded categories:", expandedCategories);
  console.log("Domain names:", Object.keys(controlsByGroup));

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
                  <Badge variant="outline" className="text-md py-2 px-4">
                    Domains: {Object.keys(controlsByGroup).length}
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

              <Tabs defaultValue="all" onValueChange={handleTabChange}>
                <TabsList className="mb-6">
                  <TabsTrigger value="all">All Controls</TabsTrigger>
                  <TabsTrigger value="implemented">Implemented</TabsTrigger>
                  <TabsTrigger value="in-progress">In Progress</TabsTrigger>
                  <TabsTrigger value="planned">Planned</TabsTrigger>
                  <TabsTrigger value="not-implemented">Not Implemented</TabsTrigger>
                </TabsList>

                <TabsContent value="all" className="space-y-6">
                  <Accordion 
                    type="multiple" 
                    className="space-y-4"
                    value={expandedCategories}
                  >
                    {Object.entries(controlsByGroup)
                      .sort(([a], [b]) => a.localeCompare(b)) // Sort categories alphabetically
                      .map(([category, categoryControls]) => (
                        <AccordionItem 
                          key={category} 
                          value={category}
                          className="border rounded-lg overflow-hidden shadow-sm"
                        >
                          <AccordionTrigger 
                            className="px-6 py-4 bg-gray-50 hover:bg-gray-100"
                            onClick={(e) => {
                              e.preventDefault(); // Prevent default to avoid double toggling
                              toggleCategory(category);
                            }}
                          >
                            <div className="flex items-center gap-3">
                              <span className="font-medium text-lg">{category}</span>
                              <Badge>{categoryControls.length}</Badge>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className="px-6 py-3">
                            <div className="space-y-4">
                              {categoryControls.map(control => (
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
                    {currentControls.map(control => (
                      <ControlScoreCard key={control.id} control={control} />
                    ))}
                    
                    {filteredControls.length > controlsPerPage && (
                      <Pagination className="mt-6">
                        <PaginationContent>
                          <PaginationItem>
                            <PaginationPrevious 
                              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                              className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                            />
                          </PaginationItem>
                          
                          {[...Array(totalPages)].map((_, i) => (
                            <PaginationItem key={i + 1}>
                              <PaginationLink 
                                isActive={currentPage === i + 1}
                                onClick={() => setCurrentPage(i + 1)}
                              >
                                {i + 1}
                              </PaginationLink>
                            </PaginationItem>
                          )).slice(Math.max(0, currentPage - 3), Math.min(totalPages, currentPage + 2))}
                          
                          <PaginationItem>
                            <PaginationNext 
                              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                              className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
                            />
                          </PaginationItem>
                        </PaginationContent>
                      </Pagination>
                    )}
                  </div>
                </TabsContent>

                <TabsContent value="in-progress" className="space-y-6">
                  <div className="space-y-4">
                    {currentControls.map(control => (
                      <ControlScoreCard key={control.id} control={control} />
                    ))}
                    
                    {filteredControls.length > controlsPerPage && (
                      <Pagination className="mt-6">
                        <PaginationContent>
                          <PaginationItem>
                            <PaginationPrevious 
                              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                              className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                            />
                          </PaginationItem>
                          
                          {[...Array(totalPages)].map((_, i) => (
                            <PaginationItem key={i + 1}>
                              <PaginationLink 
                                isActive={currentPage === i + 1}
                                onClick={() => setCurrentPage(i + 1)}
                              >
                                {i + 1}
                              </PaginationLink>
                            </PaginationItem>
                          )).slice(Math.max(0, currentPage - 3), Math.min(totalPages, currentPage + 2))}
                          
                          <PaginationItem>
                            <PaginationNext 
                              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                              className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
                            />
                          </PaginationItem>
                        </PaginationContent>
                      </Pagination>
                    )}
                  </div>
                </TabsContent>

                <TabsContent value="planned" className="space-y-6">
                  <div className="space-y-4">
                    {currentControls.map(control => (
                      <ControlScoreCard key={control.id} control={control} />
                    ))}
                    
                    {filteredControls.length > controlsPerPage && (
                      <Pagination className="mt-6">
                        <PaginationContent>
                          <PaginationItem>
                            <PaginationPrevious 
                              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                              className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                            />
                          </PaginationItem>
                          
                          {[...Array(totalPages)].map((_, i) => (
                            <PaginationItem key={i + 1}>
                              <PaginationLink 
                                isActive={currentPage === i + 1}
                                onClick={() => setCurrentPage(i + 1)}
                              >
                                {i + 1}
                              </PaginationLink>
                            </PaginationItem>
                          )).slice(Math.max(0, currentPage - 3), Math.min(totalPages, currentPage + 2))}
                          
                          <PaginationItem>
                            <PaginationNext 
                              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                              className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
                            />
                          </PaginationItem>
                        </PaginationContent>
                      </Pagination>
                    )}
                  </div>
                </TabsContent>

                <TabsContent value="not-implemented" className="space-y-6">
                  <div className="space-y-4">
                    {currentControls.map(control => (
                      <ControlScoreCard key={control.id} control={control} />
                    ))}
                    
                    {filteredControls.length > controlsPerPage && (
                      <Pagination className="mt-6">
                        <PaginationContent>
                          <PaginationItem>
                            <PaginationPrevious 
                              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                              className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                            />
                          </PaginationItem>
                          
                          {[...Array(totalPages)].map((_, i) => (
                            <PaginationItem key={i + 1}>
                              <PaginationLink 
                                isActive={currentPage === i + 1}
                                onClick={() => setCurrentPage(i + 1)}
                              >
                                {i + 1}
                              </PaginationLink>
                            </PaginationItem>
                          )).slice(Math.max(0, currentPage - 3), Math.min(totalPages, currentPage + 2))}
                          
                          <PaginationItem>
                            <PaginationNext 
                              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                              className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
                            />
                          </PaginationItem>
                        </PaginationContent>
                      </Pagination>
                    )}
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
