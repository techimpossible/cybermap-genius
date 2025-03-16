
import { SecurityControl } from "../contexts/AssessmentContext";

// NIST SP 800-53 Rev 5 core family controls
export const nistControls: SecurityControl[] = [
  // Access Control (AC) Family
  {
    id: "NIST-AC-1",
    name: "Policy and Procedures",
    description: "Develop, document, and disseminate an access control policy and procedures.",
    nistMapping: ["AC-1"],
    implementationLevel: "IG1",
    category: "Access Control (AC)",
    status: "planned",
    score: 0,
    framework: "NIST"
  },
  {
    id: "NIST-AC-2",
    name: "Account Management",
    description: "Establish and maintain account management processes for information system accounts including identifying account types, establishing conditions for group and role membership, and assigning account managers.",
    nistMapping: ["AC-2"],
    implementationLevel: "IG1",
    category: "Access Control (AC)",
    status: "planned",
    score: 0,
    framework: "NIST"
  },
  {
    id: "NIST-AC-3",
    name: "Access Enforcement",
    description: "Enforce approved authorizations for logical access to information and system resources in accordance with applicable access control policies.",
    nistMapping: ["AC-3"],
    implementationLevel: "IG1",
    category: "Access Control (AC)",
    status: "planned",
    score: 0,
    framework: "NIST"
  },
  {
    id: "NIST-AC-4",
    name: "Information Flow Enforcement",
    description: "Enforce approved authorizations for controlling the flow of information within the system and between connected systems based on applicable policy.",
    nistMapping: ["AC-4"],
    implementationLevel: "IG2",
    category: "Access Control (AC)",
    status: "planned",
    score: 0,
    framework: "NIST"
  },
  {
    id: "NIST-AC-5",
    name: "Separation of Duties",
    description: "Separate duties of individuals as necessary to prevent malevolent activity; document separation of duties; and implement separation of duties through assigned information system access authorizations.",
    nistMapping: ["AC-5"],
    implementationLevel: "IG2",
    category: "Access Control (AC)",
    status: "planned",
    score: 0,
    framework: "NIST"
  },
  
  // Awareness and Training (AT) Family
  {
    id: "NIST-AT-1",
    name: "Policy and Procedures",
    description: "Develop, document, and disseminate security awareness and training policy and procedures.",
    nistMapping: ["AT-1"],
    implementationLevel: "IG1",
    category: "Awareness and Training (AT)",
    status: "planned",
    score: 0,
    framework: "NIST"
  },
  {
    id: "NIST-AT-2",
    name: "Literacy Training and Awareness",
    description: "Provide security and privacy literacy training to system users, including role-based training for individuals with assigned security and privacy roles and responsibilities.",
    nistMapping: ["AT-2"],
    implementationLevel: "IG1",
    category: "Awareness and Training (AT)",
    status: "planned",
    score: 0,
    framework: "NIST"
  },
  {
    id: "NIST-AT-3",
    name: "Role-Based Training",
    description: "Provide role-based security and privacy training to personnel with assigned security and privacy roles and responsibilities.",
    nistMapping: ["AT-3"],
    implementationLevel: "IG1",
    category: "Awareness and Training (AT)",
    status: "planned",
    score: 0,
    framework: "NIST"
  },
  {
    id: "NIST-AT-4",
    name: "Training Records",
    description: "Document and monitor individual information system security and privacy training activities including basic security and privacy literacy training and specific role-based information system security and privacy training.",
    nistMapping: ["AT-4"],
    implementationLevel: "IG1",
    category: "Awareness and Training (AT)",
    status: "planned",
    score: 0,
    framework: "NIST"
  },
  
  // Audit and Accountability (AU) Family
  {
    id: "NIST-AU-1",
    name: "Policy and Procedures",
    description: "Develop, document, and disseminate an audit and accountability policy and procedures.",
    nistMapping: ["AU-1"],
    implementationLevel: "IG1",
    category: "Audit and Accountability (AU)",
    status: "planned",
    score: 0,
    framework: "NIST"
  },
  {
    id: "NIST-AU-2",
    name: "Event Logging",
    description: "Identify the types of events that the system is capable of logging in support of the audit function, coordinate the audit function with other organizational entities requiring audit-related information, and specify the level of events to be logged.",
    nistMapping: ["AU-2"],
    implementationLevel: "IG1",
    category: "Audit and Accountability (AU)",
    status: "planned",
    score: 0,
    framework: "NIST"
  },
  {
    id: "NIST-AU-3",
    name: "Content of Audit Records",
    description: "Ensure that audit records contain information that establishes the following: what type of event occurred, when the event occurred, where the event occurred, the source of the event, and the outcome of the event.",
    nistMapping: ["AU-3"],
    implementationLevel: "IG1",
    category: "Audit and Accountability (AU)",
    status: "planned",
    score: 0,
    framework: "NIST"
  },
  
  // Security Assessment and Authorization (CA) Family
  {
    id: "NIST-CA-1",
    name: "Policy and Procedures",
    description: "Develop, document, and disseminate an assessment, authorization, and monitoring policy and procedures.",
    nistMapping: ["CA-1"],
    implementationLevel: "IG1",
    category: "Security Assessment and Authorization (CA)",
    status: "planned",
    score: 0,
    framework: "NIST"
  },
  {
    id: "NIST-CA-2",
    name: "Control Assessments",
    description: "Develop a control assessment plan and assess the controls in the system and its environment of operation to determine the effectiveness of the controls.",
    nistMapping: ["CA-2"],
    implementationLevel: "IG1",
    category: "Security Assessment and Authorization (CA)",
    status: "planned",
    score: 0,
    framework: "NIST"
  },
  {
    id: "NIST-CA-3",
    name: "Information Exchange",
    description: "Approve and manage the exchange of information between the system and other systems using interconnection security agreements, information exchange security agreements, or other means of documenting protections.",
    nistMapping: ["CA-3"],
    implementationLevel: "IG2",
    category: "Security Assessment and Authorization (CA)",
    status: "planned",
    score: 0,
    framework: "NIST"
  },
  
  // Configuration Management (CM) Family
  {
    id: "NIST-CM-1",
    name: "Policy and Procedures",
    description: "Develop, document, and disseminate a configuration management policy and procedures.",
    nistMapping: ["CM-1"],
    implementationLevel: "IG1",
    category: "Configuration Management (CM)",
    status: "planned",
    score: 0,
    framework: "NIST"
  },
  {
    id: "NIST-CM-2",
    name: "Baseline Configuration",
    description: "Develop, document, and maintain under configuration control, a current baseline configuration of the system.",
    nistMapping: ["CM-2"],
    implementationLevel: "IG1",
    category: "Configuration Management (CM)",
    status: "planned",
    score: 0,
    framework: "NIST"
  },
  {
    id: "NIST-CM-3",
    name: "Configuration Change Control",
    description: "Document and manage configuration changes to the system using the organizational configuration management process.",
    nistMapping: ["CM-3"],
    implementationLevel: "IG2",
    category: "Configuration Management (CM)",
    status: "planned",
    score: 0,
    framework: "NIST"
  },
  
  // Contingency Planning (CP) Family
  {
    id: "NIST-CP-1",
    name: "Policy and Procedures",
    description: "Develop, document, and disseminate a contingency planning policy and procedures.",
    nistMapping: ["CP-1"],
    implementationLevel: "IG1",
    category: "Contingency Planning (CP)",
    status: "planned",
    score: 0,
    framework: "NIST"
  },
  {
    id: "NIST-CP-2",
    name: "Contingency Plan",
    description: "Develop and maintain a contingency plan for the system that identifies essential missions and business functions, provides recovery objectives, and restoration priorities.",
    nistMapping: ["CP-2"],
    implementationLevel: "IG1",
    category: "Contingency Planning (CP)",
    status: "planned",
    score: 0,
    framework: "NIST"
  },
  {
    id: "NIST-CP-3",
    name: "Contingency Training",
    description: "Provide contingency training to system users consistent with assigned roles and responsibilities.",
    nistMapping: ["CP-3"],
    implementationLevel: "IG2",
    category: "Contingency Planning (CP)",
    status: "planned",
    score: 0,
    framework: "NIST"
  },
  
  // Sample controls from remaining families
  
  // Identification and Authentication (IA) Family
  {
    id: "NIST-IA-1",
    name: "Policy and Procedures",
    description: "Develop, document, and disseminate an identification and authentication policy and procedures.",
    nistMapping: ["IA-1"],
    implementationLevel: "IG1",
    category: "Identification and Authentication (IA)",
    status: "planned",
    score: 0,
    framework: "NIST"
  },
  
  // Incident Response (IR) Family
  {
    id: "NIST-IR-1",
    name: "Policy and Procedures",
    description: "Develop, document, and disseminate an incident response policy and procedures.",
    nistMapping: ["IR-1"],
    implementationLevel: "IG1",
    category: "Incident Response (IR)",
    status: "planned",
    score: 0,
    framework: "NIST"
  },
  
  // Maintenance (MA) Family
  {
    id: "NIST-MA-1",
    name: "Policy and Procedures",
    description: "Develop, document, and disseminate a system maintenance policy and procedures.",
    nistMapping: ["MA-1"],
    implementationLevel: "IG1",
    category: "Maintenance (MA)",
    status: "planned",
    score: 0,
    framework: "NIST"
  },
  
  // Media Protection (MP) Family
  {
    id: "NIST-MP-1",
    name: "Policy and Procedures",
    description: "Develop, document, and disseminate a media protection policy and procedures.",
    nistMapping: ["MP-1"],
    implementationLevel: "IG1",
    category: "Media Protection (MP)",
    status: "planned",
    score: 0,
    framework: "NIST"
  },
  
  // Physical and Environmental Protection (PE) Family
  {
    id: "NIST-PE-1",
    name: "Policy and Procedures",
    description: "Develop, document, and disseminate a physical and environmental protection policy and procedures.",
    nistMapping: ["PE-1"],
    implementationLevel: "IG1",
    category: "Physical and Environmental Protection (PE)",
    status: "planned",
    score: 0,
    framework: "NIST"
  },
  
  // Planning (PL) Family
  {
    id: "NIST-PL-1",
    name: "Policy and Procedures",
    description: "Develop, document, and disseminate a security and privacy planning policy and procedures.",
    nistMapping: ["PL-1"],
    implementationLevel: "IG1",
    category: "Planning (PL)",
    status: "planned",
    score: 0,
    framework: "NIST"
  },
  
  // Program Management (PM) Family
  {
    id: "NIST-PM-1",
    name: "Information Security Program Plan",
    description: "Develop and disseminate an organization-wide information security program plan.",
    nistMapping: ["PM-1"],
    implementationLevel: "IG1",
    category: "Program Management (PM)",
    status: "planned",
    score: 0,
    framework: "NIST"
  },
  
  // Personnel Security (PS) Family
  {
    id: "NIST-PS-1",
    name: "Policy and Procedures",
    description: "Develop, document, and disseminate a personnel security policy and procedures.",
    nistMapping: ["PS-1"],
    implementationLevel: "IG1",
    category: "Personnel Security (PS)",
    status: "planned",
    score: 0,
    framework: "NIST"
  },
  
  // Risk Assessment (RA) Family
  {
    id: "NIST-RA-1",
    name: "Policy and Procedures",
    description: "Develop, document, and disseminate a risk assessment policy and procedures.",
    nistMapping: ["RA-1"],
    implementationLevel: "IG1",
    category: "Risk Assessment (RA)",
    status: "planned",
    score: 0,
    framework: "NIST"
  },
  
  // System and Services Acquisition (SA) Family
  {
    id: "NIST-SA-1",
    name: "Policy and Procedures",
    description: "Develop, document, and disseminate a system and services acquisition policy and procedures.",
    nistMapping: ["SA-1"],
    implementationLevel: "IG1",
    category: "System and Services Acquisition (SA)",
    status: "planned",
    score: 0,
    framework: "NIST"
  },
  
  // System and Communications Protection (SC) Family
  {
    id: "NIST-SC-1",
    name: "Policy and Procedures",
    description: "Develop, document, and disseminate a system and communications protection policy and procedures.",
    nistMapping: ["SC-1"],
    implementationLevel: "IG1",
    category: "System and Communications Protection (SC)",
    status: "planned",
    score: 0,
    framework: "NIST"
  },
  
  // System and Information Integrity (SI) Family
  {
    id: "NIST-SI-1",
    name: "Policy and Procedures",
    description: "Develop, document, and disseminate a system and information integrity policy and procedures.",
    nistMapping: ["SI-1"],
    implementationLevel: "IG1",
    category: "System and Information Integrity (SI)",
    status: "planned",
    score: 0,
    framework: "NIST"
  },
  
  // Supply Chain Risk Management (SR) Family
  {
    id: "NIST-SR-1",
    name: "Policy and Procedures",
    description: "Develop, document, and disseminate a supply chain risk management policy and procedures.",
    nistMapping: ["SR-1"],
    implementationLevel: "IG1",
    category: "Supply Chain Risk Management (SR)",
    status: "planned",
    score: 0,
    framework: "NIST"
  }
  
  // Note: This is a representative subset of NIST 800-53 controls
  // In a real implementation, we would include all ~1,000 controls
  // from the NIST SP 800-53 Rev 5 framework
];
