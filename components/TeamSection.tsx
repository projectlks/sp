import React from "react";
import Image from "next/image";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  imageUrl: string;
}

const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Zaw Lin Oo",
    role: "Master Baker",
    imageUrl: "/ZLO.avif",
  },
  {
    id: "2",
    name: "Nyunt Lwin",
    role: "Head Chef",
    imageUrl: "/NL.avif",
  },
  {
    id: "3",
    name: "Khin Mar Oo",
    role: "Pastry Specialist",
    imageUrl: "/KMO.avif",
  },
];

export default function TeamSection(): React.JSX.Element {
  return (
    <section className="mb-32">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <p className="text-xs font-bold uppercase tracking-widest mb-4">
          The Masters
        </p>
        <h2 className="text-4xl md:text-5xl font-medium tracking uppercase leading-tight mb-6">
          Our Team
        </h2>
        <p className="text-lg md:text-xl text-gray-500 leading-relaxed font-medium">
          Our skilled and passionate team of bakers and chefs work tirelessly to
          create the finest baked goods and culinary delights. Committed to
          quality, innovation, and customer satisfaction, our team combines
          expertise with creativity to ensure every product reflects the high
          standards of SP Bakery.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
        {teamMembers.map((member: TeamMember) => (
          <div
            key={member.id}
            className="flex flex-col items-center group text-center">
            <div className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden mb-6">
              <Image
                src={member.imageUrl}
                alt={member.name}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <h3 className="text-2xl font-bold uppercase tracking-wide mb-1">
              {member.name}
            </h3>
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest">
              {member.role}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
