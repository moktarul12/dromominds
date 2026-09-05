import React from 'react';
import { Hero } from '../components/Hero';
import { GlobalClients } from '../components/GlobalClients';
import { OurCapabilities } from '../components/OurCapabilities';
import { BusinessOutcomes } from '../components/BusinessOutcomes';
import { IndustriesServed } from '../components/IndustriesServed';
import { Lifecycle } from '../components/Lifecycle';
import { CaseStudies } from '../components/CaseStudies';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { Testimonials } from '../components/Testimonials';
import { LeadMagnetAudit } from '../components/LeadMagnetAudit';
import { Whitepapers } from '../components/Whitepapers';
import { InPageTabs } from '../components/InPageTabs';
import { CsaTransitionKit } from '../components/CsaTransitionKit';
import { ComplianceStandards } from '../components/ComplianceStandards';
import { CsvAssessmentSection } from '../components/CsvAssessmentSection';
import { SEO } from '../components/SEO';

interface HomeProps {
  onOpenLeadMagnet?: () => void;
}

export const Home = ({ onOpenLeadMagnet }: HomeProps) => {
  return (
    <>
      <SEO 
        title="Dromominds Solutions" 
        description="Providing structured validation, qualification, and regulatory support services aligned with global GxP, FDA, and ISO requirements."
      />
      <InPageTabs />
      <main>
        <Hero />
        <GlobalClients />
        <OurCapabilities />
        <WhyChooseUs />
        <Lifecycle />
        <ComplianceStandards />
        <BusinessOutcomes />
        <IndustriesServed />
        <Testimonials />
        <CaseStudies />
        <CsvAssessmentSection />
        <CsaTransitionKit onOpenLeadMagnet={onOpenLeadMagnet || (() => {})} />
        <LeadMagnetAudit />
        <Whitepapers />
      </main>
    </>
  );
};

export default Home;

