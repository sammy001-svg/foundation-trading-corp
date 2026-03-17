import React from "react";
import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram, MapPin } from "lucide-react";

const footerLinks = {
  Commodities: [
    { name: "Sulfur", href: "/commodities#sulfur" },
    { name: "Soda Ash", href: "/commodities#soda-ash" },
    { name: "Potash", href: "/commodities#potash" },
    { name: "Urea", href: "/commodities#urea" },
    { name: "Sugar", href: "/commodities#sugar" },
    { name: "Salt", href: "/commodities#salt" },
    { name: "Coffee", href: "/commodities#coffee" },
    { name: "Petroleum", href: "/commodities#petroleum" },
    { name: "Metals & Mining", href: "/commodities#metals" },
    { name: "Livestock", href: "/commodities#livestock" },
    { name: "Edible Oils", href: "/commodities#edible-oils" },
    { name: "Superfoods", href: "/commodities#baobab" },
  ],
  Company: [
    { name: "About Us", href: "/about" },
    { name: "What We Do", href: "/services" },
    { name: "Sustainability", href: "/sustainability" },
    { name: "Leadership", href: "/leadership" },
  ],
  Support: [
    { name: "Contact", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
  ],
};

const offices = [
  { city: "Nairobi (Headquarters)", address: "Warai Road, Karen - Nairobi", phone: "+254 725 984 877 / +254 721 767 225" },
];

export function Footer() {
  return (
    <footer className="bg-[#064e3b] pt-20 pb-10 px-6 text-white/90">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-white text-green rounded flex items-center justify-center font-serif font-bold text-xl">
                F
              </div>
              <span className="text-white font-serif text-xl font-semibold tracking-wide">
                FOUNDATION <span className="text-green-400">TRADING COMPANY</span>
              </span>
            </Link>
            <p className="text-white/60 max-w-sm mb-8 font-light leading-relaxed">
              A premier global commodity trading house, facilitating the flow of essential resources across continents with integrity and precision.
            </p>
            <div className="flex gap-4">
              {[Linkedin, Twitter, Facebook, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label={`Visit our ${Icon.name} page`}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:bg-white hover:text-green hover:border-white transition-all"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white font-serif text-lg mb-6">{title}</h4>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-white/50 hover:text-white transition-colors text-sm font-light"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16 border-y border-white/5 py-12">
          {offices.map((office) => (
            <div key={office.city} className="flex gap-4">
              <MapPin className="text-green-400 shrink-0" size={20} />
              <div>
                <h5 className="text-white font-bold text-sm uppercase tracking-wider mb-2">
                  {office.city}
                </h5>
                <p className="text-white/50 text-sm font-light mb-1">{office.address}</p>
                <p className="text-white/50 text-xs font-light">{office.phone}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-10 border-t border-white/5">
          <p className="text-white/40 text-[10px] uppercase tracking-widest font-bold">
            © {new Date().getFullYear()} FOUNDATION TRADING COMPANY. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-[10px] uppercase tracking-widest text-white/40 font-bold">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
