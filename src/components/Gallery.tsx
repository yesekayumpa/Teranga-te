import React, { useState, useMemo, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Maximize2, X, ChevronLeft, ChevronRight, Camera } from 'lucide-react';
import { cn } from '../lib/utils';

const CATEGORIES = ['Tous', 'Telecom', 'Energie', 'Mines', 'Gouvernance', 'Industrie'];

const IMAGES = [
  { id: 1, src: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=1200', title: 'Free au Sénégal', category: 'Telecom' },
  { id: 2, src: 'https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&q=80&w=1200', title: 'TotalEnergies Sénégal', category: 'Energie' },
  { id: 3, src: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1200', title: 'Orange Sierra Leone (ZTE)', category: 'Telecom' },
  { id: 4, src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200', title: 'Somilo-Morila (Mine d’or)', category: 'Mines' },
  { id: 5, src: 'https://images.unsplash.com/photo-1517433456452-f9633a875f6f?auto=format&fit=crop&q=80&w=1200', title: 'Atos Sénégal', category: 'Telecom' },
  { id: 6, src: 'https://images.unsplash.com/photo-1454165833762-02ad50c332e6?auto=format&fit=crop&q=80&w=1200', title: 'GIE Gaïndé 2000', category: 'Gouvernance' },
  { id: 7, src: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1200', title: 'Sabodala Gold Operation', category: 'Mines' },
  { id: 8, src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200', title: 'Seter (TER de Dakar)', category: 'Industrie' },
  { id: 9, src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200', title: 'APIX Sénégal', category: 'Gouvernance' },
];

export const Gallery = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [filter, setFilter] = useState('Tous');
  const [direction, setDirection] = useState(0); // 1 for next, -1 for prev

  const filteredImages = useMemo(() => {
    if (filter === 'Tous') return IMAGES;
    return IMAGES.filter(img => img.category === filter);
  }, [filter]);

  const currentIndex = filteredImages.findIndex(img => img.id === selectedId);
  
  const handleNext = useCallback((e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (currentIndex === -1) return;
    setDirection(1);
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setSelectedId(filteredImages[nextIndex].id);
  }, [currentIndex, filteredImages]);

  const handlePrev = useCallback((e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (currentIndex === -1) return;
    setDirection(-1);
    const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setSelectedId(filteredImages[prevIndex].id);
  }, [currentIndex, filteredImages]);

  const closeModal = useCallback(() => {
    setSelectedId(null);
    setDirection(0);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedId) return;
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedId, handleNext, handlePrev, closeModal]);

  const currentImage = filteredImages.find(img => img.id === selectedId);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <section id="references" className="section-padding bg-dark overflow-hidden relative">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000" 
          alt="References background"
          className="w-full h-full object-cover opacity-10"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-dark/80" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-xs font-bold uppercase tracking-widest mb-6"
          >
            <Camera className="w-4 h-4" />
            NOS RÉFÉRENCES
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-6xl font-display font-extrabold text-white mb-8 leading-tight"
          >
            Ils nous font <br />
            <span className="text-primary">confiance au quotidien.</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 max-w-2xl mx-auto text-lg mb-12"
          >
            Accompagner les leaders du Sahel dans la sécurisation de leurs infrastructures critiques.
          </motion.p>

          {/* Filter Controls */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={cn(
                  "px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 border-2",
                  filter === cat 
                    ? "bg-primary border-primary text-white shadow-lg shadow-primary/20" 
                    : "bg-white/5 border-white/10 text-slate-400 hover:border-primary hover:text-primary"
                )}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((img) => (
              <motion.div
                key={img.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="group relative aspect-[4/5] rounded-[40px] overflow-hidden cursor-pointer shadow-2xl shadow-black/50 border border-white/5"
                onClick={() => setSelectedId(img.id)}
              >
                <img 
                  src={img.src} 
                  alt={img.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-10">
                  <span className="text-primary text-xs font-bold uppercase tracking-widest mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">{img.category}</span>
                  <h3 className="text-2xl font-display font-bold text-white mb-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-150">{img.title}</h3>
                  <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-xl flex items-center justify-center text-white transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-200 border border-white/20">
                    <Maximize2 className="w-6 h-6" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Carousel */}
      <AnimatePresence>
        {selectedId && currentImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-slate-950/98 backdrop-blur-2xl flex items-center justify-center p-4 md:p-10"
            onClick={closeModal}
          >
            {/* Close Button */}
            <button 
              className="absolute top-6 right-6 lg:top-10 lg:right-10 text-white/50 hover:text-white transition-colors z-[120] bg-white/5 p-3 rounded-full hover:bg-white/10"
              onClick={closeModal}
            >
              <X className="w-6 h-6 lg:w-8 lg:h-8" />
            </button>

            {/* Navigation Buttons */}
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 lg:px-10 z-[120] pointer-events-none">
              <button 
                className="pointer-events-auto text-white/50 hover:text-white transition-all bg-white/5 p-4 lg:p-6 rounded-full backdrop-blur-md hover:bg-white/10 hover:scale-110 active:scale-95"
                onClick={handlePrev}
              >
                <ChevronLeft className="w-8 h-8 lg:w-10 lg:h-10" />
              </button>

              <button 
                className="pointer-events-auto text-white/50 hover:text-white transition-all bg-white/5 p-4 lg:p-6 rounded-full backdrop-blur-md hover:bg-white/10 hover:scale-110 active:scale-95"
                onClick={handleNext}
              >
                <ChevronRight className="w-8 h-8 lg:w-10 lg:h-10" />
              </button>
            </div>

            {/* Carousel Container */}
            <div 
              className="relative w-full max-w-7xl h-[70vh] flex items-center justify-center overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={selectedId}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                  className="absolute inset-0 flex items-center justify-center p-4"
                >
                  <div className="relative group max-h-full max-w-full">
                    <img 
                      src={currentImage.src} 
                      alt={currentImage.title} 
                      className="max-h-[70vh] max-w-full object-contain shadow-2xl rounded-2xl lg:rounded-[40px] border border-white/10"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Caption Over Image */}
                    <div className="absolute -bottom-16 lg:-bottom-24 left-0 w-full text-center">
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        <span className="text-primary text-xs lg:text-sm font-bold uppercase tracking-[0.3em] mb-2 block">
                          {currentImage.category}
                        </span>
                        <h3 className="text-2xl lg:text-4xl font-display font-bold text-white mb-3">
                          {currentImage.title}
                        </h3>
                        <div className="text-white/30 font-mono text-xs lg:text-sm tracking-widest">
                          {currentIndex + 1} <span className="mx-2 text-white/10">|</span> {filteredImages.length}
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
