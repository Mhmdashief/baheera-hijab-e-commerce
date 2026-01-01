"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";



export default function Hero() {
    return (
        <div className="w-full bg-[#FDFBF7] pb-8 md:pb-12 pt-28 md:pt-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Banner Container */}
                <div className="relative w-full aspect-[16/9] md:aspect-[2/1] lg:aspect-[2.4/1] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-stone-200/50 group">
                    <Image
                        src="/banner.jpeg"
                        alt="Baheera Luxury Collection"
                        fill
                        className="object-cover object-center transition-transform duration-1000 group-hover:scale-105"
                        priority
                    />

                    {/* Content Overlay - Glassmorphism Card */}
                    <div className="absolute inset-0 flex items-center justify-end p-6 md:p-12 lg:p-20">
                        <div className="relative bg-white/70 backdrop-blur-md p-8 md:p-12 rounded-3xl max-w-lg w-full shadow-lg border border-white/50 animate-fade-in-up">
                            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#5D534A] leading-tight mb-4">
                                Eksploring the Beauty of <br />
                                <span className="italic">Hijabs</span> <br />
                                Latest
                            </h1>

                            <p className="text-stone-600 text-sm md:text-base mb-8 leading-relaxed">
                                Comfortable and Fashionable Collection for Your Everyday Style
                            </p>

                            <a
                                href="/shop"
                                className="inline-block w-full text-center bg-[#AC8475] text-white py-3 px-6 rounded-lg uppercase tracking-wider text-sm font-medium hover:bg-[#967062] transition-colors shadow-md"
                            >
                                Shop Now
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
