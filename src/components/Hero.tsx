import React, { useState, useEffect, useRef } from 'react';
import { Play } from 'lucide-react';

/* ─────────────────────────────────────────
   URL de la vidéo (Supabase signed URL)
───────────────────────────────────────── */
const VIDEO_URL =
  'https://qxxcxyoccysksywoigww.supabase.co/storage/v1/object/sign/teranga/mp_.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV80OGJkYTcxNy03Y2UxLTRiMjAtYWNhZS03NTMwOWJkMDBkMzEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ0ZXJhbmdhL21wXy5tcDQiLCJpYXQiOjE3NzkzMDgzODIsImV4cCI6MTc3OTkxMzE4Mn0.7QaUEPM7oFsQo1nWHfKLQaDTsoKW0EcN5bNDwOFVA_Y';

/* ─────────────────────────────────────────
   Slides de texte — la vidéo est commune
   à tous les slides
───────────────────────────────────────── */
interface Slide {
  bracket: string;
  pre: string;
  line1: string;
  accent1: string;
  line2: string;
  accent2: string;
  lead: string;
  floater: string;
}

const HERO_SLIDES: Slide[] = [
  {
    bracket: 'Bienvenue !',
    pre: 'Teranga TE,',
    line1: 'Votre',
    accent1: 'Expertise,',
    line2: 'Intégrée en',
    accent2: 'Technologie.',
    lead: "Solutions complètes pour l'Afrique de l'Ouest. Digital, énergie & renouvelables — made in Africa, avec la rigueur d'un standard international.",
    floater: 'Direction Générale',
  },
  {
    bracket: 'Impact Sahel',
    pre: 'Continuité totale,',
    line1: "L'énergie",
    accent1: 'critique,',
    line2: 'maîtrisée',
    accent2: '24h/7.',
    lead: "Onduleurs, groupes électrogènes, audit énergétique : nous sécurisons l'alimentation de vos sites industriels et data centers, partout au Sahel.",
    floater: 'Énergie 24/7',
  },
  {
    bracket: 'Innovation',
    pre: 'Standards internationaux,',
    line1: 'Audit,',
    accent1: 'sécurité,',
    line2: 'conformité',
    accent2: 'EN 81-20/50.',
    lead: 'SLA 98%+ contractuel. Notre équipe senior pilote vos installations selon les standards les plus exigeants.',
    floater: 'SLA 98%+',
  },
  {
    bracket: 'Énergie verte',
    pre: 'Avenir durable,',
    line1: 'Le',
    accent1: 'solaire',
    line2: 'au service',
    accent2: 'du Sahel.',
    lead: "EPC + financement, micro-réseaux, stockage batterie — une autonomie énergétique mesurable, et un impact ESG concret.",
    floater: 'Solaire EPC',
  },
];

const EXPERTISES_TICKER = [
  "Technologies de l'Information",
  'Solutions Énergétiques',
  'Énergies Renouvelables',
  'Contrôle Technique Lift',
  'Audit Énergétique',
  'Services Managés',
  'Support 24/7',
  'Infogérance',
];

const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - 90;
  window.scrollTo({ top, behavior: 'smooth' });
};

export const Hero: React.FC = () => {
  const [i, setI] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  /* Auto-rotation des slides texte */
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % HERO_SLIDES.length), 5500);
    return () => clearInterval(t);
  }, []);

  /* Lecture automatique de la vidéo (contournement autoplay policy) */
  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;
    vid.muted = true;           // obligatoire pour l'autoplay navigateur
    vid.play().catch(() => {    // silencieux si le navigateur refuse
      // fallback : lecture au premier clic utilisateur
      const resume = () => { vid.play(); document.removeEventListener('click', resume); };
      document.addEventListener('click', resume, { once: true });
    });
  }, []);

  const s = HERO_SLIDES[i];

  return (
    <section id="accueil" className="hero">
      <div className="container hero-inner">

        {/* ── Colonne texte (inchangée) ── */}
        <div>
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
              Nos services
              <span className="arrow-circle">
                <Play size={11} fill="currentColor" />
              </span>
            </button>
            <button className="btn btn--ghost-light" onClick={() => scrollTo('contact')}>
              Nous contacter
            </button>
          </div>
        </div>

        {/* ── Colonne vidéo (remplace le carousel d'images) ── */}
        <div className="hero-side">
          {/* Disque décoratif tournant (inchangé) */}
          <div className="hero-disc" />

          {/* Conteneur circulaire — même classe CSS qu'avant */}
          <div className="hero-photo">
            <video
              ref={videoRef}
              src={VIDEO_URL}
              loop
              muted
              playsInline
              autoPlay
              preload="auto"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                /* Petit zoom Ken-Burns très subtil */
                animation: 'hero-video-zoom 20s ease-in-out infinite alternate',
              }}
            />

            {/* Overlay dégradé léger pour lisibilité si la vidéo est claire */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                borderRadius: '50%',
                background:
                  'linear-gradient(160deg, rgba(15,26,46,0.15) 0%, rgba(15,26,46,0.35) 100%)',
                pointerEvents: 'none',
              }}
            />
          </div>

          {/* Floaters — inchangés */}
          <div className="hero-floater hero-floater--br float-y">
            <span className="dotg" />
            {s.floater}
          </div>

          <div
            className="hero-floater hero-floater--right float-y"
            style={{ animationDelay: '1.2s' }}
          >
            SLA 98%+
          </div>

          {/* Badge tournant — inchangé */}
          <div className="hero-badge spin-slow">
            • TERANGA •
            <br />
            TECHNOLOGY
            <br />
            • &amp; ENERGY •
          </div>

          {/* Dots de navigation (contrôlent le texte uniquement) */}
          <div className="hero-dots">
            {HERO_SLIDES.map((_, idx) => (
              <button
                key={idx}
                className={idx === i ? 'on' : ''}
                onClick={() => setI(idx)}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ── Ticker strip — inchangé ── */}
      <div className="hero-strip">
        <div className="hero-strip-track">
          {[...EXPERTISES_TICKER, ...EXPERTISES_TICKER, ...EXPERTISES_TICKER].map((t, idx) => (
            <React.Fragment key={idx}>
              <span>{t}</span>
              <span className="star">✦</span>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* ── Keyframe Ken-Burns injecté en ligne (évite de toucher teranga.css) ── */}
      <style>{`
        @keyframes hero-video-zoom {
          from { transform: scale(1);    }
          to   { transform: scale(1.06); }
        }
      `}</style>
    </section>
  );
};