import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Calendar, Zap, TrendingUp } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#F9FAFB] via-[#FFFFFF] to-[#F3F4F6] py-20 lg:py-32">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
        {/* <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-1000"></div> */}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-8 border border-primary/20">
            <Sparkles className="w-4 h-4" />
            AI-Powered Social Media Magic
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#111827] mb-6 leading-tight">
            <span className="inline-flex items-center gap-2">
              <span className="text-2xl sm:text-3xl lg:text-4xl">✨</span>
              Let AI Handle Your
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Social Media Like Magic
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl lg:text-2xl text-[#6B7280] mb-10 max-w-4xl mx-auto leading-relaxed">
            PostWizard helps you create scroll-stopping posts, reels, captions, and more using AI — directly from your
            product info. <span className="text-[#111827] font-semibold">Schedule. Automate. Grow.</span>
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              asChild
            >
              <a href="/signup" className="inline-flex items-center gap-2">
                Try PostWizard Free
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <p className="text-sm text-[#6B7280]">No credit card required • 7-day free trial</p>
          </div>

          {/* Feature highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 bg-[#FFFFFF] p-4 rounded-xl shadow-sm border border-gray-100">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-primary" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-[#111827]">AI Content</p>
                <p className="text-sm text-[#6B7280]">Generated instantly</p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3 bg-[#FFFFFF] p-4 rounded-xl shadow-sm border border-gray-100">
              <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                <Calendar className="w-5 h-5 text-accent" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-[#111827]">Auto Schedule</p>
                <p className="text-sm text-[#6B7280]">Set & forget</p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3 bg-[#FFFFFF] p-4 rounded-xl shadow-sm border border-gray-100">
              <div className="w-10 h-10 bg-[#10B981]/10 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-[#10B981]" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-[#111827]">Grow Faster</p>
                <p className="text-sm text-[#6B7280]">Proven results</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
