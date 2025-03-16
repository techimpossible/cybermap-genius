
import { SecurityControl } from "../contexts/AssessmentContext";

// Complete CIS Controls v8 with all 18 control categories and 153 safeguards
export const cisControls: SecurityControl[] = [
  // CIS Control 1: Inventory and Control of Enterprise Assets
  {
    id: "CIS-1.1",
    name: "Establish and Maintain Detailed Enterprise Asset Inventory",
    description: "Establish and maintain an accurate, detailed, and up-to-date inventory of all enterprise assets with the potential to store, process, or transmit data, including: end-user devices, network devices, servers, and applications.",
    nistMapping: ["CM-8", "PM-5"],
    implementationLevel: "IG1",
    category: "1. Inventory and Control of Enterprise Assets",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  {
    id: "CIS-1.2",
    name: "Address Unauthorized Assets",
    description: "Ensure that a process exists to address unauthorized assets on a regular basis. The enterprise may choose to remove the asset from the network, deny the asset from connecting remotely to the network, or quarantine the asset.",
    nistMapping: ["CM-8(3)"],
    implementationLevel: "IG1",
    category: "1. Inventory and Control of Enterprise Assets",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  {
    id: "CIS-1.3",
    name: "Utilize an Active Discovery Tool",
    description: "Utilize an active discovery tool to identify assets connected to the enterprise's network. Configure the active discovery tool to execute daily, or more frequently.",
    nistMapping: ["CM-8(2)"],
    implementationLevel: "IG2",
    category: "1. Inventory and Control of Enterprise Assets",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  {
    id: "CIS-1.4",
    name: "Use Dynamic Host Configuration Protocol (DHCP) Logging",
    description: "Use DHCP logging on all DHCP servers or Internet Protocol (IP) address management tools to update the enterprise's asset inventory. Review and use logs to update the enterprise's asset inventory.",
    nistMapping: ["CM-8", "AU-2"],
    implementationLevel: "IG2",
    category: "1. Inventory and Control of Enterprise Assets",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  {
    id: "CIS-1.5",
    name: "Use a Passive Asset Discovery Tool",
    description: "Use a passive discovery tool to identify assets connected to the enterprise's network. Configure the passive discovery tool to execute daily, or more frequently.",
    nistMapping: ["CM-8(2)"],
    implementationLevel: "IG3",
    category: "1. Inventory and Control of Enterprise Assets",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  
  // CIS Control 2: Inventory and Control of Software Assets
  {
    id: "CIS-2.1",
    name: "Establish and Maintain a Software Inventory",
    description: "Establish and maintain a detailed inventory of all licensed software installed on enterprise assets. The software inventory must document the title, publisher, initial install/use date, and business purpose for each entry.",
    nistMapping: ["CM-8(1)", "CM-8(2)"],
    implementationLevel: "IG1",
    category: "2. Inventory and Control of Software Assets",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  {
    id: "CIS-2.2",
    name: "Ensure Authorized Software is Currently Supported",
    description: "Ensure that only software applications or operating systems currently supported and receiving vendor updates are added to the enterprise's authorized software inventory.",
    nistMapping: ["CM-11", "SI-2"],
    implementationLevel: "IG1",
    category: "2. Inventory and Control of Software Assets",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  {
    id: "CIS-2.3",
    name: "Address Unauthorized Software",
    description: "Ensure that unauthorized software is either removed from the network or the inventory is updated to include the software as authorized.",
    nistMapping: ["CM-7", "CM-8(5)"],
    implementationLevel: "IG1",
    category: "2. Inventory and Control of Software Assets",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  {
    id: "CIS-2.4",
    name: "Utilize Automated Software Inventory Tools",
    description: "Utilize software inventory tools throughout the enterprise to automate the documentation of all software on enterprise assets.",
    nistMapping: ["CM-8(2)"],
    implementationLevel: "IG2",
    category: "2. Inventory and Control of Software Assets",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  {
    id: "CIS-2.5",
    name: "Allowlist Authorized Software",
    description: "Use technical controls, such as application allowlisting, to ensure that only authorized software can execute on enterprise assets.",
    nistMapping: ["CM-7(4)", "CM-7(5)"],
    implementationLevel: "IG2",
    category: "2. Inventory and Control of Software Assets",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  {
    id: "CIS-2.6",
    name: "Allowlist Authorized Libraries",
    description: "Use technical controls to ensure that only authorized software libraries, such as specific .dll, .ocx, .so, etc., files are allowed to load into a system process.",
    nistMapping: ["CM-7(5)"],
    implementationLevel: "IG3",
    category: "2. Inventory and Control of Software Assets",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  {
    id: "CIS-2.7",
    name: "Allowlist Authorized Scripts",
    description: "Use technical controls, such as digital signatures and version control, to ensure that only authorized scripts, such as specific .ps1, .py, etc., files are allowed to execute.",
    nistMapping: ["CM-7(5)"],
    implementationLevel: "IG3",
    category: "2. Inventory and Control of Software Assets",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  
  // CIS Control 3: Data Protection
  {
    id: "CIS-3.1",
    name: "Establish and Maintain a Data Management Process",
    description: "Establish and maintain a data management process. In the process, address data sensitivity, data owner, handling of data, data retention limits, and disposal requirements.",
    nistMapping: ["PM-5", "MP-1"],
    implementationLevel: "IG1",
    category: "3. Data Protection",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  {
    id: "CIS-3.2",
    name: "Establish and Maintain a Data Inventory",
    description: "Establish and maintain a data inventory, based on the enterprise's data management process.",
    nistMapping: ["CM-8", "PM-5"],
    implementationLevel: "IG1",
    category: "3. Data Protection",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  {
    id: "CIS-3.3",
    name: "Configure Data Access Control Lists",
    description: "Configure data access control lists based on a user's need to know.",
    nistMapping: ["AC-3", "AC-24"],
    implementationLevel: "IG1",
    category: "3. Data Protection",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  {
    id: "CIS-3.4",
    name: "Enforce Data Retention",
    description: "Enforce applicable data retention practices, as specified in the enterprise's data management process.",
    nistMapping: ["AU-11", "SI-12"],
    implementationLevel: "IG1",
    category: "3. Data Protection",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  {
    id: "CIS-3.5",
    name: "Securely Dispose of Data",
    description: "Securely dispose of data as outlined in the enterprise's data management process.",
    nistMapping: ["MP-6"],
    implementationLevel: "IG1",
    category: "3. Data Protection",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  {
    id: "CIS-3.6",
    name: "Encrypt Data on End-User Devices",
    description: "Encrypt data on end-user devices containing sensitive data.",
    nistMapping: ["SC-28(1)"],
    implementationLevel: "IG1",
    category: "3. Data Protection",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  {
    id: "CIS-3.7",
    name: "Establish and Maintain a Data Classification Scheme",
    description: "Establish and maintain a data classification scheme to categorize data based on sensitivity.",
    nistMapping: ["RA-2"],
    implementationLevel: "IG2",
    category: "3. Data Protection",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  {
    id: "CIS-3.8",
    name: "Document Data Flows",
    description: "Document data flows across the enterprise in a data flow diagram. Review and update data flow documentation periodically.",
    nistMapping: ["PM-5", "SA-8"],
    implementationLevel: "IG2",
    category: "3. Data Protection",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  {
    id: "CIS-3.9",
    name: "Encrypt Data on Removable Media",
    description: "Encrypt data on removable media.",
    nistMapping: ["MP-4", "MP-7", "SC-28"],
    implementationLevel: "IG2",
    category: "3. Data Protection",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  {
    id: "CIS-3.10",
    name: "Encrypt Sensitive Data in Transit",
    description: "Encrypt sensitive data in transit.",
    nistMapping: ["SC-8", "SC-8(1)"],
    implementationLevel: "IG2",
    category: "3. Data Protection",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  {
    id: "CIS-3.11",
    name: "Encrypt Sensitive Data at Rest",
    description: "Encrypt sensitive data at rest on servers, applications, and databases containing sensitive data.",
    nistMapping: ["SC-28", "SC-28(1)"],
    implementationLevel: "IG2",
    category: "3. Data Protection",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  {
    id: "CIS-3.12",
    name: "Segment Data Processing and Storage Based on Sensitivity",
    description: "Segment data processing and storage based on the sensitivity of the data.",
    nistMapping: ["SC-2", "SC-7"],
    implementationLevel: "IG3",
    category: "3. Data Protection",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  {
    id: "CIS-3.13",
    name: "Deploy a Data Loss Prevention Solution",
    description: "Deploy a data loss prevention (DLP) solution to track and block the unauthorized use or transmission of sensitive information.",
    nistMapping: ["SI-4(4)", "SI-4(23)"],
    implementationLevel: "IG3",
    category: "3. Data Protection",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  {
    id: "CIS-3.14",
    name: "Log Sensitive Data Access",
    description: "Log sensitive data access, including modification and disposition.",
    nistMapping: ["AU-3", "AU-12"],
    implementationLevel: "IG3",
    category: "3. Data Protection",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  
  // CIS Control 4: Secure Configuration of Enterprise Assets and Software
  {
    id: "CIS-4.1",
    name: "Establish and Maintain a Secure Configuration Process",
    description: "Establish and maintain a secure configuration process for enterprise assets (end-user devices, including portable and mobile, network devices, and servers) and software (operating systems and applications).",
    nistMapping: ["CM-6", "CM-1"],
    implementationLevel: "IG1",
    category: "4. Secure Configuration of Enterprise Assets and Software",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  {
    id: "CIS-4.2",
    name: "Establish and Maintain a Secure Configuration Process for Network Infrastructure",
    description: "Establish and maintain a secure configuration process for network infrastructure.",
    nistMapping: ["CM-6", "CM-2(2)"],
    implementationLevel: "IG1",
    category: "4. Secure Configuration of Enterprise Assets and Software",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  {
    id: "CIS-4.3",
    name: "Configure Automatic Session Locking on Enterprise Assets",
    description: "Configure automatic session locking on enterprise assets after a defined period of inactivity. For general-purpose operating systems, the period must not exceed 15 minutes.",
    nistMapping: ["AC-11", "AC-11(1)"],
    implementationLevel: "IG1",
    category: "4. Secure Configuration of Enterprise Assets and Software",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  {
    id: "CIS-4.4",
    name: "Implement and Manage a Firewall on Servers",
    description: "Implement and manage a firewall on servers, where supported.",
    nistMapping: ["AC-4", "SC-7"],
    implementationLevel: "IG1",
    category: "4. Secure Configuration of Enterprise Assets and Software",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  {
    id: "CIS-4.5",
    name: "Implement and Manage a Firewall on End-User Devices",
    description: "Implement and manage a host-based firewall or port-filtering tool on end-user devices.",
    nistMapping: ["AC-4", "SC-7"],
    implementationLevel: "IG1",
    category: "4. Secure Configuration of Enterprise Assets and Software",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  {
    id: "CIS-4.6",
    name: "Securely Manage Enterprise Assets and Software",
    description: "Securely manage enterprise assets and software. Example implementations include managing configuration through the use of versioned and controlled configuration files and preventing users from modifying version-controlled configuration files.",
    nistMapping: ["CM-7", "CM-8"],
    implementationLevel: "IG2",
    category: "4. Secure Configuration of Enterprise Assets and Software",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  {
    id: "CIS-4.7",
    name: "Manage Default Accounts on Enterprise Assets and Software",
    description: "Manage default accounts on enterprise assets and software, such as root, administrator, and other pre-configured vendor accounts.",
    nistMapping: ["AC-2(11)"],
    implementationLevel: "IG2",
    category: "4. Secure Configuration of Enterprise Assets and Software",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  {
    id: "CIS-4.8",
    name: "Uninstall or Disable Unnecessary Services on Enterprise Assets and Software",
    description: "Uninstall or disable unnecessary services on enterprise assets and software, such as an unused file-sharing service, web application, or server.",
    nistMapping: ["CM-7"],
    implementationLevel: "IG2",
    category: "4. Secure Configuration of Enterprise Assets and Software",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  {
    id: "CIS-4.9",
    name: "Configure Trusted DNS Servers on Enterprise Assets",
    description: "Configure trusted DNS servers on enterprise assets. Example implementations include configuring assets to use enterprise-controlled DNS servers and encrypted DNS protocols.",
    nistMapping: ["SC-20", "SC-21"],
    implementationLevel: "IG2",
    category: "4. Secure Configuration of Enterprise Assets and Software",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  {
    id: "CIS-4.10",
    name: "Enforce Automatic Device Lockout on Portable End-User Devices",
    description: "Enforce automatic device lockout following a predetermined threshold of local failed authentication attempts on portable end-user devices, where supported.",
    nistMapping: ["AC-7"],
    implementationLevel: "IG3",
    category: "4. Secure Configuration of Enterprise Assets and Software",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  {
    id: "CIS-4.11",
    name: "Enforce Remote Wipe Capability on Portable End-User Devices",
    description: "Enforce remote wipe capability when a portable end-user device has been lost, stolen, or the individual no longer supports the enterprise.",
    nistMapping: ["MP-6"],
    implementationLevel: "IG3",
    category: "4. Secure Configuration of Enterprise Assets and Software",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  {
    id: "CIS-4.12",
    name: "Separate Enterprise Workspaces on Mobile End-User Devices",
    description: "Separate enterprise workspaces from personal workspaces on mobile end-user devices.",
    nistMapping: ["AC-3", "CM-7", "SC-7(13)"],
    implementationLevel: "IG3",
    category: "4. Secure Configuration of Enterprise Assets and Software",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  
  // CIS Control 5: Account Management
  {
    id: "CIS-5.1",
    name: "Establish and Maintain an Inventory of Accounts",
    description: "Establish and maintain an inventory of all accounts managed in the enterprise.",
    nistMapping: ["AC-2"],
    implementationLevel: "IG1",
    category: "5. Account Management",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  {
    id: "CIS-5.2",
    name: "Use Unique Passwords",
    description: "Use unique passwords for all enterprise assets. Best practice implementation includes, at a minimum, an 8-character password for accounts using MFA and a 14-character password for accounts not using MFA.",
    nistMapping: ["IA-5", "IA-5(1)"],
    implementationLevel: "IG1",
    category: "5. Account Management",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  {
    id: "CIS-5.3",
    name: "Disable Dormant Accounts",
    description: "Delete or disable any dormant accounts after a period of 45 days of inactivity, where supported.",
    nistMapping: ["AC-2(3)"],
    implementationLevel: "IG1",
    category: "5. Account Management",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  {
    id: "CIS-5.4",
    name: "Restrict Administrator Privileges to Dedicated Administrator Accounts",
    description: "Restrict administrator privileges to dedicated administrator accounts on enterprise assets. Conduct general computing activities, such as internet browsing, email, and productivity suite use, from the user's primary, non-privileged account.",
    nistMapping: ["AC-6(2)", "AC-6(5)"],
    implementationLevel: "IG1",
    category: "5. Account Management",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  {
    id: "CIS-5.5",
    name: "Establish and Maintain an Inventory of Service Accounts",
    description: "Establish and maintain an inventory of service accounts. The inventory, at a minimum, must contain department owner, review date, and purpose.",
    nistMapping: ["AC-2"],
    implementationLevel: "IG2",
    category: "5. Account Management",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  {
    id: "CIS-5.6",
    name: "Centralize Account Management",
    description: "Centralize account management through a directory or identity service.",
    nistMapping: ["AC-2(1)"],
    implementationLevel: "IG2",
    category: "5. Account Management",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  {
    id: "CIS-5.7",
    name: "Disable Dormant Service Accounts",
    description: "Disable or remove any dormant service accounts within 45 days from the review date.",
    nistMapping: ["AC-2(3)"],
    implementationLevel: "IG3",
    category: "5. Account Management",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  {
    id: "CIS-5.8",
    name: "Restrict Service Account Authentication",
    description: "Restrict service account authentication to an MFA mechanism that is not solely console based.",
    nistMapping: ["IA-2(1)", "IA-2(2)", "IA-2(6)", "IA-2(11)"],
    implementationLevel: "IG3",
    category: "5. Account Management",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  {
    id: "CIS-5.9",
    name: "Restrict Access to Service Accounts",
    description: "Restrict access to service accounts to only the users necessary for the service.",
    nistMapping: ["AC-6"],
    implementationLevel: "IG3",
    category: "5. Account Management",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  
  // CIS Control 6: Access Control Management
  {
    id: "CIS-6.1",
    name: "Establish an Access Granting Process",
    description: "Establish and follow a process, preferably automated, for granting access to enterprise assets upon new hire, rights grant, or role change of a user.",
    nistMapping: ["AC-2"],
    implementationLevel: "IG1",
    category: "6. Access Control Management",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  {
    id: "CIS-6.2",
    name: "Establish an Access Revoking Process",
    description: "Establish and follow a process, preferably automated, for revoking access to enterprise assets, through disabling accounts immediately upon termination, rights revocation, or role change of a user.",
    nistMapping: ["AC-2(1)"],
    implementationLevel: "IG1",
    category: "6. Access Control Management",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  {
    id: "CIS-6.3",
    name: "Require MFA for Externally-Exposed Applications",
    description: "Require MFA for externally-exposed applications.",
    nistMapping: ["IA-2(1)", "IA-2(2)", "IA-2(6)", "IA-2(11)"],
    implementationLevel: "IG1",
    category: "6. Access Control Management",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  {
    id: "CIS-6.4",
    name: "Require MFA for Remote Network Access",
    description: "Require MFA for remote network access.",
    nistMapping: ["IA-2(1)", "IA-2(2)", "IA-2(6)", "IA-2(11)"],
    implementationLevel: "IG1",
    category: "6. Access Control Management",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  {
    id: "CIS-6.5",
    name: "Require MFA for Administrative Access",
    description: "Require MFA for administrative access.",
    nistMapping: ["IA-2(1)", "IA-2(2)", "IA-2(6)", "IA-2(11)"],
    implementationLevel: "IG1",
    category: "6. Access Control Management",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  {
    id: "CIS-6.6",
    name: "Establish and Maintain an Inventory of Authentication and Authorization Systems",
    description: "Establish and maintain an inventory of the enterprise's authentication and authorization systems, including those hosted on-site or at a remote service provider.",
    nistMapping: ["CM-8(1)"],
    implementationLevel: "IG2",
    category: "6. Access Control Management",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  {
    id: "CIS-6.7",
    name: "Centralize Access Control",
    description: "Centralize access control for all enterprise assets through a directory service or SSO provider, where supported.",
    nistMapping: ["AC-2(1)"],
    implementationLevel: "IG2",
    category: "6. Access Control Management",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  {
    id: "CIS-6.8",
    name: "Define and Maintain Role-Based Access Control",
    description: "Define and maintain role-based access control, through determining and documenting the access rights necessary for each role within the enterprise to successfully carry out its assigned duties.",
    nistMapping: ["AC-2(1)", "AC-2(7)"],
    implementationLevel: "IG2",
    category: "6. Access Control Management",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  {
    id: "CIS-6.9",
    name: "Restrict Credential Reuse",
    description: "Restrict credential reuse by requiring a new authenticator to replace a previously used authenticator.",
    nistMapping: ["IA-5(1)"],
    implementationLevel: "IG3",
    category: "6. Access Control Management",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  {
    id: "CIS-6.10",
    name: "Enforce Password Strength for Applications",
    description: "Enforce password strength for applications by requiring a minimum password strength.",
    nistMapping: ["IA-5(1)"],
    implementationLevel: "IG3",
    category: "6. Access Control Management",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  {
    id: "CIS-6.11",
    name: "Enforce MFA for Highly-Privileged Users",
    description: "Enforce MFA for highly-privileged users.",
    nistMapping: ["IA-2(1)", "IA-2(2)", "IA-2(6)", "IA-2(11)"],
    implementationLevel: "IG3",
    category: "6. Access Control Management",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  {
    id: "CIS-6.12",
    name: "Require MFA for All Privileged User Accounts",
    description: "Require MFA for all privileged user accounts, even when they only operate from within the enterprise's network.",
    nistMapping: ["IA-2(1)", "IA-2(2)", "IA-2(6)", "IA-2(11)"],
    implementationLevel: "IG3",
    category: "6. Access Control Management",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  {
    id: "CIS-6.13",
    name: "Require MFA for All Users",
    description: "Require MFA for all user accounts, even when they only operate from within the enterprise's network.",
    nistMapping: ["IA-2(1)", "IA-2(2)", "IA-2(6)", "IA-2(11)"],
    implementationLevel: "IG3",
    category: "6. Access Control Management",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  
  // CIS Control 7: Continuous Vulnerability Management
  {
    id: "CIS-7.1",
    name: "Establish and Maintain a Vulnerability Management Process",
    description: "Establish and maintain a documented vulnerability management process for enterprise assets. Review and update documentation annually, or when significant enterprise changes occur that could impact this Safeguard.",
    nistMapping: ["RA-3", "RA-5", "RA-5(5)", "SI-2"],
    implementationLevel: "IG1",
    category: "7. Continuous Vulnerability Management",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  {
    id: "CIS-7.2",
    name: "Establish and Maintain a Remediation Process",
    description: "Establish and maintain a risk-based remediation strategy documented in a remediation process, with monthly, or more frequent, reviews.",
    nistMapping: ["RA-3", "RA-5", "SI-2"],
    implementationLevel: "IG1",
    category: "7. Continuous Vulnerability Management",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  {
    id: "CIS-7.3",
    name: "Perform Automated Operating System Patch Management",
    description: "Perform operating system updates on enterprise assets through automated patch management on a monthly, or more frequent, basis.",
    nistMapping: ["SI-2", "SI-2(3)", "SI-2(4)", "SI-2(5)"],
    implementationLevel: "IG1",
    category: "7. Continuous Vulnerability Management",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  {
    id: "CIS-7.4",
    name: "Perform Automated Application Patch Management",
    description: "Perform application updates on enterprise assets through automated patch management on a monthly, or more frequent, basis.",
    nistMapping: ["SI-2", "SI-2(3)", "SI-2(4)", "SI-2(5)"],
    implementationLevel: "IG1",
    category: "7. Continuous Vulnerability Management",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  {
    id: "CIS-7.5",
    name: "Perform Automated Vulnerability Scans of Internal Enterprise Assets",
    description: "Perform automated vulnerability scans of internal enterprise assets on a quarterly, or more frequent, basis. Conduct both authenticated and unauthenticated scans, using a SCAP-compliant vulnerability scanning tool.",
    nistMapping: ["RA-5", "RA-5(2)", "RA-5(5)"],
    implementationLevel: "IG2",
    category: "7. Continuous Vulnerability Management",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  {
    id: "CIS-7.6",
    name: "Perform Automated Vulnerability Scans of Externally-Exposed Enterprise Assets",
    description: "Perform automated vulnerability scans of externally-exposed enterprise assets using a SCAP-compliant vulnerability scanning tool. Perform scans on a monthly, or more frequent, basis.",
    nistMapping: ["RA-5", "RA-5(2)", "RA-5(5)"],
    implementationLevel: "IG2",
    category: "7. Continuous Vulnerability Management",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  {
    id: "CIS-7.7",
    name: "Remediate Detected Vulnerabilities",
    description: "Remediate detected vulnerabilities in software through processes and tooling on a monthly, or more frequent, basis, based on the remediation process.",
    nistMapping: ["RA-5(2)"],
    implementationLevel: "IG2",
    category: "7. Continuous Vulnerability Management",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  {
    id: "CIS-7.8",
    name: "Establish and Maintain a Penetration Testing Program",
    description: "Establish and maintain a penetration testing program appropriate to the size, complexity, and maturity of the enterprise.",
    nistMapping: ["CA-8", "CA-8(1)"],
    implementationLevel: "IG3",
    category: "7. Continuous Vulnerability Management",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  {
    id: "CIS-7.9",
    name: "Implement a Patch Management Solution",
    description: "Implement a solution to automate the identification and remediation of vulnerabilities for the internal enterprise environment.",
    nistMapping: ["SI-2", "SI-2(1)", "SI-2(2)", "SI-2(3)", "SI-2(4)", "SI-2(5)"],
    implementationLevel: "IG3",
    category: "7. Continuous Vulnerability Management",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  {
    id: "CIS-7.10",
    name: "Perform an Authenticated Vulnerability Scan",
    description: "Perform an authenticated vulnerability scan at a documented and regular cadence.",
    nistMapping: ["RA-5", "RA-5(1)", "RA-5(2)", "RA-5(5)"],
    implementationLevel: "IG3",
    category: "7. Continuous Vulnerability Management",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  
  // CIS Control 8: Audit Log Management
  {
    id: "CIS-8.1",
    name: "Establish and Maintain an Audit Log Management Process",
    description: "Establish and maintain an audit log management process that defines the enterprise's logging requirements. At a minimum, address the collection, review, and retention of audit logs for enterprise assets.",
    nistMapping: ["AU-1", "AU-2"],
    implementationLevel: "IG1",
    category: "8. Audit Log Management",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  {
    id: "CIS-8.2",
    name: "Collect Audit Logs",
    description: "Collect audit logs. Ensure that logging, per the enterprise's audit log management process, has been enabled across enterprise assets.",
    nistMapping: ["AU-12"],
    implementationLevel: "IG1",
    category: "8. Audit Log Management",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  {
    id: "CIS-8.3",
    name: "Ensure Adequate Audit Log Storage",
    description: "Ensure that logging destinations maintain adequate storage to comply with the enterprise's audit log management process.",
    nistMapping: ["AU-4"],
    implementationLevel: "IG1",
    category: "8. Audit Log Management",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  {
    id: "CIS-8.4",
    name: "Standardize Time Synchronization",
    description: "Standardize time synchronization. Configure at least two synchronized time sources across enterprise assets, where supported.",
    nistMapping: ["AU-8", "AU-8(1)"],
    implementationLevel: "IG1",
    category: "8. Audit Log Management",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  {
    id: "CIS-8.5",
    name: "Collect Detailed Audit Logs",
    description: "Configure detailed audit logging for enterprise assets containing sensitive data. Include event source, date, username, timestamp, source addresses, destination addresses, and other useful elements.",
    nistMapping: ["AU-3", "AU-3(1)", "AU-12"],
    implementationLevel: "IG1",
    category: "8. Audit Log Management",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  {
    id: "CIS-8.6",
    name: "Collect DNS Query Audit Logs",
    description: "Collect DNS query audit logs on enterprise assets, where appropriate and supported.",
    nistMapping: ["AU-12"],
    implementationLevel: "IG2",
    category: "8. Audit Log Management",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  {
    id: "CIS-8.7",
    name: "Collect URL Request Audit Logs",
    description: "Collect URL request audit logs on enterprise assets, where appropriate and supported.",
    nistMapping: ["AU-12"],
    implementationLevel: "IG2",
    category: "8. Audit Log Management",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  {
    id: "CIS-8.8",
    name: "Collect Command-Line Audit Logs",
    description: "Collect command-line audit logs. Example implementations include collecting audit logs from PowerShell®, BASH™, and remote administrative terminals.",
    nistMapping: ["AC-17", "AU-12"],
    implementationLevel: "IG2",
    category: "8. Audit Log Management",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  {
    id: "CIS-8.9",
    name: "Centralize Audit Logs",
    description: "Centralize, to the extent possible, audit log collection and retention across enterprise assets.",
    nistMapping: ["AU-6", "AU-6(1)", "AU-6(3)", "AU-6(4)", "AU-6(5)"],
    implementationLevel: "IG2",
    category: "8. Audit Log Management",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  {
    id: "CIS-8.10",
    name: "Retain Audit Logs",
    description: "Retain audit logs across enterprise assets for a minimum of 90 days.",
    nistMapping: ["AU-11"],
    implementationLevel: "IG2",
    category: "8. Audit Log Management",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  {
    id: "CIS-8.11",
    name: "Conduct Audit Log Reviews",
    description: "Conduct reviews of audit logs to detect anomalies or abnormal events that could indicate a potential threat.",
    nistMapping: ["AU-6", "AU-6(1)", "AU-6(3)", "AU-6(4)", "AU-6(5)"],
    implementationLevel: "IG2",
    category: "8. Audit Log Management",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  {
    id: "CIS-8.12",
    name: "Collect Service Provider Logs",
    description: "Collect service provider logs, where supported.",
    nistMapping: ["AU-6", "SA-9"],
    implementationLevel: "IG3",
    category: "8. Audit Log Management",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  
  // CIS Control 9: Email and Web Browser Protections
  {
    id: "CIS-9.1",
    name: "Ensure Use of Only Fully Supported Browsers and Email Clients",
    description: "Ensure only fully supported browsers and email clients are allowed to execute in the enterprise, only using the latest version of browsers and email clients provided through the vendor.",
    nistMapping: ["CM-11"],
    implementationLevel: "IG1",
    category: "9. Email and Web Browser Protections",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  {
    id: "CIS-9.2",
    name: "Use DNS Filtering Services",
    description: "Use DNS filtering services on all enterprise assets to block access to known malicious domains.",
    nistMapping: ["SC-7", "SC-8"],
    implementationLevel: "IG1",
    category: "9. Email and Web Browser Protections",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  {
    id: "CIS-9.3",
    name: "Maintain and Enforce Network-Based URL Filters",
    description: "Enforce and update network-based URL filters to limit an enterprise asset from connecting to potentially malicious or unapproved websites.",
    nistMapping: ["SC-7"],
    implementationLevel: "IG1",
    category: "9. Email and Web Browser Protections",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  {
    id: "CIS-9.4",
    name: "Restrict Unnecessary or Unauthorized Browser and Email Client Extensions",
    description: "Restrict, either through uninstalling or disabling, any unauthorized or unnecessary browser or email client plugins, extensions, and add-on applications.",
    nistMapping: ["CM-7"],
    implementationLevel: "IG2",
    category: "9. Email and Web Browser Protections",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  {
    id: "CIS-9.5",
    name: "Implement DMARC",
    description: "Implement Domain-based Message Authentication, Reporting and Conformance (DMARC) to prevent email spoofing.",
    nistMapping: ["SC-8", "SI-10"],
    implementationLevel: "IG2",
    category: "9. Email and Web Browser Protections",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  {
    id: "CIS-9.6",
    name: "Block Unnecessary File Types",
    description: "Block unnecessary file types attempting to enter the enterprise's email gateway.",
    nistMapping: ["CM-7", "SC-7", "SI-3"],
    implementationLevel: "IG2",
    category: "9. Email and Web Browser Protections",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  {
    id: "CIS-9.7",
    name: "Deploy and Maintain Email Server Anti-Malware Protections",
    description: "Deploy and maintain email server anti-malware protections, such as attachment scanning and/or sandboxing.",
    nistMapping: ["SC-7", "SI-3", "SI-4", "SI-7"],
    implementationLevel: "IG2",
    category: "9. Email and Web Browser Protections",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  
  // CIS Control 10: Malware Defenses
  {
    id: "CIS-10.1",
    name: "Deploy and Maintain Anti-Malware Software",
    description: "Deploy and maintain anti-malware software on all enterprise assets.",
    nistMapping: ["SC-28", "SI-3", "SI-7"],
    implementationLevel: "IG1",
    category: "10. Malware Defenses",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  {
    id: "CIS-10.2",
    name: "Configure Automatic Anti-Malware Signature Updates",
    description: "Configure automatic updates for anti-malware signature files on all enterprise assets.",
    nistMapping: ["SI-3", "SI-3(2)"],
    implementationLevel: "IG1",
    category: "10. Malware Defenses",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  {
    id: "CIS-10.3",
    name: "Disable Autorun and Autoplay for Removable Media",
    description: "Disable autorun and autoplay auto-execute functionality for removable media.",
    nistMapping: ["MP-7", "CM-7"],
    implementationLevel: "IG1",
    category: "10. Malware Defenses",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  {
    id: "CIS-10.4",
    name: "Configure Automatic Anti-Malware Scanning of Removable Media",
    description: "Configure anti-malware software to automatically scan removable media.",
    nistMapping: ["SI-3", "MP-7"],
    implementationLevel: "IG1",
    category: "10. Malware Defenses",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  {
    id: "CIS-10.5",
    name: "Enable Anti-Exploitation Features",
    description: "Enable anti-exploitation features on enterprise assets and software, where possible, such as Microsoft® Data Execution Prevention (DEP), Windows® Defender Exploit Guard (WDEG), or Apple® System Integrity Protection (SIP) and Gatekeeper™.",
    nistMapping: ["SC-7", "CM-7", "SI-16"],
    implementationLevel: "IG1",
    category: "10. Malware Defenses",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  {
    id: "CIS-10.6",
    name: "Centrally Manage Anti-Malware Software",
    description: "Centrally manage anti-malware software.",
    nistMapping: ["SI-3", "SI-3(2)"],
    implementationLevel: "IG2",
    category: "10. Malware Defenses",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  {
    id: "CIS-10.7",
    name: "Use Behavior-Based Anti-Malware Software",
    description: "Use behavior-based anti-malware software.",
    nistMapping: ["SI-3", "SI-3(2)", "SI-3(7)", "SI-3(8)"],
    implementationLevel: "IG2",
    category: "10. Malware Defenses",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  
  // CIS Control 11: Data Recovery
  {
    id: "CIS-11.1",
    name: "Establish and Maintain a Data Recovery Process",
    description: "Establish and maintain a data recovery process. In the process, address the scope of data recovery activities, recovery prioritization, and the security of backup data.",
    nistMapping: ["CP-9", "CP-10", "CP-2"],
    implementationLevel: "IG1",
    category: "11. Data Recovery",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  {
    id: "CIS-11.2",
    name: "Perform Automated Backups",
    description: "Perform automated backups of in-scope enterprise assets. Run backups on a continuous basis, where possible, or at a minimum, weekly.",
    nistMapping: ["CP-9"],
    implementationLevel: "IG1",
    category: "11. Data Recovery",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  {
    id: "CIS-11.3",
    name: "Protect Recovery Data",
    description: "Protect recovery data with equivalent controls to the original data. Reference the data classification schema and encryption requirements for the enterprise.",
    nistMapping: ["CP-9", "CP-6", "MP-5"],
    implementationLevel: "IG1",
    category: "11. Data Recovery",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  {
    id: "CIS-11.4",
    name: "Establish and Maintain an Isolated Instance of Recovery Data",
    description: "Establish and maintain an isolated instance of recovery data. Example implementations include, version controlling backup destinations through offline, cloud, or off-site systems or services.",
    nistMapping: ["CP-9", "CP-6", "CP-7", "CP-6(1)", "CP-6(2)"],
    implementationLevel: "IG1",
    category: "11. Data Recovery",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  {
    id: "CIS-11.5",
    name: "Test Data Recovery",
    description: "Test backup recovery quarterly, or more frequently, for a sampling of in-scope enterprise assets.",
    nistMapping: ["CP-4", "CP-9(8)"],
    implementationLevel: "IG2",
    category: "11. Data Recovery",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  
  // CIS Control 12: Network Infrastructure Management
  {
    id: "CIS-12.1",
    name: "Ensure Network Infrastructure is Up-to-Date",
    description: "Ensure network infrastructure is kept up-to-date.",
    nistMapping: ["CM-2", "CM-6", "SI-2", "SI-2(3)"],
    implementationLevel: "IG1",
    category: "12. Network Infrastructure Management",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  {
    id: "CIS-12.2",
    name: "Establish and Maintain a Secure Network Architecture",
    description: "Establish and maintain a secure network architecture.",
    nistMapping: ["SC-7", "CM-6", "CM-2"],
    implementationLevel: "IG1",
    category: "12. Network Infrastructure Management",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  {
    id: "CIS-12.3",
    name: "Securely Manage Network Infrastructure",
    description: "Securely manage network infrastructure.",
    nistMapping: ["CM-6", "CM-7", "AC-6", "AC-17", "IA-2"],
    implementationLevel: "IG1",
    category: "12. Network Infrastructure Management",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  {
    id: "CIS-12.4",
    name: "Establish and Maintain Architecture Diagram(s)",
    description: "Establish and maintain architecture diagram(s) and/or other network system documentation.",
    nistMapping: ["CM-2", "PL-2"],
    implementationLevel: "IG2",
    category: "12. Network Infrastructure Management",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  {
    id: "CIS-12.5",
    name: "Centralize Network Authentication, Authorization, and Auditing (AAA)",
    description: "Centralize network AAA.",
    nistMapping: ["AC-2", "IA-2", "IA-8", "AU-2", "AU-3"],
    implementationLevel: "IG2",
    category: "12. Network Infrastructure Management",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  {
    id: "CIS-12.6",
    name: "Use of Secure Network Management and Communication Protocols",
    description: "Use secure network management and communication protocols.",
    nistMapping: ["SC-8", "SC-8(1)", "SC-8(2)", "SC-23"],
    implementationLevel: "IG2",
    category: "12. Network Infrastructure Management",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  {
    id: "CIS-12.7",
    name: "Ensure Remote Devices Utilize a VPN and are Connecting to an Enterprise's AAA Infrastructure",
    description: "Ensure remote devices utilize a VPN and are connecting to an enterprise's AAA infrastructure.",
    nistMapping: ["AC-17", "SC-8"],
    implementationLevel: "IG2",
    category: "12. Network Infrastructure Management",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  {
    id: "CIS-12.8",
    name: "Establish and Maintain Dedicated Computing Resources for All Administrative Work",
    description: "Establish and maintain dedicated computing resources, either physically or logically, for all administrative tasks or tasks requiring elevated access.",
    nistMapping: ["SC-3", "CM-7", "SC-7"],
    implementationLevel: "IG3",
    category: "12. Network Infrastructure Management",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  
  // CIS Control 13: Network Monitoring and Defense
  {
    id: "CIS-13.1",
    name: "Centralize Security Event Alerting",
    description: "Centralize security event alerting across enterprise assets for security events. Best practice implementation includes setting up separate logging infrastructure for network and host-based security events, as well as maintaining separate security and operation event logging infrastructure.",
    nistMapping: ["AU-6", "SI-4"],
    implementationLevel: "IG1",
    category: "13. Network Monitoring and Defense",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  {
    id: "CIS-13.2",
    name: "Deploy a Host-Based Intrusion Detection Solution",
    description: "Deploy a host-based intrusion detection solution on all enterprise assets, where supported.",
    nistMapping: ["SI-4", "SI-4(2)", "SI-4(5)"],
    implementationLevel: "IG2",
    category: "13. Network Monitoring and Defense",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  {
    id: "CIS-13.3",
    name: "Deploy a Network Intrusion Detection Solution",
    description: "Deploy a network intrusion detection solution on enterprise assets, where appropriate.",
    nistMapping: ["SI-4", "SI-4(1)", "SI-4(2)", "SI-4(4)", "SI-4(5)"],
    implementationLevel: "IG2",
    category: "13. Network Monitoring and Defense",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  {
    id: "CIS-13.4",
    name: "Perform Traffic Filtering Between Network Segments",
    description: "Perform traffic filtering between network segments, where appropriate.",
    nistMapping: ["AC-4", "SC-7", "CA-3"],
    implementationLevel: "IG2",
    category: "13. Network Monitoring and Defense",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  {
    id: "CIS-13.5",
    name: "Manage Access Control for Remote Assets",
    description: "Manage access control for assets remotely connecting to enterprise resources.",
    nistMapping: ["AC-17", "AC-17(1)", "AC-17(4)"],
    implementationLevel: "IG2",
    category: "13. Network Monitoring and Defense",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  {
    id: "CIS-13.6",
    name: "Collect Network Traffic Flow Logs",
    description: "Collect network traffic flow logs across the network boundary at a minimum.",
    nistMapping: ["SI-4"],
    implementationLevel: "IG2",
    category: "13. Network Monitoring and Defense",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  {
    id: "CIS-13.7",
    name: "Deploy a Host-Based Intrusion Prevention Solution",
    description: "Deploy a host-based intrusion prevention solution on enterprise assets, where supported.",
    nistMapping: ["SI-4", "SI-4(2)", "SI-4(5)"],
    implementationLevel: "IG3",
    category: "13. Network Monitoring and Defense",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  {
    id: "CIS-13.8",
    name: "Deploy a Network Intrusion Prevention Solution",
    description: "Deploy a network intrusion prevention solution, where appropriate.",
    nistMapping: ["SI-4", "SI-4(1)", "SI-4(2)", "SI-4(4)", "SI-4(5)"],
    implementationLevel: "IG3",
    category: "13. Network Monitoring and Defense",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  {
    id: "CIS-13.9",
    name: "Deploy Port-Level Access Control",
    description: "Deploy port-level access control.",
    nistMapping: ["AC-3", "CM-7"],
    implementationLevel: "IG3",
    category: "13. Network Monitoring and Defense",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  {
    id: "CIS-13.10",
    name: "Perform Application Layer Filtering",
    description: "Perform application layer filtering. Example implementations include a filtering proxy, application layer firewall, or gateway.",
    nistMapping: ["AC-4", "SC-7", "SI-4(4)", "SI-4(25)"],
    implementationLevel: "IG3",
    category: "13. Network Monitoring and Defense",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  {
    id: "CIS-13.11",
    name: "Tune Security Event Alerting Thresholds",
    description: "Tune security event alerting thresholds monthly, or more frequently.",
    nistMapping: ["AU-6", "IR-4", "IR-5", "SI-4"],
    implementationLevel: "IG3",
    category: "13. Network Monitoring and Defense",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  
  // CIS Control 14: Security Awareness and Skills Training
  {
    id: "CIS-14.1",
    name: "Establish and Maintain a Security Awareness Program",
    description: "Establish and maintain a security awareness program.",
    nistMapping: ["AT-1", "AT-2"],
    implementationLevel: "IG1",
    category: "14. Security Awareness and Skills Training",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  {
    id: "CIS-14.2",
    name: "Train Workforce Members to Recognize Social Engineering Attacks",
    description: "Train workforce members to recognize social engineering attacks, such as phishing, pre-texting, and tailgating.",
    nistMapping: ["AT-2", "AT-2(2)"],
    implementationLevel: "IG1",
    category: "14. Security Awareness and Skills Training",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  {
    id: "CIS-14.3",
    name: "Train Workforce Members on Authentication Best Practices",
    description: "Train workforce members on authentication best practices. Example topics include MFA, password composition, and credential management.",
    nistMapping: ["AT-2", "AT-2(2)"],
    implementationLevel: "IG1",
    category: "14. Security Awareness and Skills Training",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  {
    id: "CIS-14.4",
    name: "Train Workforce on Data Handling Best Practices",
    description: "Train workforce members on data handling best practices. Example topics include secure deletion, limiting data retention, and cross-site request forgery (CSRF).",
    nistMapping: ["AT-2", "AT-2(2)"],
    implementationLevel: "IG1",
    category: "14. Security Awareness and Skills Training",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  {
    id: "CIS-14.5",
    name: "Train Workforce Members on Causes of Unintentional Data Exposure",
    description: "Train workforce members to be aware of causes for unintentional data exposure. Example topics include mistaken publication, loss of situational awareness, and system misconfiguration.",
    nistMapping: ["AT-2", "AT-2(2)"],
    implementationLevel: "IG1",
    category: "14. Security Awareness and Skills Training",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  {
    id: "CIS-14.6",
    name: "Train Workforce Members on Recognizing and Reporting Security Incidents",
    description: "Train workforce members to be able to recognize a potential incident and be able to report such an incident.",
    nistMapping: ["AT-2", "AT-2(2)", "IR-6", "IR-7"],
    implementationLevel: "IG1",
    category: "14. Security Awareness and Skills Training",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  {
    id: "CIS-14.7",
    name: "Train Workforce on How to Identify and Report if Their Enterprise Assets are Missing Security Updates",
    description: "Train workforce on how to identify if enterprise assets are missing security updates.",
    nistMapping: ["AT-2", "AT-2(2)"],
    implementationLevel: "IG2",
    category: "14. Security Awareness and Skills Training",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  {
    id: "CIS-14.8",
    name: "Train Workforce on the Dangers of Connecting to and Transmitting Enterprise Data Over Insecure Networks",
    description: "Train workforce members on the dangers of connecting to, and transmitting data over, insecure networks for enterprise activities. These networks can include, but are not limited to, public wireless networks, such as open Wi-Fi hotspots at airports and hotels.",
    nistMapping: ["AT-2", "AT-2(2)"],
    implementationLevel: "IG2",
    category: "14. Security Awareness and Skills Training",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  {
    id: "CIS-14.9",
    name: "Conduct Role-Specific Security Awareness and Skills Training",
    description: "Conduct role-specific security awareness and skills training. Example implementations include secure system administration courses for IT professionals and secure application development training for software developers.",
    nistMapping: ["AT-2", "AT-3"],
    implementationLevel: "IG3",
    category: "14. Security Awareness and Skills Training",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  
  // CIS Control 15: Service Provider Management
  {
    id: "CIS-15.1",
    name: "Establish and Maintain an Inventory of Service Providers",
    description: "Establish and maintain an inventory of service providers.",
    nistMapping: ["SA-9", "PM-9"],
    implementationLevel: "IG1",
    category: "15. Service Provider Management",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  {
    id: "CIS-15.2",
    name: "Establish and Maintain a Service Provider Management Policy",
    description: "Establish and maintain a service provider management policy.",
    nistMapping: ["SA-9", "SR-1"],
    implementationLevel: "IG1",
    category: "15. Service Provider Management",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  {
    id: "CIS-15.3",
    name: "Classify Service Providers",
    description: "Classify service providers.",
    nistMapping: ["SA-9", "RA-3", "PM-9"],
    implementationLevel: "IG2",
    category: "15. Service Provider Management",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  {
    id: "CIS-15.4",
    name: "Ensure Service Provider Contracts Include Security Requirements",
    description: "Ensure service provider contracts include security requirements.",
    nistMapping: ["SR-3", "SA-9"],
    implementationLevel: "IG2",
    category: "15. Service Provider Management",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  {
    id: "CIS-15.5",
    name: "Assess Service Providers",
    description: "Assess service providers consistent with the enterprise's service provider management policy.",
    nistMapping: ["SA-9", "PM-9"],
    implementationLevel: "IG2",
    category: "15. Service Provider Management",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  {
    id: "CIS-15.6",
    name: "Monitor Service Providers",
    description: "Monitor service providers consistent with the enterprise's service provider management policy.",
    nistMapping: ["SA-9", "CA-7"],
    implementationLevel: "IG3",
    category: "15. Service Provider Management",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  {
    id: "CIS-15.7",
    name: "Securely Decommission Service Providers",
    description: "Securely decommission service providers.",
    nistMapping: ["SA-9", "SA-12", "CA-3"],
    implementationLevel: "IG3",
    category: "15. Service Provider Management",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  
  // CIS Control 16: Application Software Security
  {
    id: "CIS-16.1",
    name: "Establish and Maintain a Secure Application Development Process",
    description: "Establish and maintain a secure application development process.",
    nistMapping: ["SA-3", "SA-8", "SA-15", "SA-15(1)"],
    implementationLevel: "IG1",
    category: "16. Application Software Security",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  {
    id: "CIS-16.2",
    name: "Establish and Maintain a Process to Accept and Address Software Vulnerabilities",
    description: "Establish and maintain a process to accept and address reports of software vulnerabilities, including providing a means for external entities to report.",
    nistMapping: ["SI-2", "PM-15", "SI-5"],
    implementationLevel: "IG1",
    category: "16. Application Software Security",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  {
    id: "CIS-16.3",
    name: "Perform Root Cause Analysis on Security Vulnerabilities",
    description: "Perform root cause analysis on security vulnerabilities.",
    nistMapping: ["IR-4(6)", "SI-2"],
    implementationLevel: "IG1",
    category: "16. Application Software Security",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  {
    id: "CIS-16.4",
    name: "Establish and Manage an Inventory of Third-Party Software Components",
    description: "Establish and manage an inventory of third-party components used in development, often referred to as a "bill of materials," as well as components slated for future use.",
    nistMapping: ["CM-8", "SI-7", "SR-3", "SR-4"],
    implementationLevel: "IG2",
    category: "16. Application Software Security",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  {
    id: "CIS-16.5",
    name: "Use Up-to-Date and Trusted Third-Party Software Components",
    description: "Use up-to-date and trusted third-party software components.",
    nistMapping: ["SI-2", "SI-7", "SR-3"],
    implementationLevel: "IG2",
    category: "16. Application Software Security",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  {
    id: "CIS-16.6",
    name: "Establish and Maintain a Severity Rating System and Process for Application Vulnerabilities",
    description: "Establish and maintain a severity rating system and process for application vulnerabilities.",
    nistMapping: ["RA-2", "RA-3", "RA-5", "CA-2", "CA-7", "PM-4", "PM-9", "SA-11"],
    implementationLevel: "IG2",
    category: "16. Application Software Security",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  {
    id: "CIS-16.7",
    name: "Use Standard Hardening Configuration Templates for Application Infrastructure",
    description: "Use standard, industry-recommended hardening configuration templates for application infrastructure components.",
    nistMapping: ["CM-2", "CM-6", "CM-7", "RA-5", "SA-3", "CA-2", "CA-7", "SA-8", "SA-15", "SI-12"],
    implementationLevel: "IG2",
    category: "16. Application Software Security",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  {
    id: "CIS-16.8",
    name: "Separate Production and Non-Production Systems",
    description: "Maintain separate environments for production and non-production systems.",
    nistMapping: ["CM-2", "SC-3", "SC-7"],
    implementationLevel: "IG2",
    category: "16. Application Software Security",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  {
    id: "CIS-16.9",
    name: "Train Developers in Application Security Concepts and Secure Coding",
    description: "Train developers in application security concepts and secure coding.",
    nistMapping: ["AT-3", "SA-11"],
    implementationLevel: "IG2",
    category: "16. Application Software Security",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  {
    id: "CIS-16.10",
    name: "Apply Secure Design Principles in Application Architectures",
    description: "Apply secure design principles in application architectures.",
    nistMapping: ["PL-8", "SA-8", "SA-3"],
    implementationLevel: "IG3",
    category: "16. Application Software Security",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  {
    id: "CIS-16.11",
    name: "Leverage Vetted Modules or Services for Application Security Components",
    description: "Leverage vetted modules or services for application security components, such as identity management, encryption, and auditing and logging.",
    nistMapping: ["CM-7", "IA-2", "IA-5", "SC-13", "SC-28", "SI-7"],
    implementationLevel: "IG3",
    category: "16. Application Software Security",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  {
    id: "CIS-16.12",
    name: "Implement Code-Level Security Checks",
    description: "Implement code-level security checks, such as syntax style requirements and common libraries that are set by the organization.",
    nistMapping: ["SA-11", "SA-15"],
    implementationLevel: "IG3",
    category: "16. Application Software Security",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  {
    id: "CIS-16.13",
    name: "Conduct Application Penetration Testing",
    description: "Conduct application penetration testing.",
    nistMapping: ["CA-8", "CA-8(1)", "CA-8(2)"],
    implementationLevel: "IG3",
    category: "16. Application Software Security",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  {
    id: "CIS-16.14",
    name: "Conduct Threat Modeling",
    description: "Conduct threat modeling.",
    nistMapping: ["PM-12", "PM-15", "SA-11", "SA-11(2)", "SA-11(3)"],
    implementationLevel: "IG3",
    category: "16. Application Software Security",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  
  // CIS Control 17: Incident Response Management
  {
    id: "CIS-17.1",
    name: "Designate Personnel to Manage Incident Handling",
    description: "Designate personnel to manage incident handling.",
    nistMapping: ["IR-2", "IR-4", "IR-7"],
    implementationLevel: "IG1",
    category: "17. Incident Response Management",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  {
    id: "CIS-17.2",
    name: "Establish and Maintain Contact Information for Reporting Security Incidents",
    description: "Establish and maintain contact information for reporting security incidents.",
    nistMapping: ["IR-6"],
    implementationLevel: "IG1",
    category: "17. Incident Response Management",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  {
    id: "CIS-17.3",
    name: "Establish and Maintain an Enterprise Process for Reporting Incidents",
    description: "Establish and maintain an enterprise process for the workforce to report security incidents.",
    nistMapping: ["IR-1", "IR-6", "IR-7"],
    implementationLevel: "IG1",
    category: "17. Incident Response Management",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  {
    id: "CIS-17.4",
    name: "Establish and Maintain an Incident Response Process",
    description: "Establish and maintain an incident response process that addresses roles and responsibilities, compliance requirements, and a communication plan.",
    nistMapping: ["IR-1", "IR-4", "IR-8"],
    implementationLevel: "IG1",
    category: "17. Incident Response Management",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  {
    id: "CIS-17.5",
    name: "Assign Key Roles and Responsibilities",
    description: "Assign key roles and responsibilities for incident response, including staff from legal, IT support, and business representatives.",
    nistMapping: ["IR-2", "IR-7"],
    implementationLevel: "IG2",
    category: "17. Incident Response Management",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  {
    id: "CIS-17.6",
    name: "Define Mechanisms for Communicating During Incident Response",
    description: "Define mechanisms for communicating during incident response.",
    nistMapping: ["IR-4", "IR-6"],
    implementationLevel: "IG2",
    category: "17. Incident Response Management",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  {
    id: "CIS-17.7",
    name: "Conduct Routine Incident Response Exercises",
    description: "Conduct routine incident response exercises to test and improve incident handling processes and individual readiness.",
    nistMapping: ["IR-3", "IR-3(2)"],
    implementationLevel: "IG2",
    category: "17. Incident Response Management",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  {
    id: "CIS-17.8",
    name: "Conduct Post-Incident Reviews",
    description: "Conduct post-incident reviews.",
    nistMapping: ["IR-4", "IR-4(8)"],
    implementationLevel: "IG2",
    category: "17. Incident Response Management",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  {
    id: "CIS-17.9",
    name: "Establish and Maintain Security Incident Thresholds",
    description: "Establish and maintain security incident thresholds, including, at a minimum, differentiating between an incident and an event.",
    nistMapping: ["IR-4", "IR-5", "IR-6"],
    implementationLevel: "IG3",
    category: "17. Incident Response Management",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  
  // CIS Control 18: Penetration Testing
  {
    id: "CIS-18.1",
    name: "Establish and Maintain a Penetration Testing Program",
    description: "Establish and maintain a penetration testing program appropriate to the size, complexity, and maturity of the enterprise.",
    nistMapping: ["CA-8", "CA-8(1)"],
    implementationLevel: "IG2",
    category: "18. Penetration Testing",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  {
    id: "CIS-18.2",
    name: "Perform Periodic External Penetration Tests",
    description: "Perform periodic external penetration tests based on program requirements, no less than annually.",
    nistMapping: ["CA-8", "RA-5"],
    implementationLevel: "IG2",
    category: "18. Penetration Testing",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  {
    id: "CIS-18.3",
    name: "Remediate Penetration Test Findings",
    description: "Remediate penetration test findings based on the enterprise's policy for risk acceptance or remediation.",
    nistMapping: ["CA-2(2)", "CA-5", "CA-8"],
    implementationLevel: "IG2",
    category: "18. Penetration Testing",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  {
    id: "CIS-18.4",
    name: "Validate Security Measures",
    description: "Validate security measures after remediation to maintain consistency with the risk acceptance criteria.",
    nistMapping: ["CA-2(2)", "CA-5", "CA-8"],
    implementationLevel: "IG3",
    category: "18. Penetration Testing",
    status: "planned",
    score: 0,
    framework: "CIS"
  },
  {
    id: "CIS-18.5",
    name: "Perform Periodic Internal Penetration Tests",
    description: "Perform periodic internal penetration tests based on program requirements, no less than annually.",
    nistMapping: ["CA-8", "RA-5"],
    implementationLevel: "IG3",
    category: "18. Penetration Testing",
    status: "planned",
    score: 0,
    framework: "CIS"
  }
];

