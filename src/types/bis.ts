export type UserRole = 'msme' | 'startup' | 'industry' | 'consumer' | 'lab_technician' | 'exporter';

export type LanguageCode = 'en' | 'hi' | 'te' | 'ta' | 'mr' | 'bn';

export interface IndianStandard {
  id: string;
  isNumber: string;
  year: number;
  title: string;
  scope: string;
  category: 'Food & Agriculture' | 'Electronics & IT' | 'Civil & Construction' | 'Chemical & Plastics' | 'Electrical & Appliances' | 'Mechanical & Automotive' | 'Toys & Safety' | 'Precious Metals & Hallmarking' | 'Renewable Energy';
  scheme: 'Scheme I (ISI Mark)' | 'Scheme II (CRS)' | 'Scheme IV (FMCS)' | 'Hallmarking' | 'Eco Mark';
  isMandatoryQCO: boolean;
  qcoDetails?: {
    orderName: string;
    ministry: string;
    effectiveDate: string;
    gazetteRef: string;
  };
  keyTests: string[];
  harmonizedStandard?: string; // e.g., IEC 60950, ISO 9001
  sampleSizeRequired: string;
  turnaroundDaysEstimate: number;
  testingLaboratories: string[];
  status: 'Active' | 'Under Revision' | 'Reaffirmed';
}

export interface RagPipelineStep {
  step: number;
  name: string;
  status: 'idle' | 'running' | 'completed' | 'skipped';
  summary: string;
  details?: Record<string, any>;
  durationMs?: number;
}

export interface RagResponse {
  answer: string;
  intent: {
    category: string;
    productIdentified: string;
    userGoal: string;
    isAmbiguous: boolean;
    clarifyingQuestions?: string[];
  };
  retrievedStandards: IndianStandard[];
  qualityGate: {
    passed: boolean;
    confidenceScore: number;
    verdict: 'Verified Authoritative Evidence' | 'Clarification Needed' | 'Redirect to BIS Portal';
    reason: string;
  };
  citations: Array<{
    title: string;
    documentNumber: string;
    versionOrYear: string;
    sourceUrl: string;
    clause?: string;
  }>;
  pipelineTrace: RagPipelineStep[];
  suggestedFollowUps: string[];
}

export interface ISILicenseRecord {
  cmlNumber: string;
  licenseeName: string;
  productName: string;
  isNumber: string;
  brand: string;
  factoryAddress: string;
  validFrom: string;
  validUpto: string;
  status: 'Operative' | 'Suspended' | 'Expired' | 'Cancelled';
  scheme: string;
}

export interface HUIDRecord {
  huid: string;
  purity: '22K 916' | '18K 750' | '14K 585' | '24K 999';
  articleType: string;
  jewellerName: string;
  jewellerRegistrationNumber: string;
  ahcCenterName: string;
  ahcCenterCode: string;
  hallmarkingDate: string;
  city: string;
  state: string;
  verifiedStatus: 'Valid & Hallmarked' | 'Not Found / Suspected Fake';
}

export interface CRSRecord {
  registrationNumber: string;
  applicantName: string;
  brand: string;
  productCategory: string;
  modelNumbers: string[];
  isStandard: string;
  validUpto: string;
  status: 'Active' | 'Lapsed';
}

export interface TestingLab {
  id: string;
  name: string;
  type: 'Central Laboratory' | 'Regional Laboratory' | 'Branch Laboratory' | 'NABL Recognized Partner';
  city: string;
  state: string;
  address: string;
  contactEmail: string;
  contactPhone: string;
  disciplines: ('Chemical' | 'Mechanical' | 'Electrical' | 'Microbiological' | 'Electronics' | 'Civil')[];
  keyProductsTested: string[];
  accreditationValidUpto: string;
}
