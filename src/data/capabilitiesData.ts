import { 
  ShieldCheck, Server, Target, Globe, BookOpen, Activity, Cpu, 
  Box, Stethoscope, Microscope, Zap, Map, FileText, Lock, Network, 
  LineChart, Brain, Database, Glasses, Users, Briefcase, Cog 
} from 'lucide-react';

export const capabilitiesData = {
  // Trust & Compliance
  'csv': {
    title: 'Computer System Validation (CSV)',
    subtitle: 'Comprehensive CSV & CSA (Computer Software Assurance) ensuring FDA 21 CFR Part 11, EU Annex 11, and MHRA Data Integrity compliance.',
    content: 'We provide enterprise-grade computer system validation (CSV) and modernized computer software assurance (CSA) services to guarantee the integrity, security, and reliability of complex GxP applications. Moving beyond traditional document-centric validation, we engineer risk-calibrated, automated compliance frameworks that align strictly with GAMP 5 Second Edition principles. Our expertise spans large-scale ERP implementations, clinical systems (eTMF, CTMS, EDC), laboratory informatics (LIMS, ELN), quality management systems (QMS), and critical manufacturing execution systems (MES). By leveraging automated testing suites, we transform regulatory rigor into a catalyst for assured deployment.',
    image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?w=1600&q=80',
    tags: ['Validation', 'Regulatory Affairs', 'CSV', 'CSA', 'GAMP 5'],
    tagline: 'Trust & Compliance',
    metrics: [
      { value: "500+", label: "GxP Systems Validated Globally" },
      { value: "0", label: "Warning Letters / Form 483s" },
      { value: "45%", label: "Reduction in Validation Cycle Time" }
    ],
    methodology: [
      { step: "01", title: "Intelligent Risk Profiling", desc: "Deploy quantitative algorithmic risk assessments based on GAMP 5 principles to define system impact vectors—minimizing redundant testing overhead on low-risk configurations." },
      { step: "02", title: "Strategic Master Planning", desc: "Architect comprehensive Validation Master Plans (VMP) and define granular User (URS) and Functional Specifications (FRS) mapping directly to unmitigated system risks." },
      { step: "03", title: "Automated Traceability & Execution", desc: "Execute scriptless or automated IQ/OQ/PQ protocols linked via continuous dynamic Traceability Matrices (TM), guaranteeing 100% test coverage certainty." },
      { step: "04", title: "Audit-Ready Handover", desc: "Provide cryptographically secure, fully compliant Validation Summary Reports (VSR) paired with robust SOPs covering business continuity, disaster recovery, and periodic review." }
    ],
    tabs: [
      {
        title: 'ERP & Enterprise System Validation',
        content: 'Validating massive-scale ERP systems (Enterprise ERP, Oracle ERP Cloud) and their integrations across the supply chain. We manage the complexity of end-to-end data flows covering inventory management, batch release, and serialization, ensuring holistic data integrity during global rollouts.',
        image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80'
      },
      {
        title: 'Computer Software Assurance (CSA)',
        content: 'Pioneering the FDA\'s CSA paradigm shift by focusing on unscripted, ad-hoc testing, and critical thinking over exhaustive documentation. We reduce paper burdens by up to 60%, directing QA focus solely toward high-impact patient safety and product quality workflows.',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80'
      },
      {
        title: 'Clinical & Lab Informatics (LIMS/eTMF)',
        content: 'Rigorous validation of hybrid and cloud-native clinical data systems. We handle multi-tenant SaaS environments, 21 CFR Part 11 electronic signature requirements, and massive unstructured data migrations, ensuring audit trails and data provenance remain absolutely intact.',
        image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&q=80'
      },
      {
        title: 'Cloud Infrastructure (IaaS/PaaS) Qualification',
        content: 'Applying "Infrastructure as Code" (IaC) qualification strategies for AWS, Azure, and GCP. We perform deep vendor audits, qualify hypervisors, and establish continuous configuration monitoring to maintain the validated state in highly dynamic cloud ecosystems.',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80'
      },
      {
        title: 'Data Integrity & Remediation',
        content: 'Executing deep ALCOA+ gap analyses across legacy electronic records and raw data extraction pipelines. We design and implement robust remediation strategies, establishing secure audit trails, access controls, and periodic review procedures to resolve persistent compliance vulnerabilities.',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80'
      }
    ],
    caseStudies: [
      {
        client: 'Global Top-10 CDMO',
        challenge: 'Simultaneous deployment and validation of Enterprise ERP and a centralized LIMS across 12 manufacturing sites located in the US, EU, and APAC, complicated by fragmented local legacy systems.',
        solution: 'Engineered a unified global Validation Master Plan utilizing a hub-and-spoke testing methodology. We automated 70% of OQ protocols leveraging Tosca, and standardized vendor assessments across 40+ third-party suppliers.',
        result: 'Achieved complete global rollout 2 months ahead of schedule. Post-deployment regulatory audits by the FDA and EMA resulted in zero 483s or major findings regarding system validation or data integrity.'
      },
      {
        client: 'Tier-1 Biopharmaceutical',
        challenge: 'Transitioning a massive, heavily customized on-premise quality system to Veeva Vault QMS. The client faced critical data migration risks across 15 years of archived quality records requiring strict cryptographic validation.',
        solution: 'Implemented a hybrid CSA framework emphasizing unscripted testing for low-risk features, paired with specialized ETL validation scripts to execute bit-for-bit verification of over 2.5 million migrated quality records.',
        result: 'Data migration completed with 100% verified accuracy. The CSA approach reduced the volume of validation documentation by 65%, freeing internal QA engineering resources to focus on critical systemic process improvements.'
      }
    ],
    faqs: [
      {
        question: 'How does CSA differ from traditional CSV?',
        answer: 'While traditional CSV often mandates exhaustive, scripted testing and massive documentation for all features regardless of risk, the FDA-endorsed CSA (Computer Software Assurance) approach leverages critical thinking. It focuses unscripted or ad-hoc testing on low-risk features and reserves rigorous scripted testing strictly for features impacting patient safety or product quality, massively reducing overhead.'
      },
      {
        question: 'Can you validate off-the-shelf Cloud SaaS applications?',
        answer: 'Yes. For Multi-Tenant SaaS systems (like Veeva, Salesforce, TrackWise Digital), we cannot validate the vendor\'s back-end code. Instead, we perform a rigorous Vendor Audit, leverage the vendor\'s validation packages, and focus our IQ/OQ/PQ efforts entirely on your specific configuration, User Access Management, and Business Process workflows (GAMP 5 Category 4).'
      },
      {
        question: 'What is your approach to Data Migration Validation?',
        answer: 'Data migration is treated as a critical, high-risk validation event. We develop specific Migration Plans, execute IQ on the migration ETL tools, conduct 100% verification on a static data sample, and employ automated risk-based sampling (AQL) to verify dynamic data, ensuring ALCOA+ principles are maintained post-migration.'
      }
    ]
  },
  'gxp-compliance': {
    title: 'GxP Compliance & Data Integrity',
    subtitle: 'Securing the backbone of clinical and manufacturing data.',
    content: 'Our Data Integrity assessments ensure that all your GxP-relevant data adheres to ALCOA+ principles. We identify vulnerabilities across paper and electronic records to mitigate regulatory risk.',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1600&q=80',
    tags: ['Compliance', 'Data Integrity', 'GxP'],
    tagline: 'Trust & Compliance',
    tabs: [
      {
        title: 'ALCOA+ Assessments',
        content: 'We conduct comprehensive audits of your data lifecycle to ensure records are Attributable, Legible, Contemporaneous, Original, and Accurate.',
        image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80'
      },
      {
        title: 'Audit Trail Review',
        content: 'Implementation of systematic audit trail review processes to identify unauthorized data modifications or deletions.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80'
      },
      {
        title: 'Remediation Roadmaps',
        content: 'Developing and executing robust CAPAs for data integrity gaps identified during internal audits or regulatory inspections.',
        image: 'https://images.unsplash.com/photo-1434626881859-194d67b2b86f?w=800&q=80'
      }
    ],
    faqs: [
      {
        question: 'What does ALCOA+ stand for?',
        answer: 'ALCOA+ stands for Attributable, Legible, Contemporaneous, Original, Accurate, plus Complete, Consistent, Enduring, and Available.'
      },
      {
        question: 'How often should audit trails be reviewed?',
        answer: 'The frequency depends on the risk of the data. Critical manufacturing or clinical data requires more frequent review, sometimes concurrent with batch release.'
      }
    ]
  },
  'cqv': {
    title: 'CQV & Audit Readiness',
    subtitle: 'Commissioning, Qualification, and Validation for facilities and equipment.',
    content: 'We provide specialized CQV services for new facilities, manufacturing lines, and laboratory equipment. Our experts ensure absolute alignment with ASTM E2500 and ISPE baselines for streamlined project delivery.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1600&q=80',
    tags: ['CQV', 'Audit Readiness', 'Facilities'],
    tagline: 'Trust & Compliance',
    tabs: [
      {
        title: 'Equipment Qualification',
        content: 'Execution of Design (DQ), Installation (IQ), Operational (OQ), and Performance Qualification (PQ) for manufacturing and lab equipment.',
        image: 'https://images.unsplash.com/photo-1581092580497-a0680bf70b55?w=800&q=80'
      },
      {
        title: 'Facility Commissioning',
        content: 'Leveraging commissioning data to reduce formal qualification testing, accelerating facility startup timelines.',
        image: 'https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?w=800&q=80'
      },
      {
        title: 'Mock Audits',
        content: 'Rigorous pre-inspection audits simulating FDA or EMA visits to stress-test your quality systems and facility readiness.',
        image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80'
      }
    ],
    faqs: [
      {
        question: 'How do you apply ASTM E2500?',
        answer: 'We utilize subject matter experts (SMEs) to define critical aspects and leverage vendor testing, shifting the focus from documenting endless tests to verifying fitness for use.'
      }
    ]
  },
  'regulatory': {
    title: 'Regulatory Risk & Quality Assurance',
    subtitle: 'Proactive mitigation strategies for global regulatory frameworks.',
    content: 'Navigate complex regulatory landscapes with confidence. We provide strategic consulting to align your quality assurance programs with global regulations, minimizing compliance risk.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1600&q=80',
    tags: ['Regulatory', 'Quality Assurance'],
    tagline: 'Trust & Compliance',
    tabs: [
      {
        title: 'Regulatory Intelligence',
        content: 'Continuous monitoring and interpretation of emerging global regulations to proactively adjust your compliance strategies.',
        image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80'
      },
      {
        title: 'Supplier Audits',
        content: 'Evaluating and auditing critical suppliers (software vendors, CMOs/CROs) to ensure their quality management systems meet your standards.',
        image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80'
      }
    ],
    faqs: [
      {
        question: 'Can you assist with responding to an FDA 483?',
        answer: 'Yes, our experts assist in drafting comprehensive responses and developing robust CAPA plans to address regulatory findings swiftly.'
      }
    ]
  },
  'validation': {
    title: 'Validation & Remediation Services',
    subtitle: 'Fixing historical non-compliance and bringing legacy systems up to standard.',
    content: 'When audits uncover gaps, we step in to remediate. We build retroactive validation documentation for legacy systems and streamline your validation frameworks for the future.',
    image: 'https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=1600&q=80',
    tags: ['Validation', 'Remediation'],
    tagline: 'Trust & Compliance',
    tabs: [
      {
        title: 'Legacy System Retrofit',
        content: 'Developing retrospective validation packages for unvalidated legacy systems that are critical to ongoing operations.',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80'
      },
      {
        title: 'Warning Letter Recovery',
        content: 'Rapid deployment of crisis-response teams to execute remediation plans mandated by regulatory agencies.',
        image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&q=80'
      }
    ],
    faqs: [
      {
        question: 'How do you handle unvalidated legacy systems?',
        answer: 'We assess the historical performance data, document the current configuration, and conduct targeted functional testing wrapped in a retrospective validation report.'
      }
    ]
  },
  // Quality & Content Management
  'qms': {
    title: 'Quality Management Systems (QMS)',
    subtitle: 'Digital transformation of enterprise quality processes.',
    content: 'We optimize and validate Enterprise Quality Management Systems (eQMS) to ensure CAPA, Deviations, Change Control, and customer complaints are handled efficiently and compliantly.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&q=80',
    tags: ['QMS', 'Quality', 'Compliance'],
    tagline: 'Quality & Content',
    tabs: [
      {
        title: 'eQMS Implementation Strategy',
        content: 'We map out your current quality process and configure the eQMS to harmonize multi-site operations, increasing visibility across the enterprise.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80'
      },
      {
        title: 'CAPA & Deviation Optimization',
        content: 'Enhance your processes to focus on root cause analysis rather than administrative overhead, utilizing intelligent workflows.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80'
      }
    ],
    faqs: [
      {
        question: 'Which eQMS platforms do you support?',
        answer: 'We have extensive experience validating Veeva Vault QMS, TrackWise, MasterControl, and Sparta Systems among others.'
      }
    ]
  },
  'sop': {
    title: 'SOP & Documentation Management',
    subtitle: 'Structuring organizational knowledge for exact compliance.',
    content: 'We revolutionize how you handle standard operating procedures. We assist in migrating, structuring, and maintaining your documentation for complete compliance and ease of access.',
    image: 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=1600&q=80',
    tags: ['SOP', 'Documentation', 'Quality'],
    tagline: 'Quality & Content',
    tabs: [
      {
        title: 'SOP Harmonization',
        content: 'Streamlining complex, overlapping SOPs into clear, concise, and globally accessible operational guidelines.',
        image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80'
      },
      {
        title: 'Document Life-cycle Workflows',
        content: 'Implementing automated routing for document drafting, review, approval, and obsolescence.',
        image: 'https://images.unsplash.com/photo-1434626881859-194d67b2b86f?w=800&q=80'
      }
    ],
    faqs: [
      {
        question: 'How do you handle legacy paper documentation?',
        answer: 'We design the migration strategy, ensuring valid scanned copies meet regulatory criteria before transitioning to fully electronic document management.'
      }
    ]
  },
  'eqms': {
    title: 'eQMS & Document Lifecycle Control',
    subtitle: 'The technological foundation of global product quality.',
    content: 'Modernize your document control systems. We validate full-stack eQMS applications that offer seamless traceability from design control to post-market surveillance.',
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=1600&q=80',
    tags: ['QMS', 'eQMS'],
    tagline: 'Quality & Content',
    tabs: [
      {
        title: 'System Validation',
        content: 'Rigorous validation of cloud-based eQMS platforms focusing on 21 CFR Part 11 electronic signature and audit trail compliance.',
        image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80'
      }
    ],
    faqs: []
  },
  'compliance-content': {
    title: 'Compliance Content Strategy',
    subtitle: 'Aligning business processes with robust content governance.',
    content: 'Governance over regulatory and promotional content is critical. We build strategies that ensure only approved content reaches the market, adhering to promotional and labeling constraints.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&q=80',
    tags: ['Content Strategy', 'Compliance'],
    tagline: 'Quality & Content',
    tabs: [
      {
        title: 'PromoMats Validation',
        content: 'Validating content management systems used for Medical, Legal, and Regulatory (MLR) reviews of promotional materials.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80'
      }
    ],
    faqs: []
  },
  'regulatory-doc': {
    title: 'Regulatory Documentation Support',
    subtitle: 'Accelerating global submissions and dossier management.',
    content: 'We provide specialized validation methodologies for systems submitting eCTD dossiers, ensuring data integrity during the critical submission process with health authorities. Our approach removes documentation bottlenecks and automates traceability across the entire lifecycle of your regulatory submissions, from initial drafts to final health agency approvals.',
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1600&q=80',
    tags: ['Regulatory', 'Documentation', 'Compliance'],
    tagline: 'Quality & Content Governance',
    features: [
      { id: 1, title: 'Submission Integrity', desc: 'Guaranteeing data accuracy during agency dossier transmissions.', icon: 'ShieldCheck' },
      { id: 2, title: 'Workflow Automation', desc: 'Validating approval routing to prevent skipped compliance steps.', icon: 'Zap' },
      { id: 3, title: 'Audit Trail Auditing', desc: 'Rigorous checks on part 11 compliant e-signature sequences.', icon: 'FileText' }
    ],
    tabs: [
      {
        title: 'eCTD Validation',
        content: 'Ensuring your electronic Common Technical Document software packages assemble and transmit flawlessly. We validate the data pipelines handling complex XML structures required by international regulators.',
        image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80'
      },
      {
        title: 'RIM System Hardening',
        content: 'Regulatory Information Management (RIM) systems are central to global strategy. We secure these platforms to handle massive concurrent documentation tasks while enforcing absolute version control.',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80'
      },
      {
        title: 'Agency Correspondence Archiving',
        content: 'Validating the secure, immutable storage repositories where official FDA and EMA correspondence is held, ensuring unalterable records are maintained according to retention policies.',
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80'
      }
    ],
    faqs: [
      { q: 'How do you validate large eCTD publishing platforms?', a: 'We employ automated regression sets to confirm that XML schemas align perfectly with the latest ICH standards during system updates.' },
      { q: 'Can you handle Veeva Vault Submissions?', a: 'Yes, we are highly experienced in validating the entire Veeva Vault RIM suite, specifically focusing on Submissions and Submissions Archive.' }
    ]
  },
  // Workflow Automation
  'automation': {
    title: 'Compliant Process Automation',
    subtitle: 'RPA and intelligent automation designed for GxP environments.',
    content: 'Remove human error from repetitive tasks using compliant Robotic Process Automation (RPA). We validate automated bots to ensure they execute workflows perfectly while maintaining full traceability.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&q=80',
    tags: ['Automation', 'RPA'],
    tagline: 'Workflow Automation',
    tabs: [
      {
        title: 'RPA Qualification',
        content: 'We treat software bots as highly controlled systems, validating their logic trees and ensuring their access rights mimic compliant human operators.',
        image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80'
      },
      {
        title: 'Bot Audit Trails',
        content: 'Configuring rigorous audit trails to capture every action an automated process takes against your GxP databases.',
        image: 'https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=800&q=80'
      }
    ],
    faqs: [
      {
        question: 'Are bots allowed in FDA-regulated processes?',
        answer: 'Yes, provided the software bot is validated for its intended use and its actions are completely traceable and auditable.'
      }
    ]
  },
  'optimization': {
    title: 'Workflow Optimization',
    subtitle: 'Lean operations backed by intelligent digital workflows.',
    content: 'We map out your convoluted operational processes and simplify them through digital workflow engines. Enhance approval speed, compliance checks, and cross-department collaboration.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&q=80',
    tags: ['Optimization', 'Workflow'],
    tagline: 'Workflow Automation',
    tabs: [
      {
        title: 'Process Mining',
        content: 'Utilizing data to discover where bottlenecks occur in your clinical or manufacturing process trees.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80'
      }
    ],
    faqs: []
  },
  'low-code': {
    title: 'Low-Code / No-Code Solutions',
    subtitle: 'Accelerating business logic deployment securely.',
    content: 'Low-code platforms like Appian, OutSystems, and Power Platform are transforming life sciences. We provide tailored validation strategies for rapidly evolving no-code environments.',
    image: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=1600&q=80',
    tags: ['Low-Code', 'Software Development'],
    tagline: 'Workflow Automation',
    tabs: [
      {
        title: 'Platform Qualification',
        content: 'Securing the underlying low-code platform and defining boundaries for what constitutes highly critical vs. non-critical apps.',
        image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?w=800&q=80'
      },
      {
        title: 'Citizen Development Governance',
        content: 'Establishing compliance frameworks that allow non-engineers to build tools without violating Part 11 requirements.',
        image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&q=80'
      }
    ],
    faqs: [
      {
        question: 'Do low-code apps need to be validated?',
        answer: 'Yes, if the application outputs impact patient safety, product quality, or data integrity (GxP), the specific app logic must be validated regardless of the platform.'
      }
    ]
  },
  'ai-apps': {
    title: 'AI-Powered Enterprise Applications',
    subtitle: 'Governing and validating Artificial Intelligence in Life Sciences.',
    content: 'Generative AI and Machine Learning models offer massive upside, but massive regulatory risk. We provide validation frameworks specifically designed to address non-deterministic AI models.',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1600&q=80',
    tags: ['AI', 'Machine Learning', 'Innovation'],
    tagline: 'Workflow Automation',
    tabs: [
      {
        title: 'ML Model Validation',
        content: 'Validating the data pipeline, training sets, and output heuristics of machine learning algorithms used in signal detection or QA.',
        image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&q=80'
      },
      {
        title: 'AI Governance',
        content: 'Establishing operational frameworks to monitor model drift and ensure ethical, traceable AI deployment.',
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80'
      }
    ],
    faqs: [
      {
        question: 'How do you validate an AI that learns continuously?',
        answer: 'Unlike static software, continuous-learning AI requires "Algorithm Change Protocols" (ACP) that pre-define performance boundaries. If the AI learns within those boundaries, no re-validation is needed.'
      }
    ]
  },
  'custom-software': {
    title: 'Custom Software & System Integration',
    subtitle: 'Bespoke solutions built for stringent regulatory demands.',
    content: 'When off-the-shelf software doesn\'t fit, our experts design, test, and integrate custom GxP applications. We embed validation within your SDLC to ensure native compliance.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1600&q=80',
    tags: ['Software', 'Integration'],
    tagline: 'Workflow Automation',
    tabs: [
      {
        title: 'SDLC Consultancy',
        content: 'Embedding Quality by Design (QbD) into your software development lifecycle.',
        image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&q=80'
      }
    ],
    faqs: []
  },
  // Data Insights & Control
  'integration': {
    title: 'Integration & Interoperability',
    subtitle: 'Connecting disparate systems securely.',
    content: 'Ensure your LIMS, ERP, and QMS speak the same language securely. We validate APIs and middleware to ensure data isn\'t corrupted or lost in transit.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1600&q=80',
    tags: ['Integration', 'Data Control'],
    tagline: 'Data Insights',
    tabs: [
      {
        title: 'Middleware Validation',
        content: 'Ensuring robust error handling and data transformation protocols across integrated systems.',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80'
      }
    ],
    faqs: []
  },
  'bi': {
    title: 'Business Intelligence & Analytics',
    subtitle: 'Trustworthy insights derived from compliant data lakes.',
    content: 'We validate the pipelines feeding your BI dashboards, ensuring that the KPIs driving your business and quality decisions are based on accurate, attributable data.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&q=80',
    tags: ['Analytics', 'BI'],
    tagline: 'Data Insights',
    tabs: [
      {
        title: 'Dashboard Validation',
        content: 'Validating data extraction, transformation, and visual representation scripts.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80'
      }
    ],
    faqs: []
  },
  'digital-transformation': {
    title: 'Digital Transformation Solutions',
    subtitle: 'Modernizing legacy factories and lab infrastructure.',
    content: 'We guide your transition from paper to glass. Our experts help you navigate the disruptive change of implementing digital systems in highly resistant operational cultures.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&q=80',
    tags: ['Digital Transformation', 'Innovation'],
    tagline: 'Data Insights',
    tabs: [
      {
        title: 'Paperless Plant Initiatives',
        content: 'Structuring compliance around tablets, mobile devices, and AR interfaces on the manufacturing floor.',
        image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80'
      }
    ],
    faqs: []
  },
  'data-management': {
    title: 'Data Management & Reporting',
    subtitle: 'Securing the lifecycle of your critical quality data.',
    content: 'Implement master data management strategies that ensure consistency across global sites. We validate the data structures representing your critical products and materials.',
    image: 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=1600&q=80',
    tags: ['Data Management'],
    tagline: 'Data Insights',
    tabs: [
      {
        title: 'Master Data Setup',
        content: 'Validating the automated processes that populate product master data in global ERPs.',
        image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80'
      }
    ],
    faqs: []
  },
  'enterprise-integration': {
    title: 'Enterprise System Integration',
    subtitle: 'Uniting global platforms across subsidiaries and acquisitions.',
    content: 'When life science corporations merge, systems crash. We manage the delicate compliance efforts required to harmonize acquired QMS and ERP systems into single enterprise environments.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1600&q=80',
    tags: ['Integration', 'ERP'],
    tagline: 'Data Insights',
    tabs: [
      {
        title: 'M&A System Harmonization',
        content: 'Data migration validation and compliance integration for corporate mergers.',
        image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80'
      }
    ],
    faqs: []
  },
  'equipment-qualification': {
    title: 'Equipment Qualification',
    subtitle: 'Comprehensive IQ/OQ/PQ for critical manufacturing and laboratory equipment.',
    content: 'We provide specialized Equipment Qualification services designed to assure that all instruments, utilities, and manufacturing equipment are installed correctly and operate precisely as intended under GxP regulations. Adhering strictly to ISPE baselines and ASTM E2500 principles, we design rigorous Design (DQ), Installation (IQ), Operational (OQ), and Performance Qualification (PQ) protocols to accelerate facility startup timelines and ensure uncompromising inspection readiness.',
    image: 'https://images.unsplash.com/photo-1581092580497-a0680bf70b55?w=1600&q=80',
    tags: ['Equipment', 'Qualification', 'IQ/OQ/PQ'],
    tagline: 'Trust & Compliance',
    tabs: [
      {
        title: 'Manufacturing Equipment',
        content: 'Validation of bioreactors, autoclaves, depyrogenation ovens, and packaging lines.',
        image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?w=800&q=80'
      },
      {
        title: 'Laboratory Instruments',
        content: 'Qualification of HPLC, GC, mass spectrometers, and environmental monitoring systems.',
        image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&q=80'
      },
      {
        title: 'Critical Utilities',
        content: 'Rigorous testing of HVAC, WFI (Water for Injection), and clean steam systems.',
        image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80'
      }
    ],
    faqs: [
      {
        question: 'What is the difference between Commissioning and Qualification?',
        answer: 'Commissioning is a well-planned, documented, and managed engineering approach to system startup. Qualification is the formal verification that equipment is fit for its intended use and meets regulatory requirements.'
      }
    ]
  },
  // Training & Upskilling
  'csv-csa-training': {
    title: 'CSV and CSA Training',
    subtitle: 'Mastering Computer System Validation and Computer Software Assurance.',
    content: 'Our industry-leading training programs equip your quality and IT teams with the modern skills required to implement FDA-endorsed Computer Software Assurance (CSA) and risk-based validation methodologies. Designed to pivot teams from outdated, document-heavy processes towards critical thinking-driven approaches, our curriculum ensures that your organization can rapidly adopt modernized compliance models.',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1600&q=80',
    tags: ['Training', 'CSV', 'CSA'],
    tagline: 'Training & Upskilling',
    tabs: [
      {
        title: 'CSA Bootcamp',
        content: 'Interactive sessions mapping out the transition from CSV to CSA.',
        image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80'
      }
    ],
    faqs: [],
    metrics: [
      { value: "500+", label: "Professionals Trained" },
      { value: "98%", label: "Certification Rate" },
      { value: "40%", label: "Faster Validation Cycles post-training" }
    ]
  },
  'plc-scada-training': {
    title: 'PLC and SCADA Training',
    subtitle: 'Validating critical industrial control systems.',
    content: 'Specialized training for engineers and validation professionals focusing on the intricacies of qualifying Programmable Logic Controllers (PLCs), Distributed Control Systems (DCS), and SCADA (Supervisory Control and Data Acquisition) environments in manufacturing facilities.',
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=1600&q=80',
    tags: ['SCADA', 'PLC', 'Automation'],
    tagline: 'Training & Upskilling',
    tabs: [
      {
        title: 'Control Systems Validation',
        content: 'Deep-dives into PLC logic testing and SCADA integration.',
        image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80'
      }
    ],
    faqs: [],
    metrics: [
      { value: "50+", label: "Facility Systems Covered" },
      { value: "100%", label: "Compliance with ISA-88/95" },
      { value: "30%", label: "Reduction in Automation Defects" }
    ]
  },
  'data-integrity-training': {
    title: 'Data Integrity & ALCOA+ Training',
    subtitle: 'Establishing a foundational culture of data reliability.',
    content: 'Poor data integrity leads to critical FDA findings. Our practical courses demystify the ALCOA+ principles (Attributable, Legible, Contemporaneous, Original, Accurate, Complete, Consistent, Enduring, Available) and train your staff on conducting rigorous audit trail reviews and identifying systemic data risks.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&q=80',
    tags: ['Data Integrity', 'ALCOA+', 'Compliance'],
    tagline: 'Training & Upskilling',
    tabs: [
      {
        title: 'Audit Trail Mastery',
        content: 'Workshops focused on effective, risk-based audit trail review techniques.',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80'
      }
    ],
    faqs: [],
    metrics: [
      { value: "10k+", label: "Audit Trails Reviewed" },
      { value: "0", label: "Warning Letters post-training" },
      { value: "100%", label: "ALCOA+ Adoption Rate" }
    ]
  },
  'gxp-gmp-regulatory-training': {
    title: 'GxP, GMP & Regulatory Compliance Training',
    subtitle: 'Comprehensive regulatory instruction across the lifecycle.',
    content: 'Equip your workforce with a profound understanding of global GxP and GMP regulations. We provide customized tracks addressing the latest updates from the FDA, EMA, and MHRA, ensuring organizational alignment with current enforcement trends and best practices.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&q=80',
    tags: ['GxP', 'GMP', 'Regulatory'],
    tagline: 'Training & Upskilling',
    tabs: [
      {
        title: 'Global Compliance Overview',
        content: 'Navigating the nuances of EU Annex 11 and FDA 21 CFR regulations.',
        image: 'https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?w=800&q=80'
      }
    ],
    faqs: [],
    metrics: [
      { value: "2K+", label: "Global Alumni" },
      { value: "5", label: "Regulatory Bodies Covered" },
      { value: "100%", label: "Audit Preparedness" }
    ]
  },
  'equipment-qualification-training': {
    title: 'Equipment Qualification & Process Validation Training',
    subtitle: 'Hands-on strategies for facilities and manufacturing.',
    content: 'Our experts deliver tactical workshops delineating the equipment qualification lifecycle (IQ, OQ, PQ) alongside modern process validation frameworks. Learn how to leverage vendor testing effectively and apply risk-based limits in day-to-day operations.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1600&q=80',
    tags: ['Equipment', 'Validation', 'Process'],
    tagline: 'Training & Upskilling',
    tabs: [
      {
        title: 'Protocol Development',
        content: 'Best practices for drafting robust IQ, OQ, and PQ documents.',
        image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80'
      }
    ],
    faqs: [],
    metrics: [
      { value: "150+", label: "Workshops Conducted" },
      { value: "50%", label: "Faster IQ/OQ Execution" },
      { value: "100%", label: "ISPE Baseline Alignment" }
    ]
  },
  'qms-gdp-document-training': {
    title: 'QMS, GDP and Document Validation Training',
    subtitle: 'Optimizing quality management and documentation practices.',
    content: 'A deep exploration of Quality Management Systems (QMS) integration, Good Documentation Practices (GDP), and proper document control lifecycles. We teach your teams how to build, maintain, and validate efficient, compliant document hubs.',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66cb85?w=1600&q=80',
    tags: ['QMS', 'GDP', 'Documents'],
    tagline: 'Training & Upskilling',
    tabs: [
      {
        title: 'eQMS Implementation',
        content: 'Strategies for deploying and validating digital QMS architectures.',
        image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&q=80'
      }
    ],
    faqs: [],
    metrics: [
      { value: "300+", label: "SOPs Optimized" },
      { value: "85%", label: "Reduction in GDP Errors" },
      { value: "100%", label: "Traceability Maintained" }
    ]
  }
};
