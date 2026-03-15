'use client';

import { Header } from '@/components/header';
import { HeroSection } from '@/components/hero-section';
import { ApprovalSection } from '@/components/approval-section';
import { ConcernsSection } from '@/components/concerns-section';
import { FeaturesSection } from '@/components/features-section';
import { HowItWorksSection } from '@/components/how-it-works-section';
import { DoctorSamSection } from '@/components/doctor-sam-section';
import { FaqSection } from '@/components/faq-section';
import { CtaSection } from '@/components/cta-section';
import { Footer } from '@/components/footer';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ApprovalSection />
        <ConcernsSection />
        <FeaturesSection />
        <HowItWorksSection />
        <DoctorSamSection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
