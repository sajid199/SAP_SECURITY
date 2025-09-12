if (typeof module !== 'undefined') module.exports = questionsData;
 const questionsData = {
            ecc: {
                basic: [
                    [
                        {
                            "q": "✅ 1. What is SAP Security and why is it important?",
                            "a": "SAP Security is a set of rules and controls in the SAP system that protect sensitive business data and processes from unauthorized access. It ensures that only authorized users can access specific applications, data, and functions in SAP.\n👉 It is important because SAP contains critical data like financial information, HR details, and business operations. Without proper security, unauthorized people could misuse this data, leading to data leaks, fraud, or system problems.\n👉 In simple terms, SAP Security is like the lock on your house – only people with the correct key (authorization) can enter and do the right things."
                        },
                        {
                            "q": "✅ 2. Explain the difference between a role and a profile in SAP.",
                            "a": "A Role is a container or group of activities that a user needs to perform their job.\n\nA Profile is a technical object in SAP that contains the actual authorizations or permissions (like a detailed list of allowed activities).\n\n👉 In earlier SAP versions, we used to create profiles manually, but now we mostly create roles using transaction PFCG.\n👉 The role makes it easier for us to manage permissions because it groups many authorizations together.\n👉 For example, if a person is an HR manager, we create an HR Role that includes all the tasks they need.\n👉 SAP automatically generates the profile when we create a role.\n\nSimple Analogy:\nRole = Job description\nProfile = Detailed list of exact tasks allowed for that job"
                        },
                        {
                            "q": "✅ 3. What are authorization objects in SAP?",
                            "a": "An Authorization Object is like a rule that controls access to certain functions in SAP.\n👉 It consists of fields that represent specific activities, for example:\n\nActivity (Create, Display, Delete)\nCompany Code\nDocument Type\n\n👉 When a user tries to do something in SAP, the system checks if the user has the correct authorization object with the required values.\n👉 Example:\nAn authorization object may control the ability to create a sales order only for a specific company code.\n\n👉 In simple terms, think of an authorization object as a “permission slip” that says what a user is allowed to do in SAP."
                        },
                        {
                            "q": "✅ 4. What is the purpose of SU24 in SAP security?",
                            "a": "👉 SU24 helps us manage which authorization objects and values are required for a transaction in SAP.\n👉 Every time a transaction (like VA01 – Create Sales Order) is used, SAP needs to know what authorizations are required to run it.\n👉 SU24 stores this information so that when we generate roles in PFCG, the required authorization objects are automatically proposed.\n\n👉 It helps the security team by reducing manual work.\n👉 Instead of remembering which authorizations are needed, SU24 tells the system what to include when a role is created.\n\nSimple Analogy:\nSU24 is like a checklist of permissions required to perform each SAP task."
                        },
                        {
                            "q": "✅ 5. Explain the concept of authorization trace (ST01) and SU53.",
                            "a": "ST01 (System Trace):\nIt records every authorization check SAP performs during a user’s activity.\n👉 We activate ST01 when we want to see exactly which authorizations are checked when a user performs a transaction.\n\nSU53 (Last Authorization Check):\nIf a user gets an “Authorization error” message, they can run SU53.\n👉 It shows the last failed authorization check.\n👉 This helps us understand which specific authorization is missing.\n\nSimple Analogy:\nST01 = A full camera recording of what SAP checks during a process.\nSU53 = A snapshot that shows the last “permission denied” issue."
                        },
                        {
                            "q": "✅ 6. How do you perform role-based access control (RBAC) in SAP?",
                            "a": "👉 In SAP, RBAC means assigning roles to users based on their job function.\n👉 First, we analyze the job role – for example, a finance user needs access to financial transactions.\n👉 Then, we create an SAP Role in PFCG containing the required transactions and authorizations.\n👉 Finally, we assign that role to the user via SU01.\n\n👉 This way, each user only gets the authorizations needed for their job, reducing security risks.\n👉 We also regularly review and update roles to match business needs.\n\nSimple Analogy:\nGiving a person a key that only opens the doors they need, not all the doors in the building."
                        },
                        {
                            "q": "✅ 7. What are the key components of an authorization object?",
                            "a": "An authorization object has two main parts:\n\nObject Name – The identifier of the object, e.g., S_TCODE (authorization to execute a transaction).\nFields – The individual permission fields, for example:\nActivity (Create, Display, Delete)\nCompany Code\nDocument Type\n\n👉 A user must have authorizations that match the correct values in these fields to perform the action.\n👉 Example:\nFor creating a financial document in company code 1000, the authorization object will specify:\nObject: F_BKPF_BUK\nFields: Activity = Create, Company Code = 1000"
                        },
                        {
                            "q": "✅ 8. What is the purpose of transaction PFCG?",
                            "a": "👉 PFCG (Profile Generator) is the central SAP transaction used to create and manage Roles.\n👉 With PFCG, we can:\n\nCreate new roles\nAssign transactions, reports, or web services\nGenerate authorization profiles automatically\nAssign roles to users\n\n👉 PFCG makes the whole process easy and automatic compared to manually creating profiles.\n👉 After entering the required transactions and authorization data, PFCG helps generate the profile and assign it.\n\nSimple Analogy:\nPFCG is like a tool that builds a custom key for a user, based on what they are allowed to do."
                        },
                        {
                            "q": "✅ 9. How do you generate a role in SAP using PFCG?",
                            "a": "👉 Steps to generate a role in SAP:\n\n 1. Go to transaction PFCG.\n2. Enter a Role Name and click Create.\n3. Add a Role Description (like “Finance Role”).\n4. In the Menu Tab, add the required transactions (e.g., VA01 for Sales Order).\n5. In the Authorizations Tab, click Change Authorization Data.\n6. Modify the authorization objects as needed (or accept proposed values).\n7. Click Generate Profile – this creates the authorization profile in the background.\n8. Finally, in the User Tab, assign the role to the user.\n\n👉 This process ensures the user gets the correct authorizations and transactions."
                        },
                        {
                            "q": "✅ 10. What is the difference between single role and composite role?",
                            "a": "Single Role:\nA single role contains a set of transactions and authorizations that are needed for a specific job task.\n👉 Example: Role for HR Manager includes HR transactions only.\n\nComposite Role:\nA composite role is a group of multiple single roles bundled together.\n👉 Example: A composite role “Finance Manager” may include Single Role for General Ledger, Single Role for Cost Center Accounting, and Single Role for Vendor Management.\n\n👉 Composite roles help manage large numbers of roles easily.\n👉 Instead of assigning many single roles one by one, we assign a single composite role.\n\nSimple Analogy:\nSingle Role = One toolbox\nComposite Role = A box containing several toolboxes."
                        },
                        {
                            "q": "✅ 11. Explain the link between SU23, SU24, USOBT_C, and USOBX_C in SAP Security in a simple way.",
                            "a": "✅ Simple Explanation of the Link\n\n✅ SU24 – Maintain Authorization Defaults\nIn SU24, we define which authorization objects should be proposed for a transaction (T-code) and what default values can be suggested.\nThe configuration in SU24 is saved in the tables:\n- USOBT_C → Stores the list of authorization objects proposed for the transaction.\n- USOBX_C → Stores default values for fields in those authorization objects.\n\n✅ USOBT_C / USOBX_C Tables\nUSOBT_C = List of authorization objects proposed per T-code (from SU24).\nUSOBX_C = Default field values proposed for those objects (from SU24).\nThese tables act as the backend data storage of SU24 proposals.\n\n✅ SU23 – Display Authorization Objects\nSU23 is used to view what authorization objects are proposed for a transaction.\nIt shows the current list of objects stored in USOBT_C (and optionally their default values from USOBX_C).\nImportant: SU23 does NOT allow modification, only display.\n\n✅ Super Simple Analogy\nThink of it like making a recipe:\n- SU24 → The chef defines the ingredients (authorization objects) and suggested amounts (default field values).\n- USOBT_C / USOBX_C → The recipe book stores the list of ingredients and amounts.\n- SU23 → You look up the recipe book to check what ingredients are needed, but you cannot change it here.\n\n✅ One-Liner You Can Say in an Interview\n\"SU24 is where we configure the authorization objects and default values for a transaction, which are stored in USOBT_C and USOBX_C tables. SU23 simply displays these objects and values to check what is proposed by the system.\""
                        }



                    ]

                ],
                advanced: [
                    {
                        q: "Explain the concept of Derived Roles and when to use them.",
                        a: "Derived roles are copies of reference roles with modified organizational values. They're used when you need similar functionality across different organizational units (company codes, plants, etc.) but with different organizational restrictions. This promotes role standardization while allowing organizational flexibility."
                    },
                    {
                        q: "What is the difference between PFCG and SU01 in role assignment?",
                        a: "PFCG (Role Maintenance) is used to create, modify, and assign roles to users from the role perspective. SU01 assigns roles from the user perspective. PFCG provides better visibility of role authorizations and is preferred for role management, while SU01 is better for user-centric operations."
                    },
                    {
                        q: "How do you implement Segregation of Duties (SoD) in SAP ECC?",
                        a: "SoD implementation involves: 1) Identifying critical business processes, 2) Defining conflicting functions, 3) Creating granular roles that separate conflicting activities, 4) Implementing approval workflows, 5) Regular monitoring through reports like SUIM, and 6) Using GRC tools for automated SoD monitoring and prevention."
                    },
                    {
                        q: "Explain the authorization trace (ST01) and its security implications.",
                        a: "ST01 performs system trace including authorization checks. Security implications include: exposing authorization objects and values being checked, revealing system access patterns, potential performance impact, and privacy concerns. It should be used carefully with proper access controls and only for troubleshooting purposes."
                    }
                ]
            },
            hana: {
                basic: [
                    {
                        q: "What are the key security differences between SAP ECC and S/4 HANA?",
                        a: "S/4 HANA introduces: Embedded analytics requiring new authorization concepts, Fiori Launchpad security, Real-time data processing security considerations, Enhanced encryption capabilities, Simplified user experience with new security models, and Integration with cloud security standards."
                    },
                    {
                        q: "What is the Fiori Launchpad and its security components?",
                        a: "Fiori Launchpad is the entry point for SAP Fiori applications. Security components include: Launchpad roles and catalogs, App-specific authorizations, OData service security, Tile and group visibility controls, and Integration with SAP Gateway security."
                    },
                    {
                        q: "Explain the concept of Business Catalogs in Fiori security.",
                        a: "Business Catalogs are collections of business applications (apps) grouped by business area or function. They define which Fiori apps users can access and serve as the foundation for creating business roles. Catalogs are delivered by SAP and contain predefined authorization objects."
                    },
                    {
                        q: "What is SAP Gateway and its role in Fiori security?",
                        a: "SAP Gateway enables secure communication between Fiori frontend and SAP backend systems. It provides: OData service exposure, Authentication and authorization handling, SSL/TLS encryption, Session management, and Anti-CSRF token validation for secure data exchange."
                    }
                ],
                advanced: [
                    {
                        q: "How do you implement advanced Fiori security with custom applications?",
                        a: "Implementation involves: 1) Creating custom business catalogs, 2) Developing OData services with proper authorization checks, 3) Implementing field-level security, 4) Configuring SAP Gateway with custom security handlers, 5) Setting up advanced authentication methods (SAML, OAuth), and 6) Implementing audit logging for custom apps."
                    },
                    {
                        q: "Explain the security architecture of SAP HANA database layer.",
                        a: "HANA database security includes: Database user management separate from ABAP users, Schema-level and table-level privileges, Row-level security (RLS), Column-level encryption, Audit trail at database level, SSL encryption for database connections, and Integration with LDAP/Active Directory for authentication."
                    },
                    {
                        q: "What are the advanced analytics authorization concepts in S/4 HANA?",
                        a: "Advanced concepts include: Analytical privileges for restricting data access in analytics, Dynamic authorization based on user attributes, Hierarchy-based authorizations, Temporal authorization (time-based access), Cross-system analytical authorizations, and Real-time authorization checks for embedded analytics."
                    },
                    {
                        q: "How do you secure SAP Cloud Platform integration with S/4 HANA?",
                        a: "Security measures include: OAuth 2.0 for API authentication, Principal propagation for user context, Secure connectivity through Cloud Connector, Certificate-based authentication, API rate limiting and throttling, Monitoring and alerting for suspicious activities, and Data encryption in transit and at rest."
                    }
                ]
            },
            grc: {
                basic: [
                    {
                        q: "What is SAP GRC and its main components?",
                        a: "SAP GRC (Governance, Risk, and Compliance) helps organizations manage risk and ensure compliance. Main components include: Access Control (RAR), Process Control (PRC), Risk Management (ARM), and Enterprise Risk & Compliance portal. It provides automated monitoring and controls for business processes."
                    },
                    {
                        q: "What is Risk Analysis & Remediation (RAR) in GRC?",
                        a: "RAR is a component that identifies and mitigates risks in user access. It performs: SoD violation detection, Emergency access monitoring, User access reviews and attestations, Risk analysis reporting, and Automated workflow for access remediation."
                    },
                    {
                        q: "Explain the concept of SOD violations in GRC.",
                        a: "Segregation of Duties (SoD) violations occur when a single user has conflicting authorizations that could lead to fraud or errors. Examples include: Create vendor and change vendor bank details, Create purchase order and approve payment, Post journal entries and release them. GRC monitors and prevents such violations."
                    },
                    {
                        q: "What is Emergency Access Management (EAM) in GRC?",
                        a: "EAM provides controlled access to critical business functions during emergencies. Features include: Predefined emergency roles, Approval workflow for emergency access, Time-limited access grants, Comprehensive audit trail, and Automated access revocation after emergency period."
                    }
                ],
                advanced: [
                    {
                        q: "How do you implement advanced risk rules in GRC RAR?",
                        a: "Advanced implementation involves: 1) Creating complex risk rules with multiple functions, 2) Implementing organizational context in rules, 3) Setting up risk rating and scoring mechanisms, 4) Configuring advanced approval workflows, 5) Creating custom risk analysis reports, 6) Integrating with business process controls, and 7) Implementing continuous monitoring."
                    },
                    {
                        q: "Explain the integration between GRC and Identity Management systems.",
                        a: "Integration includes: User provisioning automation from IDM to GRC, Role modeling synchronization, Risk assessment during provisioning, Automated user recertification processes, Integration with Active Directory for user attributes, API-based data exchange, and Real-time risk monitoring across systems."
                    },
                    {
                        q: "What is the Process Control framework in GRC and its implementation?",
                        a: "Process Control provides continuous monitoring of business processes. Implementation involves: 1) Defining business processes and control objectives, 2) Creating automated controls and monitoring rules, 3) Setting up control testing and evaluation, 4) Implementing deficiency management workflows, 5) Creating management dashboards and reports, and 6) Integrating with audit requirements."
                    },
                    {
                        q: "How do you implement advanced analytics and reporting in GRC?",
                        a: "Advanced analytics implementation includes: 1) Custom report development using GRC reporting tools, 2) Integration with SAP BusinessObjects for advanced reporting, 3) Real-time dashboard creation, 4) Predictive analytics for risk forecasting, 5) Data mining for pattern recognition, 6) Integration with external analytics tools, and 7) Automated alert and notification systems."
                    }
                ]
            },
            additional: {
                basic: [
                    {
                        q: "What is SAP NetWeaver?",
                        a: "SAP NetWeaver is an integrated technology platform that can support various SAP applications such as ERP, CRM, and others. It provides the foundation for SAP applications and enables integration with other systems."
                    }
                    // Add more questions as needed
                ],
                advanced: [
                    {
                        q: "Explain SAP Security Audit Log.",
                        a: "The SAP Security Audit Log is a tool for monitoring security-related events in SAP systems. It helps track unauthorized access attempts, changes to user master records, and other critical activities."
                    }
                    // Add more questions as needed
                ]
            },
            miscellaneous: {
                basic: [
                    {
                        q: "What is the use of transaction SUIM?",
                        a: "SUIM is the User Information System in SAP. It is used for reporting and analyzing user authorizations, roles, and profiles."
                    }
                    // Add more questions as needed
                ],
                advanced: [
                    {
                        q: "How do you handle SAP security in a multi-system landscape?",
                        a: "In a multi-system landscape, you should implement Central User Administration (CUA), synchronize roles and authorizations, and ensure consistent security policies across all systems."
                    }
                    // Add more questions as needed
                ]
            }
        };

