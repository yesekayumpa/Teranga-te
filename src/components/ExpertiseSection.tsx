import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Monitor, Zap, Sun, ShieldCheck, ArrowUpRight, LucideIcon } from 'lucide-react';

interface Expertise {
  id: string;
  label: string;
  Ico: LucideIcon;
  title: string;
  quote: string;
  desc: string;
  points: string[];
  image: string;
}

const EXPERTISES: Expertise[] = [
  {
    id: 'ict',
    label: 'ICT',
    Ico: Monitor,
    title: "Technologies de l'Information",
    quote: "Votre réseau ne s'arrête pas. Votre business non plus.",
    desc: "Des infrastructures robustes pour une entreprise connectée et performante, conçues, déployées et supervisées par nos équipes certifiées.",
    points: [
      'MPS — Managed Print Services',
      'Infogérance & Support IT 24/7',
      'Câblage réseau structuré',
      'Maintenance réseaux & serveurs',
    ],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1400',
  },
  {
    id: 'energie',
    label: 'Énergie',
    Ico: Zap,
    title: 'Solutions Énergétiques',
    quote: "L'énergie critique maîtrisée pour une continuité totale.",
    desc: "Assurez la disponibilité et la qualité de votre puissance électrique. De l'audit au déploiement, nous sécurisons l'alimentation de vos sites stratégiques.",
    points: [
      'Audit & efficacité énergétique',
      'Onduleurs (UPS) toutes capacités',
      'Groupes électrogènes industriels',
      'Régulateurs de tension',
    ],
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=1400',
  },
  {
    id: 'renouvelables',
    label: 'Énergies Renouvelables',
    Ico: Sun,
    title: 'Énergie Solaire & Durable',
    quote: "L'avenir du Sahel se construit sur une énergie propre.",
    desc: "Solutions photovoltaïques pour une autonomie énergétique mesurable et une empreinte carbone maîtrisée — du résidentiel à l'industriel.",
    points: [
      'EPC — Ingénierie, Fourniture, Installation',
      'EPC + Financement structuré',
      'Solar Home System',
      'Micro-réseaux & stockage batterie',
    ],
    image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&q=80&w=1400',
  },
  {
    id: 'lift',
    label: 'Contrôle Technique',
    Ico: ShieldCheck,
    title: 'Sécurité & Conformité',
    quote: 'La sécurité verticale, une exigence non négociable.',
    desc: 'Garantissez la conformité et la sécurité de vos équipements selon les standards internationaux les plus exigeants — EN 81-20 / EN 81-50.',
    points: [
      'Inspection & certification',
      'Contrôles périodiques',
      'Conformité EN 81-20 / EN 81-50',
      'Audit sécurité ascenseurs',
    ],
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1400',
  },
];

export const ExpertiseSection: React.FC = () => {
  const [active, setActive] = useState(EXPERTISES[0].id);
  const cur = EXPERTISES.find((e) => e.id === active) ?? EXPERTISES[0];

  // Forcer la classe "in" immédiatement pour que la carte soit visible
  const cardRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    if (cardRef.current) {
      cardRef.current.classList.add('in');
    }
  }, [active]); // ré-applique à chaque changement d'onglet

  return (
    <section id="expertises" className="section section--cream">
      <div className="container">
        <div className="section-head reveal" data-reveal>
          <span className="eyebrow"><span className="bar" />CE QUE NOUS FAISONS</span>
          <h2>
            Nos domaines d'<span className="text-ital text-gold">expertise.</span>
          </h2>
          <p>Des solutions intégrées pour sécuriser et optimiser vos infrastructures critiques.</p>
        </div>

        {/* Onglets */}
        <div className="exp-tabs reveal" data-reveal>
          {EXPERTISES.map((e) => (
            <button
              key={e.id}
              className={`exp-tab ${active === e.id ? 'active' : ''}`}
              onClick={() => setActive(e.id)}
            >
              <span className="dotmark" />
              <e.Ico size={15} />
              {e.label}
            </button>
          ))}
        </div>

        {/* Carte animée */}
        <div className="exp-card reveal" data-reveal key={cur.id} ref={cardRef}>
          <div className="img-side">
            <img src={cur.image} alt={cur.title} referrerPolicy="no-referrer" />
            <span className="badge">{cur.label}</span>
            <div className="img-content">
              <h3>{cur.title}</h3>
              <p className="quote">“{cur.quote}”</p>
            </div>
          </div>
          <div className="text-side">
            <p className="lead">{cur.desc}</p>
            <ul>{cur.points.map((p) => <li key={p}>{p}</li>)}</ul>
            <div>
              <button className="btn btn--dark">
                Demander un audit
                <span className="arrow-circle"><ArrowUpRight size={14} /></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};