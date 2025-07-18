import type React from "react";
import {
  Wand2,
  CalendarCheck,
  Users,
  Video,
  ShoppingBag,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import Feature from "@/components/pages/features/feature";
import FeaturesHeroSection from "@/components/pages/features/hero-section";
import WhyPostWizard from "@/components/pages/features/why-post-wizard";
import PostWizardCta from "@/components/pages/features/post-wizard-cta";

export default function FeaturesPage() {
  const features = [
  {
    icon: <Wand2 className="h-8 w-8" />,
    title: "AI Ad & Post Generator",
    desc: "Create high-converting social media posts and ads in seconds — captions, visuals, and hashtags included.",
    color: "purple",
  },
  {
    icon: <CalendarCheck className="h-8 w-8" />,
    title: "Smart Scheduling & Alerts",
    desc: "Plan your content calendar in one dashboard. We'll send you WhatsApp reminders when it's time to post — so you never miss a slot.",
    color: "amber",
  },
  {
    icon: <Video className="h-8 w-8" />,
    title: "AI Video & Reels",
    desc: "Generate short-form video ads or social reels from your product details — perfect for TikTok & Instagram.",
    color: "green",
  },
  {
    icon: <ShoppingBag className="h-8 w-8" />,
    title: "E-Commerce Store Sync",
    desc: "Connect Shopify or WooCommerce to auto-generate posts and ads whenever you add a new product.",
    color: "purple",
  },
  {
    icon: <TrendingUp className="h-8 w-8" />,
    title: "Performance Insights",
    desc: "Track engagement, CTR, and ROI across all platforms with smart analytics dashboards.",
    color: "amber",
  },
  {
    icon: <ShieldCheck className="h-8 w-8" />,
    title: "White-Label for Agencies",
    desc: "Rebrand PostWizard for your agency, add your custom domain, and manage unlimited client accounts.",
    color: "green",
  },
]
;
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#F9FAFB] via-[#FFFFFF] to-[#F3F4F6]">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="bg-primary absolute -top-40 -right-40 h-80 w-80 animate-pulse rounded-full opacity-10 mix-blend-multiply blur-xl filter"></div>
        <div className="bg-accent absolute -bottom-40 -left-40 h-80 w-80 animate-pulse rounded-full opacity-10 mix-blend-multiply blur-xl filter delay-1000"></div>
        <div className="bg-success absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 transform animate-pulse rounded-full opacity-5 mix-blend-multiply blur-xl filter delay-500"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
        {/* Hero Section */}
        <FeaturesHeroSection/>
        {/* Feature Grid */}
        <section className="mb-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Feature
                key={feature.title}
              icon={feature.icon}
              title={feature.title}
              desc={feature.desc}
              color={feature.color as "purple" | "amber" | "green"}
            />
          ))}
        </section>

        {/* Why PostWizard? */}
        <WhyPostWizard/>

        {/* CTA */}
        <PostWizardCta/>
      </div>
    </main>
  );
}
