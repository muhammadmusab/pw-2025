import { ArrowRight, Sparkles, Clock, CreditCard, Zap } from "lucide-react";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-[#6366F1] py-20 lg:py-32">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -bottom-40 -left-40 h-80 w-80 animate-pulse rounded-full bg-[#FFFFFF] opacity-10 mix-blend-multiply blur-xl filter delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 transform animate-pulse rounded-full bg-accent opacity-5 mix-blend-multiply blur-xl filter delay-500"></div>
      </div>

      {/* Floating elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 animate-bounce text-4xl delay-1000">
          ✨
        </div>
        <div className="absolute top-40 right-32 animate-bounce text-3xl delay-2000">
          🧙‍♂️
        </div>
        <div className="absolute bottom-32 left-32 animate-bounce text-3xl delay-3000">
          🚀
        </div>
        <div className="absolute right-20 bottom-20 animate-bounce text-4xl">
          ⭐
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#FFFFFF]/30 bg-[#FFFFFF]/20 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
            <Sparkles className="h-4 w-4" />
            Join 10,000+ Happy Businesses
          </div>

          {/* Main Headline */}
          <h2 className="mb-6 text-4xl leading-tight font-bold text-white sm:text-5xl lg:text-6xl xl:text-7xl">
            Ready to Let the{" "}
            <span className="relative">
              <span className="bg-gradient-to-r from-accent to-[#F59E0B] bg-clip-text text-transparent">
                Wizard
              </span>
              <div className="absolute -top-2 -right-2 text-2xl">🧙‍♂️</div>
            </span>
            <br />
            Do the Work?
          </h2>

          {/* Subheading */}
          <p className="mx-auto mb-12 max-w-4xl text-xl leading-relaxed text-white/90 sm:text-2xl">
            Start for free — no credit card required.{" "}
            <span className="font-semibold text-accent">
              Create AI-powered social posts in minutes.
            </span>
          </p>

          {/* CTA Button */}
          <div className="mb-12 flex flex-col items-center gap-6">
            <Link
              href={"/signup"}
              className="hover:shadow-3xl group inline-flex items-center gap-3 rounded-2xl bg-[#FFFFFF] px-12 py-6 text-xl font-bold text-primary shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-[#F9FAFB]"
            >
              <span className="text-2xl">🚀</span>
              Sign Up Free
              <ArrowRight className="h-6 w-6 transition-transform group-hover:translate-x-1" />
            </Link>

            <p className="text-sm text-white/80">
              ✅ No credit card required • ✅ 7-day free trial • ✅ Cancel
              anytime
            </p>
          </div>

          {/* Feature Highlights */}
          <div className="mx-auto mb-16 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="rounded-2xl border border-[#FFFFFF]/20 bg-[#FFFFFF]/10 p-6 backdrop-blur-sm">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <h3 className="mb-2 font-bold text-white">Setup in 5 Minutes</h3>
              <p className="text-sm text-white/80">
                Connect your accounts and start creating instantly
              </p>
            </div>

            <div className="rounded-2xl border border-[#FFFFFF]/20 bg-[#FFFFFF]/10 p-6 backdrop-blur-sm">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent">
                <CreditCard className="h-6 w-6 text-white" />
              </div>
              <h3 className="mb-2 font-bold text-white">No Credit Card</h3>
              <p className="text-sm text-white/80">
                Start your free trial without any payment info
              </p>
            </div>

            <div className="rounded-2xl border border-[#FFFFFF]/20 bg-[#FFFFFF]/10 p-6 backdrop-blur-sm">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h3 className="mb-2 font-bold text-white">Instant Results</h3>
              <p className="text-sm text-white/80">
                See your first AI-generated posts in minutes
              </p>
            </div>
          </div>

          {/* Urgency Section */}
          <div className="mx-auto max-w-3xl rounded-3xl border border-[#FFFFFF]/20 bg-[#FFFFFF]/10 p-8 backdrop-blur-sm">
            <div className="text-center">
              <h3 className="mb-4 text-2xl font-bold text-white">
                🔥 Limited Time: New users will get 50% More AI Posts!
              </h3>
              <p className="mb-6 text-white/90">
                New users get extra AI post credits when they sign up this week.
                Don't miss out!
              </p>

              <div className="flex items-center justify-center gap-8 text-white/80">
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">15</div>
                  <div className="text-sm">AI Posts</div>
                  <div className="text-xs">Instead of 10</div>
                </div>
                {/* <div className="text-3xl">+</div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">Free</div>
                  <div className="text-sm">Templates</div>
                  <div className="text-xs">Premium designs</div>
                </div> */}
                <div className="text-3xl">=</div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">🎉</div>
                  <div className="text-sm">Success</div>
                  <div className="text-xs">Guaranteed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
