import React from "react";
import { Sparkles } from "lucide-react";

const FeaturesHeroSection = () => {
  return (
    <section className="mb-20 text-center">
      {/* Badge */}
      <div className="bg-primary/10 text-primary border-primary/20 mb-8 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium">
        <Sparkles className="h-4 w-4" />
        Explore PostWizard Features
      </div>

      {/* Headline */}
      <h1 className="text-text mb-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl xl:text-7xl">
        The Smartest Way to{" "}
        <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Automate Social Ads & Posts
        </span>
      </h1>

      {/* Subheading */}
      <p className="mx-auto max-w-4xl text-lg sm:text-xl lg:text-2xl text-[#6B7280] leading-relaxed">
        Connect your store, generate AI-powered posts & ads, and let PostWizard
        handle publishing — all in one platform designed for e-commerce
        success.
      </p>
    </section>
  );
};

export default FeaturesHeroSection;
