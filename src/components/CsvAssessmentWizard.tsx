import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronRight, ChevronLeft, ShieldCheck, Activity, Target, Download, Mail, Calendar, CheckCircle2, AlertTriangle, AlertCircle, FileText, Server } from 'lucide-react';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import { assessmentCategories as localCategories, answerOptions, getStatusFromScore } from '../data/assessmentData';
import { sanityClient } from '../lib/sanity';

interface CsvAssessmentWizardProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CsvAssessmentWizard = ({ isOpen, onClose }: CsvAssessmentWizardProps) => {
  const [assessmentCategories, setAssessmentCategories] = useState(localCategories);
  const [currentStep, setCurrentStep] = useState(0); // 0-6: Categories, 7: Calculating, 8: Results
  
  useEffect(() => {
    sanityClient.fetch(`*[_type == "assessmentCategory"] | order(order asc)`).then(data => {
      if (data && data.length > 0) {
        setAssessmentCategories(data);
      }
    }).catch(console.error);
  }, []);

  const [answers, setAnswers] = useState<Record<string, number>>(() => {
    try {
      const saved = localStorage.getItem('csvAssessmentAnswers');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  // Save to local storage whenever answers change
  useEffect(() => {
    localStorage.setItem('csvAssessmentAnswers', JSON.stringify(answers));
  }, [answers]);

  const [isCalculating, setIsCalculating] = useState(false);
  const [leadForm, setLeadForm] = useState({ firstName: '', lastName: '', company: '', email: '' });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const contentRef = useRef<HTMLDivElement>(null);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleAnswer = (questionId: string, value: number) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const isCurrentCategoryComplete = () => {
    if (currentStep >= assessmentCategories.length) return true;
    const category = assessmentCategories[currentStep];
    return category.questions.every((q: any) => answers[q.id] !== undefined);
  };

  const handleNext = () => {
    if (currentStep < assessmentCategories.length - 1) {
      setCurrentStep(prev => prev + 1);
      setTimeout(() => contentRef.current?.scrollTo(0, 0), 10);
    } else if (currentStep === assessmentCategories.length - 1) {
      setCurrentStep(assessmentCategories.length);
      setIsCalculating(true);
      setTimeout(() => {
        setIsCalculating(false);
        setCurrentStep(assessmentCategories.length + 1);
        setTimeout(() => contentRef.current?.scrollTo(0, 0), 10);
      }, 3000);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
      setTimeout(() => contentRef.current?.scrollTo(0, 0), 10);
    }
  };

  const calculateScores = () => {
    let totalWeightedScore = 0;
    const categoryScores: any[] = [];
    let weaknesses: string[] = [];

    assessmentCategories.forEach(category => {
      let catScore = 0;
      category.questions.forEach(q => {
        catScore += (answers[q.id] || 0);
      });
      // max score for category is 25 (5 questions * 5)
      const catPercentage = (catScore / 25) * 100;
      totalWeightedScore += catPercentage * category.weight;
      
      categoryScores.push({
        subject: category.title.split(' ')[0], // short name for radar
        fullTitle: category.title,
        A: Math.round(catPercentage),
        fullMark: 100,
      });

      if (catPercentage < 60) {
        weaknesses.push(category.id);
      }
    });

    return { overall: Math.round(totalWeightedScore), categoryScores, weaknesses };
  };

  const renderProgress = () => {
    if (currentStep >= assessmentCategories.length) return null;
    const progress = ((currentStep) / assessmentCategories.length) * 100;
    const initialProgress = Math.max(0, ((currentStep-1) / assessmentCategories.length) * 100);
    return (
      <div className="w-full bg-slate-800 h-2 mt-4 rounded-full overflow-hidden">
        <motion.div 
          className="h-full bg-gradient-to-r from-[#0B1F3A] via-[#1D4ED8] to-[#06B6D4]"
          initial={{ width: `${initialProgress}%` }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>
    );
  };

  const renderQuestions = () => {
    const category = assessmentCategories[currentStep];
    return (
      <motion.div
        key={currentStep}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-8"
      >
        <div className="mb-8">
          <h2 className="text-sm font-bold text-[var(--color-brand)] uppercase tracking-widest mb-2">Category {currentStep + 1} of {assessmentCategories.length}</h2>
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-white">{category.title}</h3>
        </div>

        <div className="space-y-6">
          {category.questions.map((q, idx) => {
            return (
              <div key={q.id} className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-slate-600/50 transition-colors">
                <h4 className="text-lg text-white mb-4 font-medium flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-[var(--color-brand)]/20 text-[var(--color-brand)] flex items-center justify-center text-sm font-bold shrink-0 border border-[var(--color-brand)]/30">
                    {idx + 1}
                  </span>
                  {q.text}
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {answerOptions.map(opt => (
                    <button
                      key={opt.value}
                      onClick={() => handleAnswer(q.id, opt.value)}
                      className={`p-3 rounded-lg text-sm font-bold border transition-all flex items-center justify-center gap-2 ${
                        answers[q.id] === opt.value
                          ? 'bg-[var(--color-brand)] border-[var(--color-brand)] text-white shadow-lg shadow-[var(--color-brand)]/20 scale-[1.02]'
                          : 'bg-slate-900 border-slate-700 text-slate-400 hover:border-[var(--color-brand)]/50 hover:text-white'
                      }`}
                    >
                      {answers[q.id] === opt.value && <CheckCircle2 className="w-4 h-4" />}
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-between items-center pt-8 border-t border-slate-800">
          <button
            onClick={handlePrev}
            disabled={currentStep === 0}
            className="px-6 py-3 rounded-lg font-bold text-slate-400 hover:text-white transition-colors disabled:opacity-0"
          >
            <ChevronLeft className="w-5 h-5 inline mr-1" /> Back
          </button>
          <button
            onClick={handleNext}
            disabled={!isCurrentCategoryComplete()}
            className="bg-[var(--color-brand)] text-white px-8 py-3 rounded-lg font-bold hover:bg-[var(--color-brand-hover)] transition-all flex items-center gap-2 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {currentStep === assessmentCategories.length - 1 ? 'Calculate Score' : 'Next Category'} <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </motion.div>
    );
  };

  const renderCalculating = () => (
    <div className="flex flex-col items-center justify-center py-20 min-h-[60vh]">
      <div className="relative w-32 h-32 mb-8">
        <svg className="w-full h-full animate-spin text-slate-800" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="4" fill="none" />
        </svg>
        <svg className="w-full h-full absolute top-0 left-0 text-[var(--color-brand)]" viewBox="0 0 100 100">
          <motion.circle 
            cx="50" cy="50" r="45" 
            stroke="currentColor" 
            strokeWidth="4" 
            fill="none"
            strokeLinecap="round"
            initial={{ strokeDasharray: "0 283" }}
            animate={{ strokeDasharray: "283 283" }}
            transition={{ duration: 2.8, ease: "easeInOut" }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <Activity className="w-10 h-10 text-[var(--color-brand)] animate-pulse" />
        </div>
      </div>
      <h3 className="text-2xl font-serif font-bold text-white mb-2">Analyzing Responses...</h3>
      <p className="text-slate-400 text-center max-w-md">Benchmarking your CSV posture against 500+ global life sciences organizations.</p>
    </div>
  );

  const renderBadges = (categoryScores: any[]) => {
    const badges = [];
    const govScore = categoryScores.find(c => c.subject === 'Governance')?.A || 0;
    const dataScore = categoryScores.find(c => c.subject === 'Data')?.A || 0;
    const valScore = categoryScores.find(c => c.subject === 'System')?.A || 0; // The short name is 'System' for 'System Validation'

    if (govScore >= 80) {
      badges.push({ title: 'Governance Champion', icon: ShieldCheck, color: 'text-purple-400', bg: 'bg-purple-400/10', border: 'border-purple-400/30' });
    }
    if (dataScore >= 80) {
      badges.push({ title: 'Data Integrity Leader', icon: Server, color: 'text-blue-400', bg: 'bg-blue-400/10', border: 'border-blue-400/30' });
    }
    if (valScore >= 80) {
      badges.push({ title: 'Validation Expert', icon: Target, color: 'text-emerald-400', bg: 'bg-emerald-400/10', border: 'border-emerald-400/30' });
    }

    if (badges.length === 0) return null;

    return (
      <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
        {badges.map(badge => (
          <div key={badge.title} className={`flex items-center gap-2 px-4 py-2 rounded-full ${badge.bg} ${badge.border} border`}>
            <badge.icon className={`w-4 h-4 ${badge.color}`} />
            <span className={`text-sm font-bold ${badge.color}`}>{badge.title}</span>
          </div>
        ))}
      </div>
    );
  };

  const renderResults = () => {
    const { overall, categoryScores, weaknesses } = calculateScores();
    const status = getStatusFromScore(overall);

    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-12">
        {/* Results Header */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800 rounded-full border border-slate-700 text-sm font-bold text-white mb-6">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Assessment Complete
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">Your CSV Readiness Profile</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">Based on your responses, here is your organizational maturity assessment and recommended remediation pathway.</p>
          {renderBadges(categoryScores)}
        </div>

        {/* Top Metrics Grid */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Main Score Gauge */}
          <div className="bg-slate-900 border border-slate-700/50 rounded-3xl p-6 md:p-8 flex flex-col items-center justify-center relative overflow-hidden shadow-2xl">
            <div className={`absolute top-0 w-full h-2 ${status.bg}`}></div>
            <div className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Overall Maturity Score</div>
            
            <div className="relative w-64 h-64 flex items-center justify-center mb-4">
               <svg className="w-full h-full transform -rotate-90">
                  <circle cx="128" cy="128" r="110" stroke="currentColor" strokeWidth="16" fill="none" className="text-slate-800" />
                  <motion.circle 
                    cx="128" cy="128" r="110" 
                    stroke="currentColor" 
                    strokeWidth="16" 
                    fill="none" 
                    strokeDasharray={2 * Math.PI * 110}
                    initial={{ strokeDashoffset: 2 * Math.PI * 110 }}
                    animate={{ strokeDashoffset: 2 * Math.PI * 110 * (1 - (overall / 100)) }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className={status.color}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="text-7xl font-black text-white tracking-tighter">{overall}</div>
                  <div className="text-xl text-slate-400 mt-1">/ 100</div>
                </div>
            </div>

            <div className={`px-6 py-2 rounded-full border border-current ${status.color} font-bold text-lg bg-opacity-10 bg-current`}>
              Status: {status.label}
            </div>
          </div>

          {/* Radar Chart */}
          <div className="bg-slate-900 border border-slate-700/50 rounded-3xl p-6 md:p-8 shadow-2xl h-full flex flex-col">
            <div className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6 text-center">Category Distribution</div>
            <div className="flex-1 w-full min-h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="70%" data={categoryScores}>
                  <PolarGrid stroke="#334155" />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 11, fontWeight: 'bold' }} />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                  <Radar name="Score" dataKey="A" stroke="var(--color-brand)" fill="var(--color-brand)" fillOpacity={0.4} />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Benchmarking */}
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 text-center">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Your Score</div>
            <div className="text-3xl font-black text-white">{overall}%</div>
          </div>
          <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 text-center">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Industry Avg</div>
            <div className="text-3xl font-black text-slate-300">67%</div>
          </div>
          <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 text-center">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Top Quartile</div>
            <div className="text-3xl font-black text-[var(--color-brand)]">89%</div>
          </div>
        </div>

        {/* Recommendations */}
        <div className="bg-slate-900 border border-slate-700/50 rounded-3xl p-6 md:p-8">
          <h3 className="text-2xl font-serif font-bold text-white mb-6 flex items-center gap-3">
            <Target className="w-6 h-6 text-[var(--color-brand)]" /> Priority Action Plan
          </h3>
          {weaknesses.length === 0 ? (
            <div className="bg-emerald-900/20 border border-emerald-500/30 rounded-xl p-6 text-emerald-100 flex gap-4">
              <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />
              <div>
                <h4 className="font-bold text-emerald-400 mb-1">Excellent Posture</h4>
                <p className="text-sm">Your organization demonstrates robust maturity across all key CSV pillars. Maintain continuous monitoring and periodic review cycles.</p>
              </div>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-4">
              {categoryScores.filter(c => c.A < 60).map(cat => (
                <div key={cat.subject} className="bg-red-900/10 border border-red-500/20 rounded-xl p-5 flex gap-4">
                  <AlertTriangle className="w-6 h-6 text-red-500 shrink-0" />
                  <div>
                    <h4 className="font-bold text-red-400 mb-1">{cat.fullTitle}</h4>
                    <p className="text-sm text-slate-300 mb-3">Score: {cat.A}% - Critical gaps detected that pose immediate regulatory risk.</p>
                    <ul className="text-sm text-slate-400 space-y-1 list-disc pl-4">
                      {cat.fullTitle.includes('Governance') && <li>Establish formal Validation Master Plan</li>}
                      {cat.fullTitle.includes('Risk') && <li>Implement formal GAMP5 risk assessments</li>}
                      {cat.fullTitle.includes('Data') && <li>Execute emergency Audit Trail reviews</li>}
                      {cat.fullTitle.includes('Validation') && <li>Ensure IQ/OQ/PQ traceability</li>}
                      {cat.fullTitle.includes('Vendor') && <li>Conduct critical supplier audits</li>}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Lead Capture Form */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-[var(--color-brand)]/30 rounded-3xl p-6 md:p-8 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-brand)]/10 blur-[60px] rounded-full pointer-events-none"></div>
          
          <div className="text-center max-w-2xl mx-auto mb-8 relative z-10">
            <h3 className="text-2xl font-serif font-bold text-white mb-3">Receive Your Detailed Executive Report</h3>
            <p className="text-slate-400">Get a comprehensive PDF detailing your maturity profile, detailed gap analysis, and a structured remediation roadmap sent to your inbox.</p>
          </div>

          <form onSubmit={(e) => {
            e.preventDefault();
            setFormStatus('submitting');
            setTimeout(() => setFormStatus('success'), 1500);
          }} className="max-w-3xl mx-auto relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">First Name</label>
                <input required type="text" className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-[var(--color-brand)] outline-none" 
                  value={leadForm.firstName} onChange={e => setLeadForm({...leadForm, firstName: e.target.value})} />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Last Name</label>
                <input required type="text" className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-[var(--color-brand)] outline-none" 
                  value={leadForm.lastName} onChange={e => setLeadForm({...leadForm, lastName: e.target.value})} />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Corporate Email</label>
                <input required type="email" className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-[var(--color-brand)] outline-none" 
                  value={leadForm.email} onChange={e => setLeadForm({...leadForm, email: e.target.value})} />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Company</label>
                <input required type="text" className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-[var(--color-brand)] outline-none" 
                  value={leadForm.company} onChange={e => setLeadForm({...leadForm, company: e.target.value})} />
              </div>
            </div>
            
            {formStatus === 'success' ? (
              <div className="bg-emerald-500/20 text-emerald-400 p-4 rounded-lg flex items-center justify-center gap-2 font-bold mb-6 border border-emerald-500/30">
                <CheckCircle2 className="w-5 h-5" /> Executive Report Sent to Inbox
              </div>
            ) : null}

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <button disabled={formStatus === 'submitting' || formStatus === 'success'} type="submit" className="bg-[var(--color-brand)] text-white px-8 py-4 rounded-xl font-bold hover:bg-[var(--color-brand-hover)] transition flex items-center justify-center gap-2 shadow-lg disabled:opacity-50">
                {formStatus === 'submitting' ? 'Processing...' : <><Download className="w-5 h-5" /> Get Full PDF Report</>}
              </button>
              <button type="button" onClick={onClose} className="bg-slate-800 text-white border border-slate-700 px-8 py-4 rounded-xl font-bold hover:bg-slate-700 transition flex items-center justify-center gap-2">
                <Calendar className="w-5 h-5" /> Book Consultation
              </button>
            </div>

            <div className="text-center">
              <button 
                type="button" 
                onClick={() => {
                  setAnswers({});
                  setCurrentStep(0);
                  localStorage.removeItem('csvAssessmentAnswers');
                  setTimeout(() => contentRef.current?.scrollTo(0, 0), 10);
                }}
                className="text-slate-400 text-sm font-bold hover:text-white transition-colors underline decoration-slate-700 underline-offset-4"
              >
                Retake Assessment
              </button>
            </div>
          </form>
        </div>

      </motion.div>
    );
  };

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950/90 backdrop-blur-sm p-4 sm:p-6 md:p-8 overflow-y-auto"
      >
        <div className="w-full max-w-5xl bg-slate-900 border border-slate-700 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-full relative">
          
          {/* Header */}
          <div className="flex justify-between items-center p-6 border-b border-slate-800 shrink-0 bg-slate-900/80 backdrop-blur-md sticky top-0 z-20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[var(--color-brand)]/10 rounded-lg flex items-center justify-center border border-[var(--color-brand)]/30">
                <ShieldCheck className="w-6 h-6 text-[var(--color-brand)]" />
              </div>
              <div>
                <h2 className="text-white font-bold text-lg leading-tight">Advanced CSV Readiness™</h2>
                <div className="text-[var(--color-brand)] text-xs font-bold tracking-widest uppercase">Enterprise Assessment</div>
              </div>
            </div>
            <button onClick={onClose} aria-label="Close modal" className="p-2 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-full transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Progress Bar (if answering questions) */}
          {currentStep < assessmentCategories.length && (
             <div className="px-6 pt-6 shrink-0">
               <div className="flex justify-between text-xs font-bold text-slate-400 uppercase tracking-widest font-mono">
                 <span>Progress</span>
                 <span>{Math.round(((currentStep) / assessmentCategories.length) * 100)}%</span>
               </div>
               {renderProgress()}
             </div>
          )}

          {/* Content Area */}
          <div ref={contentRef} className="p-6 md:p-10 overflow-y-auto flex-1 custom-scrollbar">
            {currentStep < assessmentCategories.length && renderQuestions()}
            {currentStep === assessmentCategories.length && renderCalculating()}
            {currentStep === assessmentCategories.length + 1 && renderResults()}
          </div>
          
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
