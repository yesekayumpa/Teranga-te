import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Linkedin, Twitter, Facebook, Instagram, Phone } from 'lucide-react';

const NAV_ITEMS = [
  { name: 'Accueil',    to: '/' },
  { name: 'À propos',   to: '/about' },
  { name: 'Expertises', to: '/expertises' },
  { name: 'Offres',     to: '/offres' },
  { name: 'Références', to: '/references' },
  { name: 'Sahel',      to: '/sahel' },
  { name: 'Contact',    to: '/contact' },
  { name: 'Carrières',  to: '/careers' },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          
          {/* Colonne 1 – Marque + contact + QR code */}
          <div className="reveal" data-reveal>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 20 }}>
              <motion.div
                whileHover={{ scale: 1.05, rotate: [0, -2, 2, -2, 0] }}
                transition={{ duration: 0.4 }}
                style={{
                  backgroundColor: '#FAF7F2',
                  borderRadius: '50%',
                  padding: 6,
                  display: 'inline-flex',
                  alignItems: 'center',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                }}
              >
                <img src="/assets/teranga-logo.png" alt="Teranga TE" style={{ height: 40, width: 'auto' }} />
              </motion.div>
              <span style={{ fontSize: 20, fontFamily: 'var(--font-display)', fontWeight: 800, color: '#FAF7F2', letterSpacing: '-0.5px' }}>
                TERANGA TE
              </span>
            </div>
            <p className="footer-blurb">
              Partenaire technologique de référence dans le Sahel. Nous sécurisons vos infrastructures critiques via des solutions ICT, Énergie et Renouvelables.
            </p>
            <Link
              to="/contact"
              className="btn btn--gold"
              style={{ marginTop: 16, backgroundColor: '#C29941', color: '#2C3D58', border: 'none', padding: '10px 20px', fontSize: 13 }}
            >
              <Phone size={16} />
              Contactez-nous
            </Link>
            <div className="socials">
              {[Linkedin, Twitter, Facebook, Instagram].map((Icon, i) => (
                <motion.a key={i} href="#" whileHover={{ scale: 1.15, rotate: 5 }} whileTap={{ scale: 0.9 }}>
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>

            {/* QR Code */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              style={{
                marginTop: 24,
                padding: 16,
                background: 'rgba(255,255,255,0.06)',
                borderRadius: 16,
                border: '1px solid rgba(201,161,75,0.3)',
                display: 'inline-flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 12,
                backdropFilter: 'blur(8px)',
              }}
            >
              <div style={{ position: 'relative' }}>
                <img
                  src="https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=https://teranga-te.vercel.app/&format=png"
                  alt="QR Code Teranga TE"
                  style={{
                    width: 96,
                    height: 96,
                    borderRadius: 12,
                    border: '2px solid rgba(201,161,75,0.6)',
                    padding: 6,
                    background: '#fff',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  }}
                  loading="lazy"
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: -4,
                    borderRadius: 16,
                    background: 'radial-gradient(circle, rgba(201,161,75,0.25) 0%, transparent 70%)',
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                    pointerEvents: 'none',
                  }}
                  className="qr-halo"
                />
              </div>
              <div style={{ textAlign: 'center' }}>
                <p style={{ fontSize: 11, fontWeight: 700, color: '#FAF7F2', letterSpacing: '0.05em', margin: 0 }}>
                  Scanner pour visiter
                </p>
                <p style={{ fontSize: 9, color: 'rgba(250,247,242,0.6)', margin: '4px 0 0', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  teranga-te.vercel.app
                </p>
              </div>
            </motion.div>
          </div>

          {/* Colonne 2 – Navigation */}
          <div className="reveal" data-reveal>
            <h5>Navigation</h5>
            <ul>
              {NAV_ITEMS.map((item) => (
                <li key={item.name}>
                  <Link to={item.to}>
                    <ArrowRight size={12} style={{ opacity: 0, transform: 'translateX(-4px)', transition: 'all 0.2s' }} />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 3 – Expertises */}
          <div className="reveal" data-reveal>
            <h5>Expertises</h5>
            <ul>
              {['ICT & Numérique', 'Énergie & Puissance', 'Énergies Renouvelables', 'Audit & Contrôle Technique', 'Support managé 24/7'].map((item) => (
                <li key={item}>
                  <Link to="/expertises">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 4 – Veille Technologique */}
          <div className="reveal" data-reveal>
            <h5>Veille Tech</h5>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, marginBottom: 16 }}>
              Recevez nos analyses sur l’innovation et l’énergie au Sahel.
            </p>
            <div className="subscribe">
              <input type="email" placeholder="Email professionnel" />
              <button aria-label="S'inscrire" style={{ backgroundColor: '#C29941', color: '#2C3D58' }}>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

        </div>

        {/* Séparateur lumineux doré */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
          style={{ height: 1, background: 'linear-gradient(90deg, transparent, #C29941, transparent)', margin: '32px 0' }}
        />

        <div className="footer-bottom">
          © {currentYear} TERANGA TECHNOLOGY &amp; ENERGY — Tous droits réservés.
        </div>

        {/* Éclair décoratif doré */}
        <motion.div
          style={{ position: 'absolute', bottom: 0, right: 0, width: 128, height: 128, pointerEvents: 'none' }}
          animate={{ opacity: [0.05, 0.15, 0.05] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="#C29941" strokeWidth="2" style={{ width: '100%', height: '100%' }}>
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>
      </div>
    </footer>
  );
};