"use client";
import React, { useState } from "react";
import { flushSync } from "react-dom"; // ထပ်မံထည့်သွင်းရန်
import Image from "next/image";
import EnterpriseSelect from "@/components/EnterpriseSelect";

// သုံးမယ့် Data type များကို သေချာ ကြေညာခြင်း
interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  imageUrl: string;
  hoverImageUrl?: string;
  category: string;
}

const menuItems: MenuItem[] = [
  {
    id: "1",
    name: "BUTTER CROISSANT",
    description: "Freshly Baked • Buttery • Flaky Layers",
    price: "$4.90",
    imageUrl: "/placeholder.jpg",
    hoverImageUrl: "/hover.jpg",
    category: "danish",
  },
  {
    id: "2",
    name: "GOLDEN BUTTER TOAST",
    description: "Thick-cut Toast • Creamy Butter",
    price: "$5.20",
    imageUrl: "/placeholder.jpg",
    hoverImageUrl: "/hover.jpg",
    category: "bread",
  },
  {
    id: "3",
    name: "CLASSIC PRETZEL",
    description: "Hand-twisted • Sea salt • Oven Baked",
    price: "$4.80",
    imageUrl: "/placeholder.jpg",
    hoverImageUrl: "/hover.jpg",
    category: "bread",
  },
  {
    id: "4",
    name: "PORTUGUESE EGG TART",
    description: "Crispy pastry • Rich egg custard",
    price: "$5.90",
    imageUrl: "/placeholder.jpg",
    category: "danish",
  },
  {
    id: "5",
    name: "BLUEBERRY CHEESECAKE",
    description: "Cream cheese • Blueberry topping",
    price: "$7.90",
    imageUrl: "/placeholder.jpg",
    category: "cake_and_treats",
  },
  {
    id: "6",
    name: "BLACK FOREST CAKE",
    description: "Chocolate sponge • Cherry filling",
    price: "$8.50",
    imageUrl: "/placeholder.jpg",
    category: "cake_and_treats",
  },
  {
    id: "7",
    name: "CINNAMON ROLL",
    description: "Brown sugar • Cinnamon swirl",
    price: "$6.90",
    imageUrl: "/placeholder.jpg",
    category: "danish",
  },
  {
    id: "8",
    name: "FRENCH BRIOCHE",
    description: "Rich butter • Soft texture • Lightly sweet",
    price: "$5.50",
    imageUrl: "/placeholder.jpg",
    category: "bread",
  },
  {
    id: "9",
    name: "BELGIAN WAFFLES",
    description: "Crispy outside • Soft inside • Golden baked",
    price: "$8.90",
    imageUrl: "/placeholder.jpg",
    category: "cake_and_treats",
  },
  {
    id: "10",
    name: "MAPLE PANCAKE STACK",
    description: "Fluffy pancakes • Maple syrup • Butter",
    price: "$9.90",
    imageUrl: "/placeholder.jpg",
    category: "cake_and_treats",
  },
  {
    id: "11",
    name: "CHICKEN SANDWICH",
    description: "Chicken • Lettuce • Tomato • Cheese",
    price: "$10.90",
    imageUrl: "/placeholder.jpg",
    category: "bread",
  },
  {
    id: "12",
    name: "CLASSIC BEEF BURGER",
    description: "Angus beef • Cheddar • Fresh vegetables",
    price: "$13.90",
    imageUrl: "/placeholder.jpg",
    category: "bread",
  },
];

const menuCategoryOptions = [
  { value: "all", label: "All Menu" },
  { value: "cookies", label: "Cookies" },
  { value: "bread", label: "Bread" },
  { value: "ice_cream", label: "Ice Cream" },
  { value: "cake_and_treats", label: "Cake and Treats" },
  { value: "danish", label: "Danish" },
  { value: "hot_and_cold_beverages", label: "Hot and Cold Beverages" },
  { value: "birthday_cake", label: "Birthday Cake" },
];

export default function MenuPage(): React.JSX.Element {
  const [department, setDepartment] = useState("all");

  // View Transition ဖြင့် State ကိုပြောင်းမည့် Function
  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = e.target.value;

    // Browser က View Transition ကို ထောက်ပံ့မှု မရှိပါက ပုံမှန်အတိုင်း ပြောင်းမည်
    if (!document.startViewTransition) {
      setDepartment(newValue);
      return;
    }

    // ထောက်ပံ့မှု ရှိပါက View Transition ဖြင့် ပြောင်းမည်
    document.startViewTransition(() => {
      flushSync(() => {
        setDepartment(newValue);
      });
    });
  };

  const filteredMenuItems = menuItems.filter((item: MenuItem) => {
    if (department === "all") return true;
    return item.category === department;
  });

  return (
    <div className="min-h-screen text-gray-900 font-sans selection:bg-black selection:text-white">
      <main className="px-8 pb-16">
        <header className="flex justify-between items-end mb-24">
          <div className="flex items-baseline gap-4">
            <h1 className="text-8xl tracking-tight">Menu</h1>
            <span className="text-xl text-gray-500 tracking-widest">
              ( {filteredMenuItems.length.toString().padStart(2, "0")} )
            </span>
          </div>

          {/* <div className="flex gap-30 text-sm">
            <div className="text-left">
              <p className="font-semibold ">Hours:</p>
              <p>Mon - Sun</p>
              <p>11:30am - 09:00pm</p>
            </div>
            <div className="text-right">
              <p className="font-semibold">Social:</p>
              <p>@hasbar.uk</p>
              <p>hasbar.uk@gmail.com</p>
            </div>
          </div> */}

          <div className="flex gap-30 text-sm">
            <div className="text-left">
              <p className="font-semibold">Store Hours:</p>
              <p>Mon - Sun</p>
              <p>Varies by location</p>
            </div>
            <div className="text-right">
              <p className="font-semibold">Social:</p>
              <p>@spbakerymm</p>
              <p>info@spbakery.com.mm</p>
            </div>
          </div>
        </header>

        <div className="flex justify-end-safe">
          <EnterpriseSelect
            options={menuCategoryOptions}
            value={department}
            onChange={handleCategoryChange} // ဒီနေရာမှာ Function အသစ်ကို ချိတ်ဆက်ထားသည်
          />
        </div>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
          {filteredMenuItems.map((item: MenuItem) => (
            <article
              key={item.id}
              className="flex flex-col group cursor-pointer"
              // Item တစ်ခုချင်းစီအတွက် သီးသန့် View Transition Name ထည့်သွင်းခြင်း
              style={{ viewTransitionName: `menu-item-${item.id}` }}>
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

              <h2 className="text-xl font-semibold mb-1">{item.name}</h2>
              <p className="text-xs text-gray-500 uppercase tracking-widest mb-3">
                {item.description}
              </p>
            </article>
          ))}

          {filteredMenuItems.length === 0 && (
            <div className="col-span-full text-center py-12 text-gray-500">
              No items available in this category at the moment
            </div>
          )}
        </section>
      </main>

     
    </div>
  );
}
