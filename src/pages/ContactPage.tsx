import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Phone, Mail, Send, ChevronRight, ChevronLeft, CheckCircle2, Clock, Globe, ShieldCheck } from 'lucide-react';
import { MapSection } from '../components/MapSection';

export const ContactPage = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: 'ICT',
    urgency: 'Standard',
    location: '',
    message: ''
  });

  const nextStep = () => setStep(s => s + 1);
  const prevStep = () => setStep(s => s - 1);

  return (
    <div className="pt-32 pb-20">
      {/* Header */}
      <section className="section-padding !py-0 mb-20">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-primary font-bold text-sm uppercase tracking-[0.3em] mb-4 block">CONTACTEZ-NOUS</span>
          <h1 className="text-5xl lg:text-7xl font-display font-extrabold text-dark dark:text-white leading-tight mb-8">
            Démarrons une <span className="text-primary">Expertise</span>.
          </h1>
          <p className="text-muted dark:text-slate-400 text-lg">
            Notre centre d'opérations et nos experts techniques sont à votre disposition pour sécuriser vos infrastructures.
          </p>
        </div>
      </section>

      <section className="section-padding !py-0 grid lg:grid-cols-3 gap-16">
        {/* Contact Info */}
        <div className="lg:col-span-1 space-y-12">
          <div className="bg-white dark:bg-slate-900 p-10 rounded-[50px] border border-surface dark:border-slate-800">
            <h3 className="text-2xl font-display font-bold text-dark dark:text-white mb-8">Nos Coordonnées</h3>
            <div className="space-y-8">
              {[
                { icon: <MapPin />, title: 'Adresse Siège', desc: 'Secteur Dakar-Plateau, 12 Rue de Thiong, Dakar, Sénégal' },
                { icon: <Phone />, title: 'Support technique', desc: '+221 33 829 58 06 (24/7)' },
                { icon: <Mail />, title: 'Email Expert', desc: 'expert@teranga-te.com' },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shrink-0">
                    {React.cloneElement(item.icon as React.ReactElement, { className: "w-6 h-6" })}
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-dark dark:text-white">{item.title}</h4>
                    <p className="text-muted dark:text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-primary p-10 rounded-[50px] text-white relative overflow-hidden shadow-xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <h3 className="text-2xl font-display font-bold mb-6">Disponibilité Support</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-white/10 pb-4">
                <span className="text-white/60">Monitoring</span>
                <span className="font-bold">24H/24</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/10 pb-4">
                <span className="text-white/60">Intervention</span>
                <span className="font-bold">7J/7</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/60">Temps de réponse (SLA)</span>
                <span className="font-bold text-white/90">&lt; 4H</span>
              </div>
            </div>
          </div>
        </div>

        {/* Multi-step Form */}
        <div className="lg:col-span-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-slate-900 p-10 lg:p-16 rounded-[60px] shadow-2xl shadow-slate-200/50 dark:shadow-black/50 border border-surface dark:border-slate-800"
          >
            {/* Progress Bar */}
            <div className="flex gap-2 mb-12">
              {[1, 2, 3].map((s) => (
                <div 
                  key={s} 
                  className={`h-2 flex-1 rounded-full transition-all duration-500 ${step >= s ? 'bg-primary' : 'bg-surface dark:bg-slate-800'}`} 
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
                  className="space-y-8"
                >
                  <h3 className="text-3xl font-display font-bold text-dark dark:text-white">Votre Identité</h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-[10px] font-bold text-muted uppercase tracking-widest">Nom & Prénom</label>
                      <input type="text" className="w-full px-8 py-5 rounded-[24px] bg-surface dark:bg-slate-800 border-none focus:ring-2 focus:ring-primary/20 outline-none transition-all dark:text-white" placeholder="Nom de famille" />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-bold text-muted uppercase tracking-widest">Organisation</label>
                      <input type="text" className="w-full px-8 py-5 rounded-[24px] bg-surface dark:bg-slate-800 border-none focus:ring-2 focus:ring-primary/20 outline-none transition-all dark:text-white" placeholder="Nom de l'institution" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold text-muted uppercase tracking-widest">Email Professionnel</label>
                    <input type="email" className="w-full px-8 py-5 rounded-[24px] bg-surface dark:bg-slate-800 border-none focus:ring-2 focus:ring-primary/20 outline-none transition-all dark:text-white" placeholder="pro@domaine.com" />
                  </div>
                  <button onClick={nextStep} className="inline-flex items-center justify-center gap-3 bg-primary text-white w-full py-6 rounded-2xl font-bold uppercase tracking-widest hover:bg-primary/90 transition-colors mt-10">
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
                  className="space-y-8"
                >
                  <h3 className="text-3xl font-display font-bold text-dark dark:text-white">Besoin Technique</h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-[10px] font-bold text-muted uppercase tracking-widest">Domaine d'Expertise</label>
                      <select className="w-full px-8 py-5 rounded-[24px] bg-surface dark:bg-slate-800 border-none focus:ring-2 focus:ring-primary/20 outline-none transition-all dark:text-white appearance-none">
                        <option>ICT & Infrastructures</option>
                        <option>Énergie (Backup/UPS)</option>
                        <option>Solaire & Renouvelables</option>
                        <option>Contrôle Technique & Audit</option>
                        <option>Support Managé & SLA</option>
                      </select>
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-bold text-muted uppercase tracking-widest">Priorité</label>
                      <select className="w-full px-8 py-5 rounded-[24px] bg-surface dark:bg-slate-800 border-none focus:ring-2 focus:ring-primary/20 outline-none transition-all dark:text-white appearance-none">
                        <option>Standard</option>
                        <option>Haute (Projet critique)</option>
                        <option>Urgente (Panne en cours)</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold text-muted uppercase tracking-widest">Zone Géographique</label>
                    <input type="text" className="w-full px-8 py-5 rounded-[24px] bg-surface dark:bg-slate-800 border-none focus:ring-2 focus:ring-primary/20 outline-none transition-all dark:text-white" placeholder="Dakar / Bamako / Nouakchott..." />
                  </div>
                  <div className="flex gap-6 mt-10">
                    <button onClick={prevStep} className="p-6 rounded-[24px] bg-surface dark:bg-slate-800 text-muted dark:text-slate-400 hover:bg-slate-200 transition-colors">
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button onClick={nextStep} className="flex-1 bg-primary text-white py-6 rounded-2xl font-bold uppercase tracking-widest hover:bg-primary/90 transition-colors">
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
                  className="space-y-8"
                >
                  <h3 className="text-3xl font-display font-bold text-dark dark:text-white">Message & Finalisation</h3>
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold text-muted uppercase tracking-widest">Description de votre projet</label>
                    <textarea rows={8} className="w-full px-8 py-5 rounded-[24px] bg-surface dark:bg-slate-800 border-none focus:ring-2 focus:ring-primary/20 outline-none transition-all dark:text-white" placeholder="Détails techniques, nombre de sites, contraintes SLA..."></textarea>
                  </div>
                  <div className="flex gap-6 mt-10">
                    <button onClick={prevStep} className="p-6 rounded-[24px] bg-surface dark:bg-slate-800 text-muted dark:text-slate-400 hover:bg-slate-200 transition-colors">
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button onClick={() => setStep(4)} className="flex-1 bg-primary text-white py-6 rounded-2xl font-bold uppercase tracking-widest hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
                      SOUMETTRE LA DEMANDE <Send className="w-5 h-5 ml-2 inline" />
                    </button>
                  </div>
                </motion.div>
              )}

              {step === 4 && (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16"
                >
                  <div className="w-24 h-24 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-8">
                    <CheckCircle2 className="w-12 h-12" />
                  </div>
                  <h3 className="text-4xl font-display font-bold text-dark dark:text-white mb-6">Expertise Demandée !</h3>
                  <p className="text-muted dark:text-slate-400 text-lg mb-10 max-w-md mx-auto">
                    Merci pour votre sollicitation. Un expert senior de Teranga TE prendra contact avec vous dans les plus brefs délais.
                  </p>
                  <button onClick={() => setStep(1)} className="text-primary font-bold hover:underline text-lg">
                    Envoyer une autre demande d'expertise
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <MapSection />
    </div>
  );
};
