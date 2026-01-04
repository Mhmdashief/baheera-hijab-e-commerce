"use client";

import { ShoppingBag, Menu, X, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about-us" },
        { name: "Shop", href: "/shop" },
    ];

    // Prevent scrolling when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-[100] bg-[#FDFBF7]/95 backdrop-blur-md border-b border-stone-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        {/* Mobile Menu Button - Left */}
                        <div className="flex items-center sm:hidden w-10">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="text-primary hover:text-stone-800 transition-all duration-300 p-2 -ml-2 rounded-full hover:bg-stone-100"
                                aria-label="Toggle Menu"
                            >
                                <motion.div
                                    animate={isMenuOpen ? "open" : "closed"}
                                    className="relative"
                                >
                                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                                </motion.div>
                            </button>
                        </div>

                        {/* Logo - Centered on Mobile */}
                        <div className="flex-1 flex justify-center sm:justify-start">
                            <Link href="/" className="relative block w-40 h-16 sm:h-20">
                                <Image
                                    src="/logo.png"
                                    alt="Baheera Logo"
                                    fill
                                    className="object-contain object-center sm:object-left"
                                    priority
                                />
                            </Link>
                        </div>

                        {/* Desktop Links */}
                        <div className="hidden sm:flex items-center space-x-10">
                            {navLinks.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-stone-600 hover:text-primary uppercase text-[11px] tracking-[0.2em] transition-all duration-300 font-sans hover:translate-y-[-1px]"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>

                        {/* Shopping Bag - Right */}
                        <div className="flex items-center justify-end w-10 ml-4">
                            <button className="text-stone-600 hover:text-primary transition-all duration-300 relative p-2 -mr-2 rounded-full hover:bg-stone-100">
                                <ShoppingBag size={22} strokeWidth={1.5} />
                                <span className="absolute top-1 right-1 bg-stone-800 text-white text-[9px] w-4 h-4 flex items-center justify-center rounded-full font-sans font-bold">
                                    2
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay - Outside Nav for clean layout */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "-100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "-100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-0 top-0 bg-[#FDFBF7] z-[90] sm:hidden pt-24"
                    >
                        <div className="flex flex-col p-8 h-full">
                            <div className="space-y-2">
                                {navLinks.map((item, index) => (
                                    <motion.div
                                        key={item.name}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 * index }}
                                    >
                                        <Link
                                            href={item.href}
                                            onClick={() => setIsMenuOpen(false)}
                                            className="group flex items-center justify-between text-stone-800 hover:text-primary uppercase text-2xl tracking-[0.1em] transition-all duration-300 font-serif py-4 border-b border-stone-100"
                                        >
                                            <span>{item.name}</span>
                                            <ArrowRight size={20} className="opacity-0 group-hover:opacity-100 transition-opacity translate-x-[-10px] group-hover:translate-x-0 duration-300" />
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="mt-auto pb-10"
                            >
                                <Link
                                    href="/shop"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="flex items-center justify-center gap-3 w-full bg-[#AC8475] text-white py-4 rounded-2xl uppercase tracking-[0.2em] text-sm font-medium shadow-lg hover:bg-[#967062] transition-colors"
                                >
                                    <span>Explore Collection</span>
                                    <ArrowRight size={16} />
                                </Link>

                                <div className="mt-8 text-center">
                                    <p className="text-stone-400 text-[10px] uppercase tracking-[0.3em] mb-4 font-sans">Connect with us</p>
                                    <div className="flex justify-center space-x-6 text-stone-500">
                                        <span className="text-xs uppercase tracking-widest font-sans">Instagram</span>
                                        <span className="text-xs uppercase tracking-widest font-sans">TikTok</span>
                                        <span className="text-xs uppercase tracking-widest font-sans">WhatsApp</span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
