import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Filter, 
  BookOpen, 
  AlertCircle, 
  CheckCircle2, 
  ExternalLink, 
  Clock, 
  Layers, 
  FlaskConical, 
  Building, 
  Sparkles,
  ArrowRight,
  ShieldCheck,
  ChevronRight,
  FileText
} from 'lucide-react';
import { BIS_STANDARDS } from '../data/bisStandards';
import { IndianStandard, LanguageCode } from '../types/bis';
import { translations } from '../utils/translations';

interface StandardsExplorerProps {
  onAskAboutStandard: (query: string) => void;
  selectedStandardFromOutside?: IndianStandard | null;
  language: LanguageCode;
}

export const StandardsExplorer: React.FC<StandardsExplorerProps> = ({
  onAskAboutStandard,
  selectedStandardFromOutside,
  language,
}) => {
  const t = translations[language]?.standards || translations.en.standards;
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [mandatoryOnly, setMandatoryOnly] = useState(false);
  const [activeModalStandard, setActiveModalStandard] = useState<IndianStandard | null>(
    selectedStandardFromOutside || null
  );

  const categories = [
    'All',
    'Food & Agriculture',
    'Electronics & IT',
    'Civil & Construction',
    'Electrical & Appliances',
    'Toys & Safety',
    'Precious Metals & Hallmarking',
    'Renewable Energy',
    'Mechanical & Automotive',
  ];

  const filteredStandards = useMemo(() => {
    return BIS_STANDARDS.filter((std) => {
      const matchesCategory = selectedCategory === 'All' || std.category === selectedCategory;
      const matchesMandatory = !mandatoryOnly || std.isMandatoryQCO;
      const q = searchQuery.toLowerCase().trim();

      const matchesSearch = !q || (
        std.isNumber.toLowerCase().includes(q) ||
        std.title.toLowerCase().includes(q) ||
        std.scope.toLowerCase().includes(q) ||
        std.category.toLowerCase().includes(q) ||
        std.keyTests.some(t => t.toLowerCase().includes(q)) ||
        (std.qcoDetails && std.qcoDetails.orderName.toLowerCase().includes(q))
      );

      return matchesCategory && matchesMandatory && matchesSearch;
    });
  }, [searchQuery, selectedCategory, mandatoryOnly]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-6">
      {/* Title & Stats Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-sm">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-wider mb-1">
            <BookOpen className="w-4 h-4" />
            National Standards Repository
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-white">
            {t.title}
          </h1>
          <p className="text-sm text-slate-400 mt-1 max-w-2xl">
            {t.subtitle}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="bg-slate-950 border border-slate-800 px-4 py-3 rounded-xl text-center">
            <div className="text-2xl font-black text-white">22,000+</div>
            <div className="text-[11px] text-slate-400 uppercase">{t.all} BIS Standards</div>
          </div>
          <div className="bg-slate-950 border border-amber-500/30 px-4 py-3 rounded-xl text-center">
            <div className="text-2xl font-black text-amber-400">700+</div>
            <div className="text-[11px] text-slate-400 uppercase">{t.mandatoryQco}</div>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-xl space-y-4">
        <div className="flex flex-col sm:flex-row gap-3">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.searchPlaceholder}
              className="w-full bg-slate-950 border border-slate-700/80 pl-10 pr-4 py-2.5 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
            />
          </div>

          {/* Mandatory QCO Toggle */}
          <button
            onClick={() => setMandatoryOnly(!mandatoryOnly)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold border transition-all shrink-0 ${
              mandatoryOnly
                ? 'bg-red-950 text-red-300 border-red-800/80 shadow-sm'
                : 'bg-slate-950 text-slate-300 border-slate-700/80 hover:bg-slate-800'
            }`}
          >
            <ShieldCheck className="w-4 h-4 text-red-400" />
            <span>{t.mandatoryFilter}</span>
          </button>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                selectedCategory === cat
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20'
                  : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Standards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredStandards.map((std) => (
          <div
            key={std.id}
            className="bg-slate-900 border border-slate-800 hover:border-amber-500/40 rounded-2xl p-5 flex flex-col justify-between transition-all hover:shadow-xl group"
          >
            <div>
              {/* Header Badges */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="font-mono text-sm font-black text-amber-400 group-hover:text-amber-300">
                  {std.isNumber}
                </span>
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider ${
                  std.isMandatoryQCO
                    ? 'bg-red-950/80 text-red-400 border border-red-800/80'
                    : 'bg-slate-800 text-slate-400 border border-slate-700'
                }`}>
                  {std.isMandatoryQCO ? t.mandatoryQco : t.voluntary}
                </span>
              </div>

              {/* Title & Scope */}
              <h3 className="font-bold text-white text-base leading-snug line-clamp-2 mb-2">
                {std.title}
              </h3>
              <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed mb-4">
                {std.scope}
              </p>

              {/* Metadata Tags */}
              <div className="space-y-1.5 text-xs text-slate-300 bg-slate-950/60 p-3 rounded-xl border border-slate-800/80 mb-4">
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Scheme:</span>
                  <span className="font-medium text-slate-200 font-mono">{std.scheme}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Category:</span>
                  <span className="font-medium text-slate-300">{std.category}</span>
                </div>
                {std.qcoDetails && (
                  <div className="flex items-center justify-between text-red-300/90 pt-1 border-t border-slate-800">
                    <span className="text-slate-500">Ministry:</span>
                    <span className="font-medium truncate max-w-[170px]" title={std.qcoDetails.ministry}>
                      {std.qcoDetails.ministry}
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-3 border-t border-slate-800 flex items-center justify-between gap-2">
              <button
                onClick={() => setActiveModalStandard(std)}
                className="text-xs text-slate-300 hover:text-white font-medium flex items-center gap-1 py-1 px-2 rounded-lg hover:bg-slate-800 transition-colors"
              >
                <FileText className="w-3.5 h-3.5 text-amber-400" />
                <span>{t.viewDetails}</span>
              </button>

              <button
                onClick={() => onAskAboutStandard(`Tell me the complete BIS compliance requirements, testing parameters, and license steps for ${std.isNumber} (${std.title})`)}
                className="text-xs bg-amber-500/15 hover:bg-amber-500/25 text-amber-300 border border-amber-500/30 px-3 py-1.5 rounded-lg font-semibold flex items-center gap-1.5 transition-all"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>{t.consultSarthi}</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredStandards.length === 0 && (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-12 text-center max-w-lg mx-auto">
          <BookOpen className="w-12 h-12 text-slate-600 mx-auto mb-3" />
          <h3 className="text-lg font-bold text-white mb-1">No matching standards found</h3>
          <p className="text-xs text-slate-400 mb-4">
            Try adjusting your search query, or ask SARTHI conversational assistant to identify related Indian Standards across the full national database.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('All');
              setMandatoryOnly(false);
            }}
            className="text-xs bg-slate-800 text-slate-200 px-4 py-2 rounded-lg hover:bg-slate-700"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Modal for Detailed Standard Inspection */}
      {activeModalStandard && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-slate-900 border border-slate-700 rounded-3xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl relative space-y-6 my-8">
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 border-b border-slate-800 pb-4">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="font-mono text-lg font-black text-amber-400">
                    {activeModalStandard.isNumber}
                  </span>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase ${
                    activeModalStandard.isMandatoryQCO
                      ? 'bg-red-950 text-red-400 border border-red-800'
                      : 'bg-slate-800 text-slate-400'
                  }`}>
                    {activeModalStandard.isMandatoryQCO ? 'Mandatory QCO' : 'Voluntary'}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">
                    Year: {activeModalStandard.year}
                  </span>
                </div>
                <h2 className="text-xl font-bold text-white">
                  {activeModalStandard.title}
                </h2>
              </div>

              <button
                onClick={() => setActiveModalStandard(null)}
                className="text-slate-400 hover:text-white p-2 rounded-xl hover:bg-slate-800"
              >
                ✕
              </button>
            </div>

            {/* Scope */}
            <div>
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                Scope & Application
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed bg-slate-950/60 p-4 rounded-xl border border-slate-800">
                {activeModalStandard.scope}
              </p>
            </div>

            {/* Quality Control Order Gazette Details if Mandatory */}
            {activeModalStandard.isMandatoryQCO && activeModalStandard.qcoDetails && (
              <div className="bg-red-950/20 border border-red-800/40 p-4 rounded-xl">
                <div className="flex items-center gap-2 text-xs font-bold text-red-400 uppercase tracking-wider mb-2">
                  <ShieldCheck className="w-4 h-4 text-red-400" />
                  Quality Control Order (QCO) Statutory Notification
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div>
                    <span className="text-slate-400">Order Title:</span>
                    <p className="font-semibold text-slate-200">{activeModalStandard.qcoDetails.orderName}</p>
                  </div>
                  <div>
                    <span className="text-slate-400">Notifying Ministry:</span>
                    <p className="font-semibold text-slate-200">{activeModalStandard.qcoDetails.ministry}</p>
                  </div>
                  <div>
                    <span className="text-slate-400">Gazette Reference:</span>
                    <p className="font-mono text-slate-200">{activeModalStandard.qcoDetails.gazetteRef}</p>
                  </div>
                  <div>
                    <span className="text-slate-400">Enforcement Date:</span>
                    <p className="font-semibold text-emerald-400">{activeModalStandard.qcoDetails.effectiveDate}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Key Testing Parameters & Laboratories */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-slate-950/60 border border-slate-800 p-4 rounded-xl">
                <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <FlaskConical className="w-4 h-4" />
                  Mandatory Lab Test Parameters
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  {activeModalStandard.keyTests.map((t, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-amber-400 font-bold">•</span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-slate-950/60 border border-slate-800 p-4 rounded-xl space-y-3">
                <h4 className="text-xs font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Building className="w-4 h-4" />
                  Testing & Sampling Logistics
                </h4>
                <div className="text-xs space-y-2 text-slate-300">
                  <div>
                    <span className="text-slate-500">Sample Quantity:</span>
                    <p className="font-medium text-slate-200">{activeModalStandard.sampleSizeRequired}</p>
                  </div>
                  <div>
                    <span className="text-slate-500">Lab Turnaround Time:</span>
                    <p className="font-semibold text-emerald-400 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      ~{activeModalStandard.turnaroundDaysEstimate} working days
                    </p>
                  </div>
                  <div>
                    <span className="text-slate-500">Recognized Labs:</span>
                    <p className="text-slate-300">{activeModalStandard.testingLaboratories.join(', ')}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer Actions */}
            <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
              <a
                href="https://www.bis.gov.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-slate-400 hover:text-white flex items-center gap-1 font-medium"
              >
                <span>Search full text on BIS Portal</span>
                <ExternalLink className="w-3 h-3" />
              </a>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveModalStandard(null)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:bg-slate-800"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    const std = activeModalStandard;
                    setActiveModalStandard(null);
                    onAskAboutStandard(`Explain the full Scheme of Inspection & Testing (SIT), factory audit requirements, and sample drawing rules for ${std.isNumber}`);
                  }}
                  className="px-5 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-orange-500 to-amber-500 text-slate-950 flex items-center gap-1.5 shadow-lg shadow-orange-500/20"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Start SARTHI Guidance</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
