import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Monitor, Zap, Sun, ShieldCheck } from 'lucide-react';

const EXPERTISES = [
  {
    id: 'ict',
    label: 'ICT',
    icon: <Monitor className="w-4 h-4" />,
    title: "Technologies de l'Information",
    quote: '"Votre réseau ne s\'arrête pas. Votre business non plus."',
    desc: "Des infrastructures robustes pour une entreprise connectée et performante.",
    points: ["MPS (Managed Print Services)", "Infogérance & Support IT", "Câblage réseaux structuré", "Maintenance réseaux & serveurs"],
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: 'energie',
    label: 'Énergie',
    icon: <Zap className="w-4 h-4" />,
    title: "Solutions Énergétiques",
    quote: '"L\'énergie critique maîtrisée pour une continuité totale."',
    desc: "Assurez la disponibilité et la qualité de votre puissance électrique 24h/7.",
    points: ["Audit & Efficacité énergétique", "Onduleurs (UPS)", "Groupes Électrogènes", "Régulateurs de tension"],
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: 'renouvelables',
    label: 'Énergies Renouvelables',
    icon: <Sun className="w-4 h-4" />,
    title: "Énergie Solaire & Durable",
    quote: '"L\'avenir du Sahel se construit sur une énergie propre."',
    desc: "Des solutions durables pour une autonomie énergétique et une empreinte carbone maîtrisée.",
    points: ["EPC (Ingénierie, Fourniture, Install.)", "EPC + Financement", "Solar Home System", "Micro-réseaux & Stockage"],
    image: "https://images.unsplash.com/photo-1509391366360-fe5bb658582f?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: 'lift',
    label: 'Contrôle Technique',
    icon: <ShieldCheck className="w-4 h-4" />,
    title: "Sécurité & Conformité",
    quote: '"La sécurité verticale, une exigence non négociable."',
    desc: "Garantir la conformité et la sécurité de vos équipements selon les standards internationaux.",
    points: ["Inspection & Certification", "Contrôles périodiques", "Conformité EN 81-20/50", "Audit sécurité ascenseurs"],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200"
  }
];

export const ExpertiseSection = () => {
  const [activeTab, setActiveTab] = useState(EXPERTISES[0]);

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <span className="text-primary font-bold text-[10px] uppercase tracking-[0.3em] mb-4 block">CE QUE NOUS FAISONS</span>
          <h2 className="text-4xl lg:text-5xl font-display font-extrabold text-dark mb-6">
            Nos Domaines d'Expertise
          </h2>
          <div className="w-20 h-1 bg-primary/30 mx-auto rounded-full mb-8 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-primary rounded-full" />
          </div>
          <p className="text-slate-500 max-w-2xl mx-auto text-base leading-relaxed">
            Des solutions intégrées en ICT, Énergie, Énergies Renouvelables et Contrôle Technique pour sécuriser et optimiser vos infrastructures critiques.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-10">
          {EXPERTISES.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-300 ${
                activeTab.id === item.id 
                ? 'bg-dark text-white shadow-lg shadow-dark/20 border-dark' 
                : 'bg-white text-muted hover:bg-slate-50 border border-slate-100'
              } border`}
            >
              <div className="scale-90">{item.icon}</div>
              {item.label}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="relative group">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-slate-100"
            >
              <div className="md:grid md:grid-cols-2">
                <div className="aspect-[4/3] md:aspect-auto w-full relative">
                  <img 
                    src={activeTab.image} 
                    alt={activeTab.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-dark/40 mix-blend-multiply" />
                  
                  <div className="absolute inset-0 flex flex-col justify-end p-8">
                    <div className="inline-block px-2.5 py-1 bg-primary rounded text-dark text-[9px] font-black uppercase tracking-widest mb-3 w-fit">
                      {activeTab.id.toUpperCase()}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-display font-black text-white mb-2">
                      {activeTab.title}
                    </h3>
                    <p className="text-primary font-medium italic text-base opacity-90">
                      {activeTab.quote}
                    </p>
                  </div>
                </div>
                
                <div className="bg-white p-8 lg:p-12 flex flex-col justify-center">
                  <p className="text-slate-600 leading-relaxed text-lg font-medium mb-8">
                    {activeTab.desc}
                  </p>
                  
                  <ul className="space-y-3">
                    {activeTab.points.map((point, i) => (
                      <motion.li 
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                        className="flex items-center gap-3 text-slate-900 font-bold text-sm"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {point}
                      </motion.li>
                    ))}
                  </ul>

                  <button className="mt-8 w-fit px-6 py-3 bg-dark text-white rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-slate-800 transition-colors">
                    En savoir plus
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
