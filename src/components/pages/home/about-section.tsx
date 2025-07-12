import {
  Clock,
  TrendingDown,
  Zap,
  CheckCircle,
  ArrowRight,
  Users,
} from "lucide-react";

export default function AboutSection() {
  const problems = [
    "Spend hours brainstorming content ideas",
    "Hunt for the perfect images and videos",
    "Write captions that fall flat",
    "Post inconsistently across platforms",
    "See poor engagement and low conversions",
  ];
  const solutions = [
    "AI generates unlimited content ideas instantly",
    "Auto-creates stunning visuals and videos",
    "Writes engaging, conversion-focused captions",
    "Schedules posts across all your channels",
    "Boost engagement and drive real results",
  ];
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#F9FAFB] via-[#FFFFFF] to-[#F3F4F6] py-20 lg:py-32">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -left-40 h-80 w-80 animate-pulse rounded-full bg-primary opacity-5 mix-blend-multiply blur-xl filter"></div>
        <div className="absolute -right-40 -bottom-1/2 h-80 w-80 animate-pulse rounded-full bg-accent opacity-5 mix-blend-multiply blur-xl filter delay-1000"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Problem Statement */}
        <div className="mb-16 text-center">
          {/* Add this before the main heading */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#6B7280]/20 bg-[#6B7280]/10 px-4 py-2 text-sm font-medium text-[#6B7280]">
            <Clock className="h-4 w-4" />
            The Problem Every Business Faces
          </div>
          <h2 className="mb-6 text-4xl leading-tight font-bold text-[#111827] sm:text-5xl lg:text-6xl xl:text-7xl">
            Tired of Spending{" "}
            <span className="relative bg-gradient-to-r from-primary to-[#6B7280] bg-clip-text text-transparent">
              Hours
              <svg
                className="absolute -bottom-2 left-0 h-3 w-full"
                viewBox="0 0 100 12"
                fill="none"
              >
                <path
                  d="M2 10C20 2 40 2 60 6C80 10 90 4 98 6"
                  stroke="#7C3AED"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>{" "}
            Creating Posts?
          </h2>

          <p className="mx-auto mb-10 max-w-4xl text-lg leading-relaxed text-[#6B7280] sm:text-xl lg:text-2xl">
            Small businesses waste hours each week trying to come up with
            content, find images, and post consistently.
            <span className="font-semibold text-[#111827]">
              {" "}
              Worse — the content doesn't convert.
            </span>
          </p>
        </div>

        {/* Problem Stats */}
        <div className="mb-20 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="rounded-2xl border border-gray-100 bg-[#FFFFFF] p-6 text-center shadow-sm transition-shadow hover:shadow-md">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#6B7280]/10">
              <Clock className="h-8 w-8 text-[#6B7280]" />
            </div>
            <h3 className="mb-2 text-2xl font-bold text-[#111827]">8+ Hours</h3>
            <p className="text-[#6B7280]">Wasted weekly on content creation</p>
          </div>

          <div className="rounded-2xl border border-gray-100 bg-[#FFFFFF] p-6 text-center shadow-sm transition-shadow hover:shadow-md">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#6B7280]/10">
              <TrendingDown className="h-8 w-8 text-[#6B7280]" />
            </div>
            <h3 className="mb-2 text-2xl font-bold text-[#111827]">Low ROI</h3>
            <p className="text-[#6B7280]">Poor engagement & conversions</p>
          </div>

          <div className="rounded-2xl border border-gray-100 bg-[#FFFFFF] p-6 text-center shadow-sm transition-shadow hover:shadow-md">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#6B7280]/10">
              <Users className="h-8 w-8 text-[#6B7280]" />
            </div>
            <h3 className="mb-2 text-2xl font-bold text-[#111827]">
              Inconsistent
            </h3>
            <p className="text-[#6B7280]">Sporadic posting hurts growth</p>
          </div>
        </div>

        {/* Solution Introduction */}
        <div className="mb-16 text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-6 py-3 text-lg font-semibold text-primary">
            <Zap className="h-5 w-5" />
            PostWizard Changes That
          </div>

          <p className="mx-auto max-w-5xl text-xl leading-relaxed font-medium text-[#111827] sm:text-2xl lg:text-3xl">
            Just upload your products or services — our AI instantly generates
            posts, captions, hashtags, images, even videos — ready to schedule
            and publish across your social channels.
          </p>
        </div>

        {/* Before vs After Comparison */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Before (Problems) */}
          <div className="space-y-6">
            <div className="text-center lg:text-left">
              <h3 className="mb-4 text-2xl font-bold text-[#6B7280]">
                ❌ Before PostWizard
              </h3>
            </div>

            <div className="space-y-4">
              {problems.map((problem, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 rounded-xl border border-gray-100 bg-[#FFFFFF] p-4 shadow-sm"
                >
                  <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#EF4444]">
                    <span className="text-sm font-bold text-white">✕</span>
                  </div>
                  <p className="font-medium text-[#6B7280]">{problem}</p>
                </div>
              ))}
            </div>
          </div>

          {/* After (Solutions) */}
          <div className="space-y-6">
            <div className="text-center lg:text-left">
              <h3 className="mb-4 text-2xl font-bold text-[#10B981]">
                ✅ After PostWizard
              </h3>
            </div>

            <div className="space-y-4">
              {solutions.map((solution, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 rounded-xl border border-[#10B981]/20 bg-[#FFFFFF] p-4 shadow-sm"
                >
                  <CheckCircle className="mt-0.5 h-6 w-6 flex-shrink-0 text-[#10B981]" />
                  <p className="font-medium text-[#6B7280]">{solution}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Results Preview */}
        <div className="mt-20 text-center">
          <div className="rounded-3xl border border-primary/10 bg-gradient-to-r from-primary/5 to-accent/5 p-8 lg:p-12">
            <h3 className="mb-6 text-2xl font-bold text-[#111827] lg:text-3xl">
              Transform Your Social Media in Minutes, Not Hours
            </h3>

            <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
              <div className="text-center">
                <div className="mb-2 text-3xl font-bold text-primary">
                  5 Min
                </div>
                <p className="text-[#6B7280]">Setup Time</p>
              </div>
              <div className="text-center">
                <div className="mb-2 text-3xl font-bold text-accent">
                  30+
                </div>
                <p className="text-[#6B7280]">Posts Generated</p>
              </div>
              <div className="text-center">
                <div className="mb-2 text-3xl font-bold text-[#10B981]">3x</div>
                <p className="text-[#6B7280]">Better Engagement</p>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button className="group inline-flex items-center gap-2 rounded-xl bg-primary lg:px-8 lg:py-4 p-[10px] text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:bg-primary/90 hover:shadow-xl ">
                See PostWizard in Action
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>
              <p className="text-sm text-[#6B7280]">Watch 2-minute demo</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
