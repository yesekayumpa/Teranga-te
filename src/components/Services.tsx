import React from 'react';
import { Wrench, Shield, Award, Star, Check, ArrowRight } from 'lucide-react';
import { useI18n } from '../context/I18nContext';

const FORMULA_ICONS = {
  essential: Wrench,
  comfort: Shield,
  premium: Award,
  custom: Star,
} as const;

export const Services: React.FC = () => {
  const { t } = useI18n();
  const services = t.services;

  const formulas = [
    { id: 'essential', featured: false },
    { id: 'comfort', featured: false },
    { id: 'premium', featured: true, badge: services.recommended },
    { id: 'custom', featured: false },
  ];

  return (
    <section id="offres" className="section section--paper">
      <div className="container">
        <div className="section-head reveal" data-reveal>
          <span className="eyebrow">
            <span className="bar" />
            {services.eyebrow}
          </span>
          <h2>
            {services.titlePrefix}
            <span className="text-ital text-gold">{services.titleItal}</span>
          </h2>
          <p>{services.intro}</p>
        </div>

        <div className="offers-grid">
          {formulas.map((f, idx) => {
            const Ico = FORMULA_ICONS[f.id as keyof typeof FORMULA_ICONS];
            const data = services.formulas[f.id as keyof typeof services.formulas];
            return (
              <div
                key={f.id}
                className={`offer ${f.featured ? 'offer--featured' : ''} reveal`}
                data-reveal
                style={{ transitionDelay: `${idx * 80}ms` }}
              >
                {f.badge && <span className="pin">{f.badge}</span>}
                <div className="oico">
                  <Ico size={24} />
                </div>
                <h4>{data.name}</h4>
                <p className="sub">{data.sub}</p>
                <ul>
                  {data.features.map((feat: string) => (
                    <li key={feat}>
                      <Check size={16} />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
                <a href="#contact" className="obtn">
                  {services.cta}
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