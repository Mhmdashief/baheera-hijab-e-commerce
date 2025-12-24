import { Search, ShoppingBag, Menu } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FDFBF7]/80 backdrop-blur-md border-b border-stone-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex items-center sm:hidden">
                        <button className="text-primary hover:text-stone-800 transition-colors">
                            <Menu size={24} />
                        </button>
                    </div>
                    <div className="flex-1 flex justify-center sm:justify-start">
                        <Link href="/" className="relative block w-40 h-20">
                            <Image
                                src="/logo.png"
                                alt="Baheera Logo"
                                fill
                                className="object-contain object-left"
                                priority
                            />
                        </Link>
                    </div>
                    <div className="hidden sm:flex items-center space-x-8">
                        {["Home", "Shop", "Collections", "About"].map((item) => (
                            <Link
                                key={item}
                                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                                className="text-stone-600 hover:text-primary uppercase text-xs tracking-widest transition-colors font-sans"
                            >
                                {item}
                            </Link>
                        ))}
                    </div>

                    {/* Icons */}
                    <div className="flex items-center space-x-6 ml-4">
                        <button className="text-stone-600 hover:text-primary transition-colors">
                            <Search size={22} strokeWidth={1.5} />
                        </button>
                        <button className="text-stone-600 hover:text-primary transition-colors relative">
                            <ShoppingBag size={22} strokeWidth={1.5} />
                            <span className="absolute -top-1 -right-1 bg-stone-800 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                                2
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
