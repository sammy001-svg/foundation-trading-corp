"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ArrowRight, BarChart3, Globe2, ShieldCheck } from "lucide-react";
import { getProducts, getIcon } from "@/lib/content-utils";

export default function CommoditiesPage() {
  const products = getProducts();

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/commodities-bg.png"
            alt="Commodities Background"
            fill
            className="object-cover opacity-80"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-linear-to-b from-white/40 via-transparent to-white/60" />
        </div>
        <div className="relative z-10 text-center px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif text-foreground mb-4"
          >
            Our <span className="green-gradient">Product Portfolio</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-foreground/70 text-lg max-w-2xl mx-auto font-light"
          >
            Specialized expertise in essential minerals, chemicals, and soft commodities.
          </motion.p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto space-y-32">
          {products.map((product, i) => {
            const Icon = getIcon(product.icon);
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                id={product.id}
                className={`flex flex-col ${i % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 items-center`}
              >
                <div className="lg:w-1/2">
                  <Icon className="text-green mb-6 w-16 h-16" />
                  <h2 className="text-5xl font-serif text-foreground mb-6 underline decoration-green/20 underline-offset-8">
                    {product.title}
                  </h2>
                  <p className="text-muted-foreground text-lg mb-8 font-light leading-relaxed">
                    {product.description}
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {product.highlights.map((item) => (
                      <div key={item} className="flex items-center gap-2 text-foreground/80">
                        <div className="w-1.5 h-1.5 bg-green rounded-full shadow-sm" />
                        <span className="text-sm uppercase tracking-wider">{item}</span>
                      </div>
                    ))}
                  </div>
                  <button className="flex items-center gap-2 text-green font-bold uppercase tracking-widest text-xs hover:text-foreground transition-colors group">
                    Product Details <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
                <div className="lg:w-1/2 w-full aspect-4/3 relative group overflow-hidden border border-black/5 shadow-2xl shadow-black/5">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-green/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Edge Section */}
      <section className="py-24 px-6 bg-card border-y border-black/5">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-green font-bold uppercase tracking-[0.3em] text-sm mb-4">Our Edge</h2>
          <h3 className="text-4xl font-serif text-foreground">Full-Spectrum <span className="green-gradient">Capabilities</span></h3>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="p-8 bg-background border border-black/5 text-center shadow-sm hover:shadow-md transition-shadow">
            <BarChart3 className="text-green mx-auto mb-6 w-10 h-10" />
            <h4 className="text-foreground font-serif text-xl mb-4">Market Analysis</h4>
            <p className="text-muted-foreground text-sm font-light">Deep data-driven insights allowing us to anticipate market shifts and manage volatility effectively.</p>
          </div>
          <div className="p-8 bg-background border border-black/5 text-center shadow-sm hover:shadow-md transition-shadow">
            <Globe2 className="text-green mx-auto mb-6 w-10 h-10" />
            <h4 className="text-foreground font-serif text-xl mb-4">Global Logistics</h4>
            <p className="text-muted-foreground text-sm font-light">Comprehensive shipping and supply chain solutions, ensuring timely delivery even in complex regions.</p>
          </div>
          <div className="p-8 bg-background border border-black/5 text-center shadow-sm hover:shadow-md transition-shadow">
            <ShieldCheck className="text-green mx-auto mb-6 w-10 h-10" />
            <h4 className="text-foreground font-serif text-xl mb-4">Risk Management</h4>
            <p className="text-muted-foreground text-sm font-light">Robust financial and operational risk frameworks to protect our partners and sustain performance.</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
