import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'motion/react';
import { ShieldCheck, Database, FlaskConical, ClipboardCheck, SearchCheck, GraduationCap, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import { PrefetchLink as Link } from './PrefetchLink';
import { sanityClient } from '../lib/sanity';

const localCapabilities = [
  {
    id: 'csv',
    shortTitle: 'Computerized System Validation',
    title: 'Computerized System Validation (CSV/CSA)',
    description: 'Deliver robust Validation Planning, Strategy & Master Plans (VMP) while conducting Risk Assessments and Impact Analysis based on GAMP 5 methodologies.',
    metrics: ['FDA 21 CFR Part 11', 'EU Annex 11', 'GAMP 5'],
    icon: ShieldCheck,
    colorHex: '#3b82f6', // blue-500
    link: '/computerized-system-validation',
    details: [
      'Validation Strategy & Master Plans (VMP)',
      'Risk Assessments & GAMP 5-Based Validation',
      'URS, FS, DS, RTM & Documentation',
      'IQ, OQ, PQ & Functional Testing',
      'Cloud, SaaS, ERP, LIMS & QMS Apps'
    ]
  },
  {
    id: 'eqv',
    shortTitle: 'Equipment Qualification',
    title: 'Equipment Qualification',
    description: 'Comprehensive Installation, Operational, and Performance Qualification (IQ/OQ/PQ) for utility, laboratory, and manufacturing equipment.',
    metrics: ['IQ/OQ/PQ', 'Lifecycle Risk', 'Protocol Dev'],
    icon: FlaskConical,
    colorHex: '#38BDF8',
    link: '/equipment-qualification',
    details: [
      'Installation Qualification (IQ)',
      'Operational Qualification (OQ)',
      'Performance Qualification (PQ)',
      'Protocol & Report Development',
      'Lifecycle Risk Assessments'
    ]
  },
  {
    id: 'qms',
    shortTitle: 'QMS & Regulatory',
    title: 'QMS & Regulatory Services',
    description: 'Design and implement robust Quality Management Systems, SOPs, and document control to ensure inspection readiness and system optimization.',
    metrics: ['ISO 9001', 'ISO 13485', 'ICH Q10'],
    icon: ClipboardCheck,
    colorHex: '#06B6D4',
    link: '/qms-implementation',
    details: [
      'QMS Design & Implementation',
      'SOP & Record Management',
      'Change Control & Non-Conformance',
      'CAPA Implementation',
      'Inspection Readiness'
    ]
  },
  {
    id: 'data',
    shortTitle: 'Data Integrity',
    title: 'Data Integrity Compliance',
    description: 'Comprehensive ALCOA+ compliance reviews, audit trail evaluations, and data integrity risk assessments for FDA, EU GMP & Global GxP frameworks.',
    metrics: ['ALCOA+', 'FDA', 'EU GMP'],
    icon: Database,
    colorHex: '#60A5FA',
    link: '/data-integrity',
    details: [
      'ALCOA+ Compliance Reviews',
      'Audit Trail & Electronic Records',
      'Remediation Planning',
      'GxP Compliance Assessments',
      'Governance Reviews'
    ]
  },
  {
    id: 'audit',
    shortTitle: 'Audit & Remediation',
    title: 'Audit & Remediation',
    description: 'Identify and resolve compliance gaps with comprehensive internal audits, mock inspections, and regulatory risk analysis.',
    metrics: ['Mock Inspections', 'CAPA', 'Risk Analysis'],
    icon: SearchCheck,
    colorHex: '#22D3EE',
    link: '/audit-remediation',
    details: [
      'GxP, CSV, QMS Gap Assessments',
      'Internal Audits & Mock Inspections',
      'Risk Analysis & Remediation',
      'CAPA Development & Verification',
      'Observation Response'
    ]
  },
  {
    id: 'training',
    shortTitle: 'Skills Training',
    title: 'Trainings & Skills Dev.',
    description: 'Empower your teams with specialized training in CSV, CSA, Data Integrity, GxP, and Quality Management Systems.',
    metrics: ['CSV & CSA', 'ALCOA+', 'GDP'],
    icon: GraduationCap,
    colorHex: '#06b6d4', // cyan-500
    link: '/expertise/training',
    details: [
      'CSV & CSA Training',
      'Data Integrity & ALCOA+',
      'GxP, GMP & Compliance',
      'Equipment & Process Validation',
      'QMS & GDP Training'
    ]
  }
];

const CapabilityCard = ({ cap, isMobile = false }: { cap: any; isMobile?: boolean }) => {
    if (!cap) return null;
    
    const IconCmp = typeof cap.icon === 'function' || typeof cap.icon === 'object' ? cap.icon : CheckCircle2;

    return (
        <div className={`bg-slate-900/90 backdrop-blur-2xl border border-white/10 rounded-2xl lg:rounded-3xl shadow-2xl relative overflow-hidden group flex flex-col justify-between w-full transition-all duration-300 ${isMobile ? 'p-4 sm:p-5 min-h-[340px] max-h-[calc(100vh-280px)] overflow-y-auto' : 'p-6 lg:p-7 min-h-[440px] xl:min-h-[470px]'}`}>
            {/* Giant background faded watermark icon */}
            <IconCmp 
                className="absolute -bottom-8 -right-8 w-36 h-36 lg:w-56 lg:h-56 opacity-5 pointer-events-none transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-6" 
                style={{ color: cap.colorHex }}
            />

            <div>
                <div className="flex items-center gap-3 lg:gap-4 mb-3 lg:mb-4 relative z-10">
                    <div 
                        className="w-10 h-10 lg:w-13 lg:h-13 rounded-xl flex items-center justify-center border border-white/20 shadow-inner shrink-0"
                        style={{ backgroundColor: `${cap.colorHex}25`, color: cap.colorHex }}
                    >
                        <IconCmp className="w-5 h-5 lg:w-6 lg:h-6" />
                    </div>
                    <div className="min-w-0">
                        <h4 className="text-lg lg:text-2xl font-black text-white leading-tight truncate-2-lines">
                            {cap.title}
                        </h4>
                    </div>
                </div>
                
                <p className="text-slate-300 font-normal leading-relaxed mb-4 lg:mb-5 relative z-10 text-xs sm:text-sm lg:text-base">
                    {cap.description}
                </p>

                <div className="space-y-1.5 lg:space-y-2.5 mb-4 lg:mb-6 relative z-10">
                    {cap.details?.slice(0, isMobile ? 4 : 5).map((detail: string, idx: number) => (
                        <div key={idx} className="flex items-start">
                            <div 
                                className="w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full mt-1.5 mr-2.5 shrink-0 shadow-sm" 
                                style={{ backgroundColor: cap.colorHex }}
                            />
                            <span className="text-slate-100 text-xs sm:text-sm lg:text-[15px] font-semibold tracking-tight leading-snug">{detail}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="pt-3 lg:pt-4 border-t border-white/10 flex flex-col gap-3 relative z-10 mt-auto">
                <div className="flex flex-wrap gap-1.5 lg:gap-2">
                    {cap.metrics?.map((metric: string, idx: number) => (
                        <span 
                            key={idx} 
                            className="px-2 py-0.5 lg:px-2.5 lg:py-1 bg-white/5 border border-white/10 rounded-md text-[10px] lg:text-xs font-bold text-slate-300 tracking-wider uppercase shadow-sm"
                        >
                            {metric}
                        </span>
                    ))}
                </div>
                <Link 
                    to={cap.link || '#'} 
                    className="inline-flex items-center text-xs sm:text-sm lg:text-base font-bold transition-all group/link w-fit hover:underline"
                    style={{ color: cap.colorHex }}
                >
                    Explore {cap.shortTitle}
                    <ArrowRight className="w-3.5 h-3.5 lg:w-4 lg:h-4 ml-1.5 group-hover/link:translate-x-1.5 transition-transform inline-block" />
                </Link>
            </div>
        </div>
    );
};

export const OurCapabilities = () => {
    const [capabilities, setCapabilities] = useState<any[]>(localCapabilities);
    const [activeIdx, setActiveIdx] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
      sanityClient.fetch(`*[_type == "capability"] | order(order asc)`).then(data => {
        if (data && data.length > 0) setCapabilities(data);
      }).catch(console.error);
    }, []);

    // Sticky Scroll Progress Tracking
    const { scrollYProgress } = useScroll({
      target: containerRef,
      offset: ["start start", "end end"]
    });

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
      const count = capabilities.length;
      if (count <= 1) return;
      // Distribute evenly across the scroll duration
      const segment = 1 / count;
      const index = Math.min(Math.floor(latest / segment), count - 1);
      if (index >= 0 && index !== activeIdx) {
        setActiveIdx(index);
      }
    });

    const activeCap = capabilities[activeIdx] || capabilities[0];

    const scrollToCap = (index: number) => {
      setActiveIdx(index);
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const count = capabilities.length;
        const progress = count > 1 ? index / (count - 1) : 0;
        const totalScrollable = rect.height - window.innerHeight;
        if (totalScrollable > 0) {
          const targetY = rect.top + scrollTop + (progress * totalScrollable);
          window.scrollTo({ top: targetY, behavior: 'smooth' });
        }
      }
    };

    return (
        <section id="services" className="bg-slate-950 text-white relative transition-colors duration-500">
            
            {/* Locked Sticky Scroll Container */}
            <div 
                ref={containerRef} 
                className="relative"
                style={{ height: `${capabilities.length * 100}vh` }}
            >
                <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden px-4 sm:px-6 lg:px-8 py-4 sm:py-6 z-20">
                    
                    {/* Ambient Glow tied to Active Capability */}
                    <div 
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[550px] lg:w-[700px] h-[350px] sm:h-[550px] lg:h-[700px] blur-[140px] rounded-full opacity-20 pointer-events-none transition-all duration-700 ease-in-out"
                        style={{ backgroundColor: activeCap.colorHex }}
                    />

                    <div className="max-w-7xl mx-auto w-full flex flex-col justify-center relative z-10">
                        
                        {/* Header & Step Counter */}
                        <div className="shrink-0 mb-4 lg:mb-6">
                            <div className="flex items-center justify-between gap-4">
                                <div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="text-[var(--color-brand)] font-bold tracking-[0.2em] uppercase text-xs">Capabilities</span>
                                        <span className="text-slate-600">•</span>
                                        <span className="text-slate-400 text-xs font-medium">Scroll to explore</span>
                                    </div>
                                    <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-white tracking-tight">
                                        Our Capabilities.
                                    </h3>
                                </div>

                                {/* Step Counter & Progress Indicator */}
                                <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full backdrop-blur-md">
                                    <div className="flex items-center gap-1.5">
                                        <span className="text-sm sm:text-base font-black text-white tracking-tight">
                                            0{activeIdx + 1}
                                        </span>
                                        <span className="text-xs text-slate-500">/</span>
                                        <span className="text-xs text-slate-400 font-bold">
                                            0{capabilities.length}
                                        </span>
                                    </div>
                                    <div className="w-12 sm:w-16 h-1.5 bg-white/10 rounded-full overflow-hidden">
                                        <div 
                                            className="h-full transition-all duration-300 rounded-full"
                                            style={{ 
                                                width: `${((activeIdx + 1) / capabilities.length) * 100}%`,
                                                backgroundColor: activeCap.colorHex 
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Mobile Step Pills Navigation */}
                            <div className="lg:hidden flex gap-2 overflow-x-auto no-scrollbar py-2 mt-2">
                                {capabilities.map((cap, i) => {
                                    const isActive = activeIdx === i;
                                    return (
                                        <button
                                            key={cap.id}
                                            onClick={() => scrollToCap(i)}
                                            className={`px-3 py-1 rounded-lg text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 border ${
                                                isActive 
                                                    ? 'bg-white/15 text-white border-white/30 shadow-sm' 
                                                    : 'bg-white/5 text-slate-400 border-white/5 hover:text-slate-200'
                                            }`}
                                        >
                                            <span 
                                                className="w-1.5 h-1.5 rounded-full"
                                                style={{ backgroundColor: isActive ? cap.colorHex : 'transparent' }}
                                            />
                                            0{i + 1} {cap.shortTitle.split(' ')[0]}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Center Stage: Interactive Grid */}
                        <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-center min-h-0">
                            
                            {/* Left: Desktop Interactive List */}
                            <div className="hidden lg:flex lg:col-span-6 xl:col-span-7 flex-col justify-center gap-2 xl:gap-3 py-2">
                                {capabilities.map((cap, i) => {
                                    const isActive = activeIdx === i;
                                    return (
                                        <div 
                                            key={cap.id} 
                                            onClick={() => scrollToCap(i)}
                                            onMouseEnter={() => setActiveIdx(i)}
                                            className="cursor-pointer group flex items-center gap-4 py-2 px-3 rounded-xl transition-all duration-300 select-none"
                                            style={{
                                                backgroundColor: isActive ? 'rgba(255, 255, 255, 0.04)' : 'transparent',
                                            }}
                                        >
                                            {/* Step number indicator */}
                                            <span 
                                                className={`text-xs xl:text-sm font-mono font-bold transition-colors duration-300 ${
                                                    isActive ? 'text-white' : 'text-slate-600 group-hover:text-slate-400'
                                                }`}
                                            >
                                                0{i + 1}
                                            </span>

                                            {/* Active accent bar */}
                                            <div 
                                                className="w-1 h-6 xl:h-8 rounded-full transition-all duration-300"
                                                style={{ 
                                                    backgroundColor: isActive ? cap.colorHex : 'rgba(255, 255, 255, 0.1)',
                                                    transform: isActive ? 'scaleY(1.2)' : 'scaleY(0.6)'
                                                }}
                                            />

                                            {/* Capability title */}
                                            <span 
                                                className={`font-black uppercase tracking-tight transition-all duration-300 leading-none ${
                                                    isActive 
                                                        ? 'text-2xl xl:text-3xl text-white translate-x-1 drop-shadow-md' 
                                                        : 'text-lg xl:text-xl text-slate-500 hover:text-slate-300'
                                                }`}
                                            >
                                                {cap.shortTitle}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Right (Desktop) & Center (Mobile): Active Card Box */}
                            <div className="lg:col-span-6 xl:col-span-5 w-full flex items-center justify-center">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeCap.id}
                                        initial={{ opacity: 0, y: 15, scale: 0.98 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: -15, scale: 0.98 }}
                                        transition={{ duration: 0.22, ease: "easeOut" }}
                                        className="w-full"
                                    >
                                        <div className="hidden lg:block">
                                            <CapabilityCard cap={activeCap} isMobile={false} />
                                        </div>
                                        <div className="lg:hidden">
                                            <CapabilityCard cap={activeCap} isMobile={true} />
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

            {/* Why Dromominds Section (Flows smoothly after the locked scroll is completed) */}
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 md:py-32 border-t border-white/10 relative z-10">
                <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
                    <div className="lg:col-span-5">
                        <h3 className="text-[var(--color-brand)] font-bold tracking-widest uppercase text-xs sm:text-sm mb-4">Value Proposition</h3>
                        <h4 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 tracking-tight leading-tight">
                            Execution <br /> Without Excuses.
                        </h4>
                        <p className="text-base md:text-lg text-slate-400 font-light leading-relaxed max-w-md">
                            We bridge the gap between rigorous regulatory compliance and practical operational excellence.
                        </p>
                    </div>
                    <div className="lg:col-span-7">
                        <div className="grid sm:grid-cols-2 gap-x-6 gap-y-8">
                            {[
                                "Risk-Based, Regulatory-Compliant Approach",
                                "Deep Expertise in Pharma, Biotech & Medical Devices",
                                "Alignment with FDA, EU GMP, GAMP 5 & Global Standards",
                                "Audit-Ready Documentation & End-to-End Traceability",
                                "Business-Focused Solutions via Proven Excellence",
                            ].map((benefit, idx) => (
                                <div key={idx} className="flex items-start group">
                                    <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 shadow-sm flex items-center justify-center shrink-0 mr-4 group-hover:bg-[var(--color-brand)]/20 group-hover:border-[var(--color-brand)]/50 transition-colors">
                                        <CheckCircle2 className="w-4 h-4 text-slate-400 group-hover:text-[var(--color-brand)] transition-colors" />
                                    </div>
                                    <p className="text-slate-300 text-sm md:text-base font-medium leading-snug pt-1">{benefit}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

