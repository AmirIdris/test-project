import React from 'react';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="w-full bg-black/20 backdrop-blur-sm border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-6">
          <Link 
            href="/terms" 
            className="text-sm text-gray-400 hover:text-white transition-colors"
          >
            Terms & Conditions
          </Link>
          <Link 
            href="/privacy" 
            className="text-sm text-gray-400 hover:text-white transition-colors"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}; 