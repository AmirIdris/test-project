"use client"
import React, { useState } from 'react';
import Link from 'next/link';

export const Pricing = () => {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');

  return (
    <section id="features" className="relative min-h-screen pt-32 pb-16 px-4">
      <div className="absolute inset-0 bg-[url('/images/hero-bg.png')] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Flexible <span className="text-[#f59e0b]">Plans</span>
        </h2>
        <p className="text-gray-300 text-lg mb-12">
          Choose a plan that work best for you & your team
        </p>

        {/* Billing Toggle */}
        <div className="inline-flex items-center bg-gray-800/50 rounded-full p-1 px-2 mb-16">
          <button
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
              billingPeriod === 'monthly' ? 'bg-[#f59e0b] text-white' : 'text-gray-400'
            }`}
            onClick={() => setBillingPeriod('monthly')}
          >
            Monthly
          </button>
          <button
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
              billingPeriod === 'yearly' ? 'bg-[#f59e0b] text-white' : 'text-gray-400'
            }`}
            onClick={() => setBillingPeriod('yearly')}
          >
            Yearly<span className="text-xs ml-1">(Save 50%)</span>
          </button>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Standard Plan */}
          <div className="bg-white/10 backdrop-blur-xl rounded-lg p-8 border border-white/20 hover:border-white/30 transition-all shadow-[0_0_30px_rgba(255,255,255,0.07)] hover:shadow-[0_0_40px_rgba(255,255,255,0.1)]">
            <h3 className="text-xl font-semibold mb-4">Standard</h3>
            <p className="text-gray-400 text-sm mb-6">
              Perfect for small teams and startups looking to establish their virtual presence. Get started with essential features and reliable support.
            </p>
            <div className="text-4xl font-bold mb-6">
              ${billingPeriod === 'monthly' ? '99' : '49.5'}
              <span className="text-sm font-normal text-gray-400">/Per Month</span>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center text-gray-300">
                <span className="mr-2">•</span>
                Up to 10 team members
              </li>
              <li className="flex items-center text-gray-300">
                <span className="mr-2">•</span>
                5GB storage space
              </li>
              <li className="flex items-center text-gray-300">
                <span className="mr-2">•</span>
                Basic collaboration tools
              </li>
              <li className="flex items-center text-gray-300">
                <span className="mr-2">•</span>
                Email support
              </li>
              <li className="flex items-center text-gray-300">
                <span className="mr-2">•</span>
                Basic analytics
              </li>
            </ul>
            <Link
              href="/order-summary"
              className="block w-full text-center bg-gray-800 hover:bg-gray-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
            >
              Choose Plan
            </Link>
          </div>

          {/* Premium Plan */}
          <div className="bg-white/10 backdrop-blur-xl rounded-lg p-8 border border-white/20 hover:border-white/30 transform scale-105 transition-all shadow-[0_0_35px_rgba(245,158,11,0.15)] hover:shadow-[0_0_50px_rgba(245,158,11,0.2)]">
            <h3 className="text-xl font-semibold mb-4">Premium (Recommended)</h3>
            <p className="text-gray-400 text-sm mb-6">
              Ideal for growing businesses requiring advanced features and priority support. Enhanced collaboration tools and expanded storage.
            </p>
            <div className="text-4xl font-bold mb-6">
              ${billingPeriod === 'monthly' ? '299' : '149.5'}
              <span className="text-sm font-normal text-gray-400">/Per Month</span>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center text-gray-300">
                <span className="mr-2">•</span>
                Up to 50 team members
              </li>
              <li className="flex items-center text-gray-300">
                <span className="mr-2">•</span>
                50GB storage space
              </li>
              <li className="flex items-center text-gray-300">
                <span className="mr-2">•</span>
                Advanced collaboration suite
              </li>
              <li className="flex items-center text-gray-300">
                <span className="mr-2">•</span>
                24/7 priority support
              </li>
              <li className="flex items-center text-gray-300">
                <span className="mr-2">•</span>
                Advanced analytics & reporting
              </li>
            </ul>
            <Link
              href="/order-summary"
              className="block w-full text-center bg-[#f59e0b] hover:bg-[#d97706] text-white font-medium py-3 px-6 rounded-lg transition-colors"
            >
              Choose Plan
            </Link>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-white/10 backdrop-blur-xl rounded-lg p-8 border border-white/20 hover:border-white/30 transition-all shadow-[0_0_30px_rgba(255,255,255,0.07)] hover:shadow-[0_0_40px_rgba(255,255,255,0.1)]">
            <h3 className="text-xl font-semibold mb-4">Enterprise</h3>
            <p className="text-gray-400 text-sm mb-6">
              Custom solutions for large organizations needing maximum scalability and security. Tailored features and dedicated support team.
            </p>
            <div className="text-xl font-bold mb-6">Custom Plan</div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center text-gray-300">
                <span className="mr-2">•</span>
                Unlimited team members
              </li>
              <li className="flex items-center text-gray-300">
                <span className="mr-2">•</span>
                Unlimited storage
              </li>
              <li className="flex items-center text-gray-300">
                <span className="mr-2">•</span>
                Custom feature development
              </li>
              <li className="flex items-center text-gray-300">
                <span className="mr-2">•</span>
                Dedicated support team
              </li>
              <li className="flex items-center text-gray-300">
                <span className="mr-2">•</span>
                Custom analytics & API access
              </li>
            </ul>
            <Link
              href="/order-summary"
              className="block w-full text-center bg-gray-800 hover:bg-gray-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}; 