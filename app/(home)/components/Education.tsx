"use client";

import React, { useRef } from "react";
import Details from "./Education-Details";
import { motion, useScroll } from "framer-motion";

const Education: React.FC = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"]
  });

  return (
    <div className="">
      <h2 className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-6xl mt-16 mb-4 w-full text-center text-accent">
        Education
      </h2>

      <div ref={ref} className="w-full sm:w-3/4 mx-auto relative p-2">
        <ul className="w-full flex flex-col items-start justify-between ml-0 sm:ml-4">
          <Details
            type="Honours Bachelor of Science, Computer Science Specialist & Mathematics Minor"
            time="Sep 2021 - May 2025"
            place="University of Toronto"
            info="CGPA: 3.51/4.0. Relevant Coursework: Data Structures, Software Development, Web Development, Database Management, Systems Programming, Artificial Intelligence, Machine Learning, Neural Network and Deep Learning, Information Security, Computer Vision, Computer Architecture, Computer Organization, Operating Systems, Computer Networks"
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
