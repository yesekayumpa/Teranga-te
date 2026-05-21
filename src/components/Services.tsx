import React from 'react';
import { Wrench, Shield, Award, Star, Check, ArrowRight, LucideIcon } from 'lucide-react';

interface Formula {
  Ico: LucideIcon;
  name: string;
  sub: string;
  badge?: string;
  featured?: boolean;
  features: string[];
}

const FORMULAS: Formula[] = [
  {
    Ico: Wrench, name: 'Essentiel',
    sub: 'Maintenance corrective sur appel',
    features: [
      'Intervention sous 4h ouvrées',
      'Accès au portail de ticketing',
      'Pièces de rechange facturées en sus',
    ],
  },
  {
    Ico: Shield, name: 'Confort',
    sub: 'Maintenance Préventive & Corrective',
    features: [
      "Interventions illimitées (main d'œuvre)",
      'Visites de contrôle trimestrielles',
      'Stock de consignation',
      'Pièces majeures en option',
    ],
  },
  {
    Ico: Award, name: 'Premium',
    sub: 'Support & Supervision 24h/7',
    badge: 'Recommandé',
    featured: true,
    features: [
      'SLA garanti — disponibilité > 99%',
      'Technicien dédié & Account Manager',
      'Stock de consignation sur site',
      'Plan de progrès annuel inclus',
    ],
  },
  {
    Ico: Star, name: 'Sur-mesure',
    sub: 'Architecture multi-sites régionale',
    features: [
      'KPI spécifiques & reporting personnalisé',
      'Engagement de résultats',
      'Gestion de projet & gouvernance',
      'Architecture multi-sites / régionale',
    ],
  },
];

export const Services: React.FC = () => (
  <section id="offres" className="section section--paper">
    <div className="container">
      <div className="section-head reveal" data-reveal>
        <span className="eyebrow"><span className="bar" />NOS FORMULES DE SERVICE</span>
        <h2>
          Un modèle adapté à <span className="text-ital text-gold">vos enjeux.</span>
        </h2>
        <p>Quatre formules pensées pour s'aligner sur la criticité de votre infrastructure et votre budget.</p>
      </div>

      <div className="offers-grid">
        {FORMULAS.map((f, idx) => (
          <div
            key={f.name}
            className={`offer ${f.featured ? 'offer--featured' : ''} reveal`}
            data-reveal
            style={{ transitionDelay: `${idx * 80}ms` }}
          >
            {f.badge && <span className="pin">{f.badge}</span>}
            <div className="oico"><f.Ico size={24} /></div>
            <h4>{f.name}</h4>
            <p className="sub">{f.sub}</p>
            <ul>
              {f.features.map((feat) => (
                <li key={feat}>
                  <Check size={16} />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
            <a href="#contact" className="obtn">
              Demander une offre
              <ArrowRight size={14} />
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);
