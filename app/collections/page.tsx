import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function CollectionsPage() {
    const collections = [
        {
            title: "Autumn Serenity",
            description: "Warm tones and cozy fabrics tailored for the crisp autumn breeze.",
            image: "https://images.unsplash.com/photo-1548366565-6bbab241282d?w=1600&auto=format&fit=crop&q=80",
            align: "right"
        },
        {
            title: "Eid Elegance",
            description: "Celebrate in style with our exclusive luxury silk collection.",
            image: "https://images.unsplash.com/photo-1545959779-38374d6c7022?w=1600&auto=format&fit=crop&q=80",
            align: "left"
        },
        {
            title: "Summer Breeze",
            description: "Light, airy, and breathable materials perfect for sunny days.",
            image: "https://images.unsplash.com/photo-1512413914633-b5043f4041ea?w=1600&auto=format&fit=crop&q=80",
            align: "right"
        }
    ];

    return (
        <div className="bg-[#FDFBF7] min-h-screen pt-24">
            <Navbar />

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <div className="text-center mb-20">
                    <h1 className="font-serif text-5xl text-[#5D534A] mb-4">Collections</h1>
                    <div className="w-16 h-[1px] bg-[#D4C4B5] mx-auto mt-6"></div>
                </div>

                <div className="space-y-32">
                    {collections.map((col, idx) => (
                        <section key={idx} className={`flex flex-col ${col.align === "right" ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-12 group`}>
                            {/* Image */}
                            <div className="w-full lg:w-3/5 relative aspect-[16/9] overflow-hidden rounded-sm">
                                <Image
                                    src={col.image}
                                    alt={col.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                            </div>

                            {/* Content */}
                            <div className="w-full lg:w-2/5 text-center lg:text-left">
                                <h3 className="text-xs tracking-[0.3em] font-sans text-[#8C8C8C] uppercase mb-4">Featured Collection</h3>
                                <h2 className="font-serif text-4xl text-[#4A4A4A] mb-6">{col.title}</h2>
                                <p className="text-[#5D534A] mb-8 leading-relaxed font-light text-lg">
                                    {col.description}
                                </p>
                                <button className="text-sm uppercase tracking-widest border-b border-[#5D534A] pb-1 hover:text-[#8C8C8C] hover:border-[#8C8C8C] transition-colors">
                                    Explore Collection
                                </button>
                            </div>
                        </section>
                    ))}
                </div>

            </main>

            <Footer />
        </div>
    );
}
