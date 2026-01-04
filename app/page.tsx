"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";
import Image from "next/image";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";


import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = (category: string) => {
    if (openDropdown === category) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(category);
    }
  };

  const handleMainCategoryClick = (category: string, hasDropdown: boolean) => {
    if (hasDropdown) {
      toggleDropdown(category);
    } else {
      setSelectedCategory(category);
      setOpenDropdown(null);
    }
  };

  const handleSubCategoryClick = (item: string) => {
    setSelectedCategory(item);
    setOpenDropdown(null);
  };

  const categories = [
    { name: "All", hasDropdown: false },
    {
      name: "Pashmina",
      hasDropdown: true,
      items: ["Pashmina Ceruty", "Pashmina Kaos", "Pashmina Voal", "Pashmina Viscose"]
    },
    {
      name: "Triangle",
      hasDropdown: true,
      items: ["Paris Premium", "Hijab Voal"]
    },
  ];

  const featuredProducts = [
    { name: "Paris Premium", price: 50000, image: "/paris-premium.png", category: "Triangle" },
    { name: "Hijab Voal", price: 55000, image: "/hijab-voal.png", category: "Triangle" },
    { name: "Pashmina Ceruty", price: 60000, image: "/pashmina ceruty.png", category: "Pashmina" },
    { name: "Pashmina Kaos", price: 50000, image: "/pashmina kaos.png", category: "Pashmina" },
    { name: "Pashmina Voal", price: 60000, image: "/pashmina voal.png", category: "Pashmina" },
    { name: "Pashmina Viscose", price: 78000, image: "/pashmina viscose.png", category: "Pashmina" },
  ];

  const filteredProducts = featuredProducts.filter((product) => {
    if (selectedCategory === "All") return true;
    return product.category === selectedCategory || product.name === selectedCategory;
  });

  return (
    <div className="bg-[#FDFBF7] min-h-screen">
      <Navbar />
      <Hero />

      <main>
        {/* Back to School Promo */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 max-w-4xl mx-auto group">
              {/* Image Container with fixed aspect ratio */}
              <div className="relative aspect-[4/5] sm:aspect-[21/9] w-full">
                <Image
                  src="/back-to-school.png"
                  alt="Back to School Collection"
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-105"
                  priority
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-black/40 sm:from-black/20 via-transparent to-black/20 group-hover:from-black/30 group-hover:to-black/30 transition-colors duration-500" />

                {/* Shine Effect */}
                <div className="absolute inset-0 -translate-x-[150%] skew-x-12 group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                {/* Content Overlay */}
                <div className="absolute inset-0 z-10 p-6 sm:p-8 flex items-end justify-center sm:justify-start">
                  {/* CTA Button */}
                  <Link href={"/shop"}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-3 bg-white/95 backdrop-blur-xl px-6 sm:px-8 py-3 sm:py-3.5 rounded-full shadow-lg border border-white/50 group-hover:bg-white group-hover:border-primary/30 transition-all duration-300"
                    >
                      <span className="font-serif text-[#4A4A4A] tracking-widest text-xs sm:text-sm uppercase">Shop Now</span>
                      <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                        <ArrowRight size={12} />
                      </div>
                    </motion.div>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </section>


        {/* Categories */}
        <div className="py-12 text-center relative z-20">
          <div className="border-t border-[#D4C4B5] w-24 mx-auto mb-8"></div>
          <h2 className="font-serif text-2xl text-[#4A4A4A] tracking-wider mb-6">Categories</h2>
          <div className="flex flex-wrap justify-center gap-8 text-sm uppercase tracking-widest text-[#8C8C8C] mb-8 px-4" ref={dropdownRef}>
            {categories.map((cat, i) => (
              <div key={cat.name} className="relative inline-block text-left">
                <button
                  onClick={() => handleMainCategoryClick(cat.name, cat.hasDropdown)}
                  className={`flex items-center gap-1 hover:text-primary transition-all duration-300 ${selectedCategory === cat.name || (cat.items && cat.items.includes(selectedCategory)) ? "text-primary border-b border-primary pb-1" : ""}`}
                >
                  {cat.name}
                  {cat.hasDropdown && (
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-300 ${openDropdown === cat.name ? "rotate-180" : ""}`}
                    />
                  )}
                </button>

                {/* Dropdown Menu - Elegant Style */}
                <div
                  className={`absolute left-1/2 -translate-x-1/2 mt-4 w-56 rounded-xl bg-white/90 backdrop-blur-lg shadow-[0_8px_30px_rgb(0,0,0,0.06)] ring-1 ring-black/5 transform transition-all duration-300 origin-top z-50 overflow-hidden ${cat.hasDropdown && openDropdown === cat.name
                    ? "opacity-100 scale-100 translate-y-0 visible"
                    : "opacity-0 scale-95 -translate-y-2 invisible pointer-events-none"
                    }`}
                >
                  <div className="py-2">
                    {cat.items?.map((item) => (
                      <button
                        key={item}
                        onClick={() => handleSubCategoryClick(item)}
                        className={`block w-full px-6 py-3 text-sm text-stone-600 hover:bg-[#F3EFEA] hover:text-[#5D534A] hover:pl-7 transition-all duration-300 text-left ${selectedCategory === item ? "bg-[#F3EFEA] text-[#5D534A] pl-7" : ""}`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {filteredProducts.map((p, i) => (
              <ProductCard key={i} {...p} />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20 text-stone-500">
              No products found in this category.
            </div>
          )}

          <div className="flex justify-center mt-12">
            <button className="flex items-center space-x-2 text-primary hover:text-stone-900 transition-colors text-sm uppercase tracking-widest">
              <span>Explore More</span>
              <Link href="/shop">
                <ArrowRight size={16} />
              </Link>
            </button>
          </div>
        </section>

        {/* Scan Matching Face */}
        <section className="mb-24 px-4 sm:px-6">
          <div className="relative w-full max-w-6xl mx-auto h-[300px] sm:h-[400px] rounded-3xl overflow-hidden group">
            <Image
              src="/scan-your-matching-skin.png"
              alt="Scan Matching Face"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-4">
              <h2 className="font-serif text-3xl md:text-5xl mb-4 drop-shadow-lg leading-tight">Scan your <br /> matching face</h2>
              <button className="mt-4 sm:mt-6 px-6 sm:px-8 py-2.5 sm:py-3 bg-white/20 backdrop-blur-sm border border-white/40 rounded-full hover:bg-white hover:text-stone-900 transition-all font-sans text-xs sm:text-sm tracking-widest uppercase">
                Try Now
              </button>
            </div>
          </div>
        </section>

        {/* Collections */}
        <section className="mb-24 px-4 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h4 className="font-serif text-4xl text-[#5D534A] mb-3">Our Masterpiece</h4>
            <span className="text-sm tracking-[0.3em] text-[#8C8C8C] font-sans uppercase">The Collection</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Masterpiece 1 */}
            <div className="group relative h-[450px] sm:h-[600px] w-full overflow-hidden rounded-[2rem] cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500">
              <Image
                src="/masterpiece 1.png"
                alt="Masterpiece Collection 1"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 text-white translate-y-0 sm:translate-y-4 opacity-100 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100 transition-all duration-500">
                <p className="font-serif text-xl sm:text-2xl italic mb-2">Signature Series</p>
                <div className="flex items-center gap-2">
                  <span className="uppercase tracking-widest text-[10px] sm:text-xs font-semibold">Discover</span>
                  <ArrowRight size={12} />
                </div>
              </div>
            </div>

            {/* Masterpiece 2 - Staggered Layout */}
            <div className="group relative h-[450px] sm:h-[600px] w-full overflow-hidden rounded-[2rem] cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 md:mt-16">
              <Image
                src="/masterpiece 2.png"
                alt="Masterpiece Collection 2"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 text-white translate-y-0 sm:translate-y-4 opacity-100 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100 transition-all duration-500">
                <p className="font-serif text-xl sm:text-2xl italic mb-2">Limited Edition</p>
                <div className="flex items-center gap-2">
                  <span className="uppercase tracking-widest text-[10px] sm:text-xs font-semibold">Discover</span>
                  <ArrowRight size={12} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main >

      <Footer />
    </div >
  );
}
