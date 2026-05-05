import React from 'react';
import { Cpu, Battery, Sun, Wrench, ShieldCheck, Zap, Cog, CheckCircle2 } from 'lucide-react';

export const ServicesPage = () => {
  return (
    <div className="pt-32 pb-20">
      {/* Header */}
      <section className="section-padding !py-0 mb-20">
        <div className="relative h-[450px] rounded-[60px] overflow-hidden bg-white border border-surface dark:bg-dark dark:border-slate-800">
          <div className="absolute inset-0 opacity-10">
            <img 
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1920" 
              alt="Technologie Teranga TE" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center text-center p-10">
            <div className="max-w-4xl">
              <span className="text-primary font-bold text-sm uppercase tracking-[0.3em] mb-4 block">NOTRE EXPERTISE</span>
              <h1 className="text-5xl lg:text-7xl font-display font-extrabold text-dark dark:text-white leading-tight mb-8">
                Des Solutions <span className="text-primary">Robustes</span> pour le Sahel.
              </h1>
              <p className="text-muted dark:text-slate-400 text-lg max-w-2xl mx-auto">
                Nous sécurisons vos infrastructures critiques grâce à une expertise multi-domaines et un support opérationnel permanent.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="section-padding grid gap-24">
        {[
          {
            title: "ICT & Infrastructures Numériques",
            desc: "Nous concevons et gérons des réseaux critiques, des centres de données et des solutions de cybersécurité adaptées aux environnements exigeants du Sahel.",
            icon: <Cpu />,
            features: ["Réseaux longue distance & VSAT", "Cybersécurité des infra critiques", "Services managés 24/7"],
            image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000",
            reverse: false
          },
          {
            title: "Énergie & Puissance Industrielle",
            desc: "Expertise en systèmes de continuité énergétique, groupes électrogènes de forte puissance et solutions de backup pour les sites miniers et industriels.",
            icon: <Battery />,
            features: ["Onduleurs industriels", "Groupes de secours haute puissance", "Audit de qualité d'énergie"],
            image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=1000",
            reverse: true
          },
          {
            title: "Énergies Renouvelables & Solaire",
            desc: "Accompagnement complet dans la transition énergétique : du dimensionnement à la maintenance de centrales solaires hybrides ou autonomes.",
            icon: <Sun />,
            features: ["Pompage solaire agribusiness", "Centrales hybrides PV/Diesel", "Efficacité énergétique ESG"],
            image: "https://images.unsplash.com/photo-1509391366360-fe5bb658582f?auto=format&fit=crop&q=80&w=1000",
            reverse: false
          }
        ].map((service, i) => (
          <div key={i} className={`grid lg:grid-cols-2 gap-16 items-center ${service.reverse ? 'lg:flex-row-reverse' : ''}`}>
            <div className={service.reverse ? 'lg:order-2' : ''}>
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8">
                {React.cloneElement(service.icon as React.ReactElement, { className: "w-8 h-8" })}
              </div>
              <h2 className="text-4xl font-display font-bold text-dark dark:text-white mb-6">{service.title}</h2>
              <p className="text-lg text-muted dark:text-slate-400 mb-8 leading-relaxed">
                {service.desc}
              </p>
              <div className="space-y-4">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span className="font-bold text-dark dark:text-slate-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className={`relative h-[500px] rounded-[50px] overflow-hidden shadow-2xl ${service.reverse ? 'lg:order-1' : ''}`}>
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        ))}
      </section>

      {/* Expertise Stats */}
      <section className="bg-white dark:bg-dark py-24 border-t border-surface dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid md:grid-cols-4 gap-12 text-center">
          {[
            { icon: <ShieldCheck />, label: "Disponibilité", value: "98%+" },
            { icon: <Zap />, label: "Support Critique", value: "24/7" },
            { icon: <Cog />, label: "Certification", value: "Senior" },
            { icon: <Wrench />, label: "SLA Garanti", value: "100%" }
          ].map((stat, i) => (
            <div key={i}>
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-6">
                {React.cloneElement(stat.icon as React.ReactElement, { className: "w-8 h-8" })}
              </div>
              <h3 className="text-3xl font-display font-bold mb-2 text-dark dark:text-white">{stat.value}</h3>
              <p className="text-muted dark:text-slate-400 text-xs uppercase tracking-widest font-bold">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
