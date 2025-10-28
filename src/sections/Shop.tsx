"use client";

import ProductCard from "@/components/ProductCard";
import { useSearchParams } from "next/navigation"; // 2. Import hook to read URL
import Link from "next/link";

// 3. Add descriptions to your products
const allProducts = [
  { id: 1, name: "Modern Oak Chair", category: "Chairs", price: 180.00, imageUrl: "https://i.pinimg.com/1200x/58/68/9f/58689ff8068023795f5e6aa2c7cdd20b.jpg", description: "Elegant chair with solid oak legs." },
  { id: 2, name: "Minimalist Sofa", category: "Sofas", price: 750.00, imageUrl: "https://i.pinimg.com/1200x/f7/84/9b/f7849bb28cbaf6fa83618fa50c18b513.jpg", description: "A 3-seater sofa for modern living." },
  { id: 3, name: "Glass Coffee Table", category: "Tables", price: 220.00, imageUrl: "https://i.pinimg.com/736x/1d/8a/f8/1d8af802a0beb74c628a3736b5cb4ebc.jpg", description: "Tempered glass top, steel frame." },
  { id: 4, name: "King Size Bed Frame", category: "Beds", price: 600.00, imageUrl: "https://i.pinimg.com/736x/05/cd/86/05cd86055960a6118316a7ffc4c1cefd.jpg", description: "Plush velvet headboard, pine wood." },
  { id: 5, name: "Walnut Bookshelf", category: "Storage", price: 340.00, imageUrl: "https://i.pinimg.com/736x/2e/0a/09/2e0a096d8044ee28a274c52fdabfc499.jpg", description: "5-tier shelf for books and decor." },
  { id: 6, name: "L-Shaped Desk", category: "Desks", price: 410.00, imageUrl: "https://i.pinimg.com/736x/f4/40/42/f4404225d3b2e1408580c09361d1d9eb.jpg", description: "Spacious desk for your home office." },

];

export default function Shop() {
  // 4. Read the category from the URL
  const searchParams = useSearchParams();
  const categoryFilter = searchParams.get('category');

  // 5. Filter the products
  const filteredProducts = categoryFilter
    ? allProducts.filter(product => product.category === categoryFilter)
    : allProducts; // If no category, show all

  // 6. Set a dynamic page title
  const pageTitle = categoryFilter ? `${categoryFilter}` : "Our Collection";

  return (
    <div id="shop" className="bg-gray-50 pt-24 lg:pt-28">
      <div className="container mx-auto max-w-6xl px-6 py-12">
        {/* Header - Now uses the dynamic title */}
        <div className="text-center mb-12">
          <h1 className="font-lora text-5xl font-bold text-gray-900">{pageTitle}</h1>
          <p className="text-lg text-gray-600 mt-2">
            {categoryFilter
              ? `Browse all ${categoryFilter.toLowerCase()} in our collection.`
              : "Find the perfect pieces to complete your home."
            }
          </p>
        </div>

        {/* Main Content: Filters + Products */}
        <div className="flex flex-col lg:flex-row gap-10">
          
          {/* Product Grid */}
          <main className="w-full lg:w-3/1"> {/* 8. Adjust width */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {/* 9. Map over FILTERED products */}
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  name={product.name}
                  category={product.category}
                  price={product.price}
                  imageUrl={product.imageUrl}
                  description={product.description} // 10. Pass description
                />
              ))}
            </div>

            {/* 11. Show a message if no products match */}
            {filteredProducts.length === 0 && (
              <div className="text-center py-20 bg-white rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-800">No Products Found</h3>
                <p className="text-gray-600 mt-2">Sorry, we don't have any products in the "{categoryFilter}" category right now.</p>
                <Link href="/shop" className="mt-4 inline-block text-amber-500 hover:underline font-semibold">
                  View All Products
                </Link>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}