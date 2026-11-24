"use client";
import { Paragraph } from "@/components/Paragraph";
import { Highlight } from "@/components/Highlight";
import Image from "next/image";

import { motion } from "framer-motion";

export default function About() {
  const images = [
    "https://images.unsplash.com/photo-1692544350322-ac70cfd63614?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1692374227159-2d3592f274c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1692005561659-cdba32d1e4a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1692445381633-7999ebc03730?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  ];
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 my-10">
        {images.map((image, index) => (
          <motion.div
            key={image}
            initial={{
              opacity: 0,
              y: -50,
              rotate: 0,
            }}
            animate={{
              opacity: 1,
              y: 0,
              rotate: index % 2 === 0 ? 3 : -3,
            }}
            transition={{ duration: 0.2, delay: index * 0.1 }}
          >
            <Image
              src={image}
              width={200}
              height={400}
              alt="about"
              className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60 hover:rotate-0 transition duration-200"
            />
          </motion.div>
        ))}
        {/* 
        // <Image
        //   src="https://images.unsplash.com/photo-1692544350322-ac70cfd63614?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60"
        //   width={200}
        //   height={400}
        //   alt="about"
        //   className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60 hover:rotate-0 transition duration-200"
        // />
        // <Image
        //   src="https://images.unsplash.com/photo-1692374227159-2d3592f274c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60"
        //   width={200}
        //   height={400}
        //   alt="about"
        //   className="rounded-md object-cover transform -rotate-3 shadow-xl block w-full h-40 md:h-60  hover:rotate-0 transition duration-200"
        // />
        // <Image
        //   src="https://images.unsplash.com/photo-1692005561659-cdba32d1e4a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
        //   width={200}
        //   height={400}
        //   alt="about"
        //   className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60  hover:rotate-0 transition duration-200"
        // />
        // <Image
        //   src="https://images.unsplash.com/photo-1692445381633-7999ebc03730?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
        //   width={200}
        //   height={400}
        //   alt="about"
        //   className="rounded-md object-cover transform -rotate-3 shadow-xl block w-full h-40 md:h-60  hover:rotate-0 transition duration-200"
        // /> */}
      </div>

      <div className="max-w-4xl">
        <Paragraph className=" mt-4">
          Hey there, I&apos;m <Highlight>Aditya Kumar</Highlight> — a passionate developer, writer, and design enthusiast—and welcome to my digital playground.
        </Paragraph>
        <Paragraph className=" mt-4">
          My journey began with curiosity and a keyboard. I&apos;ve always been captivated by transforming ideas into digital realities, weaving code that not only works but delights—and prose that informs and inspires.
        </Paragraph>

        <Paragraph className=" mt-4">
          <strong>💻 Coding with Purpose</strong><br/>
          Today I build <Highlight>Auroscale</Highlight>, Langslide&apos;s AI marketing and video platform—one FastAPI + Google ADK backend behind a 400+ endpoint API, with a campaign agent that plans work and supervises specialist sub-agents, AI video generation across Gemini and Kling, and Razorpay-backed credit billing. At <Highlight>Langslide</Highlight> I also architected an enterprise AI CMO &amp; Marketing Agent Suite on Google ADK and FastAPI—40+ specialised agents, hybrid RAG, and a parallel execution engine that cut multi-agent SEO analysis from 4 minutes to 58 seconds. Before that I co‑founded <Highlight>Nexa Wings</Highlight>, a Generative-AI consultancy that shipped 30+ client projects across India, the UK, Switzerland and the USA—earning a <Highlight>2024 India 5000 MSME Award nomination</Highlight>.
        </Paragraph>

        <Paragraph className=" mt-4">
          From real-time voice-calling pipelines and invoice generators to multi-agent orchestration built with <Highlight>LangGraph, Google ADK, and LangSmith</Highlight>, my development mantra is to blend architectural rigor with clean, beautiful experience design.
        </Paragraph>

        <Paragraph className=" mt-4">
          <strong>✍️ Words with Impact</strong><br/>
          My love for writing goes beyond documentation—it&apos;s about conveying ideas. Whether it&apos;s articles explaining AI pipelines, technical essays, or creative narratives, I believe in <Highlight>storytelling that enlightens and engages</Highlight>.
        </Paragraph>

        <Paragraph className=" mt-4">
          <strong>🎨 Where Form Meets Function</strong><br/>
          Design is my secret weapon. Every interface I build is created with usability and elegance in mind. I don&apos;t just code apps—I <Highlight>craft experiences</Highlight> that feel intuitive and visually striking.
        </Paragraph>
      </div>
    </div>
  );
}
