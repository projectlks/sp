"use client"; // Click နှိပ်၍ Video ဖွင့်ရန်အတွက် Client Component အဖြစ် ကြေညာခြင်း

import React, { useState } from "react";
import Image from "next/image";

export default function BehindTheScenesSection(): React.JSX.Element {
  // Video ဖွင့်ထားခြင်း ရှိ/မရှိ သိမ်းဆည်းရန် State (any မသုံးထားပါ)
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  return (
    <section className="mb-32">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row justify-between items-end mb-12 gap-6">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-widest mb-4">
            The Process
          </p>
          <h2 className="text-4xl md:text-5xl font-medium tracking uppercase leading-tight mb-4">
            Behind the Scenes
          </h2>
          <p className="text-lg md:text-xl text-gray-500 leading-relaxed font-medium">
            Take a look at our baking process and see how we create our
            delicious treats.
          </p>
        </div>
      </div>

      {/* Video / Thumbnail Container */}
      <div className="relative w-full h-[400px] md:h-[600px] rounded-[2.5rem] overflow-hidden bg-stone-900 group">
        {/* isPlaying State က False ဖြစ်နေလျှင် Thumbnail ပုံနှင့် Play Button ပြမည် */}
        {!isPlaying ? (
          <>
            <Image
              src="https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?auto=format&fit=crop&w=1600&q=80"
              alt="Baking Process Thumbnail"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Play Button Overlay */}
            <div
              className="absolute inset-0 bg-black/30 flex items-center justify-center transition-colors duration-300 group-hover:bg-black/20 cursor-pointer"
              onClick={() => setIsPlaying(true)} // နှိပ်လိုက်လျှင် Video ဖွင့်မည်
            >
              <div className="w-20 h-20 md:w-28 md:h-28 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50 shadow-lg transform transition-transform group-hover:scale-110">
                <svg
                  className="w-8 h-8 md:w-12 md:h-12 text-white ml-2"
                  fill="currentColor"
                  viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </>
        ) : (
          /* Play Button နှိပ်လိုက်ပါက တကယ့် Video ထွက်လာမည် */
          <video
            src="/bts-video.mp4" /* ဤနေရာတွင် သင်၏ Video လမ်းကြောင်းကို ပြင်ဆင်ထည့်သွင်းပါ */
            autoPlay
            controls
            className="w-full h-full object-cover rounded-[2.5rem]">
            Your browser does not support the video tag.
          </video>
        )}
      </div>
    </section>
  );
}
