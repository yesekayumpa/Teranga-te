import React, { useState } from 'react';
import {
  Monitor, Zap, Sun, ShieldCheck,
  Printer, Laptop, ShieldAlert, Cable, Cloud,
  BatteryCharging, Eye, Thermometer, Gauge,
  HardHat, LayoutGrid, BarChart2, BatteryFull,
  FileCheck2, CheckCircle2,
  LucideIcon,
} from 'lucide-react';
import { useI18n } from '../context/I18nContext';

// Mapping des icônes pour les sous‑services
const SUB_ICON_MAP: Record<string, LucideIcon> = {
  'MPS (Managed Print Services)': Printer,
  'Workstations & Serveurs': Laptop,
  'Workstations & Servers': Laptop,
  'Réseaux & Sécurité': ShieldAlert,
  'Networks & Security': ShieldAlert,
  'Câblage réseau': Cable,
  'Network Cabling': Cable,
  'Cloud, Virtualisation & Gestion IT': Cloud,
  'Cloud, Virtualization & IT Management': Cloud,
  'CFO (Courant Fort)': BatteryCharging,
  'High Current (CFO)': BatteryCharging,
  'CFA (Courant Faible)': Eye,
  'Low Current (CFA)': Eye,
  'HVAC (Climatisation)': Thermometer,
  'HVAC': Thermometer,
  'Audit énergétique': Gauge,
  'Energy Audit': Gauge,
  'Solaire Photovoltaïque': Sun,
  'Solar Photovoltaic': Sun,
  'Solar Home System': LayoutGrid,
  'Supervision & Reporting énergétique': BarChart2,
  'Energy Monitoring & Reporting': BarChart2,
  'Stockage & Micro‑réseaux': BatteryFull,
  'Storage & Micro‑grids': BatteryFull,
  'EPC & Maintenance': HardHat,
  'Services certifiés': FileCheck2,
  'Certified Services': FileCheck2,
  'Nos engagements': CheckCircle2,
  'Our Commitments': CheckCircle2,
};

// Sous‑carte (inchangée)
const SubCard: React.FC<{
  title: string;
  points: ReadonlyArray<string>;
  brands?: string;
  accentColor?: string;
}> = ({ title, points, brands, accentColor }) => {
  const Ico = SUB_ICON_MAP[title] || FileCheck2;
  const accent = accentColor ?? 'var(--navy-900)';
  const bgAccent = accentColor ? `${accentColor}18` : 'rgba(11,17,30,0.07)';

  return (
    <div style={{
      background: '#fff',
      border: '1px solid var(--line)',
      borderRadius: 20,
      padding: '24px 24px 20px',
      display: 'flex',
      flexDirection: 'column',
      gap: 0,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16 }}>
        <div style={{
          width: 44, height: 44, borderRadius: 14,
          background: bgAccent,
          display: 'grid', placeItems: 'center',
          flexShrink: 0,
        }}>
          <Ico size={20} color={accent} />
        </div>
        <h4 style={{
          fontSize: 15, fontWeight: 800, color: 'var(--navy-900)',
          margin: 0, lineHeight: 1.3,
        }}>
          {title}
        </h4>
      </div>

      <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 16px', display: 'flex', flexDirection: 'column', gap: 8 }}>
        {points.map((point) => (
          <li key={point} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 13, color: 'var(--slate)', lineHeight: 1.4 }}>
            <span style={{ color: 'var(--gold-500)', fontWeight: 700, fontSize: 14, lineHeight: 1, marginTop: 1, flexShrink: 0 }}>✓</span>
            {point}
          </li>
        ))}
      </ul>

      {brands && (
        <div style={{
          borderTop: '1px solid var(--line)',
          paddingTop: 12,
          marginTop: 'auto',
          fontSize: 11,
          color: 'var(--slate)',
          lineHeight: 1.4,
        }}>
          <span style={{ fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--gold-600)', fontSize: 10 }}>
            Marques :{' '}
          </span>
          {brands}
        </div>
      )}
    </div>
  );
};

export const ExpertiseSection: React.FC = () => {
  const { t } = useI18n();
  const ex = t.expertises;
  const [activeId, setActiveId] = useState<string>(ex.items[0].id);
  const cardRef = React.useRef<HTMLDivElement>(null);

  const cur = ex.items.find((e) => e.id === activeId) ?? ex.items[0];

  const tabIconMap: Record<string, LucideIcon> = {
    ict: Monitor,
    energie: Zap,
    renouvelables: Sun,
    lift: ShieldCheck,
  };

  const imageMap: Record<string, string> = {
    ict: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663476210552/X8H4fjGbsgzCUU4Ftp9pLB/expertise-ict-fBaDApo4qym68m9DBUzyBE.webp',
    energie: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663476210552/X8H4fjGbsgzCUU4Ftp9pLB/expertise-energy-QxbZZfUAeoVkPzsMTwjhyn.webp',
    renouvelables: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663476210552/X8H4fjGbsgzCUU4Ftp9pLB/expertise-solar-VHKtkagtzLM9gKGVKD772C.webp',
    lift: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663476210552/X8H4fjGbsgzCUU4Ftp9pLB/inspection-ascenseurs_8f6624e3.png',
  };

  const badgeColorMap: Record<string, string> = {
    ict: 'var(--navy-900)',
    energie: '#B8860B',
    renouvelables: '#4A7C40',
    lift: 'var(--navy-900)',
  };

  React.useEffect(() => {
    if (cardRef.current) cardRef.current.classList.add('in');
  }, [activeId]);

  return (
    <section id="expertises" className="section section--cream">
      <div className="container">
        <div className="section-head reveal" data-reveal>
          <span className="eyebrow"><span className="bar" />{ex.eyebrow}</span>
          <h2>{ex.title}<span className="text-ital text-gold">{ex.titleItal}</span></h2>
          <p>{ex.intro}</p>
        </div>

        <div className="exp-tabs reveal" data-reveal>
          {ex.items.map((e) => {
            const Icon = tabIconMap[e.id] || Monitor;
            return (
              <button
                key={e.id}
                className={`exp-tab ${activeId === e.id ? 'active' : ''}`}
                onClick={() => setActiveId(e.id)}
              >
                <span className="dotmark" />
                <Icon size={15} />
                {e.label}
              </button>
            );
          })}
        </div>

        {/* Carte unique : image pleine largeur + contenu texte en dessous */}
        <div className="exp-card reveal in" key={cur.id} ref={cardRef}>
          {/* Bloc image (pleine largeur) */}
          <div className="exp-card__image">
            <img src={imageMap[cur.id]} alt={cur.title} referrerPolicy="no-referrer" />
            <span className="badge" style={{ background: badgeColorMap[cur.id], color: '#fff' }}>
              {cur.label}
            </span>
            <div className="img-content">
              <h3>{cur.title}</h3>
              <p className="quote">{cur.quote}</p>
            </div>
          </div>

          {/* Bloc texte (sous l'image) */}
          <div className="exp-card__content" style={{ padding: '32px 32px 32px' }}>
            <p className="lead" style={{ marginBottom: 24 }}>{cur.desc}</p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: cur.subs.length >= 2 ? 'repeat(2, 1fr)' : '1fr',
              gap: 14,
            }}>
              {cur.subs.map((sub) => (
                <SubCard
                  key={sub.title}
                  title={sub.title}
                  points={sub.points}
                  brands={'brands' in sub ? sub.brands : undefined}
                  accentColor={cur.id === 'renouvelables' ? '#4A7C40' : undefined}
                />
              ))}
            </div>

            <div style={{ marginTop: 28 }}>
              <button className="btn btn--dark">
                {ex.ctaAudit}
                <span className="arrow-circle">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="7" y1="17" x2="17" y2="7"/>
                    <polyline points="7 7 17 7 17 17"/>
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};