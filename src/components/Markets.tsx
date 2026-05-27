import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, TrendingUp, Target } from 'lucide-react';
import { useI18n } from '../context/I18nContext';

const FLAG_COLORS: Record<string, string[]> = {
  SN:['#009E49','#FDEF42','#E31B23'], GM:['#3A7728','#0C1C8C','#3A7728'],
  GN:['#CE1126','#FCD116','#009460'], ML:['#14B53A','#FCD116','#CE1126'],
  BF:['#009E49','#EF2B2D'], NE:['#0DB02B','#FFFFFF','#E05206'],
  MR:['#006233','#FFC400'], GW:['#CE1126','#FCD116','#009E49'],
  CI:['#F77F00','#FFFFFF','#009E49'],
};
const FLAG_URL = (code: string) => `https://flagcdn.com/w40/${code.toLowerCase()}.png`;

const toSubtleGradient = (colors: string[]) => {
  const stops = colors.map((c, i) => {
    const r=parseInt(c.slice(1,3),16), g=parseInt(c.slice(3,5),16), b=parseInt(c.slice(5,7),16);
    return `rgba(${r},${g},${b},0.18) ${(i/(colors.length-1))*100}%`;
  });
  return `linear-gradient(135deg,${stops.join(',')})`;
};

const container = { hidden:{opacity:0}, visible:{opacity:1,transition:{staggerChildren:0.08,delayChildren:0.1}} };
const item = { hidden:{opacity:0,x:-30,scale:0.9}, visible:{opacity:1,x:0,scale:1,transition:{duration:0.6,ease:[0.25,1,0.5,1] as const}} };

export const Markets: React.FC = () => {
  const { t } = useI18n();
  const m = t.markets;
  return (
    <section id="sahel" className="section section--dark">
      <div className="container">
        <motion.div className="section-head" initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:'-80px 0px'}} transition={{duration:0.8}}>
          <span className="eyebrow" style={{color:'var(--gold-400)'}}><span className="bar" />{m.eyebrow}</span>
          <h2 style={{color:'#fff'}}>{m.title} <span className="text-ital text-gold">{m.titleItal}</span></h2>
          <p>{m.intro}</p>
        </motion.div>
        <div className="sahel-grid">
          <motion.div className="sahel-map reveal" initial={{opacity:0,scale:0.85,rotateY:-15}} whileInView={{opacity:1,scale:1,rotateY:0}} viewport={{once:true}} transition={{duration:0.9,ease:'easeOut'}}>
            <img src="/assets/sahel-map.png" alt="West Africa & the Sahel" />
            <div className="sahel-map-fade" />
          </motion.div>
          <div>
            <motion.div initial="hidden" whileInView="visible" viewport={{once:true}} variants={container}>
              <motion.div className="sahel-subhead" variants={item}>
                <MapPin size={16} />{m.activeLabel}
              </motion.div>
              <motion.div className="sahel-countries" variants={container}>
                {m.active.map((c) => (
                  <motion.div key={c.code} className="country-card" variants={item} style={{background:toSubtleGradient(FLAG_COLORS[c.code]||['#2C3D58'])}}>
                    <img src={FLAG_URL(c.code)} alt={c.name} className="flag" loading="lazy" />
                    <div className="country-info">
                      <span className="country-name">{c.name}</span>
                      <span className="country-status active">{c.status}</span>
                    </div>
                    <TrendingUp size={14} className="trend-icon" />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{once:true}} variants={container} style={{marginTop:32}}>
              <motion.div className="sahel-subhead pending" variants={item}>
                <Target size={16} />{m.pendingLabel}
              </motion.div>
              <motion.div className="sahel-countries" variants={container}>
                {m.pending.map((c) => (
                  <motion.div key={c.code} className="country-card pending" variants={item} style={{background:toSubtleGradient(FLAG_COLORS[c.code]||['#2C3D58'])}}>
                    <img src={FLAG_URL(c.code)} alt={c.name} className="flag" loading="lazy" />
                    <div className="country-info">
                      <span className="country-name">{c.name}</span>
                      <span className="country-status">{c.status}</span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
