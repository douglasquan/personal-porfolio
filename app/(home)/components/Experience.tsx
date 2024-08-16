"use client";

import React, { useRef } from "react";
import Details from "./Experience-Details"; // Adjust the import path as necessary
import { motion, useScroll } from "framer-motion";

const Experience: React.FC = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"]
  });

  return (
    <div className="">
      <h2 className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-6xl mt-16 mb-4 w-full text-center text-primary dark:text-dark-primary">
        Experiences
      </h2>

      <div
        ref={ref}
        className="w-[75%] mx-auto relative pt-2"
        // style={{ minHeight: "500px" }}
      >
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-info origin-top"
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            position="Functional Analyst Intern, Model Governance"
            company="Canadian Tire Corporation"
            companyLink=""
            time="Sep 2024 - Dec 2024"
            address="Toronto, ON"
            work={``}
          />
          <Details
            position="Research Assistant"
            company="University of Toronto, Department of Economics"
            companyLink=""
            time="Sep 2023 - Present"
            address="Toronto, ON"
            work={`
            `}
          />
          <Details
            position="Full Stack Web Developer"
            company="Global Health Core Inc"
            companyLink="https://www.globalhealthcoreinc.com/"
            time="Mar 2024 - Aug 2024"
            address="Toronto, ON"
            work={`
          `}
          />

          <Details
            position="Machine Learning Engineer Intern"
            company="Lillup"
            companyLink="https://www.lillup.com/"
            time="Jan 2024 - May 2024"
            address="Remote"
            work={`

            `}
          />

          <Details
            position="Research Assistant"
            company="University of Toronto, Department of Linguistics"
            companyLink="https://ngn.artsci.utoronto.ca/HLVC/0_0_home.php"
            time="Sep 2022 - Sep 2023"
            address="Toronto, ON"
            work={`

            `}
          />
        </ul>
      </div>

      {/* <h1 className="text-primary">This text will use the primary color</h1>
      <p className="text-secondary">This text will use the secondary color</p>
      <p className="text-accent">This text will use the accent color</p>
      <p className="text-tertiary">This text will use the tertiary color</p>
      <p className="text-quaternary">This text will use the quaternary color</p>
      <p className="text-info">This text will use the info color</p> */}
    </div>
  );
};

export default Experience;
