import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { PrefetchLink as Link } from '../components/PrefetchLink';
import { ArrowLeft, Play, MonitorPlay, Compass, Search, Share2 } from 'lucide-react';
import { sanityClient, urlFor } from '../lib/sanity';
import { FAQSection } from '../components/FAQSection';

const DEFAULT_VIDEOS = [
  {
    _id: 'vid-1',
    title: 'Modern Computer Software Assurance (CSA): 5 Steps to Accelerate Validation',
    description: 'A comprehensive visual walkthrough demonstrating how to shift testing focus from paperwork volume to risk-based critical thinking and automated execution in GxP environments.',
    duration: '24 min',
    category: 'CSA Framework',
    thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80'
  },
  {
    _id: 'vid-2',
    title: 'ALCOA+ Data Integrity in Laboratory Systems: Audit Trail Deep Dive',
    description: 'Practical demonstration on configuring and performing periodic audit trail reviews for CDS, LIMS, and spectrophotometer workstations.',
    duration: '18 min',
    category: 'Data Integrity',
    thumbnail: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80'
  },
  {
    _id: 'vid-3',
    title: 'Equipment Commissioning & Qualification (CQV): IQ/OQ/PQ Protocol Strategies',
    description: 'Learn best practices for streamlining equipment qualification protocols, avoiding common 483 citations, and integrating sensor calibration records.',
    duration: '28 min',
    category: 'CQV & Engineering',
    thumbnail: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=800&q=80'
  },
  {
    _id: 'vid-4',
    title: 'Validating Cloud & SaaS Systems under 21 CFR Part 11 and EU Annex 11',
    description: 'Expert panel on establishing cloud vendor qualification, multi-tenant data segregation, and automated continuous validation pipelines.',
    duration: '32 min',
    category: 'Cloud Compliance',
    thumbnail: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80'
  }
];

export const VideosPage = () => {
  const [videos, setVideos] = useState<any[]>(DEFAULT_VIDEOS);

  useEffect(() => {
    const query = `*[_type == "video"] | order(publishedAt desc) {
      _id,
      title,
      description,
      duration,
      category,
      "thumbnail": thumbnail.asset->url
    }`;
    sanityClient.fetch(query).then((data) => {
      if (data && Array.isArray(data) && data.length > 0) setVideos(data);
    }).catch(console.error);
  }, []);

  const categories = ['All', ...Array.from(new Set(videos.map(v => v.category).filter(Boolean)))];

  return (
    <div className="pt-20 bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-slate-900 text-white relative pt-10 lg:pt-24 pb-20 px-6 md:px-12 lg:px-24 overflow-hidden border-b border-slate-800">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 pointer-events-none"></div>
         <div className="max-w-7xl mx-auto relative z-10 text-center">
            <Link to="/resources" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8 text-sm font-bold uppercase tracking-wider mx-auto">
              <ArrowLeft className="w-4 h-4" /> Back to Resources
            </Link>
            <div className="flex flex-col items-center justify-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-800 text-[var(--color-brand)] text-xs font-bold rounded-full mb-6 uppercase tracking-wider border border-slate-700 shadow-xl">
                    <MonitorPlay className="w-4 h-4" />
                    Video Knowledge Base
                </div>
                <h1 className="text-5xl md:text-6xl font-sans font-black tracking-tight leading-tight mb-6 text-center">Executive Video Briefs</h1>
                <p className="text-xl text-slate-300 font-light max-w-2xl text-center leading-relaxed mb-10">
                  Curated visual guides, product demonstrations, and technical deep-dives to accelerate your understanding of modern digital compliance.
                </p>
                <div className="w-full max-w-xl relative">
                   <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                     <Search className="w-5 h-5 text-slate-500" />
                   </div>
                   <input type="text" placeholder="Search for 'Data Integrity', 'Part 11', 'CSA'..." className="w-full bg-slate-800/80 border border-slate-700 rounded-xl py-4 pl-12 pr-4 text-white placeholder-slate-500 focus:outline-none focus:border-[var(--color-brand)] focus:ring-1 focus:ring-[var(--color-brand)] transition-all shadow-2xl backdrop-blur-sm" />
                </div>
            </div>
         </div>
      </section>

      {videos.length === 0 ? (
        <div className="py-20 text-center text-slate-500">
          Check back soon for new video content.
        </div>
      ) : (
        <>
          {/* Video Content Grid */}
          <section className="py-10 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
            {/* Filters */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
               <h2 className="text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
                 <Compass className="w-6 h-6 text-[var(--color-brand)]" /> Explore Library
               </h2>
               <div className="flex flex-wrap gap-2 justify-center">
                 {categories.map((cat: any, i) => (
                    <button key={i} className={`px-4 py-2 text-sm font-bold rounded-lg transition shadow-sm border ${i === 0 ? 'bg-[var(--color-brand)] text-white border-transparent shadow-[var(--color-brand-dim)]' : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'}`}>
                      {cat}
                    </button>
                 ))}
               </div>
            </div>

            {/* Video Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
              {videos.map((video, index) => (
                 <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} key={video._id || index} className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col">
                   <div className="h-52 overflow-hidden relative cursor-pointer bg-slate-900">
                     <img loading="lazy" src={video.thumbnail ? (typeof video.thumbnail === 'string' ? video.thumbnail : urlFor(video.thumbnail).width(800).url()) : 'https://placehold.co/800x450'} alt={video.title} className="w-full h-full object-cover group-hover:opacity-75 transition-opacity duration-300" />
                     <div className="absolute inset-0 flex items-center justify-center">
                       <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                         <Play className="w-6 h-6 text-white ml-1" />
                       </div>
                     </div>
                     {video.duration && (
                       <div className="absolute bottom-3 right-3 bg-black/80 text-white text-xs font-bold px-2 py-1 rounded">
                         {video.duration}
                       </div>
                     )}
                     {video.category && (
                       <div className="absolute top-3 left-3 bg-[var(--color-brand)] text-white text-[10px] font-black uppercase tracking-wider px-2 py-1 rounded shadow-lg">
                         {video.category}
                       </div>
                     )}
                   </div>
                   <div className="p-6 flex flex-col flex-grow">
                     <h4 className="text-lg font-bold text-slate-900 mb-2 tracking-tight group-hover:text-[var(--color-brand)] transition-colors line-clamp-2 leading-snug">{video.title}</h4>
                     <p className="text-slate-600 text-sm leading-relaxed mb-6 font-light line-clamp-3">{video.description}</p>
                     <div className="mt-auto flex items-center justify-between pt-4 border-t border-slate-100">
                        <button className="text-slate-400 hover:text-slate-900 transition-colors">
                          <Share2 className="w-4 h-4" />
                        </button>
                        <button className="text-sm font-bold text-slate-900 flex items-center gap-1 group-hover:text-[var(--color-brand)] transition-colors">
                          Watch Video <Play className="w-3 h-3" />
                        </button>
                     </div>
                   </div>
                 </motion.div>
              ))}
            </div>
          </section>
        </>
      )}

      <div className="relative z-10 bg-white">
        <FAQSection 
          faqs={[
            {
              question: "Are these training videos compliant with global standards?",
              answer: "Yes. All our instructional videos and webinars are designed based on current FDA 21 CFR Part 11, EU Annex 11, and ISO standards."
            },
            {
              question: "Who leads these webinars and tutorials?",
              answer: "Our video content is produced and hosted by Dromominds' senior architects, former FDA auditors, and lead quality engineers who have hands-on experience in global deployments."
            },
            {
              question: "Can these videos be used for internal corporate training?",
              answer: "Absolutely. Many of our clients integrate our video tutorials into their internal learning management systems to upskill their Quality and IT teams on modern compliance methodologies like CSA."
            },
            {
              question: "Do you offer live Q&A sessions during webinars?",
              answer: "Yes, our live webinars feature dedicated Q&A segments where our architects address specific challenges faced by attendees. We also offer private workshops upon request."
            },
            {
              question: "How often is new video content uploaded?",
              answer: "We release new technical tutorials, executive summaries, and methodology overviews on a monthly basis, keeping your teams informed of the latest industry shifts."
            }
          ]}
          title="Video Library FAQs"
          subtitle="Learn more about our educational video content and webinars."
        />
      </div>

      {/* SEO Section */}
      <section className="bg-slate-900 text-white py-20 px-6 border-t border-slate-800 mt-12">
        <div className="max-w-4xl mx-auto prose prose-invert lg:prose-lg text-center">
          <h2 className="text-3xl font-black mb-6">Visualizing Quality Assurance</h2>
          <p className="text-slate-400 font-light leading-relaxed mb-6 text-left">
            The complexities of validation, from risk assessments to protocol execution, are often difficult to digest through manuals alone. Our Video Library serves as an immediate, visual translation of dense regulatory frameworks like ISO 13485 and GAMP 5 into actionable, screen-shared reality.
          </p>
          <div className="grid grid-cols-2 gap-4 md:gap-8 text-left mt-10 not-prose">
            <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
              <h4 className="font-bold text-white mb-2 text-lg">For Leadership & QA</h4>
              <p className="text-slate-400 text-sm">Brief executive summaries explaining the ROI of transitioning to automated compliance and the strategic impact of CSA.</p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
              <h4 className="font-bold text-white mb-2 text-lg">For Engineers</h4>
              <p className="text-slate-400 text-sm">Over-the-shoulder tutorials on writing automated test scripts and managing infrastructure as code.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
