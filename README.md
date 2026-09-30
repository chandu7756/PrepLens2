# PrepLens2 

**AI-Powered Intelligent Assistant for Indian Standards & BIS Services**

BIS-SARTHI helps manufacturers, MSMEs, startups and consumers navigate Bureau of Indian Standards (BIS) requirements. Ask about a product in plain language and get the applicable Indian Standard (IS) code, whether a Quality Control Order (QCO) makes certification mandatory, the certification scheme, key lab tests, and next steps, with citations.

Built by **Team PrepLens** for **Smart India Hackathon 2026** (Problem Statement **SIH26107**).

---

## Features

- **Conversational RAG assistant**: answers grounded in a curated BIS standards knowledge base, with source citations (IS numbers and Gazette QCO references).
- **Hybrid retrieval**: keyword and token scoring over IS number, title, scope, category and QCO details, plus product-specific semantic boosts (water, pipes, toys, batteries, cables, gold/HUID, steel, solar, cement, etc.).
- **Clarifying questions**: ambiguous queries (e.g. "pipes", "water", "battery") trigger follow-up questions instead of a guess.
- **Quality gate**: each response gets a confidence score and a verdict: *Verified Authoritative Evidence*, *Clarification Needed*, or *Redirect to BIS Portal*.
- **Pipeline trace**: a 5-step trace (intent extraction → retrieval → re-ranking → synthesis → citations) with timings.
- **Role-aware guidance**: tailored for roles such as MSME/startup (includes the 20% fee concession reminder).
- **Multilingual**: English, Hindi, Telugu, Tamil, Marathi and Bengali.
- **Works without an API key**: falls back to deterministic, template-based answers if Gemini is not configured or a call fails.
- **Verification tools**: check an ISI mark (CM/L number), a gold jewellery HUID, or a CRS R-number.
- **Standards and labs directories**: searchable and filterable REST endpoints.

## Tech Stack

| Layer | Technology |
| --- | --- |
| Frontend | React 19, Vite, Tailwind CSS 4, Motion, Lucide React |
| Backend | Node.js, Express, TypeScript (run with `tsx`) |
| AI | Google Gemini via `@google/genai` |

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- A Gemini API key (optional but recommended for AI-generated answers)

### Installation

```bash
git clone https://github.com/chandu7756/PrepLens2.git
cd PrepLens2
npm install
```

### Configuration

Copy the example environment file and fill in your values:

```bash
cp .env.example .env
```

| Variable | Description |
| --- | --- |
| `GEMINI_API_KEY` | Gemini API key. If omitted, the app uses deterministic fallback answers. |
| `APP_URL` | URL where the app is hosted (used for self-referential links and callbacks). |
| `PORT` | Optional. Server port, defaults to `3000`. |

### Run

```bash
npm run dev
```

Open <http://localhost:3000>. In development, the Express server hosts the Vite dev server as middleware, so the API and UI run on a single port.

### Production build

```bash
npm run build
NODE_ENV=production npm start
```

In production the server serves the built files from `dist/`.

### Scripts

| Script | Purpose |
| --- | --- |
| `npm run dev` / `npm start` | Start the Express server (with Vite middleware in dev) |
| `npm run build` | Build the frontend with Vite |
| `npm run preview` | Preview the Vite build |
| `npm run lint` | Type-check with `tsc --noEmit` |
| `npm run clean` | Remove `dist` and `server.js` |

## API Reference

### `POST /api/sarthi/query`

Conversational RAG query.

```json
{
  "query": "What certification do I need for HDPE pipes?",
  "role": "msme",
  "language": "en",
  "history": []
}
```

Returns the answer, detected intent, retrieved standards, quality gate result, citations, pipeline trace, and suggested follow-ups.

### Verification

| Endpoint | Body | Checks |
| --- | --- | --- |
| `POST /api/verify/isi` | `{ "cmlNumber": "..." }` | ISI mark license (CM/L number) |
| `POST /api/verify/huid` | `{ "huid": "..." }` | Gold jewellery HUID |
| `POST /api/verify/crs` | `{ "rNumber": "..." }` | CRS registration (R-number) |

### Directories

| Endpoint | Query params |
| --- | --- |
| `GET /api/standards` | `category`, `mandatoryOnly=true`, `search` |
| `GET /api/labs` | `discipline`, `state` |

## Project Structure

```
PrepLens2/
├── server.ts            # Express server, RAG pipeline and API routes
├── index.html           # App entry point
├── vite.config.ts       # Vite configuration
├── src/
│   ├── data/
│   │   ├── bisStandards.ts        # BIS standards knowledge base
│   │   ├── verificationSamples.ts # Sample ISI / HUID / CRS records
│   │   └── bisLabs.ts             # Testing laboratories
│   └── types/
│       └── bis.ts                 # Shared TypeScript types
├── .env.example
├── metadata.json
├── package.json
└── tsconfig.json
```

## Important Notes

- The knowledge base and verification records are **curated sample data** for demonstration. The ISI, HUID and CRS lookups do not query live BIS databases.
- Always confirm regulatory requirements on official BIS portals before acting: [Manakonline](https://www.manakonline.in), [CRS portal](https://www.crsbis.in), and [Know Your Standards](https://www.services.bis.gov.in).
- AI-generated answers are guidance, not legal or compliance advice.

## Contributing

Issues and pull requests are welcome. Please run `npm run lint` before submitting changes.

## License

No license has been specified yet. Add a `LICENSE` file to define usage terms.

---

*Built by Team PrepLens for Smart India Hackathon 2026.*
