import type { Metadata } from "next";
import localFont from "next/font/local";
import { Toaster } from "@/components/ui/toaster"
import Providers from '@/components/layout/Providers';
import "./globals.css";
import PageHeader from "@/components/layout/PageHeader";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Next Auth Boilerplate",
  description: "Fully functional Next Auth Boilerplate",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <PageHeader/>
        {children}
        <Toaster />
        <script src="https://checkout.razorpay.com/v1/checkout.js"></script> 
      </body>
    </html>
    </Providers>
  );
}
