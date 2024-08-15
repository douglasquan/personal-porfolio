import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const AboutMe: React.FC = () => {
  const Photos = [1, 2].map((n) => `/about/about_me_${n}.JPEG`);

  return (
    <div className=" flex flex-col justify-between">
      {/* Text Section */}
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
        className="flex items-center justify-center mb-4"
      >
        <div className="max-w-4xl w-full px-4 mx-auto text-left sm:max-w-5xl">
          <h2 className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-6xl mt-16 mb-4 w-full text-center text-primary dark:text-dark-primary">
            About Me
          </h2>
          <p className="text-quaternary dark:text-dark-quaternary text-lg md:text-2xl py-2">
          📚 Hi! I am Douglas, currently a 4th-year student at the University of Toronto studying Computer Science and Mathematics.
          </p>

          <p className="text-quaternary dark:text-dark-quaternary text-lg md:text-2xl py-2">
          🧑‍💻 For the last couple of years, I am fortunate to have had practical experiences in data analysis, software engineering, and
            machine learning. 
          </p>
          <p className="text-quaternary dark:text-dark-quaternary text-lg md:text-2xl py-2">
          🎯 As I advance in my career, my aspiration is to find opportunities that challenge me and allow me to contribute to innovative projects that have a meaningful impact. 
          </p>
          <p className="text-quaternary dark:text-dark-quaternary text-lg md:text-2xl py-2">
            🍳 Outside work, I am deeply passionate about cooking. I started a
            small business at University by selling homemade lunchboxes to my
            friends in an affordable price.
          </p>
          <p className="text-quaternary dark:text-dark-quaternary text-lg md:text-2xl py-2">
            🏀 I also love playing sports. Feel free to hit me up if you want to
            play basketball or work out together!
          </p>
        </div>
      </motion.div>
      {/* Image Gallery */}
      <div className="flex justify-center items-center h-[30vh] md:h-[70vh]">
        <div className="flex flex-row w-full md:w-9/12 h-full">
          {Photos.map((photo, index) => (
            <div key={index} className="relative w-full h-full">
              <div
                style={{
                  width: "100%",
                  paddingBottom: "100%", // This percentage sets the aspect ratio (16:9 in this case)
                  position: "relative"
                }}
              >
                <Image
                  src={photo}
                  alt={`Image ${index + 1}`}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center"
                  }}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
