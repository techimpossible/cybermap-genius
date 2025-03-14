
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, TrendingUp, Award, Target } from "lucide-react";
import { BarChart as RechartsBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { cn } from "@/lib/utils";

const ProgressSection = () => {
  const maturityProgressData = [
    { name: "Network Security", progress: 85 },
    { name: "Risk Management", progress: 70 },
    { name: "Data Protection", progress: 60 },
    { name: "Cloud Security", progress: 45 },
    { name: "Identity & Access", progress: 75 },
  ];

  const quarterlyProgressData = [
    { name: "Q1", score: 2.8 },
    { name: "Q2", score: 3.2 },
    { name: "Q3", score: 3.7 },
    { name: "Q4", score: 4.1 },
  ];

  const complianceFrameworks = [
    { name: "ISO 27001", status: "compliant", date: "2023-10-15" },
    { name: "NIST CSF", status: "in-progress", progress: 65 },
    { name: "SOC 2", status: "planned", progress: 0 },
  ];

  return (
    <section className="py-20 px-6 md:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-cyber-navy">Maturity Metrics</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Measure, track and improve your organization's security posture across key domains
          </p>
        </div>

        <Tabs defaultValue="maturity" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-white">
              <TabsTrigger value="maturity" className="data-[state=active]:bg-gray-100">
                <BarChart className="h-4 w-4 mr-2" /> Domain Maturity
              </TabsTrigger>
              <TabsTrigger value="trends" className="data-[state=active]:bg-gray-100">
                <TrendingUp className="h-4 w-4 mr-2" /> Maturity Trends
              </TabsTrigger>
              <TabsTrigger value="compliance" className="data-[state=active]:bg-gray-100">
                <Award className="h-4 w-4 mr-2" /> Compliance
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="maturity" className="mt-0">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-2 glass-card">
                <CardHeader>
                  <CardTitle>Domain Maturity Levels</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {maturityProgressData.map((domain, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between">
                          <span className="font-medium">{domain.name}</span>
                          <span>{domain.progress}%</span>
                        </div>
                        <Progress value={domain.progress} 
                          className="h-2 bg-gray-100" 
                        />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle>Security Control Distribution</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] flex justify-center items-center">
                    <ResponsiveContainer width="100%" height="100%">
                      <RechartsBarChart
                        data={[
                          { category: "Preventative", value: 18 },
                          { category: "Detective", value: 12 },
                          { category: "Corrective", value: 9 },
                          { category: "Recovery", value: 5 },
                        ]}
                        margin={{ top: 10, right: 10, left: 0, bottom: 20 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis dataKey="category" />
                        <YAxis tickLine={false} axisLine={false} />
                        <Tooltip 
                          contentStyle={{ 
                            background: "rgba(255, 255, 255, 0.9)",
                            border: "none",
                            borderRadius: "0.5rem",
                            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)"
                          }}
                        />
                        <Bar 
                          dataKey="value" 
                          fill="rgb(14, 165, 233)" 
                          radius={[4, 4, 0, 0]} 
                          barSize={40}
                        />
                      </RechartsBarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="trends" className="mt-0">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Quarterly Maturity Score Trend</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <RechartsBarChart
                      data={quarterlyProgressData}
                      margin={{ top: 10, right: 10, left: 0, bottom: 20 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" vertical={false} />
                      <XAxis dataKey="name" />
                      <YAxis tickLine={false} axisLine={false} domain={[0, 5]} />
                      <Tooltip 
                        contentStyle={{ 
                          background: "rgba(255, 255, 255, 0.9)",
                          border: "none",
                          borderRadius: "0.5rem",
                          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)"
                        }}
                        formatter={(value: any) => [`${value} / 5`, 'Maturity Score']}
                      />
                      <Bar 
                        dataKey="score" 
                        fill="rgb(139, 92, 246)" 
                        radius={[4, 4, 0, 0]} 
                        barSize={40}
                      />
                    </RechartsBarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="compliance" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {complianceFrameworks.map((framework, index) => (
                <Card 
                  key={index} 
                  className={cn(
                    "overflow-hidden transition-all duration-300 hover:shadow-md backdrop-blur-sm bg-white/90 border border-gray-100",
                    framework.status === "compliant" ? "bg-gradient-to-br from-green-50 to-white border-green-100" : 
                    framework.status === "in-progress" ? "bg-gradient-to-br from-blue-50 to-white border-blue-100" : 
                    "bg-gradient-to-br from-gray-50 to-white border-gray-100"
                  )}
                >
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="text-xl font-bold">{framework.name}</h3>
                      <div className={cn(
                        "flex items-center justify-center w-12 h-12 rounded-full",
                        framework.status === "compliant" ? "bg-green-100 text-green-600" : 
                        framework.status === "in-progress" ? "bg-blue-100 text-blue-600" : 
                        "bg-gray-100 text-gray-600"
                      )}>
                        {framework.status === "compliant" ? (
                          <Award className="h-6 w-6" />
                        ) : framework.status === "in-progress" ? (
                          <Target className="h-6 w-6" />
                        ) : (
                          <Target className="h-6 w-6" />
                        )}
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <span className={cn(
                        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
                        framework.status === "compliant" ? "bg-green-100 text-green-800" : 
                        framework.status === "in-progress" ? "bg-blue-100 text-blue-800" : 
                        "bg-gray-100 text-gray-800"
                      )}>
                        {framework.status === "compliant" ? "Compliant" : 
                         framework.status === "in-progress" ? "In Progress" : 
                         "Planned"}
                      </span>
                    </div>
                    
                    {framework.status === "compliant" ? (
                      <p className="text-sm text-gray-500">
                        Certified on {new Date(framework.date).toLocaleDateString()}
                      </p>
                    ) : framework.status === "in-progress" ? (
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Progress</span>
                          <span className="font-medium">{framework.progress}%</span>
                        </div>
                        <Progress value={framework.progress} className="h-2" />
                      </div>
                    ) : (
                      <p className="text-sm text-gray-500">Implementation not started</p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ProgressSection;
