import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Facebook, Twitter, Instagram, Linkedin, ArrowRight, Mail, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-16 pb-8 rounded-t-5xl lg:rounded-t-[80px]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/10">
                <Zap className="text-white w-5 h-5" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-xl font-display font-extrabold text-white tracking-tighter">TERANGA TE</span>
              </div>
            </div>
            <p className="text-slate-400 text-[11px] leading-relaxed max-w-xs">
              Partenaire technologique de référence dans le Sahel. Nous sécurisons vos infrastructures critiques via des solutions ICT, Énergie et Renouvelables.
            </p>
            <div className="flex gap-3">
              {[Linkedin, Twitter, Facebook, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-8 h-8 bg-white/5 hover:bg-primary rounded-lg flex items-center justify-center transition-all group">
                  <Icon className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-sm mb-6 uppercase tracking-widest text-slate-200">Navigation</h4>
            <ul className="grid grid-cols-2 gap-3 text-slate-400 text-[11px]">
              {[
                { name: 'Accueil', href: '/' },
                { name: 'À propos', href: '/about' },
                { name: 'Expertises', href: '/expertises' },
                { name: 'Offres', href: '/offres' },
                { name: 'Références', href: '/references' },
                { name: 'Sahel', href: '/sahel' },
                { name: 'Contact', href: '/contact' },
                { name: 'Carrières', href: '/careers' },
              ].map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className="hover:text-primary transition-colors flex items-center gap-1.5 group">
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-sm mb-6 uppercase tracking-widest text-slate-200">Expertises</h4>
            <ul className="space-y-3 text-slate-400 text-[11px]">
              {['ICT & Numérique', 'Énergie & Puissance', 'Énergies Renouvelables', 'Audit & Contrôle Technique', 'Support Managé 24/7'].map((item) => (
                <li key={item}>
                  <a href="#services" className="hover:text-primary transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-sm mb-6 uppercase tracking-widest text-slate-200">Veille Technologique</h4>
            <p className="text-slate-400 text-[11px] mb-4">Inscrivez-vous pour recevoir nos analyses sur l'innovation et l'énergie au Sahel.</p>
            <div className="flex gap-2">
              <input type="email" placeholder="Email professionnel" className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-[11px] outline-none focus:border-primary w-full" />
              <button className="bg-primary p-2.5 rounded-xl hover:bg-primary/80 transition-colors">
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 text-center text-slate-500 text-[10px] font-medium tracking-wider uppercase">
          <p>&copy; {new Date().getFullYear()} TERANGA TE. Tous droits réservés. Design par DIGITAL MIND.</p>
        </div>
      </div>
    </footer>
  );
};
