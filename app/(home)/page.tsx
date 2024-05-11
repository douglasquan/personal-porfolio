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
  const sectionClassName = "px-4 md:px-8 py-8";
  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div
        ref={scrollContainerRef}
        className="overflow-y-auto h-screen bg-top-glowing-gradient animate-glow-random bg-extra-large relative scroll-smooth"
      >
        <Navbar />
        <main className="space-y-24 lg:space-y-32 ">
          <section id="home" className={sectionClassName}>
            <HeroSection />
          </section>
          <section id="about" className={sectionClassName}>
            <AboutMe />
          </section>
          <section id="experience" className={sectionClassName}>
            <Experience />
          </section>
          <section id="projects" className={sectionClassName}>
            <Project />
          </section>
          <section id="education" className={sectionClassName}>
            <Education />
          </section>
          <section id="skills" className={sectionClassName}>
            <Skills />
          </section>
          <section id="contact" className={sectionClassName}>
            <Contact />
          </section>
        </main>
      </div>
      <ScrollToTop scrollContainerRef={scrollContainerRef} />
    </motion.div>
  );
};
export default Page;
