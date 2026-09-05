import React, { useState, useEffect, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { PrefetchLink as Link } from '../components/PrefetchLink';
import { 
  ArrowLeft, BookOpen, Download, Search, Filter, FileText, 
  CheckCircle2, ArrowRight, ExternalLink, ShieldCheck, Sparkles, 
  Layers, Calculator, Video, Award, ChevronRight, Eye, X, 
  Clock, Share2, Star, CheckSquare, Zap, Landmark, BarChart3
} from 'lucide-react';
import { sanityClient, urlFor } from '../lib/sanity';
import { FAQSection } from '../components/FAQSection';

export interface ResourceItem {
  id: string;
  title: string;
  category: 'whitepaper' | 'case-study' | 'checklist' | 'tool' | 'guide';
  categoryLabel: string;
  format: 'PDF Guide' | 'Excel Matrix' | 'Interactive App' | 'Case Study' | 'Checklist' | 'White Paper';
  badge?: string;
  description: string;
  summary?: string;
  keyTakeaways: string[];
  readTime: string;
  downloadCount?: string;
  date: string;
  author?: string;
  actionType: 'download' | 'interactive' | 'link' | 'modal';
  targetUrl?: string;
  eventTrigger?: string;
  image?: string;
  featured?: boolean;
}

const DEFAULT_RESOURCES: ResourceItem[] = [
  {
    id: 'csa-transition-blueprint-2025',
    title: 'GAMP 5 (2nd Edition) & CSA: Transitioning from CSV to Risk-Based Testing',
    category: 'whitepaper',
    categoryLabel: 'White Paper',
    format: 'White Paper',
    badge: 'Featured Blueprint',
    description: 'A practical, regulatory-aligned framework to replace burdensome manual testing with automated Computer Software Assurance (CSA) while maintaining airtight 21 CFR Part 11 compliance.',
    summary: 'This white paper outlines how top pharmaceutical and biotech companies are cutting validation overhead by 40-60% without compromising GxP data integrity. Includes FDA draft guidance analysis, critical thinking matrices, and risk assessment workflows.',
    keyTakeaways: [
      'Differences between legacy CSV and modern Computer Software Assurance (CSA)',
      'How to apply critical thinking and risk classification (Direct vs. Indirect Impact)',
      'Unscripted vs. scripted testing protocols and objective evidence capture',
      'Step-by-step roadmap for legacy GAMP 5 system migrations'
    ],
    readTime: '12 min read',
    downloadCount: '2,400+ copies requested',
    date: 'February 2025',
    author: 'Dromominds Regulatory Practice',
    actionType: 'modal',
    featured: true
  },
  {
    id: 'global-pharma-csa-case-study',
    title: 'Global Top-10 Pharma: 40% Faster Validation Cycle via Automated CSA',
    category: 'case-study',
    categoryLabel: 'Case Study',
    format: 'Case Study',
    badge: 'Client Success',
    description: 'How a multinational pharmaceutical enterprise transformed 120+ GxP computerized systems across 8 manufacturing sites, cutting release cycle time from 14 weeks to 8 weeks.',
    summary: 'A detailed breakdown of enterprise validation transformation covering eQMS, LIMS, and ERP systems under strict FDA and EMA oversight with zero inspectional observations.',
    keyTakeaways: [
      'Eliminated 70% of repetitive paperwork through automated testing tools',
      'Reduced validation execution cycle time by 40% across 8 production plants',
      'Harmonized validation protocols across global multi-site teams',
      'Successfully defended during FDA PAI inspection with zero Form 483 findings'
    ],
    readTime: '8 min read',
    downloadCount: '1,850+ reads',
    date: 'January 2025',
    author: 'Validation Operations Team',
    actionType: 'modal'
  },
  {
    id: 'alcoa-data-integrity-checklist',
    title: 'ALCOA+ Data Integrity Self-Audit Matrix & Verification Checklist',
    category: 'checklist',
    categoryLabel: 'Checklist & Protocol',
    format: 'Checklist',
    badge: 'Audit Toolkit',
    description: 'A comprehensive, 45-point inspection-readiness checklist mapping Attributable, Legible, Contemporaneous, Original, and Accurate principles across electronic and hybrid records.',
    summary: 'Equip your quality assurance and CSV leads with an actionable verification matrix to evaluate audit trails, electronic signatures, user access management, and backup restoration protocols before regulators do.',
    keyTakeaways: [
      '45-point audit criteria covering electronic batch records, LIMS, and SCADA',
      'Systematic verification for 21 CFR Part 11 & EU Annex 11 compliance',
      'Automated audit trail review frequency and exception-handling checklist',
      'Practical guidance on handling shared accounts, backups, and time synchronization'
    ],
    readTime: '6 min read',
    downloadCount: '3,100+ copies requested',
    date: 'January 2025',
    author: 'GxP Compliance Specialists',
    actionType: 'modal'
  },
  {
    id: 'csv-maturity-diagnostic-tool',
    title: 'Interactive CSV & CSA Maturity Assessment Tool',
    category: 'tool',
    categoryLabel: 'Interactive Tool',
    format: 'Interactive App',
    badge: 'Diagnostic App',
    description: 'Evaluate your organization’s computer system validation maturity level across governance, risk management, test automation, and audit readiness in under 3 minutes.',
    summary: 'Get an instant benchmark score, maturity tier (Ad-Hoc to Continuous Optimization), and a personalized action plan to modernize your validation lifecycle.',
    keyTakeaways: [
      'Calculates quantitative maturity score across 5 key GxP dimensions',
      'Highlights immediate compliance vulnerabilities and risk exposure',
      'Provides tailored transition roadmap to Computer Software Assurance',
      'Free instant executive summary report via email'
    ],
    readTime: '3 min interactive',
    downloadCount: '4,200+ assessments',
    date: 'Updated 2025',
    author: 'Dromominds Digital Labs',
    actionType: 'interactive',
    eventTrigger: 'openCsvAssessment'
  },
  {
    id: 'cloud-validation-gxp-guide',
    title: 'Cloud Validation in Life Sciences: GxP SaaS, AWS/Azure & Part 11 Compliance',
    category: 'whitepaper',
    categoryLabel: 'White Paper',
    format: 'White Paper',
    description: 'Navigating shared responsibility models, continuous vendor updates, tenant segregation, and qualification protocols for cloud-hosted life sciences applications.',
    summary: 'Cloud-hosted systems require fundamentally different validation paradigms. This whitepaper explains how to evaluate vendor SOC 2 / ISO certifications, handle automated vendor release updates, and build continuous validation pipelines.',
    keyTakeaways: [
      'Managing vendor SaaS patch cycles without re-validating the entire stack',
      'Shared Responsibility Matrix: Client vs. Cloud Provider (AWS, Azure, Google Cloud)',
      'Electronic signature requirements in modern web and mobile GxP clients',
      'Audit strategies for remote third-party cloud infrastructure'
    ],
    readTime: '14 min read',
    downloadCount: '1,600+ copies requested',
    date: 'December 2024',
    author: 'Enterprise Cloud Validation Practice',
    actionType: 'modal'
  },
  {
    id: 'validation-roi-calculator-tool',
    title: 'Validation Cost & Labor Savings ROI Calculator',
    category: 'tool',
    categoryLabel: 'Interactive Tool',
    format: 'Interactive App',
    badge: 'ROI Modeler',
    description: 'Calculate your projected annual dollar and man-hour savings by transitioning from manual CSV protocols to streamlined, risk-based Computer Software Assurance.',
    summary: 'Input your active systems count, annual protocol volume, and average documentation hours to immediately model your savings, cycle time compression, and payback horizon.',
    keyTakeaways: [
      'Calculates estimated dollar and engineering hour savings',
      'Accounts for protocol authoring, execution, dry-runs, and QA sign-offs',
      'Generates executive-ready business case metrics',
      'Instant interactive modeling'
    ],
    readTime: '2 min interactive',
    downloadCount: '2,900+ uses',
    date: 'Updated 2025',
    author: 'Dromominds Advisory',
    actionType: 'interactive',
    eventTrigger: 'openRoiCalculator'
  },
  {
    id: 'equipment-iq-oq-pq-checklist',
    title: 'Equipment Qualification (IQ/OQ/PQ) Protocol Preparation Checklist',
    category: 'checklist',
    categoryLabel: 'Checklist & Protocol',
    format: 'Checklist',
    description: 'Standardized checklist for manufacturing and laboratory equipment commissioning, installation qualification, operational qualification, and performance qualification.',
    summary: 'A step-by-step qualification checklist ensuring all design specifications, utility connections, sensor calibrations, challenged alarms, and load verifications are fully documented.',
    keyTakeaways: [
      'Comprehensive IQ verification points (P&ID, utilities, calibrated instruments)',
      'OQ parameter challenges (worst-case, emergency stops, alarm limits)',
      'PQ sampling schemes and batch repeatability criteria',
      'Traceability matrix integration with User Requirement Specifications (URS)'
    ],
    readTime: '7 min read',
    downloadCount: '2,150+ copies requested',
    date: 'November 2024',
    author: 'CQV Engineering Team',
    actionType: 'modal'
  },
  {
    id: 'biotech-scaleup-remediation-case',
    title: 'Commercial Biotech Scale-Up: Zero-Finding CQV & FDA Inspection Remediation',
    category: 'case-study',
    categoryLabel: 'Case Study',
    format: 'Case Study',
    description: 'How Dromominds helped a clinical-stage oncology biotech upgrade 45 laboratory and bioreactor systems for commercial readiness, achieving successful FDA Pre-Approval Inspection (PAI).',
    summary: 'Rapid remediation of incomplete validation legacy packages, implementation of risk-based CQV protocols, and comprehensive staff coaching prior to regulatory inspection.',
    keyTakeaways: [
      'Remediated 45 legacy instruments and automated systems within 90 days',
      'Established uniform ALCOA+ data governance across R&D and QC labs',
      'Trained 60+ laboratory scientists on GDP and audit defense tactics',
      'Successful commercial product approval with 0 FDA Form 483 citations'
    ],
    readTime: '9 min read',
    downloadCount: '1,420+ reads',
    date: 'October 2024',
    author: 'Regulatory & CQV Group',
    actionType: 'modal'
  },
  {
    id: 'fda-483-warning-letter-trends',
    title: 'FDA 483 & Warning Letter Trend Analysis: 2024-2025 Enforcement Lessons',
    category: 'whitepaper',
    categoryLabel: 'White Paper',
    format: 'White Paper',
    description: 'An executive synthesis of top software validation, audit trail, and data integrity citations issued by FDA CDER and CBER, with actionable preventative controls.',
    summary: 'Our regulatory analysts dissect 150+ recent FDA warning letters and Form 483 citations to identify common recurring pitfalls in spreadsheet validation, access control, and change management.',
    keyTakeaways: [
      'Top 5 most frequent data integrity citations in FDA inspection reports',
      'Why generic audit trail reviews fail inspection scrutiny',
      'Spreadsheet validation: GAMP Category 5 compliance traps',
      'Proactive remediation playbook before receiving an official observation'
    ],
    readTime: '11 min read',
    downloadCount: '2,800+ copies requested',
    date: 'September 2024',
    author: 'Compliance Intelligence Division',
    actionType: 'modal'
  },
  {
    id: 'vendor-saas-assessment-framework',
    title: 'GxP Vendor Quality Assessment & SaaS Audit Framework',
    category: 'checklist',
    categoryLabel: 'Checklist & Protocol',
    format: 'Checklist',
    description: 'Standardized questionnaire and scoring framework to evaluate software vendors, cloud service providers, and contract testing facilities for GxP compliance.',
    summary: 'Establish rigorous vendor oversight. Includes standardized audit criteria for software development lifecycle (SDLC), vulnerability testing, disaster recovery, and Quality Agreements.',
    keyTakeaways: [
      '30-point vendor evaluation scoring sheet with risk weighting',
      'Key clauses required in GxP Vendor Quality Service Level Agreements (SLAs)',
      'Assessing vendor SOC 2 Type II and ISO 27001 audit reports',
      'Audit protocol for virtual vs. on-site software supplier audits'
    ],
    readTime: '5 min read',
    downloadCount: '1,950+ copies requested',
    date: 'August 2024',
    author: 'Quality Assurance Team',
    actionType: 'modal'
  }
];

export const ResourcesPage = () => {
  const { category: urlCategory } = useParams();
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState<string>(urlCategory || 'all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedResource, setSelectedResource] = useState<ResourceItem | null>(null);
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);
  const [downloadSuccessItem, setDownloadSuccessItem] = useState<string | null>(null);

  const [sanityResources, setSanityResources] = useState<ResourceItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Sync category param with activeTab
  useEffect(() => {
    if (urlCategory) {
      if (['white-papers', 'whitepaper'].includes(urlCategory)) setActiveTab('whitepaper');
      else if (['case-studies', 'case-study'].includes(urlCategory)) setActiveTab('case-study');
      else if (['checklists', 'checklist'].includes(urlCategory)) setActiveTab('checklist');
      else if (['tools', 'tool'].includes(urlCategory)) setActiveTab('tool');
      else setActiveTab(urlCategory);
    }
  }, [urlCategory]);

  // Attempt Sanity fetch with graceful fallback
  useEffect(() => {
    setIsLoading(true);
    sanityClient.fetch(`*[_type in ["resource", "whitepaper", "caseStudy"]] | order(publishedAt desc) {
      _id,
      title,
      "category": _type,
      "description": excerpt,
      "summary": summary,
      "date": publishedAt,
      "author": author,
      "image": image.asset->url,
      "readTime": readTime
    }`).then((data) => {
      if (data && Array.isArray(data) && data.length > 0) {
        const mapped: ResourceItem[] = data.map((d: any) => ({
          id: d._id,
          title: d.title || 'Untitled Resource',
          category: d.category === 'caseStudy' ? 'case-study' : d.category === 'whitepaper' ? 'whitepaper' : 'whitepaper',
          categoryLabel: d.category === 'caseStudy' ? 'Case Study' : 'White Paper',
          format: d.category === 'caseStudy' ? 'Case Study' : 'White Paper',
          description: d.description || 'Comprehensive resource for life sciences compliance and validation.',
          keyTakeaways: [
            'Regulatory compliance best practices',
            'Risk mitigation and audit readiness guidelines',
            'GAMP 5 and ALCOA+ integration frameworks'
          ],
          readTime: d.readTime || '8 min read',
          date: d.date ? new Date(d.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' }) : 'Recent',
          author: d.author || 'Dromominds Team',
          actionType: 'modal',
          image: d.image
        }));
        setSanityResources(mapped);
      }
    }).catch((err) => {
      console.warn('Sanity resources query failed or empty, using curated library:', err);
    }).finally(() => {
      setIsLoading(false);
    });
  }, []);

  // Merge Sanity resources with curated default library (avoid duplicates)
  const allResources = useMemo(() => {
    if (sanityResources.length === 0) return DEFAULT_RESOURCES;
    const existingTitles = new Set(DEFAULT_RESOURCES.map(r => r.title.toLowerCase()));
    const newItems = sanityResources.filter(s => !existingTitles.has(s.title.toLowerCase()));
    return [...DEFAULT_RESOURCES, ...newItems];
  }, [sanityResources]);

  // Filtered resources
  const filteredResources = useMemo(() => {
    return allResources.filter(item => {
      // Tab filter
      const matchesCategory = activeTab === 'all' || item.category === activeTab;

      // Search filter
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = !q || 
        item.title.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.categoryLabel.toLowerCase().includes(q) ||
        (item.keyTakeaways && item.keyTakeaways.some(t => t.toLowerCase().includes(q)));

      return matchesCategory && matchesSearch;
    });
  }, [allResources, activeTab, searchQuery]);

  const featuredResource = allResources.find(r => r.featured) || DEFAULT_RESOURCES[0];

  const handleResourceClick = (item: ResourceItem) => {
    if (item.actionType === 'interactive' && item.eventTrigger) {
      window.dispatchEvent(new Event(item.eventTrigger));
    } else {
      setSelectedResource(item);
    }
  };

  const handleDownload = (item: ResourceItem) => {
    setDownloadSuccessItem(item.id);
    setTimeout(() => {
      setDownloadSuccessItem(null);
    }, 4000);
  };

  return (
    <div className="pt-20 bg-slate-50 dark:bg-[#020b18] text-slate-900 dark:text-slate-100 min-h-screen transition-colors">
      
      {/* Dynamic Hero Section */}
      <section className="bg-gradient-to-b from-[#020b18] via-[#05152a] to-[#040e1c] text-white relative pt-12 lg:pt-20 pb-28 px-6 md:px-12 lg:px-24 overflow-hidden border-b border-sky-900/30">
        
        {/* Background glow lines and texture */}
        <div className="absolute inset-0 pointer-events-none">
          <div 
            className="absolute inset-0 opacity-15"
            style={{
              backgroundImage: `radial-gradient(#38bdf8 1px, transparent 1px)`,
              backgroundSize: '32px 32px'
            }}
          />
          <div className="absolute -top-24 right-1/4 w-[600px] h-[600px] bg-sky-500/10 rounded-full blur-[180px]" />
          <div className="absolute bottom-0 right-10 w-[500px] h-[400px] bg-blue-600/10 rounded-full blur-[160px]" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Breadcrumb / Back Link */}
          <div className="flex items-center gap-2 mb-8">
            <Link to="/" className="inline-flex items-center gap-1.5 text-sky-400 hover:text-white transition-colors text-xs font-bold uppercase tracking-wider">
              <ArrowLeft className="w-3.5 h-3.5" /> Home
            </Link>
            <span className="text-slate-600">/</span>
            <span className="text-slate-400 text-xs font-bold uppercase tracking-wider">Resources Hub</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 items-center">
            
            {/* Title & Subtitle */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-8"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/30 mb-6 backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5 text-sky-400 animate-pulse" />
                <span className="text-sky-300 font-bold tracking-[0.2em] uppercase text-xs">
                  Validation & Regulatory Intelligence
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] mb-6">
                Life Sciences Compliance & <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-cyan-200 to-blue-400">
                  Resource Hub
                </span>
              </h1>

              <p className="text-base sm:text-lg lg:text-xl text-slate-300 font-light max-w-2xl leading-relaxed mb-8">
                Explore our library of expert-crafted white papers, real-world case studies, audit-readiness checklists, and self-assessment tools built for pharmaceutical, biotech, and medical device leaders.
              </p>

              {/* Quick Key Highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 pt-2 border-t border-sky-900/40">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-400/30 flex items-center justify-center text-sky-400 shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">FDA & EMA Aligned</div>
                    <div className="text-[11px] text-slate-400">GAMP 5 / Part 11</div>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-400/30 flex items-center justify-center text-sky-400 shrink-0">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">CSA Methodologies</div>
                    <div className="text-[11px] text-slate-400">40% faster cycles</div>
                  </div>
                </div>

                <div className="col-span-2 sm:col-span-1 flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-400/30 flex items-center justify-center text-sky-400 shrink-0">
                    <CheckSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">Practical Checklists</div>
                    <div className="text-[11px] text-slate-400">Ready-to-use protocols</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Quick Diagnostic Assessment Action Box */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="lg:col-span-4"
            >
              <div className="p-6 rounded-3xl bg-gradient-to-b from-sky-950/70 via-slate-900/80 to-slate-950/90 border border-sky-500/30 backdrop-blur-xl shadow-[0_0_40px_rgba(2,132,199,0.2)]">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-sky-500/20 text-sky-300 border border-sky-400/30">
                    Interactive Assessment
                  </span>
                  <span className="text-xs text-sky-400 flex items-center gap-1 font-medium">
                    <Clock className="w-3 h-3" /> 3 min
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 leading-snug">
                  Benchmark Your CSV / CSA Maturity
                </h3>

                <p className="text-xs text-slate-300 font-light leading-relaxed mb-5">
                  Answer 5 targeted questions to measure your team’s validation efficiency, GxP risk exposure, and audit readiness tier.
                </p>

                <div className="space-y-2.5">
                  <button 
                    onClick={() => window.dispatchEvent(new Event('openCsvAssessment'))}
                    className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-sky-500/25 flex items-center justify-center gap-2 transition-all transform active:scale-95 cursor-pointer"
                  >
                    Launch CSV Diagnostic <ArrowRight className="w-4 h-4" />
                  </button>

                  <button 
                    onClick={() => window.dispatchEvent(new Event('openRoiCalculator'))}
                    className="w-full py-2.5 px-4 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-slate-300 hover:text-white font-medium text-xs border border-slate-700/80 flex items-center justify-center gap-2 transition-colors cursor-pointer"
                  >
                    <Calculator className="w-3.5 h-3.5 text-sky-400" /> Calculate CSA Labor ROI
                  </button>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Featured Spotlight Banner */}
      {featuredResource && (
        <section className="relative z-20 -mt-12 max-w-7xl mx-auto px-6 md:px-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl p-6 sm:p-8 lg:p-10 bg-white dark:bg-slate-900 border border-slate-200 dark:border-sky-500/30 shadow-2xl relative overflow-hidden"
          >
            {/* Ambient corner glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-sky-500/10 via-blue-500/5 to-transparent pointer-events-none" />

            <div className="grid lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-8">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold bg-sky-500 text-white shadow-sm">
                    <Award className="w-3.5 h-3.5" /> {featuredResource.badge || 'Spotlight Resource'}
                  </span>
                  <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                    {featuredResource.readTime}
                  </span>
                  <span className="text-xs font-semibold text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/50 px-2.5 py-0.5 rounded-full border border-sky-200 dark:border-sky-800">
                    {featuredResource.downloadCount || '2,400+ downloads'}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight mb-4">
                  {featuredResource.title}
                </h2>

                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-light leading-relaxed mb-6">
                  {featuredResource.description}
                </p>

                {/* Key Takeaways Pills */}
                <div className="grid sm:grid-cols-2 gap-2.5 mb-6">
                  {featuredResource.keyTakeaways.slice(0, 4).map((takeaway, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-sky-500 shrink-0 mt-0.5" />
                      <span>{takeaway}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Side Panel */}
              <div className="lg:col-span-4 flex flex-col justify-center items-start lg:items-end border-t lg:border-t-0 lg:border-l border-slate-200 dark:border-slate-800 pt-6 lg:pt-0 lg:pl-8">
                <div className="w-full space-y-3">
                  <button
                    onClick={() => handleResourceClick(featuredResource)}
                    className="w-full py-3.5 px-6 rounded-xl bg-[var(--color-brand)] hover:bg-sky-600 text-white font-bold text-sm tracking-wide shadow-lg shadow-sky-600/20 flex items-center justify-center gap-2.5 transition-all transform hover:-translate-y-0.5 cursor-pointer"
                  >
                    <Download className="w-4 h-4" /> Get Blueprint (Instant Access)
                  </button>

                  <button
                    onClick={() => setSelectedResource(featuredResource)}
                    className="w-full py-3 px-6 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-medium text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
                  >
                    <Eye className="w-4 h-4" /> Quick Summary & Preview
                  </button>
                  <p className="text-[11px] text-center text-slate-400">
                    Complimentary instant access via email • No obligation
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      )}

      {/* Main Content & Filter Section */}
      <section className="py-16 sm:py-20 px-6 md:px-10 lg:px-12 max-w-7xl mx-auto">
        
        {/* Search & Category Filter Controls */}
        <div className="flex flex-col lg:flex-row gap-6 justify-between items-stretch lg:items-center mb-10 pb-6 border-b border-slate-200 dark:border-slate-800">
          
          {/* Category Chips */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { key: 'all', label: 'All Resources', icon: Layers, count: allResources.length },
              { key: 'whitepaper', label: 'White Papers', icon: BookOpen, count: allResources.filter(r => r.category === 'whitepaper').length },
              { key: 'case-study', label: 'Case Studies', icon: Landmark, count: allResources.filter(r => r.category === 'case-study').length },
              { key: 'checklist', label: 'Checklists & Protocols', icon: CheckSquare, count: allResources.filter(r => r.category === 'checklist').length },
              { key: 'tool', label: 'Interactive Apps', icon: Calculator, count: allResources.filter(r => r.category === 'tool').length },
            ].map(tab => {
              const IconCmp = tab.icon;
              const isActive = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    isActive 
                      ? 'bg-[var(--color-brand)] text-white shadow-md shadow-sky-500/20' 
                      : 'bg-white dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700/80'
                  }`}
                >
                  <IconCmp className="w-4 h-4" />
                  <span>{tab.label}</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${isActive ? 'bg-white/20 text-white' : 'bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400'}`}>
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Input Bar */}
          <div className="relative w-full lg:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input 
              type="text"
              placeholder="Search CSV, ALCOA+, GAMP..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-9 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all shadow-sm"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

        </div>

        {/* Resources Grid */}
        {filteredResources.length === 0 ? (
          <div className="text-center py-20 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-8">
            <BookOpen className="w-12 h-12 text-slate-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">No matching resources found</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto mb-6">
              Try adjusting your search terms or select another category filter above.
            </p>
            <button 
              onClick={() => { setSearchQuery(''); setActiveTab('all'); }}
              className="px-5 py-2.5 rounded-xl bg-sky-500 text-white font-bold text-xs uppercase tracking-wider"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredResources.map((item, idx) => {
              const isTool = item.category === 'tool';
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: (idx % 6) * 0.08 }}
                  className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-7 flex flex-col justify-between hover:border-sky-400/50 dark:hover:border-sky-500/50 hover:shadow-xl dark:hover:shadow-[0_0_30px_rgba(2,132,199,0.15)] transition-all duration-300 group"
                >
                  <div>
                    {/* Card Category & Read Time Tag */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md ${
                        item.category === 'whitepaper' 
                          ? 'bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-sky-300 border border-blue-200 dark:border-blue-800/60'
                          : item.category === 'case-study'
                          ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60'
                          : item.category === 'checklist'
                          ? 'bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800/60'
                          : 'bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-300 border border-purple-200 dark:border-purple-800/60'
                      }`}>
                        {item.categoryLabel}
                      </span>
                      <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400 flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {item.readTime}
                      </span>
                    </div>

                    {/* Card Title */}
                    <h3 
                      onClick={() => handleResourceClick(item)}
                      className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3 tracking-tight group-hover:text-[var(--color-brand)] transition-colors cursor-pointer leading-snug line-clamp-2"
                    >
                      {item.title}
                    </h3>

                    {/* Card Description */}
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-light leading-relaxed mb-6 line-clamp-3">
                      {item.description}
                    </p>

                    {/* Takeaway Bullets Preview */}
                    <div className="space-y-1.5 mb-6 pt-3 border-t border-slate-100 dark:border-slate-800/80">
                      {item.keyTakeaways.slice(0, 2).map((takeaway, tIdx) => (
                        <div key={tIdx} className="flex items-start gap-2 text-[11px] text-slate-600 dark:text-slate-400">
                          <CheckCircle2 className="w-3.5 h-3.5 text-sky-500 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{takeaway}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between mt-auto">
                    <span className="text-[11px] font-medium text-slate-400">
                      {item.downloadCount || item.date}
                    </span>

                    {isTool ? (
                      <button
                        onClick={() => handleResourceClick(item)}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--color-brand)] group-hover:text-sky-400 transition-all cursor-pointer"
                      >
                        Launch App <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </button>
                    ) : (
                      <button
                        onClick={() => handleResourceClick(item)}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--color-brand)] group-hover:text-sky-400 transition-all cursor-pointer"
                      >
                        Access Guide <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </button>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}

      </section>

      {/* Navigation to News & Video Hubs Banner */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12 mb-20">
        <div className="grid md:grid-cols-2 gap-6">
          
          {/* News & Industry Events Link Card */}
          <Link 
            to="/resources/news" 
            className="p-8 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-950 text-white border border-slate-800 hover:border-sky-500/40 transition-all duration-300 group shadow-lg flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-sky-500/10 border border-sky-400/30 flex items-center justify-center text-sky-400 mb-6 group-hover:scale-110 transition-transform">
                <BookOpen className="w-6 h-6" />
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-sky-400 mb-2">Company & Regulatory Updates</div>
              <h3 className="text-2xl font-bold text-white mb-3">News & Industry Events</h3>
              <p className="text-sm text-slate-300 font-light leading-relaxed mb-6">
                Read the latest announcements, FDA regulatory developments, and industry recognitions from the Dromominds team.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 text-sm font-bold text-sky-400 group-hover:text-white transition-colors">
              Explore News <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </div>
          </Link>

          {/* Videos & Webinars Link Card */}
          <Link 
            to="/resources/videos" 
            className="p-8 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-950 text-white border border-slate-800 hover:border-sky-500/40 transition-all duration-300 group shadow-lg flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-400/30 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
                <Video className="w-6 h-6" />
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-2">Video Masterclasses</div>
              <h3 className="text-2xl font-bold text-white mb-3">Webinars & Tech Briefings</h3>
              <p className="text-sm text-slate-300 font-light leading-relaxed mb-6">
                Watch deep-dive walkthroughs on Computer Software Assurance (CSA), ALCOA+ data integrity, and automated test execution.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 text-sm font-bold text-blue-400 group-hover:text-white transition-colors">
              Watch Videos <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </div>
          </Link>

        </div>
      </section>

      {/* Resource Detail / Download Modal */}
      <AnimatePresence>
        {selectedResource && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedResource(null)}
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            />

            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 z-10 max-h-[90vh] overflow-y-auto"
            >
              <button 
                onClick={() => setSelectedResource(null)}
                className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs font-bold uppercase tracking-wider bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 px-3 py-1 rounded-full border border-sky-200 dark:border-sky-800">
                  {selectedResource.categoryLabel}
                </span>
                <span className="text-xs text-slate-400">
                  {selectedResource.readTime}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4 leading-snug">
                {selectedResource.title}
              </h2>

              <p className="text-sm text-slate-600 dark:text-slate-300 font-light leading-relaxed mb-6">
                {selectedResource.summary || selectedResource.description}
              </p>

              {/* Key Takeaways Box */}
              <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200 mb-3 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-sky-500" /> Key Topics & Takeaways
                </h4>
                <ul className="space-y-2">
                  {selectedResource.keyTakeaways.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-sky-500 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Modal Actions */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
                {selectedResource.actionType === 'interactive' && selectedResource.eventTrigger ? (
                  <button
                    onClick={() => {
                      const trigger = selectedResource.eventTrigger;
                      setSelectedResource(null);
                      if (trigger) window.dispatchEvent(new Event(trigger));
                    }}
                    className="flex-1 py-3.5 px-6 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-sky-500/25 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    Launch Interactive App <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      handleDownload(selectedResource);
                      window.dispatchEvent(new Event('openLeadMagnet'));
                    }}
                    className="flex-1 py-3.5 px-6 rounded-xl bg-[var(--color-brand)] hover:bg-sky-600 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-sky-600/25 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Download className="w-4 h-4" /> Get Resource Package (via Email)
                  </button>
                )}

                <button
                  onClick={() => {
                    setSelectedResource(null);
                    navigate('/contact');
                  }}
                  className="py-3 px-6 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 font-medium text-xs flex items-center justify-center gap-2 cursor-pointer"
                >
                  Ask an Expert
                </button>
              </div>

              {downloadSuccessItem === selectedResource.id && (
                <div className="mt-3 text-center text-xs text-emerald-500 font-bold animate-fade-in">
                  ✓ Access request initiated. Your resource package will be sent to your email!
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Comprehensive FAQs Section */}
      <div className="relative z-10 bg-white dark:bg-[#020b18] border-t border-slate-200 dark:border-slate-800">
        <FAQSection 
          faqs={[
            {
              question: "Are Dromominds whitepapers and checklists aligned with FDA & GAMP 5 standards?",
              answer: "Yes, every whitepaper, protocol checklist, and validation template is authored and audited by senior GxP regulatory specialists. They incorporate GAMP 5 (Second Edition), FDA CSA Draft Guidance, 21 CFR Part 11, EU Annex 11, and PIC/S standards."
            },
            {
              question: "Can our team adapt these checklists and protocols for our internal QMS?",
              answer: "Absolutely. Our resources are built as customizable baseline frameworks. You can integrate them into your Standard Operating Procedures (SOPs), validation master plans (VMPs), and testing protocols."
            },
            {
              question: "What is the difference between legacy CSV and modern CSA covered in your resources?",
              answer: "Computer Software Assurance (CSA) shifts the focus from excessive documentation to risk-based critical thinking and automated testing. It reduces non-value-added paperwork by up to 60% while elevating GxP software reliability and data integrity."
            },
            {
              question: "How can Dromominds assist with implementing these frameworks?",
              answer: "Our advisory and technical validation teams provide end-to-end execution support—from performing baseline CSV maturity audits and ALCOA+ remediation to authoring custom IQ/OQ/PQ protocols and defending systems during regulatory audits."
            },
            {
              question: "How frequently are these resources updated with new regulatory guidance?",
              answer: "Our regulatory intelligence team monitors global inspectional trends and updates our published materials whenever the FDA, EMA, MHRA, or ISPE issue new guidances, warning letters, or standard revisions."
            }
          ]}
          title="Resource & Compliance FAQs"
          subtitle="Answers to common questions regarding our validation methodologies, toolkits, and regulatory frameworks."
        />
      </div>

      {/* Conversion Banner Section */}
      <section className="bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-700 text-white py-16 lg:py-20 px-6 text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto relative z-10">
          <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mx-auto mb-6 backdrop-blur-md">
            <Award className="w-7 h-7 text-sky-200" />
          </div>
          <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight leading-tight">
            Need a Customized Validation or Audit-Readiness Strategy?
          </h2>
          <p className="text-base sm:text-lg text-white/90 mb-8 font-light max-w-xl mx-auto leading-relaxed">
            Our principal CSV architects and regulatory consultants can evaluate your current software stack and tailor validation protocols to your exact timeline.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link 
              to="/contact" 
              className="bg-white text-slate-900 px-8 py-4 rounded-xl font-bold hover:bg-slate-100 transition shadow-xl inline-flex items-center gap-2 cursor-pointer"
            >
              Schedule an Expert Consultation <ArrowRight className="w-4 h-4 text-sky-600" />
            </Link>
            <button 
              onClick={() => window.dispatchEvent(new Event('openCsvAssessment'))}
              className="bg-sky-700/60 hover:bg-sky-700 text-white border border-white/30 px-6 py-4 rounded-xl font-bold transition inline-flex items-center gap-2 cursor-pointer"
            >
              Take CSV Maturity Assessment
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
