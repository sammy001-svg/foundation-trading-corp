"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Target, Eye } from "lucide-react";

const values = [
  {
    title: "Our Mission",
    description: "To bridge global markets with integrity, ensuring the efficient and sustainable flow of essential commodities that power the world's economy.",
    icon: Target,
  },
  {
    title: "Our Vision",
    description: "To be the most trusted partner in global commodity trading, recognized for our excellence in logistics, market intelligence, and commitment to a sustainable future.",
    icon: Eye,
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/about-bg.png"
            alt="Corporate Architecture Background"
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
            About <span className="green-gradient">Foundation Trading</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-green uppercase tracking-[0.4em] text-sm font-bold"
          >
            Integrity • Excellence • Global Reach
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, x: i === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-10 bg-card border border-black/5 relative group shadow-sm hover:shadow-md transition-all"
            >
              <value.icon className="text-green mb-6 w-12 h-12" />
              <h2 className="text-2xl font-serif text-foreground mb-4">{value.title}</h2>
              <p className="text-muted-foreground text-lg font-light leading-relaxed">
                {value.description}
              </p>
              <div className="absolute top-0 right-0 w-32 h-32 bg-green/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* History Section */}
      <section className="py-24 px-6 bg-card border-y border-black/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-green font-bold uppercase tracking-[0.3em] text-sm mb-4">Our Journey</h2>
            <h3 className="text-4xl font-serif text-foreground">A Legacy of <span className="green-gradient">Trust</span></h3>
          </div>
          
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="md:w-1/4">
                <span className="text-4xl font-serif text-green/60">2010</span>
              </div>
              <div className="md:w-3/4">
                <h4 className="text-xl font-bold text-foreground mb-2 uppercase tracking-wide">Foundation</h4>
                <p className="text-muted-foreground font-light leading-relaxed">
                  Established with a primary focus on energy trading in European markets, Foundation Trading quickly set a benchmark for reliability and market intelligence.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="md:w-1/4">
                <span className="text-4xl font-serif text-green/60">2015</span>
              </div>
              <div className="md:w-3/4">
                <h4 className="text-xl font-bold text-foreground mb-2 uppercase tracking-wide">Global Expansion</h4>
                <p className="text-muted-foreground font-light leading-relaxed">
                  Expanded operations to include base metals and agricultural products, opening strategic offices in Singapore and Geneva to facilitate global trade flows.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="md:w-1/4">
                <span className="text-4xl font-serif text-green/60">2022</span>
              </div>
              <div className="md:w-3/4">
                <h4 className="text-xl font-bold text-foreground mb-2 uppercase tracking-wide">Sustainable Future</h4>
                <p className="text-muted-foreground font-light leading-relaxed">
                  Launched our dedicated Sustainability initiative, focusing on renewable energy and responsible sourcing, ensuring our trading practices align with global ESG standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values / Stats Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-serif text-green mb-2">50+</div>
            <div className="text-foreground text-xs uppercase tracking-[0.2em] font-bold">Countries</div>
          </div>
          <div>
            <div className="text-4xl font-serif text-green mb-2">400M+</div>
            <div className="text-foreground text-xs uppercase tracking-[0.2em] font-bold">Annual Volume</div>
          </div>
          <div>
            <div className="text-4xl font-serif text-green mb-2">1</div>
            <div className="text-foreground text-xs uppercase tracking-[0.2em] font-bold">Strategic HQ</div>
          </div>
          <div>
            <div className="text-4xl font-serif text-green mb-2">15+</div>
            <div className="text-foreground text-xs uppercase tracking-[0.2em] font-bold">Years Excellence</div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
