import React from 'react';
import { Shield, Zap, Users, Headset, CheckCircle2, ArrowRight, ShieldCheck, Globe, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ProcessusPage = () => {
  return (
    <div className="pt-32 pb-20">
      {/* Header */}
      <section className="section-padding !py-0 mb-20">
        <div className="text-center max-w-4xl mx-auto">
          <span className="text-primary font-bold text-sm uppercase tracking-[0.3em] mb-4 block">NOTRE ENGAGEMENT</span>
          <h1 className="text-5xl lg:text-7xl font-display font-extrabold text-dark dark:text-white leading-tight mb-8">
            Une Méthodologie <span className="text-primary">Rigoureuse</span> pour le Succès.
          </h1>
          <p className="text-muted dark:text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Découvrez les 4 piliers fondamentaux qui garantissent la résilience et la performance de vos infrastructures.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding relative">
        {/* Vertical Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-slate-100 dark:bg-slate-800 -translate-x-1/2 hidden lg:block" />

        <div className="space-y-24">
          {[
            {
              step: "01",
              title: "Partenaire Unique",
              desc: "Nous centralisons la gestion de vos infrastructures ICT, Énergie et Renouvelables. Un seul interlocuteur pour une vision globale et une cohérence technique absolue de votre écosystème.",
              icon: <Shield />,
              color: "bg-primary",
              image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000",
              reverse: false
            },
            {
              step: "02",
              title: "SLA Garanti (98%+)",
              desc: "Notre engagement ne se limite pas à la promesse. Nous contractualisons une disponibilité de service supérieure à 98%, avec des indicateurs de performance (KPI) transparents et mesurables en temps réel.",
              icon: <Zap />,
              color: "bg-primary",
              image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
              reverse: true
            },
            {
              step: "03",
              title: "Équipe Senior & Expertise",
              desc: "Chaque intervention est supervisée par des experts seniors certifiés. Notre connaissance profonde du terrain sahélien nous permet d'anticiper les risques environnementaux et techniques spécifiques.",
              icon: <Users />,
              color: "bg-primary",
              image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000",
              reverse: false
            },
            {
              step: "04",
              title: "Support Managé 24/7",
              desc: "Nos centres d'opérations techniques assurent une surveillance permanente. Qu'il s'agisse d'une alerte énergétique ou d'un incident réseau, nos équipes réagissent instantanément.",
              icon: <Headset />,
              color: "bg-primary",
              image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=1000",
              reverse: true
            }
          ].map((item, i) => (
            <div key={i} className={`grid lg:grid-cols-2 gap-16 items-center relative ${item.reverse ? 'lg:flex-row-reverse' : ''}`}>
              {/* Step Circle */}
              <div className="absolute left-1/2 top-0 -translate-x-1/2 w-12 h-12 bg-white dark:bg-slate-900 border-4 border-primary rounded-full z-10 hidden lg:flex items-center justify-center font-bold text-primary">
                {item.step}
              </div>

              <div className={item.reverse ? 'lg:order-2' : ''}>
                <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg`}>
                  {React.cloneElement(item.icon as React.ReactElement, { className: "w-8 h-8" })}
                </div>
                <h2 className="text-3xl font-display font-bold text-dark dark:text-white mb-6">{item.title}</h2>
                <p className="text-lg text-muted dark:text-slate-400 mb-8 leading-relaxed">
                  {item.desc}
                </p>
                <div className="flex flex-wrap gap-6">
                  <div className="flex items-center gap-2 text-[10px] font-bold text-muted dark:text-slate-400 uppercase tracking-widest">
                    <Clock className="w-4 h-4 text-primary" />
                    <span>Réactivité</span>
                  </div>
                  <div className="flex items-center gap-2 text-[10px] font-bold text-muted dark:text-slate-400 uppercase tracking-widest">
                    <ShieldCheck className="w-4 h-4 text-primary" />
                    <span>Fiabilité</span>
                  </div>
                  <div className="flex items-center gap-2 text-[10px] font-bold text-muted dark:text-slate-400 uppercase tracking-widest">
                    <Globe className="w-4 h-4 text-primary" />
                    <span>Proximité</span>
                  </div>
                </div>
              </div>

              <div className={`relative h-[400px] rounded-[50px] overflow-hidden shadow-2xl ${item.reverse ? 'lg:order-1' : ''}`}>
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="bg-primary rounded-[60px] p-12 lg:p-20 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <h2 className="text-4xl lg:text-6xl font-display font-extrabold mb-8 relative z-10 leading-tight">
            Sécurisez votre <span className="text-white/80">Avenir</span> Technique !
          </h2>
          <p className="text-white/70 text-lg mb-12 max-w-2xl mx-auto relative z-10 leading-relaxed">
            Contactez Teranga TE pour un audit gracieux de vos infrastructures et découvrez comment nous pouvons garantir votre continuité de service.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-3 bg-white text-primary px-10 py-5 rounded-full font-bold uppercase tracking-widest hover:scale-105 transition-transform">
            AUDIT TECHNIQUE <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};
