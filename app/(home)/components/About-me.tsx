import React from "react";
import Image from "next/image";

const AboutMe: React.FC = () => {
  const Photos = [1, 2, 3, 4, 5, 6].map((n) => `/about/about_${n}.JPG`);

  return (
    <div className="h-screen flex flex-col justify-between p-4">
      {/* Text Section */}
      <div className="flex items-center justify-center h-[70vh] md:h-[50vh] mb-4">
        <div className="max-w-4xl w-full px-4 mx-auto text-center sm:max-w-5xl">
          <h2 className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-6xl mt-16 mb-4 w-full text-center text-accent">
            About Me
          </h2>
          <p className="text-sm md:text-xl py-2">
            Throughout my university journey, I am fortunate to have had
            practical experiences in data analysis, full-stack software
            engineering, and machine learning. I have consistently sought
            opportunities to apply my skills in varied contexts to solve
            real-world problems. I like to leverage technology to optimize
            everyday tasks and enhance the efficacy of routine processes.
          </p>
          <p className="text-sm md:text-xl py-2">
            As I advance in my career, I am eager to find opportunities that
            challenge me and allow me to contribute to innovative projects that
            have a meaningful impact. I am looking for roles that will utilize
            my technical skills and my ability, ensuring that I continue to grow
            both professionally and personally.
          </p>
          <p className="text-sm md:text-xl py-2">
            Outside work, I am deeply passionate about cooking and sports,
            particularly basketball and working out. Cooking for me is a
            creative outlet that allows me to experiment and adapt. The one
            thing that playing sports has taught me is that with dedication and
            hard work, it would always lead to tangible results.
          </p>
        </div>
      </div>
      {/* Image Gallery */}
      <div className="flex justify-center items-center h-[30vh] md:h-[50vh]">
        <div className="grid grid-cols-3 grid-rows-2 gap-2 max-w-6xl px-4 py-2 w-full h-full">
          {Photos.map((photo, index) => (
            <div key={index} className="relative w-full h-full">
              <Image
                src={photo}
                alt={`Image ${index + 1}`}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
