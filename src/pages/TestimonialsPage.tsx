import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote, CheckCircle2, Award, Users, Globe } from 'lucide-react';

const TESTIMONIALS = [
  {
    name: "Abdoulaye Diallo",
    role: "DSI, Banque Atlantique",
    content: "L'expertise technique de Teranga TE sur nos infrastructures critiques est exceptionnelle. Le respect des SLA à 98%+ et leur réactivité font d'eux un partenaire de confiance au Sénégal.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=abdou"
  },
  {
    name: "Fatou Sow",
    role: "Responsable Infrastructure, Senelec",
    content: "Nous collaborons avec Teranga TE sur des solutions d'énergie renouvelable. Leur professionnalisme et leur maîtrise des technologies solaires sont des atouts majeurs pour nos projets régionaux.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=fatou"
  },
  {
    name: "Ousmane Kane",
    role: "Directeur Technique, Orange Mali",
    content: "L'accompagnement de Teranga TE dans le Sahel est irréprochable. Leur proximité locale couplée à des standards internationaux sécurise nos opérations numériques les plus sensibles.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=ousmane"
  },
  {
    name: "Aissatou Ndiaye",
    role: "CTO, Fintech Africa",
    content: "Teranga TE se distingue par son support managé 24/7. C'est rassurant de savoir que nos serveurs critiques sont monitorés par des experts certifiés, garantissant une haute disponibilité.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=aissa"
  },
  {
    name: "Ibrahim Traoré",
    role: "Gérant, Mines du Burkina",
    content: "Leurs solutions hybrides Énergie/ICT sont parfaitement adaptées aux conditions exigeantes du terrain sahélien. Un service d'excellence qui dépasse nos attentes.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=ibrahim"
  },
  {
    name: "Mame Diarra",
    role: "Directrice Opérations, Port de Dakar",
    content: "Le service client est impeccable. Teranga TE comprend les exigences de la logistique portuaire et s'adapte parfaitement à nos besoins spécifiques de contrôle technique.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=mame"
  }
];

export const TestimonialsPage = () => {
  return (
    <div className="pt-32 pb-20">
      {/* Header */}
      <section className="section-padding !py-0 mb-20">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-emerald-600 font-bold text-sm uppercase tracking-[0.3em] mb-4 block">TÉMOIGNAGES CLIENTS</span>
          <h1 className="text-5xl lg:text-7xl font-display font-extrabold text-slate-900 dark:text-white leading-tight mb-8">
            Ils nous font <span className="text-emerald-600">Confiance</span>.
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-lg">
            Découvrez comment nous accompagnons les leaders du Sahel dans la sécurisation de leurs infrastructures critiques.
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="section-padding !py-0 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {TESTIMONIALS.map((testimonial, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-white dark:bg-slate-900 p-10 rounded-[50px] shadow-xl shadow-slate-200/50 dark:shadow-black/50 border border-slate-100 dark:border-slate-800 relative group"
          >
            <div className="absolute top-10 right-10 text-primary/10 group-hover:text-primary/20 transition-colors">
              <Quote className="w-16 h-16" />
            </div>
            
            <div className="flex gap-1 mb-6">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-accent text-accent" />
              ))}
            </div>
            
            <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed italic relative z-10">
              "{testimonial.content}"
            </p>
            
            <div className="flex items-center gap-4 relative z-10">
              <img 
                src={testimonial.avatar} 
                alt={testimonial.name} 
                className="w-14 h-14 rounded-2xl object-cover border-2 border-white dark:border-slate-800 shadow-md"
              />
              <div>
                <h4 className="font-display font-bold text-slate-900 dark:text-white">{testimonial.name}</h4>
                <p className="text-xs text-primary font-bold uppercase tracking-widest">{testimonial.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Trust Stats */}
      <section className="bg-white dark:bg-slate-900 py-24 border-t border-slate-100 dark:border-slate-800 mt-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid md:grid-cols-4 gap-12 text-center">
          {[
            { icon: <Users />, label: "Clients Satisfaits", value: "500+" },
            { icon: <Globe />, label: "Pays Desservis", value: "25+" },
            { icon: <Award />, label: "Taux de Fidélité", value: "98%" },
            { icon: <CheckCircle2 />, label: "Certifications", value: "100%" }
          ].map((stat, i) => (
            <div key={i}>
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-6">
                {React.cloneElement(stat.icon as React.ReactElement, { className: "w-8 h-8" })}
              </div>
              <h3 className="text-4xl font-display font-bold mb-2 text-slate-900 dark:text-white">{stat.value}</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
