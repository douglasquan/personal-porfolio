import Link from "next/link";
import React from "react";
import {
  AiOutlineAim,
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineTool,
  AiOutlineProject,
  AiOutlinePhone,
  AiOutlineBook,
  AiOutlineLaptop
} from "react-icons/ai";
import { SiGithub, SiLinkedin } from "react-icons/si";

export default function Navbar() {
  return (
    <nav className="fixed top-2 left-1/2 transform -translate-x-1/2 z-20 flex gap-2 justify-center items-center p-4 rounded-full bg-black bg-opacity-30 backdrop-blur-[15px]">
      {/* <h1 className="text-2xl font-bold underline underline-offset-8 decoration-blue-500 ">
        Douglas Quan
      </h1> */}

      <a
        href="#home"
        className="p-2 rounded-full text-white text-opacity-70 hover:bg-black hover:bg-opacity-30 hover:text-opacity-100"
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        className="p-2 rounded-full text-white text-opacity-70 hover:bg-black hover:bg-opacity-30 hover:text-opacity-100"
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        className="p-2 rounded-full text-white text-opacity-70 hover:bg-black hover:bg-opacity-30 hover:text-opacity-100"
      >
        <AiOutlineLaptop />
      </a>

      <a
        href="#projects"
        className="p-2 rounded-full text-white text-opacity-70 hover:bg-black hover:bg-opacity-30 hover:text-opacity-100"
      >
        <AiOutlineProject />
      </a>
      <a
        href="#education"
        className="p-2 rounded-full text-white text-opacity-70 hover:bg-black hover:bg-opacity-30 hover:text-opacity-100"
      >
        <AiOutlineBook />
      </a>
      <a
        href="#skills"
        className="p-2 rounded-full text-white text-opacity-70 hover:bg-black hover:bg-opacity-30 hover:text-opacity-100"
      >
        <AiOutlineTool />
      </a>
      <a
        href="#contact"
        className="p-2 rounded-full text-white text-opacity-70 hover:bg-black hover:bg-opacity-30 hover:text-opacity-100"
      >
        <AiOutlinePhone />
      </a>
    </nav>
  );
}
