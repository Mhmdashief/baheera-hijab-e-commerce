import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Home() {
  const categories = ["All", "Pashmina", "Khimar", "Segitiga", "Instan"];

  const featuredProducts = [
    { name: "Beri Selendang", price: 120, image: "https://images.unsplash.com/photo-1605256585681-4558376bf9b4?w=800&auto=format&fit=crop&q=60" },
    { name: "Seri Keling", price: 120, image: "https://images.unsplash.com/photo-1596236943804-7128f731998f?w=800&auto=format&fit=crop&q=60" },
    { name: "Turi Udang", price: 120, image: "https://images.unsplash.com/photo-1620336215383-cf2d87e074de?w=800&auto=format&fit=crop&q=60" },
    { name: "Sera Kung", price: 120, image: "https://images.unsplash.com/photo-1616874535244-73aea5daadb9?w=800&auto=format&fit=crop&q=60" },
  ];

  const justForYou = [
    { name: "Harris Tweed Jacket", price: 320, image: "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?w=800&auto=format&fit=crop&q=60" },
    { name: "Cashmere Scarf", price: 140, image: "https://images.unsplash.com/photo-1520986606214-8b456906c813?w=800&auto=format&fit=crop&q=60" },
  ];

  return (
    <div className="bg-[#FDFBF7] min-h-screen">
      <Navbar />
      <Hero />

      <main>
        {/* Categories */}
        <div className="py-12 text-center">
          <div className="border-t border-[#D4C4B5] w-24 mx-auto mb-8"></div>
          <h2 className="font-serif text-2xl text-[#4A4A4A] tracking-wider mb-6">USERNAME</h2>
          <div className="flex flex-wrap justify-center gap-8 text-sm uppercase tracking-widest text-[#8C8C8C] mb-8 px-4">
            {categories.map((cat, i) => (
              <button
                key={cat}
                className={`hover:text-primary transition-colors ${i === 0 ? "text-primary border-b border-primary pb-1" : ""}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10">
            {featuredProducts.map((p, i) => (
              <ProductCard key={i} {...p} />
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <button className="flex items-center space-x-2 text-primary hover:text-stone-900 transition-colors text-sm uppercase tracking-widest">
              <span>Explore More</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </section>

        {/* Scan Matching Skin */}
        <section className="mb-24 px-4 sm:px-6">
          <div className="relative w-full max-w-6xl mx-auto h-[400px] rounded-3xl overflow-hidden group">
            <Image
              src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1600&auto=format&fit=crop&q=80"
              alt="Scan Skin"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white">
              <h2 className="font-serif text-4xl md:text-5xl mb-4 drop-shadow-lg">Scan your <br /> matching skin</h2>
              <button className="mt-6 px-8 py-3 bg-white/20 backdrop-blur-sm border border-white/40 rounded-full hover:bg-white hover:text-stone-900 transition-all font-sans text-sm tracking-widest uppercase">
                Try Now
              </button>
            </div>
          </div>
        </section>

        {/* Collections */}
        <section className="mb-24 text-center px-4">
          <h3 className="font-sans text-xs tracking-[0.3em] text-[#8C8C8C] mb-4 uppercase">Collections</h3>
          <h2 className="font-serif text-5xl text-[#5D534A] mb-12">Autumn <span className="text-2xl block mt-2 text-[#8C8C8C] tracking-widest font-sans font-light">COLLECTION</span></h2>

          <div className="relative max-w-4xl mx-auto aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-xl">
            <Image
              src="https://images.unsplash.com/photo-1548366565-6bbab241282d?w=1600&auto=format&fit=crop&q=80"
              alt="Autumn Collection"
              fill
              className="object-cover"
            />
          </div>
        </section>

        {/* Just For You */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <h3 className="font-serif text-3xl text-center text-[#5D534A] mb-4">Just For You</h3>
          <div className="border-t border-[#D4C4B5] w-12 mx-auto mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {justForYou.map((p, i) => (
              <div key={i} className="flex flex-col sm:flex-row gap-6 items-center bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="relative w-full sm:w-1/2 aspect-[3/4] rounded-lg overflow-hidden">
                  <Image src={p.image} alt={p.name} fill className="object-cover" />
                </div>
                <div className="text-center sm:text-left">
                  <h4 className="font-serif text-2xl text-[#4A4A4A] mb-2">{p.name}</h4>
                  <p className="text-primary font-medium text-lg mb-4">${p.price}</p>
                  <p className="text-stone-500 text-sm mb-6 leading-relaxed">
                    Crafted with the finest materials for your ultimate comfort and style. Perfect for the season.
                  </p>
                  <button className="text-sm uppercase tracking-widest border-b border-primary pb-1 hover:text-stone-900 transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
