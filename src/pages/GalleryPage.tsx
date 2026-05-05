import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Maximize2, X, ChevronLeft, ChevronRight, Camera, Image as ImageIcon } from 'lucide-react';
import { Partners } from '../components/Partners';

const IMAGES = [
  { url: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000', title: 'Data Center Sécurisé', category: 'Télécom' },
  { url: 'https://images.unsplash.com/photo-1509391366360-fe5bb658582f?auto=format&fit=crop&q=80&w=1000', title: 'Centrale Solaire Hybride', category: 'Énergie' },
  { url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000', title: 'Réseau Critique Mine', category: 'Mines' },
  { url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000', title: 'Supervision 24/7', category: 'Gouvernance' },
  { url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000', title: 'Analyse de Données', category: 'Gouvernance' },
  { url: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=1000', title: 'Infrastructures de Puissance', category: 'Énergie' },
  { url: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&q=80&w=1000', title: 'Support Managé', category: 'Télécom' },
  { url: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000', title: 'Laboratoire Technique', category: 'Mines' },
  { url: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1000', title: 'Audit de Conformité', category: 'Gouvernance' },
];

const CATEGORIES = ['Tous', 'Télécom', 'Énergie', 'Mines', 'Gouvernance'];

export const GalleryPage = () => {
  const [activeCategory, setActiveCategory] = useState('Tous');
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const filteredImages = activeCategory === 'Tous' 
    ? IMAGES 
    : IMAGES.filter(img => img.category === activeCategory);

  const next = () => setSelectedIdx(i => (i! + 1) % filteredImages.length);
  const prev = () => setSelectedIdx(i => (i! - 1 + filteredImages.length) % filteredImages.length);

  return (
    <div className="pt-32 pb-20">
      {/* Header */}
      <section className="section-padding !py-0 mb-16">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-primary font-bold text-sm uppercase tracking-[0.3em] mb-4 block">RÉFÉRENCES PROJETS</span>
          <h1 className="text-5xl lg:text-6xl font-display font-extrabold text-dark dark:text-white mb-6">
            L'Univers <span className="text-primary">Teranga TE</span> en Images.
          </h1>
          <p className="text-muted dark:text-slate-400 text-lg">
            Découvrez nos réalisations techniques et les infrastructures critiques que nous sécurisons quotidiennement à travers le Sahel.
          </p>
        </div>
      </section>

      {/* Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-16 px-6">
        {CATEGORIES.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-8 py-3 rounded-full font-bold transition-all duration-300 border-2 ${
              activeCategory === cat 
                ? "bg-primary border-primary text-white shadow-lg shadow-primary/20" 
                : "border-slate-200 dark:border-slate-800 text-muted dark:text-slate-400 hover:border-primary hover:text-primary"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <section className="section-padding !py-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredImages.map((img, idx) => (
            <motion.div
              layout
              key={img.url}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative aspect-square rounded-[40px] overflow-hidden group cursor-pointer shadow-xl shadow-slate-200/50 dark:shadow-black/50 border border-slate-100 dark:border-slate-800"
              onClick={() => setSelectedIdx(idx)}
            >
              <img 
                src={img.url} 
                alt={img.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-6">
                <Maximize2 className="w-10 h-10 mb-4" />
                <h3 className="text-xl font-display font-bold text-center leading-tight">{img.title}</h3>
                <span className="text-[10px] uppercase tracking-[0.2em] mt-3 font-bold px-3 py-1 bg-white/20 rounded-full backdrop-blur-sm">{img.category}</span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIdx !== null && (
          <div className="fixed inset-0 z-[300] flex items-center justify-center bg-slate-900/95 backdrop-blur-md">
            <button 
              onClick={() => setSelectedIdx(null)}
              className="absolute top-10 right-10 z-50 w-14 h-14 bg-white/10 text-white rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            
            <button 
              onClick={prev}
              className="absolute left-10 z-50 w-14 h-14 bg-white/10 text-white rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            
            <button 
              onClick={next}
              className="absolute right-10 z-50 w-14 h-14 bg-white/10 text-white rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            <motion.div
              key={selectedIdx}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative max-w-5xl max-h-[80vh] px-6"
            >
              <img 
                src={filteredImages[selectedIdx].url} 
                alt={filteredImages[selectedIdx].title} 
                className="w-full h-full object-contain rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-20 left-0 right-0 text-center text-white">
                <h3 className="text-2xl font-display font-bold">{filteredImages[selectedIdx].title}</h3>
                <p className="text-white/60 uppercase tracking-widest text-sm mt-2">{filteredImages[selectedIdx].category}</p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Partners />
    </div>
  );
};
