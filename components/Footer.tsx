import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer(): React.JSX.Element {
  return (
    <footer className="bg-[#2E2F92] text-white px-6 md:px-12 py-16">
      {/* ================= TOP HEADER ================= */}
      <div className="flex flex-col md:flex-row justify-between items-start border-b border-white/20 pb-12 md:pb-20 mb-12 gap-6">
        <div className="text-sm text-white/70 uppercase tracking-widest font-medium">
          SP Bakery Co.,Ltd.
        </div>
        <h2 className="text-5xl md:text-[5.5rem] font-bold tracking-tighter uppercase md:text-right leading-[1.1]">
          We Bake For You <br className="hidden md:block" /> Every Day
        </h2>
      </div>

      {/* ================= MAIN CONTENT GRID ================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 items-start mb-16">
        {/* 1. Logo & Hotlines */}
        <div className="flex flex-col gap-8">
          <div className="w-32 h-32 bg-white flex items-center justify-center relative rounded-3xl overflow-hidden shadow-lg">
            <Image
              src="/logo.avif"
              alt="SP Bakery Logo"
              fill
              sizes="128px"
              className="object-contain p-4"
            />
          </div>
          <div className="text-sm text-white/70">
            <p className="font-bold text-white mb-4 uppercase tracking-widest text-xs">
              Hot Lines
            </p>
            <ul className="space-y-2">
              <li>+95 9777762488</li>
              <li>+95 9752777784</li>
              <li>+95 9752777794</li>
            </ul>
          </div>
        </div>

        {/* 2. Head Offices */}
        <div className="text-sm text-white/70">
          <p className="font-bold text-white mb-5 uppercase tracking-widest text-xs">
            Head Offices
          </p>
          <div className="space-y-6">
            <div>
              <p className="text-white font-medium mb-1">Yangon (YGN)</p>
              <p className="leading-relaxed">
                Bagan street, SP Bakery <br />
                Head Office
              </p>
            </div>
            <div>
              <p className="text-white font-medium mb-1">Mandalay (MDY)</p>
              <p className="leading-relaxed">Yar Taw</p>
            </div>
          </div>
        </div>

        {/* 3. Locations */}
        <div className="text-sm text-white/70">
          <p className="font-bold text-white mb-5 uppercase tracking-widest text-xs">
            Our Locations
          </p>
          <ul className="space-y-3">
            <li>
              <Link
                href="/location/yangon"
                className="hover:text-white transition-colors">
                Yangon
              </Link>
            </li>
            <li>
              <Link
                href="/location/mandalay"
                className="hover:text-white transition-colors">
                Mandalay
              </Link>
            </li>
            <li>
              <Link
                href="/location/mogok"
                className="hover:text-white transition-colors">
                Mogok
              </Link>
            </li>
            <li>
              <Link
                href="/location/naypyitaw"
                className="hover:text-white transition-colors">
                Nay Pyi Taw
              </Link>
            </li>
            <li className="pt-2">
              <Link
                href="/location"
                className="text-white font-medium hover:text-blue-200 transition-colors">
                All Locations &rarr;
              </Link>
            </li>
          </ul>
        </div>

        {/* 4. Quick Links & Socials */}
        <div className="text-sm text-white/70 flex flex-col justify-between h-full gap-8">
          <div>
            <p className="font-bold text-white mb-5 uppercase tracking-widest text-xs">
              Explore
            </p>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/menu"
                  className="hover:text-white transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-bold text-white mb-4 uppercase tracking-widest text-xs">
              Follow Us
            </p>
            {/* Text-based Social Links (Icon ပြောင်းသုံးချင်ပါက ဤနေရာတွင် SVG ထည့်ပါ) */}
            <div className="flex gap-5 text-sm font-bold tracking-widest">
              <a href="#" className="hover:text-white transition-colors">
                FB
              </a>
              <a href="#" className="hover:text-white transition-colors">
                IG
              </a>
              <a href="#" className="hover:text-white transition-colors">
                TK
              </a>
              <a href="#" className="hover:text-white transition-colors">
                IN
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ================= BOTTOM BAR ================= */}
      <div className="flex flex-col md:flex-row justify-between items-center text-[10px] md:text-xs text-white/50 mt-12 pt-8 border-t border-white/20 uppercase tracking-wider gap-8">
        <p className="text-center md:text-left leading-relaxed">
          Copy &copy; 2027 by SP Bakery Co.,Ltd. <br className="md:hidden" />
          All Rights Reserved.
        </p>

        <Link
          href="/privacy-policy"
          className="hover:text-white transition-colors">
          Privacy Policy
        </Link>
      </div>
    </footer>
  );
}
