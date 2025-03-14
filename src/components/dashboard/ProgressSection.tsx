
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, TrendingUp, Award, Target } from "lucide-react";
import { BarChart as RechartsBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { cn } from "@/lib/utils";

const ProgressSection = () => {
  const skillProgressData = [
    { name: "Network Security", progress: 85 },
    { name: "Risk Management", progress: 70 },
    { name: "Cryptography", progress: 60 },
    { name: "Cloud Security", progress: 45 },
    { name: "Identity & Access", progress: 75 },
  ];

  const monthlyProgressData = [
    { name: "Jan", skills: 2 },
    { name: "Feb", skills: 3 },
    { name: "Mar", skills: 4 },
    { name: "Apr", skills: 2 },
    { name: "May", skills: 5 },
    { name: "Jun", skills: 6 },
  ];

  const mockCertifications = [
    { name: "Security+", status: "completed", date: "2023-10-15" },
    { name: "CCNA Security", status: "in-progress", progress: 65 },
    { name: "CISSP", status: "planned", progress: 0 },
  ];

  return (
    <section className="py-20 px-6 md:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-cyber-navy">Your Progress</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Track your cybersecurity skill development and certification journey
          </p>
        </div>

        <Tabs defaultValue="skills" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-white">
              <TabsTrigger value="skills" className="data-[state=active]:bg-gray-100">
                <BarChart className="h-4 w-4 mr-2" /> Skills
              </TabsTrigger>
              <TabsTrigger value="trends" className="data-[state=active]:bg-gray-100">
                <TrendingUp className="h-4 w-4 mr-2" /> Trends
              </TabsTrigger>
              <TabsTrigger value="certifications" className="data-[state=active]:bg-gray-100">
                <Award className="h-4 w-4 mr-2" /> Certifications
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="skills" className="mt-0">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-2 glass-card">
                <CardHeader>
                  <CardTitle>Skill Mastery</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {skillProgressData.map((skill, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between">
                          <span className="font-medium">{skill.name}</span>
                          <span>{skill.progress}%</span>
                        </div>
                        <Progress value={skill.progress} 
                          className="h-2 bg-gray-100" 
                        />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle>Skill Distribution</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] flex justify-center items-center">
                    <ResponsiveContainer width="100%" height="100%">
                      <RechartsBarChart
                        data={[
                          { category: "Defense", value: 8 },
                          { category: "Offense", value: 6 },
                          { category: "Infrastructure", value: 4 },
                          { category: "Governance", value: 5 },
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
                <CardTitle>Monthly Skill Acquisition</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <RechartsBarChart
                      data={monthlyProgressData}
                      margin={{ top: 10, right: 10, left: 0, bottom: 20 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" vertical={false} />
                      <XAxis dataKey="name" />
                      <YAxis tickLine={false} axisLine={false} />
                      <Tooltip 
                        contentStyle={{ 
                          background: "rgba(255, 255, 255, 0.9)",
                          border: "none",
                          borderRadius: "0.5rem",
                          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)"
                        }}
                        formatter={(value: any) => [`${value} skills`, 'Skills Acquired']}
                      />
                      <Bar 
                        dataKey="skills" 
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

          <TabsContent value="certifications" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {mockCertifications.map((cert, index) => (
                <Card 
                  key={index} 
                  className={cn(
                    "overflow-hidden transition-all duration-300 hover:shadow-md",
                    cert.status === "completed" ? "bg-gradient-to-br from-green-50 to-white border-green-100" : 
                    cert.status === "in-progress" ? "bg-gradient-to-br from-blue-50 to-white border-blue-100" : 
                    "bg-gradient-to-br from-gray-50 to-white border-gray-100"
                  )}
                >
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="text-xl font-bold">{cert.name}</h3>
                      <div className={cn(
                        "flex items-center justify-center w-12 h-12 rounded-full",
                        cert.status === "completed" ? "bg-green-100 text-green-600" : 
                        cert.status === "in-progress" ? "bg-blue-100 text-blue-600" : 
                        "bg-gray-100 text-gray-600"
                      )}>
                        {cert.status === "completed" ? (
                          <Award className="h-6 w-6" />
                        ) : cert.status === "in-progress" ? (
                          <Target className="h-6 w-6" />
                        ) : (
                          <Target className="h-6 w-6" />
                        )}
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <span className={cn(
                        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
                        cert.status === "completed" ? "bg-green-100 text-green-800" : 
                        cert.status === "in-progress" ? "bg-blue-100 text-blue-800" : 
                        "bg-gray-100 text-gray-800"
                      )}>
                        {cert.status === "completed" ? "Completed" : 
                         cert.status === "in-progress" ? "In Progress" : 
                         "Planned"}
                      </span>
                    </div>
                    
                    {cert.status === "completed" ? (
                      <p className="text-sm text-gray-500">
                        Completed on {new Date(cert.date).toLocaleDateString()}
                      </p>
                    ) : cert.status === "in-progress" ? (
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Progress</span>
                          <span className="font-medium">{cert.progress}%</span>
                        </div>
                        <Progress value={cert.progress} className="h-2" />
                      </div>
                    ) : (
                      <p className="text-sm text-gray-500">Not started yet</p>
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
