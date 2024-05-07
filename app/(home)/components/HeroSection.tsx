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
      className="min-h-screen flex flex-col lg:flex-row items-center justify-center py-10 px-4  lg:px-20 lg:mr-32"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* IMAGE CONTAINER */}
      <div className="lg:w-1/2 flex justify-center lg:justify-end pr-0 lg:pr-16">
        <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[500px] lg:h-[500px] overflow-hidden relative">
          <Image
            src="/profile-pic_cleanup_upscale.png"
            alt="Douglas Quan"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>

      {/* TEXT CONTAINER */}
      <div className="lg:w-1/2 flex flex-col items-start pl-0 lg:pl-16 mt-8 lg:mt-0">
        {/* TITLE */}
        <div className="mb-4 w-full text-center lg:text-left">
          <TypeAnimation
            sequence={[1000, "Douglas Quan"]}
            wrapper="h1"
            repeat={0}
            cursor={false}
            speed={50}
            className="text-orange text-5xl md:text-7xl lg:text-9xl font-bold"
          />
        </div>
        {/* background */}
        <p className="text-ash-gray text-xl md:text-2xl lg:text-3xl font-semibold mb-2 w-full lg:max-w-4xl">
          I&apos;m a third-year undergraduate specializing in Computer Science with a
          minor in Mathematics at the University of Toronto.
        </p>
        {/* BUTTONS */}
        <div className="flex flex-row sm:flex-row gap-4 mb-4">
          <a
            href="/Douglas_Quan_Resume-6.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <HoverBorderGradient
              containerClassName="rounded-full w-48 h-16"
              innerBgClass="bg-ash-gray"
              as="button"
              className="dark:bg-transparent bg-ash-gray text-black dark:text-black flex items-center justify-center space-x-2 px-5 py-3 text-xl"
            >
              <span className="pr-2">Resume</span>
              <FaLocationArrow />
            </HoverBorderGradient>
          </a>
          <a
            href="#contact"
            className="animate-bounce focus:animate-none hover:animate-none flex items-center justify-center text-lg font-medium bg-primary mt-3 px-5 py-3 w-48 h-16 rounded-full tracking-wide text-white"
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
                <Icon className="w-6 h-6 text-ash-gray" />
              </a>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default HeroSection;
