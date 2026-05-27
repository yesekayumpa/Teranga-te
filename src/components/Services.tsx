import React from 'react';
import { Wrench, Shield, Award, Star, Check, ArrowRight, LucideIcon } from 'lucide-react';

/* ---------- types ---------- */
interface Formula {
  id: string;
  Ico: LucideIcon;
  featured?: boolean;
  badgeKey?: string;  // clé de traduction pour le badge
}

/* ---------- données fixes (icônes, structure) ---------- */
const FORMULA_META: Formula[] = [
  { id: 'essential', Ico: Wrench },
  { id: 'comfort', Ico: Shield },
  { id: 'premium', Ico: Award, featured: true, badgeKey: 'recommended' },
  { id: 'custom', Ico: Star },
];

/* ---------- contenu traduit ---------- */
const CONTENT = {
  fr: {
    eyebrow: 'NOS FORMULES DE SERVICE',
    titlePrefix: 'Un modèle adapté à ',
    titleItal: 'vos enjeux.',
    intro: "Quatre formules pensées pour s'aligner sur la criticité de votre infrastructure et votre budget.",
    cta: 'Demander une offre',
    recommended: 'Recommandé',
    formulas: {
      essential: {
        name: 'Essentiel',
        sub: 'Maintenance corrective sur appel',
        features: [
          'Intervention sous 4h ouvrées',
          'Accès au portail de ticketing',
          'Pièces de rechange facturées en sus',
        ],
      },
      comfort: {
        name: 'Confort',
        sub: 'Maintenance Préventive & Corrective',
        features: [
          "Interventions illimitées (main d'œuvre)",
          'Visites de contrôle trimestrielles',
          'Stock de consignation',
          'Pièces majeures en option',
        ],
      },
      premium: {
        name: 'Premium',
        sub: 'Support & Supervision 24h/7',
        features: [
          'SLA garanti — disponibilité > 99%',
          'Technicien dédié & Account Manager',
          'Stock de consignation sur site',
          'Plan de progrès annuel inclus',
        ],
      },
      custom: {
        name: 'Sur-mesure',
        sub: 'Architecture multi-sites régionale',
        features: [
          'KPI spécifiques & reporting personnalisé',
          'Engagement de résultats',
          'Gestion de projet & gouvernance',
          'Architecture multi-sites / régionale',
        ],
      },
    },
  },
  en: {
    eyebrow: 'OUR SERVICE PLANS',
    titlePrefix: 'A model tailored to ',
    titleItal: 'your challenges.',
    intro: 'Four plans designed to match the criticality of your infrastructure and your budget.',
    cta: 'Request a quote',
    recommended: 'Recommended',
    formulas: {
      essential: {
        name: 'Essential',
        sub: 'On-call corrective maintenance',
        features: [
          'Response within 4 business hours',
          'Ticketing portal access',
          'Spare parts invoiced separately',
        ],
      },
      comfort: {
        name: 'Comfort',
        sub: 'Preventive & Corrective Maintenance',
        features: [
          'Unlimited interventions (labour)',
          'Quarterly inspection visits',
          'Consignment stock',
          'Major parts optional',
        ],
      },
      premium: {
        name: 'Premium',
        sub: '24/7 Support & Supervision',
        features: [
          'SLA guaranteed — availability > 99%',
          'Dedicated technician & Account Manager',
          'On-site consignment stock',
          'Annual improvement plan included',
        ],
      },
      custom: {
        name: 'Custom',
        sub: 'Regional multi-site architecture',
        features: [
          'Specific KPIs & customised reporting',
          'Performance commitments',
          'Project management & governance',
          'Regional / multi-site architecture',
        ],
      },
    },
  },
};

interface ServicesProps {
  lang?: 'fr' | 'en';
}

export const Services: React.FC<ServicesProps> = ({ lang = 'fr' }) => {
  const t = CONTENT[lang] ?? CONTENT.fr;

  return (
    <section id="offres" className="section section--paper">
      <div className="container">
        <div className="section-head reveal" data-reveal>
          <span className="eyebrow"><span className="bar" />{t.eyebrow}</span>
          <h2>
            {t.titlePrefix}<span className="text-ital text-gold">{t.titleItal}</span>
          </h2>
          <p>{t.intro}</p>
        </div>

        <div className="offers-grid">
          {FORMULA_META.map((meta, idx) => {
            const f = t.formulas[meta.id as keyof typeof t.formulas];
            return (
              <div
                key={meta.id}
                className={`offer ${meta.featured ? 'offer--featured' : ''} reveal`}
                data-reveal
                style={{ transitionDelay: `${idx * 80}ms` }}
              >
                {meta.featured && <span className="pin">{t.recommended}</span>}
                <div className="oico"><meta.Ico size={24} /></div>
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
                  {t.cta}
                  <ArrowRight size={14} />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};