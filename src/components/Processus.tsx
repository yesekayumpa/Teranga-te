import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Shield, Zap, Users, Headset, ArrowRight } from 'lucide-react';

const STEPS = [
  {
    icon: <Shield />,
    title: "Partenaire Unique",
    desc: "Multi-domaines : ICT, Energie, Renouvelables et Contrôle technique en un seul interlocuteur.",
    color: "bg-primary",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
  },
  {
    icon: <Zap />,
    title: "SLA 98%+",
    desc: "Engagements de service mesurables et garantis contractuellement pour vos infrastructures critiques.",
    color: "bg-primary",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
  },
  {
    icon: <Users />,
    title: "Equipe Senior",
    desc: "Des experts certifiés avec une expérience terrain approfondie en Afrique de l’Ouest.",
    color: "bg-primary",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
  },
  {
    icon: <Headset />,
    title: "Support 24/7",
    desc: "Une disponibilité permanente avec des temps de réponse adaptés à vos enjeux critiques.",
    color: "bg-primary",
    image: "https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&q=80&w=800"
  }
];

export const Processus = () => {
  return (
    <section id="processus" className="section-padding bg-surface dark:bg-dark relative overflow-hidden">
      {/* Professional Background Elements */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] dark:opacity-[0.05] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:32px_32px]" />
        <img 
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000" 
          alt="Field background"
          className="absolute inset-0 w-full h-full object-cover opacity-10"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-surface/90 dark:bg-dark/90" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full text-primary text-[10px] font-bold uppercase tracking-widest mb-4"
          >
            <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
            Notre Valeur Ajoutée
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-5xl font-display font-extrabold text-dark dark:text-white mb-6 text-center"
          >
            Les 4 piliers qui nous <span className="text-primary">définissent</span>
          </motion.h2>
          
          <p className="text-base text-muted dark:text-slate-400 max-w-2xl mx-auto leading-relaxed text-center">
            Notre engagement envers l'excellence technique et la satisfaction client repose sur des piliers solides.
          </p>
        </div>

        <div className="relative">
          {/* Connection Line - Subtle and Elegant */}
          <div className="absolute top-[160px] left-0 w-full h-0.5 bg-slate-200 dark:bg-slate-800 hidden lg:block" />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
            {STEPS.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative group"
              >
                <div className="bg-white dark:bg-dark/80 backdrop-blur-sm rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 h-full flex flex-col items-center text-center overflow-hidden">
                  {/* Step Image */}
                  <div className="w-full h-32 overflow-hidden relative">
                    <img 
                      src={step.image} 
                      alt={step.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-dark to-transparent opacity-60" />
                  </div>

                  <div className="p-5 flex flex-col items-center relative -mt-8 z-10">
                    {/* Background Step Number */}
                    <span className="absolute -right-1 -top-1 text-5xl font-black text-slate-100 dark:text-slate-800/50 select-none pointer-events-none group-hover:text-primary/5 transition-colors duration-500">
                      {i + 1}
                    </span>

                    <div className={`w-10 h-10 rounded-lg ${step.color} text-white flex items-center justify-center mb-4 shadow-md group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 relative z-10`}>
                      {React.cloneElement(step.icon as React.ReactElement, { className: "w-5 h-5" })}
                    </div>
                    
                    <div className="mb-2 relative z-10">
                      <span className="text-[8px] font-bold text-muted dark:text-slate-500 uppercase tracking-widest block mb-1">Étape 0{i + 1}</span>
                      <h3 className="text-base font-display font-extrabold text-dark dark:text-white group-hover:text-primary transition-colors leading-tight">{step.title}</h3>
                    </div>
                    
                    <p className="text-[11px] text-muted dark:text-slate-400 leading-relaxed relative z-10">
                      {step.desc}
                    </p>
                  </div>
                </div>

                {i < STEPS.length - 1 && (
                  <div className="mt-6 lg:hidden flex justify-center">
                    <ArrowRight className="w-5 h-5 text-slate-300 dark:text-slate-700 rotate-90" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link to="/processus" className="btn-elegant-primary !px-8 !py-3 text-xs tracking-widest uppercase">
            DÉTAILS DU PROCESSUS <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
