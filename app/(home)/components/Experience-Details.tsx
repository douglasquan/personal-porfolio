import React, { useRef } from "react";
import { motion } from "framer-motion";
import { FaAngleRight } from "react-icons/fa6";
interface DetailsProps {
  position: string;
  company: string;
  companyLink: string;
  time: string;
  address: string;
  work: string;
}

const Details: React.FC<DetailsProps> = ({
  position,
  company,
  companyLink,
  time,
  address,
  work
}) => {
  const ref = useRef<HTMLLIElement>(null);

  // Assuming 'work' string entries are separated by newlines
  const workItems = work.split("\n").filter((item) => item.trim() !== "");

  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-full sm:w-4/5 md:w-3/4 lg:w-[70%] mx-auto flex flex-col"
    >
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="text-xl sm:text-xl md:text-2xl lg:text-4xl font-bold mb-2 text-secondary dark:text-dark-secondary">
          {position}
          <a
            href={companyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary dark:text-dark-secondary ml-1"
          >
            @{company}
          </a>
        </h3>
        <span className="text-sm sm:text-md md:text-lg text-quaternary/75 dark:text-dark-secondary/75">
          {time} | {address}
        </span>
        <ul className="text-quaternary dark:text-dark-quaternary list-none py-2 text-base sm:text-lg md:text-2xl">
          {workItems.map((item, index) => (
            <li key={index} className="flex items-start my-1">
              <FaAngleRight className="text-accent dark:text-dark-accent mt-1 mr-2 text-lg md:text-xl" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </li>
  );
};

export default Details;
