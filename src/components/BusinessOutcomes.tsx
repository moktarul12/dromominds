import React, { useState, useEffect, useRef } from 'react';
import { 
  ClipboardCheck, 
  AlertTriangle, 
  TrendingUp, 
  ShieldCheck, 
  Landmark 
} from 'lucide-react';
import { motion, useInView } from 'motion/react';
import { sanityClient } from '../lib/sanity';

// Animated Counter Hook / Component
const AnimatedCounter = ({ target, duration = 2 }: { target: number; duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const end = target;
    const totalFrames = Math.round(duration * 60);
    let frame = 0;

    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      // easeOutExpo
      const current = Math.round(end * (1 - Math.pow(2, -10 * progress)));
      setCount(current > end ? end : current);

      if (frame === totalFrames) {
        clearInterval(counter);
        setCount(end);
      }
    }, 1000 / 60);

    return () => clearInterval(counter);
  }, [isInView, target, duration]);

  return <span ref={ref}>{count}</span>;
};

export const BusinessOutcomes = () => {
  const defaultNodes = [
    {
      id: 'audit',
      title: "Audit-Ready Operations",
      desc: "Always prepared for audits with complete, traceable documentation.",
      icon: ClipboardCheck,
      badge: "Compliance",
      // Normalized SVG coordinates on a 1000x520 canvas
      cx: 170,
      cy: 110,
      align: "right"
    },
    {
      id: 'risk',
      title: "Reduced Compliance Risk",
      desc: "Identify and mitigate risks early, before they turn into critical observations.",
      icon: AlertTriangle,
      badge: "Risk Management",
      cx: 80,
      cy: 280,
      align: "right"
    },
    {
      id: 'continuous',
      title: "Continuous Readiness",
      desc: "Quality embedded in your workflows, turning compliance from a hurdle into a competitive advantage.",
      icon: TrendingUp,
      badge: "Operations",
      cx: 300,
      cy: 420,
      align: "right"
    },
    {
      id: 'integrity',
      title: "Improved Data Integrity",
      desc: "ALCOA+ compliance ensures trustworthy data you can defend.",
      icon: ShieldCheck,
      badge: "ALCOA+",
      cx: 560,
      cy: 210,
      align: "right"
    },
    {
      id: 'regulatory',
      title: "Regulatory Confidence",
      desc: "Navigate FDA, EMA & global expectations with assurance backed by experts.",
      icon: Landmark,
      badge: "Global Agencies",
      cx: 770,
      cy: 360,
      align: "right"
    }
  ];

  const [nodes, setNodes] = useState<any[]>(defaultNodes);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  useEffect(() => {
    sanityClient.fetch(`*[_type == "businessOutcome"] | order(order asc)`).then((data) => {
      if (data && data.length >= 5) {
        const mapped = defaultNodes.map((def, idx) => ({
          ...def,
          title: data[idx]?.title || def.title,
          desc: data[idx]?.desc || data[idx]?.description || def.desc
        }));
        setNodes(mapped);
      }
    }).catch(console.error);
  }, []);

  return (
    <section className="py-20 lg:py-28 bg-[#020b18] text-white relative overflow-hidden">
      {/* Background ambient lighting and delicate grid / starfield */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle dot matrix */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(#38bdf8 1px, transparent 1px)`,
            backgroundSize: '32px 32px'
          }}
        />

        {/* Ambient lighting glows matching brand theme */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-500/10 rounded-full blur-[160px]" />
        <div className="absolute top-1/3 right-10 w-[550px] h-[550px] bg-blue-600/15 rounded-full blur-[180px]" />
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-sky-950/40 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        
        {/* Top Header & 40% Hero Stat Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-16 lg:mb-20">
          
          {/* Left Title Block */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 xl:col-span-7"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
              <span className="text-sky-300 font-bold tracking-[0.2em] uppercase text-xs">
                Value Delivered
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1] mb-5">
              Business outcomes <br className="hidden sm:inline" />
              that <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-500">move the needle.</span>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-slate-300 font-light max-w-xl leading-relaxed">
              We go beyond compliance checkmarks to deliver quantifiable operational velocity, risk reduction, and audit readiness across your enterprise.
            </p>
          </motion.div>

          {/* Right Hero Stat Pill / Metric */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
            className="lg:col-span-5 xl:col-span-5 flex justify-start lg:justify-end"
          >
            <div className="relative p-6 sm:p-7 rounded-3xl bg-gradient-to-b from-sky-950/40 via-slate-900/60 to-slate-950/80 border border-sky-500/20 backdrop-blur-xl shadow-[0_0_40px_rgba(2,132,199,0.15)] w-full max-w-md">
              <div className="flex items-baseline gap-2 mb-1">
                <div className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-sky-200 via-sky-400 to-blue-500 leading-none">
                  <AnimatedCounter target={40} />%
                </div>
                <div className="text-xl sm:text-2xl font-black text-sky-400 tracking-wider">
                  FASTER
                </div>
              </div>

              <div className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-slate-200 mb-2">
                Validation Cycles
              </div>

              <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed">
                Accelerate implementation with automated, risk-based methodologies and proven templates.
              </p>
            </div>
          </motion.div>

        </div>

        {/* Dynamic Desktop Constellation Flow Diagram (1024px+) */}
        <div className="hidden lg:block relative w-full h-[540px] my-4">
          
          {/* SVG S-Curve Path Connector with Glowing Gradients */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1100 520" fill="none">
            <defs>
              <linearGradient id="curveGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.7" />
                <stop offset="35%" stopColor="#0ea5e9" stopOpacity="0.9" />
                <stop offset="70%" stopColor="#38bdf8" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.7" />
              </linearGradient>
              
              <filter id="svgGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Background dashed guide line */}
            <path 
              d="M 210 110 C 110 120 70 230 120 280 C 160 340 230 420 340 420 C 460 420 520 210 600 210 C 690 210 730 310 810 360" 
              stroke="#0369a1" 
              strokeWidth="2" 
              strokeDasharray="4 6"
              opacity="0.4"
            />

            {/* Glowing animated main curve */}
            <motion.path 
              d="M 210 110 C 110 120 70 230 120 280 C 160 340 230 420 340 420 C 460 420 520 210 600 210 C 690 210 730 310 810 360" 
              stroke="url(#curveGradient)" 
              strokeWidth="2.5" 
              fill="none"
              filter="url(#svgGlow)"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />

            {/* Traveling Light Pulse */}
            <motion.path 
              d="M 210 110 C 110 120 70 230 120 280 C 160 340 230 420 340 420 C 460 420 520 210 600 210 C 690 210 730 310 810 360" 
              stroke="#ffffff" 
              strokeWidth="2" 
              strokeDasharray="12 180"
              fill="none"
              initial={{ strokeDashoffset: 400 }}
              animate={{ strokeDashoffset: 0 }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
            />
          </svg>

          {/* Node 1: Audit-Ready Operations */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            onMouseEnter={() => setHoveredNode('audit')}
            onMouseLeave={() => setHoveredNode(null)}
            className="absolute left-[170px] top-[70px] flex items-center gap-4 z-20 group cursor-pointer"
          >
            <div className="w-16 h-16 rounded-full bg-[#051528] border-2 border-sky-400 shadow-[0_0_24px_rgba(56,189,248,0.45)] flex items-center justify-center text-sky-400 group-hover:scale-110 group-hover:border-white transition-all duration-300 shrink-0">
              <ClipboardCheck className="w-7 h-7" />
            </div>
            <div className="bg-slate-900/80 backdrop-blur-md border border-white/10 rounded-xl p-3 max-w-[210px] group-hover:border-sky-400/40 group-hover:bg-slate-900 transition-all shadow-xl">
              <h4 className="text-sm font-bold text-white mb-1 leading-snug">Audit-Ready Operations</h4>
              <p className="text-[11px] text-slate-300 font-light leading-relaxed">Always prepared for audits with complete, traceable documentation.</p>
            </div>
          </motion.div>

          {/* Node 2: Reduced Compliance Risk */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            onMouseEnter={() => setHoveredNode('risk')}
            onMouseLeave={() => setHoveredNode(null)}
            className="absolute left-[80px] top-[240px] flex items-center gap-4 z-20 group cursor-pointer"
          >
            <div className="w-16 h-16 rounded-full bg-[#051528] border-2 border-sky-400 shadow-[0_0_24px_rgba(56,189,248,0.45)] flex items-center justify-center text-sky-400 group-hover:scale-110 group-hover:border-white transition-all duration-300 shrink-0">
              <AlertTriangle className="w-7 h-7" />
            </div>
            <div className="bg-slate-900/80 backdrop-blur-md border border-white/10 rounded-xl p-3 max-w-[210px] group-hover:border-sky-400/40 group-hover:bg-slate-900 transition-all shadow-xl">
              <h4 className="text-sm font-bold text-white mb-1 leading-snug">Reduced Compliance Risk</h4>
              <p className="text-[11px] text-slate-300 font-light leading-relaxed">Identify and mitigate risks early, before critical observations.</p>
            </div>
          </motion.div>

          {/* Node 3: Continuous Readiness */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.45 }}
            onMouseEnter={() => setHoveredNode('continuous')}
            onMouseLeave={() => setHoveredNode(null)}
            className="absolute left-[300px] top-[380px] flex items-center gap-4 z-20 group cursor-pointer"
          >
            <div className="w-16 h-16 rounded-full bg-[#051528] border-2 border-sky-400 shadow-[0_0_24px_rgba(56,189,248,0.45)] flex items-center justify-center text-sky-400 group-hover:scale-110 group-hover:border-white transition-all duration-300 shrink-0">
              <TrendingUp className="w-7 h-7" />
            </div>
            <div className="bg-slate-900/80 backdrop-blur-md border border-white/10 rounded-xl p-3 max-w-[220px] group-hover:border-sky-400/40 group-hover:bg-slate-900 transition-all shadow-xl">
              <h4 className="text-sm font-bold text-white mb-1 leading-snug">Continuous Readiness</h4>
              <p className="text-[11px] text-slate-300 font-light leading-relaxed">Quality embedded in workflows, turning compliance into competitive advantage.</p>
            </div>
          </motion.div>

          {/* Node 4: Improved Data Integrity */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            onMouseEnter={() => setHoveredNode('integrity')}
            onMouseLeave={() => setHoveredNode(null)}
            className="absolute left-[560px] top-[170px] flex items-center gap-4 z-20 group cursor-pointer"
          >
            <div className="w-16 h-16 rounded-full bg-[#051528] border-2 border-sky-400 shadow-[0_0_24px_rgba(56,189,248,0.45)] flex items-center justify-center text-sky-400 group-hover:scale-110 group-hover:border-white transition-all duration-300 shrink-0">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <div className="bg-slate-900/80 backdrop-blur-md border border-white/10 rounded-xl p-3 max-w-[210px] group-hover:border-sky-400/40 group-hover:bg-slate-900 transition-all shadow-xl">
              <h4 className="text-sm font-bold text-white mb-1 leading-snug">Improved Data Integrity</h4>
              <p className="text-[11px] text-slate-300 font-light leading-relaxed">ALCOA+ compliance ensures trustworthy data you can defend.</p>
            </div>
          </motion.div>

          {/* Node 5: Regulatory Confidence */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.75 }}
            onMouseEnter={() => setHoveredNode('regulatory')}
            onMouseLeave={() => setHoveredNode(null)}
            className="absolute left-[770px] top-[320px] flex items-center gap-4 z-20 group cursor-pointer"
          >
            <div className="w-16 h-16 rounded-full bg-[#051528] border-2 border-sky-400 shadow-[0_0_24px_rgba(56,189,248,0.45)] flex items-center justify-center text-sky-400 group-hover:scale-110 group-hover:border-white transition-all duration-300 shrink-0">
              <Landmark className="w-7 h-7" />
            </div>
            <div className="bg-slate-900/80 backdrop-blur-md border border-white/10 rounded-xl p-3 max-w-[220px] group-hover:border-sky-400/40 group-hover:bg-slate-900 transition-all shadow-xl">
              <h4 className="text-sm font-bold text-white mb-1 leading-snug">Regulatory Confidence</h4>
              <p className="text-[11px] text-slate-300 font-light leading-relaxed">Navigate FDA, EMA & global expectations backed by experts.</p>
            </div>
          </motion.div>

        </div>

        {/* Mobile / Tablet Responsive Grid Flow (<1024px) */}
        <div className="lg:hidden grid sm:grid-cols-2 gap-4 my-6">
          {nodes.map((node, i) => {
            const IconCmp = node.icon;
            return (
              <motion.div
                key={node.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="p-5 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-sky-500/20 backdrop-blur-md shadow-lg flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-400/40 flex items-center justify-center text-sky-400 shrink-0">
                  <IconCmp className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white mb-1 leading-tight">
                    {node.title}
                  </h4>
                  <p className="text-xs text-slate-300 font-light leading-relaxed">
                    {node.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

