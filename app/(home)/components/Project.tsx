"use client";
import React from "react";
import { LayoutGrid } from "@/components/ui/layout-grid";

export function Project() {
  return (
    <div className="h-screen">
      <h2 className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-6xl mt-16 mb-4 w-full text-center text-accent">
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
      <p className="font-bold text-4xl text-tertiary">WeBite</p>
      <p className="font-normal text-base text-cadet-gray"></p>
      <p className="font-normal text-base my-4 max-w-lg text-white">
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
      <p className="font-bold text-4xl text-light-blue">J2C Translator</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A Transformer model for sentence-based Jyutping to Chinese Characters
        transliteration.
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
    thumbnail: "/meethomie/landing.png",
    date: "Januaray, 2024"
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
    thumbnail: "/jyutping/jp_transformer.png",
    date: "December, 2023"
  },
  {
    id: 5,
    content: <SkeletonFive />,
    className: "md:col-span-1",
    thumbnail: "/personal-portfolio(2).png",
    date: "May, 2024"
  }
];
