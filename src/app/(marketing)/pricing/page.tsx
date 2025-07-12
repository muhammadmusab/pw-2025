import PricingPreviewSection from "@/components/pages/home/pricing-preview-section";
import PricingComparisonTable from "@/components/pages/pricing/pricing-comparison-table-v2";
import Link from "next/link";
import { Fragment } from "react";

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#F9FAFB] via-[#FFFFFF] to-[#F3F4F6]">
      {/* Plans */}
      <PricingPreviewSection showCta={false} />
      <PricingComparisonTable />

      {/* Final CTA */}
      <section className="text-center pb-20 lg:pb-32">
        <h3 className="mb-4 text-2xl font-bold">Try PostWizard Free</h3>
        <p className="text-muted mb-6">No credit card required</p>
        <Link
          href="/signup"
          className="bg-primary hover:bg-primary/90 rounded-md px-6 py-3 text-lg font-semibold text-white"
        >
          Get Started Now
        </Link>
      </section>
    </main>
  );
}
