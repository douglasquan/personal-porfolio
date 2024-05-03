/* use client */
import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Skills from "./components/Skills";
import { Project } from "./components/Project";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";

export default function page() {
  return (
    <div className="overflow-y-auto h-screen snap-y snap-mandatory scroll-smooth bg-top-glowing-gradient animate-glow-random bg-extra-large">
      <Navbar />
      <section id="home" className="snap-start min-h-screen overflow-hidden">
        <HeroSection />
      </section>
      <section id="experience" className="snap-start ">
        <Experience />
      </section>

      <section
        id="projects"
        className="snap-start min-h-screen overflow-hidden "
      >
        <Project />
      </section>

      <section
        id="education"
        className="snap-start min-h-screen overflow-hidden"
      >
        <Education />
      </section>

      <section id="skills" className="snap-start min-h-screen overflow-hidden">
        <Skills />
      </section>

      <section id="contact" className="snap-start min-h-screen overflow-hidden">
        <Contact />
      </section>
    </div>
  );
}
