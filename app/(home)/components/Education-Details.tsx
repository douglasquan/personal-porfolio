import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "@/components/ui/li-icon";

interface DetailsProps {
  type: string;
  time: string;
  place: string;
  info: string;
}

const Details: React.FC<DetailsProps> = ({ type, time, place, info }) => {
  const ref = useRef<HTMLLIElement>(null);

  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 mx-auto flex flex-col items-center justify-between"
    >
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        {/* Degree */}
        <h3 className="text-xl sm:text-xl md:text-2xl lg:text-4xl font-bold mb-2 text-secondary dark:text-dark-secondary">
          {type}
        </h3>
        {/* Time and Place */}
        <span className="text-sm sm:text-md md:text-lg text-quaternary/75 dark:text-dark-quaternary/75">
          {time} | {place}
        </span>
        {/* Info */}
        <p className="text-quaternary dark:text-dark-quaternary py-2 font-medium w-full text-md md:text-2xl">
          {info}
        </p>
      </motion.div>
    </li>
  );
};

export default Details;
