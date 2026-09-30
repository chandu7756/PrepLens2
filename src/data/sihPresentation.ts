export interface SIHSlide {
  slideNumber: number;
  title: string;
  subtitle?: string;
  categoryTag?: string;
  content: Record<string, any>;
}

export const SIH_METADATA = {
  hackathon: 'SMART INDIA HACKATHON 2026',
  problemStatementId: 'SIH26107',
  problemStatementTitle: 'AI-Powered Intelligent Assistant for Indian Standards and BIS Services for Industries and Consumers',
  theme: 'Smart Automation',
  psCategory: 'Software',
  teamId: '159008',
  teamName: 'PrepLens',
  projectName: 'BIS-SARTHI',
  tagline: 'AI-Powered Intelligent Assistant for Indian Standards & BIS Services',
};

export const SIH_SLIDES: SIHSlide[] = [
  {
    slideNumber: 1,
    title: 'TITLE PAGE',
    subtitle: 'SMART INDIA HACKATHON 2026',
    categoryTag: 'Software / Smart Automation',
    content: {
      psId: 'SIH26107',
      psTitle: 'AI-Powered Intelligent Assistant for Indian Standards and BIS Services for Industries and Consumers',
      theme: 'Smart Automation',
      category: 'Software',
      teamId: '159008',
      teamName: 'PrepLens',
      solutionName: 'BIS-SARTHI',
    },
  },
  {
    slideNumber: 2,
    title: 'BIS-SARTHI: AI-Powered Intelligent Assistant for Indian Standards & BIS Services',
    subtitle: 'Proposed Solution & Innovation',
    content: {
      proposedSolution: [
        'Conversational AI assistant for industries, MSMEs, startups and consumers to discover relevant Indian Standards and BIS services.',
        'Understands product descriptions and user intent, then retrieves BIS information through an evidence-grounded RAG pipeline.',
        'Covers Standard Discovery, Certification Guidance, Testing & Laboratory Assistance, Consumer Services and Multilingual Access.',
        'Explains technical information in simple language with source-backed guidance.',
      ],
      addressingTheProblem: [
        {
          challenge: 'Fragmented Search',
          solution: 'One conversational layer across standards, certification, testing, and services.',
        },
        {
          challenge: 'Ambiguous Products',
          solution: 'Clarifying questions before recommending a standard to prevent costly misclassification.',
        },
        {
          challenge: 'Unsupported AI Answers',
          solution: 'Authoritative BIS data and source traceability eliminate hallucination.',
        },
      ],
      uniqueness: [
        'Not just a chatbot: Retrieve → Rank → Verify → Generate → Cite',
        'Context-aware standards discovery + service guidance in one cohesive layer',
      ],
      ragPipelineSteps: [
        { step: 1, name: '1. Retrieve', desc: 'Hybrid semantic + keyword search across IS catalog' },
        { step: 2, name: '2. Rank', desc: 'Relevance re-ranking of BIS technical documents' },
        { step: 3, name: '3. Verify', desc: 'Evidence check against official gazette notifications & QCOs' },
        { step: 4, name: '4. Generate', desc: 'Plain-language RAG answer tailored to MSME/Consumer intent' },
        { step: 5, name: '5. Cite', desc: 'Source, document/version, clause, date accessed' },
      ],
    },
  },
  {
    slideNumber: 3,
    title: 'TECHNICAL APPROACH',
    subtitle: 'BIS-SARTHI — AI-powered BIS knowledge assistant',
    content: {
      pipelineFlow: [
        'User Query',
        'Intent + Product Extraction',
        'Hybrid Retrieval',
        'Relevance Ranking',
        'Evidence Verification',
        'LLM / RAG Generation',
      ],
      pillars: [
        { title: 'Accurate & Reliable', desc: 'Verified authoritative sources & zero-hallucination guard' },
        { title: 'Context Aware', desc: 'Product + Standard mapping with MSME/Consumer intent' },
        { title: 'User Friendly', desc: 'Simple, fast, voice-enabled, and accessible interface' },
        { title: 'Multilingual Support', desc: 'English, Hindi, Telugu, Tamil, Marathi, Bengali & more' },
        { title: 'Smart Search', desc: 'Semantic + Keyword retrieval across 22,000+ Indian Standards' },
        { title: 'Structured Database', desc: 'BIS standards, regulations, certifications, laboratories' },
      ],
      userFlow: [
        '1. Ask a Question: User enters query via text or voice',
        '2. Detect Intent & Product: Identify category, product type and user intent',
        '3. Search BIS Knowledge Base: Retrieve relevant information using hybrid search',
        '4. Rank Relevant Information: Use relevance scoring + context weighting',
        '5. Verify Authoritative Evidence: Cross-check with official BIS gazette and QCO sources',
        '6. Generate Response: Plain-language LLM + RAG response (multilingual)',
        '7. Show Answer with Source: Clear, actionable, and source-backed citations',
      ],
      techStack: {
        frontend: 'React + TypeScript + Tailwind CSS + Motion + Lucide Icons',
        backend: 'Node.js + Express (Modular architecture with Python/FastAPI spec)',
        aiNlp: 'Gemini 3.8 Flash SDK + Multilingual NLP Engine',
        rag: 'Hybrid Semantic Embeddings + Vector Scoring + Re-ranking',
        search: 'Hybrid semantic + BM25 keyword retrieval',
        data: 'Structured BIS Knowledge Base (Standards, QCOs, Schemes, Labs, HUID)',
        deployment: 'Cloud Run / Vercel Serverless Architecture',
      },
      qualityGate: [
        '1. If sufficient authoritative evidence is not found, the system avoids giving a confident generated answer.',
        '2. Clarifies or redirects to official BIS channels (Manakonline, e-BIS, BIS Care) instead.',
        '3. Ensures 100% regulatory accuracy, reliability, and trustworthiness.',
      ],
    },
  },
  {
    slideNumber: 4,
    title: 'FEASIBILITY AND VIABILITY',
    subtitle: 'Strategic Execution & Risk Mitigation',
    content: {
      roadmap: [
        { phase: 'MVP', title: 'Standards Discovery', desc: 'Core conversational RAG, IS catalog search & intent extractor' },
        { phase: 'Phase 2', title: 'Certification + Testing', desc: 'Scheme I/II pathways, fee estimator & NABL lab directory' },
        { phase: 'Phase 3', title: 'Multilingual + Consumer', desc: 'Voice Q&A, HUID/ISI verification & regional languages' },
        { phase: 'Scale', title: 'Enterprise / BIS Ecosystem', desc: 'Official API integration with Manakonline, e-BIS & Customs ICEGATE' },
      ],
      feasibilityAnalysis: [
        '1. Mature LLM/NLP, RAG, vector retrieval and document-processing technologies make the solution technically feasible.',
        '2. Modular API architecture and cloud deployment support progressive scaling to millions of MSMEs and citizens.',
        '3. MVP can begin with a focused BIS knowledge domain (QCO mandatory goods) and expand after validation.',
      ],
      potentialRisks: [
        '1. Hallucination or unsupported answers on safety regulations',
        '2. Changing standards, amendments, and newly notified QCO schemes',
        '3. Ambiguous products (e.g. multi-use plastics or custom electronics)',
        '4. Complex technical terminology confusing grassroots MSMEs',
        '5. Source access and data usage constraints',
      ],
      mitigationStrategies: [
        '1. RAG + evidence verification quality gate (refuses speculative answers)',
        '2. Document versioning + automated Gazette scraper update pipeline',
        '3. Clarifying questions and plain-language explanation layer',
        '4. Authorized / public sources only (Gazette of India, BIS portal)',
        '5. Source metadata + traceable references with direct official URLs',
      ],
    },
  },
  {
    slideNumber: 5,
    title: 'IMPACT AND BENEFITS',
    subtitle: 'What Changes vs What PrepLens Delivers',
    content: {
      matrix: [
        {
          whatChanges: '1. Faster standards discovery',
          whatPrepLensDelivers: 'Conversational Q&A on Indian Standards with sub-second retrieval',
        },
        {
          whatChanges: '2. Clearer certification pathway',
          whatPrepLensDelivers: 'Structured next-step guidance & interactive MSME fee calculator',
        },
        {
          whatChanges: '3. Lower compliance barrier for MSMEs & startups',
          whatPrepLensDelivers: 'Grounded, source-cited answers with 20% concession navigation',
        },
        {
          whatChanges: '4. Improved discoverability of BIS services',
          whatPrepLensDelivers: 'Complaint navigation support & consumer grievance guidance',
        },
        {
          whatChanges: '5. Reduced repetitive search effort',
          whatPrepLensDelivers: 'Easy-to-use, anytime self-service access across web & mobile',
        },
        {
          whatChanges: '6. Wider multilingual accessibility',
          whatPrepLensDelivers: 'Hallmarking & mark guidance in Hindi, Telugu, Tamil, and regional tongues',
        },
      ],
    },
  },
  {
    slideNumber: 6,
    title: 'RESEARCH AND REFERENCES',
    subtitle: 'Academic Grounding & Official Regulatory Frameworks',
    content: {
      references: [
        {
          category: 'Research Papers',
          title: 'RAG-based Q&A over standards',
          citationUrl: 'https://arxiv.org/pdf/2506.07037',
          description: 'Evaluates Retrieval-Augmented Generation architectures over technical standard specifications and precision retrieval constraints.',
        },
        {
          category: 'Problem Statement',
          title: 'SIH 2026 – SIH26107',
          citationUrl: 'https://sih.gov.in/sih2026PS',
          description: 'Official Ministry / Department of Consumer Affairs problem statement for Smart India Hackathon 2026.',
        },
        {
          category: 'Existing Application',
          title: 'BIS Care App (e-BIS Portal)',
          citationUrl: 'https://www.bis.gov.in',
          description: 'Official citizen-facing mobile application for verifying ISI mark, HUID, and lodging quality complaints.',
        },
        {
          category: 'Regulatory Framework',
          title: 'BIS Conformity Assessment Regulations, 2018',
          citationUrl: 'https://www.bis.gov.in/product-certification/product-certification-process/',
          description: 'Statutory rules governing grant, renewal, suspension, and cancellation of licenses for ISI mark and CRS.',
        },
        {
          category: 'AI Assessment Research',
          title: 'Automated Compliance Checking',
          citationUrl: 'https://arxiv.org/html/2608.02472',
          description: 'Formal verification algorithms and large language model alignment for regulatory compliance auditing.',
        },
      ],
    },
  },
];
