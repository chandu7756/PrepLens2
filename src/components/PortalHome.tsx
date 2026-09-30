import React, { useState } from 'react';
import { 
  Search, 
  Bot, 
  BookOpen, 
  Award, 
  FlaskConical, 
  ShieldCheck, 
  ArrowRight, 
  ExternalLink,
  Presentation,
  Scale
} from 'lucide-react';
import { UserRole, LanguageCode } from '../types/bis';
import { translations } from '../utils/translations';

interface PortalHomeProps {
  onNavigateTab: (tab: string) => void;
  onSearchQuery: (query: string) => void;
  userRole: UserRole;
  setUserRole: (role: UserRole) => void;
  language: LanguageCode;
}

export const PortalHome: React.FC<PortalHomeProps> = ({
  onNavigateTab,
  onSearchQuery,
  userRole,
  setUserRole,
  language,
}) => {
  const [searchInput, setSearchInput] = useState('');
  const t = translations[language]?.home || translations.en.home;

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchInput.trim()) {
      onSearchQuery(searchInput.trim());
      onNavigateTab('chat');
    }
  };

  const quickSearches = [
    { label: 'Packaged Drinking Water (IS 14543)', query: 'What are the mandatory requirements for packaged drinking water IS 14543?' },
    { label: 'Toy Safety QCO (IS 9873)', query: 'Are toys covered under mandatory QCO? What are the mechanical and chemical safety standards under IS 9873?' },
    { label: 'Gold Jewellery HUID Verification', query: 'How does 6-digit alphanumeric HUID hallmarking work for gold jewellery?' },
    { label: 'Domestic Plugs & Sockets (IS 1293)', query: 'What are the Scheme I ISI certification requirements for plugs and sockets under IS 1293:2019?' },
    { label: 'Lithium Batteries (IS 16046)', query: 'Which BIS CRS standard applies to secondary lithium battery packs for smartphones?' },
    { label: 'Solar PV Modules (IS 14286)', query: 'What are the MNRE and BIS CRS registration requirements for solar PV modules under IS 14286?' },
  ];

  return (
    <div className="space-y-16 py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Hero Section */}
      <section className="text-center space-y-6 pt-4 sm:pt-10 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs text-slate-400">
          <span className="w-2 h-2 rounded-full bg-amber-400"></span>
          <span>{t.badge}</span>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
          {t.heroTitle},{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-400 to-amber-500">
            {language === 'hi' ? 'मानक सरलीकृत।' : language === 'te' ? 'సులభతరమైన ప్రమాణాలు.' : language === 'ta' ? 'எளிமைப்படுத்தப்பட்ட தரநிலைகள்.' : language === 'mr' ? 'सोपी मानके.' : language === 'bn' ? 'সহজতর মানক।' : 'Intelligently Simplified.'}
          </span>
        </h1>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          {t.heroSubtitle}
        </p>

        {/* Central Search Form */}
        <div className="max-w-2xl mx-auto pt-2">
          <form
            onSubmit={handleSearchSubmit}
            className="flex items-center bg-slate-900 border border-slate-700/80 focus-within:border-amber-500/80 rounded-2xl p-1.5 shadow-2xl transition-all"
          >
            <div className="pl-3 text-slate-400">
              <Search className="w-5 h-5" />
            </div>
            <input
              type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder={t.searchPlaceholder}
              className="flex-1 bg-transparent px-3 py-3 text-sm sm:text-base text-white placeholder-slate-500 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm px-5 py-3 rounded-xl flex items-center gap-2 transition-all shrink-0"
            >
              <span>{t.searchButton}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Quick search chips */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-4 text-xs">
            <span className="text-slate-500 font-medium">{t.popularTags}</span>
            {quickSearches.slice(0, 4).map((s, idx) => (
              <button
                key={idx}
                onClick={() => {
                  onSearchQuery(s.query);
                  onNavigateTab('chat');
                }}
                className="bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 px-3 py-1 rounded-lg transition-colors"
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Key Stats Bar */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
        <div className="bg-slate-900/90 border border-slate-800/80 p-5 rounded-2xl text-center">
          <div className="text-2xl sm:text-3xl font-black text-white font-mono tabular-nums">{t.stats.standardsCount}</div>
          <div className="text-xs text-slate-400 mt-1 font-medium">{t.stats.standardsLabel}</div>
        </div>

        <div className="bg-slate-900/90 border border-slate-800/80 p-5 rounded-2xl text-center">
          <div className="text-2xl sm:text-3xl font-black text-amber-400 font-mono tabular-nums">{t.stats.qcoCount}</div>
          <div className="text-xs text-slate-400 mt-1 font-medium">{t.stats.qcoLabel}</div>
        </div>

        <div className="bg-slate-900/90 border border-slate-800/80 p-5 rounded-2xl text-center">
          <div className="text-2xl sm:text-3xl font-black text-emerald-400 font-mono tabular-nums">{t.stats.msmeRebate}</div>
          <div className="text-xs text-slate-400 mt-1 font-medium">{t.stats.msmeLabel}</div>
        </div>

        <div className="bg-slate-900/90 border border-slate-800/80 p-5 rounded-2xl text-center">
          <div className="text-2xl sm:text-3xl font-black text-sky-400 font-mono tabular-nums">{t.stats.groundedPct}</div>
          <div className="text-xs text-slate-400 mt-1 font-medium">{t.stats.groundedLabel}</div>
        </div>
      </section>

      {/* Five Core Operational Modules */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-slate-800/80 pb-4">
          <div>
            <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider">{t.modulesTitle}</span>
            <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">{t.modulesSubtitle}</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Card 1: SARTHI AI */}
          <div 
            onClick={() => onNavigateTab('chat')}
            className="bg-slate-900 border border-slate-800 hover:border-amber-500/50 rounded-2xl p-6 flex flex-col justify-between cursor-pointer transition-all hover:shadow-xl group"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:scale-105 transition-transform">
                <Bot className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                {t.cards.sarthiTitle}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {t.cards.sarthiDesc}
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-amber-400">
              <span>{t.cards.sarthiAction}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 2: Standards Catalog */}
          <div 
            onClick={() => onNavigateTab('standards')}
            className="bg-slate-900 border border-slate-800 hover:border-amber-500/50 rounded-2xl p-6 flex flex-col justify-between cursor-pointer transition-all hover:shadow-xl group"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-orange-500/15 border border-orange-500/30 flex items-center justify-center text-orange-400 group-hover:scale-105 transition-transform">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                {t.cards.standardsTitle}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {t.cards.standardsDesc}
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-orange-400">
              <span>{t.cards.standardsAction}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 3: Certification & Fee Calculator */}
          <div 
            onClick={() => onNavigateTab('schemes')}
            className="bg-slate-900 border border-slate-800 hover:border-amber-500/50 rounded-2xl p-6 flex flex-col justify-between cursor-pointer transition-all hover:shadow-xl group"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                {t.cards.schemesTitle}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {t.cards.schemesDesc}
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-emerald-400">
              <span>{t.cards.schemesAction}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 4: Testing Labs */}
          <div 
            onClick={() => onNavigateTab('labs')}
            className="bg-slate-900 border border-slate-800 hover:border-amber-500/50 rounded-2xl p-6 flex flex-col justify-between cursor-pointer transition-all hover:shadow-xl group"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                <FlaskConical className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                {t.cards.labsTitle}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {t.cards.labsDesc}
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-cyan-400">
              <span>{t.cards.labsAction}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 5: Citizen Verification */}
          <div 
            onClick={() => onNavigateTab('verify')}
            className="bg-slate-900 border border-slate-800 hover:border-amber-500/50 rounded-2xl p-6 flex flex-col justify-between cursor-pointer transition-all hover:shadow-xl group"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-400 group-hover:scale-105 transition-transform">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                {t.cards.verifyTitle}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {t.cards.verifyDesc}
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-purple-400">
              <span>{t.cards.verifyAction}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 6: Official BIS Portal */}
          <a 
            href="https://www.bis.gov.in"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-900 border border-slate-800 hover:border-amber-500/50 rounded-2xl p-6 flex flex-col justify-between cursor-pointer transition-all hover:shadow-xl group"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:scale-105 transition-transform">
                <ExternalLink className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                Official BIS Portal
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Direct access to official Government of India Bureau of Indian Standards services, Manakonline application forms, and Gazette notifications.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-amber-400">
              <span>bis.gov.in</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </a>
        </div>
      </section>

      {/* Trust & Regulatory Adjacency Banner */}
      <section className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 max-w-xl">
          <div className="flex items-center gap-2 text-xs text-amber-400 font-semibold uppercase tracking-wider">
            <Scale className="w-4 h-4" />
            <span>{t.statutoryTitle}</span>
          </div>
          <h3 className="text-xl font-bold text-white">
            {t.legalActs.bisActTitle}
          </h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            {t.legalActs.bisActDesc}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 shrink-0">
          <a
            href="https://www.bis.gov.in"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-1.5 transition-colors border border-slate-700"
          >
            <span>e-BIS Portal</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
          </a>
          <button
            onClick={() => onNavigateTab('standards')}
            className="px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold transition-all shadow-md shadow-amber-500/20"
          >
            {t.cards.standardsAction}
          </button>
        </div>
      </section>
    </div>
  );
};
