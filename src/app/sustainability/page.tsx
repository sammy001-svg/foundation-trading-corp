"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Leaf, Wind, Droplets, Sun, CheckCircle2, Globe, TrendingUp, ShieldCheck } from "lucide-react";

const esgPillars = [
  {
    title: "Environmental",
    icon: Leaf,
    items: [
      "Carbon Footprint Reduction",
      "Renewable Energy Investments",
      "Sustainable Supply Chain",
      "Biodiversity Protection",
    ],
  },
  {
    title: "Social",
    icon: Globe,
    items: [
      "Community Development",
      "Health & Safety Standards",
      "Diversity & Inclusion",
      "Fair Labor Practices",
    ],
  },
  {
    title: "Governance",
    icon: ShieldCheck,
    items: [
      "Transparency & Ethics",
      "Risk Management Oversight",
      "Board Diversity",
      "Anti-Corruption Compliance",
    ],
  },
];

export default function SustainabilityPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/sustainability-bg.png"
            alt="Sustainability Background"
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
            Commitment to <span className="green-gradient">Sustainability</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-green uppercase tracking-[0.4em] text-sm font-bold"
          >
            Trading for a better tomorrow
          </motion.p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-8">Responsibility is at the <span className="text-green italic">heart</span> of our operations.</h2>
          <p className="text-muted-foreground text-lg font-light leading-relaxed mb-12">
            At FOUNDATION TRADING COMPANY, we recognize that our role in global markets comes with a significant responsibility to the environment and the communities we serve. We are dedicated to integrating ESG principles across our entire business model.
          </p>
          <div className="w-24 h-px bg-green mx-auto" />
        </div>
      </section>

      {/* ESG Pillars */}
      <section className="py-24 px-6 bg-card border-y border-black/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {esgPillars.map((pillar) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-10 bg-background border border-black/5 group hover:border-green/30 transition-all shadow-sm hover:shadow-md"
            >
              <pillar.icon className="text-green mb-8 w-12 h-12 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-serif text-foreground mb-6 uppercase tracking-widest">{pillar.title}</h3>
              <ul className="space-y-4">
                {pillar.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-muted-foreground text-sm font-light">
                    <CheckCircle2 className="text-green w-4 h-4 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Impact Stats / Highlights */}
      <section className="py-24 px-6 relative overflow-hidden bg-background">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green/5 blur-[120px] -mr-64 -mt-64" />
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-green font-bold uppercase tracking-[0.3em] text-sm mb-4">Real Impact</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-foreground mb-8">Decarbonizing <br /><span className="green-gradient">Global Trade</span></h3>
            <p className="text-muted-foreground text-lg font-light leading-relaxed mb-8">
              We are actively reducing the carbon intensity of our shipping and logistics operations. By 2030, we aim to achieve a 40% reduction in our operational emissions through technical optimizations and transition to alternative fuels.
            </p>
            <div className="flex gap-12">
              <div>
                <div className="text-4xl font-serif text-green mb-2">2030</div>
                <div className="text-foreground text-xs uppercase tracking-widest font-bold">Net Zero Target</div>
              </div>
              <div>
                <div className="text-4xl font-serif text-green mb-2">40%</div>
                <div className="text-foreground text-xs uppercase tracking-widest font-bold">Emissions Reduced</div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-8 bg-card border border-black/5 flex flex-col items-center text-center shadow-xs">
              <Sun className="text-green mb-4 w-8 h-8" />
              <div className="text-foreground font-serif text-lg">Solar Energy</div>
              <div className="text-muted-foreground text-xs uppercase tracking-widest mt-2 font-bold">Investments</div>
            </div>
            <div className="mt-8 p-8 bg-card border border-black/5 flex flex-col items-center text-center shadow-xs">
              <Wind className="text-green mb-4 w-8 h-8" />
              <div className="text-foreground font-serif text-lg">Wind Power</div>
              <div className="text-muted-foreground text-xs uppercase tracking-widest mt-2 font-bold">Transition</div>
            </div>
            <div className="p-8 bg-card border border-black/5 flex flex-col items-center text-center shadow-xs">
              <TrendingUp className="text-green mb-4 w-8 h-8" />
              <div className="text-foreground font-serif text-lg">ESG Score</div>
              <div className="text-muted-foreground text-xs uppercase tracking-widest mt-2 font-bold">Reporting</div>
            </div>
            <div className="mt-8 p-8 bg-card border border-black/5 flex flex-col items-center text-center shadow-xs">
              <Droplets className="text-green mb-4 w-8 h-8" />
              <div className="text-foreground font-serif text-lg">H2 Hydrogen</div>
              <div className="text-muted-foreground text-xs uppercase tracking-widest mt-2 font-bold">R&D</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
