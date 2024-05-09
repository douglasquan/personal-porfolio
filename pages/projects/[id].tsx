import { GetStaticProps, GetStaticPaths } from "next";
import { useRouter } from "next/router";
import projects from "@/public/projects.json";
import ImageSlider from "@/components/ui/image-slider-project"; // Adjust path as necessary
import TechnologyList from "./tech-stack";
import { IoMdArrowBack } from "react-icons/io";
import { motion } from "framer-motion";

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
  features: Feature[];
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
      className="mx-auto px-4 py-12 sm:px-6 lg:px-8"
    >
      <button
        onClick={goBack}
        className="fixed top-5 left-5 z-50 flex items-center bg-primary-500 hover:bg-primary-700 text-white font-bold py-3 px-5 rounded-full shadow-lg text-sm sm:text-base"
        aria-label="Back to home"
      >
        <IoMdArrowBack className="mr-2 h-5 w-5" />
        Back
      </button>

      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-center text-primary">
        {project.title}
      </h1>
      <ImageSlider images={images} />

      {/* Overview Section */}
      <div className="my-8 mx-4 sm:mx-64">
        {project.description.map((item, index) => (
          <div key={index} style={{ whiteSpace: "pre-wrap" }} className="mb-4">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 text-primary">
              {item.heading}
            </h2>
            {item.text}
          </div>
        ))}
      </div>

      {/* Main Features Section */}
      <div className="my-12">
        <h3 className="text-3xl  font-bold my-8 mx-64 text-primary">
          Main Features
        </h3>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mt-6">
          {project.features.map((feature, index) => (
            <div
              key={index}
              className="bg-cadet-gray rounded-lg shadow-md p-4 max-w-sm w-full"
            >
              <h4 className="font-bold text-xl mb-2 text-space-blue">
                {feature.title}
              </h4>
              <p className="text-gray-700 text-base">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Technology Used */}
      <div className="my-12 mx-auto max-w-4xl">
        <h3 className="text-3xl font-bold mb-3 text-center">Tech Stack:</h3>
        <TechnologyList technologies={project.technology} />
      </div>

      {/* Demo and GitHub links */}
      <div className="flex flex-col items-center space-y-4 mt-6">
        <div className="flex justify-center space-x-4">
          <a
            href={project.demoUrl}
            className="btn-primary bg-light-blue p-6 text-xl rounded-lg"
          >
            View Demo
          </a>
          <a
            href={project.githubUrl}
            className="btn-secondary bg-light-blue p-6 text-xl rounded-lg"
          >
            GitHub
          </a>
        </div>
      </div>

      {/* prev and next project */}
      <div className="flex justify-between mt-8">
        <button
          onClick={() => navigateProject("prev")}
          className="btn-secondary bg-secondary  p-4 rounded-md"
        >
          Previous Project
        </button>
        <button
          onClick={() => navigateProject("next")}
          className="btn-secondary bg-secondary  p-4 rounded-md"
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
