import type React from "react";
import {
  Wand2,
  CalendarCheck,
  Users,
  Video,
  ShoppingBag,
  ShieldCheck,
} from "lucide-react";
import Feature from "@/components/pages/features/feature";
import FeaturesHeroSection from "@/components/pages/features/hero-section";
import WhyPostWizard from "@/components/pages/features/why-post-wizard";
import PostWizardCta from "@/components/pages/features/post-wizard-cta";

export default function FeaturesPage() {
  const features = [
    {
      icon: <Wand2 className="h-8 w-8" />,
      title: "AI Post Generator",
      desc: "Just describe your product — we'll generate a scroll-stopping post with image, caption, and hashtags.",
      color: "purple",
    },
    {
      icon: <CalendarCheck className="h-8 w-8" />,
      title: "Smart Scheduler",
      desc: "Set it and forget it. Schedule posts across Facebook, Instagram & TikTok with just one click.",
      color: "amber",
    },
    {
      icon: <Video className="h-8 w-8" />,
      title: "AI Video Creation",
      desc: "Need video reels? We'll turn product info into short-form social video content automatically.",
      color: "green",
    },
    {
      icon: <ShoppingBag className="h-8 w-8" />,
      title: "Shopify Integration",
      desc: "Connect your store and auto-post new products as branded social content — no manual work needed.",
      color: "purple",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Team Collaboration",
      desc: "Invite your marketing team, assign roles, and work together in real time.",
      color: "amber",
    },
    {
      icon: <ShieldCheck className="h-8 w-8" />,
      title: "White-Label Support",
      desc: "Agencies can offer PostWizard under their brand, with custom domains and branding.",
      color: "green",
    },
  ];
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
