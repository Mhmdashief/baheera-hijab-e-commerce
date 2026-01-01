"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ShopProductCard from "@/components/ShopProductCard";
import { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";

interface Category {
    name: string;
    hasDropdown: boolean;
    items?: string[];
}

interface Product {
    name: string;
    price: number;
    image: string;
    category: string;
}

const ShopCategories: Category[] = [
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

const products: Product[] = [
    { name: "Paris Premium", price: 50000, image: "/paris-premium.png", category: "Triangle" },
    { name: "Hijab Voal", price: 55000, image: "/hijab-voal.png", category: "Triangle" },
    { name: "Pashmina Ceruty", price: 60000, image: "/pashmina ceruty.png", category: "Pashmina" },
    { name: "Pashmina Kaos", price: 50000, image: "/pashmina kaos.png", category: "Pashmina" },
    { name: "Pashmina Voal", price: 60000, image: "/pashmina voal.png", category: "Pashmina" },
    { name: "Pashmina Viscose", price: 78000, image: "/pashmina viscose.png", category: "Pashmina" },
];

export default function ShopPage() {
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

    const filteredProducts = products.filter((product) => {
        if (selectedCategory === "All") return true;
        return product.category === selectedCategory || product.name === selectedCategory;
    });

    return (
        <div className="bg-[#FDFBF7] min-h-screen pt-24">
            <Navbar />

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <div className="text-center mb-16">
                    <h1 className="font-serif text-4xl text-[#5D534A] mb-4">Shop All</h1>
                    <p className="text-[#8C8C8C] max-w-lg mx-auto leading-relaxed">
                        Discover our complete collection of premium hijabs, designed for elegance and comfort in every moment.
                    </p>
                </div>

                {/* Filters */}
                <div className="flex flex-wrap justify-center gap-8 text-sm uppercase tracking-widest text-[#8C8C8C] mb-16 px-4" ref={dropdownRef}>
                    {ShopCategories.map((cat) => (
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

                            {/* Dropdown Menu */}
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
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleSubCategoryClick(item);
                                            }}
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

                {/* Product Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map((product, index) => (
                            <ShopProductCard key={index} {...product} />
                        ))
                    ) : (
                        <p className="col-span-full text-center text-[#8C8C8C] py-10">
                            No products found in this category.
                        </p>
                    )}
                </div>
            </main>

            <Footer />
        </div>
    );
}
