import React, { useState, useEffect, useRef } from 'react';
import { Play } from 'lucide-react';
import { useI18n } from '../context/I18nContext';

const VIDEO_URL =
  'https://qxxcxyoccysksywoigww.supabase.co/storage/v1/object/sign/teranga/mp_.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV80OGJkYTcxNy03Y2UxLTRiMjAtYWNhZS03NTMwOWJkMDBkMzEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ0ZXJhbmdhL21wXy5tcDQiLCJpYXQiOjE3NzkzMDgzODIsImV4cCI6MTc3OTkxMzE4Mn0.7QaUEPM7oFsQo1nWHfKLQaDTsoKW0EcN5bNDwOFVA_Y';

const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - 90;
  window.scrollTo({ top, behavior: 'smooth' });
};

export const Hero: React.FC = () => {
  const { t } = useI18n();
  const slides = t.hero.slides;

  const [i, setI] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  /* Auto-rotation slides */
  useEffect(() => {
    const timer = setInterval(() => setI((p) => (p + 1) % slides.length), 5500);
    return () => clearInterval(timer);
  }, [slides.length]);

  /* Autoplay video */
  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;
    vid.muted = true;
    vid.play().catch(() => {
      const resume = () => { vid.play(); document.removeEventListener('click', resume); };
      document.addEventListener('click', resume, { once: true });
    });
  }, []);

  const s = slides[i];

  return (
    <section id="accueil" className="hero hero--fullvideo">

      {/* ── Vidéo plein-écran en arrière-plan ────────────────────── */}
      <div className="hero-video-bg">
        <video
          ref={videoRef}
          src={VIDEO_URL}
          loop muted playsInline autoPlay preload="auto"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        {/* Overlay sombre dégradé — lisibilité du texte */}
        <div className="hero-video-overlay" />
      </div>

      {/* ── Contenu centré par-dessus la vidéo ───────────────────── */}
      <div className="container hero-inner hero-inner--fullvideo">

        {/* Colonne texte */}
        <div className="hero-text-col">
          <div className="hero-bracket" key={`br-${i}`}>
            <span className="b-bl" />
            <span className="b-br" />
            {s.bracket}
          </div>

          <h1 key={`h1-${i}`}>
            <span className="pre">{s.pre}</span>
            {s.line1} <span className="accent">{s.accent1}</span>
            <br />
            {s.line2} <span className="accent">{s.accent2}</span>
          </h1>

          <p className="hero-lead" key={`lead-${i}`}>
            {s.lead}
          </p>

          <div className="hero-ctas">
            <button className="btn btn--gold" onClick={() => scrollTo('expertises')}>
              {t.hero.ctaServices}
              <span className="arrow-circle">
                <Play size={11} fill="currentColor" />
              </span>
            </button>
            <button className="btn btn--ghost-light" onClick={() => scrollTo('contact')}>
              {t.hero.ctaContact}
            </button>
          </div>

          {/* Dots navigation */}
          <div className="hero-dots hero-dots--inline">
            {slides.map((_, idx) => (
              <button
                key={idx}
                className={idx === i ? 'on' : ''}
                onClick={() => setI(idx)}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Floaters & Badge — toujours présents, positionnés par CSS */}
        <div className="hero-side hero-side--overlay" aria-hidden="true">
          <div className="hero-floater hero-floater--br float-y">
            <span className="dotg" />
            {s.floater}
          </div>
          <div className="hero-floater hero-floater--right float-y" style={{ animationDelay: '1.2s' }}>
            SLA 98%+
          </div>
          <div className="hero-badge spin-slow">
            • TERANGA •<br />TECHNOLOGY<br />• &amp; ENERGY •
          </div>
        </div>
      </div>

      {/* ── Ticker strip ─────────────────────────────────────────── */}
      <div className="hero-strip">
        <div className="hero-strip-track">
          {[...t.hero.ticker, ...t.hero.ticker, ...t.hero.ticker].map((text, idx) => (
            <React.Fragment key={idx}>
              <span>{text}</span>
              <span className="star">✦</span>
            </React.Fragment>
          ))}
        </div>
      </div>

      <style>{`
        /* ── Plein-écran vidéo ───────────────────────────────── */
        .hero--fullvideo {
          position: relative;
          min-height: 100vh;
          padding: 0;
          background: #0b111e;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        .hero-video-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
        }

        .hero-video-overlay {
          position: absolute;
          inset: 0;
          /* Dégradé: très sombre à gauche/bas pour le texte, semi-transparent à droite */
          background: linear-gradient(
            105deg,
            rgba(11, 17, 30, 0.82) 0%,
            rgba(11, 17, 30, 0.65) 45%,
            rgba(11, 17, 30, 0.30) 100%
          );
        }

        /* ── Inner layout ───────────────────────────────────── */
        .hero-inner--fullvideo {
          position: relative;
          z-index: 2;
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 160px;
          padding-bottom: 80px;
          gap: 40px;
        }

        /* ── Colonne texte ──────────────────────────────────── */
        .hero-text-col {
          max-width: 680px;
          flex: 1;
        }

        /* Override couleurs — texte blanc sur fond sombre */
        .hero--fullvideo h1,
        .hero--fullvideo .hero-lead,
        .hero--fullvideo .hero-bracket {
          color: #fff;
        }
        .hero--fullvideo .hero-lead {
          color: rgba(255,255,255,0.82);
        }
        .hero--fullvideo h1 .pre {
          color: rgba(255,255,255,0.55);
        }

        /* ── Floaters overlay ───────────────────────────────── */
        .hero-side--overlay {
          position: relative;
          width: 280px;
          flex-shrink: 0;
          align-self: stretch;
          display: block;
        }

        /* ── Dots inline (sous les CTAs) ────────────────────── */
        .hero-dots--inline {
          position: static;
          transform: none;
          left: auto;
          bottom: auto;
          margin-top: 32px;
          justify-content: flex-start;
        }

        /* ── Mobile ─────────────────────────────────────────── */
        @media (max-width: 768px) {
          .hero-inner--fullvideo {
            flex-direction: column;
            align-items: flex-start;
            padding-top: 120px;
            padding-bottom: 60px;
          }
          .hero-side--overlay {
            display: none;
          }
          .hero-video-overlay {
            background: rgba(11, 17, 30, 0.70);
          }
          .hero-dots--inline {
            justify-content: center;
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
};
