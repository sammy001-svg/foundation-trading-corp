"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MapPin, Phone, Mail, Clock, Send, Globe, ArrowRight } from "lucide-react";

const offices = [
  {
    city: "Nairobi (Headquarters)",
    address: "Warai Road, Karen - Nairobi",
    phone: "+254 725 984 877 / +254 721 767 225",
    email: "info@foundation-tco.com",
    timezone: "EAT (GMT+3)",
  },
];

export function ContactPage() {
  const [formState, setFormState] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      if (!response.ok) throw new Error("Failed to send message");

      setIsSubmitted(true);
      setFormState({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      setError("Something went wrong. Please try again or email us directly.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[50vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 text-center">
          <Image
            src="/contact-bg.png"
            alt="Global Map Contact Background"
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
            Connect <span className="green-gradient">With Us</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-green uppercase tracking-[0.4em] text-sm font-bold"
          >
            Our global network at your service
          </motion.p>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Contact Details */}
          <div>
            <h2 className="text-2xl font-serif text-foreground mb-12">Global Headquarters & Offices</h2>
            <div className="space-y-12">
              {offices.map((office) => (
                <motion.div 
                  key={office.city}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <h3 className="text-green font-bold uppercase tracking-widest text-lg mb-4 flex items-center gap-3">
                    <Globe size={20} /> {office.city}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-muted-foreground font-light italic">
                    <div className="space-y-3">
                      <div className="flex gap-3 items-start italic">
                        <MapPin size={18} className="text-green shrink-0 mt-1" />
                        <span className="text-sm">{office.address}</span>
                      </div>
                      <div className="flex gap-3 items-center">
                        <Phone size={18} className="text-green shrink-0" />
                        <span className="text-sm">{office.phone}</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex gap-3 items-center">
                        <Mail size={18} className="text-green shrink-0" />
                        <span className="text-sm whitespace-nowrap">{office.email}</span>
                      </div>
                      <div className="flex gap-3 items-center">
                        <Clock size={18} className="text-green shrink-0" />
                        <span className="text-sm">Timezone: {office.timezone}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card border border-black/5 p-10 lg:p-16 relative overflow-hidden shadow-sm">
            <div className="absolute top-0 left-0 w-2 h-full bg-green" />
            
            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-20"
              >
                <div className="w-20 h-20 bg-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Send className="text-green w-10 h-10" />
                </div>
                <h3 className="text-2xl font-serif text-foreground mb-4">Message Sent</h3>
                <p className="text-muted-foreground font-light mb-8">Thank you for reaching out. Our team will get back to you within 24 hours.</p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="text-green uppercase tracking-widest text-xs font-bold border-b border-green pb-1 hover:text-foreground hover:border-foreground transition-all"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <>
                <h2 className="text-2xl font-serif text-foreground mb-4">Send an Inquiry</h2>
                <p className="text-muted-foreground text-sm font-light mb-12">Please fill out the form below and specify the nature of your request.</p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <div className="bg-red-50 text-red-500 p-4 border border-red-100 text-sm italic">
                      {error}
                    </div>
                  )}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-xs uppercase tracking-widest text-foreground/40 font-bold">Your Name</label>
                      <input 
                        required
                        disabled={isLoading}
                        id="name"
                        type="text" 
                        className="w-full bg-background border border-black/10 rounded-none px-4 py-3 text-foreground focus:outline-none focus:border-green transition-colors shadow-xs disabled:opacity-50"
                        value={formState.name}
                        onChange={(e) => setFormState({...formState, name: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-xs uppercase tracking-widest text-foreground/40 font-bold">Email Address</label>
                      <input 
                        required
                        disabled={isLoading}
                        id="email"
                        type="email" 
                        className="w-full bg-background border border-black/10 rounded-none px-4 py-3 text-foreground focus:outline-none focus:border-green transition-colors shadow-xs disabled:opacity-50"
                        value={formState.email}
                        onChange={(e) => setFormState({...formState, email: e.target.value})}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-xs uppercase tracking-widest text-foreground/40 font-bold">Subject</label>
                    <input 
                      required
                      disabled={isLoading}
                      id="subject"
                      type="text" 
                      className="w-full bg-background border border-black/10 rounded-none px-4 py-3 text-foreground focus:outline-none focus:border-green transition-colors shadow-xs disabled:opacity-50"
                      value={formState.subject}
                      onChange={(e) => setFormState({...formState, subject: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-xs uppercase tracking-widest text-foreground/40 font-bold">Your Message</label>
                    <textarea 
                      required
                      disabled={isLoading}
                      id="message"
                      rows={5}
                      className="w-full bg-background border border-black/10 rounded-none px-4 py-3 text-foreground focus:outline-none focus:border-green transition-colors resize-none shadow-xs disabled:opacity-50"
                      value={formState.message}
                      onChange={(e) => setFormState({...formState, message: e.target.value})}
                    />
                  </div>
                  <button 
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-5 bg-green text-white font-bold uppercase tracking-[0.2em] text-sm hover:bg-foreground transition-all flex items-center justify-center gap-3 shadow-lg shadow-green/10 disabled:opacity-70 disabled:pointer-events-none"
                  >
                    {isLoading ? "Sending Inquiry..." : "Submit Inquiry"} <ArrowRight size={18} />
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default ContactPage;
