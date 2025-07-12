import React from 'react'
const  Feature=({
  icon,
  title,
  desc,
  color,
}: {
  icon: React.ReactNode
  title: string
  desc: string
  color: "purple" | "amber" | "green"
}) =>{
  const colorClasses = {
    purple: {
      iconBg: "bg-primary/10",
      iconColor: "text-primary",
      border: "hover:border-primary/30",
    },
    amber: {
      iconBg: "bg-accent/10",
      iconColor: "text-accent",
      border: "hover:border-accent/30",
    },
    green: {
      iconBg: "bg-success/10",
      iconColor: "text-success",
      border: "hover:border-success/30",
    },
  }

  const colors = colorClasses[color]

  return (
    <div
      className={`bg-[#FFFFFF] p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 group ${colors.border}`}
    >
      <div
        className={`w-16 h-16 ${colors.iconBg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
      >
        <div className={colors.iconColor}>{icon}</div>
      </div>
      <h3 className="text-xl font-bold text-text mb-4 group-hover:text-primary transition-colors duration-300">
        {title}
      </h3>
      <p className="text-[#6B7280] leading-relaxed">{desc}</p>
    </div>
  )
}

export default Feature