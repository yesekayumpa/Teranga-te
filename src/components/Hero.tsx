import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Play, Zap, Shield, Globe, CheckCircle2 } from 'lucide-react';
import { cn } from '../lib/utils';

const SLIDES = [
  {
    title: "Votre partenaire en",
    highlight: "Technologie & Énergie",
    desc: "Solutions complètes pour l'Afrique de l'Ouest. Digital et énergétique, made in Africa.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1200",
    tag: "L'EXCELLENCE DIGITALE"
  },
  {
    title: "Expertise en Solutions",
    highlight: "Énergies Renouvelables",
    desc: "Assurez la disponibilité et la qualité de votre puissance électrique 24h/7.",
    image: "https://images.unsplash.com/photo-1509391366360-fe5bb658582f?auto=format&fit=crop&q=80&w=1200",
    tag: "CONTINUITÉ TOTALE"
  },
  {
    title: "Audit & Sécurité",
    highlight: "Infrastructures Critiques",
    desc: "SLA 98%+ garanti au Sénégal et dans toute la région du Sahel.",
    image: "https://images.unsplash.com/photo-1541888941297-dc0702f37803?auto=format&fit=crop&q=80&w=1200",
    tag: "CONFORMITÉ EN 81-20/50"
  }
];

const EXPERTISES_MARQUEE = [
  "Technologies de l'Information", 
  "Solutions Énergétiques", 
  "Énergies Renouvelables", 
  "Contrôle Technique Lift", 
  "Audit Énergétique", 
  "Services Managés", 
  "Support 24/7"
];

export const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="accueil" className="relative pt-32 lg:pt-40 pb-0 overflow-hidden bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="relative z-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8, ease: "circOut" }}
              >
                {/* Bracket Label */}
                <div className="relative inline-block mb-8">
                  <div className="absolute -left-2 -top-2 w-3 h-3 border-t-4 border-l-4 border-primary" />
                  <div className="absolute -right-2 -top-2 w-3 h-3 border-t-4 border-r-4 border-primary" />
                  <div className="absolute -left-2 -bottom-2 w-3 h-3 border-b-4 border-l-4 border-primary" />
                  <div className="absolute -right-2 -bottom-2 w-3 h-3 border-b-4 border-r-4 border-primary" />
                  <span className="px-6 py-1.5 block text-dark font-bold text-base">
                    {current === 0 ? "Bienvenue !" : current === 1 ? "Impact Sahel" : "Innovation"}
                  </span>
                </div>

                <h1 className="text-4xl lg:text-6xl font-display font-black text-dark leading-[1.1] mb-6 tracking-tight">
                  <span className="text-lg lg:text-xl block mb-2 font-bold text-muted">Teranga TE,</span>
                  Votre <span className="text-primary">Expertise,</span><br />
                  Intégrée en <br />
                  Technologie.
                </h1>

                <p className="text-base text-muted font-medium mb-10 leading-relaxed max-w-lg">
                  {SLIDES[current].desc}
                </p>

                <div className="flex flex-wrap gap-5 items-center">
                  <button className="flex items-center gap-3 bg-dark text-white pl-6 pr-3 py-3.5 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-primary transition-all shadow-xl shadow-dark/10 group">
                    Nos Services
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-dark group-hover:scale-110 transition-transform">
                      <Play className="w-2.5 h-2.5 fill-current" />
                    </div>
                  </button>
                  <button className="px-8 py-4 border-2 border-dark rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-dark hover:text-white transition-all">
                    Nous Contacter
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Image Content */}
          <div className="relative scale-90 md:scale-95">
            {/* Background Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full aspect-square bg-primary rounded-full opacity-100 z-0" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 w-full aspect-square flex items-center justify-center"
              >
                <div className="w-[85%] h-[85%] rounded-full overflow-hidden border-[8px] border-white shadow-2xl relative">
                  <img 
                    src={current === 0 
                      ? "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800" 
                      : "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800"} 
                    alt="Team Teranga" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/20 to-transparent" />
                </div>

                {/* Floating Labels */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute bottom-[20%] -left-8 bg-dark text-white px-5 py-2.5 rounded-xl shadow-2xl border-4 border-surface flex items-center gap-2"
                >
                  <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                  <span className="font-black text-[9px] uppercase tracking-widest">Expertise ICT</span>
                </motion.div>

                <motion.div 
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="absolute top-[30%] -right-6 bg-primary text-white px-5 py-2.5 rounded-xl shadow-2xl border-4 border-surface"
                >
                  <span className="font-black text-[9px] uppercase tracking-widest">SLA 98%+</span>
                </motion.div>

                {/* Circular Badge */}
                <div className="absolute top-6 right-0 w-20 h-20 bg-dark rounded-full border-4 border-primary flex items-center justify-center p-2 shadow-2xl animate-spin-slow">
                  <div className="text-center text-[7px] font-black text-white uppercase tracking-widest leading-none">
                    • Teranga • <br /> Technology <br /> • Energy •
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Specific Bottom Marquee Banner */}
      <div className="relative mt-12 pb-10">
        <div className="absolute inset-0 bg-primary skew-y-[-2deg] translate-y-2 z-10" />
        <div className="relative bg-dark py-6 z-20 skew-y-[-2deg] border-t border-primary/20 overflow-hidden">
          <div className="flex whitespace-nowrap animate-marquee-fast hover:pause">
            {[...EXPERTISES_MARQUEE, ...EXPERTISES_MARQUEE, ...EXPERTISES_MARQUEE].map((text, i) => (
              <div key={i} className="flex items-center gap-10 mx-10 skew-y-[2deg]">
                <span className="text-white font-display font-black text-2xl md:text-3xl uppercase tracking-tighter opacity-90">
                  {text}
                </span>
                <span className="text-primary font-black text-3xl">*</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
