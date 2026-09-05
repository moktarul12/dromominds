import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ChevronRight, ShieldCheck, Activity, Globe, RefreshCcw, ClipboardCheck, Cpu, MapPin } from 'lucide-react';
import { sanityClient } from '../lib/sanity';
import { useNavigate } from 'react-router-dom';

export const Hero = () => {
  const [heroData, setHeroData] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    sanityClient.fetch(`*[_type == "hero" && page == "Home"][0]`)
      .then(setHeroData)
      .catch(console.error);
  }, []);

  const features = [
    { icon: ShieldCheck, title: "GxP-Focused", desc: "Compliance Delivery" },
    { icon: Activity, title: "Risk-Based", desc: "Validation Approach" },
    { icon: Globe, title: "FDA + EU", desc: "Regulatory Alignment" },
    { icon: RefreshCcw, title: "End-to-End", desc: "Lifecycle Support" },
    { icon: ClipboardCheck, title: "Audit-Ready", desc: "Documentation Practices" },
    { icon: Cpu, title: "CSV + CQV", desc: "Implementation Expertise" }
  ];

  return (
    <section id="overview" className="bg-gradient-to-b from-[#030C16] via-[#06131F] to-[#081726] relative overflow-hidden text-white pt-[120px] pb-20 px-6 md:px-12 lg:px-24 border-b border-[#1B364D]">
      {/* Background Video with low visibility and smooth loop */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none opacity-20 z-0 select-none"
      >
        <source src="/hero_video.mp4" type="video/mp4" />
      </video>

      {/* Dark gradient overlay for contrast and legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#030C16]/75 via-[#06131F]/60 to-[#081726]/95 pointer-events-none z-0" />

      {/* Dynamic gradient orbs for vibrant ambient depth */}
      <div 
        className="absolute top-[-20%] right-[-10%] w-[600px] md:w-[800px] h-[600px] md:h-[800px] bg-[radial-gradient(ellipse_at_center,rgba(0,163,224,0.2),transparent_65%)] pointer-events-none z-0 rounded-full blur-3xl opacity-70" 
      />
      <div 
        className="absolute bottom-[-20%] left-[-10%] w-[600px] md:w-[800px] h-[600px] md:h-[800px] bg-[radial-gradient(ellipse_at_center,rgba(0,97,254,0.25),transparent_65%)] pointer-events-none z-0 rounded-full blur-3xl opacity-70" 
      />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none z-0 mix-blend-overlay"></div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto relative z-10 flex flex-col items-center text-center lg:text-left lg:items-start"
      >
        <div className="flex flex-wrap justify-center lg:justify-start gap-2.5 sm:gap-3 mb-6">
          {(heroData?.badge ? [heroData.badge] : ["Computerized System Validation (CSV)", "FDA 21 CFR Part 11 Compliance", "GAMP 5 Validation Services"]).map((tag, idx) => (
            <div 
              key={idx} 
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#081726]/80 hover:bg-[#0D2235] border border-[var(--color-sky-cyan)]/30 hover:border-[var(--color-sky-cyan)]/60 backdrop-blur-md text-xs font-semibold text-slate-200 tracking-wide transition-all duration-300 shadow-[0_2px_12px_rgba(0,0,0,0.3),_0_0_15px_rgba(0,163,224,0.12)] cursor-default group"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-sky-cyan)] group-hover:scale-125 transition-transform shadow-[0_0_8px_rgba(0,163,224,0.8)]" />
              <span className="text-[11px] uppercase tracking-[0.14em] text-slate-200 font-bold group-hover:text-white transition-colors">
                {tag}
              </span>
            </div>
          ))}
        </div>
        
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif mb-6 leading-[1.1] tracking-tight whitespace-pre-line text-white">
          {heroData?.heading1 || "Audit Readiness.\n"}
          <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-sky-cyan)] via-blue-200 to-[var(--color-sky-cyan)]">{heroData?.headingHighlight || "Regulatory Confidence."}</span>
          {heroData?.heading2}
        </h1>
        
        <p className="text-base md:text-lg text-slate-300 max-w-2xl mb-8 leading-relaxed font-light mx-auto lg:mx-0">
          {heroData?.subheading || "Ensure data integrity, accelerate validation cycles, and maintain inspection readiness with our end-to-end compliance solutions."}
        </p>

        {/* LEAD ATTRACTION */}
        <div className="flex flex-col sm:flex-row gap-4 mb-16 justify-center lg:justify-start w-full">
          <button onClick={() => {
              if (heroData?.primaryCtaLink) window.location.href = heroData.primaryCtaLink;
              else navigate('/contact');
            }} className="bg-[var(--color-electric-blue)] hover:bg-[var(--color-electric-hover)] text-white px-8 py-4 rounded-xl font-bold transition-all shadow-[0_0_25px_rgba(0,97,254,0.4)] hover:shadow-[0_0_35px_rgba(0,97,254,0.6)] border border-blue-400/30 flex items-center justify-center gap-2 text-sm sm:text-base">
            Book a Free Compliance Assessment <ArrowRight className="w-4 h-4" />
          </button>
          <button onClick={() => {
              const evt = new CustomEvent('openLeadMagnet');
              window.dispatchEvent(evt);
            }} className="bg-[#0D2235] hover:bg-[#122B42] text-white border border-[#1B364D] hover:border-[var(--color-sky-cyan)]/50 px-8 py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 text-sm sm:text-base shadow-md">
            Get CSV Readiness Checklist <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-6xl mx-auto relative z-10"
      >
        <div className="border border-[#1B364D] hover:border-[var(--color-sky-cyan)]/40 transition-colors duration-300 py-6 px-4 lg:px-6 bg-[#081726]/80 backdrop-blur-xl rounded-2xl shadow-2xl relative overflow-hidden mx-auto">
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none" />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-6 gap-x-3 text-center relative z-10 w-full items-start">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="flex flex-col items-center group">
                  <div className="w-11 h-11 rounded-xl bg-[#0D2235] flex items-center justify-center mb-3 border border-[#1B364D] group-hover:border-[var(--color-sky-cyan)]/50 group-hover:bg-[#122B42] shadow-sm transition-all duration-300">
                    <Icon className="w-5 h-5 text-[var(--color-sky-cyan)] group-hover:scale-110 transition-transform" />
                  </div>
                  <h2 className="text-sm md:text-base font-bold text-white mb-1 leading-tight">{feature.title}</h2>
                  <p className="text-[11px] sm:text-xs text-slate-400 font-semibold uppercase tracking-wider">{feature.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
};


