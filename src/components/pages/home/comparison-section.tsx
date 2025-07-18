import { Check, X, ArrowRight, Trophy } from "lucide-react";

export default function ComparisonSection() {
  const competitors = [
    { name: "PostWizard", color: "#7C3AED", isUs: true },
    { name: "Ocoya", color: "#6B7280", isUs: false },
    { name: "Predis.ai", color: "#6B7280", isUs: false },
    { name: "Vista Social", color: "#6B7280", isUs: false },
    { name: "AdCreative.ai", color: "#6B7280", isUs: false },
  ];

  const features = [
    {
      name: "Product-Aware AI",
      description: "AI understands your product catalog for personalized content",
      values: [true, false, false, false, false],
    },
    {
      name: "AI Ads (Images + Videos)",
      description: "Generate ad creatives for Facebook, Instagram, TikTok",
      values: [true, false, false, false, true],
    },
    {
      name: "Social Auto-Publishing",
      description: "Schedule and auto-post across platforms",
      values: [true, true, true, true, false],
    },
    {
      name: "WhatsApp Notifications",
      description: "Get post reminders & content updates on WhatsApp",
      values: [true, false, false, false, false],
    },
    {
      name: "Shopify & WooCommerce Integration",
      description: "Auto-sync products for instant post creation",
      values: [true, false, false, false, false],
    },
    {
      name: "White-Label Option",
      description: "Rebrand the platform for your agency clients",
      values: [true, false, false, false, false],
    },
    {
      name: "Affordable Pricing",
      description: "Budget-friendly for small businesses",
      values: [true, false, false, false, false],
    },
  ];

  return (
    <section className="relative py-20 lg:py-32 bg-[#FFFFFF] overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -left-40 w-80 h-80 bg-primary rounded-full mix-blend-multiply filter blur-xl opacity-5 animate-pulse"></div>
        <div className="absolute bottom-10 right-[-170px] h-80 w-80 animate-pulse rounded-full bg-accent opacity-5 mix-blend-multiply blur-xl filter delay-500"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-8 border border-primary/20">
            <Trophy className="w-4 h-4" />
            Why Choose PostWizard
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#111827] mb-6 leading-tight">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              How We Compare
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-[#6B7280] max-w-3xl mx-auto leading-relaxed">
            The only AI tool that combines **Product-Aware Posts, Ads, and Social Scheduling**
          </p>
        </div>

        {/* Comparison Table */}
        <div className="bg-[#FFFFFF] rounded-3xl border border-gray-100 shadow-lg overflow-hidden mb-12">
          {/* Table Header */}
          <div className="bg-gradient-to-r from-[#F9FAFB] to-[#F3F4F6] px-6 py-4">
            <div className="grid grid-cols-6 gap-4">
              <div className="font-semibold text-[#111827]">Feature</div>
              {competitors.map((competitor) => (
                <div
                  key={competitor.name}
                  className={`text-center font-semibold ${
                    competitor.isUs ? "text-primary" : "text-[#6B7280]"
                  }`}
                >
                  {competitor.name}
                  {competitor.isUs && (
                    <div className="ml-1 text-xs bg-primary text-white px-2 py-1 rounded-full mt-1 inline-block">
                      That's Us!
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-gray-100">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="px-6 py-6 hover:bg-[#F9FAFB] transition-colors"
              >
                <div className="grid grid-cols-6 gap-4 items-center">
                  <div>
                    <h3 className="font-semibold text-[#111827] mb-1">
                      {feature.name}
                    </h3>
                    <p className="text-sm text-[#6B7280]">{feature.description}</p>
                  </div>
                  {feature.values.map((hasFeature, index) => (
                    <div key={index} className="text-center">
                      {hasFeature ? (
                        <div
                          className={`inline-flex items-center justify-center w-8 h-8 rounded-full ${
                            index === 0 ? "bg-primary" : "bg-success"
                          }`}
                        >
                          <Check className="w-5 h-5 text-white" />
                        </div>
                      ) : (
                        <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-danger">
                          <X className="w-5 h-5 text-white" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Quote */}
        <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-3xl p-8 lg:p-12 border border-primary/10 mb-12">
          <div className="text-center">
            <div className="text-4xl mb-4">💜</div>
            <blockquote className="text-xl lg:text-2xl font-medium text-[#111827] mb-6 italic">
              "PostWizard is the only tool built for product-based businesses to dominate social and ads—without tech headaches."
            </blockquote>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-2xl lg:text-3xl font-bold text-[#111827] mb-6">
            Ready to Grow Your E-Commerce Sales?
          </h3>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 group inline-flex items-center gap-2">
              Start Your Free Trial
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="/demo"
              className="text-primary hover:text-primary/80 font-semibold inline-flex items-center gap-2 transition-colors"
            >
              Watch Demo
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <p className="text-sm text-[#6B7280] mt-4">
            No credit card required • Setup in under 5 minutes
          </p>
        </div>
      </div>
    </section>
  );
}
