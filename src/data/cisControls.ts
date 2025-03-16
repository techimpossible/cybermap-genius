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
    nistMapping: ["SI-2", "SI-2(1)", "SI
