import React, { useRef, RefObject } from "react";
import { motion, useScroll } from "framer-motion";

interface LiIconProps {
  reference: RefObject<HTMLElement>;
}

const LiIcon: React.FC<LiIconProps> = ({ reference }) => {
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ["center end", "center center"]
  });

  return (
    <figure className="absolute left-12  stroke-black">
      <svg className="-rotate-90" width="75" height="75" viewBox="0 0 100 100">
        <circle
          cx="75"
          cy="50"
          r="20"
          className="stroke-gray stroke-[5px] fill-none"
        />
        <motion.circle
          cx="75"
          cy="50"
          r="20"
          className="stroke-white stroke-[5px] fill-light"
          style={{
            pathLength: scrollYProgress
          }}
        />
        <circle
          cx="75"
          cy="50"
          r="10"
          className="animate-pulse stroke-1 fill-info"
        />
      </svg>
    </figure>
  );
};

export default LiIcon;
