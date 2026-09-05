import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight, User } from 'lucide-react';
import { sanityClient } from '../lib/sanity';

export const CaseStudies = () => {
  const localCaseStudies = [
    {
      title: "Laboratory System Validation",
      challenge: "A top-tier CRO needed to rapidly validate a multi-site global LIMS deployment across 4 continents within 6 months.",
      solution: "Deployed a centralized validation governance model with automated testing integration for system configurators.",
      outcome: "Completed qualification 4 weeks ahead of schedule. Passed 3 simultaneous sponsor audits in the first quarter post-go-live."
    },
    {
      title: "Equipment Qualification",
      challenge: "A sterile injectables manufacturer faced a backlog of 200+ unqualified critical manufacturing assets nearing commercial launch.",
      solution: "Executed a risk-based (GAMP 5) bulk qualification strategy, utilizing family-grouping for identical equipment and templated DQ/IQ/OQ/PQ protocols.",
      outcome: "Cleared entire backlog in 90 days. Zero FDA 483 observations during subsequent pre-approval inspection (PAI)."
    },
    {
      title: "Data Integrity Remediation",
      challenge: "Warning letter issued to an API manufacturer due to severe ALCOA+ compliance failures involving shared credentials and orphaned data.",
      solution: "Immediate triage of electronic systems, enforcement of strict AD/LDAP role groupings, and retroactive audit trail reviews.",
      outcome: "Warning letter lifted after 12 months. Established a sustainable Data Governance Board ensuring continuous compliance."
    },
    {
      title: "QMS Digital Transformation",
      challenge: "A global biotech company was relying on fragmented, paper-based CAPA and Change Control systems leading to massive redundancies.",
      solution: "Architected and validated a unified SaaS eQMS solution, harmonizing 15 disparate regional workflows into a single master process.",
      outcome: "Reduced CAPA cycle times by 65%. Decreased QA document retrieval time from hours to seconds during inspections."
    }
  ];

  const [caseStudies, setCaseStudies] = useState<any[]>(localCaseStudies);

  useEffect(() => {
    sanityClient.fetch(`*[_type == "caseStudy"] | order(_createdAt desc)`).then(data => {
      if (data && data.length > 0) {
        setCaseStudies(data);
      }
    }).catch(console.error);
  }, []);

  return (
    <section className="py-10 lg:py-24 bg-white dark:bg-slate-950 border-t border-gray-100 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-[var(--color-brand)] uppercase tracking-widest mb-3">Proven Success</h2>
          <h3 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight">Client Case Studies</h3>
          <p className="mt-6 text-xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto font-light">
            Real-world challenges solved through disciplined execution and regulatory mastery.
          </p>
        </div>

        <div className="flex overflow-x-auto snap-x snap-mandatory [&::-webkit-scrollbar]:hidden gap-4 md:gap-6 pb-4 md:grid md:grid-cols-2 md:overflow-visible">
          {caseStudies.map((cs, i) => (
             <motion.div 
               key={i} 
               initial={{ opacity: 0, y: 20 }} 
               whileInView={{ opacity: 1, y: 0 }} 
               viewport={{ once: true }} 
               transition={{ duration: 0.5, delay: i * 0.1 }}
               className="min-w-[85vw] snap-center md:min-w-0 bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-3xl p-6 lg:p-8 relative overflow-hidden group"
             >
               <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 border-b border-gray-200 dark:border-slate-800 pb-4">{cs.title}</h4>
               
               <div className="space-y-6">
                 <div>
                   <div className="text-xs font-bold text-amber-600 uppercase tracking-widest mb-1">Challenge</div>
                   <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-light">{cs.challenge}</p>
                 </div>
                 <div>
                   <div className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-1">Solution</div>
                   <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-light">{cs.solution}</p>
                 </div>
                 <div className="bg-emerald-50 dark:bg-emerald-900/10 p-4 rounded-xl border border-emerald-100 dark:border-emerald-800/30">
                   <div className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-1 flex items-center gap-2">
                     <CheckCircle2 className="w-4 h-4" /> Outcome
                   </div>
                   <p className="text-gray-900 dark:text-emerald-100 font-medium leading-relaxed">{cs.outcome}</p>
                 </div>

                 {cs.author && (
                   <div className="pt-4 mt-6 border-t border-gray-200 dark:border-slate-800 flex items-center gap-3">
                     <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500">
                       <User className="w-4 h-4" />
                     </div>
                     <div>
                       <div className="text-sm font-bold text-gray-900 dark:text-white">{cs.author}</div>
                       {cs.authorType && (
                         <div className="text-xs font-medium text-[var(--color-brand)] uppercase tracking-wider">{cs.authorType}</div>
                       )}
                     </div>
                   </div>
                 )}
               </div>
             </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
