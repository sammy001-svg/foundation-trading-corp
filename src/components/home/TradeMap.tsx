"use client";

import React from "react";
import { motion } from "framer-motion";

const hubs = [
  { name: "Nairobi", coords: { x: 550, y: 350 }, isHQ: true },
  { name: "London", coords: { x: 450, y: 150 } },
  { name: "Singapore", coords: { x: 750, y: 400 } },
  { name: "Geneva", coords: { x: 480, y: 180 } },
  { name: "New York", coords: { x: 250, y: 180 } },
  { name: "Sao Paulo", coords: { x: 300, y: 450 } },
  { name: "Dubai", coords: { x: 580, y: 250 } },
];

export function TradeMap() {
  return (
    <section className="py-24 px-6 bg-background overflow-hidden border-t border-black/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-green font-bold uppercase tracking-[0.3em] text-sm mb-4">Global Network</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-foreground">Moving the World&apos;s <span className="green-gradient">Resources</span>.</h3>
        </div>

        <div className="relative aspect-21/9 w-full bg-green/2 border border-black/5 rounded-3xl p-8 flex items-center justify-center">
          <svg viewBox="0 0 1000 600" className="w-full h-full opacity-40">
             {/* Simplified World Map Background Placeholder - Stylized dots */}
             <defs>
               <pattern id="dotPattern" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                 <circle cx="1" cy="1" r="1" fill="#10b981" opacity="0.1" />
               </pattern>
             </defs>
             <rect width="1000" height="600" fill="url(#dotPattern)" />
             
             {/* Trade Routes */}
             {hubs.filter(h => !h.isHQ).map((hub, i) => (
               <motion.path
                 key={hub.name}
                 d={`M 550 350 Q ${(550 + hub.coords.x) / 2} ${(350 + hub.coords.y) / 2 - 50} ${hub.coords.x} ${hub.coords.y}`}
                 fill="none"
                 stroke="#10b981"
                 strokeWidth="1.5"
                 strokeDasharray="5,5"
                 initial={{ pathLength: 0, opacity: 0 }}
                 whileInView={{ pathLength: 1, opacity: 0.5 }}
                 transition={{ duration: 2, delay: i * 0.3, repeat: Infinity, repeatDelay: 3 }}
                 viewport={{ once: true }}
               />
             ))}

             {/* Animated pulsing lines */}
             {hubs.filter(h => !h.isHQ).map((hub, i) => (
               <motion.circle
                 key={`pulse-${hub.name}`}
                 r="2"
                 fill="#10b981"
                 initial={{ offsetDistance: "0%" }}
                 animate={{ offsetDistance: "100%" }}
                 transition={{ duration: 3, delay: i * 0.3, repeat: Infinity, ease: "linear" }}
                 style={{ offsetPath: `path('M 550 350 Q ${(550 + hub.coords.x) / 2} ${(350 + hub.coords.y) / 2 - 50} ${hub.coords.x} ${hub.coords.y}')` }}
               />
             ))}

             {/* Hub Points */}
             {hubs.map((hub) => (
               <g key={hub.name}>
                 <motion.circle
                   cx={hub.coords.x}
                   cy={hub.coords.y}
                   r={hub.isHQ ? 6 : 4}
                   fill="#10b981"
                   initial={{ scale: 0 }}
                   whileInView={{ scale: 1 }}
                   transition={{ type: "spring", stiffness: 100, delay: 0.5 }}
                 />
                 {hub.isHQ && (
                   <motion.circle
                     cx={hub.coords.x}
                     cy={hub.coords.y}
                     r={12}
                     stroke="#10b981"
                     strokeWidth="1"
                     fill="none"
                     initial={{ scale: 0, opacity: 1 }}
                     animate={{ scale: 3, opacity: 0 }}
                     transition={{ duration: 2, repeat: Infinity }}
                   />
                 )}
                 <text
                   x={hub.coords.x}
                   y={hub.coords.y + 20}
                   textAnchor="middle"
                   className="fill-foreground/40 text-[8px] font-bold uppercase tracking-widest pointer-events-none"
                 >
                   {hub.name}
                 </text>
               </g>
             ))}
          </svg>
          
          <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
            <div className="max-w-xs">
              <p className="text-[10px] text-muted-foreground uppercase tracking-[0.2em] font-bold mb-2">Operational Scalability</p>
              <p className="text-sm font-light leading-relaxed">Our logistics network spans key maritime routes, ensuring that critical industrial materials reach their destination with zero friction.</p>
            </div>
            <div className="flex gap-4">
               <div className="flex items-center gap-2">
                 <div className="w-2 h-2 rounded-full bg-green" />
                 <span className="text-[10px] uppercase font-bold tracking-widest">Global Hubs</span>
               </div>
               <div className="flex items-center gap-2">
                 <div className="w-4 h-px border-t border-dashed border-green" />
                 <span className="text-[10px] uppercase font-bold tracking-widest">Active Routes</span>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
