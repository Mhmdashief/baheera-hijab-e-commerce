import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { ArrowRight, Star, Sparkles, Gem } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="bg-[#FDFBF7] min-h-screen">
            <Navbar />

            <main>
                {/* Hero Section */}
                <section className="relative h-[70vh] w-full flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0">
                        <Image
                            src="/examples.jpeg"
                            alt="Baheera Philosophy"
                            fill
                            className="object-cover opacity-90 brightness-75 bg-fixed"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#5D534A]/40 to-transparent" />
                    </div>

                    <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
                        <span className="inline-block py-1 px-3 border border-white/30 rounded-full text-xs uppercase tracking-[0.2em] mb-6 backdrop-blur-sm">
                            Since 2025
                        </span>
                        <h1 className="font-serif text-5xl md:text-7xl mb-6 tracking-wide drop-shadow-lg leading-tight">
                            More Than Just <br /> <i className="font-light">A Hijab</i>
                        </h1>
                        <p className="font-sans text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto text-white/90">
                            Baheera represents the intersection of faith, elegance, and modern lifestyle.
                        </p>
                    </div>
                </section>

                {/* Brand Story */}
                <section className="relative py-24 px-6 overflow-hidden">
                    {/* Decorative background element */}
                    <div className="absolute top-20 left-0 w-64 h-64 bg-[#D4C4B5]/10 rounded-full blur-3xl -z-10" />

                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="font-serif text-4xl text-[#5D534A] mb-8">The Baheera Signature</h2>
                        <div className="w-24 h-[1px] bg-[#D4C4B5] mx-auto mb-10" />

                        <p className="text-[#5D534A] leading-8 mb-6 font-light text-lg">
                            At <span className="font-serif italic font-semibold text-xl">Baheera</span>, we define elegance not by what you wear, but how you feel wearing it. We curate collections that celebrate the grace of modesty without compromising on contemporary style.
                        </p>
                        <p className="text-[#5D534A] leading-8 font-light text-lg">
                            Our name is synonymous with quality. Every thread is chosen with intention, ensuring that our products—from our signature Pashminas to our effortless Instants—provide comfort, breathability, and a drape that exudes sophistication.
                        </p>
                    </div>
                </section>

                {/* Product Highlights - The User Request */}
                <section className="bg-white py-24 px-6 md:px-12">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h3 className="font-sans text-xs tracking-[0.3em] text-[#8C8C8C] mb-3 uppercase">Curated Collections</h3>
                            <h2 className="font-serif text-4xl text-[#5D534A]">Our Masterpieces</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                            {/* Product 1: Pashmina */}
                            <div className="group cursor-pointer">
                                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl mb-6">
                                    <Image
                                        src="https://images.unsplash.com/photo-1616789808948-4cb933fa1f0c?q=80&w=1964&auto=format&fit=crop"
                                        alt="Baheera Pashmina"
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                                </div>
                                <div className="text-center">
                                    <h3 className="font-serif text-2xl text-[#5D534A] mb-2 group-hover:text-[#8C8C8C] transition-colors">Silk Pashmina</h3>
                                    <p className="text-sm text-[#8C8C8C] leading-relaxed px-4">
                                        Flowy, lightweight, and effortlessly chic. Our signature pashmina hugs your silhouette with a graceful drape.
                                    </p>
                                </div>
                            </div>

                            {/* Product 2: Square/Segitiga */}
                            <div className="group cursor-pointer mt-0 md:-mt-12 lg:mt-0">
                                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl mb-6">
                                    <Image
                                        src="https://images.unsplash.com/photo-1549488340-9725f4633eac?q=80&w=2070&auto=format&fit=crop"
                                        alt="Baheera Square Hijab"
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                                </div>
                                <div className="text-center">
                                    <h3 className="font-serif text-2xl text-[#5D534A] mb-2 group-hover:text-[#8C8C8C] transition-colors">Premium Square</h3>
                                    <p className="text-sm text-[#8C8C8C] leading-relaxed px-4">
                                        The timeless classic. Crisp Paris cotton that stays in place all day, offering pristine structure and comfort.
                                    </p>
                                </div>
                            </div>

                            {/* Product 3: Instant */}
                            <div className="group cursor-pointer">
                                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl mb-6">
                                    <Image
                                        src="https://images.unsplash.com/photo-1628045999813-f9a888a7c21e?q=80&w=1964&auto=format&fit=crop"
                                        alt="Baheera Instant Hijab"
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                                </div>
                                <div className="text-center">
                                    <h3 className="font-serif text-2xl text-[#5D534A] mb-2 group-hover:text-[#8C8C8C] transition-colors">Baheera Instant</h3>
                                    <p className="text-sm text-[#8C8C8C] leading-relaxed px-4">
                                        Ready in seconds. Designed for the dynamic woman who refuses to sacrifice elegance for convenience.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Values / Why Us */}
                <section className="py-24 bg-[#F5F2EC]">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-[#D4C4B5]/50">
                            <div className="px-4 py-8 md:py-0">
                                <Sparkles className="w-8 h-8 mx-auto text-[#5D534A] mb-6 opacity-70" strokeWidth={1.5} />
                                <h4 className="font-serif text-xl text-[#5D534A] mb-3">Premium Materials</h4>
                                <p className="text-sm text-[#8C8C8C] font-light">
                                    We source only the finest fabrics that are gentle on skin and hair.
                                </p>
                            </div>
                            <div className="px-4 py-8 md:py-0">
                                <Gem className="w-8 h-8 mx-auto text-[#5D534A] mb-6 opacity-70" strokeWidth={1.5} />
                                <h4 className="font-serif text-xl text-[#5D534A] mb-3">Timeless Design</h4>
                                <p className="text-sm text-[#8C8C8C] font-light">
                                    Styles that transcend trends, ensuring you look elegant in every season.
                                </p>
                            </div>
                            <div className="px-4 py-8 md:py-0">
                                <Star className="w-8 h-8 mx-auto text-[#5D534A] mb-6 opacity-70" strokeWidth={1.5} />
                                <h4 className="font-serif text-xl text-[#5D534A] mb-3">Thoughtful Details</h4>
                                <p className="text-sm text-[#8C8C8C] font-light">
                                    Laser-cut edges, subtle embroidery, and signature gold charm finishes.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Craftsmanship Image Grid (Kept from original but styled) */}
                <section className="grid grid-cols-2 md:grid-cols-4 h-80 md:h-[500px]">
                    <div className="relative h-full group overflow-hidden">
                        <Image src="https://images.unsplash.com/photo-1549488340-9725f4633eac?w=800&auto=format&fit=crop&q=60" alt="Mood" fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-[#5D534A]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <span className="text-white font-serif tracking-widest uppercase text-sm">Texture</span>
                        </div>
                    </div>
                    <div className="relative h-full group overflow-hidden">
                        <Image src="https://images.unsplash.com/photo-1621335829175-95f437384d7c?w=800&auto=format&fit=crop&q=60" alt="Mood" fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-[#5D534A]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <span className="text-white font-serif tracking-widest uppercase text-sm">Color</span>
                        </div>
                    </div>
                    <div className="relative h-full group overflow-hidden">
                        <Image src="https://images.unsplash.com/photo-1628045999813-f9a888a7c21e?w=800&auto=format&fit=crop&q=60" alt="Mood" fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-[#5D534A]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <span className="text-white font-serif tracking-widest uppercase text-sm">Flow</span>
                        </div>
                    </div>
                    <div className="relative h-full group overflow-hidden">
                        <Image src="https://images.unsplash.com/photo-1605256585681-4558376bf9b4?w=800&auto=format&fit=crop&q=60" alt="Mood" fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-[#5D534A]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <span className="text-white font-serif tracking-widest uppercase text-sm">Comfort</span>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
