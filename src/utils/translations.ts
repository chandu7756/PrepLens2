import { LanguageCode, UserRole } from '../types/bis';

export interface TranslationDictionary {
  nav: {
    overview: string;
    standards: string;
    certification: string;
    labs: string;
    verify: string;
    sarthi: string;
    context: string;
    selectLanguage: string;
  };
  roles: Record<UserRole, { label: string; badge: string }>;
  home: {
    badge: string;
    heroTitle: string;
    heroSubtitle: string;
    searchPlaceholder: string;
    searchButton: string;
    popularTags: string;
    stats: {
      standardsCount: string;
      standardsLabel: string;
      qcoCount: string;
      qcoLabel: string;
      msmeRebate: string;
      msmeLabel: string;
      groundedPct: string;
      groundedLabel: string;
    };
    modulesTitle: string;
    modulesSubtitle: string;
    cards: {
      sarthiTitle: string;
      sarthiDesc: string;
      sarthiAction: string;
      standardsTitle: string;
      standardsDesc: string;
      standardsAction: string;
      schemesTitle: string;
      schemesDesc: string;
      schemesAction: string;
      labsTitle: string;
      labsDesc: string;
      labsAction: string;
      verifyTitle: string;
      verifyDesc: string;
      verifyAction: string;
    };
    statutoryTitle: string;
    statutoryDesc: string;
    legalActs: {
      bisActTitle: string;
      bisActDesc: string;
      carTitle: string;
      carDesc: string;
    };
  };
  chat: {
    welcomeHeading: string;
    welcomeSub: string;
    welcomeCapabilities: string[];
    welcomePrompt: string;
    inputPlaceholder: string;
    send: string;
    listening: string;
    suggestedQueriesTitle: string;
    traceButton: string;
    verifiedSource: string;
    clarificationNeeded: string;
    quickPrompts: { label: string; query: string }[];
  };
  standards: {
    title: string;
    subtitle: string;
    searchPlaceholder: string;
    categoryFilter: string;
    mandatoryFilter: string;
    all: string;
    standardsFound: string;
    tableCode: string;
    tableTitle: string;
    tableSector: string;
    tableScheme: string;
    tableAction: string;
    consultSarthi: string;
    viewDetails: string;
    mandatoryQco: string;
    voluntary: string;
  };
  schemes: {
    title: string;
    subtitle: string;
    calcTitle: string;
    calcSubtitle: string;
    enterpriseType: string;
    riskLevel: string;
    totalPayable: string;
    msmeSavings: string;
    consultSarthi: string;
    stepRoadmap: string;
  };
  labs: {
    title: string;
    subtitle: string;
    searchPlaceholder: string;
    disciplineFilter: string;
    labTypeFilter: string;
    all: string;
    labsFound: string;
    testProducts: string;
    consultLab: string;
  };
  verify: {
    title: string;
    subtitle: string;
    huidTab: string;
    isiTab: string;
    crsTab: string;
    verifyButton: string;
    verified: string;
    unverified: string;
    sampleCode: string;
    verifySubtitle: string;
  };
  footer: {
    subtitle: string;
    helpline: string;
    ebis: string;
    manakonline: string;
    crs: string;
  };
}

export const translations: Record<LanguageCode, TranslationDictionary> = {
  en: {
    nav: {
      overview: 'Overview',
      standards: 'Standards',
      certification: 'Certification',
      labs: 'Testing Labs',
      verify: 'Verify Marks',
      sarthi: 'SARTHI AI',
      context: 'Context:',
      selectLanguage: 'Language',
    },
    roles: {
      msme: { label: 'MSME Enterprise', badge: '20% Fee Rebate' },
      startup: { label: 'DPIIT Startup', badge: 'Special Sandbox' },
      industry: { label: 'Large Manufacturer', badge: 'Scheme I ISI' },
      consumer: { label: 'Indian Consumer', badge: 'Quality Assurance' },
      lab_technician: { label: 'Testing Laboratory', badge: 'NABL Scope' },
      exporter: { label: 'Foreign Manufacturer', badge: 'FMCS Scheme IV' },
    },
    home: {
      badge: 'National Standards & Conformity Intelligence',
      heroTitle: 'PrepLens',
      heroSubtitle: 'Intelligent regulatory compliance, mandatory Quality Control Orders (QCO), and Indian Standards (IS) conformity navigation for Indian enterprises and consumers.',
      searchPlaceholder: 'Search by IS standard (e.g. IS 1417, IS 1293), product name, or QCO notification...',
      searchButton: 'Analyze Compliance',
      popularTags: 'Popular:',
      stats: {
        standardsCount: '22,000+',
        standardsLabel: 'Published Indian Standards',
        qcoCount: '700+',
        qcoLabel: 'Mandatory QCO Products',
        msmeRebate: '20%',
        msmeLabel: 'MSME Statutory Concession',
        groundedPct: '100%',
        groundedLabel: 'Gazette-Grounded Evidence',
      },
      modulesTitle: 'Compliance & Verification Capabilities',
      modulesSubtitle: 'Select a regulatory module to begin your conformity workflow',
      cards: {
        sarthiTitle: 'SARTHI Compliance Assistant',
        sarthiDesc: 'Evidence-grounded conversational agent for IS standards identification, QCO enforcement checks, and technical regulatory inquiries.',
        sarthiAction: 'Launch Assistant',
        standardsTitle: 'Indian Standards (IS) Catalog',
        standardsDesc: 'Searchable repository of Indian Standards with mandatory QCO cross-references, product scopes, and official Gazette citations.',
        standardsAction: 'Browse Standards',
        schemesTitle: 'Certification & Fee Calculator',
        schemesDesc: 'Interactive guide for Scheme I (ISI Mark), Scheme II (CRS), and FMCS pathways, including statutory 20% MSME fee concessions.',
        schemesAction: 'Calculate Fees',
        labsTitle: 'Testing Laboratories Directory',
        labsDesc: 'Directory of BIS-recognized and NABL-accredited testing facilities across India, mapped by product category and location.',
        labsAction: 'Locate Labs',
        verifyTitle: 'Authenticity Verification Suite',
        verifyDesc: 'Verify 6-digit Hallmark Unique Identification (HUID) codes on gold jewellery and validate ISI CM/L manufacturing licenses.',
        verifyAction: 'Verify Products',
      },
      statutoryTitle: 'Statutory Regulatory Framework',
      statutoryDesc: 'PrepLens operates in alignment with Government of India standardization frameworks:',
      legalActs: {
        bisActTitle: 'Bureau of Indian Standards Act, 2016',
        bisActDesc: 'Governing national standardization, mandatory product certification schemes, and conformity assessment across notified industries.',
        carTitle: 'Conformity Assessment Regulations, 2018',
        carDesc: 'Prescribing procedural frameworks for factory inspections, testing protocols, mark surveillance, and statutory MSME fee concessions.',
      },
    },
    chat: {
      welcomeHeading: 'Welcome to PrepLens',
      welcomeSub: 'Your intelligent assistant for Indian Standards (IS), mandatory Quality Control Orders (QCO), and BIS conformity services.',
      welcomeCapabilities: [
        'Identify applicable Indian Standards for your product or export',
        'Verify whether your product is covered under a mandatory QCO notification',
        'Guide you through certification schemes (Scheme I ISI Mark, Scheme II CRS, FMCS)',
        'Calculate testing parameters and NABL accredited laboratories',
        'Verify Gold Jewellery HUID codes and ISI CM/L licenses',
      ],
      welcomePrompt: 'What product or compliance query would you like to explore today?',
      inputPlaceholder: 'Ask about IS standards, mandatory QCOs, testing labs, or certification fees...',
      send: 'Send',
      listening: 'Listening to your query...',
      suggestedQueriesTitle: 'Suggested Inquiries',
      traceButton: 'Trace',
      verifiedSource: 'Authoritative Gazette Source',
      clarificationNeeded: 'Specification Clarification',
      quickPrompts: [
        { label: '🚰 Packaged Drinking Water Plant', query: 'I want to set up a packaged drinking water plant. What are the mandatory BIS standards, testing parameters, and license requirements under IS 14543?' },
        { label: '🧸 Toy Manufacturing QCO', query: 'Are toys covered under mandatory QCO? What are the mechanical and chemical safety standards under IS 9873?' },
        { label: '⚡ Plugs & Sockets (IS 1293)', query: 'What are the Scheme I ISI certification requirements for domestic 6A and 16A plugs and sockets under IS 1293:2019?' },
        { label: '📱 Lithium Batteries for Mobiles', query: 'Which BIS CRS standard applies to secondary lithium battery packs for smartphones, and which labs can test them?' },
        { label: '☀️ Solar PV Modules (CRS)', query: 'What are the MNRE and BIS CRS registration requirements for crystalline silicon solar PV modules under IS 14286?' },
        { label: '✨ Gold Jewellery HUID Verification', query: 'How does 6-digit alphanumeric HUID hallmarking work for gold jewellery, and how can consumers verify authenticity?' },
      ],
    },
    standards: {
      title: 'Indian Standards (IS) Catalog & Gazette Cross-Reference',
      subtitle: 'Authoritative repository of Indian Standards mapped to mandatory Quality Control Orders, testing requirements, and gazette notifications.',
      searchPlaceholder: 'Search by IS number (e.g. IS 10500, IS 1417), product name, or keyword...',
      categoryFilter: 'Category Sector',
      mandatoryFilter: 'Mandatory QCO Only',
      all: 'All',
      standardsFound: 'Standards Found',
      tableCode: 'Standard Code & Year',
      tableTitle: 'Title & Regulated Scope',
      tableSector: 'Sector',
      tableScheme: 'Scheme & QCO Status',
      tableAction: 'Action',
      consultSarthi: 'Consult SARTHI',
      viewDetails: 'View Details',
      mandatoryQco: 'Mandatory QCO',
      voluntary: 'Voluntary Benchmark',
    },
    schemes: {
      title: 'Certification Pathways & MSME Statutory Fee Calculator',
      subtitle: 'Complete roadmap for Scheme I (ISI Mark), Scheme II (Compulsory Registration CRS), and Foreign Manufacturers Certification Scheme (FMCS).',
      calcTitle: 'Interactive Fee & Concession Estimator',
      calcSubtitle: 'Includes statutory 20% concession for Micro & Small Enterprises under DPIIT guidelines.',
      enterpriseType: 'Enterprise Scale',
      riskLevel: 'Testing Complexity',
      totalPayable: 'Net Payable Government Fee',
      msmeSavings: 'MSME Statutory Concession Savings',
      consultSarthi: 'Ask SARTHI about this Scheme',
      stepRoadmap: 'Step-by-Step Certification Roadmap',
    },
    labs: {
      title: 'BIS & NABL Accredited Testing Laboratories',
      subtitle: 'Locate central, regional, and branch testing facilities accredited for Indian Standards conformity assessment.',
      searchPlaceholder: 'Search laboratories by city, state, or product testing scope...',
      disciplineFilter: 'Testing Discipline',
      labTypeFilter: 'Facility Type',
      all: 'All',
      labsFound: 'Facilities Located',
      testProducts: 'Authorized Testing Scopes',
      consultLab: 'Check Lab Requirements',
    },
    verify: {
      title: 'National Authenticity & Mark Verification Suite',
      subtitle: 'Empowering Indian consumers and businesses to verify Gold Jewellery HUID hallmarking, ISI mark licenses, and CRS registrations in real-time.',
      huidTab: 'Gold HUID Hallmarking',
      isiTab: 'ISI Mark CM/L License',
      crsTab: 'CRS Electronics Registration',
      verifyButton: 'Verify Authenticity',
      verified: 'Officially Verified & Authentic',
      unverified: 'Verification Alert: Not Found or Suspicious',
      sampleCode: 'Quick Test Sample',
      verifySubtitle: 'Enter the code printed on the product or certificate:',
    },
    footer: {
      subtitle: 'AI-Powered Indian Standards & BIS Services Assistant · Smart India Hackathon 2026 (SIH26107)',
      helpline: 'National Consumer Helpline: 1915',
      ebis: 'e-BIS Portal',
      manakonline: 'Manakonline',
      crs: 'CRS Portal',
    },
  },
  hi: {
    nav: {
      overview: 'अवलोकन',
      standards: 'भारतीय मानक',
      certification: 'प्रमाणन योजनाएं',
      labs: 'परीक्षण प्रयोगशालाएं',
      verify: 'मानक सत्यापन',
      sarthi: 'सारथी एआई',
      context: 'संदर्भ:',
      selectLanguage: 'भाषा',
    },
    roles: {
      msme: { label: 'सूक्ष्म एवं लघु उद्योग (MSME)', badge: '20% शुल्क छूट' },
      startup: { label: 'डीपीआईआईटी स्टार्टअप', badge: 'विशेष सैंडबॉक्स' },
      industry: { label: 'बड़ा विनिर्माता', badge: 'स्कीम I ISI' },
      consumer: { label: 'भारतीय उपभोक्ता', badge: 'गुणवत्ता आश्वासन' },
      lab_technician: { label: 'परीक्षण प्रयोगशाला', badge: 'NABL स्कोप' },
      exporter: { label: 'विदेशी विनिर्माता', badge: 'FMCS स्कीम IV' },
    },
    home: {
      badge: 'राष्ट्रीय मानक एवं अनुरूपता बुद्धिमत्ता',
      heroTitle: 'PrepLens',
      heroSubtitle: 'भारतीय उद्यमों और उपभोक्ताओं के लिए अनिवार्य गुणवत्ता नियंत्रण आदेश (QCO) और भारतीय मानक (IS) अनुरूपता नेविगेशन।',
      searchPlaceholder: 'मानक कोड (उदा. IS 1417, IS 1293), उत्पाद नाम या QCO आदेश खोजें...',
      searchButton: 'अनुपालन विश्लेषण',
      popularTags: 'लोकप्रिय:',
      stats: {
        standardsCount: '22,000+',
        standardsLabel: 'प्रकाशित भारतीय मानक',
        qcoCount: '700+',
        qcoLabel: 'अनिवार्य QCO उत्पाद',
        msmeRebate: '20%',
        msmeLabel: 'MSME वैधानिक छूट',
        groundedPct: '100%',
        groundedLabel: 'राजपत्र-सत्यापित साक्ष्य',
      },
      modulesTitle: 'अनुपालन एवं सत्यापन मॉड्यूल',
      modulesSubtitle: 'अपनी अनुरूपता प्रक्रिया शुरू करने के लिए मॉड्यूल चुनें',
      cards: {
        sarthiTitle: 'सारथी अनुपालन सहायक',
        sarthiDesc: 'भारतीय मानकों, QCO प्रवर्तन और तकनीकी नियमों के लिए साक्ष्य-आधारित बुद्धिमान सहायक।',
        sarthiAction: 'सहायक प्रारंभ करें',
        standardsTitle: 'भारतीय मानक (IS) सूची',
        standardsDesc: 'अनिवार्य QCO अधिसूचनाओं और आधिकारिक राजपत्र संदर्भों सहित मानकों का भंडार।',
        standardsAction: 'मानक देखें',
        schemesTitle: 'प्रमाणन एवं शुल्क गणक',
        schemesDesc: 'स्कीम I (ISI मार्क), स्कीम II (CRS) और सूक्ष्म एवं लघु उद्यमों के लिए 20% शुल्क छूट गाइड।',
        schemesAction: 'शुल्क गणना करें',
        labsTitle: 'प्रयोगशाला निर्देशिका',
        labsDesc: 'भारत भर में बीआईएस-मान्यता प्राप्त और एनएबीएल-मान्यता प्राप्त परीक्षण प्रयोगशालाएं।',
        labsAction: 'लैब खोजें',
        verifyTitle: 'प्रामाणिकता सत्यापन सूट',
        verifyDesc: 'सोने के आभूषणों पर 6-अंकीय HUID हॉलमार्क और ISI CM/L निर्माण लाइसेंस सत्यापित करें।',
        verifyAction: 'सत्यापन करें',
      },
      statutoryTitle: 'वैधानिक विनियामक ढांचा',
      statutoryDesc: 'PrepLens भारत सरकार के मानकीकरण ढांचे के अनुरूप कार्य करता है:',
      legalActs: {
        bisActTitle: 'भारतीय मानक ब्यूरो अधिनियम, 2016',
        bisActDesc: 'राष्ट्रीय मानकीकरण, अनिवार्य उत्पाद प्रमाणन और उद्योगों में अनुरूपता मूल्यांकन का नियमन।',
        carTitle: 'अनुरूपता मूल्यांकन विनियम, 2018',
        carDesc: 'कारखाना निरीक्षण, परीक्षण प्रोटोकॉल और एमएसएमई शुल्क रियायतों के लिए विनियामक ढांचा।',
      },
    },
    chat: {
      welcomeHeading: 'PrepLens में आपका स्वागत है',
      welcomeSub: 'भारतीय मानकों (IS), अनिवार्य गुणवत्ता नियंत्रण आदेशों (QCO) और बीआईएस सेवाओं के लिए आपका सहायक।',
      welcomeCapabilities: [
        'अपने उत्पाद या निर्यात के लिए लागू भारतीय मानकों की पहचान करें',
        'जांचें कि क्या आपका उत्पाद अनिवार्य QCO अधिसूचना के तहत आता है',
        'प्रमाणन योजनाओं (स्कीम I ISI मार्क, स्कीम II CRS) की प्रक्रिया समझें',
        'परीक्षण मापदंडों और एनएबीएल प्रयोगशालाओं की जानकारी प्राप्त करें',
        'सोने के आभूषण HUID कोड और ISI CM/L लाइसेंस सत्यापित करें',
      ],
      welcomePrompt: 'आज आप किस उत्पाद या अनुपालन विषय पर जानकारी चाहते हैं?',
      inputPlaceholder: 'भारतीय मानक, अनिवार्य QCO, प्रयोगशाला या प्रमाणन शुल्क के बारे में पूछें...',
      send: 'भेजें',
      listening: 'आपकी आवाज़ सुन रहे हैं...',
      suggestedQueriesTitle: 'सुझाए गए प्रश्न',
      traceButton: 'ट्रेस',
      verifiedSource: 'आधिकारिक राजपत्र स्रोत',
      clarificationNeeded: 'विशिष्टता स्पष्टीकरण आवश्यक',
      quickPrompts: [
        { label: '🚰 पैकेज्ड पेयजल संयंत्र', query: 'पैकेज्ड पेयजल संयंत्र स्थापित करने के लिए IS 14543 के तहत अनिवार्य मानक और लाइसेंस प्रक्रिया क्या है?' },
        { label: '🧸 खिलौना निर्माण QCO', query: 'क्या खिलौने अनिवार्य QCO के तहत आते हैं? IS 9873 के सुरक्षा मानक क्या हैं?' },
        { label: '⚡ प्लग और सॉकेट (IS 1293)', query: 'IS 1293:2019 के तहत घरेलू 6A और 16A प्लग-सॉकेट के लिए ISI प्रमाणन आवश्यकताएं क्या हैं?' },
        { label: '📱 मोबाइल लिथियम बैटरी', query: 'स्मार्टफोन बैटरी के लिए कौन सा BIS CRS मानक लागू होता है और कौन सी लैब परीक्षण करती हैं?' },
        { label: '☀️ सोलर पीवी मॉड्यूल', query: 'IS 14286 के तहत सौर ऊर्जा मॉड्यूल के लिए BIS CRS पंजीकरण आवश्यकताएं क्या हैं?' },
        { label: '✨ सोने के गहने HUID सत्यापन', query: 'सोने के गहनों के लिए 6-अंकीय HUID हॉलमार्किंग कैसे काम करती है और उपभोक्ता प्रामाणिकता कैसे जांच सकते हैं?' },
      ],
    },
    standards: {
      title: 'भारतीय मानक (IS) कैटलॉग एवं राजपत्र संदर्भ',
      subtitle: 'अनिवार्य गुणवत्ता नियंत्रण आदेश (QCO) और आधिकारिक राजपत्र अधिसूचनाओं से जुड़े मानकों का प्रामाणिक भंडार।',
      searchPlaceholder: 'मानक संख्या (उदा. IS 10500, IS 1417), उत्पाद नाम या कीवर्ड द्वारा खोजें...',
      categoryFilter: 'श्रेणी क्षेत्र',
      mandatoryFilter: 'केवल अनिवार्य QCO',
      all: 'सभी',
      standardsFound: 'मानक उपलब्ध',
      tableCode: 'मानक कोड एवं वर्ष',
      tableTitle: 'शीर्षक एवं कार्यक्षेत्र',
      tableSector: 'उद्योग क्षेत्र',
      tableScheme: 'प्रमाणन योजना एवं QCO',
      tableAction: 'कार्रवाई',
      consultSarthi: 'सारथी से पूछें',
      viewDetails: 'विवरण देखें',
      mandatoryQco: 'अनिवार्य QCO',
      voluntary: 'स्वैच्छिक मानक',
    },
    schemes: {
      title: 'प्रमाणन योजनाएं एवं MSME वैधानिक शुल्क गणक',
      subtitle: 'स्कीम I (ISI मार्क), स्कीम II (अनिवार्य पंजीकरण CRS) और विदेशी विनिर्माता प्रमाणन (FMCS) का संपूर्ण रोडमैप।',
      calcTitle: 'इंटरैक्टिव शुल्क एवं छूट गणक',
      calcSubtitle: 'डीपीआईआईटी दिशानिर्देशों के तहत सूक्ष्म एवं लघु उद्योगों के लिए 20% वैधानिक रियायत शामिल।',
      enterpriseType: 'उद्यम का आकार',
      riskLevel: 'परीक्षण जटिलता',
      totalPayable: 'कुल देय सरकारी शुल्क',
      msmeSavings: 'MSME वैधानिक बचत',
      consultSarthi: 'इस योजना के बारे में पूछें',
      stepRoadmap: 'चरणबद्ध प्रमाणन प्रक्रिया',
    },
    labs: {
      title: 'बीआईएस एवं एनएबीएल मान्यता प्राप्त प्रयोगशालाएं',
      subtitle: 'भारतीय मानकों के अनुरूपता मूल्यांकन के लिए केंद्रीय, क्षेत्रीय और शाखा परीक्षण प्रयोगशालाएं खोजें।',
      searchPlaceholder: 'शहर, राज्य या उत्पाद परीक्षण दायरे के अनुसार प्रयोगशाला खोजें...',
      disciplineFilter: 'परीक्षण शाखा',
      labTypeFilter: 'प्रयोगशाला प्रकार',
      all: 'सभी',
      labsFound: 'प्रयोगशालाएं उपलब्ध',
      testProducts: 'मान्यता प्राप्त परीक्षण दायरा',
      consultLab: 'प्रयोगशाला आवश्यकताएं जांचें',
    },
    verify: {
      title: 'राष्ट्रीय मानक एवं प्रमाणन सत्यापन सूट',
      subtitle: 'सोने के गहनों पर 6-अंकीय HUID हॉलमार्क, ISI मार्क लाइसेंस और CRS पंजीकरण को तुरंत सत्यापित करें।',
      huidTab: 'सोना HUID हॉलमार्किंग',
      isiTab: 'ISI मार्क CM/L लाइसेंस',
      crsTab: 'CRS इलेक्ट्रॉनिक्स पंजीकरण',
      verifyButton: 'सत्यापन करें',
      verified: 'आधिकारिक रूप से सत्यापित एवं प्रामाणिक',
      unverified: 'सत्यापन चेतावनी: रिकॉर्ड नहीं मिला या संदिग्ध',
      sampleCode: 'त्वरित परीक्षण नमूना कोड',
      verifySubtitle: 'उत्पाद या प्रमाण पत्र पर मुद्रित कोड दर्ज करें:',
    },
    footer: {
      subtitle: 'एआई-संचालित भारतीय मानक एवं बीआईएस सेवा सहायक · स्मार्ट इंडिया हैकथॉन 2026 (SIH26107)',
      helpline: 'राष्ट्रीय उपभोक्ता हेल्पलाइन: 1915',
      ebis: 'e-BIS पोर्टल',
      manakonline: 'मानकऑनलाइन',
      crs: 'CRS पोर्टल',
    },
  },
  te: {
    nav: {
      overview: 'అవలోకనం',
      standards: 'భారత ప్రమాణాలు',
      certification: 'ధృవీకరణ పథకాలు',
      labs: 'పరీక్ష ప్రయోగశాలలు',
      verify: 'ప్రమాణాల ధృవీకరణ',
      sarthi: 'సారథి AI',
      context: 'సందర్భం:',
      selectLanguage: 'భాష',
    },
    roles: {
      msme: { label: 'MSME సంస్థ', badge: '20% ఫీజు రాయితీ' },
      startup: { label: 'DPIIT స్టార్టప్', badge: 'ప్రత్యేక శాండ్‌బాక్స్' },
      industry: { label: 'పెద్ద తయారీదారు', badge: 'స్కీమ్ I ISI' },
      consumer: { label: 'భారతీయ వినియోగదారుడు', badge: 'నాణ్యత హామీ' },
      lab_technician: { label: 'పరీక్ష ప్రయోగశాల', badge: 'NABL స్కోప్' },
      exporter: { label: 'విదేశీ తయారీదారు', badge: 'FMCS స్కీమ్ IV' },
    },
    home: {
      badge: 'జాతీయ ప్రమాణాలు మరియు అనుగుణ్యత ఇంటెలిజెన్స్',
      heroTitle: 'PrepLens',
      heroSubtitle: 'భారతీయ పరిశ్రమలు మరియు వినియోగదారుల కోసం తప్పనిసరి క్వాలిటీ కంట్రోల్ ఆర్డర్లు (QCO) మరియు భారతీయ ప్రమాణాలు (IS) గైడెన్స్.',
      searchPlaceholder: 'ప్రమాణ సంఖ్య (ఉదా. IS 1417, IS 1293), ఉత్పత్తి పేరు లేదా QCO శోధించండి...',
      searchButton: 'పరిశీలించు',
      popularTags: 'ప్రజాదరణ పొందినవి:',
      stats: {
        standardsCount: '22,000+',
        standardsLabel: 'భారతీయ ప్రమాణాలు',
        qcoCount: '700+',
        qcoLabel: 'తప్పనిసరి QCO ఉత్పత్తులు',
        msmeRebate: '20%',
        msmeLabel: 'MSME రుసుము రాయితీ',
        groundedPct: '100%',
        groundedLabel: 'గెజిట్ ధృవీకృత ఆధారాలు',
      },
      modulesTitle: 'అనుగుణ్యత మరియు ధృవీకరణ సేవలు',
      modulesSubtitle: 'మీ సేవను ప్రారంభించడానికి ఒక విభాగాన్ని ఎంచుకోండి',
      cards: {
        sarthiTitle: 'సారథి సహాయక వ్యవస్థ',
        sarthiDesc: 'భారతీయ ప్రమాణాలు, QCO నిబంధనలు మరియు నిబంధనల వివరణ కోసం AI సహాయకుడు.',
        sarthiAction: 'ప్రారంభించండి',
        standardsTitle: 'భారత ప్రమాణాలు (IS) కేటలాగ్',
        standardsDesc: 'తప్పనిసరి QCO నోటిఫికేషన్లు మరియు అధికారిక గెజిట్ సూచనలతో కూడిన ప్రమాణాలు.',
        standardsAction: 'ప్రమాణాలు చూడండి',
        schemesTitle: 'ధృవీకరణ మరియు ఫీజు గణన',
        schemesDesc: 'స్కీమ్ I (ISI మార్క్), స్కీమ్ II (CRS) మరియు MSMEల కొరకు 20% ఫీజు రాయితీ వివరాలు.',
        schemesAction: 'ఫీజు లెక్కించండి',
        labsTitle: 'పరీక్షా ప్రయోగశాలలు',
        labsDesc: 'భారతదేశం అంతటా BIS మరియు NABL గుర్తింపు పొందిన ప్రయోగశాలల డైరెక్టరీ.',
        labsAction: 'ల్యాబ్‌లు కనుగొనండి',
        verifyTitle: 'నిజమైన ప్రమాణాల ధృవీకరణ',
        verifyDesc: 'బంగారు ఆభరణాలపై 6-అంకెల HUID హాల్‌మార్క్ మరియు ISI లైసెన్స్ సరిచూడండి.',
        verifyAction: 'ధృవీకరించండి',
      },
      statutoryTitle: 'చట్టబద్ధమైన నియంత్రణ ఫ్రేమ్‌వర్క్',
      statutoryDesc: 'PrepLens భారత ప్రభుత్వ ప్రమాణీకరణ చట్టాలకు అనుగుణంగా పనిచేస్తుంది:',
      legalActs: {
        bisActTitle: 'బ్యూరో ఆఫ్ ఇండియన్ స్టాండర్డ్స్ చట్టం, 2016',
        bisActDesc: 'జాతీయ ప్రమాణీకరణ, తప్పనిసరి ఉత్పత్తుల ధృవీకరణ మరియు తనిఖీలను పర్యవేక్షిస్తుంది.',
        carTitle: 'అనుగుణ్యత అంచనా నిబంధనలు, 2018',
        carDesc: 'ఫ్యాక్టరీ తనిఖీలు, పరీక్ష ప్రోటోకాల్‌లు మరియు MSME ఫీజు రాయితీల నియంత్రణ.',
      },
    },
    chat: {
      welcomeHeading: 'PrepLens కి స్వాగతం',
      welcomeSub: 'భారతీయ ప్రమాణాలు (IS), తప్పనిసరి QCO ఆర్డర్లు మరియు BIS సేవల కోసం మీ ఇంటెలిజెంట్ అసిస్టెంట్.',
      welcomeCapabilities: [
        'మీ ఉత్పత్తికి వర్తించే భారతీయ ప్రమాణాలను గుర్తించండి',
        'మీ ఉత్పత్తి తప్పనిసరి QCO పరిధిలోకి వస్తుందో లేదో తనిఖీ చేయండి',
        'ధృవీకరణ పథకాల (ISI మార్క్, CRS) ప్రక్రియను తెలుసుకోండి',
        'పరీక్షా పారామితులు మరియు NABL ప్రయోగశాలలను కనుగొనండి',
        'బంగారు HUID కోడ్‌లు మరియు ISI లైసెన్స్‌లను ధృవీకరించండి',
      ],
      welcomePrompt: 'ఈరోజు మీరు ఏ ఉత్పత్తి లేదా నిబంధనల గురించి తెలుసుకోవాలనుకుంటున్నారు?',
      inputPlaceholder: 'భారతీయ ప్రమాణాలు, QCO ఆర్డర్లు, ల్యాబ్‌లు లేదా ఫీజుల గురించి అడగండి...',
      send: 'పంపు',
      listening: 'వినబడుతోంది...',
      suggestedQueriesTitle: 'సూచించిన ప్రశ్నలు',
      traceButton: 'ట్రేస్',
      verifiedSource: 'గెజిట్ ధృవీకృత సమాచారం',
      clarificationNeeded: 'స్పష్టత అవసరం',
      quickPrompts: [
        { label: '🚰 ప్యాకేజ్డ్ డ్రింకింగ్ వాటర్ ప్లాంట్', query: 'IS 14543 ప్రకారం ప్యాకేజ్డ్ తాగునీటి ప్లాంట్ ఏర్పాటుకు అవసరమైన ప్రమాణాలు మరియు లైసెన్స్ విధానం ఏమిటి?' },
        { label: '🧸 బొమ్మల తయారీ QCO', query: 'బొమ్మలు తప్పనిసరి QCO పరిధిలోకి వస్తాయా? IS 9873 భద్రతా నిబంధనలు ఏమిటి?' },
        { label: '⚡ ప్లగ్‌లు & సాకెట్లు (IS 1293)', query: 'IS 1293:2019 క్రింద గృహోపకరణాల ప్లగ్‌లకు ISI ధృవీకరణ నిబంధనలు ఏమిటి?' },
        { label: '📱 మొబైల్ లిథియం బ్యాటరీలు', query: 'స్మార్ట్‌ఫోన్ బ్యాటరీలకు వర్తించే BIS CRS ప్రమాణం ఏది మరియు ఏ ల్యాబ్‌లు పరీక్షిస్తాయి?' },
        { label: '☀️ సోలార్ పీవీ మాడ్యూల్స్', query: 'IS 14286 ప్రకారం సోలార్ మాడ్యూల్స్ నమోదు ప్రక్రియ ఏమిటి?' },
        { label: '✨ బంగారు ఆభరణాల HUID ధృవీకరణ', query: 'బంగారు ఆభరణాలకు 6 అంకెల HUID హాల్‌మార్కింగ్ ఎలా పనిచేస్తుంది మరియు వినియోగదారులు ఎలా ధృవీకరించుకోవాలి?' },
      ],
    },
    standards: {
      title: 'భారతీయ ప్రమాణాలు (IS) కేటలాగ్ & గెజిట్ సూచనలు',
      subtitle: 'తప్పనిసరి నాణ్యత నియంత్రణ ఆదేశాలు (QCO) మరియు అధికారిక గెజిట్ నోటిఫికేషన్‌లతో కూడిన అధికారిక డేటాబేస్.',
      searchPlaceholder: 'ప్రమాణ సంఖ్య (ఉదా. IS 10500, IS 1417), ఉత్పత్తి పేరు ద్వారా శోధించండి...',
      categoryFilter: 'వర్గం రంగం',
      mandatoryFilter: 'తప్పనిసరి QCO మాత్రమే',
      all: 'అన్నీ',
      standardsFound: 'ప్రమాణాలు కనుగొనబడ్డాయి',
      tableCode: 'ప్రమాణ సంఖ్య & సంవత్సరం',
      tableTitle: 'శీర్షిక & పరిధి',
      tableSector: 'రంగం',
      tableScheme: 'పథకం & QCO స్థితి',
      tableAction: 'చర్య',
      consultSarthi: 'సారథిని అడగండి',
      viewDetails: 'వివరాలు చూడండి',
      mandatoryQco: 'తప్పనిసరి QCO',
      voluntary: 'ఐచ్ఛిక ప్రమాణం',
    },
    schemes: {
      title: 'ధృవీకరణ పథకాలు & MSME ఫీజు కాలిక్యులేటర్',
      subtitle: 'స్కీమ్ I (ISI మార్క్), స్కీమ్ II (CRS), మరియు FMCS పథకాల పూర్తి మార్గదర్శి.',
      calcTitle: 'ఇంటరాక్టివ్ ఫీజు మరియు రాయితీ అంచనా',
      calcSubtitle: 'DPIIT నిబంధనల ప్రకారం సూక్ష్మ మరియు చిన్న పరిశ్రమలకు 20% చట్టబద్ధమైన ఫీజు రాయితీ కలదు.',
      enterpriseType: 'సంస్థ పరిమాణం',
      riskLevel: 'పరీక్ష సంక్లిష్టత',
      totalPayable: 'చెల్లించాల్సిన ప్రభుత్వ రుసుము',
      msmeSavings: 'MSME రాయితీ ఆదా',
      consultSarthi: 'ఈ పథకం గురించి అడగండి',
      stepRoadmap: 'దశలవారీ ధృవీకరణ ప్రక్రియ',
    },
    labs: {
      title: 'BIS & NABL గుర్తింపు పొందిన పరీక్ష ప్రయోగశాలలు',
      subtitle: 'భారతీయ ప్రమాణాల అనుగుణ్యత పరీక్షల కోసం అధికారిక ప్రయోగశాలలను కనుగొనండి.',
      searchPlaceholder: 'నగరం, రాష్ట్రం లేదా ఉత్పత్తి పరీక్ష పరిధి ద్వారా ల్యాబ్‌లను శోధించండి...',
      disciplineFilter: 'పరీక్ష విభాగం',
      labTypeFilter: 'ప్రయోగశాల రకం',
      all: 'అన్నీ',
      labsFound: 'ల్యాబ్‌లు లభ్యమయ్యాయి',
      testProducts: 'అధికారిక పరీక్ష పరిధి',
      consultLab: 'ల్యాబ్ నిబంధనలు తనిఖీ చేయండి',
    },
    verify: {
      title: 'జాతీయ ప్రామాణికత మరియు గుర్తుల ధృవీకరణ సూట్',
      subtitle: 'బంగారు ఆభరణాల 6-అంకెల HUID హాల్‌మార్క్, ISI మార్క్ లైసెన్స్ మరియు CRS రిజిస్ట్రేషన్‌ను వెంటనే సరిచూడండి.',
      huidTab: 'బంగారం HUID హాల్‌మార్కింగ్',
      isiTab: 'ISI మార్క్ CM/L లైసెన్స్',
      crsTab: 'CRS ఎలక్ట్రానిక్స్ నమోదు',
      verifyButton: 'ధృవీకరించండి',
      verified: 'అధికారికంగా ధృవీకరించబడింది & అసలైనది',
      unverified: 'హెచ్చరిక: రికార్డు కనుగొనబడలేదు లేదా అనుమానాస్పదం',
      sampleCode: 'నమూనా పరీక్ష కోడ్',
      verifySubtitle: 'ఉత్పత్తి లేదా సర్టిఫికేట్ పై ముద్రించిన కోడ్ నమోదు చేయండి:',
    },
    footer: {
      subtitle: 'AI-ఆధారిత భారతీయ ప్రమాణాలు మరియు BIS సేవల సహాయకుడు · స్మార్ట్ ఇండియా హ్యాకథాన్ 2026 (SIH26107)',
      helpline: 'జాతీయ వినియోగదారుల హెల్ప్‌లైన్: 1915',
      ebis: 'e-BIS పోర్టల్',
      manakonline: 'మనక్‌ఆన్‌లైన్',
      crs: 'CRS పోర్టల్',
    },
  },
  ta: {
    nav: {
      overview: 'கண்ணோட்டம்',
      standards: 'இந்திய தரநிலைகள்',
      certification: 'சான்றிதழ் திட்டங்கள்',
      labs: 'ஆய்வகங்கள்',
      verify: 'தர சரிபார்ப்பு',
      sarthi: 'சாரதி AI',
      context: 'சூழல்:',
      selectLanguage: 'மொழி',
    },
    roles: {
      msme: { label: 'குறு சிறு நடுத்தர தொழில் (MSME)', badge: '20% கட்டண சலுகை' },
      startup: { label: 'DPIIT ஸ்டார்ட்அப்', badge: 'சிறப்பு சாண்ட்பாக்ஸ்' },
      industry: { label: 'பெரிய உற்பத்தியாளர்', badge: 'திட்டம் I ISI' },
      consumer: { label: 'இந்திய நுகர்வோர்', badge: 'தர உத்தரவாதம்' },
      lab_technician: { label: 'சோதனை ஆய்வகம்', badge: 'NABL எல்லை' },
      exporter: { label: 'வெளிநாட்டு உற்பத்தியாளர்', badge: 'FMCS திட்டம் IV' },
    },
    home: {
      badge: 'தேசிய தரநிலைகள் மற்றும் இணக்க நுண்ணறிவு',
      heroTitle: 'PrepLens',
      heroSubtitle: 'இந்திய நிறுவனங்கள் மற்றும் நுகர்வோருக்கான கட்டாய தரக்கட்டுப்பாட்டு ஆணைகள் (QCO) மற்றும் இந்திய தரநிலைகள் (IS) வழிகாட்டுதல்.',
      searchPlaceholder: 'தரநிலை எண் (எ.கா. IS 1417, IS 1293), தயாரிப்பு அல்லது QCO தேடவும்...',
      searchButton: 'ஆய்வு செய்',
      popularTags: 'பிரபலமானவை:',
      stats: {
        standardsCount: '22,000+',
        standardsLabel: 'இந்திய தரநிலைகள்',
        qcoCount: '700+',
        qcoLabel: 'கட்டாய QCO தயாரிப்புகள்',
        msmeRebate: '20%',
        msmeLabel: 'MSME கட்டணச் சலுகை',
        groundedPct: '100%',
        groundedLabel: 'அரசிதழ் சரிபார்க்கப்பட்ட சான்றுகள்',
      },
      modulesTitle: 'இணக்கம் மற்றும் சரிபார்ப்பு தொகுதிகள்',
      modulesSubtitle: 'உங்கள் தேவையைத் தொடங்க ஒரு தொகுதியைத் தேர்ந்தெடுக்கவும்',
      cards: {
        sarthiTitle: 'சாரதி இணக்க உதவியாளர்',
        sarthiDesc: 'இந்திய தரநிலைகள், QCO தேவைகள் மற்றும் தொழில்நுட்ப விதிகளுக்கான AI உதவியாளர்.',
        sarthiAction: 'உதவியாளரைத் தொடங்கு',
        standardsTitle: 'இந்திய தரநிலைகள் (IS) பட்டியல்',
        standardsDesc: 'கட்டாய QCO அறிவிப்புகள் மற்றும் அதிகாரப்பூர்வ அரசிதழ் குறிப்புகளுடன் கூடிய தரநிலைகள்.',
        standardsAction: 'தரநிலைகள் பார்',
        schemesTitle: 'சான்றிதழ் மற்றும் கட்டணக் கணக்கீடு',
        schemesDesc: 'திட்டம் I (ISI முத்திரை), திட்டம் II (CRS) மற்றும் MSME-களுக்கான 20% கட்டணச் சலுகை.',
        schemesAction: 'கட்டணம் கணக்கிடு',
        labsTitle: 'சோதனை ஆய்வகங்கள்',
        labsDesc: 'இந்தியா முழுவதும் BIS மற்றும் NABL அங்கீகாரம் பெற்ற சோதனை ஆய்வகங்களின் பட்டியல்.',
        labsAction: 'ஆய்வகங்களைக் கண்டறி',
        verifyTitle: 'நம்பகத்தன்மை சரிபார்ப்பு',
        verifyDesc: 'தங்க நகைகளில் 6 இலக்க HUID ஹால்மார்க் மற்றும் ISI உரிமங்களைச் சரிபார்க்கவும்.',
        verifyAction: 'சரிபார்',
      },
      statutoryTitle: 'சட்டரீதியான ஒழுங்குமுறை கட்டமைப்பு',
      statutoryDesc: 'PrepLens இந்திய அரசின் தரக்கட்டுப்பாட்டு சட்டங்களின்படி செயல்படுகிறது:',
      legalActs: {
        bisActTitle: 'இந்திய தரநிலைகள் பணியக சட்டம், 2016',
        bisActDesc: 'தேசிய தரப்படுத்தல், கட்டாய தயாரிப்பு சான்றிதழ் மற்றும் ஆய்வுகளை ஒழுங்குபடுத்துகிறது.',
        carTitle: 'இணக்க மதிப்பீட்டு ஒழுங்குமுறைகள், 2018',
        carDesc: 'தொழிற்சாலை ஆய்வுகள், சோதனை நெறிமுறைகள் மற்றும் MSME சலுகைகளுக்கான ஒழுங்குமுறை.',
      },
    },
    chat: {
      welcomeHeading: 'PrepLens-க்கு வரவேற்கிறோம்',
      welcomeSub: 'இந்திய தரநிலைகள் (IS), கட்டாய QCO மற்றும் BIS சேவைகளுக்கான உங்கள் உதவியாளர்.',
      welcomeCapabilities: [
        'உங்கள் தயாரிப்புக்கான இந்திய தரநிலைகளைக் கண்டறியவும்',
        'தயாரிப்பு கட்டாய QCO-வின் கீழ் வருகிறதா எனச் சரிபார்க்கவும்',
        'சான்றிதழ் திட்டங்களின் (ISI முத்திரை, CRS) நடைமுறைகளை அறியவும்',
        'சோதனை அளவுருக்கள் மற்றும் NABL ஆய்வகங்களைக் கண்டறியவும்',
        'தங்க HUID குறியீடுகள் மற்றும் ISI உரிமங்களைச் சரிபார்க்கவும்',
      ],
      welcomePrompt: 'இன்று நீங்கள் எந்த தயாரிப்பு அல்லது விதிமுறை பற்றி அறிய விரும்புகிறீர்கள்?',
      inputPlaceholder: 'இந்திய தரநிலைகள், கட்டாய QCO, ஆய்வகங்கள் அல்லது கட்டணங்கள் பற்றி கேளுங்கள்...',
      send: 'அனுப்பு',
      listening: 'கேட்கிறது...',
      suggestedQueriesTitle: 'பரிந்துரைக்கப்பட்ட கேள்விகள்',
      traceButton: 'தடமறி',
      verifiedSource: 'அரசிதழ் சரிபார்க்கப்பட்ட தகவல்',
      clarificationNeeded: 'விளக்கம் தேவை',
      quickPrompts: [
        { label: '🚰 தொகுக்கப்பட்ட குடிநீர் ஆலை', query: 'IS 14543 கீழ் தொகுக்கப்பட்ட குடிநீர் ஆலை அமைக்க கட்டாய தரநிலைகள் மற்றும் உரிமத் தேவைகள் என்ன?' },
        { label: '🧸 பொம்மை தயாரிப்பு QCO', query: 'பொம்மைகள் கட்டாய QCO-வின் கீழ் வருகின்றனவா? IS 9873 பாதுகாப்பு தரநிலைகள் யாவை?' },
        { label: '⚡ பிளக் மற்றும் சாக்கெட் (IS 1293)', query: 'IS 1293:2019 கீழ் வீட்டு உபயோக பிளக்குகளுக்கான ISI சான்றிதழ் தேவைகள் என்ன?' },
        { label: '📱 மொபைல் லித்தியம் பேட்டரி', query: 'ஸ்மார்ட்போன் பேட்டரிகளுக்கான BIS CRS தரநிலை எது மற்றும் எந்த ஆய்வகங்கள் சோதிக்கின்றன?' },
        { label: '☀️ சூரிய ஒளி தகடுகள்', query: 'IS 14286 கீழ் சோலார் தகடுகளுக்கான பதிவு தேவைகள் என்ன?' },
        { label: '✨ தங்க நகை HUID சரிபார்ப்பு', query: 'தங்க நகைகளுக்கான 6 இலக்க HUID ஹால்மார்க்கிங் எவ்வாறு செயல்படுகிறது மற்றும் நுகர்வோர் அதை எவ்வாறு சரிபார்க்கலாம்?' },
      ],
    },
    standards: {
      title: 'இந்திய தரநிலைகள் (IS) பட்டியல் & அரசிதழ் குறிப்புகள்',
      subtitle: 'கட்டாய தரக்கட்டுப்பாட்டு ஆணைகள் (QCO) மற்றும் அரசு அறிவிப்புகளுடன் இணைக்கப்பட்ட தரநிலைகள்.',
      searchPlaceholder: 'தரநிலை எண் (எ.கா. IS 10500, IS 1417), தயாரிப்பு பெயர் கொண்டு தேடவும்...',
      categoryFilter: 'துறை பிரிவு',
      mandatoryFilter: 'கட்டாய QCO மட்டும்',
      all: 'அனைத்தும்',
      standardsFound: 'தரநிலைகள் கண்டறியப்பட்டன',
      tableCode: 'தரநிலை எண் & ஆண்டு',
      tableTitle: 'தலைப்பு & நோக்கம்',
      tableSector: 'துறை',
      tableScheme: 'திட்டம் & QCO நிலை',
      tableAction: 'செயல்',
      consultSarthi: 'சாரதியிடம் கேட்க',
      viewDetails: 'விவரங்கள் பார்க்க',
      mandatoryQco: 'கட்டாய QCO',
      voluntary: 'விருப்ப தரநிலை',
    },
    schemes: {
      title: 'சான்றிதழ் திட்டங்கள் & MSME கட்டணக் கணக்கீடு',
      subtitle: 'திட்டம் I (ISI முத்திரை), திட்டம் II (CRS) மற்றும் FMCS ஆகியவற்றிற்கான முழுமையான வழிகாட்டி.',
      calcTitle: 'கட்டணம் மற்றும் சலுகை மதிப்பீட்டாளர்',
      calcSubtitle: 'MSME நிறுவனங்களுக்கு அரசு விதிகளின்படி 20% கட்டணச் சலுகை பொருந்தும்.',
      enterpriseType: 'நிறுவன அளவு',
      riskLevel: 'சோதனை சிக்கல்',
      totalPayable: 'செலுத்த வேண்டிய அரசு கட்டணம்',
      msmeSavings: 'MSME சலுகை சேமிப்பு',
      consultSarthi: 'இத்திட்டம் பற்றி கேட்க',
      stepRoadmap: 'படிபடியான சான்றிதழ் வழிமுறை',
    },
    labs: {
      title: 'BIS & NABL அங்கீகரிக்கப்பட்ட சோதனை ஆய்வகங்கள்',
      subtitle: 'இந்திய தரநிலைகளின் இணக்கத்தை சோதிக்கும் அங்கீகரிக்கப்பட்ட ஆய்வகங்களைக் கண்டறியவும்.',
      searchPlaceholder: 'நகரம், மாநிலம் அல்லது தயாரிப்பு சோதனையைக் கொண்டு தேடவும்...',
      disciplineFilter: 'சோதனைப் பிரிவு',
      labTypeFilter: 'ஆய்வக வகை',
      all: 'அனைத்தும்',
      labsFound: 'ஆய்வகங்கள் உள்ளன',
      testProducts: 'அங்கீகரிக்கப்பட்ட சோதனைப் பொருட்கள்',
      consultLab: 'ஆய்வகத் தேவைகளைச் சரிபார்க்கவும்',
    },
    verify: {
      title: 'தேசிய தர முத்திரை சரிபார்ப்பு மையம்',
      subtitle: 'தங்க நகைகளின் 6 இலக்க HUID ஹால்மார்க், ISI முத்திரை உரிமம் மற்றும் CRS பதிவை உடனே சரிபார்க்கவும்.',
      huidTab: 'தங்கம் HUID ஹால்மார்க்',
      isiTab: 'ISI முத்திரை CM/L உரிமம்',
      crsTab: 'CRS எலக்ட்ரானிக்ஸ் பதிவு',
      verifyButton: 'சரிபார்க்கவும்',
      verified: 'அதிகாரப்பூர்வமாக சரிபார்க்கப்பட்டது & உண்மையானது',
      unverified: 'எச்சரிக்கை: பதிவு கிடைக்கவில்லை அல்லது சந்தேகத்திற்குரியது',
      sampleCode: 'மாதிரி சோதனை குறியீடு',
      verifySubtitle: 'பொருளில் அல்லது சான்றிதழில் உள்ள குறியீட்டை உள்ளிடவும்:',
    },
    footer: {
      subtitle: 'AI-இயங்கும் இந்திய தரநிலைகள் மற்றும் BIS சேவை உதவியாளர் · ஸ்மார்ட் இந்தியா ஹேக்கத்தான் 2026 (SIH26107)',
      helpline: 'தேசிய நுகர்வோர் உதவி எண்: 1915',
      ebis: 'e-BIS தளம்',
      manakonline: 'மானக்ஆன்லைன்',
      crs: 'CRS தளம்',
    },
  },
  mr: {
    nav: {
      overview: 'आढावा',
      standards: 'भारतीय मानके',
      certification: 'प्रमाणीकरण योजना',
      labs: 'चाचणी प्रयोगशाळा',
      verify: 'मानक पडताळणी',
      sarthi: 'सारथी AI',
      context: 'संदर्भ:',
      selectLanguage: 'भाषा',
    },
    roles: {
      msme: { label: 'सूक्ष्म व लघु उद्योग (MSME)', badge: '20% फी सवलत' },
      startup: { label: 'DPIIT स्टार्टअप', badge: 'विशेष सँडबॉक्स' },
      industry: { label: 'मोठा उत्पादक', badge: 'स्कीम I ISI' },
      consumer: { label: 'भारतीय ग्राहक', badge: 'गुणवत्ता हमी' },
      lab_technician: { label: 'चाचणी प्रयोगशाळा', badge: 'NABL स्कोप' },
      exporter: { label: 'परदेशी उत्पादक', badge: 'FMCS स्कीम IV' },
    },
    home: {
      badge: 'राष्ट्रीय मानके आणि अनुरूपता बुद्धिमत्ता',
      heroTitle: 'PrepLens',
      heroSubtitle: 'भारतीय उद्योग आणि ग्राहकांसाठी अनिवार्य गुणवत्ता नियंत्रण आदेश (QCO) आणि भारतीय मानके (IS) मार्गदर्शन.',
      searchPlaceholder: 'मानक कोड (उदा. IS 1417, IS 1293), उत्पादन किंवा QCO शोधा...',
      searchButton: 'तपासा',
      popularTags: 'लोकप्रिय:',
      stats: {
        standardsCount: '22,000+',
        standardsLabel: 'प्रकाशित भारतीय मानके',
        qcoCount: '700+',
        qcoLabel: 'अनिवार्य QCO उत्पादने',
        msmeRebate: '20%',
        msmeLabel: 'MSME फी सवलत',
        groundedPct: '100%',
        groundedLabel: 'राजपत्र-सत्यापित पुरावा',
      },
      modulesTitle: 'अनुरूपता आणि पडताळणी मॉड्यूल्स',
      modulesSubtitle: 'तुमची प्रक्रिया सुरू करण्यासाठी मॉड्यूल निवडा',
      cards: {
        sarthiTitle: 'सारथी अनुपालन सहाय्यक',
        sarthiDesc: 'भारतीय मानके, QCO नियम आणि तांत्रिक मार्गदर्शनासाठी AI सहाय्यक.',
        sarthiAction: 'सुरू करा',
        standardsTitle: 'भारतीय मानके (IS) सूची',
        standardsDesc: 'अनिवार्य QCO अधिसूचना आणि अधिकृत राजपत्र संदर्भांसह मानकांचा संग्रह.',
        standardsAction: 'मानके पहा',
        schemesTitle: 'प्रमाणीकरण आणि शुल्क गणक',
        schemesDesc: 'स्कीम I (ISI मार्क), स्कीम II (CRS) आणि सूक्ष्म उद्योगांसाठी 20% फी सवलत तपशील.',
        schemesAction: 'शुल्क मोजा',
        labsTitle: 'चाचणी प्रयोगशाळा निर्देशिका',
        labsDesc: 'भारतातील बीआयएस आणि एनएबीएल मान्यताप्राप्त चाचणी प्रयोगशाळा.',
        labsAction: 'लॅब शोधा',
        verifyTitle: 'मानक सत्यता पडताळणी',
        verifyDesc: 'सोन्यावरील 6-अंकी HUID हॉलमार्क आणि ISI CM/L परवाना पडताळा.',
        verifyAction: 'पडताळणी करा',
      },
      statutoryTitle: 'वैधानिक नियामक चौकट',
      statutoryDesc: 'PrepLens भारत सरकारच्या मानकीकरण नियमांनुसार कार्य करते:',
      legalActs: {
        bisActTitle: 'भारतीय मानक ब्युरो कायदा, 2016',
        bisActDesc: 'राष्ट्रीय मानकीकरण, अनिवार्य उत्पादन प्रमाणीकरण आणि तपासणीचे नियमन.',
        carTitle: 'अनुरूपता मूल्यमापन नियम, 2018',
        carDesc: 'कारखाना तपासणी, चाचणी प्रोटोकॉल आणि एमएसएमई फी सवलतींचे नियमन.',
      },
    },
    chat: {
      welcomeHeading: 'PrepLens मध्ये आपले स्वागत आहे',
      welcomeSub: 'भारतीय मानके (IS), अनिवार्य QCO आदेश आणि बीआयएस सेवांसाठी आपला सहाय्यक.',
      welcomeCapabilities: [
        'आपल्या उत्पादनासाठी लागू भारतीय मानके ओळखा',
        'उत्पादन अनिवार्य QCO अंतर्गत येते का ते तपासा',
        'प्रमाणीकरण योजनांची (ISI मार्क, CRS) प्रक्रिया समजून घ्या',
        'चाचणी निकष आणि NABL प्रयोगशाळांची माहिती मिळवा',
        'सोने HUID कोड आणि ISI परवाने पडताळा',
      ],
      welcomePrompt: 'आज आपल्याला कोणत्या उत्पादनाबद्दल किंवा नियमांबद्दल माहिती हवी आहे?',
      inputPlaceholder: 'भारतीय मानके, QCO, प्रयोगशाळा किंवा शुल्काबद्दल विचारा...',
      send: 'पाठवा',
      listening: 'ऐकत आहे...',
      suggestedQueriesTitle: 'सुचवलेले प्रश्न',
      traceButton: 'ट्रेस',
      verifiedSource: 'अधिकृत राजपत्र स्रोत',
      clarificationNeeded: 'स्पष्टीकरण आवश्यक',
      quickPrompts: [
        { label: '🚰 पॅकेज केलेले पिण्याचे पाणी', query: 'IS 14543 नुसार पॅकेज्ड पिण्याच्या पाण्याचा प्लांट सुरू करण्यासाठी अनिवार्य मानके व परवाना प्रक्रिया काय आहे?' },
        { label: '🧸 खेळणी उत्पादन QCO', query: 'खेळणी अनिवार्य QCO अंतर्गत येतात का? IS 9873 चे सुरक्षा निकष काय आहेत?' },
        { label: '⚡ प्लग आणि सॉकेट (IS 1293)', query: 'घरगुती 6A आणि 16A प्लगसाठी IS 1293:2019 अंतर्गत ISI प्रमाणपत्राचे नियम काय आहेत?' },
        { label: '📱 मोबाइल लिथियम बॅटरी', query: 'स्मार्टफोन बॅटरीसाठी कोणता BIS CRS मानक लागू होतो आणि कोणत्या लॅब चाचणी करतात?' },
        { label: '☀️ सोलर पीव्ही मॉड्यूल्स', query: 'IS 14286 नुसार सोलर पॅनेल नोंदणीसाठी काय नियम आहेत?' },
        { label: '✨ सोन्याचे दागिने HUID पडताळणी', query: 'सोन्यावरील 6-अंकी HUID हॉलमार्किंग कसे काम करते आणि ग्राहक सत्यता कशी तपासू शकतात?' },
      ],
    },
    standards: {
      title: 'भारतीय मानके (IS) सूची व राजपत्र संदर्भ',
      subtitle: 'अनिवार्य गुणवत्ता नियंत्रण आदेश (QCO) आणि सरकारी राजपत्राशी जोडलेली मानके.',
      searchPlaceholder: 'मानक क्रमांक (उदा. IS 10500, IS 1417), उत्पादनाचे नाव शोधा...',
      categoryFilter: 'उद्योग क्षेत्र',
      mandatoryFilter: 'केवळ अनिवार्य QCO',
      all: 'सर्व',
      standardsFound: 'मानके आढळली',
      tableCode: 'मानक कोड आणि वर्ष',
      tableTitle: 'शीर्षक आणि व्याप्ती',
      tableSector: 'क्षेत्र',
      tableScheme: 'योजना व QCO स्थिती',
      tableAction: 'कृती',
      consultSarthi: 'सारथीला विचारा',
      viewDetails: 'तपशील पहा',
      mandatoryQco: 'अनिवार्य QCO',
      voluntary: 'ऐच्छिक मानक',
    },
    schemes: {
      title: 'प्रमाणीकरण योजना व MSME फी गणक',
      subtitle: 'स्कीम I (ISI मार्क), स्कीम II (CRS) आणि परदेशी विनिर्माता प्रमाणपत्राचा (FMCS) संपूर्ण आराखडा.',
      calcTitle: 'इंटरॅक्टिव्ह फी आणि सवलत गणक',
      calcSubtitle: 'DPIIT नियमांनुसार सूक्ष्म व लघु उद्योगांसाठी 20% वैधानिक फी सवलत समाविष्ट.',
      enterpriseType: 'उद्योगाचा प्रकार',
      riskLevel: 'चाचणी गुंतागुंत',
      totalPayable: 'देय सरकारी शुल्क',
      msmeSavings: 'MSME सवलत बचत',
      consultSarthi: 'या योजनेबद्दल विचारा',
      stepRoadmap: 'टप्प्याटप्प्याने प्रमाणन प्रक्रिया',
    },
    labs: {
      title: 'BIS व NABL मान्यताप्राप्त चाचणी प्रयोगशाळा',
      subtitle: 'भारतीय मानकांनुसार उत्पादनांची चाचणी करणाऱ्या मान्यताप्राप्त प्रयोगशाळा शोधा.',
      searchPlaceholder: 'शहर, राज्य किंवा उत्पादनानुसार प्रयोगशाळा शोधा...',
      disciplineFilter: 'चाचणी विभाग',
      labTypeFilter: 'प्रयोगशाळा प्रकार',
      all: 'सर्व',
      labsFound: 'प्रयोगशाळा उपलब्ध',
      testProducts: 'मान्यताप्राप्त चाचणी उत्पादने',
      consultLab: 'लॅब नियम तपासा',
    },
    verify: {
      title: 'राष्ट्रीय मानक सत्यता पडताळणी केंद्र',
      subtitle: 'सोन्यावरील 6-अंकी HUID हॉलमार्क, ISI मार्क परवाना आणि CRS नोंदणीची त्वरित पडताळणी करा.',
      huidTab: 'सोने HUID हॉलमार्किंग',
      isiTab: 'ISI मार्क CM/L परवाना',
      crsTab: 'CRS इलेक्ट्रॉनिक्स नोंदणी',
      verifyButton: 'पडताळणी करा',
      verified: 'अधिकृतपणे पडताळलेले व अस्सल',
      unverified: 'चेतावणी: नोंद आढळली नाही किंवा संशयास्पद',
      sampleCode: 'नमुना चाचणी कोड',
      verifySubtitle: 'उत्पादनावरील किंवा प्रमाणपत्रावरील कोड टाका:',
    },
    footer: {
      subtitle: 'एआय-आधारित भारतीय मानके व बीआयएस सेवा सहाय्यक · स्मार्ट इंडिया हॅकाथॉन 2026 (SIH26107)',
      helpline: 'राष्ट्रीय ग्राहक हेल्पलाइन: 1915',
      ebis: 'e-BIS पोर्टल',
      manakonline: 'मानकऑनलाइन',
      crs: 'CRS पोर्टल',
    },
  },
  bn: {
    nav: {
      overview: 'সংক্ষিপ্ত বিবরণ',
      standards: 'ভারতীয় মানক',
      certification: 'সার্টিফিকেশন স্কিম',
      labs: 'পরীক্ষা গবেষণাগার',
      verify: 'মান যাচাই',
      sarthi: 'সারথী AI',
      context: 'প্রসঙ্গ:',
      selectLanguage: 'ভাষা',
    },
    roles: {
      msme: { label: 'ক্ষুদ্র ও মাঝারি শিল্প (MSME)', badge: '২০% ফি ছাড়' },
      startup: { label: 'DPIIT স্টার্টআপ', badge: 'বিশেষ স্যান্ডবক্স' },
      industry: { label: 'বৃহৎ প্রস্তুতকারক', badge: 'স্কিম I ISI' },
      consumer: { label: 'ভারতীয় ভোক্তা', badge: 'গুণমান নিশ্চয়তা' },
      lab_technician: { label: 'পরীক্ষা গবেষণাগার', badge: 'NABL ক্ষেত্র' },
      exporter: { label: 'বিদেশী প্রস্তুতকারক', badge: 'FMCS স্কিম IV' },
    },
    home: {
      badge: 'জাতীয় মানক ও সঙ্গতি বুদ্ধিমত্তা',
      heroTitle: 'PrepLens',
      heroSubtitle: 'ভারতীয় উদ্যোগ এবং গ্রাহকদের জন্য বাধ্যতামূলক মান নিয়ন্ত্রণ আদেশ (QCO) এবং ভারতীয় মানক (IS) গাইডেন্স।',
      searchPlaceholder: 'মানক কোড (যেমন IS 1417, IS 1293), পণ্যের নাম বা QCO খুঁজুন...',
      searchButton: 'বিশ্লেষণ করুন',
      popularTags: 'জনপ্রিয়:',
      stats: {
        standardsCount: '22,000+',
        standardsLabel: 'প্রকাশিত ভারতীয় মানক',
        qcoCount: '700+',
        qcoLabel: 'বাধ্যতামূলক QCO পণ্য',
        msmeRebate: '20%',
        msmeLabel: 'MSME সংবিধিবদ্ধ ছাড়',
        groundedPct: '100%',
        groundedLabel: 'গেজেট যাচাইকৃত তথ্য',
      },
      modulesTitle: 'সম্মতি ও যাচাইকরণ মডিউল',
      modulesSubtitle: 'আপনার প্রক্রিয়া শুরু করতে একটি মডিউল নির্বাচন করুন',
      cards: {
        sarthiTitle: 'সারথী সম্মতি সহায়ক',
        sarthiDesc: 'ভারতীয় মানক, QCO প্রয়োগ এবং প্রযুক্তিগত নিয়মের জন্য AI সহায়ক।',
        sarthiAction: 'শুরু করুন',
        standardsTitle: 'ভারতীয় মানক (IS) ক্যাটালগ',
        standardsDesc: 'বাধ্যতামূলক QCO বিজ্ঞপ্তি এবং সরকারী গেজেট রেফারেন্স সহ মানক সংগ্রহ।',
        standardsAction: 'মানক দেখুন',
        schemesTitle: 'সার্টিফিকেশন ও ফি ক্যালকুলেটর',
        schemesDesc: 'স্কিম I (ISI মার্ক), স্কিম II (CRS) এবং MSME-র জন্য ২০% ফি ছাড়ের বিবরণ।',
        schemesAction: 'ফি গণনা করুন',
        labsTitle: 'পরীক্ষা ল্যাবরেটরি ডিরেক্টরি',
        labsDesc: 'ভারত জুড়ে BIS এবং NABL স্বীকৃত পরীক্ষা গবেষণাগারের তালিকা।',
        labsAction: 'ল্যাব খুঁজুন',
        verifyTitle: 'প্রামাণিকতা যাচাইকরণ',
        verifyDesc: 'সোনার গহনায় ৬-সংখ্যার HUID হলমার্ক এবং ISI লাইসেন্স যাচাই করুন।',
        verifyAction: 'যাচাই করুন',
      },
      statutoryTitle: 'সংবিধিবদ্ধ নিয়ন্ত্রক কাঠামো',
      statutoryDesc: 'PrepLens ভারত সরকারের প্রমিতকরণ কাঠামোর সাথে সামঞ্জস্য রেখে কাজ করে:',
      legalActs: {
        bisActTitle: 'ব্যুরো অফ ইন্ডিয়ান স্ট্যান্ডার্ডস আইন, ২০১৬',
        bisActDesc: 'জাতীয় প্রমিতকরণ, বাধ্যতামূলক পণ্য শংসাপত্র এবং পরিদর্শন নিয়ন্ত্রণ করে।',
        carTitle: 'সঙ্গতি মূল্যায়ন প্রবিধান, ২০১৮',
        carDesc: 'কারখানা পরিদর্শন, পরীক্ষার প্রোটোকল এবং MSME ফি ছাড়ের নিয়ন্ত্রক কাঠামো।',
      },
    },
    chat: {
      welcomeHeading: 'PrepLens-এ আপনাকে স্বাগতম',
      welcomeSub: 'ভারতীয় মানক (IS), বাধ্যতামূলক QCO এবং BIS সেবার জন্য আপনার সহকারী।',
      welcomeCapabilities: [
        'আপনার পণ্যের জন্য প্রযোজ্য ভারতীয় মানক সনাক্ত করুন',
        'পণ্যটি বাধ্যতামূলক QCO-র আওতায় পড়ে কিনা তা পরীক্ষা করুন',
        'সার্টিফিকেশন স্কিমগুলির (ISI মার্ক, CRS) পদ্ধতি জানুন',
        'পরীক্ষার পরামিতি এবং NABL ল্যাবরেটরি খুঁজুন',
        'সোনার HUID কোড এবং ISI লাইসেন্স যাচাই করুন',
      ],
      welcomePrompt: 'আজ আপনি কোন পণ্য বা নিয়ম সম্পর্কে জানতে চান?',
      inputPlaceholder: 'ভারতীয় মানক, QCO আদেশ, ল্যাব বা ফি সম্পর্কে জিজ্ঞাসা করুন...',
      send: 'পাঠান',
      listening: 'শুনছি...',
      suggestedQueriesTitle: 'প্রস্তাবিত অনুসন্ধান',
      traceButton: 'ট্রেস',
      verifiedSource: 'অফিসিয়াল গেজেট উৎস',
      clarificationNeeded: 'স্পষ্টকরণ প্রয়োজন',
      quickPrompts: [
        { label: '🚰 প্যাকেটজাত পানীয় জল প্ল্যান্ট', query: 'IS 14543 অনুযায়ী প্যাকেটজাত পানীয় জল প্ল্যান্ট স্থাপনের জন্য বাধ্যতামূলক মান এবং লাইসেন্স প্রক্রিয়া কী?' },
        { label: '🧸 খেলনা প্রস্তুতকারক QCO', query: 'খেলনা কি বাধ্যতামূলক QCO-র আওতায় পড়ে? IS 9873 সুরক্ষা মানগুলি কী কী?' },
        { label: '⚡ প্লাগ এবং সকেট (IS 1293)', query: 'IS 1293:2019 এর অধীনে গার্হস্থ্য প্লাগের জন্য ISI শংসাপত্রের প্রয়োজনীয়তা কী?' },
        { label: '📱 মোবাইল লিথিয়াম ব্যাটারি', query: 'স্মার্টফোনের ব্যাটারির জন্য কোন BIS CRS মান প্রযোজ্য এবং কোন ল্যাব পরীক্ষা করে?' },
        { label: '☀️ সোলার পিভি মডিউল', query: 'IS 14286 এর অধীনে সৌর প্যানেল নিবন্ধনের প্রয়োজনীয়তা কী?' },
        { label: '✨ সোনার গহনা HUID যাচাইকরণ', query: 'সোনার গহনার জন্য ৬-সংখ্যার HUID হলমার্কিং কীভাবে কাজ করে এবং কীভাবে গ্রাহকরা যাচাই করবেন?' },
      ],
    },
    standards: {
      title: 'ভারতীয় মানক (IS) ক্যাটালগ ও গেজেট তথ্য',
      subtitle: 'বাধ্যতামূলক গুণমান নিয়ন্ত্রণ আদেশ (QCO) এবং সরকারি গেজেট বিজ্ঞপ্তির প্রামাণিক সংগ্রহ।',
      searchPlaceholder: 'মানক নম্বর (যেমন IS 10500, IS 1417), পণ্যের নাম দিয়ে খুঁজুন...',
      categoryFilter: 'শিল্প খাত',
      mandatoryFilter: 'শুধুমাত্র বাধ্যতামূলক QCO',
      all: 'সমস্ত',
      standardsFound: 'মানক পাওয়া গেছে',
      tableCode: 'মানক কোড ও বছর',
      tableTitle: 'শিরোনাম ও পরিধি',
      tableSector: 'খাত',
      tableScheme: 'স্কিম ও QCO স্থিতি',
      tableAction: 'পদক্ষেপ',
      consultSarthi: 'সারথীকে জিজ্ঞাসা করুন',
      viewDetails: 'বিস্তারিত দেখুন',
      mandatoryQco: 'বাধ্যতামূলক QCO',
      voluntary: 'ঐচ্ছিক মানক',
    },
    schemes: {
      title: 'সার্টিফিকেশন স্কিম ও MSME ফি ক্যালকুলেটর',
      subtitle: 'স্কিম I (ISI মার্ক), স্কিম II (CRS) এবং বিদেশী প্রস্তুতকারক সার্টিফিকেশনের (FMCS) নির্দেশিকা।',
      calcTitle: 'ইন্টারেক্টিভ ফি এবং ছাড় গণনাকারী',
      calcSubtitle: 'DPIIT নির্দেশিকা অনুসারে ক্ষুদ্র ও ছোট শিল্পের জন্য ২০% সরকারি ছাড় অন্তর্ভুক্ত।',
      enterpriseType: 'শিল্পের আকার',
      riskLevel: 'পরীক্ষার জটিলতা',
      totalPayable: 'মোট প্রদেয় সরকারি ফি',
      msmeSavings: 'MSME ছাড়ের সাশ্রয়',
      consultSarthi: 'এই স্কিম সম্পর্কে জানুন',
      stepRoadmap: 'পর্যায়ক্রমিক সার্টিফিকেশন পদ্ধতি',
    },
    labs: {
      title: 'BIS এবং NABL স্বীকৃত পরীক্ষা গবেষণাগার',
      subtitle: 'ভারতীয় মানকের সঙ্গতি পরীক্ষার জন্য অনুমোদিত পরীক্ষাগারগুলি সনাক্ত করুন।',
      searchPlaceholder: 'শহর, রাজ্য বা পণ্যের পরীক্ষার ক্ষেত্র দিয়ে খুঁজুন...',
      disciplineFilter: 'পরীক্ষার বিভাগ',
      labTypeFilter: 'গবেষণাগারের ধরন',
      all: 'সমস্ত',
      labsFound: 'গবেষণাগার উপলব্ধ',
      testProducts: 'অনুমোদিত পরীক্ষার পণ্যসমূহ',
      consultLab: 'ল্যাব প্রয়োজনীয়তা পরীক্ষা করুন',
    },
    verify: {
      title: 'জাতীয় মান ও সত্যতা যাচাইকরণ কেন্দ্র',
      subtitle: 'সোনার গহনায় ৬-সংখ্যার HUID হলমার্ক, ISI মার্ক লাইসেন্স এবং CRS রেজিস্ট্রেশন অবিলম্বে যাচাই করুন।',
      huidTab: 'সোনার HUID হলমার্ক',
      isiTab: 'ISI মার্ক CM/L লাইসেন্স',
      crsTab: 'CRS ইলেকট্রনিক্স রেজিস্ট্রেশন',
      verifyButton: 'যাচাই করুন',
      verified: 'অফিসিয়ালভাবে যাচাইকৃত ও খাঁটি',
      unverified: 'সতর্কতা: রেকর্ড পাওয়া যায়নি বা সন্দেহজনক',
      sampleCode: 'নমুনা পরীক্ষা কোড',
      verifySubtitle: 'পণ্যে বা শংসাপত্রে মুদ্রিত কোডটি লিখুন:',
    },
    footer: {
      subtitle: 'এআই-চালিত ভারতীয় মানক ও BIS পরিষেবা সহায়ক · স্মার্ট ইন্ডিয়া হ্যাকাথন ২০২৬ (SIH26107)',
      helpline: 'জাতীয় ভোক্তা হেল্পলাইন: ১৯১৫',
      ebis: 'e-BIS পোর্টাল',
      manakonline: 'মানকঅনলাইন',
      crs: 'CRS পোর্টাল',
    },
  },
};
