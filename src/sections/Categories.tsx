"use client";

import CategoryCard from "@/components/CategoryCard";
const mockCategories = [
  { 
    id: 1, 
    name: "Sofas", 
    href: "#ShopCard", // <-- UPDATED
    imageUrl: "https://i.pinimg.com/1200x/58/68/9f/58689ff8068023795f5e6aa2c7cdd20b.jpg" 
  },
  { 
    id: 2, 
    name: "Chairs", 
    href: "/shop?category=Chairs", // <-- UPDATED
    imageUrl: "https://i.pinimg.com/1200x/58/68/9f/58689ff8068023795f5e6aa2c7cdd20b.jpg" 
  },
  { 
    id: 3, 
    name: "Tables", 
    href: "/shop?category=Tables", // <-- UPDATED
    imageUrl: "https://i.pinimg.com/1200x/58/68/9f/58689ff8068023795f5e6aa2c7cdd20b.jpg" 
  },
  { 
    id: 4, 
    name: "Beds", 
    href: "/shop?category=Beds", // <-- UPDATED
    imageUrl: "https://i.pinimg.com/1200x/58/68/9f/58689ff8068023795f5e6aa2c7cdd20b.jpg" 
  },
  { 
    id: 5, 
    name: "Storage", 
    href: "/shop?category=Storage", // <-- UPDATED
    imageUrl: "https://i.pinimg.com/1200x/58/68/9f/58689ff8068023795f5e6aa2c7cdd20b.jpg" 
  },
  { 
    id: 6, 
    name: "Lighting", 
    href: "/shop?category=Lighting", // <-- UPDATED
    imageUrl: "https://i.pinimg.com/1200x/58/68/9f/58689ff8068023795f5e6aa2c7cdd20b.jpg" 
  },
];

export default function Categories() {
  return (
    // Add padding-top to account for the fixed navbar
    <div id="categories" className=" pt-24 lg:pt-28">
      <div className="container mx-auto max-w-6xl px-6 py-12">
        
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="font-lora text-5xl font-bold text-gray-900">Shop by Category</h1>
          <p className="text-lg text-gray-600 mt-2">
            Discover our collections by browsing through the categories below.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockCategories.map((category) => (
            <CategoryCard
              key={category.id}
              name={category.name}
              imageUrl={category.imageUrl}
              href={category.href}
            />
          ))}
        </div>

      </div>
    </div>
  );
}