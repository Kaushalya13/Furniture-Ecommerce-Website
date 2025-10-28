"use client";

import ReviewCard from "@/components/ReviewCard";

// Mock review data - you can get this from your database later
const mockReviews = [
  {
    id: 1,
    name: "Emily R.",
    avatarUrl: "https://i.pinimg.com/736x/6c/c5/19/6cc519f013abcf2ad6168a126ee877db.jpg",
    rating: 5,
    title: "Absolutely in love!",
    review: "The minimalist sofa is the perfect centerpiece for my living room. The quality is outstanding, and it's even more comfortable than I expected. Delivery was seamless."
  },
  {
    id: 2,
    name: "Michael B.",
    avatarUrl: "https://i.pinimg.com/736x/00/1d/78/001d782d1ceca1321e02fd75f842517b.jpg",
    rating: 5,
    title: "Worth every penny.",
    review: "I bought the Modern Oak Chairs, and they are stunning. Solid wood, beautiful design, and very sturdy. They completely transformed my dining area."
  },
  {
    id: 3,
    name: "Sarah K.",
    avatarUrl: "https://i.pinimg.com/736x/e9/c5/1a/e9c51a0a6819c3b0032b44c46fd199b0.jpg",
    rating: 4,
    title: "Great quality, slight delay",
    review: "The Walnut Bookshelf is beautiful and was easy to assemble. My only issue was a 2-day shipping delay, but customer service was very helpful."
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="bg-gray-50 py-16 lg:py-24">
      <div className="container mx-auto max-w-6xl px-6">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-lora text-4xl lg:text-5xl font-bold text-gray-900">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600 mt-2">
            Real reviews from happy homeowners.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockReviews.map((review) => (
            <ReviewCard
              key={review.id}
              name={review.name}
              avatarUrl={review.avatarUrl}
              rating={review.rating}
              title={review.title}
              review={review.review}
            />
          ))}
        </div>

      </div>
    </section>
  );
}