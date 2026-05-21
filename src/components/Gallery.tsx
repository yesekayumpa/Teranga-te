import React from 'react';

const CLIENTS = [
  { name: 'AFRI-RH',  sub: 'RH & Conseil',              accent: '#1E5BAA' },
  { name: 'AFRILAND', sub: 'Immobilier & Bâtiment',     accent: '#E5A82C' },
  { name: 'GODIFA',   sub: 'Technologies & Innovation', accent: '#3E3DA0' },
  { name: 'ICP',      sub: 'Conseil & Projets',         accent: '#E03A2F' },
  { name: 'NBW',      sub: 'Law Firm',                  accent: '#0E3B6E' },
  { name: 'AL AMINE', sub: 'GED & Archivage',           accent: '#C81E2B' },
  { name: 'KAI',      sub: 'Transport & Mobilité',      accent: '#7AB55C' },
  { name: 'KPMG',     sub: 'Audit & Conseil',           accent: '#00338D' },
];

export const Gallery: React.FC = () => (
  <section id="references" className="section section--cream">
    <div className="container">
      <div className="section-head reveal" data-reveal>
        <span className="eyebrow"><span className="bar" />ILS NOUS FONT CONFIANCE</span>
        <h2>
          Nos <span className="text-ital text-gold">clients.</span>
        </h2>
        <p>Des leaders du Sénégal et du Sahel qui nous confient la sécurisation de leurs infrastructures critiques.</p>
      </div>

      <div className="clients-grid">
        {CLIENTS.map((c, idx) => (
          <div className="client-card reveal" data-reveal style={{ transitionDelay: `${(idx % 4) * 60}ms` }} key={c.name}>
            <div className="cn" style={{ color: c.accent }}>{c.name}</div>
            <div className="cs">{c.sub}</div>
            <span className="accent-bar" style={{ background: c.accent }} />
          </div>
        ))}
      </div>
    </div>
  </section>
);
