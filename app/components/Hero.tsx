"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-[90vh] min-h-[600px] w-full overflow-hidden bg-stone-950 flex items-center justify-center">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
         {/* Placeholder for actual image - using a dark gradient for now to simulate luxury feel */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-stone-800 via-stone-950 to-stone-950 opacity-50" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2727&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/30 via-transparent to-stone-950" />
      </div>

      <div className="container relative z-10 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <span className="inline-block py-1 px-3 border border-amber-500/30 rounded-full bg-amber-950/20 backdrop-blur-sm text-amber-500 text-xs font-bold uppercase tracking-[0.2em] mb-6">
            Global Indian Luxuries
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-8 tracking-wide leading-tight"
        >
          Curating <span className="text-amber-500 italic">Elegance</span> <br />
          For The World
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-stone-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light"
        >
          Patel Exports connects the world with India's finest artisans. 
          Discover heritage carpets, bespoke furniture, and timeless artifacts.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col md:flex-row gap-6 justify-center items-center"
        >
          <Link
            href="/products"
            className="group relative px-8 py-4 bg-amber-600 text-white overflow-hidden transition-all hover:bg-amber-700"
          >
            <span className="relative z-10 flex items-center gap-2 font-medium tracking-widest uppercase text-sm">
              View Collection <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
          <Link
            href="/about"
            className="px-8 py-4 bg-transparent border border-stone-600 text-stone-300 hover:border-white hover:text-white transition-all font-medium tracking-widest uppercase text-sm"
          >
             Our Story
          </Link>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce duration-[2000ms]">
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent to-amber-500/50" />
      </div>
    </section>
  );
}
