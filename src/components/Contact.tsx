import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MapPin, Phone, Mail, Send, ChevronLeft, ChevronRight, CheckCircle2, ArrowUpRight,
} from 'lucide-react';

// ── Coordonnées ─────────────────────────────────────────────────
const TERANGA_LAT = 14.7310;
const TERANGA_LNG = -17.4674;
const TERANGA_LABEL = 'Teranga Technology & Energy';
const TERANGA_ADDRESS = 'Rue LIB-12, Résidence Adja Coura, Liberté 6 Extension, Dakar';

// ── Style global additionnel (peut être déplacé dans un fichier CSS) ─
const globalStyles = `
  .leaflet-popup-content-wrapper {
    border-radius: 16px !important;
    box-shadow: 0 20px 40px rgba(0,0,0,0.2) !important;
    padding: 0 !important;
  }
  .leaflet-popup-content {
    margin: 16px 20px !important;
    font-family: 'Inter', system-ui, sans-serif !important;
  }
  .custom-marker-icon {
    background: none !important;
    border: none !important;
  }
`;

// ── Composant Carte Leaflet ──────────────────────────────────────
const LeafletMap: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<any>(null);

  useEffect(() => {
    if (mapRef.current) return;

    if (!document.getElementById('leaflet-css')) {
      const link = document.createElement('link');
      link.id = 'leaflet-css';
      link.rel = 'stylesheet';
      link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
      document.head.appendChild(link);
    }

    const loadLeaflet = () => {
      if ((window as any).L) {
        initMap();
        return;
      }
      const script = document.createElement('script');
      script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
      script.onload = initMap;
      document.body.appendChild(script);
    };

    const initMap = () => {
      const L = (window as any).L;
      if (!containerRef.current) return;

      const map = L.map(containerRef.current, {
        center: [TERANGA_LAT, TERANGA_LNG],
        zoom: 17,
        zoomControl: true,
        scrollWheelZoom: false,
        attributionControl: false,
      });

      mapRef.current = map;

      // Tuiles neutres et épurées
      L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>',
        maxZoom: 19,
      }).addTo(map);

      // Icône de marqueur moderne (goutte dorée avec ombre et point blanc)
      const icon = L.divIcon({
        html: `
          <div style="
            width: 44px;
            height: 44px;
            background: linear-gradient(135deg, #C29941 0%, #A67B2E 100%);
            border-radius: 50% 50% 50% 0;
            transform: rotate(-45deg);
            border: 3px solid #fff;
            box-shadow: 0 8px 24px rgba(194,153,65,0.4), 0 2px 6px rgba(0,0,0,0.15);
            display: flex;
            align-items: center;
            justify-content: center;
            transition: transform 0.2s ease;
          ">
            <div style="
              transform: rotate(45deg);
              width: 14px;
              height: 14px;
              background: #fff;
              border-radius: 50%;
              box-shadow: inset 0 0 4px rgba(0,0,0,0.1);
            "></div>
          </div>
        `,
        className: 'custom-marker-icon',
        iconSize: [44, 44],
        iconAnchor: [22, 44],
        popupAnchor: [0, -48],
      });

      const marker = L.marker([TERANGA_LAT, TERANGA_LNG], { icon })
        .addTo(map)
        .bindPopup(
          `<div style="font-family: system-ui, sans-serif; padding: 4px 0; min-width: 220px;">
            <div style="font-weight: 700; font-size: 16px; color: #1E293B; margin-bottom: 6px; letter-spacing: -0.01em;">
              ${TERANGA_LABEL}
            </div>
            <div style="font-size: 13px; color: #64748B; line-height: 1.6; margin-bottom: 14px;">
              ${TERANGA_ADDRESS}
            </div>
            <a
              href="https://www.google.com/maps?q=${TERANGA_LAT},${TERANGA_LNG}"
              target="_blank"
              rel="noopener"
              style="
                display: inline-flex;
                align-items: center;
                gap: 6px;
                font-size: 12px;
                font-weight: 600;
                color: #C29941;
                text-decoration: none;
                background: rgba(194,153,65,0.08);
                padding: 6px 14px;
                border-radius: 40px;
                transition: background 0.2s;
              "
              onmouseover="this.style.background='rgba(194,153,65,0.18)'"
              onmouseout="this.style.background='rgba(194,153,65,0.08)'"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="7 17 17 7 7 7 7 17"></polyline>
              </svg>
              Google Maps
            </a>
          </div>`,
          { maxWidth: 280, className: 'custom-popup' }
        )
        .openPopup();

      // Légère animation au survol du marqueur
      marker.on('mouseover', () => {
        const el = marker.getElement();
        if (el) el.style.transform = 'scale(1.05)';
      });
      marker.on('mouseout', () => {
        const el = marker.getElement();
        if (el) el.style.transform = 'scale(1)';
      });
    };

    loadLeaflet();

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  return (
    <>
      <style>{globalStyles}</style>
      <div
        ref={containerRef}
        style={{ width: '100%', height: '100%', minHeight: 360, borderRadius: 24, overflow: 'hidden' }}
      />
    </>
  );
};

// ─────────────────────────────────────────────────────────────────
export const Contact: React.FC = () => {
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState(1);

  const next = () => { setDirection(1); setStep((s) => Math.min(s + 1, 4)); };
  const back = () => { setDirection(-1); setStep((s) => Math.max(s - 1, 1)); };

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 180 : -180, opacity: 0, scale: 0.98 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (dir: number) => ({ x: dir < 0 ? 180 : -180, opacity: 0, scale: 0.98 }),
  };

  const mapsLink = `https://www.google.com/maps?q=${TERANGA_LAT},${TERANGA_LNG}`;

  return (
    <section id="contact" className="section section--cream" style={{ padding: '80px 0' }}>
      <div className="container">
        <motion.div
          className="section-head"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px 0px' }}
          transition={{ duration: 0.8 }}
        >
          <span className="eyebrow"><span className="bar" />AUDIT TECHNIQUE</span>
          <h2 style={{ fontSize: 42, letterSpacing: '-0.02em', lineHeight: 1.2, marginBottom: 16 }}>
            Prêt à sécuriser votre <span className="text-ital text-gold">infrastructure ?</span>
          </h2>
          <p style={{ fontSize: 16, color: '#475569', maxWidth: 600 }}>
            Obtenez un audit préliminaire ou un devis personnalisé. Notre équipe d'experts vous répondra sous 24 h.
          </p>
        </motion.div>

        <motion.div
          className="contact-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 40,
            background: '#FFFFFF',
            borderRadius: 32,
            boxShadow: '0 25px 60px -15px rgba(0,0,0,0.08), 0 0 0 1px rgba(0,0,0,0.03)',
            overflow: 'hidden',
            padding: 48,
          }}
        >
          {/* Colonne gauche */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              style={{ fontSize: 32, marginBottom: 16, fontWeight: 700, color: '#0F172A' }}
            >
              Parlons de votre projet.
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              style={{ color: '#64748B', fontSize: 16, lineHeight: 1.7, marginBottom: 32 }}
            >
              Nos experts ICT, Énergie et Renouvelables sont à votre écoute pour évaluer vos besoins et concevoir la solution adaptée.
            </motion.p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {[
                { icon: <MapPin size={20} />, label: 'Adresse', value: TERANGA_ADDRESS },
                { icon: <Phone size={20} />, label: 'Téléphone', value: '+221 77 337 26 28' },
                { icon: <Mail size={20} />, label: 'Email', value: 'contact@teranga-te.com' },
              ].map((item, idx) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + idx * 0.1 }}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 16,
                    padding: '14px 18px',
                    borderRadius: 16,
                    background: '#F8FAFC',
                    border: '1px solid #E2E8F0',
                  }}
                >
                  <div style={{
                    background: '#C29941',
                    borderRadius: 12,
                    width: 40,
                    height: 40,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    flexShrink: 0,
                  }}>
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 600, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 4 }}>{item.label}</div>
                    <div style={{ fontSize: 15, fontWeight: 500, color: '#1E293B', lineHeight: 1.4 }}>{item.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              style={{
                marginTop: 32,
                background: 'linear-gradient(135deg, #C29941 0%, #A67B2E 100%)',
                borderRadius: 20,
                padding: 24,
                color: '#fff',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 8 }}>Support 24/7</div>
              <p style={{ opacity: 0.9, fontSize: 14, lineHeight: 1.6, marginBottom: 16 }}>
                Nos techniciens sont mobilisables à tout moment pour vos urgences sur site ou à distance.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, fontWeight: 600 }}>
                <span style={{
                  width: 8, height: 8, borderRadius: '50%', background: '#4ADE80',
                  boxShadow: '0 0 8px #4ADE80',
                }} />
                Opérationnel maintenant
              </div>
              {/* Dégradé décoratif */}
              <div style={{
                position: 'absolute', top: -30, right: -30, width: 120, height: 120,
                background: 'rgba(255,255,255,0.08)', borderRadius: '50%',
              }} />
            </motion.div>
          </div>

          {/* Colonne droite (formulaire) */}
          <div style={{
            background: '#F8FAFC',
            borderRadius: 24,
            padding: 32,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}>
            {/* Barre de progression repensée */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 32 }}>
              {[1, 2, 3].map((n) => (
                <div key={n} style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
                  <div style={{
                    width: 32, height: 32, borderRadius: '50%',
                    background: step >= n ? '#C29941' : '#E2E8F0',
                    color: step >= n ? '#fff' : '#64748B',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontWeight: 700, fontSize: 14,
                    transition: 'all 0.4s ease',
                  }}>
                    {n}
                  </div>
                  {n < 3 && (
                    <div style={{
                      flex: 1, height: 3, background: step > n ? '#C29941' : '#E2E8F0',
                      margin: '0 6px', borderRadius: 2, transition: 'background 0.4s',
                    }} />
                  )}
                </div>
              ))}
            </div>

            <AnimatePresence mode="wait" custom={direction}>
              {step === 1 && (
                <motion.div key="step1" custom={direction} variants={variants} initial="enter" animate="center" exit="exit">
                  <h3 style={{ fontSize: 24, marginBottom: 24, fontWeight: 700, color: '#0F172A' }}>Votre profil</h3>
                  <div style={{ marginBottom: 18 }}>
                    <label style={{ fontSize: 13, fontWeight: 600, color: '#64748B', display: 'block', marginBottom: 6 }}>Nom & prénom</label>
                    <input type="text" placeholder="Votre nom" style={inputStyle} />
                  </div>
                  <div style={{ marginBottom: 18 }}>
                    <label style={{ fontSize: 13, fontWeight: 600, color: '#64748B', display: 'block', marginBottom: 6 }}>Entreprise / Institution</label>
                    <input type="text" placeholder="Nom de votre société" style={inputStyle} />
                  </div>
                  <div style={{ marginBottom: 24 }}>
                    <label style={{ fontSize: 13, fontWeight: 600, color: '#64748B', display: 'block', marginBottom: 6 }}>Email professionnel</label>
                    <input type="email" placeholder="vous@entreprise.com" style={inputStyle} />
                  </div>
                  <motion.button
                    onClick={next}
                    style={goldButtonStyle}
                    whileHover={{ scale: 1.02, boxShadow: '0 8px 24px rgba(194,153,65,0.3)' }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Étape suivante <ChevronRight size={18} style={{ marginLeft: 8 }} />
                  </motion.button>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div key="step2" custom={direction} variants={variants} initial="enter" animate="center" exit="exit">
                  <h3 style={{ fontSize: 24, marginBottom: 24, fontWeight: 700, color: '#0F172A' }}>Vos besoins</h3>
                  <div style={{ marginBottom: 18 }}>
                    <label style={{ fontSize: 13, fontWeight: 600, color: '#64748B', display: 'block', marginBottom: 6 }}>Domaine principal</label>
                    <select style={inputStyle}>
                      <option>ICT — Technologies de l'Information</option>
                      <option>Énergie & puissance critique</option>
                      <option>Énergies renouvelables</option>
                      <option>Contrôle technique / Audit</option>
                    </select>
                  </div>
                  <div style={{ marginBottom: 24 }}>
                    <label style={{ fontSize: 13, fontWeight: 600, color: '#64748B', display: 'block', marginBottom: 6 }}>Formule de service</label>
                    <select style={inputStyle}>
                      <option>Premium — SLA 99%+ Support 24/7</option>
                      <option>Confort — Maintenance préventive</option>
                      <option>Essentiel — Maintenance corrective</option>
                      <option>Sur-mesure — Projet spécifique</option>
                    </select>
                  </div>
                  <div style={{ display: 'flex', gap: 12 }}>
                    <motion.button
                      onClick={back}
                      style={backButtonStyle}
                      whileHover={{ x: -2, backgroundColor: '#E2E8F0' }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ChevronLeft size={20} />
                    </motion.button>
                    <motion.button onClick={next} style={{ ...goldButtonStyle, flex: 1 }} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      Étape suivante <ChevronRight size={18} style={{ marginLeft: 8 }} />
                    </motion.button>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div key="step3" custom={direction} variants={variants} initial="enter" animate="center" exit="exit">
                  <h3 style={{ fontSize: 24, marginBottom: 24, fontWeight: 700, color: '#0F172A' }}>Précisions</h3>
                  <div style={{ marginBottom: 24 }}>
                    <label style={{ fontSize: 13, fontWeight: 600, color: '#64748B', display: 'block', marginBottom: 6 }}>Description de votre besoin</label>
                    <textarea rows={6} placeholder="Décrivez vos enjeux, nombre de sites, urgence…" style={inputStyle} />
                  </div>
                  <div style={{ display: 'flex', gap: 12 }}>
                    <motion.button
                      onClick={back}
                      style={backButtonStyle}
                      whileHover={{ x: -2, backgroundColor: '#E2E8F0' }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ChevronLeft size={20} />
                    </motion.button>
                    <motion.button
                      onClick={next}
                      style={{ ...goldButtonStyle, flex: 1 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Envoyer la demande <Send size={18} style={{ marginLeft: 8 }} />
                    </motion.button>
                  </div>
                </motion.div>
              )}

              {step === 4 && (
                <motion.div key="step4" custom={direction} variants={variants} initial="enter" animate="center" exit="exit" style={{ textAlign: 'center', padding: '20px 0' }}>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
                    style={{ color: '#C29941', marginBottom: 16 }}
                  >
                    <CheckCircle2 size={48} />
                  </motion.div>
                  <h3 style={{ fontSize: 28, fontWeight: 700, color: '#0F172A', marginBottom: 8 }}>Demande envoyée</h3>
                  <p style={{ color: '#64748B', maxWidth: 320, margin: '0 auto', lineHeight: 1.6 }}>
                    Merci pour votre confiance. Un expert Teranga TE vous contactera sous 24 h.
                  </p>
                  <motion.button
                    onClick={() => setStep(1)}
                    style={{
                      marginTop: 24,
                      color: '#C29941',
                      fontWeight: 700,
                      fontSize: 13,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      padding: '10px 20px',
                      borderRadius: 30,
                    }}
                    whileHover={{ backgroundColor: 'rgba(194,153,65,0.08)' }}
                  >
                    Nouvelle demande →
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Bloc carte */}
        <motion.div
          className="maps-block"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{
            marginTop: 48,
            background: '#FFFFFF',
            borderRadius: 32,
            boxShadow: '0 25px 60px -15px rgba(0,0,0,0.08)',
            overflow: 'hidden',
          }}
        >
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: '24px 32px', borderBottom: '1px solid #F1F5F9',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <div style={{
                background: '#C29941', borderRadius: 14, width: 44, height: 44,
                display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff',
              }}>
                <MapPin size={20} />
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: 18, color: '#0F172A', marginBottom: 2 }}>Notre localisation</div>
                <div style={{ fontSize: 14, color: '#64748B' }}>{TERANGA_LABEL} — {TERANGA_ADDRESS}</div>
              </div>
            </div>
            <motion.a
              href={mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                padding: '10px 20px', borderRadius: 40,
                background: '#F8FAFC', color: '#1E293B', fontWeight: 600, fontSize: 13,
                textDecoration: 'none', border: '1px solid #E2E8F0',
              }}
              whileHover={{ scale: 1.02, borderColor: '#C29941' }}
              whileTap={{ scale: 0.97 }}
            >
              Ouvrir dans Google Maps
              <ArrowUpRight size={14} />
            </motion.a>
          </div>
          <div style={{ height: 360 }}>
            <LeafletMap />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// ── Styles réutilisables ────────────────────────────────────────
const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '12px 16px',
  fontSize: 14,
  border: '1px solid #E2E8F0',
  borderRadius: 12,
  background: '#FFFFFF',
  outline: 'none',
  transition: 'border-color 0.2s, box-shadow 0.2s',
  boxSizing: 'border-box',
  fontFamily: 'inherit',
};

const goldButtonStyle: React.CSSProperties = {
  background: 'linear-gradient(135deg, #C29941 0%, #A67B2E 100%)',
  color: '#fff',
  border: 'none',
  borderRadius: 14,
  padding: '14px 24px',
  fontWeight: 700,
  fontSize: 15,
  cursor: 'pointer',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 6,
  boxShadow: '0 4px 14px rgba(194,153,65,0.2)',
  width: '100%',
  transition: 'all 0.2s ease',
};

const backButtonStyle: React.CSSProperties = {
  background: '#F1F5F9',
  border: 'none',
  borderRadius: 14,
  width: 48,
  height: 48,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  color: '#64748B',
  transition: 'all 0.2s',
};