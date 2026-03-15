"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import heroData from "@/data/hero.json";

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = heroData;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      {/* Background Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <Image
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            fill
            className="object-cover opacity-80"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-linear-to-b from-white/20 via-white/5 to-white/60" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-32">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="text-green font-bold uppercase tracking-[0.4em] text-xs mb-6 block">
              {slides[currentSlide].tagline}
            </span>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif text-foreground leading-tight mb-8">
              {slides[currentSlide].title.split(' ')[0]} <br />
              <span className="green-gradient italic">{slides[currentSlide].title.split(' ').slice(1).join(' ')}</span>
            </h1>
            <p className="text-foreground/70 text-lg md:text-xl font-light mb-12 max-w-2xl leading-relaxed">
              {slides[currentSlide].subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <button className="px-10 py-5 bg-green text-white font-bold uppercase tracking-widest text-xs hover:bg-foreground transition-all flex items-center justify-center gap-3 shadow-lg shadow-green/20">
                Explore Markets <ArrowRight size={18} />
              </button>
              <button className="px-10 py-5 border border-foreground/10 text-foreground font-bold uppercase tracking-widest text-xs hover:bg-foreground hover:text-white transition-all">
                About Foundation
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Manual Controls */}
      <div className="absolute bottom-10 right-10 z-20 flex gap-4">
        <button 
          onClick={prevSlide}
          aria-label="Previous slide"
          className="w-12 h-12 rounded-full border border-black/5 flex items-center justify-center text-foreground/40 hover:text-green hover:border-green transition-all bg-white/50 backdrop-blur-sm"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={nextSlide}
          aria-label="Next slide"
          className="w-12 h-12 rounded-full border border-black/5 flex items-center justify-center text-foreground/40 hover:text-green hover:border-green transition-all bg-white/50 backdrop-blur-sm"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute left-10 bottom-10 z-20 flex flex-col gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`w-px transition-all duration-500 ${
              currentSlide === i ? "h-12 bg-green" : "h-6 bg-black/10 hover:bg-black/20"
            }`}
          />
        ))}
      </div>

      {/* Central Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 hidden md:block"
      >
        <div className="w-px h-12 bg-linear-to-b from-green/50 to-transparent mx-auto" />
      </motion.div>
    </section>
  );
}
