// "use client";
// import React from "react";
// import StickyScroll from "@/components/ui/project-sticky-scroll-reveal";
// import Image from "next/image";
// import {
//   CardBody,
//   CardContainer,
//   CardItem
// } from "@/components/ui/3d-card-effect";
// import Link from "next/link";
// import Title from "./Title";

// const content = [
//   {
//     title: "Webite",
//     description:
//       "A food ordering application that allows passionate home cooks to sell their food and users to buy homemade meals. Idea inspired by the fact that I am a home cook who regularly sell homemade lunch boxes to my friends in university. It became one of my side hustles. and at the same time my friends can enjoy authentic and affordable meals.  ",
//     content: (
//       <div className="h-full w-full  flex items-center justify-center text-white">
//         <Image
//           src="/webite_thumbnail.png"
//           width={300}
//           height={300}
//           className="h-full w-full object-cover"
//           alt="webite thumbnail"
//         />
//       </div>
//     )
//   },
//   {
//     title: "MeetHomie",
//     description:
//       "An intuitive and easy-to-use scheduling app that allows user to schedule meetings with others. It streamlines the process of organizing meetings by enabling users to easily set up and coordinate meetings with their contacts.",
//     content: (
//       <div className="h-full w-full  flex items-center justify-center text-white">
//         <Image
//           src="/meethomie_thumbnail.png"
//           width={300}
//           height={300}
//           className="h-full w-full object-cover"
//           alt="MeetHomie thumbnail"
//         />
//       </div>
//     )
//   },
//   {
//     title: "Car Detecton",
//     description:
//       "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
//     content: (
//       <div className="h-full w-full  flex items-center justify-center text-white">
//         <Image
//           src="/auto_drive_thumbnail_2.png"
//           width={300}
//           height={300}
//           className="h-full w-full object-cover"
//           alt="linear board demo"
//         />
//       </div>
//     )
//   },
//   {
//     title: "Running out of content",
//     description:
//       "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
//     content: (
//       <div className="h-full w-full  flex items-center justify-center text-white">
//         <Image
//           src="/jp_transformer.png"
//           width={300}
//           height={300}
//           className="h-full w-full object-cover"
//           alt="linear board demo"
//         />
//       </div>
//     )
//   }
// ];
// export function Project() {
//   return (
//     <section id="projects" className="w-full">
//       <StickyScroll content={content} />
//     </section>
//   );
// }

"use client";
import React, { useState, useRef, useEffect } from "react";
import { LayoutGrid } from "@/components/ui/layout-grid";

export function Project() {
  return (
    <div className="pt-16 pb-10 h-screen">
      <h2 className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-6xl mt-8 mb-4 w-full text-center text-accent">
        Projects
      </h2>
      <div className="h-full pt-4 pb-20">
        <LayoutGrid cards={cards} />
      </div>
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-light-blue">Webite</p>
      <p className="font-normal text-base text-cadet-gray"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A food ordering app that allows passionate home cooks to sell their food
        and users to buy homemade meals. Idea inspired by the fact that I am a
        home cook who regularly sell homemade lunch boxes to my friends in
        university.
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-light-blue">J2C Translator</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A Transformer model for sentence-based Jyutping to Chinese Characters
        transliteration.
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-light-blue">Car Detection</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A Project for Car Detection. It uses YOLOv5, a pretrained model, to
        detect cars in images and classify car viewpoints.
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-light-blue">MeetHomie</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        An intuitive and easy-to-use scheduling app that allows users to
        schedule meetings with others. It streamlines the process of organizing
        meetings by enabling users to easily set up and coordinate meetings with
        their contacts.
      </p>
    </div>
  );
};
const SkeletonFive = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-light-blue">Peronal Website</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A personal website that showcases my projects, skills, and experiences.
        Built with Next.js, Tailwind CSS, and Framer Motion.
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-1",
    thumbnail: "/webite/logo_2.jpg",
    date: "Januaray, 2024"
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail: "/jyutping/jp_transformer.png",
    date: "December, 2023"
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail: "/car_detection/auto_drive_thumbnail_2.png",
    date: "April, 2024"
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-1",
    thumbnail: "/meethomie/landing.png",
    date: "Janurary, 2024"
  },
  {
    id: 5,
    content: <SkeletonFive />,
    className: "md:col-span-1",
    thumbnail: "/personal_website.png",
    date: "May, 2024"
  }
];
