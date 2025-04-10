"use client"

import React, { useState } from 'react';

export default function OrderSummaryPage() {
  // State for billing term and selected plan
  const [billingTerm, setBillingTerm] = useState<'monthly' | 'yearly'>('monthly');
  const [selectedPlan, setSelectedPlan] = useState<'standard' | 'premium'>('premium');

  // Pricing data
  const prices = {
    standard: {
      monthly: 1000,
      yearly: 10000,
    },
    premium: {
      monthly: 1800,
      yearly: 18000,
    }
  };

  // Calculate price based on selected plan and billing term
  const getPrice = () => {
    const basePrice = prices[selectedPlan][billingTerm];
    if (billingTerm === 'yearly') {
      // Apply 20% discount for yearly billing
      return (basePrice * 0.8) / 12;
    }
    return basePrice;
  };

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
              <h1 className="text-2xl font-bold text-white">Your Order Summary</h1>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-400">Billing term:</span>
                <div className="flex items-center bg-white/5 rounded-full p-1">
                  <button
                    onClick={() => setBillingTerm('monthly')}
                    className={`px-4 py-1 rounded-full text-sm transition-colors ${
                      billingTerm === 'monthly'
                        ? 'bg-[#f59e0b] text-white'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    Monthly
                  </button>
                  <button
                    onClick={() => setBillingTerm('yearly')}
                    className={`px-4 py-1 rounded-full text-sm transition-colors ${
                      billingTerm === 'yearly'
                        ? 'bg-[#f59e0b] text-white'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    Yearly
                  </button>
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
              <div
                onClick={() => setSelectedPlan('standard')}
                className={`flex items-center justify-between p-4 rounded-lg bg-white/5 border transition-colors cursor-pointer ${
                  selectedPlan === 'standard'
                    ? 'border-white/20 hover:border-white/30'
                    : 'border-white/10 hover:border-white/20'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                    selectedPlan === 'standard' ? 'border-white' : 'border-white/20'
                  }`}>
                    {selectedPlan === 'standard' && (
                      <div className="w-3 h-3 rounded-full bg-white"></div>
                    )}
                  </div>
                  <div>
                    <h3 className="font-medium text-white">Standard</h3>
                    <p className="text-sm text-gray-400">Limited access to our platform</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-white">
                    ${billingTerm === 'yearly' ? (prices.standard.yearly * 0.8 / 12).toFixed(0) : prices.standard.monthly}
                  </p>
                  <p className="text-sm text-gray-400">Per Month</p>
                </div>
              </div>

              {/* Premium Plan */}
              <div
                onClick={() => setSelectedPlan('premium')}
                className={`flex items-center justify-between p-4 rounded-lg bg-white/5 border transition-colors cursor-pointer relative ${
                  selectedPlan === 'premium'
                    ? 'border-[#f59e0b] hover:border-[#f59e0b]/80'
                    : 'border-white/10 hover:border-white/20'
                }`}
              >
                <div className="absolute -top-3 right-4 bg-[#f59e0b] text-white text-xs px-2 py-1 rounded">
                  Recommended
                </div>
                <div className="flex items-center space-x-4">
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                    selectedPlan === 'premium' ? 'border-[#f59e0b]' : 'border-white/20'
                  }`}>
                    {selectedPlan === 'premium' && (
                      <div className="w-3 h-3 rounded-full bg-[#f59e0b]"></div>
                    )}
                  </div>
                  <div>
                    <h3 className="font-medium text-white">Premium</h3>
                    <p className="text-sm text-gray-400">Full access with priority support</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-white">
                    ${billingTerm === 'yearly' ? (prices.premium.yearly * 0.8 / 12).toFixed(0) : prices.premium.monthly}
                  </p>
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
                onClick={() => window.location.href = '/setup-office'}
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