"use client";

import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Skills from "./components/Skills";
import { Project } from "./components/Project";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import AboutMe from "./components/About-me";
import { motion } from "framer-motion";

const pageTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 }
};

export default function page() {
  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="overflow-y-auto h-screen bg-top-glowing-gradient animate-glow-random bg-extra-large">
        <Navbar />
        <main className="space-y-24 lg:space-y-32 ">
          <section id="home" className="px-4 md:px-8">
            <HeroSection />
          </section>
          <section id="about" className="px-4 md:px-8">
            <AboutMe />
          </section>
          <section id="experience" className="px-4 md:px-8">
            <Experience />
          </section>
          <section id="projects" className="px-4 md:px-8">
            <Project />
          </section>
          <section id="education" className="px-4 md:px-8">
            <Education />
          </section>
          <section id="skills" className="px-4 md:px-8">
            <Skills />
          </section>
          <section id="contact" className="px-4 md:px-8">
            <Contact />
          </section>
        </main>
      </div>
    </motion.div>
  );
}
