import React from 'react';
import { useI18n } from '../context/I18nContext';

interface Client {
  name: string;
  accent: string;
  logo?: string;
}

const CLIENTS: Client[] = [
  { name: 'AFRI-RH',  accent: '#1E5BAA', logo: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663476210552/X8H4fjGbsgzCUU4Ftp9pLB/image201_00e0a760.png' },
  { name: 'AFRILAND', accent: '#E5A82C', logo: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663476210552/X8H4fjGbsgzCUU4Ftp9pLB/image206_c20c5a56.png' },
  { name: 'GODIFA',   accent: '#3E3DA0', logo: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663476210552/X8H4fjGbsgzCUU4Ftp9pLB/image202_c5943d34.png' },
  { name: 'ICP',      accent: '#E03A2F', logo: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663476210552/X8H4fjGbsgzCUU4Ftp9pLB/image203_58b2eb9c.jpeg' },
  { name: 'NBW',      accent: '#0E3B6E', logo: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663476210552/X8H4fjGbsgzCUU4Ftp9pLB/image204_a16db25c.png' },
  { name: 'AL AMINE', accent: '#C81E2B', logo: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663476210552/X8H4fjGbsgzCUU4Ftp9pLB/image205_5802c025.png' },
  { name: 'KAI',      accent: '#7AB55C', logo: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663476210552/X8H4fjGbsgzCUU4Ftp9pLB/kai-nu-dem-logo_192e88c7.png' },
  { name: 'KPMG',     accent: '#00338D', logo: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663476210552/X8H4fjGbsgzCUU4Ftp9pLB/s4TCDTV7TKKT_725f6646.png' },
  { name: 'NOVAGO',   accent: '#2E4A7A', logo: 'https://www.hitech.fr/wp-content/uploads/2024/08/marche-location-vehicule-afrique.webp' },
];

export const Gallery: React.FC = () => {
  const { t } = useI18n();
  const gallery = t.gallery;

  return (
    <section id="references" className="section section--cream">
      <div className="container">
        {/* HEADER */}
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

        {/* GRID */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: 26,
            marginTop: 52,
          }}
        >
          {CLIENTS.map((c, idx) => {
            const clientSub = gallery.clients[c.name as keyof typeof gallery.clients]?.sub || '';
            return (
              <div
                key={c.name}
                className="reveal"
                data-reveal
                style={{
                  transitionDelay: `${(idx % 4) * 70}ms`,
                  position: 'relative',
                  overflow: 'hidden',
                  background: '#FFFFFF',
                  border: '1px solid #EFE7DC',
                  borderRadius: 28,
                  minHeight: 140,
                  padding: '22px 20px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  transition: 'transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease',
                  boxShadow: '0 2px 10px rgba(15,23,42,0.03)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = '0 18px 40px rgba(15,23,42,0.10)';
                  e.currentTarget.style.borderColor = `${c.accent}40`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0px)';
                  e.currentTarget.style.boxShadow = '0 2px 10px rgba(15,23,42,0.03)';
                  e.currentTarget.style.borderColor = '#EFE7DC';
                }}
              >
                {/* Glow subtil */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: `radial-gradient(circle at top, ${c.accent}08 0%, transparent 60%)`,
                    pointerEvents: 'none',
                  }}
                />

                {/* Logo */}
                {c.logo ? (
                  <img
                    src={c.logo}
                    alt={c.name}
                    style={{
                      width: 'auto',
                      maxWidth: 110,
                      maxHeight: 42,
                      objectFit: 'contain',
                      marginBottom: 14,
                      position: 'relative',
                      zIndex: 2,
                      transition: 'transform 0.35s ease, filter 0.35s ease',
                      filter: 'grayscale(0.05)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.04)';
                      e.currentTarget.style.filter = `drop-shadow(0 4px 12px ${c.accent}40)`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.filter = 'grayscale(0.05)';
                    }}
                  />
                ) : (
                  <div
                    style={{
                      fontSize: 17,
                      fontWeight: 800,
                      color: c.accent,
                      marginBottom: 12,
                    }}
                  >
                    {c.name}
                  </div>
                )}

                {/* Sous-titre traduit */}
                <div
                  style={{
                    fontSize: 15,
                    fontWeight: 500,
                    color: '#7A8AA0',
                    lineHeight: 1.35,
                    position: 'relative',
                    zIndex: 2,
                  }}
                >
                  {clientSub}
                </div>

                {/* Barre accent */}
                <span
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: 4,
                    background: c.accent,
                    opacity: 0.95,
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};