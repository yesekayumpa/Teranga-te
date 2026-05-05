import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowRight,
  Info,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Cpu,
  Battery,
  Sun,
  Wrench,
} from "lucide-react";
import { cn } from "../lib/utils";
import { Link } from "react-router-dom";

const SECTORS = [
  {
    id: 1,
    name: "Agriculture & Agribusiness",
    category: "Production & Pompage",
    desc: "Solutions de pompage solaire et supervision technique des exploitations agricoles pour une autonomie énergétique totale.",
    image:
      "https://images.unsplash.com/photo-1592419044706-39796d40f98c?auto=format&fit=crop&q=80&w=1000",
    solutions: [
      "Pompage Solaire PV",
      "Optimisation Énergétique",
      "Supervision Distante",
    ],
    icon: <Sun />,
    specs: [
      "Puissance: 1kW - 500kW",
      "Support: Mobile 24/7",
      "Garantie: Matériel & Performance",
    ],
  },
  {
    id: 2,
    name: "Santé & Pharma",
    category: "Continuité Critique",
    desc: "Sécurisation de la chaîne du froid et infrastructures IT hospitalières garantissant la disponibilité des soins.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1000",
    solutions: [
      "Backup Énergétique Sanitaire",
      "Datacenters Hospitaliers",
      "Gestion de la chaîne du froid",
    ],
    icon: <ShieldCheck />,
    specs: [
      "Disponibilité: 99.9%",
      "Temps de réponse: < 2h",
      "Certification: Santé",
    ],
  },
  {
    id: 3,
    name: "Mine & Industries",
    category: "Infrastructures Robustes",
    desc: "Réseaux distants, énergie de forte puissance et maintenance industrielle pour les sites de production isolés.",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000",
    solutions: [
      "Réseaux VSAT & Fibre",
      "Maintenance Groupes Électrogènes",
      "Supervision technique",
    ],
    icon: <Zap />,
    specs: [
      "SLA: 98%+",
      "Intervention: Sites isolés",
      "Experts: Senior certifiés",
    ],
  },
  {
    id: 4,
    name: "Services & Gouvernance",
    category: "Digitalisation",
    desc: "Services managés pour les institutions et déploiement de solutions ICT sécurisées pour le secteur public.",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1000",
    solutions: [
      "Audit de Cybersécurité",
      "Déploiement ICT Étatique",
      "Support Managé Dédié",
    ],
    icon: <Cpu />,
    specs: [
      "Conformité: Internationale",
      "Sécurité: End-to-End",
      "Reporting: KPI Mensuels",
    ],
  },
];

const CATEGORIES = [
  "Tous",
  "Agriculture & Agribusiness",
  "Santé & Pharma",
  "Mine & Industries",
  "Services & Gouvernance",
];

export const ProductsPage = () => {
  const [activeCategory, setActiveCategory] = useState("Tous");
  const [selectedSector, setSelectedSector] = useState<
    (typeof SECTORS)[0] | null
  >(null);

  const filteredSectors =
    activeCategory === "Tous"
      ? SECTORS
      : SECTORS.filter((p) => p.name === activeCategory);

  return (
    <div className="pt-32 pb-20">
      {/* Header */}
      <section className="section-padding !py-0 mb-16">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-emerald-700 font-bold text-sm uppercase tracking-[0.3em] mb-4 block">
            SECTEURS D'INTERVENTION
          </span>
          <h1 className="text-5xl lg:text-6xl font-display font-extrabold text-slate-900 dark:text-white mb-6">
            Une Expertise{" "}
            <span className="text-gradient from-emerald-600 to-teal-500">
              Multisectorielle
            </span>
            .
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-lg">
            Nous adaptons nos solutions technologiques et énergétiques aux
            besoins spécifiques de chaque industrie.
          </p>
        </div>
      </section>

      {/* Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-16 px-6">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={cn(
              "px-8 py-3 rounded-full font-bold transition-all duration-300 border-2 text-[10px] uppercase tracking-widest",
              activeCategory === cat
                ? "bg-emerald-700 border-emerald-700 text-white shadow-lg shadow-emerald-700/20"
                : "border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:border-emerald-600 hover:text-emerald-600",
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <section className="section-padding !py-0 grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <AnimatePresence mode="popLayout">
          {filteredSectors.map((sector) => (
            <motion.div
              layout
              key={sector.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white dark:bg-slate-900 rounded-[40px] overflow-hidden shadow-xl shadow-slate-200/50 dark:shadow-black/50 border border-slate-100 dark:border-slate-800 group hover:border-emerald-600 transition-all duration-300"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={sector.image}
                  alt={sector.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-6 left-6 px-4 py-2 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md rounded-full text-[10px] font-bold text-emerald-700 shadow-lg uppercase tracking-widest">
                  {sector.category}
                </div>
              </div>
              <div className="p-10">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white leading-tight">
                    {sector.name}
                  </h3>
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-8 leading-relaxed">
                  {sector.desc}
                </p>
                <div className="flex gap-4">
                  <button
                    onClick={() => setSelectedSector(sector)}
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-emerald-700 text-white py-4 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-emerald-600 transition-colors"
                  >
                    DÉCOUVRIR LES SOLUTIONS <Info className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </section>

      {/* Sector Modal */}
      <AnimatePresence>
        {selectedSector && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedSector(null)}
              className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-white dark:bg-slate-900 w-full max-w-4xl rounded-[50px] overflow-hidden shadow-2xl"
            >
              <div className="grid md:grid-cols-2">
                <div className="h-80 md:h-full">
                  <img
                    src={selectedSector.image}
                    alt={selectedSector.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-10 lg:p-16">
                  <button
                    onClick={() => setSelectedSector(null)}
                    className="absolute top-8 right-8 w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 hover:bg-slate-200 transition-colors"
                  >
                    ✕
                  </button>
                  <span className="text-emerald-700 font-bold text-sm uppercase tracking-widest mb-4 block">
                    {selectedSector.category}
                  </span>
                  <h2 className="text-4xl font-display font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                    {selectedSector.name}
                  </h2>
                  <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed text-sm">
                    {selectedSector.desc}
                  </p>

                  <div className="space-y-6 mb-10">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-700">
                        {React.cloneElement(
                          selectedSector.icon as React.ReactElement,
                          { className: "w-5 h-5" },
                        )}
                      </div>
                      <div>
                        <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                          Solutions Clés
                        </h4>
                        <p className="text-[11px] font-bold text-slate-900 dark:text-white">
                          {selectedSector.solutions.join(" • ")}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-700">
                        <Wrench className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                          Engagement Technique
                        </h4>
                        <ul className="text-[11px] text-slate-600 dark:text-slate-400">
                          {selectedSector.specs.map((spec, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <div className="w-1 h-1 bg-emerald-600 rounded-full" />
                              {spec}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-3 bg-emerald-700 text-white w-full py-5 rounded-2xl font-bold uppercase tracking-widest justify-center hover:bg-emerald-600 transition-colors"
                  >
                    AUDIT TECHNIQUE SECTEUR <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
