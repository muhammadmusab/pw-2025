import type React from "react";
import Link from "next/link";
import {
  Sparkles,
} from "lucide-react";
import SignUpForm from "@/components/pages/auth/signup-form";

export default function SignupPage() {

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#F9FAFB] via-[#FFFFFF] to-[#F3F4F6]">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="bg-primary absolute -top-40 -right-40 h-80 w-80 animate-pulse rounded-full opacity-10 mix-blend-multiply blur-xl filter"></div>
        <div className="bg-accent absolute -bottom-40 -left-40 h-80 w-80 animate-pulse rounded-full opacity-10 mix-blend-multiply blur-xl filter delay-1000"></div>
      </div>

      {/* Floating elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 animate-bounce text-2xl delay-1000">
          ✨
        </div>
        <div className="absolute right-20 bottom-20 animate-bounce text-2xl">
          ⭐
        </div>
      </div>

      <div className="relative flex min-h-screen items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          {/* Header */}
          <div className="mb-8 text-center">
            <div className="bg-primary/10 text-primary border-primary/20 mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium">
              <Sparkles className="h-4 w-4" />
              Get your businesses automated
            </div>

            <h1 className="mb-2 text-3xl font-bold text-[#111827]">
              Create Your Account
            </h1>
            <p className="text-[#6B7280]">
              Start your free trial and transform your social media today
            </p>
          </div>

          {/* Form Card */}
          <div className="rounded-3xl border border-gray-100 bg-[#FFFFFF] p-8 shadow-xl transition-shadow duration-500 hover:shadow-2xl">
            <SignUpForm />

            {/* Login Link */}
            <p className="mt-6 text-center text-sm text-[#6B7280]">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-primary hover:text-primary/80 font-semibold transition-colors"
              >
                Sign in here
              </Link>
            </p>
          </div>

          {/* Benefits */}
          <div className="from-primary/5 to-accent/5 border-primary/10 mt-6 rounded-2xl border bg-gradient-to-r p-4">
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
  );
}
