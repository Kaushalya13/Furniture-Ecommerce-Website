"use client";

import Image from "next/image";
import { motion , Variants } from "framer-motion";
import { FiChevronsDown } from "react-icons/fi";


const bounceArrow: Variants = {
  animate: {
    y: [0, 10, 0], // Move 10px down and back up
    transition: {
      duration: 1.5,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};

export default function Hero() {
    const heroPoster = "https://i.pinimg.com/1200x/0f/b4/17/0fb417041b738cd0acb118755ae06954.jpg";
    const heroVideo = "/videos/hero.mp4";

  return (
    <section
      id="home"
      className="relative h-screen flex flex-col items-center justify-center text-white overflow-hidden"
    >

        {/* Background Video Element */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster={heroPoster}
          className="w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
          <Image src={heroPoster} alt="Lush waterfall in a forest" layout="fill" objectFit="cover" />
        </video>

        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>


    {/* Content */}
    <div
    className="relative z-10 text-center container mx-auto px-4 pt-40 sm:pt-32 pb-10"
    >
    <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="font-lora text-5xl md:text-8xl font-extrabold leading-tight text-white drop-shadow-xl"
    >
        Elevate Your Home with <span className="text-amber-400">Elegant</span> &{" "}
        <span className="text-amber-400">Timeless</span> Furniture
    </motion.h1>

    <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, duration: 0.8 }}
        className="mt-6 text-xl md:text-3xl font-light text-white max-w-4xl mx-auto drop-shadow-lg"
    >
        Explore our curated collection of modern and classic furniture pieces that
        blend comfort, style, and quality craftsmanship. Perfect for every room
        in your home.
    </motion.p>

    <div className="mt-10 flex justify-center gap-4">
        <button className="px-8 py-3 rounded-full bg-amber-400 text-white font-semibold transition-all duration-300 shadow-md">
        Shop Now
        </button>
        <button className="px-8 py-3 rounded-full border-2 border-amber-400 text-amber-400 font-semibold transition-all duration-300">
        Explore Collection
        </button>
    </div>
    </div>

      {/* Scroll Down Arrow with Animation */}
      <motion.div
        className="absolute bottom-10 z-20 cursor-pointer"
      >
        <a href="#explore" aria-label="Scroll down to discover more">
          <motion.div
            variants={bounceArrow}
            animate="animate"
            className="p-3  hover:border-earthy-brown transition-colors duration-300"
          >
            {/* CHANGED ICON HERE */}
            <FiChevronsDown className="text-3xl text-white relative drop-shadow-lg" />
          </motion.div>
        </a>
      </motion.div>

    </section>
  );
}
