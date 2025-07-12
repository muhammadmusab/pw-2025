
import AboutSection from "@/components/pages/home/about-section";
import ComparisonSection from "@/components/pages/home/comparison-section";
import CTASection from "@/components/pages/home/cta-section";
import FeaturesSection from "@/components/pages/home/features-section";
import HeroSection from "@/components/pages/home/hero-section";
import PricingPreviewSection from "@/components/pages/home/pricing-preview-section";
import TestimonialsSection from "@/components/pages/home/testimonial-section";
import PricingComparisonTable from "@/components/pages/pricing/pricing-comparison-table";
import React, { Fragment } from "react";

const page = () => {
  return (
    <Fragment>
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <PricingPreviewSection/>
      <ComparisonSection/>
      <TestimonialsSection/>
      <CTASection/>
     
    </Fragment>
  );
};

export default page;
