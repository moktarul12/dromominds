import React, { useState, useEffect } from 'react';
import { ArrowRight, Server, Activity, ShieldCheck, Cog, Database, Network } from 'lucide-react';
import { PrefetchLink as Link } from './PrefetchLink';
import { sanityClient } from '../lib/sanity';

// Safely map string names to Lucide icons
const IconMap: Record<string, React.ElementType> = {
  Server, Activity, ShieldCheck, Cog, Database, Network
};

export const Services = () => {
  const [services, setServices] = useState<any[]>([]);

  const defaultServices = [
    {
       title: "Computerized System Validation",
       description: "Comprehensive lifecycle validation for critical systems (ERP, LIMS, eQMS). Deploy agile methodology underpinned by GAMP 5 Second Edition to guarantee data integrity.",
       link: "/expertise/consulting",
       linkText: "Explore CSV",
       iconName: "Server"
    },
    {
       title: "Equipment Qualification (EQ)",
       description: "Executing rigorous Design, Installation, Operational, and Performance Qualifications (DQ/IQ/OQ/PQ) aligned with ISPE guidelines. We assure the reliability of critical assets.",
       link: "/expertise/medical-device",
       linkText: "Explore EQ",
       iconName: "Activity"
    },
    {
       title: "QMS Strategy & Advisory",
       description: "Architecting robust Quality Management Systems optimized for ISO 13485 and ICH Q10. Strategic remediation services for CAPAs and regulatory findings ensuring continuous inspection readiness.",
       link: "/expertise/quality",
       linkText: "Enhance QMS",
       iconName: "ShieldCheck"
    }
  ];

  useEffect(() => {
    sanityClient.fetch(`*[_type == "service"] | order(order asc){
      title,
      "slug": slug.current,
      shortDescription,
      icon
    }`).then((data) => {
      if (data && data.length > 0) {
        setServices(data.map((item: any) => ({
          title: item.title,
          description: item.shortDescription,
          link: item.slug ? `/expertise/${item.slug}` : "/expertise/consulting",
          linkText: `Explore ${item.title.split(' ')[0]}`,
          iconName: item.icon || "Cog"
        })));
      } else {
        setServices(defaultServices);
      }
    }).catch((err) => {
      console.error("Failed to fetch services:", err);
      setServices(defaultServices);
    });
  }, []);

  const displayServices = services.length > 0 ? services : defaultServices;

  return (
    <section id="services" className="bg-[#F7F9FA] dark:bg-[#041D28] relative z-10 rounded-t-[2.5rem] md:rounded-t-[3.5rem] -mt-6 md:-mt-10 py-20 px-6 md:px-12 lg:px-24 overflow-hidden border-b border-slate-200 dark:border-[#24566A] shadow-[0_-20px_40px_-20px_rgba(0,0,0,0.1)]">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none z-0"></div>
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_top_right,var(--color-brand-dim),transparent_50%)] pointer-events-none z-0" />
      
      <div className="max-w-6xl mx-auto text-center mb-16 relative z-10">
        <h2 className="text-3xl md:text-5xl font-serif mb-4 text-[#0B1720] dark:text-white tracking-tight">The Life Sciences <span className="italic text-[#145C9E] dark:text-[#CBB9A8]">Compliance Imperative</span></h2>
        <p className="text-[#334E5C] dark:text-[#E5EEF2] max-w-3xl mx-auto mb-12 text-sm md:text-base font-light leading-relaxed">
          Regulatory expectations in life sciences are accelerating — but structured validation and governance are often outpaced. The organizations winning in 2026 are those who built their quality compliance foundation first. Dromominds is purpose-built to be that foundation.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 items-stretch text-left relative shadow-lg rounded-2xl bg-white dark:bg-[#062836] ring-1 ring-slate-200 dark:ring-[#24566A]">
          <div className="p-6 md:p-10 flex flex-col relative transition-all duration-500 hover:bg-slate-50/50 dark:hover:bg-[#083B51]/50 rounded-l-2xl z-0 overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-brand-dim)] rounded-full blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <h3 className="text-lg font-bold mb-3 text-[#0B1720] dark:text-white group-hover:text-[#145C9E] transition-colors">The Validation Gap</h3>
            <p className="text-[#334E5C] dark:text-[#E5EEF2] text-xs md:text-sm leading-relaxed mb-4 flex-grow font-light">
              60% of pharma organizations struggle with scaling validation for cloud infrastructures. Fewer than 6% of enterprise legacy systems meet modern FDA data integrity standards. The gap between digital innovation and compliant deployment is where companies get hurt.
            </p>
          </div>

          <div className="bg-[#062836] text-white rounded-2xl p-6 md:p-10 shadow-xl transform md:-translate-y-2 md:scale-105 z-10 flex flex-col relative overflow-hidden border border-[#24566A]">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--color-brand-dim),transparent_60%)] pointer-events-none z-0" />
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-[var(--color-brand-glow)] blur-[40px] opacity-30 pointer-events-none" />
            <h3 className="text-xl font-serif mb-3 relative z-10 text-white">The Regulatory Convergence</h3>
            <p className="text-[#E5EEF2] text-xs md:text-sm leading-relaxed mb-4 flex-grow relative z-10 font-light">
              FDA's CSA Guidance, EU Annex 11 revisions, and GAMP 5 Second Edition are all converging on the same requirement: Critical systems in regulated contexts must be validated, monitored, and documented via risk-based methodologies.
            </p>
          </div>

          <div className="p-6 md:p-10 flex flex-col relative transition-all duration-500 hover:bg-slate-50/50 dark:hover:bg-[#083B51]/50 rounded-r-2xl z-0 overflow-hidden group">
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-[var(--color-brand-dim)] rounded-full blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <h3 className="text-lg font-bold mb-3 text-[#0B1720] dark:text-white group-hover:text-[#145C9E] transition-colors">The Competitive Window</h3>
            <p className="text-[#334E5C] dark:text-[#E5EEF2] text-xs md:text-sm leading-relaxed mb-4 flex-grow font-light">
              The companies scaling technology fastest aren't the ones with the most pilots — they're the ones who solved GxP governance first. Establishing compliance infrastructure now yields a massive competitive advantage.
            </p>
          </div>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto border-t border-slate-200 dark:border-[#24566A] pt-10 mt-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-serif mb-4 text-[#0B1720] dark:text-white tracking-tight">Enterprise Capabilities</h2>
          <p className="text-[#334E5C] dark:text-[#E5EEF2] max-w-2xl mx-auto text-sm md:text-base font-light leading-relaxed">
            We architect and deliver structured validation, qualification, and advisory services across your value chain.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 items-stretch text-left">
          {displayServices.map((svc: any, idx: number) => {
            const IconComponent = IconMap[svc.iconName] || Cog;
            return (
              <div key={idx} className="bg-white dark:bg-[#062836] rounded-2xl p-6 lg:p-8 border border-slate-200 dark:border-[#24566A] hover:border-transparent hover:ring-2 hover:ring-[#145C9E] hover:shadow-lg hover:-translate-y-1 transition-all duration-500 flex flex-col group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10 w-12 h-12 bg-slate-100 dark:bg-[#083B51] border border-slate-200 dark:border-[#24566A] text-[#145C9E] dark:text-[#CBB9A8] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#145C9E] group-hover:text-white transition-colors duration-500 shadow-sm">
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="relative z-10 text-lg font-bold mb-3 text-[#0B1720] dark:text-white">{svc.title}</h3>
                <p className="relative z-10 text-[#334E5C] dark:text-[#E5EEF2] text-xs md:text-sm leading-relaxed mb-6 flex-grow font-light">
                  {svc.description}
                </p>
                <Link to={svc.link} className="relative z-10 text-[#145C9E] dark:text-[#708BA3] font-bold text-xs tracking-wide uppercase flex items-center gap-2 group-hover:gap-3 transition-all mt-auto">
                  {svc.linkText} <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};


