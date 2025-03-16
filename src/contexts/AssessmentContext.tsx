
import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "sonner";

export interface SecurityControl {
  id: string;
  name: string;
  description: string;
  nistMapping: string[];
  implementationLevel: "IG1" | "IG2" | "IG3";
  category: string;
  status?: "implemented" | "in-progress" | "planned";
  score?: number;
  notes?: string;
}

interface AssessmentContextType {
  controls: SecurityControl[];
  updateControlScore: (id: string, score: number) => void;
  updateControlStatus: (id: string, status: "implemented" | "in-progress" | "planned") => void;
  updateControlNotes: (id: string, notes: string) => void;
  saveAssessment: () => void;
  loadAssessment: () => void;
  resetAssessment: () => void;
  getOverallScore: () => number;
  getImplementationGroupProgress: () => { name: string; percentage: number; color: string }[];
  getControlsByStatus: () => { name: string; value: number; color: string }[];
}

const defaultControlsByGroup: Record<string, SecurityControl[]> = {
  "Access Control": [
    {
      id: "CIS-5.1",
      name: "Establish and Maintain an Inventory of Accounts",
      description: "Establish and maintain an inventory of all accounts managed in the enterprise.",
      nistMapping: ["AC-2", "IA-8"],
      implementationLevel: "IG1",
      category: "Access Control",
      status: "implemented",
      score: 4
    },
    {
      id: "CIS-5.2",
      name: "Use Unique Passwords",
      description: "Use unique passwords for all enterprise assets.",
      nistMapping: ["IA-5"],
      implementationLevel: "IG1",
      category: "Access Control",
      status: "implemented",
      score: 3
    },
    {
      id: "CIS-5.3",
      name: "Disable Dormant Accounts",
      description: "Delete or disable any dormant accounts after a period of inactivity.",
      nistMapping: ["AC-2(3)"],
      implementationLevel: "IG1",
      category: "Access Control",
      status: "in-progress",
      score: 2
    },
    {
      id: "CIS-5.4",
      name: "Restrict Administrator Privileges",
      description: "Restrict administrator privileges to dedicated administrator accounts on enterprise assets.",
      nistMapping: ["AC-6(5)", "AC-6(7)"],
      implementationLevel: "IG1",
      category: "Access Control",
      status: "in-progress",
      score: 2
    }
  ],
  "Data Protection": [
    {
      id: "CIS-3.1",
      name: "Establish and Maintain a Data Management Process",
      description: "Establish and maintain a data management process across the enterprise.",
      nistMapping: ["PM-5", "MP-1"],
      implementationLevel: "IG1",
      category: "Data Protection",
      status: "implemented",
      score: 3
    },
    {
      id: "CIS-3.2",
      name: "Establish and Maintain a Data Inventory",
      description: "Establish and maintain a data inventory that identifies sensitive data.",
      nistMapping: ["CM-8", "PM-5"],
      implementationLevel: "IG1",
      category: "Data Protection",
      status: "in-progress",
      score: 2
    },
    {
      id: "CIS-3.3",
      name: "Configure Data Access Control Lists",
      description: "Configure data access control lists based on a user's need to know.",
      nistMapping: ["AC-3", "AC-24"],
      implementationLevel: "IG1",
      category: "Data Protection",
      status: "planned",
      score: 1
    },
    {
      id: "CIS-3.4",
      name: "Encrypt Sensitive Data at Rest",
      description: "Encrypt sensitive data at rest on servers, applications, and databases.",
      nistMapping: ["SC-28", "SC-28(1)"],
      implementationLevel: "IG2",
      category: "Data Protection",
      status: "planned",
      score: 0
    }
  ],
  "Incident Response": [
    {
      id: "CIS-17.1",
      name: "Designate Personnel for Incident Handling",
      description: "Designate personnel to manage incident handling.",
      nistMapping: ["IR-2", "IR-4", "IR-7"],
      implementationLevel: "IG1",
      category: "Incident Response",
      status: "implemented",
      score: 4
    },
    {
      id: "CIS-17.2",
      name: "Establish and Maintain Contact Information",
      description: "Establish and maintain contact information for reporting security incidents.",
      nistMapping: ["IR-6", "IR-4", "IR-7"],
      implementationLevel: "IG1",
      category: "Incident Response",
      status: "implemented",
      score: 3
    },
    {
      id: "CIS-17.3",
      name: "Establish and Maintain an Incident Response Process",
      description: "Establish and maintain an incident response process.",
      nistMapping: ["IR-8", "IR-4", "IR-5"],
      implementationLevel: "IG1",
      category: "Incident Response",
      status: "in-progress",
      score: 2
    }
  ],
  "Network Infrastructure": [
    {
      id: "CIS-12.1",
      name: "Ensure Network Infrastructure is Up-to-Date",
      description: "Ensure network infrastructure is up-to-date.",
      nistMapping: ["CM-7", "CM-2", "CM-8"],
      implementationLevel: "IG1",
      category: "Network Infrastructure",
      status: "in-progress",
      score: 2
    },
    {
      id: "CIS-12.2",
      name: "Establish and Maintain a Secure Network Architecture",
      description: "Establish and maintain a secure network architecture.",
      nistMapping: ["SC-7", "SC-5", "AC-4"],
      implementationLevel: "IG2",
      category: "Network Infrastructure",
      status: "planned",
      score: 1
    },
    {
      id: "CIS-12.3",
      name: "Segment Networks Based on Sensitivity",
      description: "Securely segment internal networks based on sensitivity.",
      nistMapping: ["SC-7", "AC-4", "SC-3"],
      implementationLevel: "IG2",
      category: "Network Infrastructure",
      status: "planned",
      score: 0
    }
  ]
};

// Flatten the controls by group into a single array
const defaultControls = Object.values(defaultControlsByGroup).flat();

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

  const updateControlStatus = (id: string, status: "implemented" | "in-progress" | "planned") => {
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
    const total = controls.length;

    return [
      { name: "Implemented", value: Math.round((implemented / total) * 100), color: "#10b981" },
      { name: "In Progress", value: Math.round((inProgress / total) * 100), color: "#f59e0b" },
      { name: "Planned", value: Math.round((planned / total) * 100), color: "#3b82f6" },
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
