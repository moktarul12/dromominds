import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import { PageTransition } from './PageTransition';
import { Home } from '../pages/Home';
import { ServicePage } from '../pages/ServicePage';
import { ContactPage } from '../pages/ContactPage';
import { AboutPage } from '../pages/AboutPage';
import { GenericPage } from '../pages/GenericPage';
import { BlogListPage } from '../pages/BlogListPage';
import { BlogPostPage } from '../pages/BlogPostPage';
import { NewsPage } from '../pages/NewsPage';
import { VideosPage } from '../pages/VideosPage';

export const AnimatedRoutes = ({ onOpenLeadMagnet }: { onOpenLeadMagnet: () => void }) => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
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
        <Route path="/resources" element={<PageTransition><GenericPage type="resource" /></PageTransition>} />
        <Route path="/resources/:id" element={<PageTransition><GenericPage type="resource" /></PageTransition>} />
        <Route path="/partners" element={<PageTransition><GenericPage type="partner" /></PageTransition>} />
        <Route path="/partners/:id" element={<PageTransition><GenericPage type="partner" /></PageTransition>} />
        <Route path="/privacy" element={<PageTransition><GenericPage type="legal" /></PageTransition>} />
        <Route path="/terms" element={<PageTransition><GenericPage type="legal" /></PageTransition>} />
        <Route path="*" element={<PageTransition><Home onOpenLeadMagnet={onOpenLeadMagnet} /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};
