import { GetStaticProps, GetStaticPaths } from "next";
import { useRouter } from "next/router";
import projects from "@/public/projects.json";
import ImageSlider from "@/components/ui/image-slider-project"; // Adjust path as necessary
import TechnologyList from "./tech-stack";
import { IoMdArrowBack } from "react-icons/io";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FaRegCirclePlay, FaGithub } from "react-icons/fa6";

interface Feature {
  title: string;
  description: string;
}

interface DescriptionItem {
  heading: string;
  text: string;
}

interface Project {
  id: number;
  title: string;
  description: DescriptionItem[];
  images: string[];
  technology: string[];
  features?: Feature[];
  date: string;
  demoUrl: string;
  githubUrl: string;
}

interface ProjectDetailProps {
  project: Project;
}

const pageTransition = {
  initial: {
    opacity: 0,
    x: 300, // Start sliding in from the right
    scale: 0.8
  },
  animate: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20
    }
  },
  exit: {
    opacity: 0,
    x: -300, // Slide out to the left
    scale: 0.8,
    transition: {
      duration: 0.5
    }
  }
};

export default function ProjectDetail({ project }: ProjectDetailProps) {
  const router = useRouter();

  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const position = window.scrollY;
    setIsScrolled(position > 10); // Set to true if scrolled more than 10px
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const goBack = () => {
    router.push("/"); // Or `router.back()` to go to the previous page in history
  };

  // Handles navigation to the next or previous project
  const navigateProject = (direction: "next" | "prev") => {
    const currentIndex = projects.findIndex((p) => p.id === project.id);
    const nextIndex =
      direction === "next" ? currentIndex + 1 : currentIndex - 1;
    if (nextIndex >= 0 && nextIndex < projects.length) {
      router.push(`/projects/${projects[nextIndex].id.toString()}`);
    }
  };

  if (router.isFallback) {
    return <div className="text-center py-10">Loading...</div>;
  }

  // Prepare the images for the slider
  const images = project.images.map((url) => ({ url, alt: project.title }));

  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      className=" mx-auto px-4 py-12 sm:px-6 lg:px-72"
    >
      <button
        onClick={goBack}
        className={`fixed top-5 left-5 z-50 flex items-center text-ligtht font-bold py-3 px-5 rounded-full shadow-lg text-sm sm:text-base transition-colors duration-300
            ${
              isScrolled
                ? "bg-accent hover:bg-accent-700"
                : "bg-transparent hover:bg-accent text-primary  "
            }`}
        aria-label="Back to home"
      >
        <IoMdArrowBack className="mr-2 h-5 w-5" />
        Back
      </button>

      <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold my-6 text-center text-secondary">
        {project.title}
      </h1>
      <ImageSlider images={images} />

      {/* Overview Section */}
      <div className="my-4 sm:my-8 mx-4 sm:mx-6 md:mx-8 lg:mx-10">
        {project.description.map((item, index) => (
          <div key={index} style={{ whiteSpace: "pre-wrap" }} className="mb-4">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 text-secondary">
              {item.heading}
            </h2>
            <p className="text-base sm:text-lg text-primary">{item.text}</p>
          </div>
        ))}
      </div>

      {/* Main Features Section */}
      {project.features && project.features.length > 0 && (
        <div className="my-4 sm:my-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold my-4 sm:my-6 mx-4 sm:mx-6 md:mx-8 lg:mx-10 text-secondary">
            Main Features
          </h2>
          <div className="flex flex-col sm:flex-row justify-center flex-wrap -m-2">
            {project.features.map((feature, index) => (
              <div
                key={index}
                className="bg-light rounded-lg shadow-md m-4 p-4 max-w-sm w-full"
              >
                <h4 className="font-bold text-lg sm:text-xl mb-2 text-space-blue">
                  {feature.title}
                </h4>
                <p className="text-base sm:text-lg text-primary">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Technology Used */}
      <div className="my-4 sm:my-8 mx-auto max-w-4xl">
        <h3 className="text-2xl sm:text-3xl font-bold mb-3 text-center text-secondary">
          Tech Stack:
        </h3>
        <TechnologyList technologies={project.technology} />
      </div>

      {/* Demo and GitHub links */}
      <div className="flex flex-col items-center space-y-4 mt-6">
        <div className="flex flex-wrap justify-center space-x-4">
          <a
            href={project.demoUrl}
            className="btn-primary bg-light py-2 px-4 sm:py-3 sm:px-6 text-lg sm:text-xl rounded-lg inline-flex items-center justify-center"
          >
            <FaRegCirclePlay className="mr-2" aria-label="Play Icon" /> View
            Demo
          </a>
          <a
            href={project.githubUrl}
            className="btn-secondary bg-light py-2 px-4 sm:py-3 sm:px-6 text-lg sm:text-xl rounded-lg inline-flex items-center justify-center"
          >
            <FaGithub className="mr-2" aria-label="GitHub Icon" /> GitHub
          </a>
        </div>
      </div>

      {/* prev and next project */}
      <div className="flex justify-between mt-8">
        <button
          onClick={() => navigateProject("prev")}
          className="btn-secondary bg-accent text-light p-3 sm:p-4 rounded-md text-base sm:text-lg"
        >
          Previous Project
        </button>
        <button
          onClick={() => navigateProject("next")}
          className="btn-secondary bg-accent text-light p-3 sm:p-4 rounded-md text-base sm:text-lg"
        >
          Next Project
        </button>
      </div>
    </motion.div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = projects.map((project: Project) => ({
    params: { id: project.id.toString() }
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id;
  if (!id) {
    return { notFound: true };
  }

  const project = projects.find((p) => p.id.toString() === id.toString());
  if (!project) {
    return { notFound: true };
  }

  return { props: { project } };
};

function formatDescriptionText(text: string): React.ReactNode {
  return text.split("\n\n").map((paragraph: string, idx: number) => {
    const trimmedParagraph = paragraph.trim();
    console.log("Paragraph:", trimmedParagraph); // Log each trimmed paragraph
    if (trimmedParagraph.startsWith("-")) {
      return (
        <ul key={idx}>
          {trimmedParagraph.split("\n").map((item: string, itemIdx: number) => {
            const trimmedItem = item.trim();
            const indexOfColon = trimmedItem.indexOf(":");
            if (indexOfColon === -1) {
              return <li key={itemIdx}>{trimmedItem.substring(1)}</li>; // handle no colon case
            }
            console.log("List item:", trimmedItem); // Log each list item
            return (
              <li key={itemIdx}>
                <strong>{trimmedItem.substring(1, indexOfColon + 1)}</strong>
                {trimmedItem.substring(indexOfColon + 2)}
              </li>
            );
          })}
        </ul>
      );
    } else {
      return <p key={idx}>{trimmedParagraph}</p>;
    }
  });
}
