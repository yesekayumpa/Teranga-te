import React, { useState, useEffect } from 'react';

// ── Hook responsive partageable ──────────────────────────────────
function useBreakpoint(): 'mobile' | 'tablet' | 'desktop' {
  const get = (): 'mobile' | 'tablet' | 'desktop' => {
    if (typeof window === 'undefined') return 'desktop';
    if (window.innerWidth < 640) return 'mobile';
    if (window.innerWidth < 1024) return 'tablet';
    return 'desktop';
  };
  const [bp, setBp] = useState<'mobile' | 'tablet' | 'desktop'>(get);
  useEffect(() => {
    const handler = () => setBp(get());
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);
  return bp;
}

export const About: React.FC = () => {
  const bp = useBreakpoint();
  const isMobile  = bp === 'mobile';
  const isDesktop = bp === 'desktop';

  return (
    <section id="apropos" className="section section--cream">
      <div className="container">

        {/* ── Header centré ─────────────────────────── */}
        <div className="section-head">
          <span className="eyebrow"><span className="bar" />QUI SOMMES-NOUS</span>
          <h2 style={{ fontFamily: 'var(--font-display)', marginTop: 16 }}>
            À propos de Teranga TE
          </h2>
          <div className="dot-divider" style={{ margin: '12px auto' }}>
            <div className="d" /><div className="d" /><div className="d" />
          </div>
          <p>
            Fondée en 2026 à Dakar, Teranga TE incarne la rencontre entre expertise technique de
            haut niveau et excellence RH au service du Sahel.
          </p>
        </div>

        {/* ── Grille principale : 1 col mobile/tablet → 2 col desktop ── */}
        <div
          className="reveal"
          data-reveal
          style={{
            display: 'grid',
            gridTemplateColumns: isDesktop ? '1fr 1fr' : '1fr',
            gap: isMobile ? 24 : 40,
            alignItems: 'start',
          }}
        >

          {/* ── Colonne gauche : citation DG ──────────── */}
          <div
            className="about-quote"
            style={{
              padding: isMobile ? '20px 16px 16px' : '32px 28px 28px',
              borderTop: '4px solid var(--navy-900)',
            }}
          >
            {/* icône guillemet */}
            <div style={{ width: 36, height: 36, borderRadius: 10, background: 'var(--gold-50)', display: 'grid', placeItems: 'center', marginBottom: 16 }}>
              <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
                <path d="M0 14V8.4C0 3.73 2.8 1.12 8.4 0l.84 1.68C6.72 2.38 5.46 3.5 4.9 5.6H7V14H0Zm11 0V8.4C11 3.73 13.8 1.12 19.4 0l.84 1.68C17.72 2.38 16.46 3.5 15.9 5.6H18V14h-7Z" fill="#B28A36"/>
              </svg>
            </div>

            <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--gold-600)', marginBottom: 6 }}>
              Le mot du Directeur Général
            </div>

            <p style={{ color: 'var(--slate)', fontSize: isMobile ? 13 : 14, lineHeight: 1.75, marginTop: 12 }}>
              « Chez Teranga TE, nous croyons que l'Afrique de l'Ouest mérite des services
              technologiques et énergétiques de classe mondiale, délivrés avec la chaleur et la
              proximité qui font la force de notre continent.
            </p>
            <p style={{ color: 'var(--slate)', fontSize: isMobile ? 13 : 14, lineHeight: 1.75, marginTop: 12 }}>
              Notre ambition est simple : être le partenaire unique qui transforme la complexité
              technique en avantage compétitif pour nos clients. Chaque projet que nous menons
              porte notre signature — l'excellence technique alliée à l'hospitalité sénégalaise,
              la <em>Teranga</em>.
            </p>
            <p style={{ color: 'var(--slate)', fontSize: isMobile ? 13 : 14, lineHeight: 1.75, marginTop: 12 }}>
              Ensemble, construisons les infrastructures qui porteront la croissance du Sahel. »
            </p>

            {/* Auteur */}
            <div className="who" style={{ marginTop: 20, paddingTop: 16, borderTop: '1px solid var(--line)' }}>
              <div className="av" style={{ width: 48, height: 48, borderRadius: '50%', overflow: 'hidden', border: '2px solid var(--gold-500)', flexShrink: 0 }}>
                <img src="/assets/team-papa-moussa.jpeg" alt="Papa Moussa TINE" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div>
                <div className="name">Papa Moussa TINE</div>
                <div style={{ color: 'var(--gold-600)', fontSize: 12, fontWeight: 700 }}>Managing Director</div>
                <div className="role">Fondateur de Teranga TE</div>
              </div>
            </div>
          </div>

          {/* ── Colonne droite : histoire + vision ───── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>

            {/* Notre Histoire */}
            <div style={{ paddingLeft: isMobile ? 14 : 20, borderLeft: '3px solid var(--gold-500)' }}>
              <h3 style={{ fontSize: isMobile ? 18 : 20, fontWeight: 800, color: 'var(--ink)', marginBottom: 12 }}>
                Notre Histoire
              </h3>
              <p style={{ color: 'var(--slate)', fontSize: isMobile ? 13 : 14, lineHeight: 1.75 }}>
                Fondée par <strong style={{ color: 'var(--ink)' }}>Papa Moussa TINE</strong> et{' '}
                <strong style={{ color: 'var(--ink)' }}>AfriRH</strong>, Teranga TE est née de la
                conviction que l'Afrique de l'Ouest mérite des services managés de haut niveau,
                alliant réactivité locale et standards internationaux.
              </p>
              <p style={{ color: 'var(--slate)', fontSize: isMobile ? 13 : 14, lineHeight: 1.75, marginTop: 12 }}>
                Avec un modèle financier flexible (CAPEX ou OPEX), nous nous adaptons à la
                structure de chaque client, des TPE aux grands groupes multi-sites.
              </p>
            </div>

            {/* Vision card navy */}
            <div style={{
              background: 'var(--navy-900)',
              borderRadius: isMobile ? 16 : 20,
              padding: isMobile ? '20px 18px' : '28px 32px',
              color: '#fff',
            }}>
              <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--gold-500)', marginBottom: 6 }}>
                VISION
              </div>
              <h3 style={{ fontSize: isMobile ? 18 : 22, fontWeight: 800, color: '#fff', marginBottom: 10, letterSpacing: '-.02em' }}>
                Référence technologique du Sahel
              </h3>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,.65)', lineHeight: 1.65, marginBottom: 24 }}>
                Devenir le partenaire technologique de référence au Sahel pour les infrastructures
                critiques, avec une présence consolidée dans 6+ pays et un impact ESG mesurable.
              </p>

              {/* Stats : 4 cols desktop → 2×2 mobile */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
                gap: isMobile ? 20 : 8,
                textAlign: 'center',
              }}>
                {[
                  { v: '6',    l: 'Collaborateurs' },
                  { v: '8',    l: 'Clients' },
                  { v: '98%',  l: 'SLA garanti' },
                  { v: '24/7', l: 'Support' },
                ].map(({ v, l }) => (
                  <div key={l}>
                    <div style={{ fontSize: isMobile ? 22 : 26, fontWeight: 800, color: 'var(--gold-400)', letterSpacing: '-.02em', lineHeight: 1 }}>{v}</div>
                    <div style={{ fontSize: 11, color: 'rgba(255,255,255,.55)', marginTop: 4 }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};