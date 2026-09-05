import React, { useState, useEffect } from 'react';
import { Pill, Dna, Activity, Search, Building2, Microchip, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { sanityClient } from '../lib/sanity';

export const IndustriesServed = () => {
  const localIndustries = [
    { title: "Pharmaceutical Manufacturing", icon: Pill, desc: "End-to-end validation for solid dose, biologics, and sterile manufacturing facilities worldwide." },
    { title: "Biotechnology", icon: Dna, desc: "Agile compliance frameworks suited for fast-scaling R&D and pilot manufacturing operations." },
    { title: "Medical Devices", icon: Microchip, desc: "Rigorous quality systems validation and Software as a Medical Device (SaMD) compliance." },
    { title: "Clinical Research Organizations (CROs)", icon: Activity, desc: "Ensuring unassailable data integrity across global, multi-center clinical trials." },
    { title: "Laboratories", icon: Search, desc: "LIMS, ELN, and CDS qualification enforcing strict GLP and Part 11 requirements." },
    { title: "Healthcare Technology", icon: Building2, desc: "Securing cloud platforms and ensuring HIPAA/GDPR alignment for connected health systems." }
  ];

  const [industries, setIndustries] = useState<any[]>(localIndustries);

  useEffect(() => {
    sanityClient.fetch(`*[_type == "industry"] | order(order asc)`).then((data) => {
      if (data && data.length > 0) {
        setIndustries(data);
      }
    }).catch(console.error);
  }, []);

  return (
    <section className="py-10 lg:py-24 bg-gray-50 dark:bg-slate-900 border-t border-gray-200 dark:border-slate-800 transition-colors duration-300 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-brand)]/5 blur-3xl rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-[var(--color-brand)] uppercase tracking-widest mb-3">Sectors We Empower</h2>
          <h3 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight">Industries We Support</h3>
          <p className="mt-6 text-xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto font-light">
            Deep domain expertise across the entire life sciences spectrum, aligning specific industrial processes with universal compliance mandates.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 md:gap-8">
          {industries.map((ind, i) => {
            const IconCmp = ind.icon && typeof ind.icon === 'object' ? ind.icon : CheckCircle2;
            return (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white dark:bg-slate-950 border border-gray-100 dark:border-slate-800 rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 hover:shadow-xl transition-all duration-300 group flex flex-col"
              >
                <div className="w-10 h-10 md:w-14 md:h-14 bg-gray-50 dark:bg-slate-900 rounded-xl md:rounded-2xl flex items-center justify-center text-[var(--color-brand)] mb-3 md:mb-6 border border-gray-100 dark:border-slate-800">
                  <IconCmp className="w-5 h-5 md:w-7 md:h-7" />
                </div>
                <h4 className="text-sm sm:text-base md:text-xl font-bold text-gray-900 dark:text-white mb-2 md:mb-3">{ind.title}</h4>
                <p className="text-[11px] sm:text-xs md:text-base text-gray-500 dark:text-gray-400 leading-relaxed font-light flex-grow">{ind.desc || ind.description}</p>
                <div className="mt-4 md:mt-6 flex items-center text-[11px] md:text-sm font-bold text-[var(--color-brand)] opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                  Explore <span className="hidden sm:inline ml-1">Solutions</span> <svg className="w-3 h-3 md:w-4 md:h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
