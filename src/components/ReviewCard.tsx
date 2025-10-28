"use client";

import Image from "next/image";
import { FiStar } from "react-icons/fi";
import { motion } from "framer-motion";

type ReviewCardProps = {
  name: string;
  avatarUrl: string;
  rating: number; // Rating out of 5
  title: string;
  review: string;
};

// A helper component to render stars
const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-1 text-amber-400">
      {[...Array(5)].map((_, index) => (
        <FiStar
          key={index}
          className={index < rating ? "fill-current" : "text-gray-300"}
          size={20}
        />
      ))}
    </div>
  );
};

const ReviewCard = ({ name, avatarUrl, rating, title, review }: ReviewCardProps) => {
  return (
    <motion.div
      className="flex h-full flex-col justify-between rounded-lg bg-white p-6 shadow-lg"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div>
        <StarRating rating={rating} />
        <h4 className="mt-4 text-xl font-semibold text-gray-900">{title}</h4>
        <p className="mt-2 text-gray-600">{review}</p>
      </div>

      <div className="mt-6 flex items-center gap-4 border-t border-gray-100 pt-6">
        <div className="relative h-12 w-12 overflow-hidden rounded-full">
          <Image
            src={avatarUrl}
            alt={name}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div>
          <h5 className="text-base font-semibold text-gray-800">{name}</h5>
          <span className="text-sm text-gray-500">Verified Customer</span>
        </div>
      </div>
    </motion.div>
  );
};

export default ReviewCard;