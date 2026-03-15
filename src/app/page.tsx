"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { WhatWeDo } from "@/components/home/WhatWeDo";
import { TradeMap } from "@/components/home/TradeMap";
import { getInsights } from "@/lib/content-utils";

export default function Home() {
  const insights = getInsights();
  const featuredInsight = insights[0];

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      
      {/* Products Section */}
      <WhatWeDo />
      
      {/* Featured Insight Section */}
      <section className="py-24 px-6 bg-card">
        <div className="max-w-7xl mx-auto border border-green/10 p-12 lg:p-20 relative overflow-hidden group bg-background shadow-xl shadow-green/5">
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-xl">
              <h4 className="text-green font-bold uppercase tracking-widest text-xs mb-4">{featuredInsight.category}</h4>
              <h3 className="text-3xl md:text-4xl font-serif text-foreground mb-6">{featuredInsight.title}</h3>
              <p className="text-muted-foreground font-light mb-8">{featuredInsight.summary}</p>
              <button className="px-8 py-4 bg-foreground text-white font-bold uppercase tracking-widest text-sm rounded hover:bg-green transition-all shadow-lg shadow-black/10">
                Read Report
              </button>
            </div>
            <div className="w-full lg:w-1/3 aspect-video bg-green/5 border border-green/10 flex items-center justify-center">
              <span className="text-green/20 font-serif text-4xl italic">Insight</span>
            </div>
          </div>
          {/* Decorative element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-green/5 blur-[100px] -mr-32 -mt-32" />
        </div>
      </section>

      {/* Trade Connectivity Section */}
      <TradeMap />

      <Footer />
    </main>
  );
}
