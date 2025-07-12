"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Eye, EyeOff, User, Mail, Building, Lock, ArrowRight, Sparkles } from "lucide-react"

export default function SignupPage() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    businessName: "",
  })

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", form)
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#F9FAFB] via-[#FFFFFF] to-[#F3F4F6] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-1000"></div>
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 text-2xl animate-bounce delay-1000">✨</div>
        {/* <div className="absolute top-40 right-32 text-xl animate-bounce delay-2000">🧙‍♂️</div> */}
        {/* <div className="absolute bottom-32 left-32 text-xl animate-bounce delay-3000">🚀</div> */}
        <div className="absolute bottom-20 right-20 text-2xl animate-bounce">⭐</div>
      </div>

      <div className="relative flex items-center justify-center min-h-screen px-4 py-12">
        <div className="w-full max-w-md">
          {/* Header */}
          <div className="text-center mb-8">
        
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 border border-primary/20">
              <Sparkles className="w-4 h-4" />
              Get your businesses automated
            </div>

            <h1 className="text-3xl font-bold text-[#111827] mb-2">Create Your Account</h1>
            <p className="text-[#6B7280]">Start your free trial and transform your social media today</p>
          </div>

          {/* Form Card */}
          <div className="bg-[#FFFFFF] rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-500">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-[#6B7280]" />
                </div>
                <input
                  name="fullName"
                  type="text"
                  placeholder="Full Name"
                  value={form.fullName}
                  onChange={handleInputChange}
                  className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all duration-200 text-[#111827] placeholder-[#6B7280]"
                  required
                />
              </div>

              {/* Email */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-[#6B7280]" />
                </div>
                <input
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  value={form.email}
                  onChange={handleInputChange}
                  className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all duration-200 text-[#111827] placeholder-[#6B7280]"
                  required
                />
              </div>

              {/* Business Name */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Building className="h-5 w-5 text-[#6B7280]" />
                </div>
                <input
                  name="businessName"
                  type="text"
                  placeholder="Business Name"
                  value={form.businessName}
                  onChange={handleInputChange}
                  className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all duration-200 text-[#111827] placeholder-[#6B7280]"
                  required
                />
              </div>

              {/* Password */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-[#6B7280]" />
                </div>
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={form.password}
                  onChange={handleInputChange}
                  className="w-full pl-12 pr-12 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all duration-200 text-[#111827] placeholder-[#6B7280]"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-[#6B7280] hover:text-primary transition-colors"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>

              {/* Confirm Password */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-[#6B7280]" />
                </div>
                <input
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                  value={form.confirmPassword}
                  onChange={handleInputChange}
                  className="w-full pl-12 pr-12 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all duration-200 text-[#111827] placeholder-[#6B7280]"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-[#6B7280] hover:text-primary transition-colors"
                >
                  {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-white py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 group flex items-center justify-center gap-2"
              >
                Create Account
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>

           

            {/* Login Link */}
            <p className="text-center text-[#6B7280] text-sm mt-6">
              Already have an account?{" "}
              <Link href="/login" className="text-primary font-semibold hover:text-primary/80 transition-colors">
                Sign in here
              </Link>
            </p>
          </div>

           {/* Benefits */}
            <div className="mt-6 p-4 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl border border-primary/10">
              <div className="flex items-center justify-center gap-6 text-sm text-[#6B7280]">
                <span className="flex items-center gap-1">
                  <span className="text-success">✅</span>
                  7-day free trial
                </span>
                <span className="flex items-center gap-1">
                  <span className="text-success">✅</span>
                  No credit card
                </span>
                <span className="flex items-center gap-1">
                  <span className="text-success">✅</span>
                  Cancel anytime
                </span>
              </div>
            </div>
        </div>
      </div>
    </main>
  )
}
