"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Button } from '../../ui/Button';

export const Navigation = () => {
  const pathname = usePathname();
  const [isFeatureActive, setIsFeatureActive] = useState(false);

  useEffect(() => {
    const checkHash = () => {
      setIsFeatureActive(pathname === '/' && window.location.hash === '#features');
    };

    // Check initially
    checkHash();

    // Add hash change listener
    window.addEventListener('hashchange', checkHash);

    return () => {
      window.removeEventListener('hashchange', checkHash);
    };
  }, [pathname]);

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/' && !isFeatureActive;
    }
    return pathname.startsWith(path);
  };

  const getLinkClass = (path: string) => {
    return `text-[0.95rem] font-medium transition-colors ${
      isActive(path) ? 'text-[#f59e0b]' : 'text-white/80 hover:text-white'
    }`;
  };

  return (
    <>
      {/* Sticky Logo */}
      <div className="fixed top-4 left-8 z-50">
        <Link href="/" className="flex items-center">
          <Image 
            src="/images/teamify-logo.png" 
            alt="Teamify" 
            width={120} 
            height={32}
            priority
          />
        </Link>
      </div>

      {/* Navigation Bar */}
      <nav className="sticky top-0 z-40 w-full bg-black/40 backdrop-blur-xl border-b border-white/10 shadow-lg">
        <div className="max-w-[1400px] mx-auto px-8 py-4 flex justify-center items-center">
          <div className="hidden md:flex items-center gap-10">
            <Link href="/" className={getLinkClass('/')}>
              Home
            </Link>
            <Link 
              href="/#features" 
              className={`text-[0.95rem] font-medium transition-colors ${
                isFeatureActive ? 'text-[#f59e0b]' : 'text-white/80 hover:text-white'
              }`}
            >
              Features
            </Link>
            <Link href="/about" className={getLinkClass('/about')}>
              About Us
            </Link>
            <Link href="/contact" className={getLinkClass('/contact')}>
              Contact Us
            </Link>
          </div>

          <div className="absolute right-8">
            <Link href="/signin">
              <Button variant="primary" size="medium">Sign In</Button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}; 