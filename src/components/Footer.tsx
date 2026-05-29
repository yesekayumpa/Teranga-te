import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Facebook, Instagram, Phone, Mail, MapPin, Globe } from 'lucide-react';

const PALETTE = {
  bg: '#2C3D58',
  primary: '#C29941',
  text: '#FAF7F2',
  muted: 'rgba(250,247,242,0.72)',
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
    fontSize: 12,
    margin: 0,
    marginBottom: 12,
    textTransform: 'uppercase',
    letterSpacing: '0.18em',
    color: PALETTE.text,
    lineHeight: 1
  }}>
    {label}
    <span style={{
      display: 'block',
      marginTop: 10,
      height: 3,
      width: 48,
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

  const gridTemplate = isDesktop ? '1.2fr 1fr 1fr 1fr' : isTablet ? '1fr 1fr' : '1fr';
  const footerFontSize = isMobile ? 12 : 13;
  const logoImgHeight = isMobile ? 32 : 36;

  return (
    <footer style={{
      position: 'relative',
      backgroundColor: PALETTE.bg,
      color: PALETTE.text,
      paddingTop: isMobile ? 28 : 52,
      paddingBottom: 32,
      overflow: 'hidden',
      borderTopLeftRadius: isMobile ? 16 : 28,
      borderTopRightRadius: isMobile ? 16 : 28,
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: isMobile ? '0 16px' : '0 28px', position: 'relative', zIndex: 10 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: gridTemplate,
          gap: isMobile ? 20 : 32,
          alignItems: 'start',
          marginBottom: 20
        }}>
          {/* Colonne 1 : Logo style "pill" + texte */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <a href="#accueil" aria-label="Retour à l'accueil" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none', color: 'inherit' }}>
              {/* Logo-pill */}
              <div
                className="logo-pill"
                style={{
                  background: '#fff',
                  borderRadius: 999,
                  padding: '6px 14px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  boxShadow: '0 4px 14px rgba(0, 0, 0, 0.18)',
                  transition: 'box-shadow 0.3s ease, transform 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-1px)';
                  e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.25)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 14px rgba(0, 0, 0, 0.18)';
                }}
              >
                <img
                  src="/assets/teranga-logo.png"
                  alt="Teranga Technology & Energy"
                  style={{ height: logoImgHeight, width: 'auto', display: 'block' }}
                />
              </div>
              {/* Texte à côté */}
              <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
                <span style={{ fontSize: isMobile ? 15 : 16, fontWeight: 800, color: PALETTE.text }}>TERANGA</span>
                <span style={{ fontSize: isMobile ? 15 : 16, fontWeight: 800, color: PALETTE.text }}>Technology & Energy</span>
              </div>
            </a>

            <p style={{ color: PALETTE.muted, fontSize: footerFontSize, lineHeight: 1.55, maxWidth: 380, margin: 0 }}>
              Votre partenaire intégré en Technologie, Énergie et Solutions Innovantes pour le Sahel.
            </p>

            <a href="#contact" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              background: PALETTE.primary,
              color: PALETTE.bg,
              padding: '9px 16px',
              borderRadius: 999,
              fontWeight: 800,
              fontSize: footerFontSize,
              textDecoration: 'none',
              boxShadow: '0 8px 24px rgba(194,153,65,0.14)'
            }}>
              <Phone size={14} /> Contactez-nous
            </a>

            <div style={{ display: 'flex', gap: 8, marginTop: 6 }}>
              <a href="#" aria-label="LinkedIn Teranga" style={socialStyle}><Linkedin size={14} /></a>
              <a href="#" aria-label="Twitter Teranga" style={socialStyle}><Twitter size={14} /></a>
              <a href="#" aria-label="Facebook Teranga" style={socialStyle}><Facebook size={14} /></a>
              <a href="#" aria-label="Instagram Teranga" style={socialStyle}><Instagram size={14} /></a>
            </div>
          </div>

          {/* Colonne 2 : Navigation */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <FooterHeading label="NAVIGATION" />
            <nav aria-label="Navigation footer">
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
                <li><a href="#accueil" style={{ ...linkStyle, fontSize: footerFontSize }}>Accueil</a></li>
                <li><a href="#apropos" style={{ ...linkStyle, fontSize: footerFontSize }}>À propos</a></li>
                <li><a href="#expertises" style={{ ...linkStyle, fontSize: footerFontSize }}>Expertises</a></li>
                <li><a href="#references" style={{ ...linkStyle, fontSize: footerFontSize }}>Références</a></li>
                <li><a href="#sahel" style={{ ...linkStyle, fontSize: footerFontSize }}>Sahel</a></li>
                <li><a href="#contact" style={{ ...linkStyle, fontSize: footerFontSize }}>Contact</a></li>
                <li><a href="#carrieres" style={{ ...linkStyle, fontSize: footerFontSize }}>Carrières</a></li>
              </ul>
            </nav>
          </div>

          {/* Colonne 3 : Expertises */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <FooterHeading label="NOS EXPERTISES" />
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
              <li style={{ fontWeight: 700, color: PALETTE.text, fontSize: footerFontSize }}>ICT</li>
              <li style={{ fontWeight: 700, color: PALETTE.text, fontSize: footerFontSize }}>Énergie</li>
              <li style={{ fontWeight: 700, color: PALETTE.text, fontSize: footerFontSize }}>Énergies Renouvelables</li>
              <li style={{ fontWeight: 700, color: PALETTE.text, fontSize: footerFontSize }}>Contrôle Technique Lift</li>
            </ul>
          </div>

          {/* Colonne 4 : Contact */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <FooterHeading label="CONTACT" />
            <address style={{ fontStyle: 'normal', color: PALETTE.muted, display: 'flex', flexDirection: 'column', gap: 8 }}>
              <a href="tel:+221773372628" style={contactItemStyle}><Phone size={14} /> <span style={{ marginLeft: 8, fontSize: footerFontSize }}>+221 77 337 26 28</span></a>
              <a href="tel:+221338435927" style={contactItemStyle}><Phone size={14} /> <span style={{ marginLeft: 8, fontSize: footerFontSize }}>+221 33 843 59 27</span></a>
              <a href="mailto:moussa.tine@teranga-te.com" style={contactItemStyle}><Mail size={14} /> <span style={{ marginLeft: 8, fontSize: footerFontSize }}>moussa.tine@teranga-te.com</span></a>
              <div style={contactItemStyle}><MapPin size={14} /> <span style={{ marginLeft: 8, fontSize: footerFontSize }}>3 Liberté 6 extension, Dakar</span></div>
              <a href="https://www.teranga-te.com" target="_blank" rel="noopener noreferrer" style={contactItemStyle}><Globe size={14} /> <span style={{ marginLeft: 8, fontSize: footerFontSize }}>www.teranga-te.com</span></a>
            </address>
          </div>
        </div>

        <div style={{ height: 1, background: `linear-gradient(90deg, transparent, ${PALETTE.primary}, transparent)`, margin: '20px 0', borderRadius: 2 }} />

        <div style={{ textAlign: 'center', color: PALETTE.muted, fontSize: isMobile ? 11 : 12, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
          <p style={{ margin: 0 }}>&copy; {currentYear} TERANGA Technology & Energy</p>
        </div>
      </div>
    </footer>
  );
};

// Styles partagés (inchangés)
const linkStyle: React.CSSProperties = {
  color: 'inherit',
  textDecoration: 'none',
  padding: '4px 6px',
  borderRadius: 6,
  display: 'inline-block',
  transition: 'color 160ms ease, background 160ms ease, transform 160ms ease',
  outline: 'none'
};

const socialStyle: React.CSSProperties = {
  width: 36,
  height: 36,
  borderRadius: 10,
  background: PALETTE.card,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: PALETTE.muted,
  textDecoration: 'none',
  transition: 'transform 160ms ease, box-shadow 160ms ease'
};

const contactItemStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: 8,
  color: 'inherit',
  textDecoration: 'none',
  padding: '6px 8px',
  borderRadius: 8,
  transition: 'background 160ms ease, transform 160ms ease'
};