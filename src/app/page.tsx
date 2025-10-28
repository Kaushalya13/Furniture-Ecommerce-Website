import Navbar from "@/sections/Navbar";

import Hero from "@/sections/Hero";
import Shop from "@/sections/Shop";
import Categories from "@/sections/Categories";
import About from "@/sections/AboutUs";
import { Suspense } from 'react';
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";
import Reviews from "@/sections/Reviews";


// A simple loading component
function LoadingFallback() {
  return <div className="pt-24 h-screen w-full text-center">Loading products...</div>;
}

export default function Home() {
  return (
    <>
    <Navbar />
    <Hero />
    <Shop />
    <Categories />
    <About />
    <Reviews />
    <Contact />
    <Footer />
    </>
  );
}
