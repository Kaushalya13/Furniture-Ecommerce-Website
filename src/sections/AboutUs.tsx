"use client";

import Image from "next/image";
import { FiAward, FiEye, FiHeart } from "react-icons/fi";

// A reusable component for "Our Values"
const ValueCard = ({ icon, title, text }: { icon: React.ReactNode, title: string, text: string }) => (
  <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg transition-transform hover:scale-105">
    <div className="p-4 bg-amber-400 rounded-full text-white mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600">{text}</p>
  </div>
);

export default function About() {
  return (
    <div id="about" className="bg-gray-50 pt-24 lg:pt-28">
      {/* Section 1: Hero / Our Story */}
      <div className="relative h-[400px] lg:h-[500px] flex items-center justify-center text-center text-white px-6">
        {/* Background Image */}
        <Image
          src="https://i.pinimg.com/1200x/7d/8d/4b/7d8d4b41c5e04706d0326a8e2863cd81.jpg"
          alt="Stylish interior design workspace"
          layout="fill"
          objectFit="cover"
          className="brightness-50" // Darken image
        />
        {/* Content */}
        <div className="relative z-10">
          <h1 className="font-lora text-5xl md:text-7xl font-bold drop-shadow-xl">
            Our Story
          </h1>
          <p className="text-xl md:text-2xl mt-4 max-w-2xl mx-auto font-light drop-shadow-lg">
            From a small workshop to a curated home experience, FurniSpace was
            built on a passion for timeless design.
          </p>
        </div>
      </div>

      {/* Section 2: Mission Statement */}
      <div className="container mx-auto max-w-6xl px-6 py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Text Content */}
          <div className="lg:w-1/2">
            <h2 className="font-lora text-4xl font-bold text-gray-900 mb-6">
              Who We Are
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Welcome to <b>FurniSpace</b>. We believe that furniture is more
              than just functional; it's the heart of your home, a reflection of
              your style, and the backdrop to your life's best moments.
            </p>
            <p className="text-lg text-gray-700">
              Our mission is to bring you a curated collection of furniture that
              blends modern elegance with timeless quality. We source the best
              materials and partner with skilled artisans to create pieces that
              are both beautiful and built to last.
            </p>
          </div>
          {/* Image */}
          <div className="w-80 h-80 lg:h-96 rounded-lg shadow-xl overflow-hidden">
            <Image
              src="https://i.pinimg.com/1200x/79/b5/58/79b55832345a7282610b1c7f0266c750.jpg"
              alt="Craftsmen working on furniture"
              width={600}
              height={400}
              objectFit="cover"
              className="w-80 h-80 lg:h-96"
            />
          </div>
        </div>
      </div>

      {/* Section 3: Our Values */}
      <div className="bg-white">
        <div className="container mx-auto max-w-6xl px-6 py-16 lg:py-24 text-center">
          <h2 className="font-lora text-4xl font-bold text-gray-900 mb-12">
            What We Stand For
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
            <ValueCard
              icon={<FiAward size={28} />}
              title="Unmatched Quality"
              text="We prioritize durability and craftsmanship, ensuring every piece lasts for generations."
            />
            <ValueCard
              icon={<FiEye size={28} />}
              title="Timeless Design"
              text="Our collections are curated to be both modern and classic, transcending fleeting trends."
            />
            <ValueCard
              icon={<FiHeart size={28} />}
              title="Customer Focus"
              text="Your satisfaction is our top priority, from browsing to delivery and beyond."
            />
          </div>
        </div>
      </div>
    </div>
  );
}