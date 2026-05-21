import React from 'react';
import { Users, Building2, Globe, ShieldCheck, Clock, Zap } from 'lucide-react';

const STATS = [
  { Ico: Users,       v: '6',    lbl: 'Collaborateurs', sub: 'Experts certifiés' },
  { Ico: Building2,   v: '8',    lbl: 'Clients',        sub: 'Entreprises' },
  { Ico: Globe,       v: '6+',   lbl: 'Pays au Sahel',  sub: 'Couverture régionale' },
  { Ico: ShieldCheck, v: '98%',  lbl: 'SLA Garanti',    sub: 'Disponibilité' },
  { Ico: Clock,       v: '24/7', lbl: 'Support',        sub: 'Assistance continue' },
  { Ico: Zap,         v: '4',    lbl: 'Expertises',     sub: 'Domaines complémentaires' },
];

export const StatsSection: React.FC = () => (
  <section className="stats-bar">
    {/* Remplacement des cercles par un fond texturé moderne */}
    <div
      style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse at 30% 50%, rgba(201,161,75,0.06) 0%, transparent 70%), radial-gradient(ellipse at 70% 20%, rgba(201,161,75,0.03) 0%, transparent 60%)',
        pointerEvents: 'none',
      }}
    />
    <div className="container">
      <div className="section-head reveal" data-reveal style={{ marginBottom: 56 }}>
        <span className="eyebrow" style={{ color: 'var(--gold-400)' }}>
          <span className="bar" />TERANGA TE EN CHIFFRES
        </span>
        <h2 style={{ color: '#fff' }}>
          Nos <span className="text-gold text-ital">chiffres clés.</span>
        </h2>
      </div>

      <div className="stats-grid">
        {STATS.map((s, idx) => (
          <div
            className="stat reveal"
            data-reveal
            style={{ transitionDelay: `${idx * 80}ms` }}
            key={s.lbl}
          >
            <div className="ico"><s.Ico size={22} /></div>
            <div className="v">{s.v}</div>
            <div className="lbl">{s.lbl}</div>
            <div className="sub">{s.sub}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);