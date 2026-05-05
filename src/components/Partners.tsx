import React from 'react';
import { motion } from 'motion/react';

const CLIENTS = [
  { name: 'AFRI-RH', sub: 'RH & Conseil' },
  { name: 'GODIFA', sub: 'Technologies & Innovation' },
  { name: 'AFRILAND', sub: 'Immobilier & Bâtiment' },
  { name: 'KAI', sub: 'Transport & Mobilité' },
  { name: 'AL AMINE', sub: 'GED & Archivage' },
  { name: 'ICP', sub: 'Conseil & Projets' },
  { name: 'NBW', sub: 'Law Firm' },
];

const PARTNERS = {
  virtualisation: {
    title: 'Virtualisation',
    logos: ['VMware', 'Hyper-V', 'Proxmox', 'Microsoft', 'Cisco', 'Fortinet', 'IBM', 'Palo Alto']
  },
  impression: {
    title: 'Impression (MPS)',
    logos: ['Riso', 'Epson', 'Canon']
  },
  energie: {
    title: 'Énergie',
    logos: ['APC', 'Jinko', 'Eaton', 'Victron Energy', 'Schneider Electric', 'JA Solar', 'Socomec', 'Promac', 'Huawei', 'SMA', 'Longi']
  },
  groupes: {
    title: 'Groupes Élec.',
    logos: ['Cummins', 'SDMO Kohler', 'FG Wilson', 'CAT']
  }
};

export const Partners = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <span className="text-primary font-bold text-[10px] uppercase tracking-[0.3em] mb-4 block">EXCELLENCE TECHNOLOGIQUE</span>
          <h2 className="text-3xl lg:text-5xl font-display font-extrabold text-dark mb-6">Nos Partenaires Technologiques</h2>
          <div className="w-20 h-1 bg-primary/30 mx-auto rounded-full mb-8 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-primary rounded-full" />
          </div>
          <p className="text-slate-500 max-w-2xl mx-auto text-base leading-relaxed">
            Nous collaborons avec les leaders mondiaux pour garantir des solutions fiables et performantes.
          </p>
        </div>

        {/* Partenaires Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {Object.entries(PARTNERS).map(([key, section]) => (
            <div key={key} className="bg-slate-50 p-6 rounded-[1.5rem] border border-slate-100/50 flex flex-col">
              <h4 className="text-[11px] font-black text-dark mb-6 pb-3 border-b border-slate-200 uppercase tracking-widest flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-primary" />
                {section.title}
              </h4>
              <div className="flex flex-wrap gap-1.5 content-start flex-grow">
                {section.logos.map((logo, i) => (
                  <span 
                    key={i} 
                    className="px-2.5 py-1 bg-white rounded-md border border-slate-200 text-[9px] font-bold text-slate-600 shadow-sm transition-shadow cursor-default"
                  >
                    {logo}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Ils nous ont fait confiance */}
        <div className="pt-16 border-t border-slate-100">
          <div className="text-center mb-12">
            <h3 className="text-xl font-display font-extrabold text-dark">Ils nous ont fait confiance</h3>
            <div className="w-10 h-0.5 bg-primary mx-auto mt-3" />
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 pb-10">
            {CLIENTS.map((client, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                className="flex flex-col items-center group cursor-default"
              >
                <span className="text-xl font-display font-black text-slate-200 group-hover:text-dark transition-colors uppercase tracking-widest">
                  {client.name}
                </span>
                <span className="text-[7px] font-black text-slate-400 uppercase tracking-[0.2em] mt-0.5 group-hover:text-primary transition-colors">
                  {client.sub}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
