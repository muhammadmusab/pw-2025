import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const PostWizardCta = () => {
  return (
    <section className="text-center">
      <div className="from-primary/5 to-accent/5 border-primary/10 rounded-3xl border bg-gradient-to-r p-8 lg:p-12">
        <h3 className="text-text mb-4 text-2xl font-bold lg:text-3xl">
          Ready to Create Smarter, Faster?
        </h3>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-[#6B7280]">
          Turn your product details into AI-powered posts, schedule with ease, and stay on top of social media without the stress.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/signup"
            className="bg-primary hover:bg-primary/90 group inline-flex items-center gap-2 rounded-xl px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-xl"
          >
            Get Started Free
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>

          <Link
            href="/pricing"
            className="text-primary hover:text-primary/80 inline-flex items-center gap-2 font-semibold transition-colors"
          >
            View Pricing
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <p className="mt-4 text-sm text-[#6B7280]">
          No credit card required • Set up in minutes • Join 10,000+ businesses
        </p>
      </div>
    </section>
  );
};

export default PostWizardCta;
