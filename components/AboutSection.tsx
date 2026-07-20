import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function AboutSection(): React.JSX.Element {
  return (
    <section className="my-32">
      {/* Container with a subtle warm background */}
      <div className="relative   p-8 md:p-16 lg:p-20 overflow-hidden">
        {/* Huge Background Text for Editorial Feel (1969) */}
        <div className="absolute top-0 right-0 -translate-y-16 translate-x-12 text-[12rem] lg:text-[20rem] font-bold text-stone-200 opacity-50 select-none pointer-events-none tracking-tighter z-0">
          1969
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center relative z-10">
          {/* ================= IMAGE COLUMN ================= */}
          <div className="lg:col-span-5 relative">
            {/* Decorative Offset Border (Retro Frame Effect) */}
            <div className="absolute inset-0 border border-black rounded-[2.5rem] translate-x-4 translate-y-4 md:translate-x-6 md:translate-y-6 -z-10"></div>

            {/* Main Image Container */}
            <div className="relative w-full aspect-square md:aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-stone-300">
              <Image
                src="/sp.avif" // သင်ပေးထားသော စံပြမုန့်တိုက် ပုံဟောင်း
                alt="San Pya Confectionery 1969"
                fill
                className="object-cover "
              />

              {/* Floating Badge on Image */}
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm px-6 py-3 rounded-full text-xs font-bold tracking-widest uppercase border border-stone-200 shadow-sm text-black">
                Est. 1969 • Mogok
              </div>
            </div>
          </div>

          {/* ================= TEXT COLUMN ================= */}
          <div className="lg:col-span-7">
            {/* Small Header with Line Accent */}
            <div className="flex items-center gap-4 mb-6">
              <span className="w-8 h-0.5 bg-black"></span>
              <p className="text-xs font-bold uppercase tracking-widest text-black">
                Our Heritage
              </p>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-[4rem] font-medium tracking-tighter uppercase leading-[1.05] mb-8 text-black">
              From a small <br /> bakery to a <br /> leading brand.
            </h2>

            <div className="text-md md:text-lg text-stone-600 leading-relaxed font-medium space-y-6 mb-12">
              <p>
                <span className="text-black font-bold">Founded in 1969</span> in
                Mogok, Mandalay Region, Myanmar, SP Bakery began with a
                professional team and a passion for quality. Over the decades,
                it has grown into a leading company in bakery and café
                solutions, distribution and franchise operations.
              </p>
              <p>
                Under the brand names{" "}
                <span className="text-black font-bold">Daily</span> and{" "}
                <span className="text-black font-bold">All Time</span>, SP
                Bakery successfully launched its distribution line.
                Additionally, SP Casual Dining & Catering was introduced to
                provide professional catering services for various events.
              </p>
            </div>

            {/* Creative Button with Arrow Animation */}
            <Link
              href="/about"
              className="group inline-flex items-center gap-4 bg-black text-white rounded-full px-8 py-4 text-sm font-semibold hover:bg-stone-800 transition-all duration-300 shadow-lg hover:shadow-xl">
              Discover Our Story
              <svg
                className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
