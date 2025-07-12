import Link from "next/link"

export default function Footer() {
  const companyLinks = [
    { name: "About", href: "/about" },
    { name: "Features", href: "/features" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact", href: "/contact" },
  ]

  const legalLinks = [
    { name: "Terms", href: "/terms" },
    { name: "Privacy", href: "/privacy" },
  ]

  return (
    <footer className="bg-[#111827] text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <Link
                href="/"
                className="flex items-center gap-2 text-3xl font-bold tracking-tight hover:scale-105 transition-transform duration-200 mb-6"
              >
                <span className="text-4xl">🧙‍♂️</span>
                <span className="text-white">
                  Post
                  <span className="text-primary">Wizard</span>
                </span>
              </Link>
              <p className="text-gray-300 text-lg leading-relaxed mb-6 max-w-md">
                Transform your social media with AI-powered content creation. From product to post in seconds.
              </p>

              {/* Social Links */}
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-primary/10 hover:bg-primary/20 rounded-lg flex items-center justify-center transition-colors group"
                >
                  <span className="text-primary group-hover:scale-110 transition-transform">📘</span>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-primary/10 hover:bg-primary/20 rounded-lg flex items-center justify-center transition-colors group"
                >
                  <span className="text-primary group-hover:scale-110 transition-transform">📷</span>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-primary/10 hover:bg-primary/20 rounded-lg flex items-center justify-center transition-colors group"
                >
                  <span className="text-primary group-hover:scale-110 transition-transform">🐦</span>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-primary/10 hover:bg-primary/20 rounded-lg flex items-center justify-center transition-colors group"
                >
                  <span className="text-primary group-hover:scale-110 transition-transform">💼</span>
                </a>
              </div>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-6">Company</h3>
              <ul className="space-y-4">
                {companyLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-primary transition-colors duration-200 relative group"
                    >
                      {link.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-200"></span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal & CTA */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-6">Legal</h3>
              <ul className="space-y-4 mb-8">
                {legalLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-primary transition-colors duration-200 relative group"
                    >
                      {link.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-200"></span>
                    </Link>
                  </li>
                ))}
              </ul>

              {/* CTA Buttons */}
              <div className="space-y-3">
                <Link
                  href="/login"
                  className="block w-full text-center py-2 px-4 border border-primary text-primary hover:bg-primary hover:text-white rounded-lg font-medium transition-all duration-200"
                >
                  Login
                </Link>
                <Link
                  href="/signup"
                  className="block w-full text-center py-2 px-4 bg-primary hover:bg-primary/90 text-white rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-gray-400 text-sm">
              © 2024 PostWizard. All rights reserved. Made with ✨ for small businesses.
            </div>

            <div className="flex items-center gap-6 text-sm text-gray-400">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#10B981] rounded-full animate-pulse"></span>
                All systems operational
              </span>
              <span>🌍 Global CDN</span>
              <span>🔒 SOC 2 Compliant</span>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="border-t border-gray-700 py-6">
          <div className="text-center">
            <p className="text-gray-400 text-sm mb-4">Trusted by businesses worldwide</p>
            <div className="flex items-center justify-center gap-8 opacity-60">
              <div className="flex items-center gap-2 text-gray-400">
                <span className="text-accent">⭐</span>
                <span className="text-sm">4.9/5 Rating</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <span className="text-[#10B981]">✅</span>
                <span className="text-sm">10,000+ Users</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <span className="text-primary">🚀</span>
                <span className="text-sm">99.9% Uptime</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
