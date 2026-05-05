import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Calendar, ArrowRight } from "lucide-react";
import { cn } from "../lib/utils";

const SECTORS = [
  {
    id: "1",
    name: "Agriculture & Agribusiness",
    category: "Gestion Énergétique",
    image:
      "https://images.unsplash.com/photo-1592419044706-39796d40f98c?auto=format&fit=crop&q=80&w=800",
    desc: "Solutions de pompage solaire et supervision technique des exploitations.",
  },
  {
    id: "2",
    name: "Santé & Pharma",
    category: "Continuité Critique",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1200",
    desc: "Sécurisation de la chaîne du froid et infrastructures IT hospitalières.",
  },
  {
    id: "3",
    name: "Mine & Industries",
    category: "Infrastructures Robustes",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
    desc: "Réseaux distants, énergie de forte puissance et maintenance industrielle.",
  },
  {
    id: "4",
    name: "Services & Gouvernance",
    category: "Digitalisation",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800",
    desc: "Services managés pour les institutions et déploiement de solutions ICT.",
  },
];

export const ProductGrid = () => {
  return (
    <section
      id="secteurs"
      className="section-padding relative overflow-hidden bg-surface dark:bg-dark rounded-5xl my-16"
    >
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000"
          alt="Tech network"
          className="w-full h-full object-cover opacity-10"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-surface/80 via-transparent to-surface/80 dark:from-dark/80 dark:to-dark/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-primary font-bold text-[10px] uppercase tracking-[0.3em] mb-3 block">
            SECTEURS D'INTERVENTION
          </span>
          <h2 className="text-3xl lg:text-4xl font-display font-extrabold text-dark dark:text-white mb-6">
            Une expertise adaptée à <br />
            <span className="text-primary">chaque secteur d'activité.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {SECTORS.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="group relative bg-white dark:bg-slate-800 rounded-4xl overflow-hidden shadow-lg shadow-slate-200/40 dark:shadow-none border border-slate-50 dark:border-slate-800 hover:border-primary transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 dark:bg-dark/90 backdrop-blur-md rounded-full text-[9px] font-bold text-primary uppercase tracking-widest shadow-sm">
                    {product.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-sm font-display font-bold text-dark dark:text-white mb-2 leading-tight">
                    {product.name}
                  </h3>
                  <p className="text-[10px] text-muted dark:text-slate-400 leading-relaxed mb-4">
                    {product.desc}
                  </p>
                  <button className="flex items-center gap-2 text-[10px] font-bold text-primary uppercase tracking-widest hover:gap-3 transition-all">
                    Découvrir nos solutions <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
