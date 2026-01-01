import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import ProductSection from "./components/ProductSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-950">
      <Header />
      <Hero />
      <ProductSection />
      
      {/* Introduction Wrapper */}
      <section className="py-24 bg-stone-950 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-900/40 to-transparent" />
        <div className="container mx-auto px-6 text-center">
           <h2 className="text-3xl md:text-4xl font-serif text-white mb-8">Decades of Excellence</h2>
           <p className="text-stone-400 max-w-3xl mx-auto text-lg leading-relaxed font-light">
             For over 40 years, Patel Exports has been the bridge between India's royal heritage and modern luxury homes worldwide. 
             Every piece we export is a testament to the skilled hands of our master artisans.
           </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
