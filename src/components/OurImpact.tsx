import React from 'react';
import { Sparkles, Users, Leaf, Globe, Target, Award, Clock } from 'lucide-react';
import { useI18n } from '../context/I18nContext';

const DNA_ICONS = [Sparkles, Users, Leaf, Globe];
const PILLAR_ICONS = [Target, Award, Users, Clock];

export const OurImpact: React.FC = () => {
  const { t } = useI18n();
  const imp = t.impact;
  return (
    <section className="section section--paper">
      <div className="container">
        <div className="section-head reveal" data-reveal>
          <span className="eyebrow"><span className="bar" />{imp.eyebrow1}</span>
          <p>{imp.intro1}</p>
        </div>
        <div className="pillars-grid">
          {imp.dna.map((v, idx) => {
            const Ico = DNA_ICONS[idx];
            return (
              <div className="pillar reveal" data-reveal style={{ transitionDelay:`${idx*70}ms` }} key={v.title}>
                <div className="pico"><Ico size={22} /></div>
                <h4>{v.title}</h4>
                <p>{v.desc}</p>
              </div>
            );
          })}
        </div>
        <div className="section-head reveal" data-reveal style={{ marginTop:96,marginBottom:56 }}>
          <span className="eyebrow"><span className="bar" />{imp.eyebrow2}</span>
          <h2>{imp.title2}</h2>
        </div>
        <div className="pillars-grid">
          {imp.pillars.map((p, idx) => {
            const Ico = PILLAR_ICONS[idx];
            return (
              <div className="pillar reveal" data-reveal style={{ transitionDelay:`${idx*70}ms` }} key={p.title}>
                <div className="pico" style={{ background:'var(--navy-100)',color:'var(--navy-700)' }}><Ico size={22} /></div>
                <h4>{p.title}</h4>
                <p>{p.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
