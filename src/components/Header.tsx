import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, Phone } from 'lucide-react';

const NAV_ITEMS = [
  { name: 'Accueil',    id: 'accueil' },
  { name: 'À propos',   id: 'apropos' },
  { name: 'Expertises', id: 'expertises' },
  { name: 'Offres',     id: 'offres' },
  { name: 'Références', id: 'references' },
  { name: 'Sahel',      id: 'sahel' },
  { name: 'Contact',    id: 'contact' },
  { name: 'Carrières',  id: 'carrieres' },
];

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

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const active = useActiveSection(NAV_ITEMS.map((n) => n.id));

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

  return (
    <>
      <header className={`nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-inner">
          <a
            href="#accueil"
            className="nav-logo"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('accueil');
            }}
          >
            <div className="logo-pill">
              <img src="/assets/teranga-logo.png" alt="Teranga Technology & Energy" style={{ height: 36 }} />
            </div>
          </a>

          <nav className="nav-links">
            {NAV_ITEMS.map((it, idx) => (
              <a
                key={it.id}
                href={`#${it.id}`}
                className={`nav-link ${active === it.id ? 'active' : ''} ${idx >= 6 ? 'optional' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(it.id);
                }}
              >
                {it.name}
              </a>
            ))}
          </nav>

          <div className="nav-right">
            <span className="lang-pill">
              <Globe size={13} /> EN
            </span>
            <a
              href="#contact"
              className="nav-cta"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('contact');
              }}
            >
              <Phone size={14} />
              Contactez-nous
            </a>
            <button
              className="nav-burger"
              onClick={() => setMobileOpen((o) => !o)}
              aria-label="Menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-menu ${mobileOpen ? 'open' : ''}`}>
        {NAV_ITEMS.map((it) => (
          <a
            key={it.id}
            href={`#${it.id}`}
            onClick={(e) => {
              e.preventDefault();
              scrollTo(it.id);
              setMobileOpen(false);
            }}
          >
            {it.name}
          </a>
        ))}
      </div>
    </>
  );
};
