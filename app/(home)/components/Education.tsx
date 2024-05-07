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
    <div className="pt-12 pb-6 sm:pt-16 sm:pb-10">
      <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold mt-12 sm:mt-24 md:mt-48 mb-10 sm:mb-20 text-center text-accent">
        Education
      </h2>

      <div ref={ref} className="w-full sm:w-3/4 mx-auto relative">
        {/* <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-0 sm:left-9 top-0 w-[2px] sm:w-[4px] h-full bg-black origin-top"
        /> */}

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
