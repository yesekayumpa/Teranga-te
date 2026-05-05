import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Target, TrendingUp } from 'lucide-react';

const ACTIVE_PRESENCE = [
  { code: 'SN', country: 'Sénégal', status: 'Siège', active: true },
  { code: 'GM', country: 'Gambie', status: 'Actif', active: true },
  { code: 'GN', country: 'Guinée', status: 'Actif', active: true },
];

const DEPLOYMENTS = [
  { code: 'ML', country: 'Mali', status: 'En cours' },
  { code: 'BF', country: 'Burkina Faso', status: 'En cours' },
  { code: 'NE', country: 'Niger', status: 'En cours' },
  { code: 'MR', country: 'Mauritanie', status: 'En cours' },
  { code: 'GW', country: 'Guinée-Bissau', status: 'Planifié' },
  { code: 'CI', country: 'Côte d’Ivoire', status: 'Planifié' },
];

export const Markets = () => {
  return (
    <section id="sahel" className="py-24 bg-dark text-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,#2E7D32_0%,transparent_50%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-20">
          <span className="text-primary font-bold text-xs uppercase tracking-[0.3em] mb-4 block">NOTRE PRÉSENCE RÉGIONALE</span>
          <h2 className="text-5xl lg:text-7xl font-display font-extrabold text-white mb-8">
            Ancrage Sahel
          </h2>
          <div className="w-24 h-1 bg-primary/30 mx-auto rounded-full mb-8 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-primary rounded-full" />
          </div>
          <p className="text-slate-300 max-w-2xl mx-auto text-base lg:text-lg leading-relaxed">
            Une couverture géographique en expansion pour servir les entreprises de toute la région sahélienne.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Map Column */}
          <div className="lg:col-span-7 relative group">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden border border-white/5 bg-slate-900/40 aspect-[4/3] flex items-center justify-center p-8"
            >
              {/* Map Illustration - Faking it with a stylized container as requested by image reference */}
              <div className="absolute inset-0 opacity-40">
                <img 
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200" 
                  alt="West Africa Connectivity" 
                  className="w-full h-full object-cover mix-blend-overlay"
                />
              </div>
              
              <div className="relative z-10 text-center">
                <div className="inline-block mb-4">
                  <div className="relative">
                    <div className="absolute -inset-4 bg-primary/30 blur-2xl animate-pulse rounded-full" />
                    <div className="w-6 h-6 bg-primary rounded-full shadow-[0_0_30px_#2E7D32] relative z-10 flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full" />
                    </div>
                  </div>
                </div>
                <h4 className="text-xl lg:text-2xl font-display font-black text-primary tracking-widest uppercase">
                  WEST AFRICA & THE SAHEL
                </h4>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent" />
            </motion.div>
          </div>

          {/* List Column */}
          <div className="lg:col-span-5 space-y-12">
            {/* Active Presence */}
            <div>
              <div className="flex items-center gap-3 mb-6 text-slate-100">
                <MapPin className="w-5 h-5 text-primary" />
                <h3 className="text-xl font-bold font-display tracking-tight">Présence active</h3>
              </div>
              <div className="space-y-3">
                {ACTIVE_PRESENCE.map((item) => (
                  <div key={item.code} className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group">
                    <div className="flex items-center gap-4">
                      <span className="text-[10px] font-bold text-slate-500 uppercase w-6">{item.code}</span>
                      <span className="font-bold text-slate-200 group-hover:text-white transition-colors">{item.country}</span>
                    </div>
                    <span className="text-[10px] font-bold text-primary uppercase tracking-widest flex items-center gap-2">
                       <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                       {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Deployments */}
            <div>
              <div className="flex items-center gap-3 mb-6 text-slate-100">
                <TrendingUp className="w-5 h-5 text-primary" />
                <h3 className="text-xl font-bold font-display tracking-tight">Déploiements 2026–2028</h3>
              </div>
              <div className="space-y-3">
                {DEPLOYMENTS.map((item) => (
                  <div key={item.code} className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group">
                    <div className="flex items-center gap-4">
                      <span className="text-[10px] font-bold text-slate-500 uppercase w-6">{item.code}</span>
                      <span className="font-bold text-slate-300 group-hover:text-white transition-colors">{item.country}</span>
                    </div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                       <span className="w-1.5 h-1.5 bg-primary/50 rounded-full" />
                       {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Objectif 2028 */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 mt-8 group hover:border-primary/30 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-5 h-5 text-primary" />
                <h4 className="text-sm font-bold text-slate-200">Objectif 2028</h4>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed font-medium">
                Consolider notre présence dans 6+ pays du Sahel avec des équipes locales, des partenariats stratégiques et un impact ESG mesurable dans chaque marché.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

