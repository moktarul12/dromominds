import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export const Lifecycle = () => {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      id: 1,
      title: "Assess — Data Integrity & Compliance",
      shortLabel: "Assess",
      desc: "Perform comprehensive GxP, CSV, and QMS gap assessments against regulatory requirements. We identify data integrity risks across systems and processes aligned with ALCOA+ principles, ensuring your foundation is audit-ready.",
      points: ["ALCOA+ Principle Assessments", "Audit Gap Analysis against FDA/EU", "Audit Trail & Access Control Review", "Risk-Based Prioritization", "CAPA Plan Development", "Inspection Outcome Alignment"],
      color: "var(--color-brand)",
      glow: "var(--color-brand-glow)"
    },
    {
      id: 2,
      title: "Validate — Execution & Documentation",
      shortLabel: "Validate",
      desc: "Execute robust validation protocols (IQ/OQ/PQ) and ensure traceability from User Requirements to final summary reports. Our risk-based approach guarantees your computerized systems and equipment are fully compliant.",
      points: ["Requirement Traceability Matrices (RTM)", "IQ/OQ/PQ Protocol Execution", "Computerized System Validation Testing", "Equipment Qualification Summaries", "Software Testing Assurance", "Vendor Audits & Assessments"],
      color: "#f59e0b",
      glow: "rgba(245, 158, 11, 0.5)"
    },
    {
      id: 3,
      title: "Remediate — CAPA & Continuous Improvement",
      shortLabel: "Remediate",
      desc: "Swiftly resolve audit findings and non-conformances with targeted Corrective and Preventive Actions (CAPA). We modernize your quality systems to maintain a continuous state of inspection readiness.",
      points: ["483 Observation Remediation", "CAPA Effectiveness Checks", "Legacy System Upgrades", "QMS Digital Transformation", "Ongoing Performance Monitoring", "Regulatory Training & Upskilling"],
      color: "#10b981",
      glow: "rgba(16, 185, 129, 0.5)"
    }
  ];

  const currentSettings = steps.find(s => s.id === activeStep) || steps[0];

  return (
    <section id="process" className="bg-slate-900 text-white z-10 rounded-t-[2.5rem] md:rounded-t-[3.5rem] -mt-6 md:-mt-10 shadow-[0_-20px_40px_-20px_rgba(0,0,0,0.3)] py-10 lg:py-24 px-6 md:px-12 lg:px-24 transition-colors duration-500 relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-10 md:mb-16">
          <div className="inline-block bg-[var(--color-brand-dim)] text-[var(--color-brand)] text-xs font-bold px-3 py-1 rounded-full mb-4 md:mb-6 uppercase tracking-wider relative">
            <span className="pulse-element">Methodology</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif tracking-tight">The Dromominds Validation Lifecycle</h2>
        </div>
        
        <div className="flex items-center justify-center max-w-3xl mx-auto mb-10 md:mb-12 relative">
          <div className="absolute left-[10%] right-[10%] top-7 h-[2px] bg-gray-700 -z-10 hidden md:block"></div>
          {steps.map(step => (
            <div key={step.id} onClick={() => setActiveStep(step.id)} className={`flex flex-col items-center flex-1 group cursor-pointer ${activeStep === step.id ? 'is-active' : ''}`}>
              <div 
                className={`w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center text-base md:text-xl font-bold z-10 transition-all duration-300 bg-slate-900 border-2 ${activeStep === step.id ? 'text-white scale-110' : 'border-gray-600 text-gray-400 group-hover:border-gray-400 group-hover:text-gray-300'}`}
                style={{ 
                  borderColor: activeStep === step.id ? step.color : undefined,
                  backgroundColor: activeStep === step.id ? step.color : undefined,
                  boxShadow: activeStep === step.id ? `0 0 20px ${step.glow}` : 'none'
                }}
              >
                {step.id}
              </div>
              <span 
                className="mt-2 md:mt-4 text-[11px] sm:text-sm md:text-base transition-colors duration-300 font-medium text-center"
                style={{ color: activeStep === step.id ? step.color : '#9ca3af', fontWeight: activeStep === step.id ? 700 : 500 }}
              >
                {step.shortLabel}
              </span>
            </div>
          ))}
        </div>
        
        <div className="bg-slate-800/50 border border-gray-700 rounded-2xl md:rounded-3xl p-5 md:p-12 backdrop-blur-md shadow-2xl relative min-h-[380px]">
          <motion.div 
            key={activeStep}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full"
          >
             <div className="flex flex-col sm:flex-row justify-between items-start mb-4 md:mb-8 gap-3 md:gap-4">
                <h3 className="text-lg sm:text-2xl md:text-3xl font-bold transition-colors duration-300" style={{ color: currentSettings.color }}>
                  {currentSettings.title}
                </h3>
             </div>
             <p className="text-gray-300 mb-6 sm:mb-10 max-w-3xl leading-relaxed font-light text-xs sm:text-base md:text-lg">
                {currentSettings.desc}
             </p>
             <div className="grid md:grid-cols-2 gap-y-3 sm:gap-y-5 gap-x-8">
                {currentSettings.points.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-2 sm:gap-3 group">
                     <CheckCircle2 className="w-4 h-4 sm:w-6 sm:h-6 mt-0.5 shrink-0 transition-colors duration-300" style={{ color: currentSettings.color }} />
                     <span className="text-gray-300 text-[11px] sm:text-sm font-light group-hover:text-white transition">{point}</span>
                  </div>
                ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
