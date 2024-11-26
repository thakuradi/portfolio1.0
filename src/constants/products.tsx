import orom from "public/images/orom.png"
import blockchain from "public/images/blockchain.jpg"
import lawyergpt from "public/images/lawyergpt.png"
import gocpt from "/public/images/gocpt.png"
export const products = [
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
