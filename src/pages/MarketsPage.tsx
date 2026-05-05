import React from 'react';
import { motion } from 'motion/react';
import { Globe, MapPin, Zap, ShieldCheck, Users, ArrowRight } from 'lucide-react';

export const MarketsPage = () => {
  return (
    <div className="pt-32 pb-20">
      {/* Header */}
      <section className="section-padding !py-0 mb-20">
        <div className="relative h-[450px] rounded-[60px] overflow-hidden bg-white border border-slate-100 dark:bg-slate-900 dark:border-slate-800">
          <div className="absolute inset-0 opacity-10">
            <img 
              src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&q=80&w=1920" 
              alt="Marché Sahel Teranga TE" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center text-center p-10">
            <div className="max-w-4xl">
              <span className="text-primary font-bold text-sm uppercase tracking-[0.3em] mb-4 block">NOTRE ANCRAGE</span>
              <h1 className="text-5xl lg:text-7xl font-display font-extrabold text-dark dark:text-white leading-tight mb-8">
                Une Présence <span className="text-primary">Régionale</span> forte.
              </h1>
              <p className="text-muted dark:text-slate-400 text-lg max-w-2xl mx-auto">
                Teranga TE déploie ses experts sur l'ensemble du Sahel pour sécuriser les infrastructures stratégiques des leaders régionaux.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Markets Grid */}
      <section className="section-padding grid lg:grid-cols-3 gap-12">
        {[
          {
            region: "Sénégal & Mauritanie",
            desc: "Notre hub opérationnel et nos projets énergétiques majeurs, notamment sur la dorsale côtière.",
            destinations: ["Dakar (Siège)", "Saint-Louis", "Nouakchott", "Zouerate"],
            icon: <Globe />,
            color: "bg-primary"
          },
          {
            region: "Mali & Guinée",
            desc: "Focus sur les infrastructures minières et les réseaux critiques en zones enclavées.",
            destinations: ["Bamako", "Kayes", "Conakry", "Boké"],
            icon: <Globe />,
            color: "bg-primary"
          },
          {
            region: "Côte d'Ivoire & Bissau",
            desc: "Expansion de nos services managés ICT et support technique 24/7 pour les institutions financières.",
            destinations: ["Abidjan", "San-Pédro", "Bissau", "Gabú"],
            icon: <Globe />,
            color: "bg-primary"
          }
        ].map((market, i) => (
          <div key={i} className="bg-white dark:bg-slate-900 p-12 rounded-[50px] shadow-xl shadow-slate-200/50 dark:shadow-black/50 border border-slate-100 dark:border-slate-800 group hover:border-primary transition-all duration-500">
            <div className={`w-16 h-16 ${market.color} rounded-2xl flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-all`}>
              {React.cloneElement(market.icon as React.ReactElement, { className: "w-8 h-8" })}
            </div>
            <h2 className="text-3xl font-display font-bold text-dark dark:text-white mb-6 leading-tight">{market.region}</h2>
            <p className="text-sm text-muted dark:text-slate-400 mb-8 leading-relaxed">
              {market.desc}
            </p>
            <div className="space-y-4">
              {market.destinations.map((dest, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="font-bold text-slate-700 dark:text-slate-300 text-sm">{dest}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Deployment Partners */}
      <section className="bg-white dark:bg-slate-900 py-24 border-t border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-display font-bold text-dark dark:text-white mb-8">Capacité de Déploiement</h2>
              <p className="text-lg text-muted dark:text-slate-400 mb-8 leading-relaxed">
                Nos équipes mobiles sont équipées pour intervenir rapidement partout dans la zone Sahel, même sur les sites les plus reculés (mines, stations relais, zones rurales).
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                    <Zap className="w-5 h-5" />
                  </div>
                  <span className="font-bold text-slate-700 dark:text-slate-300 text-xs">Support Mobile 24/7</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                    <Users className="w-5 h-5" />
                  </div>
                  <span className="font-bold text-slate-700 dark:text-slate-300 text-xs">Équipes Locales</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8">
              {[
                { icon: <ShieldCheck />, title: "Conformité", desc: "Respect des normes locales." },
                { icon: <Globe />, title: "Logistique", desc: "Maîtrise du terrain." }
              ].map((item, i) => (
                <div key={i} className="bg-white dark:bg-slate-900 p-8 rounded-[40px] shadow-xl shadow-slate-200/50 dark:shadow-black/50 border border-slate-100 dark:border-slate-800 text-center">
                  <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-700 mx-auto mb-6">
                    {React.cloneElement(item.icon as React.ReactElement, { className: "w-8 h-8" })}
                  </div>
                  <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-2">{item.title}</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="section-padding">
        <div className="bg-dark rounded-[60px] p-12 lg:p-16 text-center text-white relative overflow-hidden border border-primary/20">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <img 
              src="https://images.unsplash.com/photo-1542281286-9e0a16bb7366?auto=format&fit=crop&q=80&w=1920" 
              alt="Texture Sahel" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <h2 className="text-3xl lg:text-5xl font-display font-extrabold mb-8 relative z-10">
            Exportez votre <span className="text-white/80">Savoir-faire</span> au Sahel
          </h2>
          <p className="text-white/60 text-lg mb-12 max-w-2xl mx-auto relative z-10 leading-relaxed">
            Teranga TE est votre bras technique opérationnel pour tout déploiement critique en Afrique de l'Ouest.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <button className="bg-white text-dark px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:scale-105 transition-transform flex items-center justify-center gap-2">
              DEVENIR PARTENAIRE <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
