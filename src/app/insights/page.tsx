"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Calendar, Tag, ChevronRight } from "lucide-react";
import { getInsights } from "@/lib/content-utils";

export default function InsightsPage() {
  const insights = getInsights();

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[50vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/commodities-bg.png" // Reusing since it's professional and fits
            alt="Insights Background"
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
            Market <span className="green-gradient">Insights</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-green uppercase tracking-[0.4em] text-sm font-bold"
          >
            Intelligence for global decision making
          </motion.p>
        </div>
      </section>

      {/* Insights Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {insights.map((insight, i) => (
              <motion.article
                key={insight.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group flex flex-col h-full bg-card border border-black/5 hover:border-green/20 transition-all shadow-sm overflow-hidden"
              >
                <div className="aspect-video relative overflow-hidden bg-green/5">
                   <div className="absolute inset-0 flex items-center justify-center">
                     <span className="text-green/10 font-serif text-3xl italic">FT Research</span>
                   </div>
                   <div className="absolute top-4 left-4 z-10">
                     <span className="bg-white/90 backdrop-blur-sm px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-green border border-green/10">
                       {insight.category}
                     </span>
                   </div>
                </div>
                
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-[10px] uppercase tracking-widest text-muted-foreground mb-4">
                    <span className="flex items-center gap-1"><Calendar size={12} /> {insight.date}</span>
                    <span className="flex items-center gap-1"><Tag size={12} /> {insight.category}</span>
                  </div>
                  
                  <h2 className="text-2xl font-serif text-foreground mb-4 group-hover:text-green transition-colors leading-tight">
                    {insight.title}
                  </h2>
                  
                  <p className="text-muted-foreground text-sm font-light leading-relaxed mb-8 grow">
                    {insight.summary}
                  </p>
                  
                  <button className="flex items-center gap-2 text-foreground font-bold uppercase tracking-widest text-[10px] hover:text-green transition-colors group/btn">
                    Read Analysis <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="py-24 px-6 bg-card border-y border-black/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-green font-bold uppercase tracking-[0.3em] text-sm mb-4">Newsletter</h2>
          <h3 className="text-4xl font-serif text-foreground mb-8">Stay Ahead of the <span className="green-gradient">Curve</span>.</h3>
          <p className="text-muted-foreground font-light mb-12 italic">Receive our bi-weekly market analysis and critical updates directly to your inbox.</p>
          
          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input 
              type="email" 
              placeholder="Email Address"
              className="grow bg-background border border-black/10 px-6 py-4 text-foreground focus:outline-none focus:border-green transition-colors"
            />
            <button className="bg-green text-white font-bold uppercase tracking-widest text-xs px-10 py-4 hover:bg-foreground transition-all">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}
