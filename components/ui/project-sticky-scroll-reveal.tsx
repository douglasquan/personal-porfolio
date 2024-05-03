import React, { useEffect, useState, useRef } from "react";
import { motion, useViewportScroll } from "framer-motion";
import Title from "@/app/(home)/components/Title";

const backgroundColors = [
  "var(--slate-900)",
  "var(--black)",
  "var(--neutral-900)"
];

const StickyScroll = ({
  content,
  contentClassName
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode;
  }[];
  contentClassName?: string;
}) => {
  const { scrollY } = useViewportScroll();
  const [activeCard, setActiveCard] = useState(0);
  const [backgroundStyle, setBackgroundStyle] = useState({});
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2; // Center of the viewport
      const cardHeights = cardRefs.current.map(card => card?.offsetTop ?? 0);
      const closest = cardHeights.reduce((closestIndex, currentHeight, index) => {
        return Math.abs(currentHeight - scrollPosition) < Math.abs(cardHeights[closestIndex] - scrollPosition) ? index : closestIndex;
      }, 0);
      setActiveCard(closest);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setBackgroundStyle({
      background: backgroundColors[activeCard % backgroundColors.length]
    });
  }, [activeCard]);

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <Title
        text="Projects"
        className="text-2xl font-bold text-slate-100 -rotate-6 py-12"
      />
      <div
        className="w-full flex justify-center relative space-x-12 rounded-md p-10"
        style={backgroundStyle}
      >
        <div className="relative flex items-start px-8 space-x-12">
          <div className="flex-1 w-[600px]">
            {content.map((item, index) => (
              <div key={item.title + index} ref={el => { cardRefs.current[index] = el; }} className="my-20">
                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                  className="text-4xl font-bold text-slate-100"
                >
                  {item.title}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                  className="text-2xl text-slate-300 mt-10"
                >
                  {item.description}
                </motion.p>
              </div>
            ))}
            <div className="h-40" />
          </div>
        </div>
        <motion.div
          className={`hidden lg:block h-[480px] w-[600px] rounded-md sticky top-10 overflow-hidden ${contentClassName}`}
        >
          {content[activeCard]?.content ?? null}
        </motion.div>
      </div>
    </div>
  );
};

export default StickyScroll;
