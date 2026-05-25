import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MapPin, Phone, Mail, Send, ChevronLeft, ChevronRight, CheckCircle2, ArrowUpRight,
} from 'lucide-react';

export const Contact: React.FC = () => {
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState(1);
  const next = () => { setDirection(1); setStep((s) => Math.min(s + 1, 4)); };
  const back = () => { setDirection(-1); setStep((s) => Math.max(s - 1, 1)); };

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 200 : -200, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir < 0 ? 200 : -200, opacity: 0 }),
  };

  // Adresse officielle Afri RH Dakar
  const afriRHAddress = 'Afri RH, Rue LIB-12, Résidence Adja Coura, Liberté 6 Extension, Dakar';
  const mapsQuery = encodeURIComponent(afriRHAddress);

  return (
    <section id="contact" className="section section--cream">
      <div className="container">
        <motion.div
          className="section-head"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px 0px' }}
          transition={{ duration: 0.8 }}
        >
          <span className="eyebrow"><span className="bar" />AUDIT TECHNIQUE</span>
          <h2>
            Prêt à sécuriser votre <span className="text-ital text-gold">infrastructure ?</span>
          </h2>
          <p>Obtenez un audit préliminaire ou un devis personnalisé. Notre équipe d'experts vous répondra sous 24 h.</p>
        </motion.div>

        <motion.div
          className="contact-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <div className="contact-left">
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              style={{ fontSize: 28, marginBottom: 16, fontWeight: 800 }}
            >
              Parlons de votre projet.
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              style={{ color: 'rgba(255,255,255,0.7)', fontSize: 15, lineHeight: 1.7 }}
            >
              Nos experts ICT, Énergie et Renouvelables sont à votre écoute pour évaluer vos besoins et concevoir la solution adaptée.
            </motion.p>

            <div className="contact-info">
              {[
                { icon: <MapPin size={20} />, label: 'Adresse', value: afriRHAddress },
                { icon: <Phone size={20} />, label: 'Téléphone', value: '+221 77 337 26 28' },
                { icon: <Mail size={20} />, label: 'Email', value: 'contact@teranga-te.com' },
              ].map((item, idx) => (
                <motion.div
                  key={item.label}
                  className="item"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + idx * 0.1 }}
                >
                  <div className="ic">{item.icon}</div>
                  <div>
                    <div className="lbl">{item.label}</div>
                    <div className="val" style={{ whiteSpace: 'pre-line' }}>{item.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="contact-247"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <div style={{ fontWeight: 800, color: '#fff', fontSize: 16 }}>Support 24/7</div>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13, marginTop: 8, lineHeight: 1.6 }}>
                Nos techniciens sont mobilisables à tout moment pour vos urgences sur site ou à distance.
              </p>
              <div className="live"><span className="d" />Opérationnel maintenant</div>
            </motion.div>
          </div>

          <div className="contact-right">
            <div className="progress-bar">
              {[1, 2, 3].map((n) => (
                <div key={n} className={`seg ${step >= n ? 'active' : ''}`} />
              ))}
            </div>

            <AnimatePresence mode="wait" custom={direction}>
              {step === 1 && (
                <motion.div key="step1" custom={direction} variants={variants} initial="enter" animate="center" exit="exit">
                  <h3 style={{ fontSize: 26, marginBottom: 28, fontWeight: 700 }}>Votre profil</h3>
                  <div className="form-field"><label>Nom & prénom</label><input type="text" placeholder="Votre nom" /></div>
                  <div className="form-field"><label>Entreprise / Institution</label><input type="text" placeholder="Nom de votre société" /></div>
                  <div className="form-field"><label>Email professionnel</label><input type="email" placeholder="vous@entreprise.com" /></div>
                  <motion.button className="btn btn--gold" style={{ width: '100%', justifyContent: 'center', marginTop: 12 }} onClick={next} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    Étape suivante <ChevronRight size={18} />
                  </motion.button>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div key="step2" custom={direction} variants={variants} initial="enter" animate="center" exit="exit">
                  <h3 style={{ fontSize: 26, marginBottom: 28, fontWeight: 700 }}>Vos besoins</h3>
                  <div className="form-field"><label>Domaine principal</label><select><option>ICT — Technologies de l'Information</option><option>Énergie & puissance critique</option><option>Énergies renouvelables</option><option>Contrôle technique / Audit</option></select></div>
                  <div className="form-field"><label>Formule de service</label><select><option>Premium — SLA 99%+ Support 24/7</option><option>Confort — Maintenance préventive</option><option>Essentiel — Maintenance corrective</option><option>Sur-mesure — Projet spécifique</option></select></div>
                  <div className="form-row">
                    <motion.button className="btn-back" onClick={back} whileHover={{ x: -4 }} whileTap={{ scale: 0.95 }}><ChevronLeft size={20} /></motion.button>
                    <motion.button className="btn btn--gold" style={{ flex: 1, justifyContent: 'center' }} onClick={next} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      Étape suivante <ChevronRight size={18} />
                    </motion.button>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div key="step3" custom={direction} variants={variants} initial="enter" animate="center" exit="exit">
                  <h3 style={{ fontSize: 26, marginBottom: 28, fontWeight: 700 }}>Précisions</h3>
                  <div className="form-field"><label>Description de votre besoin</label><textarea rows={6} placeholder="Décrivez vos enjeux, nombre de sites, urgence…" /></div>
                  <div className="form-row">
                    <motion.button className="btn-back" onClick={back} whileHover={{ x: -4 }} whileTap={{ scale: 0.95 }}><ChevronLeft size={20} /></motion.button>
                    <motion.button className="btn btn--gold" style={{ flex: 1, justifyContent: 'center' }} onClick={next} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      Envoyer la demande <Send size={18} />
                    </motion.button>
                  </div>
                </motion.div>
              )}

              {step === 4 && (
                <motion.div key="step4" custom={direction} variants={variants} initial="enter" animate="center" exit="exit" className="success-state">
                  <motion.div className="check" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}>
                    <CheckCircle2 size={44} />
                  </motion.div>
                  <h3 style={{ fontSize: 30, marginTop: 16 }}>Demande envoyée</h3>
                  <p style={{ color: 'var(--slate)', maxWidth: 360, margin: '12px auto 0', lineHeight: 1.6 }}>
                    Merci pour votre confiance. Un expert Teranga TE vous contactera sous 24 h.
                  </p>
                  <motion.button
                    onClick={() => setStep(1)}
                    style={{
                      marginTop: 24,
                      color: 'var(--gold-600)',
                      fontWeight: 700,
                      fontSize: 14,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                    }}
                    whileHover={{ scale: 1.05 }}
                  >
                    Nouvelle demande →
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

      
        {/* Bloc Google Maps avec le vrai curseur rouge */}
        <motion.div
          className="maps-block reveal"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="maps-head">
            <span className="ic"><MapPin size={18} /></span>
            <div>
              <div className="t">Notre localisation</div>
              <div className="a">{afriRHAddress}</div>
            </div>
            <motion.a
              className="maps-cta"
              // Lien externe vers Google Maps (ouvre un nouvel onglet avec le pin)
              href={`https://www.google.com/maps?q=${mapsQuery}`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Ouvrir dans Google Maps
              <ArrowUpRight size={14} />
            </motion.a>
          </div>
          <div className="maps-embed">
            <iframe
              // La vraie URL d'intégration qui génère le marqueur rouge
              src={`https://maps.google.com/maps?q=${mapsQuery}&t=&z=16&ie=UTF8&iwloc=&output=embed`}
              title="AfriRH — Dakar"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              style={{ width: '100%', height: '100%', border: 0 }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};