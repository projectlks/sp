import React from "react";
import Image from "next/image";

// 1. Type ကို string အပြင် ReactNode ပါ လက်ခံနိုင်အောင် ပြင်ဆင်ထားသည်[cite: 5]
interface Partner {
  name: string;
  logoUrl: React.ReactNode | string;
}

// 2. သင်ပေးထားသော SVG Code
const svg = (
  <svg width="100%" height="100%" viewBox="0 0 122 32" fill="none">
    <path
      d="M82.3 6.613c-2.158 0-3.822.769-5.366 2.374v-2h-4.238v19.68h4.56V15.253c0-2.613 1.556-4.266 3.917-4.266.429 0 .805.053 1.073.106l3.165-4.16c-1.234-.213-2.307-.32-3.112-.32zM121.625 6.987h-5.258l-4.855 6.419-4.855-6.42h-5.258l7.418 9.917-7.418 9.764h5.365l4.721-6.226 4.721 6.226h5.419l-7.468-9.748 7.468-9.932zM25.86 2.56c-1.556 2.08-1.932 2.773-3.434 2.773H0V32h8.799c1.985 0 3.916-.96 5.15-2.56 1.61-2.133 1.824-2.773 3.38-2.773h22.48V0h-8.853c-1.985 0-3.916.96-5.097 2.56zm6.974 17.227h-9.389c-2.039 0-3.916.853-5.15 2.506-1.61 2.134-1.932 2.774-3.434 2.774h-7.94v-12.8h9.389c2.038 0 3.916-.96 5.15-2.56 1.61-2.08 2.039-2.72 3.487-2.72h7.887v12.8zM66.526 13.227c1.986-1.12 3.38-3.094 3.38-5.707 0-3.84-2.95-7.52-7.242-7.52H49.788v26.667h12.876c4.667 0 7.886-3.307 7.886-7.467 0-2.453-1.126-4.587-4.024-5.973zM54.348 4.16h7.94c1.985 0 3.165 1.867 3.165 3.52 0 2.027-1.77 3.413-3.433 3.413h-7.672V4.16zm7.672 18.347h-7.672v-7.254h7.94c2.039 0 3.702 1.76 3.702 3.574 0 2.026-2.092 3.68-3.97 3.68z"
      fill="currentColor"></path>
    <path
      d="M96.839 21.013c-.751 1.174-2.2 1.867-3.81 1.867-2.52 0-4.613-1.707-4.613-4.32h13.627c.215-.8.268-1.173.268-1.867 0-5.973-3.702-10.08-9.281-10.08-5.473 0-9.335 3.894-9.335 10.24 0 6.187 3.701 10.187 9.442 10.187 4.024 0 7.565-1.973 8.584-6.027h-4.882zm-3.81-10.24c2.522 0 4.454 1.6 4.4 4h-8.96c0-2.346 2.04-4 4.56-4z"
      fill="currentColor"></path>
  </svg>
);

const partnersData: Partner[] = [
  // Row 1
  { name: "Altitude", logoUrl: svg }, // SVG ကို တိုက်ရိုက်အသုံးပြုထားသည်
  { name: "ANTHROPIC", logoUrl: svg },
  { name: "ARQ", logoUrl: "/logos/arq.svg" },
  // Row 2
  { name: "Brex", logoUrl: "/logos/brex.svg" },
  { name: "COASTAL", logoUrl: svg },
  { name: "coupang", logoUrl: "/logos/coupang.svg" },
  // Row 3
  { name: "cross river", logoUrl: "/logos/crossriver.svg" },
  { name: "deel.", logoUrl: "/logos/deel.svg" },
  { name: "Deutsche Bank", logoUrl: "/logos/deutsche-bank.svg" },
  // Row 4
  { name: "DOORDASH", logoUrl: "/logos/doordash.svg" },
  { name: "El Dorado", logoUrl: "/logos/eldorado.svg" },
  { name: "FAIRE", logoUrl: "/logos/faire.svg" },
  // Row 5
  { name: "Félix", logoUrl: "/logos/felix.svg" },
  { name: "FIGURE", logoUrl: "/logos/figure.svg" },
  { name: "gusto", logoUrl: "/logos/gusto.svg" },
  // Row 6
  { name: "Kalshi", logoUrl: "/logos/kalshi.svg" },
  { name: "karta", logoUrl: "/logos/karta.svg" },
  { name: "KAST", logoUrl: "/logos/kast.svg" },
  // Row 7
  { name: "kraken", logoUrl: "/kraken.svg" },
  { name: "Klarna", logoUrl: "/logos/klarna.svg" },
  { name: "Lead", logoUrl: "/logos/lead.svg" },
];
export function TrustedPartnersSection(): React.JSX.Element {
  return (
    <section className=" py-16 md:py-32">
      {/* bg-[#f5f5f5] */}
      <div className="max-w-262.5 mx-auto px-4 md:px-6">
        {/* ခေါင်းစဉ် */}
        <h2 className="text-center text-xl md:text-2xl font-semibold mb-12 md:mb-16 text-black/80">
          Trusted Partners
        </h2>

        {/* 
          Mobile တွင် grid-cols-2, Desktop တွင် grid-cols-3
        */}
        <div className="grid grid-cols-2 md:grid-cols-3">
          {partnersData.map((partner: Partner) => (
            <div
              key={partner.name}
              className={`
                relative flex items-center justify-center h-20 md:h-36 px-2 md:px-4
                
                /* ================= VERTICAL BORDER (ညာဘက်မျဉ်းတို) ================= */
                after:absolute after:right-0 after:w-px after:bg-gray-300/80
                /* ဖုန်းတွင် အပြတ်နေရာ သေးစေရန် top-2, bottom-2 သုံးထားပါသည် */
                after:top-2 after:bottom-2 md:after:top-8 md:after:bottom-8 
                /* ဖုန်း (2-cols) တွင် စုံဂဏန်းအကွက်များကို မျဉ်းဖြောက်ပြီး၊ Desktop (3-cols) တွင် ၃ ခုမြောက်တိုင်းကို မျဉ်းဖြောက်ပါသည် */
                max-md:even:after:hidden md:nth-[3n]:after:hidden
                
                /* ================= HORIZONTAL BORDER (အောက်ဘက်မျဉ်းတို) ================= */
                before:absolute before:bottom-0 before:h-px before:bg-gray-300/80
                /* ဖုန်းတွင် အပြတ်နေရာ သေးစေရန် left-2, right-2 သုံးထားပါသည် */
                before:left-2 before:right-2 md:before:left-8 md:before:right-8
                /* ဖုန်း (2-cols) တွင် နောက်ဆုံး ၂ ကွက်ကို အောက်မျဉ်းဖြောက်ပြီး၊ Desktop (3-cols) တွင် နောက်ဆုံး ၃ ကွက်ကို မျဉ်းဖြောက်ပါသည် */
                max-md:nth-last-[-n+2]:before:hidden md:nth-last-[-n+3]:before:hidden
              `}>
              {/* Logo Container (ဖုန်းတွင် Logo ကို အနည်းငယ် ပိုသေးပေးထားပါသည်) */}
              <div className="relative w-full max-w-22.5 md:max-w-35 h-6 md:h-10 flex items-center justify-center text-gray-900 opacity-80 hover:opacity-100 transition-opacity duration-300">
                {typeof partner.logoUrl === "string" ? (
                  <Image
                    src={partner.logoUrl}
                    alt={partner.name}
                    fill
                    className="object-contain"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    {partner.logoUrl}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
// ----------------------------------------------------
// Main About Us Page Component (မူလအတိုင်း ဆက်လက်ပါဝင်သည်)
// ----------------------------------------------------
export default function AboutUsPage(): React.JSX.Element {
  return (
    <div className="bg-white text-black font-sans pb-32">
      <main className="container mx-auto px-6">
        {/* ================= HERO: MASSIVE TYPOGRAPHY ================= */}
        <section className="py-24 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-gray-400 mb-6">
            Our Legacy
          </p>
          <h1 className="text-[5rem] md:text-[10rem] font-medium leading-[0.8] tracking-tighter uppercase mb-12">
            SP Bakery
          </h1>
          <div className="max-w-2xl mx-auto">
            <p className="text-xl md:text-2xl font-light text-gray-600 leading-relaxed italic">
              &quot;Founded in 1969, we have spent decades perfecting the art of
              baking, bringing quality and tradition to every corner of
              Myanmar.&quot;
            </p>
          </div>
        </section>

        {/* ================= FULL WIDTH STORY IMAGE ================= */}
        <section className="relative w-full h-[500px] mb-32 rounded-[3rem] overflow-hidden">
          <Image src="/sp.avif" alt="History" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/20"></div>
        </section>

        {/* ================= AWARDS: OVERLAPPING CARD DESIGN ================= */}
        <section className="mb-32 relative">
          <div className="max-w-4xl mx-auto bg-black text-white p-16 md:p-24 rounded-[3rem] text-center">
            <h2 className="text-4xl md:text-6xl font-medium uppercase mb-12">
              Awards & Recognition
            </h2>
            <div className="text-lg md:text-xl font-light text-gray-300 leading-loose space-y-8">
              <p>
                Our Central Kitchen is proudly certified with{" "}
                <strong>GMP, HACCP, and 5S Score</strong> standards. Our
                commitment to excellence continues as we target FSSC and ISO
                certifications.
              </p>
              <p>
                The CEO has been recognized with the prestigious{" "}
                <strong>AWEN Award (2018)</strong>,
                <strong>Women of the Future (2024)</strong>, and the{" "}
                <strong>Kindness & Leadership Award</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* ================= SERVICES: HORIZONTAL SCROLL OR CAROUSEL STYLE ================= */}
        <section className="mb-32">
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-center mb-16">
            Core Operations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["Retail", "Catering", "Distribution"].map((service) => (
              <div
                key={service}
                className="group relative h-[400px] md:h-[500px] rounded-[2.5rem] overflow-hidden bg-gray-100">
                <Image
                  src={`https://images.unsplash.com/photo-1555507036-ab1d4075c6f1?auto=format&fit=crop&w=800&q=80`}
                  alt={service}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute bottom-10 left-10 text-white">
                  <h3 className="text-4xl font-medium">{service}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= PARTNERS: MINIMALIST GRID ================= */}
        <TrustedPartnersSection />
      </main>
    </div>
  );
}
