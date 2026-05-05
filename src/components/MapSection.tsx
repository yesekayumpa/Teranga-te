import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Navigation, Phone, ExternalLink, Globe } from 'lucide-react';

export const MapSection = () => {
  return (
    <section className="py-20 bg-surface dark:bg-dark/50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="relative group">
          {/* Decorative Background Glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-primary/10 rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
          
          <div className="relative bg-white dark:bg-dark rounded-[2rem] overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800">
            {/* Elegant Header with Floating Meta */}
            <div className="absolute top-6 left-6 z-30 flex items-center gap-3">
              <div className="bg-white/80 dark:bg-dark/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 dark:border-slate-700 shadow-lg flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span className="text-[10px] font-bold text-dark dark:text-white uppercase tracking-widest">Siège Social · Dakar</span>
              </div>
            </div>

            {/* Map Container */}
            <div className="relative h-[450px] w-full overflow-hidden">
              {/* Custom Info Overlay - Integrated Glassmorphism */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="absolute top-6 right-6 z-30 w-full max-w-[280px] hidden md:block"
              >
                <div className="bg-dark/95 backdrop-blur-xl p-6 rounded-3xl border border-white/10 shadow-2xl text-white">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center">
                      <Globe className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold tracking-tight">Teranga TE</h4>
                      <p className="text-[10px] text-primary font-bold uppercase tracking-widest leading-none mt-1">Sénégal HQ</p>
                    </div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-slate-400 mt-0.5" />
                      <p className="text-[11px] text-slate-300 leading-relaxed font-medium">3 Liberté 6 extension, <br /> Dakar, Sénégal</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-slate-400" />
                      <p className="text-[11px] text-slate-300 font-bold">+221 77 337 26 28</p>
                    </div>
                  </div>

                  <a 
                    href="https://goo.gl/maps/YOUR_MAP_ID" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 bg-primary hover:bg-primary/90 text-white rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all shadow-lg shadow-dark/40 group/btn"
                  >
                    <Navigation className="w-3 h-3 group-hover/btn:rotate-12 transition-transform" />
                    Itinéraire
                    <ExternalLink className="w-3 h-3 opacity-50" />
                  </a>
                </div>
              </motion.div>

              {/* Mobile Info Strip */}
              <div className="absolute bottom-0 left-0 right-0 z-30 md:hidden bg-dark/95 backdrop-blur-md p-4 flex items-center justify-between border-t border-white/10">
                <div className="flex items-center gap-3">
                   <MapPin className="w-4 h-4 text-primary" />
                   <span className="text-[10px] font-bold text-white uppercase tracking-wider">Liberté 6, Dakar</span>
                </div>
                <button className="bg-primary px-4 py-2 rounded-lg text-[9px] font-bold text-white uppercase tracking-widest">
                  Carte
                </button>
              </div>

              {/* Enhanced Map Pointer (Interactive) */}
              <div className="absolute top-[220px] left-1/2 -translate-x-1/2 z-20 pointer-events-none">
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="relative"
                >
                  <MapPin className="w-12 h-12 text-primary fill-primary/20 filter drop-shadow-[0_0_15px_rgba(46,125,50,0.5)]" />
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-1.5 bg-black/20 blur-[2px] rounded-full scale-x-150 animate-pulse" />
                </motion.div>
              </div>

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15444.024222013898!2d-17.4727184!3d14.7121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec1107aa0988647!2sLibert%C3%A9%206%2C%20Dakar!5e0!3m2!1sen!2ssn!4v1714856000000!5m2!1sen!2ssn"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale-[0.4] contrast-[1.1] brightness-[0.95]"
              ></iframe>
            </div>
          </div>
        </div>
        
        {/* Sub-label for Trust */}
        <div className="text-center mt-8">
           <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] flex items-center justify-center gap-2">
             <span className="w-1 h-1 bg-slate-300 rounded-full" />
             Ouvert du Lundi au Samedi: 08:30 — 18:30
             <span className="w-1 h-1 bg-slate-300 rounded-full" />
           </p>
        </div>
      </div>
    </section>
  );
};
