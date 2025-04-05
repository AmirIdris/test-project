"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function SetupOfficePage() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);

  const companySizes = [
    { value: "0-10", label: "0 to 10 Employees" },
    { value: "11-50", label: "11 to 50 Employees" },
    { value: "50+", label: "More Than 50 Employees" }
  ];

  const toggleSize = (value: string) => {
    setSelectedSizes(prev => 
      prev.includes(value) 
        ? prev.filter(size => size !== value)
        : [...prev, value]
    );
  };

  return (
    <main className="relative min-h-screen">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-[url('/images/hero-bg.png')] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 py-16">
        <div className="w-full max-w-md">
          {/* Setup Office Form */}
          <div className="bg-white/10 backdrop-blur-xl rounded-lg p-8 border border-white/20">
            <h2 className="text-2xl font-bold mb-6 text-center text-white">Set Up Your Office</h2>
            
            {/* Logo Upload Section */}
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="w-20 h-20 rounded-full bg-white/5 border-2 border-dashed border-white/20 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Logo here</span>
                </div>
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2">
                  <div className="w-2 h-2 bg-[#f59e0b] rounded-full"></div>
                </div>
              </div>
            </div>

            <form className="space-y-4">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-white">
                  Enter Your Name <span className="text-[#f59e0b]">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-[#f59e0b] transition-colors text-white placeholder-gray-400"
                  placeholder="First & Last Name"
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
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-[#f59e0b] transition-colors text-white placeholder-gray-400"
                  placeholder="Email Here"
                />
              </div>

              {/* Company Name */}
              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-2 text-white">
                  Your Company Name <span className="text-[#f59e0b]">*</span>
                </label>
                <input
                  type="text"
                  id="company"
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-[#f59e0b] transition-colors text-white placeholder-gray-400"
                  placeholder="Teamify Here"
                />
              </div>

              {/* Company Website */}
              <div>
                <label htmlFor="website" className="block text-sm font-medium mb-2 text-white">
                  Your Company Website <span className="text-[#f59e0b]">*</span>
                </label>
                <input
                  type="text"
                  id="website"
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-[#f59e0b] transition-colors text-white placeholder-gray-400"
                  placeholder="Website Here"
                />
              </div>

              {/* Company Size Dropdown */}
              <div className="relative">
                <label className="block text-sm font-medium mb-3 text-white">
                  Company Size <span className="text-[#f59e0b]">*</span>
                </label>
                <button
                  type="button"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-[#f59e0b] transition-colors text-white flex justify-between items-center"
                >
                  <span className="text-white">
                    {selectedSizes.length > 0 
                      ? `${selectedSizes.length} selected`
                      : 'Select company size'}
                  </span>
                  <svg 
                    className={`w-5 h-5 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {isDropdownOpen && (
                  <div className="absolute z-10 w-full mt-1 bg-[#1a1a1a] border border-white/10 rounded-lg shadow-lg">
                    <div className="py-1">
                      {companySizes.map((size) => (
                        <label
                          key={size.value}
                          className="flex items-center justify-between px-4 py-2 hover:bg-white/5 cursor-pointer"
                        >
                          <span className="text-white">{size.label}</span>
                          <input
                            type="checkbox"
                            checked={selectedSizes.includes(size.value)}
                            onChange={() => toggleSize(size.value)}
                            className="h-4 w-4 rounded border-white/10 bg-white/5 text-[#f59e0b] focus:ring-[#f59e0b] focus:ring-offset-0 focus:ring-offset-transparent"
                          />
                        </label>
                      ))}
                    </div>
                  </div>
                )}
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
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-[#f59e0b] transition-colors text-white placeholder-gray-400"
                  placeholder="Type Password"
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
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-[#f59e0b] transition-colors text-white placeholder-gray-400"
                  placeholder="Confirm Password"
                />
              </div>

              {/* Continue Button */}
              <button
                type="submit"
                className="w-full bg-[#f59e0b] text-white py-3 px-6 rounded-lg hover:bg-[#f59e0b]/90 transition-colors mt-6 font-medium"
              >
                Continue
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
} 