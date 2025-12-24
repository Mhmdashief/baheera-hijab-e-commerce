import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
    name: string;
    price: number;
    image: string;
    category?: string;
}

export default function ProductCard({ name, price, image, category }: ProductCardProps) {
    return (
        <div className="group cursor-pointer">
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-gray-100 mb-4">
                <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </div>
            <div className="text-center">
                {category && (
                    <p className="text-[10px] tracking-widest text-[#8C8C8C] uppercase mb-1">
                        {category}
                    </p>
                )}
                <h3 className="font-serif text-lg text-[#4A4A4A] mb-1 group-hover:text-stone-600 transition-colors">
                    {name}
                </h3>
                <p className="font-sans text-sm font-medium text-[#5D534A]">
                    ${price.toFixed(2)}
                </p>
            </div>
        </div>
    );
}
