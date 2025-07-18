import type React from "react";
import {
  CalendarCheck,
  Package,
  Share2,
  Wand2,
  CheckCircle,
} from "lucide-react";

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F9FAFB] via-[#FFFFFF] to-[#F3F4F6] p-6">
      <div className="mx-auto max-w-7xl space-y-8">
        {/* Welcome Section */}
        <section className="rounded-3xl border border-gray-100 bg-[#FFFFFF] p-8 shadow-sm">
          <div className="mb-4 flex items-center gap-3">
            <span className="text-3xl">🧙‍♂️</span>
            <h1 className="text-3xl font-bold text-[#111827]">
              Welcome to PostWizard
            </h1>
            <span className="text-2xl">👋</span>
          </div>
          <p className="text-lg text-[#6B7280]">
            Let's get your business posting like magic. Transform your products
            into engaging social content in minutes.
          </p>
        </section>

        {/* Getting Started Checklist */}
        <section className="rounded-3xl border border-gray-100 bg-[#FFFFFF] p-8 shadow-sm">
          <div className="mb-6 flex items-center gap-2">
            <span className="text-xl">🚀</span>
            <h2 className="text-2xl font-bold text-[#111827]">
              Getting Started
            </h2>
          </div>
          <div className="grid grid-cols-1  gap-4  ">
            <ChecklistItem
              completed={false}
              icon="📦"
              title="Add your first product"
              description="Upload product details to start creating content"
            />
            <ChecklistItem
              completed={false}
              icon="🔗"
              title="Connect social accounts"
              description="Link Facebook, Instagram, or TikTok"
            />
            <ChecklistItem
              completed={false}
              icon="✨"
              title="Generate your first AI post"
              description="Let our AI create magical content for you"
            />
            <ChecklistItem
              completed={false}
              icon="📅"
              title="Schedule your first post"
              description="Set it and forget it with auto-scheduling"
            />
          </div>
        </section>

        {/* Stats Summary Cards */}
        <section>
          <div className="mb-6 flex items-center gap-2">
            <span className="text-xl">📊</span>
            <h2 className="text-2xl font-bold text-[#111827]">Your Summary</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <StatCard
              icon={<Wand2 className="h-6 w-6" />}
              label="Posts Created"
              value="12"
              color="purple"
            />
            <StatCard
              icon={<Package className="h-6 w-6" />}
              label="Products Added"
              value="5"
              color="amber"
            />
            <StatCard
              icon={<Share2 className="h-6 w-6" />}
              label="Socials Connected"
              value="2"
              color="green"
            />
            <StatCard
              icon={<CalendarCheck className="h-6 w-6" />}
              label="Scheduled Posts"
              value="3"
              color="blue"
            />
          </div>
        </section>

        {/* Recent Activity */}
        <section className="rounded-3xl border border-gray-100 bg-[#FFFFFF] p-8 shadow-sm">
          <div className="mb-6 flex items-center gap-2">
            <span className="text-xl">⚡</span>
            <h2 className="text-2xl font-bold text-[#111827]">
              Recent Activity
            </h2>
          </div>
          <div className="space-y-4">
            <ActivityItem
              icon="✅"
              text="AI post generated for"
              highlight="Wireless Earbuds"
              time="2 hours ago"
            />
            <ActivityItem
              icon="📆"
              text="Post scheduled to Instagram for"
              highlight="tomorrow"
              time="4 hours ago"
            />
            <ActivityItem
              icon="🔗"
              text="Facebook page"
              highlight="connected"
              time="1 day ago"
            />
            <ActivityItem
              icon="➕"
              text="Product"
              highlight="Mini Blender"
              text2="added"
              time="2 days ago"
            />
          </div>
        </section>

        {/* Quick Actions */}
        <section className="rounded-3xl border border-[#7C3AED]/10 bg-gradient-to-r from-[#7C3AED]/5 to-[#FBBF24]/5 p-8">
          <div className="text-center">
            <h3 className="mb-4 text-2xl font-bold text-[#111827]">
              Ready to Create Magic?
            </h3>
            <p className="mx-auto mb-6 max-w-2xl text-[#6B7280]">
              Start by adding your first product or connecting your social media
              accounts to begin your PostWizard journey.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button className="rounded-xl bg-[#7C3AED] px-6 py-3 font-semibold text-white transition-colors duration-200 hover:bg-[#7C3AED]/90">
                Add Product
              </button>
              <button className="rounded-xl border border-[#7C3AED]/20 bg-[#FFFFFF] px-6 py-3 font-semibold text-[#7C3AED] transition-colors duration-200 hover:bg-[#F9FAFB]">
                Connect Socials
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

function ChecklistItem({
  completed,
  icon,
  title,
  description,
}: {
  completed: boolean;
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-start gap-4 rounded-2xl border border-gray-100 p-4 transition-colors duration-200 hover:border-[#7C3AED]/30">
      <div className="flex-shrink-0">
        {completed ? (
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#10B981]">
            <CheckCircle className="h-4 w-4 text-white" />
          </div>
        ) : (
          <div className="h-6 w-6 rounded-full border-2 border-[#6B7280]"></div>
        )}
      </div>
      <div className="flex-1">
        <div className="mb-1 flex items-center gap-2">
          <span className="text-lg">{icon}</span>
          <h3 className="font-semibold text-[#111827]">{title}</h3>
        </div>
        <p className="text-sm text-[#6B7280]">{description}</p>
      </div>
    </div>
  );
}

function StatCard({
  icon,
  label,
  value,
  color,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  color: "purple" | "amber" | "green" | "blue";
}) {
  const colorClasses = {
    purple: {
      bg: "bg-[#7C3AED]/10",
      text: "text-[#7C3AED]",
      border: "border-[#7C3AED]/20",
    },
    amber: {
      bg: "bg-[#FBBF24]/10",
      text: "text-[#FBBF24]",
      border: "border-[#FBBF24]/20",
    },
    green: {
      bg: "bg-[#10B981]/10",
      text: "text-[#10B981]",
      border: "border-[#10B981]/20",
    },
    blue: {
      bg: "bg-[#3B82F6]/10",
      text: "text-[#3B82F6]",
      border: "border-[#3B82F6]/20",
    },
  };

  const colors = colorClasses[color];

  return (
    <div
      className={`rounded-2xl border bg-[#FFFFFF] ${colors.border} p-6 text-center shadow-sm transition-shadow duration-200 hover:shadow-md`}
    >
      <div
        className={`${colors.bg} ${colors.text} mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl`}
      >
        {icon}
      </div>
      <div className="mb-2 text-3xl font-bold text-[#111827]">{value}</div>
      <div className="text-sm font-medium text-[#6B7280]">{label}</div>
    </div>
  );
}

function ActivityItem({
  icon,
  text,
  highlight,
  text2,
  time,
}: {
  icon: string;
  text: string;
  highlight: string;
  text2?: string;
  time: string;
}) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-gray-100 p-4 transition-colors duration-200 hover:bg-[#F9FAFB]">
      <div className="flex items-center gap-3">
        <span className="text-lg">{icon}</span>
        <span className="text-[#6B7280]">
          {text}{" "}
          <span className="font-semibold text-[#111827]">{highlight}</span>{" "}
          {text2}
        </span>
      </div>
      <span className="text-sm text-[#6B7280]">{time}</span>
    </div>
  );
}
