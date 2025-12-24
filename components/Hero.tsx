import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <div className="w-full bg-[#FDFBF7] py-12 md:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Text Content */}
                    <div className="order-2 md:order-1 flex flex-col items-center md:items-start text-center md:text-left space-y-8">
                        <div>
                            <span className="text-[#8C8C8C] text-sm tracking-[0.3em] uppercase mb-4 block">New Collection 2025</span>
                            <h1 className="font-serif text-5xl md:text-7xl text-[#5D534A] leading-tight">
                                <div className="relative w-48 h-16 md:w-64 md:h-24 mb-2">
                                    <Image
                                        src="/logo.png"
                                        alt="Baheera Logo"
                                        fill
                                        className="object-contain object-center md:object-left"
                                        priority
                                    />
                                </div>
                                <span className="font-serif italic text-4xl md:text-6xl text-[#8C8C8C] font-light">Hijab Series</span>
                            </h1>
                        </div>

                        <p className="text-stone-600 text-lg leading-relaxed max-w-md">
                            Discover the perfect harmony of modesty and modern elegance.
                            Our premium hijabs are crafted for comfort, designed for you.
                        </p>

                        <button className="group flex items-center space-x-3 bg-[#5D534A] text-white px-8 py-4 rounded-full hover:bg-stone-800 transition-all duration-300">
                            <span className="uppercase tracking-widest text-sm">Shop Now</span>
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>

                    {/* Image Card */}
                    <div className="order-1 md:order-2 relative">
                        <div className="relative aspect-[4/5] w-full max-w-md mx-auto md:mr-0 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-[#D4C4B5]/50 border-4 border-white">
                            <Image
                                src="/banner.jpg"
                                alt="Baheera Luxury Hijab Model"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-700"
                                priority
                            />
                        </div>
                        {/* Decorative Element */}
                        <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full rounded-[2.5rem] border-2 border-[#D4C4B5] hidden md:block" />
                    </div>
                </div>
            </div>
        </div>
    );
}
