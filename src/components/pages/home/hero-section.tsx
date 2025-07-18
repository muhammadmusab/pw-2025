import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, ShoppingBag, Zap, TrendingUp, Megaphone } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#F9FAFB] via-[#FFFFFF] to-[#F3F4F6] py-20 lg:py-32">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-8 border border-primary/20">
            <Sparkles className="w-4 h-4" />
            AI-Powered Marketing for E-commerce
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-bold text-text mb-6 leading-tight">
            <div className="flex flex-col md:flex-row justify-center items-center gap-2">
              <span className="text-2xl sm:text-3xl lg:text-4xl hidden md:block">✨</span>
              <span>Smarter Marketing Starts Here</span>
            </div>
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
             <span className="inline-block md:hidden">✨</span> AI for Social, Ads & Products
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl lg:text-2xl text-[#6B7280] mb-10 max-w-4xl mx-auto leading-relaxed">
            PostWizard helps businesses and store owners create <span className="font-semibold text-text">scroll-stopping posts, high-converting ads, and product campaigns</span> in minutes using AI. Connect your store. Create. Grow.
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              asChild
            >
              <a href="/signup" className="inline-flex items-center gap-2">
                Start Free Trial
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
                <p className="font-semibold text-text">AI Content</p>
                <p className="text-sm text-[#6B7280]">Posts & Ads in seconds</p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3 bg-[#FFFFFF] p-4 rounded-xl shadow-sm border border-gray-100">
              <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                <Megaphone className="w-5 h-5 text-accent" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-text">Ad Generator</p>
                <p className="text-sm text-[#6B7280]">Facebook, IG & TikTok</p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3 bg-[#FFFFFF] p-4 rounded-xl shadow-sm border border-gray-100">
              <div className="w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center">
                <ShoppingBag className="w-5 h-5 text-success" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-text">E-commerce Ready</p>
                <p className="text-sm text-[#6B7280]">Shopify & WooCommerce</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
