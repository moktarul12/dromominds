import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Activity, Target, ArrowRight, Play, Server, Clock, PieChart, FileText } from 'lucide-react';
import { CsvAssessmentWizard } from './CsvAssessmentWizard';

export const CsvAssessmentSection = () => {
  const [isWizardOpen, setIsWizardOpen] = useState(false);

  return (
    <section className="py-10 lg:py-24 bg-slate-950 relative overflow-hidden">
      {/* Premium background effects */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 pointer-events-none mix-blend-overlay"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-600/5 blur-[100px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-red-900/10 blur-[100px] rounded-full pointer-events-none"></div>
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-[var(--color-brand)]/10 blur-[80px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[var(--color-brand)]/10 border border-[var(--color-brand)]/30 text-[var(--color-brand)] text-xs font-bold uppercase tracking-widest rounded-full mb-6 shadow-lg shadow-[var(--color-brand)]/5">
              <ShieldCheck className="w-4 h-4" /> Flagship Interactive Tool
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 tracking-tight leading-[1.1]">
              How Audit Ready Is<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-[var(--color-brand)] to-amber-500">Your Organization?</span>
            </h2>
            
            <p className="text-lg md:text-xl text-slate-300 font-light mb-10 leading-relaxed max-w-lg">
              Evaluate your CSV maturity, compliance readiness, and data integrity posture in less than 5 minutes.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-10">
              <div className="flex items-start gap-3">
                <Clock className="w-6 h-6 text-[var(--color-brand)] shrink-0" />
                <div>
                  <div className="text-white font-bold mb-1">5-Minute Assessment</div>
                  <div className="text-sm text-slate-400">Quick, enterprise-grade analysis</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Target className="w-6 h-6 text-[var(--color-brand)] shrink-0" />
                <div>
                  <div className="text-white font-bold mb-1">35 Compliance Factors</div>
                  <div className="text-sm text-slate-400">Comprehensive risk scoring</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <PieChart className="w-6 h-6 text-[var(--color-brand)] shrink-0" />
                <div>
                  <div className="text-white font-bold mb-1">Instant Maturity Score</div>
                  <div className="text-sm text-slate-400">Compare against industry peers</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FileText className="w-6 h-6 text-[var(--color-brand)] shrink-0" />
                <div>
                  <div className="text-white font-bold mb-1">Detailed Recommendations</div>
                  <div className="text-sm text-slate-400">Actionable intelligence</div>
                </div>
              </div>
            </div>

            <button 
              onClick={() => setIsWizardOpen(true)}
              className="bg-[var(--color-brand)] text-white px-8 py-5 rounded-xl font-bold hover:bg-[var(--color-brand-hover)] transition-all flex items-center justify-center gap-3 text-lg w-full sm:w-auto shadow-lg shadow-[var(--color-brand)]/20 group uppercase tracking-wider relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
              <span className="relative z-10 flex items-center gap-2">Start Free CSV Assessment <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></span>
            </button>
          </motion.div>

          {/* Interactive Preview Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-[#0B1F3A] via-[#1D4ED8] to-[#06B6D4] rounded-3xl blur opacity-40 animate-pulse"></div>
            
            <div className="bg-slate-900 border border-slate-700/50 rounded-3xl p-6 md:p-8 relative shadow-2xl backdrop-blur-xl group overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#06B6D4] to-transparent opacity-50"></div>
              
              <div className="flex justify-between items-center mb-8 pb-6 border-b border-slate-800">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">Advanced CSV Readiness™</h3>
                  <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">Live Preview</div>
                </div>
                <div className="w-12 h-12 bg-black/50 rounded-full border border-slate-700 flex items-center justify-center shadow-inner">
                  <Activity className="w-6 h-6 text-[var(--color-brand)]" />
                </div>
              </div>

              {/* Mock Gauge */}
              <div className="flex flex-col items-center justify-center mb-8 relative">
                <svg className="w-48 h-48 transform -rotate-90 group-hover:scale-105 transition-transform duration-700">
                  <circle cx="96" cy="96" r="80" stroke="currentColor" strokeWidth="12" fill="transparent" className="text-slate-800" />
                  <motion.circle 
                    cx="96" cy="96" r="80" 
                    stroke="currentColor" 
                    strokeWidth="12" 
                    fill="transparent" 
                    strokeDasharray={2 * Math.PI * 80}
                    initial={{ strokeDashoffset: 2 * Math.PI * 80 }}
                    whileInView={{ strokeDashoffset: 2 * Math.PI * 80 * (1 - 0.74) }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
                    className="text-[var(--color-brand)] shadow-lg"
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Score</div>
                  <div className="text-5xl font-black text-white tracking-tighter">74<span className="text-2xl text-[var(--color-brand)]">%</span></div>
                </div>
              </div>

              <div className="bg-black/40 rounded-xl p-5 border border-slate-800 shadow-inner">
                <div className="flex justify-between items-center mb-3">
                  <div className="text-sm font-bold text-amber-500 uppercase tracking-wider">Status: Moderate Risk</div>
                  <div className="text-xs text-slate-400">Industry Avg: 67%</div>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-2">
                  <div className="bg-gradient-to-r from-amber-500 to-[var(--color-brand)] h-2 rounded-full" style={{ width: '74%' }}></div>
                </div>
              </div>

              <div className="mt-6 flex justify-between gap-4">
                <button 
                  onClick={() => setIsWizardOpen(true)}
                  className="flex-1 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white py-3 rounded-lg font-bold text-sm transition-colors flex items-center justify-center gap-2"
                >
                  <Play className="w-4 h-4 fill-white" /> Try Demo
                </button>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      <CsvAssessmentWizard isOpen={isWizardOpen} onClose={() => setIsWizardOpen(false)} />
    </section>
  );
};
