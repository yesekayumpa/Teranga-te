import React from 'react';
import { useI18n } from '../context/I18nContext';

interface Client {
  name: string;
  sub: string;
  accent: string;
  logo?: string;
}

const CLIENTS: Client[] = [
  {
    name: 'AFRI-RH',
    sub: 'RH & Conseil',
    accent: '#1E5BAA',
    logo: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663476210552/X8H4fjGbsgzCUU4Ftp9pLB/image201_00e0a760.png',
  },
  {
    name: 'AFRILAND',
    sub: 'Immobilier & Bâtiment',
    accent: '#E5A82C',
    logo: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663476210552/X8H4fjGbsgzCUU4Ftp9pLB/image206_c20c5a56.png',
  },
  {
    name: 'GODIFA',
    sub: 'Technologies & Innovation',
    accent: '#3E3DA0',
    logo: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663476210552/X8H4fjGbsgzCUU4Ftp9pLB/image202_c5943d34.png',
  },
  {
    name: 'ICP',
    sub: 'Conseil & Projets',
    accent: '#E03A2F',
    logo: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663476210552/X8H4fjGbsgzCUU4Ftp9pLB/image203_58b2eb9c.jpeg',
  },
  {
    name: 'NBW',
    sub: 'Law Firm',
    accent: '#0E3B6E',
    logo: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663476210552/X8H4fjGbsgzCUU4Ftp9pLB/image204_a16db25c.png',
  },
  {
    name: 'AL AMINE',
    sub: 'GED & Archivage',
    accent: '#C81E2B',
    logo: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663476210552/X8H4fjGbsgzCUU4Ftp9pLB/image205_5802c025.png',
  },
  {
    name: 'KAI',
    sub: 'Transport & Mobilité',
    accent: '#7AB55C',
    logo: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663476210552/X8H4fjGbsgzCUU4Ftp9pLB/kai-nu-dem-logo_192e88c7.png',
  },
  {
    name: 'KPMG',
    sub: 'Audit & Conseil',
    accent: '#00338D',
    logo: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663476210552/X8H4fjGbsgzCUU4Ftp9pLB/s4TCDTV7TKKT_725f6646.png',
  },
];

export const Gallery: React.FC = () => {
  const { t } = useI18n();
  const gallery = t.gallery;

  return (
    <section id="references" className="section section--cream">
      <div className="container">
        <div className="section-head reveal" data-reveal>
          <span className="eyebrow">
            <span className="bar" />
            {gallery.eyebrow}
          </span>
          <h2>
            {gallery.titlePrefix}
            <span className="text-ital text-gold">{gallery.titleItal}</span>
          </h2>
          <p>{gallery.intro}</p>
        </div>

        <div className="clients-grid">
          {CLIENTS.map((c, idx) => (
            <div
              className="client-card reveal"
              data-reveal
              style={{ transitionDelay: `${(idx % 4) * 60}ms` }}
              key={c.name}
            >
              {c.logo ? (
                <img
                  src={c.logo}
                  alt={c.name}
                  className="client-logo-img"
                  style={{
                    maxWidth: 100,
                    maxHeight: 50,
                    objectFit: 'contain',
                    marginBottom: 8,
                  }}
                />
              ) : (
                <div className="cn" style={{ color: c.accent }}>
                  {c.name}
                </div>
              )}
              <div className="cs">{c.sub}</div>
              {c.logo && (
                <div className="cn" style={{ color: c.accent, fontSize: 12, marginTop: 4 }}>
                  {c.name}
                </div>
              )}
              <span className="accent-bar" style={{ background: c.accent }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};