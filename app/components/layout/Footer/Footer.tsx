import React from 'react';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="w-full mt-auto">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-center gap-8 py-6 text-sm">
          <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
            Term & Conditions
          </Link>
          <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}; 