import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Linkedin, Twitter, Facebook, Instagram, Phone } from 'lucide-react';
import { useI18n } from '../context/I18nContext';

const PALETTE = {
  bg:'#2C3D58', primary:'#C29941', text:'#FAF7F2',
  muted:'rgba(250,247,242,0.7)', border:'rgba(250,247,242,0.15)', card:'rgba(250,247,242,0.08)',
};

function useBreakpoint() {
  const get=()=>{ if(typeof window==='undefined') return 'desktop'; if(window.innerWidth<640) return 'mobile' as const; if(window.innerWidth<1024) return 'tablet' as const; return 'desktop' as const; };
  const [bp,setBp]=useState<'mobile'|'tablet'|'desktop'>(get);
  useEffect(()=>{ const h=()=>setBp(get()); window.addEventListener('resize',h); return()=>window.removeEventListener('resize',h); },[]);
  return bp;
}

const fadeUp={ hidden:{opacity:0,y:24,filter:'blur(4px)'}, visible:(i=0)=>({opacity:1,y:0,filter:'blur(0px)',transition:{duration:0.6,ease:[0.22,1,0.36,1] as const,delay:i*0.08}}) };
const ScrollReveal=({children,delay=0,style}:{children:React.ReactNode;delay?:number;style?:React.CSSProperties})=>(
  <motion.div style={style} initial="hidden" whileInView="visible" viewport={{once:true,margin:'-40px 0px'}} custom={delay} variants={fadeUp}>{children}</motion.div>
);
const FooterHeading=({label}:{label:string})=>(
  <h4 style={{fontWeight:700,fontSize:14,marginBottom:24,textTransform:'uppercase',letterSpacing:'0.2em',color:PALETTE.text,position:'relative',display:'inline-block'}}>
    {label}
    <motion.span style={{position:'absolute',bottom:0,left:0,height:2,backgroundColor:PALETTE.primary,borderRadius:2}} initial={{width:0}} whileInView={{width:'60%'}} viewport={{once:true}} transition={{duration:0.6,delay:0.3}}/>
  </h4>
);

export const Footer: React.FC = () => {
  const { t } = useI18n();
  const f = t.footer;
  const nav = t.nav;
  const bp=useBreakpoint();
  const isMobile=bp==='mobile', isDesktop=bp==='desktop';
  const currentYear=new Date().getFullYear();
  const gridCols=isDesktop?'repeat(4,1fr)':isMobile?'1fr':'repeat(2,1fr)';
  const delay=(n:number)=>isDesktop?n:0;

  const NAV_ITEMS=[
    {name:nav.home,to:'#accueil'},{name:nav.about,to:'#apropos'},
    {name:nav.expertises,to:'#expertises'},{name:nav.offers,to:'#offres'},
    {name:nav.references,to:'#references'},{name:nav.sahel,to:'#sahel'},
    {name:nav.contact,to:'#contact'},{name:nav.careers,to:'#carrieres'},
  ];

  return (
    <footer style={{position:'relative',backgroundColor:PALETTE.bg,color:PALETTE.text,paddingTop:isMobile?48:80,paddingBottom:40,borderTopLeftRadius:isMobile?24:48,borderTopRightRadius:isMobile?24:48,overflow:'hidden'}}>
      {!isMobile&&<div style={{position:'absolute',inset:0,pointerEvents:'none'}}>
        <div style={{position:'absolute',inset:0,opacity:0.04,backgroundImage:`url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`}}/>
        <svg style={{width:'100%',height:'100%',position:'absolute',inset:0,opacity:0.08}} viewBox="0 0 1200 600" fill="none">
          <motion.path d="M0 400 L200 400 L250 350 L400 350 L450 450 L650 450 L700 300 L900 300 L950 400 L1200 400" stroke={PALETTE.primary} strokeWidth="1.5" strokeDasharray="50 70" strokeLinecap="round" initial={{strokeDashoffset:100}} animate={{strokeDashoffset:0}} transition={{duration:5,repeat:Infinity,ease:'linear'}}/>
          <motion.path d="M0 200 L150 200 L200 250 L350 250 L400 150 L600 150 L650 250 L850 250 L900 200 L1200 200" stroke={PALETTE.primary} strokeWidth="1.5" strokeDasharray="60 80" strokeLinecap="round" initial={{strokeDashoffset:-120}} animate={{strokeDashoffset:0}} transition={{duration:6,repeat:Infinity,ease:'linear',delay:1}}/>
        </svg>
      </div>}
      {!isMobile&&<div style={{position:'absolute',inset:0,pointerEvents:'none',zIndex:0}}>
        <motion.div style={{position:'absolute',top:'25%',left:'25%',width:1,height:128,background:PALETTE.primary}} animate={{height:[0,128,0],opacity:[0,0.3,0]}} transition={{duration:2,repeat:Infinity,repeatDelay:5,ease:'easeInOut'}}/>
        <motion.div style={{position:'absolute',top:'33%',right:'33%',width:1,height:96,background:PALETTE.primary}} animate={{height:[0,96,0],opacity:[0,0.25,0]}} transition={{duration:1.5,repeat:Infinity,repeatDelay:7,ease:'easeInOut'}}/>
      </div>}
      <div style={{position:'relative',zIndex:10,maxWidth:1280,margin:'0 auto',padding:isMobile?'0 16px':'0 24px'}}>
        <div style={{display:'grid',gridTemplateColumns:gridCols,gap:isMobile?32:48,marginBottom:32}}>
          <ScrollReveal style={{display:'flex',flexDirection:'column',gap:24}}>
            <div style={{display:'flex',alignItems:'center',gap:8}}>
              <motion.div whileHover={{scale:1.05}} style={{backgroundColor:PALETTE.text,borderRadius:'50%',padding:6,display:'inline-flex',alignItems:'center',boxShadow:'0 4px 12px rgba(0,0,0,0.3)'}}>
                <img src="/assets/teranga-logo.png" alt="Teranga TE" style={{height:40,width:'auto'}}/>
              </motion.div>
              <span style={{fontSize:20,fontFamily:'system-ui,sans-serif',fontWeight:800,color:PALETTE.text,letterSpacing:'-0.5px'}}>TERANGA TE</span>
            </div>
            <p style={{color:PALETTE.muted,fontSize:12,lineHeight:1.6,maxWidth:250}}>{f.tagline}</p>
            <a href="#contact" style={{display:'inline-flex',alignItems:'center',gap:8,backgroundColor:PALETTE.primary,color:PALETTE.bg,padding:'12px 24px',borderRadius:999,fontWeight:700,fontSize:14,textDecoration:'none',alignSelf:'flex-start',transition:'background-color 0.2s'}} onMouseEnter={(e)=>(e.currentTarget.style.backgroundColor='#b08832')} onMouseLeave={(e)=>(e.currentTarget.style.backgroundColor=PALETTE.primary)}>
              <Phone size={16}/>{f.contactCta}
            </a>
            <div style={{display:'flex',gap:12,marginTop:8}}>
              {[Linkedin,Twitter,Facebook,Instagram].map((Icon,i)=>(
                <motion.a key={i} href="#" style={{width:36,height:36,backgroundColor:PALETTE.card,borderRadius:12,display:'flex',alignItems:'center',justifyContent:'center',position:'relative',overflow:'hidden'}} whileHover={{scale:1.15,rotate:5}} whileTap={{scale:0.9}}>
                  <Icon size={16} color={PALETTE.muted}/>
                </motion.a>
              ))}
            </div>
          </ScrollReveal>
          <ScrollReveal delay={delay(1)}>
            <FooterHeading label={f.navLabel}/>
            <ul style={{listStyle:'none',padding:0,margin:0,display:'grid',gridTemplateColumns:isMobile?'1fr':'repeat(2,1fr)',gap:12}}>
              {NAV_ITEMS.map((item)=>(
                <li key={item.name} style={{fontSize:11,color:PALETTE.muted}}>
                  <a href={item.to} style={{color:'inherit',textDecoration:'none',display:'flex',alignItems:'center',gap:6,transition:'color 0.2s'}} onMouseEnter={(e)=>(e.currentTarget.style.color=PALETTE.primary)} onMouseLeave={(e)=>(e.currentTarget.style.color='')}>
                    <ArrowRight size={12}/>{item.name}
                  </a>
                </li>
              ))}
            </ul>
          </ScrollReveal>
          <ScrollReveal delay={delay(2)}>
            <FooterHeading label={f.expertisesLabel}/>
            <ul style={{listStyle:'none',padding:0,margin:0,display:'flex',flexDirection:'column',gap:12,fontSize:11,color:PALETTE.muted}}>
              {f.expertisesList.map((item)=>(
                <li key={item}><a href="#expertises" style={{color:'inherit',textDecoration:'none',transition:'color 0.2s'}} onMouseEnter={(e)=>(e.currentTarget.style.color=PALETTE.primary)} onMouseLeave={(e)=>(e.currentTarget.style.color='')}>{item}</a></li>
              ))}
            </ul>
          </ScrollReveal>
          <ScrollReveal delay={delay(3)}>
            <FooterHeading label={f.watchLabel}/>
            <p style={{color:PALETTE.muted,fontSize:11,marginBottom:16}}>{f.watchDesc}</p>
            <div style={{display:'flex',gap:8}}>
              <motion.input type="email" placeholder={f.emailPh} style={{flex:1,minWidth:0,backgroundColor:PALETTE.card,border:`1px solid ${PALETTE.border}`,borderRadius:12,padding:'8px 16px',fontSize:11,outline:'none',color:PALETTE.text}} whileFocus={{boxShadow:`0 0 0 2px ${PALETTE.primary}4d`}}/>
              <motion.button style={{flexShrink:0,backgroundColor:PALETTE.primary,border:'none',borderRadius:12,padding:10,display:'flex',alignItems:'center',justifyContent:'center',cursor:'pointer'}} whileHover={{scale:1.1}} whileTap={{scale:0.9}}>
                <ArrowRight size={18} color={PALETTE.bg}/>
              </motion.button>
            </div>
          </ScrollReveal>
        </div>
        <motion.div style={{height:1,background:`linear-gradient(90deg,transparent,${PALETTE.primary},transparent)`,margin:'32px 0',transformOrigin:'left',scaleX:0}} initial={{scaleX:0}} whileInView={{scaleX:1}} viewport={{once:true}} transition={{duration:1,ease:'easeOut'}}/>
        <motion.div style={{textAlign:'center',color:PALETTE.muted,fontSize:isMobile?9:10,fontWeight:500,letterSpacing:'0.1em',textTransform:'uppercase'}} initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} transition={{duration:0.5}}>
          <p style={{margin:0}}>&copy; {currentYear} {f.copyright}</p>
        </motion.div>
        {!isMobile&&<motion.div style={{position:'absolute',bottom:0,right:0,width:128,height:128,pointerEvents:'none'}} animate={{opacity:[0.05,0.15,0.05]}} transition={{duration:3,repeat:Infinity,ease:'easeInOut'}}>
          <svg viewBox="0 0 24 24" fill="none" stroke={PALETTE.primary} strokeWidth="2" style={{width:'100%',height:'100%'}}><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </motion.div>}
      </div>
    </footer>
  );
};
