import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, TrendingUp, Target } from 'lucide-react';
import { useI18n } from '../context/I18nContext';


/* ---------- données fixes (drapeaux, couleurs) ---------- */
const COUNTRIES_ACTIVE = [
  { code: 'SN', nameKey: 'Senegal',      statusKey: 'HQ',       flagUrl: 'https://flagcdn.com/w40/sn.png', colors: ['#009E49', '#FDEF42', '#E31B23'] },
  { code: 'GM', nameKey: 'Gambia',       statusKey: 'Active',   flagUrl: 'https://flagcdn.com/w40/gm.png', colors: ['#3A7728', '#0C1C8C', '#3A7728'] },
  { code: 'GN', nameKey: 'Guinea',       statusKey: 'Active',   flagUrl: 'https://flagcdn.com/w40/gn.png', colors: ['#CE1126', '#FCD116', '#009460'] },
];


const COUNTRIES_PENDING = [
  { code: 'ML', nameKey: 'Mali',           statusKey: 'In progress', flagUrl: 'https://flagcdn.com/w40/ml.png', colors: ['#14B53A', '#FCD116', '#CE1126'] },
  { code: 'BF', nameKey: 'Burkina Faso',   statusKey: 'In progress', flagUrl: 'https://flagcdn.com/w40/bf.png', colors: ['#009E49', '#EF2B2D'] },
  { code: 'NE', nameKey: 'Niger',          statusKey: 'In progress', flagUrl: 'https://flagcdn.com/w40/ne.png', colors: ['#0DB02B', '#FFFFFF', '#E05206'] },
  { code: 'MR', nameKey: 'Mauritania',     statusKey: 'In progress', flagUrl: 'https://flagcdn.com/w40/mr.png', colors: ['#006233', '#FFC400'] },
  { code: 'GW', nameKey: 'Guinea-Bissau',  statusKey: 'Planned',     flagUrl: 'https://flagcdn.com/w40/gw.png', colors: ['#CE1126', '#FCD116', '#009E49'] },
  { code: 'CI', nameKey: "Cote d'Ivoire",  statusKey: 'Planned',     flagUrl: 'https://flagcdn.com/w40/ci.png', colors: ['#F77F00', '#FFFFFF', '#009E49'] },
];


const toSubtleGradient = (colors: string[]) => {
  const stops = colors.map((c, i) => {
    const r = parseInt(c.slice(1, 3), 16);
    const g = parseInt(c.slice(3, 5), 16);
    const b = parseInt(c.slice(5, 7), 16);
    return `rgba(${r},${g},${b},0.18) ${(i / (colors.length - 1)) * 100}%`;
  });
  return `linear-gradient(135deg, ${stops.join(', ')})`;
};


const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};


const item = {
  hidden: { opacity: 0, x: -30, scale: 0.9 },
  visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] as const } },
};


interface MarketsProps {}


export const Markets: React.FC<MarketsProps> = () => {
  const { lang, t } = useI18n();
  // t is a translations object, not a function
  const markets = t.markets;


  return (
    <section id="sahel" className="section section--dark">
      <div className="container">
        <motion.div
          className="section-head"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px 0px' }}
          transition={{ duration: 0.8 }}
        >
          <span className="eyebrow" style={{ color: 'var(--gold-400)' }}>
            <span className="bar" /> {markets.eyebrow}
          </span>
          <h2 style={{ color: '#fff' }}>
            {markets.title}<span className="text-ital text-gold">{markets.titleItal}</span>
          </h2>
          <p>{markets.intro}</p>
        </motion.div>


        <div className="sahel-grid">
          <motion.div
            className="sahel-map reveal"
            initial={{ opacity: 0, scale: 0.85, rotateY: -15 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
          >
            <img src="/assets/sahel-map.png" alt="West Africa & the Sahel" />
            <div className="sahel-map-fade" />
          </motion.div>


          <div>
            {/* Présence active */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={container}>
              <motion.div className="sahel-subhead" variants={item}>
                <span className="ic"><MapPin size={16} /></span> {markets.activeLabel}
              </motion.div>
              <div className="country-list">
                {markets.active.map((c) => (
                  <motion.div
                    className="country-row"
                    key={c.code}
                    variants={item}
                    whileHover={{ scale: 1.02 }}
                      style={{
                      background: toSubtleGradient(((c as any).colors as string[]) || ['#fff']),
                      color: '#fff',
                      textShadow: '0 1px 2px rgba(0,0,0,0.4)',
                    }}
                  >
                    <div className="left">
                      <span className="code">
                        <img src={(c as any).flagUrl} alt={`Flag ${(c as any).name}`} style={{ width: 24, height: 'auto', marginRight: 8, verticalAlign: 'middle' }} />
                        {c.code}
                      </span>
                      <span className="name">{c.name}</span>
                    </div>
                    <span className="status">
                      <span className="d" style={{ background: '#fff' }} />
                      {c.status}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>


            {/* Déploiements à venir */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={container} style={{ marginTop: 36 }}>
              <motion.div className="sahel-subhead" variants={item}>
                <span className="ic"><TrendingUp size={16} /></span> {markets.pendingLabel}
              </motion.div>
              <div className="country-list">
                {markets.pending.map((c) => (
                  <motion.div
                    className="country-row pending"
                    key={c.code}
                    variants={item}
                    whileHover={{ scale: 1.02 }}
                    style={{
                      background: toSubtleGradient(((c as any).colors as string[]) || ['#fff']),
                      color: '#fff',
                      textShadow: '0 1px 2px rgba(0,0,0,0.4)',
                    }}
                  >
                    <div className="left">
                      <span className="code">
                        <img src={(c as any).flagUrl} alt={`Flag ${(c as any).name}`} style={{ width: 24, height: 'auto', marginRight: 8, verticalAlign: 'middle' }} />
                        {c.code}
                      </span>
                      <span className="name">{c.name}</span>
                    </div>
                    <span className="status">
                      <span className="d" style={{ background: '#fff' }} />
                      {c.status}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>


            {/* Objectif */}
            <motion.div
              className="sahel-objectif"
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              style={{ marginTop: 36, padding: '24px', borderRadius: 18 }}
            >
              <motion.div className="sahel-subhead" style={{ margin: 0, color: 'var(--gold-400)' }} whileHover={{ x: 4 }}>
                <span className="ic"><Target size={16} /></span> Objective
              </motion.div>
              <p style={{ marginTop: 10, color: 'rgba(255,255,255,0.78)', fontSize: 13.5, lineHeight: 1.65 }}>
                {markets.intro}
              </p>
              <div style={{ display: 'flex', gap: 6, marginTop: 16, flexWrap: 'wrap' }}>
                {[...markets.active, ...markets.pending].map(c => (
                  <motion.img
                    key={c.code}
                    src={c.flagUrl}
                    alt={(c as any).name}
                    style={{ width: 28, height: 'auto', borderRadius: 4, boxShadow: '0 2px 6px rgba(0,0,0,0.3)', cursor: 'pointer', filter: 'saturate(0.7)' }}
                    whileHover={{ scale: 1.3, filter: 'saturate(1.2) drop-shadow(0 0 6px rgba(201,161,75,0.8))', transition: { type: 'spring', stiffness: 300 } }}
                    title={(c as any).name}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};