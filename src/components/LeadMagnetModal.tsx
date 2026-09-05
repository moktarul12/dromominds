import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Download, ShieldCheck, FileText, CheckCircle2, Loader2, ArrowRight } from 'lucide-react';

interface LeadMagnetModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LeadMagnetModal = ({ isOpen, onClose }: LeadMagnetModalProps) => {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    company: ''
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus('idle');

    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbzg74_LvtolYXjTCMYQG3oNPg8U29N3J55z4ZChRzp3A-MByIztt-hsPJL9ui09VP13/exec", {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8"
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          email: formData.email,
          company: formData.company
        })
      });

      if (response.ok || response.type === 'opaque') {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex flex-col p-4 sm:p-6 py-10 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.15 }}
            className="relative w-full max-w-4xl bg-white dark:bg-slate-950 rounded-2xl shadow-2xl z-10 flex flex-col md:flex-row border border-gray-200 dark:border-slate-800 m-auto overflow-hidden shadow-2xl"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="absolute top-4 right-4 z-20 p-2 text-white/80 hover:text-white bg-black/10 hover:bg-black/20 md:text-gray-400 md:hover:text-gray-900 dark:md:hover:text-white md:bg-gray-100/50 md:hover:bg-gray-100 dark:md:bg-slate-800/50 dark:md:hover:bg-slate-800 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left Column (Visuals & Value Prop) */}
            <div className="w-full md:w-5/12 bg-[var(--color-brand)] p-8 md:p-10 text-white flex flex-col justify-between relative shrink-0">
              <div className="absolute top-0 right-0 p-12 opacity-10 drop-shadow-2xl translate-x-1/3 -translate-y-1/3">
                 <ShieldCheck className="w-64 h-64" />
              </div>
              
              <div className="relative z-10 hidden sm:block">
                <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-bold tracking-wider uppercase mb-6 drop-shadow-sm border border-white/30 text-white shadow-sm">
                  Free Resource
                </span>
                
                <h3 className="text-2xl sm:text-3xl font-serif font-bold mb-4 leading-tight drop-shadow-md">
                  The Complete<br/>CSV Readiness<br/>Checklist
                </h3>
                
                <p className="text-white/90 text-sm mb-8 leading-relaxed font-medium">
                  Ensure your computerized systems are 100% audit-ready. Uncover hidden gaps in your validation protocols before the FDA does.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                     <CheckCircle2 className="w-5 h-5 text-white shrink-0 mt-0.5 opacity-90 drop-shadow-sm" />
                    <span className="text-sm font-medium text-white/95">Part 11 & Annex 11 Mapping</span>
                  </div>
                  <div className="flex items-start gap-3">
                     <CheckCircle2 className="w-5 h-5 text-white shrink-0 mt-0.5 opacity-90 drop-shadow-sm" />
                    <span className="text-sm font-medium text-white/95">Data Integrity (ALCOA+) Test Cases</span>
                  </div>
                  <div className="flex items-start gap-3">
                     <CheckCircle2 className="w-5 h-5 text-white shrink-0 mt-0.5 opacity-90 drop-shadow-sm" />
                    <span className="text-sm font-medium text-white/95">Vendor Audit Worksheet</span>
                  </div>
                </div>
              </div>
              
              <div className="relative z-10 sm:hidden pr-12">
                <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-bold tracking-wider uppercase mb-2 drop-shadow-sm border border-white/30 text-white shadow-sm">
                  Free Resource
                </span>
                <h3 className="text-xl font-serif font-bold leading-tight drop-shadow-md mb-2">
                  The Complete CSV Readiness Checklist
                </h3>
              </div>
              
              <div className="mt-4 sm:mt-8 relative z-10 sm:pt-6 sm:border-t border-white/20 hidden sm:block">
                <p className="text-xs text-white/70 italic">"This checklist helped us avoid 3 critical findings during our last inspection." – QA Director</p>
              </div>
            </div>

            {/* Right Column (Form) */}
            <div className="w-full md:w-7/12 p-6 sm:p-8 md:p-12 relative flex items-center justify-center dark:bg-slate-900 border-t md:border-t-0 md:border-l border-gray-100 dark:border-slate-800">
              
              <div className="w-full max-w-sm">
                {status === 'success' ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center"
                  >
                    <div className="w-20 h-20 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-10 h-10 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Thank you!</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-8 border-b border-gray-100 dark:border-slate-800 pb-8">
                      Your request has been received. The checklist will be sent to your email shortly.
                    </p>
                    <button onClick={onClose} className="w-full bg-slate-900 text-white dark:bg-white dark:text-slate-900 px-6 py-4 rounded-xl font-bold hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                      Close Window
                    </button>
                  </motion.div>
                ) : (
                  <>
                    <div className="mb-8">
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Claim Your Copy</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Tell us where to send your digital assets.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">First Name *</label>
                        <input 
                          type="text" 
                          required
                          value={formData.firstName}
                          onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 dark:bg-slate-950 dark:border-slate-800 rounded-xl focus:border-[var(--color-brand)] focus:ring-1 focus:ring-[var(--color-brand)] outline-none transition-all text-gray-900 dark:text-white" 
                          placeholder="Jane"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">Work Email *</label>
                        <input 
                          type="email" 
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 dark:bg-slate-950 dark:border-slate-800 rounded-xl focus:border-[var(--color-brand)] focus:ring-1 focus:ring-[var(--color-brand)] outline-none transition-all text-gray-900 dark:text-white" 
                          placeholder="jane@company.com"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">Company <span className="opacity-60 font-normal normal-case">(Optional)</span></label>
                        <input 
                          type="text" 
                          value={formData.company}
                          onChange={(e) => setFormData({...formData, company: e.target.value})}
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 dark:bg-slate-950 dark:border-slate-800 rounded-xl focus:border-[var(--color-brand)] focus:ring-1 focus:ring-[var(--color-brand)] outline-none transition-all text-gray-900 dark:text-white" 
                          placeholder="Acme Biotech"
                        />
                      </div>

                      {status === 'error' && (
                        <p className="text-rose-500 text-sm font-medium">Something went wrong. Please try again.</p>
                      )}

                      <button 
                        type="submit" 
                        disabled={loading}
                        className="w-full mt-2 bg-[var(--color-brand)] text-white px-6 py-4 rounded-xl font-bold hover:bg-[var(--color-brand-hover)] transition-all flex items-center justify-center gap-2 group disabled:opacity-70 shadow-lg shadow-[var(--color-brand)]/20"
                      >
                        {loading ? (
                          <Loader2 className="w-5 h-5 animate-spin" />
                        ) : (
                          <>
                            Get Free Access <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </button>
                      
                      <p className="text-[11px] text-gray-400 dark:text-gray-500 text-center mt-4">
                        By submitting, you agree to our privacy policy and to receive occasional industry insights. You can unsubscribe anytime.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
