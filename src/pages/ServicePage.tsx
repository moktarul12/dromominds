import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { PrefetchLink as Link } from '../components/PrefetchLink';
import { servicePagesData } from '../data/pagesData';
import { ArrowRight, ChevronRight, ChevronDown, CheckCircle2, Target, Zap, Shield, BarChart, Server, Layers, FileSignature, Database, GitMerge, Sliders, Cpu, Activity, ShieldCheck, Cloud } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';
import { motion, AnimatePresence } from 'motion/react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { AnimatedStringCounter } from '../components/AnimatedCounter';
import { SEO } from '../components/SEO';
import { sanityClient, urlFor } from '../lib/sanity';
import { FAQSection } from '../components/FAQSection';

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="w-full text-left py-6 font-bold text-gray-900 flex justify-between items-center group"
      >
        <span className="text-xl group-hover:text-[var(--color-brand)] transition-colors">{question}</span>
        <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${isOpen ? 'bg-[var(--color-brand)] text-white' : 'bg-gray-100 text-gray-400 group-hover:bg-gray-200'}`}>
          <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pb-6 text-gray-600 leading-relaxed text-lg pr-12">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const ServicePage = ({ overrideId }: { overrideId?: string }) => {
  const { id: paramId } = useParams<{ id: string }>();
  const id = overrideId || paramId;
  const [sanityPageData, setSanityPageData] = useState<any>(null);
  const pageData = sanityPageData || (id ? servicePagesData[id] : null);

  const [calcSystems, setCalcSystems] = useState(12);
  const [calcDays, setCalcDays] = useState(90);
  const [calcFtes, setCalcFtes] = useState(5);

  useEffect(() => {
    if (id) {
       sanityClient.fetch(`*[_type == "servicePage" && slug.current == $id][0]{
          title,
          subtitle,
          tagline,
          image,
          tags,
          metrics,
          methodology,
          features,
          tabs
       }`, { id })
       .then(data => {
         if (data) setSanityPageData(data);
       })
       .catch(console.error);
    }
  }, [id]);

  const calculatedSavings = Math.round((calcSystems * Math.max(calcDays - 30, 0) * (calcFtes * 60)) * 0.45).toLocaleString();
  const calculatedReduction = Math.round((Math.max(calcDays - 30, 0) / calcDays) * 100);

  const [profilerSystem, setProfilerSystem] = useState('QMS');
  const [profilerHosting, setProfilerHosting] = useState('SaaS');
  const [profilerImpact, setProfilerImpact] = useState('Medium');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!pageData) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-4xl font-bold mb-4 font-sans tracking-tight">Page Not Found</h1>
        <p className="text-gray-500 mb-8 max-w-md">The service or industry you are looking for does not exist.</p>
        <Link to="/" className="bg-[var(--color-brand)] text-white px-6 py-3 rounded-xl hover:bg-[var(--color-brand-hover)] transition font-bold">
          Return to Home
        </Link>
      </div>
    );
  }

  const pageTags = pageData.tags || [];
  const relatedInsights = blogPosts.filter(post => {
    if (pageTags.length > 0) {
      return pageTags.some((tag: string) => post.category === tag || post.title.includes(tag) || post.excerpt.includes(tag));
    }
    return post.category.toLowerCase().includes(pageData.title.toLowerCase().split(' ')[0]);
  }).slice(0, 3);
  
  const insightsToShow = relatedInsights.length > 0 ? relatedInsights : blogPosts.slice(0, 3);

  // Determine standard metrics if not provided
  const metrics = pageData.metrics || [
    { value: "100%", label: "Audit Success Rate" },
    { value: "40%", label: "Faster Deployment" },
    { value: "24/7", label: "Continuous Compliance" }
  ];

  // Methodology steps if not provided
  const methodology = pageData.methodology || [
    { step: "01", title: "Discovery & Assessment", desc: "Deep dive into your current state, identifying regulatory gaps and technological friction points." },
    { step: "02", title: "Strategic Roadmap", desc: "Developing a robust, risk-based operational plan aligned with GxP constraints and business goals." },
    { step: "03", title: "Implementation & Validation", desc: "Execution of the framework with rigorous documentation, ensuring systems are instantly audit-ready." },
    { step: "04", title: "Continuous Assurance", desc: "Ongoing monitoring, training, and managed support to maintain compliance as regulations evolve." }
  ];

  // Dynamically select theme based on capability tagline/id to ensure layout variety
  const theme = 
    id === 'csv' || id === 'cqv' ? 'premium' :
    pageData.tagline === 'Data Insights' ? 'split' :
    pageData.tagline === 'Quality & Content' ? 'clean' :
    pageData.tagline === 'Workflow Automation' ? 'tech' :
    ['premium', 'split', 'clean', 'tech'][id ? id.length % 4 : 0];

  const renderCsaProfiler = () => {
    if (id !== 'csv') return null;

    const gampCategory = profilerSystem === 'Custom App' ? 'Category 5 (Custom)' : 'Category 4 (Configured)';
    
    let scripted = 30;
    let unscripted = 70;
    let timing = 45;
    
    if (profilerImpact === 'High') {
       scripted = 80; unscripted = 20; timing = 25;
    } else if (profilerImpact === 'Low') {
       scripted = 5; unscripted = 95; timing = 75;
    }

    return (
      <section className="py-10 lg:py-24 bg-[#020617] text-white border-t border-slate-800 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[var(--color-brand-dim)]/5 to-transparent blur-3xl mix-blend-overlay"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-blue-900/10 blur-3xl mix-blend-overlay"></div>
        
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-10 sm:mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-800 text-slate-300 font-bold text-xs uppercase tracking-widest rounded mb-4 sm:mb-6 border border-slate-700">
                 <Sliders className="w-4 h-4" /> CSA Strategy Engine
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-5xl font-black text-white tracking-tight leading-tight">
                Interactive Compliance Profiler
              </h3>
              <p className="mt-4 sm:mt-6 text-base sm:text-xl text-slate-400 max-w-3xl mx-auto font-light">
                Dial in your system parameters below to see how our risk-based Computer Software Assurance (CSA) methodology optimizes your validation workload.
              </p>
            </div>

            <div className="grid lg:grid-cols-12 gap-6 lg:gap-12 items-start">
              {/* Controls */}
              <div className="lg:col-span-5 space-y-6 sm:space-y-8 bg-slate-900 border border-slate-800 rounded-3xl p-5 sm:p-8 shadow-xl">
                <div>
                  <label className="block text-xs sm:text-sm font-bold text-slate-400 uppercase tracking-widest mb-3 sm:mb-4">System Classification</label>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {['QMS', 'LIMS', 'ERP', 'eTMF', 'Custom App'].map(sys => (
                      <button 
                        key={sys}
                        onClick={() => setProfilerSystem(sys)}
                        className={`px-3 sm:px-4 py-2 rounded-lg font-medium text-xs sm:text-sm transition-all ${profilerSystem === sys ? 'bg-[var(--color-brand)] text-white shadow-lg shadow-[var(--color-brand)]/20' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}`}
                      >
                        {sys}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-bold text-slate-400 uppercase tracking-widest mb-3 sm:mb-4">Infrastructure Model</label>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {['SaaS', 'PaaS / IaaS', 'On-Premise'].map(host => (
                      <button 
                        key={host}
                        onClick={() => setProfilerHosting(host)}
                        className={`px-3 sm:px-4 py-2 rounded-lg font-medium text-xs sm:text-sm transition-all ${profilerHosting === host ? 'bg-[var(--color-brand)] text-white shadow-lg shadow-[var(--color-brand)]/20' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}`}
                      >
                        {host}
                      </button>
                    ))}
                  </div>
                </div>

              <div>
                <label className="block text-sm font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center justify-between">
                  Patient / Product Impact
                  <span className={`text-xs px-2 py-1 rounded font-bold ${profilerImpact === 'High' ? 'bg-red-500/20 text-red-400' : profilerImpact === 'Medium' ? 'bg-amber-500/20 text-amber-400' : 'bg-emerald-500/20 text-emerald-400'}`}>
                    {profilerImpact} Risk
                  </span>
                </label>
                <input 
                  type="range" min="0" max="2" 
                  value={profilerImpact === 'Low' ? 0 : profilerImpact === 'Medium' ? 1 : 2} 
                  onChange={(e) => {
                    const val = parseInt(e.target.value);
                    setProfilerImpact(val === 0 ? 'Low' : val === 1 ? 'Medium' : 'High');
                  }} 
                  className="w-full h-2 bg-slate-800 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-[var(--color-brand)] [&::-webkit-slider-thumb]:rounded-full" 
                />
                <div className="flex justify-between text-xs text-slate-500 font-bold mt-2 uppercase">
                  <span>Indirect (Low)</span>
                  <span>Direct (High)</span>
                </div>
              </div>
            </div>

            {/* Results Output */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-8 lg:p-10 shadow-2xl relative overflow-hidden text-slate-900 border border-slate-200">
               <div className="absolute top-0 right-0 p-8 opacity-[0.03]">
                  <Activity className="w-64 h-64" />
               </div>
               
               <h4 className="text-2xl font-black text-slate-900 mb-8 border-b border-gray-100 pb-6 relative z-10">Generated Validation Blueprint</h4>
               
               <div className="grid sm:grid-cols-2 gap-8 mb-8 relative z-10">
                 <div>
                   <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 flex items-center gap-2"><Cpu className="w-4 h-4"/> GAMP® 5 Assessment</div>
                   <div className="text-xl font-bold">{gampCategory}</div>
                 </div>
                 <div>
                   <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 flex items-center gap-2"><ShieldCheck className="w-4 h-4"/> Core Deliverable Base</div>
                   <div className="text-xl font-bold">Risk-Based VMP & VSR</div>
                 </div>
               </div>

               <div className="bg-slate-50 rounded-2xl p-6 border border-gray-100 mb-8 relative z-10">
                 <div className="flex justify-between items-end mb-4">
                   <div className="text-sm font-bold text-slate-900">Testing Strategy Allocation</div>
                   <div className="text-xs font-bold text-[var(--color-brand)] bg-red-50 px-2 py-1 rounded">FDA CSA Aligned</div>
                 </div>
                 
                 <div className="h-4 w-full bg-slate-200 rounded-full overflow-hidden flex shadow-inner">
                    <motion.div 
                      key={`script-${scripted}`}
                      initial={{ width: 0 }} 
                      animate={{ width: `${scripted}%` }} 
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className="h-full bg-slate-800"
                    />
                    <motion.div 
                      key={`unscript-${unscripted}`}
                      initial={{ width: 0 }} 
                      animate={{ width: `${unscripted}%` }} 
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className="h-full bg-[var(--color-brand)]"
                    />
                 </div>
                 
                 <div className="flex justify-between mt-3 text-sm font-bold">
                   <span className="text-slate-700 flex items-center gap-2">
                     <span className="w-3 h-3 rounded-full bg-slate-800"></span> {scripted}% Scripted
                   </span>
                   <span className="text-[var(--color-brand)] flex items-center gap-2 justify-end">
                     {unscripted}% Unscripted <span className="w-3 h-3 rounded-full bg-[var(--color-brand)]"></span>
                   </span>
                 </div>
               </div>

               <div className="space-y-4 relative z-10">
                 {profilerHosting === 'SaaS' && (
                   <div className="flex items-start gap-3 bg-blue-50 text-blue-900 p-4 rounded-xl border border-blue-100">
                     <Cloud className="w-5 h-5 flex-shrink-0 mt-0.5 text-blue-600" />
                     <p className="text-sm font-medium"><strong>SaaS Environment:</strong> Vendor Audit required. Qualify SLAs, data isolation, and disaster recovery. Internal validation focuses entirely on business configuration and user access management.</p>
                   </div>
                 )}
                 {profilerHosting === 'PaaS / IaaS' && (
                   <div className="flex items-start gap-3 bg-amber-50 text-amber-900 p-4 rounded-xl border border-amber-100">
                     <Server className="w-5 h-5 flex-shrink-0 mt-0.5 text-amber-600" />
                     <p className="text-sm font-medium"><strong>Cloud Infrastructure:</strong> Infrastructure as Code (IaC) qualification recommended. Implement continuous configuration monitoring to maintain validated state.</p>
                   </div>
                 )}
                 <div className="flex items-center justify-between p-4 bg-emerald-50 text-emerald-900 rounded-xl border border-emerald-100">
                   <div className="text-sm font-bold uppercase tracking-wide">Projected Acceleration</div>
                   <div className="text-2xl font-black text-emerald-600">~{timing}% Faster</div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  const renderHero = () => {
    if (theme === 'premium') {
      return (
        <section className="relative pt-10 lg:pt-32 pb-24 lg:pt-40 lg:pb-32 bg-[#020617] text-white overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-[var(--color-brand-dim)]/20 to-transparent blur-3xl"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
                <div className="inline-flex items-center gap-2 bg-slate-800/50 border border-slate-700 text-slate-300 text-xs font-bold px-3 py-1.5 rounded-md mb-6 uppercase tracking-wider backdrop-blur-sm">
                  <Shield className="w-3.5 h-3.5 text-[var(--color-brand)]" />
                  {pageData.tagline || 'Capability Focus'}
                </div>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-sans font-extrabold mb-6 leading-tight tracking-tight">
                  {pageData.title}
                </h1>
                <p className="text-xl text-slate-400 font-normal mb-10 max-w-xl leading-relaxed">
                  {pageData.subtitle}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                  <Link to="/contact" className="bg-[var(--color-brand)] text-white px-8 py-4 rounded-lg font-bold hover:bg-[var(--color-primary-dark)] transition flex items-center justify-center text-lg w-full sm:w-auto text-center shadow-lg shadow-[var(--color-brand)]/25">
                    Consult an Expert <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                  <a href="#offerings" className="bg-slate-800 text-white px-8 py-4 rounded-lg font-bold hover:bg-slate-700 transition border border-slate-700 flex items-center justify-center text-lg w-full sm:w-auto text-center">
                    Explore Capabilities
                  </a>
                  {id === 'csv' && (
                    <button onClick={() => window.dispatchEvent(new Event('openRoiCalculator'))} className="bg-transparent text-emerald-400 px-8 py-4 rounded-lg font-bold hover:bg-emerald-400/10 transition border border-emerald-400/50 flex items-center justify-center text-lg w-full sm:w-auto text-center group">
                      <BarChart className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" /> ROI Calculator
                    </button>
                  )}
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="lg:ml-auto w-full max-w-lg">
                <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-700 p-8 rounded-2xl shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-10">
                    <BarChart className="w-32 h-32 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-8 border-b border-slate-800 pb-4">Performance Metrics</h3>
                  <div className="space-y-8 relative z-10">
                    {metrics.map((metric: any, i: number) => (
                      <div key={i} className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-xl bg-slate-800 flex items-center justify-center flex-shrink-0 text-[#06B6D4] font-bold text-xl border border-slate-700">
                          <AnimatedStringCounter text={metric.value} delay={i * 0.1} />
                        </div>
                        <div>
                          <div className="text-lg font-bold text-white leading-tight">{metric.label}</div>
                          <div className="text-sm text-slate-400 mt-1">Verified benchmark.</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      );
    }

    if (theme === 'split') {
      return (
        <section className="relative pt-10 lg:pt-24 lg:pt-0 bg-white overflow-hidden flex flex-col lg:flex-row min-h-[85vh]">
          <div className="w-full lg:w-1/2 flex items-center px-6 lg:px-16 py-12 lg:py-24 z-10 bg-white">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className="max-w-2xl mx-auto lg:ml-auto lg:mr-12">
              <div className="inline-block text-[var(--color-brand)] font-black text-sm mb-6 uppercase tracking-widest">{pageData.tagline}</div>
              <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 mb-6 tracking-tight leading-none">{pageData.title}</h1>
              <p className="text-2xl text-slate-500 mb-10 font-light leading-relaxed">{pageData.subtitle}</p>
              
              <div className="flex items-center gap-4 border-t border-gray-100 pt-8 mt-8">
                {metrics.map((metric: any, i: number) => (
                  <div key={i} className="flex-1">
                    <div className="text-3xl font-black text-slate-900">
                      <AnimatedStringCounter text={metric.value} delay={i * 0.1} />
                    </div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mt-1">{metric.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
          <div className="w-full lg:w-1/2 relative min-h-[40vh] lg:min-h-full">
            <div className="absolute inset-0 bg-gradient-to-r from-white to-transparent z-10 w-32 hidden lg:block"></div>
            <img src={pageData.image ? (typeof pageData.image === 'string' ? pageData.image : urlFor(pageData.image).width(1200).url()) : 'https://placehold.co/1200x600'} alt={pageData.title} className="absolute inset-0 w-full h-full object-cover" />
          </div>
        </section>
      );
    }

    if (theme === 'clean') {
      return (
        <section className="relative pt-10 lg:pt-32 pb-24 bg-slate-900 overflow-hidden text-left border-b border-slate-800">
           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none z-0"></div>
           <div className="absolute right-0 top-0 w-1/3 h-full bg-[var(--color-brand)] opacity-10 blur-3xl mix-blend-screen pointer-events-none"></div>
           
           <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center gap-16">
            <motion.div className="flex-1" initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-800/80 text-[#06B6D4] text-xs font-bold rounded-md mb-6 uppercase tracking-wider border border-slate-700 backdrop-blur-sm">
                <Layers className="w-4 h-4" />
                {pageData.tagline || 'Essential Service'}
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-sans font-black text-white mb-6 tracking-tight leading-tight">{pageData.title}</h1>
              <p className="text-2xl text-slate-300 mb-10 font-light leading-relaxed max-w-2xl">{pageData.subtitle}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/contact" className="bg-[var(--color-brand)] text-white px-8 py-4 rounded-lg font-bold hover:bg-[#07162B] transition flex items-center justify-center text-lg shadow-lg">
                    Speak With Advisory <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
              </div>
            </motion.div>
            
            <motion.div className="flex-1 w-full" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
              <div className="bg-slate-800/60 rounded-3xl p-8 lg:p-12 shadow-2xl border border-slate-700 backdrop-blur-xl grid grid-cols-2 gap-4 md:gap-8 relative overflow-hidden">
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[var(--color-brand)] rounded-full blur-[80px] opacity-30"></div>
                {metrics.map((metric: any, i: number) => (
                  <div key={i} className={`flex flex-col ${i === 0 ? 'col-span-2 border-b border-slate-700 pb-8 mb-2' : ''}`}>
                    <div className="text-5xl font-black text-white mb-2 tracking-tighter">
                      <AnimatedStringCounter text={metric.value} delay={i * 0.1} />
                    </div>
                    <div className="text-xs font-bold text-[#06B6D4] uppercase tracking-widest leading-relaxed">{metric.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      );
    }

    // Tech Theme
    return (
      <section className="relative pt-10 lg:pt-32 pb-24 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 mix-blend-overlay">
          <img src={pageData.image ? (typeof pageData.image === 'string' ? pageData.image : urlFor(pageData.image).width(1200).url()) : 'https://placehold.co/1200x600'} className="w-full h-full object-cover grayscale" />
          <div className="absolute inset-0 bg-[var(--color-brand)] mix-blend-multiply opacity-50"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
            <div className="inline-block border border-[#06B6D4]/30 bg-[#06B6D4]/10 text-[#06B6D4] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
              {pageData.tagline}
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter uppercase">
              {pageData.title}
            </h1>
            <p className="text-2xl text-slate-300 font-light max-w-3xl mx-auto mb-16">
              {pageData.subtitle}
            </p>
            <div className="flex justify-center gap-8">
              {metrics.map((metric: any, i: number) => (
                <div key={i} className="text-center">
                  <div className="text-5xl font-black text-white mb-2">
                    <AnimatedStringCounter text={metric.value} delay={i * 0.1} />
                  </div>
                  <div className="text-xs text-[#06B6D4] font-bold uppercase tracking-widest">{metric.label}</div>
                </div>
              ))}
            </div>
        </div>
      </section>
    );
  };

  const renderOfferings = () => {
    if (!pageData.tabs && !pageData.features) return null;

    const itemsToRender = pageData.tabs || pageData.features || [];

    // If it's a legacy page with 'features' instead of tabs, we should render them distinctly if the theme doesn't fit well.
    // However, we can map `features` to a similar shape.
    if (pageData.features && !pageData.tabs) {
       return (
        <section id="offerings" className="py-10 lg:py-24 bg-gray-50 border-t border-gray-200">
           <div className="px-6 max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-sm font-bold text-[var(--color-brand)] uppercase tracking-widest mb-3">Capabilities</h2>
              <h3 className="text-3xl md:text-5xl font-bold mb-10 text-gray-900 tracking-tight">Key Offerings</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
              {pageData.features.map((feature: any) => (
                <div key={feature.id || feature.title} className="bg-white p-6 md:p-10 rounded-2xl shadow-sm border border-gray-200 hover:border-[var(--color-brand)] hover:shadow-lg transition-all duration-300 group">
                  <div className="w-14 h-14 bg-red-50 group-hover:bg-[var(--color-brand)] group-hover:text-white rounded-xl flex items-center justify-center mb-8 text-[var(--color-brand)] transition-colors duration-300">
                    {feature.icon ? <feature.icon className="w-7 h-7" /> : <Target className="w-7 h-7" />}
                  </div>
                  <h4 className="font-bold text-2xl text-gray-900 mb-4 tracking-tight">{feature.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{feature.desc || feature.content}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
    }

    if (theme === 'premium' || theme === 'tech') {
      return (
        <section id="offerings" className="py-10 lg:py-24 bg-gray-50 border-t border-gray-200 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
             <div className="text-center mb-24">
              <h2 className="text-sm font-bold text-[var(--color-brand)] uppercase tracking-widest mb-3">Core Capabilities</h2>
              <h3 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">What we bring to the table.</h3>
            </div>
            
            <div className="space-y-24 md:space-y-32">
              {itemsToRender.map((tab: any, index: number) => (
                <div key={index} className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-20`}>
                  <motion.div 
                    initial={{ opacity: 0, x: index % 2 !== 0 ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-20%" }}
                    transition={{ duration: 0.6 }}
                    className="w-full lg:w-1/2"
                  >
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] group">
                      <div className="absolute inset-0 bg-[var(--color-brand)]/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                      <img loading="lazy" src={tab.image ? (typeof tab.image === 'string' ? tab.image : urlFor(tab.image).width(800).url()) : (pageData.image ? (typeof pageData.image === 'string' ? pageData.image : urlFor(pageData.image).width(800).url()) : 'https://placehold.co/800x600')} alt={tab.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                    </div>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="w-full lg:w-1/2"
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-red-100 text-[var(--color-brand)] mb-6">
                      <Layers className="w-6 h-6" />
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight">{tab.title}</h3>
                    <p className="text-lg text-gray-600 leading-relaxed mb-6">
                      {tab.content || tab.desc}
                    </p>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
    }

    if (theme === 'split') {
      return (
        <section id="offerings" className="py-10 lg:py-24 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="mb-16">
              <h2 className="text-sm font-bold text-[var(--color-brand)] uppercase tracking-widest mb-3">Capabilities</h2>
              <h3 className="text-4xl md:text-5xl font-black text-white tracking-tight">Technical Offerings</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
              {itemsToRender.map((tab: any, index: number) => (
                <div key={index} className="bg-slate-800 rounded-2xl p-6 md:p-8 border border-slate-700 hover:border-[var(--color-brand)] transition-colors">
                  <div className="w-12 h-12 bg-slate-700 rounded-lg mb-6 flex items-center justify-center">
                    <Target className="w-6 h-6 text-[var(--color-brand)]" />
                  </div>
                  <h4 className="text-2xl font-bold mb-4">{tab.title}</h4>
                  <p className="text-slate-400 font-light leading-relaxed">{tab.content || tab.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
    }

    return (
      <section id="offerings" className="py-10 lg:py-24 bg-slate-50 border-t border-slate-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/3">
              <div className="sticky top-32">
                <h2 className="text-sm font-bold text-[var(--color-brand)] uppercase tracking-widest mb-3">Strategic Execution</h2>
                <h3 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-6">Our Engineered Solutions</h3>
                <p className="text-lg text-slate-600 mb-10 leading-relaxed font-light">
                  We deploy validated frameworks to solve complex challenges. Our methodology eliminates redundancy while strictly adhering to global mandates.
                </p>
                <div className="hidden lg:block w-24 h-1 bg-[var(--color-brand)] rounded-full"></div>
              </div>
            </div>
            
            <div className="lg:w-2/3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                {itemsToRender.map((tab: any, index: number) => (
                  <div key={index} className="flex flex-col gap-6 p-6 md:p-8 rounded-3xl bg-white shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 group">
                    <div className="w-16 h-16 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm flex items-center justify-center flex-shrink-0 text-[var(--color-brand)] group-hover:bg-[var(--color-brand)] group-hover:text-white transition-colors duration-400">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-slate-900 mb-3 leading-snug">{tab.title}</h4>
                      <p className="text-slate-600 leading-relaxed font-medium text-sm">{tab.content || tab.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  const renderCsvDeepDive = () => {
    if (id !== 'csv') return null;

    return (
      <>
        {/* Compliance Domains Matrix */}
        <section className="py-10 lg:py-24 bg-slate-50 border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="mb-16">
               <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-50 text-[var(--color-brand)] font-bold text-xs uppercase tracking-widest rounded mb-6">
                 <Shield className="w-4 h-4" /> FDA & EMA Compliance Mapping
               </div>
               <h3 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">Regulatory Standards We Master</h3>
               <p className="mt-6 text-xl text-slate-600 max-w-3xl">We maintain comprehensive requirement libraries natively mapping to the following global regulations, engineering systems to be unconditionally audit-ready.</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {[
                { title: "FDA 21 CFR Part 11", desc: "Rigorous enforcement of electronic records, electronic signatures, audit trails, and strict chronological access controls." },
                { title: "EU Annex 11", desc: "Expert computerised systems governance, continuous risk management, and formal lifecycle documentation for EMA." },
                { title: "GAMP 5 (Second Edition)", desc: "A computational Risk-Based Approach to Compliant GxP Computerized Systems, focusing on modern CSA." },
                { title: "ALCOA+ Data Integrity", desc: "Ensuring all data is Attributable, Legible, Contemporaneous, Original, and Accurate with full traceability." },
                { title: "ISO 13485:2016", desc: "Advanced software validation requirements for Quality Management Systems in medical devices." },
                { title: "MHRA Data Integrity", desc: "Expectations for complex data governance systems, ensuring bulletproof reliability across enterprise IT." },
              ].map((item, i) => (
                <div key={i} className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-slate-300 transition-colors hover:shadow-lg group">
                  <div className="flex flex-col gap-4 mb-4">
                     <div className="w-12 h-12 rounded-xl bg-slate-50 border border-gray-100 flex items-center justify-center text-[var(--color-brand)] group-hover:bg-[var(--color-brand)] group-hover:text-white transition-colors">
                       <FileSignature className="w-6 h-6" />
                     </div>
                     <h4 className="font-bold text-2xl text-slate-900">{item.title}</h4>
                  </div>
                  <p className="text-slate-600 leading-relaxed font-medium">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Validation Lifecycle V-Model Concept with highly technical look */}
        <section className="py-10 lg:py-24 bg-slate-900 text-white overflow-hidden relative">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:16px_16px]"></div>
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-800 text-slate-300 border border-slate-700 font-bold text-xs uppercase tracking-widest rounded mb-6">
                  <GitMerge className="w-4 h-4" /> V-Model Architecture
                </div>
                <h3 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-6">
                  Risk-Based Validation <br/><span className="text-[#06B6D4]">Lifecycle Matrix</span>
                </h3>
                <p className="text-xl text-slate-400 mb-10 leading-relaxed">
                  We don't just execute scripts. We engineer end-to-end traceability frameworks aligning precise functional specifications directly to targeted IQ/OQ/PQ protocols, eliminating compliance gaps.
                </p>

                <div className="bg-slate-800/50 rounded-2xl border border-slate-700 p-6 md:p-8 shadow-2xl">
                  <div className="flex items-center gap-4 mb-6 pb-6 border-b border-slate-700">
                    <Database className="w-8 h-8 text-[#06B6D4]" />
                    <div>
                      <h4 className="text-xl font-bold">Dynamic Traceability Matrix (TM)</h4>
                      <p className="text-sm text-slate-400">Continuous bidirectional mapping</p>
                    </div>
                  </div>
                  <ul className="space-y-4 font-mono text-sm text-slate-300">
                    <li className="flex justify-between items-center"><span className="text-slate-500">USER_REQ (URS-101)</span> <ArrowRight className="w-4 h-4 text-slate-600"/> <span className="text-white">FUNC_SPEC (FS-204)</span></li>
                    <li className="flex justify-between items-center"><span className="text-slate-500">SYS_CONFIG (CS-312)</span> <ArrowRight className="w-4 h-4 text-slate-600"/> <span className="text-[#06B6D4]">OQ_SCRIPT (OQ-TF-01)</span></li>
                    <li className="flex justify-between items-center"><span className="text-slate-500">RISK_CNTRL (RA-405)</span> <ArrowRight className="w-4 h-4 text-slate-600"/> <span className="text-[#06B6D4]">PQ_SCRIPT (PQ-TF-08)</span></li>
                  </ul>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative h-full flex flex-col justify-center gap-10 pl-10 border-l border-slate-800 ml-4 lg:ml-8 py-8">
                 <div className="relative">
                   <div className="absolute -left-[51px] top-2 w-5 h-5 bg-slate-800 rounded-full border-4 border-slate-900 flex items-center justify-center">
                     <div className="w-2 h-2 bg-slate-500 rounded-full"></div>
                   </div>
                   <h5 className="font-bold text-2xl text-white">1. Master Planning & Profile</h5>
                   <p className="text-slate-400 mt-2 text-lg">Establish Validation Master Plan (VMP). Execute algorithmic GAMP 5 Risk Assessment.</p>
                 </div>
                 <div className="relative">
                   <div className="absolute -left-[51px] top-2 w-5 h-5 bg-slate-800 rounded-full border-4 border-slate-900 flex items-center justify-center">
                     <div className="w-2 h-2 bg-slate-500 rounded-full"></div>
                   </div>
                   <h5 className="font-bold text-2xl text-white">2. Technical Specifications</h5>
                   <p className="text-slate-400 mt-2 text-lg">Deconstruct business needs into strict URS, FRS, and CS. Embed 21 CFR Part 11 operational gates.</p>
                 </div>
                 <div className="relative">
                   <div className="absolute -left-[51px] top-2 w-5 h-5 bg-slate-800 rounded-full border-4 border-slate-900 flex items-center justify-center">
                     <div className="w-2 h-2 bg-[#06B6D4] rounded-full"></div>
                   </div>
                   <h5 className="font-bold text-2xl text-[#06B6D4]">3. Qualification Execution</h5>
                   <p className="text-slate-400 mt-2 text-lg">Execute unscripted checks for low-risk vectors (CSA) and rigorous scripts for critical data integrity pathways.</p>
                 </div>
                 <div className="relative">
                   <div className="absolute -left-[51px] top-2 w-5 h-5 bg-[#06B6D4] shadow-[0_0_15px_rgba(6,182,212,0.5)] rounded-full border-4 border-slate-900 flex items-center justify-center">
                   </div>
                   <h5 className="font-bold text-2xl text-white">4. Validation Summary (VSR)</h5>
                   <p className="text-slate-400 mt-2 text-lg">Provide cryptographically proven test executions and transition to continuous Quality Management.</p>
                 </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Enterprise Experience Metrics Grid */}
        <section className="py-10 lg:py-24 bg-[#020617] text-white border-t border-slate-800 text-center relative overflow-hidden">
           <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#06B6D4]/10 to-transparent blur-3xl mix-blend-overlay"></div>
           <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
              <h3 className="text-sm font-bold text-[#06B6D4] uppercase tracking-widest mb-4">Enterprise Domain Expertise</h3>
              <h3 className="text-3xl md:text-5xl font-bold mb-16 tracking-tight">Systems Successfully Qualified</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                 {[
                   { name: "ERP Systems", sys: "Enterprise ERP, Oracle" },
                   { name: "eQMS", sys: "Veeva Vault, TrackWise" },
                   { name: "LIMS & ELN", sys: "LabVantage, Benchling" },
                   { name: "Clinical (eTMF)", sys: "Medidata, Veeva" },
                   { name: "MES & DCS", sys: "Syncade, DeltaV" },
                   { name: "Data Warehouses", sys: "Snowflake, Databricks" },
                   { name: "Infrastructure", sys: "AWS, Azure IaaS" },
                   { name: "BI / Analytics", sys: "Tableau, PowerBI" }
                 ].map((mod, i) => (
                   <div key={i} className="bg-slate-900/80 backdrop-blur border border-slate-800 rounded-xl p-8 hover:border-slate-600 hover:bg-slate-900 transition-all flex flex-col items-center justify-center group cursor-default">
                      <div className="text-[#06B6D4] font-black text-xl mb-3 group-hover:scale-105 transition-transform text-center">{mod.name}</div>
                      <div className="text-slate-500 font-mono text-sm tracking-wide text-center">{mod.sys}</div>
                   </div>
                 ))}
              </div>
            </div>
        </section>
      </>
    );
  };

  const renderMethodology = () => {
    if (theme === 'premium' || theme === 'split') {
      return (
        <section className="py-10 lg:py-24 px-6 lg:px-8 bg-[#020617] text-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20 max-w-3xl mx-auto">
              <h2 className="text-sm font-bold text-[var(--color-brand)] uppercase tracking-widest mb-4">Our Methodology</h2>
              <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">How we execute.</h3>
              <p className="text-xl text-slate-400 font-normal">A systematic, risk-aligned approach ensuring every milestone delivers verifiable compliance and operational value.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
              {methodology.map((col: any, idx: number) => (
                <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.1 }} className="bg-slate-900 border border-slate-800 rounded-2xl p-8 relative overflow-hidden group hover:border-[var(--color-brand)] transition-colors">
                  <div className="text-[120px] font-black text-slate-800/30 absolute -top-10 -right-4 z-0 pointer-events-none select-none group-hover:text-[var(--color-brand)]/10 transition-colors">
                    {col.step}
                  </div>
                  <div className="relative z-10">
                    <h4 className="text-xl font-bold text-white mb-4 tracking-tight">{col.title}</h4>
                    <p className="text-slate-400 leading-relaxed">{col.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      );
    }
    
    // Light methodology
    return (
      <section className="py-10 lg:py-24 px-6 lg:px-8 bg-slate-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-sm font-bold text-[var(--color-brand)] uppercase tracking-widest mb-4">Process Framework</h2>
            <h3 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">The Deployment Cycle</h3>
          </div>
          <div className="space-y-6">
            {methodology.map((col: any, idx: number) => (
              <div key={idx} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col md:flex-row gap-8 items-start hover:border-[var(--color-brand)]/30 transition-colors">
                <div className="text-6xl font-black text-[var(--color-brand)]/20 leading-none">{col.step}</div>
                <div>
                  <h4 className="text-2xl font-bold text-slate-900 mb-3">{col.title}</h4>
                  <p className="text-lg text-slate-600 font-light max-w-4xl">{col.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  return (
    <div className="bg-white min-h-screen font-sans">
      {pageData && (
        <SEO 
          title={pageData.title}
          description={pageData.subtitle}
        />
      )}
      {renderHero()}

      {/* Executive Overview - Clean text block */}
      <section className="py-10 lg:py-24 px-6 lg:px-8 bg-white relative border-b border-gray-100 overflow-hidden">
        {id === 'csv' ? (
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-50 text-[var(--color-brand)] font-bold text-xs uppercase tracking-widest rounded mb-6 border border-red-100">
                <Shield className="w-4 h-4" /> Flawless Audit Record
              </div>
               <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight tracking-tight">
                 We engineer compliance systems that <span className="text-[var(--color-brand)]">never fail</span> an audit.
               </h2>
               <p className="text-xl text-slate-600 leading-relaxed font-light mb-10">
                 When patient safety and global supply chains are on the line, you cannot afford guesswork. We have successfully defended massive GxP systems against the FDA, EMA, and MHRA—transforming validation from an operational bottleneck into a strategic advantage.
               </p>
               
               <div className="grid grid-cols-2 gap-8 pt-10 border-t border-gray-100">
                  <div>
                    <div className="flex items-baseline gap-1 mb-2">
                      <div className="text-5xl font-black text-slate-900">
                        <AnimatedStringCounter text="100" />
                      </div>
                      <div className="text-3xl font-bold text-[var(--color-brand)]">%</div>
                    </div>
                    <div className="text-sm font-bold text-slate-500 uppercase tracking-widest">Audit Success Rate</div>
                  </div>
                  <div>
                    <div className="text-5xl font-black text-slate-900 mb-2">Zero</div>
                    <div className="text-sm font-bold text-slate-500 uppercase tracking-widest">Warning Letters / 483s</div>
                  </div>
               </div>
            </div>

            <div className="relative">
               <div className="absolute inset-0 bg-slate-900 rounded-3xl transform rotate-2 scale-105 opacity-5"></div>
               <div className="bg-slate-900 rounded-3xl p-6 lg:p-12 text-white relative shadow-2xl overflow-hidden border border-slate-800">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-brand)]/20 rounded-full blur-3xl mix-blend-overlay"></div>
                  <h3 className="text-xl font-bold mb-10 text-slate-200">Trusted by Global Leaders to Validate:</h3>
                  <ul className="space-y-8">
                    <li className="flex items-start gap-4 group">
                      <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center flex-shrink-0 group-hover:bg-[#06B6D4] transition-colors border border-slate-700">
                        <Database className="w-6 h-6 text-[#06B6D4] group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <h4 className="font-bold text-xl text-white mb-1">Tier-1 Cloud ERPs</h4>
                        <p className="text-slate-400 text-sm leading-relaxed">Enterprise ERP & Oracle Cloud powering critical global supply chains and batch releases.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4 group">
                      <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center flex-shrink-0 group-hover:bg-[#06B6D4] transition-colors border border-slate-700">
                        <Layers className="w-6 h-6 text-[#06B6D4] group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <h4 className="font-bold text-xl text-white mb-1">Clinical Informatics</h4>
                        <p className="text-slate-400 text-sm leading-relaxed">Rigorous qualification of Veeva Vault, eTMF, EDC, and multi-tenant laboratory LIMS.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4 group">
                      <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center flex-shrink-0 group-hover:bg-[#06B6D4] transition-colors border border-slate-700">
                        <Zap className="w-6 h-6 text-[#06B6D4] group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <h4 className="font-bold text-xl text-white mb-1">Automated Delivery Pipelines</h4>
                        <p className="text-slate-400 text-sm leading-relaxed">Continuous assurance and Infrastructure as Code (IaC) qualification for rapid, compliant releases.</p>
                      </div>
                    </li>
                  </ul>
               </div>
            </div>
          </div>
        ) : (
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-slate-50 border border-slate-200 rounded-full mb-8 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[var(--color-brand)] animate-pulse"></span>
              <span className="text-xs font-bold text-slate-700 uppercase tracking-widest">
                Executive Overview
              </span>
            </div>
            <h3 className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-10 leading-tight tracking-tight">
              Mastering Compliance. <br/><span className="text-slate-400">Driving Innovation.</span>
            </h3>
            <div className="text-xl md:text-2xl text-slate-600 leading-relaxed font-light mx-auto max-w-4xl text-justify md:text-center">
              {typeof pageData.content === 'string' ? (
                <p>{pageData.content}</p>
              ) : (
                pageData.content
              )}
            </div>
          </div>
        )}
      </section>

      {renderCsaProfiler()}

      {renderOfferings()}

      {renderCsvDeepDive()}



      {/* Case Studies / Proven Results */}
      {pageData.caseStudies && pageData.caseStudies.length > 0 && (
        <section className="py-10 lg:py-24 bg-white relative border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
             <div className="text-center mb-20 max-w-3xl mx-auto">
              <h2 className="text-sm font-bold text-[var(--color-brand)] uppercase tracking-widest mb-4">Proven Results</h2>
              <h3 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-gray-900">What we've done.</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {pageData.caseStudies.map((study: any, idx: number) => (
                <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.1 }} className="bg-gray-50 rounded-2xl p-8 lg:p-12 border border-gray-200">
                  <div className="inline-flex items-center gap-2 bg-slate-900 text-white text-xs font-bold px-3 py-1.5 rounded mb-8 uppercase tracking-wider">
                    Client: {study.client}
                  </div>
                  <div className="space-y-8">
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2 tracking-tight"><Target className="w-5 h-5 text-gray-500" /> The Challenge</h4>
                      <p className="text-gray-600 leading-relaxed">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2 tracking-tight"><Zap className="w-5 h-5 text-[var(--color-brand)]" /> The Solution</h4>
                      <p className="text-gray-600 leading-relaxed">{study.solution}</p>
                    </div>
                    <div className="bg-white rounded-xl p-6 border border-gray-200">
                      <h4 className="text-lg font-bold text-[var(--color-brand)] mb-2 flex items-center gap-2 tracking-tight"><CheckCircle2 className="w-5 h-5" /> The Result</h4>
                      <p className="text-gray-900 font-medium">{study.result}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {renderMethodology()}

      {/* FAQ Section */}
      <div className="relative z-10 bg-white">
        <FAQSection 
          title={`FAQs on ${pageData.title}`}
          subtitle="Explore our comprehensive compliance and validation expertise."
          faqs={pageData.faqs && pageData.faqs.length > 0 ? pageData.faqs : [
            {
              question: `Why choose Dromominds for ${pageData.title}?`,
              answer: `Our dedicated experts leverage modern methodologies like Computer Software Assurance (CSA) to accelerate your ${pageData.title} initiatives. We replace slow, paper-based routines with automated, risk-based frameworks that drastically reduce go-live times and compliance overhead.`
            },
            {
              question: `Are your ${pageData.title} services compliant with FDA and EU regulations?`,
              answer: "Yes, our validation pipelines and engineering protocols are natively mapped to FDA 21 CFR Part 11, EU Annex 11, ISO standards, and GAMP 5 Second Edition. We guarantee audit-readiness across global jurisdictions."
            },
            {
              question: "How do you handle data integrity and ALCOA+?",
              answer: "We perform deep infrastructural reviews to ensure non-repudiation and lifecycle governance across digital and physical data records. Our processes are designed to strictly enforce ALCOA+ principles and eliminate vulnerabilities."
            },
            {
              question: "Do you support cloud (SaaS/PaaS) environments?",
              answer: "Absolutely. We specialize in providing end-to-end continuous validation for multi-tenant cloud environments like Veeva and Salesforce, ensuring a validated state even through rapid vendor release cycles."
            },
            {
              question: "What is the typical timeline for an engagement?",
              answer: "Timelines vary depending on project complexity and scope. However, by utilizing our proprietary continuous validation pipelines and CSA methodology, we typically reduce overall validation and execution overhead by up to 40% compared to legacy approaches."
            }
          ]}
        />
      </div>

      {/* Funnel-Driven Call To Action */}
      <section className="py-10 lg:py-24 px-6 bg-slate-50 border-t border-gray-200">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            
            {/* Primary Conversion (High-Intent Booking) */}
            <div className="bg-slate-900 rounded-3xl p-6 lg:p-14 text-white relative overflow-hidden shadow-2xl border border-slate-800 flex flex-col justify-between">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px]"></div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-brand)]/20 rounded-full blur-3xl mix-blend-overlay"></div>
              
              <div className="relative z-10 hover:-translate-y-1 transition-transform duration-300">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[var(--color-brand)]/20 text-[var(--color-brand)] font-bold text-xs uppercase tracking-widest rounded mb-6 border border-[var(--color-brand)]/30">
                  <Shield className="w-4 h-4" /> Strategic Assessment
                </div>
                <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight tracking-tight">Stop letting compliance slow down innovation.</h2>
                <p className="text-slate-300 mb-10 text-lg font-light leading-relaxed">
                  Book a 45-minute architectural review with our principal consultants. We'll analyze your {pageData.title.toLowerCase()} strategy, identify high-ROI optimization opportunities, and provide a master-level roadmap to accelerate deployment safely.
                </p>
              </div>
              
              <div className="relative z-10 mt-auto pt-8 border-t border-slate-800">
                <Link to="/contact" className="w-full bg-[var(--color-brand)] text-white px-8 py-5 rounded-xl font-bold hover:bg-[#07162B] transition-all duration-300 flex items-center justify-between text-lg group shadow-lg shadow-[var(--color-brand)]/20">
                  Schedule Your Executive Audit <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </Link>
                <div className="mt-4 flex items-center justify-center gap-2 text-sm text-slate-400 font-medium">
                   <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Direct access to senior architects. No initial commitment.
                </div>
              </div>
            </div>

            {/* Secondary Conversion (Low-Intent Lead Capture) */}
            <div className="bg-white rounded-3xl p-6 lg:p-14 shadow-xl border border-gray-100 flex flex-col justify-between relative overflow-hidden group hover:border-[var(--color-brand)]/30 transition-colors">
               <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity">
                  <FileSignature className="w-48 h-48 text-slate-900" />
               </div>
               
               <div className="relative z-10 hover:-translate-y-1 transition-transform duration-300">
                 <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 text-slate-700 font-bold text-xs uppercase tracking-widest rounded mb-6 border border-gray-200">
                    <Database className="w-4 h-4" /> Executive Resource
                 </div>
                 <h3 className="text-2xl md:text-4xl font-black text-slate-900 mb-6 tracking-tight">Not ready to engage? <br/>Get the playbook.</h3>
                 <p className="text-slate-600 mb-8 text-lg leading-relaxed font-light">
                   Get our "2026 Management Blueprint for {pageData.title}" detailing precisely how we engineer scalable frameworks, automate validation, and slash operational overhead.
                 </p>
                 
                 <ul className="space-y-4 mb-10">
                   {['Proprietary architectural blueprints', 'ROI and resource allocation models', 'Risk-calibrated compliance matrices'].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-700 font-medium">
                        <CheckCircle2 className="w-5 h-5 text-[var(--color-brand)] flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                   ))}
                 </ul>
               </div>

               <div className="relative z-10 mt-auto pt-8 border-t border-gray-100">
                 <form className="flex flex-col sm:flex-row gap-3">
                   <input type="email" placeholder="Enter your corporate email" className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 focus:outline-none focus:border-[var(--color-brand)] focus:ring-1 focus:ring-[var(--color-brand)] transition-all font-medium text-slate-900 placeholder:text-slate-400" />
                   <button type="button" className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-800 transition-colors whitespace-nowrap overflow-hidden relative group/btn shadow-md">
                     <span className="relative z-10 flex items-center gap-2">Get Blueprint <ArrowRight className="w-4 h-4" /></span>
                     <div className="absolute inset-0 bg-white/10 transform -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-500"></div>
                   </button>
                 </form>
                 <div className="mt-4 text-xs text-slate-400 text-center font-medium">
                   We respect executive privacy. Strictly zero spam. Unsubscribe anytime.
                 </div>
               </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};


