import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Cpu, Battery, Sun, Wrench, ArrowRight, CheckCircle2 } from 'lucide-react';

const SERVICES = [
  { title: 'ICT', desc: 'Conception, déploiement et gestion d’infrastructures IT complètes avec support 24/7.', icon: <Cpu />, details: '« Votre réseau ne s’arrête pas. Votre business non plus. »' },
  { title: 'Énergie', desc: 'Solutions de continuité énergétique et infrastructures de puissance critiques.', icon: <Battery />, details: 'Sécurisation de l’alimentation pour vos sites industriels.' },
  { title: 'Renouvelables', desc: 'Expertise en solaire photovoltaïque pour une autonomie énergétique durable.', icon: <Sun />, details: 'Impact ESG mesurable et réduction des coûts opérationnels.' },
  { title: 'Contrôle Technique', desc: 'Audit et supervision technique des installations pour garantir les standards.', icon: <Wrench />, details: 'Conformité et excellence technique garantie.' },
];

const FORMULAS = [
  {
    name: 'Essentiel',
    desc: 'Maintenance Corrective sur appel',
    features: ['Intervention sous 4h ouvrées', 'Accès au portail de Ticketing', 'Pièces facturées en sus'],
    btnText: 'Demander une offre >'
  },
  {
    name: 'Confort',
    desc: 'Maintenance Préventive & Corrective',
    features: ['Interventions illimitées (MO)', 'Visites trimestrielles', 'Stock de consignation', 'Pièces majeures en option'],
    btnText: 'Demander une offre >',
    highlight: true
  },
  {
    name: 'Premium',
    desc: 'Support & Supervision 24h/24',
    features: ['SLA Garanti > 99%', 'Technicien dédié', 'Engagement de Résultats', 'Gestion de projet'],
    btnText: 'Demander une offre >'
  },
  {
    name: 'Sur-mesure',
    desc: 'Architecture Multi-sites',
    features: ['KPI spécifiques', 'Reporting personnalisé', 'Audit technique complet'],
    btnText: 'Demander une offre >'
  }
];

export const Services = () => {
  return (
    <section id="expertises" className="section-padding relative overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=2000" 
          alt="Tech background"
          className="w-full h-full object-cover opacity-10"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-surface/90 dark:bg-dark/90" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-bold text-[10px] uppercase tracking-[0.3em] mb-3 block">NOS DOMAINES D'EXPERTISE</span>
          <h2 className="text-3xl lg:text-5xl font-display font-extrabold text-dark dark:text-white mb-6 leading-tight">
            Des solutions intégrées pour <br /><span className="text-primary">vos infrastructures critiques.</span>
          </h2>
          <p className="text-base text-muted dark:text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Sécurisez et optimisez vos opérations avec notre expertise multi-domaines.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-24">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white dark:bg-slate-900 p-8 rounded-4xl shadow-lg shadow-surface dark:shadow-none border border-slate-50 dark:border-slate-800 group hover:border-primary transition-all duration-500 text-center flex flex-col items-center"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-5 group-hover:bg-primary group-hover:text-white transition-colors">
                {React.cloneElement(service.icon as React.ReactElement, { className: "w-6 h-6" })}
              </div>
              <h3 className="text-xl font-display font-bold text-dark dark:text-white mb-2">{service.title}</h3>
              <p className="text-[11px] text-muted dark:text-slate-400 leading-relaxed mb-4">{service.desc}</p>
              <div className="text-[9px] font-bold text-primary border-t border-surface dark:border-slate-800 pt-4 mt-auto">
                {service.details}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Formulas Section */}
        <div id="offres" className="pt-20">
          <div className="text-center mb-16">
            <span className="text-primary font-bold text-[10px] uppercase tracking-[0.3em] mb-3 block">NOS FORMULES DE SERVICE</span>
            <h2 className="text-3xl lg:text-4xl font-display font-extrabold text-dark dark:text-white mb-4">Un modèle de service adapté à vos enjeux</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FORMULAS.map((formula, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className={`p-8 rounded-[40px] flex flex-col ${formula.highlight ? 'bg-primary text-white shadow-2xl scale-105 z-10' : 'bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800'}`}
              >
                <h4 className="text-2xl font-display font-extrabold mb-2">{formula.name}</h4>
                <p className={`text-[11px] mb-6 ${formula.highlight ? 'text-white/80' : 'text-muted'}`}>{formula.desc}</p>
                <div className="space-y-3 mb-8 flex-grow">
                  {formula.features.map((feature, fidx) => (
                    <div key={fidx} className="flex gap-2">
                      <CheckCircle2 className={`w-4 h-4 flex-shrink-0 ${formula.highlight ? 'text-secondary' : 'text-primary'}`} />
                      <span className="text-[10px] font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
                <Link to="/contact" className={`text-center py-3 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${formula.highlight ? 'bg-white text-primary hover:bg-surface' : 'bg-primary text-white hover:bg-primary/80'}`}>
                  {formula.btnText}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
