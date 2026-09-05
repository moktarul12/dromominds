import React from 'react';
import { ShieldCheck, Target, Activity, FileCheck, Layers, GitMerge, FileSignature } from 'lucide-react';
import { motion } from 'motion/react';

export const ComplianceStandards = () => {
  const standards = [
    { title: "FDA 21 CFR Part 11", desc: "Electronic records, electronic signatures, and audit trails.", icon: ShieldCheck },
    { title: "EU Annex 11", desc: "Computerised systems governance and lifecycle documentation.", icon: FileCheck },
    { title: "GAMP 5", desc: "Risk-Based Approach to Compliant GxP Computerized Systems.", icon: Layers },
    { title: "ICH Q9", desc: "Quality Risk Management implementation and adherence.", icon: Target },
    { title: "ALCOA+", desc: "Data Integrity principles for Attributable, Legible, Original data.", icon: Activity },
    { title: "ISO 9001", desc: "Quality Management Systems standard.", icon: GitMerge },
    { title: "ISO 13485", desc: "Medical devices - Quality management systems requirements.", icon: FileSignature },
    { title: "GCP & GLP", desc: "Good Clinical and Good Laboratory Practice adherence.", icon: FileCheck }
  ];

  return (
    <section className="py-10 lg:py-24 bg-white dark:bg-slate-950 border-b border-gray-100 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-sm font-bold text-[var(--color-brand)] uppercase tracking-widest mb-3">Global Compliance Frameworks</h2>
          <h3 className="text-2xl sm:text-3xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight">Trust & Compliance Standards</h3>
          <p className="mt-4 md:mt-6 text-base md:text-xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto font-light">
            We ensure your enterprise securely adheres to the most stringent global life sciences regulations and standards.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
          {standards.map((std, i) => {
            const Icon = std.icon;
            return (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-2xl p-4 md:p-6 hover:shadow-lg hover:border-[var(--color-brand)] dark:hover:border-[var(--color-brand)] transition-all group"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 bg-white dark:bg-slate-800 rounded-xl mb-3 md:mb-6 shadow-sm border border-gray-100 dark:border-slate-700 flex items-center justify-center text-gray-400 group-hover:text-[var(--color-brand)] transition-colors">
                  <Icon className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <h4 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 dark:text-white mb-1.5 md:mb-2">{std.title}</h4>
                <p className="text-[11px] sm:text-xs md:text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{std.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
