import React, { useState } from 'react';
import { Target, Activity, Zap, ShieldCheck, ArrowRight, CheckCircle2, Award, FileCheck, TrendingUp, BarChart3, Clock, Lock, Terminal, Cpu, Database, Network } from 'lucide-react';
import { PrefetchLink as Link } from '../components/PrefetchLink';
import { motion, AnimatePresence } from 'motion/react';
import { AnimatedCounter } from '../components/AnimatedCounter';
import { SEO } from '../components/SEO';

import { FAQSection } from '../components/FAQSection';

export const AboutPage = () => {
  const [activeTab, setActiveTab] = useState(0);

  const containerVars = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };
  
  const itemVars = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const insightsTabs = [
    {
      id: "01",
      title: "Computerized System Validation",
      icon: <Terminal className="w-5 h-5" />,
      tagline: "CSV & CSA Mastery",
      content: (
        <div className="space-y-6">
          <p className="text-slate-300 leading-relaxed text-lg">
            We transition your organization from a paper-bound validation approach to agile, automated compliance frameworks. Leveraging the latest FDA CSA principles, we optimize testing to focus on high-risk aspects while streamlining documentation.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            <div className="p-4 sm:p-6 bg-slate-800/40 border border-slate-700/60 rounded-xl">
               <div className="text-sky-400 text-xs font-bold tracking-wider uppercase mb-2 sm:mb-3">Cloud Validation</div>
               <h4 className="text-white font-bold text-base sm:text-lg mb-2">SaaS & PaaS Compliance</h4>
               <p className="text-slate-400 text-sm sm:text-base leading-relaxed">End-to-end validation for multi-tenant environments (Veeva, Salesforce, Enterprise ERP) ensuring continuous states of compliance.</p>
            </div>
            <div className="p-4 sm:p-6 bg-slate-800/40 border border-slate-700/60 rounded-xl">
               <div className="text-sky-400 text-xs font-bold tracking-wider uppercase mb-2 sm:mb-3">CSA Adoption</div>
               <h4 className="text-white font-bold text-base sm:text-lg mb-2">Risk-Based Testing</h4>
               <p className="text-slate-400 text-sm sm:text-base leading-relaxed">Focusing your resources on critical thinking and unscripted testing to reduce overall validation overhead by up to 40%.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "02",
      title: "Equipment Qualification",
      icon: <Cpu className="w-5 h-5" />,
      tagline: "Facility & Utility Readiness",
      content: (
        <div className="space-y-6">
          <p className="text-slate-300 leading-relaxed text-lg">
            Comprehensive qualification of manufacturing equipment, laboratory instruments, and critical utilities. We ensure your physical infrastructure operates precisely as intended, adhering strictly to current Good Manufacturing Practices (cGMP).
          </p>
          <ul className="space-y-4">
            {[
              { title: "IQ/OQ/PQ Execution", desc: "Rigorous protocol generation and execution for manufacturing and lab equipment." },
              { title: "Thermal Mapping", desc: "Validation of autoclaves, stability chambers, and cold chain storage environments." },
              { title: "Facility Utilities", desc: "Qualification of HVAC, purified water systems, and cleanroom environmental monitoring." }
            ].map((feature, idx) => (
              <li key={idx} className="flex gap-5 items-start p-4 bg-slate-800/40 rounded-xl border border-slate-700/60">
                 <div className="w-12 h-12 rounded-lg bg-sky-500/10 text-sky-400 flex items-center justify-center shrink-0 border border-sky-500/30">
                   <Target className="w-6 h-6" />
                 </div>
                 <div>
                   <span className="text-white font-bold block text-lg mb-1">{feature.title}</span>
                   <span className="text-slate-400 text-base leading-relaxed">{feature.desc}</span>
                 </div>
              </li>
            ))}
          </ul>
        </div>
      )
    },
    {
      id: "03",
      title: "QMS & Regulatory",
      icon: <Target className="w-5 h-5" />,
      tagline: "Quality Lifecycle Management",
      content: (
        <div className="space-y-8">
          <p className="text-slate-300 leading-relaxed text-lg">
            We design, implement, and remediate comprehensive Quality Management Systems that withstand rigorous global scrutiny. From ISO 13485 alignment to 21 CFR 820 compliance, we anchor your operations in unwavering quality.
          </p>
          <div className="bg-gradient-to-r from-sky-950/40 via-blue-950/20 to-transparent p-6 md:p-8 rounded-2xl border-l-4 border-sky-400 border border-slate-800">
             <h4 className="text-white font-bold text-xl tracking-tight mb-4">Core Regulatory Capabilities</h4>
             <p className="text-slate-300 text-base leading-relaxed mb-6">
               We provide end-to-end strategic oversight of SOP generation, CAPA management, variation filings, and pre-market approval strategies mapping across global jurisdictions.
             </p>
             <div className="flex flex-wrap gap-4">
               <span className="text-xs font-bold text-sky-300 border border-sky-400/30 bg-sky-500/10 px-4 py-2 rounded-lg uppercase tracking-wider">CAPA Resolution</span>
               <span className="text-xs font-bold text-sky-300 border border-sky-400/30 bg-sky-500/10 px-4 py-2 rounded-lg uppercase tracking-wider">SOP Harmonization</span>
               <span className="text-xs font-bold text-sky-300 border border-sky-400/30 bg-sky-500/10 px-4 py-2 rounded-lg uppercase tracking-wider">eQMS Implementation</span>
             </div>
          </div>
        </div>
      )
    },
    {
      id: "04",
      title: "Data Integrity",
      icon: <Database className="w-5 h-5" />,
      tagline: "ALCOA+ Hardening",
      content: (
        <div className="space-y-8">
          <p className="text-slate-300 leading-relaxed text-lg">
            Data integrity defines systemic trust. We perform deep infrastructural reviews to ensure non-repudiation and lifecycle governance across digital and physical data records according to the ALCOA+ framework.
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[ "Audit Trails", "Role Architecture", "Metadata Mappings", "Archival Strategies" ].map((sys, idx) => (
              <div key={idx} className="bg-slate-800/50 border border-slate-700/70 p-5 rounded-xl text-center hover:border-sky-500/40 hover:bg-slate-800 transition-all">
                <span className="text-white font-semibold text-sm">{sys}</span>
              </div>
            ))}
          </div>
          <p className="text-slate-400 text-lg italic leading-relaxed py-4 border-t border-slate-800 mt-6">
            Transitioning high-risk manual data processes into verified programmatic controls, eradicating the vulnerabilities contributing to modern FDA warning letters.
          </p>
        </div>
      )
    },
    {
      id: "05",
      title: "Audit & Remediation",
      icon: <ShieldCheck className="w-5 h-5" />,
      tagline: "Inspection Readiness",
      content: (
        <div className="space-y-6">
          <p className="text-slate-300 leading-relaxed text-lg">
            We simulate high-pressure, agency-style mock inspections to uncover critical operational flaws. When disaster strikes, our crisis remediation teams rapidly deploy to respond to 483s and Warning Letters.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            <div className="p-4 sm:p-6 bg-slate-800/40 border border-slate-700/60 rounded-xl">
               <div className="text-sky-400 text-xs font-bold tracking-wider uppercase mb-2 sm:mb-3">Mock Inspections</div>
               <h4 className="text-white font-bold text-base sm:text-lg mb-2">Stress-Testing Systems</h4>
               <p className="text-slate-400 text-sm sm:text-base leading-relaxed">Comprehensive pre-approval (PAI) and routine inspection simulations modeled directly on current FDA investigator tactics.</p>
            </div>
            <div className="p-4 sm:p-6 bg-slate-800/40 border border-slate-700/60 rounded-xl">
               <div className="text-sky-400 text-xs font-bold tracking-wider uppercase mb-2 sm:mb-3">Crisis Assembly</div>
               <h4 className="text-white font-bold text-base sm:text-lg mb-2">Rapid 483 Remediation</h4>
               <p className="text-slate-400 text-sm sm:text-base leading-relaxed">Immediate deployment of senior architects to draft acceptable FDA responses and execute long-term CAPA commitments.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "06",
      title: "Skills Training",
      icon: <Network className="w-5 h-5" />,
      tagline: "Corporate Knowledge Transfer",
      content: (
        <div className="space-y-8">
          <p className="text-slate-300 leading-relaxed text-lg">
            Sustainable compliance is rooted in organizational culture. We provide bespoke, high-impact instruction to upskill Quality, IT, and Engineering teams on the latest technological and regulatory paradigm shifts.
          </p>
           <div className="bg-sky-950/30 p-6 md:p-8 rounded-2xl border border-sky-500/30">
             <h4 className="text-white font-bold text-xl tracking-tight mb-4">Core Curriculum</h4>
             <ul className="space-y-3">
               <li className="flex items-center gap-3 text-slate-200"><CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0" /> Computer Software Assurance (CSA) Mastery</li>
               <li className="flex items-center gap-3 text-slate-200"><CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0" /> Data Integrity & ALCOA+ Auditing Techniques</li>
               <li className="flex items-center gap-3 text-slate-200"><CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0" /> SaaS Validation Under GAMP 5 Second Edition</li>
               <li className="flex items-center gap-3 text-slate-200"><CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0" /> Managing Rapid Release Lifecycles in GxP Environments</li>
             </ul>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="bg-[#030C16] min-h-screen font-sans selection:bg-sky-600 selection:text-white pb-32 text-white">
      <SEO 
        title="About Us" 
        description="Learn about Dromominds Solutions and our mission to provide elite GxP compliance and validation."
      />
      {/* Abstract Tech Background */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      {/* Cyber Hero */}
      <section className="relative pt-28 sm:pt-36 lg:pt-40 pb-16 sm:pb-20 px-4 sm:px-6 md:px-12 lg:px-24 overflow-hidden z-10 border-b border-slate-800/80">
         <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,rgba(0,163,224,0.18),transparent_65%)] pointer-events-none opacity-40 mix-blend-screen" />
         
         <motion.div 
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10"
         >
           <div className="inline-flex items-center gap-3 bg-sky-500/10 border border-sky-400/30 backdrop-blur-md text-sky-200 text-xs font-bold px-4 sm:px-5 py-2 sm:py-2.5 rounded-full mb-6 sm:mb-10 uppercase tracking-widest shadow-lg">
             <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse shadow-[0_0_8px_rgba(56,189,248,0.8)]" />
             The Dromominds Framework
           </div>
           
           <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-[5.5rem] font-serif font-bold mb-6 sm:mb-8 tracking-tight text-white leading-[1.15] max-w-5xl">
             Engineering the <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-400">Architecture</span><br className="hidden md:block" /> of Global Trust.
           </h1>
           
           <p className="text-base sm:text-xl md:text-2xl text-slate-300 leading-relaxed mb-10 sm:mb-16 max-w-4xl text-balance">
             We do not believe in paper-based delays. We build and validate resilient, data-dense compliance engines that accelerate life-saving products to market across global jurisdictions.
           </p>

           <div className="h-[1px] w-full max-w-lg bg-gradient-to-r from-transparent via-sky-500/40 to-transparent"></div>
         </motion.div>
      </section>

      {/* Standards Bar */}
      <section className="border-b border-slate-800/80 bg-slate-950/60 backdrop-blur-md relative z-10 py-6 sm:py-8 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-8">
          <p className="text-xs sm:text-sm font-bold text-slate-400 uppercase tracking-widest flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span> Verified Compliance Standards
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 sm:gap-x-12 gap-y-4 sm:gap-y-6">
            <div className="flex items-center gap-2 sm:gap-3 font-semibold text-xs sm:text-sm text-slate-200 tracking-wide">
              <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-sky-400 shrink-0" /> FDA 21 CFR Part 11
            </div>
            <div className="flex items-center gap-2 sm:gap-3 font-semibold text-xs sm:text-sm text-slate-200 tracking-wide">
              <FileCheck className="w-5 h-5 sm:w-6 sm:h-6 text-sky-400 shrink-0" /> EU ANNEX 11
            </div>
            <div className="flex items-center gap-2 sm:gap-3 font-semibold text-xs sm:text-sm text-slate-200 tracking-wide">
              <Award className="w-5 h-5 sm:w-6 sm:h-6 text-sky-400 shrink-0" /> ISO 13485
            </div>
            <div className="flex items-center gap-2 sm:gap-3 font-semibold text-xs sm:text-sm text-slate-200 tracking-wide">
              <Target className="w-5 h-5 sm:w-6 sm:h-6 text-sky-400 shrink-0" /> GAMP 5 v2
            </div>
          </div>
        </div>
      </section>

      {/* The Deep Knowledge Matrix (Vertical Tabs) */}
      <section className="py-10 lg:py-32 px-4 sm:px-6 md:px-12 lg:px-24 max-w-7xl mx-auto relative z-10">
        <div className="mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif font-bold text-white tracking-tight mb-4 sm:mb-6">
            Systemic Advantages & <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-300">Technical Superiority</span>
          </h2>
          <p className="text-slate-300 max-w-3xl leading-relaxed text-base sm:text-xl">
            A granular breakdown of the methodologies, systems, and theoretical frameworks powering Dromominds' execution engine. Select a module below to inspect the data stream.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 min-h-[400px]">
          {/* Tabs Menu */}
          <div className="lg:w-1/3 flex flex-col gap-2">
            {insightsTabs.map((tab, idx) => {
              const isActive = activeTab === idx;
              return (
                <button 
                  key={tab.id}
                  onClick={() => setActiveTab(idx)}
                  className={`group relative text-left py-3.5 sm:py-5 px-4 sm:px-6 border-l-2 transition-all duration-300 overflow-hidden rounded-r-lg ${
                    isActive 
                      ? 'border-sky-400 bg-sky-500/10 text-white shadow-sm' 
                      : 'border-slate-800 hover:border-slate-700 text-slate-400 hover:text-slate-200 hover:bg-slate-900/40'
                  }`}
                >
                  {/* Active Indicator Glow */}
                  {isActive && (
                    <motion.div layoutId="activeTabGlow" className="absolute left-0 top-0 bottom-0 w-[2px] bg-sky-400 shadow-[0_0_12px_rgba(56,189,248,0.8)]" />
                  )}
                  <div className="flex items-center gap-3 sm:gap-4 relative z-10">
                     <div className={`p-2.5 sm:p-3 rounded-lg border shrink-0 transition-colors ${isActive ? 'border-sky-400/40 text-sky-400 bg-sky-500/20' : 'border-slate-800 text-slate-400 bg-slate-950/40'}`}>
                        {tab.icon}
                     </div>
                     <div>
                       <div className="text-[10px] sm:text-xs font-semibold tracking-wider text-slate-400 mb-0.5 uppercase">Module {tab.id}</div>
                       <div className="font-bold text-sm sm:text-lg leading-tight">{tab.title}</div>
                     </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Tabs Content Area */}
          <div className="lg:w-2/3 relative rounded-2xl border border-slate-800 bg-slate-900/70 backdrop-blur-md overflow-hidden p-4 sm:p-6 md:p-12 min-h-[300px]">
             {/* Tech Grid Overlay */}
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none"></div>
             
             <AnimatePresence mode="wait">
               <motion.div
                 key={activeTab}
                 initial={{ opacity: 0, x: 20, filter: 'blur(5px)' }}
                 animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                 exit={{ opacity: 0, x: -20, filter: 'blur(5px)' }}
                 transition={{ duration: 0.4, ease: "easeInOut" }}
                 className="relative z-10"
               >
                 <div className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 bg-sky-500/10 border border-sky-400/30 rounded-full text-[10px] sm:text-xs text-sky-300 uppercase tracking-wider mb-4 sm:mb-6 font-semibold">
                    {insightsTabs[activeTab].tagline}
                 </div>
                 <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold tracking-tight text-white mb-6 sm:mb-8">
                    {insightsTabs[activeTab].title}
                 </h3>
                 {insightsTabs[activeTab].content}
               </motion.div>
             </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Impact & Insights Matrix */}
      <section className="py-10 lg:py-24 px-4 sm:px-6 md:px-12 lg:px-24 bg-[#06131F] border-y border-slate-800/80 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
            <div className="lg:w-1/3 lg:sticky lg:top-32">
               <div className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-400/30 text-sky-300 text-xs font-semibold px-4 py-2 rounded-full mb-6 uppercase tracking-wider">
                 State of the Industry
               </div>
               <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-6 leading-tight tracking-tight">
                 Legacy Failure Modes.
               </h2>
               <p className="text-slate-300 leading-relaxed mb-8 text-base sm:text-lg">
                 Life science engineering teams are innovating at unprecedented speeds. Yet, compliance models designed in the 1990s are causing major deployment bottlenecks and exposing companies to critical regulatory action.
               </p>
               <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-5 sm:p-6 shadow-2xl relative overflow-hidden">
                 <div className="absolute top-0 left-0 w-full h-1 bg-sky-500"></div>
                 <div className="flex items-center gap-4 mb-4">
                   <div className="w-10 h-10 bg-sky-500/10 rounded-lg flex items-center justify-center border border-sky-500/20 text-sky-400 shrink-0">
                     <Target className="w-5 h-5" />
                   </div>
                   <div>
                     <div className="text-xs font-semibold text-white uppercase tracking-widest">Our Approach</div>
                   </div>
                 </div>
                 <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                   We transition organizations from defensive, paper-bound validation to offensive, high-velocity assurance frameworks executing under GAMP 5 v2 & FDA CSA protocols.
                 </p>
               </div>
            </div>
            
            <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 relative w-full">
               {/* Insight 1 */}
               <motion.div variants={itemVars} initial="hidden" whileInView="show" viewport={{ once: true }} className="bg-slate-900/70 border border-slate-800 p-5 sm:p-8 rounded-xl flex flex-col hover:border-amber-400/40 transition-colors">
                 <Lock className="w-8 h-8 text-amber-400 mb-6" />
                 <div className="text-4xl sm:text-6xl font-serif font-bold text-white mb-2 tracking-tight">
                   <AnimatedCounter value={43} suffix="%" duration={2} delay={0} />
                 </div>
                 <div className="text-xs sm:text-sm font-semibold text-amber-400 uppercase tracking-wider mb-4 border-b border-slate-800 pb-4">Increase in 483s</div>
                 <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                   Over the last 3 years, the FDA has issued 43% more Form 483s explicitly citing inadequate software validation and defective audit controls in cloud environments.
                 </p>
               </motion.div>
               
               {/* Insight 2 */}
               <motion.div variants={itemVars} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }} className="bg-slate-900/70 border border-slate-800 p-5 sm:p-8 rounded-xl flex flex-col hover:border-sky-400/40 transition-colors sm:mt-8 md:mt-12">
                 <Clock className="w-8 h-8 text-sky-400 mb-6" />
                 <div className="flex items-baseline gap-2 mb-2">
                   <div className="text-4xl sm:text-6xl font-serif font-bold text-white tracking-tight">
                     <AnimatedCounter value={12} suffix="-18" duration={2} delay={0.2} />
                   </div>
                   <div className="text-xl sm:text-2xl font-serif font-bold text-slate-400">mo</div>
                 </div>
                 <div className="text-xs sm:text-sm font-semibold text-sky-400 uppercase tracking-wider mb-4 border-b border-slate-800 pb-4">Legacy Latency</div>
                 <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                   Analog, document-heavy approaches average 12-18 months for enterprise ERP or LIMS implementations, exponentially delaying critical production go-live dates.
                 </p>
               </motion.div>
               
               {/* Insight 3 - Wide */}
               <motion.div variants={itemVars} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }} className="bg-slate-900/90 border border-slate-800 p-5 sm:p-8 md:p-10 rounded-xl flex flex-col hover:border-emerald-400/40 transition-all sm:col-span-2 relative overflow-hidden group">
                 <div className="absolute right-0 top-0 w-64 h-64 bg-[radial-gradient(ellipse_at_top_right,rgba(56,189,248,0.15),transparent_70%)] opacity-30 group-hover:opacity-60 transition-opacity duration-700 pointer-events-none" />
                 <div className="relative z-10 flex flex-col md:flex-row gap-6 md:gap-10 items-center">
                    <div className="flex-1">
                      <TrendingUp className="w-8 h-8 text-emerald-400 mb-4 sm:mb-6" />
                      <div className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white mb-4 tracking-tight">
                        80<span className="text-2xl sm:text-3xl text-slate-500">/</span><AnimatedCounter value={20} duration={2} delay={0.4} />
                      </div>
                      <div className="text-xs sm:text-sm font-semibold text-emerald-400 uppercase tracking-wider mb-4 pb-4 border-b border-slate-800">The CSA Paradigm Shift</div>
                      <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-lg">
                        FDA's CSA guidance reverses the paradigm: shifting from 80% documentation / 20% testing to 80% critical risk testing / 20% automated documentation. Our pipelines operationalize this exact velocity ratio.
                      </p>
                    </div>
                    <div className="w-full md:w-1/3 shrink-0 rounded-xl border border-slate-800 bg-slate-950/60 p-5 sm:p-6 flex flex-col justify-center gap-6">
                        <div>
                          <div className="flex justify-between text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wider">
                            <span>Testing Ops</span>
                            <span className="text-emerald-400">80%</span>
                          </div>
                          <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden">
                            <div className="h-full w-4/5 bg-emerald-400"></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wider">
                            <span>Manual Docs</span>
                            <span className="text-rose-400">20%</span>
                          </div>
                          <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden">
                            <div className="h-full w-1/5 bg-rose-400"></div>
                          </div>
                        </div>
                    </div>
                 </div>
               </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Validated Performance Matrix */}
      <section className="py-10 lg:py-24 px-4 sm:px-6 md:px-12 lg:px-24 max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-10 sm:mb-16 relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif font-bold mb-4 sm:mb-6 text-white tracking-tight">Telemetry & Metrics</h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            We don't just write static test scripts. We engineer compliance pipelines that generate measurable ROI for core operational units.
          </p>
        </div>

        <motion.div 
          initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }} variants={containerVars}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 relative z-10"
        >
           {/* Metric Card 1 */}
           <motion.div variants={itemVars} className="bg-slate-900/60 p-5 sm:p-8 rounded-xl border border-slate-800 hover:border-slate-700 transition-colors flex flex-col backdrop-blur-sm">
             <div className="flex justify-between items-center mb-6 sm:mb-8 border-b border-slate-800 pb-4 sm:pb-6">
                <Activity className="w-7 h-7 sm:w-8 sm:h-8 text-emerald-400 shrink-0" />
                <span className="text-emerald-400 text-[10px] sm:text-xs font-semibold bg-emerald-400/10 border border-emerald-400/20 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full uppercase tracking-wider">↑ 45% OPTIMIZATION</span>
             </div>
             <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-white">Automated Execution</h3>
             <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
               By migrating clients to digital Application Lifecycle Management (ALM) platforms, our automated protocols reduce execution and deviation reporting times by a verified 45%.
             </p>
           </motion.div>
           
           {/* Metric Card 2 */}
           <motion.div variants={itemVars} className="bg-slate-900/60 p-5 sm:p-8 rounded-xl border border-slate-800 hover:border-slate-700 transition-colors flex flex-col backdrop-blur-sm">
             <div className="flex justify-between items-center mb-6 sm:mb-8 border-b border-slate-800 pb-4 sm:pb-6">
                <BarChart3 className="w-7 h-7 sm:w-8 sm:h-8 text-rose-400 shrink-0" />
                <span className="text-rose-400 text-[10px] sm:text-xs font-semibold bg-rose-400/10 border border-rose-400/20 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full uppercase tracking-wider">↓ 60% DATA OVERHEAD</span>
             </div>
             <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-white">Risk-Based Scoping</h3>
             <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
               Rigorous computational GAMP 5 risk assessments isolate critical functional attributes, eliminating up to 60% of unnecessary test scripts on low-risk configurations.
             </p>
           </motion.div>

           {/* Metric Card 3 */}
           <motion.div variants={itemVars} className="bg-slate-900/60 p-5 sm:p-8 rounded-xl border border-slate-800 hover:border-slate-700 transition-colors flex flex-col backdrop-blur-sm sm:col-span-2 lg:col-span-1">
             <div className="flex justify-between items-center mb-6 sm:mb-8 border-b border-slate-800 pb-4 sm:pb-6">
                <ShieldCheck className="w-7 h-7 sm:w-8 sm:h-8 text-sky-400 shrink-0" />
                <span className="text-sky-400 text-[10px] sm:text-xs font-semibold bg-sky-400/10 border border-sky-400/20 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full uppercase tracking-wider">100% TRACEABILITY</span>
             </div>
             <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-white">Cryptographic Audits</h3>
             <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
               Dynamic, automated trace matrices linking parameters guarantee completely immutable retrieval during aggressive regulatory inspections.
             </p>
           </motion.div>
        </motion.div>
      </section>

      {/* Global Scale - High-Tech Telemetry Output */}
      <section className="bg-gradient-to-r from-[#06131F] via-[#0A2239] to-[#06131F] border-y border-sky-500/20 text-white py-12 sm:py-16 px-4 sm:px-6 md:px-12 lg:px-24 relative z-10 overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/micro-carbon.png')] opacity-10 pointer-events-none mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-800 sm:divide-sky-500/20 text-center relative z-10">
            <div className="flex flex-col justify-center pt-4 sm:pt-0">
              <div className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-sky-200 tracking-tight shadow-sm mb-2">
                <AnimatedCounter value={500} suffix="+" duration={2} delay={0} />
              </div>
              <div className="text-sky-400 text-xs sm:text-sm font-semibold uppercase tracking-wider">Systems Validated</div>
            </div>
            
            <div className="flex flex-col justify-center pt-4 sm:pt-0">
              <div className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-sky-200 tracking-tight shadow-sm mb-2">
                <AnimatedCounter value={0} duration={2} delay={0.2} />
              </div>
              <div className="text-sky-400 text-xs sm:text-sm font-semibold uppercase tracking-wider">Critical FDA 483s</div>
            </div>
            
            <div className="flex flex-col justify-center pt-4 sm:pt-0">
              <div className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-sky-200 tracking-tight shadow-sm mb-2">
                <AnimatedCounter value={40} suffix="+" duration={2} delay={0.4} />
              </div>
              <div className="text-sky-400 text-xs sm:text-sm font-semibold uppercase tracking-wider">Jurisdictions Scaled</div>
            </div>
            
            <div className="flex flex-col justify-center pt-4 sm:pt-0">
              <div className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-sky-200 tracking-tight shadow-sm mb-2">
                <AnimatedCounter value={10} suffix=",000+" duration={2.5} delay={0.6} />
              </div>
              <div className="text-sky-400 text-xs sm:text-sm font-semibold uppercase tracking-wider">Scripts Automated</div>
            </div>
        </div>
      </section>

      {/* FAQ Section with unified dark styling */}
      <div className="dark bg-[#030C16] relative z-10 border-t border-slate-800/80">
        <FAQSection 
          faqs={[
            {
              question: "What makes Dromominds Solutions different from other GxP compliance agencies?",
              answer: "Dromominds Solutions combines decades of deep regulatory expertise with modern technological frameworks like Computer Software Assurance (CSA) and continuous validation. We transition organizations from paper-heavy processes to agile, automated compliance engines that drastically reduce time-to-market."
            },
            {
              question: "What global regulatory standards does Dromominds specialize in?",
              answer: "Our methodologies are natively mapped to FDA 21 CFR Part 11, EU Annex 11, ISO 13485, and GAMP 5 Second Edition. We guarantee your operations are unconditionally audit-ready across these rigorous global mandates."
            },
            {
              question: "How does your Computer Software Assurance (CSA) approach work?",
              answer: "We shift the focus from exhaustive documentation to critical thinking and unscripted testing. Our CSA frameworks reduce validation overhead by up to 40% while simultaneously increasing the robustness of your software quality assurance."
            },
            {
              question: "Do you offer remediation services for FDA 483s and Warning Letters?",
              answer: "Yes, we provide rapid crisis assembly and remediation. Our senior architects immediately deploy to draft acceptable FDA responses, execute long-term CAPA commitments, and comprehensively remediate your Quality Management Systems."
            },
            {
              question: "Can you validate cloud-based enterprise systems like Veeva or Salesforce?",
              answer: "Absolutely. We specialize in SaaS and PaaS compliance, providing end-to-end validation for multi-tenant environments. We ensure that your cloud infrastructure maintains a continuous state of compliance despite rapid release cycles."
            }
          ]}
          title="Frequently Asked Questions About Us"
          subtitle="Learn more about our methodology, expertise, and how we accelerate GxP compliance."
        />
      </div>

      {/* Final Tactical CTA */}
      <section className="py-10 lg:py-32 px-4 sm:px-6 md:px-12 lg:px-24 relative z-10 border-t border-slate-800/80">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(0,163,224,0.15),transparent_65%)] pointer-events-none z-0 opacity-20" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.div 
               initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
               className="bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 p-6 sm:p-10 lg:p-16 rounded-3xl shadow-[0_0_50px_rgba(0,163,224,0.12)]"
            >
                <div className="inline-flex items-center justify-center p-3.5 sm:p-4 border border-sky-500/30 bg-sky-500/10 rounded-2xl mb-6 sm:mb-8 text-sky-400 shadow-[0_0_25px_rgba(56,189,248,0.25)]">
                  <ShieldCheck className="w-8 h-8 sm:w-10 sm:h-10" />
                </div>
                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold mb-4 sm:mb-6 text-white tracking-tight">
                   Ensure Audit Readiness Today
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-slate-300 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
                   Connect with our deployment team today for a deeply technical gap analysis of your validation pipelines and existing infrastructure.
                </p>
                
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
                   <Link to="/contact" className="bg-sky-600 hover:bg-sky-500 text-white px-6 sm:px-8 py-3.5 sm:py-4 font-bold transition flex items-center justify-center gap-3 w-full sm:w-auto text-sm sm:text-base uppercase tracking-wider rounded-xl shadow-lg shadow-sky-600/30 hover:shadow-sky-500/40 border border-sky-400/30">
                      Compile Assessment <ArrowRight className="w-5 h-5" />
                   </Link>
                   <Link to="/expertise/consulting" className="bg-slate-800/60 text-white border border-slate-700 hover:border-slate-500 hover:bg-slate-800 px-6 sm:px-8 py-3.5 sm:py-4 font-bold transition w-full sm:w-auto text-center text-sm sm:text-base uppercase tracking-wider rounded-xl">
                      Explore Protocols
                   </Link>
                </div>
            </motion.div>
        </div>
      </section>
    </div>
  );
};
