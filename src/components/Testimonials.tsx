import React, { useState, useEffect } from 'react';
import { Star, Dna, Activity, Microscope, Globe } from 'lucide-react';
import { sanityClient, urlFor } from '../lib/sanity';
import { motion } from 'motion/react';

export const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [dynamicTestimonials, setDynamicTestimonials] = useState<any[]>([]);

  const defaultTestimonials = [
    {
      quote: "Dromominds Solutions transformed our LIMS validation ecosystem, delivering a zero-483 FDA audit outcome within 90 days. True partners in compliance.",
      icon: Dna,
      company: "Apex Clinical",
      name: "Rajesh Kumar",
      role: "Global Head of QA"
    },
    {
      quote: "Their mastery of 21 CFR Part 11 saved us $180k in strategic rework. EU Annex 11 alignment was seamless, enabling efficient global scaling.",
      icon: Activity,
      company: "NovaLife Health",
      name: "Sarah Thompson",
      role: "VP of Regulatory Compliance"
    },
    {
      quote: "The QMS implementation was flawless. We achieved our ISO certification without a single minor non-conformance. An exceptionally rigorous team.",
      icon: Microscope,
      company: "MediGene",
      name: "Dr. Emily Chen",
      role: "Operations Director"
    },
    {
      quote: "Dromominds' CSV framework cut our validation lifecycles in half. Their risk-based approach leveraging GAMP 5 is unmatched in the industry.",
      icon: Globe,
      company: "TechPharma",
      name: "John Martinez",
      role: "Director of Digital Transformation"
    }
  ];

  useEffect(() => {
    sanityClient.fetch(`*[_type == "testimonial"]{
      quote,
      authorName,
      authorRole,
      authorCompany,
      authorImage
    }`).then((data) => {
      if (data && data.length > 0) {
        setDynamicTestimonials(data.map((item: any) => ({
          quote: item.quote,
          company: item.authorCompany,
          name: item.authorName,
          role: item.authorRole,
          image: item.authorImage ? urlFor(item.authorImage).width(150).url() : null,
          icon: Globe // Fallback icon
        })));
      } else {
        setDynamicTestimonials(defaultTestimonials);
      }
    }).catch(err => {
      console.error("Failed to fetch testimonials from Sanity:", err);
      setDynamicTestimonials(defaultTestimonials);
    });
  }, []);

  const testimonials = dynamicTestimonials.length > 0 ? dynamicTestimonials : defaultTestimonials;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section id="evidence" className="bg-[#020617] relative z-10 rounded-t-[2.5rem] md:rounded-t-[3.5rem] -mt-6 md:-mt-10 shadow-[0_-20px_40px_-20px_rgba(0,0,0,0.3)] text-white py-10 lg:py-32 px-6 md:px-12 lg:px-24 overflow-hidden border-b border-gray-800">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(29,78,216,0.1)_0%,transparent_60%),radial-gradient(circle_at_20%_50%,var(--color-brand-glow)_0%,transparent_50%),repeating-linear-gradient(90deg,transparent,transparent_39px,rgba(255,255,255,0.01)_40px),repeating-linear-gradient(0deg,transparent,transparent_39px,rgba(255,255,255,0.01)_40px)] z-0" />
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-serif mb-16 text-center tracking-tight">Client Success & <span className="italic text-gray-400">Proven Outcomes</span></h2>
        
        <div className="h-[380px] relative flex justify-center items-center perspective-[1200px] mb-16 w-full mx-auto">
          {testimonials.map((t, index) => {
            let className = "testimonial-card-3d ";
            if (index === currentTestimonial) {
              className += "active";
            } else if (index === (currentTestimonial - 1 + testimonials.length) % testimonials.length) {
              className += "prev";
            } else if (index === (currentTestimonial + 1) % testimonials.length) {
              className += "next";
            } else {
              className += "hidden-card";
            }

            return (
              <div key={index} className={className} onClick={() => setCurrentTestimonial(index)}>
                 <div className="flex text-amber-400 mb-4">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                 </div>
                 <p className="text-gray-200 italic mb-8 font-light text-base md:text-lg">"{t.quote}"</p>
                 <div className="flex items-center gap-4">
                    {t.image ? (
                        <div className="w-12 h-12 rounded-xl overflow-hidden border border-white/10 shrink-0">
                           <img loading="lazy" src={t.image} alt={t.name} className="w-full h-full object-cover" />
                        </div>
                    ) : (
                        <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center font-bold text-white shadow-glow shrink-0">
                          <t.icon className="w-6 h-6 text-[var(--color-brand)]" />
                        </div>
                    )}
                    <div>
                        <div className="font-bold text-lg leading-tight">{t.name}</div>
                        <div className="text-sm text-[var(--color-brand)] font-medium mb-0.5">{t.company}</div>
                        <div className="text-xs text-gray-400">{t.role}</div>
                    </div>
                 </div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center">
            <button onClick={() => document.querySelector('#audit')?.scrollIntoView({ behavior: 'smooth' })} className="bg-[var(--color-brand)] text-white px-10 py-4 rounded-xl font-bold hover:bg-[var(--color-brand-hover)] transition shadow-glow transform hover:-translate-y-1 text-lg">
                Discuss Your Compliance Strategy &rarr;
            </button>
        </div>
      </div>
    </section>
  );
};
