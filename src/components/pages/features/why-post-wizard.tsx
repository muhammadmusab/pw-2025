import { Zap } from 'lucide-react'
import React from 'react'

const WhyPostWizard = () => {
    const reasons = [
        {
            icon:'🔮',
            text: 'Magic-level automation',
        },
        {
            icon:'📦',
            text: 'Ecom-ready product syncing',
        },
        {
            icon:'📊',
            text: 'Insights for teams & agencies',
        }
    ];
  return (
   <section className="mb-20 text-center">
          <div className="bg-success/10 text-success border-success/20 mb-8 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium">
            <Zap className="h-4 w-4" />
            Why Choose PostWizard
          </div>

          <h2 className="text-text mb-6 text-3xl font-bold sm:text-4xl lg:text-5xl">
            <span className="from-primary to-accent bg-gradient-to-r bg-clip-text text-transparent">
              Why PostWizard?
            </span>
          </h2>

          <p className="mx-auto mb-12 max-w-4xl text-lg leading-relaxed text-[#6B7280] sm:text-xl">
            Because you're busy growing a business — not writing captions and
            editing reels. PostWizard lets you automate the content grind, save
            time, and look professional doing it.
          </p>

          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-3">
            {reasons.map((reason, index) => (
                <div
                    key={index}
                    className="rounded-2xl border border-gray-100 bg-white px-6 py-4 shadow-sm transition-shadow duration-300 hover:shadow-md"
                >
                    <span className="mb-2 block text-2xl">{reason.icon}</span>
                    <span className="text-text font-semibold">{reason.text}</span>
                </div>
            ))}
          </div>
        </section>
  )
}

export default WhyPostWizard