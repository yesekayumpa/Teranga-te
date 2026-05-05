import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Target, Eye, Award, Users, Globe } from 'lucide-react';

export const AboutPage = () => {
  return (
    <div className="pt-32 pb-20">
      {/* Hero Section */}
      <section className="section-padding !py-0 mb-20">
        <div className="relative h-[400px] rounded-[60px] overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1920" 
            alt="Teranga TE Office" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent flex items-end p-12 lg:p-20">
            <div className="max-w-3xl">
              <span className="text-primary font-bold text-sm uppercase tracking-[0.3em] mb-4 block">À PROPOS DE NOUS</span>
              <h1 className="text-5xl lg:text-7xl font-display font-extrabold text-white leading-tight">
                L'Expertise <span className="text-primary">Technologique</span> au Service du Sahel.
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-display font-bold text-dark dark:text-white mb-8">Notre Mission</h2>
          <p className="text-lg text-muted dark:text-slate-400 mb-8 leading-relaxed">
            Teranga TE est un partenaire technologique de premier plan spécialisé dans la sécurisation des infrastructures critiques. Notre mission est d'accompagner la transformation numérique et énergétique du Sahel avec des solutions robustes et un support garantissant une continuité de service absolue.
          </p>
          <div className="space-y-4">
            {[
              "Sécurisation des infrastructures critiques",
              "Expertise senior certifiée",
              "Disponibilité garantie (SLA 98%+)",
              "Support managé 24h/24 et 7j/7"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span className="font-bold text-dark dark:text-slate-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white dark:bg-slate-900 p-8 rounded-[40px] border border-surface dark:border-slate-800">
            <Target className="w-12 h-12 text-primary mb-6" />
            <h3 className="text-xl font-display font-bold text-dark dark:text-white mb-2">Objectif</h3>
            <p className="text-sm text-muted dark:text-slate-400">Devenir le partenaire technologique privilégié des industries et gouvernances du Sahel.</p>
          </div>
          <div className="bg-white dark:bg-slate-900 p-8 rounded-[40px] border border-surface dark:border-slate-800 shadow-xl">
            <Eye className="w-12 h-12 text-primary mb-6" />
            <h3 className="text-xl font-display font-bold text-dark dark:text-white mb-2">Vision</h3>
            <p className="text-muted dark:text-slate-400 text-sm">Un Sahel connecté, énergétiquement indépendant et technologiquement souverain à l'horizon 2028.</p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white dark:bg-slate-900 py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-dark dark:text-white mb-4">Valeurs Teranga</h2>
            <p className="text-muted dark:text-slate-400 max-w-2xl mx-auto">L'ADN qui guide chacune de nos interventions techniques.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Award />, title: "Excellence Technique", desc: "Une veille constante et des certifications internationales pour garantir le meilleur niveau de service." },
              { icon: <Users />, title: "Teranga (Hospitalité)", desc: "Un accueil et une écoute active pour bâtir des partenariats de confiance sur le long terme." },
              { icon: <Globe />, title: "Ancrage Sahélien", desc: "Une compréhension profonde des réalités locales pour des solutions adaptées au terrain." }
            ].map((value, i) => (
              <div key={i} className="bg-white dark:bg-slate-900 p-10 rounded-[40px] shadow-xl shadow-slate-200/50 dark:shadow-black/50 border border-surface dark:border-slate-800 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-6">
                  {React.cloneElement(value.icon as React.ReactElement, { className: "w-8 h-8" })}
                </div>
                <h3 className="text-2xl font-display font-bold text-dark dark:text-white mb-4">{value.title}</h3>
                <p className="text-muted dark:text-slate-400 leading-relaxed text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
