"use client"

import { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { Footer } from './Footer/Footer';

interface ClientLayoutProps {
  children: ReactNode;
}

export function ClientLayout({ children }: ClientLayoutProps) {
  const pathname = usePathname();
  // Show footer on all pages except home page
  const showFooter = pathname !== '/';
  
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1">
        {children}
      </div>
      {showFooter && <Footer />}
    </div>
  );
} 