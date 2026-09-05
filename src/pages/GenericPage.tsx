import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { PrefetchLink as Link } from '../components/PrefetchLink';
import { ArrowLeft, BookOpen, Users, Download, ExternalLink, ChevronRight, FileSignature, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { sanityClient, urlFor } from '../lib/sanity';
import { FAQSection } from '../components/FAQSection';

const DEFAULT_PARTNERS = [
  {
    _id: 'p-1',
    name: 'Veeva Systems',
    tier: 'Strategic Partner',
    desc: 'Pre-validated accelerators and test execution automation for Veeva Vault Quality, RIM, and Clinical applications.',
    industry: 'Life Sciences Cloud & eQMS',
    url: 'https://www.veeva.com'
  },
  {
    _id: 'p-2',
    name: 'SAP Life Sciences',
    tier: 'Enterprise Alliance',
    desc: 'Comprehensive GxP validation, electronic batch records (EBR), and supply chain traceability integration protocols.',
    industry: 'ERP & Supply Chain',
    url: 'https://www.sap.com'
  },
  {
    _id: 'p-3',
    name: 'MasterControl',
    tier: 'Integration Partner',
    desc: 'Automated validation packs and risk-based test protocols for MasterControl Manufacturing Excellence and Quality suites.',
    industry: 'eQMS & Quality Management',
    url: 'https://www.mastercontrol.com'
  },
  {
    _id: 'p-4',
    name: 'Amazon Web Services (AWS)',
    tier: 'Cloud Infrastructure Partner',
    desc: 'Qualified GxP hosting blueprints, shared responsibility compliance matrices, and 21 CFR Part 11 cloud governance.',
    industry: 'Cloud & High-Performance Compute',
    url: 'https://aws.amazon.com/health/'
  },
  {
    _id: 'p-5',
    name: 'Sparta Systems (TrackWise Digital)',
    tier: 'Technology Partner',
    desc: 'Streamlined validation, CAPA workflow automation, and audit-readiness configurations for TrackWise eQMS.',
    industry: 'Enterprise Quality & Compliance',
    url: 'https://www.spartasystems.com'
  },
  {
    _id: 'p-6',
    name: 'Microsoft Azure Life Sciences',
    tier: 'Cloud Architecture Partner',
    desc: 'Qualified Azure infrastructure architectures, continuous compliance monitoring, and validated data lake implementations.',
    industry: 'Enterprise Cloud & AI',
    url: 'https://azure.microsoft.com'
  }
];

export const GenericPage = ({ type }: { type: 'resource' | 'partner' | 'legal' }) => {
  const { id } = useParams();
  
  const formattedTitle = id ? id.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') : (type === 'resource' ? 'Resource Library' : 'Our Partners');

  const [items, setItems] = useState<any[]>(type === 'partner' ? DEFAULT_PARTNERS : []);

  useEffect(() => {
    if (type === 'resource') {
      let queryType = "resource";
      if (id === 'case-studies') queryType = "caseStudy";
      if (id === 'white-papers') queryType = "whitepaper";

      const query = `*[_type == "${queryType}"] | order(publishedAt desc) {
        _id,
        "type": _type,
        title,
        "desc": excerpt,
        "date": publishedAt,
        "image": image.asset->url
      }`;
      sanityClient.fetch(query).then((data) => {
        if (data && Array.isArray(data) && data.length > 0) setItems(data);
      }).catch(console.error);
    } else if (type === 'partner') {
      const query = `*[_type == "partner"] | order(order asc) {
        _id,
        name,
        tier,
        "desc": description,
        industry,
        "image": logo.asset->url,
        url
      }`;
      sanityClient.fetch(query).then((data) => {
        if (data && Array.isArray(data) && data.length > 0) setItems(data);
      }).catch(console.error);
    }
  }, [type, id]);

  const contentList = items;

  return (
    <div className="pt-20 bg-slate-50 min-h-screen">
      {/* Dynamic Hero Section */}
      <section className="bg-slate-900 text-white relative pt-10 lg:pt-24 pb-32 px-6 md:px-12 lg:px-24 overflow-hidden border-b border-slate-800">
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px]"></div>
         <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-[var(--color-brand-dim)]/20 to-transparent blur-3xl mix-blend-overlay"></div>
         <div className="max-w-7xl mx-auto relative z-10">
           <Link to="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8 text-sm font-bold uppercase tracking-wider">
             <ArrowLeft className="w-4 h-4" /> Back Home
           </Link>
           <div className="grid lg:grid-cols-2 gap-12 items-center">
             <div>
               <div className="inline-flex items-center gap-2 bg-slate-800/80 text-[var(--color-brand)] text-xs font-bold px-3 py-1.5 rounded-md mb-6 uppercase tracking-wider border border-slate-700 backdrop-blur-sm">
                   {type === 'resource' ? <BookOpen className="w-3.5 h-3.5" /> : <Users className="w-3.5 h-3.5" />}
                   {type === 'resource' ? 'Intelligence & Assets' : 'Ecosystem'}
               </div>
               <h1 className="text-4xl md:text-6xl font-sans font-extrabold mb-6 tracking-tight leading-tight">{formattedTitle}</h1>
               <p className="text-xl text-slate-400 font-light max-w-xl leading-relaxed">
                 {type === 'resource' 
                    ? 'Deep dive into our expert-crafted whitepapers, case studies, and compliance guides designed for modern life sciences.'
                    : 'Discover the certified technologies and strategic partners we collaborate with to deliver uncompromised validation.'}
               </p>
             </div>
           </div>
         </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-10 lg:py-24 px-6 md:px-12 lg:px-8 max-w-7xl mx-auto">
         <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
               {type === 'resource' ? 'Latest Publications' : 'Our Technology Partners'}
            </h2>
         </div>

         <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-8">
            {type === 'resource' ? contentList.map((item, idx) => (
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} key={item._id || idx} className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200 hover:border-slate-300 hover:shadow-xl transition-all duration-300 group flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <span className="text-xs font-bold text-slate-400 bg-slate-100 px-3 py-1 rounded-full">{item.type || 'Resource'}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight group-hover:text-[var(--color-brand)] transition-colors line-clamp-2">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed max-w-md line-clamp-3 mb-6">{item.desc}</p>
                </div>
                <div className="flex items-center justify-between pt-6 border-t border-slate-100 mt-auto">
                  <span className="text-sm font-medium text-slate-500">{item.date ? new Date(item.date).toLocaleDateString() : ''}</span>
                  <Link to="/contact" className="text-sm font-bold text-[var(--color-brand)] flex items-center gap-1 group-hover:gap-2 transition-all">
                    Access <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            )) : contentList.map((item, idx) => (
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} key={item._id || idx} className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200 hover:border-[var(--color-brand)] hover:shadow-xl transition-all duration-300 flex items-start gap-6 group">
                {item.image ? (
                  <div className="w-16 h-16 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center p-2 flex-shrink-0 group-hover:scale-110 transition-transform">
                    <img src={typeof item.image === 'string' ? item.image : urlFor(item.image).width(100).url()} alt={item.name} className="w-full h-full object-contain" />
                  </div>
                ) : (
                  <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center flex-shrink-0 text-slate-700 border border-slate-100 shadow-inner group-hover:scale-110 transition-transform">
                    <span className="font-black text-xl">{item.name?.charAt(0) || 'P'}</span>
                  </div>
                )}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-[var(--color-brand)] transition-colors">{item.name}</h3>
                    {item.tier && <span className="text-[10px] font-bold uppercase tracking-wider bg-slate-800 text-white px-2 py-0.5 rounded">{item.tier}</span>}
                  </div>
                  {item.industry && <div className="text-sm font-bold text-[var(--color-brand)] mb-3">{item.industry}</div>}
                  <p className="text-slate-600 leading-relaxed text-sm mb-4">{item.desc}</p>
                  <a href={item.url || "/contact"} target={item.url ? "_blank" : "_self"} rel="noreferrer" className="inline-flex items-center gap-1 text-sm font-bold text-slate-900 hover:text-[var(--color-brand)] transition-colors">
                    View Integration <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
            
            {contentList.length === 0 && (
              <div className="col-span-2 text-center py-20 text-slate-500">
                Check back soon for updates.
              </div>
            )}
         </div>
      </section>

      <div className="relative z-10 bg-white">
        <FAQSection 
          faqs={[
            {
              question: "Are your templates and SOPs compliant with current regulations?",
              answer: "Yes, all our templates and SOPs are strictly aligned with current FDA, EMA, and ISO standards, ensuring they provide a robust foundation for your compliance framework."
            },
            {
              question: "Can we customize these resources for our specific operations?",
              answer: "Absolutely. While our resources provide a verified compliance baseline, they are designed to be easily customized to fit your unique operational context and infrastructure."
            },
            {
              question: "How do partner integrations work with Dromominds?",
              answer: "We build pre-validated connectors and methodologies for leading enterprise systems like Veeva, Salesforce, and SAP, significantly reducing deployment and validation time."
            },
            {
              question: "Do you offer consulting on how to deploy these resources?",
              answer: "Yes, our expert architects and validation engineers can guide you through the deployment process to ensure smooth and compliant implementation."
            },
            {
              question: "How frequently are these resources updated?",
              answer: "We continuously monitor global regulatory changes. Our templates, SOPs, and integration methodologies are proactively updated to reflect the latest paradigm shifts, such as GAMP 5 Second Edition and CSA."
            }
          ]}
          title={type === 'resource' ? "Resource FAQs" : "Partner & Integration FAQs"}
          subtitle="Common questions about leveraging Dromominds frameworks and methodologies."
        />
      </div>

      {/* CTA Section */}
      <section className="bg-[var(--color-brand)] text-white py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
           <FileSignature className="w-12 h-12 mx-auto mb-6 text-white/80" />
           <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">Need Expert Guidance?</h2>
           <p className="text-xl text-white/90 mb-10 font-light">Whether you're looking for specific SOP templates or discussing partner integrations, our lead consultants are ready.</p>
           <Link to="/contact" className="bg-white text-[var(--color-brand)] px-8 py-4 rounded-xl font-bold hover:bg-slate-100 transition shadow-xl inline-flex items-center gap-2">
             Schedule a Consultation <ArrowRight className="w-5 h-4" />
           </Link>
        </div>
      </section>
    </div>
  );
};
