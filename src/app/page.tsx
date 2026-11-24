import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";
import Image from "next/image";

export default function Home() {
  return (
    <Container>
      <span className="text-4xl">👋</span>
      <Heading className="font-black">Hello there! I&apos;m Aditya</Heading>
      <Paragraph className="max-w-xl mt-4">
        I&apos;m a full-stack AI engineer that loves{" "}
        <Highlight>building multi-agent systems</Highlight>, RAG pipelines and
        production LLM backends
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
        I&apos;m currently building <Highlight>Auroscale</Highlight>, an AI
        marketing and video platform by <Highlight>Langslide</Highlight>, where
        I own the FastAPI + Google ADK backend: campaign agents orchestrating
        specialist sub-agents, AI video generation and billing. Previously
        I co-founded <Highlight>Nexa Wings</Highlight>, a Generative-AI
        consultancy.
      </Paragraph>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        What I&apos;ve been working on
      </Heading>
      <Products />
      <TechStack />
    </Container>
  );
}
