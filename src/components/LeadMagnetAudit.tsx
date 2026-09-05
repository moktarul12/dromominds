import React from 'react';
import { ArrowRight } from 'lucide-react';
import { PrefetchLink as Link } from './PrefetchLink';

export const LeadMagnetAudit = () => (
  <section id="audit" className="relative z-10 rounded-t-[2.5rem] md:rounded-t-[3.5rem] -mt-6 md:-mt-10 shadow-[0_-20px_40px_-20px_rgba(0,0,0,0.2)] py-10 lg:py-24 px-6 md:px-12 lg:px-24 overflow-hidden bg-slate-950">
    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none z-0 mix-blend-overlay"></div>
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,var(--color-brand-glow),transparent_50%)] pointer-events-none z-0" />
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,var(--color-brand-dim),transparent_50%)] pointer-events-none z-0" />
    
    <div className="max-w-4xl mx-auto relative z-10 text-center">
      <h2 className="text-4xl md:text-6xl font-serif text-white mb-6 leading-[1.1] tracking-tight">
        Ready to close the <br className="hidden md:block" /> <span className="italic text-gray-400">compliance gap?</span>
      </h2>
      <p className="text-gray-300 mb-12 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
        Start with a structured Compliance Readiness Assessment — fixed-fee, executive-ready output. Uncover critical vulnerabilities in your system validation and QMS.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <Link to="/contact" className="bg-[var(--color-brand)] text-white px-8 py-4 rounded-full font-bold hover:bg-[var(--color-brand-hover)] transition shadow-glow flex justify-center items-center gap-2 text-lg w-full sm:w-auto">
          Explore Engagement Options <ArrowRight className="w-5 h-5" />
        </Link>
        <Link to="/expertise/managed-services" className="bg-transparent border border-white/20 text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition flex justify-center items-center gap-2 text-lg backdrop-blur-sm w-full sm:w-auto">
          View Validation Services
        </Link>
      </div>
    </div>
  </section>
);


