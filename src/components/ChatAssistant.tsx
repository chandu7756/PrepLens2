import React, { useState, useEffect, useRef } from 'react';
import { 
  Bot, 
  Send, 
  Mic, 
  MicOff, 
  Volume2, 
  VolumeX, 
  Sparkles, 
  ShieldCheck, 
  AlertTriangle, 
  HelpCircle, 
  ExternalLink, 
  BookOpen, 
  CheckCircle2, 
  ArrowRight, 
  RefreshCw,
  Clock,
  Layers,
  FileCheck2,
  Building2,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { UserRole, LanguageCode, RagResponse, IndianStandard } from '../types/bis';
import { translations } from '../utils/translations';

interface ChatMessage {
  id: string;
  sender: 'user' | 'sarthi';
  text: string;
  timestamp: string;
  ragData?: RagResponse;
}

interface ChatAssistantProps {
  userRole: UserRole;
  language: LanguageCode;
  initialQuery?: string | null;
  onClearInitialQuery?: () => void;
  onSelectStandard?: (std: IndianStandard) => void;
  onNavigateToTab?: (tab: string) => void;
  onOpenPipelineTrace?: (trace: any) => void;
}

export const ChatAssistant: React.FC<ChatAssistantProps> = ({
  userRole,
  language,
  initialQuery,
  onClearInitialQuery,
  onSelectStandard,
  onNavigateToTab,
  onOpenPipelineTrace,
}) => {
  const t = translations[language]?.chat || translations.en.chat;

  const langMap: Record<LanguageCode, string> = {
    en: 'en-IN',
    hi: 'hi-IN',
    te: 'te-IN',
    ta: 'ta-IN',
    mr: 'mr-IN',
    bn: 'bn-IN',
  };

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      sender: 'sarthi',
      text: `### ${t.welcomeHeading}
${t.welcomeSub}

You can ask me to:
${t.welcomeCapabilities.map(c => `- ${c}`).join('\n')}

*${t.welcomePrompt}*`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);

  // Update welcome message if language switches before user sends messages
  useEffect(() => {
    setMessages((prev) => {
      if (prev.length === 1 && prev[0].id === 'welcome') {
        return [
          {
            id: 'welcome',
            sender: 'sarthi',
            text: `### ${t.welcomeHeading}
${t.welcomeSub}

You can ask me to:
${t.welcomeCapabilities.map(c => `- ${c}`).join('\n')}

*${t.welcomePrompt}*`,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          },
        ];
      }
      return prev;
    });
  }, [language]);

  const [inputQuery, setInputQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [expandedCitations, setExpandedCitations] = useState<Record<string, boolean>>({});

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<any>(null);

  const quickPrompts = t.quickPrompts || [
    { label: '🚰 Packaged Drinking Water Plant', query: 'I want to set up a packaged drinking water plant. What are the mandatory BIS standards, testing parameters, and license requirements under IS 14543?' },
    { label: '🧸 Toy Manufacturing QCO', query: 'Are toys covered under mandatory QCO? What are the mechanical and chemical safety standards under IS 9873?' },
    { label: '⚡ Plugs & Sockets (IS 1293)', query: 'What are the Scheme I ISI certification requirements for domestic 6A and 16A plugs and sockets under IS 1293:2019?' },
    { label: '📱 Lithium Batteries for Mobiles', query: 'Which BIS CRS standard applies to secondary lithium battery packs for smartphones, and which labs can test them?' },
    { label: '☀️ Solar PV Modules (CRS)', query: 'What are the MNRE and BIS CRS registration requirements for crystalline silicon solar PV modules under IS 14286?' },
    { label: '✨ Gold Jewellery HUID Verification', query: 'How does 6-digit alphanumeric HUID hallmarking work for gold jewellery, and how can consumers verify authenticity?' },
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  // Voice Recognition Setup
  useEffect(() => {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = langMap[language] || 'en-IN';

      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setInputQuery(transcript);
        setIsListening(false);
      };

      recognition.onerror = () => {
        setIsListening(false);
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognitionRef.current = recognition;
    }
  }, [language]);

  const toggleVoiceInput = () => {
    if (!recognitionRef.current) {
      alert('Speech Recognition is not supported by your current browser.');
      return;
    }

    if (isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    } else {
      try {
        recognitionRef.current.start();
        setIsListening(true);
      } catch (err) {
        console.error('Error starting recognition:', err);
      }
    }
  };

  const handleSpeakText = (text: string) => {
    if (!window.speechSynthesis) return;

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    // Clean markdown hashes and asterisks for smooth speech
    const cleanText = text
      .replace(/[#*`_\[\]()]/g, ' ')
      .replace(/https?:\/\/\S+/g, '')
      .replace(/\s+/g, ' ')
      .trim();

    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = langMap[language] || 'en-IN';
    utterance.rate = 1.0;

    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    setIsSpeaking(true);
    window.speechSynthesis.speak(utterance);
  };

  const handleSubmit = async (queryText?: string) => {
    const q = (queryText || inputQuery).trim();
    if (!q || isLoading) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: q,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputQuery('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/sarthi/query', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query: q,
          role: userRole,
          language,
          history: messages.slice(-4).map(m => ({ role: m.sender === 'user' ? 'user' : 'model', text: m.text })),
        }),
      });

      if (!response.ok) {
        throw new Error('Server returned an error');
      }

      const data: RagResponse = await response.json();

      const sarthiMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'sarthi',
        text: data.answer,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        ragData: data,
      };

      setMessages(prev => [...prev, sarthiMessage]);
      if (onOpenPipelineTrace && data.pipelineTrace) {
        onOpenPipelineTrace(data);
      }
    } catch (err: any) {
      console.error('Failed to query SARTHI:', err);
      const errorMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'sarthi',
        text: `### ⚠️ Connection Notice
Could not connect to the SARTHI knowledge pipeline. Please verify the server status or try again. You can also directly explore the Indian Standards catalog using the **Standards (IS)** tab above.`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (initialQuery && initialQuery.trim()) {
      handleSubmit(initialQuery.trim());
      onClearInitialQuery?.();
    }
  }, [initialQuery]);

  const toggleCitation = (msgId: string) => {
    setExpandedCitations(prev => ({ ...prev, [msgId]: !prev[msgId] }));
  };

  return (
    <div className="flex flex-col h-[calc(100vh-8.5rem)] max-w-5xl mx-auto px-3 sm:px-6 py-4">
      {/* Messages Scroll Area */}
      <div className="flex-1 overflow-y-auto space-y-4 pr-1 pb-4">
        {messages.map((message) => {
          const isUser = message.sender === 'user';
          const rag = message.ragData;

          return (
            <div
              key={message.id}
              className={`flex gap-3 ${isUser ? 'justify-end' : 'justify-start'}`}
            >
              {!isUser && (
                <div className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-500/30 flex items-center justify-center shrink-0 text-amber-400">
                  <Bot className="w-4 h-4" />
                </div>
              )}

              <div className={`max-w-[94%] sm:max-w-[85%] rounded-2xl p-4 sm:p-5 shadow-sm ${
                isUser
                  ? 'bg-amber-500 text-slate-950 rounded-tr-none font-medium'
                  : 'bg-slate-900 border border-slate-800 text-slate-200 rounded-tl-none'
              }`}>
                {/* Header for SARTHI message */}
                {!isUser && rag && (
                  <div className="flex items-center justify-between gap-2 pb-2.5 mb-3 border-b border-slate-800 text-xs text-slate-400">
                    <div className="flex items-center gap-2">
                      {rag.qualityGate.passed ? (
                        <div className="flex items-center gap-1.5 text-emerald-400 font-medium">
                          <ShieldCheck className="w-3.5 h-3.5" />
                          <span>Authoritative Gazette Source ({rag.qualityGate.confidenceScore}% confidence)</span>
                        </div>
                      ) : rag.intent.isAmbiguous ? (
                        <div className="flex items-center gap-1.5 text-amber-400 font-medium">
                          <AlertTriangle className="w-3.5 h-3.5" />
                          <span>Specification Clarification</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-1.5 text-slate-300">
                          <HelpCircle className="w-3.5 h-3.5" />
                          <span>Official Guidance</span>
                        </div>
                      )}
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleSpeakText(message.text)}
                        title={isSpeaking ? 'Stop Audio' : 'Listen to Audio'}
                        className="p-1 rounded text-slate-400 hover:text-white transition-colors"
                      >
                        {isSpeaking ? <VolumeX className="w-3.5 h-3.5 text-red-400" /> : <Volume2 className="w-3.5 h-3.5" />}
                      </button>
                      <button
                        onClick={() => onOpenPipelineTrace && onOpenPipelineTrace(rag)}
                        className="text-xs text-slate-400 hover:text-amber-300 flex items-center gap-1 transition-colors"
                        title="View RAG Verification Trace"
                      >
                        <Layers className="w-3.5 h-3.5 text-amber-400" />
                        <span className="hidden sm:inline">Trace</span>
                      </button>
                    </div>
                  </div>
                )}

                {/* Message Body (Markdown formatted) */}
                <div className="prose prose-invert prose-sm max-w-none space-y-2 leading-relaxed text-slate-200">
                  {message.text.split('\n\n').map((paragraph, idx) => {
                    if (paragraph.startsWith('### ')) {
                      return <h3 key={idx} className="text-base font-bold text-amber-300 mt-2 mb-1">{paragraph.replace('### ', '')}</h3>;
                    }
                    if (paragraph.startsWith('#### ')) {
                      return <h4 key={idx} className="text-sm font-semibold text-slate-200 mt-2 mb-1">{paragraph.replace('#### ', '')}</h4>;
                    }
                    if (paragraph.startsWith('- ') || paragraph.startsWith('* ')) {
                      const items = paragraph.split('\n');
                      return (
                        <ul key={idx} className="list-disc pl-5 space-y-1 my-1">
                          {items.map((it, iIdx) => (
                            <li key={iIdx} className="text-slate-300" dangerouslySetInnerHTML={{
                              __html: it.replace(/^[-*]\s+/, '').replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')
                            }} />
                          ))}
                        </ul>
                      );
                    }
                    if (/^\d+\.\s/.test(paragraph)) {
                      const items = paragraph.split('\n');
                      return (
                        <ol key={idx} className="list-decimal pl-5 space-y-1 my-1">
                          {items.map((it, iIdx) => (
                            <li key={iIdx} className="text-slate-300" dangerouslySetInnerHTML={{
                              __html: it.replace(/^\d+\.\s+/, '').replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')
                            }} />
                          ))}
                        </ol>
                      );
                    }
                    return (
                      <p key={idx} dangerouslySetInnerHTML={{
                        __html: paragraph.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')
                      }} />
                    );
                  })}
                </div>

                {/* Clarifying Question Cards if ambiguous */}
                {!isUser && rag && rag.intent.isAmbiguous && rag.intent.clarifyingQuestions && (
                  <div className="mt-4 pt-3 border-t border-slate-800">
                    <div className="text-xs font-bold text-amber-400 mb-2 flex items-center gap-1.5">
                      <HelpCircle className="w-3.5 h-3.5" />
                      Select your exact product type to continue:
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {rag.intent.clarifyingQuestions.map((q, qIdx) => (
                        <button
                          key={qIdx}
                          onClick={() => handleSubmit(`Yes, I want to know about: ${q}`)}
                          className="text-left text-xs bg-slate-800/90 hover:bg-slate-800 hover:border-amber-500/50 border border-slate-700 p-2.5 rounded-xl transition-all text-slate-200 flex items-center justify-between group"
                        >
                          <span>{q}</span>
                          <ArrowRight className="w-3.5 h-3.5 text-amber-400 opacity-60 group-hover:opacity-100 shrink-0 ml-2" />
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Retrieved Standards Card Chips */}
                {!isUser && rag && rag.retrievedStandards && rag.retrievedStandards.length > 0 && (
                  <div className="mt-4 pt-3 border-t border-slate-800">
                    <div className="text-xs font-bold text-slate-300 mb-2 flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-amber-400" />
                      Referenced Indian Standards:
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {rag.retrievedStandards.map((std) => (
                        <div
                          key={std.id}
                          className="bg-slate-950/70 border border-slate-800 hover:border-slate-700 p-2.5 rounded-xl text-xs flex flex-col justify-between"
                        >
                          <div>
                            <div className="flex items-center justify-between gap-1 mb-1">
                              <span className="font-mono font-bold text-amber-400">{std.isNumber}</span>
                              <span className={`text-[10px] px-1.5 py-0.5 rounded font-semibold ${
                                std.isMandatoryQCO ? 'bg-red-950 text-red-400 border border-red-800/50' : 'bg-slate-800 text-slate-400'
                              }`}>
                                {std.isMandatoryQCO ? 'Mandatory QCO' : 'Voluntary'}
                              </span>
                            </div>
                            <p className="text-slate-300 font-medium line-clamp-1">{std.title}</p>
                            <p className="text-[11px] text-slate-400 mt-1 line-clamp-2">{std.scope}</p>
                          </div>

                          <div className="mt-2.5 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px]">
                            <span className="text-slate-400 font-mono">{std.scheme}</span>
                            {onSelectStandard && (
                              <button
                                onClick={() => onSelectStandard(std)}
                                className="text-amber-400 hover:text-amber-300 font-semibold flex items-center gap-1"
                              >
                                View Specs
                                <ArrowRight className="w-3 h-3" />
                              </button>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Expandable Citations and Gazette Verification */}
                {!isUser && rag && rag.citations && rag.citations.length > 0 && (
                  <div className="mt-3 pt-2 border-t border-slate-800/60">
                    <button
                      onClick={() => toggleCitation(message.id)}
                      className="text-xs text-slate-400 hover:text-slate-200 flex items-center gap-1.5 font-medium transition-colors"
                    >
                      <FileCheck2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Regulatory Citations & Gazette References ({rag.citations.length})</span>
                      {expandedCitations[message.id] ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </button>

                    {expandedCitations[message.id] && (
                      <div className="mt-2 space-y-1.5 bg-slate-950/60 p-2.5 rounded-xl border border-slate-800 text-xs">
                        {rag.citations.map((cite, cIdx) => (
                          <div key={cIdx} className="flex items-start justify-between gap-2 py-1 border-b border-slate-800/50 last:border-0">
                            <div>
                              <div className="font-semibold text-slate-200">{cite.title}</div>
                              <div className="text-[11px] text-slate-400 font-mono">
                                Ref: {cite.documentNumber} • Year/Date: {cite.versionOrYear} {cite.clause ? `• ${cite.clause}` : ''}
                              </div>
                            </div>
                            <a
                              href={cite.sourceUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-amber-400 hover:text-amber-300 p-1 shrink-0"
                              title="Open official regulatory document"
                            >
                              <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* Follow up suggestions */}
                {!isUser && rag && rag.suggestedFollowUps && rag.suggestedFollowUps.length > 0 && (
                  <div className="mt-3 pt-2 border-t border-slate-800/60 flex flex-wrap gap-1.5">
                    {rag.suggestedFollowUps.slice(0, 3).map((fup, fIdx) => (
                      <button
                        key={fIdx}
                        onClick={() => handleSubmit(fup)}
                        className="text-[11px] bg-slate-800 hover:bg-slate-700/80 text-amber-300/90 border border-slate-700/80 px-2.5 py-1 rounded-lg transition-colors flex items-center gap-1"
                      >
                        <Sparkles className="w-3 h-3 text-amber-400" />
                        <span>{fup}</span>
                      </button>
                    ))}
                  </div>
                )}

                {/* Timestamp */}
                <div className={`text-[10px] mt-2 ${isUser ? 'text-orange-200 text-right' : 'text-slate-500 text-left'}`}>
                  {message.timestamp}
                </div>
              </div>

              {isUser && (
                <div className="w-9 h-9 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center shrink-0 text-slate-300 font-bold text-xs">
                  YOU
                </div>
              )}
            </div>
          );
        })}

        {/* Loading Indicator */}
        {isLoading && (
          <div className="flex gap-3 justify-start">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shrink-0 animate-pulse">
              <Bot className="w-5 h-5 text-slate-950 font-bold" />
            </div>
            <div className="bg-slate-900 border border-slate-800 rounded-2xl rounded-tl-none p-4 max-w-[80%] space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-amber-400">
                <RefreshCw className="w-4 h-4 animate-spin text-amber-400" />
                <span>Executing 5-Step RAG Pipeline...</span>
              </div>
              <div className="flex items-center gap-2 text-[11px] text-slate-400 font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                <span>Searching 22,000+ Indian Standards & Cross-checking Gazette QCO Orders</span>
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Suggested Quick Question Chips */}
      <div className="pt-2 pb-1 overflow-x-auto no-scrollbar flex items-center gap-2 shrink-0">
        <span className="text-[11px] font-bold text-slate-400 shrink-0 uppercase tracking-wider">
          {t.suggestedQueriesTitle}:
        </span>
        {quickPrompts.map((p, idx) => (
          <button
            key={idx}
            onClick={() => handleSubmit(p.query)}
            className="text-xs bg-slate-800/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/80 px-3 py-1.5 rounded-full whitespace-nowrap transition-all shadow-sm shrink-0"
          >
            {p.label}
          </button>
        ))}
      </div>

      {/* Input Form Bar */}
      <div className="pt-2 shrink-0">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
          className="relative flex items-center gap-2 bg-slate-900 border border-slate-700 focus-within:border-amber-500/80 rounded-2xl p-1.5 shadow-xl transition-all"
        >
          {/* Voice Input Button */}
          <button
            type="button"
            onClick={toggleVoiceInput}
            title={isListening ? 'Stop voice recording' : 'Voice input'}
            className={`p-2.5 rounded-xl transition-all ${
              isListening
                ? 'bg-red-500/20 text-red-400 border border-red-500/40 animate-pulse'
                : 'text-slate-400 hover:text-amber-400 hover:bg-slate-800'
            }`}
          >
            {isListening ? <MicOff className="w-5 h-5 text-red-400" /> : <Mic className="w-5 h-5" />}
          </button>

          <input
            type="text"
            value={inputQuery}
            onChange={(e) => setInputQuery(e.target.value)}
            placeholder={
              isListening
                ? t.listening
                : t.inputPlaceholder
            }
            className="flex-1 bg-transparent px-2 py-2 text-sm text-slate-100 placeholder-slate-500 focus:outline-none"
            disabled={isLoading}
          />

          <button
            type="submit"
            disabled={!inputQuery.trim() || isLoading}
            className={`p-2.5 rounded-xl font-bold flex items-center justify-center transition-all ${
              inputQuery.trim() && !isLoading
                ? 'bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-md shadow-amber-500/20'
                : 'bg-slate-800 text-slate-600 cursor-not-allowed'
            }`}
          >
            <Send className="w-5 h-5" />
          </button>
        </form>
      </div>
    </div>
  );
};
