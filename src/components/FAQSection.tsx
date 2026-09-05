import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

export interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQ[];
  title?: string;
  subtitle?: string;
}

export function FAQSection({ faqs, title = "Frequently Asked Questions", subtitle = "Find answers to common questions about our services and methodology." }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section className="py-16 lg:py-24 bg-white dark:bg-slate-950 border-t border-gray-100 dark:border-slate-800">
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-4">{title}</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">{subtitle}</p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border rounded-xl overflow-hidden transition-colors ${
                openIndex === index 
                  ? 'border-[var(--color-brand)] bg-gray-50 dark:bg-slate-900/50' 
                  : 'border-gray-200 dark:border-slate-800 hover:border-gray-300 dark:hover:border-slate-700 bg-white dark:bg-slate-900'
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none"
              >
                <span className="font-bold text-slate-900 dark:text-white pr-8">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-slate-500 transition-transform duration-300 flex-shrink-0 ${openIndex === index ? 'rotate-180 text-[var(--color-brand)]' : ''}`} 
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 text-slate-600 dark:text-slate-300 leading-relaxed">
                      <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
