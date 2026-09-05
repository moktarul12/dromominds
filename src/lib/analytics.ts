// src/lib/analytics.ts

declare global {
  interface Window {
    dataLayer: any[];
  }
}

export interface AnalyticsEvent {
  event: string;
  category?: string;
  action?: string;
  label?: string;
  value?: number;
  [key: string]: any;
}

export const trackEvent = (eventData: AnalyticsEvent) => {
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(eventData);
  }
};

export const pageView = (url: string, title?: string) => {
  trackEvent({
    event: 'page_view',
    page_path: url,
    page_title: title || document.title,
  });
};

// Reusable functions for tracking specific interactions
export const trackContactFormSubmit = () => trackEvent({ event: 'generate_lead', category: 'Contact Form', action: 'Submit' });
export const trackNewsletterSignup = () => trackEvent({ event: 'sign_up', category: 'Newsletter', action: 'Submit' });
export const trackPhoneClick = () => trackEvent({ event: 'contact', category: 'Phone', action: 'Click' });
export const trackEmailClick = () => trackEvent({ event: 'contact', category: 'Email', action: 'Click' });
export const trackWhatsAppClick = () => trackEvent({ event: 'contact', category: 'WhatsApp', action: 'Click' });
export const trackCTAClick = (label: string) => trackEvent({ event: 'cta_click', category: 'CTA', action: 'Click', label });
export const trackDownloadBrochure = () => trackEvent({ event: 'file_download', category: 'Brochure', action: 'Download' });
export const trackDownloadPdf = (label: string) => trackEvent({ event: 'file_download', category: 'PDF', action: 'Download', label });
export const trackExternalLink = (url: string) => trackEvent({ event: 'outbound_link', category: 'External Link', action: 'Click', label: url });
