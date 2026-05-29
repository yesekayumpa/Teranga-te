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
  const bp = useBreakpoint();
  const isMobile = bp === 'mobile';
  const isDesktop = bp === 'desktop';
  const currentYear = new Date().getFullYear();
  const gridCols = isDesktop ? 'repeat(4,1fr)' : isMobile ? '1fr' : 'repeat(2,1fr)';

  return (
    <footer style={{position:'relative',backgroundColor:PALETTE.bg,color:PALETTE.text,paddingTop:isMobile?48:80,paddingBottom:40,borderTopLeftRadius:isMobile?24:48,borderTopRightRadius:isMobile?24:48,overflow:'hidden'}}>
      <div style={{position:'relative',zIndex:10,maxWidth:1280,margin:'0 auto',padding:isMobile?'0 16px':'0 24px'}}>
        <div style={{display:'grid',gridTemplateColumns:gridCols,gap:isMobile?32:48,marginBottom:32}}>

          {/* Colonne 1 : Logo + slogan + CTA + réseaux sociaux */}
          <ScrollReveal style={{display:'flex',flexDirection:'column',gap:24}}>
            <div style={{display:'flex',alignItems:'center',gap:8}}>
              <motion.div whileHover={{scale:1.05}} style={{backgroundColor:PALETTE.text,borderRadius:'50%',padding:6,display:'inline-flex',alignItems:'center',boxShadow:'0 4px 12px rgba(0,0,0,0.3)'}}>
                <img src="/assets/teranga-logo.png" alt="Teranga TE" style={{height:40,width:'auto'}}/>
              </motion.div>
              <span style={{fontSize:20,fontWeight:800,color:PALETTE.text,letterSpacing:'-0.5px'}}>TERANGA TECHNOLOGY & ENERGY</span>
            </div>
            <p style={{color:PALETTE.muted,fontSize:12,lineHeight:1.6,maxWidth:250}}>
              Votre partenaire intégré en Technologie, Énergie et Solutions Innovantes pour le Sahel.
            </p>
            <a href="#contact" style={{display:'inline-flex',alignItems:'center',gap:8,backgroundColor:PALETTE.primary,color:PALETTE.bg,padding:'12px 24px',borderRadius:999,fontWeight:700,fontSize:14,textDecoration:'none'}}>
              <Phone size={16}/> Contactez-nous
            </a>
            <div style={{display:'flex',gap:12,marginTop:8}}>
              {[Linkedin,Twitter,Facebook,Instagram].map((Icon,i)=>(
                <motion.a key={i} href="#" style={{width:36,height:36,backgroundColor:PALETTE.card,borderRadius:12,display:'flex',alignItems:'center',justifyContent:'center'}} whileHover={{scale:1.15,rotate:5}} whileTap={{scale:0.9}}>
                  <Icon size={16} color={PALETTE.muted}/>
                </motion.a>
              ))}
            </div>
          </ScrollReveal>

          {/* Colonne 2 : Navigation */}
          <ScrollReveal delay={1}>
            <FooterHeading label="NAVIGATION"/>
            <ul style={{listStyle:'none',padding:0,margin:0,display:'flex',flexDirection:'column',gap:12,fontSize:11,color:PALETTE.muted}}>
              <li><a href="#accueil">Accueil</a></li>
              <li><a href="#apropos">À propos</a></li>
              <li><a href="#expertises">Expertises</a></li>
              <li><a href="#references">Références</a></li>
              <li><a href="#sahel">Sahel</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#carrieres">Carrières</a></li>
            </ul>
          </ScrollReveal>

          {/* Colonne 3 : Expertises */}
          <ScrollReveal delay={2}>
            <FooterHeading label="NOS EXPERTISES"/>
            <ul style={{listStyle:'none',padding:0,margin:0,display:'flex',flexDirection:'column',gap:12,fontSize:11,color:PALETTE.muted}}>
              <li>ICT</li>
              <li>Énergie</li>
              <li>Énergies Renouvelables</li>
              <li>Contrôle Technique Lift</li>
            </ul>
          </ScrollReveal>

          {/* Colonne 4 : Contact */}
          <ScrollReveal delay={3}>
            <FooterHeading label="CONTACT"/>
            <ul style={{listStyle:'none',padding:0,margin:0,display:'flex',flexDirection:'column',gap:12,fontSize:11,color:PALETTE.muted}}>
              <li><a href="tel:+221773372628">+221 77 337 26 28</a></li>
              <li><a href="tel:+221338435927">+221 33 843 59 27</a></li>
              <li><a href="mailto:moussa.tine@teranga-te.com">moussa.tine@teranga-te.com</a></li>
              <li>3 Liberté 6 extension, Dakar</li>
              <li><a href="https://www.teranga-te.com" target="_blank">www.teranga-te.com</a></li>
            </ul>
          </ScrollReveal>

        </div>

        {/* Ligne décorative */}
        <motion.div style={{height:1,background:`linear-gradient(90deg,transparent,${PALETTE.primary},transparent)`,margin:'32px 0'}} initial={{scaleX:0}} whileInView={{scaleX:1}} viewport={{once:true}} transition={{duration:1,ease:'easeOut'}}/>

        {/* Copyright */}
        <motion.div style={{textAlign:'center',color:PALETTE.muted,fontSize:isMobile?9:10,fontWeight:500,letterSpacing:'0.1em',textTransform:'uppercase'}} initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} transition={{duration:0.5}}>
          <p style={{margin:0}}>&copy; {currentYear} TERANGA Technology & Energy</p>
        </motion.div>
      </div>
    </footer>
  );
};
