import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Phone, Mail, Send, ChevronRight, ChevronLeft, CheckCircle2, ArrowRight } from 'lucide-react';

export const Contact = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    expertise: 'ICT',
    formula: 'Confort',
    message: ''
  });

  const nextStep = () => setStep(s => s + 1);
  const prevStep = () => setStep(s => s - 1);

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=2000" 
          alt="Contact background"
          className="w-full h-full object-cover opacity-10"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-slate-50/90 dark:bg-slate-950/90" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary font-bold text-sm uppercase tracking-[0.3em] mb-4 block">AUDIT TECHNIQUE</span>
          <h2 className="text-4xl lg:text-6xl font-display font-extrabold mb-6 leading-tight text-dark dark:text-white">
            Prêt à sécuriser votre <br /><span className="text-primary">infrastructure ?</span>
          </h2>
          <p className="text-muted dark:text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Obtenez un audit préliminaire ou un devis personnalisé. Notre équipe d'experts vous répondra sous 24h.
          </p>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-[60px] lg:rounded-[100px] overflow-hidden relative border border-slate-100 dark:border-slate-800 shadow-2xl">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-1/2" />
          
          <div className="grid lg:grid-cols-2 gap-16 p-10 lg:p-20 relative z-10">
            <div>
              <div className="space-y-8 mb-12">
                {[
                  { icon: <MapPin />, title: 'Adresse', desc: 'Immeuble Sokhna Anta, 2e Etage (SUD), Avenue Cheikh Anta Diop, Dakar (Sénégal)' },
                  { icon: <Phone />, title: 'Téléphone', desc: '+221 33 825 XX XX' },
                  { icon: <Mail />, title: 'Email', desc: 'contact@teranga-te.com' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 items-center">
                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                      {React.cloneElement(item.icon as React.ReactElement, { className: "w-6 h-6" })}
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-dark dark:text-white">{item.title}</h4>
                      <p className="text-xs text-muted dark:text-slate-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-8 bg-dark rounded-[40px] text-white border border-primary/20">
                <h4 className="text-xl font-display font-bold mb-4">Support 24/7</h4>
                <p className="text-xs text-white/70 mb-6 leading-relaxed">
                  Nos techniciens sont mobilisables à tout moment pour vos urgences techniques sur site ou à distance.
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-primary">Opérationnel 24/7</span>
                </div>
              </div>
            </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-slate-50 dark:bg-slate-800 p-8 lg:p-12 rounded-[40px] shadow-xl border border-slate-100 dark:border-slate-700"
          >
            {/* Progress Bar */}
            <div className="flex gap-2 mb-10">
              {[1, 2, 3].map((s) => (
                <div 
                  key={s} 
                  className={`h-1.5 flex-1 rounded-full transition-all duration-500 ${step >= s ? 'bg-primary' : 'bg-surface dark:bg-slate-800'}`} 
                />
              ))}
            </div>

            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h3 className="text-2xl font-display font-bold text-dark dark:text-white mb-6">Votre Profil</h3>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-muted uppercase tracking-widest">Nom & Prénom</label>
                      <input type="text" className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-slate-800 border-none focus:ring-2 focus:ring-primary/20 outline-none transition-all dark:text-white text-sm" placeholder="Votre nom" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-muted uppercase tracking-widest">Entreprise / Institution</label>
                      <input type="text" className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-slate-800 border-none focus:ring-2 focus:ring-primary/20 outline-none transition-all dark:text-white text-sm" placeholder="Nom de votre société" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-muted uppercase tracking-widest">Email Professionnel</label>
                      <input type="email" className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-slate-800 border-none focus:ring-2 focus:ring-primary/20 outline-none transition-all dark:text-white text-sm" placeholder="votre@email.com" />
                    </div>
                  </div>
                  <button onClick={nextStep} className="w-full py-5 text-sm bg-primary text-white rounded-2xl font-bold uppercase tracking-widest hover:bg-primary/90 transition-all mt-8 flex items-center justify-center gap-2">
                    ÉTAPE SUIVANTE <ChevronRight className="w-5 h-5" />
                  </button>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h3 className="text-2xl font-display font-bold text-dark dark:text-white mb-6">Expertises Souhaitées</h3>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-muted uppercase tracking-widest">Domaine Principal</label>
                      <select className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-slate-800 border-none focus:ring-2 focus:ring-primary/20 outline-none transition-all dark:text-white appearance-none text-sm font-medium">
                        <option>ICT - Technologies de l'Information</option>
                        <option>Énergie & Puissance</option>
                        <option>Énergies Renouvelables</option>
                        <option>Contrôle Technique / Audit</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-muted uppercase tracking-widest">Formule de Service</label>
                      <select className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-slate-800 border-none focus:ring-2 focus:ring-primary/20 outline-none transition-all dark:text-white appearance-none text-sm font-medium">
                        <option>Confort (Maintenance préventive)</option>
                        <option>Premium (SLA 99%+ Support 24/7)</option>
                        <option>Essentiel (Maintenance corrective)</option>
                        <option>Sur-mesure (Projet spécifique)</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex gap-4 mt-8">
                    <button onClick={prevStep} className="p-5 rounded-2xl bg-surface dark:bg-slate-800 text-muted dark:text-slate-400 hover:bg-slate-200 transition-colors">
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button onClick={nextStep} className="flex-1 py-5 text-sm bg-primary text-white rounded-2xl font-bold uppercase tracking-widest hover:bg-primary/90 transition-all flex items-center justify-center gap-2">
                      ÉTAPE SUIVANTE <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h3 className="text-2xl font-display font-bold text-dark dark:text-white mb-6">Précisions</h3>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-muted uppercase tracking-widest">Description de votre besoin</label>
                      <textarea rows={6} className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-slate-800 border-none focus:ring-2 focus:ring-primary/20 outline-none transition-all dark:text-white text-sm" placeholder="Décrivez vos enjeux, nombre de sites, urgence..."></textarea>
                    </div>
                  </div>
                  <div className="flex gap-4 mt-8">
                    <button onClick={prevStep} className="p-5 rounded-2xl bg-surface dark:bg-slate-800 text-muted dark:text-slate-400 hover:bg-slate-200 transition-colors">
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button onClick={() => setStep(4)} className="flex-1 py-5 text-sm bg-primary text-white rounded-2xl font-bold uppercase tracking-widest hover:bg-primary/90 transition-all flex items-center justify-center gap-2">
                      ENVOYER <Send className="w-5 h-5" />
                    </button>
                  </div>
                </motion.div>
              )}

              {step === 4 && (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-10"
                >
                  <div className="w-20 h-20 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-3xl font-display font-bold text-dark dark:text-white mb-4">Demande Envoyée !</h3>
                  <p className="text-xs text-muted dark:text-slate-400 mb-8 max-w-[200px] mx-auto">
                    Merci pour votre confiance. Un expert Teranga TE vous contactera sous peu.
                  </p>
                  <button onClick={() => setStep(1)} className="text-primary font-bold text-xs hover:underline uppercase tracking-widest">
                    Nouvelle demande
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
     </div>
    </section>
  );
};
