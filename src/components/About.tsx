import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight, Star } from 'lucide-react';

export const About = () => {
  return (
    <section id="apropos" className="section-padding overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="grid grid-cols-2 gap-3">
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-3"
            >
              <img 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=400" 
                alt="Expertise technique" 
                className="rounded-3xl w-full aspect-[3/4] object-cover shadow-lg"
                referrerPolicy="no-referrer"
              />
              <div className="bg-primary p-6 rounded-3xl text-white text-center">
                <p className="text-3xl font-display font-extrabold mb-1">98%</p>
                <p className="text-[9px] font-bold uppercase tracking-widest opacity-80">SLA Garanti</p>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: -15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-3 pt-10"
            >
              <div className="bg-primary p-6 rounded-3xl text-white text-center">
                <p className="text-3xl font-display font-extrabold mb-1">24/7</p>
                <p className="text-[9px] font-bold uppercase tracking-widest opacity-80">Support</p>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=400" 
                alt="Business meeting" 
                className="rounded-3xl w-full aspect-[3/4] object-cover shadow-lg"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
          
          {/* Decorative Badge */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-2xl border-4 border-surface hidden md:flex">
            <div className="text-center">
              <Star className="w-4 h-4 text-primary mx-auto mb-1 fill-current" />
              <span className="text-[8px] font-bold text-dark leading-tight block uppercase tracking-tighter">EXCELLENCE<br/>TECHNIQUE</span>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-primary font-bold text-[10px] uppercase tracking-[0.3em] mb-3 block">NOTRE HISTOIRE</span>
          <h2 className="text-3xl lg:text-5xl font-display font-extrabold text-dark dark:text-white mb-6 leading-tight">
            L'excellence technologique <br />
            <span className="text-primary">au service du Sahel.</span>
          </h2>
          <p className="text-sm text-muted dark:text-slate-400 mb-6 leading-relaxed">
            Fondée en 2026 à Dakar par Papa Moussa TINE et AfriRH, Teranga TE est née de la conviction que l’Afrique de l’Ouest mérite des services managés de haut niveau, alliant réactivité locale et standards internationaux.
          </p>

          <div className="bg-surface dark:bg-slate-900 p-6 rounded-3xl border border-muted/10 dark:border-slate-800 mb-8 italic text-muted dark:text-slate-400 text-sm">
            « Chez Teranga TE, nous croyons que l’Afrique de l’Ouest mérite des services technologiques et énergétiques de classe mondiale, délivrés avec la chaleur et la proximité qui font la force de notre continent. »
            <div className="mt-4 font-bold text-dark dark:text-white not-italic flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">PT</div>
              <div>
                <p className="text-xs">Papa Moussa TINE</p>
                <p className="text-[10px] font-normal opacity-60">Fondateur de Teranga TE</p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mb-8">
            {[
              { title: 'Vision 2028', desc: 'Référence technologique du Sahel.' },
              { title: 'Ambition', desc: 'Partner technologique de référence.' },
            ].map((item, i) => (
              <div key={i} className="flex gap-3">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                  <CheckCircle2 className="w-3 h-3 text-primary" />
                </div>
                <div>
                  <h4 className="text-xs font-display font-bold text-dark dark:text-white">{item.title}</h4>
                  <p className="text-[10px] text-muted dark:text-slate-400 leading-tight">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <Link to="/about" className="btn-elegant-primary !px-8 !py-3 text-xs tracking-widest uppercase !bg-primary hover:!bg-primary/90">
            EN SAVOIR PLUS <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
