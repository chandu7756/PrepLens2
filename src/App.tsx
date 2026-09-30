import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { PortalHome } from './components/PortalHome';
import { ChatAssistant } from './components/ChatAssistant';
import { StandardsExplorer } from './components/StandardsExplorer';
import { CertificationGuide } from './components/CertificationGuide';
import { LabDirectory } from './components/LabDirectory';
import { ConsumerVerifySuite } from './components/ConsumerVerifySuite';
import { SIHPitchDeck } from './components/SIHPitchDeck';
import { PipelineVisualizer } from './components/PipelineVisualizer';
import { UserRole, LanguageCode, IndianStandard, RagResponse } from './types/bis';
import { translations } from './utils/translations';
import { ExternalLink } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'home' | 'chat' | 'standards' | 'schemes' | 'labs' | 'verify' | 'presentation'>('home');
  const [userRole, setUserRole] = useState<UserRole>('msme');
  const [language, setLanguage] = useState<LanguageCode>('en');
  const [showPipelineDrawer, setShowPipelineDrawer] = useState(false);
  const [activeRagTrace, setActiveRagTrace] = useState<RagResponse | null>(null);
  const [selectedStandardForModal, setSelectedStandardForModal] = useState<IndianStandard | null>(null);

  // Search query from Portal Home
  const [pendingSearchQuery, setPendingSearchQuery] = useState<string | null>(null);

  const handleAskAboutStandard = (query: string) => {
    setPendingSearchQuery(query);
    setActiveTab('chat');
  };

  const handleSelectStandard = (std: IndianStandard) => {
    setSelectedStandardForModal(std);
    setActiveTab('standards');
  };

  const handleOpenPipelineTrace = (ragData: RagResponse) => {
    setActiveRagTrace(ragData);
    setShowPipelineDrawer(true);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-amber-500/20 selection:text-amber-200">
      {/* Top Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={(t) => setActiveTab(t as any)}
        userRole={userRole}
        setUserRole={setUserRole}
        language={language}
        setLanguage={setLanguage}
      />

      {/* Main Workspace Area */}
      <main className="flex-1 w-full">
        {activeTab === 'home' && (
          <PortalHome
            onNavigateTab={(t) => setActiveTab(t as any)}
            onSearchQuery={(q) => {
              setPendingSearchQuery(q);
              setActiveTab('chat');
            }}
            userRole={userRole}
            setUserRole={setUserRole}
            language={language}
          />
        )}

        {activeTab === 'chat' && (
          <ChatAssistant
            userRole={userRole}
            language={language}
            initialQuery={pendingSearchQuery}
            onClearInitialQuery={() => setPendingSearchQuery(null)}
            onSelectStandard={handleSelectStandard}
            onNavigateToTab={(t) => setActiveTab(t as any)}
            onOpenPipelineTrace={handleOpenPipelineTrace}
          />
        )}

        {activeTab === 'standards' && (
          <StandardsExplorer
            onAskAboutStandard={(q) => handleAskAboutStandard(q)}
            selectedStandardFromOutside={selectedStandardForModal}
            language={language}
          />
        )}

        {activeTab === 'schemes' && (
          <CertificationGuide
            userRole={userRole}
            onAskSchemeQuestion={(q) => handleAskAboutStandard(q)}
            language={language}
          />
        )}

        {activeTab === 'labs' && (
          <LabDirectory
            onAskAboutTesting={(q) => handleAskAboutStandard(q)}
            language={language}
          />
        )}

        {activeTab === 'verify' && (
          <ConsumerVerifySuite
            onAskAboutGrievance={(q) => handleAskAboutStandard(q)}
            language={language}
          />
        )}

        {activeTab === 'presentation' && (
          <SIHPitchDeck onLaunchAssistant={() => setActiveTab('chat')} />
        )}
      </main>

      {/* RAG Diagnostic Pipeline Inspector Drawer */}
      <PipelineVisualizer
        isOpen={showPipelineDrawer}
        onClose={() => setShowPipelineDrawer(false)}
        ragData={activeRagTrace}
      />

      {/* Bottom Footer (Quiet, clean, professional) */}
      <footer className="border-t border-slate-900 bg-slate-950 text-xs text-slate-500 py-8 px-4 sm:px-8 mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-md bg-amber-500 flex items-center justify-center font-bold text-slate-950 text-xs shadow-sm">
              PL
            </div>
            <div>
              <div className="font-semibold text-slate-300">
                PrepLens
              </div>
              <p className="text-[11px] text-slate-500">
                {translations[language]?.footer.subtitle || translations.en.footer.subtitle}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <a
              href="https://www.bis.gov.in"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-200 transition-colors flex items-center gap-1"
            >
              <span>{translations[language]?.footer.ebis || 'e-BIS Portal'}</span>
              <ExternalLink className="w-3 h-3 text-slate-600" />
            </a>
            <a
              href="https://www.manakonline.in"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-200 transition-colors flex items-center gap-1"
            >
              <span>{translations[language]?.footer.manakonline || 'Manakonline'}</span>
              <ExternalLink className="w-3 h-3 text-slate-600" />
            </a>
            <a
              href="https://www.crsbis.in"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-200 transition-colors flex items-center gap-1"
            >
              <span>{translations[language]?.footer.crs || 'CRS Portal'}</span>
              <ExternalLink className="w-3 h-3 text-slate-600" />
            </a>
          </div>

          <div className="text-[11px] text-slate-500 font-mono">
            {translations[language]?.footer.helpline || 'Consumer Helpline: 1915'}
          </div>
        </div>
      </footer>
    </div>
  );
}
