import React, { useState } from 'react';
import { 
  Award, 
  CheckCircle2, 
  Calculator, 
  FileText, 
  HelpCircle, 
  ArrowRight, 
  Building2, 
  Sparkles,
  ExternalLink,
  Percent,
  Clock,
  ShieldAlert,
  Coins
} from 'lucide-react';
import { BIS_SCHEMES, CertificationScheme } from '../data/bisSchemes';
import { UserRole, LanguageCode } from '../types/bis';
import { translations } from '../utils/translations';

interface CertificationGuideProps {
  userRole: UserRole;
  onAskSchemeQuestion: (query: string) => void;
  language: LanguageCode;
}

export const CertificationGuide: React.FC<CertificationGuideProps> = ({
  userRole,
  onAskSchemeQuestion,
  language,
}) => {
  const t = translations[language]?.schemes || translations.en.schemes;
  const [selectedSchemeId, setSelectedSchemeId] = useState<string>('scheme-1');
  const [enterpriseType, setEnterpriseType] = useState<'micro' | 'small' | 'medium' | 'large'>('micro');
  const [isWomenOwned, setIsWomenOwned] = useState(false);
  const [productRiskLevel, setProductRiskLevel] = useState<'standard' | 'high' | 'electronics'>('standard');

  const activeScheme = BIS_SCHEMES.find(s => s.id === selectedSchemeId) || BIS_SCHEMES[0];

  // Fee calculation logic
  const calculateFees = () => {
    let baseAppFee = activeScheme.fees.applicationFee;
    let baseAnnualFee = activeScheme.fees.annualLicenseFee;
    let estimatedTesting = productRiskLevel === 'high' ? 45000 : productRiskLevel === 'electronics' ? 65000 : 25000;

    let discountPercentage = 0;
    if (activeScheme.code === 'Scheme-I') {
      if (enterpriseType === 'micro' || enterpriseType === 'small' || isWomenOwned) {
        discountPercentage = 20; // 20% concession for MSMEs under DPIIT & BIS rules
      }
    } else if (activeScheme.code === 'Hallmarking') {
      discountPercentage = 100; // Registration fee is free for jewellers
    }

    const appFeeDiscount = (baseAppFee * discountPercentage) / 100;
    const finalAppFee = baseAppFee - appFeeDiscount;

    const annualFeeDiscount = (baseAnnualFee * discountPercentage) / 100;
    const finalAnnualFee = baseAnnualFee - annualFeeDiscount;

    const totalPayableGovt = finalAppFee + finalAnnualFee;
    const totalEstimated = totalPayableGovt + estimatedTesting;
    const totalSavings = appFeeDiscount + annualFeeDiscount;

    return {
      baseAppFee,
      finalAppFee,
      baseAnnualFee,
      finalAnnualFee,
      estimatedTesting,
      totalPayableGovt,
      totalEstimated,
      discountPercentage,
      totalSavings,
    };
  };

  const fees = calculateFees();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-8">
      {/* Header Banner */}
      <div className="bg-slate-900 border border-slate-800 p-6 sm:p-8 rounded-3xl shadow-sm relative overflow-hidden">
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-amber-500/15 border border-amber-500/30 text-amber-300 px-3 py-1 rounded-full text-xs font-semibold mb-3">
            <Award className="w-3.5 h-3.5" />
            Conformity Assessment Regulations, 2018
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-white">
            {t.title}
          </h1>
          <p className="text-sm text-slate-300 mt-2 leading-relaxed">
            {t.subtitle}
          </p>
        </div>
      </div>

      {/* Scheme Selection Tabs */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {BIS_SCHEMES.map((scheme) => {
          const isSelected = scheme.id === selectedSchemeId;
          return (
            <button
              key={scheme.id}
              onClick={() => setSelectedSchemeId(scheme.id)}
              className={`p-4 rounded-2xl text-left border transition-all ${
                isSelected
                  ? 'bg-amber-500/15 border-amber-500/60 shadow-lg shadow-amber-500/10'
                  : 'bg-slate-900 border-slate-800 hover:border-slate-700 hover:bg-slate-850'
              }`}
            >
              <div className="text-xs font-mono font-bold text-amber-400 mb-1">
                {scheme.code}
              </div>
              <div className="font-bold text-white text-sm line-clamp-1">
                {scheme.name.split('—')[1] || scheme.name}
              </div>
              <div className="text-[11px] text-slate-400 mt-1 flex items-center gap-1">
                <Clock className="w-3 h-3" />
                ~{scheme.typicalDurationDays} days turnaround
              </div>
            </button>
          );
        })}
      </div>

      {/* Main Scheme Overview & Roadmap */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left 2 Cols: Step-by-Step Pathway */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-4">
              <div>
                <span className="text-xs font-bold text-amber-400 uppercase font-mono tracking-wider">
                  Selected Scheme
                </span>
                <h2 className="text-xl font-bold text-white mt-0.5">
                  {activeScheme.name}
                </h2>
                <p className="text-xs text-slate-400 mt-1">
                  Target Audience: {activeScheme.targetAudience}
                </p>
              </div>

              <a
                href={activeScheme.applicationPortal.includes('manakonline') ? 'https://www.manakonline.in' : 'https://www.crsbis.in'}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs bg-slate-800 hover:bg-slate-700 text-amber-300 border border-slate-700 px-3 py-1.5 rounded-xl font-semibold flex items-center gap-1.5 transition-colors"
              >
                <span>{activeScheme.applicationPortal.split(' ')[0]}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              {activeScheme.description}
            </p>

            {/* Stepper Timeline */}
            <div className="space-y-4 pt-2">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                {t.stepRoadmap}
              </h3>

              <div className="space-y-3">
                {activeScheme.steps.map((st, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-950/70 border border-slate-800/80 p-4 rounded-2xl flex items-start gap-3.5"
                  >
                    <div className="w-8 h-8 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 font-mono font-bold text-xs shrink-0 mt-0.5">
                      {idx + 1}
                    </div>
                    <div className="flex-1">
                      <div className="font-bold text-white text-sm">{st.title}</div>
                      <p className="text-xs text-slate-300 mt-1 leading-relaxed">{st.description}</p>
                      <div className="mt-2 text-[11px] text-amber-300/80 font-mono bg-amber-950/30 px-2.5 py-1 rounded-lg border border-amber-900/40 inline-flex items-center gap-1">
                        <FileText className="w-3 h-3 text-amber-400" />
                        <span>Key Document: {st.actionableDoc}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Eligibility Requirements */}
            <div className="pt-4 border-t border-slate-800">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                Mandatory Eligibility Prerequisites
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                {activeScheme.eligibility.map((item, eIdx) => (
                  <li key={eIdx} className="flex items-center gap-2 bg-slate-950/50 p-2.5 rounded-xl border border-slate-800/60">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Right 1 Col: Interactive MSME Fee & Concession Calculator */}
        <div className="space-y-6">
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl space-y-5">
            <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider border-b border-slate-800 pb-3">
              <Calculator className="w-4 h-4" />
              <span>{t.calcTitle}</span>
            </div>

            {/* Enterprise Size Selector */}
            <div className="space-y-2">
              <label className="text-xs text-slate-400 font-medium">{t.enterpriseType}:</label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { key: 'micro', label: 'Micro Enterprise (< ₹1 Cr)' },
                  { key: 'small', label: 'Small Enterprise (< ₹10 Cr)' },
                  { key: 'medium', label: 'Medium Enterprise' },
                  { key: 'large', label: 'Large Industry' },
                ].map((item) => (
                  <button
                    key={item.key}
                    onClick={() => setEnterpriseType(item.key as any)}
                    className={`px-3 py-2 rounded-xl text-xs font-semibold border text-left transition-all ${
                      enterpriseType === item.key
                        ? 'bg-amber-500/20 text-amber-300 border-amber-500/60'
                        : 'bg-slate-950 text-slate-400 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Women Entrepreneur / Startup Concession Toggle */}
            <div className="flex items-center justify-between bg-slate-950/70 p-3 rounded-xl border border-slate-800">
              <div className="text-xs">
                <div className="font-semibold text-slate-200">Women-Led / DPIIT Startup</div>
                <div className="text-[11px] text-slate-500">Qualifies for maximum fee concession</div>
              </div>
              <input
                type="checkbox"
                checked={isWomenOwned}
                onChange={(e) => setIsWomenOwned(e.target.checked)}
                className="w-4 h-4 rounded text-amber-500 focus:ring-amber-500 bg-slate-900 border-slate-700"
              />
            </div>

            {/* Product Testing Complexity */}
            <div className="space-y-2">
              <label className="text-xs text-slate-400 font-medium">Testing Scope Category:</label>
              <select
                value={productRiskLevel}
                onChange={(e) => setProductRiskLevel(e.target.value as any)}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-amber-500"
              >
                <option value="standard">Standard Industrial / Mechanical (~₹25,000)</option>
                <option value="high">Safety Critical / High Pressure (~₹45,000)</option>
                <option value="electronics">Electronics / Battery Safety (~₹65,000)</option>
              </select>
            </div>

            {/* Computed Breakdown Card */}
            <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-2.5 text-xs">
              <div className="flex justify-between text-slate-400">
                <span>Application Fee:</span>
                <span className="font-mono text-slate-200">
                  {fees.discountPercentage > 0 && <span className="line-through text-slate-500 mr-1.5">₹{fees.baseAppFee}</span>}
                  ₹{fees.finalAppFee.toLocaleString('en-IN')}
                </span>
              </div>

              <div className="flex justify-between text-slate-400">
                <span>Annual License / Marking Fee:</span>
                <span className="font-mono text-slate-200">
                  {fees.discountPercentage > 0 && <span className="line-through text-slate-500 mr-1.5">₹{fees.baseAnnualFee}</span>}
                  ₹{fees.finalAnnualFee.toLocaleString('en-IN')}
                </span>
              </div>

              <div className="flex justify-between text-slate-400">
                <span>Estimated Lab Testing Fee:</span>
                <span className="font-mono text-slate-200">₹{fees.estimatedTesting.toLocaleString('en-IN')}</span>
              </div>

              {fees.discountPercentage > 0 && (
                <div className="flex justify-between text-emerald-400 font-semibold pt-1 border-t border-slate-800">
                  <span>MSME Concession ({fees.discountPercentage}%):</span>
                  <span className="font-mono">-₹{fees.totalSavings.toLocaleString('en-IN')}</span>
                </div>
              )}

              <div className="flex justify-between text-white font-bold text-sm pt-2 border-t border-slate-800">
                <span>Total Estimated Cost:</span>
                <span className="font-mono text-amber-400">₹{fees.totalEstimated.toLocaleString('en-IN')}</span>
              </div>
            </div>

            {/* Quick Consultation Button */}
            <button
              onClick={() => onAskSchemeQuestion(`How can a ${enterpriseType} enterprise apply for ${activeScheme.name} on Manakonline, and what exact documents are needed to claim the 20% MSME concession?`)}
              className="w-full bg-gradient-to-r from-orange-500 to-amber-500 text-slate-950 font-bold text-xs py-3 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-orange-500/20 hover:opacity-95"
            >
              <Sparkles className="w-4 h-4" />
              <span>{t.consultSarthi}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
