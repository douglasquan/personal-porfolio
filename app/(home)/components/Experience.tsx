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
        Experience
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
            position="Full Stack Web Developer"
            company="Global Health Core Inc"
            companyLink="https://www.globalhealthcoreinc.com/"
            time="Mar 2024 - Present"
            address="Toronto, ON"
            work={`
            Develop a scalable MERN stack web application featuring a patient dashboard that centralizes health data for enhanced global health accessibility, integrating GraphQL for optimal performance.
          `}
          />

          <Details
            position="Development Engineer Intern (NLP, Machine Learning and LLM)"
            company="Lillup"
            companyLink="https://www.lillup.com/"
            time="Jan 2024 - Present"
            address="Remote"
            work={`
            Manage the end-to-end data pipeline, from sourcing to cleaning datasets and applying analytical techniques, contributing to a 23% improvement in LLM models’ accuracy and efficiency through iterative testing and tuning.
            
            Develop and integrate machine learning pipelines using TensorFlow and Scikit-learn, ensuring model scalability and deployment in production environments.
            `}
          />
          <Details
            position="Research Assistant"
            company="University of Toronto, Department of Economics"
            companyLink="https://ngn.artsci.utoronto.ca/HLVC/0_0_home.php"
            time="Sep 2023 - Present"
            address="Toronto, ON"
            work={`
            Utilized Cohere Classify to classify over 300,000 policy documents, enhancing data analysis precision.

            Leveraged Cohere Embed to generate text embeddings for policy documents, constructing mappings between different categorization systems.
            
            Analyzed datasets with Excel Pivot Tables to identify relationshps between different industry classification systems
            
            Developed Python scripts using Pandas and Seaborn to clean, preprocess, visualize, and analyze datasets
            
            Designed a web scraping mechanism in Python to collect industrial policies and patenting data from PKUlaw.com.
            
            Automated PDF to Excel data conversion with Python script, parsing text data for data analysis
            `}
          />
          <Details
            position="Research Assistant"
            company="University of Toronto, Department of Linguistics"
            companyLink="https://ngn.artsci.utoronto.ca/HLVC/0_0_home.php"
            time="Sep 2022 - Sep 2023"
            address="Toronto, ON"
            work={`
            Contributed in a Jyutping-to-Chinese transliteration project, focusing on data analysis, sourcing, and cleaning for an RNN model, achieved a character error rate (CER) of 0.21
            
            Developed Python scripts to automate data processing for 63 interview transcriptions by using specialized APIs.
            
            Developed a novel corpus-based imputation method to address transcription inconsistencies, improving data reliability.
            
            Recruited Torontonian participants who speak Cantonese as a heritage language for an interview
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
