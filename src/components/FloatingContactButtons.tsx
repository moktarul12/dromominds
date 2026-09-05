import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { sanityClient } from '../lib/sanity';
import { Linkedin } from 'lucide-react';

export const FloatingContactButtons = () => {
  const [settings, setSettings] = useState<any>(null);

  useEffect(() => {
    sanityClient.fetch('*[_type == "siteSettings"][0]').then(setSettings).catch(console.error);
  }, []);

  // Default to +919748386443 if no phone is found in sanity backend
  const phone = settings?.indiaOfficePhone?.replace(/[^0-9]/g, '') || "919748386443";
  const message = encodeURIComponent("Hi, I would like to know more about your compliance and validation services.");
  const whatsappUrl = `https://wa.me/${phone}?text=${message}`;

  const linkedInUrl = settings?.socialLinks?.linkedin || "https://www.linkedin.com/company/dromominds-solutions/";

  return (
    <div className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-[90] flex flex-col gap-3 sm:gap-4">
      {/* LinkedIn Button */}
      <motion.a
        href={linkedInUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.8, type: 'spring', stiffness: 200, damping: 20 }}
        className="w-[48px] h-[48px] sm:w-[52px] sm:h-[52px] bg-[#0077b5] text-white rounded-full flex items-center justify-center shadow-[0_4px_14px_rgba(0,119,181,0.4)] hover:bg-[#005582] hover:shadow-[0_6px_20px_rgba(0,119,181,0.6)] hover:-translate-y-1 transition-all duration-300 group relative"
        aria-label="Follow us on LinkedIn"
      >
        <Linkedin className="w-6 h-6 sm:w-7 sm:h-7 fill-current" />
        
        {/* Tooltip */}
        <span className="hidden sm:block absolute right-[4.5rem] bg-gray-900 text-white text-sm font-medium py-2 px-4 rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap shadow-xl border border-gray-700 pointer-events-none translate-x-2 group-hover:translate-x-0 origin-right">
          Follow on LinkedIn
          <span className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-gray-900 border-t border-r border-gray-700 rotate-45"></span>
        </span>
      </motion.a>

      {/* WhatsApp Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 200, damping: 20 }}
        className="w-[52px] h-[52px] sm:w-14 sm:h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_4px_14px_rgba(37,211,102,0.4)] hover:bg-[#128C7E] hover:shadow-[0_6px_20px_rgba(37,211,102,0.6)] hover:-translate-y-1 transition-all duration-300 group relative"
        aria-label="Chat with us on WhatsApp"
      >
        <svg
          viewBox="0 0 24 24"
          className="w-7 h-7 sm:w-8 sm:h-8"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
        </svg>
        
        {/* Tooltip */}
        <span className="hidden sm:block absolute right-[4.5rem] bg-gray-900 text-white text-sm font-medium py-2 px-4 rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap shadow-xl border border-gray-700 pointer-events-none translate-x-2 group-hover:translate-x-0 origin-right">
          Chat with us
          <span className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-gray-900 border-t border-r border-gray-700 rotate-45"></span>
        </span>
      </motion.a>
    </div>
  );
};
