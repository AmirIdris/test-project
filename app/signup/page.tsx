"use client"

import React from 'react';
import Link from 'next/link';

export default function SignUpPage() {
  return (
    <main className="relative min-h-screen">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-[url('/images/hero-bg.png')] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 py-16">
        <div className="w-full max-w-md">
          <div className="bg-white/10 backdrop-blur-xl rounded-lg p-8 border border-white/20">
            <h1 className="text-2xl font-bold mb-6 text-center text-white">Complete Your Signup</h1>
            
            <form className="space-y-4">
              {/* Full Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-white">
                  Enter Your Name <span className="text-[#f59e0b]">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  placeholder="Ex: John Doe"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-[#f59e0b] transition-colors text-white placeholder-gray-400"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-white">
                  Enter Your Email <span className="text-[#f59e0b]">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  placeholder="name@company.com"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-[#f59e0b] transition-colors text-white placeholder-gray-400"
                />
              </div>

              {/* Create Password */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium mb-2 text-white">
                  Create Password <span className="text-[#f59e0b]">*</span>
                </label>
                <input
                  type="password"
                  id="password"
                  required
                  placeholder="Type Password"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-[#f59e0b] transition-colors text-white placeholder-gray-400"
                />
              </div>

              {/* Confirm Password */}
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium mb-2 text-white">
                  Confirm Password <span className="text-[#f59e0b]">*</span>
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  required
                  placeholder="Confirm Password"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-[#f59e0b] transition-colors text-white placeholder-gray-400"
                />
              </div>

              {/* Continue Button */}
              <button
                type="submit"
                className="w-full mt-6 px-6 py-3 rounded-lg bg-[#f59e0b] text-white hover:bg-[#f59e0b]/90 transition-colors font-medium"
              >
                Continue
              </button>

              {/* Terms and Privacy */}
              <p className="text-sm text-center text-gray-400 mt-4">
                By proceeding you are agreeing to the{' '}
                <Link href="/terms" className="text-[#f59e0b] hover:text-[#f59e0b]/80 transition-colors">
                  Terms & Conditions
                </Link>{' '}
                and{' '}
                <Link href="/privacy" className="text-[#f59e0b] hover:text-[#f59e0b]/80 transition-colors">
                  Privacy Policy
                </Link>
              </p>
            </form>

            {/* Sign In Link */}
            <div className="mt-6 text-center">
              <span className="text-gray-400">Already have an account?</span>{' '}
              <Link href="/signin" className="text-[#f59e0b] hover:text-[#f59e0b]/80 transition-colors font-medium">
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 