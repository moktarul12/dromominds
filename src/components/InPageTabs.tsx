import React, { useState, useEffect } from 'react';

const tabs = [
  { id: 'overview', label: 'Overview' },
  { id: 'clients', label: 'Trusted By' },
  { id: 'services', label: 'Capabilities' },
  { id: 'why-us', label: 'Why Us' },
  { id: 'process', label: 'Framework' },
  { id: 'evidence', label: 'Client Evidence' },
  { id: 'audit', label: 'Assessment' },
  { id: 'resources', label: 'Resources' },
];

export const InPageTabs = () => {
  const [active, setActive] = useState('overview');

  const scrollTo = (id: string) => {
    setActive(id);
    const el = document.getElementById(id);
    if (el) {
       const offset = 120; // top offset
       const bodyRect = document.body.getBoundingClientRect().top;
       const elementRect = el.getBoundingClientRect().top;
       const elementPosition = elementRect - bodyRect;
       const offsetPosition = elementPosition - offset;

       window.scrollTo({
         top: offsetPosition,
         behavior: 'smooth'
       });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // Offset for header + tabs

      // Check which section is currently active
      for (let i = tabs.length - 1; i >= 0; i--) {
        const section = document.getElementById(tabs[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActive(tabs[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="sticky top-0 z-[60] bg-white border-b border-gray-100 shadow-sm overflow-x-auto no-scrollbar">
       <div className="max-w-6xl mx-auto px-4 md:px-6 flex justify-start md:justify-center items-center py-3 md:py-4 gap-2 md:gap-4 w-full">
         {tabs.map(tab => (
           <button
             key={tab.id}
             onClick={() => scrollTo(tab.id)}
             className={`px-4 md:px-5 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-bold transition-all whitespace-nowrap shrink-0 ${
               active === tab.id 
                 ? 'bg-[var(--color-brand)] text-white shadow-md' 
                 : 'text-[#0f172a] hover:text-[var(--color-brand)] bg-gray-50 md:bg-transparent'
             }`}
           >
             {tab.label}
           </button>
         ))}
       </div>
    </div>
  );
};


