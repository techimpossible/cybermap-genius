
import React, { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PieChart, BarChart as RechartsBarChart, RadarChart, PolarGrid, PolarAngleAxis, Radar, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, Pie } from "recharts";
import { Shield, TrendingUp, AlertCircle, Target, BarChart } from "lucide-react";
import PageTransition from "@/components/common/PageTransition";
import { useAssessment } from "@/contexts/AssessmentContext";

const Maturity = () => {
  const { getOverallScore, getImplementationGroupProgress, getControlsByStatus, controls } = useAssessment();
  
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Security Maturity | CIS v8 & NIST 800-53";
  }, []);

  const overallScore = getOverallScore();
  const implementationGroupProgress = getImplementationGroupProgress();
  const pieData = getControlsByStatus();

  const radarData = [
    { subject: 'Identify', A: 70, fullMark: 100 },
    { subject: 'Protect', A: 65, fullMark: 100 },
    { subject: 'Detect', A: 60, fullMark: 100 },
    { subject: 'Respond', A: 55, fullMark: 100 },
    { subject: 'Recover', A: 45, fullMark: 100 },
  ];

  const maturityLevels = [
    { id: 1, name: "Initial", description: "Ad hoc processes with limited documentation", score: 1.5, maxScore: 5 },
    { id: 2, name: "Repeatable", description: "Basic processes established but inconsistent", score: 2.8, maxScore: 5 },
    { id: 3, name: "Defined", description: "Standard processes documented and followed", score: 3.5, maxScore: 5 },
    { id: 4, name: "Managed", description: "Processes measured and controlled", score: 2.1, maxScore: 5 },
    { id: 5, name: "Optimizing", description: "Continuous process improvement", score: 1.3, maxScore: 5 },
  ];

  // Prepare data for control families chart based on real assessment data
  const controlFamiliesData = Object.entries(
    controls.reduce<Record<string, {count: number, score: number}>>((acc, control) => {
      if (!acc[control.category]) {
        acc[control.category] = { count: 0, score: 0 };
      }
      acc[control.category].count++;
      acc[control.category].score += control.score || 0;
      return acc;
    }, {})
  ).map(([name, data]) => ({
    name,
    implementation: Math.round((data.score / (data.count * 5)) * 100)
  }));

  // Calculate CIS Controls data based on control IDs
  const cisControlMap = controls.reduce<Record<string, {count: number, score: number}>>((acc, control) => {
    const cisNumber = control.id.split('-')[0] + '-' + control.id.split('-')[1].split('.')[0];
    if (!acc[cisNumber]) {
      acc[cisNumber] = { count: 0, score: 0 };
    }
    acc[cisNumber].count++;
    acc[cisNumber].score += control.score || 0;
    return acc;
  }, {});

  const cisControlsData = Object.entries(cisControlMap)
    .map(([name, data]) => ({
      name: name.replace('CIS-', 'CIS '),
      value: Math.round((data.score / (data.count * 5)) * 100)
    }))
    .sort((a, b) => {
      // Sort by CIS control number
      const aNum = parseInt(a.name.split(' ')[1]);
      const bNum = parseInt(b.name.split(' ')[1]);
      return aNum - bNum;
    });

  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-16 pb-20">
          <div className="container mx-auto px-4 sm:px-6 py-8">
            <div className="max-w-6xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold mb-6 text-cyber-navy">Security Maturity Assessment</h1>
              <p className="text-lg text-gray-600 mb-8">
                Track and measure your organization's security maturity across CIS Controls v8 and NIST SP 800-53 frameworks. This dashboard provides a comprehensive view of your current security posture and areas for improvement.
              </p>

              <Tabs defaultValue="overview" className="mb-12">
                <TabsList className="mb-8">
                  <TabsTrigger value="overview" className="flex items-center gap-2">
                    <BarChart className="h-4 w-4" />
                    Overview
                  </TabsTrigger>
                  <TabsTrigger value="cis" className="flex items-center gap-2">
                    <Shield className="h-4 w-4" />
                    CIS Controls
                  </TabsTrigger>
                  <TabsTrigger value="nist" className="flex items-center gap-2">
                    <Target className="h-4 w-4" />
                    NIST Categories
                  </TabsTrigger>
                  <TabsTrigger value="trends" className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4" />
                    Trends
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="overview">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <Card>
                      <CardHeader>
                        <CardTitle>Overall Maturity</CardTitle>
                        <CardDescription>Average across all controls</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex justify-center items-center h-40">
                          <div className="text-center">
                            <div className="text-5xl font-bold text-cyber-navy">{overallScore}</div>
                            <div className="text-gray-500 mt-2">out of 5.0</div>
                            <div className="mt-4 w-full">
                              <Progress value={overallScore / 5 * 100} className="h-2" />
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Controls Status</CardTitle>
                        <CardDescription>Implementation progress by status</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="h-40">
                          <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                              <Pie
                                data={pieData}
                                cx="50%"
                                cy="50%"
                                innerRadius={60}
                                outerRadius={80}
                                paddingAngle={2}
                                dataKey="value"
                                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                                labelLine={false}
                              >
                                {pieData.map((entry, index) => (
                                  <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                              </Pie>
                              <Tooltip 
                                formatter={(value) => [`${value}%`, 'Percentage']}
                                contentStyle={{ 
                                  background: "rgba(255, 255, 255, 0.9)",
                                  border: "none",
                                  borderRadius: "0.5rem",
                                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)"
                                }}
                              />
                            </PieChart>
                          </ResponsiveContainer>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>NIST Functions</CardTitle>
                        <CardDescription>Coverage across NIST CSF categories</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="h-40">
                          <ResponsiveContainer width="100%" height="100%">
                            <RadarChart outerRadius={80} data={radarData}>
                              <PolarGrid />
                              <PolarAngleAxis dataKey="subject" />
                              <Radar
                                name="Maturity"
                                dataKey="A"
                                stroke="#10b981"
                                fill="#10b981"
                                fillOpacity={0.5}
                              />
                              <Tooltip 
                                formatter={(value) => [`${value}%`, 'Implementation']}
                                contentStyle={{ 
                                  background: "rgba(255, 255, 255, 0.9)",
                                  border: "none",
                                  borderRadius: "0.5rem",
                                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)"
                                }}
                              />
                            </RadarChart>
                          </ResponsiveContainer>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <Card className="mb-8">
                    <CardHeader>
                      <CardTitle>Implementation Group Progress</CardTitle>
                      <CardDescription>Control implementation by CIS Implementation Group</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        {implementationGroupProgress.map((group) => (
                          <div key={group.name} className="space-y-2">
                            <div className="flex justify-between">
                              <span className="font-medium">{group.name}</span>
                              <span className="text-gray-500">{group.percentage}%</span>
                            </div>
                            <Progress value={group.percentage} className="h-2" />
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Maturity Assessment</CardTitle>
                        <CardDescription>Process maturity across capability areas</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-6">
                          {maturityLevels.map((level) => (
                            <div key={level.id} className="space-y-2">
                              <div className="flex justify-between">
                                <div>
                                  <span className="font-medium">{level.name}</span>
                                  <p className="text-sm text-gray-500">{level.description}</p>
                                </div>
                                <span className="text-gray-500">{level.score.toFixed(1)} / {level.maxScore}</span>
                              </div>
                              <Progress value={(level.score / level.maxScore) * 100} className="h-2" />
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Next Steps</CardTitle>
                        <CardDescription>Recommended focus areas for improvement</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="p-3 bg-amber-50 border border-amber-100 rounded-md flex gap-3">
                            <AlertCircle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                            <div>
                              <h4 className="font-medium text-amber-800">Complete IG1 Implementation</h4>
                              <p className="text-sm text-amber-700">
                                Focus on completing the remaining IG1 controls to establish your essential security baseline.
                              </p>
                            </div>
                          </div>
                          
                          <div className="p-3 bg-blue-50 border border-blue-100 rounded-md flex gap-3">
                            <AlertCircle className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                            <div>
                              <h4 className="font-medium text-blue-800">Improve Incident Response</h4>
                              <p className="text-sm text-blue-700">
                                Enhance your incident response capabilities by implementing additional controls from NIST IR family.
                              </p>
                            </div>
                          </div>
                          
                          <div className="p-3 bg-green-50 border border-green-100 rounded-md flex gap-3">
                            <AlertCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <div>
                              <h4 className="font-medium text-green-800">Document Policies and Procedures</h4>
                              <p className="text-sm text-green-700">
                                Formalize security policies and procedures to improve your "Defined" maturity level.
                              </p>
                            </div>
                          </div>
                          
                          <div className="p-3 bg-purple-50 border border-purple-100 rounded-md flex gap-3">
                            <AlertCircle className="h-5 w-5 text-purple-500 flex-shrink-0 mt-0.5" />
                            <div>
                              <h4 className="font-medium text-purple-800">Implement Metrics Collection</h4>
                              <p className="text-sm text-purple-700">
                                Establish security metrics to track effectiveness and enhance the "Managed" maturity level.
                              </p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="cis">
                  <Card className="mb-8">
                    <CardHeader>
                      <CardTitle>CIS Controls Implementation</CardTitle>
                      <CardDescription>Implementation percentage across CIS Controls v8</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="h-[500px]">
                        <ResponsiveContainer width="100%" height="100%">
                          <RechartsBarChart
                            data={cisControlsData}
                            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                            layout="vertical"
                          >
                            <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
                            <XAxis type="number" domain={[0, 100]} tickFormatter={(value) => `${value}%`} />
                            <YAxis dataKey="name" type="category" width={50} />
                            <Tooltip 
                              formatter={(value) => [`${value}%`, 'Implementation']}
                              contentStyle={{ 
                                background: "rgba(255, 255, 255, 0.9)",
                                border: "none",
                                borderRadius: "0.5rem",
                                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)"
                              }}
                            />
                            <Bar 
                              dataKey="value" 
                              fill="#3b82f6"
                              radius={[0, 4, 4, 0]}
                              barSize={20}
                            >
                              {cisControlsData.map((entry, index) => (
                                <Cell 
                                  key={`cell-${index}`} 
                                  fill={entry.value >= 75 ? '#10b981' : entry.value >= 50 ? '#f59e0b' : '#ef4444'}
                                />
                              ))}
                            </Bar>
                          </RechartsBarChart>
                        </ResponsiveContainer>
                      </div>
                    </CardContent>
                  </Card>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Controls by Implementation Group</CardTitle>
                        <CardDescription>Implementation progress by IG level</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="h-[300px]">
                          <ResponsiveContainer width="100%" height="100%">
                            <RechartsBarChart
                              data={[
                                { name: 'IG1', implemented: 48, inProgress: 6, planned: 2 },
                                { name: 'IG2', implemented: 22, inProgress: 15, planned: 13 },
                                { name: 'IG3', implemented: 8, inProgress: 9, planned: 30 },
                              ]}
                              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                            >
                              <CartesianGrid strokeDasharray="3 3" vertical={false} />
                              <XAxis dataKey="name" />
                              <YAxis />
                              <Tooltip 
                                formatter={(value, name) => {
                                  if (typeof name === 'string') {
                                    return [value, name.charAt(0).toUpperCase() + name.slice(1)];
                                  }
                                  return [value, name];
                                }}
                                contentStyle={{ 
                                  background: "rgba(255, 255, 255, 0.9)",
                                  border: "none",
                                  borderRadius: "0.5rem",
                                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)"
                                }}
                              />
                              <Bar dataKey="implemented" stackId="a" fill="#10b981" name="Implemented" />
                              <Bar dataKey="inProgress" stackId="a" fill="#f59e0b" name="In Progress" />
                              <Bar dataKey="planned" stackId="a" fill="#3b82f6" name="Planned" />
                            </RechartsBarChart>
                          </ResponsiveContainer>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Top CIS Controls</CardTitle>
                        <CardDescription>Highest implementation scores</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {cisControlsData
                            .sort((a, b) => b.value - a.value)
                            .slice(0, 5)
                            .map((control, index) => (
                              <div key={index} className="space-y-2">
                                <div className="flex justify-between">
                                  <span className="font-medium">{control.name}</span>
                                  <span className="text-gray-500">{control.value}%</span>
                                </div>
                                <Progress 
                                  value={control.value} 
                                  className="h-2"
                                />
                              </div>
                            ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="nist">
                  <Card className="mb-8">
                    <CardHeader>
                      <CardTitle>NIST Control Families</CardTitle>
                      <CardDescription>Implementation across NIST SP 800-53 control families</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="h-[400px]">
                        <ResponsiveContainer width="100%" height="100%">
                          <RechartsBarChart
                            data={controlFamiliesData}
                            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                            layout="vertical"
                          >
                            <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
                            <XAxis type="number" domain={[0, 100]} tickFormatter={(value) => `${value}%`} />
                            <YAxis dataKey="name" type="category" width={200} />
                            <Tooltip 
                              formatter={(value) => [`${value}%`, 'Implementation']}
                              contentStyle={{ 
                                background: "rgba(255, 255, 255, 0.9)",
                                border: "none",
                                borderRadius: "0.5rem",
                                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)"
                              }}
                            />
                            <Bar 
                              dataKey="implementation" 
                              fill="#8b5cf6"
                              radius={[0, 4, 4, 0]}
                              barSize={20}
                            >
                              {controlFamiliesData.map((entry, index) => (
                                <Cell 
                                  key={`cell-${index}`} 
                                  fill={entry.implementation >= 75 ? '#10b981' : entry.implementation >= 50 ? '#f59e0b' : '#ef4444'}
                                />
                              ))}
                            </Bar>
                          </RechartsBarChart>
                        </ResponsiveContainer>
                      </div>
                    </CardContent>
                  </Card>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>NIST Impact Levels</CardTitle>
                        <CardDescription>Implementation by security impact level</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="h-[300px]">
                          <ResponsiveContainer width="100%" height="100%">
                            <RechartsBarChart
                              data={[
                                { name: 'Low', value: 78 },
                                { name: 'Moderate', value: 61 },
                                { name: 'High', value: 42 },
                              ]}
                              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                            >
                              <CartesianGrid strokeDasharray="3 3" vertical={false} />
                              <XAxis dataKey="name" />
                              <YAxis tickFormatter={(value) => `${value}%`} />
                              <Tooltip 
                                formatter={(value) => [`${value}%`, 'Implementation']}
                                contentStyle={{ 
                                  background: "rgba(255, 255, 255, 0.9)",
                                  border: "none",
                                  borderRadius: "0.5rem",
                                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)"
                                }}
                              />
                              <Bar 
                                dataKey="value" 
                                radius={[4, 4, 0, 0]}
                              >
                                <Cell fill="#10b981" />
                                <Cell fill="#f59e0b" />
                                <Cell fill="#ef4444" />
                              </Bar>
                            </RechartsBarChart>
                          </ResponsiveContainer>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>NIST CSF Functions</CardTitle>
                        <CardDescription>Implementation by core function</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {radarData.map((item) => (
                            <div key={item.subject} className="space-y-2">
                              <div className="flex justify-between">
                                <span className="font-medium">{item.subject}</span>
                                <span className="text-gray-500">{item.A}%</span>
                              </div>
                              <Progress 
                                value={item.A} 
                                className="h-2"
                              />
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="trends">
                  <Card className="mb-8">
                    <CardHeader>
                      <CardTitle>Maturity Score Trend</CardTitle>
                      <CardDescription>Overall maturity score over time</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="h-[300px]">
                        <ResponsiveContainer width="100%" height="100%">
                          <RechartsBarChart
                            data={[
                              { name: 'Q1 2023', score: 2.4 },
                              { name: 'Q2 2023', score: 2.7 },
                              { name: 'Q3 2023', score: 2.9 },
                              { name: 'Q4 2023', score: 3.1 },
                              { name: 'Q1 2024', score: overallScore },
                            ]}
                            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                          >
                            <CartesianGrid strokeDasharray="3 3" vertical={false} />
                            <XAxis dataKey="name" />
                            <YAxis domain={[0, 5]} />
                            <Tooltip 
                              formatter={(value) => [`${value} / 5.0`, 'Maturity Score']}
                              contentStyle={{ 
                                background: "rgba(255, 255, 255, 0.9)",
                                border: "none",
                                borderRadius: "0.5rem",
                                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)"
                              }}
                            />
                            <Bar dataKey="score" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
                          </RechartsBarChart>
                        </ResponsiveContainer>
                      </div>
                    </CardContent>
                  </Card>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Controls Implementation Trend</CardTitle>
                        <CardDescription>Controls implementation over time</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="h-[300px]">
                          <ResponsiveContainer width="100%" height="100%">
                            <RechartsBarChart
                              data={[
                                { name: 'Q1 2023', implemented: 32, inProgress: 18, planned: 50 },
                                { name: 'Q2 2023', implemented: 41, inProgress: 22, planned: 37 },
                                { name: 'Q3 2023', implemented: 47, inProgress: 28, planned: 25 },
                                { name: 'Q4 2023', implemented: 52, inProgress: 30, planned: 18 },
                                { 
                                  name: 'Q1 2024', 
                                  implemented: pieData[0].value,
                                  inProgress: pieData[1].value, 
                                  planned: pieData[2].value 
                                },
                              ]}
                              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                            >
                              <CartesianGrid strokeDasharray="3 3" vertical={false} />
                              <XAxis dataKey="name" />
                              <YAxis tickFormatter={(value) => `${value}%`} />
                              <Tooltip 
                                formatter={(value, name) => {
                                  if (typeof name === 'string') {
                                    return [value + '%', name.charAt(0).toUpperCase() + name.slice(1)];
                                  }
                                  return [value + '%', name];
                                }}
                                contentStyle={{ 
                                  background: "rgba(255, 255, 255, 0.9)",
                                  border: "none",
                                  borderRadius: "0.5rem",
                                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)"
                                }}
                              />
                              <Bar dataKey="implemented" stackId="a" fill="#10b981" name="Implemented" />
                              <Bar dataKey="inProgress" stackId="a" fill="#f59e0b" name="In Progress" />
                              <Bar dataKey="planned" stackId="a" fill="#3b82f6" name="Planned" />
                            </RechartsBarChart>
                          </ResponsiveContainer>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Risk Metric Trend</CardTitle>
                        <CardDescription>Security risk metrics over time</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="h-[300px]">
                          <ResponsiveContainer width="100%" height="100%">
                            <RechartsBarChart
                              data={[
                                { name: 'Q1 2023', highRisk: 12, mediumRisk: 28, lowRisk: 35 },
                                { name: 'Q2 2023', highRisk: 10, mediumRisk: 24, lowRisk: 42 },
                                { name: 'Q3 2023', highRisk: 8, mediumRisk: 22, lowRisk: 45 },
                                { name: 'Q4 2023', highRisk: 6, mediumRisk: 19, lowRisk: 51 },
                                { name: 'Q1 2024', highRisk: 5, mediumRisk: 17, lowRisk: 53 },
                              ]}
                              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                            >
                              <CartesianGrid strokeDasharray="3 3" vertical={false} />
                              <XAxis dataKey="name" />
                              <YAxis />
                              <Tooltip 
                                formatter={(value, name) => {
                                  if (typeof name === 'string') {
                                    const readableName = name.replace(/([A-Z])/g, ' $1').trim()
                                      .toLowerCase()
                                      .split(' ')
                                      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                                      .join(' ');
                                    return [value, readableName];
                                  }
                                  return [value, String(name)];
                                }}
                                contentStyle={{ 
                                  background: "rgba(255, 255, 255, 0.9)",
                                  border: "none",
                                  borderRadius: "0.5rem",
                                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)"
                                }}
                              />
                              <Bar dataKey="highRisk" fill="#ef4444" name="High Risk" />
                              <Bar dataKey="mediumRisk" fill="#f59e0b" name="Medium Risk" />
                              <Bar dataKey="lowRisk" fill="#10b981" name="Low Risk" />
                            </RechartsBarChart>
                          </ResponsiveContainer>
                        </div>
                      </CardContent>
                    </Card>
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

export default Maturity;
