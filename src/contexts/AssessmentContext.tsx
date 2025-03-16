
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
  "1. Account and Access Management": [
    {
      id: "CIS-5.1",
      name: "Establish and Maintain an Inventory of Accounts",
      description: "Establish and maintain an inventory of all enterprise assets that can store, process, or transmit data. Assets include: end-user devices, network devices, servers, and applications.",
      nistMapping: ["AC-2", "IA-8"],
      implementationLevel: "IG1",
      category: "1. Account and Access Management",
      status: "implemented",
      score: 4
    },
    {
      id: "CIS-5.2",
      name: "Use Unique Passwords",
      description: "Use unique passwords for all enterprise assets. Best practice implementation includes, at a minimum, an 8-character password for accounts using MFA and a 14-character password for accounts not using MFA.",
      nistMapping: ["IA-5"],
      implementationLevel: "IG1",
      category: "1. Account and Access Management",
      status: "implemented",
      score: 3
    },
    {
      id: "CIS-5.3",
      name: "Disable Dormant Accounts",
      description: "Delete or disable any dormant accounts after a period of 45 days of inactivity.",
      nistMapping: ["AC-2(3)"],
      implementationLevel: "IG1",
      category: "1. Account and Access Management",
      status: "in-progress",
      score: 2
    },
    {
      id: "CIS-5.4",
      name: "Restrict Administrator Privileges",
      description: "Restrict administrator privileges to dedicated administrator accounts on enterprise assets.",
      nistMapping: ["AC-6(5)", "AC-6(7)"],
      implementationLevel: "IG1",
      category: "1. Account and Access Management",
      status: "in-progress",
      score: 2
    },
    {
      id: "CIS-5.5",
      name: "Establish and Maintain an Inventory of Service Accounts",
      description: "Establish and maintain an inventory of service accounts, and configure monitoring to report when changes occur.",
      nistMapping: ["AC-2", "AU-6"],
      implementationLevel: "IG2",
      category: "1. Account and Access Management",
      status: "planned",
      score: 1
    },
    {
      id: "CIS-5.6",
      name: "Centralize Account Management",
      description: "Centralize account management through a directory or identity service.",
      nistMapping: ["AC-2(1)", "IA-2"],
      implementationLevel: "IG1",
      category: "1. Account and Access Management",
      status: "planned",
      score: 0
    }
  ],
  "2. Data Protection": [
    {
      id: "CIS-3.1",
      name: "Establish and Maintain a Data Management Process",
      description: "Establish and maintain a data management process across the enterprise.",
      nistMapping: ["PM-5", "MP-1"],
      implementationLevel: "IG1",
      category: "2. Data Protection",
      status: "implemented",
      score: 3
    },
    {
      id: "CIS-3.2",
      name: "Establish and Maintain a Data Inventory",
      description: "Establish and maintain a data inventory that identifies sensitive data.",
      nistMapping: ["CM-8", "PM-5"],
      implementationLevel: "IG1",
      category: "2. Data Protection",
      status: "in-progress",
      score: 2
    },
    {
      id: "CIS-3.3",
      name: "Configure Data Access Control Lists",
      description: "Configure data access control lists based on a user's need to know.",
      nistMapping: ["AC-3", "AC-24"],
      implementationLevel: "IG1",
      category: "2. Data Protection",
      status: "planned",
      score: 1
    },
    {
      id: "CIS-3.4",
      name: "Encrypt Sensitive Data at Rest",
      description: "Encrypt sensitive data at rest on servers, applications, and databases.",
      nistMapping: ["SC-28", "SC-28(1)"],
      implementationLevel: "IG2",
      category: "2. Data Protection",
      status: "planned",
      score: 0
    },
    {
      id: "CIS-3.5",
      name: "Encrypt Sensitive Data in Transit",
      description: "Encrypt all sensitive data in transit.",
      nistMapping: ["SC-8", "SC-8(1)"],
      implementationLevel: "IG1",
      category: "2. Data Protection",
      status: "in-progress",
      score: 2
    },
    {
      id: "CIS-3.6",
      name: "Maintain Audit Logging",
      description: "Maintain audit logging that provides a complete audit trail of all data access and actions taken in critical systems.",
      nistMapping: ["AU-2", "AU-3", "AU-12"],
      implementationLevel: "IG2",
      category: "2. Data Protection",
      status: "planned",
      score: 1
    }
  ],
  "3. Infrastructure Management": [
    {
      id: "CIS-4.1",
      name: "Establish and Maintain a Secure Configuration Process",
      description: "Establish and maintain a secure configuration process for enterprise assets and software.",
      nistMapping: ["CM-1", "CM-2", "CM-6"],
      implementationLevel: "IG1",
      category: "3. Infrastructure Management",
      status: "in-progress",
      score: 2
    },
    {
      id: "CIS-4.2",
      name: "Establish and Maintain a Secure Configuration Process for Network Infrastructure",
      description: "Establish and maintain a secure configuration process for network devices.",
      nistMapping: ["CM-6", "CM-7"],
      implementationLevel: "IG1",
      category: "3. Infrastructure Management",
      status: "planned",
      score: 1
    },
    {
      id: "CIS-4.3",
      name: "Configure Automatic Session Locking on Enterprise Assets",
      description: "Configure automatic session locking on enterprise assets after a defined period of inactivity.",
      nistMapping: ["AC-11", "AC-11(1)"],
      implementationLevel: "IG1",
      category: "3. Infrastructure Management",
      status: "implemented",
      score: 3
    },
    {
      id: "CIS-4.4",
      name: "Implement and Manage a Firewall on Servers",
      description: "Implement and manage a firewall on servers, where supported.",
      nistMapping: ["SC-7", "CM-7"],
      implementationLevel: "IG1",
      category: "3. Infrastructure Management",
      status: "implemented",
      score: 4
    },
    {
      id: "CIS-4.5",
      name: "Implement and Manage a Firewall on End-User Devices",
      description: "Implement and manage a host-based firewall or port-filtering tool on end-user devices.",
      nistMapping: ["SC-7", "CM-7"],
      implementationLevel: "IG1",
      category: "3. Infrastructure Management",
      status: "in-progress",
      score: 2
    },
    {
      id: "CIS-4.6",
      name: "Securely Manage Enterprise Assets and Software",
      description: "Securely manage all enterprise assets and software.",
      nistMapping: ["CM-2", "CM-3", "CM-5"],
      implementationLevel: "IG2",
      category: "3. Infrastructure Management",
      status: "planned",
      score: 1
    }
  ],
  "4. Vulnerability Management": [
    {
      id: "CIS-7.1",
      name: "Establish and Maintain a Vulnerability Management Process",
      description: "Establish and maintain a documented vulnerability management process for enterprise assets.",
      nistMapping: ["RA-3", "RA-5", "SA-11"],
      implementationLevel: "IG1",
      category: "4. Vulnerability Management",
      status: "implemented",
      score: 3
    },
    {
      id: "CIS-7.2",
      name: "Establish and Maintain a Remediation Process",
      description: "Establish and maintain a risk-based remediation strategy documented in a remediation process.",
      nistMapping: ["RA-5", "CA-5"],
      implementationLevel: "IG1",
      category: "4. Vulnerability Management",
      status: "in-progress",
      score: 2
    },
    {
      id: "CIS-7.3",
      name: "Perform Automated Operating System Patch Management",
      description: "Perform operating system updates on enterprise assets through automated patch management on a monthly, or more frequent, basis.",
      nistMapping: ["SI-2", "SI-2(2)"],
      implementationLevel: "IG1",
      category: "4. Vulnerability Management",
      status: "implemented",
      score: 4
    },
    {
      id: "CIS-7.4",
      name: "Perform Automated Application Patch Management",
      description: "Perform application updates on enterprise assets through automated patch management on a monthly, or more frequent, basis.",
      nistMapping: ["SI-2", "SI-2(2)"],
      implementationLevel: "IG1",
      category: "4. Vulnerability Management",
      status: "in-progress",
      score: 2
    },
    {
      id: "CIS-7.5",
      name: "Perform Automated Vulnerability Scans of Internal Enterprise Assets",
      description: "Perform automated vulnerability scans of internal enterprise assets on a monthly basis.",
      nistMapping: ["RA-5", "RA-5(1)"],
      implementationLevel: "IG2",
      category: "4. Vulnerability Management",
      status: "planned",
      score: 1
    },
    {
      id: "CIS-7.6",
      name: "Perform Automated Vulnerability Scans of Externally-Exposed Enterprise Assets",
      description: "Perform automated vulnerability scans of externally-exposed enterprise assets on a weekly basis.",
      nistMapping: ["RA-5", "RA-5(1)"],
      implementationLevel: "IG2",
      category: "4. Vulnerability Management",
      status: "planned",
      score: 0
    }
  ],
  "5. Incident Response": [
    {
      id: "CIS-17.1",
      name: "Designate Personnel for Incident Handling",
      description: "Designate personnel to manage incident handling and response.",
      nistMapping: ["IR-2", "IR-4", "IR-7"],
      implementationLevel: "IG1",
      category: "5. Incident Response",
      status: "implemented",
      score: 4
    },
    {
      id: "CIS-17.2",
      name: "Establish and Maintain Contact Information",
      description: "Establish and maintain contact information for reporting security incidents.",
      nistMapping: ["IR-6", "IR-4", "IR-7"],
      implementationLevel: "IG1",
      category: "5. Incident Response",
      status: "implemented",
      score: 3
    },
    {
      id: "CIS-17.3",
      name: "Establish and Maintain an Incident Response Process",
      description: "Establish and maintain an enterprise process for the incident response team to perform its functions.",
      nistMapping: ["IR-8", "IR-4", "IR-5"],
      implementationLevel: "IG1",
      category: "5. Incident Response",
      status: "in-progress",
      score: 2
    },
    {
      id: "CIS-17.4",
      name: "Establish and Maintain an Incident Response Plan",
      description: "Establish and maintain an incident response plan that documents the organization's processes for responding to security incidents.",
      nistMapping: ["IR-8", "IR-4"],
      implementationLevel: "IG1",
      category: "5. Incident Response",
      status: "in-progress",
      score: 2
    },
    {
      id: "CIS-17.5",
      name: "Conduct Incident Response Exercises",
      description: "Conduct incident response team exercises annually, at a minimum, to test the incident response plan.",
      nistMapping: ["IR-3", "IR-3(1)"],
      implementationLevel: "IG2",
      category: "5. Incident Response",
      status: "planned",
      score: 1
    },
    {
      id: "CIS-17.6",
      name: "Conduct Post-Incident Reviews",
      description: "Conduct post-incident reviews for incidents determined to be significant.",
      nistMapping: ["IR-4", "CP-2(8)"],
      implementationLevel: "IG2",
      category: "5. Incident Response",
      status: "planned",
      score: 0
    }
  ],
  "6. Network Infrastructure": [
    {
      id: "CIS-12.1",
      name: "Ensure Network Infrastructure is Up-to-Date",
      description: "Ensure network infrastructure is kept up-to-date with security patches and updates.",
      nistMapping: ["CM-7", "CM-2", "CM-8"],
      implementationLevel: "IG1",
      category: "6. Network Infrastructure",
      status: "in-progress",
      score: 2
    },
    {
      id: "CIS-12.2",
      name: "Establish and Maintain a Secure Network Architecture",
      description: "Establish and maintain a secure network architecture.",
      nistMapping: ["SC-7", "SC-5", "AC-4"],
      implementationLevel: "IG2",
      category: "6. Network Infrastructure",
      status: "planned",
      score: 1
    },
    {
      id: "CIS-12.3",
      name: "Segment Networks Based on Sensitivity",
      description: "Securely segment internal networks based on sensitivity.",
      nistMapping: ["SC-7", "AC-4", "SC-3"],
      implementationLevel: "IG2",
      category: "6. Network Infrastructure",
      status: "planned",
      score: 0
    },
    {
      id: "CIS-12.4",
      name: "Establish and Maintain Dedicated Computing Resources for All Administrative Work",
      description: "Establish and maintain dedicated computing resources, either physically or logically separated, for all administrative tasks or tasks requiring elevated access.",
      nistMapping: ["SC-3", "SC-7(13)"],
      implementationLevel: "IG2",
      category: "6. Network Infrastructure",
      status: "planned",
      score: 1
    },
    {
      id: "CIS-12.5",
      name: "Centralize Network Authentication, Authorization, and Auditing (AAA)",
      description: "Centralize network AAA with proper secure protocols and enforce MFA for network administrators.",
      nistMapping: ["IA-2", "IA-8", "AU-6"],
      implementationLevel: "IG2",
      category: "6. Network Infrastructure",
      status: "planned",
      score: 0
    },
    {
      id: "CIS-12.6",
      name: "Use DNS Filtering Services",
      description: "Use DNS filtering services to help block access to known malicious domains.",
      nistMapping: ["SC-7", "SI-3"],
      implementationLevel: "IG1",
      category: "6. Network Infrastructure",
      status: "in-progress",
      score: 2
    }
  ],
  "7. Endpoint Security": [
    {
      id: "CIS-10.1",
      name: "Deploy and Maintain Anti-Malware Software",
      description: "Deploy and maintain anti-malware software on all enterprise assets.",
      nistMapping: ["SI-3", "SI-3(1)"],
      implementationLevel: "IG1",
      category: "7. Endpoint Security",
      status: "implemented",
      score: 4
    },
    {
      id: "CIS-10.2",
      name: "Configure Automatic Anti-Malware Scanning",
      description: "Configure automatic anti-malware scanning of removable media on all enterprise assets.",
      nistMapping: ["SI-3", "SI-3(1)"],
      implementationLevel: "IG1",
      category: "7. Endpoint Security",
      status: "implemented",
      score: 3
    },
    {
      id: "CIS-10.3",
      name: "Disable Autorun and Autoplay for Removable Media",
      description: "Disable autorun and autoplay features for removable media.",
      nistMapping: ["CM-7"],
      implementationLevel: "IG1",
      category: "7. Endpoint Security",
      status: "implemented",
      score: 4
    },
    {
      id: "CIS-10.4",
      name: "Configure Automatic Anti-Malware Scanning of Downloaded Files",
      description: "Configure anti-malware software to automatically scan all downloaded files.",
      nistMapping: ["SI-3", "SI-3(1)"],
      implementationLevel: "IG1",
      category: "7. Endpoint Security",
      status: "implemented",
      score: 3
    },
    {
      id: "CIS-10.5",
      name: "Enable anti-exploitation features",
      description: "Enable anti-exploitation features on enterprise assets and software, where possible.",
      nistMapping: ["SI-16"],
      implementationLevel: "IG2",
      category: "7. Endpoint Security",
      status: "in-progress",
      score: 2
    },
    {
      id: "CIS-10.6",
      name: "Centrally Manage Anti-Malware Software",
      description: "Centrally manage anti-malware software deployment, configuration, and updates.",
      nistMapping: ["SI-3", "CM-1"],
      implementationLevel: "IG2",
      category: "7. Endpoint Security",
      status: "planned",
      score: 1
    }
  ],
  "8. Secure Configuration": [
    {
      id: "CIS-2.1",
      name: "Establish and Maintain a Software Inventory",
      description: "Establish and maintain a detailed inventory of all licensed software installed on enterprise assets.",
      nistMapping: ["CM-8", "CM-8(1)"],
      implementationLevel: "IG1",
      category: "8. Secure Configuration",
      status: "in-progress",
      score: 2
    },
    {
      id: "CIS-2.2",
      name: "Ensure Authorized Software is Currently Supported",
      description: "Ensure that only software applications or operating systems currently supported by the software's vendor are added to the organization's authorized software inventory.",
      nistMapping: ["CM-7", "CM-7(5)"],
      implementationLevel: "IG1",
      category: "8. Secure Configuration",
      status: "in-progress",
      score: 2
    },
    {
      id: "CIS-2.3",
      name: "Address Unauthorized Software",
      description: "Ensure that unauthorized software is either removed or the inventory is updated to include it.",
      nistMapping: ["CM-7", "CM-8"],
      implementationLevel: "IG1",
      category: "8. Secure Configuration",
      status: "planned",
      score: 1
    },
    {
      id: "CIS-2.4",
      name: "Create Custom Images",
      description: "Utilize secure, standardized, and hardened images or templates for operating systems and applications.",
      nistMapping: ["CM-2(2)", "CM-6"],
      implementationLevel: "IG2",
      category: "8. Secure Configuration",
      status: "planned",
      score: 0
    },
    {
      id: "CIS-2.5",
      name: "Utilize Secure Application Development Practices",
      description: "Utilize secure application development practices if internally developed software is used in the organization.",
      nistMapping: ["SA-15", "SA-8"],
      implementationLevel: "IG2",
      category: "8. Secure Configuration",
      status: "planned",
      score: 1
    },
    {
      id: "CIS-2.6",
      name: "Perform Regular Automated Security Testing",
      description: "Conduct regular automated security testing for internally developed software.",
      nistMapping: ["SA-11", "RA-5"],
      implementationLevel: "IG3",
      category: "8. Secure Configuration",
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
