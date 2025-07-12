import { Check, X, Star } from "lucide-react"

export default function PricingComparisonTable() {
  const features = [
    {
      name: "AI Posts per month",
      starter: "10",
      pro: "100",
      agency: "Unlimited",
      type: "text",
    },
    {
      name: "Social Accounts",
      starter: "1",
      pro: "3",
      agency: "10+",
      type: "text",
    },
    {
      name: "Video Generation",
      starter: false,
      pro: true,
      agency: true,
      type: "boolean",
    },
    {
      name: "Image + Caption",
      starter: true,
      pro: true,
      agency: true,
      type: "boolean",
    },
    {
      name: "Auto-Scheduling",
      starter: true,
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
      name: "Advanced Analytics",
      starter: false,
      pro: false,
      agency: true,
      type: "boolean",
    },
    {
      name: "White Label",
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
    {
      name: "Custom Branding",
      starter: false,
      pro: false,
      agency: true,
      type: "boolean",
    },
  ]

  const renderFeatureValue = (value: any, type: string, planName: string) => {
    if (type === "boolean") {
      return value ? (
        <div className="flex justify-center">
          <div className="w-6 h-6 bg-success rounded-full flex items-center justify-center transform hover:scale-110 transition-transform duration-200">
            <Check className="w-4 h-4 text-white" />
          </div>
        </div>
      ) : (
        <div className="flex justify-center">
          <div className="w-6 h-6 bg-[#6B7280] rounded-full flex items-center justify-center opacity-60">
            <X className="w-4 h-4 text-white" />
          </div>
        </div>
      )
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
    )
  }

  return (
    <section className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-16">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 border border-primary/20">
          <Star className="w-4 h-4" />
          Detailed Feature Comparison
        </div>

        <h3 className="text-3xl lg:text-4xl font-bold text-text mb-4">
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Compare All Features
          </span>
        </h3>

        <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
          See exactly what's included in each plan to make the best choice for your business
        </p>
      </div>

      <div className="bg-[#FFFFFF] rounded-3xl border border-gray-100 shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-500">
        {/* Desktop Table */}
        <div className="hidden lg:block overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gradient-to-r from-[#F9FAFB] to-[#F3F4F6]">
                <th className="px-8 py-8 text-left font-bold text-text text-lg">Feature</th>
                <th className="px-8 py-8 text-center font-bold text-[#6B7280] text-lg">
                  <div className="space-y-2">
                    <div>Starter</div>
                    <div className="text-2xl font-bold">Free</div>
                    <div className="text-sm font-normal text-[#6B7280]">Perfect for testing</div>
                  </div>
                </th>
                <th className="px-8 py-8 text-center font-bold text-primary text-lg relative bg-primary/5">
                  <div className="absolute top-[8px] left-1/2 transform -translate-x-1/2">
                    <div className="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-1 shadow-lg">
                      <Star className="w-3 h-3 fill-current" />
                      Most Popular
                    </div>
                  </div>
                  <div className="space-y-2 mt-4">
                    <div>Pro</div>
                    <div className="text-2xl font-bold">
                      $19<span className="text-sm font-normal">/month</span>
                    </div>
                    <div className="text-sm font-normal text-primary">Best for growing businesses</div>
                  </div>
                </th>
                <th className="px-8 py-8 text-center font-bold text-accent text-lg">
                  <div className="space-y-2">
                    <div>Agency</div>
                    <div className="text-2xl font-bold">
                      $49<span className="text-sm font-normal">/month</span>
                    </div>
                    <div className="text-sm font-normal text-accent">For teams & agencies</div>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {features.map((feature, index) => (
                <tr
                  key={feature.name}
                  className="hover:bg-[#F9FAFB] transition-all duration-300 group"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <td className="px-8 py-6 font-semibold text-text group-hover:text-primary transition-colors duration-300">
                    {feature.name}
                  </td>
                  <td className="px-8 py-6 text-center">
                    {renderFeatureValue(feature.starter, feature.type, "starter")}
                  </td>
                  <td className="px-8 py-6 text-center bg-primary/5">
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
        <div className="lg:hidden space-y-6 p-6">
          {[
            { key: "starter", name: "Starter", price: "Free", description: "Perfect for testing" },
            { key: "pro", name: "Pro", price: "$19/month", description: "Best for growing businesses", popular: true },
            { key: "agency", name: "Agency", price: "$49/month", description: "For teams & agencies" },
          ].map((plan, planIndex) => (
            <div
              key={plan.key}
              className={`rounded-2xl border-2 p-6 transition-all duration-500 hover:shadow-lg ${
                plan.popular
                  ? "border-primary bg-primary/5 shadow-lg scale-105"
                  : "border-gray-100 hover:border-primary/30"
              }`}
              style={{ animationDelay: `${planIndex * 100}ms` }}
            >
              <div className="text-center mb-6 relative lg:mt-0 mt-[20px]">
                {plan.popular && (
                  <div className="absolute lg:-top-3 top-[-30px] left-1/2 transform -translate-x-1/2">
                    <div className="bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                      <Star className="w-3 h-3 fill-current" />
                      Most Popular
                    </div>
                  </div>
                )}
                <h4
                  className={`text-2xl font-bold ${
                    plan.key === "pro" ? "text-primary" : plan.key === "agency" ? "text-accent" : "text-[#6B7280]"
                  } mb-2`}
                >
                  {plan.name}
                </h4>
                <div className="text-xl font-bold text-text mb-1">{plan.price}</div>
                <div className="text-sm text-[#6B7280]">{plan.description}</div>
              </div>

              <div className="space-y-4">
                {features.map((feature, featureIndex) => (
                  <div
                    key={feature.name}
                    className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0"
                    style={{ animationDelay: `${planIndex * 100 + featureIndex * 20}ms` }}
                  >
                    <span className="text-text font-medium text-sm">{feature.name}</span>
                    <div className="ml-4">
                      {renderFeatureValue(feature[plan.key as keyof typeof feature], feature.type, plan.key)}
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
        <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 border border-primary/10">
          <h4 className="text-xl font-bold text-text mb-4">All Plans Include</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center justify-center gap-3">
              <div className="w-8 h-8 bg-success rounded-full flex items-center justify-center">
                <Check className="w-5 h-5 text-white" />
              </div>
              <span className="text-[#6B7280] font-medium">7-day free trial</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <div className="w-8 h-8 bg-success rounded-full flex items-center justify-center">
                <Check className="w-5 h-5 text-white" />
              </div>
              <span className="text-[#6B7280] font-medium">No setup fees</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <div className="w-8 h-8 bg-success rounded-full flex items-center justify-center">
                <Check className="w-5 h-5 text-white" />
              </div>
              <span className="text-[#6B7280] font-medium">Cancel anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
