import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";

export default function About() {
  return (
    <main className="min-h-screen bg-stone-950">
      <Header />
      
      {/* Page Header */}
      <div className="relative pt-32 pb-16 md:pt-48 md:pb-24 px-6 text-center bg-stone-950">
        <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1590059390492-d54c4245b374?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/80 to-stone-950 z-0" />
        
        <div className="relative z-10">
          <span className="text-amber-500 font-bold uppercase tracking-widest text-xs mb-4 block">Our Heritage</span>
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">The Legacy</h1>
          <div className="w-24 h-1 bg-amber-500 mx-auto" />
        </div>
      </div>

      <section className="py-20 px-6 container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-square md:aspect-[4/5]">
            <Image 
              src="https://images.unsplash.com/photo-1560183188-444453535efd?q=80&w=2693&auto=format&fit=crop"
              alt="Artisan at work"
              fill
              className="object-cover"
            />
            <div className="absolute -bottom-6 -right-6 w-48 h-48 border border-amber-500/30 hidden md:block" />
            <div className="absolute -top-6 -left-6 w-48 h-48 border border-amber-500/30 hidden md:block" />
          </div>
          <div>
            <h2 className="text-3xl font-serif text-white mb-6">Crafting History Since 1985</h2>
            <p className="text-stone-400 mb-6 leading-relaxed">
              Founded in the cultural heart of Gujarat, Patel Exports began as a humble initiative to preserve traditional Indian craftsmanship. What started as a small workshop has grown into a global export house, trusted by interior designers, luxury hotels, and art collectors across 40 countries.
            </p>
             <p className="text-stone-400 mb-6 leading-relaxed">
               We believe true luxury lies in the details—the knot count of a carpet, the grain of seasoned teak, the symmetry of hand-painted pottery. Our mission is to ensure these ancient skills thrive in the modern world.
            </p>
            <div className="grid grid-cols-2 gap-8 mt-12">
               <div>
                 <h3 className="text-4xl font-serif text-amber-500 mb-2">40+</h3>
                 <p className="text-stone-500 uppercase tracking-widest text-xs">Years of Excellence</p>
               </div>
               <div>
                 <h3 className="text-4xl font-serif text-amber-500 mb-2">500+</h3>
                 <p className="text-stone-500 uppercase tracking-widest text-xs">Master Artisans</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
