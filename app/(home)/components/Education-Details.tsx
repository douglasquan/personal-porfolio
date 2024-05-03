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
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between"
    >
      {/* <LiIcon reference={ref} /> */}

      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="py-2 capitalize font-bold text-2xl">{type}</h3>
        <span className="capitalize font-medium text-neutral/75">
          {time} | {place}
        </span>
        <p className="py-2 font-medium w-full">{info}</p>
      </motion.div>
    </li>
  );
};

export default Details;
