"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const products = [
  {
    id: 1,
    title: "Kashmiri Silk Carpets",
    category: "Carpets",
    image: "https://images.unsplash.com/photo-1596230529625-7ee541366931?q=80&w=2680&auto=format&fit=crop",
    description: "Hand-knotted masterpieces with intricate patterns."
  },
  {
    id: 2,
    title: "Teak Wood Heritage Sofa",
    category: "Furniture",
    image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&w=2670&auto=format&fit=crop",
    description: "Colonial style furniture crafted from seasoned teak."
  },
  {
    id: 3,
    title: "Jaipur Blue Pottery",
    category: "Decor",
    image: "https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&w=2680&auto=format&fit=crop",
    description: "Vibrant glazed pottery with traditional motifs."
  }
];

export default function ProductSection() {
  return (
    <section className="py-24 bg-stone-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h3 className="text-amber-500 font-bold uppercase tracking-widest text-xs mb-3">Our Finest Work</h3>
            <h2 className="text-4xl md:text-5xl font-serif text-white">Featured Collections</h2>
          </div>
          <Link 
            href="/products" 
            className="hidden md:flex items-center gap-2 text-stone-400 hover:text-amber-500 transition-colors uppercase tracking-widest text-xs mt-6 md:mt-0"
          >
            All Products <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative"
            >
              <div className="aspect-[3/4] overflow-hidden bg-stone-800 relative mb-6">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-stone-950/20 group-hover:bg-stone-950/0 transition-colors duration-500" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-stone-950 via-transparent to-transparent flex items-end p-8">
                  <Link href={`/products`} className="text-white border-b border-amber-500 pb-1 text-sm tracking-widest uppercase">
                    View Details
                  </Link>
                </div>
              </div>
              <h3 className="text-2xl font-serif text-white mb-2 group-hover:text-amber-500 transition-colors">
                {product.title}
              </h3>
              <p className="text-stone-400 text-sm mb-4">{product.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
           <Link 
            href="/products" 
            className="inline-flex items-center gap-2 text-stone-400 hover:text-amber-500 transition-colors uppercase tracking-widest text-xs"
          >
            All Products <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
