import React from 'react';
import { ArrowRight, BookOpen, ShieldCheck, Download } from 'lucide-react';

export const CsaTransitionKit = ({ onOpenLeadMagnet }: { onOpenLeadMagnet: () => void }) => {
  return (
    <section className="bg-gray-50 dark:bg-slate-900 py-10 lg:py-24 relative overflow-hidden border-y border-gray-200 dark:border-slate-800">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-96 h-96 bg-[var(--color-brand)]/10 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        <div className="bg-white dark:bg-slate-950 rounded-[2.5rem] p-6 lg:p-16 shadow-2xl border border-gray-100 dark:border-slate-800 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Visual Side */}
          <div className="w-full lg:w-5/12 relative">
             <div className="aspect-[4/5] bg-slate-900 rounded-2xl p-6 lg:p-8 text-white relative shadow-2xl transform lg:-rotate-2 hover:rotate-0 transition-transform duration-500 overflow-hidden border border-slate-700">
                <div className="absolute top-0 right-0 p-6 opacity-20">
                   <ShieldCheck className="w-40 h-40" />
                </div>
                <div className="relative z-10 h-full flex flex-col justify-between">
                   <div>
                     <div className="bg-[var(--color-brand)] text-white text-xs font-bold uppercase tracking-widest inline-block px-3 py-1 rounded-full mb-6">Free Playbook</div>
                     <h3 className="text-3xl font-serif leading-tight">The 2026<br/>CSV to CSA<br/>Transition Kit</h3>
                   </div>
                   <div className="space-y-4 pt-8">
                     <div className="h-1 w-12 bg-[var(--color-brand)]"></div>
                     <p className="text-sm text-gray-300">Actionable risk assessment templates & validation strategy.</p>
                   </div>
                </div>
             </div>
             
             {/* Decorative Element */}
             <div className="absolute -bottom-6 -right-6 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-xl border border-gray-100 dark:border-slate-700 hidden md:block">
               <div className="flex items-center gap-3">
                 <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-lg flex items-center justify-center">
                   <Download className="w-5 h-5" />
                 </div>
                 <div>
                   <p className="text-sm font-bold text-gray-900 dark:text-white">40% Decrease</p>
                   <p className="text-xs text-gray-500 dark:text-gray-400">In documentation time</p>
                 </div>
               </div>
             </div>
          </div>
          
          {/* Content Side */}
          <div className="w-full lg:w-7/12">
            <h2 className="text-sm font-bold uppercase tracking-widest text-[var(--color-brand)] mb-3 flex items-center gap-2">
              <BookOpen className="w-4 h-4" /> Upper Funnel Resource
            </h2>
            <h3 className="text-3xl md:text-5xl font-serif text-gray-900 dark:text-white mb-6 leading-tight tracking-tight">
              Stop Over-Validating. <br/>Start Transitioning.
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              The FDA actively encourages Computer Software Assurance (CSA), yet 78% of life science companies remain stuck in rigid, paper-heavy CSV processes. This kit provides the exact framework to modernize your compliance strategy without risking audit findings.
            </p>
            
            <ul className="space-y-4 mb-10">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[var(--color-brand)]/10 text-[var(--color-brand)] flex items-center justify-center shrink-0 mt-0.5"><div className="w-2 h-2 rounded-full bg-current"></div></div>
                <span className="text-gray-700 dark:text-gray-300 font-medium">Risk-based testing matrices for immediate deployment</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[var(--color-brand)]/10 text-[var(--color-brand)] flex items-center justify-center shrink-0 mt-0.5"><div className="w-2 h-2 rounded-full bg-current"></div></div>
                <span className="text-gray-700 dark:text-gray-300 font-medium">FDA auditor FAQ and strategic defense checklist</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[var(--color-brand)]/10 text-[var(--color-brand)] flex items-center justify-center shrink-0 mt-0.5"><div className="w-2 h-2 rounded-full bg-current"></div></div>
                <span className="text-gray-700 dark:text-gray-300 font-medium">Step-by-step guidance to reduce documentation by 40%</span>
              </li>
            </ul>
            
            <button 
              onClick={onOpenLeadMagnet}
              className="bg-[var(--color-brand)] text-white px-8 py-4 rounded-xl font-bold hover:bg-[var(--color-brand-hover)] transition-colors shadow-lg shadow-[var(--color-brand)]/20 flex items-center gap-3 group"
            >
              Get Free Access to the Kit <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          
        </div>
      </div>
    </section>
  );
};
