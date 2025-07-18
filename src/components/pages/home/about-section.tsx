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
    "Struggle to create engaging social posts & ads",
    "Spend hours crafting creatives for every platform",
    "Writing captions that don't convert",
    "Manually managing campaigns for products",
    "Missed opportunities due to inconsistent posting",
  ];

  const solutions = [
    "AI generates scroll-stopping content & ad creatives",
    "Get high-converting captions & hashtags instantly",
    "Ad-ready content for Facebook, Instagram & TikTok",
    "Sync products from Shopify or WooCommerce in 1-click",
    "Plan, organize, and schedule content easily",
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#F9FAFB] via-[#FFFFFF] to-[#F3F4F6] py-20 lg:py-32">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="bg-primary absolute top-20 -left-40 h-80 w-80 animate-pulse rounded-full opacity-5 mix-blend-multiply blur-xl filter"></div>
        <div className="bg-accent absolute -right-40 -bottom-1/2 h-80 w-80 animate-pulse rounded-full opacity-5 mix-blend-multiply blur-xl filter delay-1000"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Problem Statement */}
        <div className="mb-16 text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#6B7280]/20 bg-[#6B7280]/10 px-4 py-2 text-sm font-medium text-[#6B7280]">
            <Clock className="h-4 w-4" />
            The Marketing Struggle is Real
          </div>
          <h2 className="text-text mb-6 text-4xl leading-tight font-bold sm:text-5xl lg:text-6xl xl:text-7xl">
            Still Spending{" "}
            <span className="from-primary relative bg-gradient-to-r to-[#6B7280] bg-clip-text text-transparent">
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
            on Posts & Ads?
          </h2>

          <p className="mx-auto mb-10 max-w-4xl text-lg leading-relaxed text-[#6B7280] sm:text-xl lg:text-2xl">
            Most businesses waste time and money creating posts, ads, and
            product campaigns manually.
            <span className="text-text font-semibold">
              {" "}
              Worse — it doesn’t drive sales consistently.
            </span>
          </p>
        </div>

        {/* Problem Stats */}
        <div className="mb-20 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="rounded-2xl border border-gray-100 bg-[#FFFFFF] p-6 text-center shadow-sm transition-shadow hover:shadow-md">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#6B7280]/10">
              <Clock className="h-8 w-8 text-[#6B7280]" />
            </div>
            <h3 className="text-text mb-2 text-2xl font-bold">10+ Hours</h3>
            <p className="text-[#6B7280]">Lost weekly on manual content work</p>
          </div>

          <div className="rounded-2xl border border-gray-100 bg-[#FFFFFF] p-6 text-center shadow-sm transition-shadow hover:shadow-md">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#6B7280]/10">
              <TrendingDown className="h-8 w-8 text-[#6B7280]" />
            </div>
            <h3 className="text-text mb-2 text-2xl font-bold">Low ROI</h3>
            <p className="text-[#6B7280]">Ads that fail to convert</p>
          </div>

          <div className="rounded-2xl border border-gray-100 bg-[#FFFFFF] p-6 text-center shadow-sm transition-shadow hover:shadow-md">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#6B7280]/10">
              <Users className="h-8 w-8 text-[#6B7280]" />
            </div>
            <h3 className="text-text mb-2 text-2xl font-bold">
              No Consistency
            </h3>
            <p className="text-[#6B7280]">Inconsistent brand visibility</p>
          </div>
        </div>

        {/* Solution Introduction */}
        <div className="mb-16 text-center">
          <div className="border-primary/20 bg-primary/10 text-primary mb-8 inline-flex items-center gap-2 rounded-full border px-6 py-3 text-lg font-semibold">
            <Zap className="h-5 w-5" />
            PostWizard Fixes That
          </div>

          <p className="text-text mx-auto max-w-5xl text-xl leading-relaxed font-medium sm:text-2xl lg:text-3xl">
            Upload your products or brand details — our AI generates{" "}
            <strong>
              social posts, ad creatives, captions, and product campaigns
            </strong>{" "}
            in seconds. Ready for scheduling or immediate use.
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
                  <div className="bg-destructive mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full">
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
              <h3 className="text-success mb-4 text-2xl font-bold">
                ✅ After PostWizard
              </h3>
            </div>

            <div className="space-y-4">
              {solutions.map((solution, index) => (
                <div
                  key={index}
                  className="border-success/20 flex items-start gap-3 rounded-xl border bg-[#FFFFFF] p-4 shadow-sm"
                >
                  <CheckCircle className="text-success mt-0.5 h-6 w-6 flex-shrink-0" />
                  <p className="font-medium text-[#6B7280]">{solution}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Results Preview */}
        <div className="mt-20 text-center">
          <div className="border-primary/10 from-primary/5 to-accent/5 rounded-3xl border bg-gradient-to-r p-4 sm:p-6 md:p-8 lg:p-12">
            <h3 className="text-text mb-6 text-2xl font-bold lg:text-3xl">
              Scale Your Marketing in Minutes, Not Hours
            </h3>

            <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
              <div className="text-center">
                <div className="text-primary mb-2 text-3xl font-bold">
                  5 Min
                </div>
                <p className="text-[#6B7280]">Full Setup</p>
              </div>
              <div className="text-center">
                <div className="text-accent mb-2 text-3xl font-bold">50+</div>
                <p className="text-[#6B7280]">Posts & Ads Ready</p>
              </div>
              <div className="text-center">
                <div className="text-success mb-2 text-3xl font-bold">3x</div>
                <p className="text-[#6B7280]">Better Engagement</p>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button className="bg-primary hover:bg-primary/90 group inline-flex items-center gap-2 rounded-xl px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-xl">
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
