import React, { useState } from 'react';
import { Mail, CheckCircle2, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus('idle'), 3000);
    }, 1000);
  };

  return (
    <section className="py-20 bg-[var(--color-brand)] text-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-black opacity-[0.03] rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.5 }}
        >
          <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm border border-white/20">
            <Mail className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4 text-white">Subscribe to Regulatory Updates</h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Join 10,000+ life sciences professionals receiving our monthly insights on FDA compliance, validation strategies, and industry trends.
          </p>

          <form onSubmit={handleSubmit} className="max-w-xl mx-auto relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Mail className="h-5 w-5 text-gray-400 group-focus-within:text-[var(--color-brand)] transition-colors" />
            </div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your corporate email"
              required
              disabled={status !== 'idle'}
              className="block w-full pl-12 pr-36 py-4 rounded-full border-0 text-gray-900 bg-white placeholder:text-gray-400 focus:ring-4 focus:ring-white/30 shadow-xl transition-all disabled:opacity-80 font-medium"
            />
            <button
              type="submit"
              disabled={status !== 'idle'}
              className="absolute inset-y-1 right-1 flex items-center justify-center px-6 bg-slate-900 hover:bg-slate-800 text-white rounded-full font-bold text-sm transition-all shadow-md disabled:opacity-50"
            >
              {status === 'submitting' ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              ) : status === 'success' ? (
                <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4"/> Subscribed</span>
              ) : (
                <span className="flex items-center gap-2">Subscribe <ArrowRight className="w-4 h-4" /></span>
              )}
            </button>
          </form>
          
          <p className="mt-4 text-sm text-white/60 font-light">
            We respect your privacy. No spam, just high-value compliance insights.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
