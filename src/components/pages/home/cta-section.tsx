import { ArrowRight, Store, Zap, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-[#6366F1] py-20 lg:py-32">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -bottom-40 -left-40 h-80 w-80 animate-pulse rounded-full bg-[#FFFFFF] opacity-10 mix-blend-multiply blur-xl filter delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 transform animate-pulse rounded-full bg-accent opacity-5 mix-blend-multiply blur-xl filter delay-500"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#FFFFFF]/30 bg-[#FFFFFF]/20 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
          🚀 Power Up Your Social Marketing
        </div>

        {/* Headline */}
        <h2 className="mb-6 text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
          Turn Your Products Into
          <br />
          <span className="bg-gradient-to-r from-accent to-accent bg-clip-text text-transparent">
            AI-Powered Posts & Ads
          </span>
        </h2>

        {/* Subheading */}
        <p className="mx-auto mb-12 max-w-4xl text-xl text-white/90 sm:text-2xl leading-relaxed">
          Connect your **Shopify** or **WooCommerce** store, and let PostWizard
          create and schedule your ads, videos, and posts — automatically.
        </p>

        {/* Primary CTA */}
        <div className="mb-12 flex flex-col items-center gap-6">
          <Link
            href="/signup"
            className="hover:shadow-3xl group inline-flex items-center gap-2 rounded-2xl bg-white px-12 py-6 text-xl font-bold text-primary shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-[#F9FAFB]"
          >
            <span className="text-2xl sm:inline-block hidden">✨</span>
            Start Free Trial
            <ArrowRight className="h-6 w-6 transition-transform group-hover:translate-x-1" />
          </Link>
          <p className="text-sm text-white/80">
            ✅ No credit card required • ✅ 7-day free trial • ✅ Cancel anytime
          </p>
        </div>

        {/* Features */}
        <div className="mx-auto mb-16 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-3">
          <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent">
              <Store className="h-6 w-6 text-white" />
            </div>
            <h3 className="mb-2 font-bold text-white">One-Click Store Sync</h3>
            <p className="text-sm text-white/80">
              Connect Shopify or WooCommerce in seconds
            </p>
          </div>

          <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <h3 className="mb-2 font-bold text-white">AI Ad Automation</h3>
            <p className="text-sm text-white/80">
              Instant social ads, captions & creatives
            </p>
          </div>

          <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent">
              <ShieldCheck className="h-6 w-6 text-white" />
            </div>
            <h3 className="mb-2 font-bold text-white">Agency Ready</h3>
            <p className="text-sm text-white/80">
              White-label solution for client campaigns
            </p>
          </div>
        </div>

        {/* Urgency Banner */}
        <div className="mx-auto max-w-3xl rounded-3xl border border-white/20 bg-white/10 p-6 sm:p-8 backdrop-blur-sm">
          <h3 className="mb-4 text-2xl font-bold text-white">
            🎁 Limited-Time Bonus: Extra 50% AI Credits
          </h3>
          <p className="mb-6 text-white/90">
            Sign up this week and get 50% more AI-generated posts and ads for
            free!
          </p>
          <div className="flex justify-center gap-8 text-white/80">
            <div className="text-center">
              <div className="text-2xl font-bold text-accent">15</div>
              <div className="text-sm">AI Posts</div>
              <div className="text-xs">Instead of 10</div>
            </div>
            <div className="text-3xl">+</div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent">🎉</div>
              <div className="text-sm">Launch Faster</div>
              <div className="text-xs">Start in minutes</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
