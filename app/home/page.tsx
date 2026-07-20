// import React from "react";
// import Image from "next/image";
// import Link from "next/link";

// export default function HomePage(): React.JSX.Element {
//   return (
//     <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white">
//       {/*
//         Header Section
//         (layout.tsx မှာ ထည့်သွင်းလိုပါက ဤအပိုင်းကို ခွဲထုတ်နိုင်ပါသည်)
//       */}

//       <main className="container mx-auto px-8 pt-12 pb-24">
//         {/* Hero Section */}
//         <section className="max-w-7xl mb-24">
//           <h1 className="text-[4rem] md:text-[5.5rem] lg:text-[6.5rem] font-medium tracking-tighter uppercase leading-[0.95] mb-8">
//             Great food like never
//             <br />
//             seen before
//           </h1>
//           <p className="text-lg md:text-xl text-gray-900 max-w-xl mb-10 leading-relaxed font-medium">
//             Your events will never be the same again with the touch of delicacy
//             and professionalism that your party deserves.
//           </p>
//           <Link
//             href="/schedule"
//             className="inline-block border border-black rounded-[2rem] px-8 py-3 text-sm font-semibold hover:bg-black hover:text-white transition-all duration-300">
//             Schedule a tasting
//           </Link>
//         </section>

//         {/* Images & Badge Section */}
//         <section className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-40">
//           {/* Left Image (Aerial View - အနည်းငယ် အောက်ချထားသည်) */}
//           <div className="lg:col-span-7 relative w-full h-[500px] md:h-[700px] rounded-[2.5rem] overflow-hidden mt-0 lg:mt-24">
//             <Image
//               src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80"
//               alt="Bakery Interior Aerial View"
//               fill
//               className="object-cover"
//             />
//           </div>

//           {/* Right Image Container (ပေါင်မုန့်ပုံ) */}
//           <div className="lg:col-span-5 relative flex flex-col">
//             {/* Circular Text Badge */}
//             <div className="absolute -top-24 -left-16 md:-left-24 z-10 w-48 h-48 rounded-full flex flex-col items-center justify-center pointer-events-none">
//               {/* SVG Circular Text (လည်နေမည့် အဝိုင်းစာသား) */}
//               <svg
//                 viewBox="0 0 100 100"
//                 className="absolute inset-0 w-full h-full animate-[spin_20s_linear_infinite]">
//                 <defs>
//                   <path
//                     id="circlePath"
//                     d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
//                   />
//                 </defs>
//                 <text
//                   fontSize="8.5"
//                   fill="black"
//                   letterSpacing="4.5"
//                   className="uppercase font-medium">
//                   <textPath href="#circlePath" startOffset="0%">
//                     Voted the best bakery in the city •
//                   </textPath>
//                 </text>
//               </svg>

//               {/* Inner Content (Icon & Year) */}
//               <div className="flex flex-col items-center justify-center text-center mt-2 bg-white/50 backdrop-blur-sm rounded-full p-4">
//                 <div className="border border-black rounded-lg p-1.5 mb-1 bg-white">
//                   <svg
//                     className="w-4 h-4"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24">
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="1.5"
//                       d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
//                   </svg>
//                 </div>
//                 <span className="text-[1.7rem] font-light tracking-tight text-black">
//                   2025
//                 </span>
//               </div>
//             </div>

//             {/* Right Image */}
//             <div className="relative w-full h-[400px] md:h-[550px] rounded-[2.5rem] overflow-hidden mb-6">
//               <Image
//                 src="https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&w=800&q=80"
//                 alt="Fresh Crusty Bread"
//                 fill
//                 className="object-cover"
//               />
//             </div>

//             {/* Image Caption */}
//             <p className="text-xl font-medium text-black  leading-snug">
//               Naturally fermented dough, with everything made fresh daily.
//             </p>
//           </div>
//         </section>

//         {/* We Aim To Serve Well Section */}
//         <section className="mb-24">
//           <div >
//             {/* Left Column */}
//             <div className="md:w-2/5">
//               <p className="text-xs font-bold uppercase tracking-widest mb-4">
//                 How we do it
//               </p>
//               <h2 className="text-4xl md:text-5xl font-medium tracking uppercase mb-6 leading-tight">
//                 We aim to serve well
//               </h2>
//               <p className="text-xl text-balance text-gray-500 leading-relaxed font-medium">
//                 With 15 years in the market, offering the best products, from
//                 local suppliers of the highest quality, we are the company with
//                 the largest presence in the area.
//               </p>
//             </div>

//             {/* Right Column (Offset downward) */}
//             <div className="md:w-1/2 float-right mb-24 flex flex-col sm:flex-row gap-8 lg:mt-32">
//               <div className="flex-1">
//                 <h3 className="text-xl font-bold mb-3 text-black">
//                   Corporate events
//                 </h3>
//                 <p className="text-lg text-balance text-gray-500 leading-relaxed font-medium">
//                   With a vast and affordable menu, we provide teams to cover
//                   your event, with a variety of foods that will please everyone.
//                 </p>
//               </div>
//               <div className="flex-1">
//                 <h3 className="text-xl font-bold mb-3 text-black">
//                   Smart celebrations
//                 </h3>
//                 <p className="text-lg text-balance text-gray-500 leading-relaxed font-medium">
//                   Smart menu with the main tastings of our products to surprise
//                   your intimate event and your guests.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Bottom Image Section */}
//         <section className="w-full h-[400px] md:h-[600px] relative  overflow-hidden">
//           <Image
//             src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1600&q=80"
//             alt="Bakery Shelves full of bread"
//             fill
//             className="object-cover"
//           />
//         </section>
//       </main>
//     </div>
//   );
// }

import React from "react";
import Image from "next/image";
import Link from "next/link";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import TeamSection from "@/components/TeamSection";
import BehindTheScenesSection from "@/components/BehindTheScenesSection";

// Menu Preview အတွက် Type သတ်မှတ်ခြင်း
interface MenuItem {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  hoverImageUrl?: string;
}

// Home Page တွင် ပြသရန် Menu ၄ မျိုး (Sample Data)
const featuredMenu: MenuItem[] = [
  {
    id: "1",
    name: "BUTTER CROISSANT",
    description: "Freshly Baked • Buttery • Flaky Layers",
    imageUrl: "/placeholder.jpg",
    hoverImageUrl: "/hover.jpg", // သင့်စက်ထဲရှိ ပုံလမ်းကြောင်းအတိုင်း ပြင်ပါ
  },
  {
    id: "2",
    name: "GOLDEN BUTTER TOAST",
    description: "Thick-cut Toast • Creamy Butter",
    imageUrl: "/placeholder.jpg",
  },
  {
    id: "3",
    name: "CLASSIC PRETZEL",
    description: "Hand-twisted • Sea salt • Oven Baked",
    imageUrl: "/placeholder.jpg",
  },
  {
    id: "4",
    name: "PORTUGUESE EGG TART",
    description: "Crispy pastry • Rich egg custard",
    imageUrl: "/placeholder.jpg",
  },
];

export default function HomePage(): React.JSX.Element {
  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white overflow-hidden">
      <main className="container mx-auto px-6 md:px-8 pt-12 pb-24">
        {/* Hero Section */}
        <section className="max-w-7xl mb-24">
          <h1 className="text-[3.5rem] sm:text-[4.5rem] md:text-[5.5rem] lg:text-[6.5rem] font-medium tracking-tighter uppercase leading-[0.95] mb-8">
            Great food like never
            <br className="hidden md:block" /> seen before
          </h1>
          <p className="text-lg md:text-xl text-gray-900 max-w-xl mb-10 leading-relaxed font-medium">
            Your events will never be the same again with the touch of delicacy
            and professionalism that your party deserves.
          </p>
          <Link
            href="/schedule"
            className="inline-block border border-black rounded-[2rem] px-8 py-3 text-sm font-semibold hover:bg-black hover:text-white transition-all duration-300">
            Schedule a tasting
          </Link>
        </section>

        {/* Images & Badge Section */}
        <section className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-32 md:mb-40">
          {/* Left Image */}
          <div className="lg:col-span-7 relative w-full h-[400px] md:h-[700px] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden mt-0 lg:mt-24">
            <Image
              src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80"
              alt="Bakery Interior Aerial View"
              fill
              className="object-cover"
            />
          </div>

          {/* Right Image Container */}
          <div className="lg:col-span-5 relative flex flex-col mt-12 md:mt-0">
            {/* Circular Text Badge - မိုဘိုင်းတွင် နေရာအနည်းငယ်ရွှေ့ထားသည် */}
            <div className="absolute -top-16 -right-4 md:-top-24 md:-left-24 z-10 w-36 h-36 md:w-48 md:h-48 rounded-full flex flex-col items-center justify-center pointer-events-none">
              <svg
                viewBox="0 0 100 100"
                className="absolute inset-0 w-full h-full animate-[spin_20s_linear_infinite]">
                <defs>
                  <path
                    id="circlePath"
                    d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
                  />
                </defs>
                <text
                  fontSize="8.5"
                  fill="black"
                  letterSpacing="4.5"
                  className="uppercase font-medium">
                  <textPath href="#circlePath" startOffset="0%">
                    Voted the best bakery in the city •
                  </textPath>
                </text>
              </svg>
              <div className="flex flex-col items-center justify-center text-center mt-2 bg-white/50 backdrop-blur-sm rounded-full p-3 md:p-4">
                <div className="border border-black rounded-lg p-1 md:p-1.5 mb-1 bg-white">
                  <svg
                    className="w-3 h-3 md:w-4 md:h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                  </svg>
                </div>
                <span className="text-xl md:text-[1.7rem] font-light tracking-tight text-black">
                  2025
                </span>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative w-full h-[350px] md:h-[550px] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden mb-6">
              <Image
                src="https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&w=800&q=80"
                alt="Fresh Crusty Bread"
                fill
                className="object-cover"
              />
            </div>

            <p className="text-lg md:text-xl font-medium text-black leading-snug">
              Naturally fermented dough, with everything made fresh daily.
            </p>
          </div>
        </section>

        {/* Featured Menu Section (အသစ်ထည့်သွင်းထားသော အပိုင်း) */}
        <section className="mb-32">
          {/* Section Header & Button */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest mb-4">
                Our Favorites
              </p>
              <h2 className="text-4xl md:text-5xl font-medium tracking uppercase leading-tight">
                Taste the best
              </h2>
            </div>
            {/* See All Button */}
            <Link
              href="/menu"
              className="inline-flex border border-black rounded-[2rem] px-8 py-2.5 text-sm font-semibold hover:bg-black hover:text-white transition-all duration-300 whitespace-nowrap">
              See all menu
            </Link>
          </div>

          {/* Menu Grid - Responsive Grid သုံးထားပါသည် */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
            {featuredMenu.map((item: MenuItem) => (
              <Link
                href="/menu"
                key={item.id}
                className="flex flex-col group cursor-pointer">
                {/* Image Container with Hover effect */}
                <div className="bg-[#ebebeb] w-full mb-4 flex items-center justify-center relative overflow-hidden aspect-[47/57]">
                  <Image
                    src={item.imageUrl}
                    alt={item.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className={`object-cover bg-white transition-opacity duration-300 ease-in-out ${
                      item.hoverImageUrl ? "group-hover:opacity-0" : ""
                    }`}
                  />
                  {item.hoverImageUrl && (
                    <Image
                      src={item.hoverImageUrl}
                      alt={`${item.name} active`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      className="object-cover bg-white absolute inset-0 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
                    />
                  )}
                </div>
                {/* Details */}
                <h3 className="text-xl font-semibold mb-1">{item.name}</h3>
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-3">
                  {item.description}
                </p>
              </Link>
            ))}
          </div>
        </section>

        <ServicesSection />

        {/* We Aim To Serve Well Section (Responsive ပြင်ဆင်ချက်) */}
        <section className="mb-24">
          {/* Float အစား Flexbox အသုံးပြု၍ Responsive ပြုလုပ်ထားပါသည် */}
          <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-16">
            {/* Left Column */}
            <div className="lg:w-5/12">
              <p className="text-xs font-bold uppercase tracking-widest mb-4">
                How we do it
              </p>
              <h2 className="text-4xl md:text-5xl font-medium tracking uppercase mb-6 leading-tight">
                We aim to serve well
              </h2>
              <p className="text-lg md:text-xl text-balance text-gray-500 leading-relaxed font-medium">
                With 15 years in the market, offering the best products, from
                local suppliers of the highest quality, we are the company with
                the largest presence in the area.
              </p>
            </div>

            {/* Right Column */}
            <div className="lg:w-6/12 flex flex-col sm:flex-row gap-8 lg:mt-70">
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-3 text-black">
                  Corporate events
                </h3>
                <p className="text-base md:text-lg text-balance text-gray-500 leading-relaxed font-medium">
                  With a vast and affordable menu, we provide teams to cover
                  your event, with a variety of foods that will please everyone.
                </p>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-3 text-black">
                  Smart celebrations
                </h3>
                <p className="text-base md:text-lg text-balance text-gray-500 leading-relaxed font-medium">
                  Smart menu with the main tastings of our products to surprise
                  your intimate event and your guests.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom Image Section */}
        <section className="w-full h-[300px] md:h-[600px] relative rounded-[2rem] overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1600&q=80"
            alt="Bakery Shelves full of bread"
            fill
            className="object-cover"
          />
        </section>

        <AboutSection />
        <TeamSection />
        <BehindTheScenesSection />
      </main>
    </div>
  );
}