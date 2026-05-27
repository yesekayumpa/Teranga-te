import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

/* ---------- types ---------- */
interface PartnerItem {
  name: string;
  slug?: string | null;
  logo?: string;
  color: string;
}

interface PartnerGroup {
  id: string;
  items: PartnerItem[];
  // les clés de traduction seront ajoutées plus tard
}

/* ---------- données partenaires (noms, logos) ---------- */
const PARTNERS_DATA: PartnerGroup[] = [
  {
    id: 'ict',
    items: [
      { name: 'Cisco', logo: '/assets/logo partenaires/virtualisation/cisco.png', color: '#1BA0D7' },
      { name: 'Fortinet', logo: '/assets/logo partenaires/virtualisation/fortinet.png', color: '#EE3124' },
      { name: 'HP', logo: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663476210552/X8H4fjGbsgzCUU4Ftp9pLB/image171_f57b395b.png', color: '#0096D6' },
      { name: 'Microsoft', logo: '/assets/logo partenaires/virtualisation/microsoft.png', color: '#737373' },
      { name: 'VMware', logo: '/assets/logo partenaires/virtualisation/vmware.png', color: '#607078' },
      { name: 'IBM', logo: '/assets/logo partenaires/virtualisation/ibm.png', color: '#054ADA' },
      { name: 'Palo Alto', logo: '/assets/logo partenaires/virtualisation/palo-alto.png', color: '#FA582D' },
      { name: 'Proxmox', logo: '/assets/logo partenaires/virtualisation/proxmox.png', color: '#E57000' },
    ],
  },
  {
    id: 'impression',
    items: [
      { name: 'Ricoh', logo: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663476210552/X8H4fjGbsgzCUU4Ftp9pLB/image173_b629c911.png', color: '#D7000F' },
      { name: 'Riso', logo: '/assets/logo partenaires/impression/riso.png', color: '#5E2A78' },
      { name: 'Epson', logo: '/assets/logo partenaires/impression/epson.png', color: '#0033A0' },
      { name: 'Canon', logo: '/assets/logo partenaires/impression/canon.png', color: '#D71920' },
    ],
  },
  {
    id: 'energie',
    items: [
      { name: 'GE', logo: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663476210552/X8H4fjGbsgzCUU4Ftp9pLB/ge-logo_51b1241f.png', color: '#005EB8' },
      { name: 'Pramac', logo: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663476210552/X8H4fjGbsgzCUU4Ftp9pLB/pramac-logo_9b0008fa.jpg', color: '#C8102E' },
      { name: 'Kohler', logo: '/assets/logo partenaires/groupe electrogene/kohler.png', color: '#1a1a1a' },
      { name: 'Honeywell', logo: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663476210552/X8H4fjGbsgzCUU4Ftp9pLB/honeywell-logo_4f7980e1.png', color: '#E2231A' },
      { name: 'Cummins', logo: '/assets/logo partenaires/groupe electrogene/cummins.png', color: '#E12325' },
      { name: 'FG Wilson', logo: '/assets/logo partenaires/groupe electrogene/fg-wilson.png', color: '#003E7E' },
      { name: 'Himoinsa', logo: '/assets/logo partenaires/groupe electrogene/himonisa.png', color: '#D6261B' },
      { name: 'CAT', logo: '/assets/logo partenaires/energie/cat.png', color: '#FFCD11' },
      { name: 'Eaton', logo: '/assets/logo partenaires/energie/eaton.png', color: '#004B8D' },
      { name: 'Schneider Electric', logo: '/assets/logo partenaires/energie/schneider-electric.png', color: '#3DCD58' },
      { name: 'APC', logo: '/assets/logo partenaires/energie/apc.png', color: '#3DCD58' },
      { name: 'Socomec', logo: '/assets/logo partenaires/energie/socomec.png', color: '#003D7A' },
    ],
  },
  {
    id: 'renouvelables',
    items: [
      { name: 'Huawei', logo: '/assets/logo partenaires/energie/huawei.png', color: '#C7000B' },
      { name: 'Jinko', logo: '/assets/logo partenaires/energie/jinko.png', color: '#0066B3' },
      { name: 'JA Solar', logo: '/assets/logo partenaires/energie/ja-solar.png', color: '#003F7F' },
      { name: 'Longi', logo: '/assets/logo partenaires/energie/longi.png', color: '#E60000' },
      { name: 'SMA', logo: '/assets/logo partenaires/energie/sma.png', color: '#00A0E2' },
      { name: 'Victron Energy', logo: '/assets/logo partenaires/energie/victron-energy.png', color: '#005A9C' },
    ],
  },
];

/* ---------- contenu traduit ---------- */
const CONTENT = {
  fr: {
    eyebrow: 'ÉCOSYSTÈME PARTENAIRES',
    titlePrefix: 'Nos ',
    titleItal: 'partenaires technologiques.',
    intro: 'Nous collaborons avec les leaders mondiaux pour garantir des solutions fiables et performantes.',
    filterAll: 'Tous',
    partnerCount: (n: number) => `${n} partenaires`,
    groups: {
      ict: { title: 'ICT', subtitle: 'Réseaux, sécurité, postes & serveurs', accentColor: '#1BA0D7' },
      impression: { title: 'Impression', subtitle: 'Managed Print Services', accentColor: '#5E2A78' },
      energie: { title: 'Énergie CFO', subtitle: 'Groupes électrogènes & onduleurs', accentColor: '#E12325' },
      renouvelables: { title: 'Énergies Renouvelables', subtitle: 'Solaire & stockage', accentColor: '#3DCD58' },
    },
  },
  en: {
    eyebrow: 'PARTNER ECOSYSTEM',
    titlePrefix: 'Our ',
    titleItal: 'technology partners.',
    intro: 'We collaborate with world leaders to guarantee reliable and efficient solutions.',
    filterAll: 'All',
    partnerCount: (n: number) => `${n} partners`,
    groups: {
      ict: { title: 'ICT', subtitle: 'Networks, security, workstations & servers', accentColor: '#1BA0D7' },
      impression: { title: 'Print', subtitle: 'Managed Print Services', accentColor: '#5E2A78' },
      energie: { title: 'CFO Energy', subtitle: 'Generators & UPS', accentColor: '#E12325' },
      renouvelables: { title: 'Renewables', subtitle: 'Solar & storage', accentColor: '#3DCD58' },
    },
  },
};

/* ---------- composants internes (inchangés) ---------- */
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.96 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease: [0.25, 1, 0.5, 1] as unknown as any } },
};

const groupVariants = {
  hidden: { opacity: 0, x: -20 },
  // cast ease to any to satisfy framer-motion TypeScript types for cubic bezier arrays
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] as unknown as any } },
};

const PartnerCard: React.FC<{ p: PartnerItem; accentColor: string }> = ({ p, accentColor }) => {
  const [err, setErr] = useState(false);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });
  const [hovered, setHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const showImg = Boolean(p.logo) && !err;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / (rect.width / 2);
    const dy = (e.clientY - cy) / (rect.height / 2);
    setTilt({ rx: -dy * 8, ry: dx * 8 });
  };

  const resetTilt = () => {
    setTilt({ rx: 0, ry: 0 });
    setHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={resetTilt}
      style={{ perspective: 600, transformStyle: 'preserve-3d' }}
    >
      <motion.div
        animate={{
          rotateX: tilt.rx,
          rotateY: tilt.ry,
          scale: hovered ? 1.04 : 1,
          boxShadow: hovered
            ? `0 20px 44px -12px rgba(15,26,46,0.22), 0 0 0 1.5px ${accentColor}55`
            : '0 2px 10px -4px rgba(15,26,46,0.08), 0 0 0 1px #E7E3DA',
        }}
        transition={{ type: 'spring', stiffness: 280, damping: 22, mass: 0.6 }}
        style={{
          background: '#fff',
          borderRadius: 18,
          padding: '22px 16px 18px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 12,
          minHeight: 120,
          position: 'relative',
          overflow: 'hidden',
          transformStyle: 'preserve-3d',
          cursor: 'default',
        }}
      >
        {/* Shimmer */}
        <motion.div
          animate={{ x: hovered ? '250%' : '-120%' }}
          initial={{ x: '-120%' }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(105deg, transparent 30%, rgba(201,161,75,0.18) 50%, transparent 70%)',
            pointerEvents: 'none',
            zIndex: 0,
          }}
        />
        {/* Liseré coloré */}
        <motion.div
          animate={{ scaleY: hovered ? 1 : 0 }}
          initial={{ scaleY: 0 }}
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 3,
            background: accentColor,
            transformOrigin: 'bottom',
            borderRadius: '0 0 18px 18px',
            zIndex: 1,
          }}
          transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
        />
        {/* Logo */}
        <motion.div
          animate={{ y: hovered ? -3 : 0, scale: hovered ? 1.12 : 1 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          style={{ position: 'relative', zIndex: 2 }}
        >
          {showImg ? (
            <img
              src={p.logo}
              alt={p.name}
              onError={() => setErr(true)}
              style={{
                maxWidth: 80,
                maxHeight: 42,
                width: 'auto',
                height: 'auto',
                objectFit: 'contain',
                display: 'block',
                filter: hovered ? `grayscale(0) drop-shadow(0 4px 10px ${p.color}55)` : 'grayscale(0.25)',
                transition: 'filter 0.35s ease',
              }}
            />
          ) : (
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: 17,
                letterSpacing: '-0.01em',
                color: hovered ? p.color : '#374151',
                transition: 'color 0.25s ease',
                lineHeight: 1,
              }}
            >
              {p.name}
            </span>
          )}
        </motion.div>
        <motion.span
          animate={{ color: hovered ? accentColor : '#8A93A6', y: hovered ? 1 : 0 }}
          transition={{ duration: 0.25 }}
          style={{ fontSize: 11, fontWeight: 600, position: 'relative', zIndex: 2, letterSpacing: '0.02em' }}
        >
          {p.name}
        </motion.span>
      </motion.div>
    </motion.div>
  );
};

interface GroupHeaderProps {
  group: PartnerGroup;
  index: number;
  isActive: boolean;
  accentColor: string;
  title: string;
  subtitle: string;
  partnerCount: string;
}

const GroupHeader: React.FC<GroupHeaderProps> = ({ group, index, isActive, accentColor, title, subtitle, partnerCount }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 28 }}>
    <span
      style={{
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 11,
        color: accentColor,
        opacity: 0.6,
        letterSpacing: '0.12em',
        minWidth: 24,
      }}
    >
      {String(index + 1).padStart(2, '0')}
    </span>
    <div>
      <h4
        style={{
          fontSize: 13,
          fontWeight: 800,
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          color: accentColor,
          margin: 0,
          lineHeight: 1,
        }}
      >
        {title}
      </h4>
      <p style={{ fontSize: 11, color: 'var(--slate-2)', marginTop: 4, letterSpacing: '0.04em' }}>
        {subtitle}
      </p>
    </div>
    <motion.div
      animate={{ scaleX: isActive ? 1 : 0.4, opacity: isActive ? 1 : 0.3 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      style={{
        flex: 1,
        height: 1,
        background: `linear-gradient(90deg, ${accentColor}, transparent)`,
        transformOrigin: 'left',
        borderRadius: 1,
      }}
    />
    <span
      style={{ fontSize: 11, fontWeight: 700, color: 'var(--slate-2)', letterSpacing: '0.06em', whiteSpace: 'nowrap' }}
    >
      {partnerCount}
    </span>
  </div>
);

/* ---------- composant principal ---------- */
interface PartnersProps {
  lang?: 'fr' | 'en';
}

export const Partners: React.FC<PartnersProps> = ({ lang = 'fr' }) => {
  const t = CONTENT[lang] ?? CONTENT.fr;
  const [activeGroup, setActiveGroup] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: '-80px 0px' });

  return (
    <section ref={sectionRef} className="section section--paper">
      <div className="container">
        {/* Header */}
        <motion.div
          className="section-head"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="eyebrow">
            <span className="bar" />
            {t.eyebrow}
          </span>
          <h2>
            {t.titlePrefix}<span className="text-ital text-gold">{t.titleItal}</span>
          </h2>
          <p>{t.intro}</p>
        </motion.div>

        {/* Pills de filtrage */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          style={{ display: 'flex', justifyContent: 'center', gap: 10, flexWrap: 'wrap', marginBottom: 56 }}
        >
          <motion.button
            onClick={() => setActiveGroup(null)}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.96 }}
            style={{
              padding: '9px 18px',
              borderRadius: 999,
              border: `1.5px solid ${activeGroup === null ? 'var(--ink)' : 'var(--line)'}`,
              background: activeGroup === null ? 'var(--ink)' : '#fff',
              color: activeGroup === null ? '#fff' : 'var(--slate)',
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: '0.06em',
              cursor: 'pointer',
              transition: 'all 0.25s ease',
            }}
          >
            {t.filterAll}
          </motion.button>

          {PARTNERS_DATA.map((g) => {
            const grp = t.groups[g.id as keyof typeof t.groups];
            return (
              <motion.button
                key={g.id}
                onClick={() => setActiveGroup(activeGroup === g.id ? null : g.id)}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.96 }}
                style={{
                  padding: '9px 18px',
                  borderRadius: 999,
                  border: `1.5px solid ${activeGroup === g.id ? grp.accentColor : 'var(--line)'}`,
                  background: activeGroup === g.id ? `${grp.accentColor}18` : '#fff',
                  color: activeGroup === g.id ? grp.accentColor : 'var(--slate)',
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: '0.04em',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                }}
              >
                <span
                  style={{
                    width: 7,
                    height: 7,
                    borderRadius: '50%',
                    background: grp.accentColor,
                    flexShrink: 0,
                    opacity: activeGroup === g.id ? 1 : 0.45,
                  }}
                />
                {grp.title}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Groupes */}
        <AnimatePresence mode="wait">
          {PARTNERS_DATA.filter((g) => activeGroup === null || g.id === activeGroup).map((group, groupIdx) => {
            const isVisible = activeGroup === null || activeGroup === group.id;
            const grp = t.groups[group.id as keyof typeof t.groups];
            return (
              <motion.div
                key={group.id}
                variants={groupVariants}
                initial="hidden"
                animate={inView && isVisible ? 'visible' : 'hidden'}
                exit={{ opacity: 0, x: -12, transition: { duration: 0.3 } }}
                className="partners-group"
                data-group={group.id}
                style={{ paddingBottom: 40, marginBottom: 8 }}
              >
                <GroupHeader
                  group={group}
                  index={groupIdx}
                  isActive={activeGroup === group.id || activeGroup === null}
                  accentColor={grp.accentColor}
                  title={grp.title}
                  subtitle={grp.subtitle}
                  partnerCount={t.partnerCount(group.items.length)}
                />
                <motion.div
                  className="partners-row"
                  variants={containerVariants}
                  initial="hidden"
                  animate={inView ? 'visible' : 'hidden'}
                >
                  {group.items.map((p) => (
                    <PartnerCard key={p.name} p={p} accentColor={grp.accentColor} />
                  ))}
                </motion.div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </section>
  );
};