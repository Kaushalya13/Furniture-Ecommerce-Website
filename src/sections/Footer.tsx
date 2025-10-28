"use client";

import Link from "next/link";
import { FiFacebook, FiInstagram, FiTwitter, FiYoutube } from "react-icons/fi";

const footerLinks = [
  { label: "Shop", href: "#shop" },
  { label: "Categories", href: "#categories" },
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: <FiFacebook size={20} />, href: "#" },
  { icon: <FiInstagram size={20} />, href: "#" },
  { icon: <FiTwitter size={20} />, href: "#" },
  { icon: <FiYoutube size={20} />, href: "#" },
];

export default function Footer() {
  const logoText = "FurniSpace";
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1a1a1a] text-gray-300 pt-16 pb-8">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: Brand and About */}
          <div className="md:col-span-2">
            <Link
              href="/"
              className="text-3xl font-bold text-white tracking-wider group mb-4 inline-block"
            >
              <span className="font-lora text-amber-400">
                {logoText}
              </span>
            </Link>
            <p className="text-gray-400 max-w-md">
              Elevating homes with timeless, elegant furniture. Discover pieces
              that blend comfort, style, and quality craftsmanship.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-lora text-xl font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href}
                    className="hover:text-amber-400 transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Social Media */}
          <div>
            <h4 className="font-lora text-xl font-semibold text-white mb-4">
              Follow Us
            </h4>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="p-2 bg-gray-700 rounded-full text-white hover:bg-amber-400 transition-colors duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright */}
        <div className="border-t border-gray-700 pt-8 text-center text-gray-500">
          <p>
            &copy; {currentYear} {logoText}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}