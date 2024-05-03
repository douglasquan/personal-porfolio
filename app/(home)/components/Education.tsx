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
    <div className="pt-16 pb-10 h-screen">
      <h2 className="font-bold text-6xl mt-48 mb-20 w-full text-center text-accent">
        Education
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative">
        {/* <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-black origin-top"
        /> */}

        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            type="Honours Bachelor of Science, Computer Science Specialist & Mathematics Minor "
            time="Sep 2021 - May 2025"
            place="University of Toronto "
            info="CGPA: 3.51/4.0 Relevant Coursework: Data Structures, Software development, Web Development, Database Management, Systems
						Programming, Artificial Intelligence, Machine Learning, Neural Network and Deep Learning, Information Security,
						Computer Vision, Computer Architecture, Computer Organization, Operating Systems, Computer Networks"
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
