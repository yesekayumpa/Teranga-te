import React from 'react';
import { ArrowRight } from 'lucide-react';

export const About: React.FC = () => (
  <section id="apropos" className="section section--cream">
    <div className="container">
      <div className="about-grid">
        <div className="about-collage reveal" data-reveal>
          <div className="about-hero-img">
            <img
              src="/assets/team-papa-moussa.jpeg"
              alt="Papa Moussa TINE — Fondateur de Teranga TE"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="about-stats-stack">
            <div className="a-stat">
              <div className="num">98%</div>
              <div className="lbl">SLA Garanti</div>
            </div>
            <div className="a-stat a-stat--alt">
              <div className="num">24/7</div>
              <div className="lbl">Support technique</div>
            </div>
          </div>
          <div className="about-seal">
            <span>
              EXCELLENCE
              <br />
              TECHNIQUE
            </span>
          </div>
        </div>

        <div className="reveal" data-reveal>
          <span className="eyebrow">
            <span className="bar" />
            NOTRE HISTOIRE
          </span>

          <h2 style={{ marginTop: 16, fontSize: 'clamp(34px, 4.4vw, 56px)', letterSpacing: '-0.03em' }}>
            L'excellence technologique
            <br />
            <span className="text-ital text-gold">au service du Sahel.</span>
          </h2>

          <p style={{ color: 'var(--slate)', margin: '24px 0 0', fontSize: 16, lineHeight: 1.7, maxWidth: 540 }}>
            Fondée en 2026 à Dakar par <strong style={{ color: 'var(--ink)' }}>Papa Moussa TINE</strong> et{' '}
            <strong style={{ color: 'var(--ink)' }}>AfriRH</strong>, Teranga TE est née de la conviction que l'Afrique
            de l'Ouest mérite des services managés de haut niveau — alliant réactivité locale et standards
            internationaux.
          </p>

          <div className="about-quote">
            <p>
              Chaque projet que nous menons porte notre signature — l'excellence technique alliée à l'hospitalité
              sénégalaise, la <em>Teranga</em>. Ensemble, construisons les infrastructures qui porteront la croissance
              du Sahel.
            </p>
            <div className="who">
              <div className="av">PT</div>
              <div>
                <div className="name">Papa Moussa TINE</div>
                <div className="role">Managing Director · Fondateur de Teranga TE</div>
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            <div className="vision-card">
              <div
                style={{
                  fontSize: 10,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  fontWeight: 800,
                  color: 'var(--gold-600)',
                }}
              >
                Vision
              </div>
              <div style={{ fontWeight: 700, color: 'var(--ink)', marginTop: 6, fontSize: 14, lineHeight: 1.4 }}>
                Référence technologique du Sahel.
              </div>
            </div>
            <div className="vision-card">
              <div
                style={{
                  fontSize: 10,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  fontWeight: 800,
                  color: 'var(--gold-600)',
                }}
              >
                Ambition
              </div>
              <div style={{ fontWeight: 700, color: 'var(--ink)', marginTop: 6, fontSize: 14, lineHeight: 1.4 }}>
                Partenaire de confiance des infrastructures critiques.
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
);