import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Swapping to Inter for that clean SaaS look
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SubHub | Master Your Subscriptions",
  description: "Centralize and optimize your subscription management easily.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body 
        className={`${inter.className} antialiased bg-[#F8FAFC] text-slate-900 min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
