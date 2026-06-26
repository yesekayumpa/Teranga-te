import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import {
  Monitor, Zap, Sun, ShieldCheck,
  Printer, Laptop, ShieldAlert, Cable, Cloud,
  BatteryCharging, Eye, Thermometer, Gauge,
  HardHat, LayoutGrid, BarChart2, BatteryFull,
  FileCheck2, CheckCircle2,
  LucideIcon,
} from 'lucide-react';
import { useI18n } from '../context/I18nContext';

// Mapping des icônes pour les sous‑services (identique)
const SUB_ICON_MAP: Record<string, LucideIcon> = {
  'MPS (Managed Print Services)': Printer,
  'Workstations & Serveurs': Laptop,
  'Workstations & Servers': Laptop,
  'Réseaux & Sécurité': ShieldAlert,
  'Networks & Security': ShieldAlert,
  'Câblage réseau': Cable,
  'Network Cabling': Cable,
  'Cloud, Virtualisation & Gestion IT': Cloud,
  'Cloud, Virtualization & IT Management': Cloud,
  'CFO (Courant Fort)': BatteryCharging,
  'High Current (CFO)': BatteryCharging,
  'CFA (Courant Faible)': Eye,
  'Low Current (CFA)': Eye,
  'HVAC (Climatisation)': Thermometer,
  'HVAC': Thermometer,
  'Audit énergétique': Gauge,
  'Energy Audit': Gauge,
  'Solaire Photovoltaïque': Sun,
  'Solar Photovoltaic': Sun,
  'Solar Home System': LayoutGrid,
  'Supervision & Reporting énergétique': BarChart2,
  'Energy Monitoring & Reporting': BarChart2,
  'Stockage & Micro‑réseaux': BatteryFull,
  'Storage & Micro‑grids': BatteryFull,
  'EPC & Maintenance': HardHat,
  'Services certifiés': FileCheck2,
  'Certified Services': FileCheck2,
  'Nos engagements': CheckCircle2,
  'Our Commitments': CheckCircle2,
};

// Sous‑carte améliorée avec animations Framer Motion
const SubCard: React.FC<{
  title: string;
  points: ReadonlyArray<string>;
  brands?: string;
  accentColor?: string;
  index: number;
}> = ({ title, points, brands, accentColor, index }) => {
  const Ico = SUB_ICON_MAP[title] || FileCheck2;
  const accent = accentColor ?? 'var(--navy-900)';
  const bgAccent = accentColor ? `${accentColor}18` : 'rgba(11,17,30,0.07)';
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-20px 0px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.25, 1, 0.5, 1] }}
      whileHover={{
        y: -8,
        transition: { duration: 0.2 },
        boxShadow: `0 24px 48px -12px ${accent}40, 0 0 0 1px ${accent}80`,
        borderColor: 'transparent',
      }}
      style={{
        background: '#fff',
        border: '1px solid var(--line)',
        borderRadius: 24,
        padding: '28px 24px 24px',
        display: 'flex',
        flexDirection: 'column',
        gap: 0,
        transition: 'box-shadow 0.3s ease, border-color 0.3s ease',
        cursor: 'default',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 20 }}>
        <motion.div
          whileHover={{ rotate: -6, scale: 1.08 }}
          transition={{ type: 'spring', stiffness: 300 }}
          style={{
            width: 48, height: 48, borderRadius: 16,
            background: bgAccent,
            display: 'grid', placeItems: 'center',
            flexShrink: 0,
          }}
        >
          <Ico size={22} color={accent} />
        </motion.div>
        <h4 style={{
          fontSize: 16, fontWeight: 800, color: 'var(--navy-900)',
          margin: 0, lineHeight: 1.3,
        }}>
          {title}
        </h4>
      </div>

      <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 18px', display: 'flex', flexDirection: 'column', gap: 10 }}>
        {points.map((point) => (
          <li key={point} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 14, color: 'var(--slate)', lineHeight: 1.45 }}>
            <span style={{ color: 'var(--gold-500)', fontWeight: 700, fontSize: 15, lineHeight: 1, marginTop: 2, flexShrink: 0 }}>✓</span>
            {point}
          </li>
        ))}
      </ul>

      {brands && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          style={{
            borderTop: '1px solid var(--line)',
            paddingTop: 14,
            marginTop: 'auto',
            fontSize: 11,
            color: 'var(--slate)',
            lineHeight: 1.4,
          }}
        >
          <span style={{ fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--gold-600)', fontSize: 10 }}>
            Marques :{' '}
          </span>
          {brands}
        </motion.div>
      )}
    </motion.div>
  );
};

export const ExpertiseSection: React.FC = () => {
  const { t } = useI18n();
  const ex = t.expertises;
  const [activeId, setActiveId] = useState<string>(ex.items[0].id);
  const cardRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const isSectionInView = useInView(sectionRef, { once: true, margin: '-80px 0px' });

  const cur = ex.items.find((e) => e.id === activeId) ?? ex.items[0];

  const tabIconMap: Record<string, LucideIcon> = {
    ict: Monitor,
    energie: Zap,
    renouvelables: Sun,
    lift: ShieldCheck,
  };

  const imageMap: Record<string, string> = {
    ict: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663476210552/X8H4fjGbsgzCUU4Ftp9pLB/expertise-ict-fBaDApo4qym68m9DBUzyBE.webp',
    energie: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663476210552/X8H4fjGbsgzCUU4Ftp9pLB/expertise-energy-QxbZZfUAeoVkPzsMTwjhyn.webp',
    renouvelables: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663476210552/X8H4fjGbsgzCUU4Ftp9pLB/expertise-solar-VHKtkagtzLM9gKGVKD772C.webp',
    lift: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663476210552/X8H4fjGbsgzCUU4Ftp9pLB/inspection-ascenseurs_8f6624e3.png',
  };

  const badgeColorMap: Record<string, string> = {
    ict: 'var(--navy-900)',
    energie: '#B8860B',
    renouvelables: '#4A7C40',
    lift: 'var(--navy-900)',
  };

  // Animation de la carte courante
  useEffect(() => {
    if (cardRef.current) {
      cardRef.current.classList.add('in');
      // Reset et rejouer l'animation pour les sous-cartes via leur propre hook useInView
    }
  }, [activeId]);

  return (
    <section id="expertises" className="section section--cream" ref={sectionRef}>
      <div className="container">
        {/* En-tête avec animation */}
        <motion.div
          className="section-head"
          initial={{ opacity: 0, y: 30 }}
          animate={isSectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <span className="eyebrow"><span className="bar" />{ex.eyebrow}</span>
          <h2>{ex.title}<span className="text-ital text-gold">{ex.titleItal}</span></h2>
          <p>{ex.intro}</p>
        </motion.div>

        {/* Tabs avec animation */}
        <motion.div
          className="exp-tabs"
          initial={{ opacity: 0, y: 20 }}
          animate={isSectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {ex.items.map((e) => {
            const Icon = tabIconMap[e.id] || Monitor;
            return (
              <button
                key={e.id}
                className={`exp-tab ${activeId === e.id ? 'active' : ''}`}
                onClick={() => setActiveId(e.id)}
              >
                <span className="dotmark" />
                <Icon size={15} />
                {e.label}
              </button>
            );
          })}
        </motion.div>

        {/* Carte principale avec image pleine largeur et contenu */}
        <AnimatePresence mode="wait">
          <motion.div
            key={cur.id}
            className="exp-card"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
            ref={cardRef}
          >
            {/* Bloc image amélioré : zoom au survol, dégradé plus marqué */}
            <div className="exp-card__image" style={{ position: 'relative', overflow: 'hidden' }}>
              <motion.img
                src={imageMap[cur.id]}
                alt={cur.title}
                referrerPolicy="no-referrer"
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
              <div className="badge" style={{ background: badgeColorMap[cur.id], color: '#fff' }}>
                {cur.label}
              </div>
              <div className="img-content">
                <motion.h3
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  {cur.title}
                </motion.h3>
                <motion.p
                  className="quote"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  {cur.quote}
                </motion.p>
              </div>
              {/* Dégradé plus riche pour la lisibilité */}
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%)',
                pointerEvents: 'none',
              }} />
            </div>

            {/* Contenu texte */}
            <div className="exp-card__content" style={{ padding: '40px 36px 44px' }}>
              <motion.p
                className="lead"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                style={{ marginBottom: 32, fontSize: 17, lineHeight: 1.65, color: 'var(--ink-2)' }}
              >
                {cur.desc}
              </motion.p>

              {/* Grille des sous-cartes avec animation stagger */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.2 } }
                }}
                style={{
                  display: 'grid',
                  gridTemplateColumns: cur.subs.length >= 2 ? 'repeat(2, 1fr)' : '1fr',
                  gap: 24,
                }}
              >
                {cur.subs.map((sub, idx) => (
                  <SubCard
                    key={sub.title}
                    title={sub.title}
                    points={sub.points}
                    brands={'brands' in sub ? sub.brands : undefined}
                    accentColor={cur.id === 'renouvelables' ? '#4A7C40' : undefined}
                    index={idx}
                  />
                ))}
              </motion.div>

              {/* CTA amélioré */}
              <motion.div
                style={{ marginTop: 40, textAlign: 'center' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <button className="btn btn--dark" style={{ paddingLeft: 32, paddingRight: 32 }}>
                  {ex.ctaAudit}
                  <span className="arrow-circle">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="7" y1="17" x2="17" y2="7"/>
                      <polyline points="7 7 17 7 17 17"/>
                    </svg>
                  </span>
                </button>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};