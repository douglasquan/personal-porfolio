// "use client";

// import React from "react";

// import { ImagesSlider } from "@/components/ui/image-slider";
// import { motion } from "framer-motion";
// import {
//   TypewriterEffect,
//   TypewriterEffectSmooth
// } from "@/components/ui/typewriter-effect";

// export default function HeroSection() {
//   const images = [
//     "https://images.unsplash.com/photo-1536599018102-9f803c140fc1?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     "https://media.blogto.com/articles/2017314-city.jpg?w=2048&cmd=resize_then_crop&height=1365&quality=70"
//   ];

//   const Name = [
//     {
//       text: "Douglas"
//     },
//     {
//       text: "Quan"
//     }
//   ];

//   const Education = [
//     {
//       text: "Computer"
//     },
//     {
//       text: "Science"
//     },
//     {
//       text: "+"
//     },
//     {
//       text: "Mathematics"
//     },
//     {
//       text: "@University"
//     },
//     {
//       text: "of"
//     },
//     {
//       text: "Toronto'25"
//     }
//   ];

//   return (
//     <ImagesSlider className="h-[56rem]" images={images}>
//       <motion.div
//         initial={{ opacity: 0, y: -200 }}
//         animate={{ opacity: 1, y: -200 }}
//         transition={{ duration: 0.8 }}
//         className="z-50 flex flex-col justify-center items-center w-full mt-auto"
//       >
//         <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
//           <TypewriterEffect words={Name} className="text-8xl" />
//           <TypewriterEffectSmooth
//             words={Education}
//             className="text-lg flex justify-center items-center py-4"
//           />
//         </motion.p>
//         <div className="flex space-x-4 mt-4">
//           <HoverBorderGradient
//             containerClassName="rounded-full w-48 h-16" // Sets width to 12rem and height to 4rem
//             as="button"
//             className="dark:bg-black bg-white text-black dark:text-white flex items-center justify-center space-x-2 px-4 py-2 text-lg" // Added text-lg for larger text
//           >
//             <span>Contact Me</span>
//             <IoMdContacts />
//           </HoverBorderGradient>

//           <HoverBorderGradient
//             containerClassName="rounded-full w-48 h-16" // Ensures both buttons have the same size
//             as="button"
//             className="dark:bg-black bg-white text-black dark:text-white flex items-center justify-center space-x-2 px-4 py-2 text-lg" // Added text-lg for larger text
//           >
//             <span>Resume</span>
//             <FaLocationArrow />
//           </HoverBorderGradient>
//         </div>
//       </motion.div>
//     </ImagesSlider>
//   );
// }

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient-button";
import { FaLocationArrow } from "react-icons/fa";
import { IoMdContacts } from "react-icons/io";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1
    }
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity
    }
  }
};
const HeroSection = () => {
  return (
    <motion.div
      className="h-full py-24"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-4xl md:text-8xl font-bold text-accent relative flex items-center justify-center pb-24">
        <TypeAnimation
          sequence={[1000, "I'm Douglas Quan"]}
          wrapper="span"
          speed={50}
        />
      </h1>
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative flex items-center justify-center">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] overflow-hidden relative mr-16">
            <Image
              src="/profile-pic_cleanup_upscale.png"
              alt="hero image"
              className="absolute object-cover object-center w-full h-full"
              width={1400}
              height={1400}
            />
          </div>
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center mt-8">
          {/* TITLE */}

          <p className="text-lg md:text-3xl font-bold text-left text-accent">
            <TypeAnimation
              sequence={[1000, "Computer Science  @ University of Toronto'25"]}
              wrapper="span"
              speed={50}
            />
          </p>
          {/* DESC */}
          <p className="md:text-xl">
            No one shall be subjected to arbitrary arrest, detention or exile.
            Everyone is entitled in full equality to a fair and public hearing
            by an independent and impartial tribunal, in the determination of
            his rights and obligations and of any criminal charge against him.
            No one shall be subjected to arbitrary interference with his
            privacy, family, home or correspondence, nor to attacks upon his
            honour and reputation. Everyone has the right to the protection of
            the law against such interference or attacks.
          </p>
          {/* BUTTONS */}
          <div className="w-full flex gap-6 justify-start">
            <HoverBorderGradient
              containerClassName="rounded-full w-40 h-14"
              innerBgClass="bg-[#c6b299]"
              as="button"
              className="dark:bg-transparent bg-[#c6b299] text-black dark:text-black flex items-center justify-center space-x-2 px-4 py-2 text-lg" // Added text-lg for larger text
            >
              <span>Resume</span>
              <FaLocationArrow />
            </HoverBorderGradient>
            <a
              href="#contact"
              className="animate-bounce focus:animate-none hover:animate-none flex items-center justify-center text-md font-medium bg-primary mt-3 px-4 py-2 w-40 h-14 rounded-full tracking-wide text-white"
            >
              <span className="ml-2">Contact Me</span>
              <IoMdContacts />
            </a>
          </div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll-removebg-preview.png"
            alt=""
            className="w-1/6 h-full flex flex-col items-center gap-10"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default HeroSection;
