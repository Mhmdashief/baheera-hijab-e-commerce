import Image from "next/image";

interface ProductCardProps {
    name: string;
    price: number;
    image: string;
    category?: string;
}

export default function ProductCard({ name, price, image, category }: ProductCardProps) {
    return (
        <div className="group cursor-pointer flex flex-col h-full">
            <div className="relative w-full aspect-[3/4] overflow-hidden rounded-2xl bg-neutral-100 mb-4 shadow-sm">
                <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover object-center transition-transform duration-700 ease-in-out group-hover:scale-110"
                    sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
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
    );
}
