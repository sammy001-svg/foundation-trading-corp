"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { getProducts, getIcon } from "@/lib/content-utils";

export function WhatWeDo() {
  const products = getProducts();
  
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-green font-bold uppercase tracking-[0.3em] text-sm mb-4">
              Our Products
            </h2>
            <h3 className="text-4xl md:text-5xl font-serif text-foreground">
              Essential resources, <span className="green-gradient">Premium supply</span>
            </h3>
          </div>
          <button className="text-foreground hover:text-green transition-colors flex items-center gap-2 uppercase tracking-widest text-sm font-bold group">
            View All Products 
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, i) => {
            const Icon = getIcon(product.icon);
            return (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                className="group p-8 bg-card border border-black/5 hover:border-green/30 transition-all relative overflow-hidden shadow-sm"
              >
                <Icon className="text-green mb-8 w-10 h-10 group-hover:scale-110 transition-transform" />
                <h4 className="text-xl font-serif text-foreground mb-4 group-hover:text-green transition-colors">
                  {product.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 font-light">
                  {product.description}
                </p>
                <div className="w-8 h-[2px] bg-black/10 group-hover:w-16 group-hover:bg-green transition-all" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
