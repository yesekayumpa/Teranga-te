import React from 'react';
import { Users, Building2, Globe, ShieldCheck, Clock, Zap } from 'lucide-react';
import { useI18n } from '../context/I18nContext';

const STAT_ICONS = [Users, Building2, Globe, ShieldCheck, Clock, Zap];

export const StatsSection: React.FC = () => {
  const { t } = useI18n();
  const s = t.stats;
  return (
    <section className="stats-bar">
      <div style={{ position:'absolute',inset:0,background:'radial-gradient(ellipse at 30% 50%, rgba(201,161,75,0.06) 0%, transparent 70%), radial-gradient(ellipse at 70% 20%, rgba(201,161,75,0.03) 0%, transparent 60%)',pointerEvents:'none' }} />
      <div className="container">
        <div className="section-head reveal" data-reveal style={{ marginBottom:56 }}>
          <span className="eyebrow" style={{ color:'var(--gold-400)' }}><span className="bar" />{s.eyebrow}</span>
          <h2 style={{ color:'#fff' }}>{s.title} <span className="text-gold text-ital">{s.titleItal}</span></h2>
        </div>
        <div className="stats-grid">
          {s.items.map((item, idx) => {
            const Ico = STAT_ICONS[idx];
            return (
              <div className="stat reveal" data-reveal style={{ transitionDelay:`${idx*80}ms` }} key={item.lbl}>
                <div className="ico"><Ico size={22} /></div>
                <div className="v">{item.v}</div>
                <div className="lbl">{item.lbl}</div>
                <div className="sub">{item.sub}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
