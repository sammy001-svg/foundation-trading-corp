"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

// Product navigation removed as it's not currently used in the desktop view to avoid clutter.
// Navigation is handled via the Commodities page.

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Commodities", href: "/commodities" },
  { name: "Services", href: "/services" },
  { name: "Sustainability", href: "/sustainability" },
  { name: "About", href: "/about" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4",
        isScrolled ? "bg-green shadow-xl py-3" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className={cn(
            "w-10 h-10 rounded flex items-center justify-center font-serif font-bold text-xl transition-colors",
            isScrolled ? "bg-white text-green" : "bg-green text-white"
          )}>
            F
          </div>
          <span className="font-serif text-xl font-semibold tracking-wide hidden sm:block text-white">
            FOUNDATION <span className={isScrolled ? "text-white/80" : "text-green"}>TRADING COMPANY</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="transition-colors text-sm font-medium uppercase tracking-widest text-white/90 hover:text-white"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className={cn(
              "px-5 py-2.5 rounded text-sm font-bold uppercase tracking-wider flex items-center gap-2 transition-all group",
              isScrolled 
                ? "bg-white text-green hover:bg-white/90" 
                : "bg-green text-white hover:bg-foreground"
            )}
          >
            Contact 
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className={cn(
            isScrolled ? "text-foreground" : "text-white",
            "md:hidden"
          )}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-black/5 p-6 md:hidden flex flex-col gap-6"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-foreground text-lg font-medium hover:text-green transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="w-full py-4 bg-green text-white rounded text-center font-bold uppercase tracking-wider"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
