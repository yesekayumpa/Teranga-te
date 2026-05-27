import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Monitor, Zap, Sun, ShieldCheck, ArrowUpRight, LucideIcon } from 'lucide-react';
import { useI18n } from '../context/I18nContext';

const EXPERTISE_ICONS: LucideIcon[] = [Monitor, Zap, Sun, ShieldCheck];
const EXPERTISE_IMAGES = [
  'https://d2xsxph8kpxj0f.cloudfront.net/310519663476210552/X8H4fjGbsgzCUU4Ftp9pLB/expertise-ict-fBaDApo4qym68m9DBUzyBE.webp',
  'https://d2xsxph8kpxj0f.cloudfront.net/310519663476210552/X8H4fjGbsgzCUU4Ftp9pLB/expertise-energy-QxbZZfUAeoVkPzsMTwjhyn.webp',
  'https://d2xsxph8kpxj0f.cloudfront.net/310519663476210552/X8H4fjGbsgzCUU4Ftp9pLB/expertise-solar-VHKtkagtzLM9gKGVKD772C.webp',
  'https://d2xsxph8kpxj0f.cloudfront.net/310519663476210552/X8H4fjGbsgzCUU4Ftp9pLB/inspection-ascenseurs_8f6624e3.png',
];

export const ExpertiseSection: React.FC = () => {
  const { t } = useI18n();
  const ex = t.expertises;
  const [activeId, setActiveId] = useState<"ict" | "energie" | "renouvelables" | "lift">(ex.items[0].id);
  const cardRef = React.useRef<HTMLDivElement>(null);

  const idx = ex.items.findIndex((e) => e.id === activeId);
  const cur = ex.items[idx] ?? ex.items[0];
  const Ico = EXPERTISE_ICONS[idx] ?? Monitor;
  const img = EXPERTISE_IMAGES[idx] ?? EXPERTISE_IMAGES[0];

  React.useEffect(() => {
    if (cardRef.current) cardRef.current.classList.add('in');
  }, [activeId]);

  return (
    <section id="expertises" className="section section--cream">
      <div className="container">
        <div className="section-head reveal" data-reveal>
          <span className="eyebrow"><span className="bar" />{ex.eyebrow}</span>
          <h2>{ex.title}<span className="text-ital text-gold">{ex.titleItal}</span></h2>
          <p>{ex.intro}</p>
        </div>
        <div className="exp-tabs reveal" data-reveal>
          {ex.items.map((e, i) => {
            const TabIco = EXPERTISE_ICONS[i];
            return (
              <button key={e.id} className={`exp-tab ${activeId === e.id ? 'active' : ''}`} onClick={() => setActiveId(e.id)}>
                <span className="dotmark" /><TabIco size={15} />{e.label}
              </button>
            );
          })}
        </div>
        <div className="exp-card reveal" data-reveal key={cur.id} ref={cardRef}>
          <div className="img-side">
            <img src={img} alt={cur.title} referrerPolicy="no-referrer" />
            <span className="badge">{cur.label}</span>
            <div className="img-content">
              <h3>{cur.title}</h3>
              <p className="quote">"{cur.quote}"</p>
            </div>
          </div>
          <div className="text-side">
            <p className="lead">{cur.desc}</p>
            <ul>{cur.points.map((p) => <li key={p}>{p}</li>)}</ul>
            <div>
              <button className="btn btn--dark">
                {ex.ctaAudit}
                <span className="arrow-circle"><ArrowUpRight size={14} /></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
