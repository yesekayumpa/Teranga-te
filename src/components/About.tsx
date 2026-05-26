import React from 'react';

export const About: React.FC = () => (
  <section id="apropos" className="section section--cream">
    <div className="container">
      <div className="section-head reveal" data-reveal>
        <span className="eyebrow"><span className="bar" />QUI SOMMES-NOUS</span>
        <h2>À propos de Teranga Technology & Energy</h2>
        <div className="dot-divider" style={{ margin: '12px auto' }}>
          <div className="d" /><div className="d" /><div className="d" />
        </div>
        <p>
          Fondée en 2026 à Dakar, Teranga Technology & Energy incarne la rencontre entre expertise technique de
          haut niveau et excellence RH au service du Sahel.
        </p>
      </div>

      <div className="about-grid reveal" data-reveal>
        {/* Colonne gauche : citation DG */}
        <div className="about-quote" style={{ borderTop: '4px solid var(--navy-900)' }}>
          <div style={{ width: 36, height: 36, borderRadius: 10, background: 'var(--gold-50)', display: 'grid', placeItems: 'center', marginBottom: 16 }}>
            <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
              <path d="M0 14V8.4C0 3.73 2.8 1.12 8.4 0l.84 1.68C6.72 2.38 5.46 3.5 4.9 5.6H7V14H0Zm11 0V8.4C11 3.73 13.8 1.12 19.4 0l.84 1.68C17.72 2.38 16.46 3.5 15.9 5.6H18V14h-7Z" fill="#B28A36"/>
            </svg>
          </div>
          <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--gold-600)', marginBottom: 6 }}>
            Le mot du Directeur Général
          </div>
          <p>
            « Chez Teranga Technology & Energy, nous croyons que l'Afrique de l'Ouest mérite des services technologiques et énergétiques de classe mondiale, délivrés avec la chaleur et la proximité qui font la force de notre continent.
          </p>
          <p style={{ marginTop: 12 }}>
            Notre ambition est simple : être le partenaire unique qui transforme la complexité technique en avantage compétitif pour nos clients. Chaque projet que nous menons porte notre signature — l'excellence technique alliée à l'hospitalité sénégalaise, la <em>Teranga</em>.
          </p>
          <p style={{ marginTop: 12 }}>
            Ensemble, construisons les infrastructures qui porteront la croissance du Sahel. »
          </p>
          <div className="who" style={{ marginTop: 20, paddingTop: 16, borderTop: '1px solid var(--line)' }}>
            <div className="av" style={{ width: 48, height: 48, borderRadius: '50%', overflow: 'hidden', border: '2px solid var(--gold-500)', flexShrink: 0 }}>
              <img src="/assets/team-papa-moussa.jpeg" alt="Papa Moussa TINE" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div>
              <div className="name">Papa Moussa TINE</div>
              <div style={{ color: 'var(--gold-600)', fontSize: 12, fontWeight: 700 }}>Managing Director</div>
              <div className="role">Fondateur de Teranga Technology & Energy</div>
            </div>
          </div>
        </div>

        {/* Colonne droite : histoire + vision */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          <div style={{ paddingLeft: 20, borderLeft: '3px solid var(--gold-500)' }}>
            <h3>Notre Histoire</h3>
            <p>
              Fondée en 2026, Teranga Technology & Energy est née de la conviction que l'Afrique de l'Ouest mérite des services managés de haut niveau, alliant réactivité locale et standards internationaux.
            </p>
            <p style={{ marginTop: 12 }}>
              Avec un modèle financier flexible (CAPEX ou OPEX), nous nous adaptons à la structure de chaque client, des TPE aux grands groupes multi-sites.
            </p>
          </div>
          <div style={{
            background: 'var(--navy-900)',
            borderRadius: 20,
            padding: '28px 32px',
            color: '#fff',
          }}>
            <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--gold-500)', marginBottom: 6 }}>
              VISION
            </div>
            <h3 style={{ fontSize: 22, fontWeight: 800, color: '#fff', marginBottom: 10, letterSpacing: '-.02em' }}>
              Référence technologique du Sahel
            </h3>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,.65)', lineHeight: 1.65, marginBottom: 24 }}>
              Devenir le partenaire technologique de référence au Sahel pour les infrastructures critiques, avec une présence consolidée dans 6+ pays et un impact ESG mesurable.
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: 8,
              textAlign: 'center',
            }}>
              {[
                { v: '6', l: 'Collaborateurs' },
                { v: '8', l: 'Clients' },
                { v: '98%', l: 'SLA garanti' },
                { v: '24/7', l: 'Support' },
              ].map(({ v, l }) => (
                <div key={l}>
                  <div style={{ fontSize: 26, fontWeight: 800, color: 'var(--gold-400)', letterSpacing: '-.02em', lineHeight: 1 }}>{v}</div>
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