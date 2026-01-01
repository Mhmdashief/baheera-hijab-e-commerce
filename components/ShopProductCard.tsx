"use client";

import Image from "next/image";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { useState } from "react";

interface ShopProductCardProps {
    name: string;
    price: number;
    image: string;
    category?: string;
}

export default function ShopProductCard({ name, price, image, category }: ShopProductCardProps) {
    const [isHovered, setIsHovered] = useState(false);

    const slug = name.toLowerCase().replace(/\s+/g, '-');

    const handleAddToCart = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        console.log("Added to cart:", name);
    };

    const handleBuyNow = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        console.log("Buy now:", name);
    };

    return (
        <Link href={`/product/${slug}`}>
            <div
                className="group cursor-pointer flex flex-col h-full"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className="relative w-full aspect-[3/4] overflow-hidden rounded-2xl bg-neutral-100 mb-4 shadow-sm">
                    <Image
                        src={image}
                        alt={name}
                        fill
                        className="object-cover object-center transition-transform duration-700 ease-in-out group-hover:scale-110"
                        sizes="(max-width: 768px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />

                    <div className={`absolute bottom-0 left-0 right-0 p-4 transition-all duration-300 ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
                        <div className="flex gap-2">
                            <button
                                onClick={handleAddToCart}
                                className="flex-1 bg-white/95 backdrop-blur-sm hover:bg-white text-[#5D534A] py-2.5 px-4 rounded-full text-xs uppercase tracking-wider font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                            >
                                <ShoppingCart size={14} />
                                <span className="hidden sm:inline">Add to Cart</span>
                            </button>
                            <button
                                onClick={handleBuyNow}
                                className="flex-1 bg-primary hover:bg-primary/90 text-white py-2.5 px-4 rounded-full text-xs uppercase tracking-wider font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
                                <Link href={`/product/${slug}`}>Buy Now</Link>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="text-center flex-1 flex flex-col justify-start">
                    {category && (
                        <p className="text-[10px] tracking-widest text-[#8C8C8C] uppercase mb-2 font-medium">
                            {category}
                        </p>
                    )}
                    <h3 className="font-serif text-lg text-[#4A4A4A] mb-2 group-hover:text-primary transition-colors line-clamp-1">
                        {name}
                    </h3>
                    <p className="font-sans text-sm font-semibold text-[#5D534A]">
                        Rp {price.toLocaleString('id-ID')}
                    </p>
                </div>
            </div>
        </Link>
    );
}
