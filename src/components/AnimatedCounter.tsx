import React, { useEffect, useState, useRef } from 'react';
import { useInView } from 'motion/react';

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  delay?: number;
}

export const AnimatedCounter = ({ value, suffix = '', prefix = '', duration = 2, delay = 0 }: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      let animationFrame: number;
      let timeoutId: NodeJS.Timeout;

      const startAnimation = () => {
        const step = (timestamp: number) => {
          if (!startTime) startTime = timestamp;
          const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
          
          // easeOutExpo
          const easeOut = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
          setCount(Math.floor(easeOut * value));

          if (progress < 1) {
            animationFrame = requestAnimationFrame(step);
          }
        };

        animationFrame = requestAnimationFrame(step);
      };

      if (delay > 0) {
        timeoutId = setTimeout(startAnimation, delay * 1000);
      } else {
        startAnimation();
      }

      return () => {
        if (animationFrame) cancelAnimationFrame(animationFrame);
        if (timeoutId) clearTimeout(timeoutId);
      };
    }
  }, [value, duration, delay, isInView]);

  return (
    <span ref={ref} className="inline-block">
      {prefix}
      {count}
      {suffix}
    </span>
  );
};

export const AnimatedStringCounter = ({ text, delay = 0 }: { text: string | number, delay?: number }) => {
  const str = String(text);
  const match = str.match(/^([^\d.-]*)([\d.,]+)([^\d]*)$/);
  
  if (match) {
    const [, prefix, numStr, suffix] = match;
    const cleanNum = numStr.replace(/,/g, '');
    const num = parseFloat(cleanNum);
    
    if (!isNaN(num)) {
      return <AnimatedCounter prefix={prefix} value={num} suffix={suffix} delay={delay} />;
    }
  }
  
  return <span>{text}</span>;
};
