"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import heroData from "@/data/hero.json";

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const slides = heroData;
  const AUTOPLAY_INTERVAL = 6000;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setProgress(0);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setProgress(0);
  }, [slides.length]);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          nextSlide();
          return 0;
        }
        return prev + (100 / (AUTOPLAY_INTERVAL / 100));
      });
    }, 100);

    return () => clearInterval(timer);
  }, [isPaused, currentSlide, nextSlide]);

  const onDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (info.offset.x < -100) nextSlide();
    else if (info.offset.x > 100) prevSlide();
  };

  return (
    <section 
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={onDragEnd}
        >
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: 1.1 }}
            transition={{ duration: AUTOPLAY_INTERVAL / 1000, ease: "linear" }}
            className="absolute inset-0"
          >
            <Image
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              fill
              className="object-cover opacity-80"
              priority
              sizes="100vw"
            />
          </motion.div>
          <div className="absolute inset-0 bg-linear-to-b from-black/40 via-transparent to-black/60" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: "circOut" }}
            className="max-w-4xl"
          >
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-green font-bold uppercase tracking-[0.4em] text-xs mb-6 block"
            >
              {slides[currentSlide].tagline}
            </motion.span>
            
            <h1 className="text-5xl md:text-8xl lg:text-9xl font-serif text-white leading-tight mb-8">
              {slides[currentSlide].title.split(' ').map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className={i > 0 && word.toLowerCase() !== 'supply' ? "green-gradient italic block" : "block"}
                >
                  {word}{" "}
                </motion.span>
              ))}
            </h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-white/70 text-lg md:text-xl font-light mb-12 max-w-2xl leading-relaxed"
            >
              {slides[currentSlide].subtitle}
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-6"
            >
              <button className="px-10 py-5 bg-green text-white font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-green transition-all flex items-center justify-center gap-3 shadow-lg shadow-green/20">
                Explore Markets <ArrowRight size={18} />
              </button>
              <button className="px-10 py-5 border border-white/20 text-white font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-green transition-all">
                About Our Company
              </button>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Modern Indicators & Controls */}
      <div className="absolute bottom-12 left-6 right-6 z-20 flex items-end justify-between max-w-7xl mx-auto pointer-events-none">
        {/* Progress Gauges */}
        <div className="flex gap-4 pointer-events-auto">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setCurrentSlide(i);
                setProgress(0);
              }}
              className="group flex flex-col gap-2 focus:outline-none"
            >
              <span className={`text-[10px] font-bold tracking-widest transition-colors ${currentSlide === i ? "text-green" : "text-white/30 group-hover:text-white/60"}`}>
                0{i + 1}
              </span>
              <div className="w-12 md:w-24 h-[2px] bg-white/10 relative overflow-hidden">
                {currentSlide === i && (
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    className="absolute inset-0 bg-green"
                  />
                )}
              </div>
            </button>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-4 pointer-events-auto">
          <button 
            onClick={prevSlide}
            className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-green hover:border-green hover:bg-white transition-all backdrop-blur-sm group"
          >
            <ChevronLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
          </button>
          <button 
            onClick={nextSlide}
            className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-green hover:border-green hover:bg-white transition-all backdrop-blur-sm group"
          >
            <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-linear-to-l from-green/5 to-transparent pointer-events-none" />
    </section>
  );
}
