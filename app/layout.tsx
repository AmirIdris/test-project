import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "./components/layout/Navigation/Navigation";
import { ClientLayout } from "./components/layout/ClientLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Teamify - Empower Your Team",
  description: "Collaborative platform for modern teams",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientLayout>
          <Navigation />
          <main className="flex-grow">
            {children}
          </main>
        </ClientLayout>
      </body>
    </html>
  );
}
