import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";

export default function ShopPage() {
    const products = [
        { name: "Beri Selendang", price: 120, category: "Pashmina", image: "https://images.unsplash.com/photo-1605256585681-4558376bf9b4?w=800&auto=format&fit=crop&q=60" },
        { name: "Seri Keling", price: 120, category: "Instan", image: "https://images.unsplash.com/photo-1596236943804-7128f731998f?w=800&auto=format&fit=crop&q=60" },
        { name: "Turi Udang", price: 120, category: "Pattern", image: "https://images.unsplash.com/photo-1620336215383-cf2d87e074de?w=800&auto=format&fit=crop&q=60" },
        { name: "Sera Kung", price: 120, category: "Square", image: "https://images.unsplash.com/photo-1616874535244-73aea5daadb9?w=800&auto=format&fit=crop&q=60" },
        { name: "Silk Touch", price: 150, category: "Pashmina", image: "https://images.unsplash.com/photo-1585728748176-455ac6ef8da3?w=800&auto=format&fit=crop&q=60" },
        { name: "Velvet Dream", price: 180, category: "Pattern", image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&auto=format&fit=crop&q=60" },
        { name: "Classic Nude", price: 95, category: "Square", image: "https://images.unsplash.com/photo-1628045999813-f9a888a7c21e?w=800&auto=format&fit=crop&q=60" },
        { name: "Midnight Blue", price: 110, category: "Instan", image: "https://images.unsplash.com/photo-1609357602059-0520fb4171ea?w=800&auto=format&fit=crop&q=60" },
    ];

    const categories = ["All", "Pashmina", "Square", "Instan", "Pattern"];

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
                <div className="flex flex-wrap justify-center gap-8 mb-16 border-b border-[#EFEBE4] pb-6">
                    {categories.map((cat, i) => (
                        <button
                            key={cat}
                            className={`text-sm uppercase tracking-widest hover:text-primary transition-colors ${i === 0 ? "text-primary font-semibold" : "text-[#8C8C8C]"}`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((product, index) => (
                        <ProductCard key={index} {...product} />
                    ))}
                </div>

                {/* Load More */}
                <div className="mt-20 text-center">
                    <button className="px-8 py-3 bg-white border border-[#D4C4B5] text-[#5D534A] text-xs uppercase tracking-widest hover:bg-[#5D534A] hover:text-white transition-colors duration-300">
                        Load More
                    </button>
                </div>
            </main>

            <Footer />
        </div>
    );
}
