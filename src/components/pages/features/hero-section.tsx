import React from "react";
import { Sparkles } from "lucide-react";
const FeaturesHeroSection = () => {
  return (
    <section className="mb-20 text-center">
      <div className="bg-primary/10 text-primary border-primary/20 mb-8 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium">
        <Sparkles className="h-4 w-4" />
        Complete Feature Overview
      </div>

      <h1 className="text-text mb-6 text-4xl leading-tight font-bold sm:text-5xl lg:text-6xl xl:text-7xl">
        Everything You Need to{" "}
        <span className="from-primary to-accent bg-gradient-to-r bg-clip-text text-transparent">
          Automate Your Socials
        </span>
      </h1>

      <p className="mx-auto max-w-4xl text-lg leading-relaxed text-[#6B7280] sm:text-xl lg:text-2xl">
        AI-powered content creation, scheduling, and publishing — all in one
        magical platform.
      </p>
    </section>
  );
};

export default FeaturesHeroSection;
