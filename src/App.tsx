/* App.tsx — Teranga TE refonte
 * Drop-in replacement. Keeps your router; HomePage = the new design.
 */
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { OurImpact } from './components/OurImpact';
import { StatsSection } from './components/StatsSection';
import { ExpertiseSection } from './components/ExpertiseSection';
import { Services } from './components/Services';
import { Gallery } from './components/Gallery';
import { Partners } from './components/Partners';
import { Markets } from './components/Markets';
import { MapSection } from './components/MapSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppFab';

const HomePage: React.FC = () => (
  <main>
    <Hero />
    <About />
    <OurImpact />
    <StatsSection />
    <ExpertiseSection />
    <Services />
    <Gallery />
    <Partners />
    <Markets />
    <MapSection />
    <Contact />
  </main>
);

export default function App() {
  const location = useLocation();

  React.useEffect(() => {
    // Scroll to top on route change; smooth scroll for in-page hashes
    if (location.hash) {
      const el = document.getElementById(location.hash.slice(1));
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - 90;
        window.scrollTo({ top, behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [location]);

  // Scroll-reveal observer (matches `[data-reveal]` markup in components)
  React.useEffect(() => {
    const els = document.querySelectorAll('[data-reveal]');
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -60px 0px' }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  });

  return (
    <div className="relative min-h-screen">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
