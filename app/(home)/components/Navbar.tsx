import CustomTooltip from "@/components/ui/tool-tip";
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

interface NavbarProps {
  isVisible: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isVisible }) => {
  return (
    <nav
      className={`fixed top-2 left-1/2 transform -translate-x-1/2 z-20 flex gap-2 justify-center items-center p-6 rounded-full bg-black bg-opacity-30 backdrop-blur-[15px] transition-transform ease-in-out duration-500 ${
        isVisible ? "" : "-translate-y-full"
      }`}
    >
      <CustomTooltip text="Home">
        <a
          href="#home"
          className="p-2 rounded-full text-white text-opacity-70 hover:bg-black hover:bg-opacity-30 hover:text-opacity-100"
        >
          <AiOutlineHome className="scale-150" />
        </a>
      </CustomTooltip>

      <CustomTooltip text="About">
        <a
          href="#about"
          className="p-2 rounded-full text-white text-opacity-70 hover:bg-black hover:bg-opacity-30 hover:text-opacity-100"
        >
          <AiOutlineUser className="scale-150" />
        </a>
      </CustomTooltip>

      <CustomTooltip text="Experience">
        <a
          href="#experience"
          className="p-2 rounded-full text-white text-opacity-70 hover:bg-black hover:bg-opacity-30 hover:text-opacity-100"
        >
          <AiOutlineLaptop className="scale-150" />
        </a>
      </CustomTooltip>

      <CustomTooltip text="Projects">
        <a
          href="#projects"
          className="p-2 rounded-full text-white text-opacity-70 hover:bg-black hover:bg-opacity-30 hover:text-opacity-100"
        >
          <AiOutlineProject className="scale-150" />
        </a>
      </CustomTooltip>

      <CustomTooltip text="Education">
        <a
          href="#education"
          className="p-2 rounded-full text-white text-opacity-70 hover:bg-black hover:bg-opacity-30 hover:text-opacity-100"
        >
          <AiOutlineBook className="scale-150" />
        </a>
      </CustomTooltip>

      <CustomTooltip text="Skills">
        <a
          href="#skills"
          className="p-2 rounded-full text-white text-opacity-70 hover:bg-black hover:bg-opacity-30 hover:text-opacity-100"
        >
          <AiOutlineTool className="scale-150" />
        </a>
      </CustomTooltip>

      <CustomTooltip text="Contact">
        <a
          href="#contact"
          className="p-2 rounded-full text-white text-opacity-70 hover:bg-black hover:bg-opacity-30 hover:text-opacity-100"
        >
          <AiOutlinePhone className="scale-150" />
        </a>
      </CustomTooltip>
    </nav>
  );
};
export default Navbar;
