"use client"

import React from 'react';

export default function OrderSummaryPage() {
  return (
    <main className="relative min-h-screen">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-[url('/images/hero-bg.png')] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 py-16">
        <div className="w-full max-w-2xl">
          <div className="bg-white/10 backdrop-blur-xl rounded-lg p-8 border border-white/20">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-2xl font-bold text-white">Your Order<span className="text-[#f59e0b]">Summary</span></h1>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-400">Billing term:</span>
                <div className="flex items-center bg-white/5 rounded-full p-1">
                  <button className="px-4 py-1 rounded-full bg-[#f59e0b] text-white text-sm">Monthly</button>
                  <button className="px-4 py-1 rounded-full text-gray-400 text-sm">Yearly</button>
                </div>
              </div>
            </div>

            {/* Plan Selection Header */}
            <div className="mb-4">
              <h2 className="text-lg font-medium text-white">Select Plan</h2>
              <p className="text-sm text-gray-400">Choose the plan that best fits your needs</p>
            </div>

            {/* Plan Selection */}
            <div className="space-y-4">
              {/* Standard Plan */}
              <div className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 transition-colors">
                <div className="flex items-center space-x-4">
                  <div className="w-6 h-6 rounded-full border-2 border-white/20 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-white"></div>
                  </div>
                  <div>
                    <h3 className="font-medium text-white">Standard</h3>
                    <p className="text-sm text-gray-400">Limited access to our platform</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-white">$1000</p>
                  <p className="text-sm text-gray-400">Per Month</p>
                </div>
              </div>

              {/* Premium Plan */}
              <div className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-[#f59e0b] hover:border-[#f59e0b]/80 transition-colors relative">
                <div className="absolute -top-3 right-4 bg-[#f59e0b] text-white text-xs px-2 py-1 rounded">Recommended</div>
                <div className="flex items-center space-x-4">
                  <div className="w-6 h-6 rounded-full border-2 border-[#f59e0b] flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-[#f59e0b]"></div>
                  </div>
                  <div>
                    <h3 className="font-medium text-white">Premium</h3>
                    <p className="text-sm text-gray-400">Full access with priority support</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-white">$1800</p>
                  <p className="text-sm text-gray-400">Per Month</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex space-x-4">
              <button
                onClick={() => window.history.back()}
                className="flex-1 px-6 py-3 rounded-lg border border-white/20 text-white hover:bg-white/5 transition-colors"
              >
                Back
              </button>
              <button
                onClick={() => window.location.href = '/payment'}
                className="flex-1 px-6 py-3 rounded-lg bg-[#f59e0b] text-white hover:bg-[#f59e0b]/90 transition-colors"
              >
                Proceed to Payment
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 