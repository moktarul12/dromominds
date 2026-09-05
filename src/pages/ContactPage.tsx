import React, { useState, useEffect } from 'react';
import { ArrowRight, MapPin, Mail, Phone, MessageSquare, Globe2, Loader2, CheckCircle2, Building2, Building, Copy, Check, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';
import { sanityClient, urlFor } from '../lib/sanity';
import { SEO } from '../components/SEO';

import { FAQSection } from '../components/FAQSection';

export const ContactPage = () => {
  const [settings, setSettings] = useState<any>(null);
  const [testimonials, setTestimonials] = useState<any[]>([]);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    companyName: '',
    inquiryType: 'Strategic Consulting',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [copiedAddress, setCopiedAddress] = useState<string | null>(null);

  const handleCopyAddress = (text: string, label: string) => {
    navigator.clipboard.writeText(text.replace(/\n/g, ', '));
    setCopiedAddress(label);
    setTimeout(() => setCopiedAddress(null), 2000);
  };

  useEffect(() => {
    sanityClient.fetch(`*[_type == "siteSettings"][0]`).then(setSettings).catch(console.error);
    
    sanityClient.fetch(`*[_type == "testimonial"]`).then((data) => {
      if (data && data.length > 0) {
        setTestimonials(data);
      }
    }).catch(console.error);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus('idle');

    try {
      const payload = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phoneNumber,
        company: formData.companyName,
        inquiryType: formData.inquiryType,
        message: formData.message
      };

      const response = await fetch("https://script.google.com/macros/s/AKfycbycup-QO6GSHrNv1xIIkH5CJyK0nUZBjbh5tKd790Mtoc5tXogg0cVGxF8EthhWFHO8/exec", {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8"
        },
        body: JSON.stringify(payload)
      });

      if (response.ok || response.type === 'opaque') {
        setStatus('success');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phoneNumber: '',
          companyName: '',
          inquiryType: 'Strategic Consulting',
          message: ''
        });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-10 lg:pt-24 bg-[#020617] min-h-screen selection:bg-[var(--color-brand)] selection:text-white">
      <SEO 
        title="Contact Us" 
        description="Get in touch with Dromominds Solutions for compliance and validation expertise."
      />
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 md:px-12 lg:px-24 overflow-hidden z-10 text-white">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/micro-carbon.png')] opacity-10 pointer-events-none z-0 mix-blend-overlay"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 text-white text-xs font-bold px-4 py-2 rounded-full mb-6 sm:mb-8 uppercase tracking-widest">
              <MapPin className="w-4 h-4 text-[var(--color-brand)]" /> Reach Us
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-4 sm:mb-6 tracking-tight">Let's build <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-[var(--color-brand)]">together.</span></h1>
            <p className="text-base sm:text-xl text-slate-300 font-light max-w-2xl mx-auto leading-relaxed text-balance">Connect with our compliance and validation team. We're ready to architect your compliance journey.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-8 sm:py-12 px-4 sm:px-6 md:px-12 lg:px-24 max-w-7xl mx-auto relative z-20 pb-20 sm:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Details & Office Addresses */}
          <div className="lg:col-span-2 space-y-6 sm:space-y-8">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="bg-white/5 backdrop-blur-md p-5 sm:p-7 md:p-8 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[var(--color-brand)]/20 border border-[var(--color-brand)]/40 flex items-center justify-center text-[var(--color-brand)] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Reach Us</div>
                    <h2 className="text-xl font-serif font-bold text-white tracking-tight">
                      Global Offices
                    </h2>
                  </div>
                </div>
                <div className="flex gap-1.5">
                  <span className="text-[10px] font-bold px-2.5 py-1 bg-[#1D4ED8]/20 border border-[#1D4ED8]/40 text-blue-300 rounded-lg uppercase tracking-wider">
                    Netherlands
                  </span>
                  <span className="text-[10px] font-bold px-2.5 py-1 bg-[var(--color-brand)]/20 border border-[var(--color-brand)]/40 text-blue-300 rounded-lg uppercase tracking-wider">
                    India
                  </span>
                </div>
              </div>
              
               <div className="space-y-4 relative z-10">
                 {/* Netherlands Office Card */}
                 {(() => {
                   const nlAddr = settings?.netherlandsOfficeAddress || "Colijnlaan 72, 1421 CB\nUithoorn, Netherlands";
                   const nlPhone = settings?.netherlandsOfficePhone || "+31 6 30971725";
                   return (
                     <div className="bg-slate-900/90 border border-white/10 hover:border-[#06B6D4]/60 rounded-2xl p-4 sm:p-5 transition-all duration-300 shadow-xl group/card">
                       <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-white/10">
                         <div className="flex items-center gap-2">
                           <Globe2 className="w-4 h-4 text-[#06B6D4] shrink-0" />
                           <span className="text-xs font-bold text-white uppercase tracking-wider">Netherlands Office</span>
                         </div>
                         <div className="flex items-center gap-1.5">
                           <button
                             type="button"
                             onClick={() => handleCopyAddress(nlAddr, 'netherlands')}
                             className="p-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white transition-colors text-xs flex items-center gap-1"
                             title="Copy address"
                           >
                             {copiedAddress === 'netherlands' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                             <span className="hidden sm:inline text-[11px]">{copiedAddress === 'netherlands' ? 'Copied' : 'Copy'}</span>
                           </button>
                           <a
                             href={`https://maps.google.com/?q=${encodeURIComponent(nlAddr.replace(/\n/g, ', '))}`}
                             target="_blank"
                             rel="noopener noreferrer"
                             className="p-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-slate-300 hover:text-[#67E8F9] transition-colors text-xs flex items-center gap-1"
                             title="Open in Google Maps"
                           >
                             <ExternalLink className="w-3.5 h-3.5" />
                             <span className="hidden sm:inline text-[11px]">Map</span>
                           </a>
                         </div>
                       </div>
                       <p className="text-sm text-slate-200 leading-relaxed font-normal whitespace-pre-wrap pl-2.5 border-l-2 border-[#06B6D4] ml-0.5 mb-3">
                         {nlAddr}
                       </p>
                       <div className="pt-2 border-t border-white/5 flex items-center justify-between text-xs">
                         <span className="text-slate-400 font-medium flex items-center gap-1.5">
                           <Phone className="w-3.5 h-3.5 text-[#06B6D4]" /> Netherlands Line
                         </span>
                         <a href={`tel:${nlPhone.replace(/[^0-9+]/g, '')}`} className="font-bold text-blue-300 hover:underline">
                           {nlPhone}
                         </a>
                       </div>
                     </div>
                   );
                 })()}

                 {/* Bengaluru HQ Card */}
                 {(() => {
                   const bgAddr = settings?.bengaluruOfficeAddress || settings?.indiaOfficeAddress || "98A Ground Floor, 5th Cross,\nRajendra Nagar, Koramangala,\nBengaluru, 560047, India";
                   return (
                     <div className="bg-slate-900/90 border border-white/10 hover:border-[#1D4ED8]/60 rounded-2xl p-4 sm:p-5 transition-all duration-300 shadow-xl group/card">
                       <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-white/10">
                         <div className="flex items-center gap-2">
                           <Building2 className="w-4 h-4 text-[#1D4ED8] shrink-0" />
                           <span className="text-xs font-bold text-white uppercase tracking-wider">India HQ — Bengaluru</span>
                           <span className="text-[10px] font-bold bg-[#1D4ED8]/20 text-blue-300 px-2 py-0.5 rounded border border-[#1D4ED8]/40">HQ</span>
                         </div>
                         <div className="flex items-center gap-1.5">
                           <button
                             type="button"
                             onClick={() => handleCopyAddress(bgAddr, 'bengaluru')}
                             className="p-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white transition-colors text-xs flex items-center gap-1"
                             title="Copy address"
                           >
                             {copiedAddress === 'bengaluru' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                             <span className="hidden sm:inline text-[11px]">{copiedAddress === 'bengaluru' ? 'Copied' : 'Copy'}</span>
                           </button>
                           <a
                             href={`https://maps.google.com/?q=${encodeURIComponent(bgAddr.replace(/\n/g, ', '))}`}
                             target="_blank"
                             rel="noopener noreferrer"
                             className="p-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-slate-300 hover:text-blue-300 transition-colors text-xs flex items-center gap-1"
                             title="Open in Google Maps"
                           >
                             <ExternalLink className="w-3.5 h-3.5" />
                             <span className="hidden sm:inline text-[11px]">Map</span>
                           </a>
                         </div>
                       </div>
                       <p className="text-sm text-slate-200 leading-relaxed font-normal whitespace-pre-wrap pl-2.5 border-l-2 border-[#1D4ED8] ml-0.5">
                         {bgAddr}
                       </p>
                     </div>
                   );
                 })()}

                 {/* Kolkata Office Card */}
                 {(() => {
                   const klAddr = settings?.kolkataOfficeAddress || "22/1, Gorachand Road,\nKolkata - 700014";
                   return (
                     <div className="bg-slate-900/90 border border-white/10 hover:border-[#06B6D4]/60 rounded-2xl p-4 sm:p-5 transition-all duration-300 shadow-xl group/card">
                       <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-white/10">
                         <div className="flex items-center gap-2">
                           <Building className="w-4 h-4 text-[#06B6D4] shrink-0" />
                           <span className="text-xs font-bold text-white uppercase tracking-wider">Kolkata Office</span>
                         </div>
                         <div className="flex items-center gap-1.5">
                           <button
                             type="button"
                             onClick={() => handleCopyAddress(klAddr, 'kolkata')}
                             className="p-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white transition-colors text-xs flex items-center gap-1"
                             title="Copy address"
                           >
                             {copiedAddress === 'kolkata' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                             <span className="hidden sm:inline text-[11px]">{copiedAddress === 'kolkata' ? 'Copied' : 'Copy'}</span>
                           </button>
                           <a
                             href={`https://maps.google.com/?q=${encodeURIComponent(klAddr.replace(/\n/g, ', '))}`}
                             target="_blank"
                             rel="noopener noreferrer"
                             className="p-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-slate-300 hover:text-blue-300 transition-colors text-xs flex items-center gap-1"
                             title="Open in Google Maps"
                           >
                             <ExternalLink className="w-3.5 h-3.5" />
                             <span className="hidden sm:inline text-[11px]">Map</span>
                           </a>
                         </div>
                       </div>
                       <p className="text-sm text-slate-200 leading-relaxed font-normal whitespace-pre-wrap pl-2.5 border-l-2 border-[#06B6D4] ml-0.5">
                         {klAddr}
                       </p>
                     </div>
                   );
                 })()}

                 {/* Phone Helpline Banner (India) */}
                 <div className="bg-gradient-to-r from-blue-950/80 to-slate-900/90 border border-blue-500/30 rounded-2xl p-3.5 sm:p-4 flex items-center justify-between gap-3 shadow-lg">
                   <div className="flex items-center gap-3">
                     <div className="w-9 h-9 rounded-xl bg-[var(--color-brand)]/20 border border-[var(--color-brand)]/40 flex items-center justify-center text-[var(--color-brand)] shrink-0">
                       <Phone className="w-4 h-4" />
                     </div>
                     <div>
                       <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">India Phone</div>
                       <a href={`tel:${settings?.indiaOfficePhone?.replace(/[^0-9+]/g, '') || "+919748386443"}`} className="text-sm font-bold text-white hover:text-[var(--color-brand)] transition-colors">
                         {settings?.indiaOfficePhone || "+91-9748386443"}
                       </a>
                     </div>
                   </div>
                   <a
                     href={`tel:${settings?.indiaOfficePhone?.replace(/[^0-9+]/g, '') || "+919748386443"}`}
                     className="px-3.5 py-1.5 bg-[var(--color-brand)] hover:bg-blue-600 text-white rounded-xl text-xs font-bold transition-all shadow-md shrink-0 flex items-center gap-1.5"
                   >
                     <Phone className="w-3.5 h-3.5" /> Call
                   </a>
                 </div>
               </div>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="bg-gradient-to-br from-[var(--color-brand)] to-blue-900 p-5 sm:p-8 md:p-10 rounded-3xl shadow-xl text-white relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-700">
                 <MessageSquare className="w-24 sm:w-32 h-24 sm:h-32" />
               </div>
               <div className="relative z-10">
                 <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 tracking-tight">Direct Access</h3>
                 <p className="text-blue-100 text-xs sm:text-sm mb-4 sm:mb-6 leading-relaxed">Reach our global executive team directly.</p>
                 <div className="flex items-center gap-3">
                   <div className="w-9 sm:w-10 h-9 sm:h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/20 shrink-0">
                     <Mail className="w-4 h-4 text-white" />
                   </div>
                   <a href={`mailto:${settings?.contactEmail || "admin@dromominds.com"}`} className="text-white font-bold tracking-wide hover:text-blue-200 transition-colors text-sm sm:text-base break-all sm:break-normal">
                     {settings?.contactEmail || "admin@dromominds.com"}
                   </a>
                 </div>
               </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="bg-white p-5 sm:p-8 md:p-12 rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.3)] border border-gray-100 relative">
               <div className="absolute top-0 right-8 w-16 h-1 bg-[var(--color-brand)] rounded-b-lg"></div>
               <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-2 sm:mb-3 text-gray-900 tracking-tight">{settings?.contactFormTitle || "Initiate an Engagement"}</h2>
               <p className="text-gray-500 text-sm sm:text-base mb-6 sm:mb-10 leading-relaxed font-light">{settings?.contactFormSubtitle || "Share your requirements and our architecture team will respond dynamically."}</p>
               
               <form className="space-y-4 sm:space-y-6" onSubmit={handleContactSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div className="group">
                      <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 group-focus-within:text-[var(--color-brand)] transition-colors">First Name<span className="text-red-500 ml-1">*</span></label>
                      <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-slate-50 border border-gray-200 rounded-xl focus:border-[var(--color-brand)] focus:bg-white focus:ring-4 focus:ring-blue-50 outline-none transition-all duration-300 text-sm sm:text-base" placeholder="John" />
                    </div>
                    <div className="group">
                      <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 group-focus-within:text-[var(--color-brand)] transition-colors">Last Name</label>
                      <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-slate-50 border border-gray-200 rounded-xl focus:border-[var(--color-brand)] focus:bg-white focus:ring-4 focus:ring-blue-50 outline-none transition-all duration-300 text-sm sm:text-base" placeholder="Doe" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div className="group">
                      <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 group-focus-within:text-[var(--color-brand)] transition-colors">Corporate Email<span className="text-red-500 ml-1">*</span></label>
                      <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-slate-50 border border-gray-200 rounded-xl focus:border-[var(--color-brand)] focus:bg-white focus:ring-4 focus:ring-blue-50 outline-none transition-all duration-300 text-sm sm:text-base" placeholder="john@company.com" />
                    </div>
                    <div className="group">
                      <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 group-focus-within:text-[var(--color-brand)] transition-colors">Phone Number</label>
                      <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-slate-50 border border-gray-200 rounded-xl focus:border-[var(--color-brand)] focus:bg-white focus:ring-4 focus:ring-blue-50 outline-none transition-all duration-300 text-sm sm:text-base" placeholder="+1 (555) 000-0000" />
                    </div>
                  </div>

                  <div className="group">
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 group-focus-within:text-[var(--color-brand)] transition-colors">Company Name<span className="text-red-500 ml-1">*</span></label>
                    <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} required className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-slate-50 border border-gray-200 rounded-xl focus:border-[var(--color-brand)] focus:bg-white focus:ring-4 focus:ring-blue-50 outline-none transition-all duration-300 text-sm sm:text-base" placeholder="Acme Corp" />
                  </div>
                  
                  <div className="group">
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 group-focus-within:text-[var(--color-brand)] transition-colors">Inquiry Type</label>
                    <div className="relative">
                      <select name="inquiryType" value={formData.inquiryType} onChange={handleChange} className="w-full appearance-none px-4 sm:px-5 py-3 sm:py-4 bg-slate-50 border border-gray-200 rounded-xl focus:border-[var(--color-brand)] focus:bg-white focus:ring-4 focus:ring-blue-50 outline-none transition-all duration-300 text-gray-700 text-sm sm:text-base">
                        <option>Strategic Consulting</option>
                        <option>Validation Managed Services</option>
                        <option>Expert Staffing</option>
                        <option>General Inquiry</option>
                      </select>
                      <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                      </div>
                    </div>
                  </div>
                  
                  <div className="group">
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 group-focus-within:text-[var(--color-brand)] transition-colors">Message Context<span className="text-red-500 ml-1">*</span></label>
                    <textarea rows={4} name="message" value={formData.message} onChange={handleChange} required className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-slate-50 border border-gray-200 rounded-xl focus:border-[var(--color-brand)] focus:bg-white focus:ring-4 focus:ring-blue-50 outline-none transition-all duration-300 resize-none text-sm sm:text-base" placeholder="Provide details about your project or compliance needs..."></textarea>
                  </div>

                  <button type="submit" disabled={loading || status === 'success'} className="w-full bg-[#020617] text-white font-bold py-3.5 sm:py-4 rounded-xl hover:bg-[var(--color-brand)] transition-colors duration-300 flex justify-center items-center gap-3 group relative overflow-hidden disabled:opacity-70">
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
                    <span className="relative z-10 tracking-wide uppercase text-xs sm:text-sm">
                      {loading ? 'Submitting...' : status === 'success' ? 'Submitted' : 'Deploy Request'}
                    </span>
                    {status === 'success' ? <CheckCircle2 className="w-5 h-5 relative z-10" /> : !loading && <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />}
                  </button>
                  
                  {status === 'success' && <div className="text-emerald-600 text-xs sm:text-sm font-medium text-center">Your request has been securely dispatched. Our team will contact you shortly.</div>}
                  {status === 'error' && <div className="text-rose-600 text-xs sm:text-sm font-medium text-center">There was an error submitting your request.</div>}
               </form>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="relative z-10 bg-white">
        <FAQSection 
          faqs={[
            {
              question: "What is the typical response time for an inquiry?",
              answer: "Our strategic consulting team reviews all inquiries within 24 hours. For critical regulatory issues or rapid remediation requests, we mobilize our crisis assembly teams immediately upon contact."
            },
            {
              question: "Do you provide on-site validation and compliance services?",
              answer: "Yes. While we offer robust remote execution capabilities, our global teams can deploy on-site to your manufacturing facilities, laboratories, and corporate headquarters for complex qualifications and mock inspections."
            },
            {
              question: "Which regions do you serve globally?",
              answer: "Dromominds Solutions operates globally. We have extensive experience navigating regulatory jurisdictions across North America (FDA), Europe (EMA), and emerging markets, ensuring compliance no matter where your operations are based."
            },
            {
              question: "Can I request a bespoke compliance gap analysis?",
              answer: "Absolutely. We encourage organizations to reach out for a preliminary gap analysis. Our architects will evaluate your current validation pipelines and provide a high-level roadmap for optimization and remediation."
            },
            {
              question: "Who should I contact for enterprise staffing and staff augmentation?",
              answer: "You can use the contact form on this page and select 'Expert Staffing' under the Inquiry Type. Our talent acquisition specialists will connect with you to discuss providing elite engineers and auditors for your projects."
            }
          ]}
          title="Contact & Support FAQs"
          subtitle="Quick answers to common questions about engaging with Dromominds."
        />
      </div>

      {/* Testimonials Hook Section */}
      <section className="py-10 lg:py-24 px-4 sm:px-6 md:px-12 lg:px-24 bg-[#020617] text-white relative z-10 overflow-hidden rounded-t-[2rem] sm:rounded-t-[3rem]">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/micro-carbon.png')] opacity-10 pointer-events-none mix-blend-overlay"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_top_right,var(--color-brand-dim),transparent_60%)] pointer-events-none opacity-20" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-xs sm:text-sm font-bold text-[var(--color-brand)] uppercase tracking-wider mb-2 sm:mb-4">{settings?.testimonialsTitle || "Trusted Worldwide"}</h2>
            <h3 className="text-2xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight">{settings?.testimonialsSubtitle || "Proven Outcomes. Zero Compromise."}</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {testimonials.length >= 2 ? (
              testimonials.slice(0, 2).map((test, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.2 }} className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 md:p-10 rounded-3xl relative">
                  <div className="text-[var(--color-brand)] mb-6">
                    <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
                  </div>
                  <p className="text-lg text-slate-300 leading-relaxed mb-8 font-light italic">"{test.quote}"</p>
                  <div className="flex items-center gap-4">
                    {test.authorImage ? (
                       <div className="w-12 h-12 rounded-full border border-slate-700 overflow-hidden">
                         <img loading="lazy" src={urlFor(test.authorImage).width(150).url()} alt={test.authorName} className="w-full h-full object-cover" />
                       </div>
                    ) : (
                       <div className="w-12 h-12 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center font-bold text-white">
                         {test.authorName?.[0]}
                       </div>
                    )}
                    <div>
                      <div className="font-bold text-white">{test.authorName}</div>
                      <div className="text-sm text-[var(--color-brand)]">{test.authorRole}{test.authorCompany ? `, ${test.authorCompany}` : ''}</div>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 md:p-10 rounded-3xl relative">
                  <div className="text-[var(--color-brand)] mb-6">
                    <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
                  </div>
                  <p className="text-lg text-slate-300 leading-relaxed mb-8 font-light italic">"Dromominds redefined our approach to validation. Their deep understanding of GxP and ability to deploy robust, automated frameworks reduced our implementation time by 40%. They are unequivocally the benchmark in compliance."</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-slate-800 border border-slate-700 overflow-hidden">
                      <img loading="lazy" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop" alt="Director" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <div className="font-bold text-white">David Reynolds</div>
                      <div className="text-sm text-[var(--color-brand)]">VP of Quality, Vertex Pharma</div>
                    </div>
                  </div>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 md:p-10 rounded-3xl relative">
                  <div className="text-[var(--color-brand)] mb-6">
                    <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
                  </div>
                  <p className="text-lg text-slate-300 leading-relaxed mb-8 font-light italic">"Choosing Dromominds for our audit readiness program was the best decision we made. Their team rapidly identified critical gaps and executed a bulletproof remediation strategy that impressed our EU inspectors."</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-slate-800 border border-slate-700 overflow-hidden">
                      <img loading="lazy" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop" alt="Director" className="w-full h-full object-cover grayscale" />
                    </div>
                    <div>
                      <div className="font-bold text-white">Dr. Sarah Hughes</div>
                      <div className="text-sm text-[var(--color-brand)]">Global Head of Regulatory Affairs</div>
                    </div>
                  </div>
                </motion.div>
              </>
            )}
          </div>
          
          <div className="mt-16 text-center">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }} className="inline-flex items-center gap-3 bg-[var(--color-brand)]/10 border border-[var(--color-brand)]/30 px-6 py-3 rounded-full text-white font-semibold">
              <span className="w-2 h-2 rounded-full bg-[var(--color-brand)] animate-pulse"></span>
              Join 500+ Lifesciences Leaders
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

