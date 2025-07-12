import Link from "next/link"
import MobileMenu from "./mobile-menu"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Features", href: "/features" },
  { name: "Pricing", href: "/pricing" },
  { name: "Login", href: "/login" },
]

export default function Header() {
  return (
    <header className="bg-[#FFFFFF]/95 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-1 text-2xl font-bold tracking-tight hover:scale-105 transition-transform duration-200"
        >
          <span className="text-3xl">🧙‍♂️</span>
          <span className="from-primary to-accent bg-gradient-to-r bg-clip-text text-transparent">
            PostWizard
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.slice(0, -1).map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[#6B7280] hover:text-primary font-medium transition-colors duration-200 relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-200"></span>
            </Link>
          ))}

          <div className="flex items-center gap-4">
            <Link
              href="/login"
              className="text-[#6B7280] hover:text-primary font-medium transition-colors duration-200"
            >
              Login
            </Link>

            <Link
              href="/signup"
              className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Sign Up Free
            </Link>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center">
          <MobileMenu navLinks={navLinks} />
        </div>
      </div>
    </header>
  )
}
