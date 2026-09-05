import React from 'react';
import { Microscope, ShieldCheck, Globe, CheckCircle2 } from 'lucide-react';

export const WhyChooseUs = () => {
  return (
    <section id="why-us" className="bg-[#F4F7FB] dark:bg-[#06131F] text-slate-900 dark:text-slate-100 relative z-10 rounded-t-[2.5rem] md:rounded-t-[3.5rem] -mt-6 md:-mt-10 py-12 lg:py-28 px-6 md:px-12 lg:px-24 shadow-[0_-20px_40px_-20px_rgba(0,0,0,0.08)] overflow-hidden transition-colors duration-300 border-b border-slate-200 dark:border-[#1B364D]">
      {/* Background Texture & Glow */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none z-0" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_top_right,rgba(0,97,254,0.08),transparent_60%)] dark:bg-[radial-gradient(ellipse_at_top_right,rgba(0,163,224,0.12),transparent_60%)] pointer-events-none z-0" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[var(--color-electric-blue)]/10 text-[var(--color-electric-blue)] dark:bg-[var(--color-sky-cyan)]/15 dark:text-[var(--color-sky-cyan)] text-xs font-extrabold uppercase tracking-widest mb-4 border border-[var(--color-electric-blue)]/20 dark:border-[var(--color-sky-cyan)]/30">
            Why Us
          </div>
          <h2 className="text-3xl md:text-5xl font-serif tracking-tight text-[#0A192F] dark:text-white">
            Why Dromominds — <span className="italic text-[var(--color-electric-blue)] dark:text-[var(--color-sky-cyan)]">The Unique Intersection</span>
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          <div className="lg:col-span-5 space-y-4 flex flex-col justify-center">
            <div className="group border-l-2 border-slate-200 dark:border-[#1B364D] pl-6 py-3 hover:border-[var(--color-electric-blue)] dark:hover:border-[var(--color-sky-cyan)] transition-all duration-300 cursor-default rounded-r-xl hover:bg-slate-200/40 dark:hover:bg-[#0D2235]/60">
              <div className="flex items-center gap-3.5 mb-2">
                <div className="p-2 rounded-lg bg-blue-50 dark:bg-[#0D2235] border border-blue-100 dark:border-[#1B364D] text-[var(--color-electric-blue)] dark:text-[var(--color-sky-cyan)] shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[#0A192F] dark:text-white group-hover:text-[var(--color-electric-blue)] dark:group-hover:text-[var(--color-sky-cyan)] transition-colors">
                  GxP Regulatory Depth
                </h3>
              </div>
              <p className="text-[#334E68] dark:text-slate-300 text-sm leading-relaxed font-normal">
                Years of exclusive focus on Life Sciences. Our consultants speak the FDA's language—21 CFR Part 11, GAMP 5, ICH—because they've operated in these environments for decades. 
              </p>
            </div>
            
            <div className="group border-l-2 border-slate-200 dark:border-[#1B364D] pl-6 py-3 hover:border-[var(--color-electric-blue)] dark:hover:border-[var(--color-sky-cyan)] transition-all duration-300 cursor-default rounded-r-xl hover:bg-slate-200/40 dark:hover:bg-[#0D2235]/60">
              <div className="flex items-center gap-3.5 mb-2">
                <div className="p-2 rounded-lg bg-blue-50 dark:bg-[#0D2235] border border-blue-100 dark:border-[#1B364D] text-[var(--color-electric-blue)] dark:text-[var(--color-sky-cyan)] shrink-0">
                  <Microscope className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[#0A192F] dark:text-white group-hover:text-[var(--color-electric-blue)] dark:group-hover:text-[var(--color-sky-cyan)] transition-colors">
                  System Validation & Delivery
                </h3>
              </div>
              <p className="text-[#334E68] dark:text-slate-300 text-sm leading-relaxed font-normal">
                We don't just govern systems — we build robust validation frameworks. Delivery of comprehensive end-to-end Computerized System Validation (CSV) pipelines tailored specifically for pharma.
              </p>
            </div>
            
            <div className="group border-l-2 border-slate-200 dark:border-[#1B364D] pl-6 py-3 hover:border-[var(--color-electric-blue)] dark:hover:border-[var(--color-sky-cyan)] transition-all duration-300 cursor-default rounded-r-xl hover:bg-slate-200/40 dark:hover:bg-[#0D2235]/60">
              <div className="flex items-center gap-3.5 mb-2">
                <div className="p-2 rounded-lg bg-blue-50 dark:bg-[#0D2235] border border-blue-100 dark:border-[#1B364D] text-[var(--color-electric-blue)] dark:text-[var(--color-sky-cyan)] shrink-0">
                  <Globe className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[#0A192F] dark:text-white group-hover:text-[var(--color-electric-blue)] dark:group-hover:text-[var(--color-sky-cyan)] transition-colors">
                  Global Execution
                </h3>
              </div>
              <p className="text-[#334E68] dark:text-slate-300 text-sm leading-relaxed font-normal">
                Delivery capabilities operating dynamically across critical, global markets — providing scalable, real-time insight and execution, rather than theoretical compliance advice.
              </p>
            </div>
          </div>
          
          <div className="lg:col-span-7 bg-white dark:bg-[#081726] rounded-[2rem] p-6 md:p-8 lg:p-12 h-full flex flex-col justify-center relative overflow-hidden shadow-xl border border-slate-200/80 dark:border-[#1B364D]">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[radial-gradient(ellipse_at_top_right,rgba(0,97,254,0.1),transparent_70%)] dark:bg-[radial-gradient(ellipse_at_top_right,rgba(0,163,224,0.15),transparent_70%)] pointer-events-none" />
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-serif text-[#0A192F] dark:text-white mb-6 border-b border-slate-100 dark:border-[#1B364D] pb-5">
                The Firm Difference
              </h3>
              <p className="text-[#334E68] dark:text-slate-200 mb-6 text-base md:text-lg leading-relaxed font-normal">
                Most IT consultancies can't speak to FDA inspectors. Most quality consultancies can't fix the systems. Most engineering firms don't understand GxP. <strong className="text-[#0A192F] dark:text-white font-bold bg-[var(--color-electric-blue)]/10 dark:bg-[var(--color-sky-cyan)]/20 px-2 py-0.5 rounded text-[var(--color-electric-blue)] dark:text-[var(--color-sky-cyan)]">Dromominds does all three.</strong>
              </p>
              <p className="text-[#627D98] dark:text-slate-400 mb-8 text-sm md:text-base leading-relaxed font-normal">
                Our Center of Excellence combines a deeply regulated technology track record with a purpose-built compliance practice — operating on a proven, scalable model aligned with ISPE and ICH guidelines.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-auto">
                <div className="bg-slate-50 dark:bg-[#0D2235] border border-slate-200/70 dark:border-[#1B364D] p-3.5 rounded-xl flex items-center gap-3 shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-[var(--color-electric-blue)] dark:text-[var(--color-sky-cyan)] shrink-0" />
                  <span className="text-sm font-semibold text-[#0A192F] dark:text-slate-200">CSV Framework</span>
                </div>
                <div className="bg-slate-50 dark:bg-[#0D2235] border border-slate-200/70 dark:border-[#1B364D] p-3.5 rounded-xl flex items-center gap-3 shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-[var(--color-electric-blue)] dark:text-[var(--color-sky-cyan)] shrink-0" />
                  <span className="text-sm font-semibold text-[#0A192F] dark:text-slate-200">FDA 21 CFR Compliant</span>
                </div>
                <div className="bg-slate-50 dark:bg-[#0D2235] border border-slate-200/70 dark:border-[#1B364D] p-3.5 rounded-xl flex items-center gap-3 shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-[var(--color-electric-blue)] dark:text-[var(--color-sky-cyan)] shrink-0" />
                  <span className="text-sm font-semibold text-[#0A192F] dark:text-slate-200">Full QMS Implementation</span>
                </div>
                <div className="bg-slate-50 dark:bg-[#0D2235] border border-slate-200/70 dark:border-[#1B364D] p-3.5 rounded-xl flex items-center gap-3 shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-[var(--color-electric-blue)] dark:text-[var(--color-sky-cyan)] shrink-0" />
                  <span className="text-sm font-semibold text-[#0A192F] dark:text-slate-200">ISO 13485</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


