"use client";

import { CartProvider } from "@/components/CartContext";
import CartDrawer from "@/components/CartDrawer";
import CartButton from "@/components/CartButton";
import ProductCard from "@/components/ProductCard";

// 3. Add descriptions to your products
const allProducts = [
  { id: 1, name: "Modern Oak Chair", category: "Chairs", price: 180.00, imageUrl: "/images/Chair.jpeg", description: "Elegant chair with solid oak legs." },
  { id: 2, name: "Minimalist Sofa", category: "Sofas", price: 750.00, imageUrl: "/images/Sofa.jpeg", description: "A 3-seater sofa for modern living." },
  { id: 3, name: "Glass Coffee Table", category: "Tables", price: 220.00, imageUrl: "/images/CoffeeTable.jpeg", description: "Tempered glass top, steel frame." },
  { id: 4, name: "King Size Bed Frame", category: "Beds", price: 600.00, imageUrl: "/images/bed.jpeg", description: "Plush velvet headboard, pine wood." },
  { id: 5, name: "Walnut Bookshelf", category: "Storage", price: 340.00, imageUrl: "/images/Bookshelf.jpeg", description: "5-tier shelf for books and decor." },
  { id: 6, name: "L-Shaped Desk", category: "Desks", price: 410.00, imageUrl: "/images/desk.jpeg", description: "Spacious desk for your home office." },

];

export default function ShopPage() {
  return (
    <CartProvider>
      {/* Your normal shop layout */}
      <div id="shop" className="bg-gray-50 pt-24 lg:pt-28">
        <div className="container mx-auto max-w-6xl px-6 py-12">
          <div className="text-center mb-12">
            <h1 className="font-lora text-5xl font-bold text-gray-900">Our Collection</h1>
            <p className="text-lg text-gray-600 mt-2">Find the perfect pieces to complete your home.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {allProducts.map((p) => (
              <ProductCard
                key={p.id}
                id={p.id}
                name={p.name}
                category={p.category}
                price={p.price}
                imageUrl={p.imageUrl}
                description={p.description}
              />
            ))}
          </div>
        </div>
      </div>
      <CartDrawer />
      <CartButton />
    </CartProvider>
  );
}