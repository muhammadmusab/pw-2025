import type React from "react"
import Link from "next/link"
import { Sparkles } from "lucide-react"
import SignInForm from "@/components/pages/auth/signin-form"

export default function LoginPage() {
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
            <div className="inline-flex items-center gap-2 bg-success/10 text-success px-4 py-2 rounded-full text-sm font-medium mb-6 border border-success/20">
              <Sparkles className="w-4 h-4" />
              Welcome Back!
            </div>

            <h1 className="text-3xl font-bold text-[#111827] mb-2">Sign In to Your Account</h1>
            <p className="text-[#6B7280]">Continue creating magical social media content</p>
          </div>

          {/* Form Card */}
          <div className="bg-[#FFFFFF] rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-500">
           <SignInForm/>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-[#FFFFFF] text-[#6B7280]">Or continue with</span>
              </div>
            </div>

            {/* Social Login Buttons */}
            {/* <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                className="flex items-center justify-center gap-2 py-3 px-4 border border-gray-200 rounded-xl hover:bg-[#F9FAFB] transition-colors duration-200 text-[#6B7280] hover:text-[#111827]"
              >
                <span className="text-lg">📧</span>
                <span className="font-medium">Google</span>
              </button>
              <button
                type="button"
                className="flex items-center justify-center gap-2 py-3 px-4 border border-gray-200 rounded-xl hover:bg-[#F9FAFB] transition-colors duration-200 text-[#6B7280] hover:text-[#111827]"
              >
                <span className="text-lg">📘</span>
                <span className="font-medium">Facebook</span>
              </button>
            </div> */}

            {/* Signup Link */}
            <p className="text-center text-[#6B7280] text-sm mt-6">
              Don't have an account?{" "}
              <Link href="/signup" className="text-primary font-semibold hover:text-primary/80 transition-colors">
                Sign up for free
              </Link>
            </p>
          </div>

          {/* Quick Stats */}
          <div className="mt-8 grid grid-cols-3 gap-4 text-center">
            <div className="bg-[#FFFFFF] p-4 rounded-2xl border border-gray-100 shadow-sm">
              <div className="text-2xl font-bold text-primary mb-1">10K+</div>
              <p className="text-xs text-[#6B7280]">Active Users</p>
            </div>
            <div className="bg-[#FFFFFF] p-4 rounded-2xl border border-gray-100 shadow-sm">
              <div className="text-2xl font-bold text-accent mb-1">4.9★</div>
              <p className="text-xs text-[#6B7280]">User Rating</p>
            </div>
            <div className="bg-[#FFFFFF] p-4 rounded-2xl border border-gray-100 shadow-sm">
              <div className="text-2xl font-bold text-success mb-1">99.9%</div>
              <p className="text-xs text-[#6B7280]">Uptime</p>
            </div>
          </div>

          {/* Security Badge */}
          <div className="mt-6 text-center">
            <div className="inline-flex items-center gap-2 text-sm text-[#6B7280]">
              <span className="text-success">🔒</span>
              <span>Your data is secure and encrypted</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
