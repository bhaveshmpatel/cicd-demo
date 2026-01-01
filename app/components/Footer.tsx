import Link from "next/link";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-stone-950 border-t border-stone-800 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-2xl font-serif text-white tracking-widest uppercase mb-6">
              Patel <span className="text-amber-500">Exports</span>
            </h2>
            <p className="text-stone-400 text-sm leading-relaxed mb-6">
              Bringing the timeless elegance of Indian craftsmanship to the global stage. 
              We specialize in luxury furniture, exquisite carpets, and authentic artifacts.
            </p>
            <div className="flex gap-4">
              <SocialLink href="#" icon={<Instagram size={20} />} />
              <SocialLink href="#" icon={<Facebook size={20} />} />
              <SocialLink href="#" icon={<Linkedin size={20} />} />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-serif tracking-widest uppercase mb-6">Explore</h3>
            <ul className="space-y-4 text-stone-400 text-sm">
              <li><Link href="/" className="hover:text-amber-500 transition-colors">Home</Link></li>
              <li><Link href="/products" className="hover:text-amber-500 transition-colors">Our Collection</Link></li>
              <li><Link href="/about" className="hover:text-amber-500 transition-colors">Heritage</Link></li>
              <li><Link href="/contact" className="hover:text-amber-500 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white font-serif tracking-widest uppercase mb-6">Collections</h3>
            <ul className="space-y-4 text-stone-400 text-sm">
              <li><Link href="/products?cat=carpets" className="hover:text-amber-500 transition-colors">Royal Carpets</Link></li>
              <li><Link href="/products?cat=furniture" className="hover:text-amber-500 transition-colors">Teak Furniture</Link></li>
              <li><Link href="/products?cat=textiles" className="hover:text-amber-500 transition-colors">Luxury Textiles</Link></li>
              <li><Link href="/products?cat=decor" className="hover:text-amber-500 transition-colors">Home Decor</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-serif tracking-widest uppercase mb-6">Contact</h3>
            <ul className="space-y-4 text-stone-400 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-amber-500 mt-1 shrink-0" />
                <span>123 Export Avenue, Heritage City,<br />Gujarat, India - 380001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-amber-500 shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-amber-500 shrink-0" />
                <span>exports@patelexports.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone-500 uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} Patel Exports. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-stone-300">Privacy Policy</Link>
            <Link href="#" className="hover:text-stone-300">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      className="w-10 h-10 rounded-full border border-stone-800 flex items-center justify-center text-stone-400 hover:border-amber-500 hover:text-amber-500 hover:bg-amber-500/10 transition-all duration-300"
    >
      {icon}
    </a>
  );
}
