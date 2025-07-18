import {
  Link2,
  ShoppingBag,
  Sparkles,
  ArrowRight,
  Megaphone,
} from "lucide-react";
import {
  RiFacebookLine as Facebook,
  RiInstagramLine as Instagram,
  RiTiktokLine as Tiktok,
} from "react-icons/ri";

export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      color: "#7C3AED",
      iconClass: "bg-primary/10",
      arrowColor: "#FBBF24",
      icon: <ShoppingBag className="h-8 w-8 text-primary" />,
      heading: "Sync Your Store or Add Products",
      text: "Connect Shopify or WooCommerce in one click — or manually add product details like name, price, and image.",
      points: ["Shopify & WooCommerce integration", "Manual product input", "Bulk upload support"],
    },
    {
      number: 2,
      color: "#FBBF24",
      arrowColor: "#10B981",
      iconClass: "bg-accent/10",
      icon: <Megaphone className="h-8 w-8 text-accent" />,
      heading: "Generate Posts & Ad Creatives",
      text: "Our AI creates high-converting social media posts, reels, ad copy, and creatives tailored to your products.",
      points: ["Engaging captions & hashtags", "Scroll-stopping ad creatives", "Product-focused campaigns"],
    },
    {
      number: 3,
      color: "#10B981",
      iconClass: "bg-success/10",
      icon: <Sparkles className="h-8 w-8 text-success" />,
      heading: "Plan, Schedule & Notify",
      text: "Organize your content calendar, set semi-automated posting reminders, and get WhatsApp notifications when content is ready.",
      points: ["Drag-and-drop content calendar", "Semi-automated scheduling", "WhatsApp content alerts"],
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#FFFFFF] py-20 lg:py-32">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-[-170px] h-80 w-80 animate-pulse rounded-full bg-accent opacity-5 mix-blend-multiply blur-xl filter delay-500"></div>
        <div className="absolute bottom-20 -left-40 h-80 w-80 animate-pulse rounded-full bg-primary opacity-5 mix-blend-multiply blur-xl filter"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            <Sparkles className="h-4 w-4" />
            How It Works
          </div>

          <h2 className="mb-6 text-4xl leading-tight font-bold text-[#111827] sm:text-5xl lg:text-6xl">
            From{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Store to Social
            </span>
            <br />
            in Seconds
          </h2>

          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-[#6B7280] sm:text-xl">
            Three simple steps to generate posts, ads, and campaigns without the stress of manual content creation.
          </p>
        </div>

        {/* Steps */}
        <div className="mb-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {steps.map((step) => (
            <div key={"step" + step.number} className="relative">
              <div className="h-full rounded-2xl border border-gray-100 bg-[#FFFFFF] p-8 shadow-sm transition-all duration-300 hover:shadow-lg">
                {/* Step Number */}
                <div className="absolute -top-4 left-8">
                  <div
                    style={{ backgroundColor: step.color }}
                    className="flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-white"
                  >
                    {step.number}
                  </div>
                </div>

                {/* Icon */}
                <div
                  className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl ${step.iconClass}`}
                >
                  {step.icon}
                </div>

                {/* Content */}
                <h3 className="mb-4 text-2xl font-bold text-[#111827]">{step.heading}</h3>
                <p className="mb-6 leading-relaxed text-[#6B7280]">{step.text}</p>

                {step.points?.length
                  ? step.points.map((point) => (
                      <div key={point} className="space-y-2">
                        <div className="flex items-center gap-2 text-sm text-[#6B7280]">
                          <div
                            className={`h-1.5 w-1.5 rounded-full`}
                            style={{ background: step.color }}
                          ></div>
                          {point}
                        </div>
                      </div>
                    ))
                  : null}
              </div>

              {/* Arrow for desktop */}
              {step.arrowColor ? (
                <div className="absolute top-1/2 -right-4 hidden -translate-y-1/2 transform lg:block">
                  <ArrowRight style={{ color: step.arrowColor }} className="h-8 w-8" />
                </div>
              ) : null}
            </div>
          ))}
        </div>

        {/* Results Banner */}
        <div className="mb-12 rounded-3xl border border-primary/10 bg-gradient-to-r from-primary/5 to-accent/5 p-6 lg:p-12">
          <div className="text-center">
            <h3 className="mb-4 text-2xl font-bold text-[#111827] lg:text-3xl">
              🚀 Ready to Scale Your Social Marketing?
            </h3>
            <p className="mx-auto mb-6 max-w-2xl text-lg text-[#6B7280]">
              Join thousands of Shopify & WooCommerce businesses already using PostWizard to grow faster.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 group inline-flex items-center gap-2">
                Start Free Trial
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>

              <a
                href="/features"
                className="inline-flex items-center gap-2 font-semibold text-primary transition-colors hover:text-primary/80"
              >
                See Full Features
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="text-center">
          <p className="mb-4 text-sm text-[#6B7280]">Trusted by 10,000+ businesses worldwide</p>
          <div className="flex items-center justify-center gap-8 opacity-60">
            <div className="text-2xl">🏪</div>
            <div className="text-2xl">🍕</div>
            <div className="text-2xl">💄</div>
            <div className="text-2xl">🏋️</div>
            <div className="text-2xl">📚</div>
          </div>
        </div>
      </div>
    </section>
  );
}
