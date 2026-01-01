"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { ArrowRight, Star, Sparkles, Gem, Heart, Shield } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutUsPage() {
    return (
        <div className="bg-[#FDFBF7] min-h-screen">
            <Navbar />

            <main>
                {/* Hero Section - Banner Uncropped */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="w-full relative px-4 pt-24 md:px-8 md:pt-28"
                >
                    <div className="relative w-full overflow-hidden rounded-[2rem] shadow-xl">
                        <Image
                            src="/about-us-banner.png"
                            alt="Baheera Philosophy"
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="w-full h-auto"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                    </div>
                </motion.section>

                {/* Scrolling Marquee - Dynamic Visual Break */}
                <div className="overflow-hidden py-12 border-b border-[#D4C4B5]/30 bg-white/50 backdrop-blur-sm mb-12">
                    <div className="flex gap-12 whitespace-nowrap animate-marquee text-[#D4C4B5]/60 font-serif text-4xl italic tracking-wider">
                        <span>ELEGANCE IN EVERY THREAD</span>
                        <span>•</span>
                        <span>FAITH MEETS FASHION</span>
                        <span>•</span>
                        <span>SINCE 2025</span>
                        <span>•</span>
                        <span>UNCOMPROMISED QUALITY</span>
                        <span>•</span>
                        <span>ELEGANCE IN EVERY THREAD</span>
                        <span>•</span>
                        <span>FAITH MEETS FASHION</span>
                        <span>•</span>
                        <span>SINCE 2025</span>
                        <span>•</span>
                        <span>UNCOMPROMISED QUALITY</span>
                    </div>
                </div>

                {/* Values - Card Design */}

                {/* Values - Card Design */}
                <section className="py-24 bg-[#F5F2EC]">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-16">
                            <h3 className="font-serif text-4xl text-[#5D534A]">Why Choose Baheera</h3>
                            <div className="w-16 h-1 bg-[#AC8475] mx-auto mt-6 rounded-full" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { icon: Sparkles, title: "Premium Fabric", desc: "Sourced globally for unmatched softness and breathability." },
                                { icon: Shield, title: "Durability", desc: "Crafted to withstand daily wear while maintaining pristine quality." },
                                { icon: Heart, title: "Made with Love", desc: "Ethically produced with attention to every single stitch." }
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="bg-[#FDFBF7] p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300 shadow-sm border border-[#D4C4B5]/20 group"
                                >
                                    <div className="w-14 h-14 bg-[#AC8475]/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#AC8475] transition-colors duration-300">
                                        <item.icon className="w-6 h-6 text-[#AC8475] group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                                    </div>
                                    <h4 className="font-serif text-2xl text-[#5D534A] mb-3">{item.title}</h4>
                                    <p className="text-[#8C8C8C] font-light leading-relaxed">
                                        {item.desc}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Product Highlights - Our Masterpiece (Matched with Homepage) */}
                <section className="bg-white py-24 px-4 md:px-12">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h4 className="font-serif text-4xl text-[#5D534A] mb-3">Our Masterpiece</h4>
                            <span className="text-sm tracking-[0.3em] text-[#8C8C8C] font-sans uppercase">The Collection</span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
                            {/* Masterpiece 1 */}
                            <div className="group relative h-[600px] w-full overflow-hidden rounded-[2rem] cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500">
                                <Image
                                    src="/masterpiece 1.png"
                                    alt="Masterpiece Collection 1"
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                                <div className="absolute bottom-8 left-8 text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                    <p className="font-serif text-2xl italic mb-2">Signature Series</p>
                                    <div className="flex items-center gap-2">
                                        <span className="uppercase tracking-widest text-xs font-semibold">Discover</span>
                                        <ArrowRight size={14} />
                                    </div>
                                </div>
                            </div>

                            {/* Masterpiece 2 - Staggered Layout */}
                            <div className="group relative h-[600px] w-full overflow-hidden rounded-[2rem] cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 md:mt-16">
                                <Image
                                    src="/masterpiece 2.png"
                                    alt="Masterpiece Collection 2"
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                                <div className="absolute bottom-8 left-8 text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                    <p className="font-serif text-2xl italic mb-2">Limited Edition</p>
                                    <div className="flex items-center gap-2">
                                        <span className="uppercase tracking-widest text-xs font-semibold">Discover</span>
                                        <ArrowRight size={14} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
