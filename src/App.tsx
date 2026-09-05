import React, { Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import { PageTransition } from './components/PageTransition';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { CookieBanner } from './components/CookieBanner';
import { ThemeProvider } from './contexts/ThemeContext';
import { ScrollToTopButton } from './components/ScrollToTopButton';
import { pageView } from './lib/analytics';

import { BookOpen } from 'lucide-react';
import { LeadMagnetModal } from './components/LeadMagnetModal';
import { FloatingContactButtons } from './components/FloatingContactButtons';
import { CsvAssessmentWizard } from './components/CsvAssessmentWizard';
import { RoiCalculatorModal } from './components/RoiCalculatorModal';

import { Home } from './pages/Home';

function lazyWithRetry<T extends React.ComponentType<any>>(
  componentImport: () => Promise<any>,
  exportName?: string
) {
  return lazy(async () => {
    const pageAlreadyRefreshed = JSON.parse(
      window.sessionStorage.getItem('page-has-been-refreshed') || 'false'
    );
    try {
      const component = await componentImport();
      window.sessionStorage.setItem('page-has-been-refreshed', 'false');
      if (exportName && component[exportName]) {
        return { default: component[exportName] };
      }
      if (component.default) {
        return { default: component.default };
      }
      return component;
    } catch (error) {
      if (!pageAlreadyRefreshed) {
        window.sessionStorage.setItem('page-has-been-refreshed', 'true');
        window.location.reload();
      }
      throw error;
    }
  });
}

const ServicePage = lazyWithRetry(() => import('./pages/ServicePage'), 'ServicePage');
const ContactPage = lazyWithRetry(() => import('./pages/ContactPage'), 'ContactPage');
const AboutPage = lazyWithRetry(() => import('./pages/AboutPage'), 'AboutPage');
const GenericPage = lazyWithRetry(() => import('./pages/GenericPage'), 'GenericPage');
const StudioPage = lazyWithRetry(() => import('./pages/StudioPage'), 'StudioPage');
const BlogListPage = lazyWithRetry(() => import('./pages/BlogListPage'), 'BlogListPage');
const BlogPostPage = lazyWithRetry(() => import('./pages/BlogPostPage'), 'BlogPostPage');
const NewsPage = lazyWithRetry(() => import('./pages/NewsPage'), 'NewsPage');
const VideosPage = lazyWithRetry(() => import('./pages/VideosPage'), 'VideosPage');
const ResourcesPage = lazyWithRetry(() => import('./pages/ResourcesPage'), 'ResourcesPage');

function PageTracker() {
  const location = useLocation();
  React.useEffect(() => {
    // We delay slightly to let the document title update before firing
    const timeout = setTimeout(() => {
      pageView(location.pathname + location.search);
    }, 100);
    return () => clearTimeout(timeout);
  }, [location]);
  return null;
}

function AnimatedRoutes({ onOpenLeadMagnet }: { onOpenLeadMagnet: () => void }) {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home onOpenLeadMagnet={onOpenLeadMagnet} /></PageTransition>} />
        <Route path="/computerized-system-validation" element={<PageTransition><ServicePage overrideId="csv" /></PageTransition>} />
        <Route path="/computer-software-assurance" element={<PageTransition><ServicePage overrideId="csv" /></PageTransition>} />
        <Route path="/equipment-qualification" element={<PageTransition><ServicePage overrideId="equipment-qualification" /></PageTransition>} />
        <Route path="/data-integrity" element={<PageTransition><ServicePage overrideId="gxp-compliance" /></PageTransition>} />
        <Route path="/audit-remediation" element={<PageTransition><ServicePage overrideId="validation" /></PageTransition>} />
        <Route path="/qms-implementation" element={<PageTransition><ServicePage overrideId="qms" /></PageTransition>} />
        <Route path="/expertise/:id" element={<PageTransition><ServicePage /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><ContactPage /></PageTransition>} />
        <Route path="/about" element={<PageTransition><AboutPage /></PageTransition>} />
        <Route path="/blog" element={<PageTransition><BlogListPage /></PageTransition>} />
        <Route path="/blog/:slug" element={<PageTransition><BlogPostPage /></PageTransition>} />
        <Route path="/resources/news" element={<PageTransition><NewsPage /></PageTransition>} />
        <Route path="/resources/videos" element={<PageTransition><VideosPage /></PageTransition>} />
        <Route path="/resources/case-studies" element={<PageTransition><ResourcesPage /></PageTransition>} />
        <Route path="/resources/white-papers" element={<PageTransition><ResourcesPage /></PageTransition>} />
        <Route path="/resources" element={<PageTransition><ResourcesPage /></PageTransition>} />
        <Route path="/resources/:category" element={<PageTransition><ResourcesPage /></PageTransition>} />
        <Route path="/partners" element={<PageTransition><GenericPage type="partner" /></PageTransition>} />
        <Route path="/partners/:id" element={<PageTransition><GenericPage type="partner" /></PageTransition>} />
        <Route path="/privacy" element={<PageTransition><GenericPage type="legal" /></PageTransition>} />
        <Route path="/terms" element={<PageTransition><GenericPage type="legal" /></PageTransition>} />
        <Route path="*" element={<PageTransition><Home onOpenLeadMagnet={onOpenLeadMagnet} /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  const [isLeadMagnetOpen, setIsLeadMagnetOpen] = React.useState(false);
  const [isCsvAssessmentOpen, setIsCsvAssessmentOpen] = React.useState(false);
  const [isRoiCalculatorOpen, setIsRoiCalculatorOpen] = React.useState(false);

  React.useEffect(() => {
    // Strategic Lead Magnet Popup: Automatically pop up after 25 seconds for upper-funnel capture
    /* Disabled per user request
    const timer = setTimeout(() => {
      const hasSeenMagnet = sessionStorage.getItem('dromominds_lead_magnet_seen');
      if (!hasSeenMagnet) {
        setIsLeadMagnetOpen(true);
        sessionStorage.setItem('dromominds_lead_magnet_seen', 'true');
      }
    }, 25000);

    // Simple exit intent detection
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        const hasSeenMagnet = sessionStorage.getItem('dromominds_lead_magnet_seen');
        if (!hasSeenMagnet) {
          setIsLeadMagnetOpen(true);
          sessionStorage.setItem('dromominds_lead_magnet_seen', 'true');
        }
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    */

    // Handle custom event for opening lead magnet from anywhere (e.g. Hero secondary CTA)
    const handleOpenMagnet = () => {
      setIsLeadMagnetOpen(true);
      sessionStorage.setItem('dromominds_lead_magnet_seen', 'true');
    };

    const handleOpenCsvAssessment = () => {
      setIsCsvAssessmentOpen(true);
    };

    const handleOpenRoiCalculator = () => {
      setIsRoiCalculatorOpen(true);
    };

    window.addEventListener('openLeadMagnet', handleOpenMagnet);
    window.addEventListener('openCsvAssessment', handleOpenCsvAssessment);
    window.addEventListener('openRoiCalculator', handleOpenRoiCalculator);

    return () => {
      // clearTimeout(timer);
      // document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('openLeadMagnet', handleOpenMagnet);
      window.removeEventListener('openCsvAssessment', handleOpenCsvAssessment);
      window.removeEventListener('openRoiCalculator', handleOpenRoiCalculator);
    };
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-[var(--color-brand)] selection:text-white transition-colors duration-300 dark:bg-slate-950 dark:text-gray-100 overflow-x-clip w-full max-w-full relative">
         <LeadMagnetModal 
           isOpen={isLeadMagnetOpen} 
           onClose={() => setIsLeadMagnetOpen(false)} 
         />
         <CsvAssessmentWizard 
           isOpen={isCsvAssessmentOpen} 
           onClose={() => setIsCsvAssessmentOpen(false)} 
         />
         <RoiCalculatorModal
           isOpen={isRoiCalculatorOpen}
           onClose={() => setIsRoiCalculatorOpen(false)}
         />
         <Suspense fallback={<div className="flex h-screen items-center justify-center"><div className="w-8 h-8 rounded-full border-4 border-[var(--color-brand)] border-t-transparent animate-spin"></div></div>}>
           <Routes>
             {/* Sanity Studio Route - standalone full-screen */}
             <Route path="/studio/*" element={<StudioPage />} />
             
             {/* Main Frontend Website Routes */}
             <Route path="*" element={
               <>
                 <CookieBanner />
                 <Navigation />
                 <PageTracker />
                 <AnimatedRoutes onOpenLeadMagnet={() => setIsLeadMagnetOpen(true)} />
                 <FloatingContactButtons />
                 <ScrollToTopButton />
                 <Footer />
               </>
             } />
           </Routes>
         </Suspense>
      </div>
    </ThemeProvider>
  );
}
