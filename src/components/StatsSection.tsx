import React from 'react';
import { motion } from 'motion/react';
import { Users, Building2, Globe, ShieldCheck, Clock, Zap } from 'lucide-react';
import { cn } from '../lib/utils';

const STATS = [
  {
    icon: <Users />,
    value: "6",
    label: "Collaborateurs",
    desc: "Experts certifiés",
    color: "from-primary/20 to-transparent"
  },
  {
    icon: <Building2 />,
    value: "8",
    label: "Clients",
    desc: "Entreprises accompagnées",
    color: "from-primary/20 to-transparent"
  },
  {
    icon: <Globe />,
    value: "9",
    label: "Pays au Sahel",
    desc: "Couverture régionale",
    color: "from-primary/20 to-transparent"
  },
  {
    icon: <ShieldCheck />,
    value: "98%",
    label: "SLA Garanti",
    desc: "Taux de disponibilité",
    color: "from-primary/20 to-transparent"
  },
  {
    icon: <Clock />,
    value: "24/7",
    label: "Support",
    desc: "Assistance continue",
    color: "from-primary/20 to-transparent"
  },
  {
    icon: <Zap />,
    value: "4",
    label: "Domaines d'expertise",
    desc: "ICT, Énergie...",
    color: "from-primary/20 to-transparent"
  }
];

export const StatsSection = () => {
  return (
    <section className="relative py-24 bg-dark overflow-hidden">
      {/* Background Decorative Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-white/5 rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-black text-[10px] lg:text-xs uppercase tracking-[0.4em] mb-4 block"
          >
            TERANGA TE EN CHIFFRES
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-display font-black text-white"
          >
            Nos chiffres clés
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-4">
          {STATS.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group flex flex-col items-center text-center"
            >
              {/* Icon Container */}
              <div className="relative w-16 h-16 mb-6 flex items-center justify-center">
                <div className={cn(
                  "absolute inset-0 bg-white/5 rounded-2xl border border-white/10 group-hover:border-primary/50 transition-colors duration-500",
                  "backdrop-blur-sm shadow-xl"
                )} />
                <div className="relative text-primary group-hover:scale-110 transition-transform duration-500">
                  {React.cloneElement(stat.icon as React.ReactElement, { size: 24, strokeWidth: 1.5 })}
                </div>
              </div>

              {/* Data */}
              <div className="flex flex-col items-center">
                <span className="text-4xl lg:text-5xl font-display font-black text-white mb-2 tracking-tight">
                  {stat.value}
                </span>
                <h3 className="text-sm font-bold text-slate-200 mb-1">
                  {stat.label}
                </h3>
                <p className="text-[10px] font-medium text-slate-400 uppercase tracking-widest opacity-80">
                  {stat.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
