"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Linkedin, Mail, Phone, ArrowRight } from "lucide-react";
import { getTeam } from "@/lib/content-utils";

export default function LeadershipPage() {
  const team = getTeam();

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/leadership-bg.png"
            alt="Leadership Background"
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
            Our <span className="green-gradient">Leadership</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-green uppercase tracking-[0.4em] text-sm font-bold"
          >
            Visionary management for a global age
          </motion.p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 px-6 text-center border-b border-black/5">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-8">Guided by <span className="text-green italic">Experience</span> and <span className="text-green italic">Integrity</span>.</h2>
          <p className="text-muted-foreground text-lg font-light leading-relaxed">
            The FOUNDATION TRADING COMPANY leadership team brings together decades of expertise from across the energy, financial, and logistics sectors. Our management approach is built on transparency, strategic foresight, and a commitment to delivering long-term value to our partners and stakeholders.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="aspect-3/4 bg-card border border-black/5 relative overflow-hidden mb-6 shadow-sm group-hover:shadow-md transition-shadow">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-green/5 font-serif text-9xl italic group-hover:scale-110 transition-transform duration-700">FT</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform bg-white/95 backdrop-blur-sm border-t border-green/20 flex gap-4 justify-center">
                  <a href={member.social.linkedin} className="p-2 text-foreground/60 hover:text-green transition-colors" aria-label="LinkedIn"><Linkedin size={20} /></a>
                  <a href={member.social.email} className="p-2 text-foreground/60 hover:text-green transition-colors" aria-label="Email"><Mail size={20} /></a>
                  <a href={member.social.phone} className="p-2 text-foreground/60 hover:text-green transition-colors" aria-label="Phone"><Phone size={20} /></a>
                </div>
              </div>
              <h3 className="text-xl font-serif text-foreground mb-1">{member.name}</h3>
              <p className="text-green font-bold uppercase tracking-widest text-[10px] mb-4">{member.role}</p>
              <p className="text-muted-foreground text-sm font-light leading-relaxed">
                {member.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Advisory Board / Governance Placeholder */}
      <section className="py-24 px-6 bg-card border-y border-black/5">
        <div className="max-w-7xl mx-auto border-l-4 border-green pl-12 py-8 bg-white shadow-xl shadow-green/5">
          <h2 className="text-green font-bold uppercase tracking-[0.3em] text-sm mb-4">Governance</h2>
          <h3 className="text-3xl font-serif text-foreground mb-6">Built on a foundation of <br />Corporate Responsibility.</h3>
          <p className="text-muted-foreground max-w-2xl font-light mb-8 pt-4">
            Our governance framework ensures that every decision we make is aligned with international ethical standards and legal requirements, protecting the integrity of our trading operations and our reputation globally.
          </p>
          <button className="flex items-center gap-2 text-foreground font-bold uppercase tracking-widest text-xs hover:text-green transition-colors group">
            Governance Framework <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
