import { ShieldCheck, Leaf, Truck, Gift } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";



import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-[#EFEBE4] text-[#5D534A] pt-20 pb-10 mt-20">
            <div className="max-w-7xl mx-auto px-6">
                {/* Features / Value Props */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 border-b border-[#D4C4B5] pb-16 text-center">
                    <div className="flex flex-col items-center">
                        <Truck className="mb-4 text-stone-600" size={32} strokeWidth={1} />
                        <h4 className="font-serif text-lg mb-2">Fast Shipping</h4>
                        <p className="text-xs text-stone-500 max-w-[150px]">Free on orders over $120. Delivered swiftly.</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <Leaf className="mb-4 text-stone-600" size={32} strokeWidth={1} />
                        <h4 className="font-serif text-lg mb-2">Sustainable</h4>
                        <p className="text-xs text-stone-500 max-w-[150px]">Eco-friendly materials and process.</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <Gift className="mb-4 text-stone-600" size={32} strokeWidth={1} />
                        <h4 className="font-serif text-lg mb-2">Unique Designs</h4>
                        <p className="text-xs text-stone-500 max-w-[150px]">Exclusive collections found nowhere else.</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <ShieldCheck className="mb-4 text-stone-600" size={32} strokeWidth={1} />
                        <h4 className="font-serif text-lg mb-2">Secure Payment</h4>
                        <p className="text-xs text-stone-500 max-w-[150px]">100% secure payment processing.</p>
                    </div>
                </div>

                <div className="flex flex-col items-center text-center">
                    {/* Logo */}
                    <div className="relative w-40 h-16 mb-8">
                        <Image
                            src="/logo.png"
                            alt="Baheera Logo"
                            fill
                            sizes="160px"
                            className="object-contain"
                        />
                    </div>

                    <p className="max-w-md text-sm text-stone-600 mb-10 leading-relaxed font-light">
                        Making a luxurious lifestyle accessible for a generous group of women is our daily drive.
                        Elegance is not standing out, but being remembered.
                    </p>

                    {/* Socials */}
                    <div className="flex space-x-8 mb-12">
                        <a href="#" className="hover:text-stone-900 transition-colors"><FaXTwitter size={20} /></a>
                        <a href="#" className="hover:text-stone-900 transition-colors"><FaWhatsapp size={20} /></a>
                        <a href="#" className="hover:text-stone-900 transition-colors"><FaInstagram size={20} /></a>

                    </div>

                    <div className="w-20 h-[1px] bg-[#D4C4B5] mb-12"></div>

                    {/* Contact Info */}
                    <div className="space-y-4 text-sm text-stone-600 mb-16">
                        <p>support@baheera.store</p>
                        <p>+(62) 888 8888 888</p>
                        <p>08:00 - 22:00 • Everyday</p>
                    </div>

                    {/* Links */}
                    <div className="flex space-x-12 uppercase text-xs tracking-widest text-[#5D534A]">
                        <a href="#" className="hover:text-stone-900 transition-colors">About</a>
                        <a href="#" className="hover:text-stone-900 transition-colors">Contact</a>
                    </div>

                    <div className="mt-16 text-[10px] text-stone-400">
                        © 2025 Baheera. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
}
