import React from "react";
import Image from "next/image";
import Link from "next/link"; // Link ကို Import လုပ်ထားပါသည်

// Hover ပုံအတွက် hoverImageUrl ကိုပါ Type ထဲတွင် ထည့်သွင်းထားသည်
interface ServiceItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  hoverImageUrl: string;
}

const servicesData: ServiceItem[] = [
  {
    id: "retail",
    title: "Retail Service",
    description:
      "Operating around 30 outlets across Yangon, Mandalay, and Naypyidaw, with more locations opening soon.",
    // Retail ဆိုင်ခန်းနှင့် ဝန်ဆောင်မှုပေးနေပုံများ
    imageUrl:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
    hoverImageUrl:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "distribution",
    title: "Distribution Service",
    description:
      "Supplying products to approximately 3,000 outlets nationwide, ensuring wide market coverage.",
    // ပို့ဆောင်ရေး၊ ထုပ်ပိုးမှုနှင့် ကားဖြင့်သယ်ယူပို့ဆောင်နေပုံများ
    imageUrl:
      "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&w=800&q=80",
    hoverImageUrl:
      "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "catering",
    title: "Catering Service",
    description:
      "Customized catering services for corporate clients, events, airlines, and bus services.",
    // ပွဲလမ်းသဘင် ခင်းကျင်းပြသမှုနှင့် Catering ပုံများ
    imageUrl:
      "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?auto=format&fit=crop&w=800&q=80",
    hoverImageUrl:
      "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=800&q=80",
  },
];

export default function ServicesSection(): React.JSX.Element {
  return (
    <section className="mb-32">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-24 mb-16">
        {/* Title Area */}
        <div className="lg:w-1/2">
          <p className="text-xs font-bold uppercase tracking-widest mb-4">
            What We Do
          </p>
          <h2 className="text-4xl md:text-5xl font-medium tracking uppercase leading-tight">
            Our Services
          </h2>
        </div>

        {/* Main Description */}
        <div className="lg:w-1/2 lg:mt-30">
          <p className="text-lg md:text-xl text-gray-500 leading-relaxed font-medium">
            SP Bakery operates nationwide through three core business units.
            From daily retail needs to nationwide distribution and specialized
            catering, we deliver excellence in every bite.
          </p>
        </div>
      </div>

      {/* Services Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {servicesData.map((service: ServiceItem) => (
          <div key={service.id} className="flex flex-col group h-full">
            {/* Image Container with Hover Effect */}
            <Link
              href={`/services/${service.id}`}
              className="block overflow-hidden rounded-[2rem] mb-6">
              <div className="relative w-full h-[300px] md:h-[400px] bg-gray-100 ">
                {/* Default Image */}
                <Image
                  src={service.imageUrl}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-opacity  ease-in-out group-hover:opacity-0"
                />

                {/* Hover Image */}
                <Image
                  src={service.hoverImageUrl}
                  alt={`${service.title} active`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover absolute inset-0 opacity-0 transition-opacity  ease-in-out group-hover:opacity-100"
                />
              </div>
            </Link>

            {/* Text Details */}
            <div className="flex-grow">
              <h3 className="text-2xl font-bold uppercase tracking-wide mb-3">
                {service.title}
              </h3>
              <p className="text-base text-gray-600 leading-relaxed font-medium mb-6">
                {service.description}
              </p>
            </div>

            {/* View Details Button */}
            <div className="mt-auto">
              <Link
                href={`/services/${service.id}`}
                className="inline-block border border-black rounded-[2rem] px-6 py-2 text-sm font-semibold hover:bg-black hover:text-white transition-all duration-300">
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
