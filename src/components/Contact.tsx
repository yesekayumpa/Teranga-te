import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Mail, Send, ChevronLeft, ChevronRight, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { useI18n } from '../context/I18nContext';

const TERANGA_LAT = 14.7310;
const TERANGA_LNG = -17.4674;
const TERANGA_LABEL = 'Teranga Technology & Energy';
const TERANGA_ADDRESS = 'Rue LIB-12, Résidence Adja Coura, Liberté 6 Extension, Dakar';

const LeafletMap: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<any>(null);
  useEffect(() => {
    if (mapRef.current) return;
    if (!document.getElementById('leaflet-css')) {
      const link = document.createElement('link');
      link.id='leaflet-css'; link.rel='stylesheet';
      link.href='https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
      document.head.appendChild(link);
    }
    const loadLeaflet = () => {
      if ((window as any).L) { initMap(); return; }
      const script = document.createElement('script');
      script.src='https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
      script.onload=initMap; document.body.appendChild(script);
    };
    const initMap = () => {
      const L=(window as any).L;
      if (!containerRef.current) return;
      const map=L.map(containerRef.current,{center:[TERANGA_LAT,TERANGA_LNG],zoom:16,zoomControl:true,scrollWheelZoom:false});
      mapRef.current=map;
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{attribution:'© OpenStreetMap',maxZoom:19}).addTo(map);
      const icon=L.divIcon({html:`<div style="width:40px;height:40px;background:#C29941;border-radius:50% 50% 50% 0;transform:rotate(-45deg);border:3px solid #fff;box-shadow:0 4px 16px rgba(0,0,0,0.35);display:flex;align-items:center;justify-content:center;"><div style="transform:rotate(45deg);width:12px;height:12px;background:#fff;border-radius:50%;"></div></div>`,className:'',iconSize:[40,40],iconAnchor:[20,40],popupAnchor:[0,-44]});
      L.marker([TERANGA_LAT,TERANGA_LNG],{icon}).addTo(map).bindPopup(`<div style="font-family:system-ui,sans-serif;padding:4px 2px;min-width:200px;"><div style="font-weight:800;font-size:14px;color:#1a2740;margin-bottom:4px;">${TERANGA_LABEL}</div><div style="font-size:12px;color:#6b7280;line-height:1.5;">${TERANGA_ADDRESS}</div><a href="https://www.google.com/maps?q=${TERANGA_LAT},${TERANGA_LNG}" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:4px;margin-top:10px;font-size:11px;font-weight:700;color:#C29941;text-decoration:none;">Open in Google Maps ↗</a></div>`,{maxWidth:260}).openPopup();
    };
    loadLeaflet();
    return () => { if (mapRef.current) { mapRef.current.remove(); mapRef.current=null; } };
  }, []);
  return <div ref={containerRef} style={{width:'100%',height:'100%',minHeight:320}} />;
};

export const Contact: React.FC = () => {
  const { t } = useI18n();
  const c = t.contact;
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState(1);
  const next = () => { setDirection(1); setStep((s) => Math.min(s+1,4)); };
  const back = () => { setDirection(-1); setStep((s) => Math.max(s-1,1)); };
  const variants = {
    enter:(dir:number)=>({x:dir>0?200:-200,opacity:0}),
    center:{x:0,opacity:1},
    exit:(dir:number)=>({x:dir<0?200:-200,opacity:0}),
  };
  const mapsLink=`https://www.google.com/maps?q=${TERANGA_LAT},${TERANGA_LNG}`;

  return (
    <section id="contact" className="section section--cream">
      <div className="container">
        <motion.div className="section-head" initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:'-80px 0px'}} transition={{duration:0.8}}>
          <span className="eyebrow"><span className="bar" />{c.eyebrow}</span>
          <h2>{c.title} <span className="text-ital text-gold">{c.titleItal}</span></h2>
          <p>{c.intro}</p>
        </motion.div>
        <motion.div className="contact-card" initial={{opacity:0,y:40}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.8,delay:0.1}}>
          <div className="contact-left">
            <motion.h3 initial={{opacity:0,x:-20}} whileInView={{opacity:1,x:0}} transition={{delay:0.2}} style={{fontSize:28,marginBottom:16,fontWeight:800}}>{c.leftTitle}</motion.h3>
            <motion.p initial={{opacity:0,x:-20}} whileInView={{opacity:1,x:0}} transition={{delay:0.3}} style={{color:'rgba(255,255,255,0.7)',fontSize:15,lineHeight:1.7}}>{c.leftDesc}</motion.p>
            <div className="contact-info">
              {[{icon:<MapPin size={20}/>,label:c.addressLabel,value:TERANGA_ADDRESS},{icon:<Phone size={20}/>,label:c.phoneLabel,value:'+221 77 337 26 28'},{icon:<Mail size={20}/>,label:c.emailLabel,value:'contact@teranga-te.com'}].map((item,idx)=>(
                <motion.div key={item.label} className="item" initial={{opacity:0,x:-20}} whileInView={{opacity:1,x:0}} transition={{delay:0.4+idx*0.1}}>
                  <div className="ic">{item.icon}</div>
                  <div><div className="lbl">{item.label}</div><div className="val">{item.value}</div></div>
                </motion.div>
              ))}
            </div>
            <motion.div className="contact-247" initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} transition={{delay:0.6}}>
              <div style={{fontWeight:800,color:'#fff',fontSize:16}}>{c.support247Title}</div>
              <p style={{color:'rgba(255,255,255,0.6)',fontSize:13,marginTop:8,lineHeight:1.6}}>{c.support247Desc}</p>
              <div className="live"><span className="d"/>{c.supportLive}</div>
            </motion.div>
          </div>
          <div className="contact-right">
            <div className="progress-bar">{[1,2,3].map((n)=><div key={n} className={`seg ${step>=n?'active':''}`}/>)}</div>
            <AnimatePresence mode="wait" custom={direction}>
              {step===1&&<motion.div key="step1" custom={direction} variants={variants} initial="enter" animate="center" exit="exit">
                <h3 style={{fontSize:26,marginBottom:28,fontWeight:700}}>{c.step1Title}</h3>
                <div className="form-field"><label>{c.step1Name}</label><input type="text" placeholder={c.step1NamePh}/></div>
                <div className="form-field"><label>{c.step1Company}</label><input type="text" placeholder={c.step1CompanyPh}/></div>
                <div className="form-field"><label>{c.step1Email}</label><input type="email" placeholder={c.step1EmailPh}/></div>
                <motion.button className="btn btn--gold" style={{width:'100%',justifyContent:'center',marginTop:12}} onClick={next} whileHover={{scale:1.02}} whileTap={{scale:0.98}}>{c.btnNext} <ChevronRight size={18}/></motion.button>
              </motion.div>}
              {step===2&&<motion.div key="step2" custom={direction} variants={variants} initial="enter" animate="center" exit="exit">
                <h3 style={{fontSize:26,marginBottom:28,fontWeight:700}}>{c.step2Title}</h3>
                <div className="form-field"><label>{c.step2Domain}</label><select>{c.domains.map(d=><option key={d}>{d}</option>)}</select></div>
                <div className="form-field"><label>{c.step2Formula}</label><select>{c.formulas.map(f=><option key={f}>{f}</option>)}</select></div>
                <div className="form-row">
                  <motion.button className="btn-back" onClick={back} whileHover={{x:-4}} whileTap={{scale:0.95}}><ChevronLeft size={20}/></motion.button>
                  <motion.button className="btn btn--gold" style={{flex:1,justifyContent:'center'}} onClick={next} whileHover={{scale:1.02}} whileTap={{scale:0.98}}>{c.btnNext} <ChevronRight size={18}/></motion.button>
                </div>
              </motion.div>}
              {step===3&&<motion.div key="step3" custom={direction} variants={variants} initial="enter" animate="center" exit="exit">
                <h3 style={{fontSize:26,marginBottom:28,fontWeight:700}}>{c.step3Title}</h3>
                <div className="form-field"><label>{c.step3Desc}</label><textarea rows={6} placeholder={c.step3DescPh}/></div>
                <div className="form-row">
                  <motion.button className="btn-back" onClick={back} whileHover={{x:-4}} whileTap={{scale:0.95}}><ChevronLeft size={20}/></motion.button>
                  <motion.button className="btn btn--gold" style={{flex:1,justifyContent:'center'}} onClick={next} whileHover={{scale:1.02}} whileTap={{scale:0.98}}>{c.btnSend} <Send size={18}/></motion.button>
                </div>
              </motion.div>}
              {step===4&&<motion.div key="step4" custom={direction} variants={variants} initial="enter" animate="center" exit="exit" className="success-state">
                <motion.div className="check" initial={{scale:0}} animate={{scale:1}} transition={{type:'spring',stiffness:200,delay:0.1}}><CheckCircle2 size={44}/></motion.div>
                <h3 style={{fontSize:30,marginTop:16}}>{c.successTitle}</h3>
                <p style={{color:'var(--slate)',maxWidth:360,margin:'12px auto 0',lineHeight:1.6}}>{c.successDesc}</p>
                <motion.button onClick={()=>setStep(1)} style={{marginTop:24,color:'var(--gold-600)',fontWeight:700,fontSize:14,letterSpacing:'0.12em',textTransform:'uppercase',background:'none',border:'none',cursor:'pointer'}} whileHover={{scale:1.05}}>{c.newRequest}</motion.button>
              </motion.div>}
            </AnimatePresence>
          </div>
        </motion.div>
        <motion.div className="maps-block reveal" initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.7,delay:0.2}}>
          <div className="maps-head">
            <span className="ic"><MapPin size={18}/></span>
            <div><div className="t">{c.mapsLabel}</div><div className="a">{TERANGA_LABEL} — {TERANGA_ADDRESS}</div></div>
            <motion.a className="maps-cta" href={mapsLink} target="_blank" rel="noopener noreferrer" whileHover={{scale:1.03}} whileTap={{scale:0.97}}>
              {c.mapsOpen}<ArrowUpRight size={14}/>
            </motion.a>
          </div>
          <div className="maps-embed"><LeafletMap/></div>
        </motion.div>
      </div>
    </section>
  );
};
