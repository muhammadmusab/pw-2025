import { Check, ArrowRight, Star, Zap } from "lucide-react";

export default function PricingPreviewSection({
  showCta = true,
}: {
  showCta?: boolean;
}) {
  const plans = [
    {
      name: "Starter",
      price: "$0",
      period: "/month",
      description: "Great for small stores testing AI content",
      features: [
        "10 AI-generated posts per month",
        "1 connected social account",
        "Basic product-to-post feature",
        "No WhatsApp notifications",
        "🚫 No video or ad creatives",
      ],
      cta: "Start Free",
      popular: false,
      color: "gray",
    },
    {
      name: "Growth",
      price: "$9",
      period: "/month",
      description: "Perfect for e-commerce businesses ready to scale",
      features: [
        "150 AI-generated posts per month",
        "Up to 5 social accounts",
        "AI Ad Creatives + Video support",
        "WhatsApp content notifications",
        "Content calendar & semi-automated scheduling",
      ],
      cta: "Start Growth Plan",
      popular: true,
      color: "purple",
    },
    {
      name: "Agency",
      price: "$29",
      period: "/month",
      description: "For agencies managing multiple clients",
      features: [
        "Unlimited AI posts + Ad creatives",
        "25+ Social accounts",
        "Shopify & WooCommerce integration",
        "Team access + White Label branding",
        "Advanced analytics & reporting",
      ],
      cta: "Start Agency Plan",
      popular: false,
      color: "amber",
    },
  ];

  return (
    <section>
      {/* Background decorative elements */}
      <div>
        <div className="bg-primary absolute -top-40 -right-40 h-80 w-80 animate-pulse rounded-full opacity-10 mix-blend-multiply blur-xl filter lg:block hidden"></div>
        <div className="bg-success absolute -top-40 -left-40 h-80 w-80 animate-pulse rounded-full opacity-10 mix-blend-multiply blur-xl filter"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="bg-primary/10 text-primary border-primary/20 mb-8 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium">
            <Zap className="h-4 w-4" />
            Choose Your Plan
          </div>

          <h2 className="text-text mb-6 text-4xl leading-tight font-bold sm:text-5xl lg:text-6xl">
            <span className="from-primary to-accent bg-gradient-to-r bg-clip-text text-transparent">
              Flexible Plans
            </span>
            <br />
            for E-commerce Growth
          </h2>

          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-[#6B7280] sm:text-xl">
            Start free and upgrade when your store is ready to scale with AI-powered content, ads, and scheduling.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="mb-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative my-3 rounded-2xl border-2 bg-[#FFFFFF] p-8 transition-all duration-300 hover:shadow-xl ${
                plan.popular
                  ? "border-primary scale-105 shadow-lg"
                  : "hover:border-primary/30 border-gray-100"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 transform">
                  <div className="bg-primary sm:w-auto w-[140px] justify-center flex items-center gap-1 rounded-full px-4 py-1 text-sm font-semibold text-white">
                    <Star className="h-3 w-3 fill-current" />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="mb-8 text-center">
                <h3 className="text-text mb-2 text-2xl font-bold">
                  {plan.name}
                </h3>
                <p className="mb-4 text-[#6B7280]">{plan.description}</p>

                <div className="mb-6">
                  <span className="text-text text-4xl font-bold lg:text-5xl">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-lg text-[#6B7280]">
                      {plan.period}
                    </span>
                  )}
                </div>

                <button
                  className={`w-full rounded-xl px-6 py-3 font-semibold transition-all duration-300 ${
                    plan.popular
                      ? "bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl"
                      : "hover:bg-primary text-text border border-gray-200 bg-[#F9FAFB] hover:text-white"
                  }`}
                >
                  {plan.cta}
                </button>
              </div>

              {/* Features List */}
              <div className="space-y-4">
                <h4 className="text-text mb-3 font-semibold">
                  Everything included:
                </h4>
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    {!feature.includes("🚫") ? (
                      <Check className="text-success mt-0.5 h-5 w-5 flex-shrink-0" />
                    ) : null}
                    <span className="text-[#6B7280]">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        {showCta ? (
          <div className="text-center">
            <p className="mb-6 text-[#6B7280]">
              Need more details? Compare all features and pick the perfect plan.
            </p>

            <a
              href="/pricing"
              className="text-primary hover:text-primary/80 group inline-flex items-center gap-2 text-lg font-semibold transition-colors"
            >
              Compare All Plans
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        ) : null}

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="rounded-2xl border border-gray-100 bg-[#FFFFFF] p-8 shadow-sm">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="text-primary mb-2 text-3xl font-bold">
                  7-Day
                </div>
                <p className="text-[#6B7280]">Free Trial</p>
              </div>
              <div className="text-center">
                <div className="text-accent mb-2 text-3xl font-bold">
                  No Setup
                </div>
                <p className="text-[#6B7280]">Fees</p>
              </div>
              <div className="text-center">
                <div className="text-success mb-2 text-3xl font-bold">
                  Cancel
                </div>
                <p className="text-[#6B7280]">Anytime</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
