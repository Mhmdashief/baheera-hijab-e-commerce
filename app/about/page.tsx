import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function AboutPage() {
    return (
        <div className="bg-[#FDFBF7] min-h-screen pt-24">
            <Navbar />

            <main>
                {/* Header Section */}
                <section className="relative h-[60vh] w-full flex items-center justify-center overflow-hidden">
                    <Image
                        src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1600&auto=format&fit=crop&q=80"
                        alt="About Baheera"
                        fill
                        className="object-cover opacity-90"
                    />
                    <div className="absolute inset-0 bg-stone-900/30" />
                    <div className="relative z-10 text-center text-white px-4">
                        <h1 className="font-serif text-5xl md:text-6xl mb-6 tracking-wide">Our Story</h1>
                        <p className="font-sans text-sm md:text-base uppercase tracking-widest opacity-90">Redefining Modest Fashion</p>
                    </div>
                </section>

                {/* Brand Narrative */}
                <section className="max-w-4xl mx-auto px-6 py-24 text-center">
                    <h2 className="font-serif text-3xl italic text-[#5D534A] mb-8">"Elegance is not standing out, but being remembered."</h2>
                    <p className="text-[#5D534A] leading-8 mb-6 font-light">
                        Founded in 2025, <span className="font-serif italic font-semibold">Baheera</span> was born from a desire to bridge the gap between faith and high fashion. We believe that modesty should never compromise style. Our journey began in a small studio with a simple mission: to create hijabs that feel as luxurious as they look.
                    </p>
                    <p className="text-[#5D534A] leading-8 font-light">
                        Every piece in our collection is thoughtfully designed and meticulously crafted using the finest sustainable fabrics. We travel the world to source materials that are ethical, durable, and breathtakingly beautiful.
                    </p>
                </section>

                {/* Values Grid */}
                <section className="bg-white py-24">
                    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                        <div className="p-8">
                            <div className="w-16 h-16 bg-[#FDFBF7] rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-serif text-[#5D534A]">01</div>
                            <h3 className="font-serif text-xl mb-4 text-[#4A4A4A]">Craftsmanship</h3>
                            <p className="text-sm text-[#8C8C8C] leading-6">Hand-finished details and premium quality control ensure every item is a masterpiece.</p>
                        </div>
                        <div className="p-8">
                            <div className="w-16 h-16 bg-[#FDFBF7] rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-serif text-[#5D534A]">02</div>
                            <h3 className="font-serif text-xl mb-4 text-[#4A4A4A]">Sustainability</h3>
                            <p className="text-sm text-[#8C8C8C] leading-6">Committed to eco-friendly practices, recycled packaging, and ethical labor standards.</p>
                        </div>
                        <div className="p-8">
                            <div className="w-16 h-16 bg-[#FDFBF7] rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-serif text-[#5D534A]">03</div>
                            <h3 className="font-serif text-xl mb-4 text-[#4A4A4A]">Community</h3>
                            <p className="text-sm text-[#8C8C8C] leading-6">Empowering women through fashion and supporting local artisans in our supply chain.</p>
                        </div>
                    </div>
                </section>

                {/* Image Grid */}
                <section className="grid grid-cols-2 md:grid-cols-4 h-96">
                    <div className="relative h-full">
                        <Image src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&auto=format&fit=crop&q=60" alt="Process 1" fill className="object-cover" />
                    </div>
                    <div className="relative h-full">
                        <Image src="https://images.unsplash.com/photo-1621335829175-95f437384d7c?w=800&auto=format&fit=crop&q=60" alt="Process 2" fill className="object-cover" />
                    </div>
                    <div className="relative h-full">
                        <Image src="https://images.unsplash.com/photo-1628045999813-f9a888a7c21e?w=800&auto=format&fit=crop&q=60" alt="Process 3" fill className="object-cover" />
                    </div>
                    <div className="relative h-full">
                        <Image src="https://images.unsplash.com/photo-1605256585681-4558376bf9b4?w=800&auto=format&fit=crop&q=60" alt="Process 4" fill className="object-cover" />
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
