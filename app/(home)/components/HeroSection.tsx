"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient-button";
import { FaLocationArrow } from "react-icons/fa";
import { IoMdContacts } from "react-icons/io";
import { SiGithub, SiLinkedin, SiInstagram } from "react-icons/si";

const socials = [
  {
    link: "https://github.com/douglasquan",
    label: "GitHub",
    Icon: SiGithub
  },
  {
    link: "https://linkedin.com/in/douglasquan",
    label: "LinkedIn",
    Icon: SiLinkedin
  },
  {
    link: "https://www.instagram.com/quan.douglas/",
    label: "Instagram",
    Icon: SiInstagram
  }
];

const HeroSection = () => {
  return (
    <motion.div
      className="flex flex-col lg:flex-row items-center justify-center pt-32 px-4 lg:px-20 lg:mr-32"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* IMAGE CONTAINER */}
      <div className="lg:w-1/2 flex justify-center lg:justify-end pr-0 lg:pr-16">
        <div className="rounded-full bg-background dark:bg-dark-background w-[250px] h-[250px] lg:w-[500px] lg:h-[500px] overflow-hidden relative">
          <Image
            src="/profile-pic_cleanup_upscale.png"
            alt="Douglas Quan"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
      </div>

      {/* TEXT CONTAINER */}
      <div className="lg:w-1/2 flex flex-col items-start pl-0 lg:pl-16 mt-8 lg:mt-0">
        {/* TITLE */}
        <div className="mb-8 w-full text-center lg:text-left">
          <TypeAnimation
            sequence={[1000, "Douglas Quan"]}
            wrapper="h1"
            repeat={0}
            cursor={false}
            speed={50}
            className="text-primary dark:text-dark-primary text-5xl md:text-7xl lg:text-9xl font-bold"
          />
        </div>
        {/* BACKGROUND */}
        <p className="text-quaternary dark:text-dark-secondary text-xl md:text-2xl lg:text-3xl font-semibold mb-4 w-full lg:max-w-4xl">
          4th year CS & Maths @ University of Toronto.
        </p>
        {/* BUTTONS */}
        <div className="flex flex-row sm:flex-row gap-4 mb-4">
          <a
            href="/Douglas_Quan_Resume-9.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <HoverBorderGradient
              containerClassName="rounded-full w-48 h-16"
              innerBgClass="bg-quaternary dark:bg-dark-primary"
              as="button"
              className="bg-quaternary dark:bg-dark-primary text-white dark:text-dark-tertiary flex items-center justify-center space-x-2 px-5 py-3 text-xl "
            >
              <span className="pr-2">Resume</span>
              <FaLocationArrow />
            </HoverBorderGradient>
          </a>
          <a
            href="#contact"
            className="animate-bounce-five focus:animate-none hover:animate-none flex items-center justify-center text-lg font-medium bg-transparent dark:bg-transparent mt-3 px-5 py-3 w-48 h-16 rounded-full tracking-wide text-quaternary dark:text-dark-primary border border-black dark:border dark:border-dark-primary"
          >
            <span className="pr-2">Contact Me</span>
            <IoMdContacts />
          </a>
        </div>

        {/* SOCIALS */}
        <div className="flex gap-3 pl-2 pt-2">
          {socials.map((social, index) => {
            const Icon = social.Icon;
            return (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="hover:scale-125 transition-transform"
              >
                <Icon className="w-6 h-6 text-accent dark:text-dark-accent" />
              </a>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default HeroSection;
