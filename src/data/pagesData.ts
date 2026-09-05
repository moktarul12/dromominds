import { ShieldCheck, Server, Target, Globe, BookOpen, Activity, Cpu, Box, Stethoscope, Microscope, Zap, Map, FileText } from 'lucide-react';
import { capabilitiesData } from './capabilitiesData';

export const servicePagesData: Record<string, any> = {
  ...capabilitiesData,
  'clinical': {
    title: 'Clinical Services Validation',
    subtitle: 'Ensuring absolute compliance and data integrity across Phase I-IV trials.',
    content: 'Our clinical domain experts provide meticulous validation for eClinical systems (EDC, ePRO, CTMS, eTMF), ensuring GCP compliance and 21 CFR Part 11 adherence. We minimize risk in your clinical operations so you can focus on patient outcomes.',
    image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?w=1600&q=80',
    features: [
      { id: 1, title: 'CTMS Validation', desc: 'Comprehensive testing and assurance for Clinical Trial Management Systems.', icon: Activity },
      { id: 2, title: 'eTMF Management', desc: 'Ensuring audit-readiness and secure document life-cycle management.', icon: BookOpen },
      { id: 3, title: 'Data Integrity', desc: 'ALCOA+ principles applied rigorously across clinical data pipelines.', icon: Target }
    ]
  },
  'labs': {
    title: 'Laboratory Data & Systems (LIMS/ELN)',
    subtitle: 'Streamlining lab informatics with ironclad regulatory compliance.',
    content: 'We validate Laboratory Information Management Systems (LIMS), Electronic Lab Notebooks (ELN), and Chromatography Data Systems (CDS) to ensure your scientific data is both secure and GLP-compliant.',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=1600&q=80',
    features: [
      { id: 1, title: 'LIMS Validation', desc: 'End-to-end validation for sample management and processing pipelines.', icon: Server },
      { id: 2, title: 'Instrument Integration', desc: 'Secure data pathways between lab instruments and core infrastructure.', icon: Cpu },
      { id: 3, title: 'GLP Compliance', desc: 'Aligning lab operations with global Good Laboratory Practices.', icon: ShieldCheck }
    ]
  },
  'quality': {
    title: 'Quality Management (QMS/EQMS)',
    subtitle: 'Digital quality systems built for global regulatory rigor.',
    content: 'Dromominds transforms your quality processes. From CAPA logging to Supplier Quality Management, we validate robust EQMS platforms that maintain continuous compliance with ISO 13485 and FDA regulations.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&q=80',
    features: [
      { id: 1, title: 'EQMS Deployment', desc: 'Validation and configuration of enterprise quality systems.', icon: ShieldCheck },
      { id: 2, title: 'CAPA Management', desc: 'Automated, compliant workflows for corrective and preventive actions.', icon: Activity },
      { id: 3, title: 'Audit Readiness', desc: 'Continuous compliance tracking to ensure zero critical findings.', icon: Target }
    ]
  },
  'regulatory': {
    title: 'Regulatory Affairs & Operations',
    subtitle: 'Navigating complex global compliance landscapes with precision.',
    content: 'We manage and validate the systems that handle your Regulatory Information Management (RIM) and eCTD submissions. Ensure global compliance across EMA, FDA, and ROW agencies.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1600&q=80',
    features: [
      { id: 1, title: 'RIM Validation', desc: 'Harmonizing global product registrations and submission tracking.', icon: Globe },
      { id: 2, title: 'eCTD Systems', desc: 'Ensuring seamless assembly and transmission of regulatory dossiers.', icon: BookOpen },
      { id: 3, title: 'Agency Archiving', desc: 'Secure retention of critical correspondence and approvals.', icon: Server }
    ]
  },
  'manufacturing': {
    title: 'Manufacturing & MES',
    subtitle: 'Driving efficiency and compliance on the factory floor.',
    content: 'From MES (Manufacturing Execution Systems) to SCADA, we provide validation strategies that optimize batch processing while maintaining absolute GMP compliance.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1600&q=80',
    features: [
      { id: 1, title: 'MES Validation', desc: 'Validating electronic batch records and manufacturing workflows.', icon: Cpu },
      { id: 2, title: 'SCADA Systems', desc: 'Ensuring integrity of supervisory control and data acquisition systems.', icon: Server },
      { id: 3, title: 'GMP Adherence', desc: 'Aligning plant operations with Good Manufacturing Practices.', icon: ShieldCheck }
    ]
  },
  'supply-chain': {
    title: 'Supply Chain & ERP',
    subtitle: 'End-to-end visibility and serialization for life sciences.',
    content: 'We validate ERPs and Track & Trace systems to ensure global supply chain integrity. Prevent counterfeits, meet serialization mandates, and streamline distribution.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8ed7c50a40?w=1600&q=80',
    features: [
      { id: 1, title: 'Enterprise ERP Validation', desc: 'Validating critical business and supply chain modules.', icon: Box },
      { id: 2, title: 'Track & Trace', desc: 'Serialization validation aligned with DSCSA and global mandates.', icon: Map },
      { id: 3, title: 'Cold Chain Data', desc: 'Ensuring the integrity of temperature monitoring systems.', icon: Activity }
    ]
  },
  'safety': {
    title: 'Pharmacovigilance & Safety',
    subtitle: 'Protecting patients through robust safety monitoring systems.',
    content: 'We validate argus and other pharmacovigilance databases to ensure rapid, compliant adverse event reporting and signal detection across the product lifecycle.',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1600&q=80',
    features: [
      { id: 1, title: 'Safety Database Validation', desc: 'Rigorous testing of adverse event data intake and reporting.', icon: Stethoscope },
      { id: 2, title: 'Signal Detection', desc: 'Validating algorithms used for detecting new safety risks.', icon: Activity },
      { id: 3, title: 'Regulatory Reporting', desc: 'Ensuring compliance for expedited and periodic safety reports.', icon: FileText }
    ]
  },
  'commercial': {
    title: 'Commercial & CRM',
    subtitle: 'Compliant customer engagement and promotional material tracking.',
    content: 'Validating CRM systems (like Veeva CRM) and promotional material review systems to ensure that commercial operations adhere to strict industry marketing regulations.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&q=80',
    features: [
      { id: 1, title: 'CRM Validation', desc: 'Ensuring compliance in field activity and sample tracking.', icon: Target },
      { id: 2, title: 'PromoMats Validation', desc: 'Content management validation for promotional materials.', icon: BookOpen },
      { id: 3, title: 'HCP Engagement', desc: 'Tracking interactions and aggregate spend for transparency reporting.', icon: Globe }
    ]
  },
  'it': {
    title: 'IT Infrastructure & Cloud Assurance',
    subtitle: 'Securing the backbone of digital compliance.',
    content: 'We qualify IT infrastructure, cloud platforms (AWS, Azure), and network security configurations. Ensure your platforms are secure, highly available, and audit-ready.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1600&q=80',
    features: [
      { id: 1, title: 'Cloud Qualification', desc: 'Risk assessments and qualification of IaaS/PaaS/SaaS environments.', icon: Server },
      { id: 2, title: 'Disaster Recovery', desc: 'Validating backup procedures and business continuity plans.', icon: ShieldCheck },
      { id: 3, title: 'Cybersecurity', desc: 'Integration of security best practices into the validation lifecycle.', icon: Zap }
    ]
  },
  // ----- INDUSTRIES -----
  'biotech': {
    title: 'Biotech Industry Services',
    subtitle: 'Agile validation strategies for fast-moving biotech innovators.',
    content: 'From early-stage R&D labs to breakthrough clinical trials, we provide scalable validation infrastructure. We deploy risk-based CSV frameworks that accelerate your speed to market without compromising on quality.',
    image: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=1600&q=80',
    features: [
      { id: 1, title: 'Agile CSV', desc: 'Right-sized validation for scaling biotech startups.', icon: Zap },
      { id: 2, title: 'R&D Lab Support', desc: 'LIMS and ELN qualification for robust discovery data.', icon: Server },
      { id: 3, title: 'Tech Transfer', desc: 'Compliance tracking as you move from lab to pilot plant.', icon: Cpu }
    ]
  },
  'pharma': {
    title: 'Pharmaceutical Solutions',
    subtitle: 'Enterprise-grade validation for global pharmaceutical leaders.',
    content: 'We support Top 50 Pharma companies with massive, multi-site validation programs. Our comprehensive methodologies ensure unbroken compliance for manufacturing lines, global QMS, and complex ERP systems.',
    image: 'https://images.unsplash.com/photo-1563213126-a4273aed2016?w=1600&q=80',
    features: [
      { id: 1, title: 'Harmonization', desc: 'Standardizing validation processes across global sites.', icon: Globe },
      { id: 2, title: 'GAMP 5 Implementation', desc: 'Applying modern risk-based approaches to all GxP systems.', icon: ShieldCheck },
      { id: 3, title: 'Continuous Assurance', desc: 'Ongoing validation support for evergreen SaaS platforms.', icon: Activity }
    ]
  },
  'cmo-cro': {
    title: 'CMO & CRO Services',
    subtitle: 'Building client trust through unassailable quality systems.',
    content: 'Contract organizations must prove compliance to their sponsors. We help CMOs and CROs build unshakeable validation frameworks, ensuring multi-tenant data segregation and rapid onboarding for new capabilities.',
    image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=1600&q=80',
    features: [
      { id: 1, title: 'Sponsor Audits', desc: 'Ensuring absolute readiness for external partner audits.', icon: BookOpen },
      { id: 2, title: 'Data Segregation', desc: 'Validating security protocols in multi-client systems.', icon: Server },
      { id: 3, title: 'Rapid Deployment', desc: 'Template-driven validation for adding new testing modalities.', icon: Zap }
    ]
  },
  'medical-device': {
    title: 'Medical Devices & SaMD',
    subtitle: 'Precision validation for hardware and software-as-a-medical-device.',
    content: 'We bring deep expertise in ISO 13485, 21 CFR Part 820, and IEC 62304. Whether you are validating manufacturing equipment or qualifying complex digital health software, we ensure patient safety.',
    image: 'https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=1600&q=80',
    features: [
      { id: 1, title: 'SaMD Validation', desc: 'Agile compliance for Software as a Medical Device.', icon: Cpu },
      { id: 2, title: 'Equipment Qualification', desc: 'IQ/OQ/PQ execution for complex device assembly lines.', icon: Box },
      { id: 3, title: 'Design Controls', desc: 'Ensuring traceability from user needs to final validation.', icon: Target }
    ]
  },
  // ----- DELIVERY MODELS -----
  'consulting': {
    title: 'Strategic Consulting',
    subtitle: 'High-level compliance strategy and digital transformation advisory.',
    content: 'Our principal consultants assess your current compliance posture, design global validation master plans (VMPs), and develop roadmaps for AI governance, Cloud migration, and GAMP 5 modernization.',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600&q=80',
    features: [
      { id: 1, title: 'Gap Assessments', desc: 'Identifying risks in your current compliance processes.', icon: Target },
      { id: 2, title: 'Validation Roadmaps', desc: 'Strategic planning for massive system rollouts.', icon: Map },
      { id: 3, title: 'Audit Defense', desc: 'Expert advisory during FDA and EMA health authority audits.', icon: ShieldCheck }
    ]
  },
  'managed-services': {
    title: 'Managed Validation Services',
    subtitle: 'Outsourcing the burden of continuous compliance.',
    content: 'Our Managed Services model provides an entire, scalable validation team on-demand. We handle routine periodic reviews, change controls, and ongoing regression testing for your cloud and on-prem systems.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&q=80',
    features: [
      { id: 1, title: 'SaaS Continuous Assurance', desc: 'Managing constant updates from Veeva, TrackWise, etc.', icon: Activity },
      { id: 2, title: 'Predictable Costs', desc: 'Fixed monthly pricing for comprehensive validation coverage.', icon: Zap },
      { id: 3, title: 'Global Coverage', desc: 'Follow-the-sun support to keep your operations running.', icon: Globe }
    ]
  },
  'staffing': {
    title: 'Expert Staffing & Augmentation',
    subtitle: 'Deploying elite validation talent exactly when you need it.',
    content: 'Need to add muscle to an ongoing project? We supply highly vetted, specialized validation engineers, QA specialists, and project managers to integrate seamlessly with your internal teams.',
    image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=1600&q=80',
    features: [
      { id: 1, title: 'Vetted Experts', desc: 'Only top-tier engineers with minimum 5 years GxP experience.', icon: Target },
      { id: 2, title: 'Rapid Onboarding', desc: 'Engineers who deploy fast and require zero compliance training.', icon: Activity },
      { id: 3, title: 'Flexible Scaling', desc: 'Ramp team size up or down based on project phases.', icon: Box }
    ]
  }
};
