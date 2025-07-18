import Link from 'next/link'
import { LayoutDashboard, Package, Wand2, Share2, CalendarCheck, Users, Settings } from 'lucide-react'
import { ReactNode } from 'react'

const navItems = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Products', href: '/dashboard/products', icon: Package },
  { name: 'Post Generator', href: '/dashboard/generator', icon: Wand2 },
  { name: 'Social Connections', href: '/dashboard/socials', icon: Share2 },
  { name: 'Scheduled Posts', href: '/dashboard/schedule', icon: CalendarCheck },
  { name: 'Team', href: '/dashboard/team', icon: Users },
  { name: 'Settings', href: '/dashboard/settings', icon: Settings },
]

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen bg-background text-text">
      <aside className="w-64 bg-surface p-4 border-r hidden md:block">
        <h2 className="text-xl font-bold mb-6">PostWizard</h2>
        <nav className="space-y-2">
          {navItems.map(({ name, href, icon: Icon }) => (
            <Link key={href} href={href} className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-muted/10">
              <Icon size={18} /> <span>{name}</span>
            </Link>
          ))}
        </nav>
      </aside>
      <main className="flex-1 p-6">
        {/* TODO: Add top header bar here if needed */}
        {children}
      </main>
    </div>
  )
}