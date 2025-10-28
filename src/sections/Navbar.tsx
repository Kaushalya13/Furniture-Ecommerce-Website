"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiMenu, FiX, FiShoppingCart } from "react-icons/fi";

const simplifiedNavLinks = [
  { label: "Home", href: "#home" },
  { label: "Shop", href: "#shop" },
  { label: "Categories", href: "#categories" },
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#contact" },
];

// ✅ Reusable link component for desktop view
const NavLink = ({ href, label }: { href: string; label: string }) => (
  <a
    href={href}
    key={label}
    className="relative group block uppercase text-sm font-semibold tracking-wider text-white hover:text-earthy-brown transition-colors duration-300"
  >
    {label}
<span className="absolute left-0 bottom-0 h-0.5 w-0 bg-earthy-brown transition-all duration-300 group-hover:w-full"></span>
  </a>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const logoText = "FurniSpace";

  // 🧠 Change navbar background when scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // 🎨 Dynamic header classes based on scroll
  const headerClasses = `
    py-4 lg:py-5 fixed w-full top-0 z-[999] shadow-xl transition-all duration-500
    ${isScrolled ? "bg-[#1a1a1a]" : "bg-black backdrop-blur-sm"}
  `;

  return (
    <div className="z-999">
      <header className={headerClasses}>
        <div className="mx-auto flex w-full max-w-6xl px-6 items-center justify-between">
          {/* 🪑 Logo */}
          <a
            href="#home"
            className="text-3xl font-bold text-white tracking-wider group"
          >
            <span className="text-2xl font-lora text-amber-400 transition-colors duration-300">
              {logoText}
            </span>
          </a>

          {/* 💻 Desktop Navigation */}
          <nav className="hidden lg:flex gap-x-10 font-semibold text-white items-center">
            {simplifiedNavLinks.map((link) => (
              <NavLink href={link.href} label={link.label} key={link.label} />
            ))}

            {/* 🛒 Cart Icon */}
            <a
              href="#cart"
              className="relative text-white hover:text-amber-400 transition-colors duration-300"
            >
              <FiShoppingCart size={22} />
            </a>
          </nav>

          {/* 📱 Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none p-2 text-white"
            >
              {isOpen ? (
                <FiX size={28} className="text-white" />
              ) : (
                <FiMenu size={28} className="text-white" />
              )}
            </button>
          </div>
        </div>

        {/* 📱 Mobile Dropdown Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden lg:hidden bg-black shadow-inner"
            >
              <div className="flex flex-col gap-1 py-4 text-gray-200 w-full">
                {simplifiedNavLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block w-full text-center py-3 hover:bg-amber-400/80 font-lora text-xl font-bold uppercase text-white transition-colors"
                  >
                    {link.label}
                  </a>
                ))}

                <a
                  href="#cart"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center py-3 hover:bg-amber-400/80 font-lora text-xl font-bold uppercase text-white transition-colors"
                >
                  Cart
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </div>
  );
}
