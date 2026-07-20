import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// Navbar Component အသစ်ကို Import လုပ်ခြင်း
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SP Bakery",
  description: "Great food like never seen before",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-black">
        {/* ခွဲထုတ်ထားသော Navbar Component */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-1 container mx-auto">{children}</main>


        <Footer/>
        
      </body>
    </html>
  );
}
