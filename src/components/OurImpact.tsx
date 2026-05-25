import React from 'react';
import { Sparkles, Users, Leaf, Globe, Target, Award, Clock } from 'lucide-react';

const DNA_VALUES = [
  { Ico: Sparkles, title: 'Excellence Technique',  desc: "Standards internationaux appliqués localement avec rigueur et expertise." },
  { Ico: Users,    title: 'Teranga (Hospitalité)', desc: "L'hospitalité sénégalaise au cœur de chaque relation client et partenaire." },
  { Ico: Leaf,     title: 'Engagement ESG',        desc: 'Impact environnemental et social mesurable dans chacun de nos projets.' },
  { Ico: Globe,    title: 'Ancrage Sahélien',      desc: 'Connaissance profonde du terrain et des réalités locales du Sahel.' },
];

const PILLARS = [
  { Ico: Target, title: 'Partenaire Unique', desc: 'Approche multi-domaines intégrée pour une gestion simplifiée.' },
  { Ico: Award,  title: 'SLA 98%+',          desc: 'Engagement de niveau de service garanti par contrat.' },
  { Ico: Users,  title: 'Équipe Senior',     desc: "Une force pluridisciplinaire & certifiée à votre service." },
  { Ico: Clock,  title: 'Support 24/7',      desc: 'Disponibilité technique continue pour vos opérations critiques.' },
];

export const OurImpact: React.FC = () => (
  <section className="section section--paper">
    <div className="container">
      <div className="section-head reveal" data-reveal>
        <span className="eyebrow"><span className="bar" />L'ADN TERANGA</span>
        {/* <h2>Nos valeurs fondatrices</h2> */}
        <p>Quatre principes guident chaque décision et chaque projet que nous menons.</p>
      </div>

      <div className="pillars-grid">
        {DNA_VALUES.map((v, idx) => (
          <div className="pillar reveal" data-reveal style={{ transitionDelay: `${idx * 70}ms` }} key={v.title}>
            <div className="pico"><v.Ico size={22} /></div>
            <h4>{v.title}</h4>
            <p>{v.desc}</p>
          </div>
        ))}
      </div>

      <div className="section-head reveal" data-reveal style={{ marginTop: 96, marginBottom: 56 }}>
        <span className="eyebrow"><span className="bar" />NOTRE FORCE</span>
        <h2>Les 4 piliers qui nous définissent</h2>
      </div>

      <div className="pillars-grid">
        {PILLARS.map((p, idx) => (
          <div className="pillar reveal" data-reveal style={{ transitionDelay: `${idx * 70}ms` }} key={p.title}>
            <div className="pico" style={{ background: 'var(--navy-100)', color: 'var(--navy-700)' }}>
              <p.Ico size={22} />
            </div>
            <h4>{p.title}</h4>
            <p>{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);