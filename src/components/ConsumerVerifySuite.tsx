import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Search, 
  AlertTriangle, 
  CheckCircle2, 
  XCircle, 
  ExternalLink, 
  Building, 
  Calendar, 
  MapPin, 
  Sparkles,
  HelpCircle,
  FileWarning,
  Award,
  Sparkle
} from 'lucide-react';
import { VERIFIED_ISI_LICENSES, VERIFIED_HUID_RECORDS, VERIFIED_CRS_RECORDS } from '../data/verificationSamples';
import { ISILicenseRecord, HUIDRecord, CRSRecord, LanguageCode } from '../types/bis';
import { translations } from '../utils/translations';

interface ConsumerVerifySuiteProps {
  onAskAboutGrievance: (query: string) => void;
  language: LanguageCode;
}

export const ConsumerVerifySuite: React.FC<ConsumerVerifySuiteProps> = ({
  onAskAboutGrievance,
  language,
}) => {
  const t = translations[language]?.verify || translations.en.verify;
  const [activeTool, setActiveTool] = useState<'huid' | 'isi' | 'crs' | 'grievance'>('huid');

  // HUID State
  const [huidInput, setHuidInput] = useState('AA72K9');
  const [huidResult, setHuidResult] = useState<HUIDRecord | null>(VERIFIED_HUID_RECORDS[0]);
  const [huidError, setHuidError] = useState<string | null>(null);

  // ISI CM/L State
  const [cmlInput, setCmlInput] = useState('8400192384');
  const [cmlResult, setCmlResult] = useState<ISILicenseRecord | null>(VERIFIED_ISI_LICENSES[0]);
  const [cmlError, setCmlError] = useState<string | null>(null);

  // CRS State
  const [crsInput, setCrsInput] = useState('R-41029384');
  const [crsResult, setCrsResult] = useState<CRSRecord | null>(VERIFIED_CRS_RECORDS[0]);
  const [crsError, setCrsError] = useState<string | null>(null);

  // Verification Handlers
  const handleVerifyHuid = (codeToVerify?: string) => {
    const code = (codeToVerify || huidInput).trim().toUpperCase();
    if (!code) return;

    const match = VERIFIED_HUID_RECORDS.find(h => h.huid === code);
    if (match) {
      setHuidResult(match);
      setHuidError(null);
    } else {
      setHuidResult(null);
      setHuidError(`HUID "${code}" is not registered in the central BIS Hallmarking Unique Identification database. Suspected non-hallmarked or fake jewellery.`);
    }
  };

  const handleVerifyCml = (numToVerify?: string) => {
    const num = (numToVerify || cmlInput).trim().replace(/\D/g, '');
    if (!num) return;

    const match = VERIFIED_ISI_LICENSES.find(l => l.cmlNumber === num);
    if (match) {
      setCmlResult(match);
      setCmlError(null);
    } else {
      setCmlResult(null);
      setCmlError(`CM/L License "${num}" not found in operative license database. Verify the 7-10 digit number stamped beneath the ISI logo.`);
    }
  };

  const handleVerifyCrs = (numToVerify?: string) => {
    const num = (numToVerify || crsInput).trim().toUpperCase();
    if (!num) return;

    const match = VERIFIED_CRS_RECORDS.find(r => r.registrationNumber === num || r.registrationNumber.replace('-', '') === num.replace('-', ''));
    if (match) {
      setCrsResult(match);
      setCrsError(null);
    } else {
      setCrsResult(null);
      setCrsError(`CRS Registration number "${num}" is not recognized.`);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-6">
      {/* Header Banner */}
      <div className="bg-slate-900 border border-slate-800 p-6 sm:p-8 rounded-3xl shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 px-3 py-1 rounded-full text-xs font-semibold mb-2">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              BIS Care Citizen Verification Suite
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-white">
              {t.title}
            </h1>
            <p className="text-sm text-slate-300 mt-1 max-w-2xl">
              {t.subtitle}
            </p>
          </div>

          <a
            href="https://www.bis.gov.in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs bg-slate-800 hover:bg-slate-700 text-amber-300 border border-slate-700 px-4 py-2.5 rounded-xl font-semibold flex items-center gap-1.5 transition-colors shrink-0"
          >
            <span>Official BIS Care App</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Tool Switcher */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-6 pt-4 border-t border-slate-800">
          <button
            onClick={() => setActiveTool('huid')}
            className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
              activeTool === 'huid'
                ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            <span>✨ {t.huidTab}</span>
          </button>

          <button
            onClick={() => setActiveTool('isi')}
            className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
              activeTool === 'isi'
                ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            <span>🛡️ {t.isiTab}</span>
          </button>

          <button
            onClick={() => setActiveTool('crs')}
            className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
              activeTool === 'crs'
                ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            <span>📱 {t.crsTab}</span>
          </button>

          <button
            onClick={() => setActiveTool('grievance')}
            className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
              activeTool === 'grievance'
                ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            <span>🚨 Consumer Grievance</span>
          </button>
        </div>
      </div>

      {/* Tool 1: Gold Jewellery HUID Verifier */}
      {activeTool === 'huid' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1 bg-slate-900 border border-slate-800 p-6 rounded-3xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider">
              <span>HUID Code Inspector</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Every hallmarked gold jewellery piece in India has a laser-inscribed 6-digit alphanumeric code guaranteeing purity.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleVerifyHuid();
              }}
              className="space-y-3"
            >
              <div>
                <label className="text-xs text-slate-400 font-medium">{t.verifySubtitle}</label>
                <input
                  type="text"
                  maxLength={6}
                  value={huidInput}
                  onChange={(e) => setHuidInput(e.target.value.toUpperCase())}
                  placeholder="e.g. AA72K9"
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-lg font-mono font-bold tracking-widest text-amber-400 placeholder-slate-600 focus:outline-none focus:border-amber-500 text-center uppercase mt-1"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs py-3 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md shadow-amber-500/20"
              >
                <Search className="w-4 h-4" />
                <span>{t.verifyButton}</span>
              </button>
            </form>

            {/* Quick Sample Clickers */}
            <div className="pt-2 border-t border-slate-800">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                {t.sampleCode}:
              </span>
              <div className="flex flex-wrap gap-2 mt-2">
                {VERIFIED_HUID_RECORDS.map((rec) => (
                  <button
                    key={rec.huid}
                    onClick={() => {
                      setHuidInput(rec.huid);
                      handleVerifyHuid(rec.huid);
                    }}
                    className="text-xs font-mono font-bold bg-slate-950 hover:bg-slate-800 text-amber-300 border border-slate-800 px-2.5 py-1 rounded-lg transition-colors"
                  >
                    {rec.huid} ({rec.purity})
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* HUID Result Card */}
          <div className="lg:col-span-2">
            {huidResult ? (
              <div className="bg-slate-900 border border-emerald-500/40 p-6 sm:p-8 rounded-3xl shadow-xl space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xl font-black font-mono text-amber-400 tracking-wider">
                          {huidResult.huid}
                        </span>
                        <span className="bg-emerald-950 text-emerald-300 text-xs px-2.5 py-0.5 rounded-full border border-emerald-800 font-semibold">
                          {huidResult.verifiedStatus}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400">
                        Official BIS Assaying & Hallmarking Center Record
                      </p>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="text-xs text-slate-400">Hallmarking Date</div>
                    <div className="font-mono text-sm font-bold text-white">{huidResult.hallmarkingDate}</div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="bg-slate-950/70 p-4 rounded-2xl border border-slate-800 space-y-1">
                    <span className="text-slate-400">Certified Gold Purity:</span>
                    <p className="text-lg font-black text-amber-400">{huidResult.purity}</p>
                    <p className="text-[11px] text-slate-400">22 Karat (91.6% Pure Gold per IS 1417)</p>
                  </div>

                  <div className="bg-slate-950/70 p-4 rounded-2xl border border-slate-800 space-y-1">
                    <span className="text-slate-400">Article Type:</span>
                    <p className="text-sm font-bold text-white">{huidResult.articleType}</p>
                    <p className="text-[11px] text-slate-400">Laser Inscription Verified</p>
                  </div>

                  <div className="bg-slate-950/70 p-4 rounded-2xl border border-slate-800 space-y-1">
                    <span className="text-slate-400">Registered Jeweller:</span>
                    <p className="text-sm font-bold text-white">{huidResult.jewellerName}</p>
                    <p className="text-[11px] font-mono text-slate-400">Reg: {huidResult.jewellerRegistrationNumber}</p>
                  </div>

                  <div className="bg-slate-950/70 p-4 rounded-2xl border border-slate-800 space-y-1">
                    <span className="text-slate-400">Assaying Centre (AHC):</span>
                    <p className="text-sm font-bold text-white">{huidResult.ahcCenterName}</p>
                    <p className="text-[11px] font-mono text-slate-400">Code: {huidResult.ahcCenterCode} • {huidResult.city}, {huidResult.state}</p>
                  </div>
                </div>

                {/* 3 Marks Guide */}
                <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800/80">
                  <div className="text-xs font-bold text-slate-300 mb-2">
                    Official Gold Hallmarking Triangle (Mandatory on All Jewellery):
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-center text-xs">
                    <div className="bg-slate-900 p-2.5 rounded-xl border border-slate-800">
                      <div className="font-bold text-amber-400">1. BIS Standard Logo</div>
                      <div className="text-[10px] text-slate-400 mt-0.5">Triangular stamp</div>
                    </div>
                    <div className="bg-slate-900 p-2.5 rounded-xl border border-slate-800">
                      <div className="font-bold text-amber-400">2. Purity & Fineness</div>
                      <div className="text-[10px] text-slate-400 mt-0.5">e.g. 22K916 / 18K750</div>
                    </div>
                    <div className="bg-slate-900 p-2.5 rounded-xl border border-slate-800">
                      <div className="font-bold text-amber-400">3. 6-Digit HUID</div>
                      <div className="text-[10px] text-slate-400 mt-0.5">Unique laser code</div>
                    </div>
                  </div>
                </div>
              </div>
            ) : huidError ? (
              <div className="bg-slate-900 border border-red-500/40 p-6 sm:p-8 rounded-3xl shadow-xl space-y-4">
                <div className="flex items-center gap-3 text-red-400">
                  <XCircle className="w-8 h-8" />
                  <div>
                    <h3 className="text-lg font-bold text-white">Verification Failed</h3>
                    <p className="text-xs text-red-300">{huidError}</p>
                  </div>
                </div>

                <div className="bg-red-950/20 border border-red-800/40 p-4 rounded-2xl text-xs text-slate-300 space-y-2">
                  <div className="font-bold text-red-300">Consumer Advisory:</div>
                  <p>
                    Selling gold jewellery without a genuine BIS hallmarking stamp and valid HUID is prohibited under the Hallmarking Order, 2020. You may lodge a complaint via the Grievance tab.
                  </p>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      )}

      {/* Tool 2: ISI Mark CM/L Verifier */}
      {activeTool === 'isi' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1 bg-slate-900 border border-slate-800 p-6 rounded-3xl space-y-4">
            <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">
              <span>ISI License (CM/L) Verifier</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Every genuine ISI mark product bears a unique CM/L (Certificate of Manufacture & License) number of 7 to 10 digits directly below the ISI logo.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleVerifyCml();
              }}
              className="space-y-3"
            >
              <div>
                <label className="text-xs text-slate-400 font-medium">Enter CM/L License Number:</label>
                <input
                  type="text"
                  value={cmlInput}
                  onChange={(e) => setCmlInput(e.target.value)}
                  placeholder="e.g. 8400192384"
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-lg font-mono font-bold tracking-wider text-amber-400 placeholder-slate-600 focus:outline-none focus:border-amber-500 text-center mt-1"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs py-3 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md shadow-amber-500/20"
              >
                <Search className="w-4 h-4" />
                <span>Verify License Status</span>
              </button>
            </form>

            <div className="pt-2 border-t border-slate-800">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                Click Sample CM/L Numbers:
              </span>
              <div className="flex flex-col gap-1.5 mt-2">
                {VERIFIED_ISI_LICENSES.slice(0, 4).map((lic) => (
                  <button
                    key={lic.cmlNumber}
                    onClick={() => {
                      setCmlInput(lic.cmlNumber);
                      handleVerifyCml(lic.cmlNumber);
                    }}
                    className="text-left text-xs font-mono bg-slate-950 hover:bg-slate-800 text-slate-200 border border-slate-800 p-2 rounded-lg transition-colors flex items-center justify-between"
                  >
                    <span className="text-amber-400 font-bold">{lic.cmlNumber}</span>
                    <span className="text-[11px] text-slate-400 font-sans truncate max-w-[150px]">{lic.productName}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Result Card */}
          <div className="lg:col-span-2">
            {cmlResult ? (
              <div className="bg-slate-900 border border-emerald-500/40 p-6 sm:p-8 rounded-3xl shadow-xl space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xl font-black font-mono text-amber-400">
                          CM/L - {cmlResult.cmlNumber}
                        </span>
                        <span className={`text-xs px-2.5 py-0.5 rounded-full font-semibold border ${
                          cmlResult.status === 'Operative'
                            ? 'bg-emerald-950 text-emerald-300 border-emerald-800'
                            : 'bg-red-950 text-red-300 border-red-800'
                        }`}>
                          {cmlResult.status}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400">
                        {cmlResult.scheme} • Indian Standard {cmlResult.isNumber}
                      </p>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="text-xs text-slate-400">Validity Period</div>
                    <div className="font-mono text-xs font-bold text-white">
                      {cmlResult.validFrom} to {cmlResult.validUpto}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="bg-slate-950/70 p-4 rounded-2xl border border-slate-800 space-y-1">
                    <span className="text-slate-400">Product Certified:</span>
                    <p className="text-sm font-bold text-white">{cmlResult.productName}</p>
                    <p className="text-[11px] font-mono text-amber-400">{cmlResult.isNumber}</p>
                  </div>

                  <div className="bg-slate-950/70 p-4 rounded-2xl border border-slate-800 space-y-1">
                    <span className="text-slate-400">Authorized Brand Name:</span>
                    <p className="text-sm font-bold text-white">{cmlResult.brand}</p>
                  </div>

                  <div className="bg-slate-950/70 p-4 rounded-2xl border border-slate-800 space-y-1 sm:col-span-2">
                    <span className="text-slate-400">Licensee & Factory Address:</span>
                    <p className="text-sm font-bold text-white">{cmlResult.licenseeName}</p>
                    <p className="text-xs text-slate-400 mt-1 flex items-start gap-1">
                      <MapPin className="w-3.5 h-3.5 text-red-400 shrink-0 mt-0.5" />
                      <span>{cmlResult.factoryAddress}</span>
                    </p>
                  </div>
                </div>
              </div>
            ) : cmlError ? (
              <div className="bg-slate-900 border border-red-500/40 p-6 sm:p-8 rounded-3xl shadow-xl space-y-4">
                <div className="flex items-center gap-3 text-red-400">
                  <XCircle className="w-8 h-8" />
                  <div>
                    <h3 className="text-lg font-bold text-white">License Record Not Found</h3>
                    <p className="text-xs text-red-300">{cmlError}</p>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      )}

      {/* Tool 3: CRS Electronics R-Number Verifier */}
      {activeTool === 'crs' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1 bg-slate-900 border border-slate-800 p-6 rounded-3xl space-y-4">
            <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">
              <span>CRS Registration (R-No)</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Check electronics, laptops, mobile phones, batteries, and solar panels under the MeitY / MNRE Compulsory Registration Scheme.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleVerifyCrs();
              }}
              className="space-y-3"
            >
              <div>
                <label className="text-xs text-slate-400 font-medium">Enter Registration Number:</label>
                <input
                  type="text"
                  value={crsInput}
                  onChange={(e) => setCrsInput(e.target.value)}
                  placeholder="e.g. R-41029384"
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-base font-mono font-bold tracking-wider text-amber-400 placeholder-slate-600 focus:outline-none focus:border-amber-500 text-center uppercase mt-1"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs py-3 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md shadow-amber-500/20"
              >
                <Search className="w-4 h-4" />
                <span>Lookup CRS Registration</span>
              </button>
            </form>

            <div className="pt-2 border-t border-slate-800">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                Click Sample CRS Records:
              </span>
              <div className="flex flex-col gap-1.5 mt-2">
                {VERIFIED_CRS_RECORDS.map((rec) => (
                  <button
                    key={rec.registrationNumber}
                    onClick={() => {
                      setCrsInput(rec.registrationNumber);
                      handleVerifyCrs(rec.registrationNumber);
                    }}
                    className="text-left text-xs font-mono bg-slate-950 hover:bg-slate-800 text-slate-200 border border-slate-800 p-2 rounded-lg transition-colors flex items-center justify-between"
                  >
                    <span className="text-amber-400 font-bold">{rec.registrationNumber}</span>
                    <span className="text-[11px] text-slate-400 font-sans truncate max-w-[150px]">{rec.brand}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            {crsResult && (
              <div className="bg-slate-900 border border-emerald-500/40 p-6 sm:p-8 rounded-3xl shadow-xl space-y-6">
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <div>
                    <span className="font-mono text-xl font-black text-amber-400">{crsResult.registrationNumber}</span>
                    <h3 className="text-base font-bold text-white">{crsResult.applicantName}</h3>
                  </div>
                  <span className="bg-emerald-950 text-emerald-300 text-xs px-3 py-1 rounded-full border border-emerald-800 font-semibold">
                    {crsResult.status}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="bg-slate-950/70 p-4 rounded-2xl border border-slate-800">
                    <span className="text-slate-400">Brand & Category:</span>
                    <p className="text-sm font-bold text-white mt-0.5">{crsResult.brand}</p>
                    <p className="text-slate-300">{crsResult.productCategory}</p>
                  </div>

                  <div className="bg-slate-950/70 p-4 rounded-2xl border border-slate-800">
                    <span className="text-slate-400">Applicable Standard:</span>
                    <p className="text-sm font-mono font-bold text-amber-400 mt-0.5">{crsResult.isStandard}</p>
                    <p className="text-slate-400">Valid Upto: {crsResult.validUpto}</p>
                  </div>

                  <div className="bg-slate-950/70 p-4 rounded-2xl border border-slate-800 sm:col-span-2">
                    <span className="text-slate-400">Registered Models:</span>
                    <div className="flex flex-wrap gap-2 mt-1.5">
                      {crsResult.modelNumbers.map((m, mIdx) => (
                        <span key={mIdx} className="bg-slate-900 border border-slate-700 px-2.5 py-1 rounded-lg font-mono text-slate-200">
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Tool 4: Consumer Grievance & Spurious Mark Assistant */}
      {activeTool === 'grievance' && (
        <div className="bg-slate-900 border border-slate-800 p-6 sm:p-8 rounded-3xl space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-red-500/20 border border-red-500/30 flex items-center justify-center text-red-400">
              <FileWarning className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">
                Report Spurious ISI Mark or Non-Hallmarked Gold
              </h2>
              <p className="text-xs text-slate-400">
                Lodge formal complaints under the BIS Act, 2016 for sub-standard products, fake marks, or overcharging.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <div className="bg-slate-950/70 p-4 rounded-2xl border border-slate-800 space-y-2">
              <div className="font-bold text-amber-400">1. Evidence Collection</div>
              <p className="text-slate-300 leading-relaxed">
                Take photographs of the product packaging, front/back label showing the fake ISI logo, purchase invoice, and the retailer's store board.
              </p>
            </div>

            <div className="bg-slate-950/70 p-4 rounded-2xl border border-slate-800 space-y-2">
              <div className="font-bold text-amber-400">2. Lodging on BIS Care</div>
              <p className="text-slate-300 leading-relaxed">
                Log into the BIS Care Mobile App or Manakonline Grievance portal. Select complaint type (Quality Grievance vs Misuse of BIS Standard Mark).
              </p>
            </div>

            <div className="bg-slate-950/70 p-4 rounded-2xl border border-slate-800 space-y-2">
              <div className="font-bold text-amber-400">3. Enforcement Raid & Action</div>
              <p className="text-slate-300 leading-relaxed">
                BIS Enforcement Branch conducts search and seizure operations. Complainants receive tracking updates and redressal reports.
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
            <div className="text-xs text-slate-400">
              Toll-Free National Consumer Helpline: <span className="font-mono text-white font-bold">1915</span> or email <span className="font-mono text-amber-400">complaints@bis.gov.in</span>
            </div>

            <button
              onClick={() => onAskAboutGrievance('How do I lodge a formal complaint against a manufacturer for printing a fake ISI mark on bottled water, and what evidence is required by BIS enforcement?')}
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs px-4 py-2.5 rounded-xl flex items-center gap-1.5 transition-all"
            >
              <Sparkles className="w-4 h-4" />
              <span>Ask SARTHI for Step-by-Step Complaint Filing</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
