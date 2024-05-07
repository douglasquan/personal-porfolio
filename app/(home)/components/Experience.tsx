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
    <div className="pt-16 pb-10">
      <h2 className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-6xl mt-8 mb-8 w-full text-center text-accent">
        Experience
      </h2>

      <div
        ref={ref}
        className="w-[75%] mx-auto relative "
        // style={{ minHeight: "500px" }}
      >
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-info origin-top"
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            position="Research Assistant"
            company="University of Toronto, Department of Linguistics"
            companyLink="https://ngn.artsci.utoronto.ca/HLVC/0_0_home.php"
            time="Sep 2022 - Sep 2023"
            address="Toronto, ON"
            work={`
            Contributed in a Jyutping-to-Chinese transliteration project, focusing on data analysis, sourcing, and cleaning for an RNN model, achieved a character error rate (CER) of 0.21
            Developed Python scripts to automate repetitive tasks and data entry process with PyCantonese and ELAN API on 63 Cantonese interview transcriptions
            Utilized FileZilla for file management of interview data, and ELAN for NLP analysis
            Ideated and Developed a corpus-based imputation method to solve inconsistency in transcriptions
            Recruited Torontonian participants who speak Cantonese as a heritage language for an interview
            `}
          />

          <Details
            position="Research Assistant"
            company="University of Toronto, Department of Economics"
            companyLink="https://ngn.artsci.utoronto.ca/HLVC/0_0_home.php"
            time="Sep 2023 - Present"
            address="Toronto, ON"
            work={`
            Developed a web scraping mechanism in Python to scrape industrial policies and patenting data from PKUlaw.com
            Leveraged Cohere Classify, a large language model (LLM), to classify over 300k policy documents effectively
            Applied linear regression to quantify the temporal and spatial influence of policy documents
            Analyzed datasets with Excel Pivot Tables to identify relationshps between different industry classification systems
            Wrote Python scripts using Pandas and Seaborn to clean, preprocess, visualize, and analyze datasets"
            `}
          />

          <Details
            position="Development Engineer Intern (NLP, Machine Learning and LLM)"
            company="Lillup"
            companyLink="https://www.lillup.com/"
            time="Jan 2024 - Present"
            address="Remote"
            work={`
            Assisted in the development and optimization of NLP, ML, and LLM algorithms and applications
            Participated in the collection, cleaning, and analysis of large datasets to train and test AI models
            Contributed to the implementation of machine learning pipelines and model deployment strategies
            Collaborated with the team to conduct experiments and evaluate the performance of AI models
            `}
          />

          <Details
            position="Full Stack Web Developer"
            company="Global Health Core Inc"
            companyLink="https://www.globalhealthcoreinc.com/"
            time="Mar 2024 - Present"
            address="Toronto, ON"
            work={`
            incoming 
            `}
          />
        </ul>
      </div>

      {/* <h1 className="text-primary">This text will use the primary color</h1>
      <p className="text-secondary">This text will use the secondary color</p>
      <p className="text-accent">This text will use the accent color</p>
      <p className="text-neutral">This text will use the neutral color</p>
      <p className="text-base-100">This text will use the base color</p>
      <p className="text-info">This text will use the info color</p> */}
    </div>
  );
};

export default Experience;
