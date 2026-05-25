import React from 'react';

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
    sub: 'Service Juridique',
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

export const Gallery: React.FC = () => (
  <section id="references" className="section section--cream">
    <div className="container">
      {/* HEADER */}
      <div className="section-head reveal" data-reveal>
        <span className="eyebrow">
          <span className="bar" />
          ILS NOUS FONT CONFIANCE
        </span>

        <h2>
          Nos{' '}
          <span className="text-ital text-gold">
            clients.
          </span>
        </h2>

        <p>
          Des leaders du Sénégal et du Sahel qui nous confient
          la sécurisation de leurs infrastructures critiques.
        </p>
      </div>

      {/* GRID */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns:
            'repeat(auto-fit, minmax(260px, 1fr))',
          gap: 26,
          marginTop: 52,
        }}
      >
        {CLIENTS.map((c, idx) => (
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

              minHeight: 165,

              padding: '28px 24px',

              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',

              textAlign: 'center',

              transition:
                'transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease',

              boxShadow:
                '0 2px 10px rgba(15,23,42,0.03)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform =
                'translateY(-6px)';

              e.currentTarget.style.boxShadow =
                `0 18px 40px rgba(15,23,42,0.10)`;

              e.currentTarget.style.borderColor =
                `${c.accent}40`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform =
                'translateY(0px)';

              e.currentTarget.style.boxShadow =
                '0 2px 10px rgba(15,23,42,0.03)';

              e.currentTarget.style.borderColor =
                '#EFE7DC';
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
                  maxWidth: 150,
                  maxHeight: 58,
                  objectFit: 'contain',

                  marginBottom: 20,

                  position: 'relative',
                  zIndex: 2,

                  transition:
                    'transform 0.35s ease, filter 0.35s ease',

                  filter:
                    'grayscale(0.05)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform =
                    'scale(1.06)';

                  e.currentTarget.style.filter =
                    `drop-shadow(0 6px 16px ${c.accent}40)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform =
                    'scale(1)';

                  e.currentTarget.style.filter =
                    'grayscale(0.05)';
                }}
              />
            ) : (
              <div
                style={{
                  fontSize: 28,
                  fontWeight: 800,
                  color: c.accent,
                  marginBottom: 16,
                }}
              >
                {c.name}
              </div>
            )}

            {/* Sous-titre */}
            <div
              style={{
                fontSize: 18,
                fontWeight: 500,
                color: '#7A8AA0',

                lineHeight: 1.4,

                position: 'relative',
                zIndex: 2,
              }}
            >
              {c.sub}
            </div>

            {/* Accent bar */}
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
        ))}
      </div>
    </div>
  </section>
);