import { Check, X, Star } from "lucide-react";

export default function PricingComparisonTable() {
  const features = [
    {
      name: "AI Posts per Month",
      starter: "10",
      pro: "150",
      agency: "Unlimited",
      type: "text",
    },
    {
      name: "Connected Social Accounts",
      starter: "1",
      pro: "5",
      agency: "25+",
      type: "text",
    },
    {
      name: "WhatsApp Post Reminders",
      starter: true,
      pro: true,
      agency: true,
      type: "boolean",
    },
    {
      name: "AI Image + Captions",
      starter: true,
      pro: true,
      agency: true,
      type: "boolean",
    },
    {
      name: "Video Post Generation",
      starter: false,
      pro: true,
      agency: true,
      type: "boolean",
    },
    {
      name: "Auto-Scheduling (with reminders)",
      starter: true,
      pro: true,
      agency: true,
      type: "boolean",
    },
    {
      name: "Shopify / Ecom Product Sync",
      starter: false,
      pro: true,
      agency: true,
      type: "boolean",
    },
    {
      name: "Team Collaboration",
      starter: false,
      pro: false,
      agency: true,
      type: "boolean",
    },
    {
      name: "White Label Branding",
      starter: false,
      pro: false,
      agency: true,
      type: "boolean",
    },
    {
      name: "Priority Support",
      starter: false,
      pro: true,
      agency: true,
      type: "boolean",
    },
  ];

  const renderFeatureValue = (value: any, type: string, planName: string) => {
    if (type === "boolean") {
      return value ? (
        <div className="flex justify-center">
          <div className="bg-success flex h-6 w-6 transform items-center justify-center rounded-full transition-transform duration-200 hover:scale-110">
            <Check className="h-4 w-4 text-white" />
          </div>
        </div>
      ) : (
        <div className="flex justify-center">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#6B7280] opacity-60">
            <X className="h-4 w-4 text-white" />
          </div>
        </div>
      );
    }

    return (
      <span
        className={`font-semibold ${
          planName === "agency" && value === "Unlimited"
            ? "text-accent"
            : planName === "pro"
              ? "text-primary"
              : "text-[#6B7280]"
        }`}
      >
        {value}
      </span>
    );
  };

  return (
    <section className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-16">
      <div className="mb-12 text-center">
        <div className="bg-primary/10 text-primary border-primary/20 mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium">
          <Star className="h-4 w-4" />
          Detailed Feature Comparison
        </div>

        <h3 className="text-text mb-4 text-3xl font-bold lg:text-4xl">
          <span className="from-primary to-accent bg-gradient-to-r bg-clip-text text-transparent">
            Compare All Features
          </span>
        </h3>

        <p className="mx-auto max-w-2xl text-lg text-[#6B7280]">
          See exactly what's included in each plan to make the best choice for
          your business
        </p>
      </div>

      <div className="overflow-hidden rounded-3xl border border-gray-100 bg-[#FFFFFF] shadow-xl transition-shadow duration-500 hover:shadow-2xl">
        {/* Desktop Table */}
        <div className="hidden overflow-x-auto lg:block">
          <table className="w-full">
            <thead>
              <tr className="bg-gradient-to-r from-[#F9FAFB] to-[#F3F4F6]">
                <th className="text-text px-8 py-8 text-left text-lg font-bold">
                  Feature
                </th>

                {/* Starter Plan */}
                <th className="px-8 py-8 text-center text-lg font-bold text-[#6B7280]">
                  <div className="space-y-2">
                    <div>Starter</div>
                    <div className="text-2xl font-bold">Free</div>
                    <div className="text-sm font-normal text-[#6B7280]">
                      Perfect for trying PostWizard
                    </div>
                  </div>
                </th>

                {/* Pro Plan */}
                <th className="text-primary bg-primary/5 relative px-8 py-8 text-center text-lg font-bold">
                  <div className="absolute top-[8px] left-1/2 -translate-x-1/2 transform">
                    <div className="bg-primary flex items-center gap-1 rounded-full px-4 py-2 text-sm font-semibold text-white shadow-lg">
                      <Star className="h-3 w-3 fill-current" />
                      Most Popular
                    </div>
                  </div>
                  <div className="mt-4 space-y-2">
                    <div>Pro</div>
                    <div className="text-2xl font-bold">
                      $9<span className="text-sm font-normal">/month</span>
                    </div>
                    <div className="text-primary text-sm font-normal">
                      Ideal for small businesses
                    </div>
                  </div>
                </th>

                {/* Agency Plan */}
                <th className="text-accent px-8 py-8 text-center text-lg font-bold">
                  <div className="space-y-2">
                    <div>Agency</div>
                    <div className="text-2xl font-bold">
                      $29<span className="text-sm font-normal">/month</span>
                    </div>
                    <div className="text-accent text-sm font-normal">
                      For agencies & teams
                    </div>
                  </div>
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100">
              {features.map((feature, index) => (
                <tr
                  key={feature.name}
                  className="group transition-all duration-300 hover:bg-[#F9FAFB]"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <td className="text-text group-hover:text-primary px-8 py-6 font-semibold transition-colors duration-300">
                    {feature.name}
                  </td>
                  <td className="px-8 py-6 text-center">
                    {renderFeatureValue(
                      feature.starter,
                      feature.type,
                      "starter",
                    )}
                  </td>
                  <td className="bg-primary/5 px-8 py-6 text-center">
                    {renderFeatureValue(feature.pro, feature.type, "pro")}
                  </td>
                  <td className="px-8 py-6 text-center">
                    {renderFeatureValue(feature.agency, feature.type, "agency")}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="space-y-6 p-6 lg:hidden">
          {[
            {
              key: "starter",
              name: "Starter",
              price: "Free",
              description: "Perfect for trying PostWizard",
            },
            {
              key: "pro",
              name: "Pro",
              price: "$29/month",
              description: "Ideal for small businesses",
              popular: true,
            },
            {
              key: "agency",
              name: "Agency",
              price: "$79/month",
              description: "For agencies & teams",
            },
          ].map((plan, planIndex) => (
            <div
              key={plan.key}
              className={`rounded-2xl border-2 p-6 transition-all duration-500 hover:shadow-lg ${
                plan.popular
                  ? "border-primary bg-primary/5 scale-105 shadow-lg"
                  : "hover:border-primary/30 border-gray-100"
              }`}
              style={{ animationDelay: `${planIndex * 100}ms` }}
            >
              <div className="relative mt-[20px] mb-6 text-center lg:mt-0">
                {plan.popular && (
                  <div className="absolute top-[-30px] left-1/2 -translate-x-1/2 transform lg:-top-3">
                    <div className="bg-primary flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold text-white">
                      <Star className="h-3 w-3 fill-current" />
                      Most Popular
                    </div>
                  </div>
                )}
                <h4
                  className={`text-2xl font-bold ${
                    plan.key === "pro"
                      ? "text-primary"
                      : plan.key === "agency"
                        ? "text-accent"
                        : "text-[#6B7280]"
                  } mb-2`}
                >
                  {plan.name}
                </h4>
                <div className="text-text mb-1 text-xl font-bold">
                  {plan.price}
                </div>
                <div className="text-sm text-[#6B7280]">{plan.description}</div>
              </div>

              <div className="space-y-4">
                {features.map((feature, featureIndex) => (
                  <div
                    key={feature.name}
                    className="flex items-center justify-between border-b border-gray-100 py-2 last:border-b-0"
                    style={{
                      animationDelay: `${planIndex * 100 + featureIndex * 20}ms`,
                    }}
                  >
                    <span className="text-text text-sm font-medium">
                      {feature.name}
                    </span>
                    <div className="ml-4">
                      {renderFeatureValue(
                        feature[plan.key as keyof typeof feature],
                        feature.type,
                        plan.key,
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Benefits */}
      <div className="mt-12 text-center">
        <div className="from-primary/5 to-accent/5 border-primary/10 rounded-2xl border bg-gradient-to-r p-8">
          <h4 className="text-text mb-4 text-xl font-bold">
            All Plans Include
          </h4>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="flex items-center justify-center gap-3">
              <div className="bg-success flex h-8 w-8 items-center justify-center rounded-full">
                <Check className="h-5 w-5 text-white" />
              </div>
              <span className="font-medium text-[#6B7280]">
                7-day free trial
              </span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <div className="bg-success flex h-8 w-8 items-center justify-center rounded-full">
                <Check className="h-5 w-5 text-white" />
              </div>
              <span className="font-medium text-[#6B7280]">No setup fees</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <div className="bg-success flex h-8 w-8 items-center justify-center rounded-full">
                <Check className="h-5 w-5 text-white" />
              </div>
              <span className="font-medium text-[#6B7280]">Cancel anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
