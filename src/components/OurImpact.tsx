import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Users, Heart, TrendingUp, Award, Star, Headset, Leaf, Globe, Zap } from 'lucide-react';

const STATS = [
  { 
    label: 'Expérience Fondateur', 
    value: '16 ans', 
    icon: <Award />, 
    desc: 'D’expérience terrain solide du fondateur.',
    infographic: (
      <div className="flex gap-1 mt-4">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <div key={i} className="w-2 h-4 bg-primary rounded-sm opacity-60" />
        ))}
      </div>
    )
  },
  { 
    label: 'Pays Couverts', 
    value: '6+', 
    icon: <Globe />, 
    desc: 'Une présence active dans la région Sahélienne.',
    infographic: (
      <div className="flex gap-1 mt-4">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="w-4 h-1 bg-primary rounded-full" />
        ))}
      </div>
    )
  },
  { 
    label: 'Expertises', 
    value: '4', 
    icon: <Zap />, 
    desc: 'Domaines d’expertise complémentaires.',
    infographic: (
      <div className="grid grid-cols-2 gap-1 mt-4">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="w-3 h-3 bg-primary/30 rounded-sm" />
        ))}
      </div>
    )
  },
  { 
    label: 'Support Technique', 
    value: '24/7', 
    icon: <Headset />, 
    desc: 'Disponibilité continue pour vos infrastructures.',
    infographic: (
      <div className="w-full bg-slate-100 h-2 rounded-full mt-6 overflow-hidden">
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: '100%' }}
          className="h-full bg-primary"
        />
      </div>
    )
  },
];

const PILLARS = [
  { title: 'Partenaire Unique', desc: 'Approche multi-domaines intégrée pour une gestion simplifiée.', icon: <Award /> },
  { title: 'Équipe Senior', desc: 'Une force pluridisciplinaire & certifiée à votre service.', icon: <Users /> },
  { title: 'SLA 98%+', desc: 'Engagement de niveau de service garanti par contrat.', icon: <TrendingUp /> },
  { title: 'Support 24/7', desc: 'Disponibilité technique continue pour vos opérations critiques.', icon: <Headset /> },
];

export const OurImpact = () => {
  return (
    <section id="impact" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <span className="text-primary font-bold text-[10px] uppercase tracking-[0.3em] mb-4 block">QUI SOMMES-NOUS ?</span>
              <h2 className="text-3xl lg:text-5xl font-display font-extrabold text-dark mb-5">
                Nos 4 Piliers <br /> De <span className="text-primary">Force</span>
              </h2>
              <p className="text-slate-600 text-base leading-relaxed max-w-xl font-medium">
                Teranga Technology & Energy — L’excellence digitale et énergétique, made in Africa. Des services managés premium conçus pour transformer votre ambition en performance durable.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              {PILLARS.map((pillar, i) => (
                <div key={i} className="flex gap-3">
                  <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    {React.cloneElement(pillar.icon as React.ReactElement, { size: 16 })}
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-dark text-[13px] mb-0.5">{pillar.title}</h4>
                    <p className="text-[9px] text-slate-500 leading-relaxed uppercase tracking-wider font-bold">{pillar.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-5">
            {STATS.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-[2rem] bg-slate-50 border border-slate-100 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 group"
              >
                <div className="w-12 h-12 rounded-xl bg-dark flex items-center justify-center text-white mb-5">
                  {React.cloneElement(stat.icon as React.ReactElement, { size: 20 })}
                </div>
                <h4 className="text-3xl font-display font-black text-dark mb-0.5">{stat.value}</h4>
                <p className="text-[10px] font-bold text-primary uppercase tracking-widest mb-2">{stat.label}</p>
                <p className="text-[11px] text-slate-500 leading-relaxed font-medium mb-5">{stat.desc}</p>
                <div className="pt-3 border-t border-slate-200">
                  {stat.infographic}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-dark text-white p-10 rounded-[2.5rem] relative overflow-hidden">
             <div className="relative z-10">
                <h4 className="text-primary font-black text-[9px] uppercase tracking-[0.3em] mb-3">VISION 2028</h4>
                <p className="text-xl font-display font-bold leading-relaxed">
                  Devenir le partenaire technologique de référence au Sénégal et dans la région du Sahel pour les infrastructures critiques.
                </p>
             </div>
             <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full -mr-12 -mt-12" />
          </div>
          <div className="bg-primary/10 border border-primary/20 p-10 rounded-[2.5rem]">
             <h4 className="text-dark font-black text-[9px] uppercase tracking-[0.3em] mb-3">NOTRE MISSION</h4>
             <p className="text-xl font-display font-bold text-dark leading-relaxed">
                Offrir des services managés de haut niveau alliant réactivité locale et standards internationaux de qualité.
             </p>
          </div>
        </div>
      </div>
    </section>
  );
};
