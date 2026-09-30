import React, { useState, useMemo } from 'react';
import { 
  FlaskConical, 
  Search, 
  MapPin, 
  Phone, 
  Mail, 
  CheckCircle2, 
  Building, 
  Calendar, 
  Filter,
  ExternalLink,
  Sparkles
} from 'lucide-react';
import { BIS_LABS } from '../data/bisLabs';
import { TestingLab, LanguageCode } from '../types/bis';
import { translations } from '../utils/translations';

interface LabDirectoryProps {
  onAskAboutTesting: (query: string) => void;
  language: LanguageCode;
}

export const LabDirectory: React.FC<LabDirectoryProps> = ({
  onAskAboutTesting,
  language,
}) => {
  const t = translations[language]?.labs || translations.en.labs;
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDiscipline, setSelectedDiscipline] = useState<string>('All');
  const [selectedLabType, setSelectedLabType] = useState<string>('All');

  const disciplines = ['All', 'Chemical', 'Mechanical', 'Electrical', 'Electronics', 'Microbiological', 'Civil'];
  const labTypes = ['All', 'Central Laboratory', 'Regional Laboratory', 'NABL Recognized Partner'];

  const filteredLabs = useMemo(() => {
    return BIS_LABS.filter((lab) => {
      const matchesDiscipline = selectedDiscipline === 'All' || lab.disciplines.includes(selectedDiscipline as any);
      const matchesType = selectedLabType === 'All' || lab.type === selectedLabType;
      const q = searchQuery.toLowerCase().trim();

      const matchesSearch = !q || (
        lab.name.toLowerCase().includes(q) ||
        lab.city.toLowerCase().includes(q) ||
        lab.state.toLowerCase().includes(q) ||
        lab.keyProductsTested.some(p => p.toLowerCase().includes(q))
      );

      return matchesDiscipline && matchesType && matchesSearch;
    });
  }, [searchQuery, selectedDiscipline, selectedLabType]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-6">
      {/* Header */}
      <div className="bg-slate-900 border border-slate-800 p-6 sm:p-8 rounded-3xl shadow-sm">
        <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-2">
          <FlaskConical className="w-4 h-4" />
          Conformity Testing Infrastructure
        </div>
        <h1 className="text-2xl sm:text-3xl font-black text-white">
          {t.title}
        </h1>
        <p className="text-sm text-slate-300 mt-1 max-w-3xl">
          {t.subtitle}
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-2xl space-y-3">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.searchPlaceholder}
              className="w-full bg-slate-950 border border-slate-700/80 pl-10 pr-4 py-2.5 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
            />
          </div>

          <select
            value={selectedLabType}
            onChange={(e) => setSelectedLabType(e.target.value)}
            className="bg-slate-950 border border-slate-700/80 px-3 py-2.5 rounded-xl text-xs text-slate-200 focus:outline-none focus:border-cyan-500 shrink-0"
          >
            {labTypes.map(t => (
              <option key={t} value={t}>{t === 'All' ? 'All Lab Types' : t}</option>
            ))}
          </select>
        </div>

        {/* Discipline Filter */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pt-1">
          <span className="text-xs text-slate-500 shrink-0">Discipline:</span>
          {disciplines.map((disc) => (
            <button
              key={disc}
              onClick={() => setSelectedDiscipline(disc)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                selectedDiscipline === disc
                  ? 'bg-cyan-500 text-slate-950 font-bold'
                  : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800'
              }`}
            >
              {disc}
            </button>
          ))}
        </div>
      </div>

      {/* Labs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredLabs.map((lab) => (
          <div
            key={lab.id}
            className="bg-slate-900 border border-slate-800 hover:border-cyan-500/40 rounded-2xl p-5 flex flex-col justify-between transition-all group"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-[10px] font-bold font-mono px-2 py-0.5 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-800/60 uppercase">
                  {lab.type}
                </span>
                <span className="text-xs text-slate-400 font-mono flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-slate-500" />
                  Accredited to {lab.accreditationValidUpto}
                </span>
              </div>

              <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                {lab.name}
              </h3>

              <div className="flex items-start gap-1.5 text-xs text-slate-400 mt-2">
                <MapPin className="w-3.5 h-3.5 text-red-400 shrink-0 mt-0.5" />
                <span>{lab.address}</span>
              </div>

              {/* Disciplines */}
              <div className="flex flex-wrap gap-1.5 my-3">
                {lab.disciplines.map((d, dIdx) => (
                  <span key={dIdx} className="text-[11px] bg-slate-950 border border-slate-800 text-slate-300 px-2 py-0.5 rounded">
                    {d}
                  </span>
                ))}
              </div>

              {/* Products Tested */}
              <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800/80 mb-3 text-xs">
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                  {t.testProducts}:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {lab.keyProductsTested.map((prod, pIdx) => (
                    <span key={pIdx} className="bg-slate-900 text-slate-200 border border-slate-800 px-2 py-0.5 rounded text-[11px]">
                      {prod}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-800 flex flex-wrap items-center justify-between gap-2 text-xs">
              <div className="flex items-center gap-3 text-slate-400">
                <a href={`tel:${lab.contactPhone}`} className="hover:text-cyan-300 flex items-center gap-1">
                  <Phone className="w-3 h-3" />
                  <span>{lab.contactPhone}</span>
                </a>
                <a href={`mailto:${lab.contactEmail}`} className="hover:text-cyan-300 flex items-center gap-1">
                  <Mail className="w-3 h-3" />
                  <span>{lab.contactEmail}</span>
                </a>
              </div>

              <button
                onClick={() => onAskAboutTesting(`What is the sample dispatch address, test parameters, and testing charges for submitting samples to ${lab.name}?`)}
                className="text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-1"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>{t.consultLab}</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
