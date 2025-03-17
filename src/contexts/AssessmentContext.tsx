
import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "sonner";
import { cisControls } from "../data/cisControls";
import { nistControls } from "../data/nistControls";

export interface SecurityControl {
  id: string;
  name: string;
  description: string;
  nistMapping: string[];
  implementationLevel: "IG1" | "IG2" | "IG3";
  category: string;
  status?: "implemented" | "in-progress" | "planned" | "not-implemented";
  score?: number;
  notes?: string;
  framework: "CIS" | "NIST";
}

interface AssessmentContextType {
  controls: SecurityControl[];
  updateControlScore: (id: string, score: number) => void;
  updateControlStatus: (id: string, status: "implemented" | "in-progress" | "planned" | "not-implemented") => void;
  updateControlNotes: (id: string, notes: string) => void;
  saveAssessment: () => void;
  loadAssessment: () => void;
  resetAssessment: () => void;
  getOverallScore: () => number;
  getFrameworkScore: (framework: "CIS" | "NIST") => number;
  getImplementationGroupProgress: () => { name: string; percentage: number; color: string }[];
  getControlsByStatus: () => { name: string; value: number; color: string }[];
}

// Combine the controls from both frameworks with default status
const defaultControls = [
  ...cisControls.map(control => ({
    ...control,
    status: control.status || "planned" as const,
    score: control.score || 0
  })),
  ...nistControls.map(control => ({
    ...control,
    status: control.status || "planned" as const,
    score: control.score || 0
  }))
];

const AssessmentContext = createContext<AssessmentContextType | undefined>(undefined);

export const AssessmentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [controls, setControls] = useState<SecurityControl[]>(() => {
    // Try to load from localStorage on initial load
    const savedControls = localStorage.getItem("securityControls");
    return savedControls ? JSON.parse(savedControls) : defaultControls;
  });

  useEffect(() => {
    // Save to localStorage whenever controls change
    localStorage.setItem("securityControls", JSON.stringify(controls));
  }, [controls]);

  const updateControlScore = (id: string, score: number) => {
    setControls(prevControls => 
      prevControls.map(control => 
        control.id === id ? { ...control, score } : control
      )
    );
  };

  const updateControlStatus = (id: string, status: "implemented" | "in-progress" | "planned" | "not-implemented") => {
    setControls(prevControls => 
      prevControls.map(control => 
        control.id === id ? { ...control, status } : control
      )
    );
  };

  const updateControlNotes = (id: string, notes: string) => {
    setControls(prevControls => 
      prevControls.map(control => 
        control.id === id ? { ...control, notes } : control
      )
    );
  };

  const saveAssessment = () => {
    localStorage.setItem("securityControls", JSON.stringify(controls));
    toast.success("Assessment saved successfully");
  };

  const loadAssessment = () => {
    const savedControls = localStorage.getItem("securityControls");
    if (savedControls) {
      setControls(JSON.parse(savedControls));
      toast.success("Assessment loaded successfully");
    } else {
      toast.error("No saved assessment found");
    }
  };

  const resetAssessment = () => {
    setControls(defaultControls);
    toast.success("Assessment reset to default values");
  };

  const getOverallScore = () => {
    if (controls.length === 0) return 0;
    
    const scoredControls = controls.filter(control => typeof control.score === 'number');
    if (scoredControls.length === 0) return 0;
    
    const totalScore = scoredControls.reduce((sum, control) => sum + (control.score || 0), 0);
    return parseFloat((totalScore / (scoredControls.length * 5) * 5).toFixed(1));
  };

  const getFrameworkScore = (framework: "CIS" | "NIST") => {
    const frameworkControls = controls.filter(control => control.framework === framework);
    
    if (frameworkControls.length === 0) return 0;
    
    const scoredControls = frameworkControls.filter(control => typeof control.score === 'number');
    if (scoredControls.length === 0) return 0;
    
    const totalScore = scoredControls.reduce((sum, control) => sum + (control.score || 0), 0);
    return parseFloat((totalScore / (scoredControls.length * 5) * 5).toFixed(1));
  };

  const getImplementationGroupProgress = () => {
    const ig1Controls = controls.filter(c => c.implementationLevel === "IG1");
    const ig2Controls = controls.filter(c => c.implementationLevel === "IG2");
    const ig3Controls = controls.filter(c => c.implementationLevel === "IG3");

    const calculateProgress = (controls: SecurityControl[]) => {
      if (controls.length === 0) return 0;
      const totalScore = controls.reduce((sum, control) => sum + (control.score || 0), 0);
      return Math.round((totalScore / (controls.length * 5)) * 100);
    };

    return [
      { name: "IG1 - Basic", percentage: calculateProgress(ig1Controls), color: "#10b981" },
      { name: "IG2 - Foundational", percentage: calculateProgress(ig2Controls), color: "#3b82f6" },
      { name: "IG3 - Organizational", percentage: calculateProgress(ig3Controls), color: "#8b5cf6" },
    ];
  };

  const getControlsByStatus = () => {
    const implemented = controls.filter(c => c.status === "implemented").length;
    const inProgress = controls.filter(c => c.status === "in-progress").length;
    const planned = controls.filter(c => c.status === "planned").length;
    const notImplemented = controls.filter(c => c.status === "not-implemented").length;
    const total = controls.length;

    return [
      { name: "Implemented", value: Math.round((implemented / total) * 100), color: "#10b981" },
      { name: "In Progress", value: Math.round((inProgress / total) * 100), color: "#f59e0b" },
      { name: "Planned", value: Math.round((planned / total) * 100), color: "#3b82f6" },
      { name: "Not Implemented", value: Math.round((notImplemented / total) * 100), color: "#ef4444" },
    ];
  };

  return (
    <AssessmentContext.Provider 
      value={{ 
        controls, 
        updateControlScore, 
        updateControlStatus, 
        updateControlNotes,
        saveAssessment,
        loadAssessment,
        resetAssessment,
        getOverallScore,
        getFrameworkScore,
        getImplementationGroupProgress,
        getControlsByStatus
      }}
    >
      {children}
    </AssessmentContext.Provider>
  );
};

export const useAssessment = () => {
  const context = useContext(AssessmentContext);
  if (context === undefined) {
    throw new Error("useAssessment must be used within an AssessmentProvider");
  }
  return context;
};
