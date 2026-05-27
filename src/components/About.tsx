import React from 'react';
import { useI18n } from '../context/I18nContext';

export const About: React.FC = () => {
  const { t } = useI18n();
  const a = t.about;
  return (
    <section id="apropos" className="section section--cream">
      <div className="container">
        <div className="section-head reveal" data-reveal>
          <span className="eyebrow"><span className="bar" />{a.eyebrow}</span>
          <h2>{a.title}</h2>
          <div className="dot-divider" style={{ margin: '12px auto' }}><div className="d" /><div className="d" /><div className="d" /></div>
          <p>{a.intro}</p>
        </div>
        <div className="about-grid reveal" data-reveal>
          <div className="about-quote" style={{ borderTop: '4px solid var(--navy-900)' }}>
            <div style={{ width:36,height:36,borderRadius:10,background:'var(--gold-50)',display:'grid',placeItems:'center',marginBottom:16 }}>
              <svg width="18" height="14" viewBox="0 0 18 14" fill="none"><path d="M0 14V8.4C0 3.73 2.8 1.12 8.4 0l.84 1.68C6.72 2.38 5.46 3.5 4.9 5.6H7V14H0Zm11 0V8.4C11 3.73 13.8 1.12 19.4 0l.84 1.68C17.72 2.38 16.46 3.5 15.9 5.6H18V14h-7Z" fill="#B28A36"/></svg>
            </div>
            <div style={{ fontSize:10,fontWeight:800,letterSpacing:'.18em',textTransform:'uppercase',color:'var(--gold-600)',marginBottom:6 }}>{a.dgLabel}</div>
            {a.dgQuote.map((p, idx) => <p key={idx} style={idx > 0 ? { marginTop:12 } : {}}>{p}</p>)}
            <div className="who" style={{ marginTop:20,paddingTop:16,borderTop:'1px solid var(--line)' }}>
              <div className="av" style={{ width:48,height:48,borderRadius:'50%',overflow:'hidden',border:'2px solid var(--gold-500)',flexShrink:0 }}>
                <img src="/assets/team-papa-moussa.jpeg" alt="Papa Moussa TINE" style={{ width:'100%',height:'100%',objectFit:'cover' }} />
              </div>
              <div>
                <div className="name">Papa Moussa TINE</div>
                <div style={{ color:'var(--gold-600)',fontSize:12,fontWeight:700 }}>{a.dgRole}</div>
                <div className="role">{a.dgFounder}</div>
              </div>
            </div>
          </div>
          <div style={{ display:'flex',flexDirection:'column',gap:28 }}>
            <div style={{ paddingLeft:20,borderLeft:'3px solid var(--gold-500)' }}>
              <h3>{a.historyTitle}</h3>
              <p>{a.historyP1}</p>
              <p style={{ marginTop:12 }}>{a.historyP2}</p>
            </div>
            <div style={{ background:'var(--navy-900)',borderRadius:20,padding:'28px 32px',color:'#fff' }}>
              <div style={{ fontSize:10,fontWeight:800,letterSpacing:'.22em',textTransform:'uppercase',color:'var(--gold-500)',marginBottom:6 }}>{a.visionLabel}</div>
              <h3 style={{ fontSize:22,fontWeight:800,color:'#fff',marginBottom:10,letterSpacing:'-.02em' }}>{a.visionTitle}</h3>
              <p style={{ fontSize:13,color:'rgba(255,255,255,.65)',lineHeight:1.65,marginBottom:24 }}>{a.visionDesc}</p>
              <div style={{ display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:8,textAlign:'center' }}>
                {a.stats.map(({ v, l }) => (
                  <div key={l}>
                    <div style={{ fontSize:26,fontWeight:800,color:'var(--gold-400)',letterSpacing:'-.02em',lineHeight:1 }}>{v}</div>
                    <div style={{ fontSize:11,color:'rgba(255,255,255,.55)',marginTop:4 }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
