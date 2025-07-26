import orom from "public/images/orom.png"
import blockchain from "public/images/blockchain.jpg"
import lawyergpt from "public/images/lawyergpt.png"
import gocpt from "/public/images/gocpt.png"
import invoiceGenerator from "public/images/Invoice_generator.png"
import messenger from "public/images/messanger.png"
import companyExtractor from "public/images/company_extractor.jpg"

export const products = [
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
      "Professional invoice creation tool with dynamic calculations, PDF export, and real-time totals - perfect for freelancers and small businesses.",
    thumbnail: invoiceGenerator,
    images: [invoiceGenerator],
    stack: ["React", "JavaScript", "jsPDF", "HTML/CSS", "Vercel"],
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
          <strong>Technical Implementation:</strong> Built using React with responsive design principles, the application leverages modern JavaScript for dynamic calculations and PDF generation libraries for document export. Deployed on Vercel for optimal performance and reliability.
        </p>
        <p>
          <strong>Business Value:</strong> Provides a cost-effective solution for professional invoicing, reduces manual calculation errors, and offers portability through PDF export. The tool addresses the common pain points of small businesses and freelancers who need quick, professional invoice generation without subscription costs.
        </p>
      </div>
    ),
  },
  {
    href: "",
    title: "Lawyer GPT",
    description:
      "AI Assistant for Legal Professionals and Students.",
    thumbnail: lawyergpt,
    images: [lawyergpt],
    stack: [" Python", "Gradio"," Langchain", "OpenAI", "RAG", "LLM", "Fine-tuning."],
    slug: "Lawyer GPT",
    content: (
      <div>
        <p>
          Sit eiusmod ex mollit sit quis ad deserunt. Sint aliqua aliqua ullamco
          dolore nulla amet tempor sunt est ipsum. Dolor laborum eiusmod
          cupidatat consectetur velit ipsum. Deserunt nisi in culpa laboris
          cupidatat elit velit aute mollit nisi. Officia ad exercitation laboris
          non cupidatat duis esse velit ut culpa et.{" "}
        </p>
        <p>
          Exercitation pariatur enim occaecat adipisicing nostrud adipisicing
          Lorem tempor ullamco exercitation quis et dolor sint. Adipisicing sunt
          sit aute fugiat incididunt nostrud consequat proident fugiat id.
          Officia aliquip laborum labore eu culpa dolor reprehenderit eu ex enim
          reprehenderit. Cillum Lorem veniam eu magna exercitation.
          Reprehenderit adipisicing minim et officia enim et veniam Lorem
          excepteur velit adipisicing et Lorem magna.
        </p>{" "}
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
