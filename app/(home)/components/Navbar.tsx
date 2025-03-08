import Link from "next/link";
import React, { useState } from "react";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineTool,
  AiOutlineProject,
  AiOutlinePhone,
  AiOutlineBook,
  AiOutlineLaptop
} from "react-icons/ai";
import { SiGithub, SiLinkedin, SiInstagram } from "react-icons/si";
import ThemeToggle from "@/components/ui/ThemeSwitch";

interface NavbarProps {
  isVisible: boolean;
}

// Navigation items with their names and icons
const navItems = [
  { name: "Home", icon: AiOutlineHome, href: "#home" },
  { name: "About", icon: AiOutlineUser, href: "#about" },
  { name: "Experience", icon: AiOutlineLaptop, href: "#experience" },
  { name: "Projects", icon: AiOutlineProject, href: "#projects" },
  { name: "Education", icon: AiOutlineBook, href: "#education" },
  { name: "Skills", icon: AiOutlineTool, href: "#skills" },
  { name: "Contact", icon: AiOutlinePhone, href: "#contact" }
];

// Social links for the right side
const socialLinks = [
  {
    name: "GitHub",
    icon: SiGithub,
    href: "https://github.com/douglasquan"
  },
  {
    name: "LinkedIn",
    icon: SiLinkedin,
    href: "https://www.linkedin.com/in/douglas-quan/"
  },
  {
    name: "Instagram",
    icon: SiInstagram,
    href: "https://instagram.com/quan.douglas"
  }
];

const Navbar: React.FC<NavbarProps> = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="bg-black bg-opacity-30 backdrop-blur-[15px] py-4 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* DQ Initials on the left */}
          <Link href="#home" className="text-2xl font-bold text-primary">
            <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              DQ
            </span>
          </Link>

          {/* Navigation items in the center */}
          <nav className="hidden lg:flex items-center justify-center space-x-1">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <a
                  key={index}
                  href={item.href}
                  className="p-2 rounded-md text-white text-opacity-70 hover:bg-black hover:bg-opacity-30 hover:text-opacity-100 flex items-center gap-1"
                >
                  <Icon className="text-xl" />
                  <span>{item.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Social links and theme toggle on the right */}
          <div className="flex items-center gap-4">
            {/* Mobile menu button - shown on smaller screens */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 rounded-md text-white text-opacity-70 hover:bg-black hover:bg-opacity-30 hover:text-opacity-100"
              aria-label="Toggle mobile menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-opacity-70 hover:text-opacity-100"
                >
                  <Icon className="text-xl" />
                </a>
              );
            })}
            <ThemeToggle />
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      <div
        className={`lg:hidden bg-black bg-opacity-90 backdrop-blur-[10px] transition-all duration-300 ease-in-out overflow-hidden ${
          mobileMenuOpen ? "max-h-screen py-4" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col items-center gap-3 px-6">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <a
                key={index}
                href={item.href}
                className="w-full p-3 rounded-md text-white hover:bg-black hover:bg-opacity-50 flex items-center gap-3"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Icon className="text-xl" />
                <span>{item.name}</span>
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
