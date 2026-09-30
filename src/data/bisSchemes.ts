export interface CertificationScheme {
  id: string;
  name: string;
  code: 'Scheme-I' | 'Scheme-II' | 'Scheme-IV' | 'Hallmarking' | 'Eco-Mark';
  badgeTitle: string;
  targetAudience: string;
  description: string;
  markGranted: string;
  applicationPortal: string;
  typicalDurationDays: number;
  steps: Array<{
    title: string;
    description: string;
    actionableDoc: string;
  }>;
  fees: {
    applicationFee: number;
    microEnterpriseRebate: number; // percentage rebate
    annualLicenseFee: number;
    testingCostRange: string;
  };
  eligibility: string[];
}

export const BIS_SCHEMES: CertificationScheme[] = [
  {
    id: 'scheme-1',
    name: 'Scheme I — Product Certification (ISI Mark)',
    code: 'Scheme-I',
    badgeTitle: 'ISI Mark (Scheme I)',
    targetAudience: 'Domestic Manufacturers producing goods under mandatory QCOs or voluntary standards',
    description: 'The premier product certification scheme of BIS that authorizes manufacturers to affix the prestigious ISI mark. Involves assessment of factory quality control, manufacturing capability, in-house testing lab, and independent third-party sample testing.',
    markGranted: 'Standard ISI Mark with CM/L License Number',
    applicationPortal: 'Manakonline Portal (www.manakonline.in)',
    typicalDurationDays: 45,
    steps: [
      {
        title: '1. In-House Lab & Equipment Setup',
        description: 'Set up in-house testing equipment required by the Scheme of Inspection and Testing (SIT) for the specific Indian Standard.',
        actionableDoc: 'SIT compliance document & calibration certificates',
      },
      {
        title: '2. Online Application on Manakonline',
        description: 'Submit Form-I on manakonline.in along with factory layout, manufacturing machinery list, quality control personnel credentials, and raw material test certificates.',
        actionableDoc: 'Manufacturing Process Flowchart & Form-I',
      },
      {
        title: '3. Factory Audit & Sample Drawing',
        description: 'BIS inspecting officer visits the factory premises to verify machinery, in-house testing, quality system, and draws independent samples for testing at a BIS recognized lab.',
        actionableDoc: 'Verification Report & Sample Counterfoil Form',
      },
      {
        title: '4. Lab Testing & Scrutiny',
        description: 'BIS recognized lab performs exhaustive testing against all parameters of the relevant IS standard.',
        actionableDoc: 'Independent Test Report (ITR)',
      },
      {
        title: '5. Grant of CM/L License',
        description: 'Upon passing factory inspection and independent lab test reports, BIS issues the Certificate of Manufacture and License (CM/L) valid for 1-2 years with renewal.',
        actionableDoc: 'CM/L License Document with authorized logo dimensions',
      },
    ],
    fees: {
      applicationFee: 1000,
      microEnterpriseRebate: 20, // 20% concession for Micro & Small Enterprises and women entrepreneurs
      annualLicenseFee: 1000,
      testingCostRange: '₹15,000 – ₹75,000 depending on standard',
    },
    eligibility: [
      'Operating manufacturing facility in India with factory license/Udyam Registration',
      'Competent technical personnel to operate in-house testing',
      'Compliance with BIS Scheme of Inspection and Testing (SIT)',
    ],
  },
  {
    id: 'scheme-2',
    name: 'Scheme II — Compulsory Registration Scheme (CRS)',
    code: 'Scheme-II',
    badgeTitle: 'CRS (Scheme II)',
    targetAudience: 'Electronics, IT, Solar, and Battery manufacturers (Domestic & International)',
    description: 'Self-declaration of conformity scheme notified by MeitY and MNRE. Manufacturers test products in BIS-recognized labs in India and apply online for Registration without mandatory prior factory audit, enabling fast-track time-to-market.',
    markGranted: 'Standard BIS CRS Registration Logo with R-Number (e.g., R-41000000)',
    applicationPortal: 'BIS CRS Portal (www.crsbis.in)',
    typicalDurationDays: 20,
    steps: [
      {
        title: '1. Sample Testing at BIS Recognized Lab',
        description: 'Send production sample to an accredited lab in India (e.g. ERTL, SAMEER, TUV, UL). Lab test report is valid for 90 days for filing.',
        actionableDoc: 'NABL/BIS Lab Test Report',
      },
      {
        title: '2. Portal Registration & AIR Appointment',
        description: 'Create manufacturer profile on crsbis.in. Foreign manufacturers must appoint an Authorized Indian Representative (AIR).',
        actionableDoc: 'AIR Agreement & Brand Authorization Letter',
      },
      {
        title: '3. Online Application Filing',
        description: 'Upload test report, undertaking, user manual, schematic diagrams, and critical component list (CCL).',
        actionableDoc: 'Undertaking on Non-Judicial Stamp Paper',
      },
      {
        title: '4. BIS Scrutiny & Grant of R-Number',
        description: 'BIS reviews the submission within 15-20 days and issues unique R-number for the brand and series models.',
        actionableDoc: 'Grant Letter with unique R-number',
      },
    ],
    fees: {
      applicationFee: 20000,
      microEnterpriseRebate: 0,
      annualLicenseFee: 10000,
      testingCostRange: '₹35,000 – ₹1,20,000 depending on product complexity',
    },
    eligibility: [
      'Original Equipment Manufacturer (OEM) of electronics/solar equipment',
      'Authorized Indian Representative (AIR) for foreign entities',
      'Valid lab test report from BIS recognized lab within 90 days',
    ],
  },
  {
    id: 'scheme-4',
    name: 'Scheme IV — Foreign Manufacturers Certification Scheme (FMCS)',
    code: 'Scheme-IV',
    badgeTitle: 'FMCS (Scheme IV)',
    targetAudience: 'Overseas manufacturers exporting mandatory QCO goods to India',
    description: 'Enables foreign manufacturers located outside India to obtain an ISI mark license. Involves foreign factory inspection by BIS technical delegations and witness testing of samples.',
    markGranted: 'ISI Mark with foreign manufacturer CM/L license number',
    applicationPortal: 'BIS FMCS Portal (www.bis.gov.in/fmcs)',
    typicalDurationDays: 120,
    steps: [
      {
        title: '1. Appoint Authorized Indian Representative (AIR)',
        description: 'Foreign maker designates an Indian resident or registered Indian branch as legal representative.',
        actionableDoc: 'AIR Power of Attorney & Agreement',
      },
      {
        title: '2. Application & Pre-Audit Scrutiny',
        description: 'Submit documentation in English, manufacturing plant layout, ISO 9001 cert, and pay inspection advance.',
        actionableDoc: 'Form-I with Foreign Application fee ($1000 USD)',
      },
      {
        title: '3. Factory Audit by BIS Auditors',
        description: 'BIS officers travel to the overseas factory for comprehensive 2-3 day audit and witness testing.',
        actionableDoc: 'Audit Verification Report & Sample Seals',
      },
      {
        title: '4. Independent Lab Testing in India',
        description: 'Sealed samples are shipped to BIS recognized laboratories in India for compliance testing.',
        actionableDoc: 'Independent Lab Report',
      },
      {
        title: '5. Performance Bank Guarantee & Grant',
        description: 'Furnish Performance Bank Guarantee (PBG) of USD $10,000 and receive CM/L license.',
        actionableDoc: 'PBG Document & CM/L License Certificate',
      },
    ],
    fees: {
      applicationFee: 85000,
      microEnterpriseRebate: 0,
      annualLicenseFee: 85000,
      testingCostRange: '$2,500 – $7,000 USD + Auditor Travel & Per Diem',
    },
    eligibility: [
      'Overseas factory with active production line',
      'Indian Authorized Representative in good legal standing',
      'Ability to provide $10,000 USD Performance Bank Guarantee',
    ],
  },
  {
    id: 'hallmarking',
    name: 'Hallmarking Scheme for Gold & Silver Jewellery',
    code: 'Hallmarking',
    badgeTitle: 'Hallmarking & HUID',
    targetAudience: 'Jewellers, Goldsmiths, and Assaying & Hallmarking Centres',
    description: 'Guarantees the purity and fineness of gold jewellery through 6-digit alphanumeric Hallmarking Unique Identification (HUID). Jeweller registration is free for micro-jewellers with zero fee under MSME promotion.',
    markGranted: 'BIS Logo + Purity Grade (e.g. 22K916) + 6-Digit Alphanumeric HUID',
    applicationPortal: 'Manakonline Hallmarking Portal',
    typicalDurationDays: 2,
    steps: [
      {
        title: '1. Jeweller Online Registration',
        description: 'Instant zero-fee registration on Manakonline with GST certificate and identity proof.',
        actionableDoc: 'BIS Jeweller Registration Certificate',
      },
      {
        title: '2. Consignment Creation',
        description: 'Jeweller creates online lot of jewellery pieces and submits to recognized AHC.',
        actionableDoc: 'Online Delivery Challan & Weight Slip',
      },
      {
        title: '3. Fire Assay Testing at AHC',
        description: 'AHC tests gold purity using XRF and Fire Assay cupellation methods per IS 1418.',
        actionableDoc: 'Assay Test Certificate',
      },
      {
        title: '4. Laser Inscription of HUID',
        description: 'Each individual article receives a unique 6-digit laser-engraved HUID traceable on the BIS Care database.',
        actionableDoc: 'Traceable HUID record & Hallmarking Invoice (₹45/article)',
      },
    ],
    fees: {
      applicationFee: 0,
      microEnterpriseRebate: 100, // Zero registration fee for jewellers
      annualLicenseFee: 0,
      testingCostRange: '₹45 + GST per gold article, ₹35 + GST per silver article',
    },
    eligibility: [
      'Valid GSTIN or Pan Card for turnover < ₹40 Lakhs',
      'Retail or wholesale jewellery sales outlet',
    ],
  },
];
