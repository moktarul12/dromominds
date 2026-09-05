import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BarChart, ArrowRight, Zap } from 'lucide-react';
import { PrefetchLink as Link } from './PrefetchLink';

interface RoiCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RoiCalculatorModal = ({ isOpen, onClose }: RoiCalculatorModalProps) => {
  const [calcSystems, setCalcSystems] = useState(10);
  const [calcDays, setCalcDays] = useState(90);
  const [calcFtes, setCalcFtes] = useState(3);

  const calculatedSavings = new Intl.NumberFormat('en-US').format(Math.floor((calcSystems * calcDays * 0.4 * 500) + (calcFtes * 40000)));
  const calculatedReduction = Math.floor(calcDays * 0.45);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex flex-col p-4 sm:p-6 py-10 overflow-y-auto">
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={onClose}></div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 flex flex-col m-auto z-10"
        >
          <div className="bg-slate-900 p-6 sm:p-8 text-white flex justify-between items-start sm:items-center shrink-0">
             <div className="flex items-start sm:items-center gap-4">
               <div className="hidden sm:flex w-12 h-12 rounded-xl bg-[var(--color-brand)] items-center justify-center shadow-lg shadow-[var(--color-brand)]/20 shrink-0">
                 <BarChart className="w-6 h-6 text-white" />
               </div>
               <div>
                 <h3 className="font-bold text-xl sm:text-2xl tracking-tight pr-4">Validation ROI Calculator</h3>
                 <p className="text-xs sm:text-sm text-slate-400 mt-1 sm:mt-0">Project your compliance efficiency savings</p>
               </div>
             </div>
             <button onClick={onClose} aria-label="Close calculator" className="text-slate-400 hover:text-white transition-colors bg-slate-800 p-2 rounded-lg hover:bg-slate-700 shrink-0 mt-1 sm:mt-0">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
             </button>
          </div>
          
          <div className="p-6 sm:p-8 bg-white text-slate-900">
             <div className="space-y-8 mb-10">
                <div>
                   <label className="flex justify-between text-sm font-bold text-slate-700 mb-4">
                     Systems Validated Annually <span className="text-[var(--color-brand)] bg-red-50 px-3 py-1 rounded-full text-base">{calcSystems}</span>
                   </label>
                   <input type="range" min="1" max="50" value={calcSystems} onChange={(e) => setCalcSystems(Number(e.target.value))} className="w-full accent-[var(--color-brand)] h-2 bg-slate-100 rounded-full appearance-none cursor-pointer" />
                </div>
                <div>
                   <label className="flex justify-between text-sm font-bold text-slate-700 mb-4">
                     Average Current Cycle Time (Days) <span className="text-[var(--color-brand)] bg-red-50 px-3 py-1 rounded-full text-base">{calcDays}</span>
                   </label>
                   <input type="range" min="30" max="180" value={calcDays} onChange={(e) => setCalcDays(Number(e.target.value))} className="w-full accent-[var(--color-brand)] h-2 bg-slate-100 rounded-full appearance-none cursor-pointer" />
                </div>
                <div>
                   <label className="flex justify-between text-sm font-bold text-slate-700 mb-4">
                     Number of QA FTEs <span className="text-[var(--color-brand)] bg-red-50 px-3 py-1 rounded-full text-base">{calcFtes}</span>
                   </label>
                   <input type="range" min="1" max="20" value={calcFtes} onChange={(e) => setCalcFtes(Number(e.target.value))} className="w-full accent-[var(--color-brand)] h-2 bg-slate-100 rounded-full appearance-none cursor-pointer" />
                </div>
             </div>

             <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 flex flex-col sm:flex-row gap-8 items-center shrink-0 shadow-inner">
                <div className="flex-1 text-center sm:text-left">
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 flex items-center justify-center sm:justify-start gap-2">
                     <Zap className="w-4 h-4 text-emerald-500" /> Projected Annual Savings
                  </div>
                  <div className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">${calculatedSavings}</div>
                  <div className="text-sm text-emerald-600 font-bold mt-2 inline-flex items-center gap-1 bg-emerald-50 px-2 py-1 rounded">
                    <ArrowRight className="w-4 h-4 -rotate-45" /> {calculatedReduction}% Cycle Time Reduction
                  </div>
                </div>
                <div className="w-full sm:w-auto mt-4 sm:mt-0 flex-shrink-0">
                   <Link to="/contact" onClick={onClose} className="w-full bg-[var(--color-brand)] text-white px-8 py-4 rounded-xl font-bold flex justify-center hover:bg-[var(--color-brand-hover)] transition-all hover:scale-105 shadow-xl shadow-[var(--color-brand)]/20 whitespace-nowrap">
                     Request Deep Analysis
                   </Link>
                </div>
             </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
