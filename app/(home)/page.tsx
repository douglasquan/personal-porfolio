"use client";

import React, { useRef } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Skills from "./components/Skills";
import { Project } from "./components/Project";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import AboutMe from "./components/About-me";
import { motion } from "framer-motion";
import ScrollToTop from "@/components/ui/scroll-top";

interface Props {
  scrollContainerRef: React.RefObject<HTMLDivElement>;
}

const pageTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 }
};

const Page: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div
        ref={scrollContainerRef}
        className="overflow-y-auto h-screen bg-top-glowing-gradient animate-glow-random bg-extra-large relative"
      >
        <Navbar />
        <main className="space-y-24 lg:space-y-32 ">
          <section id="home" className="px-4 md:px-8 relative">
            <HeroSection />
          </section>
          <section id="about" className="px-4 md:px-8 relative">
            <AboutMe />
          </section>
          <section id="experience" className="px-4 md:px-8 relative">
            <Experience />
          </section>
          <section id="projects" className="px-4 md:px-8 relative">
            <Project />
          </section>
          <section id="education" className="px-4 md:px-8 relative">
            <Education />
          </section>
          <section id="skills" className="px-4 md:px-8 relative">
            <Skills />
          </section>
          <section id="contact" className="px-4 md:px-8 relative">
            <Contact />
          </section>
        </main>
      </div>
      <ScrollToTop scrollContainerRef={scrollContainerRef} />
    </motion.div>
  );
};
export default Page;
