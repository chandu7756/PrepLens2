import React, { useState, useEffect } from 'react';
import { 
  Presentation, 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  Minimize2, 
  ExternalLink, 
  Copy, 
  Check, 
  Play, 
  Pause, 
  Sparkles, 
  Layers, 
  Grid, 
  Maximize, 
  FileText,
  ShieldCheck,
  ArrowRight
} from 'lucide-react';
import { SIH_METADATA } from '../data/sihPresentation';

interface SIHPitchDeckProps {
  onLaunchAssistant?: () => void;
}

export const SIHPitchDeck: React.FC<SIHPitchDeckProps> = ({ onLaunchAssistant }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [viewMode, setViewMode] = useState<'slide' | 'grid'>('slide');
  const [themeMode, setThemeMode] = useState<'deck' | 'dark'>('deck');
  const [copiedLink, setCopiedLink] = useState<string | null>(null);

  const totalSlides = 6;

  const nextSlide = () => {
    if (currentSlideIndex < totalSlides - 1) {
      setCurrentSlideIndex(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex(prev => prev - 1);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') {
        if (currentSlideIndex < totalSlides - 1) {
          e.preventDefault();
          setCurrentSlideIndex(prev => prev + 1);
        }
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        if (currentSlideIndex > 0) {
          e.preventDefault();
          setCurrentSlideIndex(prev => prev - 1);
        }
      } else if (e.key === 'Escape' && isFullscreen) {
        setIsFullscreen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlideIndex, totalSlides, isFullscreen]);

  const copyUrl = (url: string) => {
    navigator.clipboard.writeText(url);
    setCopiedLink(url);
    setTimeout(() => setCopiedLink(null), 2000);
  };

  // SVG PrepLens Logo
  const PrepLensLogo = () => (
    <div className="flex items-center gap-1.5 select-none">
      <div className="relative w-8 h-8 flex items-center justify-center">
        <svg viewBox="0 0 100 100" className="w-8 h-8">
          <circle cx="50" cy="50" r="44" fill="#1e1b4b" stroke="#6366f1" strokeWidth="4" />
          <path d="M25 50 Q50 20 75 50 Q50 80 25 50 Z" fill="none" stroke="#38bdf8" strokeWidth="5" />
          <circle cx="50" cy="50" r="14" fill="#a855f7" />
          <circle cx="53" cy="47" r="5" fill="#ffffff" />
        </svg>
      </div>
      <div className="flex flex-col leading-none">
        <span className="text-[10px] font-black tracking-widest text-slate-800 uppercase font-sans">PREPLENS</span>
      </div>
    </div>
  );

  // SVG SIH 2026 Official Logo Motif
  const SIH2026Logo = () => (
    <div className="flex items-center gap-2 select-none">
      <div className="flex flex-col items-center">
        <svg viewBox="0 0 80 80" className="w-9 h-9">
          {/* Hexagonal Chip */}
          <polygon points="40,5 72,22 72,58 40,75 8,58 8,22" fill="#ea580c" opacity="0.9" />
          <polygon points="40,9 68,25 68,55 40,71 12,55 12,25" fill="#047857" opacity="0.95" />
          {/* Circuit Lines */}
          <line x1="20" y1="30" x2="60" y2="30" stroke="#fbbf24" strokeWidth="2" />
          <line x1="20" y1="40" x2="60" y2="40" stroke="#ffffff" strokeWidth="2" />
          <line x1="20" y1="50" x2="60" y2="50" stroke="#fbbf24" strokeWidth="2" />
          {/* SIH Text */}
          <text x="40" y="66" fill="#ffffff" fontSize="12" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">SIH</text>
        </svg>
      </div>
      <div className="leading-tight text-left">
        <div className="text-[11px] font-black text-slate-900 tracking-tight font-serif uppercase">SMART INDIA</div>
        <div className="text-[10px] font-black text-slate-800 tracking-wider">HACKATHON</div>
        <div className="text-[12px] font-black text-orange-600">2026</div>
      </div>
    </div>
  );

  // SVG Center Brain Lightbulb Motif from Slide 1
  const BrainLightbulbGraphic = () => (
    <div className="relative w-72 h-80 flex flex-col items-center justify-center">
      {/* Light rays around bulb */}
      <div className="absolute inset-0 pointer-events-none">
        <span className="absolute top-2 left-1/2 -translate-x-1/2 w-1.5 h-6 bg-slate-700 rounded-full" />
        <span className="absolute top-8 left-10 w-6 h-1.5 bg-slate-700 rounded-full rotate-45" />
        <span className="absolute top-8 right-10 w-6 h-1.5 bg-slate-700 rounded-full -rotate-45" />
        <span className="absolute top-1/2 left-2 -translate-y-1/2 w-6 h-1.5 bg-slate-700 rounded-full" />
        <span className="absolute top-1/2 right-2 -translate-y-1/2 w-6 h-1.5 bg-slate-700 rounded-full" />
        <span className="absolute bottom-20 left-10 w-6 h-1.5 bg-slate-700 rounded-full -rotate-45" />
        <span className="absolute bottom-20 right-10 w-6 h-1.5 bg-slate-700 rounded-full rotate-45" />
      </div>

      {/* Hexagonal outline enclosing bulb */}
      <div className="relative w-64 h-72 bg-slate-100 rounded-[3rem] border-2 border-slate-200/80 shadow-inner flex flex-col items-center justify-center p-3">
        {/* Brain Graphic: Left orange circuit, right green binary */}
        <div className="flex items-center justify-center w-44 h-48 rounded-t-full bg-slate-50 border border-slate-200 overflow-hidden shadow-md">
          {/* Left Brain (Orange Circuit) */}
          <div className="w-1/2 h-full bg-gradient-to-b from-orange-500 to-amber-600 p-2 flex flex-col justify-around text-amber-100 border-r border-slate-800/40">
            <svg viewBox="0 0 100 120" className="w-full h-full text-white/90">
              <path d="M80 15 Q40 10 30 35 T50 70 T20 105" fill="none" stroke="white" strokeWidth="4" />
              <circle cx="80" cy="15" r="5" fill="#fef08a" />
              <circle cx="30" cy="35" r="5" fill="#fef08a" />
              <circle cx="50" cy="70" r="5" fill="#fef08a" />
              <circle cx="20" cy="105" r="5" fill="#fef08a" />
              <path d="M60 40 L90 55" stroke="white" strokeWidth="3" />
              <circle cx="90" cy="55" r="4" fill="#fef08a" />
              <path d="M40 85 L85 95" stroke="white" strokeWidth="3" />
              <circle cx="85" cy="95" r="4" fill="#fef08a" />
            </svg>
          </div>

          {/* Right Brain (Green Binary Data) */}
          <div className="w-1/2 h-full bg-gradient-to-b from-emerald-600 to-teal-700 p-2 font-mono text-[13px] leading-relaxed font-black text-white flex flex-col justify-center items-center select-none tracking-widest">
            <div>1010</div>
            <div>01010</div>
            <div>101010</div>
            <div>010101</div>
            <div>10101</div>
            <div>010</div>
          </div>
        </div>

        {/* Bulb Base */}
        <div className="w-20 bg-slate-400 h-5 mt-1 rounded-sm border-t-2 border-slate-600 flex flex-col justify-center items-center">
          <div className="w-16 h-1 bg-slate-500 rounded-full" />
        </div>
        <div className="w-14 bg-slate-500 h-3 rounded-b-md flex items-center justify-center">
          <span className="text-[9px] font-black text-white tracking-widest">SIH</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className={`max-w-7xl mx-auto px-2 sm:px-4 py-4 space-y-4 ${isFullscreen ? 'fixed inset-0 z-50 bg-slate-950 p-4 sm:p-8 overflow-y-auto max-w-none' : ''}`}>
      {/* Deck Toolbar */}
      <div className="bg-slate-900 border border-slate-800 p-3 sm:p-4 rounded-2xl flex flex-wrap items-center justify-between gap-3 shadow-md">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white shadow-md">
            <Presentation className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-white text-sm">
                Smart India Hackathon 2026 — Official Pitch Deck
              </span>
              <span className="bg-purple-950 text-purple-300 text-[10px] px-2 py-0.5 rounded-full border border-purple-800 font-mono font-semibold">
                PS: {SIH_METADATA.problemStatementId}
              </span>
            </div>
            <p className="text-[11px] text-slate-400">
              Team: <strong className="text-slate-200">{SIH_METADATA.teamName}</strong> (ID: #{SIH_METADATA.teamId}) • {SIH_METADATA.tagline}
            </p>
          </div>
        </div>

        {/* View Mode & Actions */}
        <div className="flex items-center gap-2 flex-wrap">
          {/* Deck style toggle */}
          <div className="flex items-center bg-slate-950 border border-slate-800 rounded-xl p-1 text-xs">
            <button
              onClick={() => setThemeMode('deck')}
              className={`px-2.5 py-1 rounded-lg font-medium transition-colors ${
                themeMode === 'deck' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
              }`}
            >
              Classic Deck View
            </button>
            <button
              onClick={() => setThemeMode('dark')}
              className={`px-2.5 py-1 rounded-lg font-medium transition-colors ${
                themeMode === 'dark' ? 'bg-purple-600 text-white font-bold' : 'text-slate-400 hover:text-white'
              }`}
            >
              Cyber Dark View
            </button>
          </div>

          {/* Grid vs Slide toggle */}
          <div className="flex items-center bg-slate-950 border border-slate-800 rounded-xl p-1 text-xs">
            <button
              onClick={() => setViewMode('slide')}
              className={`p-1.5 rounded-lg transition-colors ${viewMode === 'slide' ? 'bg-slate-800 text-amber-400' : 'text-slate-400'}`}
              title="Slide By Slide Mode"
            >
              <Presentation className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`p-1.5 rounded-lg transition-colors ${viewMode === 'grid' ? 'bg-slate-800 text-amber-400' : 'text-slate-400'}`}
              title="Grid / All Slides Overview"
            >
              <Grid className="w-4 h-4" />
            </button>
          </div>

          {/* Slide stepper */}
          {viewMode === 'slide' && (
            <div className="flex items-center bg-slate-950 border border-slate-800 rounded-xl p-1 text-xs">
              <button
                onClick={prevSlide}
                disabled={currentSlideIndex === 0}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white disabled:opacity-30 disabled:hover:text-slate-400"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="px-3 font-mono font-bold text-amber-400">
                Slide {currentSlideIndex + 1} of {totalSlides}
              </span>
              <button
                onClick={nextSlide}
                disabled={currentSlideIndex === totalSlides - 1}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white disabled:opacity-30 disabled:hover:text-slate-400"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* Fullscreen toggle */}
          <button
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
            title={isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen Presentation Mode'}
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Slide Navigation Strip */}
      {viewMode === 'slide' && (
        <div className="grid grid-cols-6 gap-2">
          {[
            { num: 1, title: 'Title Page' },
            { num: 2, title: 'Proposed Solution' },
            { num: 3, title: 'Technical Approach' },
            { num: 4, title: 'Feasibility & Viability' },
            { num: 5, title: 'Impact & Benefits' },
            { num: 6, title: 'Research & References' },
          ].map((s, idx) => (
            <button
              key={s.num}
              onClick={() => setCurrentSlideIndex(idx)}
              className={`p-2.5 rounded-xl text-left border transition-all ${
                currentSlideIndex === idx
                  ? 'bg-purple-500/20 border-purple-500 text-white shadow-md'
                  : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
              }`}
            >
              <div className="text-[10px] font-mono font-bold text-purple-400">0{s.num}</div>
              <div className="text-xs font-semibold truncate hidden sm:block">{s.title}</div>
            </button>
          ))}
        </div>
      )}

      {/* RENDER SLIDES */}
      {viewMode === 'slide' ? (
        <div className="flex justify-center">
          <div className="w-full max-w-5xl shadow-2xl transition-all">
            {renderSlide(currentSlideIndex + 1, themeMode, copyUrl, copiedLink)}
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[1, 2, 3, 4, 5, 6].map(num => (
            <div key={num} className="shadow-xl rounded-2xl overflow-hidden cursor-pointer" onClick={() => { setCurrentSlideIndex(num - 1); setViewMode('slide'); }}>
              <div className="text-xs font-mono font-bold px-3 py-1 bg-slate-900 text-slate-300 flex items-center justify-between border-b border-slate-800">
                <span>Slide 0{num}</span>
                <span className="text-amber-400 text-[10px]">Click to inspect in Full View</span>
              </div>
              {renderSlide(num, themeMode, copyUrl, copiedLink, true)}
            </div>
          ))}
        </div>
      )}
    </div>
  );

  // Helper function to render a specific slide
  function renderSlide(
    slideNum: number, 
    theme: 'deck' | 'dark', 
    onCopy: (url: string) => void, 
    copiedText: string | null,
    isThumb: boolean = false
  ) {
    const isClassic = theme === 'deck';
    const bgClass = isClassic ? 'bg-white text-slate-900' : 'bg-slate-950 text-slate-100 border border-slate-800';
    const cardBorder = isClassic ? 'border-slate-800' : 'border-slate-700';

    return (
      <div className={`aspect-[16/9] w-full rounded-2xl p-6 sm:p-10 flex flex-col justify-between relative shadow-2xl overflow-hidden font-sans select-none ${bgClass}`}>
        
        {/* SLIDE 1: TITLE PAGE */}
        {slideNum === 1 && (
          <div className="h-full flex flex-col justify-between">
            {/* Top Right SIH Logo */}
            <div className="flex justify-end">
              <SIH2026Logo />
            </div>

            {/* Title Header */}
            <div className="text-center space-y-1">
              <h1 className="text-2xl sm:text-4xl font-serif font-black tracking-wide text-slate-800">
                SMART INDIA HACKATHON 2026
              </h1>
              <h2 className="text-lg sm:text-2xl font-serif font-bold text-slate-900 tracking-wider">
                TITLE PAGE
              </h2>
            </div>

            {/* Main Content: Left details, Right bulb-brain graphic */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center my-auto py-2">
              <div className="space-y-4 text-xs sm:text-sm text-slate-900 font-medium pl-2 sm:pl-8">
                <div className="flex items-start gap-2">
                  <span className="font-bold text-slate-900 text-lg leading-none">•</span>
                  <div>
                    <strong className="text-slate-950 font-bold">Problem Statement ID - </strong>
                    <span className="font-bold font-mono">SIH26107</span>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <span className="font-bold text-slate-900 text-lg leading-none">•</span>
                  <div>
                    <strong className="text-slate-950 font-bold">Problem Statement Title - </strong>
                    <span>AI-Powered Intelligent Assistant for Indian Standards and BIS Services for Industries and Consumers</span>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <span className="font-bold text-slate-900 text-lg leading-none">•</span>
                  <div>
                    <strong className="text-slate-950 font-bold">Theme - </strong>
                    <span>Smart Automation</span>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <span className="font-bold text-slate-900 text-lg leading-none">•</span>
                  <div>
                    <strong className="text-slate-950 font-bold">PS Category - </strong>
                    <span>Software</span>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <span className="font-bold text-slate-900 text-lg leading-none">•</span>
                  <div>
                    <strong className="text-slate-950 font-bold">Team ID - </strong>
                    <span className="font-mono font-bold">159008</span>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <span className="font-bold text-slate-900 text-lg leading-none">•</span>
                  <div>
                    <strong className="text-slate-950 font-bold">Team Name - </strong>
                    <span className="font-bold">PrepLens</span>
                  </div>
                </div>
              </div>

              {/* Right Brain-Bulb Motif */}
              <div className="flex justify-center items-center">
                <BrainLightbulbGraphic />
              </div>
            </div>

            <div className="text-[11px] text-slate-400 font-mono text-center">
              @SIH Idea submission
            </div>
          </div>
        )}

        {/* SLIDE 2: PROPOSED SOLUTION & RAG PIPELINE */}
        {slideNum === 2 && (
          <div className="h-full flex flex-col justify-between">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-200 pb-2">
              <PrepLensLogo />
              <h2 className="text-lg sm:text-2xl font-serif font-black text-slate-900 text-center flex-1 px-2">
                AI-Powered Intelligent Assistant for Indian Standards & BIS Services
              </h2>
              <SIH2026Logo />
            </div>

            {/* Two Column Layout */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 my-auto py-2">
              {/* Left Column (7 cols): Proposed Solution, Addressing, Uniqueness */}
              <div className="md:col-span-7 space-y-3">
                {/* Proposed Solution Box */}
                <div>
                  <h3 className="text-sm font-bold text-slate-900 mb-1">Proposed Solution</h3>
                  <div className="border border-slate-900 rounded-lg p-3 text-xs leading-relaxed text-slate-800 space-y-1">
                    <p>• Conversational AI assistant for industries, MSMEs, startups and consumers to discover relevant Indian Standards and BIS services.</p>
                    <p>• Understands product descriptions and user intent, then retrieves BIS information through an evidence-grounded RAG pipeline.</p>
                    <p>• Covers Standard Discovery, Certification Guidance, Testing & Laboratory Assistance, Consumer Services and Multilingual Access.</p>
                    <p>• Explains technical information in simple language with source-backed guidance.</p>
                  </div>
                </div>

                {/* Addressing the Problem Box */}
                <div>
                  <h3 className="text-sm font-bold text-slate-900 mb-1">Addressing the Problem</h3>
                  <div className="border border-slate-900 rounded-lg p-3 text-xs leading-relaxed text-slate-800 space-y-1">
                    <p><strong className="text-slate-950 font-bold">Fragmented Search:</strong> one conversational layer across standards, certification, testing and services.</p>
                    <p><strong className="text-slate-950 font-bold">Ambiguous Products:</strong> clarifying questions before recommending a standard.</p>
                    <p><strong className="text-slate-950 font-bold">Unsupported AI Answers:</strong> authoritative BIS data and source traceability reduce hallucination.</p>
                  </div>
                </div>

                {/* Uniqueness & Innovation Box */}
                <div>
                  <h3 className="text-sm font-bold text-slate-900 mb-1">Uniqueness & Innovation of project</h3>
                  <div className="border border-slate-900 rounded-lg p-3 text-xs leading-relaxed text-slate-800 space-y-1">
                    <p>• Not just a chatbot: Retrieve → Rank → Verify → Generate → Cite</p>
                    <p>• Context-aware standards discovery + service guidance in one layer</p>
                  </div>
                </div>
              </div>

              {/* Right Column (5 cols): 5 Red Step Boxes with Arrows */}
              <div className="md:col-span-5 flex flex-col justify-center items-center space-y-1 sm:space-y-2">
                {[
                  { step: '1. Retrieve', desc: 'Hybrid semantic + keyword search' },
                  { step: '2. Rank', desc: 'Relevance re-ranking of BIS documents' },
                  { step: '3. Verify', desc: 'Evidence check against official sources' },
                  { step: '4. Generate', desc: 'Plain-language RAG answer' },
                  { step: '5. Cite', desc: 'Source, document/version, date accessed' },
                ].map((item, idx) => (
                  <React.Fragment key={idx}>
                    <div className="w-full max-w-[280px] bg-red-700 text-white rounded-sm py-2 px-3 text-center shadow-sm">
                      <div className="text-xs font-bold">{item.step}</div>
                      <div className="text-[11px] opacity-90">{item.desc}</div>
                    </div>
                    {idx < 4 && (
                      <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-slate-800 mx-auto" />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="flex justify-between items-center text-[11px] text-slate-500 border-t border-slate-200 pt-1">
              <span>@SIH Idea submission</span>
              <span className="font-bold">2</span>
            </div>
          </div>
        )}

        {/* SLIDE 3: TECHNICAL APPROACH */}
        {slideNum === 3 && (
          <div className="h-full flex flex-col justify-between">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-200 pb-1">
              <PrepLensLogo />
              <div className="text-center flex-1 px-2">
                <h2 className="text-lg sm:text-2xl font-serif font-black text-slate-900">
                  TECHNICAL APPROACH
                </h2>
                <p className="text-xs sm:text-sm font-semibold text-slate-800">
                  PrepLens — AI-powered BIS knowledge assistant.
                </p>
              </div>
              <SIH2026Logo />
            </div>

            {/* Middle Section */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-3 my-auto py-1">
              {/* Left & Center: Top flow + Hub & Spoke */}
              <div className="md:col-span-7 flex flex-col justify-between space-y-2">
                {/* Horizontal Flow Boxes */}
                <div className="flex items-center justify-between gap-1 overflow-x-auto text-[10px] sm:text-xs">
                  {['User Query', 'Intent + Product Extraction', 'Hybrid Retrieval', 'Relevance Ranking', 'Evidence Verification', 'LLM / RAG Generation'].map((item, iIdx) => (
                    <div key={iIdx} className="bg-sky-800 text-white font-medium p-1.5 rounded text-center flex-1 min-w-[70px]">
                      {item}
                    </div>
                  ))}
                </div>

                {/* Hub and Spoke Circle Diagram */}
                <div className="relative py-2 flex items-center justify-center">
                  <div className="w-80 h-44 relative flex items-center justify-center">
                    {/* Center Circle */}
                    <div className="w-28 h-28 rounded-full border-2 border-slate-900 bg-white flex flex-col items-center justify-center text-center p-2 z-10 shadow-sm">
                      <span className="font-black text-xs text-slate-900">BIS-SARTHI</span>
                      <span className="text-[9px] text-slate-700 leading-tight">AI-Powered BIS Knowledge Assistant</span>
                    </div>

                    {/* Nodes around center */}
                    <div className="absolute top-0 left-0 text-left text-[10px] leading-tight">
                      <span className="font-bold text-sky-800 block">Multilingual Support</span>
                      <span className="text-slate-600">English, Hindi, Telugu & more</span>
                    </div>

                    <div className="absolute top-0 right-0 text-right text-[10px] leading-tight">
                      <span className="font-bold text-amber-700 block">Accurate & Reliable</span>
                      <span className="text-slate-600">Verified authoritative sources</span>
                    </div>

                    <div className="absolute bottom-6 left-0 text-left text-[10px] leading-tight">
                      <span className="font-bold text-sky-800 block">Smart Search</span>
                      <span className="text-slate-600">Semantic + Keyword Retrieval</span>
                    </div>

                    <div className="absolute bottom-6 right-0 text-right text-[10px] leading-tight">
                      <span className="font-bold text-amber-700 block">Context Aware</span>
                      <span className="text-slate-600">Product + Standard mapping</span>
                    </div>

                    <div className="absolute bottom-0 left-6 text-left text-[10px] leading-tight">
                      <span className="font-bold text-sky-800 block">Structured Database</span>
                      <span className="text-slate-600">BIS standards, regulations</span>
                    </div>

                    <div className="absolute bottom-0 right-6 text-right text-[10px] leading-tight">
                      <span className="font-bold text-amber-700 block">User Friendly</span>
                      <span className="text-slate-600">Simple, fast and accessible</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: User Flow & Tech Stack Pills */}
              <div className="md:col-span-5 grid grid-cols-2 gap-2 text-xs">
                {/* User Flow */}
                <div className="space-y-1">
                  <div className="bg-sky-700 text-white font-bold text-[11px] py-1 px-3 rounded-full text-center">
                    USER FLOW
                  </div>
                  <div className="text-[10px] text-slate-800 leading-tight space-y-1">
                    <p><strong>1. Ask a Question:</strong> User enters query (text/voice)</p>
                    <p><strong>2. Detect Intent:</strong> Identify category & product</p>
                    <p><strong>3. Search BIS KB:</strong> Retrieve info using hybrid search</p>
                    <p><strong>4. Rank Info:</strong> Use relevance scoring + context</p>
                    <p><strong>5. Verify Evidence:</strong> Cross-check with official sources</p>
                    <p><strong>6. Generate:</strong> LLM + RAG (multilingual)</p>
                    <p><strong>7. Show Answer:</strong> Clear, simple, source-backed</p>
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="space-y-1">
                  <div className="bg-sky-700 text-white font-bold text-[11px] py-1 px-3 rounded-full text-center">
                    TECHOLOGY STACK
                  </div>
                  <div className="text-[10px] text-slate-800 leading-tight space-y-0.5">
                    <p><strong className="text-sky-800">Frontend:</strong> React + Flutter</p>
                    <p><strong className="text-sky-800">Backend:</strong> Python + FastAPI</p>
                    <p><strong className="text-sky-800">AI / NLP:</strong> LLM + Multilingual NLP</p>
                    <p><strong className="text-sky-800">RAG:</strong> Embeddings + Vector DB</p>
                    <p><strong className="text-sky-800">Search:</strong> Semantic + Keyword</p>
                    <p><strong className="text-sky-800">Data:</strong> Structured BIS Database</p>
                    <p><strong className="text-sky-800">Deployment:</strong> Vercel</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom 3 Rounded Boxes */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-xs">
              <div className="border-2 border-sky-800 rounded-2xl p-2.5 space-y-1">
                <h4 className="font-bold text-sky-900 text-xs">Technologies to be used</h4>
                <div className="text-[10px] text-slate-800 leading-snug">
                  1. Frontend: React / Flutter<br />
                  2. Backend: Python + FastAPI<br />
                  3. AI: LLM + Multilingual NLP<br />
                  4. RAG: Embeddings + Vector Database<br />
                  5. Search: Hybrid semantic + keyword<br />
                  6. Data: Structured database<br />
                  7. Deployment: Vercel
                </div>
              </div>

              <div className="border-2 border-sky-800 rounded-2xl p-2.5 space-y-1">
                <h4 className="font-bold text-sky-900 text-xs">BIS Knowledge Base</h4>
                <div className="text-[10px] text-slate-800 leading-snug">
                  1. Standards: IS numbers, scope, titles<br />
                  2. Certifications: schemes & requirements<br />
                  3. Testing / Labs: tests & laboratory info<br />
                  4. Services: hallmarking & consumer guidance<br />
                  5. Regulations: acts, rules and guidelines
                </div>
              </div>

              <div className="border-2 border-sky-800 rounded-2xl p-2.5 space-y-1">
                <h4 className="font-bold text-sky-900 text-xs">Quality Gate</h4>
                <div className="text-[10px] text-slate-800 leading-snug">
                  1. If sufficient authoritative evidence is not found, the system avoids giving a confident generated answer.<br />
                  2. Clarifies or redirects to official BIS channels instead.<br />
                  3. Ensures accuracy, reliability and trustworthiness.
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="flex justify-between items-center text-[11px] text-slate-500 border-t border-slate-200 pt-1">
              <span>@SIH Idea submission</span>
              <span className="font-bold">3</span>
            </div>
          </div>
        )}

        {/* SLIDE 4: FEASIBILITY AND VIABILITY */}
        {slideNum === 4 && (
          <div className="h-full flex flex-col justify-between">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-200 pb-2">
              <PrepLensLogo />
              <h2 className="text-lg sm:text-2xl font-serif font-black text-slate-900 text-center flex-1 px-2">
                FEASIBILITY AND VIABILITY
              </h2>
              <SIH2026Logo />
            </div>

            {/* Top Roadmap Chevron Flow */}
            <div className="flex items-center justify-between gap-1 sm:gap-2 my-2 text-xs">
              {[
                { phase: 'MVP', title: 'Standards Discovery', color: 'bg-sky-700' },
                { phase: 'Phase 2', title: 'Certification + Testing', color: 'bg-indigo-700' },
                { phase: 'Phase 3', title: 'Multilingual + Consumer', color: 'bg-sky-600' },
                { phase: 'Scale', title: 'Enterprise / BIS ecosystem', color: 'bg-amber-600' },
              ].map((ph, pIdx) => (
                <div key={pIdx} className="flex-1 flex items-center">
                  <div className={`w-full ${ph.color} text-white py-2 px-2 text-center rounded-sm shadow-sm`}>
                    <div className="font-bold text-[11px]">{ph.phase}</div>
                    <div className="text-[10px] leading-tight opacity-90">{ph.title}</div>
                  </div>
                  {pIdx < 3 && (
                    <div className="w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-l-[10px] border-l-slate-700 shrink-0 ml-1" />
                  )}
                </div>
              ))}
            </div>

            {/* 3 Main Rectangular Column Boxes */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-auto py-2">
              {/* Box 1: Analysis of Feasibility */}
              <div className="border border-slate-900 rounded-sm p-4 space-y-2">
                <h3 className="font-bold text-slate-900 text-center text-xs sm:text-sm tracking-wide border-b border-slate-900 pb-1 uppercase">
                  ANALYSIS OF FEASIBILITY
                </h3>
                <div className="text-xs text-slate-800 space-y-2 leading-relaxed">
                  <p>1. Mature LLM/NLP, RAG, vector retrieval and document-processing technologies make the solution technically feasible.</p>
                  <p>2. Modular API architecture and cloud deployment support progressive scaling.</p>
                  <p>3. MVP can begin with a focused BIS knowledge domain and expand after validation.</p>
                </div>
              </div>

              {/* Box 2: Potential Challenges and Risks */}
              <div className="border border-slate-900 rounded-sm p-4 space-y-2">
                <h3 className="font-bold text-slate-900 text-center text-xs sm:text-sm tracking-wide border-b border-slate-900 pb-1 uppercase">
                  POTENTIAL CHALLENGES AND RISKS
                </h3>
                <div className="text-xs text-slate-800 space-y-1.5 leading-relaxed">
                  <p>1. Hallucination or unsupported answers</p>
                  <p>2. Changing standards / schemes</p>
                  <p>3. Ambiguous products</p>
                  <p>4. Complex technical terminology</p>
                  <p>5. Source access / usage constraints</p>
                </div>
              </div>

              {/* Box 3: Strategies to Overcome Challenges */}
              <div className="border border-slate-900 rounded-sm p-4 space-y-2">
                <h3 className="font-bold text-slate-900 text-center text-xs sm:text-sm tracking-wide border-b border-slate-900 pb-1 uppercase">
                  STRATEGIES TO OVERCOME CHALLENGES
                </h3>
                <div className="text-xs text-slate-800 space-y-1.5 leading-relaxed">
                  <p>1. RAG + evidence verification</p>
                  <p>2. Document versioning + update pipeline</p>
                  <p>3. Clarifying questions and explanation layer</p>
                  <p>4. Authorized / public sources only</p>
                  <p>5. Source metadata + traceable references</p>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="flex justify-between items-center text-[11px] text-slate-500 border-t border-slate-200 pt-1">
              <span>@SIH Idea submission</span>
              <span className="font-bold">4</span>
            </div>
          </div>
        )}

        {/* SLIDE 5: IMPACT AND BENEFITS */}
        {slideNum === 5 && (
          <div className="h-full flex flex-col justify-between">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-200 pb-2">
              <PrepLensLogo />
              <h2 className="text-lg sm:text-2xl font-serif font-black text-slate-900 text-center flex-1 px-2">
                IMPACT AND BENEFITS
              </h2>
              <SIH2026Logo />
            </div>

            {/* Column Headers */}
            <div className="grid grid-cols-2 gap-4 text-sm font-black tracking-wide my-1">
              <div className="text-amber-700 uppercase">WHAT CHANGES</div>
              <div className="text-emerald-700 uppercase">WHAT PREPLENS DELIVERS</div>
            </div>

            {/* 6 Paired Horizontal Strip Arrows */}
            <div className="space-y-2 my-auto py-1">
              {[
                { changes: '1. Faster standards discovery', delivers: 'Conversational Q&A on Indian Standards' },
                { changes: '2. Clearer certification pathway', delivers: 'Structured next-step guidance' },
                { changes: '3. Lower compliance barrier for MSMEs & startups', delivers: 'Grounded, source-cited answers' },
                { changes: '4. Improved discoverability of BIS services', delivers: 'Complaint navigation support' },
                { changes: '5. Reduced repetitive search effort', delivers: 'Easy-to-use, anytime self-service access' },
                { changes: '6. Wider multilingual accessibility', delivers: 'Hallmarking & mark guidance for consumers' },
              ].map((row, idx) => (
                <div key={idx} className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
                  {/* Left Orange Block */}
                  <div className="relative bg-amber-500 text-white font-medium text-xs py-2 px-3 rounded shadow-sm flex items-center justify-between">
                    <span>{row.changes}</span>
                    <span className="hidden sm:inline font-bold">➜</span>
                  </div>

                  {/* Right Orange/Light-Orange Block */}
                  <div className="bg-amber-200 text-amber-950 font-bold text-xs py-2 px-3 rounded shadow-sm flex items-center">
                    <span>{row.delivers}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="flex justify-between items-center text-[11px] text-slate-500 border-t border-slate-200 pt-1">
              <span>@SIH Idea submission</span>
              <span className="font-bold">5</span>
            </div>
          </div>
        )}

        {/* SLIDE 6: RESEARCH AND REFERENCES */}
        {slideNum === 6 && (
          <div className="h-full flex flex-col justify-between">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-200 pb-2">
              <PrepLensLogo />
              <h2 className="text-lg sm:text-2xl font-serif font-black text-slate-900 text-center flex-1 px-2">
                RESEARCH AND REFERENCES
              </h2>
              <SIH2026Logo />
            </div>

            {/* 5 Reference Blocks */}
            <div className="space-y-3 my-auto py-2">
              {[
                {
                  label: 'Research Papers',
                  sub: 'RAG-based Q&A over standards',
                  url: 'https://arxiv.org/pdf/2506.07037',
                  bgColor: 'bg-amber-100/90 text-amber-950 border-amber-300',
                },
                {
                  label: 'Problem Statement',
                  sub: 'SIH 2026 – SIH26107',
                  url: 'https://sih.gov.in/sih2026PS',
                  bgColor: 'bg-slate-200/90 text-slate-900 border-slate-300',
                },
                {
                  label: 'Existing Application',
                  sub: 'BIS Care App',
                  url: 'https://www.bis.gov.in',
                  bgColor: 'bg-amber-100/90 text-amber-950 border-amber-300',
                },
                {
                  label: 'Framework',
                  sub: 'BIS Conformity Assessment Regulations, 2018',
                  url: 'https://www.bis.gov.in/product-certification/product-certification-process/',
                  bgColor: 'bg-slate-200/90 text-slate-900 border-slate-300',
                },
                {
                  label: 'AI Assessment Research',
                  sub: 'Automated Compliance Checking',
                  url: 'https://arxiv.org/html/2608.02472',
                  bgColor: 'bg-amber-100/90 text-amber-950 border-amber-300',
                },
              ].map((ref, idx) => (
                <div
                  key={idx}
                  className={`p-3 rounded-xl border flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs shadow-sm ${ref.bgColor}`}
                >
                  <div className="w-64">
                    <span className="font-bold block text-sm">{ref.label}</span>
                    <span className="text-xs opacity-90">{ref.sub}</span>
                  </div>

                  <div className="flex items-center gap-2 font-mono text-[11px] text-blue-700 hover:text-blue-900 truncate">
                    <span>: </span>
                    <a
                      href={ref.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline truncate"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {ref.url}
                    </a>
                  </div>

                  <div className="flex items-center gap-1 shrink-0">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onCopy(ref.url);
                      }}
                      className="p-1 rounded hover:bg-black/10 text-slate-700"
                      title="Copy URL"
                    >
                      {copiedText === ref.url ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                    <a
                      href={ref.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1 rounded hover:bg-black/10 text-slate-700"
                      title="Open Link"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="flex justify-between items-center text-[11px] text-slate-500 border-t border-slate-200 pt-1">
              <span>@SIH Idea submission</span>
              <span className="font-bold">6</span>
            </div>
          </div>
        )}
      </div>
    );
  }
};
