import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Linkedin, Twitter, Facebook, Instagram, Phone } from 'lucide-react';

const PALETTE = {
  bg: '#2C3D58',
  primary: '#C29941',
  text: '#FAF7F2',
  muted: 'rgba(250,247,242,0.75)',
  border: 'rgba(250,247,242,0.12)',
  card: 'rgba(250,247,242,0.06)',
};

function useBreakpoint() {
  const get = () => {
    if (typeof window === 'undefined') return 'desktop';
    if (window.innerWidth < 640) return 'mobile' as const;
    if (window.innerWidth < 1024) return 'tablet' as const;
    return 'desktop' as const;
  };
  const [bp, setBp] = React.useState<'mobile'|'tablet'|'desktop'>(get);
  React.useEffect(() => {
    const h = () => setBp(get());
    window.addEventListener('resize', h);
    return () => window.removeEventListener('resize', h);
  }, []);
  return bp;
}

const FooterHeading: React.FC<{label: string}> = ({ label }) => (
  <h4 style={{
    fontWeight: 800,
    fontSize: 13,
    marginBottom: 18,
    textTransform: 'uppercase',
    letterSpacing: '0.18em',
    color: PALETTE.text,
    position: 'relative',
    display: 'inline-block'
  }}>
    {label}
    <span style={{
      position: 'absolute',
      bottom: -8,
      left: 0,
      height: 3,
      width: 56,
      background: PALETTE.primary,
      borderRadius: 3,
      opacity: 0.95
    }}/>
  </h4>
);

export const Footer: React.FC = () => {
  const bp = useBreakpoint();
  const isMobile = bp === 'mobile';
  const isTablet = bp === 'tablet';
  const isDesktop = bp === 'desktop';
  const currentYear = new Date().getFullYear();

  // Grid template: logo column slightly wider on large screens
  const gridTemplate = isDesktop ? '1.4fr 1fr 1fr 1fr' : isTablet ? '1fr 1fr' : '1fr';

  return (
    <footer style={{
      position: 'relative',
      backgroundColor: PALETTE.bg,
      color: PALETTE.text,
      paddingTop: isMobile ? 40 : 72,
      paddingBottom: 40,
      overflow: 'hidden',
      borderTopLeftRadius: isMobile ? 20 : 36,
      borderTopRightRadius: isMobile ? 20 : 36,
      boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.02)'
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: isMobile ? '0 16px' : '0 28px', position: 'relative', zIndex: 10 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: gridTemplate,
          gap: isMobile ? 28 : 40,
          alignItems: 'start',
          marginBottom: 28
        }}>

          {/* Column 1 Logo */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            <a href="#accueil" aria-label="Retour à l'accueil" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none', color: 'inherit' }}>
              <div style={{
                width: isMobile ? 56 : 84,
                height: isMobile ? 56 : 84,
                borderRadius: 18,
                background: PALETTE.text,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 8px 24px rgba(0,0,0,0.28)',
                overflow: 'hidden',
                flexShrink: 0,
                border: `2px solid ${PALETTE.card}`
              }}>
                <img src="/assets/teranga-logo.png" alt="Teranga TE logo" style={{ width: '78%', height: '78%', objectFit: 'contain', display: 'block' }} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: isMobile ? 14 : 18, fontWeight: 900, letterSpacing: '-0.6px', color: PALETTE.text }}>TERANGA</span>
                <span style={{ fontSize: 11, fontWeight: 700, color: PALETTE.muted, marginTop: 2 }}>Technology & Energy</span>
              </div>
            </a>

            <p style={{ color: PALETTE.muted, fontSize: 13, lineHeight: 1.6, maxWidth: 360 }}>
              Votre partenaire intégré en Technologie, Énergie et Solutions Innovantes pour le Sahel.
            </p>

            <a href="#contact" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              background: PALETTE.primary,
              color: PALETTE.bg,
              padding: '10px 18px',
              borderRadius: 999,
              fontWeight: 800,
              fontSize: 13,
              textDecoration: 'none',
              boxShadow: '0 10px 30px rgba(194,153,65,0.18)'
            }}>
              <Phone size={16} /> Contactez-nous
            </a>

            <div style={{ display: 'flex', gap: 10, marginTop: 6 }}>
              <a href="#" aria-label="LinkedIn Teranga" style={{ width: 40, height: 40, borderRadius: 10, background: PALETTE.card, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: PALETTE.muted, textDecoration: 'none' }}>
                <Linkedin size={16} />
              </a>
              <a href="#" aria-label="Twitter Teranga" style={{ width: 40, height: 40, borderRadius: 10, background: PALETTE.card, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: PALETTE.muted, textDecoration: 'none' }}>
                <Twitter size={16} />
              </a>
              <a href="#" aria-label="Facebook Teranga" style={{ width: 40, height: 40, borderRadius: 10, background: PALETTE.card, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: PALETTE.muted, textDecoration: 'none' }}>
                <Facebook size={16} />
              </a>
              <a href="#" aria-label="Instagram Teranga" style={{ width: 40, height: 40, borderRadius: 10, background: PALETTE.card, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: PALETTE.muted, textDecoration: 'none' }}>
                <Instagram size={16} />
              </a>
            </div>
          </div>

          {/* Column 2 Navigation */}
          <div>
            <FooterHeading label="NAVIGATION" />
            <nav aria-label="Navigation footer">
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12, color: PALETTE.muted }}>
                <li><a href="#accueil" style={linkStyle}>Accueil</a></li>
                <li><a href="#apropos" style={linkStyle}>À propos</a></li>
                <li><a href="#expertises" style={linkStyle}>Expertises</a></li>
                <li><a href="#references" style={linkStyle}>Références</a></li>
                <li><a href="#sahel" style={linkStyle}>Sahel</a></li>
                <li><a href="#contact" style={linkStyle}>Contact</a></li>
                <li><a href="#carrieres" style={linkStyle}>Carrières</a></li>
              </ul>
            </nav>
          </div>

          {/* Column 3 Expertises */}
          <div>
            <FooterHeading label="NOS EXPERTISES" />
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12, color: PALETTE.muted }}>
              <li style={{ fontWeight: 700, color: PALETTE.text }}>ICT</li>
              <li style={{ fontWeight: 700, color: PALETTE.text }}>Énergie</li>
              <li style={{ fontWeight: 700, color: PALETTE.text }}>Énergies Renouvelables</li>
              <li style={{ fontWeight: 700, color: PALETTE.text }}>Contrôle Technique Lift</li>
            </ul>
          </div>

          {/* Column 4 Contact */}
          <div>
            <FooterHeading label="CONTACT" />
            <address style={{ fontStyle: 'normal', color: PALETTE.muted, display: 'flex', flexDirection: 'column', gap: 10 }}>
              <a href="tel:+221773372628" style={linkStyle}>+221 77 337 26 28</a>
              <a href="tel:+221338435927" style={linkStyle}>+221 33 843 59 27</a>
              <a href="mailto:moussa.tine@teranga-te.com" style={linkStyle}>moussa.tine@teranga-te.com</a>
              <span>3 Liberté 6 extension, Dakar</span>
              <a href="https://www.teranga-te.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>www.teranga-te.com</a>
            </address>
          </div>

        </div>

        {/* Decorative line */}
        <div style={{ height: 1, background: `linear-gradient(90deg, transparent, ${PALETTE.primary}, transparent)`, margin: '28px 0', borderRadius: 2 }} />

        {/* Copyright */}
        <div style={{ textAlign: 'center', color: PALETTE.muted, fontSize: isMobile ? 11 : 12, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
          <p style={{ margin: 0 }}>&copy; {currentYear} TERANGA Technology & Energy</p>
        </div>
      </div>
    </footer>
  );
};

// Shared link style for consistency and accessible focus
const linkStyle: React.CSSProperties = {
  color: 'inherit',
  textDecoration: 'none',
  padding: '4px 6px',
  borderRadius: 6,
  display: 'inline-block',
  transition: 'color 160ms ease, background 160ms ease, transform 160ms ease',
  outline: 'none'
};

// Add keyboard focus styles globally in your CSS (example):
// a:focus { box-shadow: 0 0 0 3px rgba(194,153,65,0.18); transform: translateY(-1px); }
