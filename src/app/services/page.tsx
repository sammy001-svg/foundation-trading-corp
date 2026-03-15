"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Ship, BarChart2, Zap, Database, ArrowRight } from "lucide-react";

const mainServices = [
  {
    title: "Global Commodity Trading",
    description: "Multi-commodity expertise with a focus on liquidity, market access, and strategic positioning in energy and metals markets.",
    icon: Database,
    features: ["Physical & Financial Trading", "Market Information Services", "Arbitrage Strategies"],
    image: "/service-trading.png"
  },
  {
    title: "Logistics & Supply Chain",
    description: "End-to-end management of commodity flows, utilizing our global network of shipping and storage across key trading hubs.",
    icon: Ship,
    features: ["Chartering & Freight", "Storage & Terminaling", "Inventory Management"],
    image: "/service-logistics.png"
  },
  {
    title: "Market Analysis & Research",
    description: "Deep-dive quantitative and qualitative research to identify emerging trends and manage market risks effectively.",
    icon: BarChart2,
    features: ["Real-time Data Feeds", "Quantitative Modeling", "Geopolitical Impact Studies"],
    image: "/service-research.png"
  },
  {
    title: "Strategic Asset Management",
    description: "Investing in and managing critical infrastructure assets to optimize and secure our global commodity supply chains.",
    icon: Zap,
    features: ["Infrastructure Investment", "Asset Performance Optimization", "Operational Excellence"],
    image: "/services-bg.png" // Fallback for now
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/services-bg.png"
            alt="Services Background"
            fill
            className="object-cover opacity-80"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-b from-white/40 via-transparent to-white/60" />
        </div>
        <div className="relative z-10 text-center px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif text-foreground mb-4"
          >
            What <span className="green-gradient">We Do</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-green uppercase tracking-[0.4em] text-sm font-bold"
          >
            Powering Global Trade Flows
          </motion.p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-7xl mx-auto space-y-32">
          {mainServices.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className={`flex flex-col lg:flex-row items-center gap-20 ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className="lg:w-1/2">
                <div className="w-16 h-16 bg-green/10 flex items-center justify-center text-green mb-8 rounded-full border border-green/20 shadow-sm">
                  <service.icon size={32} />
                </div>
                <h2 className="text-4xl font-serif text-foreground mb-6 leading-tight">
                  {service.title}
                </h2>
                <p className="text-muted-foreground text-lg font-light leading-relaxed mb-10">
                  {service.description}
                </p>
                <div className="space-y-4 mb-10">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-4 text-foreground/80">
                      <div className="w-5 h-5 bg-green/5 border border-green/20 rounded-full flex items-center justify-center shadow-xs">
                        <div className="w-1.5 h-1.5 bg-green rounded-full" />
                      </div>
                      <span className="text-sm font-medium uppercase tracking-widest">{feature}</span>
                    </div>
                  ))}
                </div>
                <button className="px-8 py-4 border border-green/30 text-green hover:bg-green hover:text-white transition-all font-bold uppercase tracking-widest text-xs flex items-center gap-3 shadow-lg shadow-green/5">
                  Learn More <ArrowRight size={16} />
                </button>
              </div>
              <div className="lg:w-1/2 w-full aspect-video bg-card border border-black/5 relative group overflow-hidden shadow-2xl shadow-black/5">
                <Image 
                  src={service.image} 
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-linear-to-br from-green/20 via-transparent to-black/40 opacity-30 group-hover:opacity-10 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Global Reach / Map Section */}
      <section className="py-24 px-6 bg-card border-y border-black/5 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-green font-bold uppercase tracking-[0.3em] text-sm mb-4">Operations</h2>
          <h3 className="text-4xl font-serif text-foreground mb-8">Integrated <span className="green-gradient">Value Chain</span></h3>
          <p className="text-muted-foreground text-lg font-light leading-relaxed mb-16">
            Our presence across major global hubs allows us to manage physical trade flows with unmatched efficiency. From extraction to end-user delivery, we oversee every link in the supply chain.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="p-6 bg-background border border-black/5 shadow-sm">
              <div className="text-3xl font-serif text-green mb-2">350+</div>
              <div className="text-foreground/40 text-[10px] uppercase tracking-widest font-bold">Ships Managed</div>
            </div>
            <div className="p-6 bg-background border border-black/5 shadow-sm">
              <div className="text-3xl font-serif text-green mb-2">12M</div>
              <div className="text-foreground/40 text-[10px] uppercase tracking-widest font-bold">Tons Shipped</div>
            </div>
            <div className="p-6 bg-background border border-black/5 shadow-sm">
              <div className="text-3xl font-serif text-green mb-2">24/7</div>
              <div className="text-foreground/40 text-[10px] uppercase tracking-widest font-bold">Global Support</div>
            </div>
            <div className="p-6 bg-background border border-black/5 shadow-sm">
              <div className="text-3xl font-serif text-green mb-2">15</div>
              <div className="text-foreground/40 text-[10px] uppercase tracking-widest font-bold">Strategic Hubs</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
