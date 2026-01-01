"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { ShoppingCart, ArrowLeft, Heart, Share2, Minus, Plus } from "lucide-react";
import { motion } from "framer-motion";

// Product data (in real app, this would come from API/database)
const productsData = [
    { name: "Paris Premium", price: 50000, image: "/paris-premium.png", category: "Triangle", description: "Hijab premium dengan bahan berkualitas tinggi, nyaman dipakai sepanjang hari. Cocok untuk berbagai acara formal maupun casual." },
    { name: "Hijab Voal", price: 55000, image: "/hijab-voal.png", category: "Triangle", description: "Hijab voal dengan tekstur lembut dan adem. Mudah dibentuk dan tidak mudah kusut, sempurna untuk gaya sehari-hari." },
    { name: "Pashmina Ceruty", price: 60000, image: "/pashmina ceruty.png", category: "Pashmina", description: "Pashmina ceruty dengan kualitas premium, bahan jatuh dan tidak menerawang. Memberikan kesan elegan dan anggun." },
    { name: "Pashmina Kaos", price: 50000, image: "/pashmina kaos.png", category: "Pashmina", description: "Pashmina berbahan kaos yang nyaman dan breathable. Cocok untuk aktivitas sehari-hari dengan tetap tampil stylish." },
    { name: "Pashmina Voal", price: 60000, image: "/pashmina voal.png", category: "Pashmina", description: "Pashmina voal dengan tekstur halus dan ringan. Memberikan kenyamanan maksimal dengan tampilan yang elegan." },
    { name: "Pashmina Viscose", price: 78000, image: "/pashmina viscose.png", category: "Pashmina", description: "Pashmina viscose premium dengan kilau natural yang mewah. Bahan jatuh sempurna dan nyaman untuk acara spesial." },
];

export default function ProductDetailPage() {
    const params = useParams();
    const slug = params.slug as string;
    const [quantity, setQuantity] = useState(1);
    const [isFavorite, setIsFavorite] = useState(false);

    // Find product by slug
    const product = productsData.find(
        (p) => p.name.toLowerCase().replace(/\s+/g, '-') === slug
    );

    // Get related products (same category, excluding current product)
    const relatedProducts = productsData.filter(
        (p) => p.category === product?.category && p.name !== product?.name
    ).slice(0, 4);

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-serif text-[#5D534A] mb-4">Product Not Found</h1>
                    <Link href="/shop" className="text-primary hover:underline">
                        Back to Shop
                    </Link>
                </div>
            </div>
        );
    }

    const handleAddToCart = () => {
        console.log(`Added ${quantity}x ${product.name} to cart`);
        // TODO: Implement cart logic
    };

    const handleBuyNow = () => {
        console.log(`Buy now: ${quantity}x ${product.name}`);
        // TODO: Implement checkout logic
    };

    return (
        <div className="bg-[#FDFBF7] min-h-screen">
            <Navbar />

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                {/* Back Button */}
                <Link
                    href="/shop"
                    className="inline-flex items-center gap-2 text-[#8C8C8C] hover:text-primary transition-colors mb-8 group"
                >
                    <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                    <span className="text-sm uppercase tracking-wider">Back to Shop</span>
                </Link>

                {/* Product Detail Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
                    {/* Product Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="relative"
                    >
                        <div className="relative aspect-[3/4] w-full overflow-hidden rounded-3xl bg-neutral-100 shadow-xl">
                            <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </motion.div>

                    {/* Product Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex flex-col justify-center"
                    >
                        {/* Category */}
                        <p className="text-xs tracking-widest text-[#8C8C8C] uppercase mb-3 font-medium">
                            {product.category}
                        </p>

                        {/* Product Name */}
                        <h1 className="font-serif text-4xl md:text-5xl text-[#5D534A] mb-4">
                            {product.name}
                        </h1>

                        {/* Price */}
                        <p className="text-3xl font-semibold text-primary mb-6">
                            Rp {product.price.toLocaleString('id-ID')}
                        </p>

                        {/* Description */}
                        <p className="text-[#5D534A] leading-relaxed mb-8 text-base">
                            {product.description}
                        </p>

                        {/* Quantity Selector */}
                        <div className="mb-8">
                            <label className="text-sm uppercase tracking-wider text-[#8C8C8C] mb-3 block">
                                Quantity
                            </label>
                            <div className="flex items-center gap-4">
                                <button
                                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                    className="w-10 h-10 rounded-full border border-[#D4C4B5] flex items-center justify-center hover:bg-[#F3EFEA] transition-colors"
                                >
                                    <Minus size={16} />
                                </button>
                                <span className="text-lg font-semibold w-12 text-center">
                                    {quantity}
                                </span>
                                <button
                                    onClick={() => setQuantity(quantity + 1)}
                                    className="w-10 h-10 rounded-full border border-[#D4C4B5] flex items-center justify-center hover:bg-[#F3EFEA] transition-colors"
                                >
                                    <Plus size={16} />
                                </button>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-4 mb-6">
                            <button
                                onClick={handleAddToCart}
                                className="flex-1 bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white py-4 px-6 rounded-full text-sm uppercase tracking-wider font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                            >
                                <ShoppingCart size={18} />
                                Add to Cart
                            </button>
                            <button
                                onClick={handleBuyNow}
                                className="flex-1 bg-primary hover:bg-primary/90 text-white py-4 px-6 rounded-full text-sm uppercase tracking-wider font-semibold transition-all duration-300"
                            >
                                Buy Now
                            </button>
                        </div>

                        {/* Secondary Actions */}
                        <div className="flex gap-4">
                            <button
                                onClick={() => setIsFavorite(!isFavorite)}
                                className={`flex-1 border border-[#D4C4B5] py-3 px-4 rounded-full text-sm uppercase tracking-wider font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${isFavorite ? 'bg-red-50 text-red-500 border-red-200' : 'hover:bg-[#F3EFEA]'
                                    }`}
                            >
                                <Heart size={16} fill={isFavorite ? 'currentColor' : 'none'} />
                                {isFavorite ? 'Favorited' : 'Add to Wishlist'}
                            </button>
                            <button className="border border-[#D4C4B5] hover:bg-[#F3EFEA] py-3 px-6 rounded-full transition-all duration-300 flex items-center justify-center">
                                <Share2 size={16} />
                            </button>
                        </div>
                    </motion.div>
                </div>

                {/* Related Products */}
                {relatedProducts.length > 0 && (
                    <section>
                        <div className="text-center mb-12">
                            <div className="border-t border-[#D4C4B5] w-24 mx-auto mb-6"></div>
                            <h2 className="font-serif text-3xl text-[#5D534A] mb-2">You May Also Like</h2>
                            <p className="text-sm tracking-wider text-[#8C8C8C] uppercase">Related Products</p>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {relatedProducts.map((relatedProduct, index) => (
                                <ProductCard key={index} {...relatedProduct} />
                            ))}
                        </div>
                    </section>
                )}
            </main>

            <Footer />
        </div>
    );
}
