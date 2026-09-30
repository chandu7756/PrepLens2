import React, { useState, useRef, useEffect } from 'react';
import { 
  Globe, 
  Bot,
  ChevronDown
} from 'lucide-react';
import { UserRole, LanguageCode } from '../types/bis';
import { translations } from '../utils/translations';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  userRole: UserRole;
  setUserRole: (role: UserRole) => void;
  language: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  userRole,
  setUserRole,
  language,
  setLanguage,
}) => {
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isRoleOpen, setIsRoleOpen] = useState(false);

  const langRef = useRef<HTMLDivElement>(null);
  const roleRef = useRef<HTMLDivElement>(null);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setIsLangOpen(false);
      }
      if (roleRef.current && !roleRef.current.contains(event.target as Node)) {
        setIsRoleOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const t = translations[language]?.nav || translations.en.nav;
  const roleLabels = translations[language]?.roles || translations.en.roles;

  const languages: { code: LanguageCode; native: string; english: string }[] = [
    { code: 'en', native: 'English', english: 'English' },
    { code: 'hi', native: 'हिन्दी', english: 'Hindi' },
    { code: 'te', native: 'తెలుగు', english: 'Telugu' },
    { code: 'ta', native: 'தமிழ்', english: 'Tamil' },
    { code: 'mr', native: 'मराठी', english: 'Marathi' },
    { code: 'bn', native: 'বাংলা', english: 'Bengali' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4 sm:gap-8">
          {/* Zone 1: Single Wordmark Brand */}
          <div 
            onClick={() => setActiveTab('home')}
            className="flex items-center gap-2.5 cursor-pointer select-none shrink-0"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-md shrink-0">
              <span className="font-black text-slate-950 text-sm tracking-wider">PL</span>
            </div>
            <div className="flex items-center shrink-0">
              <span className="text-xl font-bold tracking-tight text-white font-sans whitespace-nowrap">
                Prep<span className="text-amber-400">Lens</span>
              </span>
            </div>
          </div>

          {/* Zone 2: Clean Text Navigation Links */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7 text-sm font-medium text-slate-300 shrink-0">
            <button
              onClick={() => setActiveTab('home')}
              className={`transition-colors hover:text-white whitespace-nowrap shrink-0 ${
                activeTab === 'home' ? 'text-amber-400 font-semibold' : ''
              }`}
            >
              {t.overview}
            </button>

            <button
              onClick={() => setActiveTab('standards')}
              className={`transition-colors hover:text-white whitespace-nowrap shrink-0 ${
                activeTab === 'standards' ? 'text-amber-400 font-semibold' : ''
              }`}
            >
              {t.standards}
            </button>

            <button
              onClick={() => setActiveTab('schemes')}
              className={`transition-colors hover:text-white whitespace-nowrap shrink-0 ${
                activeTab === 'schemes' ? 'text-amber-400 font-semibold' : ''
              }`}
            >
              {t.certification}
            </button>

            <button
              onClick={() => setActiveTab('labs')}
              className={`transition-colors hover:text-white whitespace-nowrap shrink-0 ${
                activeTab === 'labs' ? 'text-amber-400 font-semibold' : ''
              }`}
            >
              {t.labs}
            </button>

            <button
              onClick={() => setActiveTab('verify')}
              className={`transition-colors hover:text-white whitespace-nowrap shrink-0 ${
                activeTab === 'verify' ? 'text-amber-400 font-semibold' : ''
              }`}
            >
              {t.verify}
            </button>

            <button
              onClick={() => setActiveTab('chat')}
              className={`transition-colors hover:text-white flex items-center gap-1.5 whitespace-nowrap shrink-0 ${
                activeTab === 'chat' ? 'text-amber-400 font-semibold' : ''
              }`}
            >
              <Bot className="w-4 h-4 text-amber-400" />
              <span>{t.sarthi}</span>
            </button>
          </nav>

          {/* Zone 3: Actions (Context, Language) */}
          <div className="flex items-center gap-2.5 shrink-0">
            {/* User Context Selector */}
            <div className="relative" ref={roleRef}>
              <button 
                onClick={() => {
                  setIsRoleOpen(!isRoleOpen);
                  setIsLangOpen(false);
                }}
                className="flex items-center gap-1.5 bg-slate-900 hover:bg-slate-850 border border-slate-800 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 transition-colors"
                aria-label="Select user role context"
              >
                <span className="text-slate-400 font-normal">{t.context}</span>
                <span className="text-slate-200 font-semibold">{roleLabels[userRole].label.split(' ')[0]}</span>
                <ChevronDown className="w-3 h-3 text-slate-400" />
              </button>
              {isRoleOpen && (
                <div className="absolute right-0 mt-1 w-56 bg-slate-900 border border-slate-800 rounded-xl shadow-2xl p-1.5 z-50 animate-in fade-in zoom-in-95 duration-100">
                  {(Object.keys(roleLabels) as UserRole[]).map((rKey) => (
                    <button
                      key={rKey}
                      onClick={() => {
                        setUserRole(rKey);
                        setIsRoleOpen(false);
                      }}
                      className={`w-full text-left px-3 py-2 rounded-lg text-xs flex items-center justify-between transition-colors ${
                        userRole === rKey ? 'bg-amber-500/20 text-amber-300 font-semibold' : 'text-slate-300 hover:bg-slate-800'
                      }`}
                    >
                      <span>{roleLabels[rKey].label}</span>
                      <span className="text-[10px] text-slate-500 font-mono">{roleLabels[rKey].badge}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Language Switcher */}
            <div className="relative" ref={langRef}>
              <button 
                onClick={() => {
                  setIsLangOpen(!isLangOpen);
                  setIsRoleOpen(false);
                }}
                className="flex items-center gap-1.5 bg-slate-900 hover:bg-slate-850 border border-slate-800 px-2.5 py-1.5 rounded-lg text-xs text-slate-300 transition-colors"
                aria-label="Select language"
              >
                <Globe className="w-3.5 h-3.5 text-amber-400" />
                <span className="font-semibold text-slate-200">{languages.find(l => l.code === language)?.native || 'English'}</span>
                <ChevronDown className="w-3 h-3 text-slate-400" />
              </button>
              {isLangOpen && (
                <div className="absolute right-0 mt-1 w-44 bg-slate-900 border border-slate-800 rounded-xl shadow-2xl p-1 z-50 animate-in fade-in zoom-in-95 duration-100">
                  <div className="px-2 py-1 text-[10px] font-mono uppercase tracking-wider text-slate-500 border-b border-slate-800 mb-1">
                    {t.selectLanguage}
                  </div>
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => {
                        setLanguage(l.code);
                        setIsLangOpen(false);
                      }}
                      className={`w-full text-left px-3 py-2 rounded-lg text-xs flex items-center justify-between transition-colors ${
                        language === l.code ? 'bg-amber-500/20 text-amber-300 font-semibold' : 'text-slate-300 hover:bg-slate-800'
                      }`}
                    >
                      <span className="text-sm font-medium">{l.native}</span>
                      <span className="text-[11px] text-slate-400 font-mono">{l.english}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Row */}
      <div className="lg:hidden flex items-center justify-around border-t border-slate-800 bg-slate-950 px-2 py-2 text-xs">
        <button
          onClick={() => setActiveTab('home')}
          className={`px-2 py-1 rounded transition-colors ${activeTab === 'home' ? 'text-amber-400 font-bold' : 'text-slate-400'}`}
        >
          {t.overview}
        </button>
        <button
          onClick={() => setActiveTab('standards')}
          className={`px-2 py-1 rounded transition-colors ${activeTab === 'standards' ? 'text-amber-400 font-bold' : 'text-slate-400'}`}
        >
          {t.standards}
        </button>
        <button
          onClick={() => setActiveTab('schemes')}
          className={`px-2 py-1 rounded transition-colors ${activeTab === 'schemes' ? 'text-amber-400 font-bold' : 'text-slate-400'}`}
        >
          {t.certification}
        </button>
        <button
          onClick={() => setActiveTab('labs')}
          className={`px-2 py-1 rounded transition-colors ${activeTab === 'labs' ? 'text-amber-400 font-bold' : 'text-slate-400'}`}
        >
          {t.labs}
        </button>
        <button
          onClick={() => setActiveTab('verify')}
          className={`px-2 py-1 rounded transition-colors ${activeTab === 'verify' ? 'text-amber-400 font-bold' : 'text-slate-400'}`}
        >
          {t.verify}
        </button>
        <button
          onClick={() => setActiveTab('chat')}
          className={`px-2 py-1 rounded flex items-center gap-1 transition-colors ${activeTab === 'chat' ? 'text-amber-400 font-bold' : 'text-slate-400'}`}
        >
          <Bot className="w-3.5 h-3.5 text-amber-400" />
          <span>{t.sarthi}</span>
        </button>
      </div>
    </header>
  );
};
