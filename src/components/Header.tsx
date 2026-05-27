import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Globe } from 'lucide-react';
import { useI18n } from '../context/I18nContext';

function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const handler = () => {
      const y = window.scrollY + 180;
      let cur = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y) cur = id;
      }
      setActive(cur);
    };
    handler();
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, [ids]);
  return active;
}

const NAV_IDS = ['accueil','apropos','expertises','offres','references','sahel','contact','carrieres'];

export const Header: React.FC = () => {
  const { t, lang, toggle } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const active = useActiveSection(NAV_IDS);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 90;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  const NAV_ITEMS = [
    { name: t.nav.home,       id: 'accueil' },
    { name: t.nav.about,      id: 'apropos' },
    { name: t.nav.expertises, id: 'expertises' },
    { name: t.nav.offers,     id: 'offres' },
    { name: t.nav.references, id: 'references' },
    { name: t.nav.sahel,      id: 'sahel' },
    { name: t.nav.contact,    id: 'contact' },
    { name: t.nav.careers,    id: 'carrieres' },
  ];

  return (
    <>
      <header className={`nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-inner">
          <a href="#accueil" className="nav-logo" onClick={(e) => { e.preventDefault(); scrollTo('accueil'); }}>
            <div className="logo-pill">
              <img src="/assets/teranga-logo.png" alt="Teranga Technology & Energy" style={{ height: 36 }} />
            </div>
          </a>

          <nav className="nav-links">
            {NAV_ITEMS.map((it, idx) => (
              <a key={it.id} href={`#${it.id}`}
                className={`nav-link ${active === it.id ? 'active' : ''} ${idx >= 6 ? 'optional' : ''}`}
                onClick={(e) => { e.preventDefault(); scrollTo(it.id); }}
              >
                {it.name}
              </a>
            ))}
          </nav>

          <div className="nav-right">
            {/* Lang toggle — pill cliquable FR ↔ EN */}
            <button
              onClick={toggle}
              className="lang-pill"
              title={lang === 'fr' ? 'Switch to English' : 'Passer en Français'}
              style={{ cursor: 'pointer', border: 'none', background: 'none', padding: 0 }}
            >
              <Globe size={13} />
              {lang === 'fr' ? 'EN' : 'FR'}
            </button>

            <a href="#contact" className="nav-cta"
              onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}
            >
              <Phone size={14} />
              {t.nav.contactCta}
            </a>
            <button className="nav-burger" onClick={() => setMobileOpen((o) => !o)} aria-label="Menu">
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-menu ${mobileOpen ? 'open' : ''}`}>
        {NAV_ITEMS.map((it) => (
          <a key={it.id} href={`#${it.id}`}
            onClick={(e) => { e.preventDefault(); scrollTo(it.id); setMobileOpen(false); }}
          >
            {it.name}
          </a>
        ))}
        {/* Lang toggle dans le menu mobile aussi */}
        <button onClick={() => { toggle(); setMobileOpen(false); }}
          style={{ cursor:'pointer', background:'none', border:'none', color:'inherit', fontSize:14, fontWeight:700, textAlign:'left', padding:'16px 24px', display:'flex', alignItems:'center', gap:8 }}
        >
          <Globe size={14} />
          {lang === 'fr' ? 'English version' : 'Version française'}
        </button>
      </div>
    </>
  );
};
