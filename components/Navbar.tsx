"use client"; // Route ကိုသိရန်နှင့် Hover Effect များအတွက် Client Component အဖြစ်ကြေညာခြင်း

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation"; // လက်ရှိ Route ကို ယူရန်

// Dropdown ပါလာနိုင်သဖြင့် Type များကို သေချာစွာ ကြေညာထားပါသည်
interface DropdownItem {
  name: string;
  href: string;
}

interface NavItem {
  name: string;
  href: string;
  dropdown?: DropdownItem[]; // Dropdown သည် ရှိနိုင်/မရှိနိုင် (Optional) ဖြစ်ပါသည်
}

const navItems: NavItem[] = [
  { name: "Home", href: "/home" },
  { name: "Menu", href: "/menu" },
  {
    name: "Location",
    href: "/location",
    // Location အတွက် Dropdown Data များ ထည့်သွင်းထားခြင်း
    dropdown: [
      { name: "Yangon Showroom", href: "/location/yangon" },
      { name: "Mandalay Showroom", href: "/location/mandalay" },
      { name: "Nay Pyi Taw Showroom", href: "/location/naypyitaw" },
    ],
  },
  { name: "About US", href: "/about" },
  { name: "Contact US", href: "/contact" },
];

export default function Navbar(): React.JSX.Element {
  // လက်ရှိ ရောက်နေသော လမ်းကြောင်းကို ယူခြင်း
  const pathname = usePathname();

  return (
    <header className="w-full py-8 z-50 bg-white relative">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="inline-block ">
          <Image
            src="/l.png"
            alt="Logo"
            width={200}
            height={70}
            className="object-contain w-auto h-20"
            priority
          />
        </Link>

        {/* Navigation & Buttons */}
        <div className="flex items-center gap-8 lg:gap-10">
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            {navItems.map((item: NavItem) => {
              // Main route သို့မဟုတ် Dropdown route တစ်ခုခုနှင့် ကိုက်ညီပါက Active ဖြစ်မည်
              const isActive =
                pathname === item.href ||
                (item.dropdown &&
                  item.dropdown.some((d) => pathname === d.href));

              return (
                <div key={item.name} className="relative group">
                  <Link
                    href={item.href}
                    className="relative flex items-center gap-1.5 hover:text-gray-600 transition-colors py-2">
                    {item.name}

                    {/* Dropdown ရှိပါက မြှားအောက်စိုက် (Chevron Down) လေး ပြမည် */}
                    {item.dropdown && (
                      <svg
                        className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-180"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    )}

                    {/* Dynamic Active Line */}
                    {isActive && (
                      <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-[1.5px] bg-black"></span>
                    )}
                  </Link>

                  {/* Dropdown Menu (Mouse တင်မှသာ ပေါ်လာမည်) */}
                  {item.dropdown && (
                    <div className="absolute top-full left-0 mt-2 w-[220px] bg-white border border-gray-100 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] rounded-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[100] overflow-hidden">
                      <div className="flex flex-col py-3">
                        {item.dropdown.map((drop) => (
                          <Link
                            key={drop.name}
                            href={drop.href}
                            className={`px-5 py-2.5 text-sm transition-colors hover:bg-stone-50 hover:text-black ${
                              pathname === drop.href
                                ? "font-bold text-black"
                                : "text-gray-600"
                            }`}>
                            {drop.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Action Buttons Container */}
          <div className="flex items-center gap-4">
            {/* Find a store Button */}
            <Link
              href="https://www.google.com/maps/search/SP+Bakery+near+me"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex border border-black rounded-[2rem] px-6 py-2.5 text-sm font-medium hover:bg-black hover:text-white transition-all duration-300">
              Find a store
            </Link>

            {/* Login Button (Button အစစ်ပုံစံဖြင့် ပြောင်းလဲထားသည်) */}
            <Link
              href="/login"
              className="bg-black text-white border border-black rounded-[2rem] px-8 py-2.5 text-sm font-medium hover:bg-stone-800 transition-all duration-300 shadow-sm hover:shadow-md">
              Login
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
