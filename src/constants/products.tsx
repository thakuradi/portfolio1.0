import orom from "public/images/orom.png"
import blockchain from "public/images/blockchain.jpg"
import gocpt from "/public/images/gocpt.png"
import invoiceGenerator from "public/images/Invoice_generator.png"
import messenger from "public/images/messanger.png"
import companyExtractor from "public/images/company_extractor.jpg"
import auroscale from "public/images/auroscale.png"
import langslideCmo from "public/images/langslide_cmo_agents.png"
import langslideCustomAgents from "public/images/langslide_custom_agents.png"
import multiAgentOrchestration from "public/images/multi_agent_orchestration.svg"

export const products = [
  {
    href: "https://github.com/thakuradi/Real-Time-Multi-Agent-LLM-Orchestration-and-Evaluation-System",
    title: "Multi-Agent LLM Orchestration & Evaluation System",
    description:
      "LangGraph planner-executor platform with RAG, critique and synthesis sub-agents, SSE streaming, a 6-dimension eval harness and a self-improving prompt loop.",
    thumbnail: multiAgentOrchestration,
    images: [multiAgentOrchestration],
    stack: ["LangGraph", "GPT-4o", "FastAPI", "PostgreSQL", "pgvector", "Celery", "Redis", "LangSmith", "Pydantic"],
    slug: "multi-agent-orchestration",
    content: (
      <div>
        <p>
          An autonomous multi-agent platform where a Planner agent builds a routing plan with dependencies and an Executor orchestrates handoffs through a shared context schema. LangGraph conditional edges handle retries, routing and compression triggers, and results stream to clients over SSE from FastAPI.
        </p>
        <p>
          <strong>Sub-agents:</strong> Decomposition builds a dependency DAG for sub-tasks, RAG does multi-hop retrieval with citations, Critique scores confidence at span level rather than on whole outputs, and Synthesis resolves contradictions with provenance mapping. Tools (web search, code sandbox, NL-to-SQL, self-reflection) return structured error envelopes with bounded retries.
        </p>
        <p>
          <strong>Context budget manager:</strong> tracks token use per agent per turn, triggers a compression agent on overflow and logs budget violations as policy violations.
        </p>
        <p>
          <strong>Evaluation and self-improvement:</strong> an automated parallel harness (Pytest + LangSmith) runs baseline, ambiguous and adversarial cases and scores six dimensions (correctness, citations, contradictions, efficiency, compliance, agreement) on every change with sub-second overhead. A meta-agent proposes structured prompt diffs that a human approves before targeted re-evaluation. Persistence on PostgreSQL with Alembic, vectors in ChromaDB/pgvector, async jobs on Celery and Redis.
        </p>
      </div>
    ),
  },
  {
    href: "https://auroscale.com",
    title: "Auroscale",
    description:
      "AI marketing and video platform by Langslide. I own the unified FastAPI + Google ADK backend: campaign agents, AI video generation, billing and channel integrations.",
    thumbnail: auroscale,
    images: [auroscale],
    stack: ["FastAPI", "Google ADK", "MongoDB", "Gemini", "Higgsfield", "Razorpay", "AWS", "SSE"],
    slug: "auroscale",
    content: (
      <div>
        <p>
          Auroscale is Langslide&apos;s AI marketing and video platform. A single FastAPI service serves a 400+ endpoint API contract covering sign-up, workspaces, campaigns, insights, assets, channel connections and billing, with the agents mounted in the same process so the frontend sends one JWT everywhere.
        </p>
        <p>
          <strong>Campaign agent:</strong> a lead planner agent on Google ADK breaks a request into tasks and hands each to a specialist sub-agent (Researcher, Strategist, Copywriter, Editor, Reviewer, Analyst, Scheduler), checks every result against a done-criterion with capped retries, and streams a live task board into the chat over SSE.
        </p>
        <p>
          <strong>Video pipeline:</strong> canvas, chained shots, post videos, AI ads, product films and brand visuals rendered through Gemini, with Kling and Seedance via Higgsfield on paid plans, stored on S3 and priced per shot before the user confirms.
        </p>
        <p>
          <strong>Platform:</strong> a workspace credit ledger gates and charges every agent run, Razorpay handles plans, subscriptions, GST invoices and signed webhooks, channel OAuth covers LinkedIn, Meta, X, Reddit, Google, TikTok, Pinterest and YouTube Ads with AES-encrypted tokens, and deploys go to AWS through GitHub Actions with OpenTelemetry tracing to Cloud Trace.
        </p>
      </div>
    ),
  },
  {
    href: "https://langslide.ai",
    title: "AI CMO & Marketing Agent Suite",
    description:
      "Enterprise multi-agent marketing platform on Google ADK and FastAPI: 40+ specialised agents for company research, SEO audits, content, ads and campaign planning.",
    thumbnail: langslideCmo,
    images: [langslideCmo],
    stack: ["Google ADK", "FastAPI", "Gemini", "ChromaDB", "ParallelAgent", "Python", "RAG"],
    slug: "ai-cmo-agent-suite",
    content: (
      <div>
        <p>
          The Langslide agents platform orchestrates dozens of domain-specific AI agents built on the Google Agent Development Kit and FastAPI, with credit-based billing, multi-tenant sessions, real-time RAG and social channel integrations for LinkedIn, Meta, Reddit and Google Ads.
        </p>
        <p>
          <strong>AI CMO suite:</strong> a company researcher and feature extractor that parses a site for USPs, personas and positioning; an evidence-backed SEO audit engine where four parallel specialist agents (technical, performance, schema, content) score a site 0–100 against real HTTP evidence; content agents for LinkedIn, X, Reddit and Hacker News; and ad copy and budget allocation for Google and Meta Ads.
        </p>
        <p>
          <strong>Parallel execution engine:</strong> ADK ParallelAgent combined with ThreadPoolExecutor cut a full multi-agent SEO analysis from 4 minutes to 58 seconds and crawls 25+ URLs concurrently in under 4 seconds.
        </p>
        <p>
          <strong>Beyond marketing:</strong> audience persona and customer journey agents, a ChromaDB-backed multi-source RAG engine over cross-channel ad data, executive intelligence briefings, outreach agents for email, SMS and direct mail, and vertical suites for healthcare, recruitment, B2B sales prospecting and transcript mining.
        </p>
      </div>
    ),
  },
  {
    href: "https://langslide.ai",
    title: "Custom Agent & MCP Orchestrator",
    description:
      "No-code custom agent platform with hybrid RAG and a per-chat MCP sandbox that runs thousands of third-party tools as isolated, authenticated subprocesses.",
    thumbnail: langslideCustomAgents,
    images: [langslideCustomAgents],
    stack: ["Python", "MCP", "FastAPI", "MongoDB", "OpenAI Embeddings", "BM25", "LangGraph", "Pydantic"],
    slug: "custom-agent-platform",
    content: (
      <div>
        <p>
          A no-code platform where users assemble their own agents with hybrid RAG (OpenAI embeddings plus BM25), reranking, context compression and dynamic tool routing, with per-agent isolation and observability.
        </p>
        <p>
          <strong>Per-chat MCP sandbox:</strong> agents are created without hardcoded credentials. Each chat session activates its own set of integrations, and the runtime spins up an isolated Python subprocess per enabled tool, passing only a connection id so credentials never cross between chats.
        </p>
        <p>
          <strong>Tool registry:</strong> MCP servers live in a servers directory and are registered in MongoDB, so the frontend lists available tools dynamically and new integrations are added by writing the protocol handlers and seeding the registry.
        </p>
        <p>
          <strong>Safety:</strong> strict Pydantic schemas and LangGraph state machines keep agent outputs safe to execute downstream, with PostgreSQL session persistence and real-time SSE token streaming on the API.
        </p>
      </div>
    ),
  },
  {
    href: "https://github.com/thakuradi/CompanyInfo_extractor",
    title: "Company Info Extractor",
    description:
      "AI-powered web extraction tool using LangChain, LangGraph, and LangSmith to automatically research and structure company information with agentic workflows.",
    thumbnail: companyExtractor,
    images: [companyExtractor],
    stack: ["LangChain", "LangGraph", "LangSmith", "Python", "AI Agents", "JSON Schema", "Pydantic"],
    slug: "company-info-extractor",
    content: (
      <div>
        <p>
          The Company Info Extractor is an advanced AI-powered web application that automates the research and extraction of structured company information using cutting-edge agentic workflows. Built with LangChain ecosystem tools, it demonstrates sophisticated AI orchestration for real-world data extraction challenges.
        </p>
        <p>
          <strong>Core AI Features:</strong> Automated research phase with LLM-driven search queries, schema-based data extraction ensuring consistency and completeness, iterative refinement through reflection loops, and intelligent content aggregation from multiple sources. The system emulates advanced company research agents with self-improving capabilities.
        </p>
        <p>
          <strong>Technical Architecture:</strong> LangChain orchestrates chain-of-thought workflows and manages retrieval relations, LangGraph models the agent pipeline as a stateful graph structure, and LangSmith provides comprehensive traceability and debugging for reliable performance monitoring.
        </p>
        <p>
          <strong>Workflow Innovation:</strong> The system processes user input for target companies, executes intelligent research through generated queries, performs structured extraction with JSON schema enforcement, and implements reflection loops for data completeness. This results in reliable, structured outputs ready for analytics and downstream applications.
        </p>
      </div>
    ),
  },
  {
    href: "https://github.com/thakuradi/messenger",
    title: "Messenger Platform",
    description:
      "Real-time messaging platform with TypeScript, supporting one-on-one and group chat functionality with modern communication features.",
    thumbnail: messenger,
    images: [messenger],
    stack: ["TypeScript", "React", "Node.js", "Socket.IO", "MongoDB", "WebSockets"],
    slug: "messenger-platform",
    content: (
      <div>
        <p>
          A comprehensive real-time messaging platform built with TypeScript that delivers smooth and modern communication experiences. The application supports both individual and group conversations with instant message synchronization and responsive design across all devices.
        </p>
        <p>
          <strong>Core Features:</strong> Real-time messaging using WebSocket technology, group chat support for multi-user conversations, secure user authentication and profile management, comprehensive message management including editing and deletion, and responsive UI/UX optimized for both desktop and mobile devices.
        </p>
        <p>
          <strong>Technical Architecture:</strong> Built with a full TypeScript stack featuring React frontend, Node.js backend with Express, Socket.IO for real-time communication, and MongoDB for data persistence. The application ensures minimal latency and scalable messaging solutions suitable for teams and communities.
        </p>
        <p>
          <strong>Impact & Scalability:</strong> Provides essential chat functionality with a foundation ready for extensions like video calls, voice notes, encrypted messaging, and file sharing. The platform demonstrates modern web development practices with real-time capabilities and enterprise-ready architecture.
        </p>
      </div>
    ),
  },
  {
    href: "https://github.com/thakuradi/Invoice_Generator",
    title: "Invoice Generator",
    description:
      "Full-stack invoicing platform with a live editor, template customisation and PDF export, built on Next.js App Router with Prisma and PostgreSQL.",
    thumbnail: invoiceGenerator,
    images: [invoiceGenerator],
    stack: ["Next.js", "TypeScript", "NextAuth", "shadcn/ui", "Prisma", "PostgreSQL", "Zod", "jsPDF", "Vercel"],
    slug: "invoice-generator",
    content: (
      <div>
        <p>
          The Invoice Generator is a comprehensive web application designed to streamline the invoicing process for freelancers and small businesses. Built with a focus on user experience and functionality, it allows users to create, preview, and download professional invoices directly from their browser without any sign-up requirements.
        </p>
        <p>
          <strong>Key Features:</strong> Dynamic form inputs for flexible item management, real-time calculations that automatically update totals as users modify details, and seamless PDF export functionality. The application supports multiple line items with quantity, unit price, tax, and discount calculations, ensuring accuracy and professionalism in every invoice.
        </p>
        <p>
          <strong>Technical Implementation:</strong> Built with Next.js App Router and TypeScript, with NextAuth for authentication, shadcn/ui components and jsPDF for document export. Indexed Prisma queries on PostgreSQL and Zod validation cut serverless API latency by around 35% on Vercel.
        </p>
        <p>
          <strong>Business Value:</strong> Provides a cost-effective solution for professional invoicing, reduces manual calculation errors, and offers portability through PDF export. The tool addresses the common pain points of small businesses and freelancers who need quick, professional invoice generation without subscription costs.
        </p>
      </div>
    ),
  },
  {
    href: "https://orom.club/",
    title: "Orom",
    description:
      "Helping small business owners and first time entrepreneurs convert anonymous website visitors into qualified leads",
    thumbnail: orom,
    images: [orom],
    stack: ["Nextjs", "Tailwindcss"],
    slug: "algochurn",
    content: (
      <div>
        <p>
        Orom is an all-in-one platform designed to simplify outreach, marketing, and lead management for first-time entrepreneurs and small business owners.
        Orom consolidates essential business tools into one subscription, eliminating the need to pay for multiple services and reducing overall costs.
        Yes, Orom offers seamless integration with your existing website through custom APIs, ensuring smooth operation without the need for third-party services.
        {" "}
        </p>
        <p>
        Orom provides a wide range of features, including custom waitlists, testimonial collection, newsletter creation, feedback and feature management, dynamic blogs, custom popups, and more.
        </p>{" "}
      </div>
    ),
  },
  {
    href: "https://www.gocpt.ai/",
    title: "Gocpt",
    description:
      "Never write from scratch again with Moonbeam, your AI first writing tool",
    thumbnail: gocpt,
    images: [gocpt],
    stack: ["Nextjs", "Tailwindcss"],
    slug: "moonbeam",
    content: (
      <div>
        <p>
        Welcome to goCPT, where the journey of revolutionizing the medical coding and billing landscape began with a single idea - to make mental health care more accessible to everyone.{" "}
        </p>
        <p>
        The goCPT app offers a user-friendly feature for determining CPT codes based on time alone. To utilize this functionality, simply navigate to the designated time button within the app and input the total time spent managing the patient during the encounter. The app will then generate the appropriate CPT code, considering the significant role of time in certain scenarios, such as counseling or coordination of care, in determining the level of service provided
        </p>{" "}
      </div>
    ),
  },
  {
    href: "",
    title: "Blockchain Bricks",
    description:
      "Convert Real Estate Deeds into NFTs",
    thumbnail:blockchain,
    images: [blockchain],
    stack: ["Nextjs", "Tailwindcss"],
    slug: "tailwindmasterkit",
    content: (
      <div>
        <p>
          SiNon-fungible tokens (NFTs) are a new player in the real estate market, which is always changing. The way we purchase, trade, and own property is changing as a result of these blockchain-powered digital assets. This in-depth examination of NFTs in the real estate industry looks at how they could disrupt ownership structures, transactions, and a host of other areas. It also highlights the many opportunities that blockchain technology presents.{" "}
        </p>
        <p>
        The foundational technology of NFTs, blockchain, guarantees the immutability, security, and transparency of property records. The blockchain ensures a transparent history of ownership and reduces fraud by securely recording every transaction.
        </p>{" "}
      </div>
    ),
  },
];
