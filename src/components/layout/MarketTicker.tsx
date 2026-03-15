"use client";

import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, TrendingDown } from "lucide-react";

const marketData = [
  { symbol: "SULFUR", price: "185.50", change: "+0.45%", up: true },
  { symbol: "SODA ASH", price: "245.20", change: "-0.12%", up: false },
  { symbol: "POTASH", price: "312.80", change: "+1.20%", up: true },
  { symbol: "UREA", price: "420.15", change: "+0.85%", up: true },
  { symbol: "SUGAR", price: "22.45", change: "-0.30%", up: false },
  { symbol: "SALT", price: "45.10", change: "+0.05%", up: true },
  { symbol: "COFFEE", price: "188.90", change: "-0.75%", up: false },
];

export function MarketTicker() {
  return (
    <div className="w-full bg-[#047857] text-white py-2 overflow-hidden border-b border-white/10 hidden md:block">
      <motion.div
        animate={{ x: [0, -1000] }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex whitespace-nowrap gap-12 items-center"
      >
        {[...marketData, ...marketData, ...marketData].map((item, i) => (
          <div key={i} className="flex items-center gap-3 font-mono text-[10px] tracking-widest font-bold">
            <span className="text-white/60">{item.symbol}</span>
            <span className="text-white">${item.price}</span>
            <span className={item.up ? "text-green-400 flex items-center gap-1" : "text-red-400 flex items-center gap-1"}>
              {item.up ? <TrendingUp size={10} /> : <TrendingDown size={10} />}
              {item.change}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
