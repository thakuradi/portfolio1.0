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
        I&apos;m currently building AI agent systems at{" "}
        <Highlight>Auroscale</Highlight> and working as an Automation Engineer
        (AI Agents &amp; Backend) at <Highlight>Langslide</Highlight>, where I
        architect agent suites on Google ADK, LangGraph and FastAPI. Previously
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
