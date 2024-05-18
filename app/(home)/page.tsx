"use client";

import React, { useRef, useEffect, useState } from "react";
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
import ThemeToggle from "@/components/ui/ThemeSwitch";

interface Props {
  scrollContainerRef: React.RefObject<HTMLDivElement>;
}

const pageTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 }
};
const Page: React.FC = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = scrollContainerRef.current?.scrollTop ?? 0;
      if (currentScrollY < lastScrollY) {
        setShowNavbar(true); // Scrolling up
      } else if (currentScrollY > lastScrollY) {
        setShowNavbar(false); // Scrolling down
      }
      setLastScrollY(currentScrollY);
    };

    scrollContainerRef.current?.addEventListener("scroll", handleScroll);
    return () =>
      scrollContainerRef.current?.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

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
        className="overflow-y-auto h-screen bg-[rgb(210,210,230)] dark:bg-[#172C42] animate-glow-random bg-extra-large relative scroll-smooth"
      >
        <div className="flex justify-end p-2 md:p-8 space-x-2 md:space-x-4">
          <ThemeToggle />
        </div>
        <Navbar isVisible={showNavbar} />
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
      <div className="fixed bottom-4 left-0 md:left-8 md:bottom-8 flex items-center space-x-2 md:space-x-4">
        <ScrollToTop scrollContainerRef={scrollContainerRef} />
      </div>
    </motion.div>
  );
};
export default Page;
