import React from 'react';
import { motion } from 'framer-motion';
import ParticleBackground from './ParticleBackground';
import FloatingCard from './FloatingCard';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-[140px] pb-20 bg-brand-navy overflow-hidden">
      <ParticleBackground />
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-brand-navy opacity-[0.97] z-0"></div>
      
      {/* Geometric accents - Nicer luxury borders and shapes */}
      <div className="absolute top-0 right-0 w-[45%] h-full bg-brand-gold transform skew-x-12 translate-x-1/2 opacity-[0.15] border-l-[20px] border-white/10 z-0"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 border-[40px] border-brand-gold/10 rounded-full -translate-x-1/2 translate-y-1/2 z-0"></div>

      <div className="container relative z-10 text-white">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-1 bg-brand-gold"></div>
              <span className="uppercase tracking-[0.2em] font-bold text-sm text-brand-gold">General Contracting Est.</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-heading font-black leading-[1.1] mb-8">
              PROVIDING <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold via-yellow-200 to-brand-gold bg-[length:200%_auto] animate-shimmer">AFFORDABLE</span> & <br />
              POWERFUL SOLUTIONS
            </h1>
            
            <p className="text-xl text-gray-300 mb-12 max-w-2xl border-l-4 border-brand-gold pl-8 py-3 bg-white/5 backdrop-blur-sm rounded-r-lg shadow-sm">
              Delivering excellence and precision in every project. Building the foundations of tomorrow with advanced engineering and unmatched dedication.
            </p>
            
            <div className="flex flex-wrap items-center gap-6">
              <a href="#services" className="btn btn-primary px-10 py-4 text-base">Our Services</a>
              <a href="#contact" className="btn border-2 border-white/80 text-white hover:bg-white hover:text-brand-navy px-10 py-4 text-base">Contact Us</a>
            </div>
          </motion.div>

          <FloatingCard />
        </div>
      </div>

    </section>
  );
};

export default Hero;
