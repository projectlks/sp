import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function HomePage(): React.JSX.Element {
  return (
    <div className="w-full bg-white text-black">
      <div className="container mx-auto px-8 pt-12 pb-24">
        {/* Hero Text Section */}
        <section className="max-w-7xl mb-20">
          <h1 className="text-6xl md:text-7xl lg:text-[5.5rem] font-medium tracking-wide uppercase leading-[1.05] mb-8">
            Great food like never seen before
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mb-10 leading-relaxed">
            Your events will never be the same again with the touch of delicacy
            and professionalism that your party deserves.
          </p>
          <Link
            href="/schedule"
            className="inline-block border border-black rounded-[2rem] px-8 py-3 text-sm font-medium hover:bg-black hover:text-white transition-all duration-300">
            Schedule a tasting
          </Link>
        </section>

        {/* Images & Badge Section */}
        {/* items-end အစား items-center ပြောင်းထားသဖြင့် ပုံနှစ်ပုံ အလယ်တည့်တည့် ညီသွားပါမည် */}
        <section className="relative grid grid-cols-1 md:grid-cols-12 gap-8 items-center mt-12">
          {/* Left Image (Bakery Interior) */}
          {/* h-[500px] နှင့် rounded-[3rem] သို့ ပြောင်းလဲထားပါသည် */}
          <div className="md:col-span-6 lg:col-span-7 relative h-[500px] w-full rounded-[3rem] overflow-hidden">
            <Image
              src="/placeholder.jpg"
              alt="Bakery Interior"
              fill
              className="object-cover"
            />
          </div>

          {/* Right Image (Bread) */}
          {/* h-[600px] နှင့် rounded-[4rem] သို့ ပြောင်းလဲထားပါသည် (အနည်းငယ်ပိုရှည်စေရန်) */}
          <div className="md:col-span-6 lg:col-span-5 relative h-[600px] w-full rounded-[4rem] overflow-hidden">
            <Image
              src="/hover.jpg"
              alt="Fresh Bread"
              fill
              className="object-cover"
            />
          </div>

          {/* Circular Text Badge (Voted the best bakery...) */}
          {/* Badge ကို ပုံနှစ်ပုံကြား အလယ်တည့်တည့်တွင် ပေါ်စေရန် top-1/2 -translate-y-1/2 ကို သုံးထားပါသည် */}
          <div className="absolute right-[25%] lg:right-[35%] top-1/2 -translate-y-1/2 z-10 w-44 h-44 rounded-full flex flex-col items-center justify-center bg-white/40 backdrop-blur-sm shadow-sm pointer-events-none">
            {/* SVG Circular Text */}
            <svg
              viewBox="0 0 100 100"
              className="absolute inset-0 w-full h-full animate-[spin_20s_linear_infinite]">
              <defs>
                <path
                  id="circlePath"
                  d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
                />
              </defs>
              <text
                fontSize="7.5"
                fill="black"
                letterSpacing="3.5"
                className="uppercase font-medium">
                <textPath href="#circlePath" startOffset="0%">
                  Voted the best bakery in the city •
                </textPath>
              </text>
            </svg>

            {/* Inner Content (Icon & Year) */}
            <div className="flex flex-col items-center justify-center text-center mt-2">
              <div className="border border-black rounded-lg p-1.5 mb-1.5">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <span className="text-[1.75rem] font-light tracking-tight">
                2025
              </span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
