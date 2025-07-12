import { Check, X } from "lucide-react";

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
  ];

  const renderFeatureValue = (value: any, type: string, planName: string) => {
    if (type === "boolean") {
      return value ? (
        <div className="flex justify-center">
          <div className="bg-success flex h-6 w-6 items-center justify-center rounded-full">
            <Check className="h-4 w-4 text-white" />
          </div>
        </div>
      ) : (
        <div className="flex justify-center">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#6B7280]">
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
    <section className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Background decorative elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="bg-primary absolute -top-20 -right-20 h-40 w-40 animate-pulse rounded-full opacity-5 mix-blend-multiply blur-xl filter"></div>
        <div className="bg-accent absolute -bottom-20 -left-20 h-40 w-40 animate-pulse rounded-full opacity-5 mix-blend-multiply blur-xl filter delay-1000"></div>
      </div>

      <div className="relative">
        <h3 className="mb-8 text-center text-3xl font-bold text-[#111827] lg:text-4xl">
          <span className="from-primary to-accent bg-gradient-to-r bg-clip-text text-transparent">
            Compare Plans
          </span>
        </h3>

        <div className="overflow-hidden rounded-3xl border border-gray-100 bg-[#FFFFFF] shadow-lg">
          {/* Desktop Table */}
          <div className="hidden overflow-x-auto lg:block">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-[#F9FAFB] to-[#F3F4F6]">
                  <th className="px-6 py-6 text-left text-lg font-bold text-[#111827]">
                    Feature
                  </th>
                  <th className="px-6 py-6 text-center text-lg font-bold text-[#6B7280]">
                    Starter
                    <div className="mt-1 text-sm font-normal text-[#6B7280]">
                      Free
                    </div>
                  </th>
                  <th className="text-primary relative px-6 py-6 text-center text-lg font-bold">
                    Pro
                    <div className="text-primary mt-1 text-sm font-normal">
                      $19/month
                    </div>
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 transform">
                      <div className="bg-primary rounded-full px-3 py-1 text-xs font-semibold text-white">
                        Most Popular
                      </div>
                    </div>
                  </th>
                  <th className="text-accent px-6 py-6 text-center text-lg font-bold">
                    Agency
                    <div className="text-accent mt-1 text-sm font-normal">
                      $49/month
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {features.map((feature, index) => (
                  <tr
                    key={feature.name}
                    className="transition-colors hover:bg-[#F9FAFB]"
                  >
                    <td className="px-6 py-4 font-semibold text-[#111827]">
                      {feature.name}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {renderFeatureValue(
                        feature.starter,
                        feature.type,
                        "starter",
                      )}
                    </td>
                    <td className="bg-primary/5 px-6 py-4 text-center">
                      {renderFeatureValue(feature.pro, feature.type, "pro")}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {renderFeatureValue(
                        feature.agency,
                        feature.type,
                        "agency",
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="space-y-6 p-6 lg:hidden">
            {["starter", "pro", "agency"].map((plan) => (
              <div
                key={plan}
                className={`rounded-2xl border-2 p-6 ${
                  plan === "pro"
                    ? "border-primary bg-primary/5"
                    : "border-gray-100"
                }`}
              >
                <div className="mb-6 text-center">
                  <h4
                    className={`text-xl font-bold capitalize ${
                      plan === "pro"
                        ? "text-primary"
                        : plan === "agency"
                          ? "text-accent"
                          : "text-[#6B7280]"
                    }`}
                  >
                    {plan}
                    {plan === "pro" && (
                      <span className="bg-primary ml-2 rounded-full px-2 py-1 text-xs text-white">
                        Most Popular
                      </span>
                    )}
                  </h4>
                  <div className="mt-1 text-sm text-[#6B7280]">
                    {plan === "starter"
                      ? "Free"
                      : plan === "pro"
                        ? "$19/month"
                        : "$49/month"}
                  </div>
                </div>

                <div className="space-y-3">
                  {features.map((feature) => (
                    <div
                      key={feature.name}
                      className="flex items-center justify-between"
                    >
                      <span className="font-medium text-[#111827]">
                        {feature.name}
                      </span>
                      {renderFeatureValue(
                        feature[plan as keyof typeof feature],
                        feature.type,
                        plan,
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
