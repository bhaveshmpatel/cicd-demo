import Header from "../components/Header";
import Footer from "../components/Footer";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <main className="min-h-screen bg-stone-950">
      <Header />

      <div className="pt-32 pb-20 container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-serif text-white text-center mb-16">Get In Touch</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
               {/* Contact Info */}
               <div className="space-y-8">
                  <h2 className="text-2xl font-serif text-white mb-6">Contact Information</h2>
                  <div className="flex items-start gap-4">
                     <div className="w-12 h-12 bg-stone-900 border border-stone-800 flex items-center justify-center text-amber-500 shrink-0">
                        <MapPin size={24} />
                     </div>
                     <div>
                        <h3 className="text-stone-300 font-medium mb-1">Headquarters</h3>
                        <p className="text-stone-500 text-sm">123 Export Avenue, Heritage City,<br />Gujarat, India - 380001</p>
                     </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                     <div className="w-12 h-12 bg-stone-900 border border-stone-800 flex items-center justify-center text-amber-500 shrink-0">
                        <Phone size={24} />
                     </div>
                     <div>
                        <h3 className="text-stone-300 font-medium mb-1">Phone</h3>
                        <p className="text-stone-500 text-sm">+91 98765 43210</p>
                        <p className="text-stone-500 text-sm">+91 79 1234 5678</p>
                     </div>
                  </div>

                  <div className="flex items-start gap-4">
                     <div className="w-12 h-12 bg-stone-900 border border-stone-800 flex items-center justify-center text-amber-500 shrink-0">
                        <Mail size={24} />
                     </div>
                     <div>
                        <h3 className="text-stone-300 font-medium mb-1">Email</h3>
                        <p className="text-stone-500 text-sm">exports@patelexports.com</p>
                        <p className="text-stone-500 text-sm">inquiry@patelexports.com</p>
                     </div>
                  </div>
               </div>

                {/* Form */}
               <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-6">
                     <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-stone-500">First Name</label>
                        <input type="text" className="w-full bg-stone-900 border border-stone-800 p-3 text-white focus:outline-none focus:border-amber-500 transition-colors" />
                     </div>
                     <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-stone-500">Last Name</label>
                        <input type="text" className="w-full bg-stone-900 border border-stone-800 p-3 text-white focus:outline-none focus:border-amber-500 transition-colors" />
                     </div>
                  </div>
                  <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-stone-500">Email Address</label>
                        <input type="email" className="w-full bg-stone-900 border border-stone-800 p-3 text-white focus:outline-none focus:border-amber-500 transition-colors" />
                  </div>
                   <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-stone-500">Message</label>
                        <textarea rows={4} className="w-full bg-stone-900 border border-stone-800 p-3 text-white focus:outline-none focus:border-amber-500 transition-colors"></textarea>
                  </div>
                  <button className="w-full bg-amber-600 text-white py-4 uppercase tracking-widest text-sm hover:bg-amber-700 transition-colors">
                     Send Inquiry
                  </button>
               </form>
            </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
