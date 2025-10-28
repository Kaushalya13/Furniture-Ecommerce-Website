"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

type CategoryCardProps = {
  name: string;
  imageUrl: string;
  href: string;
};

const CategoryCard = ({ name, imageUrl, href }: CategoryCardProps) => {
  return (
    <Link href={href} passHref>
      <motion.div
        className="relative group h-80 w-full overflow-hidden rounded-lg shadow-xl cursor-pointer"
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {/* Background Image */}
        <Image
          src={imageUrl}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-500 ease-in-out group-hover:scale-110"
        />
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
          {/* We use font-lora here for an elegant heading */}
          <h3 className="font-lora text-4xl font-bold text-white drop-shadow-lg">
            {name}
          </h3>
          <div className="mt-4 flex items-center text-amber-400 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
            <span className="text-lg font-semibold">Shop Now</span>
            <FiArrowRight className="ml-2" size={20} />
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default CategoryCard;