import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";

const allProducts = [
  {
    id: 1,
    title: "Royal Kashmiri Carpet",
    price: "Price on Request",
    image: "https://images.unsplash.com/photo-1600166898405-da9535204843?q=80&w=2680&auto=format&fit=crop",
    category: "Carpets"
  },
  {
    id: 2,
    title: "Colonial Teak Chair",
    price: "Price on Request",
    image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=2670&auto=format&fit=crop",
    category: "Furniture"
  },
  {
    id: 3,
    title: "Hand-Painted Vase",
    price: "Price on Request",
    image: "https://images.unsplash.com/photo-1579762715118-a6f1d4b934f1?q=80&w=2680&auto=format&fit=crop",
    category: "Decor"
  },
  {
    id: 4,
    title: "Silk Embroidered Throw",
    price: "Price on Request",
    image: "https://images.unsplash.com/photo-1528458909336-e7a0adfed0a5?q=80&w=2574&auto=format&fit=crop",
    category: "Textiles"
  },
  {
    id: 5,
    title: "Brass Vintage Lamp",
    price: "Price on Request",
    image: "https://images.unsplash.com/photo-1517991104123-1d56a6e81ed9?q=80&w=2670&auto=format&fit=crop",
    category: "Decor"
  },
   {
    id: 6,
    title: "Rosewood Dining Table",
    price: "Price on Request",
    image: "https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=2674&auto=format&fit=crop",
    category: "Furniture"
  }
];

export default function Products() {
  return (
    <main className="min-h-screen bg-stone-950">
      <Header />
      
      <div className="pt-32 pb-12 px-6 container mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">Our Collection</h1>
        <p className="text-stone-400 max-w-2xl mx-auto">Discover our curated selection of India's finest exports.</p>
      </div>

      <section className="pb-24 px-6 container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProducts.map((product) => (
             <div key={product.id} className="group cursor-pointer">
                <div className="aspect-[3/4] relative overflow-hidden bg-stone-900 mb-4">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white border border-white/30 px-6 py-2 uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-colors">Inquire</span>
                  </div>
                </div>
                <div className="flex justify-between items-start">
                   <div>
                      <h3 className="text-lg font-serif text-white group-hover:text-amber-500 transition-colors">{product.title}</h3>
                      <p className="text-stone-500 text-xs uppercase tracking-widest mt-1">{product.category}</p>
                   </div>
                </div>
             </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
