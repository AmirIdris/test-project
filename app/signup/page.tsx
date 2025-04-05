"use client"

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

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
          {/* Sign Up Form */}
          <div className="bg-white/10 backdrop-blur-xl rounded-lg p-8 border border-white/20">
            <h1 className="text-2xl font-bold mb-6 text-center">Set Up Your Office</h1>
            
            <form className="space-y-6">
              {/* Logo Upload */}
              <div className="flex flex-col items-center mb-6">
                <div className="w-24 h-24 rounded-full bg-white/5 border-2 border-dashed border-white/20 flex items-center justify-center mb-2">
                  <span className="text-sm text-gray-400">Logo here</span>
                </div>
                <div className="w-2 h-2 bg-[#f59e0b] rounded-full"></div>
              </div>

              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Enter Your Name <span className="text-[#f59e0b]">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-[#f59e0b] transition-colors text-white"
                  placeholder="First & Last Name"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Enter Your Email <span className="text-[#f59e0b]">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-[#f59e0b] transition-colors text-white"
                  placeholder="Email Here"
                />
              </div>

              {/* Company Name */}
              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-2">
                  Your Company Name <span className="text-[#f59e0b]">*</span>
                </label>
                <input
                  type="text"
                  id="company"
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-[#f59e0b] transition-colors text-white"
                  placeholder="Teamify Team"
                />
              </div>

              {/* Company Objective */}
              <div>
                <label htmlFor="objective" className="block text-sm font-medium mb-2">
                  Your Company Objective <span className="text-[#f59e0b]">*</span>
                </label>
                <input
                  type="text"
                  id="objective"
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-[#f59e0b] transition-colors text-white"
                  placeholder="Write here"
                />
              </div>

              {/* Company Size */}
              <div>
                <label htmlFor="size" className="block text-sm font-medium mb-2">
                  Company Size <span className="text-[#f59e0b]">*</span>
                </label>
                <select
                  id="size"
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-[#f59e0b] transition-colors text-white [&>option]:bg-[#1a1a1a] [&>option]:text-white"
                >
                  <option value="">Choose Your Company Size</option>
                  <option value="1-10">1-10 employees</option>
                  <option value="11-50">11-50 employees</option>
                  <option value="51-200">51-200 employees</option>
                  <option value="201-500">201-500 employees</option>
                  <option value="500+">500+ employees</option>
                </select>
              </div>

              {/* Password */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium mb-2">
                  Create Password <span className="text-[#f59e0b]">*</span>
                </label>
                <input
                  type="password"
                  id="password"
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-[#f59e0b] transition-colors text-white"
                  placeholder="Type Password"
                />
              </div>

              {/* Confirm Password */}
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium mb-2">
                  Confirm Password <span className="text-[#f59e0b]">*</span>
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-[#f59e0b] transition-colors text-white"
                  placeholder="Confirm Password"
                />
              </div>

              {/* Terms and Conditions */}
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    type="checkbox"
                    required
                    className="h-4 w-4 rounded border-white/10 bg-white/5 text-[#f59e0b] focus:ring-[#f59e0b] focus:ring-offset-0"
                  />
                </div>
                <label htmlFor="terms" className="ml-2 block text-sm text-gray-300">
                  I agree to the{' '}
                  <Link href="/terms" className="text-[#f59e0b] hover:text-[#f59e0b]/80 transition-colors">
                    Terms and Conditions
                  </Link>
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-[#f59e0b] hover:bg-[#f59e0b]/90 text-white font-medium py-3 px-6 rounded-lg transition-colors"
              >
                Continue
              </button>
            </form>

            <div className="mt-6 text-center">
              <span className="text-gray-400">Already have an account?</span>{' '}
              <Link href="/signin" className="text-[#f59e0b] hover:text-[#f59e0b]/80 transition-colors font-medium">
                Sign in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 