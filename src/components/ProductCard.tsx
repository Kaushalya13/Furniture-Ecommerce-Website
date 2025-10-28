"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FiShoppingCart } from "react-icons/fi";

type ProductCardProps = {
  imageUrl: string;
  category: string;
  name: string;
  description: string; // <-- ADDED
  price: number;
};

const ProductCard = ({ imageUrl, category, name, description, price }: ProductCardProps) => {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-lg shadow-lg bg-white flex flex-col"
      whileHover={{ y: -5 }} 
      transition={{ duration: 0.3 }}
    >
      <div className="relative w-full h-64">
        <Image
          src={imageUrl}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 group-hover:scale-105 rounded-t-lg"
        />
      </div>
      <div className="p-4 flex flex-col grow">
        <span className="text-sm text-gray-500">{category}</span>
        <h3 className="text-lg font-semibold text-gray-900 mt-1 truncate">{name}</h3>
        
        {/* ADDED DESCRIPTION */}
        <p className="text-sm text-gray-600 mt-2 grow">
          {description}
        </p>
        
        <div className="flex justify-between items-center mt-3 pt-3 border-t">
          <span className="text-xl font-bold text-gray-900">${price.toFixed(2)}</span>
          <button className="p-2 rounded-full bg-amber-400 text-white shadow-md transition-colors duration-300 hover:bg-amber-500">
            <FiShoppingCart size={20} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;