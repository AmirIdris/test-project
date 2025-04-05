"use client"

import { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { Footer } from './Footer/Footer';

interface ClientLayoutProps {
  children: ReactNode;
}

export function ClientLayout({ children }: ClientLayoutProps) {
  const pathname = usePathname();
  const showFooter = pathname !== '/';

  return (
    <div className="min-h-screen flex flex-col">
      {children}
      {showFooter && <Footer />}
    </div>
  );
} 