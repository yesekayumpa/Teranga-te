import React from 'react';
import { Users, Building2, Globe, ShieldCheck, Clock, Zap } from 'lucide-react';

const STATS_CONTENT = {
  fr: {
    eyebrow: 'TERANGA TE EN CHIFFRES',
    titlePrefix: 'Nos ',
    titleItal: 'chiffres clés.',
    items: [
      { v: '6',    lbl: 'Collaborateurs',   sub: 'Experts certifiés' },
      { v: '8',    lbl: 'Clients',          sub: 'Entreprises' },
      { v: '6+',   lbl: 'Pays au Sahel',    sub: 'Couverture régionale' },
      { v: '98%',  lbl: 'SLA Garanti',      sub: 'Disponibilité' },
      { v: '24/7', lbl: 'Support',          sub: 'Assistance continue' },
      { v: '4',    lbl: 'Expertises',       sub: 'Domaines complémentaires' },
    ],
  },
  en: {
    eyebrow: 'TERANGA TE IN NUMBERS',
    titlePrefix: 'Our ',
    titleItal: 'key figures.',
    items: [
      { v: '6',    lbl: 'Team members',     sub: 'Certified experts' },
      { v: '8',    lbl: 'Clients',          sub: 'Businesses' },
      { v: '6+',   lbl: 'Sahel countries',  sub: 'Regional coverage' },
      { v: '98%',  lbl: 'SLA Guaranteed',   sub: 'Availability' },
      { v: '24/7', lbl: 'Support',          sub: 'Continuous assistance' },
      { v: '4',    lbl: 'Expertise areas',  sub: 'Complementary domains' },
    ],
  },
};

const ICONS = [Users, Building2, Globe, ShieldCheck, Clock, Zap];

interface StatsSectionProps {
  lang?: 'fr' | 'en';
}

export const StatsSection: React.FC<StatsSectionProps> = ({ lang = 'fr' }) => {
  const content = STATS_CONTENT[lang] ?? STATS_CONTENT.fr;

  return (
    <section className="stats-bar">
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse at 30% 50%, rgba(201,161,75,0.06) 0%, transparent 70%), radial-gradient(ellipse at 70% 20%, rgba(201,161,75,0.03) 0%, transparent 60%)',
          pointerEvents: 'none',
        }}
      />
      <div className="container">
        <div className="section-head reveal" data-reveal style={{ marginBottom: 56 }}>
          <span className="eyebrow" style={{ color: 'var(--gold-400)' }}>
            <span className="bar" />
            {content.eyebrow}
          </span>
          <h2 style={{ color: '#fff' }}>
            {content.titlePrefix}
            <span className="text-gold text-ital">{content.titleItal}</span>
          </h2>
        </div>

        <div className="stats-grid">
          {content.items.map((item, idx) => {
            const Ico = ICONS[idx] ?? Users;
            return (
              <div
                className="stat reveal"
                data-reveal
                style={{ transitionDelay: `${idx * 80}ms` }}
                key={item.lbl}
              >
                <div className="ico">
                  <Ico size={22} />
                </div>
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